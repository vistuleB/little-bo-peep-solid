import { createEffect, createSignal, onCleanup, onMount } from "solid-js";
import mainColumnWidth from "~/hooks/useMainColumnWidth";

type LoadingGraphicProps = {
  visible: boolean;
};

const LoadingGraphic = (props: LoadingGraphicProps) => {
  const [ms, setMs] = createSignal(0);
  let rabbit: HTMLImageElement | undefined;

  onMount(() => {
    rabbit?.decode().catch(() => undefined);
  });

  createEffect(() => {
    if (!props.visible) {
      setMs(0);
      return;
    }

    const startTime = performance.now();
    const interval = window.setInterval(() => {
      setMs(performance.now() - startTime);
    }, 63);

    onCleanup(() => window.clearInterval(interval));
  });

  return (
    <>
      <div
        class="fixed top-0 left-0 w-full h-full bg-[var(--background-rgb)] z-50"
        style={{
          opacity: props.visible ? 1 : 0,
          "pointer-events": props.visible ? "auto" : "none",
        }}
        aria-hidden={!props.visible}
      ></div>
      <div
        class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
        style={{
          opacity: props.visible ? 1 : 0,
          "pointer-events": props.visible ? "auto" : "none",
        }}
        aria-hidden={!props.visible}
      >
        <img
          ref={rabbit}
          src="/non-build-img/loading_screen.png"
          width="418"
          height="597"
          decoding="sync"
          style={`max-width:${mainColumnWidth() * 0.7}px;max-height:65vh;`}
        />
        <div class="mt-4 text-5xl font-baskerville text-center">
          <div>{(ms() / 1000).toFixed(2)}s&thinsp;</div>
        </div>
      </div>
    </>
  );
};

export default LoadingGraphic;
