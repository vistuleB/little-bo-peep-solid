import { useGlobalContext } from "~/store/StoreProvider";
import { mainColumnWidthForViewport } from "./useMainColumnWidth";

export const containerWidthForLayout = (
  innerWidth: number,
  maxElementWidth: number,
  pageNecessaryMargin: number,
) =>
  Math.max(
    innerWidth,
    maxElementWidth + 60,
    mainColumnWidthForViewport(innerWidth) + 2 * pageNecessaryMargin,
  );

const containerWidth = () => {
  const { store } = useGlobalContext();

  return containerWidthForLayout(
    store.innerWidth,
    store.maxElementWidth,
    store.pageNecessaryMargin,
  );
};

export default containerWidth;
