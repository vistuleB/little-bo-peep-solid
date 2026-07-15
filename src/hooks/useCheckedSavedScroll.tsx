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
  HASH_SCROLL_RESTORATION_DELAY_MS,
  IN_CHAPTER_SCROLL_DURATION_MS,
  SAVED_SCROLL_RESTORATION_DELAY_MS,
} from "~/constants";
import type { SmoothScrollController } from "~/utils/smoothScrollTo";
import { swipeArrivalPreparation } from "~/utils/routeTransitionPolicy";

const useCheckedSavedScroll = () => {
  const [searchParams, _] = useSearchParams();
  const location = useLocation();
  const routePath = location.pathname;
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
    markDestinationRouteMounted(routePath, store, set_store);
  });

  const anchorId = searchParams.id || location.hash.slice(1);
  const article = routePath.split("/").pop() || "";
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
      swipeArrivalPreparation(store, routePath) === "deep";
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
    swipeArrivalPreparation(store, routePath) === "top";

  const arrivalStartX = () => {
    const centeredX = (document.body.scrollWidth - window.innerWidth) / 2;
    return centeredX;
  };

  const completeRestoration = (onScroll: () => void) => {
    if (!active) return;
    set_store("saved_scroll_finished", true);
    set_store("route_scroll_in_progress", false);
    finishRouteLoad(routePath, store, set_store);
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

  // This must remain mount-only. Making it reactive can restore and horizontally
  // center the retained outgoing route when swipe-navigation state changes.
  onMount(() => {
    restoreTimeout = window.setTimeout(
      restoreScroll,
      isCurrentSwipeTopArrival() ? 0 : SAVED_SCROLL_RESTORATION_DELAY_MS,
    );
  });

  onCleanup(() => {
    cancelPendingRestoration();
    window.removeEventListener("scroll", updateScroll);
  });

  createEffect(() => {
    const currentScroll = scroll();
    if (currentScroll === null) return;
    if (untrack(() => store.suppress_scroll_memory)) return;

    const storageFrame = requestAnimationFrame(() => {
      if (untrack(() => store.suppress_scroll_memory)) return;
      localStorage.setItem(scrollKey, currentScroll.toString());
    });

    onCleanup(() => cancelAnimationFrame(storageFrame));
  });
};

export default useCheckedSavedScroll;
