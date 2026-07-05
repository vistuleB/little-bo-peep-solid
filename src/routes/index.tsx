import TOC  from "~/components/TOC";
import TOCItem  from "~/components/TOCItem";
import TOCTitle  from "~/components/TOCTitle";
import useNoScrollRestoration from "~/hooks/useNoScrollRestoration";

export default function __Home__() {
  useNoScrollRestoration();
  return (
    <TOC
      prevPage="/article/bootcamp1"
      nextPage=""
    >
      <div id="bootcamp">
        <TOCTitle label="Bootcamps" />
        <ul>
          <TOCItem
            article_type={1}
            href="bootcamp1"
          >
            <span class="t-3003-c">
              Components Playground
              <span class="t-3003">
                ./src/content/playground/playground.wly:2:11
              </span>
            </span>
          </TOCItem>
        </ul>
      </div>
    </TOC>
  );
};
