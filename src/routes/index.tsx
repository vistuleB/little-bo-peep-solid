import TOC  from "~/components/TOC";
import TOCItem  from "~/components/TOCItem";
import TOCTitle  from "~/components/TOCTitle";
import useNoScrollRestoration from "~/hooks/useNoScrollRestoration";

export default function __Home__() {
  useNoScrollRestoration();
  return (
    <TOC
      prevPage=""
      nextPage="/article/chapter1"
    >
      <div id="chapter">
        <TOCTitle label="Chapters" />
        <ul>
          <TOCItem
            article_type={1}
            href="chapter1"
          >
            Functions
          </TOCItem>
          <TOCItem
            article_type={2}
            href="chapter2"
          >
            Derivatives
          </TOCItem>
          <TOCItem
            article_type={3}
            href="chapter3"
          >
            The Trigonometric Functions
          </TOCItem>
        </ul>
      </div>
    </TOC>
  );
};
