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
import mainColumnWidth from "~/hooks/useMainColumnWidth";
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
        }}
      >
        <div class="relative select-none border-[var(--nav-border)] border-b bg-bg z-40 w-full h-14 left-0">
          <Title />
        </div>
      </div>
      <div class="h-14"></div>
    </>
  );
};

const Title = () => {
  const [_, setRoute] = createSignal("/");
  const { getPage } = usePrevNextPage();
  const { store } = useGlobalContext();
  let headerBlob!: HTMLAnchorElement;
  const [imageLoaded, setImageLoaded] = createSignal(false);

  onMount(() => {
    // we need to make sure headerBlob svg image gets proper offsetHeight on initial load
    const img = headerBlob?.querySelector("img");
    if (!img) return;
    if (img.complete) {
      setImageLoaded(true);
    } else {
      img.addEventListener("load", () => setImageLoaded(true), { once: true });
    }
  });

  createEffect(() => {
    if (!headerBlob || !imageLoaded()) return;

    const blob = headerBlob as HTMLAnchorElement;
    const contWidth = containerWidth();

    const leftPos = () => {
      if (store.innerWidth > MOBILE_MAX_WIDTH) {
        const realWidth = DESKTOP_COLUMN_WIDTH - TEXT_X_PADDING * 2;
        return contWidth - realWidth - (contWidth - realWidth) / 2;
      }
      return TEXT_X_PADDING;
    };

    const headerBlobHeight = blob.offsetHeight;
    // we need to scale the header blob so it fits exactly 56px
    const scale = 56 / headerBlobHeight;
    blob.style.transform = `scale(${scale})`;
    blob.style.left = `${leftPos()}px`;
  });

  return (
    <a
      class="block mr-auto absolute origin-top-left"
      ref={headerBlob}
      href="/"
      onClick={() => getPage("/")}
    >
      <HeaderBlob />
    </a>
  );
};

export default Nav;
