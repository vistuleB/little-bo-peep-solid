import { test } from "node:test";
import assert from "node:assert/strict";
import { selectLines, moveLines } from "../ui/line-actions.mjs";

test("K selects a whole line, then extends down including separators", () => {
  const text = "one\ntwo\nthree";
  assert.deepEqual(selectLines(text, 5, 5), { start: 4, end: 8 });
  assert.deepEqual(selectLines(text, 4, 8), { start: 4, end: 13 });
  assert.deepEqual(selectLines(text, 5, 8), { start: 4, end: 8 });
  assert.deepEqual(selectLines(text, 4, 13), { start: 4, end: 13 });
  assert.deepEqual(selectLines("\nx", 0, 0), { start: 0, end: 1 });
});

test("J completes the first line and adds one above, retaining the far endpoint", () => {
  assert.deepEqual(selectLines("one\ntwo\nthree", 6, 10, true), {
    start: 0,
    end: 10,
  });
  assert.deepEqual(selectLines("one\ntwo\nthree", 5, 5, true), {
    start: 0,
    end: 8,
  });
  assert.deepEqual(selectLines("one", 1, 1, true), { start: 0, end: 3 });
});

function moved(text, start, end, up) {
  const edit = moveLines(text, start, end, up);
  return (
    edit && [
      text.slice(0, edit.from) + edit.text + text.slice(edit.to),
      edit.start,
      edit.end,
    ]
  );
}
test("moves a block, caret, and partial selection with their lines", () => {
  assert.deepEqual(moved("one\ntwo\nthree\nfour", 4, 14, true), [
    "two\nthree\none\nfour",
    0,
    10,
  ]);
  assert.deepEqual(moved("one\ntwo\nthree", 5, 5, true), [
    "two\none\nthree",
    1,
    1,
  ]);
  assert.deepEqual(moved("one\ntwo\nthree", 5, 6, false), [
    "one\nthree\ntwo",
    11,
    12,
  ]);
});
test("handles EOF, empty lines and document boundaries without losing text", () => {
  assert.deepEqual(moved("one\ntwo", 0, 4, false), ["two\none", 4, 7]);
  assert.deepEqual(moved("one\ntwo", 4, 7, true), ["two\none", 0, 3]);
  assert.deepEqual(moved("one\n", 4, 4, true), ["\none", 0, 0]);
  assert.deepEqual(moved("one\n", 1, 1, false), ["\none", 2, 2]);
  assert.equal(moveLines("one", 1, 1, true), null);
  assert.equal(moveLines("one", 1, 1, false), null);
  assert.equal(moveLines("one\ntwo", 0, 7, false), null);
});

test("retraction fixes the opposite edge and collapses at that edge", async () => {
  const { retractLines } = await import("../ui/line-actions.mjs");
  const text = "one\ntwo\nthree";
  assert.deepEqual(retractLines(text, 0, 13, true), { start: 4, end: 13 });
  assert.deepEqual(retractLines(text, 0, 13), { start: 0, end: 8 });
  assert.deepEqual(retractLines(text, 0, 8), { start: 0, end: 4 });
  assert.deepEqual(retractLines(text, 4, 8, true), { start: 8, end: 8 });
  assert.deepEqual(retractLines(text, 4, 8), { start: 4, end: 4 });
  assert.deepEqual(retractLines(text, 5, 6), { start: 5, end: 5 });
  assert.deepEqual(retractLines(text, 5, 6, true), { start: 6, end: 6 });
  assert.deepEqual(retractLines(text, 5, 5, true), { start: 5, end: 5 });
  assert.deepEqual(retractLines("\n\nx", 0, 2, true), { start: 1, end: 2 });
});
