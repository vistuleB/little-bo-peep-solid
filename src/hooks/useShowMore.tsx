import { createSignal, onCleanup, onMount } from "solid-js";

const useShowMore = (targetCount = 1) => {
  const [showMoreCount, setShowMoreCount] = createSignal(0);
  let firstDelayFrame = 0;
  let secondDelayFrame = 0;
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

    firstDelayFrame = requestAnimationFrame(() => {
      secondDelayFrame = requestAnimationFrame(showNext);
    });
  });

  onCleanup(() => {
    cancelAnimationFrame(firstDelayFrame);
    cancelAnimationFrame(secondDelayFrame);
    cancelAnimationFrame(frame);
  });

  return showMoreCount;
};

export default useShowMore;
