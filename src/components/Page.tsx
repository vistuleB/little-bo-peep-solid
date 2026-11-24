import { onMount, onCleanup, ParentProps } from "solid-js";
import { Portal } from "solid-js/web";
import { mainColumnWidthForViewport } from "~/hooks/useMainColumnWidth";
import { pageClickAction, pageClickPolygons } from "~/utils/pageClickZones";
import { useGlobalContext } from "~/store/StoreProvider";
import useSetRoute from "~/hooks/useSetRoute";
import useScrollIsAt0 from "~/hooks/useScrollIsAt0";
import useOnMobile from "../hooks/useOnMobile";
import usePrevNextPage from "~/hooks/usePrevNextPage";
import useLocalMode from "~/hooks/useLocalMode";
import useHorizontalSwipeNavigation from "~/hooks/useHorizontalSwipeNavigation";
import useHorizontalPageMotion from "~/hooks/useHorizontalPageMotion";
import { useLocation } from "@solidjs/router";
import { containerWidthForLayout } from "~/hooks/useContainerWidth";
import {
  CHAPTER_CLICK_MARGIN_FRACTION,
  CONSTRAIN_IMAGE_ON_PAN_RECENTER_TAP,
  PAN_RECENTER_CONSTRAIN_IMAGE_EVENT,
} from "~/constants";

const env = import.meta.env.VITE_ENV;
const verticalClickZoneRatio = 0.25;

const targetIsInteractive = (target: EventTarget | null) =>
  target instanceof Element &&
  target.closest(
    "a, button, input, textarea, select, .t-3003, [role='button'], [contenteditable='true']",
  ) !== null;

const constrainImageForPanRecenter = (target: EventTarget | null) => {
  if (!CONSTRAIN_IMAGE_ON_PAN_RECENTER_TAP || !(target instanceof Element)) {
    return;
  }

  target
    .closest<HTMLElement>('[data-pan-recenter-constrain-image="true"]')
    ?.dispatchEvent(new Event(PAN_RECENTER_CONSTRAIN_IMAGE_EVENT));
};

type PageProps = {
  pageNecessaryMargin?: number;
  maxElementWidth?: number;
  nextPage?: string;
  prevPage?: string;
};

