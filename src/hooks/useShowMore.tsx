import { useLocation } from "@solidjs/router";
import { createEffect, createSignal, onCleanup } from "solid-js";
import { useGlobalContext } from "~/store/StoreProvider";
import { swipeArrivalPreparation } from "~/utils/routeTransitionPolicy";

const useShowMore = (targetCount = 1) => {
  const [showMoreCount, setShowMoreCount] = createSignal(0);
  const { store, set_store } = useGlobalContext();
  const location = useLocation();
  const routeStartedAt = store.pending_route_started_at;
  let firstDelayFrame: number | undefined;
  let secondDelayFrame: number | undefined;
  let batchFrame: number | undefined;
  let finished = false;

  const shouldPauseForTopArrival = () =>
    swipeArrivalPreparation(store, location.pathname) === "top" &&
    store.horizontal_arrival_phase !== "idle";

  const markFinished = () => {
    finished = true;
    set_store("rest_mounting_finished_for_route_started_at", routeStartedAt);
  };

  const scheduleNextBatch = () => {
    if (finished || batchFrame !== undefined || shouldPauseForTopArrival()) {
      return;
    }

    batchFrame = requestAnimationFrame(() => {
      batchFrame = undefined;
      if (shouldPauseForTopArrival()) return;

      const nextCount = Math.min(showMoreCount() + 1, targetCount);
      setShowMoreCount(nextCount);
      if (nextCount >= targetCount) {
        markFinished();
        return;
      }
      scheduleNextBatch();
    });
  };

  createEffect(() => {
    if (finished || shouldPauseForTopArrival()) return;
    if (firstDelayFrame !== undefined || secondDelayFrame !== undefined) return;

    firstDelayFrame = requestAnimationFrame(() => {
      firstDelayFrame = undefined;
      secondDelayFrame = requestAnimationFrame(() => {
        secondDelayFrame = undefined;
        scheduleNextBatch();
      });
    });
  });

  onCleanup(() => {
    if (firstDelayFrame !== undefined) cancelAnimationFrame(firstDelayFrame);
    if (secondDelayFrame !== undefined) cancelAnimationFrame(secondDelayFrame);
    if (batchFrame !== undefined) cancelAnimationFrame(batchFrame);
  });

  return showMoreCount;
};

export default useShowMore;
