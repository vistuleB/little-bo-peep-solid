import AbstractArticle from "./AbstractArticle";

const Bootcamp = (props: any) => {
  return (
    <AbstractArticle
      id={props.id}
      pageNecessaryMargin={props["page-necessary-margin"]}
      maxElementWidth={props["max-element-width"]}
      prevPage={props["prev-page"]}
      nextPage={props["next-page"]}
    >
      {props.children}
    </AbstractArticle>
  );
};

export default Bootcamp;
