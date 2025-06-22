import { JSX } from "solid-js";
import { A, useLocation } from "@solidjs/router";
import { useGlobalContext } from "~/store/StoreProvider";

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
      onSameRoute={(e) => {
        e.preventDefault();
        window.scroll({
          left: (store.scrollWidth - store.innerWidth) / 2,
          behavior: "instant",
        });
      }}
    >
      <div class="panel-item flex items-baseline justify-between leading-9 sm:leading-8 text-2xl">
        <div class="relative m-auto" style={`width:100%;direction:rtl;`}>
          <div class="toc-item-lead-wrapper">
            <div>
              {/* somehow this wrapper div is useful for base-alignment */}
              <span>{props.article_type}</span>
              <span class="toc-item-lead-dots">
                ..........................................................................................................................................................................
              </span>
            </div>
          </div>
          <div
            class="toc-item-title-outline"
            style="--toc-label-stroke-color: oklch(97% 0.001 106.424)"
            aria-hidden="true"
          >
            {props.label}
          </div>
          <div class="toc-item-title">
            <span>{props.label}</span>
          </div>
        </div>
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
