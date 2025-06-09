import { MOBILE_MAX_WIDTH, DESKTOP_COLUMN_WIDTH } from "~/constants";
import {
  ParentProps,
  createEffect,
  onCleanup,
  createSignal,
  onMount,
} from "solid-js";
import Nav from "./Nav";
import SVGDefs from "./SVGDefs";
import useOnMobile from "../hooks/useOnMobile";
import { useGlobalContext } from "~/store/StoreProvider";
import ActionArrows from "./ActionArrows";
import useScrollIsAt0 from "~/hooks/useScrollIsAt0";
import usePrevNextArticle from "~/hooks/usePrevNextArticle";

const Container = (props: ParentProps) => {
  const env = import.meta.env.VITE_ENV;
  // can_click is for disabling click on page transition
  // there is an inital scroll when each page is loaded .
  // code for it is in useScrollX used in renderder helpers
  // add_imports and table of contents
  const [marginMode, set_marginMode] = createSignal(false);

  // const [innerWidth, set_innerWidth] = createSignal(0);
  // const [scrollWidth, set_scrollWidth] = createSignal(0);
  let { on_mobile } = useOnMobile();
  let { store, set_store } = useGlobalContext();
  const { getPrevArticle, getNextArticle } = usePrevNextArticle();

  useScrollIsAt0();

  const handleScroll = () => {
    set_store("scrollY", window.scrollY);
    set_store("scrollX", window.scrollX);
  };

  const handleResize = () => {
    set_store("innerWidth", window.innerWidth);
    set_store("innerHeight", window.innerHeight);
    set_store("scrollWidth", document.body.scrollWidth);
    set_store("scrollHeight", document.body.scrollHeight);
    let _dummy =
      store.scrollY +
      store.innerHeight +
      store.scrollHeight +
      store.scrollWidth;
  };

  createEffect(() => {
    handleScroll();
    handleResize();

    const scroll_back = () => {
      let theoretical_left = (store.scrollWidth - store.innerWidth) / 2;
      if (
        store.scrollX > theoretical_left - 200 &&
        store.scrollX < theoretical_left + 200
      ) {
        window.scroll({
          left: theoretical_left,
          behavior: "smooth",
        });
        set_marginMode(false);
        return;
      }
      set_marginMode(true);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    document.addEventListener("scrollend", scroll_back);
    document.addEventListener("touchend", scroll_back);

    onCleanup(() => {
      window.removeEventListener("scroll", scroll_back);
      window.removeEventListener("resize", scroll_back);
      document.removeEventListener("scrollend", scroll_back);
      document.removeEventListener("touchend", scroll_back);
    });
  });

  let _window = window as any;

  onMount(() => {
    window.addEventListener("resize", (_) => {
      if (!on_mobile()) {
        window.scroll({
          left: (store.scrollWidth - store.innerWidth) / 2,
          behavior: "instant",
        });
      }
    });

    const preventActionOn = () => [
      document.getElementById("hamburger_panel"),
      document.getElementById("prev-btn"),
      document.getElementById("next-btn"),
      document.getElementById("menu-btn"),
      document.getElementById("breadcrumbs"),
      ...document.querySelectorAll("#solution-btn"),
      ...document.querySelectorAll("#backup-btn"),
      ...document.querySelectorAll("#option-btn"),
      document.getElementById("exercises-btns"),
      document.getElementById("scroll-btns"),
    ];

    const targetIsAnchor = (element: Element) => {
      let currentElement = element;

      while (
        currentElement !== null &&
        currentElement !== document.documentElement
      ) {
        if (currentElement.tagName === "A") {
          return true;
        }
        currentElement = currentElement.parentElement as Element;
      }
      return false;
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as Element;
      if (
        preventActionOn().find((s) => s?.contains(target)) ||
        targetIsAnchor(target) ||
        on_mobile() ||
        marginMode()
      ) {
        return;
      }

      let screenHeight = window.innerHeight;
      let clientXBasedOnScrollWidth = window.scrollX + e.clientX;

      if (e.clientY <= screenHeight * 0.25 && window.scrollY != 0) {
        window.scrollBy({
          top: -screenHeight,
        });
        return;
      }

      if (
        e.clientY >= screenHeight * 0.75 &&
        window.scrollY + window.innerHeight < document.body.scrollHeight
      ) {
        window.scrollBy({
          top: screenHeight,
        });
        return;
      }

      if (
        clientXBasedOnScrollWidth <
        window.scrollX + window.innerWidth * 0.1
      ) {
        getPrevArticle();
        return;
      }

      if (
        clientXBasedOnScrollWidth >
        window.scrollX + window.innerWidth * 0.9
      ) {
        getNextArticle();
        return;
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        (document.querySelector(".prev_page") as HTMLAnchorElement)?.click();
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        (document.querySelector(".next_page") as HTMLAnchorElement)?.click();
        return;
      }
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeyDown);

    onCleanup(() => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeyDown);
    });
  });

  return (
    <div
      id="Container"
      class="pb-14 -z-10 relative overflow-hidden"
      style={`width:${3000 + (store.innerWidth > MOBILE_MAX_WIDTH ? DESKTOP_COLUMN_WIDTH : store.innerWidth)}px; opacity: ${store.saved_scroll_finished || store.scroll_is_at_0 ? "1" : "0"}`}>
      <EarlyImages />
      <Nav />
      <div
        onClick={() => {
          window.scroll({
            left: (store.scrollWidth - store.innerWidth) / 2,
            behavior: "smooth",
          });
        }}>
        {props.children}
      </div>
      <SVGDefs />
      <ActionArrows />
    </div>
  );
};

const EarlyImages = () => {
  return (
    <div style="overflow:hidden;position:absolute;top:0px;left:0px;pointer-events:none;width:1px;height:1px;">
      <img src="/images/svg_base_exponent.svg" style="position:absolute" />
      <img
        src="/images/svg_ch1_ch_minus_two_squared_cloud.svg"
        style="position:absolute"
      />
      <img src="/images/chapter_2_1.svg" style="position:absolute" />
      <img src="/images/svg_ch3_f_box.svg" style="position:absolute" />
      <img src="/images/svg_ch4_ch_polaroids.svg" style="position:absolute" />
      <img src="/images/svg_ch5_ch_cosine.svg" style="position:absolute" />
      <img
        src="/images/svg_ch5_ch_cosine_and_sine.svg"
        style="position:absolute"
      />
      <b>Load the bold font!</b>
      <i>Load the italic font!</i>
    </div>
  );
};

export default Container;
