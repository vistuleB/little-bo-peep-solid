import TOC  from "~/components/TOC";
import TOCItem  from "~/components/TOCItem";
import TOCTitle  from "~/components/TOCTitle";

export default function __Home__() {
  return (
    <TOC
      prevPage=""
      nextPage="/article/chapter1">
      <div id="chapter">
        <TOCTitle label="Chapters" />
        <ul>
          <TOCItem
            article_type={1}
            href="chapter1">
            Derivatives
          </TOCItem>
        </ul>
      </div>
    </TOC>
  );
};
