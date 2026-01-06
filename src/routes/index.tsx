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
            <span class="t-3003-c">
              Derivatives
              <span class="t-3003">
                ./src/content/chapter4__parent.wly:2:11
              </span>
            </span>
          </TOCItem>
        </ul>
      </div>
    </TOC>
  );
};
