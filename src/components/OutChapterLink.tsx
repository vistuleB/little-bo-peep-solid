import { ParentProps } from "solid-js";
import { twJoin } from "tailwind-merge";
import usePrevNextPage from "~/hooks/usePrevNextPage";

const OutChapterLink = (
  props: ParentProps & { href: string; class?: string },
) => {
  const { getPage } = usePrevNextPage();

  const handleClick = (e: Event) => {
    e.preventDefault();
    const url = new URL((e.currentTarget as HTMLAnchorElement).href);
    getPage(`${url.pathname}${url.hash}`);
  };

  return (
    <a
      href={props.href}
      class={twJoin(props.class, "out-chapter-link")}
      onClick={handleClick}>
      {props.children}
    </a>
  );
};

export default OutChapterLink;
