import { useLocation } from "@solidjs/router";
import { createEffect } from "solid-js";
import { useLocalStorage } from "solidjs-hooks";
import {
  useExercisesContext,
  useExercisesStateHelpers,
} from "~/store/ExercisesStoreProvider";

const useExercises = (length: number) => {
  const {
    set_exercises_store: set_store,
    exercises_store: store,
    group_id,
  } = useExercisesContext();
  const { updateExerciseByIndex } = useExercisesStateHelpers();

  const stored_selected_exo = () => store.selected_exo;
  const stored_solutions_open = () =>
    store.exercises.map((exo) => exo.solution_open);

  // const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const article = () => location.pathname.split("/").pop();

  // Check if this is the first load in this tab/session
  const sessionKey = `${article()}_${group_id}_has_loaded`;
  const isFirstLoad = !sessionStorage.getItem(sessionKey);

  if (isFirstLoad) {
    sessionStorage.setItem(sessionKey, "true");
    for (let i = 1; i <= length; i++) {
      localStorage.removeItem(`${article()}_${group_id}_exo_${i}_opened`);
    }
  }

  /// @deprecated
  // const selected_param = `${group_id}_selected`;
  // const opened_param = `${group_id}_opened`;

  const [selected_exo, set_selected_exo] = useLocalStorage(
    `${article()}_${group_id}_selected_exo`,
    "0",
  );
  set_store("selected_exo", Number(selected_exo()));

  createEffect(() => {
    set_store("exercises", (prev) =>
      prev.map((exo, i) => ({
        ...exo,
        solution_open:
          localStorage.getItem(
            `${article()}_${group_id}_exo_${i + 1}_opened`,
          ) == "true",
      })),
    );
  });

  const update_solution_open = (
    exercise_number: number,
    value: boolean,
    update_store: boolean = true,
  ) => {
    localStorage.setItem(
      `${article()}_${group_id}_exo_${exercise_number}_opened`,
      String(value),
    );
    if (update_store) {
      updateExerciseByIndex(exercise_number - 1, {
        field: "solution_open",
        value,
      });
    }
  };

  /// @deprecated
  //  set local stored values from search params if they exist
  // if (typeof searchParams[selected_param] === "string") {
  //   set_selected_exo(searchParams[selected_param]);
  //   set_store("selected_exo", Number(selected_exo()));
  // }

  // if (typeof searchParams[opened_param] === "string") {
  //   update_solution_open(
  //     Number(selected_exo()),
  //     searchParams[opened_param] === "true",
  //   );
  // }

  createEffect(() => {
    set_selected_exo(String(stored_selected_exo()));
    /// @deprecated
    // setSearchParams({
    //   [selected_param]: String(stored_selected_exo()),
    //   [opened_param]: stored_solutions_open()[stored_selected_exo() - 1],
    // });
  });

  createEffect(() => {
    update_solution_open(
      Number(stored_selected_exo()),
      stored_solutions_open()[stored_selected_exo() - 1],
      false,
    );
    /// @deprecated
    // setSearchParams({
    //   [opened_param]: stored_solutions_open()[stored_selected_exo() - 1],
    //   [selected_param]: String(stored_selected_exo()),
    // });
  });
};

export default useExercises;
