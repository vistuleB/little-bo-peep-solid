import ArticleTitle from "~/components/ArticleTitle";
import useScrollX from "~/hooks/useScrollX";
import { useGlobalContext } from "~/store/StoreProvider";
import { onMount } from "solid-js";
import useCheckedSaveScroll from "~/hooks/useCheckedSaveScroll";

const Chapter = (props: any) => {
  let { set_store } = useGlobalContext();

  useScrollX();
  useCheckedSaveScroll();

  const resetDimensions = () => {
    set_store("innerWidth", window.innerWidth);
    set_store("innerHeight", window.innerHeight);
    set_store("scrollWidth", document.body.scrollWidth);
    set_store("scrollHeight", document.body.scrollHeight);
  };

  onMount(() => resetDimensions());

  return (
    <>
      <ArticleTitle
        label={`Chapter ${props.number}: ` + props.title}
        on_mobile_label={
          `Chapter ${props.number}: ` + (props.mobile_title || props.title)
        }
      />
      {props.children}
    </>
  );
};

export default Chapter;
