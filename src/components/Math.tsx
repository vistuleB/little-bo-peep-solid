import {
  createEffect,
  createSignal,
  onCleanup,
  onMount,
  ParentProps,
} from "solid-js";
import { TEXT_X_PADDING } from "~/constants";
import { useGlobalContext } from "~/store/StoreProvider";

export const Math = (props: ParentProps) => {
  let ref: HTMLSpanElement | undefined;
  const [visible, setVisible] = createSignal(false);

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          (window as any).MathJax.typesetPromise([ref]);
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px",
      },
    );
    if (ref) observer.observe(ref);
    onCleanup(() => observer.disconnect());
  });

  return (
    <span
      class="math inline-flex indent-0 transition-opacity"
      style={{ opacity: visible() ? "1" : "0" }}
      ref={ref}>
      {props.children}
    </span>
  );
};

export const MathBlock = (props: ParentProps) => {
  let ref: HTMLDivElement | undefined;
  const { store } = useGlobalContext();
  const [visible, setVisible] = createSignal(false);
  const [scaledDown, setScaledDown] = createSignal(false);
  const [originalWidth, setOriginalWidth] = createSignal(0);

  const handleClick = () => {
    setScaledDown((prev) => !prev);
  };

  const shouldBeScaledDown = () => {
    if (ref) {
      const rect = ref.getBoundingClientRect();
      return rect.width > store.innerWidth - TEXT_X_PADDING * 2;
    }
    return false;
  };

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          (window as any).MathJax.typesetPromise([ref]);
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px",
      },
    );

    if (ref) {
      observer.observe(ref);
      setOriginalWidth(ref.getBoundingClientRect().width);
      ref?.querySelector("svg")?.classList.add("transition-all");
    }

    const handleResize = () => {
      setScaledDown(shouldBeScaledDown());
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    onCleanup(() => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    });
  });

  createEffect(() => {
    if (scaledDown()) {
      ref?.style.setProperty(
        "width",
        store.innerWidth - TEXT_X_PADDING * 2 + "px",
      );
      return;
    }
    ref?.style.setProperty("width", originalWidth() + "px");
  });

  return (
    <div
      class="mathblock transition-all"
      style={{ opacity: visible() ? "1" : "0" }}
      onClick={handleClick}
      ref={ref}>
      {props.children}
    </div>
  );
};
