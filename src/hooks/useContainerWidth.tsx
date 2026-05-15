import { useGlobalContext } from "~/store/StoreProvider";
import mainColumnWidth from "./useMainColumnWidth";

const containerWidth = () => {
  const { store } = useGlobalContext();

  return Math.max(
    store.innerWidth,
    store.maxElementWidth + 60,
    mainColumnWidth() + 2 * store.pageNecessaryMargin,
  );
};

export default containerWidth;
