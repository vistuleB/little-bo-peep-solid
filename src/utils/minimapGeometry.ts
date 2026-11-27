// Pure slider <-> scroll math for the article minimap (VS Code style sliding).
// All lengths in CSS px. `sy` = minimap px per page px.

export type MinimapGeometry = {
  offset: number; // how far the minimap content is slid up
  sliderTop: number;
  sliderHeight: number;
};

export const minimapGeometry = (
  scrollY: number,
  scrollHeight: number,
  innerHeight: number,
  minimapHeight: number,
  sy: number,
): MinimapGeometry => {
  const contentHeight = scrollHeight * sy;
  const maxScroll = Math.max(1, scrollHeight - innerHeight);
  const offset =
    contentHeight <= minimapHeight
      ? 0
      : (scrollY / maxScroll) * (contentHeight - minimapHeight);
  return {
    offset,
    sliderTop: scrollY * sy - offset,
    sliderHeight: innerHeight * sy,
  };
};

export const scrollYFromSliderTop = (
  sliderTop: number,
  scrollHeight: number,
  innerHeight: number,
  minimapHeight: number,
  sy: number,
): number => {
  const contentHeight = scrollHeight * sy;
  const maxScroll = Math.max(0, scrollHeight - innerHeight);
  const k =
    contentHeight <= minimapHeight
      ? 0
      : (contentHeight - minimapHeight) / Math.max(1, maxScroll);
  return Math.min(maxScroll, Math.max(0, sliderTop / (sy - k)));
};

// Page y under a minimap-local y.
export const pageYFromMinimapY = (
  minimapY: number,
  offset: number,
  sy: number,
) => (minimapY + offset) / sy;

export function demo() {
  const assert = (c: boolean, m: string) => {
    if (!c) throw new Error("minimapGeometry: " + m);
  };
  const near = (a: number, b: number) => Math.abs(a - b) < 1e-6;
  const sy = 2 / 30;
  for (const [scrollHeight, innerHeight, H] of [
    [20000, 900, 844], // overflow: slides
    [5000, 900, 844], // fits: no slide
  ] as const) {
    const maxScroll = scrollHeight - innerHeight;
    for (const y of [0, maxScroll / 3, maxScroll / 2, maxScroll]) {
      const g = minimapGeometry(y, scrollHeight, innerHeight, H, sy);
      assert(g.sliderTop >= -1e-6, "slider above minimap");
      assert(g.sliderTop + g.sliderHeight <= H + 1e-6, "slider below minimap");
      const back = scrollYFromSliderTop(
        g.sliderTop,
        scrollHeight,
        innerHeight,
        H,
        sy,
      );
      assert(near(back, y), `round trip ${y} -> ${back}`);
    }
    const end = minimapGeometry(maxScroll, scrollHeight, innerHeight, H, sy);
    if (scrollHeight * sy > H) {
      assert(
        near(end.sliderTop + end.sliderHeight, H),
        "slider ends at bottom",
      );
    }
  }
  console.log("minimapGeometry ok");
}
