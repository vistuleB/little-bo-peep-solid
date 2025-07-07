import { ParentProps, createEffect, onCleanup, onMount } from "solid-js";
import Nav from "./Nav";
import SVGDefs from "./SVGDefs";
import useOnMobile from "../hooks/useOnMobile";
import { useGlobalContext } from "~/store/StoreProvider";
import useScrollIsAt0 from "~/hooks/useScrollIsAt0";
import usePrevNextArticle from "~/hooks/usePrevNextArticle";
import mainColumnWidth from "~/hooks/useMainColumnWidth";

const Container = (props: ParentProps) => {
  // can_click is for disabling click on page transition
  // there is an inital scroll when each page is loaded .
  // code for it is in useScrollX used in renderer helpers
  // add_imports and table of contents
  let { on_mobile } = useOnMobile();
  let { store, set_store } = useGlobalContext();
  const { getPrevArticle, getNextArticle } = usePrevNextArticle();

  useScrollIsAt0();

  const scrollBack = () => {
    let theoretical_left = (store.scrollWidth - store.innerWidth) / 2;
    if (
      store.scrollX > theoretical_left - 200 &&
      store.scrollX < theoretical_left + 200
    ) {
      window.scroll({
        left: theoretical_left,
        behavior: "smooth",
      });
      set_store("margin_mode", false);
      return;
    }
    set_store("margin_mode", true);
  };

  const handleScroll = () => {
    set_store("scrollY", window.scrollY);
    set_store("scrollX", window.scrollX);
  };

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

  createEffect(() => {
    document.addEventListener("scrollend", scrollBack);
    document.addEventListener("touchend", scrollBack);
    onCleanup(() => {
      document.removeEventListener("scrollend", scrollBack);
      document.removeEventListener("touchend", scrollBack);
    });
  });

  createEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  });

  createEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    onCleanup(() => {
      window.removeEventListener("resize", handleResize);
    });
  });

  let _window = window as any;

  onMount(() => {
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
        store.margin_mode
      ) {
        console.log("preventing!");
        return;
      }

      let screenHeight = window.innerHeight;
      let clientXBasedOnScrollWidth = window.scrollX + e.clientX;

      if (e.clientY <= screenHeight * 0.25 && window.scrollY != 0) {
        window.scrollBy({ top: -screenHeight });
        return;
      }

      if (
        e.clientY >= screenHeight * 0.75 &&
        window.scrollY + window.innerHeight < document.body.scrollHeight
      ) {
        window.scrollBy({ top: screenHeight });
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
        getPrevArticle();
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        getNextArticle();
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

  const containerWidth = () => {
    return Math.max(
      store.innerWidth,
      store.maxElementWidth + 60,
      mainColumnWidth() + 2 * store.pageNecessaryMargin
    );
  };

  const effectiveMarginWidth = () => {
    return (containerWidth() - mainColumnWidth()) / 2;
  };

  return (
    <div
      id="Container"
      class="pb-14 -z-10 relative overflow-hidden"
      style={`width:${containerWidth()}px; opacity: ${store.saved_scroll_finished || store.scroll_is_at_0 ? "1" : "0"}`}
    >
      <EarlyImages />
      {/* Show margin areas when show_areas is true */}
      {store.show_areas && store.pageNecessaryMargin > 0 && (
        <>
          <div
            style={`position:absolute;top:0;left:${effectiveMarginWidth() - store.pageNecessaryMargin}px; width:${store.pageNecessaryMargin}px;height:100%;background-color:rgba(255, 0, 0, 0.2);border:2px solid red;pointer-events:none;z-index:1000;`}
          />
          <div
            style={`position:absolute;top:0;right:${effectiveMarginWidth() - store.pageNecessaryMargin}px;width:${store.pageNecessaryMargin}px;height:100%;background-color:rgba(255, 0, 0, 0.2);border: 2px solid red;pointer-events:none;z-index:1000;`}
          />
        </>
      )}
      {/* Show maxElementWidth area when show_areas is true */}
      {store.show_areas && (
        <div
          style={`position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: ${store.maxElementWidth}px; height: 100%; background-color: rgba(0, 255, 0, 0.2); border: 2px solid green; pointer-events: none; z-index: 999;`}
        />
      )}
      <Nav />
      <div
        onClick={() => {
          window.scroll({
            left: (store.scrollWidth - store.innerWidth) / 2,
            behavior: "smooth",
          });
        }}
      >
        {props.children}
      </div>
      <SVGDefs />
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
