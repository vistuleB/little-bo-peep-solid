/** Equal-width columns, capped by the author's preference and the item count. */
export function fittingGridColumns(
  preferred: number,
  count: number,
  availableWidth: number,
  widestItem: number,
  gap: number,
): number {
  const maximum = Math.min(
    Math.max(1, Math.floor(preferred) || 1),
    Math.max(1, count),
  );
  if (availableWidth <= 0 || widestItem <= 0) return 1;
  const fitting = Math.floor((availableWidth + gap) / (widestItem + gap));
  return Math.max(1, Math.min(maximum, fitting));
}

/** Keep source order down columns, including a shorter last column. */
export function gridVisualOrder(
  count: number,
  columns: number,
  columnFirst: boolean,
): number[] {
  const indices = Array.from({ length: count }, (_, i) => i);
  if (!columnFirst || !count) return indices;
  const rows = Math.ceil(count / columns);
  return indices.sort(
    (a, b) =>
      (a % rows) * columns +
      Math.floor(a / rows) -
      ((b % rows) * columns + Math.floor(b / rows)),
  );
}
