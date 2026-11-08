import { Math }  from "~/components/Math";
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
              Dimensional Analysis
              <span class="t-3003">
                ./src/content/ch6/__parent.wly:2:11
              </span>
            </span>
          </TOCItem>
          <TOCItem
            article_type={2}
            href="chapter2"
          >
            <span class="t-3003-c">
              Derivative(s) of {" "}
              <span class="t-3003">
                ./src/content/ch6a_square/__parent.wly:2:11
              </span>
            </span>
            <Math>
              $x^2$
            </Math>
          </TOCItem>
        </ul>
      </div>
    </TOC>
  );
};
