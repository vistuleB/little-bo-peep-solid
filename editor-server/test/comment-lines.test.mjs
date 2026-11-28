import { test } from "node:test";
import assert from "node:assert/strict";
import { commentLines } from "../ui/line-actions.mjs";
function apply(text, start = 0, end = text.length) {
  const edit = commentLines(text, start, end);
  return (
    edit && {
      text: text.slice(0, edit.from) + edit.text + text.slice(edit.to),
      start: edit.start,
      end: edit.end,
    }
  );
}
test("comments at shared rounded indentation and preserves blank lines and mixed comments", () => {
  const text = "      alpha\n        !! beta\n  \n       gamma";
  const result = apply(text);
  assert.equal(
    result.text,
    "    !!   alpha\n    !!     !! beta\n  \n    !!    gamma",
  );
  assert.equal(apply(result.text, result.start, result.end).text, text);
});
test("uncomments individually, removing at most one space", () => {
  assert.equal(
    apply("    !!a\n      !!  b\n!!\n  ").text,
    "    a\n       b\n\n  ",
  );
});
test("whole touched lines, excluding next-line boundary; caret and blank-only selection", () => {
  assert.deepEqual(apply("one\ntwo", 0, 4), {
    text: "!! one\ntwo",
    start: 3,
    end: 7,
  });
  assert.deepEqual(apply("    one", 5, 5), {
    text: "    !! one",
    start: 8,
    end: 8,
  });
  assert.equal(apply(" \n\t\n"), null);
  assert.equal(apply(""), null);
  assert.equal(apply("\none", 1, 4).text, "\n!! one");
});
test("selection inside a removed marker clamps to its insertion point", () => {
  assert.deepEqual(apply("!! hi", 1, 2), { text: "hi", start: 0, end: 0 });
});
