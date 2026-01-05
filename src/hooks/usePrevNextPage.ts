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
    if (page === "") return;

    // if navigating to the same route, force a reload
    if (location.pathname === page) {
      // clear loading immediately since we're not actually navigating
      set_store("loading", false);
      return;
    }
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
