const lineStart = (text, position) =>
  position === 0 ? 0 : text.lastIndexOf("\n", position - 1) + 1;
const lineEnd = (text, position) => {
  const newline = text.indexOf("\n", position);
  return newline < 0 ? text.length : newline + 1;
};

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
      event.shiftKey ||
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
      const range = selectLines(
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
