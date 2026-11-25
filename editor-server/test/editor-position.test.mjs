import { test } from "node:test";
import assert from "node:assert/strict";
import { rememberPosition, restorePosition } from "../ui/editor-position.mjs";

function editor(value) {
  return {
    value,
    selectionStart: 0,
    selectionEnd: 0,
    selectionDirection: "forward",
    scrollTop: 0,
    scrollLeft: 0,
    setSelectionRange(start, end, direction) {
      this.selectionStart = start;
      this.selectionEnd = end;
      this.selectionDirection = direction;
    },
  };
}
test("revision navigation retains viewport and selection when earlier lines move", () => {
  const e = editor("first\nsecond\nthird\nfourth");
  e.setSelectionRange(14, 17, "backward");
  e.scrollTop = 43;
  e.scrollLeft = 25;
  const saved = rememberPosition(e, 20);
  e.value = "inserted\nfirst\nsecond\nthird\nfourth";
  restorePosition(e, saved);
  assert.equal(e.scrollTop, 63);
  assert.equal(e.scrollLeft, 25);
  assert.equal(e.selectionStart, 23);
  assert.equal(e.selectionEnd, 26);
  assert.equal(e.selectionDirection, "backward");
});
test("missing lines and columns clamp to the shorter revision", () => {
  const e = editor("first\nsecond\nlast");
  e.setSelectionRange(16, 17, "forward");
  e.scrollTop = 40;
  const saved = rememberPosition(e, 20);
  e.value = "a";
  restorePosition(e, saved);
  assert.equal(e.selectionStart, 1);
  assert.equal(e.selectionEnd, 1);
  assert.equal(e.scrollTop, 0);
});
