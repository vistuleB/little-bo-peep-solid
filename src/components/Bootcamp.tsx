import AbstractArticle from "./AbstractArticle";

const Bootcamp = (props: any) => {
  return (
    <AbstractArticle
      id={props.id}
      pageNecessaryMargin={props.pageNecessaryMargin}
      maxElementWidth={props.maxElementWidth}
      prevPage={props.prevPage}
      nextPage={props.nextPage}
    >
      {props.children}
    </AbstractArticle>
  );
};

export default Bootcamp;
