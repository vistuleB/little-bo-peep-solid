import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Boxed  from "~/components/Boxed";
import { CentralDisplay, CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Grid  from "~/components/Grid";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import InlineImage  from "~/components/InlineImage";
import { Item }  from "~/components/List";
import { MathBlock, Math }  from "~/components/Math";
import MathJaxSvgExportTooltip  from "~/components/MathJaxSvgExportTooltip";
import OutChapterLink  from "~/components/OutChapterLink";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageRight, ImageLeft }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import TextParent  from "~/components/TextParent";
import { SolutionNote, Example, Pause, Section, NoBreak }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter3__() {
  return (
    <Article
      prevPage="/article/chapter2"
      nextPage="/article/chapter4"
      pageNecessaryMargin={700}
      maxElementWidth={1500}
      id="_57_h.a.i_"
      path="/article/chapter3"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            <span class="t-3003-c">
              syntax
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:5:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            <span class="t-3003-c">
              lambda functions
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:71:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=section-3">
            <span class="t-3003-c">
              definition by cases
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:149:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            <span class="t-3003-c">
              on arbitrariness
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:206:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-4">
          <InChapterLink href="?id=section-5">
            <span class="t-3003-c">
              graphs
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:231:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-5">
          <InChapterLink href="?id=section-6">
            <span class="t-3003-c">
              domains
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:285:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-6">
          <InChapterLink href="?id=section-7">
            <span class="t-3003-c">
              “from/to” notation
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:371:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-7">
          <InChapterLink href="?id=section-8">
            <span class="t-3003-c">
              the vertical line test
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:422:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-8">
          <InChapterLink href="?id=section-9">
            <span class="t-3003-c">
              a famous discontinuity
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:504:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-9">
          <InChapterLink href="?id=section-10">
            <span class="t-3003-c">
              distinguishing {" "}
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:538:6
              </span>
            </span>
            <NoBreak>
              <span class="t-3003-c">
                “
                <span class="t-3003">
                  ./src/content/ch3/ch3.wly:538:6
                </span>
              </span>
              <Math>
                $f$
              </Math>
              <span class="t-3003-c">
                ”
                <span class="t-3003">
                  ./src/content/ch3/ch3.wly:538:25
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} and {" "}
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:538:25
              </span>
            </span>
            <NoBreak>
              <span class="t-3003-c">
                “
                <span class="t-3003">
                  ./src/content/ch3/ch3.wly:538:25
                </span>
              </span>
              <Math>
                $f(x)$
              </Math>
              <span class="t-3003-c">
                ”
                <span class="t-3003">
                  ./src/content/ch3/ch3.wly:538:38
                </span>
              </span>
            </NoBreak>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-10">
          <InChapterLink href="?id=section-11">
            <span class="t-3003-c">
              distinguishing {" "}
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:615:6
              </span>
            </span>
            <NoBreak>
              <span class="t-3003-c">
                “
                <span class="t-3003">
                  ./src/content/ch3/ch3.wly:615:6
                </span>
              </span>
              <Math>
                $x^3$
              </Math>
              <span class="t-3003-c">
                ”
                <span class="t-3003">
                  ./src/content/ch3/ch3.wly:615:27
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} and {" "}
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:615:27
              </span>
            </span>
            <NoBreak>
              <span class="t-3003-c">
                “
                <span class="t-3003">
                  ./src/content/ch3/ch3.wly:615:27
                </span>
              </span>
              <Math>
                $x \ra x^3$
              </Math>
              <span class="t-3003-c">
                ”
                <span class="t-3003">
                  ./src/content/ch3/ch3.wly:615:45
                </span>
              </span>
            </NoBreak>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-11">
          <InChapterLink href="?id=section-12">
            <span class="t-3003-c">
              polynomials
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:651:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-12">
          <InChapterLink href="?id=section-13">
            <span class="t-3003-c">
              quadratic, linear, and constant terms
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:735:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-13">
          <InChapterLink href="?id=exercises">
            <span class="t-3003-c">
              exercises
              <span class="t-3003">
                ./src/content/ch3/ch3^exercises/__parent.wly:1:1
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 3:">
        <span class="t-3003-c">
          Functions
          <span class="t-3003">
            ./src/content/ch3/__parent.wly:2:11
          </span>
        </span>
      </ArticleTitle>
      <Section
        ref="rence"
        id="section-1"
      >
        <OuterP>
          <b>
            <span class="t-3003-c">
              Syntax.
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:5:6
              </span>
            </span>
          </b>
          {" "}
          A
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            function
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:8:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a “rule” for transforming inputs (usually
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:10:5
            </span>
          </span>
          {" "}
          {" "}
          numbers) into outputs (usually numbers as well).
          One can think of a function as a box with an
          “input tube” and an “output tube”:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/tYyP.svg"
          local_url="./images/svg_ch3_f_box.svg"
          intrinsicWidth={380}
          intrinsicHeight="194.762"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            An input goes in via the input tube, is
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:18:5
            </span>
          </span>
          {" "}
          {" "}
          processed according to the function's rule,
          and the result comes out the other side.
          (Metaphorically speaking.)
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            In the above picture, the function is named {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:23:5
            </span>
          </span>
          <NoBreak>
            “
            <Math>
              $f$
            </Math>
            ”.
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            One writes
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:25:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f(x)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (which is read {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:31:5
            </span>
          </span>
          <NoBreak>
            “
            <Math>
              $f$
            </Math>
          </NoBreak>
          {" "} of {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            ”,
          </NoBreak>
          {" "} and that's
          important) for the result of passing an input
          {" "}
          <Math>
            $x$
          </Math>
          {" "} to a function {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            .
          </NoBreak>
          {" "} For example, if {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            ’s
          </NoBreak>
          {" "} rule is
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            the output is the square of the input
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:35:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            then
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:37:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;f(2) = 4&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <NoBreak>
            <span class="t-3003-c">
              [“
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:43:5
              </span>
            </span>
            <Math>
              $f$
            </Math>
          </NoBreak>
          {" "} of {" "}
          <Math>
            $2$
          </Math>
          {" "} equals {" "}
          <NoBreak>
            <Math>
              $4$
            </Math>
            ”]
          </NoBreak>
          {" "} because {" "}
          <NoBreak>
            <Math>
              $2^2 = 4$
            </Math>
            ,
          </NoBreak>
          {" "} and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;f(3) = 9&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <NoBreak>
            <span class="t-3003-c">
              [“
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:49:5
              </span>
            </span>
            <Math>
              $f$
            </Math>
          </NoBreak>
          {" "} of {" "}
          <Math>
            $3$
          </Math>
          {" "} equals {" "}
          <NoBreak>
            <Math>
              $9$
            </Math>
            ”]
          </NoBreak>
          {" "} because {" "}
          <NoBreak>
            <Math>
              $3^2 = 9$
            </Math>
            ,
          </NoBreak>
          {" "} and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123; f(0.1) = 0.01&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            [...] because {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:55:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $0.1^2 = 0.01$
            </Math>
            ,
          </NoBreak>
          {" "} and so on. Also,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;f(x) = x^2&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <NoBreak>
            <span class="t-3003-c">
              [“
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:61:5
              </span>
            </span>
            <Math>
              $f$
            </Math>
          </NoBreak>
          {" "} of {" "}
          <Math>
            $x$
          </Math>
          {" "} equals {" "}
          <NoBreak>
            <Math>
              $x^2$
            </Math>
            ”]
          </NoBreak>
          {" "} more generally, which
          is actually the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            definition
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:64:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            of {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:66:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $f$
            </Math>
            !!
          </NoBreak>
          {" "} (Stated algebraically.)
        </OuterP>
      </Section>
      <Rest />
    </Article>
  );
}

const Rest = () => {
  const visibleRestSections = useShowMore(13);
  return <>
    {visibleRestSections() > 0 && <>
      <Pause />
      <Section id="section-2">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Lambda functions.
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:71:6
              </span>
            </span>
          </b>
          {" "}
          A
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            lambda function
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:74:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is not a type of function, but a type of
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:76:5
            </span>
          </span>
          {" "}
          {" "}
          notation for defining a function
          without giving it a name, such as {" "}
          <NoBreak>
            “
            <Math>
              $f$
            </Math>
            ”.
          </NoBreak>
          {" "} There are two mainstream notations. One writes
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \lambda&#123;&#125;x.x^2
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            to mean “the function that maps {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:84:5
            </span>
          </span>
          <Math>
            $x$
          </Math>
          {" "} to {" "}
          <NoBreak>
            <Math>
              $x^2$
            </Math>
            ”
          </NoBreak>
          {" "}
          (and by the way,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \lambda&#123;&#125;z.z^2
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:91:5
            </span>
          </span>
          <i>
            the same
          </i>
          {" "} function, because
          it specifies the same in-out mapping—a thing
          goes to its square—also by the way, the symbol
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Huge \lambda
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is the Greek letter “lambda”, giving its name
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:99:5
            </span>
          </span>
          {" "}
          {" "}
          to the topic) while the other notation writes
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x \rightarrow x^2
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            to mean the same thing.
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:106:5
            </span>
          </span>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            Note that
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:108:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (x \ra x^2)(0.1)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            means “the function that maps each number to its
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:114:5
            </span>
          </span>
          {" "}
          {" "}
          square, of {" "}
          <NoBreak>
            <Math>
              $0.1$
            </Math>
            ”.
          </NoBreak>
          {" "} So...
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (x \ra x^2)(0.1) = 0.01
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...the same as an equation of the form
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:121:5
            </span>
          </span>
          {" "}
          {" "}
          {" "}{" "}
          <NoBreak>
            “
            <Math>
              $f(\dots) = \dots$
            </Math>
            ”.
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            For more practice:
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:124:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (\lambda x.x^3)(10) = 1000
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          (\lambda u.u^5)(10) = 100000
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          (v \ra v^2)(10) = 100
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          (z \ra z^3)(10) + (t \ra t^2)(5) = 1025.
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (Etc.) (Again, the variable
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:139:5
            </span>
          </span>
          {" "}
          {" "}
          denoting the input does not matter: it is just a
          placeholder, and you obtain the same output, and
          the same {" "}
          <i>
            function
          </i>
          , no matter what symbol
          you choose.*) (*As long as you don't collide
          with other existing variable names.)
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 1 && <>
      <Pause />
      <Section id="section-3">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Definition by cases.
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:149:6
              </span>
            </span>
          </b>
          {" "}
          Sometimes a function is defined by an expression
          of the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x \ra \begin&#123;cases&#125;
          \ldots &amp; \te&#123;if $\ldots$&#125;\\
          \ldots &amp; \te&#123;if $\ldots$&#125;\\
          \vdots &amp; \vdots\\
          \ldots &amp; \te&#123;$\ldots$&#125;
          \end&#123;cases&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            where the right-hand side is a list of mutually exclusive cases depending on {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:162:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $x$
            </Math>
            .
          </NoBreak>
          {" "} Equivalently,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          g(x) = \begin&#123;cases&#125;
          \ldots &amp; \te&#123;if $\ldots$&#125;\\
          \ldots &amp; \te&#123;if $\ldots$&#125;\\
          \vdots &amp; \vdots\\
          \ldots &amp; \te&#123;$\ldots$&#125;
          \end&#123;cases&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            if the function has a name, such as {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:173:5
            </span>
          </span>
          <NoBreak>
            “
            <Math>
              $g$
            </Math>
            ”.
          </NoBreak>
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 1.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              If VX-11/78A (don't mind the weird name, chosen
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:177:9
              </span>
            </span>
            {" "}
            {" "}
            at random) is the function defined by
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \te&#123;VX-11/78A&#125;(x) = \begin&#123;cases&#125;
            3.5 &amp; \te&#123;if $x = 0$&#125;,\\
            2.5\up&#123;1.1&#125; &amp; \te&#123;if $x = 1$&#125;,\\
            \te&#123;undefined&#125;\up&#123;1.1&#125; &amp; \te&#123;if $x \ne 0, 1$&#125;
            \end&#123;cases&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              then
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:188:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \te&#123;VX-11/78A&#125;(0) = 3.5,
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              and
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:194:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \te&#123;VX-11/78A&#125;(1) = 2.5,
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              aaand... and these are the only two values of
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:200:9
              </span>
            </span>
            {" "}
            {" "}
            {" "}{" "}
            <Math>
              $x$
            </Math>
            {" "} for which {" "}
            <NoBreak>
              VX-11/78A
              <Math>
                $(x)$
              </Math>
            </NoBreak>
            {" "} is defined.
          </OuterP>
        </Example>
      </Section>
    </>}
    {visibleRestSections() > 2 && <>
      <Pause />
      <Section id="section-4">
        <OuterP>
          <b>
            <span class="t-3003-c">
              On arbitrariness.
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:206:6
              </span>
            </span>
          </b>
          {" "}
          While a function such as VX-11/78A might seem
          completely arbitrary, one lesson from the former
          example is that functions {" "}
          <i>
            can
          </i>
          {" "} be
          completely arbitrary! In fact, there are only
          two “ground rules” for a function: {" "}
          <b>
            (i)
          </b>
          {" "} to
          output
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            one
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:214:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            output per (accepted) input, and {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:216:5
            </span>
          </span>
          <b>
            (ii)
          </b>
          {" "} to return
          the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            same
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:219:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            output each time on the same input. (Sometimes,
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:221:5
            </span>
          </span>
          {" "}
          {" "}
          functions are said to be
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            deterministic
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:224:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            because of {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:226:5
            </span>
          </span>
          <b>
            (ii)
          </b>
          .)
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 3 && <>
      <Pause />
      <Section id="section-5">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Graphs.
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:231:6
              </span>
            </span>
          </b>
          {" "}
          The
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            graph
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:234:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            of a function is a visualization device. A point
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:236:5
            </span>
          </span>
          {" "}
          {" "}
          on the graph corresponds to an input for which
          the function is defined. The point’s {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinate
          </NoBreak>
          {" "} is the input;
          its {" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -coordinate
          </NoBreak>
          {" "} is the output.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            For example, here is a graph of VX-11/78A:
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:241:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/46Oh.svg"
          local_url="./images/svg_ch3_vx1178A.svg"
          intrinsicWidth={387}
          intrinsicHeight="282.8"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            The graph has only two points, because VX-11/78A
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:246:5
            </span>
          </span>
          {" "}
          {" "}
          is defined at only two values. One point is...
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/cPmR.svg"
          local_url="./images/svg_ch3_ch_vx1178A_@0_with_cors.svg"
          intrinsicWidth="377.288"
          intrinsicHeight={320}
        />
        <Pause />
        <OuterP>
          <NoBreak>
            <span class="t-3003-c">
              ...
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:252:5
              </span>
            </span>
            <Math>
              $(0, 3.5)$
            </Math>
            ,
          </NoBreak>
          {" "} because VX-11/78A maps {" "}
          <Math>
            $0$
          </Math>
          {" "} to
          {" "}
          <NoBreak>
            <Math>
              $3.5$
            </Math>
            ,
          </NoBreak>
          {" "} while the other point is...
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/XImO.svg"
          local_url="./images/svg_ch3_ch_vx1178A_@1_with_cors.svg"
          intrinsicWidth="377.288"
          intrinsicHeight={320}
        />
        <Pause />
        <OuterP>
          <NoBreak>
            <span class="t-3003-c">
              ...
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:258:5
              </span>
            </span>
            <Math>
              $(1, 2.5)$
            </Math>
            ,
          </NoBreak>
          {" "} because VX-11/78A maps {" "}
          <Math>
            $1$
          </Math>
          {" "} to {" "}
          <NoBreak>
            <Math>
              $2.5$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 2.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              Here is a graph of {" "}
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:262:9
              </span>
            </span>
            <Math>
              $x \ra x^2$
            </Math>
            {" "} on the interval
            {" "}
            <Math>
              $[-1, 1]$
            </Math>
            {" "} (meaning: going from {" "}
            <Math>
              $x = -1$
            </Math>
            {" "} to
            {" "}
            <NoBreak>
              <Math>
                $x = 1$
              </Math>
              ):
            </NoBreak>
          </OuterP>
          <Pause />
          <Image
            src="/build-img/svgo-svg/AAZw.svg"
            local_url="./images/svg_ch3_ch_x_squared_1.svg"
            intrinsicWidth={520}
            intrinsicHeight="299.06931"
          />
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              Consider, say, the point
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:269:9
              </span>
            </span>
            {" "}
            {" "}
            {" "}{" "}
            <NoBreak>
              <Math>
                $(0.75, 0.5625)$
              </Math>
              ...
            </NoBreak>
          </OuterP>
          <Pause />
          <Image
            src="/build-img/svgo-svg/ZMm9.svg"
            local_url="./images/svg_ch3_ch_x_squared_2.svg"
            intrinsicWidth={520}
            intrinsicHeight={325}
          />
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              ...which is on the graph because the square of {" "}
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:275:9
              </span>
            </span>
            <Math>
              $0.75$
            </Math>
            {" "} is
            {" "}
            <NoBreak>
              <Math>
                $0.5625 = 9/16$
              </Math>
              .
            </NoBreak>
            <ImageLeft
              src="/build-img/svgo-svg/-OE8.svg"
              line={-1}
              offsetY="0em"
              local_url="./images/svg_ch3_0.5625_cloud.svg"
              intrinsicWidth="500.723"
              intrinsicHeight="125.248"
            />
          </OuterP>
        </Example>
      </Section>
    </>}
    {visibleRestSections() > 4 && <>
      <Pause />
      <Section id="section-6">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Domains.
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:285:6
              </span>
            </span>
          </b>
          {" "}
          The {" "}
          <i>
            domain
          </i>
          {" "} of a function {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            —written
          </NoBreak>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \dom\, f
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            —is the set of inputs {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:292:5
            </span>
          </span>
          <Math>
            $x$
          </Math>
          {" "} for which {" "}
          <Math>
            $f(x)$
          </Math>
          {" "} is
          defined.
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 3.
            </b>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \dom\,\rt&#123;0.1&#125; \te&#123;VX-11/78A&#125; = \left\&#123; 0\rt&#123;0.1&#125;, 1 \right\&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              because {" "}
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:301:9
              </span>
            </span>
            <NoBreak>
              VX-11/78A
              <Math>
                $(x)$
              </Math>
            </NoBreak>
            {" "} is only defined at {" "}
            <NoBreak>
              <Math>
                $x = 0$
              </Math>
              ,
            </NoBreak>
            {" "}
            {" "}
            <NoBreak>
              <Math>
                $1$
              </Math>
              .
            </NoBreak>
          </OuterP>
        </Example>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 4.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              If DM-1700 (another weirdly named function) is
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:306:9
              </span>
            </span>
            {" "}
            {" "}
            defined by
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \te&#123;DM-1700&#125;(x) =
            \begin&#123;cases&#125;
            0             &amp; \te&#123;if $x \leq 0$ or $x \geq 1$&#125;,\\
            1 - x\up&#123;1.1&#125; &amp; \te&#123;if $0 &lt; x &lt; 1$&#125;
            \end&#123;cases&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              then
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:317:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \dom\,\rt&#123;0.1&#125; \te&#123;DM-1700&#125; = \rr
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              because {" "}
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:323:9
              </span>
            </span>
            <Math>
              $\te&#123;DM-1700&#125;(x)$
            </Math>
            {" "} is defined for all
            {" "}
            <NoBreak>
              <Math>
                $x \in \rr$
              </Math>
              .
            </NoBreak>
          </OuterP>
        </Example>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 5.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              If {" "}
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:328:9
              </span>
            </span>
            <Math>
              $g : \rr \ra \rr$
            </Math>
            {" "} (we are going to explain
            this notation imminently) is the function given
            by
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            g(x) = \sqrt&#123;x - 1&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              then
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:336:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \begin&#123;align*&#125;
            \dom\, g &amp;\,=\, [1, \infty)
            \end&#123;align*&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              because the square root of a number is defined
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:344:9
              </span>
            </span>
            {" "}
            {" "}
            if and only if that number is {" "}
            <i>
              nonnegative
            </i>
            {" "}
            (we need {" "}
            <NoBreak>
              <Math>
                $x - 1 \geq 0$
              </Math>
              ,
            </NoBreak>
            {" "} i.e., {" "}
            <NoBreak>
              <Math>
                $x \geq 1$
              </Math>
              ).
            </NoBreak>
          </OuterP>
        </Example>
      </Section>
    </>}
    {visibleRestSections() > 5 && <>
      <Pause />
      <Section id="section-7">
        <OuterP>
          <b>
            <span class="t-3003-c">
              “From/To” notation.
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:371:6
              </span>
            </span>
          </b>
          {" "}
          The notation
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f : \rr \ra \rr
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            means that {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:378:5
            </span>
          </span>
          <Math>
            $f$
          </Math>
          {" "} is a function
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            from {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:380:7
            </span>
          </span>
          <Math>
            $\rr$
          </Math>
          <span class="t-3003-c">
            {" "} to {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:380:17
            </span>
          </span>
          <Math>
            $\rr$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            that is,
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:382:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \dom f \subseteq \rr
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            [translation: {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:388:5
            </span>
          </span>
          <i>
            the domain of {" "}
            <Math>
              $f$
            </Math>
            {" "} is a subset of
            the set of real numbers
          </i>
          ] and that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \&#123;f(x) : x \in \dom f\&#125; \subseteq \rr
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            [translation: {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:395:5
            </span>
          </span>
          <i>
            the set of values output by {" "}
            <Math>
              $f$
            </Math>
            {" "}
            is a subset of the set of real numbers
          </i>
          ].
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            Generalizing,
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:398:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f : A \ra B
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            means that
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:404:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \dom f \subseteq A
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (i.e., that {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:410:5
            </span>
          </span>
          <Math>
            $f$
          </Math>
          {" "} only accepts values from {" "}
          <NoBreak>
            <Math>
              $A$
            </Math>
            )
          </NoBreak>
          {" "} and
          that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \&#123;f(x) : x \in \dom f\&#125; \subseteq B
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (i.e., that {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:417:5
            </span>
          </span>
          <Math>
            $f$
          </Math>
          {" "} only outputs values from {" "}
          <NoBreak>
            <Math>
              $B$
            </Math>
            ).
          </NoBreak>
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 6 && <>
      <Pause />
      <Section id="section-8">
        <OuterP>
          <b>
            <span class="t-3003-c">
              The vertical line test.
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:422:6
              </span>
            </span>
          </b>
          {" "}
          As it turns out, the term “graph” just means
          “set of points in the plane”. So a
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            function graph
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:426:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is one kind of graph.
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:428:5
            </span>
          </span>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            The so-called
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:430:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            vertical line test
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:432:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            observes that a graph {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:434:5
            </span>
          </span>
          <NoBreak>
            [
            <Math>
              $=$
            </Math>
          </NoBreak>
          {" "} {" "}
          <i>
            set of points
            in the plane
          </i>
          ] is a function graph if and
          only if every {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -value
          </NoBreak>
          {" "} (a.k.a., input)
          corresponds to at most one {" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -value
          </NoBreak>
          {" "} (a.k.a.,
          output). In other words, every vertical line
          should intersect the graph at most once.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            For example, this particular graph...
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:441:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/s-jo.svg"
          local_url="./images/svg_ch3_ch_wiggle_graph.svg"
          intrinsicWidth={365}
          intrinsicHeight="249.26"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a function graph (or locally at least, from
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:446:5
            </span>
          </span>
          {" "}
          {" "}
          what we can see), because every vertical line
          intersects the graph at most once, but this
          graph...
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/cybh.svg"
          local_url="./images/svg_ch3_ch_circle.svg"
          intrinsicWidth={330}
          intrinsicHeight="312.189"
        >
          <ImageRight
            src="/build-img/svgo-svg/1ANB.svg"
            offsetX="2em"
            local_url="./images/svg_ch3_ch_crossing_circle_cloud.svg"
            intrinsicWidth={400}
            intrinsicHeight="336.934"
          />
        </Image>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...is not the graph of any function, because
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:458:5
            </span>
          </span>
          {" "}
          {" "}
          some vertical lines intersect the graph more
          than once.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            (Oops. One clarification: an empty circle at the
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:462:5
            </span>
          </span>
          {" "}
          {" "}
          end of a segment, as in the previous figure...
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/hvxw.svg"
          class="pt-4 mb-3"
          local_url="./images/svg_ch3_ch_empty_circle.svg"
          intrinsicWidth={430}
          intrinsicHeight="199.257"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...means that the point is {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:469:5
            </span>
          </span>
          <i>
            excluded
          </i>
          {" "}
          from the graph. A filled circle, by opposition,
          means that the point is included!)
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 6.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              This {" "}
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:476:9
              </span>
            </span>
            <i>
              upper semicircle
            </i>
            {" "} of unit radius...
          </OuterP>
          <Pause />
          <Image
            src="/build-img/svgo-svg/cyb_.svg"
            local_url="./images/svg_ch3_ch_upper_semicircle.svg"
            intrinsicWidth={410}
            intrinsicHeight={270}
          />
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              ...passes the vertical line test, and, hence,
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:481:9
              </span>
            </span>
            {" "}
            {" "}
            defines a function.
          </OuterP>
        </Example>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 7.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              This graph defines a function...
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:487:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <Image
            src="/build-img/svgo-svg/LBjA.svg"
            local_url="./images/svg_ch3_ch_factory_function.svg"
            intrinsicWidth={540}
            intrinsicHeight={250}
          />
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              ...because it passes the vertical line test,
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:492:9
              </span>
            </span>
            {" "}
            {" "}
            while this graph does not define a function...
          </OuterP>
          <Pause />
          <Image
            src="/build-img/svgo-svg/ywM5.svg"
            local_url="./images/svg_ch3_factory_nonfunction.svg"
            intrinsicWidth={540}
            intrinsicHeight={250}
          />
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              ...because it does {" "}
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:498:9
              </span>
            </span>
            <i>
              not
            </i>
            {" "} pass the vertical
            line test!
          </OuterP>
        </Example>
      </Section>
    </>}
    {visibleRestSections() > 7 && <>
      <Pause />
      <Section id="section-9">
        <OuterP>
          <b>
            <span class="t-3003-c">
              A famous discontinuity.
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:504:6
              </span>
            </span>
          </b>
          {" "}
          As already seen, functions can have
          {" "}
          <i>
            discontinuities
          </i>
          : a place where the function
          experiences a sudden “jump” in value.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            For a famous example of a “naturally” occurring
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:509:5
            </span>
          </span>
          {" "}
          {" "}
          discontinuity (that we feel compelled to
          mention, for some reason) we need look no
          further than the function
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large x \ra 0^x
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            as it so happens that
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:518:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          0^x =
          \begin&#123;cases&#125; 0 &amp; \te&#123;if &#125; x &gt; 0\\
          1 &amp; \te&#123;if &#125; x = 0\\
          \te&#123;undefined&#125; &amp; \te&#123;if &#125;x &lt; 0 \end&#123;cases&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            which implies a discontinuity in the graph of
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:527:5
            </span>
          </span>
          {" "}
          {" "}
          {" "}{" "}
          <Math>
            $y = 0^x$
          </Math>
          {" "} at {" "}
          <NoBreak>
            <Math>
              $x = 0$
            </Math>
            ,
          </NoBreak>
          {" "} as pictured here:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/VnBq.svg"
          local_url="./images/svg_ch3_zero_to_the_x.svg"
          intrinsicWidth={500}
          intrinsicHeight="342.704"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (Pretty cool, no?)
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:533:5
            </span>
          </span>
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 8 && <>
      <Pause />
      <Section id="section-10">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Distinguishing {" "}
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:538:6
              </span>
            </span>
            <NoBreak>
              “
              <Math>
                $f$
              </Math>
              ”
            </NoBreak>
            {" "} and {" "}
            <NoBreak>
              “
              <Math>
                $f(x)$
              </Math>
              ”.
            </NoBreak>
          </b>
          {" "}
          The difference between
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;VX-11/78A&#125;&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:545:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;VX-11/78A&#125;(x)&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is that the former is a
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:551:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            function
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:553:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            while the latter is a
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:555:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            value.
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:557:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (Well, provided {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:559:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $x \in \&#123;0, 1\&#125;$
            </Math>
            ,
          </NoBreak>
          {" "} to make it
          well-defined at all.) Likewise, if {" "}
          <NoBreak>
            <Math>
              $f : \rr \ra \rr$
            </Math>
            ,
          </NoBreak>
          {" "}
          the difference between
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:567:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f(x)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is that the former is a
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:573:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            function
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:575:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            while the latter is a
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:577:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            value.
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:579:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Amusingly, though, if we add {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:581:5
            </span>
          </span>
          <NoBreak>
            “
            <Math>
              $x \ra$
            </Math>
            ”
          </NoBreak>
          {" "} in front
          of {" "}
          <NoBreak>
            “
            <Math>
              $f(x)$
            </Math>
            ”
          </NoBreak>
          {" "} then we are back to considering a
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            function
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:584:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            whose rule is:
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:586:5
            </span>
          </span>
          {" "}
          {" "}
          apply {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            .
          </NoBreak>
          {" "} In fact,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f = (x \ra f(x)),
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            an {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:593:5
            </span>
          </span>
          <i>
            equality between functions
          </i>
          .
          (You cannot use this equality to
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            define
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:596:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <Math>
            $f$
          </Math>
          <span class="t-3003-c">
            {" "} because that would lead to a circular
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:598:8
            </span>
          </span>
          {" "}
          {" "}
          definition. But that doesn't make the equality
          any less true. And btw, you can go “one layer
          deeper”:
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f = (x \ra f(x)) = (x \ra (t \ra f(t))(x))
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...where we use the fact that {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:607:5
            </span>
          </span>
          <Math>
            $f = (t \ra f(t))$
          </Math>
          {" "}
          in the second equality. You could keep going,
          replacing {" "}
          <NoBreak>
            “
            <Math>
              $f$
            </Math>
            ”
          </NoBreak>
          {" "} each time, but the process is not intrinsically
          useful.)
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 9 && <>
      <Pause />
      <Section id="section-11">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Distinguishing {" "}
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:615:6
              </span>
            </span>
            <NoBreak>
              “
              <Math>
                $x^3$
              </Math>
              ”
            </NoBreak>
            {" "} and {" "}
            <NoBreak>
              “
              <Math>
                $x \ra x^3$
              </Math>
              ”.
            </NoBreak>
          </b>
          {" "}
          Technically,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^3
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:622:5
            </span>
          </span>
          <i>
            value
          </i>
          {" "} (not a function) and the way
          logicians think of it, philosophically speaking,
          is like so: at inception, every symbol has
          some default value attached, absent any other
          context.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            By contrast,
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:628:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x \ra x^3
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is clearly a {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:634:5
            </span>
          </span>
          <i>
            function
          </i>
          , not a {" "}
          <i>
            value
          </i>
          .
          So {" "}
          <NoBreak>
            “
            <Math>
              $x^3$
            </Math>
            ”
          </NoBreak>
          {" "} and {" "}
          <NoBreak>
            “
            <Math>
              $x \ra x^3$
            </Math>
            ”
          </NoBreak>
          {" "} are very (VERY)
          different, qualitatively speaking.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            But including the arrow everywhere is
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:638:5
            </span>
          </span>
          {" "}
          {" "}
          impractical and even pedantic, so, in the end,
          you might see us refer to an expression such as
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^3 + x^2
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            as a “function”, arrow or no arrow.
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:646:5
            </span>
          </span>
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 10 && <>
      <Pause />
      <Section id="section-12">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Polynomials.
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:651:6
              </span>
            </span>
          </b>
          {" "}
          A function {" "}
          <Math>
            $f$
          </Math>
          {" "} of the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f(x) = a_kx^k + a_&#123;k-1&#125;x^&#123;k-1&#125; + \dots + a_2x^2 + a_1x + a_0
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is called a {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:658:5
            </span>
          </span>
          <i>
            polynomial
          </i>
          . Here
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          a_0,\,a_1,\, \ldots,\, a_k \in \rr
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            are arbitrary constants, also known as the
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:664:5
            </span>
          </span>
          {" "}
          {" "}
          {" "}{" "}
          <i>
            coefficients
          </i>
          {" "} of the polynomial. The {" "}
          <i>
            degree
          </i>
          {" "}
          of the polynomial is {" "}
          <NoBreak>
            <Math>
              $k$
            </Math>
            ,
          </NoBreak>
          {" "} if {" "}
          <NoBreak>
            <Math>
              $a_k \ne 0$
            </Math>
            .
          </NoBreak>
          {" "}
          (Otherwise, work your way down until you find
          a nonzero coefficient—if there are none, because
          the polynomial is just the constant {" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            ,
          </NoBreak>
          {" "} then
          the degree is {" "}
          <i>
            minus infinity
          </i>
          .) (We're not
          kidding.)
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            For example,
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:673:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          2x + \sqrt&#123;2&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a polynomial of degree 1, and
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:679:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^2 - 10
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a polynomial of degree 2, and
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:685:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^&#123;100&#125; + x^&#123;99&#125; + x^&#123;98&#125; + \dots + x^4 + x^3 + x^2 + x + 1
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a polynomial of degree 100.
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:691:5
            </span>
          </span>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            Polynomials of low degree have special names:
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:693:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock id="_34_h.a.i_">
          $$
          \begin&#123;array&#125;&#123;c|c|c&#125;
          \,\,\,\,\te&#123;degree&#125;\,\,\,\, &amp; \te&#123;name&#125; &amp; \,\,\,\,\te&#123;example&#125;\,\,\,\,\Rule&#123;0pt&#125;&#123;0.8em&#125;&#123;0.5em&#125; \\ \hline
          -\infty &amp; \te&#123;zero&#125; &amp; 0\Rule&#123;0pt&#125;&#123;1.1em&#125;&#123;0.0em&#125;\\
          \te&#123;0&#125; &amp; \te&#123;constant&#125; &amp; 1 + \sqrt&#123;5&#125;\\
          \te&#123;1&#125; &amp; \te&#123;affine&#125; &amp; 10x - 1\\
          \te&#123;2&#125; &amp; \,\,\,\,\te&#123;quadratic&#125;\,\,\,\, &amp; x^2 - 1\\
          \te&#123;3&#125; &amp; \te&#123;cubic&#125; &amp; x^3 - 1\\
          \te&#123;4&#125; &amp; \te&#123;quartic&#125; &amp; 1 - x^4\\
          \te&#123;5&#125; &amp; \te&#123;quintic&#125; &amp; x^5
          \end&#123;array&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            There is some confusion about the term
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:710:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            affine
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:712:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for which the term
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:714:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            linear
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:716:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is sometimes substituted. But if we say
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:718:5
            </span>
          </span>
          {" "}
          {" "}
          “linear” we mean a function of the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x \ra a_1x
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for a constant {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:725:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $a_1 \in \rr$
            </Math>
            .
          </NoBreak>
          {" "} This is more
          restricted than an affine function, because
          there is no constant {" "}
          <NoBreak>
            <Math>
              $a_0$
            </Math>
            !
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          style="margin-top:-0.6em;margin-bottom:-0.4em"
          src="/build-img/svgo-svg/wfGL.svg"
          local_url="./images/svg_ch3_ch_affine_linear_cloud.svg"
          intrinsicWidth={500}
          intrinsicHeight={405}
        />
      </Section>
    </>}
    {visibleRestSections() > 11 && <>
      <Pause />
      <Section id="section-13">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Quadratic, linear, and constant terms.
              <span class="t-3003">
                ./src/content/ch3/ch3.wly:735:6
              </span>
            </span>
          </b>
          {" "}
          To finish up on polynomials: the terms of degree
          {" "}
          <NoBreak>
            <Math>
              $2$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $1$
          </Math>
          {" "} and {" "}
          <Math>
            $0$
          </Math>
          {" "} are called the {" "}
          <i>
            quadratic
          </i>
          ,
          {" "}
          <i>
            linear
          </i>
          , and {" "}
          <i>
            constant
          </i>
          {" "} terms of the
          polynomial, respectively. If you see
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          a_7x^7 + a_6x^6 + a_5x^5 + a_4x^4 + a_3x^3 - a_2x^2 + a_1x + a_0
          $$
          <ImageRight
            src="/build-img/svgo-svg/RUvM.svg"
            atLeastAsWide={true}
            local_url="./images/svg_ch3_ch_quadratic_linear_constant_cloud.svg"
            intrinsicWidth={700}
            intrinsicHeight={200}
          />
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            then the quadratic term is {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:748:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $-a_2x^2$
            </Math>
            ,
          </NoBreak>
          {" "} not
          {" "}
          <NoBreak>
            <Math>
              $a_2x^2$
            </Math>
            ,
          </NoBreak>
          {" "} fyi.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            Note that the linear term can also be viewed as
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:751:5
            </span>
          </span>
          {" "}
          {" "}
          the {" "}
          <NoBreak>
            “
            <Math>
              $x^1$
            </Math>
          </NoBreak>
          {" "} term” while the constant term can
          also be viewed as the {" "}
          <NoBreak>
            “
            <Math>
              $x^0$
            </Math>
          </NoBreak>
          {" "} term”; because
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^1 = x
          $$
          <ImageRight
            src="/build-img/svgo-svg/cqgI.svg"
            offsetY="0.2em"
            offsetX=" -0.1em"
            atLeastAsWide={true}
            local_url="./images/svg_ch3_ch_a1_x1_cloud.svg"
            intrinsicWidth={700}
            intrinsicHeight={200}
          />
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for all {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:764:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $x$
            </Math>
            ,
          </NoBreak>
          {" "} and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^0 = 1
          $$
          <ImageRight
            src="/build-img/svgo-svg/Aq5Q.svg"
            offsetX="0em"
            offsetY="0.2em"
            atLeastAsWide={true}
            local_url="./images/svg_ch3_ch_a0_x0_cloud.svg"
            intrinsicWidth={700}
            intrinsicHeight={200}
          />
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for all {" "}
            <span class="t-3003">
              ./src/content/ch3/ch3.wly:775:5
            </span>
          </span>
          <Math>
            $x$
          </Math>
          {" "} (even {" "}
          <NoBreak>
            <Math>
              $x = 0$
            </Math>
            ),
          </NoBreak>
          {" "} namely.
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 12 && <>
      <Pause />
      <Exercises
        at_end_of_page={true}
        mode="dual"
        show_curlicue={true}
        id="_56_h.a.i_"
      >
        <Exercise number={1}>
          <ExerciseStatement id="_35_h.a.i_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                How can you define the absolute value
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_define_abs_val_by_cases_.wly:3:5
                </span>
              </span>
              {" "}
              {" "}
              function using “definition by cases”?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The absolute value function is
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_define_abs_val_by_cases_.wly:8:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra \begin&#123;cases&#125; x &amp; \te&#123;if $x \geq 0$,&#125;\\ -x\!\!\up&#123;1.2&#125; &amp; \te&#123;if $x &lt; 0$&#125;\end&#123;cases&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                because {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_define_abs_val_by_cases_.wly:14:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $-(-1) = 1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $-(-5) = 5$
                </Math>
                ,
              </NoBreak>
              {" "} etc.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={2}>
          <ExerciseStatement id="_36_h.a.i_">
            <OuterP>
              <b>
                Exercise 2.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                How can you define the absolute value
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_define_abs_val_by_algebraic_formula_.wly:3:5
                </span>
              </span>
              {" "}
              {" "}
              function using an “ordinary” algebraic formula?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <MathBlock>
              $$
              |x| = \sqrt&#123;x^2&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                because {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_define_abs_val_by_algebraic_formula_.wly:12:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\sqrt&#123;(-1)^2&#125; = 1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $\sqrt&#123;(-5)^2&#125; = 5$
                </Math>
                ,
              </NoBreak>
              {" "}
              etc.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Note 1.
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_define_abs_val_by_algebraic_formula_.wly:17:10
                  </span>
                </span>
              </i>
              {" "}
              This definition is less ad-hoc than it might seem,
              being a 1-dimensional form of the Pythagorean
              theorem.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={3}>
          <ExerciseStatement id="_37_h.a.i_">
            <OuterP>
              <b>
                Exercise 3.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Evaluate:
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_evaluate_lambda_functions_.wly:4:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <Grid
              cols={2}
              placeItems="start"
              withPadding={false}
              columnFirst={true}
            >
              <Item>
                <span class="t-3003-c">
                  i. {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_evaluate_lambda_functions_.wly:12:9
                  </span>
                </span>
                <Math>
                  $(\lambda u.u^3)(0.5)$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  ii. {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_evaluate_lambda_functions_.wly:14:9
                  </span>
                </span>
                <Math>
                  $(u \ra u^2)(x + 1)$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  iii. {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_evaluate_lambda_functions_.wly:16:9
                  </span>
                </span>
                <Math>
                  $(\lambda t.t - 1)(100) \cdot (\lambda t.t + 1)(100)$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  iv. {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_evaluate_lambda_functions_.wly:18:9
                  </span>
                </span>
                <Math>
                  $(u \ra u^2)(a + b)$
                </Math>
              </Item>
            </Grid>
          </ExerciseStatement>
          <Solution>
            <Grid
              cols={2}
              placeItems="start"
              withPadding={false}
              columnFirst={true}
            >
              <Item>
                <span class="t-3003-c">
                  i. {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_evaluate_lambda_functions_.wly:29:13
                  </span>
                </span>
                <Math>
                  $0.5^3 = 0.125$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  ii. {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_evaluate_lambda_functions_.wly:31:13
                  </span>
                </span>
                <Math>
                  $(x + 1)^2 = x^2 + 2x + 1$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  iii. {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_evaluate_lambda_functions_.wly:33:13
                  </span>
                </span>
                <Math>
                  $(100 - 1) \cdot (100 + 1) = 9999$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  iv. {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_evaluate_lambda_functions_.wly:35:13
                  </span>
                </span>
                <Math>
                  $(a + b)^2 = a^2 + 2ab + b^2$
                </Math>
              </Item>
            </Grid>
          </Solution>
        </Exercise>
        <Exercise number={4}>
          <ExerciseStatement id="_38_h.a.i_">
            <OuterP>
              <b>
                Exercise 4.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                The {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_floor_introduction_.wly:4:5
                </span>
              </span>
              <i>
                floor
              </i>
              {" "} of a real number {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                ,
              </NoBreak>
              {" "} written
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \lfloor x \rfloor,
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is the greatest integer less than or equal
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_floor_introduction_.wly:10:5
                </span>
              </span>
              {" "}
              {" "}
              to {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                .
              </NoBreak>
              {" "} (Start at {" "}
              <Math>
                $x$
              </Math>
              {" "} and travel left on the
              number line until you meet an integer; but if
              {" "}
              <Math>
                $x$
              </Math>
              {" "} is already an integer, stay there; the
              place you land is {" "}
              <NoBreak>
                <Math>
                  $\lfloor x \rfloor$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Sketch the graph {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_floor_introduction_.wly:16:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $y = \floor&#123;x&#125;$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Secondly, find a formula for a function whose
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_floor_introduction_.wly:18:5
                </span>
              </span>
              {" "}
              {" "}
              graph looks like this, using {" "}
              <NoBreak>
                “
                <Math>
                  $\floor&#123;x&#125;$
                </Math>
                ”:
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/DEja.svg"
              local_url="./images/svg_ch3_ex_factory_roof_graph.svg"
              intrinsicWidth={580}
              intrinsicHeight="248.057"
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                As {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_floor_introduction_.wly:26:9
                </span>
              </span>
              <Math>
                $x$
              </Math>
              {" "} grows, so does {" "}
              <NoBreak>
                <Math>
                  $\floor&#123;x&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} but
              {" "}
              <Math>
                $\floor&#123;x&#125;$
              </Math>
              {" "} only “levels up” each time that {" "}
              <Math>
                $x$
              </Math>
              {" "}
              reaches a new integer, and flatlines
              otherwise; this gives the
              staircase-shaped graph:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Ymia.svg"
              local_url="./images/svg_ch3_ex_factory_roof_floor_graph.svg"
              intrinsicWidth={580}
              intrinsicHeight="582.018"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (For example, {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_floor_introduction_.wly:35:9
                </span>
              </span>
              <Math>
                $\floor&#123;1&#125; = 1$
              </Math>
              {" "} because the
              greatest integer less than or equal to {" "}
              <Math>
                $1$
              </Math>
              {" "}
              is {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\floor&#123;-0.5&#125; = -1$
              </Math>
              {" "} because the greatest
              integer less than or equal to {" "}
              <Math>
                $-0.5$
              </Math>
              {" "} is {" "}
              <NoBreak>
                <Math>
                  $-1$
                </Math>
                ,
              </NoBreak>
              {" "}
              and so on.)
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                For the second part note that the following
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_floor_introduction_.wly:41:9
                </span>
              </span>
              {" "}
              {" "}
              two displacements, excerpted from the “factory
              roof” graph in the statement, are equal:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Mfbc.svg"
              local_url="./images/svg_ch3_ex_factory_roof_with_displacement_arrows.svg"
              intrinsicWidth={450}
              intrinsicHeight="246.087"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The red dot to the left of {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_floor_introduction_.wly:48:9
                </span>
              </span>
              <Math>
                $x$
              </Math>
              {" "} has {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}
              {" "}
              <NoBreak>
                <Math>
                  $\floor&#123;x&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} so the horizontal displacement is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x - \floor&#123;x&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                so the equation of the graph is
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_floor_introduction_.wly:53:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = x - \floor&#123;x&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                because the {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_floor_introduction_.wly:57:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinate
              </NoBreak>
              {" "} {" "}
              <i>
                is
              </i>
              {" "} the vertical displacement
              from {" "}
              <NoBreak>
                <Math>
                  $y = 0$
                </Math>
                ,
              </NoBreak>
              {" "} equal to the horizontal displacement.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={5}>
          <ExerciseStatement id="_39_h.a.i_">
            <OuterP>
              <b>
                Exercise 5.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Find the formula for a function whose graph
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              looks like this, again using the floor function
              {" "}
              <NoBreak>
                ‘
                <Math>
                  $\lfloor \cdot \rfloor$
                </Math>
                ’
              </NoBreak>
              {" "} as a building block:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/9u3r.svg"
              local_url="./images/svg_ch3_ex_factory_roof_stretched.svg"
              intrinsicWidth={680}
              intrinsicHeight="236.662"
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Consider this two-step process (divide the
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:13:9
                </span>
              </span>
              {" "}
              {" "}
              input by {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                ,
              </NoBreak>
              {" "} apply the function from {" "}
              <InChapterLink
                href="#_38_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 4
              </InChapterLink>
              &#8288;):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Kgso.svg"
              local_url="./images/svg_ch3_ex_factory_roof_stretched_solution.svg"
              intrinsicWidth={680}
              intrinsicHeight={720}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Indeed, the two graphs differ
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:20:9
                </span>
              </span>
              {" "}
              {" "}
              only by a horizontal dilation; dividing the
              input by {" "}
              <Math>
                $2$
              </Math>
              {" "} “undoes” the dilation, at which
              point it suffices to apply the function pictured
              in the second graph. The answer is...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;x/2 - \lfloor x/2 \rfloor&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...as obtained by substituting {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:28:9
                </span>
              </span>
              <NoBreak>
                “
                <Math>
                  $x/2$
                </Math>
                ”
              </NoBreak>
              {" "} (the halved
              input) for {" "}
              <NoBreak>
                “
                <Math>
                  $x$
                </Math>
                ”
              </NoBreak>
              {" "} in {" "}
              <NoBreak>
                “
                <Math>
                  $\,x - \lfloor x \rfloor$
                </Math>
                ”
              </NoBreak>
              {" "}
              (the formula for the function from {" "}
              <InChapterLink
                href="#_38_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 4
              </InChapterLink>
              &#8288;).
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  One can check the answer by typing “x/2 - floor(x/2)”
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:33:13
                  </span>
                </span>
                {" "}
                {" "}
                in DESMOS. Viz:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/jpg/pc6h.jpg"
                width="1400px"
                local_url="./images/png_ch3_desmos_composition_0_c.jpg"
                intrinsicWidth={3840}
                intrinsicHeight={2022}
              />
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  Alternately, enter “f(x) = x - floor(x)” and
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:41:13
                  </span>
                </span>
                {" "}
                {" "}
                then “f(x/2)”:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/jpg/FUw3.jpg"
                width="1400px"
                local_url="./images/png_ch3_desmos_composition_1_c.jpg"
                intrinsicWidth={3840}
                intrinsicHeight={2022}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  Or:
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:48:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <Image
                src="/build-img/jpg/Gowo.jpg"
                width="1400px"
                local_url="./images/png_ch3_desmos_composition_2_b.jpg"
                intrinsicWidth={3840}
                intrinsicHeight={2022}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  The above features the
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:54:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  composition
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:56:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  of functions {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:58:13
                  </span>
                </span>
                <Math>
                  $f$
                </Math>
                {" "} and {" "}
                <NoBreak>
                  <Math>
                    $g$
                  </Math>
                  ;
                </NoBreak>
                {" "} in more detail, if we
                switch the “input tube” and “output tube” sides of
                a function...
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/TgEh.svg"
                local_url="./images/svg_ch3_f_box_inverted.svg"
                intrinsicWidth={380}
                intrinsicHeight="194.762"
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...(compared to the drawing at the top of the
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:65:13
                  </span>
                </span>
                {" "}
                {" "}
                chapter), then the composition of
                {" "}
                <Math>
                  $f$
                </Math>
                {" "} and {" "}
                <NoBreak>
                  <Math>
                    $g$
                  </Math>
                  ,
                </NoBreak>
                {" "} written
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \f \circ g
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  and read
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:73:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <NoBreak>
                  <span class="t-3003-c">
                    “
                    <span class="t-3003">
                      ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:75:15
                    </span>
                  </span>
                  <Math>
                    $f$
                  </Math>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} of {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:75:19
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $\hlfbk&#123;&#125;g$
                  </Math>
                  <span class="t-3003-c">
                    ”
                    <span class="t-3003">
                      ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:75:34
                    </span>
                  </span>
                </NoBreak>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  is the function obtained by
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:81:13
                  </span>
                </span>
                {" "}
                {" "}
                gluing {" "}
                <NoBreak>
                  <Math>
                    $g$
                  </Math>
                  's
                </NoBreak>
                {" "} box to the right of {" "}
                <NoBreak>
                  <Math>
                    $\f$
                  </Math>
                  's
                </NoBreak>
                {" "} box, like so:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/FwQo.svg"
                local_url="./images/svg_ch3_ex_f_box_g_box.svg"
                intrinsicWidth={470}
                intrinsicHeight={180}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  In other words, {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:87:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $g$
                  </Math>
                  's
                </NoBreak>
                {" "} output is passed on to {" "}
                <Math>
                  $f$
                </Math>
                {" "}
                for further processing. (A certain movie called
                “The Human Centipede” comes to mind.)
              </OuterP>
              <OuterP class="indent-10">
                <span class="t-3003-c">
                  (To be perfectly clear,
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:91:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/5UVl.svg"
                local_url="./images/svg_ch3_ex_f_circle_g_equals.svg"
                intrinsicWidth={640}
                intrinsicHeight="120.492"
              />
              <Pause />
              <OuterP>
                <Math>
                  $f \circ g$
                </Math>
                <span class="t-3003-c">
                  {" "} is a {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:96:24
                  </span>
                </span>
                <i>
                  function
                </i>
                , defined as the
                above assemblage of {" "}
                <NoBreak>
                  “
                  <Math>
                    $g$
                  </Math>
                </NoBreak>
                {" "} first, {" "}
                <Math>
                  $f$
                </Math>
                {" "} second”.)
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 3.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  Formally,
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:100:13
                  </span>
                </span>
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  &#123;(f \circ g)(x) = f(g(x))&#125;
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </Boxed>
              <OuterP>
                <span class="t-3003-c">
                  or as
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:107:13
                  </span>
                </span>
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  f \circ g = (x \ra f(g(x)))
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </Boxed>
              <OuterP>
                <span class="t-3003-c">
                  with domain
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:114:13
                  </span>
                </span>
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  &#123;\dom f \circ g = \&#123;x\, \in\, \dom g:\, g(x)\, \in\, \dom f\&#125;&#125;
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </Boxed>
              <OuterP>
                <span class="t-3003-c">
                  which is to say that the domain of {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:121:13
                  </span>
                </span>
                <Math>
                  $f \circ g$
                </Math>
                {" "}
                consists of all {" "}
                <Math>
                  $x$
                </Math>
                {" "} such that: {" "}
                <b>
                  (i)
                </b>
                {" "} {" "}
                <Math>
                  $g(x)$
                </Math>
                {" "}
                exists (a.k.a, {" "}
                <NoBreak>
                  “
                  <Math>
                    $x \in \dom g$
                  </Math>
                  ”)
                </NoBreak>
                {" "} and,
                {" "}
                <b>
                  (ii)
                </b>
                {" "} {" "}
                <Math>
                  $f(g(x))$
                </Math>
                {" "} exists (a.k.a., {" "}
                <NoBreak>
                  “
                  <Math>
                    $g(x) \in \dom f$
                  </Math>
                  ”).
                </NoBreak>
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 4.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  Amusingly—or not—both sides of the afore-mentioned
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:127:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplay>
                <NoBreak>
                  <span class="t-3003-c">
                    “
                    <span class="t-3003">
                      ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:129:15
                    </span>
                  </span>
                  <Math>
                    $(f \circ g)(x) = f(g(x))$
                  </Math>
                  <span class="t-3003-c">
                    ”
                    <span class="t-3003">
                      ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:129:42
                    </span>
                  </span>
                </NoBreak>
              </CentralDisplay>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  are read
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:131:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplay>
                <NoBreak>
                  <span class="t-3003-c">
                    “
                    <span class="t-3003">
                      ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:133:15
                    </span>
                  </span>
                  <Math>
                    $f$
                  </Math>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} of {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:133:19
                  </span>
                </span>
                <Math>
                  $\hlfbk&#123;&#125;g$
                </Math>
                <span class="t-3003-c">
                  {" "} of {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:133:34
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $x\hspace&#123;0.1em&#125;$
                  </Math>
                  <span class="t-3003-c">
                    ”
                    <span class="t-3003">
                      ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:133:55
                    </span>
                  </span>
                </NoBreak>
              </CentralDisplay>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  since {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_factory_roof_functions_1_.wly:135:13
                  </span>
                </span>
                <NoBreak>
                  “
                  <Math>
                    $f \circ g$
                  </Math>
                  ”
                </NoBreak>
                {" "} is read {" "}
                <NoBreak>
                  “
                  <Math>
                    $f$
                  </Math>
                </NoBreak>
                {" "} of {" "}
                <NoBreak>
                  <Math>
                    $g\rt&#123;0.1&#125;$
                  </Math>
                  ”,
                </NoBreak>
                {" "}
                and {" "}
                <NoBreak>
                  “
                  <Math>
                    $f(\dots)$
                  </Math>
                  ”
                </NoBreak>
                {" "} is read {" "}
                <NoBreak>
                  “
                  <Math>
                    $f$
                  </Math>
                </NoBreak>
                {" "} of ...”.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={6}>
          <ExerciseStatement id="_40_h.a.i_">
            <OuterP>
              <b>
                Exercise 6.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Find formulas for functions whose graphs look
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_factory_roof_functions_2_.wly:3:5
                </span>
              </span>
              {" "}
              {" "}
              like these:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/e9Dt.svg"
              local_url="./images/svg_ch3_ex_three_factories.svg"
              intrinsicWidth={620}
              intrinsicHeight="826.662"
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                For the first graph, {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_factory_roof_functions_2_.wly:11:9
                </span>
              </span>
              <del>
                the
              </del>
              {" "} an answer is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              2 \cdot(x/2 - \fl&#123;x/2&#125;)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which simplifies to
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_factory_roof_functions_2_.wly:18:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x - 2\fl&#123;x/2&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                because we multiply
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_factory_roof_functions_2_.wly:22:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <InChapterLink
                href="#_39_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 5
              </InChapterLink>
              &#8288;'s formula by {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                For the second graph, an answer is
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_factory_roof_functions_2_.wly:25:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x/3 - \fl&#123;x/3&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                because the problem is similar to {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_factory_roof_functions_2_.wly:29:9
                </span>
              </span>
              <InChapterLink
                href="#_39_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 5
              </InChapterLink>
              {" "}
              except with a factor {" "}
              <Math>
                $3$
              </Math>
              {" "} horizontal dilation.
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                For the third graph, first find a formula for this function:
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_factory_roof_functions_2_.wly:32:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/E5ox.svg"
              local_url="./images/svg_ch3_ex_three_factories_sol1.svg"
              intrinsicWidth={620}
              intrinsicHeight="236.662"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                And that formula is...
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_factory_roof_functions_2_.wly:37:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/mS6k.svg"
              local_url="./images/svg_ch3_ex_three_factories_sol2.svg"
              intrinsicWidth={620}
              intrinsicHeight="670.662"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...iiiiiiiS...
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_factory_roof_functions_2_.wly:42:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x-1)/3 - \fl&#123;(x-1)/3&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as obtained by substituting {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_factory_roof_functions_2_.wly:46:9
                </span>
              </span>
              <NoBreak>
                “
                <Math>
                  $x - 1$
                </Math>
                ”
              </NoBreak>
              {" "}
              (the input, minus {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                )
              </NoBreak>
              {" "} in place of {" "}
              <NoBreak>
                “
                <Math>
                  $x$
                </Math>
                ”
              </NoBreak>
              {" "} in
              {" "}
              <NoBreak>
                “
                <Math>
                  $\,x/3 - \fl&#123;x/3&#125;$
                </Math>
                ”,
              </NoBreak>
              {" "} the formula for the
              second graph. Then we multiply that by {" "}
              <Math>
                $3$
              </Math>
              {" "}
              (to go from {" "}
              <NoBreak>
                “
                <InlineImage
                  src="/build-img/svgo-svg/X25H.svg"
                  width="0.9em"
                  bottom="0.15em"
                  intrinsicWidth={24}
                  intrinsicHeight={24}
                />
                ” {" "}
              </NoBreak>
              to {" "}
              <NoBreak>
                “
                <InlineImage
                  src="/build-img/svgo-svg/7n38.svg"
                  width="0.9em"
                  bottom="0.15em"
                  intrinsicWidth={24}
                  intrinsicHeight={24}
                />
                ”,
              </NoBreak>
              {" "} namely), meaning that the final answer is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              3 \cdot ((x-1)/3 - \fl&#123;(x-1)/3&#125;)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                or
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_factory_roof_functions_2_.wly:70:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x - 1) - 3\fl&#123;(x-1)/3&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                after simplification. (Or just
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_factory_roof_functions_2_.wly:74:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x - 1 - 3\fl&#123;(x-1)/3&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                though we personally prefer the previous
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_factory_roof_functions_2_.wly:78:9
                </span>
              </span>
              {" "}
              {" "}
              form, it being more “talkative”.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise
          ref="rence"
          number={7}
        >
          <ExerciseStatement id="_41_h.a.i_">
            <OuterP>
              <b>
                Exercise 7.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                If
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_cosine_of_1000x_.wly:5:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos \dblcol \rr \ra \rr
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (the “hollow dot colon” means that {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_cosine_of_1000x_.wly:9:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\dom \cos = \rr$
                </Math>
                )
              </NoBreak>
              {" "}
              is a function whose graph looks like so...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/PlXB.svg"
              local_url="./images/svg_ch3_cosine.svg"
              intrinsicWidth="1044.726"
              intrinsicHeight="173.523"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...then does the function...
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_cosine_of_1000x_.wly:15:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;x \ra \cos(1000x)&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...have a graph that looks like a bunch of very tight
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_cosine_of_1000x_.wly:19:5
                </span>
              </span>
              {" "}
              {" "}
              bumps, or, instead, very flat {" "}
              <i>
                &amp;
              </i>
              {" "} spaced-out bumps??
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Consider how to “read off” a value of {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_cosine_of_1000x_.wly:24:9
                </span>
              </span>
              <Math>
                $y = \cos(1000x)$
              </Math>
              {" "}
              from the graph {" "}
              <NoBreak>
                <Math>
                  $y = \cos(x)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/u0Dn.svg"
              local_url="./images/svg_ch3_ex_cosine_1000x.svg"
              intrinsicWidth="1043.52"
              intrinsicHeight="490.519"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                By the first step, a
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_cosine_of_1000x_.wly:30:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                horizontal dilation by a factor 1000
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_cosine_of_1000x_.wly:32:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                maps the first graph onto the second graph—i.e.,
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_cosine_of_1000x_.wly:34:9
                </span>
              </span>
              {" "}
              {" "}
              a point
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x, y)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is on the first graph if and only if the dilated
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_cosine_of_1000x_.wly:39:9
                </span>
              </span>
              {" "}
              {" "}
              point
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (1000x, y)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is on the second graph. The first graph is
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_cosine_of_1000x_.wly:44:9
                </span>
              </span>
              {" "}
              {" "}
              therefore some very compressed thing, full of
              scrunched bumps!
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  One can also reason that a small change in {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_cosine_of_1000x_.wly:49:13
                  </span>
                </span>
                <Math>
                  $x$
                </Math>
                {" "}
                results in a large change in {" "}
                <NoBreak>
                  <Math>
                    $1000x$
                  </Math>
                  ,
                </NoBreak>
                {" "} so that
                {" "}
                <Math>
                  $\cos(1000x)$
                </Math>
                {" "} must “cycle” much faster through
                values than {" "}
                <Math>
                  $\cos(x)$
                </Math>
                {" "} does.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={8}>
          <ExerciseStatement id="_42_h.a.i_">
            <OuterP>
              <b>
                Exercise 8.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Rewrite
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_composition_order_1_.wly:4:5
                </span>
              </span>
            </OuterP>
            <div style="font-size:1.1em;margin:1em 0em;">
              <TextParent>
                <MathBlock>
                  $$
                  (f \circ (g \circ h))(x)\tag&#123;A&#125;
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </TextParent>
            </div>
            <OuterP>
              <span class="t-3003-c">
                without using {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_composition_order_1_.wly:13:5
                </span>
              </span>
              <NoBreak>
                “
                <Math>
                  $\circ$
                </Math>
                ”,
              </NoBreak>
              {" "} using only the
              “definitional equation of function
              composition”, namely
            </OuterP>
            <div style="font-size:1.1em;margin:1em 0em;">
              <TextParent>
                <MathBlock>
                  $$
                  (r \circ s)(x) = r(s(x))\tag&#123;AA&#125;
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </TextParent>
            </div>
            <OuterP>
              <span class="t-3003-c">
                (where {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_composition_order_1_.wly:24:5
                </span>
              </span>
              <Math>
                $r$
              </Math>
              {" "} and {" "}
              <Math>
                $s$
              </Math>
              {" "} are functions); plz
              note that you will have to apply (AA)
              {" "}
              <i>
                twice
              </i>
              , as each application of (AA)
              makes {" "}
              <i>
                one
              </i>
              {" "} copy of the symbol {" "}
              <NoBreak>
                “
                <Math>
                  $\circ$
                </Math>
                ”
              </NoBreak>
              {" "}
              disappear, and (A) contains {" "}
              <i>
                two
              </i>
              {" "} copies of
              {" "}
              <NoBreak>
                “
                <Math>
                  $\circ$
                </Math>
                ”!!
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Setting {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_composition_order_1_.wly:33:9
                </span>
              </span>
              <NoBreak>
                “
                <Math>
                  $r$
                </Math>
                ”
              </NoBreak>
              {" "} to {" "}
              <NoBreak>
                “
                <Math>
                  $f$
                </Math>
                ”
              </NoBreak>
              {" "} and {" "}
              <NoBreak>
                “
                <Math>
                  $s$
                </Math>
                ”
              </NoBreak>
              {" "} to {" "}
              <NoBreak>
                “
                <Math>
                  $(g \circ h)$
                </Math>
                ”
              </NoBreak>
              {" "}
              in (AA) yields
              <ImageLeft
                src="/build-img/svgo-svg/o1Hy.svg"
                line={1}
                offsetX="1em"
                local_url="./images/svg_ch3_r_s_substitution_1_1.1em_cloud.svg"
                intrinsicWidth={400}
                intrinsicHeight={200}
              />
            </OuterP>
            <div style="font-size:1.1em;margin:0.8em 0em;">
              <MathBlock>
                $$
                (f \circ (g \circ h))(x) = \f((g \circ h)(x))
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </div>
            <OuterP>
              <span class="t-3003-c">
                ...progress: only one copy of {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_composition_order_1_.wly:48:9
                </span>
              </span>
              <NoBreak>
                “
                <Math>
                  $\circ$
                </Math>
                ”
              </NoBreak>
              {" "}
              remains on the right-hand side! But
            </OuterP>
            <div style="font-size:1.1em;margin:0.8em 0em;">
              <MathBlock>
                $$
                (g \circ h)(x) = g(h(x))
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </div>
            <OuterP>
              <span class="t-3003-c">
                by the “definitional equation” again, so
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_composition_order_1_.wly:58:9
                </span>
              </span>
            </OuterP>
            <div style="font-size:1.1em;margin:0.8em 0em;">
              <MathBlock>
                $$
                f((g \circ h)(x)) = \f(g(h(x)))
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </div>
            <OuterP>
              <span class="t-3003-c">
                ...and this completes the computation!
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_composition_order_1_.wly:67:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  We can collect both steps into one string of equalities:
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_1_.wly:70:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/yd6x.svg"
                local_url="./images/svg_first_victim_second_victim_1_1em.svg"
                intrinsicWidth={450}
                intrinsicHeight={105}
              />
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={9}>
          <ExerciseStatement id="_44_h.a.i_">
            <OuterP>
              <b>
                Exercise 9.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Same question as {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:4:5
                </span>
              </span>
              <InChapterLink
                href="#_42_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 8
              </InChapterLink>
              &#8288;, but for
              {" "}
              <NoBreak>
                “
                <Math>
                  $(f \circ g) \circ h$
                </Math>
                ”
              </NoBreak>
              {" "} instead of
              {" "}
              <NoBreak>
                “
                <Math>
                  $f \circ (g \circ h)$
                </Math>
                ”.
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                We again evaluate the “outer” composition operator
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:10:9
                </span>
              </span>
              {" "}
              {" "}
              first, then the “inner” one. The outer operator
              is fewer pairs of parentheses away from the outside world:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/9213.svg"
              local_url="./images/svg_inner_outer_1_1em.svg"
              intrinsicWidth={330}
              intrinsicHeight={105}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                So the first step is...
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:17:9
                </span>
              </span>
            </OuterP>
            <div style="font-size:1.1em;margin:0.8em 0em;">
              <MathBlock>
                $$
                ((f \circ g) \circ h)(x) = (f \circ g)(h(x))
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </div>
            <OuterP>
              <span class="t-3003-c">
                ...by setting {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:26:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $r = f \circ g$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $s = h$
              </Math>
              {" "} in
              the definitional equation, and the second step
              is...
            </OuterP>
            <div style="font-size:1.1em;margin:0.8em 0em;">
              <MathBlock>
                $$
                (f \circ g)(h(x)) = \f(g(h(x)))
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </div>
            <OuterP>
              <span class="t-3003-c">
                ...by setting {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:37:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $r = f$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $s = g$
                </Math>
                ,
              </NoBreak>
              {" "} and with
              {" "}
              <NoBreak>
                ‘
                <Math>
                  $h(x)$
                </Math>
                ’
              </NoBreak>
              {" "} in place of {" "}
              <NoBreak>
                ‘
                <Math>
                  $x$
                </Math>
                ’.
              </NoBreak>
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  The fact that
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:42:13
                  </span>
                </span>
              </OuterP>
              <div style="font-size:1.1em;margin:0.8em 0em;">
                <MathBlock>
                  $$
                  (f \circ (g \circ h))(x)
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </div>
              <OuterP>
                <span class="t-3003-c">
                  and
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:51:13
                  </span>
                </span>
              </OuterP>
              <div style="font-size:1.1em;margin:0.8em 0em;">
                <MathBlock>
                  $$
                  ((f \circ g) \circ h)(x)
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </div>
              <OuterP>
                <span class="t-3003-c">
                  both evaluate to
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:60:13
                  </span>
                </span>
              </OuterP>
              <div style="font-size:1.1em;margin:0.8em 0em;">
                <MathBlock>
                  $$
                  f(g(h(x)))
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </div>
              <OuterP>
                <span class="t-3003-c">
                  implies that
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:69:13
                  </span>
                </span>
              </OuterP>
              <div style="font-size:1.1em;margin:0.8em 0em;">
                <MathBlock>
                  $$
                  f \circ (g \circ h)
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </div>
              <OuterP>
                <span class="t-3003-c">
                  and
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:78:13
                  </span>
                </span>
              </OuterP>
              <div style="font-size:1.1em;margin:0.8em 0em;">
                <MathBlock>
                  $$
                  (f \circ g) \circ h
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </div>
              <OuterP>
                <span class="t-3003-c">
                  are the same function: it maps {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:87:13
                  </span>
                </span>
                <Math>
                  $x$
                </Math>
                {" "} to {" "}
                <Math>
                  $f(g(h(x)))$
                </Math>
                {" "} (or
              </OuterP>
              <div style="font-size:1.1em;margin:0.8em 0em;">
                <MathBlock>
                  $$
                  x \ra f(g(h(x)))
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </div>
              <OuterP>
                <span class="t-3003-c">
                  in lambda notation).
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:96:13
                  </span>
                </span>
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  Because of this, we can write
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:100:13
                  </span>
                </span>
              </OuterP>
              <div style="font-size:1.1em;margin:0.8em 0em;">
                <MathBlock>
                  $$
                  f \circ g \circ h
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </div>
              <OuterP>
                <span class="t-3003-c">
                  without any parentheses. (Either way you parenthesize it you obtain the same
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:109:13
                  </span>
                </span>
                {" "}
                {" "}
                function, so why bother?)
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 3.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  The fact that
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:114:13
                  </span>
                </span>
              </OuterP>
              <div style="font-size:1.1em;margin:0.8em 0em;">
                <MathBlock>
                  $$
                  &#123;(a + b) + c = a + (b + c)&#125;
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </div>
              <OuterP>
                <span class="t-3003-c">
                  for all numbers {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:123:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $a$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $b$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $c$
                </Math>
                {" "} is known as the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  associativity
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:125:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  of addition; likewise, the fact that
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:127:13
                  </span>
                </span>
              </OuterP>
              <div style="font-size:1.1em;margin:0.8em 0em;">
                <MathBlock>
                  $$
                  (ab)c = a(bc)
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </div>
              <OuterP>
                <span class="t-3003-c">
                  for all numbers {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:136:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $a$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $b$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $c$
                </Math>
                {" "} is known as the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  associativity
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:138:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  of multiplication; and again likewise,
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:140:13
                  </span>
                </span>
                {" "}
                {" "}
                the fact that
              </OuterP>
              <div style="font-size:1.1em;margin:0.8em 0em;">
                <MathBlock>
                  $$
                  &#123;(f \circ g) \circ h  =  f \circ (g \circ h)&#125;
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </div>
              <OuterP>
                <span class="t-3003-c">
                  for all functions {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:150:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $f$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $g$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $h$
                </Math>
                {" "} is known
                as the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  associativity
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:153:15
                  </span>
                </span>
                <ImageRight
                  src="/build-img/svgo-svg/Y_jZ.svg"
                  local_url="./images/svg_ch3_ex_associativity_cloud.svg"
                  intrinsicWidth={550}
                  intrinsicHeight={200}
                />
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  of function composition.
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:158:13
                  </span>
                </span>
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 4.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  The associativity of function composition can be explained via this figure:
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:162:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <Image
                width="550px"
                src="/build-img/svgo-svg/ioa4.svg"
                local_url="./images/svg_ch3_truth_be_said.svg"
                intrinsicWidth={800}
                intrinsicHeight={550}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  In the above {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:168:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $A$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $B$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $C$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $D$
                </Math>
                {" "} are sets
                while the arrows encode functions {" "}
                <NoBreak>
                  <Math>
                    $f$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $g$
                </Math>
                {" "}
                and {" "}
                <Math>
                  $h$
                </Math>
                {" "} that, respectively in reverse order,
                go from {" "}
                <Math>
                  $D$
                </Math>
                {" "} to {" "}
                <NoBreak>
                  <Math>
                    $C$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $C$
                </Math>
                {" "} to {" "}
                <NoBreak>
                  <Math>
                    $B$
                  </Math>
                  ,
                </NoBreak>
                {" "} and {" "}
                <Math>
                  $B$
                </Math>
                {" "} to {" "}
                <NoBreak>
                  <Math>
                    $A$
                  </Math>
                  .
                </NoBreak>
                {" "}
                For example,
              </OuterP>
              <Pause />
              <CentralDisplay>
                <Math>
                  $\Large h($
                </Math>
                <InlineImage
                  src="/build-img/svgo-svg/2mo1.svg"
                  width="1rem"
                  top="-3px"
                  intrinsicWidth="6.7"
                  intrinsicHeight="7.5"
                />
                <Math>
                  $\Large&#123;&#125;) =$
                </Math>
                <InlineImage
                  src="/build-img/svgo-svg/5zgu.svg"
                  width="1.25rem"
                  top="-3px"
                  marginLeft=".5rem"
                  marginRight=".5rem"
                  intrinsicWidth="7.4"
                  intrinsicHeight="7.2"
                />
              </CentralDisplay>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  because the arrow that originates at {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:188:13
                  </span>
                </span>
                <InlineImage
                  src="/build-img/svgo-svg/2mo1.svg"
                  width="1rem"
                  top="-4px"
                  intrinsicWidth="6.7"
                  intrinsicHeight="7.5"
                />
                {" "} in set {" "}
                <Math>
                  $D$
                </Math>
                {" "} lands at {" "}
                <InlineImage
                  src="/build-img/svgo-svg/5zgu.svg"
                  width="1.25rem"
                  top="-4px"
                  intrinsicWidth="7.4"
                  intrinsicHeight="7.2"
                />
                {" "} in set {" "}
                <NoBreak>
                  <Math>
                    $C$
                  </Math>
                  ,
                </NoBreak>
                {" "} and
              </OuterP>
              <Pause />
              <CentralDisplay>
                <Math>
                  $\Large g(h($
                </Math>
                <InlineImage
                  src="/build-img/svgo-svg/2mo1.svg"
                  width="1rem"
                  top="-3px"
                  intrinsicWidth="6.7"
                  intrinsicHeight="7.5"
                />
                <Math>
                  $\Large&#123;&#125;)) =$
                </Math>
                <InlineImage
                  src="/build-img/svgo-svg/Ixme.svg"
                  width="2.3rem"
                  top="-4px"
                  marginLeft=".5rem"
                  marginRight=".5rem"
                  intrinsicWidth="8.905"
                  intrinsicHeight="4.1"
                />
              </CentralDisplay>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  because, pursuing that path onwards, the arrow
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:215:13
                  </span>
                </span>
                {" "}
                {" "}
                that originates at {" "}
                <InlineImage
                  src="/build-img/svgo-svg/5zgu.svg"
                  width="1.25rem"
                  top="-4px"
                  intrinsicWidth="7.4"
                  intrinsicHeight="7.2"
                />
                {" "} in set {" "}
                <Math>
                  $C$
                </Math>
                {" "} lands at {" "}
                <InlineImage
                  src="/build-img/svgo-svg/Ixme.svg"
                  width="2.3rem"
                  top="-4px"
                  intrinsicWidth="8.905"
                  intrinsicHeight="4.1"
                />
                {" "} in set {" "}
                <NoBreak>
                  <Math>
                    $B$
                  </Math>
                  ,
                </NoBreak>
                {" "} etc.
              </OuterP>
              <OuterP class="indent-10">
                <span class="t-3003-c">
                  Under this representation one can “compute”
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:228:13
                  </span>
                </span>
                {" "}
                {" "}
                {" "}{" "}
                <Math>
                  $f \circ g \circ h$
                </Math>
                {" "} by gluing arrows end-to-end.
                First, say, obliviate set {" "}
                <Math>
                  $C$
                </Math>
                {" "} in the middle
                right, then do the same with set {" "}
                <Math>
                  $B$
                </Math>
                {" "} in the
                middle left:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/FiSv.svg"
                width="1600px"
                local_url="./images/svg_ch3_truth_be_said_right_first.svg"
                intrinsicWidth="2474.612"
                intrinsicHeight="1272.471"
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  We can also get rid of {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:238:13
                  </span>
                </span>
                <Math>
                  $B$
                </Math>
                {" "} first, {" "}
                <Math>
                  $C$
                </Math>
                {" "} second:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/WdCb.svg"
                width="1600px"
                local_url="./images/svg_ch3_truth_be_said_left_first.svg"
                intrinsicWidth="2474.612"
                intrinsicHeight="1272.471"
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  The first order of computation corresponds
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:244:13
                  </span>
                </span>
                {" "}
                {" "}
                to the parenthetization {" "}
                <NoBreak>
                  “
                  <Math>
                    $f \circ (g \circ h)$
                  </Math>
                  ”
                </NoBreak>
                {" "}
                while the second corresponds to the
                parenthetization {" "}
                <NoBreak>
                  “
                  <Math>
                    $(f \circ g) \circ h$
                  </Math>
                  ”.
                </NoBreak>
                {" "}
                Intuitively, they come out the same
                (in “step 6”, bottom left) because
                each final arrow comes
                from a path-of-arrows in the original
                diagram, and the order in which the
                waypoints along a path are “straightened”
                (or “collapsed”) does not affect the origin
                or destination of the final arrow.
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote id="_43_h.a.i_">
              <OuterP>
                <i>
                  Note 5.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  We have taken for granted that two
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:278:13
                  </span>
                </span>
                {" "}
                {" "}
                functions {" "}
                <Math>
                  $f$
                </Math>
                {" "} and {" "}
                <Math>
                  $g$
                </Math>
                {" "} are “equal” if and only
                if they produce the same output for every
                input but this is actually a subtle thing
                that has to do with how functions are defined
                “under the hood”. Specifically, mathematicians
                view functions as {" "}
                <del>
                  long
                </del>
                {" "} {" "}
                <del>
                  lists of
                </del>
                {" "} sets of ordered pairs; for example—conceptual
                cold water shock ahead—
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;\textrm&#123;VX-11/78A&#125; = \&#123;(0, 3.5), (1, 2.5)\&#125;&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  because VX-11/78A maps {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:297:13
                  </span>
                </span>
                <Math>
                  $0$
                </Math>
                {" "} to {" "}
                <Math>
                  $3.5$
                </Math>
                {" "} and maps
                {" "}
                <Math>
                  $1$
                </Math>
                {" "} to {" "}
                <NoBreak>
                  <Math>
                    $2.5$
                  </Math>
                  .
                </NoBreak>
                {" "} (The presence of an ordered pair
              </OuterP>
              <div style="font-size:1.1em;margin:0.8em 0em;">
                <MathBlock>
                  $$
                  (a, b)
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </div>
              <OuterP>
                <span class="t-3003-c">
                  means that input {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:307:13
                  </span>
                </span>
                <Math>
                  $a$
                </Math>
                {" "} produces output {" "}
                <NoBreak>
                  <Math>
                    $b$
                  </Math>
                  .)
                </NoBreak>
                {" "} So
                two functions are equal if and only if they
                are equal
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  as sets of ordered pairs
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:311:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  because the set of ordered pairs is the
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_composition_order_2_.wly:313:13
                  </span>
                </span>
                {" "}
                {" "}
                underlying “thing” that the function is. In
                particular, there is no notion of a “formula”
                or of a “procedure” being attached to a
                function, that might cause two functions to
                be considered unequal even if they produce the
                same output on every input—producing the same
                output on every input implies that the {" "}
                <del>
                  list of
                </del>
                {" "} set of ordered pairs is equal, and, perforce,
                that the two functions are equal!!
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={10}>
          <ExerciseStatement id="_45_h.a.i_">
            <OuterP>
              <b>
                Exercise 10.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Show that
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_complete_square_1_.wly:4:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x^2 + 10x + 30
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                can be written in the form
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_complete_square_1_.wly:8:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x + \dots)^2 + \,\dots
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for some numbers {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_complete_square_1_.wly:12:5
                </span>
              </span>
              <NoBreak>
                “
                <Math>
                  $\dots$
                </Math>
                ”
              </NoBreak>
              {" "} and {" "}
              <NoBreak>
                “
                <Math>
                  $\dots$
                </Math>
                ”.
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The answer is
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_complete_square_1_.wly:16:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x + 5)^2 + 5
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                because
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_complete_square_1_.wly:20:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              \,\,\,\,(x + 5)^2
              &amp;= x^2 + (2\cdot 5)x + 5^2 \\
              &amp;= \up&#123;1.4&#125; x^2 + 10x + 25
              \end&#123;align*&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and adding {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_complete_square_1_.wly:28:9
                </span>
              </span>
              <Math>
                $5$
              </Math>
              {" "} gives {" "}
              <NoBreak>
                <Math>
                  $x^2 + 10x + 30$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={11}>
          <ExerciseStatement id="_46_h.a.i_">
            <OuterP>
              <b>
                Exercise 11.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Solve {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_complete_square_2_.wly:4:5
                </span>
              </span>
              <InChapterLink
                href="#_45_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 10
              </InChapterLink>
              {" "} using
              algebra {" "}
              <i>
                &amp;
              </i>
              {" "} variables.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Put unknowns {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_complete_square_2_.wly:9:9
                </span>
              </span>
              <NoBreak>
                “
                <Math>
                  $U$
                </Math>
                ”
              </NoBreak>
              {" "} and {" "}
              <NoBreak>
                “
                <Math>
                  $V$
                </Math>
                ”
              </NoBreak>
              {" "} for the two sets of dots. Then
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x + U)^2 + V = x^2 + 10x + 30
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                becomes the equation to satisfy.
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_complete_square_2_.wly:13:9
                </span>
              </span>
              {" "}
              {" "}
              Expanding the left-hand side, we get:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x^2 + 2Ux + U^2 + V = x^2 + 10x + 30.
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                For this equation to hold for all {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_complete_square_2_.wly:18:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x$
                </Math>
                ,
              </NoBreak>
              {" "} corresponding
              coefficients must match on both sides:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              1 = 1
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (equating the coefficients of {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_complete_square_2_.wly:23:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x^2$
                </Math>
                ),
              </NoBreak>
              {" "} and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              2U = 10
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (equating the coefficients of {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_complete_square_2_.wly:27:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x$
                </Math>
                ),
              </NoBreak>
              {" "} and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              U^2 + V = 30
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (equating the constant terms). Only the
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_complete_square_2_.wly:31:9
                </span>
              </span>
              {" "}
              {" "}
              latter two equations contain information.
              In particular,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              2U = 10
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                implies {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_complete_square_2_.wly:37:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $U = 5$
                </Math>
                ,
              </NoBreak>
              {" "} so {" "}
              <Math>
                $U^2 + V = 30$
              </Math>
              {" "} becomes
              {" "}
              <NoBreak>
                <Math>
                  $25 + V = 30$
                </Math>
                ,
              </NoBreak>
              {" "} and
              {" "}
              <NoBreak>
                <Math>
                  $V = 30 - 25 = 5$
                </Math>
                .
              </NoBreak>
              {" "}
              So {" "}
              <NoBreak>
                <Math>
                  $U = V = 5$
                </Math>
                ,
              </NoBreak>
              {" "} as previously found.
              (But now we know that the solution is {" "}
              <i>
                unique
              </i>
              ,
              because {" "}
              <Math>
                $2U = 10$
              </Math>
              {" "} forces {" "}
              <NoBreak>
                <Math>
                  $U = 5$
                </Math>
                ,
              </NoBreak>
              {" "}
              and {" "}
              <Math>
                $25 + V = 30$
              </Math>
              {" "} forces {" "}
              <NoBreak>
                <Math>
                  $V = 5$
                </Math>
                .)
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={12}>
          <ExerciseStatement id="_47_h.a.i_">
            <OuterP>
              <b>
                Exercise 12.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Show that
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_no_solutions_by_complete_square_.wly:4:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x^2 + 10x + 30 = 0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <NoBreak>
                <span class="t-3003-c">
                  (cf
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_no_solutions_by_complete_square_.wly:8:5
                  </span>
                </span>
                <Math>
                  $.$
                </Math>
              </NoBreak>
              {" "} {" "}
              <InChapterLink
                href="#_45_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 10
              </InChapterLink>
              &#8288;) has no solutions {" "}
              <NoBreak>
                <Math>
                  $x \in \rr$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The equation is equivalent to
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_no_solutions_by_complete_square_.wly:12:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x + 5)^2 + 5 = 0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_no_solutions_by_complete_square_.wly:16:9
                </span>
              </span>
              <InChapterLink
                href="#_45_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 10
              </InChapterLink>
              &#8288;, but this implies
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x + 5)^2 = -5
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which has no real solution because the square of a real number
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_no_solutions_by_complete_square_.wly:20:9
                </span>
              </span>
              {" "}
              {" "}
              is nonnegative.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={13}>
          <ExerciseStatement id="_48_h.a.i_">
            <OuterP>
              <b>
                Exercise 13.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Show that
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_two_solutions_by_complete_square_.wly:3:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x^2 + 10x - 30 = 0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                has two solutions {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_two_solutions_by_complete_square_.wly:7:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x \in \rr$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The equation can be written
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_two_solutions_by_complete_square_.wly:11:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x + 5)^2 - 55 = 0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                because {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_two_solutions_by_complete_square_.wly:15:9
                </span>
              </span>
              <Math>
                $(x + 5)^2 = x^2 + 10x + 25$
              </Math>
              {" "}
              and {" "}
              <NoBreak>
                <Math>
                  $25 - 55 = -30$
                </Math>
                .
              </NoBreak>
              {" "} Passing {" "}
              <Math>
                $55$
              </Math>
              {" "} to the
              other side, we find
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x + 5)^2 = 55
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which holds if and only if
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_two_solutions_by_complete_square_.wly:21:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \,x + 5 = \pm\sqrt&#123;55&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                or
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_two_solutions_by_complete_square_.wly:25:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \,x = -5 \pm\sqrt&#123;55&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                constituting two distinct solutions.
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_two_solutions_by_complete_square_.wly:29:9
                </span>
              </span>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={14}>
          <ExerciseStatement id="_49_h.a.i_">
            <OuterP>
              <b>
                Exercise 14.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                What sequence of geometric transformations
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              (rotations, translations, scalings, etc)
              maps the curve
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;y = x^2&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                onto
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:10:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;y = Ax^2 + Bx&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for constants {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:14:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $B$
              </Math>
              {" "} such that {" "}
              <NoBreak>
                <Math>
                  $A \ne 0$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Write
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:18:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;Ax^2 + Bx&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:22:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;A\Big(x^2 + &#123;B \over A&#125;x\Big)&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and then write
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:26:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;x^2 + &#123;B \over A&#125;x&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:30:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 \over 4A^2&#125;&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                so that, altogether,
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:34:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;Ax^2 + Bx&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is rewritten
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:38:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;A\left[\Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 \over 4A^2&#125;\right]&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                that can be seen as descending from {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:42:9
                </span>
              </span>
              <Math>
                $y = x^2$
              </Math>
              {" "}
              in three steps:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;y = x^2&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              &#123;\downarrow&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              &#123;y = \,\Big(x + &#123;B \over 2A&#125;\Big)^2&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              &#123;\downarrow&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              &#123;y = \,\Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 \over 4A^2&#125;&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              &#123;\downarrow&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              &#123;y = A\left[\Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 \over 4A^2&#125;\right]&#125;.
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Three steps, three geometric transformations!
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:65:9
                </span>
              </span>
              {" "}
              {" "}
              The third step effects a
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                vertical scaling by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:68:11
                </span>
              </span>
              <Math>
                $A$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                i.e., vertically stretches the graph by
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:70:9
                </span>
              </span>
              {" "}
              {" "}
              a factor {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} because we multiply the
              value of {" "}
              <Math>
                $y$
              </Math>
              {" "} by {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                .
              </NoBreak>
              {" "} The second step
              effects a
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                vertical translation by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:75:11
                </span>
              </span>
              <Math>
                $&#123;-&#123;B^2 \over 4A^2&#125;&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                i.e., lowers the height of the entire
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:77:9
                </span>
              </span>
              {" "}
              {" "}
              graph by {" "}
              <NoBreak>
                <Math>
                  $&#123;B^2 \over 4A^2&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} because we add
              {" "}
              <Math>
                $-&#123;B^2 \over 4A^2&#125;$
              </Math>
              {" "} to the value of {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                .
              </NoBreak>
              {" "}
              The first step, on the other hand, is
              entirely different: it is a
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                preprocessing
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:83:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                step, in that we mess with the input (i.e.,
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:85:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                ),
              </NoBreak>
              {" "} instead of adding on (or “multiplying
              on”) to the current value of {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                More generally, a graph of the form
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:89:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;y = f(x + a)&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (for some constant {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:93:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $a$
                </Math>
                )
              </NoBreak>
              {" "} “fetches” values on
              the graph
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;y = f(x)&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by going {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:98:9
                </span>
              </span>
              <Math>
                $a$
              </Math>
              {" "} units to the right. The larger {" "}
              <Math>
                $a$
              </Math>
              {" "}
              is, thus, the further
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;y = f(x + a)&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                drifts off to the left. For example,
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:103:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;y = f(x + 20)&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                has value {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:107:9
                </span>
              </span>
              <Math>
                $f(0)$
              </Math>
              {" "} at {" "}
              <NoBreak>
                <Math>
                  $x = -20$
                </Math>
                ,
              </NoBreak>
              {" "} and if you replace
              {" "}
              <Math>
                $20$
              </Math>
              {" "} with something larger, that position (i.e.,
              {" "}
              <NoBreak>
                <Math>
                  $x = -20$
                </Math>
                )
              </NoBreak>
              {" "} drifts even further off to the left!
              In any case, the graph {" "}
              <Math>
                $y = f(x + a)$
              </Math>
              {" "} is the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                leftward
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:112:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                translate by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:114:9
                </span>
              </span>
              <Math>
                $a$
              </Math>
              {" "} units of {" "}
              <NoBreak>
                <Math>
                  $y = f(x)$
                </Math>
                ,
              </NoBreak>
              {" "}
              so the first step effects a
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                leftward translation by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:117:11
                </span>
              </span>
              <Math>
                $&#123;B\over 2A&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of the curve {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:119:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $y = x^2$
                </Math>
                ,
              </NoBreak>
              {" "} or
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                horizontal translation by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:121:11
                </span>
              </span>
              <Math>
                $-&#123;B\over 2A&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                more elegantly put. (The second formulation
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:123:9
                </span>
              </span>
              {" "}
              {" "}
              doesn't assume a particular orientation of the
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -axis,
              </NoBreak>
              {" "} that's why it's “more elegantly put”,
              in our opinion.)
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                To recapitulate, the three transformations
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:128:9
                </span>
              </span>
              {" "}
              {" "}
              are, in order:
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                1. horizontal translation by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:131:11
                </span>
              </span>
              <Math>
                $-&#123;B \over 2A&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                2. vertical translation by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:133:11
                </span>
              </span>
              <Math>
                $&#123;-&#123;B^2 \over 4A^2&#125;&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                3. vertical scaling by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:135:11
                </span>
              </span>
              <Math>
                $A$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  You could do the vertical translation
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:139:13
                  </span>
                </span>
                {" "}
                {" "}
                before the horizontal translation,
                geometrically it comes out the same.
                That order corresponds to these algebraic transformations:
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;y = x^2&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                &#123;\downarrow&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                &#123;y = x^2 - &#123;B^2 \over 4A^2&#125;&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                &#123;\downarrow&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                &#123;y = \,\Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 \over 4A^2&#125;&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                &#123;\downarrow&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                &#123;y = A\left[\Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 \over 4A^2&#125;\right]&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...in which the {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_what_seq_AB_.wly:164:13
                  </span>
                </span>
                <i>
                  second
                </i>
                {" "} step is a
                preprocessing step. (I.e., a step that
                replaces {" "}
                <NoBreak>
                  “
                  <Math>
                    $x$
                  </Math>
                  ”
                </NoBreak>
                {" "} with something else.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={15}>
          <ExerciseStatement id="_50_h.a.i_">
            <OuterP>
              <b>
                Exercise 15.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Let {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_roots_by_x0_y0_seq_.wly:4:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x_0 \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $y_0 \in \rr$
              </Math>
              {" "} and
              {" "}
              <Math>
                $a \in \rr$
              </Math>
              {" "} with {" "}
              <NoBreak>
                <Math>
                  $y_0 \geq 0$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $a \ne 0.$
              </Math>
              {" "}
              If you apply these transformations...
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                1. vertical translation by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_roots_by_x0_y0_seq_.wly:8:7
                </span>
              </span>
              <Math>
                $-y_0$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                2. horizontal translation by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_roots_by_x0_y0_seq_.wly:10:7
                </span>
              </span>
              <Math>
                $x_0$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                3. vertical scaling by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_roots_by_x0_y0_seq_.wly:12:7
                </span>
              </span>
              <Math>
                $a$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...to the curve {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_roots_by_x0_y0_seq_.wly:14:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $y = x^2$
                </Math>
                ,
              </NoBreak>
              {" "} what are the
              roots of the final curve?
              (Nb: {" "}
              <i>
                Roots
              </i>
              {" "} are values of {" "}
              <Math>
                $x$
              </Math>
              {" "} such
              that {" "}
              <NoBreak>
                <Math>
                  $y = 0$
                </Math>
                .)
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Start by noting that the point
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_roots_by_x0_y0_seq_.wly:21:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <Math>
                $(\sqrt&#123;y_0&#125;, y_0)$
              </Math>
              {" "} is on the curve {" "}
              <NoBreak>
                <Math>
                  $y = x^2$
                </Math>
                ,
              </NoBreak>
              {" "}
              as well as the point {" "}
              <NoBreak>
                <Math>
                  $(-\sqrt&#123;y_0&#125;, y_0)$
                </Math>
                ,
              </NoBreak>
              {" "}
              because
              {" "}
              <Math>
                $(\sqrt&#123;y_0&#125;)^2 = (-\sqrt&#123;y_0&#125;)^2 =$
              </Math>
              {" "} {" "}
              <Math>
                $y_0;$
              </Math>
              {" "}
              here is a sketch of the situation before
              anything happens:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/kIUQ.svg"
              width="660px"
              local_url="./images/svg_ch3_ex_x0_y0_step0.svg"
              intrinsicWidth={610}
              intrinsicHeight={340}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                After vertically translating by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_roots_by_x0_y0_seq_.wly:33:9
                </span>
              </span>
              <Math>
                $-y_0$
              </Math>
              {" "}
              the roots will therefore be at {" "}
              <NoBreak>
                <Math>
                  $x = \pm\sqrt&#123;y_0&#125;$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/gYAV.svg"
              width="660px"
              local_url="./images/svg_ch3_ex_x0_y0_step1.svg"
              intrinsicWidth={610}
              intrinsicHeight={340}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Then after horizontally translating by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_roots_by_x0_y0_seq_.wly:40:9
                </span>
              </span>
              <Math>
                $x_0$
              </Math>
              {" "}
              the roots mosey over to {" "}
              <NoBreak>
                <Math>
                  $x = x_0\pm\sqrt&#123;y_0&#125;$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/cfTn.svg"
              width="660px"
              local_url="./images/svg_ch3_ex_x0_y0_step2.svg"
              intrinsicWidth={620}
              intrinsicHeight={340}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Lastly, vertical scaling does not affect
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_roots_by_x0_y0_seq_.wly:47:9
                </span>
              </span>
              {" "}
              {" "}
              the position of the roots, because it
              stretches the graph {" "}
              <i>
                about
              </i>
              {" "} the {" "}
              <Math>
                $x$
              </Math>
              {" "}
              axis (here {" "}
              <NoBreak>
                <Math>
                  $a \approx 1.7$
                </Math>
                ):
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/L9MD.svg"
              width="660px"
              local_url="./images/svg_ch3_ex_x0_y0_step3.svg"
              intrinsicWidth={610}
              intrinsicHeight={340}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                So the roots are at: {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_roots_by_x0_y0_seq_.wly:56:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x = x_0 \pm \sqrt&#123;y_0&#125;$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={16}>
          <ExerciseStatement id="_51_h.a.i_">
            <OuterP>
              <b>
                Exercise 16.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Use the results of the previous two exercises
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_use_previous_two_AB_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              to find the value(s) of {" "}
              <Math>
                $x$
              </Math>
              {" "} such that
              {" "}
              <Math>
                $Ax^2 + Bx = 0$
              </Math>
              {" "} for constants {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $B$
              </Math>
              {" "} such
              that {" "}
              <NoBreak>
                <Math>
                  $A \ne 0$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Well,
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_use_previous_two_AB_.wly:11:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              Ax^2 + Bx = 0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                obviously has solution {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_use_previous_two_AB_.wly:15:9
                </span>
              </span>
              <Math>
                $x = 0$
              </Math>
              {" "} to start
              with, so we {" "}
              <i>
                don't need
              </i>
              {" "} the previous
              exercises for one of the roots at least—actually,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              Ax^2 + Bx = x(Ax + B)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                so the equation is equivalent to
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_use_previous_two_AB_.wly:21:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x(Ax + B) = 0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and so one of the roots is
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_use_previous_two_AB_.wly:25:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = 0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and the other root satisfies
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_use_previous_two_AB_.wly:29:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              Ax + B = 0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which is {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_use_previous_two_AB_.wly:33:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x = -B/A$
                </Math>
                .
              </NoBreak>
              {" "} (For the product
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x(Ax + B)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                to be {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_use_previous_two_AB_.wly:37:9
                </span>
              </span>
              <Math>
                $0$
              </Math>
              {" "} you either need the first term to
              be {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "} leading us to {" "}
              <NoBreak>
                <Math>
                  $x = 0$
                </Math>
                ,
              </NoBreak>
              {" "} or the second
              term to be {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "} leading us to {" "}
              <NoBreak>
                <Math>
                  $Ax + B = 0$
                </Math>
                —the
              </NoBreak>
              {" "}
              product of two things is {" "}
              <Math>
                $0$
              </Math>
              {" "} if and only if
              at least one factor is {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                To complete the problem {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_use_previous_two_AB_.wly:43:9
                </span>
              </span>
              <i>
                as we were asked
              </i>
              ,
              however, we will use the fact that {" "}
              <Math>
                $y = Ax^2 + Bx$
              </Math>
              {" "}
              is obtained from {" "}
              <Math>
                $y = x^2$
              </Math>
              {" "} by the following
              sequence of transformations (cf. {" "}
              <InChapterLink
                href="#_49_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 14
              </InChapterLink>
              &#8288;):
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                1. vertical translation by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_use_previous_two_AB_.wly:48:11
                </span>
              </span>
              <Math>
                $-&#123;B^2 \over 4A^2&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                2. horizontal translation by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_use_previous_two_AB_.wly:50:11
                </span>
              </span>
              <Math>
                $-&#123;B \over 2A&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                3. vertical scaling by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_use_previous_two_AB_.wly:52:11
                </span>
              </span>
              <Math>
                $A$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (We put the vertical translation first.)
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_use_previous_two_AB_.wly:54:9
                </span>
              </span>
              {" "}
              {" "}
              By {" "}
              <InChapterLink
                href="#_50_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 15
              </InChapterLink>
              &#8288;, the
              roots of {" "}
              <Math>
                $y = Ax^2 + Bx$
              </Math>
              {" "} are thus at
            </OuterP>
            <Pause />
            <TextParent>
              <MathBlock>
                $$
                \tag&#123;A&#125;
                x = -&#123;B\over 2A&#125; \pm \sqrt&#123;B^2 \over 4A^2&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </TextParent>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which looks a little different than our
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_use_previous_two_AB_.wly:61:9
                </span>
              </span>
              {" "}
              {" "}
              previous result of {" "}
              <Math>
                $x = 0$
              </Math>
              {" "} and {" "}
              <Math>
                $x = -B/A$
              </Math>
              {" "}
              until you realize that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \pm \sqrt&#123;B^2 \over 4A^2&#125; = \pm &#123;B \over 2A&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (because
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_use_previous_two_AB_.wly:67:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \left(&#123;B \over 2A&#125;\right)^&#123;\!2&#125; = &#123;B^2 \over 4A^2&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and even though {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_use_previous_two_AB_.wly:71:9
                </span>
              </span>
              <Math>
                $&#123;B\over 2A&#125;$
              </Math>
              {" "} could be
              negative, the {" "}
              <NoBreak>
                “
                <Math>
                  $\pm$
                </Math>
                ”
              </NoBreak>
              {" "} on either side of
              the equation means that the {" "}
              <i>
                set
              </i>
              {" "} of values
              on either side is the same),
              so that (A) becomes
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = -&#123;B\over 2A&#125; \pm &#123;B \over 2A&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and, on the one hand,
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_use_previous_two_AB_.wly:79:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -&#123;B\over 2A&#125; + &#123;B \over 2A&#125; = 0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                while, on the other hand,
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_use_previous_two_AB_.wly:83:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -&#123;B\over 2A&#125; - &#123;B \over 2A&#125; = -&#123;2B\over 2A&#125; = -&#123;B\over A&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                so here too we find that the roots are {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_use_previous_two_AB_.wly:87:9
                </span>
              </span>
              <Math>
                $x = 0$
              </Math>
              {" "}
              and {" "}
              <NoBreak>
                <Math>
                  $x = -B/A$
                </Math>
                .
              </NoBreak>
              {" "} (It must be the right answer!)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={17}>
          <ExerciseStatement id="_52_h.a.i_">
            <OuterP>
              <b>
                Exercise 17.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                If {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_function_operations_Q_and_A_.wly:4:5
                </span>
              </span>
              <Math>
                $f$
              </Math>
              {" "} and {" "}
              <Math>
                $g$
              </Math>
              {" "} are functions then we define
              (and not just us but people in general)
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f + g
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                to be
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_function_operations_Q_and_A_.wly:9:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              t \ra f(t) + g(t)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (use {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_function_operations_Q_and_A_.wly:13:5
                </span>
              </span>
              <NoBreak>
                ‘
                <Math>
                  $x$
                </Math>
                ’
              </NoBreak>
              {" "} if you like),
              i.e., to be the function that applies {" "}
              <Math>
                $f$
              </Math>
              {" "}
              and {" "}
              <Math>
                $g$
              </Math>
              {" "} separately and then takes the sum,
              and we define
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              fg
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                to be
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_function_operations_Q_and_A_.wly:20:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              z \ra f(z)g(z)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (use {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_function_operations_Q_and_A_.wly:24:5
                </span>
              </span>
              <NoBreak>
                ‘
                <Math>
                  $t$
                </Math>
                ’
              </NoBreak>
              {" "} if you like, hehe),
              i.e., to be the function that applies {" "}
              <Math>
                $f$
              </Math>
              {" "} and
              {" "}
              <Math>
                $g$
              </Math>
              {" "} separately and then takes the product.
              (These definitions are similar to how we define
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f \circ g
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                to be
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_function_operations_Q_and_A_.wly:31:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              u \ra f(g(u))
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for the symbol {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_function_operations_Q_and_A_.wly:35:5
                </span>
              </span>
              <NoBreak>
                “
                <Math>
                  $\circ$
                </Math>
                ”,
              </NoBreak>
              {" "} except that now we
              are defining the {" "}
              <i>
                sum
              </i>
              {" "} and {" "}
              <i>
                product
              </i>
              {" "} of functions,
              instead of their {" "}
              <i>
                composition
              </i>
              , namely.)
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Given these definitions, which of the following
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_function_operations_Q_and_A_.wly:39:5
                </span>
              </span>
              {" "}
              {" "}
              equalities hold for all functions {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                ,
              </NoBreak>
              {" "}
              {" "}
              <Math>
                $g$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $h$
                </Math>
                ?
              </NoBreak>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f \circ (g + h) = (x \ra f(g(x)) + f(h(x)))
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              f \circ (g + h) = (x \ra f(g(x) + h(x)))
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              (g + h) \circ f = (x \ra h(f(x)) + g(f(x)))
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              (g + h) \circ f = (x \ra (g + h)(f(x)))
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The first equality is false because the
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_function_operations_Q_and_A_.wly:49:9
                </span>
              </span>
              {" "}
              {" "}
              right-hand side is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f \circ g) + (f \circ h)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                not {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_function_operations_Q_and_A_.wly:54:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $f \circ (g + h)$
                </Math>
                ;
              </NoBreak>
              {" "} the second equality is
              true; the third equality is true even though you
              would expect the right-hand side to be written
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x \ra g(f(x)) + h(f(x)))
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                with {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_function_operations_Q_and_A_.wly:60:9
                </span>
              </span>
              <NoBreak>
                “
                <Math>
                  $g$
                </Math>
                ”
              </NoBreak>
              {" "} and {" "}
              <NoBreak>
                “
                <Math>
                  $h$
                </Math>
                ”
              </NoBreak>
              {" "} switched (but addition is
              commutative, so it doesn't matter); the fourth
              equality is true: it is the definition of {" "}
              <NoBreak>
                “
                <Math>
                  $\circ$
                </Math>
                ”.
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={18}>
          <ExerciseStatement id="_53_h.a.i_">
            <OuterP>
              <b>
                Exercise 18.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                What sequence of at most three geometric transformations maps
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_C_.wly:4:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = x^2
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                onto
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_C_.wly:8:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = Ax^2 + Bx + C
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for constants {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_C_.wly:12:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $C$
              </Math>
              {" "} such that {" "}
              <NoBreak>
                <Math>
                  $A \ne 0$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Write
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_C_.wly:16:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              Ax^2 + Bx + C
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_C_.wly:20:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A\Big(x^2 + &#123;B \over A&#125;x + &#123;C\over A&#125;\Big)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and, similarly to {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_C_.wly:24:9
                </span>
              </span>
              <InChapterLink
                href="#_49_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 14
              </InChapterLink>
              &#8288;, write
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x^2 + &#123;B \over A&#125;x
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_C_.wly:28:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 \over 4A^2&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                so that, altogether, {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_C_.wly:32:9
                </span>
              </span>
              <Math>
                $Ax^2 + Bx + C$
              </Math>
              {" "}
              becomes
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A\left[\Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 \over 4A^2&#125; + &#123;C\over A&#125;\right]
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                or
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_C_.wly:37:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A\left[\Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 - 4AC\over 4A^2&#125;\right]
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by putting things on a common denominator.
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_C_.wly:41:9
                </span>
              </span>
              {" "}
              {" "}
              (We keep the minus sign out front to match
              {" "}
              <InChapterLink
                href="#_49_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 14
              </InChapterLink>
              &#8288;.)
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                By direct analogy with {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_C_.wly:45:9
                </span>
              </span>
              <InChapterLink
                href="#_49_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 14
              </InChapterLink>
              &#8288;, the three
              transformations are thus...
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                1. horizontal translation by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_C_.wly:48:11
                </span>
              </span>
              <Math>
                $-&#123;B \over 2A&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                2. vertical translation by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_C_.wly:50:11
                </span>
              </span>
              <Math>
                $&#123;-&#123;B^2 - 4AC \over 4A^2&#125;&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                3. vertical scaling by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_C_.wly:52:11
                </span>
              </span>
              <Math>
                $A$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...or...
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_C_.wly:54:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                1. vertical translation by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_C_.wly:56:11
                </span>
              </span>
              <Math>
                $&#123;-&#123;B^2 - 4AC \over 4A^2&#125;&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                2. horizontal translation by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_C_.wly:58:11
                </span>
              </span>
              <Math>
                $-&#123;B \over 2A&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                3. vertical scaling by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_C_.wly:60:11
                </span>
              </span>
              <Math>
                $A$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...if we put the vertical translation first.
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_seq_AB_C_.wly:62:9
                </span>
              </span>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={19}>
          <ExerciseStatement id="_54_h.a.i_">
            <OuterP>
              <b>
                Exercise 19.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                What are the roots (i.e., solutions) {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_are_the_roots_ABC_.wly:4:5
                </span>
              </span>
              <Math>
                $x$
              </Math>
              {" "} of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              Ax^2 + Bx + C = 0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for constants {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_are_the_roots_ABC_.wly:8:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $C$
              </Math>
              {" "} such that {" "}
              <NoBreak>
                <Math>
                  $A \ne 0$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The curve
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_are_the_roots_ABC_.wly:12:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = Ax^2 + Bx + C
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is obtained from the curve {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_are_the_roots_ABC_.wly:16:9
                </span>
              </span>
              <Math>
                $y = x^2$
              </Math>
              {" "} by the following sequence of
              transformations (cf. Exercise 19):
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                1. vertical translation by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_are_the_roots_ABC_.wly:19:11
                </span>
              </span>
              <NoBreak>
                <Math>
                  $&#123;-&#123;B^2 - 4AC \over 4A^2&#125;&#125;$
                </Math>
                <span class="t-3003-c">
                  ,
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_what_are_the_roots_ABC_.wly:19:65
                  </span>
                </span>
              </NoBreak>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                2. horizontal translation by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_are_the_roots_ABC_.wly:21:11
                </span>
              </span>
              <NoBreak>
                <Math>
                  $-&#123;B \over 2A&#125;$
                </Math>
                <span class="t-3003-c">
                  ,
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_what_are_the_roots_ABC_.wly:21:55
                  </span>
                </span>
              </NoBreak>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                3. vertical scaling by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_are_the_roots_ABC_.wly:23:11
                </span>
              </span>
              <NoBreak>
                <Math>
                  $A$
                </Math>
                <span class="t-3003-c">
                  .
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_what_are_the_roots_ABC_.wly:23:37
                  </span>
                </span>
              </NoBreak>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                On the one hand, if
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_are_the_roots_ABC_.wly:27:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;B^2 - 4AC \over 4A^2&#125; &lt; 0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                then
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_are_the_roots_ABC_.wly:31:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -&#123;B^2 - 4AC \over 4A^2&#125; &gt; 0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and the vertical translation is {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_are_the_roots_ABC_.wly:35:9
                </span>
              </span>
              <i>
                upward
              </i>
              ,
              the curve detaches from the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis never
              to see it again, and there are no roots!
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                On the other hand, if
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_are_the_roots_ABC_.wly:39:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;B^2 - 4AC \over 4A^2&#125; \geq 0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                then the roots are given by
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_are_the_roots_ABC_.wly:43:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = -&#123;B \over 2A&#125; \pm \sqrt&#123;B^2 - 4AC \over 4A^2&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_what_are_the_roots_ABC_.wly:47:9
                </span>
              </span>
              <InChapterLink
                href="#_50_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 15
              </InChapterLink>
              &#8288;. {" "}
              <Math>
                $\rightarrow$
              </Math>
              {" "} ~The End~ {" "}
              <Math>
                $\leftarrow$
              </Math>
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  In fact,
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_what_are_the_roots_ABC_.wly:51:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \pm\sqrt&#123;B^2 - 4AC \over 4A^2&#125; = \pm &#123;\sqrt&#123;B^2 - 4AC&#125; \over 2A&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  (square both sides of the equation—in general,
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_what_are_the_roots_ABC_.wly:55:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \pm E = \pm F
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  as one set of two values equalling another
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_what_are_the_roots_ABC_.wly:59:13
                  </span>
                </span>
                {" "}
                {" "}
                set of two values, if and only if
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                |E| = |F|
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  or
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_what_are_the_roots_ABC_.wly:64:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                E^2 = F^2
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  —so that's why we say “square both sides”),
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_what_are_the_roots_ABC_.wly:68:13
                  </span>
                </span>
                {" "}
                {" "}
                so the formula for the roots can also be written
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x = -&#123;B \over 2A&#125; \pm &#123;\sqrt&#123;B^2 - 4AC&#125; \over 2A&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  or
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_what_are_the_roots_ABC_.wly:73:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x = &#123;&#123;-B \pm \sqrt&#123;B^2 - 4AC&#125;&#125; \over 2A&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  as briefly flashed by, e.g., in {" "}
                  <span class="t-3003">
                    ./src/content/ch3/ch3^exercises/_what_are_the_roots_ABC_.wly:77:13
                  </span>
                </span>
                <OutChapterLink
                  href="/article/chapter1#_26_h.a.i_"
                  class="out-chapter-link"
                >
                  Chapter 1
                </OutChapterLink>
                .
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={20}>
          <ExerciseStatement id="_55_h.a.i_">
            <OuterP>
              <b>
                Exercise 20.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Summon your senses of extrapolation {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_summon_the_currying_.wly:4:5
                </span>
              </span>
              <i>
                &amp;
              </i>
              {" "}
              imagination to evaluate this expression:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f \ra x \ra h \ra &#123;f(x+h) - f(x)\over h&#125;)(x \ra x^2)(5)(0.1)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (Hint: The answer is a specific real number.)
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_summon_the_currying_.wly:9:5
                </span>
              </span>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                ...in an expression such as...
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_summon_the_currying_.wly:13:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x \ra x^3)(6)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...we pair the {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_summon_the_currying_.wly:17:9
                </span>
              </span>
              <Math>
                $x$
              </Math>
              {" "} with {" "}
              <NoBreak>
                <Math>
                  $6$
                </Math>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/WvHW.svg"
              local_url="./images/svg_ch3_connection_x_6.svg"
              intrinsicWidth="92.755"
              intrinsicHeight="43.071"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_summon_the_currying_.wly:22:9
                </span>
              </span>
              <Math>
                $6$
              </Math>
              {" "} becomes the value to use for {" "}
              <Math>
                $x$
              </Math>
              {" "}
              in {" "}
              <NoBreak>
                “
                <Math>
                  $x^3$
                </Math>
                ”:
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/F0A4.svg"
              local_url="./images/svg_ch3_connection_x_6_in_computation.svg"
              intrinsicWidth="186.776"
              intrinsicHeight="43.071"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...; in an expression such as...
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_summon_the_currying_.wly:28:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x \ra y \ra x^3y)(6)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...we also pair the {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_summon_the_currying_.wly:32:9
                </span>
              </span>
              <Math>
                $x$
              </Math>
              {" "} with {" "}
              <NoBreak>
                <Math>
                  $6$
                </Math>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Kg7y.svg"
              local_url="./images/svg_ch3_connection_x_6_again.svg"
              intrinsicWidth="139.88"
              intrinsicHeight="43.071"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_summon_the_currying_.wly:37:9
                </span>
              </span>
              <Math>
                $6$
              </Math>
              {" "} becomes the value to use for {" "}
              <Math>
                $x$
              </Math>
              {" "}
              in {" "}
              <NoBreak>
                “
                <Math>
                  $y \ra x^3y$
                </Math>
                ”:
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/tRsN.svg"
              local_url="./images/svg_ch3_connection_x_6_again_in_computation.svg"
              intrinsicWidth="328.153"
              intrinsicHeight="43.071"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...(in this case the result is not a number,
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_summon_the_currying_.wly:43:9
                </span>
              </span>
              {" "}
              {" "}
              but a function—a function is a mathematical
              object like another, after all); in an
              expression such as...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x \ra y \ra x^3y)(6)(8)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...we pair the {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_summon_the_currying_.wly:52:9
                </span>
              </span>
              <Math>
                $x$
              </Math>
              {" "} with {" "}
              <Math>
                $6$
              </Math>
              {" "} and the {" "}
              <Math>
                $y$
              </Math>
              {" "} with {" "}
              <NoBreak>
                <Math>
                  $8$
                </Math>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/HuXq.svg"
              local_url="./images/svg_ch3_connection_x_y_6_8.svg"
              intrinsicWidth="162.11"
              intrinsicHeight="43.071"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_summon_the_currying_.wly:57:9
                </span>
              </span>
              <Math>
                $6$
              </Math>
              {" "} and {" "}
              <Math>
                $8$
              </Math>
              {" "} become respectively the
              values to use for {" "}
              <Math>
                $x$
              </Math>
              {" "} and {" "}
              <Math>
                $y$
              </Math>
              {" "} in {" "}
              <NoBreak>
                “
                <Math>
                  $x^3y$
                </Math>
                ”:
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/1gJS.svg"
              local_url="./images/svg_ch3_connection_x_y_6_8_in_computation.svg"
              intrinsicWidth="364.775"
              intrinsicHeight="43.071"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...; now in an expression such as...
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_summon_the_currying_.wly:63:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f \ra x \ra h \ra &#123;f(x+h) - f(x)\over h&#125;)(x \ra x^2)(5)(0.1)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...we pair the {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_summon_the_currying_.wly:69:9
                </span>
              </span>
              <Math>
                $f$
              </Math>
              {" "} with {" "}
              <NoBreak>
                <Math>
                  $x \ra x^2$
                </Math>
                ,
              </NoBreak>
              {" "} the
              {" "}
              <Math>
                $x$
              </Math>
              {" "} with {" "}
              <NoBreak>
                <Math>
                  $5$
                </Math>
                ,
              </NoBreak>
              {" "} and the {" "}
              <Math>
                $h$
              </Math>
              {" "} with {" "}
              <NoBreak>
                <Math>
                  $0.1$
                </Math>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/1JTc.svg"
              local_url="./images/svg_ch3_connection_f_x_h.svg"
              intrinsicWidth="388.081"
              intrinsicHeight="62.066"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and {" "}
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_summon_the_currying_.wly:75:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x \ra x^2$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $5$
              </Math>
              {" "} and {" "}
              <Math>
                $0.1$
              </Math>
              {" "} become
              respectively the values to use for {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $x$
              </Math>
              {" "}
              and {" "}
              <Math>
                $h$
              </Math>
              {" "} in {" "}
              <NoBreak>
                “
                <Math>
                  $&#123;f(x + h) - f(x)\over h&#125;$
                </Math>
                ”:
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/-AHn.svg"
              local_url="./images/svg_ch3_connection_f_x_h_in_computation.svg"
              intrinsicWidth="683.627"
              intrinsicHeight="65.065"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...; evaluating...
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_summon_the_currying_.wly:82:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;(x \ra x^2)(5 + 0.1) - (x \ra x^2)(5) \over 0.1&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...we...
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_summon_the_currying_.wly:86:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;(x \ra x^2)(5.1) - (x \ra x^2)(5) \over 0.1&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...get...
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_summon_the_currying_.wly:90:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;5.1^2 - 5^2 \over 0.1&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...this...
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_summon_the_currying_.wly:94:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;26.01 - 25 \over 0.1&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_summon_the_currying_.wly:98:9
                </span>
              </span>
              <i>
                thiiis
              </i>
              ...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1.01 \over 0.1&#125; = 1.01 \times 10 = 10.1
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...result!
                <span class="t-3003">
                  ./src/content/ch3/ch3^exercises/_summon_the_currying_.wly:102:9
                </span>
              </span>
            </OuterP>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};