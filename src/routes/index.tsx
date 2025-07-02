import TOC from "~/components/TOC";
import TOCTitle from "~/components/TOCTitle";
import TOCItem from "~/components/TOCItem";
import { Spacer } from "~/components/Spacer";

export default function __Home__() {
  return (
    <TOC
      prev-page="/article/bootcamp1"
      next-page="/article/chapter1">
      <div id="chapter">
        <TOCTitle label="Chapters" />
        <ul>
          <TOCItem href="chapter1">
            A{" "}
            <i>
              Few
            </i>
            {" "}Refreshers
          </TOCItem>
          <TOCItem href="chapter2">
            Slopes
          </TOCItem>
          <TOCItem href="chapter3">
            Functions
          </TOCItem>
          <TOCItem href="chapter4">
            Derivatives
          </TOCItem>
          <TOCItem href="chapter5">
            The Trigonometric Functions
          </TOCItem>
        </ul>
      </div>
      <Spacer />
      <div id="bootcamp">
        <TOCTitle label="Bootcamps" />
        <ul>
          <TOCItem href="bootcamp1">
            Sets
          </TOCItem>
          <TOCItem href="bootcamp2">
            Powers of 10
          </TOCItem>
        </ul>
      </div>
    </TOC>
  );
};
