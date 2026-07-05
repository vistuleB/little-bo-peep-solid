import { onMount } from "solid-js";
import { useGlobalContext } from "~/store/StoreProvider";
import { finishRouteLoad } from "~/utils/routeLoading";

const useNoScrollRestoration = () => {
  const { store, set_store } = useGlobalContext();

  onMount(() => {
    // pages that don't need scroll restoration should mark as finished immediately
    set_store("saved_scroll_finished", true);
    finishRouteLoad(location.pathname, store, set_store);
  });
};

export default useNoScrollRestoration;
