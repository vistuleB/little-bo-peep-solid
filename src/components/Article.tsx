import { ParentProps } from "solid-js";
import useCheckedSavedScroll from "~/hooks/useCheckedSavedScroll";
import { ExercisesStoreProvider } from "~/store/ExercisesStoreProvider";
import ActionArrows from "./ActionArrows";
import SVGDefs from "./SVGDefs";
import Page from "./Page";

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
      <ExercisesStoreProvider>
        <span id={props.id} class="id_span"></span>
        <ExercisesStoreConsumer>{props.children}</ExercisesStoreConsumer>
        <ActionArrows />
      </ExercisesStoreProvider>
    </Page>
  );
};

const ExercisesStoreConsumer = (props: ParentProps) => {
  useCheckedSavedScroll();
  return <>{props.children}</>;
};

export default Article;
