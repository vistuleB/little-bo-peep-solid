import { useNavigate, useLocation } from "@solidjs/router";
import { useGlobalContext } from "~/store/StoreProvider";

const usePrevNextPage = () => {
  const { store, set_store } = useGlobalContext();
  const navigate = useNavigate();
  const location = useLocation();
  const clearCurrentPage = () => set_store("loading", true);
  const prevDisabled = () => store.prevPage === "";
  const nextDisabled = () => store.nextPage === "";
  const getPrevPage = () => getPage(store.prevPage);
  const getNextPage = () => getPage(store.nextPage);
  const getPage = (page: string) => {
    if (page === "" || location.pathname === page) return;
    // note: if a value of 'page' is given such that location.pathname != page
    // but such that the router still resolves 'page' to the current page
    // we will get an infinite rabbit, because 'onMount' is never called and
    // the rabbit is never cleared; so you always need to call getPage with carefully
    // normalized, 'correct' paths!!! (or with paths that certifiably point to a
    // different page)
    clearCurrentPage();
    if (store.navigation_delays) {
      setTimeout(
        () => {
          navigate(page, { scroll: false });
        },
        1500 + Math.random() * 1500,
      );
      return;
    }
    navigate(page, { scroll: false });
  };
  return {
    prevDisabled,
    nextDisabled,
    getNextPage: getNextPage,
    getPrevPage: getPrevPage,
    getPage,
  };
};

export default usePrevNextPage;
