import ArticleTitle from "~/components/ArticleTitle";
import useScrollX from "~/hooks/useScrollX";
import useSaveScroll from "~/hooks/useSaveScroll";

const Chapter = (props: any) => {
  useScrollX();
  useSaveScroll();
  return (
    <>
      <ArticleTitle
        label={`Chapter ${props.number}: ` + props.title}
        on_mobile_label={`Chapter ${props.number}: ` + (props.mobile_title || props.title)}
      />
      {props.children}
    </>
  );
};

export default Chapter;