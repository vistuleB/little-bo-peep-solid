import { useNavigate, useLocation } from "@solidjs/router";
import { useGlobalContext } from "~/store/StoreProvider";
import { startRouteLoad } from "~/utils/routeLoading";
import type { RouteNavigationIntent } from "~/utils/routeLoading";
import type { RouteLoadTarget } from "~/store/StoreProvider";

const usePrevNextPage = () => {
  const { store, set_store } = useGlobalContext();
  const navigate = useNavigate();
  const location = useLocation();
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

  const pageHasHash = (page: string) => page.includes("#");

  const routeLoadTarget = (page: string): RouteLoadTarget => {
    if (pageHasHash(page)) return "hash";
    return targetHasSavedTopScroll(page) ? "top" : "saved-scroll";
  };

  const getPage = (
    page: string,
    navigationIntent: RouteNavigationIntent = { kind: "standard" },
  ) => {
    if (page === "" || location.pathname === page) return;
    // note: if a value of 'page' is given such that location.pathname != page
    // but such that the router still resolves 'page' to the current page
    // we will get an infinite rabbit, because 'onMount' is never called and
    // the rabbit is never cleared; so you always need to call getPage with carefully
    // normalized, 'correct' paths!!! (or with paths that certifiably point to a
    // different page)
    startRouteLoad(
      page,
      routeLoadTarget(page),
      store,
      set_store,
      navigationIntent,
    );
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
