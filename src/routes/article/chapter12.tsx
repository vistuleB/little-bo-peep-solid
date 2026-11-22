import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { CodexSuggestion }  from "~/components/CodexSuggestions";
import { MathBlock, Math }  from "~/components/Math";
import { Pause, NoBreak, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter12__() {
  return (
    <Article
      prevPage="/article/chapter11"
      nextPage="/article/chapter13"
      pageNecessaryMargin={160}
      maxElementWidth={850}
      id="_150_h.a.i_"
      path="/article/chapter12"
    >
      <ArticleTitle banner="Chapter 12:">
        The Fundamental Theorem of Calculus
      </ArticleTitle>
      <Section id="section-1">
        <CodexSuggestion>
          <p>
            <b>
              An encoding, first.
            </b>
          </p>
          <p class="indent-10">
            Introduce a matrix as a record of the destinations of the horizontal and vertical unit arrows. If they go to {" "}
            <Math>
              $(a,c)$
            </Math>
            {" "} and {" "}
            <NoBreak>
              <Math>
                $(b,d)$
              </Math>
              ,
            </NoBreak>
            {" "} record those destinations as columns:
          </p>
          <Pause />
          <MathBlock>
            $$
            \begin&#123;pmatrix&#125;a&amp;b\\c&amp;d\end&#123;pmatrix&#125;.
            $$
          </MathBlock>
          <Pause />
          <p>
            Use repeated and scaled parallelogram edges to locate other points. Ask where {" "}
            <Math>
              $(2,3)$
            </Math>
            {" "} must go before introducing matrix-vector multiplication. State the preservation of addition and scaling that makes two destinations sufficient; they would not determine an arbitrary transformation.
          </p>
        </CodexSuggestion>
      </Section>
      <Rest />
    </Article>
  );
}

const Rest = () => {
  const visibleRestSections = useShowMore(5);
  return <>
    {visibleRestSections() > 0 && <>
      <Pause />
      <Section id="section-2">
        <CodexSuggestion>
          <p>
            <b>
              Release one constraint at a time.
            </b>
          </p>
          <p class="indent-10">
            Explore uniform scaling, then independent scaling along the coordinate axes. Compare their encodings and count the independent choices. Introduce rotations as another one-parameter family, using the unit-circle knowledge from Trig I.
          </p>
          <p class="indent-10">
            Treat parameter counts as questions about freedom, not a demand to list every named geometric transformation. Ask which entries are forced by choices already made.
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
              Choose the scaling directions.
            </b>
          </p>
          <p class="indent-10">
            Why must scaling happen along the coordinate axes? Let the reader choose tilted perpendicular axes and two positive scale factors. Initially use pictures and the two-arrow encoding, without an expression involving three matrix factors.
          </p>
          <p class="indent-10">
            Investigate why the off-diagonal entries agree. This gives symmetricness a geometric interpretation. The converse, whether every real symmetric matrix scales along some perpendicular pair of directions, can be the substantial question of the chapter. Zero and negative scales can be admitted later to reveal collapses and reversals.
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
              Same count, different freedoms.
            </b>
          </p>
          <p class="indent-10">
            Compare scaling along tilted axes with scaling horizontally and vertically and then rotating the result. Both families generically have three parameters, but the second has perpendicular columns and need not be symmetric. Use dot products to formulate the perpendicularity test.
          </p>
          <p class="indent-10">
            Possible light exercise: if the two scale factors agree, does the orientation of the scaling axes still matter? This exposes a redundant parameter and makes the degrees-of-freedom count more precise.
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
              Doing one map after another.
            </b>
          </p>
          <p class="indent-10">
            Follow the two original unit arrows through two successive transformations and encode their final destinations. Introduce matrix multiplication as the procedure already performed. Use one explicit example where reversing the order changes the result; explain associativity through grouping successive actions before an algebraic verification.
          </p>
          <p class="indent-10">
            A possible final exploration releases the remaining constraint by allowing separate input and output rotations around a diagonal scaling. With signed scales allowed, every real two-by-two matrix can be represented this way. Treat this as a destination to investigate, not a prerequisite that must be fully proved before continuing.
          </p>
        </CodexSuggestion>
      </Section>
    </>}
    {visibleRestSections() > 4 && <>
      <Pause />
      <Section id="section-6">
        <CodexSuggestion>
          <p>
            <b>
              A question to carry forward.
            </b>
          </p>
          <p class="indent-10">
            Which matrices encode rotations? Ask what their columns must satisfy: unit length, perpendicularity, and the appropriate orientation. Perpendicular unit columns alone also admit reflections.
          </p>
          <p class="indent-10">
            Stop with a geometric characterization that the next chapter can turn into a sine-and-cosine formula. Determinants or full eigenvalue classification need not become additional requirements for finishing this chapter.
          </p>
        </CodexSuggestion>
      </Section>
    </>}
  </>;
};