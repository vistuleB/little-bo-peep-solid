import { onMount, onCleanup, ParentProps } from "solid-js";
import { useGlobalContext } from "~/store/StoreProvider";
import useSetRoute from "~/hooks/useSetRoute";
import useBreadcrumbs from "~/hooks/useBreadcrumbs";
import useScrollIsAt0 from "~/hooks/useScrollIsAt0";
import useOnMobile from "../hooks/useOnMobile";
import usePrevNextPage from "~/hooks/usePrevNextPage";
import useAuthorMode from "~/hooks/useAuthorMode";
import useHorizontalSwipeNavigation from "~/hooks/useHorizontalSwipeNavigation";
import useHorizontalPageMotion from "~/hooks/useHorizontalPageMotion";
import type { HorizontalScrollPolicy } from "~/hooks/useHorizontalPageMotion";
import { useLocation } from "@solidjs/router";

const env = import.meta.env.VITE_ENV;

type PageProps = {
  pageNecessaryMargin?: number;
  maxElementWidth?: number;
  nextPage?: string;
  prevPage?: string;
  horizontalScrollPolicy?: HorizontalScrollPolicy;
};

const Page = (props: ParentProps & PageProps) => {
  let { set_store, store } = useGlobalContext();
  const { getPrevPage, getNextPage, getPage } = usePrevNextPage();
  const { on_mobile } = useOnMobile();
  const location = useLocation();
  const { alignImmediately, handleGestureEnd, smoothlyCenter } =
    useHorizontalPageMotion(props.horizontalScrollPolicy || "range-limited");

  useHorizontalSwipeNavigation({
    onGestureEnd: handleGestureEnd,
    onSwipeLeft: () => {
      if (!store.nextPage) return;
      getPage(store.nextPage, { kind: "swipe", direction: "left" });
    },
    onSwipeRight: () => {
      if (!store.prevPage) return;
      getPage(store.prevPage, { kind: "swipe", direction: "right" });
    },
  });

  useScrollIsAt0();
  useSetRoute();
  useBreadcrumbs();
  useAuthorMode();

  set_store("pageNecessaryMargin", props.pageNecessaryMargin || 0);
  set_store("maxElementWidth", props.maxElementWidth || 0);
  set_store("nextPage", props.nextPage || "");
  set_store("prevPage", props.prevPage || "");

  // **********************
  // **** handleResize ****
  // **********************

  const handleResize = () => {
    let oldInnerWidth = store.innerWidth;
    let oldScrollWidth = store.scrollWidth;

    set_store("innerWidth", window.innerWidth);
    set_store("innerHeight", window.innerHeight);
    set_store("scrollWidth", document.body.scrollWidth);
    set_store("scrollHeight", document.body.scrollHeight);

    let _dummy =
      store.scrollY +
      store.innerHeight +
      store.scrollHeight +
      store.scrollWidth;

    if (
      oldInnerWidth != store.innerWidth ||
      oldScrollWidth != store.scrollWidth
    ) {
      alignImmediately();
    }
  };

  // *********************
  // **** handleClick ****
  // *********************

  const handleClick = (e: MouseEvent) => {
    const targetIsInteractive = (target: EventTarget | null) =>
      target instanceof Element &&
      target.closest(
        "a, button, input, textarea, select, [role='button'], [contenteditable='true']",
      ) !== null;

    if (targetIsInteractive(e.target)) {
      return;
    }

    if (store.margin_mode) {
      smoothlyCenter();
      set_store("margin_mode", false);
      e.stopPropagation();
      return;
    }

    if (on_mobile()) {
      return;
    }

    if (e.clientY <= store.innerHeight * 0.25 && window.scrollY != 0) {
      window.scrollBy({ top: -store.innerHeight });
      e.stopPropagation();
      return;
    }

    if (
      e.clientY >= store.innerHeight * 0.75 &&
      window.scrollY + window.innerHeight < document.body.scrollHeight
    ) {
      window.scrollBy({ top: store.innerHeight });
      e.stopPropagation();
      return;
    }

    if (e.clientX < store.innerWidth * 0.1) {
      getPrevPage();
      e.stopPropagation();
      return;
    }

    if (e.clientX > store.innerWidth * 0.9) {
      getNextPage();
      e.stopPropagation();
      return;
    }
  };

  // ***********************
  // **** handleKeydown ****
  // ***********************

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      getPrevPage();
      return;
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      getNextPage();
      return;
    }
    if (e.key === "d" && (env === "DEV" || env === "LOCAL")) {
      e.preventDefault();
      set_store("show_areas", !store.show_areas);
    }
    if (e.key === "p" && (env === "DEV" || env === "LOCAL")) {
      e.preventDefault();
      getPage("/article/bootcamp3");
    }
    if (e.key === "0") {
      e.preventDefault();
      getPage("/");
    }
    if (e.key === "1") {
      e.preventDefault();
      getPage("/article/chapter1");
    }
    if (e.key === "2") {
      e.preventDefault();
      getPage("/article/chapter2");
    }
    if (e.key === "3") {
      e.preventDefault();
      getPage("/article/chapter3");
    }
    if (e.key === "4") {
      e.preventDefault();
      getPage("/article/chapter4");
    }
    if (e.key === "5") {
      e.preventDefault();
      getPage("/article/chapter5");
    }
    if (e.key === "6") {
      e.preventDefault();
      getPage("/article/chapter6");
    }
    if (e.key === "9") {
      e.preventDefault();
      getPage("/article/bootcamp1");
    }
    if (e.key === "8") {
      e.preventDefault();
      getPage("/article/bootcamp2");
    }
    if (e.key === "a") {
      e.preventDefault();
      getPage("/article/appendixA");
    }
    if (e.key === "b") {
      e.preventDefault();
      getPage("/article/appendixB");
    }
  };

  onMount(() => {
    handleResize();
    if (location.pathname !== "/") {
      set_store("have_been_outside_home", true);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("click", handleClick, { capture: true });
    window.addEventListener("keydown", handleKeydown);

    onCleanup(() => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleClick, { capture: true });
      window.removeEventListener("keydown", handleKeydown);
    });
  });

  return <>{props.children}</>;
};

export default Page;
