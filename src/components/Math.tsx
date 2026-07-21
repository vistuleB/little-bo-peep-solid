import {
  createEffect,
  Accessor,
  children as resolveChildren,
  createMemo,
  createSignal,
  mergeProps,
  onCleanup,
  onMount,
  ParentProps,
  Setter,
  Show,
} from "solid-js";
import {
  ENABLE_MATHJAX_INTERSECTION_FALLBACK,
  MATHJAX_INTERSECTION_FALLBACK_DELAY_MS,
  MATHJAX_INTERSECTION_ROOT_MARGIN,
} from "~/constants";
import { useGlobalContext } from "~/store/StoreProvider";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import typesetMathJaxElements from "~/utils/typesetMathJax";
import {
  SolutionMathJaxEntry,
  SolutionMathJaxController,
  useSolutionMathJax,
} from "~/store/SolutionMathJaxProvider";
import { ScaleProvider } from "~/store/ScaleProvider";
import useConstrainedContent from "~/hooks/useConstrainedContent";
import styleJoin from "~/utils/styleJoin";
import getPrerenderedMathJax, {
  ensurePrerenderedMathJaxRouteCache,
  getPrerenderedMathJaxRouteCacheStatus,
  getPrerenderedMathJaxDebug,
  subscribePrerenderedMathJaxCache,
} from "~/utils/prerenderedMathJax";

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

const MathBlockAuthorTools = (props: {
  mathBlock: () => HTMLElement | undefined;
}) => {
  const [status, setStatus] = createSignal<
    "idle" | "writing" | "written" | "error"
  >("idle");
  const [writtenPath, setWrittenPath] = createSignal("");

  const sendAuthorCommand = (command: string) => {
    fetch("/log-event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cmd: command }),
    }).catch(() => {});
  };

  const harvest = async (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (status() === "written" && writtenPath()) {
      sendAuthorCommand(`open ${writtenPath()}`);
      return;
    }

    const svg = props.mathBlock()?.querySelector<SVGSVGElement>(".MathJax svg");
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

const mathJaxRootMargin = `${MATHJAX_INTERSECTION_ROOT_MARGIN}px`;

type MathJaxFallbackEntry = {
  ref: HTMLElement;
  visible: Accessor<boolean>;
  setVisible: Setter<boolean>;
  setScrollHeight: () => void;
  routeReady: Accessor<boolean>;
  afterTypeset?: () => void;
  typesetting: boolean;
  active: boolean;
};

const mathJaxFallbackEntries = new Set<MathJaxFallbackEntry>();
let mathJaxFallbackTimeout: number | undefined;

const nearMathJaxObserverViewport = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.bottom >= -MATHJAX_INTERSECTION_ROOT_MARGIN &&
    rect.top <= window.innerHeight + MATHJAX_INTERSECTION_ROOT_MARGIN
  );
};

const completeTypeset = (
  entry: MathJaxFallbackEntry,
  updateScrollHeight = true,
) => {
  if (!entry.active || !entry.ref.isConnected || entry.visible()) return false;

  entry.afterTypeset?.();
  entry.setVisible(true);
  if (updateScrollHeight) entry.setScrollHeight();
  return true;
};

const typesetMath = async (entry: MathJaxFallbackEntry) => {
  if (
    !entry.active ||
    !entry.ref.isConnected ||
    entry.visible() ||
    entry.typesetting
  ) {
    return false;
  }

  entry.typesetting = true;
  try {
    const typesetSucceeded = await typesetMathJaxElements([entry.ref]);
    return typesetSucceeded ? completeTypeset(entry) : false;
  } finally {
    entry.typesetting = false;
  }
};

const runMathJaxFallbackSweep = async () => {
  mathJaxFallbackTimeout = undefined;

  const pendingEntries = [...mathJaxFallbackEntries].filter(
    (entry) =>
      entry.active &&
      entry.ref.isConnected &&
      !entry.visible() &&
      !entry.typesetting,
  );

  const entries = pendingEntries.filter(
    (entry) => entry.routeReady() && nearMathJaxObserverViewport(entry.ref),
  );

  if (entries.length === 0) {
    if (pendingEntries.some((entry) => !entry.routeReady())) {
      scheduleMathJaxFallbackSweep();
    }
    return;
  }

  entries.forEach((entry) => {
    entry.typesetting = true;
  });

  const typesetSucceeded = await typesetMathJaxElements(
    entries.map((entry) => entry.ref),
  );

  entries.forEach((entry) => {
    entry.typesetting = false;
    if (typesetSucceeded) completeTypeset(entry);
  });

  if (!typesetSucceeded) scheduleMathJaxFallbackSweep();
};

