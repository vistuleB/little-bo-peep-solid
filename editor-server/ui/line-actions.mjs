const lineStart = (text, position) =>
  position === 0 ? 0 : text.lastIndexOf("\n", position - 1) + 1;
const lineEnd = (text, position) => {
  const newline = text.indexOf("\n", position);
  return newline < 0 ? text.length : newline + 1;
};

export function retractLines(text, start, end, top = false) {
  if (start === end) return { start, end };
  if (top) return { start: Math.min(end, lineEnd(text, start)), end };
  const last = text[end - 1] === "\n" ? end - 1 : end;
  return { start, end: Math.max(start, lineStart(text, last)) };
}

export function selectLines(text, start, end, up = false) {
  const first = lineStart(text, start);
  const last = end > start && text[end - 1] === "\n" ? end - 1 : end;
  const bottom = lineEnd(text, last);
  if (up)
    return {
      start: first ? lineStart(text, first - 1) : 0,
      end: start === end ? bottom : end,
    };
  const lastIsFull =
    end > start && end === bottom && start <= lineStart(text, last);
  return { start: first, end: lastIsFull ? lineEnd(text, bottom) : bottom };
}

// Swap whole logical lines, preserving the selection's offsets within the block.
// The replacement excludes the region's final separator so EOF needs no special
// insertion/deletion of newlines. A terminal empty line is a movable line too.
export function moveLines(text, start, end, up = false) {
  const lines = text.split("\n");
  const starts = [];
  let offset = 0;
  for (const line of lines) {
    starts.push(offset);
    offset += line.length + 1;
  }
  const row = (position) => text.slice(0, position).split("\n").length - 1;
  const first = row(start);
  const last = row(end > start && text[end - 1] === "\n" ? end - 1 : end);
  if (up ? first === 0 : last === lines.length - 1) return null;
  const lo = up ? first - 1 : first;
  const hi = up ? last : last + 1;
  const block = lines.slice(first, last + 1);
  const replacement = up
    ? [...block, lines[first - 1]]
    : [lines[last + 1], ...block];
  const delta = up
    ? -(lines[first - 1].length + 1)
    : lines[last + 1].length + 1;
  return {
    from: starts[lo],
    to: starts[hi] + lines[hi].length,
    text: replacement.join("\n"),
    start: start + delta,
    end: Math.min(text.length, end + delta),
  };
}

export function commentLines(text, start, end) {
  const from = lineStart(text, start);
  const last = end > start && text[end - 1] === "\n" ? end - 1 : end;
  const newline = text.indexOf("\n", last);
  const to = newline < 0 ? text.length : newline;
  const lines = text.slice(from, to).split("\n");
  const nonblank = lines.filter((line) => !/^[ \t]*$/.test(line));
  if (!nonblank.length) return null;
  const uncomment = nonblank.every((line) => /^[ \t]*!!/.test(line));
  // Writerly indentation uses spaces. Insert at one shared four-space level,
  // leaving each line's remaining indentation after the marker untouched.
  const column =
    Math.floor(
      Math.min(...nonblank.map((line) => line.match(/^ */)[0].length)) / 4,
    ) * 4;
  const edits = [];
  let offset = from;
  const replacement = lines.map((line) => {
    const originalLength = line.length;
    if (!/^[ \t]*$/.test(line)) {
      const at = uncomment ? line.match(/^[ \t]*/)[0].length : column;
      const removed = uncomment ? (line[at + 2] === " " ? 3 : 2) : 0;
      const added = uncomment ? "" : "!! ";
      edits.push({ at: offset + at, removed, added: added.length });
      line = line.slice(0, at) + added + line.slice(at + removed);
    }
    offset += originalLength + 1;
    return line;
  });
  const map = (position) =>
    position +
    edits.reduce(
      (delta, edit) =>
        position >= edit.at
          ? delta + edit.added - Math.min(edit.removed, position - edit.at)
          : delta,
      0,
    );
  return {
    from,
    to,
    text: replacement.join("\n"),
    start: map(start),
    end: map(end),
  };
}

// The source textarea has wrapping disabled, so logical rows match visual rows.
function lineViewport(editor) {
  const style = editor.ownerDocument.defaultView.getComputedStyle(editor);
  const height =
    parseFloat(style.lineHeight) || parseFloat(style.fontSize) * 1.2;
  const padding = parseFloat(style.paddingTop) || 0;
  const row = (position) =>
    editor.value.slice(0, position).split("\n").length - 1;
  const top = (position) => padding + row(position) * height;
  return { height, padding, row, top };
}

