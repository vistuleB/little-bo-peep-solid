import { createSignal, onCleanup, ParentProps, createEffect } from "solid-js";
import { twJoin, twMerge } from "tailwind-merge";
import {
  HEADER_HEIGHT,
  HEADER_BUTTONS_SCROLLY_END_FADE,
  HEADER_BUTTONS_SCROLLY_START_FADE,
  HEADER_BUTTONS_BACKGROUND_OFF_SCROLLY,
  HEADER_BOTTOM_BORDER_SCROLLY_START_FADE,
  HEADER_BOTTOM_BORDER_SCROLLY_END_FADE,
  MOBILE_MAX_WIDTH,
} from "../constants";
import useOnMobile from "../hooks/useOnMobile";
import { useGlobalContext } from "../store/StoreProvider";
import usePrevNextPage from "~/hooks/usePrevNextPage";
import { decideRouteNavbarPosition } from "~/utils/routeTransitionPolicy";

const HeaderButtons = () => {
  return (
    <ButtonsContainer>
      <LeftArrowButton />
      <RightArrowButton />
      {/* <HamburgerButton /> */}
    </ButtonsContainer>
  );
};

const ButtonsContainer = (props: ParentProps) => {
  const { on_mobile } = useOnMobile();
  const { store } = useGlobalContext();
  const open = () => store.panel_opened;

  const [buttonOpacity, setButtonOpacity] = createSignal(1);
  const [borderOpacity, setBorderOpacity] = createSignal(1);

  const currentScrollY = () => window.scrollY;

  const calcButtonOpacity = (scrollY = currentScrollY()) => {
    return Math.min(
      1.0,
      Math.max(
        0,
        1.0 -
          (scrollY - HEADER_BUTTONS_SCROLLY_START_FADE) /
            (HEADER_BUTTONS_SCROLLY_END_FADE -
              HEADER_BUTTONS_SCROLLY_START_FADE),
      ),
    );
  };

  const calcBorderOpacity = (scrollY = currentScrollY()) => {
    return Math.min(
      1.0,
      Math.max(
        0,
        1.0 -
          (scrollY - HEADER_BOTTOM_BORDER_SCROLLY_START_FADE) /
            (HEADER_BOTTOM_BORDER_SCROLLY_END_FADE -
              HEADER_BOTTOM_BORDER_SCROLLY_START_FADE),
      ),
    );
  };

  const navbarPosition = () =>
    decideRouteNavbarPosition({
      onMobile: on_mobile(),
      routePhase: store.route_phase,
      spinnerCurrentlyVisible: store.spinner_currently_visible,
    });

  const navbarVisible = () =>
    navbarPosition() === "fixed" || currentScrollY() < HEADER_HEIGHT;

  const controlsPinnedVisible = () =>
    open() ||
    on_mobile() ||
    (store.spinner_currently_visible && navbarVisible()) ||
    store.scroll_is_at_0;

  const borderPinnedVisible = () =>
    on_mobile() ||
    (store.spinner_currently_visible && navbarVisible()) ||
    store.scroll_is_at_0;

  const nearTopDesktopBorderVisible = () =>
    !on_mobile() && !open() && currentScrollY() < 2 * HEADER_HEIGHT;

  const finalButtonOpacity = () => {
    return controlsPinnedVisible()
      ? 1
      : store.saved_scroll_finished
        ? buttonOpacity()
        : 0;
  };

  const finalBorderOpacity = () => {
    if (store.route_scroll_in_progress) return 0;

    return borderPinnedVisible() || nearTopDesktopBorderVisible()
      ? 1
      : store.saved_scroll_finished
        ? borderOpacity()
        : 0;
  };

  const handleScroll = () => {
    const scrollY = currentScrollY();
    setButtonOpacity(calcButtonOpacity(scrollY));
    setBorderOpacity(calcBorderOpacity(scrollY));
  };

  createEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  });

  return (
    <>
      <div
        class="fixed right-0 z-[70]"
        style={{ height: "var(--header-height)" }}
      >
        {/* the large-height background */}
        <div
          style={{
            position: "absolute",
            right: "0px",
            width: "100%",
            height:
              currentScrollY() <= HEADER_BUTTONS_BACKGROUND_OFF_SCROLLY &&
              !on_mobile() &&
              store.scrollX + store.innerWidth >=
                store.scrollWidth / 2 + MOBILE_MAX_WIDTH / 2
                ? "10rem"
                : "100%",
            background: "var(--background-rgb)",
            "z-index": "-1",
            opacity: finalButtonOpacity(),
          }}
        ></div>
        <div
          class="select-none flex items-center justify-center h-8 hover:!opacity-100 border-b"
          style={{
            "box-sizing": "content-box",
            padding: "11.5px 12px",
            opacity: finalButtonOpacity(),
            "border-color": `rgba(var(--nav-border-r), var(--nav-border-g), var(--nav-border-b), ${finalBorderOpacity()})`,
          }}
        >
          {props.children}
        </div>
      </div>
    </>
  );
};

