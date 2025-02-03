import { onCleanup, onMount, ParentProps } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

function LazyMath(props: ParentProps & JSX.HTMLAttributes<HTMLDivElement>) {
  let ref: HTMLDivElement | undefined;

  onMount(() => {
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
  });

  return (
    <div ref={ref} class={props.class || ""} style={props.style || ""}>
      {props.children}
    </div>
  );
}

export const Math = (props: ParentProps) => {
  // let math: HTMLDivElement | undefined;

  // createEffect(() => {
  //   (window as any).MathJax.typesetPromise([math]);
  // });

  return (
    <LazyMath class="mathinline">
      {props.children}
    </LazyMath>
  );
};

export const MathBlock = (props: ParentProps) => {
  // let math: HTMLDivElement | undefined;

  // createEffect(() => {
  //   (window as any).MathJax.typesetPromise([math]);
  // });

  return <LazyMath class="mathblock">{props.children}</LazyMath>;
};
