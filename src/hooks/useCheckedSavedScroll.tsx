import { useLocation, useSearchParams } from "@solidjs/router";
import {
  createEffect,
  createSignal,
  onCleanup,
  onMount,
  untrack,
} from "solid-js";
import useScrollToInChapter from "./useScrollToInChapter";
import { useGlobalContext } from "~/store/StoreProvider";
import {
  finishRouteLoad,
  markDestinationRouteMounted,
} from "~/utils/routeLoading";
import {
  ENABLE_HORIZONTAL_SWIPE_ARRIVAL,
  HASH_SCROLL_RESTORATION_DELAY_MS,
  HORIZONTAL_PAGE_ARRIVAL_OFFSET,
  IN_CHAPTER_SCROLL_DURATION_MS,
  SAVED_SCROLL_RESTORATION_DELAY_MS,
} from "~/constants";
import type { SmoothScrollController } from "~/utils/smoothScrollTo";
import { swipeArrivalPreparation } from "~/utils/routeTransitionPolicy";

const useCheckedSavedScroll = () => {
  const [searchParams, _] = useSearchParams();
  const location = useLocation();
  const { store, set_store } = useGlobalContext();
  const routeStartedAt = store.pending_route_started_at;
  let active = true;
  let restoreTimeout: number | undefined;
  let firstMountFrame: number | undefined;
  let secondMountFrame: number | undefined;
  let restWaitFrame: number | undefined;
  let resolveMountWait: ((mounted: boolean) => void) | undefined;
  let resolveRestWait: ((mounted: boolean) => void) | undefined;
  let activeVerticalScroll: SmoothScrollController | undefined;

  onMount(() => {
    set_store("saved_scroll_finished", false);
    markDestinationRouteMounted(location.pathname, store, set_store);
  });

  const anchorId = searchParams.id || location.hash.slice(1);
  const article = location.pathname.split("/").pop() || "";
  const scrollKey = `${article}_scroll`;

  const update = () => {
    if (untrack(() => store.suppress_scroll_memory)) return;
    localStorage.setItem(scrollKey, window.scrollY.toString());
  };

  const waitForRouteContentMount = () =>
    new Promise<boolean>((resolve) => {
      resolveMountWait = resolve;
      firstMountFrame = requestAnimationFrame(() => {
        firstMountFrame = undefined;
        if (!active) {
          resolveMountWait = undefined;
          resolve(false);
          return;
        }
        secondMountFrame = requestAnimationFrame(() => {
          secondMountFrame = undefined;
          resolveMountWait = undefined;
          resolve(active);
        });
      });
    });

  const cancelPendingRestoration = () => {
    active = false;
    window.clearTimeout(restoreTimeout);
    activeVerticalScroll?.cancel();
    if (firstMountFrame !== undefined) cancelAnimationFrame(firstMountFrame);
    if (secondMountFrame !== undefined) cancelAnimationFrame(secondMountFrame);
    if (restWaitFrame !== undefined) cancelAnimationFrame(restWaitFrame);
    resolveMountWait?.(false);
    resolveRestWait?.(false);
    resolveMountWait = undefined;
    resolveRestWait = undefined;
  };

  const waitForRequiredRestMounting = () => {
    const requiresFullRest =
      swipeArrivalPreparation(store, location.pathname) === "deep";
    if (
      !requiresFullRest ||
      store.rest_mounting_finished_for_route_started_at === routeStartedAt
    ) {
      return Promise.resolve(true);
    }

    return new Promise<boolean>((resolve) => {
      resolveRestWait = resolve;
      const check = () => {
        if (!active) {
          resolveRestWait = undefined;
          resolve(false);
          return;
        }
        if (
          store.rest_mounting_finished_for_route_started_at === routeStartedAt
        ) {
          restWaitFrame = undefined;
          resolveRestWait = undefined;
          resolve(true);
          return;
        }
        restWaitFrame = requestAnimationFrame(check);
      };
      restWaitFrame = requestAnimationFrame(check);
    });
  };

  const isCurrentSwipeTopArrival = () =>
    swipeArrivalPreparation(store, location.pathname) === "top";

  const arrivalStartX = () => {
    const centeredX = (document.body.scrollWidth - window.innerWidth) / 2;
    const hasSwipeArrival =
      ENABLE_HORIZONTAL_SWIPE_ARRIVAL &&
      swipeArrivalPreparation(store, location.pathname) !== "none" &&
      store.pending_arrival_direction !== null;
    if (!hasSwipeArrival) return centeredX;
    return (
      centeredX +
      (store.pending_arrival_direction === "left"
        ? -HORIZONTAL_PAGE_ARRIVAL_OFFSET
        : HORIZONTAL_PAGE_ARRIVAL_OFFSET)
    );
  };

  const completeRestoration = (onScroll: () => void) => {
    if (!active) return;
    set_store("saved_scroll_finished", true);
    set_store("route_scroll_in_progress", false);
    finishRouteLoad(location.pathname, store, set_store);
    window.addEventListener("scroll", onScroll);
  };

  if (anchorId) {
    const { scrollToInChapter } = useScrollToInChapter();

    onMount(() => {
      const restoreScroll = async () => {
        if (!active) return;
        set_store("route_scroll_in_progress", true);
        if (!(await waitForRouteContentMount())) return;
        if (!(await waitForRequiredRestMounting())) return;
        activeVerticalScroll = scrollToInChapter(
          anchorId as string,
          IN_CHAPTER_SCROLL_DURATION_MS,
        );
        await activeVerticalScroll.finished;
        if (!active) return;
        window.scroll({ left: arrivalStartX(), behavior: "instant" });
        update();
        completeRestoration(update);
      };
      restoreTimeout = window.setTimeout(
        restoreScroll,
        HASH_SCROLL_RESTORATION_DELAY_MS,
      );
    });

    onCleanup(() => {
      cancelPendingRestoration();
      window.removeEventListener("scroll", update);
    });

    return;
  }

  const [scroll, set_scroll] = createSignal<number | null>(null);

  createEffect(() => {
    const updateScroll = () => {
      if (untrack(() => store.suppress_scroll_memory)) return;
      set_scroll(window.scrollY);
    };

    const restoreScroll = async () => {
      if (!active) return;
      const savedScroll = Number(localStorage.getItem(scrollKey) || "0");
      set_scroll(savedScroll);

      set_store("route_scroll_in_progress", true);
      if (!(await waitForRouteContentMount())) return;
      if (!(await waitForRequiredRestMounting())) return;
      if (!active) return;
      window.scrollTo(arrivalStartX(), savedScroll);
      completeRestoration(updateScroll);
    };
    restoreTimeout = window.setTimeout(
      restoreScroll,
      isCurrentSwipeTopArrival() ? 0 : SAVED_SCROLL_RESTORATION_DELAY_MS,
    );

    return () => {
      cancelPendingRestoration();
      window.removeEventListener("scroll", updateScroll);
    };
  });

  createEffect(() => {
    const currentScroll = scroll();
    if (currentScroll === null) return;
    if (untrack(() => store.suppress_scroll_memory)) return;

    const storageFrame = requestAnimationFrame(() => {
      if (untrack(() => store.suppress_scroll_memory)) return;
      localStorage.setItem(scrollKey, currentScroll.toString());
    });

    return () => cancelAnimationFrame(storageFrame);
  });
};

export default useCheckedSavedScroll;
