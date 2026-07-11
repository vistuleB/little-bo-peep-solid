import type { RoutePhase } from "~/store/StoreProvider";

export const routeNeverNeedsInitialLoadingScreen = (routePath: string) =>
  routePath === "/";

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
