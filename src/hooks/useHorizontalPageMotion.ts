import { createEffect, onCleanup, onMount } from "solid-js";
import {
  ENABLE_HORIZONTAL_SWIPE_ARRIVAL,
  HORIZONTAL_PAGE_ARRIVAL_DURATION_MS,
  HORIZONTAL_PAN_EDGE_OVERSHOOT,
  HORIZONTAL_PAN_ENTRY_DISTANCE,
  HORIZONTAL_PAN_RECENTER_TOLERANCE_MIN,
  HORIZONTAL_PAN_RECENTER_TOLERANCE_VIEWPORT_RATIO,
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

type InspectableSnapshot = {
  directions: RevealableDirections;
  extent: number;
};

const INSPECTABLE_SELECTOR =
  '[data-horizontal-inspectable="true"], [data-side-image]';
const HORIZONTAL_INTENT_RATIO = 1.1;
const PAN_SMOOTHING_FACTOR = 0.7;
const PAN_SMOOTHING_MAX_LAG = 6;
const PAN_SMOOTHING_SETTLE_DISTANCE = 0.25;
const RECENTER_DURATION_MS = 280;
const WHEEL_IDLE_MS = 120;
let activePageMotionOwner: symbol | undefined;
const mountedPageMotionOwners: symbol[] = [];

const claimPageMotionOwnership = (owner: symbol) => {
  const previousIndex = mountedPageMotionOwners.indexOf(owner);
  if (previousIndex !== -1) mountedPageMotionOwners.splice(previousIndex, 1);
  mountedPageMotionOwners.push(owner);
  activePageMotionOwner = owner;
};

const releasePageMotionOwnership = (owner: symbol) => {
  const index = mountedPageMotionOwners.indexOf(owner);
  if (index !== -1) mountedPageMotionOwners.splice(index, 1);
  if (activePageMotionOwner === owner) {
    activePageMotionOwner = mountedPageMotionOwners.at(-1);
  }
};

const useHorizontalPageMotion = (
  pageCameraSurface: () => HTMLElement | undefined,
) => {
  const pageMotionOwner = Symbol("page-motion-owner");
  claimPageMotionOwnership(pageMotionOwner);
  const { store, set_store } = useGlobalContext();
  const location = useLocation();
  let arrivalAnimationFrame: number | undefined;
  let cameraAnimationFrame: number | undefined;
  let encounterAnimationFrame: number | undefined;
  let initialCenterFrame: number | undefined;
  let panSmoothingAnimationFrame: number | undefined;
  let panSmoothingTarget = 0;
  let wheelIdleTimeout: number | undefined;
  let gestureStartOffset = 0;
  let gesturePanning = false;
  let gestureOwnedByThisPage = false;
  // A panning trip has one symmetric, monotonically increasing range. It is
  // reset only when the page returns to its centered state.
  let tripCameraExtent = 0;
  let gestureInspectableSnapshot: InspectableSnapshot = {
    directions: { left: false, right: false },
    extent: 0,
  };

  const centeredVirtualScrollX = () =>
    Math.max(0, (store.scrollWidth - store.innerWidth) / 2);

  const maximumCameraOffset = () => tripCameraExtent;
  const motionIsActive = () => activePageMotionOwner === pageMotionOwner;

  const routeHasSwipeArrival = () =>
    ENABLE_HORIZONTAL_SWIPE_ARRIVAL &&
    swipeArrivalPreparation(store, location.pathname) !== "none" &&
    store.pending_arrival_direction !== null;

  const cameraIsCentered = () =>
    Math.abs(store.horizontal_camera_offset) <=
    HORIZONTAL_SWIPE_CENTER_TOLERANCE;

  const panRecenterTolerance = () =>
    Math.max(
      HORIZONTAL_PAN_RECENTER_TOLERANCE_MIN,
      window.innerWidth * HORIZONTAL_PAN_RECENTER_TOLERANCE_VIEWPORT_RATIO,
    );

  const cameraIsWithinPanRecenterTolerance = () =>
    Math.abs(store.horizontal_camera_offset) <= panRecenterTolerance();

  const resistedCameraOffset = (requested: number) => {
    const limit = maximumCameraOffset();
    const absolute = Math.abs(requested);
    if (absolute <= limit) return requested;

    const excess = absolute - limit;
    // Keep the movement's slope continuous at the range boundary, then
    // progressively stiffen toward the maximum rubber-band overshoot.
    const resisted =
      limit +
      HORIZONTAL_PAN_EDGE_OVERSHOOT *
        (1 - Math.exp(-excess / HORIZONTAL_PAN_EDGE_OVERSHOOT));
    return Math.sign(requested) * resisted;
  };

  const setCameraOffset = (requested: number) => {
    const offset = resistedCameraOffset(requested);
    set_store("horizontal_camera_offset", offset);
  };

  const clearPanSmoothing = () => {
    if (panSmoothingAnimationFrame === undefined) return;
    cancelAnimationFrame(panSmoothingAnimationFrame);
    panSmoothingAnimationFrame = undefined;
  };

  const tickPanSmoothing = () => {
    if (!motionIsActive()) {
      panSmoothingAnimationFrame = undefined;
      return;
    }
    const target = resistedCameraOffset(panSmoothingTarget);
    const current = store.horizontal_camera_offset;
    const difference = target - current;
    if (Math.abs(difference) <= PAN_SMOOTHING_SETTLE_DISTANCE) {
      set_store("horizontal_camera_offset", target);
      panSmoothingAnimationFrame = undefined;
      return;
    }

    let next = current + difference * PAN_SMOOTHING_FACTOR;
    const remainingLag = target - next;
    if (Math.abs(remainingLag) > PAN_SMOOTHING_MAX_LAG) {
      next = target - Math.sign(remainingLag) * PAN_SMOOTHING_MAX_LAG;
    }
    set_store("horizontal_camera_offset", next);
    panSmoothingAnimationFrame = requestAnimationFrame(tickPanSmoothing);
  };

  const setSmoothedCameraOffset = (requested: number) => {
    panSmoothingTarget = requested;
    if (panSmoothingAnimationFrame !== undefined) return;
    panSmoothingAnimationFrame = requestAnimationFrame(tickPanSmoothing);
  };

  const inspectableSnapshot = (): InspectableSnapshot => {
    const directions = { left: false, right: false };
    let encounteredOverflow = 0;
    const viewportBottom = window.innerHeight;
    const viewportRight = window.innerWidth;
    const cameraOffset = store.horizontal_camera_offset;
    const surface = pageCameraSurface();
    if (!surface) return { directions, extent: 0 };

    surface
      .querySelectorAll<HTMLElement>(INSPECTABLE_SELECTOR)
      .forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (
          rect.width <= 0 ||
          rect.height <= 0 ||
          rect.bottom <= 0 ||
          rect.top >= viewportBottom
        ) {
          return;
        }

        let visibleTop = rect.top;
        let visibleBottom = rect.bottom;
        let rendered = true;
        let ancestor: HTMLElement | null = element;

        while (rendered && ancestor) {
          const style = getComputedStyle(ancestor);
          if (
            style.display === "none" ||
            style.visibility === "hidden" ||
            style.visibility === "collapse" ||
            Number(style.opacity) === 0
          ) {
            rendered = false;
            break;
          }

          if (
            style.overflowY === "hidden" ||
            style.overflowY === "clip" ||
            style.overflowY === "auto" ||
            style.overflowY === "scroll"
          ) {
            const ancestorRect = ancestor.getBoundingClientRect();
            visibleTop = Math.max(visibleTop, ancestorRect.top);
            visibleBottom = Math.min(visibleBottom, ancestorRect.bottom);
          }
          ancestor = ancestor.parentElement;
        }

        const overlapsViewportVertically =
          rendered &&
          visibleBottom > visibleTop &&
          visibleBottom > 0 &&
          visibleTop < viewportBottom;
        if (!overlapsViewportVertically) return;

        // Measure in the page's centered coordinate space. Otherwise moving
        // the camera would make the same element appear to extend the range.
        const centeredLeft = rect.left - cameraOffset;
        const centeredRight = rect.right - cameraOffset;
        const leftOverflow = Math.max(0, -centeredLeft);
        const rightOverflow = Math.max(0, centeredRight - viewportRight);

        if (leftOverflow > HORIZONTAL_PAN_RECT_EDGE_TOLERANCE) {
          directions.left = true;
        }
        if (rightOverflow > HORIZONTAL_PAN_RECT_EDGE_TOLERANCE) {
          directions.right = true;
        }
        encounteredOverflow = Math.max(
          encounteredOverflow,
          leftOverflow,
          rightOverflow,
        );
      });

    return {
      directions,
      extent:
        encounteredOverflow > HORIZONTAL_PAN_RECT_EDGE_TOLERANCE
          ? encounteredOverflow + viewportRight
          : 0,
    };
  };

  const canRevealForDelta = (deltaX: number) =>
    deltaX > 0
      ? gestureInspectableSnapshot.directions.left
      : gestureInspectableSnapshot.directions.right;

  const encounterVisibleInspectables = () => {
    const snapshot = inspectableSnapshot();
    tripCameraExtent = Math.max(tripCameraExtent, snapshot.extent);
  };

  const scheduleEncounterVisibleInspectables = () => {
    if (encounterAnimationFrame !== undefined) return;
    encounterAnimationFrame = requestAnimationFrame(() => {
      encounterAnimationFrame = undefined;
      if (motionIsActive() && store.margin_mode) {
        encounterVisibleInspectables();
      }
    });
  };

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
      if (!motionIsActive()) {
        arrivalAnimationFrame = undefined;
        return;
      }
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
    if (!motionIsActive()) return;
    completeArrival();
    clearPanSmoothing();
    clearCameraAnimation();
    set_store("margin_mode", false);
    const startOffset = store.horizontal_camera_offset;
    if (Math.abs(startOffset) < 1) {
      setCameraOffset(0);
      set_store("horizontal_camera_dragging", false);
      tripCameraExtent = 0;
      return;
    }

    const startedAt = performance.now();
    set_store("horizontal_camera_dragging", true);
    const tick = (now: number) => {
      if (!motionIsActive()) {
        cameraAnimationFrame = undefined;
        return;
      }
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
      tripCameraExtent = 0;
    };
    cameraAnimationFrame = requestAnimationFrame(tick);
  };

  const handleGestureStart = () => {
    gestureOwnedByThisPage = motionIsActive();
    if (!gestureOwnedByThisPage) return;
    clearCameraAnimation();
    clearPanSmoothing();
    gestureStartOffset = store.horizontal_camera_offset;
    gesturePanning = store.margin_mode && tripCameraExtent > 0;
    if (store.margin_mode && !gesturePanning) {
      set_store("margin_mode", false);
    }
    gestureInspectableSnapshot = inspectableSnapshot();
    if (gesturePanning) {
      gestureInspectableSnapshot.directions = { left: true, right: true };
      tripCameraExtent = Math.max(
        tripCameraExtent,
        gestureInspectableSnapshot.extent,
      );
    }
    set_store("horizontal_camera_dragging", true);

    if (routeHasSwipeArrival()) {
      completeArrival();
      setCameraOffset(0);
    }
  };

  const handleGestureMove = (gesture: HorizontalGestureMove) => {
    if (!gestureOwnedByThisPage) return false;
    if (store.horizontal_arrival_phase === "animating") return false;
    const horizontalIntent =
      Math.abs(gesture.deltaX) >
      Math.abs(gesture.deltaY) * HORIZONTAL_INTENT_RATIO;
    if (!horizontalIntent) return !gesturePanning;

    if (
      !gesturePanning &&
      Math.abs(gesture.deltaX) >= HORIZONTAL_PAN_ENTRY_DISTANCE &&
      canRevealForDelta(gesture.deltaX)
    ) {
      gesturePanning = true;
      tripCameraExtent = Math.max(
        tripCameraExtent,
        gestureInspectableSnapshot.extent,
      );
    }

    if (!gesturePanning) return true;

    setSmoothedCameraOffset(gestureStartOffset + gesture.deltaX);
    return true;
  };

  const handleGestureEnd = (result: HorizontalGestureEnd) => {
    if (!gestureOwnedByThisPage) return;
    gestureOwnedByThisPage = false;
    if (gesturePanning) {
      clearPanSmoothing();
      setCameraOffset(gestureStartOffset + result.deltaX);
    }
    set_store("horizontal_camera_dragging", false);
    if (result.swipeInitiated) {
      set_store("margin_mode", false);
      return;
    }

    if (gesturePanning && !cameraIsWithinPanRecenterTolerance()) {
      set_store("margin_mode", true);
      return;
    }

    smoothlyCenter();
  };

  const handleGestureCancel = () => {
    if (!gestureOwnedByThisPage) return;
    gestureOwnedByThisPage = false;
    clearPanSmoothing();
    set_store("horizontal_camera_dragging", false);
    if (store.margin_mode) return;
    smoothlyCenter();
  };

  const handleWheel = (event: WheelEvent) => {
    if (!motionIsActive()) return;
    const horizontalDelta =
      Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.shiftKey
          ? event.deltaY
          : 0;
    if (!horizontalDelta || store.horizontal_arrival_phase !== "idle") return;

    const cameraDelta = -horizontalDelta;
    if (!store.margin_mode) {
      gestureInspectableSnapshot = inspectableSnapshot();
      if (!canRevealForDelta(cameraDelta)) return;
      tripCameraExtent = Math.max(
        tripCameraExtent,
        gestureInspectableSnapshot.extent,
      );
      set_store("margin_mode", true);
    } else {
      encounterVisibleInspectables();
    }

    event.preventDefault();
    clearCameraAnimation();
    set_store("horizontal_camera_dragging", true);
    setCameraOffset(store.horizontal_camera_offset + cameraDelta);
    window.clearTimeout(wheelIdleTimeout);
    wheelIdleTimeout = window.setTimeout(() => {
      if (motionIsActive()) {
        set_store("horizontal_camera_dragging", false);
        if (store.margin_mode && cameraIsWithinPanRecenterTolerance()) {
          smoothlyCenter();
        }
      }
    }, WHEEL_IDLE_MS);
  };

  const alignImmediately = () => {
    if (!motionIsActive()) return;
    if (store.horizontal_arrival_phase !== "idle") return;
    clearCameraAnimation();
    clearPanSmoothing();
    clearArrivalAnimation();
    setCameraOffset(0);
    set_store("horizontal_camera_dragging", false);
    set_store("margin_mode", false);
    tripCameraExtent = 0;
    set_store("scrollX", centeredVirtualScrollX());
    window.scroll({ left: 0, behavior: "instant" });
  };

  const handleScroll = () => {
    if (!motionIsActive()) return;
    set_store("scrollY", window.scrollY);
    if (store.margin_mode) scheduleEncounterVisibleInspectables();
    if (window.scrollX !== 0) {
      window.scroll({ left: 0, behavior: "instant" });
    }
  };

  createEffect(() => {
    if (!motionIsActive()) return;
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
    claimPageMotionOwnership(pageMotionOwner);
    if (!routeHasSwipeArrival()) {
      initialCenterFrame = requestAnimationFrame(alignImmediately);
    }
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel, { passive: false });

    onCleanup(() => {
      releasePageMotionOwnership(pageMotionOwner);
      if (initialCenterFrame !== undefined) {
        cancelAnimationFrame(initialCenterFrame);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.clearTimeout(wheelIdleTimeout);
      if (encounterAnimationFrame !== undefined) {
        cancelAnimationFrame(encounterAnimationFrame);
      }
      clearArrivalAnimation();
      clearCameraAnimation();
      clearPanSmoothing();
    });
  });

  return {
    alignImmediately,
    cameraIsCentered,
    handleGestureCancel,
    handleGestureEnd,
    handleGestureMove,
    handleGestureStart,
    motionIsActive,
    smoothlyCenter,
  };
};

export default useHorizontalPageMotion;
