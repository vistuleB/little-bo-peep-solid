import { SetStoreFunction } from "solid-js/store";
import { Store } from "~/store/StoreProvider";

export const FAST_ROUTE_LOAD_MS = 200;
export const ROUTE_LOAD_MEMORY_TTL_MS = 5 * 60 * 1000;
export const LOADING_SPINNER_DELAY_MS = 10000;

let loadingDelayTimeout: number | undefined;

export const routePathFromPage = (page: string) => {
  const [path] = page.split(/[?#]/);
  return path || "/";
};

const recentFastLoad = (store: Store, routePath: string) => {
  const memory = store.route_load_memory[routePath];
  if (!memory) return false;

  const recent = Date.now() - memory.measuredAt < ROUTE_LOAD_MEMORY_TTL_MS;
  return recent && memory.loadMs < FAST_ROUTE_LOAD_MS;
};

export const startRouteLoad = (
  page: string,
  store: Store,
  set_store: SetStoreFunction<Store>,
) => {
  const routePath = routePathFromPage(page);
  window.clearTimeout(loadingDelayTimeout);

  set_store("pending_route_started_at", performance.now());
  set_store("pending_route_path", routePath);

  if (recentFastLoad(store, routePath)) {
    set_store("loading", false);
    loadingDelayTimeout = window.setTimeout(() => {
      set_store("loading", true);
    }, LOADING_SPINNER_DELAY_MS);
    return;
  }

  set_store("loading", true);
};

export const finishRouteLoad = (
  page: string,
  store: Store,
  set_store: SetStoreFunction<Store>,
) => {
  const routePath = routePathFromPage(page);
  window.clearTimeout(loadingDelayTimeout);

  if (store.pending_route_path === routePath && store.pending_route_started_at) {
    const loadMs = performance.now() - store.pending_route_started_at;
    set_store("last_page_load_ms", loadMs);
    set_store("total_page_load_ms", store.total_page_load_ms + loadMs);
    set_store("num_page_loads", store.num_page_loads + 1);
    set_store("route_load_memory", routePath, {
      loadMs,
      measuredAt: Date.now(),
    });
  }

  set_store("pending_route_started_at", 0);
  set_store("pending_route_path", "");
  set_store("route_scroll_in_progress", false);
  set_store("loading", false);
};
