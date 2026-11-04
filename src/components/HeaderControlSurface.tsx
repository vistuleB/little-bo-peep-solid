import { JSX, ParentProps } from "solid-js";

// Both ends of the header detach using the same background and border layers.
const HeaderControlSurface = (
  props: ParentProps<{
    side: "left" | "right";
    inset?: number | string;
    opacity: number;
    borderOpacity: number;
    tallBackground: boolean;
    contentClass?: string;
    contentStyle?: JSX.CSSProperties;
  }>,
) => (
  <div
    class="fixed top-0 z-[70]"
    data-header-control={props.side}
    style={{
      left:
        props.side === "left"
          ? typeof props.inset === "string"
            ? props.inset
            : `${props.inset ?? 0}px`
          : undefined,
      right: props.side === "right" ? "0px" : undefined,
      height: "var(--header-height)",
    }}
  >
    <div
      data-header-control-background
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: props.tallBackground ? "10rem" : "100%",
        background: "var(--background-rgb)",
        "z-index": "-1",
        opacity: props.opacity,
        "pointer-events": "none",
      }}
    />
    <div
      class={`select-none hover:!opacity-100 focus-within:!opacity-100 border-b ${props.contentClass ?? ""}`}
      data-header-control-content
      style={{
        ...props.contentStyle,
        opacity: props.opacity,
        "border-color": `rgba(var(--nav-border-r), var(--nav-border-g), var(--nav-border-b), ${props.borderOpacity})`,
      }}
    >
      {props.children}
    </div>
  </div>
);

export default HeaderControlSurface;
