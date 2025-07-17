import { useNavigate } from "@solidjs/router";
import { useGlobalContext } from "~/store/StoreProvider";

const usePrevNextPage = () => {
  const { store, set_store } = useGlobalContext();
  const navigate = useNavigate();

  const clearCurrentPage = () => {
    set_store("loading", true);
  };

  const customNavigate = (page: string) => {
    if (store.loading) return;
    clearCurrentPage();

    setTimeout(
      () => {
        navigate(page, {
          scroll: false,
        });
      },
      store.navigation_delays ? 1500 + Math.random() * 1500 : 0,
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
    console.log(page);
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

export default usePrevNextPage;
