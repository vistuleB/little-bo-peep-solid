// Size values in pixels
export const MOBILE_MAX_WIDTH = 900;
export const DESKTOP_TEXT_COLUMN_WIDTH = 448;
export const MOBILE_TEXT_COLUMN_SIDE_INSET = 22;
export const HEADER_BUTTONS_SCROLLY_START_FADE = 800;
export const HEADER_BUTTONS_SCROLLY_END_FADE = 2000;
export const HEADER_BOTTOM_BORDER_SCROLLY_START_FADE = 300;
export const HEADER_BOTTOM_BORDER_SCROLLY_END_FADE = 1000;
export const HEADER_HEIGHT = 56;
export const HEADER_BUTTONS_BACKGROUND_OFF_SCROLLY = 80;
export const SOLUTION_GREEN_DIV_HEIGHT = 500;
export const PREV_NEXT_EXERCISE_BUTTON_WIDTH = 40.2;
export const PREV_NEXT_EXERCISE_BUTTON_CORNER_RADIUS = 5;
export const MATHJAX_INTERSECTION_ROOT_MARGIN = 300;

// Ratios
export const ELEVATOR_STOP_DOWN_SKIP_TOP_VIEWPORT_RATIO = 0.7;
export const ELEVATOR_STOP_UP_SKIP_BOTTOM_VIEWPORT_RATIO = 0.7;
export const ELEVATOR_STOP_POSITION_VIEWPORT_RATIO = 0.5;

// Better together
export const HORIZONTAL_SCROLL_SNAP_BACK_MAX = 200;
export const HORIZONTAL_SCROLL_SNAP_BACK_SCREEN_WIDTH_RATIO = 0.35;

// Time values
export const ELEVATOR_ARROW_SCROLL_DURATION_MS = 100;
export const HORIZONTAL_SCROLL_SNAP_BACK_DURATION_MS = 120;
export const HORIZONTAL_SCROLL_END_FALLBACK_DELAY_MS = 120;
export const FAST_ROUTE_LOAD_MS = 200;
export const ROUTE_LOAD_MEMORY_TTL_MS = 5 * 60 * 1000;
export const LOADING_SPINNER_DELAY_MS = 10000;
export const HASH_SCROLL_RESTORATION_DELAY_MS = 300;
export const SAVED_SCROLL_RESTORATION_DELAY_MS = 100;
export const IN_CHAPTER_SCROLL_DURATION_MS = 200;
export const SCROLL_RESTORATION_ANIMATION_FINISH_BUFFER_MS = 50;
export const MATHJAX_INTERSECTION_FALLBACK_DELAY_MS = 500;

// Other
export const BATCH_SOLUTION_SCROLL_ANCHOR_FRAMES = 5;
export const ENABLE_MATHJAX_INTERSECTION_FALLBACK = true;

export const setLayoutConstantsAsCssVars = () => {
  const root = document.documentElement;
  root.style.setProperty(
    "--desktop-text-column-width",
    `${DESKTOP_TEXT_COLUMN_WIDTH}px`,
  );
  root.style.setProperty(
    "--mobile-text-column-side-inset",
    `${MOBILE_TEXT_COLUMN_SIDE_INSET}px`,
  );
  root.style.setProperty("--header-height", `${HEADER_HEIGHT}px`);
};
