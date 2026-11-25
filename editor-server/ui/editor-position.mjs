// Retain logical lines/columns rather than raw character offsets across revisions.
const at = (text, offset) => {
  const lines = text.slice(0, offset).split("\n");
  return { line: lines.length - 1, column: lines.at(-1).length };
};
export function rememberPosition(editor, lineHeight) {
  return {
    lines: editor.value.split("\n"),
    start: at(editor.value, editor.selectionStart),
    end: at(editor.value, editor.selectionEnd),
    direction: editor.selectionDirection,
    top: Math.floor(editor.scrollTop / lineHeight),
    remainder: editor.scrollTop % lineHeight,
    left: editor.scrollLeft,
    lineHeight,
  };
}
export function restorePosition(editor, saved) {
  const lines = editor.value.split("\n");
  const mapLine = (line) => {
    const anchor = saved.lines[line];
    // Prefer the nearest matching nonblank line when earlier lines were inserted.
    const matches = anchor?.trim()
      ? lines.flatMap((text, i) => (text === anchor ? [i] : []))
      : [];
    return matches.length
      ? matches.reduce((a, b) =>
          Math.abs(a - line) <= Math.abs(b - line) ? a : b,
        )
      : Math.min(line, lines.length - 1);
  };
  const offset = ({ line, column }) => {
    const target = mapLine(line);
    return (
      lines.slice(0, target).reduce((n, text) => n + text.length + 1, 0) +
      Math.min(column, lines[target].length)
    );
  };
  editor.setSelectionRange(
    offset(saved.start),
    offset(saved.end),
    saved.direction,
  );
  editor.scrollTop = mapLine(saved.top) * saved.lineHeight + saved.remainder;
  editor.scrollLeft = saved.left;
}
