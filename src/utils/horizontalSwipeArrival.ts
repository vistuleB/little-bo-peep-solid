export type HorizontalSwipeDirection = "left" | "right";

type PendingArrival = {
  direction: HorizontalSwipeDirection;
  routePath: string;
};

let pendingArrival: PendingArrival | undefined;

const routePath = (page: string) => page.split(/[?#]/)[0] || "/";

export const setPendingHorizontalSwipeArrival = (
  direction: HorizontalSwipeDirection,
  page: string,
) => {
  pendingArrival = { direction, routePath: routePath(page) };
};

export const consumePendingHorizontalSwipeArrival = (pathname: string) => {
  if (pendingArrival?.routePath !== pathname) return;

  const { direction } = pendingArrival;
  pendingArrival = undefined;
  return direction;
};

export const hasPendingHorizontalSwipeArrival = (pathname: string) =>
  pendingArrival?.routePath === pathname;

export const horizontalSwipeArrivalStartX = (
  pathname: string,
  centeredX: number,
  offset: number,
) => {
  if (pendingArrival?.routePath !== pathname) return centeredX;

  return centeredX + (pendingArrival.direction === "left" ? -offset : offset);
};
