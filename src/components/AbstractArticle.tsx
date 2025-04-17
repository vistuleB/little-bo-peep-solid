import { onMount, ParentProps } from "solid-js";
import useCheckedSaveScroll from "~/hooks/useCheckedSaveScroll";
import useScrollX from "~/hooks/useScrollX";
import { ExercisesStoreProvider } from "~/store/ExercisesStoreProvider";
import { useGlobalContext } from "~/store/StoreProvider";

const AbstractArticle = (props: ParentProps) => {
  return (
    <ExercisesStoreProvider>
      <ExercisesStoreConsumer>{props.children}</ExercisesStoreConsumer>
    </ExercisesStoreProvider>
  );
};

const ExercisesStoreConsumer = (props: ParentProps) => {
  let { store, set_store } = useGlobalContext();

  useScrollX();
  useCheckedSaveScroll();

  const resetDimensions = () => {
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

  onMount(() => {
    resetDimensions();
    setTimeout(resetDimensions, 50);
    setTimeout(resetDimensions, 500);
  });

  return <>{props.children}</>;
};

export default AbstractArticle;
