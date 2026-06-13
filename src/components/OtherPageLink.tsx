import { ParentProps } from "solid-js";
import useScrollToInChapter from "~/hooks/useScrollToInChapter";
import { twJoin } from "tailwind-merge";
import usePrevNextPage from "~/hooks/usePrevNextPage";

const OtherPageLink = (
  props: ParentProps & { href: string; class?: string },
) => {
  const { getPage } = usePrevNextPage();

  const handleClick = (e: Event) => {
    e.preventDefault();
    const href = e.target instanceof HTMLAnchorElement ? e.target.href : null;
    if (!href) return;
    const hrefUrl = new URL(href);
    const currentUrl = new URL(window.location.href);
    if (hrefUrl.origin !== currentUrl.origin) return; // external website link
    getPage(hrefUrl.pathname + hrefUrl.hash);
  };

  return (
    <a href={props.href} class={twJoin(props.class)} onClick={handleClick}>
      {props.children}
    </a>
  );
};

export default OtherPageLink;
