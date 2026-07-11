export type SmoothScrollController = {
  cancel: () => void;
  finished: Promise<boolean>;
};

let cancelActiveScroll: (() => void) | undefined;

const completedController = (): SmoothScrollController => ({
  cancel: () => undefined,
  finished: Promise.resolve(true),
});

const smoothScrollTo = (
  targetPosition: number,
  duration: number,
): SmoothScrollController => {
  cancelActiveScroll?.();

  if (!Number.isFinite(targetPosition)) {
    return {
      cancel: () => undefined,
      finished: Promise.resolve(false),
    };
  }

  if (!Number.isFinite(duration) || duration <= 0) {
    window.scrollTo(window.scrollX, targetPosition);
    return completedController();
  }

  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let animationFrame: number | undefined;
  let startedAt: number | undefined;
  let settled = false;
  let resolveFinished!: (completed: boolean) => void;
  const finished = new Promise<boolean>((resolve) => {
    resolveFinished = resolve;
  });

  const settle = (completed: boolean) => {
    if (settled) return;
    settled = true;
    if (animationFrame !== undefined) cancelAnimationFrame(animationFrame);
    animationFrame = undefined;
    if (cancelActiveScroll === cancel) cancelActiveScroll = undefined;
    resolveFinished(completed);
  };

  const cancel = () => settle(false);

  const tick = (now: number) => {
    if (startedAt === undefined) startedAt = now;
    const progress = Math.min(1, (now - startedAt) / duration);
    const easedProgress =
      progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    window.scrollTo(window.scrollX, startPosition + distance * easedProgress);

    if (progress < 1) {
      animationFrame = requestAnimationFrame(tick);
      return;
    }

    window.scrollTo(window.scrollX, targetPosition);
    settle(true);
  };

  cancelActiveScroll = cancel;
  animationFrame = requestAnimationFrame(tick);

  return { cancel, finished };
};

export default smoothScrollTo;