const LeftArrowButton = () => {
  const { on_mobile } = useOnMobile();
  const { store } = useGlobalContext();
  const { getPrevPage: getPrevArticle, prevDisabled } = usePrevNextPage();
  const [pressed, setPressed] = createSignal(false);
  const [pressedTimeout, setPressedTimeout] = createSignal(false);

  const handleMouseDown = () => {
    setPressed(true);
    setPressedTimeout(true);
    setTimeout(
      () => {
        setPressedTimeout(false);
      },
      on_mobile() ? 50 : 20,
    );
  };

  const handleMouseUp = () => {
    setPressed(false);
  };

  return (
    <button
      id="prev-btn"
      class={twJoin(
        !on_mobile() && "mr-2",
        // this used to be "mr-4" when we had Hamburg menu:
        on_mobile() && "mr-3",
        prevDisabled() && "cursor-default",
      )}
      onClick={(e) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
        getPrevArticle();
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchEnd={handleMouseUp}
      style={{
        "background-color":
          (pressed() || pressedTimeout()) && !on_mobile()
            ? "var(--arrow-pressed-bg)"
            : store.show_areas
              ? "rgb(224, 215, 48)"
              : "var(--background-rgb)",
        scale: (pressed() || pressedTimeout()) && on_mobile() ? "1.8" : "1",
        // "box-sizing": "inherit",
      }}
    >
      <LeftArrowSVG
        class={twMerge(
          pressed() && !on_mobile()
            ? "stroke-[var(--arrow-pressed)]"
            : !prevDisabled()
              ? "stroke-[rgb(30,30,30)] hover:stroke-stone-600"
              : "stroke-stone-300",
        )}
        style=""
        // style="box-sizing:inherit;"
      />
    </button>
  );
};

const RightArrowButton = () => {
  const { on_mobile } = useOnMobile();
  const { store } = useGlobalContext();
  const { getNextPage: getNextArticle, nextDisabled } = usePrevNextPage();
  const [pressed, setPressed] = createSignal(false);
  const [pressedTimeout, setPressedTimeout] = createSignal(false);

  const handleMouseDown = () => {
    setPressed(true);
    setPressedTimeout(true);
    setTimeout(
      () => {
        setPressedTimeout(false);
      },
      on_mobile() ? 50 : 20,
    );
  };

  const handleMouseUp = () => {
    setPressed(false);
  };

  return (
    <button
      id="next-btn"
      class={twJoin(
        !on_mobile() && "mr-3",
        // this used to be "mr-4" when we were still showing the hamburger menu:
        on_mobile() && "mr-3",
        nextDisabled() && "cursor-default",
      )}
      onClick={(e) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
        getNextArticle();
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchEnd={handleMouseUp}
      style={{
        "background-color":
          (pressed() || pressedTimeout()) && !on_mobile()
            ? "#ececec"
            : store.show_areas
              ? "rgb(224, 215, 48)"
              : "var(--background-rgb)",
        scale: (pressed() || pressedTimeout()) && on_mobile() ? "1.8" : "1",
      }}
    >
      <RightArrowSVG
        class={twMerge(
          pressed() && !on_mobile()
            ? "stroke-[var(--arrow-pressed)]"
            : !nextDisabled()
              ? "stroke-[rgb(30,30,30)] hover:stroke-stone-600"
              : "stroke-stone-300",
        )}
        style=""
      />
    </button>
  );
};

// const HamburgerButton = () => {
//   const { store, set_store } = useGlobalContext();
//   const open = () => store.panel_opened;

//   return (
//     <button
//       id="menu-btn"
//       onClick={(e) => {
//         e.stopPropagation();
//         set_store("panel_opened", !open());
//       }}
//       style={{
//         "background-color": store.show_areas
//           ? "rgb(224, 215, 48)"
//           : "--var(background-rgb)",
//       }}
//     >
//       <HamburgerButtonSVG
//         class="fill-[rgb(30,30,30)] hover:fill-stone-600"
//         open={open()}
//       />
//     </button>
//   );
// };

// svg paths constants
const sw = 2.6;
const cdx = 4;
const adx = 6.5;
const ady = 6.5;
const un = 30 / 2;

const LeftArrowSVG = (props: { class: string; style: string }) => {
  return (
    <svg
      class={props.class}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      style={props.style}
    >
      <path
        d={`M${un - cdx + adx} ${un - ady} L${un - cdx} ${un} L${un - cdx + adx} ${un + ady}`}
        stroke-linecap="round"
        stroke-width={sw}
        fill="none"
      ></path>
    </svg>
  );
};

const RightArrowSVG = (props: { class: string; style: string }) => {
  return (
    <svg
      class={props.class}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      style={props.style}
    >
      <path
        d={`M${un + cdx - adx} ${un - ady} L${un + cdx} ${un} L${un + cdx - adx} ${un + ady}`}
        stroke-linecap="round"
        stroke-width={sw}
        fill="none"
      ></path>
    </svg>
  );
};

const HamburgerButtonSVG = (props: { open: boolean; class: string }) => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" class={props.class}>
      <rect
        x="5"
        y="6"
        width="20"
        height="3"
        rx="1.5"
        ry="1.5"
        class={`menu-icon-svg ${props.open ? "close-icon-svg-1" : ""}`}
      ></rect>
      <rect
        x="5"
        y="13.5"
        width="20"
        height="3"
        rx="1.5"
        ry="1.5"
        class={`menu-icon-svg ${props.open ? "opacity-0" : ""}`}
      ></rect>
      <rect
        x="5"
        y="21"
        width="20"
        height="3"
        rx="1.5"
        ry="1.5"
        class={`menu-icon-svg ${props.open ? "close-icon-svg-2" : ""}`}
      ></rect>
    </svg>
  );
};

export default HeaderButtons;
