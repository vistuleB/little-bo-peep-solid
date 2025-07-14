import { useNavigate } from "@solidjs/router";
import { useGlobalContext } from "~/store/StoreProvider";

const usePrevNextArticle = () => {
  const { store, set_store } = useGlobalContext();
  const navigate = useNavigate();

  const clearCurrentPage = () => {
    set_store("loading", true);
  };

  const customNavigate = (page: string) => {
    clearCurrentPage();
    setTimeout(
      () => {
        navigate(page);
      },
      500 + Math.random() * 500,
    );
  };

  const prevDisabled = () => store.prevPage === "";
  const nextDisabled = () => store.nextPage === "";
  const getPrevArticle = () => {
    if (store.prevPage !== "") {
      customNavigate(store.prevPage);
    }
  };
  const getNextArticle = () => {
    if (store.nextPage !== "") {
      customNavigate(store.nextPage);
    }
  };
  const getPage = (page: string) => {
    customNavigate(page);
  };

  return {
    prevDisabled,
    nextDisabled,
    getNextArticle,
    getPrevArticle,
    getPage,
  };
};

export default usePrevNextArticle;
