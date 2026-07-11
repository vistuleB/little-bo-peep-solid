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

let loadingDelayTimeout: number | undefined;

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
  const hasSwipeArrival =
    store.pending_navigation_kind === "swipe" &&
    store.pending_arrival_direction !== null;
  const provisionalScrollX = hasSwipeArrival
    ? centeredScrollX +
      (store.pending_arrival_direction === "left"
        ? -HORIZONTAL_PAGE_ARRIVAL_OFFSET
        : HORIZONTAL_PAGE_ARRIVAL_OFFSET)
    : centeredScrollX;

  window.scroll({
    left: provisionalScrollX,
    top: 0,
    behavior: "instant",
  });
  set_store("scrollX", provisionalScrollX);
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
    navigationIntent.kind === "swipe" ? "preparing" : "idle",
  );
  set_store("route_phase", "loading-old-route");

  if (
    routeNeverNeedsInitialLoadingScreen(routePath) ||
    recentFastLoad(store, routePath, target)
  ) {
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
  window.clearTimeout(loadingDelayTimeout);

  if (
    store.pending_route_path === routePath &&
    store.pending_route_started_at
  ) {
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
