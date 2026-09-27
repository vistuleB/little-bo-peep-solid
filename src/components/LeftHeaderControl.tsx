import { createSignal, onCleanup, onMount } from "solid-js";
import HeaderControlSurface from "./HeaderControlSurface";
import LeftHeaderBlob, {
  desktopLeftMargin,
  mobileLeftMargin,
  mobileMarginRight,
} from "./LeftHeaderBlob";
import useOnMobile from "~/hooks/useOnMobile";
import usePrevNextPage from "~/hooks/usePrevNextPage";
import { HEADER_HEIGHT, MOBILE_TEXT_COLUMN_SIDE_INSET } from "~/constants";

// Shared with Nav so the author content reserves its actual rendered width.
const [leftHeaderWidth, setLeftHeaderWidth] = createSignal(0);
export { leftHeaderWidth };

const LeftHeaderControl = (props: {
  opacity: number;
  borderOpacity: number;
  tallBackground: boolean;
}) => {
  const { on_mobile } = useOnMobile();
  const { getPage } = usePrevNextPage();
  const [size, setSize] = createSignal({ width: 0, height: 0 });
  let content!: HTMLDivElement;
  let shell!: HTMLDivElement;
  const topMargin = 3;
  const iconHeight = HEADER_HEIGHT - 1 - topMargin;
  const scale = () => (size().height > 0 ? iconHeight / size().height : 0);
  const width = () => size().width * scale();

  onMount(() => {
    let frame = 0;
    const measure = () => {
      const width = content.offsetWidth;
      const height = content.offsetHeight;
      setSize((previous) =>
        previous.width === width && previous.height === height
          ? previous
          : { width, height },
      );
      setLeftHeaderWidth(shell.getBoundingClientRect().width);
    };
    // Applying the scale resizes the shell. Publish measurements outside the
    // observer delivery cycle so that resize can be delivered on the next frame.
    const scheduleMeasure = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        measure();
      });
    };
    const contentObserver = new ResizeObserver(scheduleMeasure);
    contentObserver.observe(content);
    const shellObserver = new ResizeObserver(scheduleMeasure);
    shellObserver.observe(shell);
    measure();
    onCleanup(() => {
      contentObserver.disconnect();
      shellObserver.disconnect();
      cancelAnimationFrame(frame);
      setLeftHeaderWidth(0);
    });
  });

  return (
    <HeaderControlSurface
      side="left"
      inset={
        on_mobile()
          ? `calc(${MOBILE_TEXT_COLUMN_SIDE_INSET}px + ${mobileLeftMargin})`
          : desktopLeftMargin
      }
      opacity={props.opacity}
      borderOpacity={props.borderOpacity}
      tallBackground={props.tallBackground}
    >
      <div
        ref={shell}
        class="flex items-start"
        data-left-header-control
        style={{
          height: `${HEADER_HEIGHT - 1}px`,
          "pointer-events": width() > 0 ? "auto" : "none",
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <a
          href="/"
          aria-label="Table of contents"
          tabIndex={width() > 0 ? 0 : -1}
          onClick={(event) => {
            if (
              event.metaKey ||
              event.ctrlKey ||
              event.shiftKey ||
              event.altKey
            )
              return;
            event.preventDefault();
            getPage("/");
          }}
          style={{
            position: "relative",
            width: `${width()}px`,
            height: `${iconHeight}px`,
            "margin-top": `${topMargin}px`,
          }}
        >
          <div
            ref={content}
            class="header-blob-content"
            style={{
              position: "absolute",
              width: "max-content",
              "transform-origin": "top left",
              transform: `scale(${scale()})`,
            }}
          >
            <LeftHeaderBlob />
          </div>
        </a>
        <span
          aria-hidden="true"
          style={{
            width: "0px",
            "margin-right":
              on_mobile() && width() > 0 ? mobileMarginRight : "0px",
            "flex-shrink": 0,
          }}
        />
      </div>
    </HeaderControlSurface>
  );
};

export default LeftHeaderControl;
