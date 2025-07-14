import { createEffect, createSignal, onCleanup } from "solid-js";
import { useGlobalContext } from "~/store/StoreProvider";

const LoadingSpinner = () => {
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
    <div>
      <div>Loading ...</div>
      <div>{time()} </div>
    </div>
  );
};

export default LoadingSpinner;
