import { createEffect, onCleanup, onMount } from "solid-js";
import {
  ENABLE_HORIZONTAL_SWIPE_ARRIVAL,
  HORIZONTAL_PAGE_ARRIVAL_DURATION_MS,
  HORIZONTAL_PAN_EDGE_OVERSHOOT,
  HORIZONTAL_PAN_EDGE_RESISTANCE,
  HORIZONTAL_PAN_ENTRY_DISTANCE,
  HORIZONTAL_PAN_RECT_EDGE_TOLERANCE,
  HORIZONTAL_SWIPE_CENTER_TOLERANCE,
} from "~/constants";
import { useGlobalContext } from "~/store/StoreProvider";
import { useLocation } from "@solidjs/router";
import type {
  HorizontalGestureEnd,
  HorizontalGestureMove,
} from "~/hooks/useHorizontalSwipeNavigation";
import { swipeArrivalPreparation } from "~/utils/routeTransitionPolicy";

type RevealableDirections = {
  left: boolean;
  right: boolean;
};

const INSPECTABLE_SELECTOR =
  '[data-horizontal-inspectable="true"], [data-side-image]';
const HORIZONTAL_INTENT_RATIO = 1.1;
const NAVIGATION_DRAG_RESISTANCE = 0.3;
const RECENTER_DURATION_MS = 280;
const WHEEL_IDLE_MS = 120;

