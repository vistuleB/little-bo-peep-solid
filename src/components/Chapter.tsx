import AbstractArticle from "./AbstractArticle";

const Chapter = (props: any) => {
  return <AbstractArticle>{props.children}</AbstractArticle>;
};

export default Chapter;
