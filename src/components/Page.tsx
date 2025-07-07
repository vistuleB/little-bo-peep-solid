import { createEffect, onMount, onCleanup, ParentProps } from "solid-js";
import useScrollX from "~/hooks/useScrollX";
import { useGlobalContext } from "~/store/StoreProvider";
import useSetRoute from "~/hooks/useSetRoute";
import useBreadcrumbs from "~/hooks/useBreadcrumbs";
import useScrollIsAt0 from "~/hooks/useScrollIsAt0";
import useOnMobile from "../hooks/useOnMobile";
import usePrevNextArticle from "~/hooks/usePrevNextArticle";

type PageProps = {
  pageNecessaryMargin?: number;
  maxElementWidth?: number;
  nextPage?: string;
  prevPage?: string;
};

const Page = (props: ParentProps & PageProps) => {
  let { set_store, store } = useGlobalContext();
  const { getPrevArticle, getNextArticle } = usePrevNextArticle();
  const { on_mobile }  = useOnMobile();

  useScrollIsAt0();
  useSetRoute();
  useBreadcrumbs();
  useScrollX();

  set_store("pageNecessaryMargin", props.pageNecessaryMargin || 0);
  set_store("maxElementWidth", props.maxElementWidth || 0);
  set_store("nextPage", props.nextPage || "");
  set_store("prevPage", props.prevPage || "");

  // ****************************
  // **** handleScroll stuff ****
  // ****************************

  const handleScroll = () => {
    set_store("scrollY", window.scrollY);
    set_store("scrollX", window.scrollX);
  };

  createEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  });
  
  // **************************
  // **** scrollBack stuff ****
  // **************************

  const scrollBack = () => {
    let scrollXWhenCentered = (store.scrollWidth - store.innerWidth) / 2;
    if (
      store.scrollX > scrollXWhenCentered - 200 &&
      store.scrollX < scrollXWhenCentered + 200
    ) {
      window.scroll({
        left: scrollXWhenCentered,
        behavior: "smooth",
      });
      set_store("margin_mode", false);
      return;
    }
    set_store("margin_mode", true);
  };

  createEffect(() => {
    document.addEventListener("scrollend", scrollBack);
    document.addEventListener("touchend", scrollBack);
    onCleanup(() => {
      document.removeEventListener("scrollend", scrollBack);
      document.removeEventListener("touchend", scrollBack);
    });
  });

  // ****************************
  // **** handleResize stuff ****
  // ****************************

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
    handleResize();
    window.addEventListener("resize", handleResize);
    onCleanup(() => {
      window.removeEventListener("resize", handleResize);
    });
  });

  // ***********************
  // **** onMount stuff ****
  // ***********************
  
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

  return <>{props.children}</>;
};

export default Page;