const useHorizontalPageMotion = () => {
  const { store, set_store } = useGlobalContext();
  const location = useLocation();
  let arrivalAnimationFrame: number | undefined;
  let cameraAnimationFrame: number | undefined;
  let initialCenterFrame: number | undefined;
  let wheelIdleTimeout: number | undefined;
  let gestureStartOffset = 0;
  let gesturePanning = false;
  let revealableDirections: RevealableDirections = {
    left: false,
    right: false,
  };

  const centeredVirtualScrollX = () =>
    Math.max(0, (store.scrollWidth - store.innerWidth) / 2);

  const maximumCameraOffset = () =>
    Math.max(centeredVirtualScrollX(), store.pageNecessaryMargin);

  const routeHasSwipeArrival = () =>
    ENABLE_HORIZONTAL_SWIPE_ARRIVAL &&
    swipeArrivalPreparation(store, location.pathname) !== "none" &&
    store.pending_arrival_direction !== null;

  const cameraIsCentered = () =>
    Math.abs(store.horizontal_camera_offset) <=
    HORIZONTAL_SWIPE_CENTER_TOLERANCE;

  const updateVirtualScrollX = (cameraOffset: number) => {
    set_store("scrollX", centeredVirtualScrollX() - cameraOffset);
  };

  const resistedCameraOffset = (requested: number) => {
    const limit = maximumCameraOffset();
    const absolute = Math.abs(requested);
    if (absolute <= limit) return requested;

    const resisted =
      limit +
      Math.min(
        HORIZONTAL_PAN_EDGE_OVERSHOOT,
        (absolute - limit) * HORIZONTAL_PAN_EDGE_RESISTANCE,
      );
    return Math.sign(requested) * resisted;
  };

  const setCameraOffset = (requested: number) => {
    const offset = resistedCameraOffset(requested);
    set_store("horizontal_camera_offset", offset);
    updateVirtualScrollX(offset);
  };

  const inspectableDirections = (): RevealableDirections => {
    const directions = { left: false, right: false };
    const viewportBottom = store.innerHeight;
    const viewportRight = store.innerWidth;

    document
      .querySelectorAll<HTMLElement>(INSPECTABLE_SELECTOR)
      .forEach((element) => {
        const rect = element.getBoundingClientRect();
        const overlapsViewportVertically =
          rect.width > 0 &&
          rect.height > 0 &&
          rect.bottom > 0 &&
          rect.top < viewportBottom;
        if (!overlapsViewportVertically) return;

        if (rect.left < -HORIZONTAL_PAN_RECT_EDGE_TOLERANCE) {
          directions.left = true;
        }
        if (rect.right > viewportRight + HORIZONTAL_PAN_RECT_EDGE_TOLERANCE) {
          directions.right = true;
        }
      });

    return directions;
  };

  const canRevealForDelta = (deltaX: number) =>
    deltaX > 0 ? revealableDirections.left : revealableDirections.right;

  const clearArrivalAnimation = () => {
    if (arrivalAnimationFrame === undefined) return;
    cancelAnimationFrame(arrivalAnimationFrame);
    arrivalAnimationFrame = undefined;
  };

  const clearCameraAnimation = () => {
    if (cameraAnimationFrame === undefined) return;
    cancelAnimationFrame(cameraAnimationFrame);
    cameraAnimationFrame = undefined;
  };

  const completeArrival = () => {
    clearArrivalAnimation();
    if (store.arrival_route_path !== location.pathname) return;
    set_store("horizontal_arrival_phase", "idle");
    set_store("pending_navigation_kind", "standard");
    set_store("pending_arrival_direction", null);
    set_store("arrival_route_path", "");
    set_store("pending_route_target", "top");
    set_store("horizontal_arrival_offset", 0);
  };

  const startCustomArrival = () => {
    clearArrivalAnimation();
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
    completeArrival();
    clearCameraAnimation();
    const startOffset = store.horizontal_camera_offset;
    if (Math.abs(startOffset) < 1) {
      setCameraOffset(0);
      set_store("horizontal_camera_dragging", false);
      set_store("margin_mode", false);
      return;
    }

    const startedAt = performance.now();
    set_store("horizontal_camera_dragging", true);
    const tick = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / RECENTER_DURATION_MS);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCameraOffset(startOffset * (1 - easedProgress));

      if (progress < 1) {
        cameraAnimationFrame = requestAnimationFrame(tick);
        return;
      }

      cameraAnimationFrame = undefined;
      setCameraOffset(0);
      set_store("horizontal_camera_dragging", false);
      set_store("margin_mode", false);
    };
    cameraAnimationFrame = requestAnimationFrame(tick);
  };

  const handleGestureStart = () => {
    clearCameraAnimation();
    gestureStartOffset = store.horizontal_camera_offset;
    gesturePanning = store.margin_mode;
    revealableDirections = store.margin_mode
      ? { left: true, right: true }
      : inspectableDirections();
    set_store("horizontal_camera_dragging", true);

    if (routeHasSwipeArrival()) {
      completeArrival();
      setCameraOffset(0);
    }
  };

  const handleGestureMove = (gesture: HorizontalGestureMove) => {
    if (store.horizontal_arrival_phase === "animating") return;
    const horizontalIntent =
      Math.abs(gesture.deltaX) >
      Math.abs(gesture.deltaY) * HORIZONTAL_INTENT_RATIO;
    if (!horizontalIntent) return;

    if (
      !gesturePanning &&
      Math.abs(gesture.deltaX) >= HORIZONTAL_PAN_ENTRY_DISTANCE &&
      canRevealForDelta(gesture.deltaX)
    ) {
      gesturePanning = true;
    }

    const movement = gesturePanning
      ? gesture.deltaX
      : gesture.deltaX * NAVIGATION_DRAG_RESISTANCE;
    setCameraOffset(gestureStartOffset + movement);
  };

  const handleGestureEnd = (result: HorizontalGestureEnd) => {
    set_store("horizontal_camera_dragging", false);
    if (result.swipeInitiated) {
      set_store("margin_mode", false);
      return;
    }

    if (gesturePanning && Math.abs(store.horizontal_camera_offset) >= 1) {
      set_store("margin_mode", true);
      return;
    }

    smoothlyCenter();
  };

  const handleGestureCancel = () => {
    set_store("horizontal_camera_dragging", false);
    if (store.margin_mode) return;
    smoothlyCenter();
  };

  const handleWheel = (event: WheelEvent) => {
    const horizontalDelta =
      Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.shiftKey
          ? event.deltaY
          : 0;
    if (!horizontalDelta || store.horizontal_arrival_phase !== "idle") return;

    const cameraDelta = -horizontalDelta;
    if (!store.margin_mode) {
      revealableDirections = inspectableDirections();
      if (!canRevealForDelta(cameraDelta)) return;
      set_store("margin_mode", true);
    }

    event.preventDefault();
    clearCameraAnimation();
    set_store("horizontal_camera_dragging", true);
    setCameraOffset(store.horizontal_camera_offset + cameraDelta);
    window.clearTimeout(wheelIdleTimeout);
    wheelIdleTimeout = window.setTimeout(() => {
      set_store("horizontal_camera_dragging", false);
    }, WHEEL_IDLE_MS);
  };

  const alignImmediately = () => {
    if (store.horizontal_arrival_phase !== "idle") return;
    clearCameraAnimation();
    clearArrivalAnimation();
    setCameraOffset(0);
    set_store("horizontal_camera_dragging", false);
    set_store("margin_mode", false);
    window.scroll({ left: 0, behavior: "instant" });
  };

  const handleScroll = () => {
    set_store("scrollY", window.scrollY);
    if (window.scrollX !== 0) {
      window.scroll({ left: 0, behavior: "instant" });
    }
  };

  createEffect(() => {
    if (!store.saved_scroll_finished || store.route_phase !== "idle") return;
    if (
      !routeHasSwipeArrival() ||
      store.horizontal_arrival_phase !== "preparing"
    ) {
      return;
    }

    setCameraOffset(0);
    startCustomArrival();
  });

  onMount(() => {
    if (!routeHasSwipeArrival()) {
      initialCenterFrame = requestAnimationFrame(alignImmediately);
    }
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel, { passive: false });

    onCleanup(() => {
      if (initialCenterFrame !== undefined) {
        cancelAnimationFrame(initialCenterFrame);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.clearTimeout(wheelIdleTimeout);
      clearArrivalAnimation();
      clearCameraAnimation();
    });
  });

  return {
    alignImmediately,
    cameraIsCentered,
    handleGestureCancel,
    handleGestureEnd,
    handleGestureMove,
    handleGestureStart,
    smoothlyCenter,
  };
};

export default useHorizontalPageMotion;
