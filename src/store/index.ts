import { createStore, SetStoreFunction } from "solid-js/store";

type Store = {
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
});

export { store, set_store };

export type { Store };
