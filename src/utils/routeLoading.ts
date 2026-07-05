import { SetStoreFunction } from "solid-js/store";
import {
  FAST_ROUTE_LOAD_MS,
  LOADING_SPINNER_DELAY_MS,
  ROUTE_LOAD_MEMORY_TTL_MS,
} from "~/constants";
import { RouteLoadTarget, Store } from "~/store/StoreProvider";

let loadingDelayTimeout: number | undefined;

export const routePathFromPage = (page: string) => {
  const [path] = page.split(/[?#]/);
  return path || "/";
};

const loadMsForTarget = (
  store: Store,
  routePath: string,
  target: RouteLoadTarget,
) => {
  const memory = store.route_load_memory[routePath];
  if (!memory) return undefined;

  return target === "top"
    ? memory.firstContentPaintMs
    : memory.routeReadyMs;
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
) => {
  const routePath = routePathFromPage(page);
  window.clearTimeout(loadingDelayTimeout);

  set_store("pending_route_started_at", performance.now());
  set_store("pending_route_path", routePath);
  set_store("pending_route_target", target);

  if (recentFastLoad(store, routePath, target)) {
    set_store("loading", false);
    loadingDelayTimeout = window.setTimeout(() => {
      set_store("loading", true);
    }, LOADING_SPINNER_DELAY_MS);
    return;
  }

  set_store("loading", true);
};

export const recordFirstContentPaint = (
  page: string,
  store: Store,
  set_store: SetStoreFunction<Store>,
) => {
  const routePath = routePathFromPage(page);

  if (store.pending_route_path !== routePath || !store.pending_route_started_at) {
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

  if (store.pending_route_path === routePath && store.pending_route_started_at) {
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
  set_store("pending_route_target", "top");
  set_store("route_scroll_in_progress", false);
  set_store("loading", false);
};
