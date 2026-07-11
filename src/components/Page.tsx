import { onMount, onCleanup, ParentProps } from "solid-js";
import useScrollX from "~/hooks/useScrollX";
import { useGlobalContext } from "~/store/StoreProvider";
import useSetRoute from "~/hooks/useSetRoute";
import useBreadcrumbs from "~/hooks/useBreadcrumbs";
import useScrollIsAt0 from "~/hooks/useScrollIsAt0";
import useOnMobile from "../hooks/useOnMobile";
import usePrevNextPage from "~/hooks/usePrevNextPage";
import useAuthorMode from "~/hooks/useAuthorMode";
import useHorizontalSwipeNavigation from "~/hooks/useHorizontalSwipeNavigation";
import { useLocation } from "@solidjs/router";
import {
  HORIZONTAL_SCROLL_END_FALLBACK_DELAY_MS,
  HORIZONTAL_SCROLL_SNAP_BACK_DURATION_MS,
  HORIZONTAL_SCROLL_SNAP_BACK_MAX,
  HORIZONTAL_SCROLL_SNAP_BACK_SCREEN_WIDTH_RATIO,
} from "~/constants";

const env = import.meta.env.VITE_ENV;

type PageProps = {
  pageNecessaryMargin?: number;
  maxElementWidth?: number;
  nextPage?: string;
  prevPage?: string;
};

const Page = (props: ParentProps & PageProps) => {
  let { set_store, store } = useGlobalContext();
  const { getPrevPage, getNextPage, getPage } = usePrevNextPage();
  const { on_mobile } = useOnMobile();
  const location = useLocation();

  useHorizontalSwipeNavigation({
    onSwipeLeft: getNextPage,
    onSwipeRight: getPrevPage,
  });

  useScrollX();
  useScrollIsAt0();
  useSetRoute();
  useBreadcrumbs();
  useAuthorMode();

  set_store("pageNecessaryMargin", props.pageNecessaryMargin || 0);
  set_store("maxElementWidth", props.maxElementWidth || 0);
  set_store("nextPage", props.nextPage || "");
  set_store("prevPage", props.prevPage || "");

  let snapBackAnimationFrame: number | undefined;
  let scrollEndFallbackTimeout: number | undefined;
  let snapBackAnimationRunning = false;
  const supportsScrollEnd = "onscrollend" in document;

  const cancelSnapBackAnimation = () => {
    if (snapBackAnimationFrame !== undefined) {
      cancelAnimationFrame(snapBackAnimationFrame);
      snapBackAnimationFrame = undefined;
    }
    snapBackAnimationRunning = false;
  };

  const animateHorizontalSnapBack = (targetX: number) => {
    cancelSnapBackAnimation();

    const startX = window.scrollX;
    const distance = targetX - startX;
    const startedAt = performance.now();
    snapBackAnimationRunning = true;

    const tick = (now: number) => {
      const progress = Math.min(
        1,
        (now - startedAt) / HORIZONTAL_SCROLL_SNAP_BACK_DURATION_MS,
      );
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      window.scroll({
        left: startX + distance * easedProgress,
        behavior: "instant",
      });

      if (progress < 1) {
        snapBackAnimationFrame = requestAnimationFrame(tick);
        return;
      }

      snapBackAnimationFrame = undefined;
      snapBackAnimationRunning = false;
    };

    snapBackAnimationFrame = requestAnimationFrame(tick);
  };

  // **********************
  // **** handleScroll ****
  // **********************

  const handleScroll = () => {
    set_store("scrollY", window.scrollY);
    set_store("scrollX", window.scrollX);

    if (!supportsScrollEnd && !snapBackAnimationRunning) {
      clearTimeout(scrollEndFallbackTimeout);
      scrollEndFallbackTimeout = window.setTimeout(
        handleScrollFinished,
        HORIZONTAL_SCROLL_END_FALLBACK_DELAY_MS,
      );
    }
  };

  // ************************************
  // **** handleScrollendAndTouchend ****
  // ************************************

  const handleScrollFinished = () => {
    if (snapBackAnimationRunning) return;

    const scrollXWhenCentered =
      (document.body.scrollWidth - window.innerWidth) / 2;
    const distanceFromCentered = Math.abs(window.scrollX - scrollXWhenCentered);

    if (distanceFromCentered < 1) {
      set_store("margin_mode", false);
      return;
    }

    if (
      distanceFromCentered <
      Math.min(
        HORIZONTAL_SCROLL_SNAP_BACK_MAX,
        HORIZONTAL_SCROLL_SNAP_BACK_SCREEN_WIDTH_RATIO * store.innerWidth,
      )
    ) {
      animateHorizontalSnapBack(scrollXWhenCentered);
      set_store("margin_mode", false);
      return;
    }

    set_store("margin_mode", true);
  };

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
      window.scroll({
        left: (store.scrollWidth - store.innerWidth) / 2,
        behavior: "instant",
      });
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
      window.scroll({
        left: (store.scrollWidth - store.innerWidth) / 2,
        behavior: "smooth",
      });
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
    handleScroll();
    handleResize();
    if (location.pathname !== "/") {
      set_store("have_been_outside_home", true);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    if (supportsScrollEnd) {
      document.addEventListener("scrollend", handleScrollFinished);
    }
    document.addEventListener("touchstart", cancelSnapBackAnimation);
    window.addEventListener("click", handleClick, { capture: true });
    window.addEventListener("keydown", handleKeydown);

    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (supportsScrollEnd) {
        document.removeEventListener("scrollend", handleScrollFinished);
      }
      document.removeEventListener("touchstart", cancelSnapBackAnimation);
      clearTimeout(scrollEndFallbackTimeout);
      cancelSnapBackAnimation();
      window.removeEventListener("click", handleClick, { capture: true });
      window.removeEventListener("keydown", handleKeydown);
    });
  });

  return <>{props.children}</>;
};

export default Page;
