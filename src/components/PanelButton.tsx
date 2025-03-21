import { createEffect, createSignal, onCleanup } from "solid-js";
import { twJoin, twMerge } from "tailwind-merge";
import {
  HAMBURGER_MENU_HEIGHT,
  HAMBURGER_MENU_SCROLLY_END_FADE,
  HAMBURGER_MENU_SCROLLY_START_FADE,
  HAMBURGER_MENU_BACKGROUND_OFF_SCROLLY,
  MOBILE_MAX_WIDTH,
} from "../constants";
import useOnMobile from "../hooks/useOnMobile";
import { useGlobalContext } from "../store/StoreProvider";
import { set_store } from "~/store";

const PanelButton = () => {
  const { on_mobile } = useOnMobile();
  const { store } = useGlobalContext();
  const open = () => store.panel_opened;

  const getNextArticle = () => {
    let a = document.querySelector(".next_page") as HTMLAnchorElement;
    a?.click();
  };

  const getPrevArticle = () => {
    let a = document.querySelector(".prev_page") as HTMLAnchorElement;
    a?.click();
  };

  const [opacity, set_opacity] = createSignal(1);
  const [prevDisabled, set_prevDisabled] = createSignal(false);
  const [nextDisabled, set_nextDisabled] = createSignal(false);

  const calc_opacity = () => {
    // prettier-ignore
    return Math.min(
      1.0,
      Math.max(0, 1.0 - (store.scrollY - HAMBURGER_MENU_SCROLLY_START_FADE) / (HAMBURGER_MENU_SCROLLY_END_FADE - HAMBURGER_MENU_SCROLLY_START_FADE))
    );
  };

  const handleScroll = () => {
    set_opacity(calc_opacity());
  };

  createEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  });

  createEffect(() => {
    store.route; // re-run on route change
    set_nextDisabled(!document.querySelector(".next_page"));
    set_prevDisabled(!document.querySelector(".prev_page"));
    setTimeout(() => {
      set_nextDisabled(!document.querySelector(".next_page"));
      set_prevDisabled(!document.querySelector(".prev_page"));
      console.log("yes u got this deployed");
    }, 50);
  });

  return (
    <>
      {/* the background */}
      <div
        class={twJoin(
          "fixed right-0 z-40 h-14",
          store.scrollY <= HAMBURGER_MENU_BACKGROUND_OFF_SCROLLY &&
            !on_mobile() &&
            store.scrollX + store.innerWidth >=
              store.scrollWidth / 2 + MOBILE_MAX_WIDTH / 2 &&
            "h-[10rem]",
        )}
        style={{
          width: "134px",
          "background-color":
            store.scrollY > HAMBURGER_MENU_BACKGROUND_OFF_SCROLLY || on_mobile()
              ? "transparent"
              : store.show_areas
                ? "#fff000"
                : "#fff",
        }}></div>
      <div
        class={twJoin(
          "fixed right-0 z-50 h-14",
          !on_mobile() &&
            !open() &&
            store.scrollY < 2 * HAMBURGER_MENU_HEIGHT &&
            "border-b",
        )}>
        <div
          class="select-none flex items-center justify-center h-8 m-3 hover:!opacity-100"
          style={{ opacity: !open() && !on_mobile() ? opacity() : 1 }}>
          <button
            id="prev-btn"
            class={twJoin(
              !on_mobile() && "mr-2",
              on_mobile() && "mr-4",
              prevDisabled() && "cursor-default",
            )}
            onMouseOver={() => {
              set_prevDisabled(!document.querySelector(".prev_page"));
            }}
            onClick={(e) => {
              e.stopPropagation();
              e.stopImmediatePropagation();
              getPrevArticle();
            }}
            style={{
              "background-color": store.show_areas
                ? "rgb(224, 215, 48)"
                : "#fff",
            }}>
            <LeftArrow
              class={twMerge(
                !prevDisabled()
                  ? "stroke-[rgb(30,30,30)] hover:stroke-stone-600"
                  : "stroke-stone-300",
              )}
              style=""
            />
          </button>
          <button
            id="next-btn"
            class={twJoin(
              !on_mobile() && "mr-3",
              on_mobile() && "mr-4",
              nextDisabled() && "cursor-default",
            )}
            onMouseOver={() => {
              set_nextDisabled(!document.querySelector(".next_page"));
            }}
            onClick={(e) => {
              e.stopPropagation();
              e.stopImmediatePropagation();
              getNextArticle();
            }}
            style={{
              "background-color": store.show_areas
                ? "rgb(224, 215, 48)"
                : "#fff",
            }}>
            <RightArrow
              class={twMerge(
                !nextDisabled()
                  ? "stroke-[rgb(30,30,30)] hover:stroke-stone-600"
                  : "stroke-stone-300",
              )}
              style=""
            />
          </button>
          <button
            id="menu-btn"
            onClick={() => {
              set_store("panel_opened", !open());
            }}
            style={{
              "background-color": store.show_areas
                ? "rgb(224, 215, 48)"
                : "#fff",
            }}>
            <PanelButtonIcon
              class="fill-[rgb(30,30,30)] hover:fill-stone-600"
              open={open()}
            />
          </button>
        </div>
      </div>
    </>
  );
};

// svg paths constants
const sw = 2.6;
const cdx = 4;
const adx = 6.5;
const ady = 6.5;
const un = 30 / 2;

export const LeftArrow = (props: { class: string; style: string }) => {
  return (
    <svg
      class={props.class}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      style={props.style}>
      <path
        d={`M${un - cdx + adx} ${un - ady} L${un - cdx} ${un} L${un - cdx + adx} ${un + ady}`}
        stroke-linecap="round"
        stroke-width={sw}
        fill="none"></path>
    </svg>
  );
};

const RightArrow = (props: { class: string; style: string }) => {
  return (
    <svg
      class={props.class}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      style={props.style}>
      <path
        d={`M${un + cdx - adx} ${un - ady} L${un + cdx} ${un} L${un + cdx - adx} ${un + ady}`}
        stroke-linecap="round"
        stroke-width={sw}
        fill="none"></path>
    </svg>
  );
};

const PanelButtonIcon = (props: { open: boolean; class: string }) => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" class={props.class}>
      <rect
        x="5"
        y="6"
        width="20"
        height="3"
        rx="1.5"
        ry="1.5"
        class={`menu-icon-svg ${props.open ? "close-icon-svg-1" : ""}`}></rect>
      <rect
        x="5"
        y="13.5"
        width="20"
        height="3"
        rx="1.5"
        ry="1.5"
        class={`menu-icon-svg ${props.open ? "opacity-0" : ""}`}></rect>
      <rect
        x="5"
        y="21"
        width="20"
        height="3"
        rx="1.5"
        ry="1.5"
        class={`menu-icon-svg ${props.open ? "close-icon-svg-2" : ""}`}></rect>
    </svg>
  );
};

export default PanelButton;
