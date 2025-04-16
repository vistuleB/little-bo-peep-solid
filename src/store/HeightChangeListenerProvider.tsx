import { ParentProps, useContext } from "solid-js";
import { createStore, SetStoreFunction } from "solid-js/store";
import { createContext } from "solid-js";

type HeightChangeListenerStore = {
  re_calculate_height: boolean;
};

const HeightChangeListenerContext = createContext<{
  height_change_listener_store: HeightChangeListenerStore;
  set_height_change_listener_store: SetStoreFunction<HeightChangeListenerStore>;
}>();

export const useHeightChangeListenerContext = () =>
  useContext(HeightChangeListenerContext);

const [height_change_listener_store, set_height_change_listener_store] =
  createStore({
    re_calculate_height: false,
  });

export const HeightChangeListenerProvider = (props: ParentProps) => {
  return (
    <HeightChangeListenerContext.Provider
      value={{
        height_change_listener_store,
        set_height_change_listener_store,
      }}>
      {props.children}
    </HeightChangeListenerContext.Provider>
  );
};
