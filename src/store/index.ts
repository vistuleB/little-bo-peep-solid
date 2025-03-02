import { createStore } from "solid-js/store";

type Store = {
  panel_opened: boolean;
  show_section_dividers: boolean;
  show_areas: boolean;
  show_squiggles: boolean;
  title: string;
  innerWidth: number;
  scrollWidth: number;
  scrollX: number;
  scrollY: number;
};

const [store, set_store] = createStore<Store>({
  panel_opened: false,
  show_section_dividers: false,
  show_areas: false,
  show_squiggles: true,
  title: "Little Bo Peep",
  innerWidth: 0,
  scrollWidth: 0,
  scrollX: 0,
  scrollY: 0,
});

export {
  store,
  set_store,
};

export type { Store };
