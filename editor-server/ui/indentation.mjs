// Describe a single native edit so indentation remains one undoable action.
export function indentationEdit(value, start, end, outdent = false) {
  if (start === end && !outdent)
    return {
      from: start,
      to: end,
      text: "    ",
      start: start + 4,
      end: end + 4,
    };
  const from = start === 0 ? 0 : value.lastIndexOf("\n", start - 1) + 1;
  // A selection ending at the next line's start does not include that line.
  const last = end > start && value[end - 1] === "\n" ? end - 1 : end;
  const newline = value.indexOf("\n", last);
  const to = newline < 0 ? value.length : newline;
  const lines = value.slice(from, to).split("\n");
  let offset = from;
  const edits = lines.map((line) => {
    const removed = outdent ? line.match(/^(?:\t| {1,4})/)?.[0].length || 0 : 0;
    const edit = { offset, removed, added: outdent ? 0 : 4 };
    offset += line.length + 1;
    return edit;
  });
  const map = (position) =>
    position +
    edits.reduce(
      (delta, edit) =>
        edit.offset <= position
          ? delta + edit.added - Math.min(edit.removed, position - edit.offset)
          : delta,
      0,
    );
  return {
    from,
    to,
    text: lines
      .map((line, i) =>
        outdent ? line.slice(edits[i].removed) : "    " + line,
      )
      .join("\n"),
    start: map(start),
    end: map(end),
  };
}
