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
    // 'page' may include a hash and/or query (e.g. "/article/chapter6#sec2"),
    // so compare only the pathname against the current pathname. If they match,
    // the router resolves 'page' to the page we're already on: it will NOT
    // remount, so 'onMount' (which clears loading) never fires. Setting loading
    // here would leave us stuck at loading=true forever (the "infinite rabbit").
    const targetPathname = page.split(/[?#]/)[0];
    if (targetPathname === location.pathname) return;
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
