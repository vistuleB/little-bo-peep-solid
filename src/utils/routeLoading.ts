import { SetStoreFunction } from "solid-js/store";
import {
  FAST_ROUTE_LOAD_MS,
  HORIZONTAL_PAGE_ARRIVAL_OFFSET,
  LOADING_SPINNER_DELAY_MS,
  ROUTE_LOAD_MEMORY_TTL_MS,
} from "~/constants";
import type {
  HorizontalSwipeDirection,
  RouteLoadTarget,
  Store,
} from "~/store/StoreProvider";
import {
  routeNeverNeedsInitialLoadingScreen,
  shouldSetProvisionalDestinationTopScroll,
} from "./routeTransitionPolicy";
import {
  lockHorizontalDocumentScroll,
  unlockHorizontalDocumentScroll,
} from "./horizontalScrollLock";

let loadingDelayTimeout: number | undefined;
let momentumKillFrame: number | undefined;
let unlockFrame: number | undefined;
let positionVerificationFrame: number | undefined;

const cancelMomentumPreparation = () => {
  if (momentumKillFrame !== undefined) cancelAnimationFrame(momentumKillFrame);
  if (unlockFrame !== undefined) cancelAnimationFrame(unlockFrame);
  if (positionVerificationFrame !== undefined) {
    cancelAnimationFrame(positionVerificationFrame);
  }
  momentumKillFrame = undefined;
  unlockFrame = undefined;
  positionVerificationFrame = undefined;
  unlockHorizontalDocumentScroll();
};

export type RouteNavigationIntent =
  | { kind: "standard" }
  | { kind: "swipe"; direction: HorizontalSwipeDirection };

