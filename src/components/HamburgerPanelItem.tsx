import { createEffect, createSignal, JSX } from "solid-js";
import { A, useLocation } from "@solidjs/router";
import { MOBILE_MAX_WIDTH, DESKTOP_COLUMN_WIDTH } from "~/constants";
import { useGlobalContext } from "~/store/StoreProvider";

const setUpParentAndWidth = (
  parent: HTMLDivElement,
  span: HTMLSpanElement
): void => {
  parent.style.width = MOBILE_MAX_WIDTH + "px";
  parent.style.position = "absolute";
  parent.style.top = "0px";
  parent.style.visibility = "hidden";
  span.style.font = "Baskerville, serif";
  span.style.fontSize = "1.875rem";
  span.style.height = "auto";
  span.style.width = "auto";
  span.style.whiteSpace = "nowrap";
  parent.appendChild(span);
  document.body.appendChild(parent);
};

const HamburgerPanelItem = (props: {
  href: string;
  label: string;
  on_mobile?: string;
  article_type: any;
}) => {
  let { store } = useGlobalContext();
  const [our_width, set_our_width] = createSignal(
    store.innerWidth > MOBILE_MAX_WIDTH
      ? DESKTOP_COLUMN_WIDTH
      : store.innerWidth
  );

  const parentDiv = document.createElement("div");
  const textSpan = document.createElement("span");
  setUpParentAndWidth(parentDiv, textSpan);

  const getTextWidth = (text: string): number => {
    textSpan.innerHTML = text;
    return Math.ceil(textSpan.offsetWidth);
  };

  const [first_half, set_first_half] = createSignal(props.label);
  const [second_half, set_second_half] = createSignal("");

  // for now just a hack, too lazy to set up full
  // solution:
  createEffect(() => {
    set_our_width(
      store.innerWidth > MOBILE_MAX_WIDTH
        ? DESKTOP_COLUMN_WIDTH
        : store.innerWidth
    );
    if (props.label === "The Trigonometric Functions") {
      if (true) {
        set_first_half("The Trigonometric");
        set_second_half("Functions");
      } else {
        set_first_half("The Trigonometric Functions");
        set_second_half("");
      }
    }
  });

  return (
    <>
      <ConditionalLink
        href={`/article/${props.href}`}
        class="panel-item flex items-baseline justify-between leading-9 sm:leading-8 text-2xl"
        onSameRoute={(e) => {
          e.preventDefault();
          window.scroll({
            left: (store.scrollWidth - store.innerWidth) / 2,
            behavior: "instant",
          });
        }}
      >
        <span class="block">{props.article_type}</span>
        <span class="dots"></span>
        <span class="text-right">{first_half()}</span>
      </ConditionalLink>
      {second_half() === "" ? (
        <></>
      ) : (
        <ConditionalLink
          href={`/article/${props.href}`}
          class="panel-item flex items-baseline justify-between leading-9 sm:leading-8 text-2xl"
          onSameRoute={(e) => {
            e.preventDefault();
            window.scroll({
              left: (store.scrollWidth - store.innerWidth) / 2,
              behavior: "instant",
            });
          }}
        >
          <span class="dots !w-auto"></span>
          <span class="text-right">{second_half()}</span>
        </ConditionalLink>
      )}
    </>
  );
};

interface ConditionalLinkProps
  extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  onSameRoute?: (e: MouseEvent) => void;
  onClick?: (e: MouseEvent) => void;
}

export function ConditionalLink(props: ConditionalLinkProps) {
  const location = useLocation();
  const { onSameRoute, onClick, ...rest } = props;

  const handleClick = (e: MouseEvent) => {
    if (location.pathname === props.href) {
      // If on the same route, call the custom onSameRoute handler
      onSameRoute?.(e);
    } else {
      // Otherwise, call the original onClick handler if it exists
      onClick?.(e);
    }
  };

  return <A {...rest} onClick={handleClick} />;
}

export default HamburgerPanelItem;
