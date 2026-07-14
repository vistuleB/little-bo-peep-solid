import {
  createEffect,
  Accessor,
  createMemo,
  createSignal,
  mergeProps,
  onCleanup,
  onMount,
  ParentProps,
  Setter,
} from "solid-js";
import {
  ENABLE_MATHJAX_INTERSECTION_FALLBACK,
  MATHJAX_INTERSECTION_FALLBACK_DELAY_MS,
  MATHJAX_INTERSECTION_ROOT_MARGIN,
  MOBILE_TEXT_COLUMN_SIDE_INSET,
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
import { useHeightChangeListenerContext } from "~/store/HeightChangeListenerProvider";
import { ScaleProvider } from "~/store/ScaleProvider";

const mathJaxRootMargin = `${MATHJAX_INTERSECTION_ROOT_MARGIN}px`;
const HEIGHT_CHANGE_RAF_MAX_MS = 800;

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

const completeTypeset = (entry: MathJaxFallbackEntry) => {
  if (!entry.active || !entry.ref.isConnected || entry.visible()) return false;

  entry.afterTypeset?.();
  entry.setVisible(true);
  entry.setScrollHeight();
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
    complete: () => {
      completeTypeset(entry);
    },
  };
  controller.entries.add(solutionEntry);
  return () => controller.entries.delete(solutionEntry);
};

