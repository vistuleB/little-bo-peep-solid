import { createSignal } from "solid-js";
import { useLocation } from "@solidjs/router";
import { useGlobalContext } from "~/store/StoreProvider";
import useElevatorNavigation from "~/hooks/useElevatorNavigation";
import { mobileElevatorStep } from "~/utils/mobileElevatorCycle";
import LeftHeaderBlob from "./LeftHeaderBlob";

export default function MobileElevator() {
  const { store } = useGlobalContext();
  const location = useLocation();
  const { goUp, goDown } = useElevatorNavigation(450);
  const [cycle, setCycle] = createSignal({ path: location.pathname, phase: 0 });
  const phase = () => (cycle().path === location.pathname ? cycle().phase : 0);
  const next = () =>
    mobileElevatorStep(
      phase(),
      store.scrollY <= 1,
      store.scrollY + store.innerHeight >= store.scrollHeight - 1,
    );

  return (
    <button
      type="button"
      class="mobile-elevator"
      aria-label={`Elevator ${next().direction}`}
      title={`Elevator ${next().direction}`}
      style={{ left: `${store.innerWidth / 2}px` }}
      onClick={(event) => {
        event.stopPropagation();
        // Read the actual scroll position at the tap, including manual scrolling.
        const root = document.scrollingElement ?? document.documentElement;
        const step = mobileElevatorStep(
          phase(),
          window.scrollY <= 1,
          window.scrollY + window.innerHeight >= root.scrollHeight - 1,
        );
        if (root.scrollHeight <= window.innerHeight + 1) return;
        setCycle({ path: location.pathname, phase: step.nextPhase });
        if (step.direction === "down") goDown();
        else goUp();
      }}
    >
      <span aria-hidden="true">
        <LeftHeaderBlob />
      </span>
    </button>
  );
}
