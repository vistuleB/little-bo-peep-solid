import { test } from "node:test";
import assert from "node:assert/strict";
import { sourceCaret } from "../ui/source-caret.mjs";
test("matches ordinary prose inside Writerly markup", () => {
  const source = "|> Section\n    Hello _beautiful_ world.\n";
  assert.equal(
    sourceCaret(source, 2, { before: "beau", after: "tiful" }),
    source.indexOf("beautiful") + 4,
  );
});
test("matches collapsed whitespace and multiline fragments", () => {
  const source = "    Here is   some text\n    across lines.";
  assert.equal(
    sourceCaret(source, 1, {
      before: "Here is some text ",
      after: "across lines.",
    }),
    source.indexOf("across"),
  );
});
test("prefers matching text nearest the blame and falls back without evidence", () => {
  const source = "same words\nother\nsame words";
  assert.equal(
    sourceCaret(source, 3, { before: "same ", after: "words" }),
    source.lastIndexOf("words"),
  );
  assert.equal(sourceCaret(source, 2, { before: "xx", after: "zz" }), 11);
  assert.equal(sourceCaret(source, 2), 11);
});
