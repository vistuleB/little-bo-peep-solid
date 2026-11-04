import assert from 'node:assert/strict';
import { test } from 'node:test';
import { mobileElevatorStep } from '../src/utils/mobileElevatorCycle.ts';

test('cycles down twice, then up twice', () => {
  let phase = 0;
  const directions = [];
  for (let i = 0; i < 8; i++) {
    const step = mobileElevatorStep(phase, false, false);
    directions.push(step.direction);
    phase = step.nextPhase;
  }
  assert.deepEqual(directions, ['down', 'down', 'up', 'up', 'down', 'down', 'up', 'up']);
});
test('bottom skips either remaining down slot and counts the up tap', () => {
  for (const phase of [0, 1])
    assert.deepEqual(mobileElevatorStep(phase, false, true), { direction: 'up', nextPhase: 3 });
});
test('top skips either remaining up slot and counts the down tap', () => {
  for (const phase of [2, 3])
    assert.deepEqual(mobileElevatorStep(phase, true, false), { direction: 'down', nextPhase: 1 });
});
test('arriving at an endpoint on the first tap reverses on the next tap', () => {
  const down = mobileElevatorStep(0, true, false);
  const up = mobileElevatorStep(down.nextPhase, false, true);
  assert.equal(up.direction, 'up');
  assert.equal(mobileElevatorStep(up.nextPhase, true, false).direction, 'down');
});
