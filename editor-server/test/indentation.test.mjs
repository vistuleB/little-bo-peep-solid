import { test } from "node:test";
import assert from "node:assert/strict";
import { indentationEdit } from "../ui/indentation.mjs";
test("selected lines exclude a following line at the selection boundary", () => {
  assert.deepEqual(indentationEdit("one\ntwo\nthree", 0, 8), {
    from: 0,
    to: 7,
    text: "    one\n    two",
    start: 4,
    end: 16,
  });
});
test("outdent clamps caret inside removed indentation and handles tabs", () => {
  assert.deepEqual(indentationEdit("    one", 2, 2, true), {
    from: 0,
    to: 7,
    text: "one",
    start: 0,
    end: 0,
  });
  assert.equal(indentationEdit("\tone\n  two", 0, 10, true).text, "one\ntwo");
});
test("empty first line can be indented and normal Tab inserts at caret", () => {
  assert.equal(indentationEdit("\none", 0, 1).text, "    ");
  assert.deepEqual(indentationEdit("hello", 2, 2), {
    from: 2,
    to: 2,
    text: "    ",
    start: 6,
    end: 6,
  });
});
