import { useLocation } from "@solidjs/router";
import { createEffect } from "solid-js";
import { useGlobalContext } from "~/store/StoreProvider";
import {
  finishRouteLoad,
  markDestinationRouteMounted,
} from "~/utils/routeLoading";

const useNoScrollRestoration = () => {
  const { store, set_store } = useGlobalContext();
  const location = useLocation();
  const owningRoutePath = location.pathname;
  let initialized = false;

  createEffect(() => {
    const routePath = location.pathname;
    const pendingRoutePath = store.pending_route_path;
    if (routePath !== owningRoutePath) return;
    if (initialized && pendingRoutePath !== routePath) return;
    initialized = true;

    // pages that don't need scroll restoration should mark as finished immediately
    markDestinationRouteMounted(routePath, store, set_store);
    window.scroll({ top: 0, behavior: "instant" });
    set_store("scrollY", 0);
    set_store("scroll_is_at_0", true);
    set_store(
      "rest_mounting_finished_for_route_started_at",
      store.pending_route_started_at,
    );
    set_store("saved_scroll_finished", true);
    finishRouteLoad(routePath, store, set_store);
  });
};

export default useNoScrollRestoration;
