import { createContext, createEffect, ParentComponent, useContext } from "solid-js";
import { Store, set_store, store } from ".";
import { SetStoreFunction } from "solid-js/store";

const StoreContext = createContext<{
  store: Store;
  set_store: SetStoreFunction<Store>;
}>();

export const useGlobalContext = () => useContext(StoreContext)!;

export const StoreProvider: ParentComponent = (props) => {

  createEffect(()=>{
    set_store("innerWidth", window.innerWidth);
    set_store("innerHeight", window.innerHeight);
    set_store("scrollWidth", document.body.scrollWidth);
    set_store("scrollHeight", document.body.scrollHeight);
    set_store("scrollX", window?.scrollX)
    set_store("scrollY", window?.scrollY)
  })

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