const scheduleMathJaxFallbackSweep = () => {
  if (
    !ENABLE_MATHJAX_INTERSECTION_FALLBACK ||
    mathJaxFallbackTimeout !== undefined
  ) {
    return;
  }

  mathJaxFallbackTimeout = window.setTimeout(
    runMathJaxFallbackSweep,
    MATHJAX_INTERSECTION_FALLBACK_DELAY_MS,
  );
};

const registerMathJaxFallback = (entry: MathJaxFallbackEntry | undefined) => {
  if (!entry || !ENABLE_MATHJAX_INTERSECTION_FALLBACK) return;

  mathJaxFallbackEntries.add(entry);
  scheduleMathJaxFallbackSweep();
};

const unregisterMathJaxFallback = (entry: MathJaxFallbackEntry | undefined) => {
  if (!entry) return;
  mathJaxFallbackEntries.delete(entry);
};

const registerSolutionMathJax = (
  controller: SolutionMathJaxController | undefined,
  entry: MathJaxFallbackEntry | undefined,
) => {
  if (!controller || !entry) return;

  const solutionEntry: SolutionMathJaxEntry = {
    ref: entry.ref,
    pending: () => entry.active && !entry.visible() && !entry.typesetting,
    setTypesetting: (typesetting) => {
      entry.typesetting = typesetting;
    },
    complete: (updateScrollHeight = true) => {
      completeTypeset(entry, updateScrollHeight);
    },
    updateScrollHeight: entry.setScrollHeight,
  };
  controller.entries.add(solutionEntry);
  return () => controller.entries.delete(solutionEntry);
};

const nonTextChildren = (value: unknown): unknown => {
  if (value === null || value === undefined || value === false)
    return undefined;
  if (typeof value === "string" || typeof value === "number") return undefined;
  if (Array.isArray(value)) return value.map(nonTextChildren);
  return value;
};

const InlineMath = (props: ParentProps) => {
  let ref: HTMLSpanElement | undefined;
  const resolvedChildren = resolveChildren(() => props.children);
  const [routeCacheVersion, setRouteCacheVersion] = createSignal(0);
  const prerenderedMathJax = createMemo(() => {
    routeCacheVersion();
    return getPrerenderedMathJax("inline", resolvedChildren());
  });
  const prerenderedMathJaxDebug = createMemo(() => {
    routeCacheVersion();
    return getPrerenderedMathJaxDebug("inline", resolvedChildren());
  });
  const routeCacheStatus = createMemo(() => {
    routeCacheVersion();
    return getPrerenderedMathJaxRouteCacheStatus(
      typeof window === "undefined" ? "" : window.location.pathname,
    );
  });
  const [liveRendered, setLiveRendered] = createSignal(false);
  const activePrerenderedMathJax = () =>
    liveRendered() ? undefined : prerenderedMathJax();
  const [visible, setVisible] = createSignal(Boolean(prerenderedMathJax()));
  const { store, set_store } = useGlobalContext();
  const solutionMathJax = useSolutionMathJax();

  createEffect(() => {
    if (activePrerenderedMathJax()) setVisible(true);
  });

  const renderedBy = () =>
    activePrerenderedMathJax()
      ? "prerendered"
      : liveRendered()
        ? "live"
        : visible()
          ? "live"
          : "pending";

  onMount(() => {
    ensurePrerenderedMathJaxRouteCache(window.location.pathname);
    const unsubscribePrerenderedMathJaxCache = subscribePrerenderedMathJaxCache(
      () => setRouteCacheVersion((version) => version + 1),
    );
    const setScrollHeight = () =>
      set_store("scrollHeight", document.body.scrollHeight);
    const routeReady = () =>
      !store.spinner_currently_visible &&
      !store.route_scroll_in_progress &&
      store.horizontal_arrival_phase === "idle" &&
      store.route_phase === "idle" &&
      store.saved_scroll_finished;

    if (prerenderedMathJax()) {
      setVisible(true);
      setScrollHeight();
      return;
    }

    const mathJaxEntry = ref
      ? {
          ref,
          visible,
          setVisible,
          setScrollHeight,
          routeReady,
          afterTypeset: () => setLiveRendered(true),
          typesetting: false,
          active: true,
        }
      : undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && mathJaxEntry && routeReady()) {
          typesetMath(mathJaxEntry);
          observer.disconnect();
        }
      },
      {
        rootMargin: mathJaxRootMargin,
      },
    );
    if (ref && !solutionMathJax) observer.observe(ref);

    if (!solutionMathJax) registerMathJaxFallback(mathJaxEntry);

    const unregisterSolutionMathJax = registerSolutionMathJax(
      solutionMathJax,
      mathJaxEntry,
    );

    createEffect(() => {
      if (
        !solutionMathJax &&
        mathJaxEntry &&
        routeReady() &&
        nearMathJaxObserverViewport(mathJaxEntry.ref)
      ) {
        typesetMath(mathJaxEntry);
        observer.disconnect();
      }
    });

    onCleanup(() => {
      unsubscribePrerenderedMathJaxCache();
      if (mathJaxEntry) mathJaxEntry.active = false;
      observer.disconnect();
      unregisterMathJaxFallback(mathJaxEntry);
      unregisterSolutionMathJax?.();
    });
  });

  return (
    <span
      class="transition-opacity"
      data-prerendered-mathjax={
        prerenderedMathJaxDebug().enabled
          ? prerenderedMathJaxDebug().hit
            ? "hit"
            : "miss"
          : "off"
      }
      data-prerendered-mathjax-cache={
        prerenderedMathJaxDebug().cacheLoaded ? "loaded" : "missing"
      }
      data-prerendered-mathjax-route-cache={routeCacheStatus()}
      data-prerendered-mathjax-key={prerenderedMathJaxDebug().key}
      data-prerendered-mathjax-key-present={
        prerenderedMathJaxDebug().keyPresent ? "true" : "false"
      }
      data-prerendered-mathjax-available-keys={
        prerenderedMathJaxDebug().availableKeys
      }
      data-mathjax-rendered={renderedBy()}
      style={{ opacity: visible() ? "1" : "0" }}
      ref={ref}
      innerHTML={activePrerenderedMathJax()?.html}
    >
      {activePrerenderedMathJax() ? undefined : resolvedChildren()}
    </span>
  );
};

