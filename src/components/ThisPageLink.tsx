import { ParentProps } from "solid-js";
import useScrollToInChapter from "~/hooks/useScrollToInChapter";
import { twJoin } from "tailwind-merge";

const ThisPageLink = (
  props: ParentProps & { href: string; class?: string },
) => {
  const { scrollToInChapter } = useScrollToInChapter();

  const handleClick = (e: Event) => {
    e.preventDefault();
    const url = new URL((e.currentTarget as HTMLAnchorElement).href);
    let id = url.searchParams.get("id") || url.hash.slice(1) || "";
    window.history.replaceState(
      { ...window.history.state, llpScroll: window.scrollY },
      "",
    );
    window.history.pushState(null, "", props.href);
    window.history.replaceState(
      { ...window.history.state, _depth: window.history.length - 1 },
      "",
    );
    scrollToInChapter(id, 200);
  };

  return (
    <a
      href={props.href}
      class={twJoin(props.class, "in-chapter-link")}
      onClick={handleClick}>
      {props.children}
    </a>
  );
};

export default ThisPageLink;
