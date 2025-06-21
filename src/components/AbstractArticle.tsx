import { onMount, ParentProps } from "solid-js";
import useCheckedSaveScroll from "~/hooks/useCheckedSaveScroll";
import useScrollX from "~/hooks/useScrollX";
import { ExercisesStoreProvider } from "~/store/ExercisesStoreProvider";
import { useGlobalContext } from "~/store/StoreProvider";
import ActionArrows from "./ActionArrows";

const AbstractArticle = (
  props: ParentProps & {
    id?: string;
    pageNecessaryMargin?: number;
    maxElementWidth?: number;
    nextPage?: string;
    prevPage?: string;
  },
) => {
  let { set_store, store } = useGlobalContext();

  useScrollX();
  useCheckedSaveScroll();

  const resetDimensions = () => {
    set_store(
      "innerWidth",
      document.documentElement.clientWidth || window.innerWidth,
    );
    set_store("innerHeight", window.innerHeight);
    set_store("scrollWidth", document.body.scrollWidth);
    set_store("scrollHeight", document.body.scrollHeight);

    set_store("pageNecessaryMargin", props.pageNecessaryMargin || 0);
    set_store("maxElementWidth", props.maxElementWidth || 0);

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

  return (
    <ExercisesStoreProvider>
      {props.nextPage && <a class="next_page hidden" href={props.nextPage}></a>}
      {props.prevPage && <a class="prev_page hidden" href={props.prevPage}></a>}
      <span id={props.id}></span>
      {props.children}
      <ActionArrows />
    </ExercisesStoreProvider>
  );
};

export default AbstractArticle;
