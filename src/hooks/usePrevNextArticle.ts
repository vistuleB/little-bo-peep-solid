import { useNavigate } from "@solidjs/router";
import { useGlobalContext } from "~/store/StoreProvider";

const usePrevNextArticle = () => {
  const { store } = useGlobalContext();
  const navigate = useNavigate();

  const prevDisabled = () => (store.prevPage === "");
  const nextDisabled = () => (store.nextPage === "");
  const getPrevArticle = () => store.prevPage !== "" && navigate(store.prevPage);
  const getNextArticle = () => store.nextPage !== "" && navigate(store.nextPage);

  return {
    prevDisabled,
    nextDisabled,
    getNextArticle,
    getPrevArticle,
  };
};

export default usePrevNextArticle;