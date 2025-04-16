import { useExercisesContext } from "~/store/ExercisesStoreProvider";
import elementPosOnPage from "../utils/elementPosOnPage";
import smoothScrollTo from "../utils/smoothScrollTo";
import { useGlobalContext } from "~/store/StoreProvider";

const useScrollToInChapter = () => {
  const { exercises_store, set_exercises_store } = useExercisesContext();
  const { store } = useGlobalContext();

  const isInsideExo = (target: HTMLElement | null): boolean => {
    const exos = document.querySelectorAll(".exercise");

    if (!exos || !target) {
      return false;
    }

    let inside = false;
    exos.forEach((exo) => {
      exo.contains(target) && (inside = true);
    });
    return inside;
  };

  const getHeight = (el: HTMLElement | null) => {
    return el?.getBoundingClientRect().height || 0;
  };

  const scrollToInChapter = (
    targetId: string,
    smoothScroll: boolean = true,
  ) => {
    const target = document.getElementById(targetId);
    const scrollDuration = smoothScroll ? 100 : 0;
    // check if target is not inside exercise
    if (!isInsideExo(target)) {
      // just scroll to the target
      smoothScrollTo(
        elementPosOnPage(target) - store.innerHeight / 2,
        scrollDuration,
      );
      return;
    }

    if (exercises_store.list_view) {
      smoothScrollTo(
        elementPosOnPage(target) -
          store.innerHeight / 2 + // step 1:  center top of element on screen
          Math.min(getHeight(target) / 2, store.innerHeight / 2), // if target height is bigger than screen step 1 is reveresed | else the target itself is centered on screen
        smoothScroll ? 100 : 0,
      );
      return;
    }
    let exo_number = Number(target?.innerText?.match(/\d+/)?.[0]);
    set_exercises_store("selected_exo", exo_number);
    if (target && target.getBoundingClientRect().top < 0) {
      smoothScrollTo(
        elementPosOnPage(document.getElementById("exercises-btns")),
        100,
      );
    }
  };

  return scrollToInChapter;
};

export default useScrollToInChapter;
