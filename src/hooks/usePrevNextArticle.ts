import { createEffect, createSignal } from "solid-js";
import { useGlobalContext } from "~/store/StoreProvider";

const usePrevNextArticle = () => {
  const { store, set_store } = useGlobalContext();
  const [prevDisabled, set_prevDisabled] = createSignal(false);
  const [nextDisabled, set_nextDisabled] = createSignal(false);

  createEffect(() => {
    store.route; // re-run on route change
    set_nextDisabled(!document.querySelector(".next_page"));
    set_prevDisabled(!document.querySelector(".prev_page"));
    setTimeout(() => {
      set_nextDisabled(!document.querySelector(".next_page"));
      set_prevDisabled(!document.querySelector(".prev_page"));
    }, 50);
  });

  const getNextArticle = async (from_breadcrumb: boolean = false) => {
    setTimeout(() => {
      let a = document.querySelector(".next_page") as HTMLAnchorElement;
      a?.click();
    }, 50);
  };

  const getPrevArticle = async (from_breadcrumb: boolean = false) => {
    setTimeout(() => {
      let a = document.querySelector(".prev_page") as HTMLAnchorElement;
      a?.click();
    }, 50);
  };

  return {
    prevDisabled,
    set_prevDisabled,
    set_nextDisabled,
    nextDisabled,
    getNextArticle,
    getPrevArticle,
  };
};

export default usePrevNextArticle;
