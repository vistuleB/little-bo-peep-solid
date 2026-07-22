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
  PrerenderedMathKind,
  subscribePrerenderedMathJaxCache,
} from "~/utils/prerenderedMathJax";

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

type PrerenderedMathJaxDebug = ReturnType<typeof getPrerenderedMathJaxDebug>;

const prerenderedMathJaxStatus = (debug: PrerenderedMathJaxDebug) =>
  debug.enabled ? (debug.hit ? "hit" : "miss") : "off";

const mathJaxDebugAttributes = (
  debug: Accessor<PrerenderedMathJaxDebug>,
  routeCacheStatus: Accessor<string>,
  renderedBy: Accessor<string>,
) => {
  const prerenderDebug = debug();
  return {
    "data-prerendered-mathjax": prerenderedMathJaxStatus(prerenderDebug),
    "data-prerendered-mathjax-cache": prerenderDebug.cacheLoaded
      ? "loaded"
      : "missing",
    "data-prerendered-mathjax-route-cache": routeCacheStatus(),
    "data-prerendered-mathjax-key": prerenderDebug.key,
    "data-prerendered-mathjax-key-present": prerenderDebug.keyPresent
      ? "true"
      : "false",
    "data-prerendered-mathjax-available-keys": prerenderDebug.availableKeys,
    "data-mathjax-rendered": renderedBy(),
  };
};

const currentPathname = () =>
  typeof window === "undefined" ? "" : window.location.pathname;

const usePrerenderedMathJaxCache = (
  kind: PrerenderedMathKind,
  resolvedChildren: Accessor<unknown>,
) => {
  const [routeCacheVersion, setRouteCacheVersion] = createSignal(0);

  const entry = createMemo(() => {
    routeCacheVersion();
    return getPrerenderedMathJax(kind, resolvedChildren());
  });

  const debug = createMemo(() => {
    routeCacheVersion();
    return getPrerenderedMathJaxDebug(kind, resolvedChildren());
  });

  const routeCacheStatus = createMemo(() => {
    routeCacheVersion();
    return getPrerenderedMathJaxRouteCacheStatus(currentPathname());
  });

  const subscribeCurrentRoute = () => {
    ensurePrerenderedMathJaxRouteCache(window.location.pathname);
    return subscribePrerenderedMathJaxCache(() =>
      setRouteCacheVersion((version) => version + 1),
    );
  };

  return { entry, debug, routeCacheStatus, subscribeCurrentRoute };
};

type InlineMathContainerProps = ParentProps<{
  debug: Accessor<PrerenderedMathJaxDebug>;
  renderedBy: Accessor<string>;
  routeCacheStatus: Accessor<string>;
  setRef: (element: HTMLSpanElement) => void;
  revealed: Accessor<boolean>;
  html?: string;
}>;

const InlineMathContainer = (props: InlineMathContainerProps) => {
  if (props.html !== undefined) {
    return (
      <span
        class="math transition-opacity"
        {...mathJaxDebugAttributes(
          props.debug,
          props.routeCacheStatus,
          props.renderedBy,
        )}
        style={{ opacity: props.revealed() ? "1" : "0" }}
        ref={props.setRef}
        innerHTML={props.html}
      />
    );
  }

  return (
    <span
      class="math transition-opacity"
      {...mathJaxDebugAttributes(
        props.debug,
        props.routeCacheStatus,
        props.renderedBy,
      )}
      style={{ opacity: props.revealed() ? "1" : "0" }}
      ref={props.setRef}
    >
      {props.children}
    </span>
  );
};

const InlineMath = (props: ParentProps) => {
  let ref: HTMLSpanElement | undefined;
  const resolvedChildren = resolveChildren(() => props.children);
  const prerenderedMathJax = usePrerenderedMathJaxCache(
    "inline",
    resolvedChildren,
  );
  const [liveRendered, setLiveRendered] = createSignal(false);
  const [liveHtml, setLiveHtml] = createSignal("");
  const activePrerenderedMathJax = () =>
    liveRendered() ? undefined : prerenderedMathJax.entry();
  const [revealed, setRevealed] = createSignal(
    Boolean(prerenderedMathJax.entry()),
  );
  const { store, set_store } = useGlobalContext();
  const solutionMathJax = useSolutionMathJax();
  const setRef = (element: HTMLSpanElement) => {
    ref = element;
  };

  createEffect(() => {
    if (activePrerenderedMathJax()) {
      setRevealed(true);
    } else if (!liveRendered()) {
      setRevealed(false);
    }
  });

  const renderedBy = () =>
    activePrerenderedMathJax()
      ? "prerendered"
      : liveRendered()
        ? "live"
        : "pending";

  onMount(() => {
    const unsubscribePrerenderedMathJaxCache =
      prerenderedMathJax.subscribeCurrentRoute();
    const setScrollHeight = () =>
      set_store("scrollHeight", document.body.scrollHeight);
    const routeReady = () =>
      !store.spinner_currently_visible &&
      !store.route_scroll_in_progress &&
      store.horizontal_arrival_phase === "idle" &&
      store.route_phase === "idle" &&
      store.saved_scroll_finished;

    if (prerenderedMathJax.entry()) {
      setRevealed(true);
      setScrollHeight();
      return;
    }

    const mathJaxEntry = ref
      ? {
          ref,
          visible: revealed,
          setVisible: setRevealed,
          setScrollHeight,
          routeReady,
          afterTypeset: () => {
            setLiveHtml(ref?.innerHTML || "");
            setLiveRendered(true);
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
    <Show
      when={activePrerenderedMathJax()}
      keyed
      fallback={
        <Show
          when={liveRendered()}
          fallback={
            <InlineMathContainer
              debug={prerenderedMathJax.debug}
              renderedBy={renderedBy}
              routeCacheStatus={prerenderedMathJax.routeCacheStatus}
              setRef={setRef}
              revealed={revealed}
            >
              {resolvedChildren()}
            </InlineMathContainer>
          }
        >
          <InlineMathContainer
            debug={prerenderedMathJax.debug}
            renderedBy={renderedBy}
            routeCacheStatus={prerenderedMathJax.routeCacheStatus}
            setRef={setRef}
            revealed={revealed}
            html={liveHtml()}
          />
        </Show>
      }
    >
      {(entry) => (
        <InlineMathContainer
          debug={prerenderedMathJax.debug}
          html={entry.html}
          renderedBy={renderedBy}
          routeCacheStatus={prerenderedMathJax.routeCacheStatus}
          setRef={setRef}
          revealed={revealed}
        />
      )}
    </Show>
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
  const prerenderedMathJax = usePrerenderedMathJaxCache(
    "display",
    resolvedChildren,
  );
  const [liveRendered, setLiveRendered] = createSignal(false);
  const activePrerenderedMathJax = () =>
    liveRendered() ? undefined : prerenderedMathJax.entry();
  const { store, set_store } = useGlobalContext();
  const [visible, setVisible] = createSignal(
    Boolean(prerenderedMathJax.entry()),
  );
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
    const unsubscribePrerenderedMathJaxCache =
      prerenderedMathJax.subscribeCurrentRoute();
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
        {...mathJaxDebugAttributes(
          prerenderedMathJax.debug,
          prerenderedMathJax.routeCacheStatus,
          renderedBy,
        )}
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
      </div>
    </ScaleProvider>
  );
};
