import { createEffect, onCleanup, onMount } from "solid-js";
import {
  ENABLE_HORIZONTAL_SWIPE_ARRIVAL,
  HORIZONTAL_PAGE_ARRIVAL_DURATION_MS,
  HORIZONTAL_SCROLL_END_FALLBACK_DELAY_MS,
  HORIZONTAL_SCROLL_SNAP_BACK_MAX,
  HORIZONTAL_SCROLL_SNAP_BACK_SCREEN_WIDTH_RATIO,
  HORIZONTAL_SWIPE_IMMEDIATE_SNAP_MAX_TERMINAL_VELOCITY,
  HORIZONTAL_SWIPE_IMMEDIATE_SNAP_MIN_RELEASE_PAUSE_MS,
} from "~/constants";
import { useGlobalContext } from "~/store/StoreProvider";
import { useLocation } from "@solidjs/router";
import type { HorizontalGestureEnd } from "~/hooks/useHorizontalSwipeNavigation";
import { swipeArrivalPreparation } from "~/utils/routeTransitionPolicy";
import { unlockHorizontalDocumentScroll } from "~/utils/horizontalScrollLock";

export type HorizontalScrollPolicy = "range-limited" | "always-snap-back";

const useHorizontalPageMotion = (
  horizontalScrollPolicy: HorizontalScrollPolicy,
) => {
  const { store, set_store } = useGlobalContext();
  const location = useLocation();
  let arrivalAnimationFrame: number | undefined;
  let scrollEndFallbackTimeout: number | undefined;
  let initialCenterFrame: number | undefined;
  let snapBackInProgress = false;
  const supportsScrollEnd = "onscrollend" in document;

  const centeredScrollX = () =>
    (document.body.scrollWidth - window.innerWidth) / 2;

  const routeHasSwipeArrival = () =>
    ENABLE_HORIZONTAL_SWIPE_ARRIVAL &&
    swipeArrivalPreparation(store, location.pathname) !== "none" &&
    store.pending_arrival_direction !== null;

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

  const clearArrivalAnimationFrame = () => {
    if (arrivalAnimationFrame === undefined) return;
    cancelAnimationFrame(arrivalAnimationFrame);
    arrivalAnimationFrame = undefined;
  };

  const completeArrival = () => {
    clearArrivalAnimationFrame();
    if (store.arrival_route_path !== location.pathname) return;
    set_store("horizontal_arrival_phase", "idle");
    set_store("pending_navigation_kind", "standard");
    set_store("pending_arrival_direction", null);
    set_store("arrival_route_path", "");
    set_store("pending_route_target", "top");
    set_store("horizontal_arrival_offset", 0);
    unlockHorizontalDocumentScroll();
  };

  const startCustomArrival = () => {
    clearArrivalAnimationFrame();
    window.clearTimeout(scrollEndFallbackTimeout);
    const startOffset = store.horizontal_arrival_offset;
    const startedAt = performance.now();
    set_store("horizontal_arrival_phase", "animating");

    const tick = (now: number) => {
      const progress = Math.min(
        1,
        (now - startedAt) / HORIZONTAL_PAGE_ARRIVAL_DURATION_MS,
      );
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      set_store("horizontal_arrival_offset", startOffset * (1 - easedProgress));

      if (progress < 1) {
        arrivalAnimationFrame = requestAnimationFrame(tick);
        return;
      }

      arrivalAnimationFrame = undefined;
      completeArrival();
      set_store("margin_mode", false);
    };

    arrivalAnimationFrame = requestAnimationFrame(tick);
  };

  const smoothlyCenter = () => {
    if (snapBackInProgress) return;
    completeArrival();
    window.clearTimeout(scrollEndFallbackTimeout);
    const targetX = centeredScrollX();
    if (Math.abs(window.scrollX - targetX) < 1) {
      set_store("margin_mode", false);
      return;
    }
    snapBackInProgress = true;
    window.scroll({ left: targetX, behavior: "smooth" });
  };

  const handleScrollFinished = () => {
    if (store.horizontal_arrival_phase === "animating") return;

    const centeredX = centeredScrollX();
    if (routeHasSwipeArrival()) {
      set_store("margin_mode", false);
      return;
    }

    const distanceFromCentered = Math.abs(window.scrollX - centeredX);

    if (distanceFromCentered < 1) {
      snapBackInProgress = false;
      set_store("margin_mode", false);
      return;
    }

    if (snapBackInProgress) return;

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

    if (!supportsScrollEnd && store.horizontal_arrival_phase !== "animating") {
      window.clearTimeout(scrollEndFallbackTimeout);
      scrollEndFallbackTimeout = window.setTimeout(
        handleScrollFinished,
        HORIZONTAL_SCROLL_END_FALLBACK_DELAY_MS,
      );
    }
  };

  const handleTouchStart = () => {
    snapBackInProgress = false;

    if (routeHasSwipeArrival()) {
      completeArrival();
      window.clearTimeout(scrollEndFallbackTimeout);
      window.scroll({ left: centeredScrollX(), behavior: "instant" });
      return;
    }

    clearArrivalAnimationFrame();
  };

  const handleGestureEnd = (result: HorizontalGestureEnd) => {
    if (
      result.swipeInitiated ||
      snapBackInProgress ||
      store.horizontal_arrival_phase === "animating"
    ) {
      return;
    }

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
    if (store.horizontal_arrival_phase === "animating") return;
    snapBackInProgress = false;
    clearArrivalAnimationFrame();
    window.clearTimeout(scrollEndFallbackTimeout);
    const centeredX = centeredScrollX();
    window.scroll({ left: centeredX, behavior: "instant" });
  };

  createEffect(() => {
    if (!store.saved_scroll_finished || store.route_phase !== "idle") return;

    if (
      !routeHasSwipeArrival() ||
      store.horizontal_arrival_phase !== "preparing"
    ) {
      return;
    }

    window.scroll({ left: centeredScrollX(), behavior: "instant" });
    startCustomArrival();
  });

  onMount(() => {
    // Swipe destinations are centered by routeLoading only after the new route
    // mounts and its content has been hidden for the handoff. Centering here as
    // well can briefly re-center Suspense's retained outgoing page while the
    // destination chunk is still loading.
    //
    // Longer term, all physical horizontal positioning should be owned by one
    // persistent controller above route-level Page components. routeLoading,
    // resize handling, and gesture handling should request motion from it
    // instead of calling window.scroll independently.
    if (!routeHasSwipeArrival()) {
      initialCenterFrame = requestAnimationFrame(alignImmediately);
    }
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
      clearArrivalAnimationFrame();
    });
  });

  return { alignImmediately, handleGestureEnd, smoothlyCenter };
};

export default useHorizontalPageMotion;
