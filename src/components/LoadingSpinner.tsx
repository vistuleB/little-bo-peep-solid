import { createEffect, createSignal, onCleanup } from "solid-js";
import { useGlobalContext } from "~/store/StoreProvider";

const LoadingSpinner = () => {
  const [time, setTime] = createSignal(0);
  const [_interval, _setInterval] = createSignal<NodeJS.Timeout | null>(null);

  createEffect(() => {
    let interval = setInterval(() => {
      setTime(time() + 1);
    }, 1000 / 60);

    _setInterval(interval);
  });

  onCleanup(() => {
    clearInterval(_interval()!);
  });

  return (
    <div>
      <div>Loading ...</div>
      <div>{time()} </div>
      <div>---- &nbsp;&nbsp;&nbsp;seconds</div>
      <div>60</div>
    </div>
  );
};

export default LoadingSpinner;
