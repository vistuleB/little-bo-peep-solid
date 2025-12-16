import { onMount } from "solid-js";
import { useGlobalContext } from "~/store/StoreProvider";

const useNoScrollRestoration = () => {
  const { set_store } = useGlobalContext();

  onMount(() => {
    // pages that don't need scroll restoration should mark as finished immediately
    set_store("saved_scroll_finished", true);
  });
};

export default useNoScrollRestoration;
