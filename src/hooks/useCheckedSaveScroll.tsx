import { useSearchParams } from "@solidjs/router";
import { createEffect, createSignal, onMount } from "solid-js";
import useScrollToInChapter from "./useScrollToInChapter";

const useCheckedSaveScroll = () => {
  const [searchParams, _] = useSearchParams();
  if (searchParams.id) {
    const scrollToInChapter = useScrollToInChapter();

    onMount(() => {
      if (searchParams && searchParams.id) {
        setTimeout(() => {
          scrollToInChapter(searchParams.id as string, false);
        }, 50);
        setTimeout(() => {
          scrollToInChapter(searchParams.id as string, false);
        }, 500);
      }
    });

    return;
  }

  const [scroll, set_scroll] = createSignal<number | null>(null);

  createEffect(() => {
    const update = (e: Event) => {
      set_scroll(window.scrollY);
    };

    requestAnimationFrame(() => {
      const article = location.pathname.split("/").pop();
      set_scroll(Number(localStorage.getItem(`${article}_scroll`) || "0"));

      if (scroll() !== null) {
        window.scrollTo(
          (document.body.scrollWidth - window.innerWidth) / 2,
          Number(scroll()),
        );
      }

      window.addEventListener("scroll", update);
    });

    return () => {
      window.removeEventListener("scroll", update);
    };
  });

  createEffect(() => {
    if (scroll() !== null) {
      requestAnimationFrame(() => {
        const article = location.pathname.split("/").pop();
        localStorage.setItem(`${article}_scroll`, window.scrollY.toString());
      });
    }
  });
};

export default useCheckedSaveScroll;
