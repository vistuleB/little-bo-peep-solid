import { onCleanup } from "solid-js";
import { useGlobalContext } from "~/store/StoreProvider";
import useElevatorNavigation from "~/hooks/useElevatorNavigation";
import LeftHeaderBlob from "./LeftHeaderBlob";
import { DoubleDownArrowSVG, DoubleUpArrowSVG } from "./ElevatorArrows";
import type { SmoothScrollController } from "~/utils/smoothScrollTo";

export default function MobileElevator() {
  const { store } = useGlobalContext();
  const { goUp, goDown } = useElevatorNavigation();
  let activeScroll: SmoothScrollController | undefined;
  onCleanup(() => activeScroll?.cancel());

  const navigate = (event: MouseEvent, direction: "up" | "down") => {
    event.stopPropagation();
    activeScroll?.cancel();
    activeScroll = direction === "down" ? goDown() : goUp();
  };

  return (
    <div
      class="mobile-elevator"
      style={{ left: `${store.innerWidth / 2}px` }}
    >
      <span aria-hidden="true" class="mobile-elevator-toilet">
        <LeftHeaderBlob />
      </span>
      <button
        type="button"
        class="mobile-elevator-down"
        aria-label="Elevator down"
        title="Elevator down"
        onClick={(event) => navigate(event, "down")}
      >
        <DoubleDownArrowSVG />
      </button>
      <button
        type="button"
        class="mobile-elevator-up"
        aria-label="Elevator up"
        title="Elevator up"
        onClick={(event) => navigate(event, "up")}
      >
        <DoubleUpArrowSVG />
      </button>
    </div>
  );
}
