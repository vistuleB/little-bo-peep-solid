import { createEffect, onMount, onCleanup } from "solid-js";
import { useLocation, useSearchParams } from "@solidjs/router";
import { useGlobalContext } from "~/store/StoreProvider";

const useScrollIsAt0 = () => {
  const { store, set_store } = useGlobalContext();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const route = () => store.route;

  const updateScrollIsAt0 = () => {
    const isAt0 = window.scrollY === 0;
    set_store("scroll_is_at_0", isAt0);
  };

  const handleScroll = () => {
    updateScrollIsAt0();
  };

  onMount(() => {
    updateScrollIsAt0();

    window.addEventListener("scroll", handleScroll);

    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  });

  // handle route changes and localStorage logic
  createEffect(() => {
    const article = route().split("/").pop();
    if (searchParams.id || location.hash) {
      set_store("scroll_is_at_0", false);
    } else {
      const savedScroll = Number(
        localStorage.getItem(`${article}_scroll`) || "0",
      );
      set_store("scroll_is_at_0", savedScroll === 0);
    }
  });

  // update when saved_scroll_finished changes (after scroll restoration)
  createEffect(() => {
    if (store.saved_scroll_finished) {
      updateScrollIsAt0();
    }
  });
};

export default useScrollIsAt0;