export const Math = (props: ParentProps) => {
  let ref: HTMLSpanElement | undefined;
  const [visible, setVisible] = createSignal(false);
  const { store, set_store } = useGlobalContext();
  const solutionMathJax = useSolutionMathJax();

  onMount(() => {
    const setScrollHeight = () =>
      set_store("scrollHeight", document.body.scrollHeight);
    const routeReady = () =>
      !store.spinner_currently_visible &&
      !store.route_scroll_in_progress &&
      store.horizontal_arrival_phase === "idle" &&
      store.route_phase === "idle" &&
      store.saved_scroll_finished;
    const mathJaxEntry = ref
      ? {
          ref,
          visible,
          setVisible,
          setScrollHeight,
          routeReady,
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
    if (ref) observer.observe(ref);

    registerMathJaxFallback(mathJaxEntry);

    const unregisterSolutionMathJax = registerSolutionMathJax(
      solutionMathJax,
      mathJaxEntry,
    );

    createEffect(() => {
      if (
        mathJaxEntry &&
        routeReady() &&
        nearMathJaxObserverViewport(mathJaxEntry.ref)
      ) {
        typesetMath(mathJaxEntry);
        observer.disconnect();
      }
    });

    onCleanup(() => {
      if (mathJaxEntry) mathJaxEntry.active = false;
      observer.disconnect();
      unregisterMathJaxFallback(mathJaxEntry);
      unregisterSolutionMathJax?.();
    });
  });

  return (
    <span
      class="transition-opacity"
      style={{ opacity: visible() ? "1" : "0" }}
      ref={ref}
    >
      {props.children}
    </span>
  );
};

type MathBlockProps = SharedProps &
  ParentProps & {
    constrained?: boolean;
  };

export const MathBlock = (props: MathBlockProps) => {
  const merged = mergeProps({ constrained: true }, props);
  let ref: HTMLDivElement | undefined;
  let transitionTimeout: number | undefined;
  let heightChangeAnimationFrame: number | undefined;
  let heightChangeAnimationFrameExpiresAt = 0;
  const { store, set_store } = useGlobalContext();
  const { set_height_change_listener_store } =
    useHeightChangeListenerContext() || {};
  const [visible, setVisible] = createSignal(false);
  const [afterFirstClick, setAfterFirstClick] = createSignal(false);
  const [naturalWidth, setNaturalWidth] = createSignal(0);
  const [constrained, setConstrained] = createSignal(merged.constrained);
  const [transitionsEnabled, setTransitionsEnabled] = createSignal(false);
  const [viewportWidth, setViewportWidth] = createSignal(
    typeof window === "undefined" ? 0 : window.innerWidth,
  );
  const solutionMathJax = useSolutionMathJax();

  const availableViewportWidth = () =>
    globalThis.Math.max(0, viewportWidth() - MOBILE_TEXT_COLUMN_SIDE_INSET * 2);

  const targetWidth = () => {
    const width = naturalWidth();
    if (!width) return 0;
    return constrained()
      ? globalThis.Math.min(width, availableViewportWidth())
      : width;
  };

  const scale = createMemo(() => ({
    scale: naturalWidth() ? targetWidth() / naturalWidth() : 1,
    name: merged.id || "MathBlock",
    after_first_click: afterFirstClick(),
  }));

  const notifyHeightChange = () => {
    set_height_change_listener_store?.(
      "re_calculate_height",
      (previous) => !previous,
    );
  };

  const notifyHeightChangeAcrossFrames = () => {
    notifyHeightChange();
    requestAnimationFrame(notifyHeightChange);
    window.setTimeout(notifyHeightChange, 50);
  };

  const stopHeightChangeAnimationFrameLoop = () => {
    if (heightChangeAnimationFrame === undefined) return;

    cancelAnimationFrame(heightChangeAnimationFrame);
    heightChangeAnimationFrame = undefined;
    heightChangeAnimationFrameExpiresAt = 0;
  };

  const startHeightChangeAnimationFrameLoop = () => {
    heightChangeAnimationFrameExpiresAt =
      performance.now() + HEIGHT_CHANGE_RAF_MAX_MS;

    if (heightChangeAnimationFrame !== undefined) return;

    const tick = () => {
      if (performance.now() > heightChangeAnimationFrameExpiresAt) {
        heightChangeAnimationFrame = undefined;
        heightChangeAnimationFrameExpiresAt = 0;
        notifyHeightChangeAcrossFrames();
        return;
      }

      notifyHeightChange();
      heightChangeAnimationFrame = requestAnimationFrame(tick);
    };

    heightChangeAnimationFrame = requestAnimationFrame(tick);
  };

  const disableTransitionsDuringWindowResizes = () => {
    clearTimeout(transitionTimeout);
    stopHeightChangeAnimationFrameLoop();
    setTransitionsEnabled(false);
  };

  const enableTransitionForToggle = () => {
    clearTimeout(transitionTimeout);
    setTransitionsEnabled(true);
    startHeightChangeAnimationFrameLoop();
    transitionTimeout = window.setTimeout(() => {
      setTransitionsEnabled(false);
      stopHeightChangeAnimationFrameLoop();
      notifyHeightChangeAcrossFrames();
    }, 600);
  };

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation();

    if (naturalWidth() > availableViewportWidth()) {
      enableTransitionForToggle();
      requestAnimationFrame(() => {
        setConstrained((beforeToggle) => !beforeToggle);
        notifyHeightChangeAcrossFrames();
      });
    }
    setAfterFirstClick(true);
  };

  const handleTransitionEnd = (event: TransitionEvent) => {
    if (event.propertyName !== "width") return;

    clearTimeout(transitionTimeout);
    stopHeightChangeAnimationFrameLoop();
    setTransitionsEnabled(false);
    notifyHeightChangeAcrossFrames();
  };

  const handleWindowResize = () => {
    disableTransitionsDuringWindowResizes();
    setViewportWidth(window.innerWidth);
  };

  onMount(() => {
    const setScrollHeight = () =>
      set_store("scrollHeight", document.body.scrollHeight);
    const routeReady = () =>
      !store.spinner_currently_visible &&
      !store.route_scroll_in_progress &&
      store.horizontal_arrival_phase === "idle" &&
      store.route_phase === "idle" &&
      store.saved_scroll_finished;
    const measureNaturalWidth = () => {
      const svg = ref?.querySelector<SVGSVGElement>(".MathJax svg");
      if (!ref || !svg) return false;

      const previousRefWidth = ref.style.width;
      const previousSvgMaxWidth = svg.style.maxWidth;
      ref.style.width = "max-content";
      svg.style.maxWidth = "none";
      const measuredWidth = svg.getBoundingClientRect().width;
      ref.style.width = previousRefWidth;
      svg.style.maxWidth = previousSvgMaxWidth;

      if (measuredWidth > 0) {
        setNaturalWidth(measuredWidth);
        notifyHeightChangeAcrossFrames();
      }
      return measuredWidth > 0;
    };
    const mathJaxEntry = ref
      ? {
          ref,
          visible,
          setVisible,
          setScrollHeight,
          routeReady,
          afterTypeset: measureNaturalWidth,
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

    if (ref) {
      observer.observe(ref);
    }

    registerMathJaxFallback(mathJaxEntry);

    const unregisterSolutionMathJax = registerSolutionMathJax(
      solutionMathJax,
      mathJaxEntry,
    );

    createEffect(() => {
      if (
        mathJaxEntry &&
        routeReady() &&
        nearMathJaxObserverViewport(mathJaxEntry.ref)
      ) {
        typesetMath(mathJaxEntry);
        observer.disconnect();
      }
    });

    setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    onCleanup(() => {
      clearTimeout(transitionTimeout);
      stopHeightChangeAnimationFrameLoop();
      if (mathJaxEntry) mathJaxEntry.active = false;
      observer.disconnect();
      unregisterMathJaxFallback(mathJaxEntry);
      unregisterSolutionMathJax?.();
      window.removeEventListener("resize", handleWindowResize);
    });
  });

  return (
    <ScaleProvider scale={scale}>
      <div
        id={merged.id}
        class={twJoin(
          "mathblock",
          transitionsEnabled()
            ? [
                "transition-[width]",
                "duration-500",
                "ease-[cubic-bezier(0.4,0,0.2,1)]",
              ]
            : "transition-opacity",
          store.show_areas && "mathblock-background-divide",
        )}
        style={{
          opacity: visible() ? "1" : "0",
          width: targetWidth() ? `${targetWidth()}px` : "fit-content",
          "max-width": "none",
          "box-sizing": "border-box",
        }}
        onClick={handleClick}
        onTransitionEnd={handleTransitionEnd}
        ref={ref}
      >
        {merged.children}
      </div>
    </ScaleProvider>
  );
};
