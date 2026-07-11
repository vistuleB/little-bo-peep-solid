import { createEffect, onCleanup, onMount } from "solid-js";
import {
  ENABLE_HORIZONTAL_SWIPE_ARRIVAL,
  HORIZONTAL_PAGE_ARRIVAL_OFFSET,
  HORIZONTAL_SCROLL_END_FALLBACK_DELAY_MS,
  HORIZONTAL_SCROLL_SNAP_BACK_DURATION_MS,
  HORIZONTAL_SCROLL_SNAP_BACK_MAX,
  HORIZONTAL_SCROLL_SNAP_BACK_SCREEN_WIDTH_RATIO,
} from "~/constants";
import { useGlobalContext } from "~/store/StoreProvider";
import { consumePendingHorizontalSwipeArrival } from "~/utils/horizontalSwipeArrival";
import { horizontalSwipeArrivalStartX } from "~/utils/horizontalSwipeArrival";
import { useLocation } from "@solidjs/router";

type AnimationKind = "arrival" | "snap-back";

const useHorizontalPageMotion = () => {
  const { store, set_store } = useGlobalContext();
  const location = useLocation();
  let animationFrame: number | undefined;
  let scrollEndFallbackTimeout: number | undefined;
  let animationKind: AnimationKind | undefined;
  let initialCenterFrame: number | undefined;
  const supportsScrollEnd = "onscrollend" in document;

  const centeredScrollX = () =>
    (document.body.scrollWidth - window.innerWidth) / 2;

  const cancelAnimation = () => {
    if (animationFrame !== undefined) {
      cancelAnimationFrame(animationFrame);
      animationFrame = undefined;
    }
    animationKind = undefined;
  };

  const animateToCenter = (kind: AnimationKind) => {
    cancelAnimation();
    window.clearTimeout(scrollEndFallbackTimeout);

    const startX = window.scrollX;
    const targetX = centeredScrollX();
    const distance = targetX - startX;
    const startedAt = performance.now();
    animationKind = kind;

    const tick = (now: number) => {
      const progress = Math.min(
        1,
        (now - startedAt) / HORIZONTAL_SCROLL_SNAP_BACK_DURATION_MS,
      );
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      window.scroll({
        left: startX + distance * easedProgress,
        behavior: "instant",
      });

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
        return;
      }

      animationFrame = undefined;
      animationKind = undefined;
    };

    animationFrame = requestAnimationFrame(tick);
  };

  const handleScrollFinished = () => {
    if (animationKind) return;

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

    if (
      distanceFromCentered <
      Math.min(
        HORIZONTAL_SCROLL_SNAP_BACK_MAX,
        HORIZONTAL_SCROLL_SNAP_BACK_SCREEN_WIDTH_RATIO * store.innerWidth,
      )
    ) {
      animateToCenter("snap-back");
      set_store("margin_mode", false);
      return;
    }

    set_store("margin_mode", true);
  };

  const handleScroll = () => {
    set_store("scrollY", window.scrollY);
    set_store("scrollX", window.scrollX);

    if (!supportsScrollEnd && !animationKind) {
      window.clearTimeout(scrollEndFallbackTimeout);
      scrollEndFallbackTimeout = window.setTimeout(
        handleScrollFinished,
        HORIZONTAL_SCROLL_END_FALLBACK_DELAY_MS,
      );
    }
  };

  const handleTouchStart = () => {
    if (animationKind === "arrival") {
      cancelAnimation();
      window.clearTimeout(scrollEndFallbackTimeout);
      window.scroll({ left: centeredScrollX(), behavior: "instant" });
      return;
    }

    cancelAnimation();
  };

  const alignImmediately = () => {
    cancelAnimation();
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

    const direction = consumePendingHorizontalSwipeArrival(location.pathname);
    if (!direction || !ENABLE_HORIZONTAL_SWIPE_ARRIVAL) return;

    const startX =
      centeredScrollX() +
      (direction === "left"
        ? -HORIZONTAL_PAGE_ARRIVAL_OFFSET
        : HORIZONTAL_PAGE_ARRIVAL_OFFSET);
    window.scroll({ left: startX, behavior: "instant" });
    animateToCenter("arrival");
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
      cancelAnimation();
    });
  });

  return { alignImmediately };
};

export default useHorizontalPageMotion;
