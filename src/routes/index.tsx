import TOC from "~/components/TOC";
import TOCTitle from "~/components/TOCTitle";
import TOCItemNewStyle from "~/components/TOCItemNewStyle";
import { Spacer } from "~/components/Spacer";

export default function Home() {
  return (
    <TOC
      next-page="/article/chapter1"
      prev-page="/article/bootcamp1">
      <div id="chapter">
        <TOCTitle label="Chapters" />
        <ul>
          <TOCItemNewStyle
            article_type={1}
            href="chapter1">
            A{" "}
            <i>
              Few
            </i>
            {" "}Refreshers
          </TOCItemNewStyle>
          <TOCItemNewStyle
            article_type={2}
            href="chapter2">
            Slopes
          </TOCItemNewStyle>
          <TOCItemNewStyle
            article_type={3}
            href="chapter3">
            Functions
          </TOCItemNewStyle>
          <TOCItemNewStyle
            article_type={4}
            href="chapter4">
            Derivatives
          </TOCItemNewStyle>
          <TOCItemNewStyle
            article_type={5}
            href="chapter5">
            The Trigonometric Functions
          </TOCItemNewStyle>
        </ul>
      </div>
      <Spacer />
      <div id="bootcamp">
        <TOCTitle label="Bootcamps" />
        <ul>
          <TOCItemNewStyle
            article_type={1}
            href="bootcamp1">
            Sets
          </TOCItemNewStyle>
          <TOCItemNewStyle
            article_type={2}
            href="bootcamp2">
            Powers of 10
          </TOCItemNewStyle>
        </ul>
      </div>
    </TOC>
  );
};
