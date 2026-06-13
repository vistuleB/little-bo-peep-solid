import { ParentProps } from "solid-js";
import useCheckedSavedScroll from "~/hooks/useCheckedSavedScroll";
import { ExerciseGroupRegistryProvider } from "~/store/ExerciseGroupRegistryProvider";
import PageTopBottomArrows from "./PageTopBottomArrows";
import Page from "./Page";
import PageUpDownArrows from "./PageUpDownArrows";
import usePageScrollHistory from "~/hooks/usePageScrollHistory";

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
      prevPage={props.prevPage}>
      <ExerciseGroupRegistryProvider>
        <span id={props.id} class="id_span"></span>
        <ArticleScrollCoordinator>{props.children}</ArticleScrollCoordinator>
        <PageTopBottomArrows />
        <PageUpDownArrows />
      </ExerciseGroupRegistryProvider>
    </Page>
  );
};

const ArticleScrollCoordinator = (props: ParentProps) => {
  useCheckedSavedScroll();
  usePageScrollHistory();
  return <>{props.children}</>;
};

export default Article;
