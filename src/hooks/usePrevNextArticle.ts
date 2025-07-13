import { useNavigate } from "@solidjs/router";
import { useGlobalContext } from "~/store/StoreProvider";

const usePrevNextArticle = () => {
  const { store } = useGlobalContext();
  const navigate = useNavigate();

  const clearCurrentPage = () => {
    document.getElementById("loading-screen")?.classList.remove("hidden");
  };

  const prevDisabled = () => store.prevPage === "";
  const nextDisabled = () => store.nextPage === "";
  const getPrevArticle = () => {
    if (store.prevPage !== "") {
      clearCurrentPage();
      navigate(store.prevPage);
    }
  };
  const getNextArticle = () => {
    if (store.nextPage !== "") {
      clearCurrentPage();
      navigate(store.nextPage);
    }
  };
  const getPage = (page: string) => {
    clearCurrentPage();
    navigate(page);
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
