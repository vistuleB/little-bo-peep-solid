import {
  createContext,
  createEffect,
  ParentComponent,
  useContext,
} from "solid-js";
import { SetStoreFunction } from "solid-js/store";
import { createStore } from "solid-js/store";

export type RouteLoadTarget = "top" | "saved-scroll" | "hash";
export type RoutePhase = "idle" | "loading-old-route" | "loading-new-route";
export type NavigationKind = "standard" | "swipe";
export type HorizontalSwipeDirection = "left" | "right";
export type HorizontalArrivalPhase =
  | "idle"
  | "awaiting-destination"
  | "positioning-destination"
  | "preparing"
  | "animating";

export type RouteLoadMemory = {
  firstContentPaintMs?: number;
  routeReadyMs?: number;
  measuredAt: number;
};

export type Store = {
  panel_opened: boolean;
  show_section_dividers: boolean;
  show_areas: boolean;
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
  suppress_scroll_memory: boolean;
  route_scroll_in_progress: boolean;
  pending_navigation_kind: NavigationKind;
  pending_arrival_direction: HorizontalSwipeDirection | null;
  arrival_route_path: string;
  horizontal_arrival_phase: HorizontalArrivalPhase;
  horizontal_arrival_offset: number;
  horizontal_camera_offset: number;
  horizontal_camera_dragging: boolean;
  rest_mounting_finished_for_route_started_at: number;
  scroll_is_at_0: boolean;
  margin_mode: boolean;
  pageNecessaryMargin: number;
  maxElementWidth: number;
  nextPage: string;
  prevPage: string;
  route_phase: RoutePhase;
  spinner_currently_visible: boolean;
  have_been_outside_home: boolean;
  last_page_load_ms: number;
  total_page_load_ms: number;
  num_page_loads: number;
  pending_route_started_at: number;
  pending_route_path: string;
  pending_route_target: RouteLoadTarget;
  route_load_memory: Record<string, RouteLoadMemory>;
  navigation_delays: boolean;
  animations: boolean;
};

const [store, set_store] = createStore<Store>({
  panel_opened: false,
  show_section_dividers: false,
  show_areas: false,
  title: "BC",
  innerWidth: document.documentElement.clientWidth || window.innerWidth,
  innerHeight: window.innerHeight,
  scrollWidth: document.body.scrollWidth,
  scrollHeight: document.body.scrollHeight,
  scrollX: window.scrollX,
  scrollY: window.scrollY,
  route: "",
  content_loaded: false,
  saved_scroll_finished: false,
  suppress_scroll_memory: false,
  route_scroll_in_progress: false,
  pending_navigation_kind: "standard",
  pending_arrival_direction: null,
  arrival_route_path: "",
  horizontal_arrival_phase: "idle",
  horizontal_arrival_offset: 0,
  horizontal_camera_offset: 0,
  horizontal_camera_dragging: false,
  rest_mounting_finished_for_route_started_at: 0,
  scroll_is_at_0: false,
  margin_mode: false,
  pageNecessaryMargin: 0,
  maxElementWidth: 0,
  nextPage: "",
  prevPage: "",
  route_phase: "idle",
  spinner_currently_visible: false,
  have_been_outside_home: false,
  last_page_load_ms: 0,
  total_page_load_ms: 0,
  num_page_loads: 0,
  pending_route_started_at: 0,
  pending_route_path: "",
  pending_route_target: "top",
  route_load_memory: {},
  navigation_delays: false,
  animations: false,
});

const StoreContext = createContext<{
  store: Store;
  set_store: SetStoreFunction<Store>;
}>();

export const StoreProvider: ParentComponent = (props) => {
  createEffect(() => {
    set_store(
      "innerWidth",
      document.documentElement.clientWidth || window.innerWidth,
    );
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
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export const useGlobalContext = () => useContext(StoreContext)!;
