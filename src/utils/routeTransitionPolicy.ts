import type { RoutePhase, Store } from "~/store/StoreProvider";

export const routeNeverNeedsInitialLoadingScreen = (routePath: string) =>
  routePath === "/";

export type SwipeArrivalPreparation = "none" | "top" | "deep";

export const swipeArrivalPreparation = (
  store: Store,
  pathname: string,
): SwipeArrivalPreparation => {
  if (
    store.pending_navigation_kind !== "swipe" ||
    store.arrival_route_path !== pathname
  ) {
    return "none";
  }
  return store.pending_route_target === "top" ? "top" : "deep";
};

type NavbarPositionInput = {
  onMobile: boolean;
  routePhase: RoutePhase;
  spinnerCurrentlyVisible: boolean;
};

export const decideRouteNavbarPosition = ({
  onMobile,
  routePhase,
  spinnerCurrentlyVisible,
}: NavbarPositionInput) => {
  if (onMobile) return "fixed";
  if (spinnerCurrentlyVisible && routePhase === "loading-old-route") {
    return "fixed";
  }
  return "absolute";
};

type ProvisionalDestinationScrollInput = {
  spinnerCurrentlyVisible: boolean;
};

export const shouldSetProvisionalDestinationTopScroll = ({
  spinnerCurrentlyVisible,
}: ProvisionalDestinationScrollInput) => spinnerCurrentlyVisible;