export const routePathFromPage = (page: string) => {
  const [path] = page.split(/[?#]/);
  return path || "/";
};

const setSpinnerCurrentlyVisible = (
  set_store: SetStoreFunction<Store>,
  visible: boolean,
) => {
  set_store("spinner_currently_visible", visible);
};

const maybeSetProvisionalDestinationTopScroll = (
  store: Store,
  set_store: SetStoreFunction<Store>,
) => {
  if (
    shouldSetProvisionalDestinationTopScroll({
      spinnerCurrentlyVisible: store.spinner_currently_visible,
    })
  ) {
    setProvisionalDestinationTopScroll(store, set_store);
  }
};

const setProvisionalDestinationTopScroll = (
  store: Store,
  set_store: SetStoreFunction<Store>,
) => {
  const centeredScrollX = (document.body.scrollWidth - window.innerWidth) / 2;

  window.scroll({
    left: centeredScrollX,
    top: 0,
    behavior: "instant",
  });
  set_store("scrollX", centeredScrollX);
  set_store("scrollY", 0);
  set_store("scroll_is_at_0", true);
};

const loadMsForTarget = (
  store: Store,
  routePath: string,
  target: RouteLoadTarget,
) => {
  const memory = store.route_load_memory[routePath];
  if (!memory) return undefined;

  return target === "top" ? memory.firstContentPaintMs : memory.routeReadyMs;
};

const recentFastLoad = (
  store: Store,
  routePath: string,
  target: RouteLoadTarget,
) => {
  const memory = store.route_load_memory[routePath];
  const loadMs = loadMsForTarget(store, routePath, target);
  if (!memory || loadMs === undefined) return false;

  const recent = Date.now() - memory.measuredAt < ROUTE_LOAD_MEMORY_TTL_MS;
  return recent && loadMs < FAST_ROUTE_LOAD_MS;
};

export const startRouteLoad = (
  page: string,
  target: RouteLoadTarget,
  store: Store,
  set_store: SetStoreFunction<Store>,
  navigationIntent: RouteNavigationIntent = { kind: "standard" },
) => {
  const routePath = routePathFromPage(page);
  window.clearTimeout(loadingDelayTimeout);
  cancelMomentumPreparation();

  set_store("pending_route_started_at", performance.now());
  set_store("pending_route_path", routePath);
  set_store("pending_route_target", target);
  set_store("pending_navigation_kind", navigationIntent.kind);
  set_store(
    "pending_arrival_direction",
    navigationIntent.kind === "swipe" ? navigationIntent.direction : null,
  );
  set_store(
    "arrival_route_path",
    navigationIntent.kind === "swipe" ? routePath : "",
  );
  set_store(
    "horizontal_arrival_phase",
    navigationIntent.kind === "swipe" ? "awaiting-destination" : "idle",
  );
  set_store("horizontal_arrival_offset", 0);
  set_store("route_phase", "loading-old-route");

  if (routeNeverNeedsInitialLoadingScreen(routePath)) {
    setSpinnerCurrentlyVisible(set_store, false);
    return;
  }

  if (recentFastLoad(store, routePath, target)) {
    setSpinnerCurrentlyVisible(set_store, false);
    loadingDelayTimeout = window.setTimeout(() => {
      setSpinnerCurrentlyVisible(set_store, true);
      if (store.route_phase === "loading-new-route") {
        maybeSetProvisionalDestinationTopScroll(store, set_store);
      }
    }, LOADING_SPINNER_DELAY_MS);
    return;
  }

  setSpinnerCurrentlyVisible(set_store, true);
};

export const markDestinationRouteMounted = (
  page: string,
  store: Store,
  set_store: SetStoreFunction<Store>,
) => {
  const routePath = routePathFromPage(page);
  if (store.pending_route_path !== routePath) return;

  if (
    store.pending_navigation_kind === "swipe" &&
    store.arrival_route_path === routePath &&
    store.pending_arrival_direction !== null
  ) {
    set_store("horizontal_arrival_phase", "killing-momentum");
    lockHorizontalDocumentScroll();
    const direction = store.pending_arrival_direction;
    const arrivalStillCurrent = () =>
      store.pending_navigation_kind === "swipe" &&
      store.arrival_route_path === routePath &&
      store.pending_arrival_direction === direction;

    momentumKillFrame = requestAnimationFrame(() => {
      momentumKillFrame = undefined;
      if (!arrivalStillCurrent()) return;

      unlockFrame = requestAnimationFrame(() => {
        unlockFrame = undefined;
        if (!arrivalStillCurrent()) return;

        unlockHorizontalDocumentScroll();
        const centeredScrollX =
          (document.body.scrollWidth - window.innerWidth) / 2;
        window.scroll({ left: centeredScrollX, behavior: "instant" });
        set_store("scrollX", centeredScrollX);

        positionVerificationFrame = requestAnimationFrame(() => {
          positionVerificationFrame = undefined;
          if (!arrivalStillCurrent()) return;

          const verifiedCenter =
            (document.body.scrollWidth - window.innerWidth) / 2;
          if (Math.abs(window.scrollX - verifiedCenter) >= 1) {
            window.scroll({ left: verifiedCenter, behavior: "instant" });
          }
          set_store("scrollX", window.scrollX);
          set_store(
            "horizontal_arrival_offset",
            direction === "left"
              ? HORIZONTAL_PAGE_ARRIVAL_OFFSET
              : -HORIZONTAL_PAGE_ARRIVAL_OFFSET,
          );
          set_store("horizontal_arrival_phase", "preparing");
        });
      });
    });
  }

  set_store("route_phase", "loading-new-route");
  maybeSetProvisionalDestinationTopScroll(store, set_store);
};

export const recordFirstContentPaint = (
  page: string,
  store: Store,
  set_store: SetStoreFunction<Store>,
) => {
  const routePath = routePathFromPage(page);

  if (
    store.pending_route_path !== routePath ||
    !store.pending_route_started_at
  ) {
    return;
  }

  const firstContentPaintMs =
    performance.now() - store.pending_route_started_at;
  const memory = store.route_load_memory[routePath];
  set_store("route_load_memory", routePath, {
    ...memory,
    firstContentPaintMs,
    measuredAt: Date.now(),
  });
};

export const finishRouteLoad = (
  page: string,
  store: Store,
  set_store: SetStoreFunction<Store>,
) => {
  const routePath = routePathFromPage(page);
  if (store.pending_route_path !== routePath) return;

  window.clearTimeout(loadingDelayTimeout);

  if (store.pending_route_started_at) {
    const routeReadyMs = performance.now() - store.pending_route_started_at;
    const memory = store.route_load_memory[routePath];
    set_store("last_page_load_ms", routeReadyMs);
    set_store("total_page_load_ms", store.total_page_load_ms + routeReadyMs);
    set_store("num_page_loads", store.num_page_loads + 1);
    set_store("route_load_memory", routePath, {
      ...memory,
      routeReadyMs,
      measuredAt: Date.now(),
    });
  }

  set_store("pending_route_started_at", 0);
  set_store("pending_route_path", "");
  if (store.pending_navigation_kind === "standard") {
    set_store("pending_route_target", "top");
  }
  set_store("route_phase", "idle");
  set_store("route_scroll_in_progress", false);
  setSpinnerCurrentlyVisible(set_store, false);
};
