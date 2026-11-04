import { test } from "node:test";
import assert from "node:assert/strict";
import {
  fittingGridColumns,
  gridVisualOrder,
} from "../src/utils/gridLayout.ts";

test("font growth reduces columns and additional space restores them", () => {
  assert.equal(fittingGridColumns(3, 9, 408, 120, 16), 3);
  assert.equal(fittingGridColumns(3, 9, 408, 135, 16), 2);
  assert.equal(fittingGridColumns(3, 9, 437, 135, 16), 3);
});
test("respects preferred maximum, count and an oversized single item", () => {
  assert.equal(fittingGridColumns(3, 2, 800, 100, 16), 2);
  assert.equal(fittingGridColumns(2, 9, 800, 100, 16), 2);
  assert.equal(fittingGridColumns(3, 9, 200, 300, 16), 1);
  assert.equal(fittingGridColumns(3, 0, 0, 0, 16), 1);
});
test("column-first keeps every item exactly once on incomplete rows", () => {
  assert.deepEqual(gridVisualOrder(5, 2, true), [0, 3, 1, 4, 2]);
  assert.deepEqual(gridVisualOrder(5, 3, true), [0, 2, 4, 1, 3]);
  assert.deepEqual(gridVisualOrder(5, 2, false), [0, 1, 2, 3, 4]);
});
