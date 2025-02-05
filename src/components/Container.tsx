import { ParentProps, createEffect, onCleanup, createSignal } from "solid-js";
import Nav from "./Nav";
import SVGDefs from "./SVGDefs";

const Container = (props: ParentProps) => {
  // can_click is for disabling click on page transition
  // there is an inital scroll when each page is loaded .
  // code for it is in useScrollX used in renderder helpers
  // add_imports and table of contents
  const [scrollY, set_scrollY] = createSignal(0);
  const [scrollX, set_scrollX] = createSignal(0);
  const [innerWidth, set_innerWidth] = createSignal(0);
  const [scrollWidth, set_scrollWidth] = createSignal(0);

  const handleScroll = () => {
    set_scrollY(window.scrollY);
    set_scrollX(window.scrollX);
  };

  const handleResize = () => {
    // console.log("resizing scrollWidth to ", document.body.scrollWidth);
    set_innerWidth(window.innerWidth);
    set_scrollWidth(document.body.scrollWidth);
  };

  createEffect(() => {
    handleScroll();
    handleResize();

    const scroll_back = () => {
      let theoretical_left = (scrollWidth() - innerWidth()) / 2;
      if (
        scrollX() > theoretical_left - 200 &&
        scrollX() < theoretical_left + 200
      ) {
        window.scroll({
          left: theoretical_left,
          behavior: "smooth",
        });
      }
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
    document.addEventListener("click", (_) => {
      window.scroll({
        left: (scrollWidth() - innerWidth()) / 2,
        behavior: "smooth",
      });
    });

    window.addEventListener("resize", (_) => {
      window.scroll({
        left: (scrollWidth() - innerWidth()) / 2,
        behavior: "instant",
      });
    });
  });

  return (
    <div class="">
      <div
        class="outer-width-enforcer pb-14"
        id="Container">
        <div class="w-full transition duration-300 sm:overflow-visible sm:translate-x-0">
          <div class="font-baskerville w-full">
            <Nav />
            {props.children}
            <SVGDefs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
