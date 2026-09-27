import {
  ELEVATOR_ARROW_SCROLL_DURATION_MS,
  ELEVATOR_STOP_DOWN_SKIP_TOP_VIEWPORT_RATIO,
  ELEVATOR_STOP_POSITION_VIEWPORT_RATIO,
  ELEVATOR_STOP_UP_SKIP_BOTTOM_VIEWPORT_RATIO,
} from "~/constants";
import { useGlobalContext } from "~/store/StoreProvider";
import smoothScrollTo from "~/utils/smoothScrollTo";

type ExerciseStop = { anchorY: number; scrollY: number };

export default function useElevatorNavigation(scrollDurationMs?: number) {
  const { store } = useGlobalContext();
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
      scrollDurationMs ?? (store.animations ? ELEVATOR_ARROW_SCROLL_DURATION_MS : 0),
    );
  };

  const goDown = () => {
    const stop = nextExerciseStop();
    const scrollTo = stop?.scrollY ?? document.body.scrollHeight;

    smoothScrollTo(
      scrollTo,
      scrollDurationMs ?? (store.animations ? ELEVATOR_ARROW_SCROLL_DURATION_MS : 0),
    );
  };

  return { goUp, goDown };
}
