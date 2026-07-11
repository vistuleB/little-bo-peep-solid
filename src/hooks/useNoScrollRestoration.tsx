import { onMount } from "solid-js";
import { useGlobalContext } from "~/store/StoreProvider";
import {
  finishRouteLoad,
  markDestinationRouteMounted,
} from "~/utils/routeLoading";

const useNoScrollRestoration = () => {
  const { store, set_store } = useGlobalContext();

  onMount(() => {
    // pages that don't need scroll restoration should mark as finished immediately
    markDestinationRouteMounted(location.pathname, store, set_store);
    window.scroll({ top: 0, behavior: "instant" });
    set_store("scrollY", 0);
    set_store("scroll_is_at_0", true);
    set_store(
      "rest_mounting_finished_for_route_started_at",
      store.pending_route_started_at,
    );
    set_store("saved_scroll_finished", true);
    finishRouteLoad(location.pathname, store, set_store);
  });
};

export default useNoScrollRestoration;
