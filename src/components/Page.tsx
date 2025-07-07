import { createEffect, onCleanup, ParentProps } from "solid-js";
import useScrollX from "~/hooks/useScrollX";
import { useGlobalContext } from "~/store/StoreProvider";
import useSetRoute from "~/hooks/useSetRoute";
import useBreadcrumbs from "~/hooks/useBreadcrumbs";
import useScrollIsAt0 from "~/hooks/useScrollIsAt0";

type PageProps = {
  pageNecessaryMargin?: number;
  maxElementWidth?: number;
  nextPage?: string;
  prevPage?: string;
};

const Page = (props: ParentProps & PageProps) => {
  let { set_store, store } = useGlobalContext();

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

  return <>{props.children}</>;
};

export default Page;
