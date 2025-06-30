import { onMount, ParentProps } from "solid-js";
import useCheckedSavedScroll from "~/hooks/useCheckedSavedScroll";
import useScrollX from "~/hooks/useScrollX";
import { ExercisesStoreProvider } from "~/store/ExercisesStoreProvider";
import { useGlobalContext } from "~/store/StoreProvider";
import ActionArrows from "./ActionArrows";
import useBreadcrumbs from "~/hooks/useBreadcrumbs";
import useSetRoute from "~/hooks/useSetRoute";

type ArticleProps = {
  id?: string;
  "page-necessary-margin"?: number;
  "max-element-width"?: number;
  "next-page"?: string;
  "prev-page"?: string;
};

const Article = (props: ParentProps & ArticleProps) => {
  let { set_store, store } = useGlobalContext();

  useScrollX();
  useSetRoute();
  useBreadcrumbs();

  const resetDimensions = () => {
    set_store(
      "innerWidth",
      document.documentElement.clientWidth || window.innerWidth,
    );
    set_store("innerHeight", window.innerHeight);
    set_store("scrollWidth", document.body.scrollWidth);
    set_store("scrollHeight", document.body.scrollHeight);

    set_store("pageNecessaryMargin", props["page-necessary-margin"] || 0);
    set_store("maxElementWidth", props["max-element-width"] || 0);
    set_store("nextPage", props["next-page"] || "");
    set_store("prevPage", props["prev-page"] || "");

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
      <span id={props.id} class="id_span"></span>
      <ExercisesStoreConsumer>{props.children}</ExercisesStoreConsumer>
      <ActionArrows />
    </ExercisesStoreProvider>
  );
};

const ExercisesStoreConsumer = (
  props: ParentProps & {
    id?: string;
    pageNecessaryMargin?: number;
    maxElementWidth?: number;
    nextPage?: string;
    prevPage?: string;
  },
) => {
  useCheckedSavedScroll();
  return <>{props.children}</>;
};

export default Article;
