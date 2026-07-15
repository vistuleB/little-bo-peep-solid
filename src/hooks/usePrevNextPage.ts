import { useNavigate, useLocation } from "@solidjs/router";
import { useGlobalContext } from "~/store/StoreProvider";
import { routePathFromPage, startRouteLoad } from "~/utils/routeLoading";
import type { RouteNavigationIntent } from "~/utils/routeLoading";
import type { RouteLoadTarget } from "~/store/StoreProvider";
import {
  beginHorizontalMotionDiagnostic,
  horizontalDiagnosticEvent,
} from "~/utils/horizontalMotionDiagnostic";

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

  const diagnosticState = () => {
    const bodyWidth = document.body.scrollWidth;
    const center = (bodyWidth - window.innerWidth) / 2;
    return [
      `path=${location.pathname}`,
      `kind=${store.pending_navigation_kind}`,
      `direction=${store.pending_arrival_direction || "-"}`,
      `arrival=${store.arrival_route_path || "-"}`,
      `phase=${store.horizontal_arrival_phase}`,
      `offset=${store.horizontal_arrival_offset}`,
      `route=${store.route_phase}`,
      `x=${window.scrollX.toFixed(1)}/${center.toFixed(1)}`,
      `width=${bodyWidth}`,
    ].join(" ");
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
    const target = routeLoadTarget(page);
    if (store.navigation_delays) {
      const routePath = routePathFromPage(page);
      const direction =
        navigationIntent.kind === "swipe" ? navigationIntent.direction : null;
      beginHorizontalMotionDiagnostic(
        `destination=${routePath}; staging starts in 2s; ${diagnosticState()}`,
      );

      const stages = [
        {
          label: "1 — ROUTE START TIME",
          run: () => set_store("pending_route_started_at", performance.now()),
        },
        {
          label: "1B — ROUTE PATH",
          run: () => set_store("pending_route_path", routePath),
        },
        {
          label: "1C — ROUTE TARGET",
          run: () => set_store("pending_route_target", target),
        },
        {
          label: "2A — NAVIGATION KIND",
          run: () =>
            set_store("pending_navigation_kind", navigationIntent.kind),
        },
        {
          label: "2B — ARRIVAL DIRECTION",
          run: () => set_store("pending_arrival_direction", direction),
        },
        {
          label: "2C — ARRIVAL ROUTE PATH",
          run: () =>
            set_store(
              "arrival_route_path",
              navigationIntent.kind === "swipe" ? routePath : "",
            ),
        },
        {
          label: "3 — ARRIVAL PHASE",
          run: () =>
            set_store(
              "horizontal_arrival_phase",
              navigationIntent.kind === "swipe"
                ? "awaiting-destination"
                : "idle",
            ),
        },
        {
          label: "4 — OFFSET RESET",
          run: () => set_store("horizontal_arrival_offset", 0),
        },
        {
          label: "5 — ROUTE PHASE",
          run: () => set_store("route_phase", "loading-old-route"),
        },
        {
          label: "6 — COMPLETE START ROUTE LOAD",
          run: () =>
            startRouteLoad(page, target, store, set_store, navigationIntent),
        },
      ];

      window.setTimeout(() => {
        stages.forEach((stage, index) => {
          window.setTimeout(() => {
            horizontalDiagnosticEvent(
              `BEFORE ${stage.label}`,
              "#ffd54f",
              diagnosticState(),
            );
            stage.run();
            queueMicrotask(() => {
              horizontalDiagnosticEvent(
                `AFTER ${stage.label}`,
                "#ff8a65",
                diagnosticState(),
              );
            });
          }, index * 2000);
        });

        window.setTimeout(
          () => {
            horizontalDiagnosticEvent("NAVIGATE", "#64b5f6", diagnosticState());
            navigate(page, { scroll: false });
          },
          stages.length * 2000 + 2000,
        );
      }, 2000);
      return;
    }

    startRouteLoad(page, target, store, set_store, navigationIntent);
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
