export const MOBILE_MAX_WIDTH = 900;
export const DESKTOP_COLUMN_WIDTH = 488;
export const TEXT_X_PADDING = 20;
export const HAMBURGER_MENU_SCROLLY_START_FADE = 800;
export const HAMBURGER_MENU_SCROLLY_END_FADE = 2000;
export const BOTTOM_BORDER_SCROLLY_START_FADE = 300;
export const BOTTOM_BORDER_SCROLLY_END_FADE = 1000;
export const HAMBURGER_MENU_HEIGHT = 56;
export const HAMBURGER_MENU_BACKGROUND_OFF_SCROLLY = 80;
export const GREEN_DIV_HEIGHT = 500;
export const PAGE_DEFAULT_MARGIN = 1500;
export const PREV_NEXT_EXERCISE_BUTTON_W = 40.2;
export const PREV_NEXT_EXERCISE_BUTTON_RX = 5;

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
  root.style.setProperty(
    "--desktop-text-column-padding",
    `${TEXT_X_PADDING}px`,
  );
  root.style.setProperty("--mobile-max-width", `${MOBILE_MAX_WIDTH}px`);
};
