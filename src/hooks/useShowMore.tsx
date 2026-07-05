import { createSignal, onCleanup, onMount } from "solid-js";

const useShowMore = (targetCount = 1) => {
  const [showMoreCount, setShowMoreCount] = createSignal(0);
  let frame = 0;

  onMount(() => {
    const showNext = () => {
      frame = requestAnimationFrame(() => {
        setShowMoreCount((count) => {
          const nextCount = Math.min(count + 1, targetCount);
          if (nextCount < targetCount) showNext();
          return nextCount;
        });
      });
    };

    frame = requestAnimationFrame(showNext);
  });

  onCleanup(() => {
    cancelAnimationFrame(frame);
  });

  return showMoreCount;
};

export default useShowMore;