function revealSelectionEnd(editor, up) {
  const { height, padding, row } = lineViewport(editor);
  const lastRow = editor.value.split("\n").length - 1;
  const end = editor.selectionEnd;
  const selectedEnd =
    end > editor.selectionStart && editor.value[end - 1] === "\n"
      ? end - 1
      : end;
  const target = up
    ? Math.max(0, row(editor.selectionStart) - 1)
    : Math.min(lastRow, row(selectedEnd) + 1);
  const top = padding + target * height;
  if (top < editor.scrollTop) editor.scrollTop = top;
  else if (top + height > editor.scrollTop + editor.clientHeight)
    editor.scrollTop = top + height - editor.clientHeight;
}

function dropSelection(editor) {
  const { top, height } = lineViewport(editor);
  const start = editor.selectionStart,
    end = editor.selectionEnd;
  const visible = (position) =>
    top(position) >= editor.scrollTop &&
    top(position) + height <= editor.scrollTop + editor.clientHeight;
  const active = editor.selectionDirection === "backward" ? start : end;
  const other = active === start ? end : start;
  const distance = (position) =>
    Math.max(
      editor.scrollTop - top(position),
      top(position) + height - editor.scrollTop - editor.clientHeight,
      0,
    );
  const caret = visible(active)
    ? active
    : visible(other)
      ? other
      : distance(active) <= distance(other)
        ? active
        : other;
  const scroll = editor.scrollTop,
    left = editor.scrollLeft;
  editor.setSelectionRange(caret, caret);
  editor.scrollTop = scroll;
  editor.scrollLeft = left;
  if (!visible(caret)) {
    if (top(caret) < scroll) editor.scrollTop = top(caret);
    else editor.scrollTop = top(caret) + height - editor.clientHeight;
  }
}

export function installLineActions(editor) {
  const win = editor.ownerDocument.defaultView;
  let leftOption = false;
  win.addEventListener(
    "keydown",
    (event) => {
      if (event.code === "AltLeft") leftOption = true;
      if (!event.altKey) leftOption = false;
    },
    true,
  );
  win.addEventListener(
    "keyup",
    (event) => {
      if (event.code === "AltLeft" || !event.altKey) leftOption = false;
    },
    true,
  );
  win.addEventListener("blur", () => {
    leftOption = false;
  });
  editor.addEventListener("keydown", (event) => {
    if (event.isComposing || editor.readOnly || editor.disabled) return;
    if (
      event.key === "Escape" &&
      editor.selectionStart !== editor.selectionEnd
    ) {
      event.preventDefault();
      dropSelection(editor);
      return;
    }
    if (
      event.metaKey &&
      !event.ctrlKey &&
      !event.altKey &&
      (event.key === "/" || (event.code === "Slash" && !event.shiftKey))
    ) {
      event.preventDefault();
      const start = editor.selectionStart,
        end = editor.selectionEnd;
      const edit = commentLines(editor.value, start, end);
      if (!edit) return;
      const direction = editor.selectionDirection;
      const top = editor.scrollTop,
        left = editor.scrollLeft;
      editor.setSelectionRange(edit.from, edit.to);
      if (editor.ownerDocument.execCommand("insertText", false, edit.text))
        editor.setSelectionRange(edit.start, edit.end, direction);
      else editor.setSelectionRange(start, end, direction);
      editor.scrollTop = top;
      editor.scrollLeft = left;
      return;
    }
    if (
      !leftOption ||
      !event.altKey ||
      event.metaKey ||
      event.ctrlKey ||
      (event.shiftKey && !["KeyJ", "KeyK"].includes(event.code)) ||
      event.isComposing ||
      editor.readOnly ||
      editor.disabled
    )
      return;
    if (!["KeyJ", "KeyK", "ArrowUp", "ArrowDown"].includes(event.code)) return;
    event.preventDefault();
    const start = editor.selectionStart,
      end = editor.selectionEnd;
    if (event.code === "KeyJ" || event.code === "KeyK") {
      if (event.shiftKey && start === end) return;
      const range = (event.shiftKey ? retractLines : selectLines)(
        editor.value,
        start,
        end,
        event.code === "KeyJ",
      );
      editor.setSelectionRange(
        range.start,
        range.end,
        event.code === "KeyJ" ? "backward" : "forward",
      );
      revealSelectionEnd(editor, event.code === "KeyJ");
      return;
    }
    const edit = moveLines(editor.value, start, end, event.code === "ArrowUp");
    if (!edit) return;
    const direction = editor.selectionDirection;
    editor.setSelectionRange(edit.from, edit.to);
    // Keep the native undo transaction used by Tab and Return.
    if (editor.ownerDocument.execCommand("insertText", false, edit.text))
      editor.setSelectionRange(edit.start, edit.end, direction);
    else editor.setSelectionRange(start, end, direction);
  });
}
