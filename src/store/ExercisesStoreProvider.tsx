import { MOBILE_MAX_WIDTH } from "~/constants";
import {
  createContext,
  onCleanup,
  onMount,
  ParentComponent,
  useContext,
} from "solid-js";
import { SetStoreFunction, createStore } from "solid-js/store";
import { useExerciseGroupRegistry } from "./ExerciseGroupRegistryProvider";

type ExerciseState = {
  solution_open: boolean;
  transition_duration: number;
};

interface Store {
  selected_exo: number;
  exercises: ExerciseState[];
  list_view: boolean;
}

type StoreContextType = {
  exercises_store: Store;
  set_exercises_store: SetStoreFunction<Store>;
  group_id: string;
  at_end_of_page: boolean;
};

// Default store instance — used only when no provider is present (e.g. PageTopBottomArrows at article level)
const [default_store, default_set_store] = createStore<Store>({
  selected_exo: 0,
  exercises: [],
  list_view: false,
});

export const StoreContext = createContext<StoreContextType>({
  exercises_store: default_store,
  set_exercises_store: default_set_store,
  group_id: "",
  at_end_of_page: false,
});

export const close_solutions_on_exiting_list_view = true;
export const close_solutions_on_entering_list_view = true;
export const useExercisesContext = () => useContext(StoreContext);

export const ExercisesStoreProvider: ParentComponent<{
  group_id: string;
  at_end_of_page: boolean;
}> = (props) => {
  const [exercises_store, set_exercises_store] = createStore<Store>({
    selected_exo: 0,
    exercises: [],
    list_view: false,
  });

  const digit = props.group_id.replace(/\D/g, "");
  const niceId = `group_${digit}`;

  const registry = useExerciseGroupRegistry();
  onMount(() =>
    registry?.register(niceId, {
      exercises_store,
      set_exercises_store,
    }),
  );
  onCleanup(() => registry?.unregister(niceId));

  return (
    <StoreContext.Provider
      value={{
        exercises_store,
        set_exercises_store,
        group_id: niceId,
        at_end_of_page: props.at_end_of_page,
      }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export const useExercisesStateHelpers = () => {
  const { set_exercises_store } = useExercisesContext();

  const initExercisesState = (length: number) => {
    set_exercises_store(
      "exercises",
      Array.from({ length }).map((el) => ({
        solution_open: false,
        transition_duration: 1000,
      })),
    );
  };

  const updateExerciseByIndex = (
    index: number,
    update_obj: {
      field: keyof ExerciseState;
      value: any;
    },
  ) => {
    set_exercises_store("exercises", (prev) =>
      prev.map((exercise, i) => {
        if (i === index) {
          return {
            ...exercise,
            [update_obj.field]: update_obj.value,
          };
        }
        return exercise;
      }),
    );
  };

  return {
    initExercisesState,
    updateExerciseByIndex,
  };
};

export const closeAllSolutions = (set_store: any) => {
  set_store("exercises", (exercises: ExerciseState[]) =>
    exercises.map((exercise) => ({ ...exercise, solution_open: false })),
  );
};
