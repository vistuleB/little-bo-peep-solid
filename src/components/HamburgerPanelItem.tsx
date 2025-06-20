import { JSX } from "solid-js";
import { A, useLocation } from "@solidjs/router";
import { useGlobalContext } from "~/store/StoreProvider";
import { MOBILE_MAX_WIDTH } from "~/constants";

const setUpParentAndWidth = (
  parent: HTMLDivElement,
  span: HTMLSpanElement,
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
  const { store } = useGlobalContext();

  return (
    <ConditionalLink
      href={`/article/${props.href}`}
      class="panel-item flex items-baseline justify-between leading-9 sm:leading-8 text-2xl"
      onSameRoute={(e) => {
        e.preventDefault();
        window.scroll({
          left: (store.scrollWidth - store.innerWidth) / 2,
          behavior: "instant",
        });
      }}>
      <div class="relative w-full inline-flex items-baseline">
        <span class="">{props.article_type}</span>
        <span class="dots sm:min-w-[0rem] md:min-w-[2rem] lg:min-w-[4.4rem]"></span>
        <span class="whitespace-normal text-right">{props.label}</span>
      </div>
    </ConditionalLink>
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
