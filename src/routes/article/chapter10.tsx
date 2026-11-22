import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { CodexSuggestion }  from "~/components/CodexSuggestions";
import { MathBlock, Math }  from "~/components/Math";
import { Pause, NoBreak, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter10__() {
  return (
    <Article
      prevPage="/article/chapter9"
      nextPage="/article/chapter11"
      pageNecessaryMargin={160}
      maxElementWidth={850}
      id="_148_h.a.i_"
      path="/article/chapter10"
    >
      <ArticleTitle banner="Chapter 10:">
        Leibnizian Notation
      </ArticleTitle>
      <Section id="section-1">
        <CodexSuggestion>
          <p>
            <b>
              Which rate?
            </b>
          </p>
          <p class="indent-10">
            Proposed opening: write {" "}
            <Math>
              $y=f(x)$
            </Math>
            {" "} and {" "}
            <Math>
              $dy/dx=f'(x)$
            </Math>
            {" "} beside the same familiar graph. Begin with a change of notation that immediately earns its keep: if {" "}
            <Math>
              $x$
            </Math>
            {" "} itself depends on time, {" "}
            <Math>
              $dy/dx$
            </Math>
            {" "} and {" "}
            <Math>
              $dy/dt$
            </Math>
            {" "} answer different questions. Use one concrete dependency chain throughout the opening rather than a catalogue of symbols.
          </p>
          <p class="indent-10">
            Distinguish the function {" "}
            <Math>
              $f$
            </Math>
            {" "} from the dependent quantity {" "}
            <NoBreak>
              <Math>
                $y$
              </Math>
              .
            </NoBreak>
            {" "} The existing lambda notation can make the distinction explicit when needed; avoid turning this into a long discussion of notation before using it.
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
              Rates through an intermediate quantity.
            </b>
          </p>
          <p class="indent-10">
            Revisit the chain rule as
          </p>
          <Pause />
          <MathBlock>
            $$
            &#123;dy\over dt&#125;=&#123;dy\over dx&#125;&#123;dx\over dt&#125;.
            $$
          </MathBlock>
          <Pause />
          <p>
            Trace where each rate is evaluated. Use units as a check, connecting directly to the preceding chapter. Explain why the formula resembles cancellation without treating every derivative expression as an ordinary fraction. A short exercise could give three rates with different units and ask which two can be composed.
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
              Holding one input fixed.
            </b>
          </p>
          <p class="indent-10">
            Introduce partial derivatives through {" "}
            <NoBreak>
              <Math>
                $z=xy$
              </Math>
              .
            </NoBreak>
            {" "} Freeze {" "}
            <NoBreak>
              <Math>
                $y$
              </Math>
              ,
            </NoBreak>
            {" "} then freeze {" "}
            <NoBreak>
              <Math>
                $x$
              </Math>
              .
            </NoBreak>
            {" "} Compare the resulting rates with a situation in which both vary with time:
          </p>
          <Pause />
          <MathBlock>
            $$
            &#123;\partial z\over\partial x&#125;=y,\qquad &#123;\partial z\over\partial y&#125;=x,
            \qquad &#123;dz\over dt&#125;=y&#123;dx\over dt&#125;+x&#123;dy\over dt&#125;.
            $$
          </MathBlock>
          <Pause />
          <p>
            The last equality already follows from the product rule. This previews the multivariable chain rule without requiring its general proof here. Explicitly establish that a function can accept a pair of numbers before introducing the partial-derivative symbol.
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
              An ordinary derivative in disguise.
            </b>
          </p>
          <p class="indent-10">
            Use the existing language of functions to express freezing an input:
          </p>
          <Pause />
          <MathBlock>
            $$
            &#123;\partial f\over\partial x&#125;(a,b)=\bigl(x\mapsto f(x,b)\bigr)'(a).
            $$
          </MathBlock>
          <Pause />
          <p>
            Possible exercise: for {" "}
            <NoBreak>
              <Math>
                $f(x,y)=xy$
              </Math>
              ,
            </NoBreak>
            {" "} compare changing {" "}
            <Math>
              $x$
            </Math>
            {" "} while {" "}
            <Math>
              $y$
            </Math>
            {" "} is fixed with moving along {" "}
            <NoBreak>
              <Math>
                $y=x$
              </Math>
              .
            </NoBreak>
            {" "} Ask the student to write the two one-input functions before differentiating. The point is to identify which dependence is being considered.
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
              Small notation exercises.
            </b>
          </p>
          <p class="indent-10">
            Suggested closing exercises: distinguish {" "}
            <Math>
              $d/dx$
            </Math>
            {" "} from {" "}
            <NoBreak>
              <Math>
                $dy/dx$
              </Math>
              ;
            </NoBreak>
            {" "} distinguish a derivative function from its value at a point; compare {" "}
            <Math>
              $d^2y/dx^2$
            </Math>
            {" "} with {" "}
            <NoBreak>
              <Math>
                $(dy/dx)^2$
              </Math>
              ;
            </NoBreak>
            {" "} identify what is held fixed in each partial derivative.
          </p>
          <p class="indent-10">
            Keep the answers short. Defer a full treatment of differentials as linear approximations until they can explain something beyond these rates. This chapter need not teach all of multivariable calculus.
          </p>
        </CodexSuggestion>
      </Section>
    </>}
  </>;
};