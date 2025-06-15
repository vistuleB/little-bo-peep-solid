import { createSignal, onCleanup, onMount, ParentProps } from "solid-js";

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
      style={{ opacity: visible() ? "100" : "0" }}
      ref={ref}>
      {props.children}
    </span>
  );
};

export const MathBlock = (props: ParentProps) => {
  let ref: HTMLDivElement | undefined;
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
    <div
      class="math mathblock transition-opacity"
      style={{ opacity: visible() ? "100" : "0" }}
      ref={ref}>
      {props.children}
    </div>
  );
};
