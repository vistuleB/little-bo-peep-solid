import { useLocation, useSearchParams } from "@solidjs/router";
import { createEffect, createSignal, onCleanup, onMount, untrack } from "solid-js";
import useScrollToInChapter from "./useScrollToInChapter";
import { useGlobalContext } from "~/store/StoreProvider";

const useCheckedSavedScroll = () => {
  const [searchParams, _] = useSearchParams();
  const location = useLocation();
  const { store, set_store } = useGlobalContext();

  onMount(() => {
    set_store("saved_scroll_finished", false);
  });

  const anchorId = searchParams.id || location.hash.slice(1);
  const article = location.pathname.split("/").pop() || "";
  const scrollKey = `${article}_scroll`;

  const update = () => {
    if (untrack(() => store.suppress_scroll_memory)) return;
    localStorage.setItem(scrollKey, window.scrollY.toString());
  };

  if (anchorId) {
    const { scrollToInChapter } = useScrollToInChapter();

    onMount(() => {
      setTimeout(async () => {
        const scrollDuration = 200;
        await scrollToInChapter(anchorId as string, scrollDuration);
        window.setTimeout(
          () => {
            update();
            set_store("saved_scroll_finished", true);
            set_store("loading", false);
            window.addEventListener("scroll", update);
          },
          store.animations ? scrollDuration + 50 : 0,
        );
      }, 300);
    });

    onCleanup(() => {
      window.removeEventListener("scroll", update);
    });

    return;
  }

  const [scroll, set_scroll] = createSignal<number | null>(null);

  createEffect(() => {
    const updateScroll = () => {
      if (untrack(() => store.suppress_scroll_memory)) return;
      set_scroll(window.scrollY);
    };

    setTimeout(() => {
      const savedScroll = Number(localStorage.getItem(scrollKey) || "0");
      set_scroll(savedScroll);

      window.scrollTo(
        (document.body.scrollWidth - window.innerWidth) / 2,
        savedScroll,
      );
      set_store("saved_scroll_finished", true);
      set_store("loading", false);

      window.addEventListener("scroll", updateScroll);
    }, 100);

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  });

  createEffect(() => {
    const currentScroll = scroll();
    if (currentScroll === null) return;
    if (untrack(() => store.suppress_scroll_memory)) return;

    requestAnimationFrame(() => {
      if (untrack(() => store.suppress_scroll_memory)) return;
      localStorage.setItem(scrollKey, currentScroll.toString());
    });
  });
};

export default useCheckedSavedScroll;
