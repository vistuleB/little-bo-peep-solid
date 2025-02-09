import ArticleTitle from "~/components/ArticleTitle";
import useScrollX from "~/hooks/useScrollX";
import useSaveScroll from "~/hooks/useSaveScroll";

const Bootcamp = (props: any) => {
  // useScrollX();
  useSaveScroll();
  return (
    <>
      <div class="first_child_of_chapter"></div>
      <ArticleTitle
        label={`Bootcamp ${props.number}: ` + props.title}
        on_mobile_label={`Bootcamp ${props.number}: ` + (props.mobile_title || props.title)}
      />
      {props.children}
    </>
  );
};

export default Bootcamp;