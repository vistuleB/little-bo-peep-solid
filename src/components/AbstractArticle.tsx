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

  const resetDimensions = () => {
    set_store(
      "innerWidth",
      document.documentElement.clientWidth || window.innerWidth,
    );
    set_store("innerHeight", window.innerHeight);
    set_store("scrollWidth", document.body.scrollWidth);
    set_store("scrollHeight", document.body.scrollHeight);

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
      {/* <span id={props.id} class="id_span"></span> */}
      <ExercisesStoreConsumer>{props.children}</ExercisesStoreConsumer>
      <ActionArrows />
    </ExercisesStoreProvider>
  );
};

const ExercisesStoreConsumer = (props: ParentProps & {
    id?: string;
    pageNecessaryMargin?: number;
    maxElementWidth?: number;
    nextPage?: string;
    prevPage?: string;
  }) => {
  useCheckedSaveScroll();
  return <>{props.children}</>;
};

export default AbstractArticle;
