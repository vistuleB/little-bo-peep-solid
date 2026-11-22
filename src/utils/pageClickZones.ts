export type ClickZoneGeometry = {
  width: number;
  height: number;
  sideWidth: number;
  verticalHeight: number;
  canUp: boolean;
  canDown: boolean;
};

export function pageClickAction(x: number, y: number, g: ClickZoneGeometry) {
  const edgeDistance = Math.min(x, g.width - x);
  const inSide = g.sideWidth > 0 && edgeDistance < g.sideWidth;
  // Equal pixel distances from the edges give a true 45-degree boundary.
  const verticalBoundary = inSide
    ? Math.min(g.verticalHeight, edgeDistance)
    : g.verticalHeight;
  if (g.canUp && y <= verticalBoundary) return "up";
  if (g.canDown && g.height - y <= verticalBoundary) return "down";
  if (inSide) return x < g.width / 2 ? "prev" : "next";
  return undefined;
}

export function pageClickPolygons(g: ClickZoneGeometry) {
  const { width: w, height: h, sideWidth: s, verticalHeight: v } = g;
  const polygon = (points: number[][]) =>
    `polygon(${points.map(([x, y]) => `${x}px ${y}px`).join(", ")})`;
  const d = Math.min(s, v);
  const top = [[0, 0], [w, 0], [w-d, d],
    ...(s < v ? [[w-s, v], [s, v]] : []), [d, d]];
  const left = [[0, 0],
    ...(g.canUp ? [[d, d], [s, d]] : [[s, 0]]),
    ...(g.canDown ? [[s, h-d], [d, h-d]] : [[s, h]]), [0, h]];
  return {
    up: polygon(top),
    down: polygon(top.map(([x, y]) => [x, h-y])),
    prev: polygon(left),
    next: polygon(left.map(([x, y]) => [w-x, y])),
  };
}
