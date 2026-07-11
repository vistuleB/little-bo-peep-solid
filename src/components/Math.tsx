import {
  createEffect,
  Accessor,
  createSignal,
  onCleanup,
  onMount,
  ParentProps,
  Setter,
} from "solid-js";
import {
  ENABLE_MATHJAX_INTERSECTION_FALLBACK,
  MATHJAX_INTERSECTION_FALLBACK_DELAY_MS,
  MATHJAX_INTERSECTION_ROOT_MARGIN,
  MOBILE_MAX_WIDTH,
  MOBILE_TEXT_COLUMN_SIDE_INSET,
} from "~/constants";
import { useGlobalContext } from "~/store/StoreProvider";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import typesetMathJaxElements from "~/utils/typesetMathJax";

const mathJaxRootMargin = `${MATHJAX_INTERSECTION_ROOT_MARGIN}px`;

type MathJaxFallbackEntry = {
  ref: HTMLElement;
  visible: Accessor<boolean>;
  setVisible: Setter<boolean>;
  setScrollHeight: () => void;
  routeReady: Accessor<boolean>;
  afterTypeset?: () => void;
  typesetting: boolean;
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
  if (entry.visible()) return false;

  entry.setVisible(true);
  entry.setScrollHeight();
  entry.afterTypeset?.();
  return true;
};

const typesetMath = async (entry: MathJaxFallbackEntry) => {
  if (entry.visible() || entry.typesetting) return false;

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
    (entry) => !entry.visible() && !entry.typesetting,
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

export const Math = (props: ParentProps) => {
  let ref: HTMLSpanElement | undefined;
  const [visible, setVisible] = createSignal(false);
  const { store, set_store } = useGlobalContext();

  onMount(() => {
    const setScrollHeight = () =>
      set_store("scrollHeight", document.body.scrollHeight);
    const routeReady = () =>
      !store.spinner_currently_visible &&
      !store.route_scroll_in_progress &&
      store.saved_scroll_finished;
    const mathJaxEntry = ref
      ? {
          ref,
          visible,
          setVisible,
          setScrollHeight,
          routeReady,
          typesetting: false,
        }
      : undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && mathJaxEntry) {
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

    onCleanup(() => {
      observer.disconnect();
      unregisterMathJaxFallback(mathJaxEntry);
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

export const MathBlock = (props: SharedProps & ParentProps) => {
  let ref: HTMLDivElement | undefined;
  const { store, set_store } = useGlobalContext();
  const [visible, setVisible] = createSignal(false);
  const [scaledDown, setScaledDown] = createSignal(false);
  const [originalWidth, setOriginalWidth] = createSignal(0);
  const [localInnerWidthCopy, setLocalInnerWidthCopy] = createSignal(0);
  let firstMeasureOfOriginalWidth = 0;

  const availableViewportWidth = (viewportWidth: number) =>
    viewportWidth -
    (viewportWidth <= MOBILE_MAX_WIDTH ? MOBILE_TEXT_COLUMN_SIDE_INSET * 2 : 0);

  const handleClick = () => {
    setScaledDown(!scaledDown());
  };

  const shouldBeScaledDown = () => {
    if (ref && originalWidth() > 0) {
      return originalWidth() > availableViewportWidth(localInnerWidthCopy());
    }
    return false;
  };

  onMount(() => {
    const setScrollHeight = () =>
      set_store("scrollHeight", document.body.scrollHeight);
    const routeReady = () =>
      !store.spinner_currently_visible &&
      !store.route_scroll_in_progress &&
      store.saved_scroll_finished;
    const measureOriginalWidth: () => boolean = () => {
      let svg = null;
      if (ref) {
        svg = ref.querySelector("svg");
        svg?.classList.add("transition-all");
        if (svg) {
          setOriginalWidth(svg.getBoundingClientRect().width);
        }
      }
      return svg != null;
    };
    const mathJaxEntry = ref
      ? {
          ref,
          visible,
          setVisible,
          setScrollHeight,
          routeReady,
          afterTypeset: measureOriginalWidth,
          typesetting: false,
        }
      : undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && mathJaxEntry) {
          typesetMath(mathJaxEntry);
          observer.disconnect();
          if (!measureOriginalWidth()) {
            console.log("failed to measure width once");
            setTimeout(() => {
              if (!measureOriginalWidth()) {
                console.log("failed to measure width twice");
                console.error("failed to measure width twice");
              }
            }, 50);
          }
        }
      },
      {
        rootMargin: mathJaxRootMargin,
      },
    );

    if (ref) {
      observer.observe(ref);
    }

    setTimeout(measureOriginalWidth, 50);

    registerMathJaxFallback(mathJaxEntry);

    const handleResize = () => {
      let oldInnerWidth = localInnerWidthCopy();
      let newInnerWidth = window.innerWidth;
      setLocalInnerWidthCopy(newInnerWidth);
      if (newInnerWidth != oldInnerWidth) setScaledDown(shouldBeScaledDown());
    };

    handleResize(); // should result in call to setScaledDown()
    window.addEventListener("resize", handleResize);

    onCleanup(() => {
      observer.disconnect();
      unregisterMathJaxFallback(mathJaxEntry);
      window.removeEventListener("resize", handleResize);
    });
  });

  createEffect(() => {
    if (scaledDown()) {
      console.log(
        "setting it here to: ",
        availableViewportWidth(store.innerWidth) + "px",
      );
      ref?.style.setProperty(
        "width",
        availableViewportWidth(store.innerWidth) + "px",
      );
      return;
    }
    ref?.style.setProperty(
      "width",
      ref && originalWidth() > 0 ? originalWidth() + "px" : "auto",
    );
  });

  return (
    <div
      id={props.id}
      class={twJoin(
        "mathblock transition-all",
        store.show_areas && "mathblock-background-divide",
      )}
      style={{ opacity: visible() ? "1" : "0" }}
      onClick={handleClick}
      ref={ref}
    >
      {props.children}
    </div>
  );
};
