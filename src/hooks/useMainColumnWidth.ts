import { useGlobalContext } from "~/store/StoreProvider";
import {
  DESKTOP_TEXT_COLUMN_WIDTH,
  MOBILE_MAX_WIDTH,
  MOBILE_TEXT_COLUMN_SIDE_INSET,
} from "../constants";

const mainColumnWidth = () => {
  const { store } = useGlobalContext();
  return store.innerWidth > MOBILE_MAX_WIDTH
    ? DESKTOP_TEXT_COLUMN_WIDTH
    : Math.max(0, store.innerWidth - 2 * MOBILE_TEXT_COLUMN_SIDE_INSET);
};

export default mainColumnWidth;
