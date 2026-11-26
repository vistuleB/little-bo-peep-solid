import { test } from "node:test";
import assert from "node:assert/strict";
import { editorCommitMessage } from "../commit-message.mjs";
const message = (before, after) =>
  editorCommitMessage(
    [{ file: "src/content/bt3.wly", content: after }],
    new Map([["src/content/bt3.wly", before]]),
  );
test("commit summary identifies first edited line and short nearby excerpts", () => {
  assert.equal(
    message("same\nhello\n", "same\nhelo\n"),
    'EDITOR: bt3.wly:2 "hello" -> "helo"',
  );
  const result = message(
    "long unchanged prefix hello world",
    "long unchanged prefix helo world",
  );
  assert.match(result, /…x hello wo…/);
  assert.match(result, /…x helo wor…/);
  assert.equal(message("", "new"), 'EDITOR: bt3.wly:1 "" -> "new"');
  assert.equal(message("old", ""), 'EDITOR: bt3.wly:1 "old" -> ""');
  assert.ok(!message("a\tb", 'a\t"b').includes("\t"));
});
test("unchanged files are skipped and additional changed files counted", () => {
  const changes = [
    { file: "a.wly", content: "same" },
    { file: "b.wly", content: "new" },
    { file: "c.wly", content: "new" },
  ];
  assert.equal(
    editorCommitMessage(
      changes,
      new Map([
        ["a.wly", "same"],
        ["b.wly", "old"],
        ["c.wly", "old"],
      ]),
    ),
    'EDITOR: b.wly:1 "old" -> "new" (+1 file)',
  );
});

test("whitespace-only edits show visible spaces, including trailing spaces", () => {
  assert.equal(
    message("is  also", "is also"),
    'EDITOR: bt3.wly:1 "is··also" -> "is·also"',
  );
  assert.equal(
    message("hello ", "hello"),
    'EDITOR: bt3.wly:1 "hello·" -> "hello"',
  );
  assert.equal(message("a\tb", "a b"), 'EDITOR: bt3.wly:1 "a\\tb" -> "a·b"');
});
