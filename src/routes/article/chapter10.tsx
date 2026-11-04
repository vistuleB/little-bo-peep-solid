import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { CodexSuggestion }  from "~/components/CodexSuggestions";
import InChapterLink  from "~/components/InChapterLink";
import { MathBlock, Math }  from "~/components/Math";
import MathJaxSvgExportTooltip  from "~/components/MathJaxSvgExportTooltip";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { Pause, NoBreak, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter10__() {
  return (
    <Article
      prevPage="/article/chapter9"
      nextPage="/article/chapter11"
      pageNecessaryMargin={160}
      maxElementWidth={850}
      id="_149_h.a.i_"
      path="/article/chapter10"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            <span class="t-3003-c">
              which rate?
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:6:10
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            <span class="t-3003-c">
              rates through an intermediate quantity
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:16:10
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=section-3">
            <span class="t-3003-c">
              holding one input fixed
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:30:10
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            <span class="t-3003-c">
              an ordinary derivative in disguise
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:45:10
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-4">
          <InChapterLink href="?id=section-5">
            <span class="t-3003-c">
              small notation exercises
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:59:10
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 10:">
        <span class="t-3003-c">
          Leibnizian Notation
          <span class="t-3003">
            ./src/content/ch7_leibniz/__parent.wly:2:11
          </span>
        </span>
      </ArticleTitle>
      <Section id="section-1">
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Which rate?
                <span class="t-3003">
                  ./src/content/ch7_leibniz/draft.wly:6:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Proposed opening: write {" "}
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:8:9
              </span>
            </span>
            <Math>
              $y=f(x)$
            </Math>
            <span class="t-3003-c">
              {" "} and {" "}
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:8:41
              </span>
            </span>
            <Math>
              $dy/dx=f'(x)$
            </Math>
            <span class="t-3003-c">
              {" "} beside the same familiar graph. Begin with a change of notation that immediately earns its keep: if {" "}
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:8:59
              </span>
            </span>
            <Math>
              $x$
            </Math>
            <span class="t-3003-c">
              {" "} itself depends on time, {" "}
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:8:163
              </span>
            </span>
            <Math>
              $dy/dx$
            </Math>
            <span class="t-3003-c">
              {" "} and {" "}
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:8:195
              </span>
            </span>
            <Math>
              $dy/dt$
            </Math>
            <span class="t-3003-c">
              {" "} answer different questions. Use one concrete dependency chain throughout the opening rather than a catalogue of symbols.
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:8:207
              </span>
            </span>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Distinguish the function {" "}
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:10:9
              </span>
            </span>
            <Math>
              $f$
            </Math>
            <span class="t-3003-c">
              {" "} from the dependent quantity {" "}
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:10:37
              </span>
            </span>
            <NoBreak>
              <Math>
                $y$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/ch7_leibniz/draft.wly:10:69
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} The existing lambda notation can make the distinction explicit when needed; avoid turning this into a long discussion of notation before using it.
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:10:69
              </span>
            </span>
          </p>
        </CodexSuggestion>
      </Section>
      <Rest />
    </Article>
  );
}

