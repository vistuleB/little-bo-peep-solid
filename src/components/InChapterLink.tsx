import { ParentProps } from "solid-js";
import useScrollToInChapter from "~/hooks/useScrollToInChapter";

const InChapterLink = (props: ParentProps & { href: string }) => {
  const scrollToInChapter = useScrollToInChapter();

  const handleClick = (e: Event) => {
    e.preventDefault();
    const url = new URL((e.currentTarget as HTMLAnchorElement).href);
    const id = url.searchParams.get("id") || "";
    scrollToInChapter(id, 200);
  };

  return (
    <a href={props.href} onClick={handleClick}>
      {props.children}
    </a>
  );
};

export default InChapterLink;
