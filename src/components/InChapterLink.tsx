import { ParentProps } from "solid-js";
import useScrollToInChapter from "~/hooks/useScrollToInChapter";

const InChapterLink = (props: ParentProps & { href: string }) => {
  const scrollToInChapter = useScrollToInChapter();

  const handleClick = (e: Event) => {
    e.preventDefault();
    const href = new URL((e.target as HTMLAnchorElement).href);
    const id = href.hash.slice(1);
    scrollToInChapter(id, true);
  };

  return (
    <a href={props.href} onClick={handleClick}>
      {props.children}
    </a>
  );
};

export default InChapterLink;