export { InlineMath as Math };

type MathBlockProps = SharedProps &
  ParentProps & {
    constrained?: boolean;
  };

export const MathBlock = (props: MathBlockProps) => {
  const merged = mergeProps({ constrained: true }, props);
  let ref: HTMLDivElement | undefined;
  const resolvedChildren = resolveChildren(() => merged.children);
  const [routeCacheVersion, setRouteCacheVersion] = createSignal(0);
  const prerenderedMathJax = createMemo(() => {
    routeCacheVersion();
    return getPrerenderedMathJax("display", resolvedChildren());
  });
  const prerenderedMathJaxDebug = createMemo(() => {
    routeCacheVersion();
    return getPrerenderedMathJaxDebug("display", resolvedChildren());
  });
  const routeCacheStatus = createMemo(() => {
    routeCacheVersion();
    return getPrerenderedMathJaxRouteCacheStatus(
      typeof window === "undefined" ? "" : window.location.pathname,
    );
  });
  const [liveRendered, setLiveRendered] = createSignal(false);
  const activePrerenderedMathJax = () =>
    liveRendered() ? undefined : prerenderedMathJax();
  const { store, set_store } = useGlobalContext();
  const [visible, setVisible] = createSignal(Boolean(prerenderedMathJax()));
  const [naturalWidth, setNaturalWidth] = createSignal(0);
  const constrainedContent = useConstrainedContent({
    naturalWidth,
    initiallyConstrained: merged.constrained,
  });
  const solutionMathJax = useSolutionMathJax();

  const targetWidth = () => naturalWidth() * constrainedContent.targetScale();

  const scale = createMemo(() => ({
    scale: constrainedContent.targetScale(),
    name: merged.id || "MathBlock",
    after_first_click: constrainedContent.afterFirstClick(),
  }));

  const measureNaturalWidth = () => {
    const svg = ref?.querySelector<SVGSVGElement>(".MathJax svg");
    if (!ref || !svg) return false;

    const previousRefWidth = ref.style.width;
    const previousSvgMaxWidth = svg.style.maxWidth;
    let measuredWidth = 0;
    try {
      ref.style.width = "max-content";
      svg.style.maxWidth = "none";
      measuredWidth = svg.getBoundingClientRect().width;
    } finally {
      ref.style.width = previousRefWidth;
      svg.style.maxWidth = previousSvgMaxWidth;
    }

    if (measuredWidth > 0) {
      setNaturalWidth(measuredWidth);
      constrainedContent.notifyHeightChangeAcrossFrames();
    }
    return measuredWidth > 0;
  };

  createEffect(() => {
    if (!activePrerenderedMathJax()) return;
    setVisible(true);
    window.requestAnimationFrame(measureNaturalWidth);
  });

  const renderedBy = () =>
    activePrerenderedMathJax()
      ? "prerendered"
      : liveRendered()
        ? "live"
        : visible()
          ? "live"
          : "pending";

  const handleClick = (event: MouseEvent) => {
    const target = event.target;
    if (target instanceof Element && target.closest("[data-side-image]")) {
      event.stopPropagation();
      return;
    }
    constrainedContent.handleClick(event);
  };

  onMount(() => {
    ensurePrerenderedMathJaxRouteCache(window.location.pathname);
    const unsubscribePrerenderedMathJaxCache = subscribePrerenderedMathJaxCache(
      () => setRouteCacheVersion((version) => version + 1),
    );
    const setScrollHeight = () =>
      set_store("scrollHeight", document.body.scrollHeight);
    const routeReady = () =>
      !store.spinner_currently_visible &&
      !store.route_scroll_in_progress &&
      store.horizontal_arrival_phase === "idle" &&
      store.route_phase === "idle" &&
      store.saved_scroll_finished;
    if (activePrerenderedMathJax()) {
      setVisible(true);
      window.requestAnimationFrame(() => {
        measureNaturalWidth();
        setScrollHeight();
      });
      return;
    }

    const mathJaxEntry = ref
      ? {
          ref,
          visible,
          setVisible,
          setScrollHeight,
          routeReady,
          afterTypeset: () => {
            setLiveRendered(true);
            measureNaturalWidth();
          },
          typesetting: false,
          active: true,
        }
      : undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && mathJaxEntry && routeReady()) {
          typesetMath(mathJaxEntry);
          observer.disconnect();
        }
      },
      {
        rootMargin: mathJaxRootMargin,
      },
    );

    if (ref && !solutionMathJax) {
      observer.observe(ref);
    }

    if (!solutionMathJax) registerMathJaxFallback(mathJaxEntry);

    const unregisterSolutionMathJax = registerSolutionMathJax(
      solutionMathJax,
      mathJaxEntry,
    );

    createEffect(() => {
      if (
        !solutionMathJax &&
        mathJaxEntry &&
        routeReady() &&
        nearMathJaxObserverViewport(mathJaxEntry.ref)
      ) {
        typesetMath(mathJaxEntry);
        observer.disconnect();
      }
    });

    onCleanup(() => {
      unsubscribePrerenderedMathJaxCache();
      if (mathJaxEntry) mathJaxEntry.active = false;
      observer.disconnect();
      unregisterMathJaxFallback(mathJaxEntry);
      unregisterSolutionMathJax?.();
    });
  });

  return (
    <ScaleProvider scale={scale}>
      <div
        id={merged.id}
        data-prerendered-mathjax={
          prerenderedMathJaxDebug().enabled
            ? prerenderedMathJaxDebug().hit
              ? "hit"
              : "miss"
            : "off"
        }
        data-prerendered-mathjax-cache={
          prerenderedMathJaxDebug().cacheLoaded ? "loaded" : "missing"
        }
        data-prerendered-mathjax-route-cache={routeCacheStatus()}
        data-prerendered-mathjax-key={prerenderedMathJaxDebug().key}
        data-prerendered-mathjax-key-present={
          prerenderedMathJaxDebug().keyPresent ? "true" : "false"
        }
        data-prerendered-mathjax-available-keys={
          prerenderedMathJaxDebug().availableKeys
        }
        data-mathjax-rendered={renderedBy()}
        data-horizontal-inspectable={
          constrainedContent.constrained() ? undefined : "true"
        }
        class={twJoin(
          "mathblock",
          merged.class,
          constrainedContent.transitionsEnabled()
            ? [
                "transition-[width]",
                "duration-500",
                "ease-[cubic-bezier(0.4,0,0.2,1)]",
              ]
            : "transition-opacity",
          store.show_areas && "mathblock-background-divide",
        )}
        style={styleJoin(merged.style, {
          opacity: visible() ? "1" : "0",
          width: targetWidth() ? `${targetWidth()}px` : "fit-content",
          maxWidth: "none",
          boxSizing: "border-box",
        })}
        onClick={handleClick}
        onTransitionEnd={constrainedContent.handleTransitionEnd}
        ref={ref}
      >
        {activePrerenderedMathJax() ? (
          <>
            <div innerHTML={activePrerenderedMathJax()?.html} />
            {nonTextChildren(resolvedChildren())}
          </>
        ) : (
          resolvedChildren()
        )}
        <Show when={import.meta.env.VITE_AUTHOR_MODE}>
          <MathBlockAuthorTools mathBlock={() => ref} />
        </Show>
      </div>
    </ScaleProvider>
  );
};