const Page = (props: ParentProps & PageProps) => {
  let pageCameraSurface!: HTMLDivElement;
  let resizeAnimationFrame: number | undefined;
  let { set_store, store } = useGlobalContext();
  const { getPrevPage, getNextPage, getPage } = usePrevNextPage();
  const { on_mobile } = useOnMobile();
  const location = useLocation();
  const {
    alignImmediately,
    cameraIsCentered,
    handleGestureCancel,
    handleGestureEnd,
    handleGestureMove,
    handleGestureStart,
    motionIsActive,
    smoothlyCenter,
  } = useHorizontalPageMotion(() => pageCameraSurface);

  useHorizontalSwipeNavigation({
    navigationEnabled: () =>
      cameraIsCentered() &&
      motionIsActive() &&
      !store.margin_mode &&
      !store.horizontal_camera_dragging,
    onGestureStart: handleGestureStart,
    onGestureMove: handleGestureMove,
    onGestureEnd: handleGestureEnd,
    onGestureCancel: handleGestureCancel,
    onTap: (target) => {
      if (
        motionIsActive() &&
        store.margin_mode &&
        !targetIsInteractive(target)
      ) {
        constrainImageForPanRecenter(target);
        smoothlyCenter();
        return true;
      }
      return false;
    },
    onSwipeLeft: () => {
      if (!store.nextPage) {
        smoothlyCenter();
        return;
      }
      getPage(store.nextPage, { kind: "swipe", direction: "left" });
    },
    onSwipeRight: () => {
      if (!store.prevPage) {
        smoothlyCenter();
        return;
      }
      getPage(store.prevPage, { kind: "swipe", direction: "right" });
    },
  });

  useScrollIsAt0();
  useSetRoute();
  useLocalMode();

  set_store("pageNecessaryMargin", props.pageNecessaryMargin || 0);
  set_store("maxElementWidth", props.maxElementWidth || 0);
  set_store("nextPage", props.nextPage || "");
  set_store("prevPage", props.prevPage || "");

  // **********************
  // **** handleResize ****
  // **********************

  const handleResize = () => {
    const oldInnerWidth = store.innerWidth;
    const oldScrollWidth = store.scrollWidth;
    const nextInnerWidth = window.innerWidth;
    const nextScrollWidth = containerWidthForLayout(
      nextInnerWidth,
      store.maxElementWidth,
      store.pageNecessaryMargin,
    );

    set_store("innerWidth", nextInnerWidth);
    set_store("innerHeight", window.innerHeight);
    set_store("scrollWidth", nextScrollWidth);
    set_store("scrollHeight", document.body.scrollHeight);

    let _dummy =
      store.scrollY +
      store.innerHeight +
      store.scrollHeight +
      store.scrollWidth;

    if (oldInnerWidth != nextInnerWidth || oldScrollWidth != nextScrollWidth) {
      alignImmediately();
    }
  };

  const scheduleResize = () => {
    if (resizeAnimationFrame !== undefined) return;

    resizeAnimationFrame = requestAnimationFrame(() => {
      resizeAnimationFrame = undefined;
      handleResize();
    });
  };

  // *********************
  // **** handleClick ****
  // *********************

  const clickGeometry = (scrollY = store.scrollY, scrollHeight = store.scrollHeight) => ({
    width: store.innerWidth,
    height: store.innerHeight,
    sideWidth: Math.max(0, (store.innerWidth - mainColumnWidthForViewport(store.innerWidth)) / 2) * CHAPTER_CLICK_MARGIN_FRACTION,
    verticalHeight: store.innerHeight * verticalClickZoneRatio,
    canUp: scrollY !== 0,
    canDown: scrollY + store.innerHeight < scrollHeight,
  });
  const debugPolygons = () => pageClickPolygons(clickGeometry());

  const handleClick = (e: MouseEvent) => {
    if (targetIsInteractive(e.target)) {
      return;
    }

    if (store.margin_mode) {
      constrainImageForPanRecenter(e.target);
      smoothlyCenter();
      e.stopPropagation();
      return;
    }

    if (on_mobile()) {
      return;
    }

    const action = pageClickAction(e.clientX, e.clientY, clickGeometry(
      window.scrollY, document.body.scrollHeight,
    ));
    if (!action) return;
    if (action === "up") window.scrollBy({ top: -store.innerHeight });
    else if (action === "down") window.scrollBy({ top: store.innerHeight });
    else if (action === "prev") getPrevPage();
    else getNextPage();
    e.stopPropagation();
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

    window.addEventListener("resize", scheduleResize);
    window.addEventListener("click", handleClick, { capture: true });
    window.addEventListener("keydown", handleKeydown);

    onCleanup(() => {
      window.removeEventListener("resize", scheduleResize);
      if (resizeAnimationFrame !== undefined) {
        cancelAnimationFrame(resizeAnimationFrame);
      }
      window.removeEventListener("click", handleClick, { capture: true });
      window.removeEventListener("keydown", handleKeydown);
    });
  });

  const cameraOffset = () =>
    store.horizontal_camera_offset + store.horizontal_arrival_offset;

  return (
    <div
      ref={pageCameraSurface}
      id="PageCameraSurface"
      data-horizontal-arrival-phase={store.horizontal_arrival_phase}
      data-horizontal-camera-offset={store.horizontal_camera_offset}
      data-horizontal-margin-mode={store.margin_mode ? "true" : "false"}
      style={{
        background: "var(--background-rgb)",
        transform:
          cameraOffset() === 0
            ? "none"
            : `translate3d(${cameraOffset()}px, 0, 0)`,
        "will-change":
          store.horizontal_camera_dragging ||
          store.horizontal_arrival_phase === "animating"
            ? "transform"
            : "auto",
      }}
    >
      {props.children}
      {store.show_areas && !on_mobile() && !store.margin_mode && (
        <Portal>
          {/* Viewport-relative, outside the translated page; clicks pass through.
              Interactive controls still take precedence within these zones. */}
          {(["up", "down", "prev", "next"] as const).map((direction) => (
            (direction === "up" ? clickGeometry().canUp : direction === "down" ? clickGeometry().canDown : true) && (
              <div
                aria-hidden="true"
                data-debug-click-zone={direction}
                style={{
                  position: "fixed",
                  inset: "0",
                  "clip-path": debugPolygons()[direction],
                  "pointer-events": "none",
                  "z-index": 1001,
                  background: { up: "#00aa7733", down: "#aa44dd33", prev: "#0080ff33", next: "#ff980033" }[direction],
                }}
              >
                <span style={{
                  position: "absolute",
                  left: direction === "prev" ? `${clickGeometry().sideWidth / 2}px` : direction === "next" ? `${store.innerWidth - clickGeometry().sideWidth / 2}px` : "50%",
                  top: direction === "up" ? "12.5%" : direction === "down" ? "87.5%" : "50%",
                  transform: "translate(-50%, -50%)",
                  "font-size": "12px",
                  color: "#222",
                }}>
                  {{ up: "↑ page up", down: "↓ page down", prev: "← prev", next: "next →" }[direction]}
                </span>
              </div>
            )
          ))}
        </Portal>
      )}
    </div>
  );
};

export default Page;