const Rest = () => {
  const visibleRestSections = useShowMore(4);
  return <>
    {visibleRestSections() > 0 && <>
      <Pause />
      <Section id="section-2">
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Rates through an intermediate quantity.
                <span class="t-3003">
                  ./src/content/ch7_leibniz/draft.wly:16:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Revisit the chain rule as
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:18:9
              </span>
            </span>
          </p>
          <Pause />
          <MathBlock>
            $$
            &#123;dy\over dt&#125;=&#123;dy\over dx&#125;&#123;dx\over dt&#125;.
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <p>
            <span class="t-3003-c">
              Trace where each rate is evaluated. Use units as a check, connecting directly to the preceding chapter. Explain why the formula resembles cancellation without treating every derivative expression as an ordinary fraction. A short exercise could give three rates with different units and ask which two can be composed.
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:24:9
              </span>
            </span>
          </p>
        </CodexSuggestion>
      </Section>
    </>}
    {visibleRestSections() > 1 && <>
      <Pause />
      <Section id="section-3">
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Holding one input fixed.
                <span class="t-3003">
                  ./src/content/ch7_leibniz/draft.wly:30:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Introduce partial derivatives through {" "}
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:32:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $z=xy$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/ch7_leibniz/draft.wly:32:53
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} Freeze {" "}
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:32:53
              </span>
            </span>
            <NoBreak>
              <Math>
                $y$
              </Math>
              <span class="t-3003-c">
                ,
                <span class="t-3003">
                  ./src/content/ch7_leibniz/draft.wly:32:65
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} then freeze {" "}
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:32:65
              </span>
            </span>
            <NoBreak>
              <Math>
                $x$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/ch7_leibniz/draft.wly:32:82
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} Compare the resulting rates with a situation in which both vary with time:
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:32:82
              </span>
            </span>
          </p>
          <Pause />
          <MathBlock>
            $$
            &#123;\partial z\over\partial x&#125;=y,\qquad &#123;\partial z\over\partial y&#125;=x,
            \qquad &#123;dz\over dt&#125;=y&#123;dx\over dt&#125;+x&#123;dy\over dt&#125;.
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <p>
            <span class="t-3003-c">
              The last equality already follows from the product rule. This previews the multivariable chain rule without requiring its general proof here. Explicitly establish that a function can accept a pair of numbers before introducing the partial-derivative symbol.
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:39:9
              </span>
            </span>
          </p>
        </CodexSuggestion>
      </Section>
    </>}
    {visibleRestSections() > 2 && <>
      <Pause />
      <Section id="section-4">
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                An ordinary derivative in disguise.
                <span class="t-3003">
                  ./src/content/ch7_leibniz/draft.wly:45:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Use the existing language of functions to express freezing an input:
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:47:9
              </span>
            </span>
          </p>
          <Pause />
          <MathBlock>
            $$
            &#123;\partial f\over\partial x&#125;(a,b)=\bigl(x\mapsto f(x,b)\bigr)'(a).
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <p>
            <span class="t-3003-c">
              Possible exercise: for {" "}
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:53:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $f(x,y)=xy$
              </Math>
              <span class="t-3003-c">
                ,
                <span class="t-3003">
                  ./src/content/ch7_leibniz/draft.wly:53:43
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} compare changing {" "}
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:53:43
              </span>
            </span>
            <Math>
              $x$
            </Math>
            <span class="t-3003-c">
              {" "} while {" "}
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:53:65
              </span>
            </span>
            <Math>
              $y$
            </Math>
            <span class="t-3003-c">
              {" "} is fixed with moving along {" "}
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:53:75
              </span>
            </span>
            <NoBreak>
              <Math>
                $y=x$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/ch7_leibniz/draft.wly:53:108
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} Ask the student to write the two one-input functions before differentiating. The point is to identify which dependence is being considered.
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:53:108
              </span>
            </span>
          </p>
        </CodexSuggestion>
      </Section>
    </>}
    {visibleRestSections() > 3 && <>
      <Pause />
      <Section id="section-5">
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Small notation exercises.
                <span class="t-3003">
                  ./src/content/ch7_leibniz/draft.wly:59:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Suggested closing exercises: distinguish {" "}
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:61:9
              </span>
            </span>
            <Math>
              $d/dx$
            </Math>
            <span class="t-3003-c">
              {" "} from {" "}
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:61:56
              </span>
            </span>
            <NoBreak>
              <Math>
                $dy/dx$
              </Math>
              <span class="t-3003-c">
                ;
                <span class="t-3003">
                  ./src/content/ch7_leibniz/draft.wly:61:69
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} distinguish a derivative function from its value at a point; compare {" "}
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:61:69
              </span>
            </span>
            <Math>
              $d^2y/dx^2$
            </Math>
            <span class="t-3003-c">
              {" "} with {" "}
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:61:151
              </span>
            </span>
            <NoBreak>
              <Math>
                $(dy/dx)^2$
              </Math>
              <span class="t-3003-c">
                ;
                <span class="t-3003">
                  ./src/content/ch7_leibniz/draft.wly:61:168
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} identify what is held fixed in each partial derivative.
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:61:168
              </span>
            </span>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Keep the answers short. Defer a full treatment of differentials as linear approximations until they can explain something beyond these rates. This chapter need not teach all of multivariable calculus.
              <span class="t-3003">
                ./src/content/ch7_leibniz/draft.wly:63:9
              </span>
            </span>
          </p>
        </CodexSuggestion>
      </Section>
    </>}
  </>;
};