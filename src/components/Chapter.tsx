import AbstractArticle from "./AbstractArticle";
import ArticleTitle from "./ArticleTitle";

const Chapter = (props: any) => {
  return (
    <AbstractArticle
      id={props.id}
      pageNecessaryMargin={props["page-necessary-margin"]}
      maxElementWidth={props["max-element-width"]}>
      <ArticleTitle
        label={`Chapter ${props.number}: ` + props.title}
        on_mobile_label={
          `Chapter ${props.number}: ` + (props.mobile_title || props.title)
        }
      />
      {props.children}
    </AbstractArticle>
  );
};

export default Chapter;
