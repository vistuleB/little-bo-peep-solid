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
      1.0,
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

  store.scrollY = store.scrollY;
  const exerciseBtnsPos = () => {
    if (!document.getElementById("exercises-btns"))
      return document.body.scrollHeight;
    const rect = document
      .getElementById("exercises-btns")
      ?.getBoundingClientRect()!;
    return rect.y + store.scrollY + rect.height * 2;
  };

  function smoothScrollTo(targetPosition: number, duration: number) {
    const startPosition = store.scrollY;
    const distance = targetPosition - startPosition;
    let startTime: DOMHighResTimeStamp | null = null;

    function animation(currentTime: DOMHighResTimeStamp) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(window.scrollX, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
      else window.scrollTo(window.scrollX, targetPosition);
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
    if (store.scrollY <= exerciseBtnsPos()) {
      smoothScrollTo(0, 100);
      return;
    }
    if (store.scrollY > exerciseBtnsPos()) {
      let scrollTo = exerciseBtnsPos() - window.innerHeight / 2; // to make the exo centered
      smoothScrollTo(scrollTo, 100);
      return;
    }
  };

  const handleDownClick = (_: MouseEvent) => {
    if (store.scrollY + window.innerHeight / 2 < exerciseBtnsPos()) {
      let scrollTo = exerciseBtnsPos() - window.innerHeight / 2; // to make the exo centered
      smoothScrollTo(
        scrollTo + 10, // + 10 for safety
        100,
      );
      return;
    }
    if (store.scrollY + window.innerHeight / 2 >= exerciseBtnsPos()) {
      let scrollTo = document.body.scrollHeight;
      smoothScrollTo(scrollTo, 100);
      return;
    }
  };

  return (
    <div
      id="scroll-btns"
      onMouseOver={() => set_hovered(true)}
      onMouseOut={() => set_hovered(false)}
      style={{ opacity: hovered() ? 1 : opacity() }}
      class="fixed bottom-4 left-3">
      <button
        onClick={handleUpClick}
        class="block px-1 stroke-black hover:stroke-stone-600 mb-1">
        <LeftArrow class="rotate-90 -mb-5" /> <LeftArrow class="rotate-90" />
      </button>

      <button
        onClick={handleDownClick}
        class="block px-1 stroke-black hover:stroke-stone-600 ">
        <LeftArrow class="rotate-[270deg] -mb-5" />{" "}
        <LeftArrow class="rotate-[270deg]" />
      </button>
    </div>
  );
};

export default ActionArrows;
