import ArticleTitle from "~/components/ArticleTitle";
import useScrollX from "~/hooks/useScrollX";
import useSaveScroll from "~/hooks/useSaveScroll";
import { useGlobalContext } from "~/store/StoreProvider";
import { onMount } from "solid-js";

const Bootcamp = (props: any) => {
  let { store,set_store } = useGlobalContext();
  useScrollX();
  useSaveScroll();
  
  const resetDimensions = () => {
    set_store("innerWidth", window.innerWidth);
    set_store("innerHeight", window.innerHeight);
    set_store("scrollWidth", document.body.scrollWidth);
    set_store("scrollHeight", document.body.scrollHeight);
    let _dummy = store.scrollY + store.innerHeight + store.scrollHeight + store.scrollWidth;
  };

  onMount(
    () => {
      resetDimensions();
      setTimeout(resetDimensions, 50);
      setTimeout(resetDimensions, 500);
    }
  );

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