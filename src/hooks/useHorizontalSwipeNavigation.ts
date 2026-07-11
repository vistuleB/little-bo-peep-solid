import { onCleanup, onMount } from "solid-js";
import {
  HORIZONTAL_SWIPE_CENTER_TOLERANCE,
  HORIZONTAL_SWIPE_DIRECTION_RATIO,
  HORIZONTAL_SWIPE_EDGE_EXCLUSION,
  HORIZONTAL_SWIPE_MAX_DURATION_MS,
  HORIZONTAL_SWIPE_MAX_REVERSAL,
  HORIZONTAL_SWIPE_MIN_DISTANCE,
  HORIZONTAL_SWIPE_MIN_VELOCITY,
} from "~/constants";

type HorizontalSwipeNavigationOptions = {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
};

type Gesture = {
  valid: boolean;
  startX: number;
  startY: number;
  lastX: number;
  horizontalTravel: number;
  startedAt: number;
};

const emptyGesture = (): Gesture => ({
  valid: false,
  startX: 0,
  startY: 0,
  lastX: 0,
  horizontalTravel: 0,
  startedAt: 0,
});

const useHorizontalSwipeNavigation = (
  options: HorizontalSwipeNavigationOptions,
) => {
  let gesture = emptyGesture();

  const pageIsHorizontallyCentered = () => {
    const centeredX = (document.body.scrollWidth - window.innerWidth) / 2;
    return (
      Math.abs(window.scrollX - centeredX) <= HORIZONTAL_SWIPE_CENTER_TOLERANCE
    );
  };

  const handleTouchStart = (event: TouchEvent) => {
    if (event.touches.length !== 1) {
      gesture = emptyGesture();
      return;
    }

    const touch = event.touches[0];
    const startedAwayFromBrowserNavigationEdges =
      touch.clientX > HORIZONTAL_SWIPE_EDGE_EXCLUSION &&
      touch.clientX < window.innerWidth - HORIZONTAL_SWIPE_EDGE_EXCLUSION;

    gesture = {
      valid:
        startedAwayFromBrowserNavigationEdges && pageIsHorizontallyCentered(),
      startX: touch.clientX,
      startY: touch.clientY,
      lastX: touch.clientX,
      horizontalTravel: 0,
      startedAt: performance.now(),
    };
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (!gesture.valid || event.touches.length !== 1) {
      gesture.valid = false;
      return;
    }

    const currentX = event.touches[0].clientX;
    gesture.horizontalTravel += Math.abs(currentX - gesture.lastX);
    gesture.lastX = currentX;
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
    const duration = performance.now() - gesture.startedAt;
    const velocity = duration > 0 ? horizontalDistance / duration : 0;
    const reversalDistance = gesture.horizontalTravel - horizontalDistance;

    const isSwipe =
      horizontalDistance >= HORIZONTAL_SWIPE_MIN_DISTANCE &&
      duration <= HORIZONTAL_SWIPE_MAX_DURATION_MS &&
      horizontalDistance >=
        Math.abs(deltaY) * HORIZONTAL_SWIPE_DIRECTION_RATIO &&
      velocity >= HORIZONTAL_SWIPE_MIN_VELOCITY &&
      reversalDistance <= HORIZONTAL_SWIPE_MAX_REVERSAL;

    gesture = emptyGesture();
    if (!isSwipe) return;

    if (deltaX < 0) options.onSwipeLeft();
    else options.onSwipeRight();
  };

  const cancelGesture = () => {
    gesture = emptyGesture();
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
