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

  const articleFromPath = (page: string) => {
    const [path] = page.split(/[?#]/);
    const parts = path.split("/").filter(Boolean);
    return parts[parts.length - 1] || "";
  };

  const targetHasSavedTopScroll = (page: string) => {
    const article = articleFromPath(page);
    return Number(localStorage.getItem(`${article}_scroll`) || "0") === 0;
  };

  const currentScrollKey = () => {
    const article = articleFromPath(location.pathname);
    return `${article}_scroll`;
  };

  const scrollToTopForTopSavedTarget = (page: string) => {
    if (!targetHasSavedTopScroll(page)) return;

    localStorage.setItem(currentScrollKey(), window.scrollY.toString());
    set_store("suppress_scroll_memory", true);

    const centeredScrollX = (document.body.scrollWidth - window.innerWidth) / 2;
    window.scrollTo(centeredScrollX, 0);
    set_store("scrollX", centeredScrollX);
    set_store("scrollY", 0);
    set_store("scroll_is_at_0", true);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        set_store("suppress_scroll_memory", false);
      });
    });
  };

  const getPage = (page: string) => {
    if (page === "" || location.pathname === page) return;
    // note: if a value of 'page' is given such that location.pathname != page
    // but such that the router still resolves 'page' to the current page
    // we will get an infinite rabbit, because 'onMount' is never called and
    // the rabbit is never cleared; so you always need to call getPage with carefully
    // normalized, 'correct' paths!!! (or with paths that certifiably point to a
    // different page)
    scrollToTopForTopSavedTarget(page);
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
