import { onMount, ParentProps } from "solid-js";
import useScrollX from "~/hooks/useScrollX";
import { useGlobalContext } from "~/store/StoreProvider";
import useSetRoute from "~/hooks/useSetRoute";
import useBreadcrumbs from "~/hooks/useBreadcrumbs";

type PageProps = {
  pageNecessaryMargin?: number;
  maxElementWidth?: number;
  nextPage?: string;
  prevPage?: string;
};

const Page = (props: ParentProps & PageProps) => {
  let { set_store, store } = useGlobalContext();

  useSetRoute();
  useBreadcrumbs();
  useScrollX();

  set_store("pageNecessaryMargin", props.pageNecessaryMargin || 0);
  set_store("maxElementWidth", props.maxElementWidth || 0);

  const resetDimensions = () => {
    set_store(
      "innerWidth",
      document.documentElement.clientWidth || window.innerWidth,
    );
    set_store("innerHeight", window.innerHeight);
    set_store("scrollWidth", document.body.scrollWidth);
    set_store("scrollHeight", document.body.scrollHeight);
    set_store("nextPage", props.nextPage || "");
    set_store("prevPage", props.prevPage || "");

    let _dummy =
      store.scrollY +
      store.innerHeight +
      store.scrollHeight +
      store.scrollWidth;
  };

  onMount(() => {
    resetDimensions();
    setTimeout(resetDimensions, 50);
    setTimeout(resetDimensions, 500);
  });

  return <>{props.children}</>;
};

export default Page;
