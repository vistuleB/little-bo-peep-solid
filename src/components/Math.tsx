import { onCleanup, onMount, ParentProps } from "solid-js";

export const Math = (props: ParentProps) => {
  let ref: HTMLSpanElement | undefined;
  
  // createEffect(() => {
  //   (window as any).MathJax.typesetPromise([ref]);
  // });

  onMount(
    () => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              (window as any).MathJax.typesetPromise([ref]);
              observer.disconnect();
            }
          },
          {
            rootMargin: "300px",
          }
        );
        if (ref) observer.observe(ref);
        onCleanup(() => observer.disconnect());
    }
  );

  return (
    <span class="inline-flex indent-0" ref={ref}>
      {props.children}
    </span>
  );
};

export const MathBlock = (props: ParentProps) => {
  let ref: HTMLDivElement | undefined;
  
  // createEffect(() => {
  //   (window as any).MathJax.typesetPromise([ref]);
  // });

  onMount(
    () => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              (window as any).MathJax.typesetPromise([ref]);
              observer.disconnect();
            }
          },
          {
            rootMargin: "300px",
          }
        );
        if (ref) observer.observe(ref);
        onCleanup(() => observer.disconnect());
    }
  );

  return (
    <div class="mathblock" ref={ref}>
      {props.children}
    </div>
  );
};
