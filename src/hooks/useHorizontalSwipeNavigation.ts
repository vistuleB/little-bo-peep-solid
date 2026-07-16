import { onCleanup, onMount } from "solid-js";
import {
  HORIZONTAL_SWIPE_DIRECTION_RATIO,
  HORIZONTAL_SWIPE_EDGE_EXCLUSION,
  HORIZONTAL_SWIPE_MAX_DURATION_MS,
  HORIZONTAL_SWIPE_MAX_RELEASE_PAUSE_MS,
  HORIZONTAL_SWIPE_MAX_REVERSAL,
  HORIZONTAL_SWIPE_MIN_DISTANCE,
  HORIZONTAL_SWIPE_MIN_TERMINAL_VELOCITY,
  HORIZONTAL_SWIPE_TERMINAL_SAMPLE_MS,
} from "~/constants";

type HorizontalSwipeNavigationOptions = {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  navigationEnabled?: () => boolean;
  onGestureStart?: (gesture: HorizontalGestureStart) => void;
  onGestureMove?: (gesture: HorizontalGestureMove) => void;
  onGestureEnd?: (result: HorizontalGestureEnd) => void;
  onGestureCancel?: () => void;
};

export type HorizontalGestureStart = {
  clientX: number;
  clientY: number;
};

export type HorizontalGestureMove = {
  deltaX: number;
  deltaY: number;
};

export type HorizontalGestureEnd = {
  swipeInitiated: boolean;
  projectedTerminalVelocity: number;
  releasePauseMs: number;
  deltaX: number;
  deltaY: number;
};

type Gesture = {
  valid: boolean;
  startX: number;
  startY: number;
  lastX: number;
  horizontalTravel: number;
  startedAt: number;
  samples: GestureSample[];
  swipeEligible: boolean;
};

type GestureSample = {
  x: number;
  at: number;
};

const emptyGesture = (): Gesture => ({
  valid: false,
  startX: 0,
  startY: 0,
  lastX: 0,
  horizontalTravel: 0,
  startedAt: 0,
  samples: [],
  swipeEligible: false,
});

const useHorizontalSwipeNavigation = (
  options: HorizontalSwipeNavigationOptions,
) => {
  let gesture = emptyGesture();

  const handleTouchStart = (event: TouchEvent) => {
    if (event.touches.length !== 1) {
      gesture = emptyGesture();
      return;
    }

    const touch = event.touches[0];
    const startedAt = performance.now();
    const startedAwayFromBrowserNavigationEdges =
      touch.clientX > HORIZONTAL_SWIPE_EDGE_EXCLUSION &&
      touch.clientX < window.innerWidth - HORIZONTAL_SWIPE_EDGE_EXCLUSION;

    gesture = {
      valid: startedAwayFromBrowserNavigationEdges,
      startX: touch.clientX,
      startY: touch.clientY,
      lastX: touch.clientX,
      horizontalTravel: 0,
      startedAt,
      samples: [{ x: touch.clientX, at: startedAt }],
      swipeEligible: options.navigationEnabled?.() ?? true,
    };

    if (gesture.valid) {
      options.onGestureStart?.({
        clientX: touch.clientX,
        clientY: touch.clientY,
      });
    }
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (!gesture.valid || event.touches.length !== 1) {
      gesture.valid = false;
      return;
    }

    const currentX = event.touches[0].clientX;
    gesture.samples.push({ x: currentX, at: performance.now() });
    gesture.horizontalTravel += Math.abs(currentX - gesture.lastX);
    gesture.lastX = currentX;
    options.onGestureMove?.({
      deltaX: currentX - gesture.startX,
      deltaY: event.touches[0].clientY - gesture.startY,
    });
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (!gesture.valid || event.changedTouches.length !== 1) {
      gesture = emptyGesture();
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - gesture.startX;
    const deltaY = touch.clientY - gesture.startY;
    const horizontalDistance = Math.abs(deltaX);
    const endedAt = performance.now();
    const duration = endedAt - gesture.startedAt;
    const reversalDistance = gesture.horizontalTravel - horizontalDistance;
    const finalSample = gesture.samples.at(-1);
    const terminalCutoff =
      (finalSample?.at || endedAt) - HORIZONTAL_SWIPE_TERMINAL_SAMPLE_MS;
    let terminalStartSample = gesture.samples.find(
      (sample) => sample.at >= terminalCutoff,
    );
    if (terminalStartSample === finalSample && gesture.samples.length > 1) {
      terminalStartSample = gesture.samples.at(-2);
    }
    const terminalDeltaX =
      finalSample && terminalStartSample
        ? finalSample.x - terminalStartSample.x
        : 0;
    const terminalDuration =
      finalSample && terminalStartSample
        ? finalSample.at - terminalStartSample.at
        : 0;
    const projectedTerminalVelocity =
      terminalDuration > 0
        ? (terminalDeltaX / terminalDuration) * Math.sign(deltaX)
        : 0;
    const releasePause = finalSample ? endedAt - finalSample.at : Infinity;

    const isSwipe =
      gesture.swipeEligible &&
      horizontalDistance >= HORIZONTAL_SWIPE_MIN_DISTANCE &&
      duration <= HORIZONTAL_SWIPE_MAX_DURATION_MS &&
      horizontalDistance >=
        Math.abs(deltaY) * HORIZONTAL_SWIPE_DIRECTION_RATIO &&
      releasePause <= HORIZONTAL_SWIPE_MAX_RELEASE_PAUSE_MS &&
      projectedTerminalVelocity >= HORIZONTAL_SWIPE_MIN_TERMINAL_VELOCITY &&
      reversalDistance <= HORIZONTAL_SWIPE_MAX_REVERSAL;

    gesture = emptyGesture();
    options.onGestureEnd?.({
      swipeInitiated: isSwipe,
      projectedTerminalVelocity,
      releasePauseMs: releasePause,
      deltaX,
      deltaY,
    });
    if (!isSwipe) return;

    if (deltaX < 0) options.onSwipeLeft();
    else options.onSwipeRight();
  };

  const cancelGesture = () => {
    gesture = emptyGesture();
    options.onGestureCancel?.();
  };

  onMount(() => {
    document.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });
    document.addEventListener("touchcancel", cancelGesture, { passive: true });

    onCleanup(() => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("touchcancel", cancelGesture);
    });
  });
};

export default useHorizontalSwipeNavigation;
