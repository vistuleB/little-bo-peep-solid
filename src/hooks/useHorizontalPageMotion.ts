import { createEffect, onCleanup, onMount } from "solid-js";
import {
  ENABLE_HORIZONTAL_SWIPE_ARRIVAL,
  HORIZONTAL_PAGE_ARRIVAL_OFFSET,
  HORIZONTAL_SCROLL_END_FALLBACK_DELAY_MS,
  HORIZONTAL_SCROLL_SNAP_BACK_MAX,
  HORIZONTAL_SCROLL_SNAP_BACK_SCREEN_WIDTH_RATIO,
  HORIZONTAL_SWIPE_CENTER_TOLERANCE,
  HORIZONTAL_SWIPE_IMMEDIATE_SNAP_MAX_TERMINAL_VELOCITY,
  HORIZONTAL_SWIPE_IMMEDIATE_SNAP_MIN_RELEASE_PAUSE_MS,
} from "~/constants";
import { useGlobalContext } from "~/store/StoreProvider";
import { consumePendingHorizontalSwipeArrival } from "~/utils/horizontalSwipeArrival";
import { horizontalSwipeArrivalStartX } from "~/utils/horizontalSwipeArrival";
import { hasPendingHorizontalSwipeArrival } from "~/utils/horizontalSwipeArrival";
import { useLocation } from "@solidjs/router";
import type { HorizontalGestureEnd } from "~/hooks/useHorizontalSwipeNavigation";

export type HorizontalScrollPolicy = "range-limited" | "always-snap-back";

