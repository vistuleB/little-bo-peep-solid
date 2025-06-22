import { useNavigate } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";
import { useGlobalContext } from "~/store/StoreProvider";

const usePrevNextArticle = () => {
  const { store, set_store } = useGlobalContext();
  const [prevDisabled, set_prevDisabled] = createSignal(false);
  const [nextDisabled, set_nextDisabled] = createSignal(false);
  const navigate = useNavigate();

  createEffect(() => {
    store.route; // re-run on route change
    set_nextDisabled(store.nextPage === "");
    set_prevDisabled(store.prevPage === "");
    setTimeout(() => {
      set_nextDisabled(store.nextPage === "");
      set_prevDisabled(store.prevPage === "");
    }, 50);
  });

  const getNextArticle = async (from_breadcrumb: boolean = false) => {
    if (store.nextPage === "") return;
    setTimeout(() => {
      navigate(store.nextPage);
    }, 50);
  };

  const getPrevArticle = async (from_breadcrumb: boolean = false) => {
    if (store.prevPage === "") return;
    setTimeout(() => {
      navigate(store.prevPage);
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
