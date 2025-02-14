import { createContext, ParentComponent, useContext } from "solid-js";
import { SetStoreFunction, createStore } from "solid-js/store";

type ExercisesState = {
  selected: boolean;
  solution_open: boolean;
  transition_duration: number;
}[];

type Store = {
  selected_exo: number;
  solutions_open: boolean[];
  transition_duration: number[];
  exercises: ExercisesState[]
}


// helpers 
const getExerciseByIndex = (store: Store, index: number) => {
  return store.exercises.find((exercise, i) => i === index);
};

const getSelectedExercise = (store: Store) => {
  return store.exercises.find((exercise, i) => exercise.selected);
};

const updateSelectedExercises = (
  store: Store,
  set_store: SetStoreFunction<Store>,
  index: number
) => {
  set_store((prev) => ({
    ...prev,
    exercises: prev.exercises.map((exercise, i) => ({
      ...exercise,
      selected: i === index,
    })),
  }));
};

const updateExerciseByIndex = (
  store: Store,
  set_store: SetStoreFunction<Store>,
  index: number,
  update_obj: {
    field: keyof ExercisesState[number];
    value: any;
  }
) => {
  set_store((prev) => ({
    ...prev,
    exercises: prev.exercises.map((exercise, i) => {
      if (i === index) {
        return {
          ...exercise,
          [update_obj.field]: update_obj.value,
        };
      }
      return exercise;
    }),
  }));
};



// Store Provider
const [exercises_store, set_exercises_store] = createStore<Store>({
  selected_exo: 0,
  solutions_open: [],
  transition_duration: [],
  exercises: []
});

const StoreContext = createContext<{
  exercises_store: Store;
  set_exercises_store: SetStoreFunction<Store>;
}>();

export const useExercisesContext = () => useContext(StoreContext)!;

export const ExercisesStoreProvider: ParentComponent = (props) => {
  return (
    <StoreContext.Provider
      value={{
        exercises_store,
        set_exercises_store,
      }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export {
  updateSelectedExercises,
  updateExerciseByIndex,
  getExerciseByIndex,
  getSelectedExercise,
};
