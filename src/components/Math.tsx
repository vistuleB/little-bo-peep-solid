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

const InlineMath = (props: ParentProps) => {
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

export { InlineMath as Math };

type MathBlockProps = SharedProps &
  ParentProps & {
    constrained?: boolean;
  };

export const MathBlock = (props: MathBlockProps) => {
  const merged = mergeProps({ constrained: true }, props);
  let ref: HTMLDivElement | undefined;
  const { store, set_store } = useGlobalContext();
  const [visible, setVisible] = createSignal(false);
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

  const handleClick = (event: MouseEvent) => {
    const target = event.target;
    if (target instanceof Element && target.closest("[data-side-image]")) {
      event.stopPropagation();
      return;
    }
    constrainedContent.handleClick(event);
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

    onCleanup(() => {
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
        {merged.children}
      </div>
    </ScaleProvider>
  );
};
