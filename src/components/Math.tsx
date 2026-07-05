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
  MATHJAX_INTERSECTION_ROOT_MARGIN_PX,
  TEXT_X_PADDING,
} from "~/constants";
import { useGlobalContext } from "~/store/StoreProvider";
import SharedProps from "./types/SharedProps";

const mathJaxRootMargin = `${MATHJAX_INTERSECTION_ROOT_MARGIN_PX}px`;

const nearMathJaxObserverViewport = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.bottom >= -MATHJAX_INTERSECTION_ROOT_MARGIN_PX &&
    rect.top <= window.innerHeight + MATHJAX_INTERSECTION_ROOT_MARGIN_PX
  );
};

const typesetMath = async (
  ref: HTMLElement | undefined,
  visible: Accessor<boolean>,
  setVisible: Setter<boolean>,
  setScrollHeight: () => void,
) => {
  if (!ref || visible()) return false;
  await (window as any).MathJax.typesetPromise([ref]);
  setVisible(true);
  setScrollHeight();
  return true;
};

export const Math = (props: ParentProps) => {
  let ref: HTMLSpanElement | undefined;
  const [visible, setVisible] = createSignal(false);
  const { set_store } = useGlobalContext();

  onMount(() => {
    const setScrollHeight = () =>
      set_store("scrollHeight", document.body.scrollHeight);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          typesetMath(ref, visible, setVisible, setScrollHeight);
          observer.disconnect();
        }
      },
      {
        rootMargin: mathJaxRootMargin,
      },
    );
    if (ref) observer.observe(ref);

    const fallbackTimeout = ENABLE_MATHJAX_INTERSECTION_FALLBACK
      ? window.setTimeout(() => {
          if (!ref || !nearMathJaxObserverViewport(ref)) return;
          typesetMath(ref, visible, setVisible, setScrollHeight);
          observer.disconnect();
        }, MATHJAX_INTERSECTION_FALLBACK_DELAY_MS)
      : undefined;

    onCleanup(() => {
      observer.disconnect();
      if (fallbackTimeout !== undefined) {
        window.clearTimeout(fallbackTimeout);
      }
    });
  });

  return (
    <span
      class="transition-opacity"
      style={{ opacity: visible() ? "1" : "0" }}
      ref={ref}>
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

  const handleClick = () => {
    setScaledDown(!scaledDown());
  };

  const shouldBeScaledDown = () => {
    if (ref && originalWidth() > 0) {
      return originalWidth() > localInnerWidthCopy() - TEXT_X_PADDING * 2;
    }
    return false;
  };

  onMount(() => {
    const setScrollHeight = () =>
      set_store("scrollHeight", document.body.scrollHeight);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          typesetMath(ref, visible, setVisible, setScrollHeight);
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

    setTimeout(measureOriginalWidth, 50);

    const fallbackTimeout = ENABLE_MATHJAX_INTERSECTION_FALLBACK
      ? window.setTimeout(async () => {
          if (!ref || !nearMathJaxObserverViewport(ref)) return;
          const didTypeset = await typesetMath(
            ref,
            visible,
            setVisible,
            setScrollHeight,
          );
          if (!didTypeset) return;
          observer.disconnect();
          measureOriginalWidth();
        }, MATHJAX_INTERSECTION_FALLBACK_DELAY_MS)
      : undefined;

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
      if (fallbackTimeout !== undefined) {
        window.clearTimeout(fallbackTimeout);
      }
      window.removeEventListener("resize", handleResize);
    });
  });

  createEffect(() => {
    if (scaledDown()) {
      console.log(
        "setting it here to: ",
        store.innerWidth - TEXT_X_PADDING * 2 + "px",
      );
      ref?.style.setProperty(
        "width",
        store.innerWidth - TEXT_X_PADDING * 2 + "px",
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
      class={`mathblock transition-all`}
      style={{ opacity: visible() ? "1" : "0" }}
      onClick={handleClick}
      ref={ref}>
      {props.children}
    </div>
  );
};
