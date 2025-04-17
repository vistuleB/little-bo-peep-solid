import AbstractArticle from "./AbstractArticle";

const Bootcamp = (props: any) => {
  return <AbstractArticle>{props.children}</AbstractArticle>;
};

export default Bootcamp;
