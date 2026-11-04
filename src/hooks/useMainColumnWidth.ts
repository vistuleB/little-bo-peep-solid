import { useGlobalContext } from "~/store/StoreProvider";
import {
  DESKTOP_TEXT_COLUMN_WIDTH,
  MOBILE_MAX_WIDTH,
  MOBILE_TEXT_COLUMN_SIDE_INSET,
} from "../constants";

export const mainColumnWidthForViewport = (innerWidth: number) =>
  innerWidth > MOBILE_MAX_WIDTH
    ? DESKTOP_TEXT_COLUMN_WIDTH
    : Math.max(0, innerWidth - 2 * MOBILE_TEXT_COLUMN_SIDE_INSET);

const mainColumnWidth = () => {
  const { store } = useGlobalContext();
  return mainColumnWidthForViewport(store.innerWidth);
};

export default mainColumnWidth;
