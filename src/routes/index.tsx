import { Math }  from "~/components/Math";
import { Spacer }  from "~/components/Spacer";
import TOC  from "~/components/TOC";
import TOCItem  from "~/components/TOCItem";
import TOCTitle  from "~/components/TOCTitle";
import useNoScrollRestoration from "~/hooks/useNoScrollRestoration";

export default function __Home__() {
  useNoScrollRestoration();
  return (
    <TOC
      prevPage="/article/bootcamp1"
      nextPage="/article/chapter1"
    >
      <div id="chapter">
        <TOCTitle label="Chapters" />
        <ul>
          <TOCItem
            article_type={1}
            href="chapter1"
          >
            A Few Refreshers
          </TOCItem>
          <TOCItem
            article_type={2}
            href="chapter2"
          >
            Slopes
          </TOCItem>
          <TOCItem
            article_type={3}
            href="chapter3"
          >
            Functions
          </TOCItem>
          <TOCItem
            article_type={4}
            href="chapter4"
          >
            Derivatives
          </TOCItem>
          <TOCItem
            article_type={5}
            href="chapter5"
          >
            Motion in Two Dimensions
          </TOCItem>
          <TOCItem
            article_type={6}
            href="chapter6"
          >
            Trigonometry I
          </TOCItem>
          <TOCItem
            article_type={7}
            href="chapter7"
          >
            The Product Rule
          </TOCItem>
          <TOCItem
            article_type={8}
            href="chapter8"
          >
            Dimensional Analysis
          </TOCItem>
          <TOCItem
            article_type={9}
            href="chapter9"
          >
            Derivative(s) of {" "}
            <Math>
              $x^2$
            </Math>
          </TOCItem>
          <TOCItem
            article_type={10}
            href="chapter10"
          >
            Leibnizian Notation
          </TOCItem>
          <TOCItem
            article_type={11}
            href="chapter11"
          >
            The Lambert Projection
          </TOCItem>
          <TOCItem
            article_type={12}
            href="chapter12"
          >
            The Fundamental Theorem of Calculus
          </TOCItem>
          <TOCItem
            article_type={13}
            href="chapter13"
          >
            Trigonometry II
          </TOCItem>
        </ul>
      </div>
      <Spacer />
      <div id="bootcamp">
        <TOCTitle label="Bootcamps" />
        <ul>
          <TOCItem
            article_type={1}
            href="bootcamp1"
          >
            Sets
          </TOCItem>
          <TOCItem
            article_type={2}
            href="bootcamp2"
          >
            Powers of 10
          </TOCItem>
          <TOCItem
            article_type={3}
            href="bootcamp3"
          >
            The Pythagorean Theorem
          </TOCItem>
        </ul>
      </div>
    </TOC>
  );
};
