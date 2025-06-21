import AbstractArticle from "./AbstractArticle";
import ArticleTitle from "./ArticleTitle";

const Bootcamp = (props: any) => {
  return (
    <AbstractArticle
      id={props.id}
      pageNecessaryMargin={props["page-necessary-margin"]}
      maxElementWidth={props["max-element-width"]}
      prevPage={props["prev-page"]}
      nextPage={props["next-page"]}>
      <div class="first_child_of_chapter"></div>
      <ArticleTitle
        label={`Bootcamp ${props.number}: ` + props.title}
        on_mobile_label={
          `Bootcamp ${props.number}: ` + (props.mobile_title || props.title)
        }
      />
      {props.children}
    </AbstractArticle>
  );
};

export default Bootcamp;
