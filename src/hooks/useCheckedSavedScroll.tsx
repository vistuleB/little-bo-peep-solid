import { useLocation, useSearchParams } from "@solidjs/router";
import {
  createEffect,
  createSignal,
  onCleanup,
  onMount,
  untrack,
} from "solid-js";
import useScrollToInChapter from "./useScrollToInChapter";
import { useGlobalContext } from "~/store/StoreProvider";
import {
  finishRouteLoad,
  markDestinationRouteMounted,
} from "~/utils/routeLoading";
import {
  HASH_SCROLL_RESTORATION_DELAY_MS,
  IN_CHAPTER_SCROLL_DURATION_MS,
  SAVED_SCROLL_RESTORATION_DELAY_MS,
  SCROLL_RESTORATION_ANIMATION_FINISH_BUFFER_MS,
} from "~/constants";

const useCheckedSavedScroll = () => {
  const [searchParams, _] = useSearchParams();
  const location = useLocation();
  const { store, set_store } = useGlobalContext();

  onMount(() => {
    set_store("saved_scroll_finished", false);
    markDestinationRouteMounted(location.pathname, store, set_store);
  });

  const anchorId = searchParams.id || location.hash.slice(1);
  const article = location.pathname.split("/").pop() || "";
  const scrollKey = `${article}_scroll`;

  const update = () => {
    if (untrack(() => store.suppress_scroll_memory)) return;
    localStorage.setItem(scrollKey, window.scrollY.toString());
  };

  const waitForRouteContentMount = () =>
    new Promise<void>((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => resolve());
      });
    });

  if (anchorId) {
    const { scrollToInChapter } = useScrollToInChapter();

    onMount(() => {
      const restoreScroll = async () => {
        set_store("route_scroll_in_progress", true);
        await waitForRouteContentMount();
        await scrollToInChapter(
          anchorId as string,
          IN_CHAPTER_SCROLL_DURATION_MS,
        );
        window.setTimeout(
          () => {
            update();
            set_store("saved_scroll_finished", true);
            set_store("route_scroll_in_progress", false);
            finishRouteLoad(location.pathname, store, set_store);
            window.addEventListener("scroll", update);
          },
          store.animations
            ? IN_CHAPTER_SCROLL_DURATION_MS +
                SCROLL_RESTORATION_ANIMATION_FINISH_BUFFER_MS
            : 0,
        );
      };
      window.setTimeout(restoreScroll, HASH_SCROLL_RESTORATION_DELAY_MS);
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

    const restoreScroll = async () => {
      const savedScroll = Number(localStorage.getItem(scrollKey) || "0");
      set_scroll(savedScroll);

      set_store("route_scroll_in_progress", true);
      await waitForRouteContentMount();
      window.scrollTo(
        (document.body.scrollWidth - window.innerWidth) / 2,
        savedScroll,
      );
      set_store("saved_scroll_finished", true);
      set_store("route_scroll_in_progress", false);
      finishRouteLoad(location.pathname, store, set_store);

      window.addEventListener("scroll", updateScroll);
    };
    window.setTimeout(restoreScroll, SAVED_SCROLL_RESTORATION_DELAY_MS);

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
