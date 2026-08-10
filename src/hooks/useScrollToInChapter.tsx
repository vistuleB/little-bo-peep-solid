import { useContext } from "solid-js";
import {
  StoreContext,
} from "~/store/ExercisesStoreProvider";
import { useExerciseGroupRegistry } from "~/store/ExerciseGroupRegistryProvider";
import elementPosOnPage from "../utils/elementPosOnPage";
import smoothScrollTo from "../utils/smoothScrollTo";
import { useGlobalContext } from "~/store/StoreProvider";

const useScrollToInChapter = () => {
  const ctx = useContext(StoreContext);
  const registry = useExerciseGroupRegistry();
  const { store } = useGlobalContext();

  // Returns the exercises group store for the given DOM target.
  // If called from inside a provider (ctx has a non-empty group_id), use it directly.
  // Otherwise walk up the DOM to find data-exercise-group-id and look up the registry.
  const resolveGroupForTarget = (target: HTMLElement | null) => {
    if (ctx?.group_id) return ctx;
    let el: HTMLElement | null = target;
    while (el) {
      const gid = el.dataset.exerciseGroupId;
      if (gid) return registry?.get(gid);
      el = el.parentElement;
    }
    return undefined;
  };

  const getClosestExerciseParentIndex = (
    target: HTMLElement | null,
    section: Element | null,
  ): number => {
    if (!target) return -1;

    let current: HTMLElement | null = target;
    const allExercises = section
      ? section.querySelectorAll(".exercise")
      : document.querySelectorAll(".exercise");

    while (current) {
      if (current.classList.contains("exercise")) {
        const position = Array.from(allExercises).findIndex(
          (ex) => ex === current,
        );
        return position + 1;
      }
      current = current.parentElement;
    }

    return -1;
  };

  const findGroupSection = (target: HTMLElement | null): Element | null => {
    let el: HTMLElement | null = target;
    while (el) {
      if (el.dataset.exerciseGroupId) return el;
      el = el.parentElement;
    }
    return null;
  };

  const isInsideElementWithClass = (
    parentClass: string,
    target: HTMLElement | null,
  ): boolean => {
    const parents = document.querySelectorAll("." + parentClass);

    if (!parents || !target) {
      return false;
    }

    let inside = false;
    parents.forEach((exo) => {
      exo.contains(target) && (inside = true);
    });
    return inside;
  };

  const getHeight = (el: HTMLElement | null) => {
    return el?.getBoundingClientRect().height || 0;
  };

  const calculateTargetCenterOnPage = (target: HTMLElement | null) =>
    elementPosOnPage(target) -
    store.innerHeight / 2 +
    Math.min(getHeight(target) / 2, store.innerHeight / 2);

  const firstSectionEdgeCase = (target: HTMLElement | null) => {
    if (!target) return false;
    const firstSection = document.querySelector("section");
    return target === firstSection;
  };

  const exercisesEdgeCase = (target: HTMLElement | null) => {
    if (!target) return target;
    // Handle sections marked as exercise groups (data-exercise-group-id attribute)
    const gid = target.dataset.exerciseGroupId;
    if (!gid) return target;
    const groupCtx = resolveGroupForTarget(target);
    if (!groupCtx) return target;
    return target
      ?.querySelectorAll(".exo-statement")
      ?.item(
        groupCtx.exercises_store.list_view
          ? 0
          : groupCtx.exercises_store.selected_exo - 1,
      ) as HTMLElement;
  };

  const addSafeMarginForLongTarget = (target: HTMLElement | null) => {
    if (!target) return 0;
    let scrollTo = calculateTargetCenterOnPage(target);
    if (getHeight(target) > store.innerHeight) {
      scrollTo -= 20;
    }

    if (target.classList.contains("exo-statement")) {
      scrollTo += 50;
    }

    return scrollTo;
  };

  const scrollToInChapter = async (
    targetId: string,
    scrollDuration: number = 100,
  ) => {
    let target = document.getElementById(targetId);
    target = exercisesEdgeCase(target);

    if (!isInsideElementWithClass("exercise", target)) {
      smoothScrollTo(
        firstSectionEdgeCase(target) ? 0 : addSafeMarginForLongTarget(target),
        store.animations ? scrollDuration : 0,
      );
      return;
    }

    const groupSection = findGroupSection(target);
    const exo_number = getClosestExerciseParentIndex(target, groupSection);
    const groupCtx = resolveGroupForTarget(target);

    if (isInsideElementWithClass("solution", target)) {
      groupCtx?.set_exercises_store("exercises", (prev) =>
        prev.map((exercise, i) => {
          if (i === exo_number - 1) {
            return { ...exercise, solution_open: true };
          }
          return exercise;
        })
      );
    }

    if (groupCtx?.exercises_store.list_view) {
      smoothScrollTo(
        addSafeMarginForLongTarget(target),
        store.animations ? scrollDuration : 0,
      );
      return;
    }

    groupCtx?.set_exercises_store("selected_exo", exo_number);
    if (
      target &&
      (target.getBoundingClientRect().top < 0 ||
        target.getBoundingClientRect().bottom > store.innerHeight)
    ) {
      smoothScrollTo(
        addSafeMarginForLongTarget(target),
        store.animations ? scrollDuration : 0,
      );
    }
    Promise.resolve();
  };

  return { scrollToInChapter, calculateTargetCenterOnPage };
};

export default useScrollToInChapter;
