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
            Slopes
          </TOCItem>
        </ul>
      </div>
    </TOC>
  );
};
