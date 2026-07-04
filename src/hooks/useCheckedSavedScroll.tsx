import { useLocation, useSearchParams } from "@solidjs/router";
import { createEffect, createSignal, onMount, untrack } from "solid-js";
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

  if (anchorId) {
    const { scrollToInChapter } = useScrollToInChapter();

    onMount(() => {
      setTimeout(async () => {
        await scrollToInChapter(anchorId as string);
        set_store("saved_scroll_finished", true);
      }, 300);
    });

    return;
  }

  const [scroll, set_scroll] = createSignal<number | null>(null);
  const article = location.pathname.split("/").pop() || "";
  const scrollKey = `${article}_scroll`;

  createEffect(() => {
    const update = () => {
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

      window.addEventListener("scroll", update);
    }, 100);

    return () => {
      window.removeEventListener("scroll", update);
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
