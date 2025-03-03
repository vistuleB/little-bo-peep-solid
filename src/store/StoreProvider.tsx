import { createContext, ParentComponent, useContext } from "solid-js";
import { Store, set_store, store } from ".";
import { SetStoreFunction } from "solid-js/store";

const StoreContext = createContext<{
  store: Store;
  set_store: SetStoreFunction<Store>;
}>();

export const useGlobalContext = () => useContext(StoreContext)!;

export const StoreProvider: ParentComponent = (props) => {
  return (
    <StoreContext.Provider
      value={{
        store,
        set_store,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
