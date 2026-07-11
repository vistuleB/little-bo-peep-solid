import { onCleanup, onMount, ParentProps } from "solid-js";
import useCheckedSavedScroll from "~/hooks/useCheckedSavedScroll";
import { ExerciseGroupRegistryProvider } from "~/store/ExerciseGroupRegistryProvider";
import ElevatorArrows from "./ElevatorArrows";
import Page from "./Page";
import PageUpPageDownButtons from "./PageUpPageDownButtons";
import { useGlobalContext } from "~/store/StoreProvider";
import { recordFirstContentPaint } from "~/utils/routeLoading";

type ArticleProps = {
  id?: string;
  pageNecessaryMargin?: number;
  maxElementWidth?: number;
  nextPage?: string;
  prevPage?: string;
};

const Article = (props: ParentProps & ArticleProps) => {
  return (
    <Page
      pageNecessaryMargin={props.pageNecessaryMargin}
      maxElementWidth={props.maxElementWidth}
      nextPage={props.nextPage}
      prevPage={props.prevPage}
    >
      <ExerciseGroupRegistryProvider>
        <span id={props.id} class="id_span"></span>
        <ArticleScrollCoordinator>{props.children}</ArticleScrollCoordinator>
        <ElevatorArrows />
        <PageUpPageDownButtons />
      </ExerciseGroupRegistryProvider>
    </Page>
  );
};

const ArticleScrollCoordinator = (props: ParentProps) => {
  const { store, set_store } = useGlobalContext();
  let firstFrame = 0;
  let secondFrame = 0;

  onMount(() => {
    firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        recordFirstContentPaint(location.pathname, store, set_store);
      });
    });
  });

  onCleanup(() => {
    cancelAnimationFrame(firstFrame);
    cancelAnimationFrame(secondFrame);
  });

  useCheckedSavedScroll();
  return <>{props.children}</>;
};

export default Article;
