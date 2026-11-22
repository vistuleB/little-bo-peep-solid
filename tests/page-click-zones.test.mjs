import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pageClickAction } from '../src/utils/pageClickZones.ts';
const g = {width: 1200, height: 800, sideWidth: 240, verticalHeight: 200, canUp: true, canDown: true};
test('all four corner overlaps split at 45 degrees', () => {
  for (const [x, side] of [[120, 'prev'], [1080, 'next']]) {
    assert.equal(pageClickAction(x, 90, g), 'up');
    assert.equal(pageClickAction(x, 130, g), side);
    assert.equal(pageClickAction(x, 710, g), 'down');
    assert.equal(pageClickAction(x, 670, g), side);
  }
});
test('inactive vertical navigation releases the whole side strip', () => {
  assert.equal(pageClickAction(239, 1, {...g, canUp:false}), 'prev');
  assert.equal(pageClickAction(961, 799, {...g, canDown:false}), 'next');
  assert.equal(pageClickAction(600, 1, {...g, canUp:false}), undefined);
});
test('central vertical regions scroll, middle content does not navigate', () => {
  assert.equal(pageClickAction(600, 100, g), 'up');
  assert.equal(pageClickAction(600, 700, g), 'down');
  assert.equal(pageClickAction(600, 400, g), undefined);
  assert.equal(pageClickAction(241, 400, g), undefined);
  assert.equal(pageClickAction(239, 400, g), 'prev');
});

test('45-degree boundary becomes straight at the overlap edge', () => {
  assert.equal(pageClickAction(220, 199, g), 'up');
  assert.equal(pageClickAction(220, 201, g), 'prev');
  const narrow = {...g, sideWidth: 100};
  assert.equal(pageClickAction(90, 89, narrow), 'up');
  assert.equal(pageClickAction(90, 91, narrow), 'prev');
  assert.equal(pageClickAction(101, 150, narrow), 'up');
});
