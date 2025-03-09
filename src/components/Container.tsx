import { MOBILE_MAX_WIDTH, DESKTOP_COLUMN_WIDTH } from "~/constants";
import { ParentProps, createEffect, onCleanup, createSignal } from "solid-js";
import Nav from "./Nav";
import SVGDefs from "./SVGDefs";
import useOnMobile from "../hooks/useOnMobile";
import { useGlobalContext } from "~/store/StoreProvider";

const Container = (props: ParentProps) => {
  // can_click is for disabling click on page transition
  // there is an inital scroll when each page is loaded .
  // code for it is in useScrollX used in renderder helpers
  // add_imports and table of contents
  const [scrollY, set_scrollY] = createSignal(0);
  const [scrollX, set_scrollX] = createSignal(0);
  const [marginMode, set_marginMode] = createSignal(false);

  // const [innerWidth, set_innerWidth] = createSignal(0);
  // const [scrollWidth, set_scrollWidth] = createSignal(0);
  let { on_mobile } = useOnMobile();
  let { store, set_store } = useGlobalContext();


  const handleScroll = () => {
    set_scrollY(window.scrollY);
    set_scrollX(window.scrollX);
  };

  const handleResize = () => {
    set_store('innerWidth', window.innerWidth);
    set_store('scrollWidth', document.body.scrollWidth);
    // set_innerWidth(window.innerWidth);
    // set_scrollWidth(document.body.scrollWidth);
  };

  createEffect(() => {
    handleScroll();
    handleResize();

    const scroll_back = () => {
      // let theoretical_left = (scrollWidth() - innerWidth()) / 2;
      let theoretical_left = (store.scrollWidth - store.innerWidth) / 2;
      if (
        scrollX() > theoretical_left - 200 &&
        scrollX() < theoretical_left + 200
      ) {
        window.scroll({
          left: theoretical_left,
          behavior: "smooth",
        });
        set_marginMode(false)
        return;
      }
      set_marginMode(true)
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

  createEffect(() => {
    window.addEventListener("resize", (_) => {
      if (!on_mobile()) {
        window.scroll({
          left: (store.scrollWidth - store.innerWidth) / 2,
          behavior: "instant",
        });
      }
    });

    const preventActionOn = () => [
        document.getElementById("sidebar"), 
        document.getElementById("prev-btn"), 
        document.getElementById("next-btn"), 
        document.getElementById("menu-btn")
      ]

      const targetIsAnchor = (element: Element) => {
        let currentElement = element;

        while (currentElement !== null && currentElement !== document.documentElement) {
            if (currentElement.tagName === "A") {
                return true; 
            }
            currentElement = currentElement.parentElement as Element;
        }
        return false;
    }

    window.addEventListener("click", (e) => {
      const target = e.target as Element;
      if (preventActionOn().find(s => s?.contains(target)) || targetIsAnchor(target)) {
        return;
      }

      if (!on_mobile()) {
          let screenHeight = window.innerHeight
          let screenWidth = window.innerWidth
          if (e.clientY <= screenHeight * 0.3 ) {
            window.scrollBy({
              top: -screenHeight,
              behavior: "smooth"
            })
            return;
          }
          if (e.clientY >= screenHeight * 0.6 ) {
             window.scrollBy({
              top: screenHeight,
              behavior: "smooth"
            })
            return;
          }
          if (e.clientX <= screenWidth * 0.3 ) {
           (document.querySelector(".prev_page") as HTMLAnchorElement)?.click()
            return;
          }
          if (e.clientX >= screenWidth * 0.6 ) {
           (document.querySelector(".next_page") as HTMLAnchorElement)?.click()
            return;
          }
      }
    });
    window.addEventListener("dblclick", (e) => {
      const target = e.target as Element;
      if (preventActionOn().find(s => s?.contains(target)) || targetIsAnchor(target)) {
        return;
      }

      if (!on_mobile()) {
        let screenHeight = window.innerHeight
        if (e.clientY <= screenHeight * 0.3 ) {
            window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
          return;
        }
        if (e.clientY >= screenHeight * 0.6 ) {
          document.getElementById("exo")?.scrollIntoView({behavior: "smooth"})
          return;
        }
      }
    });
  });

  return (
    <div
      id="Container"
      class="pb-14 -z-10 relative"
      style={`width:${3000 + (store.innerWidth > MOBILE_MAX_WIDTH ? DESKTOP_COLUMN_WIDTH : store.innerWidth)}px;`}
      >
      <EarlyImages />
      <Nav />
      <div onClick={() => {
        window.scroll({
          left: (store.scrollWidth - store.innerWidth) / 2,
          behavior: "smooth",
        });
      }}>
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
      <img src="/images/svg_ch1_ch_minus_two_squared_cloud.svg" style="position:absolute" />
      <img src="/images/chapter_2_1.svg" style="position:absolute" />
      <img src="/images/svg_ch3_f_box.svg" style="position:absolute" />
      <img src="/images/svg_ch4_ch_polaroids.svg" style="position:absolute" />
      <img src="/images/svg_ch5_ch_cosine.svg" style="position:absolute" />
      <img src="/images/svg_ch5_ch_cosine_and_sine.svg" style="position:absolute" />
      <b>Load the bold font!</b>
      <i>Load the italic font!</i>
    </div>
  );
}

export default Container;
