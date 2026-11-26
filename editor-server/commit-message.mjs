import path from "node:path";

// Summarize the first changed line, keeping the excerpt near the actual edit.
export function editorCommitMessage(changes, originals) {
  const changed = changes.filter(
    ({ file, content }) => originals.get(file) !== content,
  );
  const { file, content } = changed[0];
  const before = originals.get(file).split("\n");
  const after = content.split("\n");
  let line = 0;
  while (
    line < before.length &&
    line < after.length &&
    before[line] === after[line]
  )
    line++;
  const oldLine = before[line] || "";
  const newLine = after[line] || "";
  let column = 0;
  while (
    column < oldLine.length &&
    column < newLine.length &&
    oldLine[column] === newLine[column]
  )
    column++;
  // Include a little shared context so a one-letter correction remains legible.
  const start = Math.max(0, column - 5);
  const excerpt = (text) => {
    const chars = Array.from(text.slice(start));
    return JSON.stringify(
      (start && text ? "…" : "") +
        chars.slice(0, 10).join("") +
        (chars.length > 10 ? "…" : ""),
    );
  };
  const extra =
    changed.length > 1
      ? ` (+${changed.length - 1} ${changed.length === 2 ? "file" : "files"})`
      : "";
  return `EDITOR: ${path.basename(file)}:${line + 1} ${excerpt(oldLine)} -> ${excerpt(newLine)}${extra}`;
}
