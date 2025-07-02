import { ParentProps } from "solid-js";
import useCheckedSavedScroll from "~/hooks/useCheckedSavedScroll";
import { ExercisesStoreProvider } from "~/store/ExercisesStoreProvider";
import ActionArrows from "./ActionArrows";
import Page from "./Page";

type ArticleProps = {
  id?: string;
  "page-necessary-margin"?: number;
  "max-element-width"?: number;
  "next-page"?: string;
  "prev-page"?: string;
};

const Article = (props: ParentProps & ArticleProps) => {
  return (
    <Page
      pageNecessaryMargin={props["page-necessary-margin"]}
      maxElementWidth={props["max-element-width"]}
      nextPage={props["next-page"]}
      prevPage={props["prev-page"]}>
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
