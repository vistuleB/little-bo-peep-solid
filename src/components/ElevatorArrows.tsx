import {
  ELEVATOR_ARROW_SCROLL_DURATION_MS,
  ELEVATOR_STOP_DOWN_SKIP_TOP_VIEWPORT_RATIO,
  ELEVATOR_STOP_POSITION_VIEWPORT_RATIO,
  ELEVATOR_STOP_UP_SKIP_BOTTOM_VIEWPORT_RATIO,
} from "~/constants";
import { useGlobalContext } from "~/store/StoreProvider";
import { twJoin } from "tailwind-merge";
import smoothScrollTo from "~/utils/smoothScrollTo";
import mainColumnWidth from "~/hooks/useMainColumnWidth";
import useOnMobile from "~/hooks/useOnMobile";
import { onCleanup, onMount, Show } from "solid-js";

type ExerciseStop = {
  anchorY: number;
  scrollY: number;
};

const isEditableTarget = (target: EventTarget | null) =>
  target instanceof Element &&
  Boolean(target.closest("input, textarea, select, [contenteditable]"));

const ElevatorArrows = () => {
  const { store } = useGlobalContext();
  const { on_mobile } = useOnMobile();

  const groupAnchorY = (group: HTMLElement) =>
    window.scrollY + group.getBoundingClientRect().top;

  const exerciseStops = (): ExerciseStop[] =>
    Array.from(
      document.querySelectorAll<HTMLElement>("[data-exercise-group-id]"),
    )
      .map((group) => {
        const anchorY = groupAnchorY(group);
        return {
          anchorY,
          scrollY:
            anchorY - store.innerHeight * ELEVATOR_STOP_POSITION_VIEWPORT_RATIO,
        };
      })
      .filter((stop) => Number.isFinite(stop.anchorY))
      .sort((a, b) => a.anchorY - b.anchorY);

  const previousExerciseStop = () =>
    exerciseStops()
      .filter(
        (stop) =>
          stop.anchorY <
          store.scrollY +
            store.innerHeight *
              (1 - ELEVATOR_STOP_UP_SKIP_BOTTOM_VIEWPORT_RATIO),
      )
      .at(-1);

  const nextExerciseStop = () =>
    exerciseStops().find(
      (stop) =>
        stop.anchorY >
        store.scrollY +
          store.innerHeight * ELEVATOR_STOP_DOWN_SKIP_TOP_VIEWPORT_RATIO,
    );

  const goUp = () => {
    const stop = previousExerciseStop();
    const scrollTo = stop?.scrollY ?? 0;
    smoothScrollTo(
      scrollTo,
      store.animations ? ELEVATOR_ARROW_SCROLL_DURATION_MS : 0,
    );
  };

  const goDown = () => {
    const stop = nextExerciseStop();
    const scrollTo = stop?.scrollY ?? document.body.scrollHeight;

    smoothScrollTo(
      scrollTo,
      store.animations ? ELEVATOR_ARROW_SCROLL_DURATION_MS : 0,
    );
  };

  onMount(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        on_mobile() ||
        !event.metaKey ||
        event.altKey ||
        event.ctrlKey ||
        event.shiftKey ||
        (event.key !== "ArrowUp" && event.key !== "ArrowDown") ||
        isEditableTarget(event.target)
      ) {
        return;
      }

      event.preventDefault();
      if (event.key === "ArrowUp") {
        goUp();
      } else {
        goDown();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    onCleanup(() => window.removeEventListener("keydown", handleKeyDown));
  });

  const containerWidth = () => {
    return Math.max(
      store.innerWidth,
      store.maxElementWidth + 60,
      mainColumnWidth() + 2 * store.pageNecessaryMargin,
    );
  };

  const effectiveMarginWidth = () => {
    return (containerWidth() - mainColumnWidth()) / 2;
  };

  return (
    <Show when={!on_mobile()}>
      <div
        id="scroll-btns"
        style={{
          left: `${effectiveMarginWidth() - store.scrollX - 39}px`,
        }}
        class="group fixed bottom-3"
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-4em",
            right: "0",
            top: "-2em",
            bottom: "0",
          }}
        />
        <div class="relative opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={goUp}
            style={{
              "background-color": store.show_areas ? "#fff000" : "transparent",
            }}
            class={twJoin(
              "relative block px-1 mb-2",
              store.scrollY > 1
                ? "stroke-black hover:stroke-stone-600"
                : "stroke-stone-300",
              "transition-all",
            )}
          >
            <ElevatorButtonHitArea />
            <DoubleUpArrowSVG />
          </button>
          <button
            onClick={goDown}
            style={{
              "background-color": store.show_areas ? "#fff000" : "transparent",
            }}
            class={twJoin(
              "relative block px-1 mb-1",
              store.scrollY + store.innerHeight - store.scrollHeight < -1
                ? "stroke-black hover:stroke-stone-600"
                : "stroke-stone-300",
              "transition-all",
            )}
          >
            <ElevatorButtonHitArea />
            <DoubleDownArrowSVG />
          </button>
        </div>
      </div>
    </Show>
  );
};

const ElevatorButtonHitArea = () => (
  <span
    aria-hidden="true"
    style={{
      position: "absolute",
      left: "-3em",
      right: "0",
      top: "0",
      bottom: "0",
    }}
  />
);

const sw = 2.6;
const cdy = -1;
const ady = 8;
const adx = 8;
const sep = 10;
const un = 30 / 2;

const DoubleUpArrowSVG = (props: { class?: string; style?: string }) => {
  const { store } = useGlobalContext();

  return (
    <svg
      style={{
        "background-color": store.show_areas ? "#ffc0cb" : "transparent",
      }}
      class={props.class}
      width="30"
      height="30"
      viewBox="0 5 30 35"
    >
      <path
        d={`
          M${un - adx} ${un + cdy + ady} l${adx} ${-ady} ${adx} ${ady}
          M${un - adx} ${un + cdy + ady + sep} l${adx} ${-ady} ${adx} ${ady}
        `}
        stroke-linecap="round"
        stroke-width={sw}
        fill="none"
      ></path>
    </svg>
  );
};

const DoubleDownArrowSVG = (props: { class?: string; style?: string }) => {
  const { store } = useGlobalContext();

  return (
    <svg
      style={{
        "background-color": store.show_areas ? "#ffc0cb" : "transparent",
      }}
      class={props.class}
      width="30"
      height="30"
      viewBox="0 -15 30 35"
    >
      <path
        d={`
          M${un - adx} ${un - cdy - ady} l${adx} ${ady} ${adx} ${-ady}
          M${un - adx} ${un - cdy - ady - sep} l${adx} ${ady} ${adx} ${-ady}
        `}
        stroke-linecap="round"
        stroke-width={sw}
        fill="none"
      ></path>
    </svg>
  );
};

export default ElevatorArrows;