const useHorizontalPageMotion = (
  horizontalScrollPolicy: HorizontalScrollPolicy,
) => {
  const { store, set_store } = useGlobalContext();
  const location = useLocation();
  let scrollEndFallbackTimeout: number | undefined;
  let arrivalAnimationRunning = false;
  let initialCenterFrame: number | undefined;
  const supportsScrollEnd = "onscrollend" in document;

  const centeredScrollX = () =>
    (document.body.scrollWidth - window.innerWidth) / 2;

  const maximumScrollX = () =>
    Math.max(
      0,
      (document.scrollingElement?.scrollWidth || document.body.scrollWidth) -
        window.innerWidth,
    );

  const isWithinSnapBackRange = (scrollX: number, centeredX: number) => {
    if (horizontalScrollPolicy === "always-snap-back") {
      return scrollX >= 0 && scrollX <= maximumScrollX();
    }

    const distanceFromCentered = Math.abs(scrollX - centeredX);
    return (
      distanceFromCentered <
      Math.min(
        HORIZONTAL_SCROLL_SNAP_BACK_MAX,
        HORIZONTAL_SCROLL_SNAP_BACK_SCREEN_WIDTH_RATIO * store.innerWidth,
      )
    );
  };

  const finishArrival = () => {
    arrivalAnimationRunning = false;
    set_store("horizontal_arrival_in_progress", false);
  };

  const startNativeArrival = () => {
    window.clearTimeout(scrollEndFallbackTimeout);
    arrivalAnimationRunning = true;
    set_store("horizontal_arrival_in_progress", true);
    window.scroll({ left: centeredScrollX(), behavior: "smooth" });
  };

  const smoothlyCenter = () => {
    finishArrival();
    window.clearTimeout(scrollEndFallbackTimeout);
    window.scroll({ left: centeredScrollX(), behavior: "smooth" });
  };

  const handleScrollFinished = () => {
    if (arrivalAnimationRunning) {
      if (
        Math.abs(window.scrollX - centeredScrollX()) <=
        HORIZONTAL_SWIPE_CENTER_TOLERANCE
      ) {
        finishArrival();
        set_store("margin_mode", false);
      }
      return;
    }

    const centeredX = centeredScrollX();
    const pendingArrivalX = ENABLE_HORIZONTAL_SWIPE_ARRIVAL
      ? horizontalSwipeArrivalStartX(
          location.pathname,
          centeredX,
          HORIZONTAL_PAGE_ARRIVAL_OFFSET,
        )
      : centeredX;

    if (pendingArrivalX !== centeredX) {
      set_store("margin_mode", false);
      return;
    }

    const distanceFromCentered = Math.abs(window.scrollX - centeredX);

    if (distanceFromCentered < 1) {
      set_store("margin_mode", false);
      return;
    }

    if (isWithinSnapBackRange(window.scrollX, centeredX)) {
      smoothlyCenter();
      set_store("margin_mode", false);
      return;
    }

    set_store("margin_mode", true);
  };

  const handleScroll = () => {
    set_store("scrollY", window.scrollY);
    set_store("scrollX", window.scrollX);

    if (!supportsScrollEnd) {
      window.clearTimeout(scrollEndFallbackTimeout);
      scrollEndFallbackTimeout = window.setTimeout(
        handleScrollFinished,
        HORIZONTAL_SCROLL_END_FALLBACK_DELAY_MS,
      );
    }
  };

  const handleTouchStart = () => {
    if (hasPendingHorizontalSwipeArrival(location.pathname)) {
      consumePendingHorizontalSwipeArrival(location.pathname);
    }

    if (arrivalAnimationRunning) {
      finishArrival();
      window.clearTimeout(scrollEndFallbackTimeout);
      window.scroll({ left: centeredScrollX(), behavior: "instant" });
      return;
    }

    finishArrival();
  };

  const handleGestureEnd = (result: HorizontalGestureEnd) => {
    if (result.swipeInitiated || arrivalAnimationRunning) return;

    const fingerStopped =
      Math.abs(result.projectedTerminalVelocity) <=
        HORIZONTAL_SWIPE_IMMEDIATE_SNAP_MAX_TERMINAL_VELOCITY ||
      result.releasePauseMs >=
        HORIZONTAL_SWIPE_IMMEDIATE_SNAP_MIN_RELEASE_PAUSE_MS;
    if (!fingerStopped) return;

    const centeredX = centeredScrollX();
    const distanceFromCentered = Math.abs(window.scrollX - centeredX);

    if (
      distanceFromCentered >= 1 &&
      isWithinSnapBackRange(window.scrollX, centeredX)
    ) {
      smoothlyCenter();
      set_store("margin_mode", false);
    }
  };

  const alignImmediately = () => {
    finishArrival();
    window.clearTimeout(scrollEndFallbackTimeout);
    const centeredX = centeredScrollX();
    const left = ENABLE_HORIZONTAL_SWIPE_ARRIVAL
      ? horizontalSwipeArrivalStartX(
          location.pathname,
          centeredX,
          HORIZONTAL_PAGE_ARRIVAL_OFFSET,
        )
      : centeredX;
    window.scroll({ left, behavior: "instant" });
  };

  createEffect(() => {
    if (!store.saved_scroll_finished || store.route_phase !== "idle") return;

    if (!hasPendingHorizontalSwipeArrival(location.pathname)) return;

    const direction = consumePendingHorizontalSwipeArrival(location.pathname);
    if (!direction || !ENABLE_HORIZONTAL_SWIPE_ARRIVAL) return;

    const startX =
      centeredScrollX() +
      (direction === "left"
        ? -HORIZONTAL_PAGE_ARRIVAL_OFFSET
        : HORIZONTAL_PAGE_ARRIVAL_OFFSET);
    window.scroll({ left: startX, behavior: "instant" });
    startNativeArrival();
  });

  onMount(() => {
    initialCenterFrame = requestAnimationFrame(alignImmediately);
    window.addEventListener("scroll", handleScroll);
    if (supportsScrollEnd) {
      document.addEventListener("scrollend", handleScrollFinished);
    }
    document.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });

    onCleanup(() => {
      if (initialCenterFrame !== undefined) {
        cancelAnimationFrame(initialCenterFrame);
      }
      window.removeEventListener("scroll", handleScroll);
      if (supportsScrollEnd) {
        document.removeEventListener("scrollend", handleScrollFinished);
      }
      document.removeEventListener("touchstart", handleTouchStart);
      window.clearTimeout(scrollEndFallbackTimeout);
      finishArrival();
    });
  });

  return { alignImmediately, handleGestureEnd, smoothlyCenter };
};

export default useHorizontalPageMotion;
