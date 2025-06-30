import { JSX } from "solid-js";
import { A, useLocation } from "@solidjs/router";
import { useGlobalContext } from "~/store/StoreProvider";
import { ParentProps } from "solid-js";

const HamburgerPanelItem = (props: ParentProps & {
  href: string;
  article_type: number;
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
          <div class="toc-item-title">
            <span class="bg-slate-100">&lrm;&thinsp;{props.children}&lrm;</span>
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
