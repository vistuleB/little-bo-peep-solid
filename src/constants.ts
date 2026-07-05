export const MOBILE_MAX_WIDTH = 900;
export const DESKTOP_COLUMN_WIDTH = 488;
export const TEXT_X_PADDING = 20;
export const MOBILE_TEXT_X_PADDING = 22;
export const HAMBURGER_MENU_SCROLLY_START_FADE = 800;
export const HAMBURGER_MENU_SCROLLY_END_FADE = 2000;
export const BOTTOM_BORDER_SCROLLY_START_FADE = 300;
export const BOTTOM_BORDER_SCROLLY_END_FADE = 1000;
export const HAMBURGER_MENU_HEIGHT = 56;
export const HAMBURGER_MENU_BACKGROUND_OFF_SCROLLY = 80;
export const DOWN_STOP_SKIP_TOP_VIEWPORT_RATIO = 0.7;
export const UP_STOP_SKIP_BOTTOM_VIEWPORT_RATIO = 0.7;
export const STOP_POSITION_VIEWPORT_RATIO = 0.5;
export const STOP_REPEAT_SCROLL_TOLERANCE = 2;
export const PAGE_TOP_BOTTOM_ARROW_SCROLL_DURATION_MS = 100;
export const GREEN_DIV_HEIGHT = 500;
export const BATCH_SOLUTION_SCROLL_ANCHOR_FRAMES = 5;
export const PAGE_DEFAULT_MARGIN = 1500;
export const PREV_NEXT_EXERCISE_BUTTON_W = 40.2;
export const PREV_NEXT_EXERCISE_BUTTON_RX = 5;
export const FAST_ROUTE_LOAD_MS = 200;
export const ROUTE_LOAD_MEMORY_TTL_MS = 5 * 60 * 1000;
export const LOADING_SPINNER_DELAY_MS = 10000;
export const HASH_SCROLL_RESTORATION_DELAY_MS = 300;
export const SAVED_SCROLL_RESTORATION_DELAY_MS = 100;
export const IN_CHAPTER_SCROLL_DURATION_MS = 200;
export const SCROLL_RESTORATION_ANIMATION_FINISH_BUFFER_MS = 50;
export const MATHJAX_INTERSECTION_ROOT_MARGIN_PX = 300;
export const ENABLE_MATHJAX_INTERSECTION_FALLBACK = true;
export const MATHJAX_INTERSECTION_FALLBACK_DELAY_MS = 500;

export const setContentsAsCssVars = () => {
  const root = document.documentElement;
  root.style.setProperty(
    "--hamburger-menu-height",
    `${HAMBURGER_MENU_HEIGHT}px`,
  );
  root.style.setProperty(
    "--desktop-text-column-width-with-padding",
    `${DESKTOP_COLUMN_WIDTH}px`,
  );
  root.style.setProperty("--text-x-padding", `${TEXT_X_PADDING}px`);
  root.style.setProperty(
    "--mobile-text-x-padding",
    `${MOBILE_TEXT_X_PADDING}px`,
  );
  root.style.setProperty("--mobile-max-width", `${MOBILE_MAX_WIDTH}px`);
};
