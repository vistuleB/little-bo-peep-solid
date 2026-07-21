import { createSignal } from "solid-js";

const measuredSvgScale = (
  svg: SVGSVGElement,
  viewBoxValues: [number, number, number, number],
) => {
  const rect = svg.getBoundingClientRect();
  const [, , viewBoxWidth, viewBoxHeight] = viewBoxValues;
  const widthScale = viewBoxWidth > 0 ? rect.width / viewBoxWidth : 0;
  const heightScale = viewBoxHeight > 0 ? rect.height / viewBoxHeight : 0;

  if (widthScale > 0 && Number.isFinite(widthScale)) return widthScale;
  if (heightScale > 0 && Number.isFinite(heightScale)) return heightScale;
  return 1;
};

const serializeStandaloneMathJaxSvg = (svg: SVGSVGElement) => {
  const clone = svg.cloneNode(true) as SVGSVGElement;
  const viewBox = clone.getAttribute("viewBox")?.trim();
  let scale = 1;

  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  clone.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
  clone.removeAttribute("style");
  clone.removeAttribute("class");
  clone.removeAttribute("tabindex");
  clone.removeAttribute("aria-hidden");
  clone.setAttribute("role", "img");
  clone.setAttribute("focusable", "false");

  if (viewBox) {
    const values = viewBox.split(/\s+/).map(Number);
    if (values.length === 4 && values.every(Number.isFinite)) {
      const typedValues = values as [number, number, number, number];
      scale = measuredSvgScale(svg, typedValues);
      const scaledViewBox = values.map((value) => value * scale);
      clone.setAttribute(
        "viewBox",
        scaledViewBox
          .map((value) => String(Number(value.toFixed(3))))
          .join(" "),
      );
      clone.setAttribute("width", `${Number(scaledViewBox[2].toFixed(3))}px`);
      clone.setAttribute("height", `${Number(scaledViewBox[3].toFixed(3))}px`);
    }
  }

  const firstGroup = clone.querySelector("g");
  if (firstGroup) {
    const transform = firstGroup.getAttribute("transform");
    firstGroup.setAttribute(
      "transform",
      `scale(${scale})${transform ? ` ${transform}` : ""}`,
    );
  }

  return `<?xml version="1.0" encoding="UTF-8"?>\n${new XMLSerializer().serializeToString(clone)}\n`;
};

const writeTooltipMathJaxSvg = async (svg: string) => {
  const response = await fetch("/write-tooltip-mathjax-svg", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ svg }),
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json() as Promise<{ path: string; url: string }>;
};

const sendAuthorCommand = (command: string) => {
  fetch("/log-event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cmd: command }),
  }).catch(() => {});
};

const MathJaxSvgExportTooltip = () => {
  let ref: HTMLButtonElement | undefined;
  const [status, setStatus] = createSignal<
    "idle" | "writing" | "written" | "error"
  >("idle");
  const [writtenPath, setWrittenPath] = createSignal("");

  const harvest = async (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (status() === "written" && writtenPath()) {
      sendAuthorCommand(`open ${writtenPath()}`);
      return;
    }

    const svg = ref
      ?.closest(".mathblock")
      ?.querySelector<SVGSVGElement>(".MathJax svg");
    if (!svg) {
      setStatus("error");
      return;
    }

    setStatus("writing");
    try {
      const result = await writeTooltipMathJaxSvg(
        serializeStandaloneMathJaxSvg(svg),
      );
      setWrittenPath(result.path);
      setStatus("written");
    } catch {
      setStatus("error");
    }
  };

  return (
    <button
      type="button"
      class="t-3003-mathjax-export"
      onClick={harvest}
      title="Write images/tooltip_mathjax.svg"
      ref={ref}
    >
      {status() === "writing"
        ? "writing MathJax SVG…"
        : status() === "written"
          ? "wrote tooltip_mathjax.svg"
          : status() === "error"
            ? "MathJax SVG export failed"
            : "export MathJax SVG"}
    </button>
  );
};

export default MathJaxSvgExportTooltip;
