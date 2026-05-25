import { createEffect, createSignal, onMount } from "solid-js";
import { useGlobalContext } from "~/store/StoreProvider";
import {
  DESKTOP_COLUMN_WIDTH,
  MOBILE_MAX_WIDTH,
  TEXT_X_PADDING,
} from "~/constants";
import { twJoin } from "tailwind-merge";
import useScrollX from "~/hooks/useScrollX";
import usePrevNextPage from "~/hooks/usePrevNextPage";
import HeaderBlob from "./HeaderBlob";
import containerWidth from "~/hooks/useContainerWidth";

const Nav = () => {
  let { store } = useGlobalContext();
  useScrollX();
  return (
    <>
      <div
        class={twJoin(
          "select-none w-full z-[60]",
          store.innerWidth < MOBILE_MAX_WIDTH && "!fixed",
          store.innerWidth >= MOBILE_MAX_WIDTH && "absolute",
        )}
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <div class="relative select-none border-[var(--nav-border)] border-b bg-bg z-40 w-full h-14 left-0">
          <Title />
        </div>
      </div>
      <div class="h-14"></div>
    </>
  );
};

const Title = () => {
  const { getPage } = usePrevNextPage();
  const { store } = useGlobalContext();
  let headerBlob: HTMLAnchorElement | undefined;
  const [imageLoaded, setImageLoaded] = createSignal(false);

  onMount(() => {
    const img = headerBlob?.querySelector("img");
    if (!img) {
      setImageLoaded(true);
      return;
    }
    if (img.complete) {
      setImageLoaded(true);
    } else {
      img.addEventListener("load", () => setImageLoaded(true), { once: true });
    }
  });

  createEffect(() => {
    if (!headerBlob || !imageLoaded()) return;
    const contWidth = containerWidth(); 
    const innerWidth = store.innerWidth; 
    const leftPos = innerWidth > MOBILE_MAX_WIDTH
      ? (contWidth - (DESKTOP_COLUMN_WIDTH - TEXT_X_PADDING * 2)) / 2
      : TEXT_X_PADDING;
    headerBlob.style.left = `${leftPos}px`;
  });

  createEffect(() => {
    if (!headerBlob || !imageLoaded()) return;
    requestAnimationFrame(() => {
      // ur not necessarily on the same page anymore
      // because of the requestAnimationFrame (0.001% chance):
      if (!headerBlob) return;
      const headerBlobHeight = headerBlob.offsetHeight;
      if (headerBlobHeight <= 0) return;
      const scale = 56 / headerBlobHeight;
      headerBlob.style.transform = `scale(${scale})`;
      headerBlob.style.opacity = "1";
    });
  });

  return (
    <a
      class="mr-auto absolute origin-top-left opacity-0"
      ref={headerBlob}
      href="/"
      onClick={() => getPage("/")}>
      <HeaderBlob />
    </a>
  );
};

export default Nav;
