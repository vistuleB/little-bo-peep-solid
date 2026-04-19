import { createContext, ParentComponent, useContext } from "solid-js";
import { SetStoreFunction } from "solid-js/store";

type ExerciseState = {
  solution_open: boolean;
  transition_duration: number;
};

export interface ExercisesGroupStore {
  selected_exo: number;
  exercises: ExerciseState[];
  list_view: boolean;
}

export type GroupEntry = {
  exercises_store: ExercisesGroupStore;
  set_exercises_store: SetStoreFunction<ExercisesGroupStore>;
};

type Registry = {
  register: (id: string, entry: GroupEntry) => void;
  unregister: (id: string) => void;
  get: (id: string) => GroupEntry | undefined;
  getAll: () => [string, GroupEntry][];
};

const RegistryContext = createContext<Registry>();

export const useExerciseGroupRegistry = () => useContext(RegistryContext);

export const ExerciseGroupRegistryProvider: ParentComponent = (props) => {
  const map = new Map<string, GroupEntry>();
  const registry: Registry = {
    register: (id, entry) => map.set(id, entry),
    unregister: (id) => map.delete(id),
    get: (id) => map.get(id),
    getAll: () => Array.from(map.entries()),
  };
  return (
    <RegistryContext.Provider value={registry}>
      {props.children}
    </RegistryContext.Provider>
  );
};
