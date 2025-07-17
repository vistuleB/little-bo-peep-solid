import { createEffect, createSignal, onCleanup } from "solid-js";
import { useGlobalContext } from "~/store/StoreProvider";

const LoadingGraphic = () => {
  const { set_store } = useGlobalContext();
  const [time, setTime] = createSignal(0);
  const [_interval, _setInterval] = createSignal<NodeJS.Timeout | null>(null);
  createEffect(() => {
    let interval = setInterval(() => {
      setTime(time() + 1);
    }, 100);

    _setInterval(interval);
  });

  onCleanup(() => {
    set_store("last_page_load_time", time());
    clearInterval(_interval()!);
  });

  return (
    <>
      <div class="fixed top-0 left-0 w-full h-full bg-white z-50"></div>
      <div class="fixed top-20 left-1/2 -translate-x-1/2 z-50">
        <img src="/images/loading_screen.png" class="min-w-[375px]" />
        <div class="mt-4 text-3xl font-baskerville text-center">
          <div>loading {(time() / 10).toFixed(1)}s&thinsp;</div>
        </div>
      </div>
    </>
  );
};

export default LoadingGraphic;
