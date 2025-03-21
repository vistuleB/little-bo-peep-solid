import { createEffect, createSignal, onCleanup } from "solid-js";
import { LeftArrow } from "./PanelButton";
import {
  HAMBURGER_MENU_SCROLLY_END_FADE,
  HAMBURGER_MENU_SCROLLY_START_FADE,
} from "~/constants";
import { useGlobalContext } from "~/store/StoreProvider";
import { twJoin } from "tailwind-merge";

const ActionArrows = () => {
  const { store } = useGlobalContext();
  const [opacity, set_opacity] = createSignal(1);
  const [hovered, set_hovered] = createSignal(false);

  const calc_opacity = () => {
    // prettier-ignore
    return Math.min(
      0.0,
      Math.max(0, 1.0 - (store.scrollY - HAMBURGER_MENU_SCROLLY_START_FADE) / (HAMBURGER_MENU_SCROLLY_END_FADE - HAMBURGER_MENU_SCROLLY_START_FADE))
    );
  };

  const handleScroll = () => {
    set_opacity(calc_opacity());
  };

  createEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  });

  const exerciseBtnsPos = () => {
    if (!document.getElementById("exercises-btns"))
      return document.body.scrollHeight;
    const rect = document
      .getElementById("exercises-btns")
      ?.getBoundingClientRect()!;
    return rect.y + store.scrollY;
  };

  function smoothScrollTo(targetPosition: number, duration: number) {
    const startPosition = store.scrollY;
    const distance = targetPosition - startPosition;
    let startTime: DOMHighResTimeStamp | null = null;

    function animation(currentTime: DOMHighResTimeStamp) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(store.scrollX, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
      else window.scrollTo(store.scrollX, targetPosition);
    }

    function easeInOutQuad(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  const handleUpClick = (_: MouseEvent) => {
    let middleScroll = exerciseBtnsPos() - window.innerHeight / 2 + 50; // see also BackupArrow in Solution.tsx
    let scrollTo = store.scrollY < middleScroll + 100 ? 0 : middleScroll;
    smoothScrollTo(scrollTo, 100);
  };

  const handleDownClick = (_: MouseEvent) => {
    let middleScroll = exerciseBtnsPos() - window.innerHeight / 2 + 50;
    let scrollTo =
      store.scrollY > middleScroll - 100
        ? document.body.scrollHeight
        : middleScroll;
    smoothScrollTo(scrollTo, 100);
  };

  return (
    <div
      id="scroll-btns"
      onMouseOver={() => set_hovered(true)}
      onMouseOut={() => set_hovered(false)}
      style={{
        opacity: hovered() ? 1 : opacity(),
        left: `${1500 - store.scrollX - 33}px`,
      }}
      class="fixed bottom-3">
      <button
        onClick={handleUpClick}
        class={twJoin(
          "block px-1",
          store.scrollY > 1
            ? "stroke-black hover:stroke-stone-600"
            : "stroke-stone-300",
          "transition-all",
        )}>
        <LeftArrow class="rotate-90" style="margin-bottom:-1.3rem" />{" "}
        <LeftArrow class="rotate-90" style="" />
      </button>

      <button
        onClick={handleDownClick}
        class={twJoin(
          "block px-1",
          store.scrollY + store.innerHeight - store.scrollHeight < -1
            ? "stroke-black hover:stroke-stone-600"
            : "stroke-stone-300",
          "transition-all",
        )}>
        <LeftArrow class="rotate-[270deg]" style="margin-bottom:-1.3rem" />{" "}
        <LeftArrow class="rotate-[270deg]" style="" />
      </button>
    </div>
  );
};

export default ActionArrows;
