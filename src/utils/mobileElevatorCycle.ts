export function mobileElevatorStep(
  phase: number,
  atTop: boolean,
  atBottom: boolean,
) {
  let current = phase;
  if (current < 2 && atBottom && !atTop) current = 2;
  else if (current >= 2 && atTop && !atBottom) current = 0;
  return {
    direction: current < 2 ? ("down" as const) : ("up" as const),
    nextPhase: (current + 1) % 4,
  };
}
