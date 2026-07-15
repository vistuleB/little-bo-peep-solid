const PANEL_ID = "horizontal-motion-diagnostic";
const MAX_HISTORY = 7;
const CENTER_TOLERANCE = 2;
const MEANINGFUL_DISTANCE = 30;

type HorizontalSnapshot = {
  x: number;
  center: number;
  bodyWidth: number;
  documentWidth: number;
  viewportWidth: number;
};

type ExplicitCenter = {
  label: string;
  at: number;
};

let active = false;
let startedAt = 0;
let history: string[] = [];
let monitorFrame: number | undefined;
let previousSnapshot: HorizontalSnapshot | undefined;
let lastExplicitCenter: ExplicitCenter | undefined;

const snapshot = (): HorizontalSnapshot => {
  const bodyWidth = document.body.scrollWidth;
  const documentWidth =
    document.scrollingElement?.scrollWidth ||
    document.documentElement.scrollWidth;
  return {
    x: window.scrollX,
    center: (bodyWidth - window.innerWidth) / 2,
    bodyWidth,
    documentWidth,
    viewportWidth: window.innerWidth,
  };
};

const ensurePanel = () => {
  let panel = document.getElementById(PANEL_ID);
  if (panel) return panel;

  panel = document.createElement("div");
  panel.id = PANEL_ID;
  Object.assign(panel.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    padding: "3px 6px",
    zIndex: "2147483647",
    pointerEvents: "none",
    color: "#111",
    background: "#fff176",
    borderBottom: "1px solid #111",
    boxSizing: "border-box",
    font: "600 10px/1.2 ui-monospace, SFMono-Regular, Menlo, monospace",
    whiteSpace: "pre-wrap",
  });
  document.documentElement.appendChild(panel);
  return panel;
};

const render = (color: string) => {
  const panel = ensurePanel();
  panel.style.background = color;
  panel.textContent = history.join("\n");
};

export const horizontalDiagnosticEvent = (
  label: string,
  color = "#fff176",
  detail = "",
) => {
  if (!active) return;
  const elapsed = ((performance.now() - startedAt) / 1000).toFixed(3);
  history.push(`${elapsed}s ${label}${detail ? ` | ${detail}` : ""}`);
  history = history.slice(-MAX_HISTORY);
  render(color);
};

export const horizontalDiagnosticExplicitCenter = (label: string) => {
  if (!active) return;
  lastExplicitCenter = { label, at: performance.now() };
  const current = snapshot();
  horizontalDiagnosticEvent(
    `CENTER CALL: ${label}`,
    "#ffab91",
    `x=${current.x.toFixed(1)} target=${current.center.toFixed(1)}`,
  );
};

const monitor = () => {
  if (!active) return;
  const current = snapshot();
  const previous = previousSnapshot;

  if (previous) {
    const widthChanged =
      current.bodyWidth !== previous.bodyWidth ||
      current.documentWidth !== previous.documentWidth ||
      current.viewportWidth !== previous.viewportWidth;
    if (widthChanged) {
      horizontalDiagnosticEvent(
        "WIDTH CHANGE",
        "#ce93d8",
        `body ${previous.bodyWidth}->${current.bodyWidth}; doc ${previous.documentWidth}->${current.documentWidth}; viewport ${previous.viewportWidth}->${current.viewportWidth}; x=${current.x.toFixed(1)}`,
      );
    }

    const wasAwayFromCenter =
      Math.abs(previous.x - previous.center) > MEANINGFUL_DISTANCE;
    const isNowCentered =
      Math.abs(current.x - current.center) <= CENTER_TOLERANCE;
    if (wasAwayFromCenter && isNowCentered) {
      const now = performance.now();
      const explicitAge = lastExplicitCenter
        ? Math.round(now - lastExplicitCenter.at)
        : undefined;
      const attribution =
        explicitAge !== undefined && explicitAge <= 750
          ? `${lastExplicitCenter?.label} ${explicitAge}ms earlier`
          : "NO RECENT CENTER CALL";
      horizontalDiagnosticEvent(
        "OBSERVED RETURN TO CENTER",
        "#ef5350",
        `x ${previous.x.toFixed(1)}->${current.x.toFixed(1)}; ${attribution}`,
      );
    }
  }

  previousSnapshot = current;
  monitorFrame = requestAnimationFrame(monitor);
};

export const beginHorizontalMotionDiagnostic = (detail: string) => {
  active = true;
  startedAt = performance.now();
  history = [];
  lastExplicitCenter = undefined;
  previousSnapshot = snapshot();
  if (monitorFrame !== undefined) cancelAnimationFrame(monitorFrame);
  horizontalDiagnosticEvent("SWIPE RECOGNIZED", "#80deea", detail);
  monitorFrame = requestAnimationFrame(monitor);
};
