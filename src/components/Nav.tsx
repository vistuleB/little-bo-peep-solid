import { createSignal, onCleanup, onMount } from "solid-js";
import { useGlobalContext } from "~/store/StoreProvider";
import {
  DESKTOP_TEXT_COLUMN_WIDTH,
  HEADER_HEIGHT,
  MOBILE_MAX_WIDTH,
  MOBILE_TEXT_COLUMN_SIDE_INSET,
} from "~/constants";
import { twJoin } from "tailwind-merge";
import usePrevNextPage from "~/hooks/usePrevNextPage";
import HeaderBlob from "./HeaderBlob";
import containerWidth from "~/hooks/useContainerWidth";
import { decideRouteNavbarPosition } from "~/utils/routeTransitionPolicy";

const Nav = () => {
  let { store } = useGlobalContext();
  const navPosition = () =>
    decideRouteNavbarPosition({
      onMobile: store.innerWidth <= MOBILE_MAX_WIDTH,
      routePhase: store.route_phase,
      spinnerCurrentlyVisible: store.spinner_currently_visible,
    });

  return (
    <>
      <div
        class={twJoin(
          "select-none w-full left-0 z-[60]",
          navPosition() === "fixed" ? "!fixed" : "absolute",
        )}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          class="relative select-none border-[var(--nav-border)] border-b bg-bg z-40 w-full left-0"
          style={{ height: "var(--header-height)" }}
        >
          <Title navPosition={navPosition()} />
        </div>
      </div>
      <div style={{ height: "var(--header-height)" }}></div>
    </>
  );
};

const Title = (props: { navPosition: "fixed" | "absolute" }) => {
  const { getPage } = usePrevNextPage();
  const { store } = useGlobalContext();
  let content!: HTMLDivElement;
  const [size, setSize] = createSignal({ width: 0, height: 0 });
  const scale = () => (size().height > 0 ? HEADER_HEIGHT / size().height : 0);

  onMount(() => {
    let frame = 0;
    // Measure an intrinsic-sized, unscaled layout box, independent of the route.
    const measure = () => {
      const width = content.offsetWidth;
      const height = content.offsetHeight;
      setSize((previous) =>
        previous.width === width && previous.height === height
          ? previous
          : { width, height },
      );
    };
    const observer = new ResizeObserver(() => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        measure();
      });
    });
    observer.observe(content);
    measure();
    onCleanup(() => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    });
  });

  const left = () => {
    const onMobile = store.innerWidth <= MOBILE_MAX_WIDTH;
    const columnLeft = onMobile
      ? 0
      : props.navPosition === "fixed"
        ? (store.innerWidth - DESKTOP_TEXT_COLUMN_WIDTH) / 2
        : (containerWidth() - DESKTOP_TEXT_COLUMN_WIDTH) / 2;
    return columnLeft + (onMobile ? MOBILE_TEXT_COLUMN_SIDE_INSET : 0);
  };

  return (
    <a
      class="absolute"
      data-header-blob
      style={{
        left: `${left()}px`,
        top: "0px",
        width: `${size().width * scale()}px`,
        height: `${HEADER_HEIGHT}px`,
        opacity: size().height > 0 ? 1 : 0,
      }}
      href="/"
      onClick={() => getPage("/")}
    >
      <div
        ref={content}
        class="header-blob-content"
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "max-content",
          display: "flow-root",
          "transform-origin": "top left",
          transform: `scale(${scale()})`,
        }}
      >
        <HeaderBlob />
      </div>
    </a>
  );
};

export default Nav;
