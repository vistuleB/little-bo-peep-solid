import {
  createContext,
  createEffect,
  ParentComponent,
  useContext,
} from "solid-js";
import { SetStoreFunction } from "solid-js/store";
import { createStore } from "solid-js/store";

export type Store = {
  panel_opened: boolean;
  show_section_dividers: boolean;
  show_areas: boolean;
  show_squiggles: boolean;
  title: string;
  innerWidth: number;
  innerHeight: number;
  scrollWidth: number;
  scrollHeight: number;
  scrollX: number;
  scrollY: number;
  route: string;
  content_loaded: boolean;
  saved_scroll_finished: boolean;
  scroll_is_at_0: boolean;
  toc_breadcrumbs_visible: boolean;
};

const [store, set_store] = createStore<Store>({
  panel_opened: false,
  show_section_dividers: false,
  show_areas: false,
  show_squiggles: true,
  title: "Little Bo Peep",
  innerWidth: window.innerWidth,
  innerHeight: window.innerHeight,
  scrollWidth: document.body.scrollWidth,
  scrollHeight: document.body.scrollHeight,
  scrollX: window.scrollX,
  scrollY: window.scrollY,
  route: "",
  content_loaded: false,
  saved_scroll_finished: false,
  scroll_is_at_0: false,
  toc_breadcrumbs_visible: false,
});

const StoreContext = createContext<{
  store: Store;
  set_store: SetStoreFunction<Store>;
}>();

export const StoreProvider: ParentComponent = (props) => {
  createEffect(() => {
    set_store("innerWidth", window.innerWidth);
    set_store("innerHeight", window.innerHeight);
    set_store("scrollWidth", document.body.scrollWidth);
    set_store("scrollHeight", document.body.scrollHeight);
    set_store("scrollX", window?.scrollX);
    set_store("scrollY", window?.scrollY);
  });

  return (
    <StoreContext.Provider
      value={{
        store,
        set_store,
      }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export const useGlobalContext = () => useContext(StoreContext)!;
