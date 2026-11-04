import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { CodexSuggestion }  from "~/components/CodexSuggestions";
import InChapterLink  from "~/components/InChapterLink";
import { MathBlock, Math }  from "~/components/Math";
import MathJaxSvgExportTooltip  from "~/components/MathJaxSvgExportTooltip";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { Pause, NoBreak, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter12__() {
  return (
    <Article
      prevPage="/article/chapter11"
      nextPage="/article/chapter13"
      pageNecessaryMargin={160}
      maxElementWidth={850}
      id="_151_h.a.i_"
      path="/article/chapter12"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            <span class="t-3003-c">
              an encoding, first
              <span class="t-3003">
                ./src/content/ch9_linearity/draft.wly:6:10
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            <span class="t-3003-c">
              release one constraint at a time
              <span class="t-3003">
                ./src/content/ch9_linearity/draft.wly:20:10
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=section-3">
            <span class="t-3003-c">
              choose the scaling directions
              <span class="t-3003">
                ./src/content/ch9_linearity/draft.wly:30:10
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            <span class="t-3003-c">
              same count, different freedoms
              <span class="t-3003">
                ./src/content/ch9_linearity/draft.wly:40:10
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-4">
          <InChapterLink href="?id=section-5">
            <span class="t-3003-c">
              doing one map after another
              <span class="t-3003">
                ./src/content/ch9_linearity/draft.wly:50:10
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-5">
          <InChapterLink href="?id=section-6">
            <span class="t-3003-c">
              a question to carry forward
              <span class="t-3003">
                ./src/content/ch9_linearity/draft.wly:60:10
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 12:">
        <span class="t-3003-c">
          The Fundamental Theorem of Calculus
          <span class="t-3003">
            ./src/content/ch9_linearity/__parent.wly:2:11
          </span>
        </span>
      </ArticleTitle>
      <Section id="section-1">
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                An encoding, first.
                <span class="t-3003">
                  ./src/content/ch9_linearity/draft.wly:6:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Introduce a matrix as a record of the destinations of the horizontal and vertical unit arrows. If they go to {" "}
              <span class="t-3003">
                ./src/content/ch9_linearity/draft.wly:8:9
              </span>
            </span>
            <Math>
              $(a,c)$
            </Math>
            <span class="t-3003-c">
              {" "} and {" "}
              <span class="t-3003">
                ./src/content/ch9_linearity/draft.wly:8:125
              </span>
            </span>
            <NoBreak>
              <Math>
                $(b,d)$
              </Math>
              <span class="t-3003-c">
                ,
                <span class="t-3003">
                  ./src/content/ch9_linearity/draft.wly:8:137
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} record those destinations as columns:
              <span class="t-3003">
                ./src/content/ch9_linearity/draft.wly:8:137
              </span>
            </span>
          </p>
          <Pause />
          <MathBlock>
            $$
            \begin&#123;pmatrix&#125;a&amp;b\\c&amp;d\end&#123;pmatrix&#125;.
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <p>
            <span class="t-3003-c">
              Use repeated and scaled parallelogram edges to locate other points. Ask where {" "}
              <span class="t-3003">
                ./src/content/ch9_linearity/draft.wly:14:9
              </span>
            </span>
            <Math>
              $(2,3)$
            </Math>
            <span class="t-3003-c">
              {" "} must go before introducing matrix-vector multiplication. State the preservation of addition and scaling that makes two destinations sufficient; they would not determine an arbitrary transformation.
              <span class="t-3003">
                ./src/content/ch9_linearity/draft.wly:14:94
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
  const visibleRestSections = useShowMore(5);
  return <>
    {visibleRestSections() > 0 && <>
      <Pause />
      <Section id="section-2">
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Release one constraint at a time.
                <span class="t-3003">
                  ./src/content/ch9_linearity/draft.wly:20:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Explore uniform scaling, then independent scaling along the coordinate axes. Compare their encodings and count the independent choices. Introduce rotations as another one-parameter family, using the unit-circle knowledge from Trig I.
              <span class="t-3003">
                ./src/content/ch9_linearity/draft.wly:22:9
              </span>
            </span>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Treat parameter counts as questions about freedom, not a demand to list every named geometric transformation. Ask which entries are forced by choices already made.
              <span class="t-3003">
                ./src/content/ch9_linearity/draft.wly:24:9
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
                Choose the scaling directions.
                <span class="t-3003">
                  ./src/content/ch9_linearity/draft.wly:30:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Why must scaling happen along the coordinate axes? Let the reader choose tilted perpendicular axes and two positive scale factors. Initially use pictures and the two-arrow encoding, without an expression involving three matrix factors.
              <span class="t-3003">
                ./src/content/ch9_linearity/draft.wly:32:9
              </span>
            </span>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Investigate why the off-diagonal entries agree. This gives symmetricness a geometric interpretation. The converse, whether every real symmetric matrix scales along some perpendicular pair of directions, can be the substantial question of the chapter. Zero and negative scales can be admitted later to reveal collapses and reversals.
              <span class="t-3003">
                ./src/content/ch9_linearity/draft.wly:34:9
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
                Same count, different freedoms.
                <span class="t-3003">
                  ./src/content/ch9_linearity/draft.wly:40:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Compare scaling along tilted axes with scaling horizontally and vertically and then rotating the result. Both families generically have three parameters, but the second has perpendicular columns and need not be symmetric. Use dot products to formulate the perpendicularity test.
              <span class="t-3003">
                ./src/content/ch9_linearity/draft.wly:42:9
              </span>
            </span>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Possible light exercise: if the two scale factors agree, does the orientation of the scaling axes still matter? This exposes a redundant parameter and makes the degrees-of-freedom count more precise.
              <span class="t-3003">
                ./src/content/ch9_linearity/draft.wly:44:9
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
                Doing one map after another.
                <span class="t-3003">
                  ./src/content/ch9_linearity/draft.wly:50:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Follow the two original unit arrows through two successive transformations and encode their final destinations. Introduce matrix multiplication as the procedure already performed. Use one explicit example where reversing the order changes the result; explain associativity through grouping successive actions before an algebraic verification.
              <span class="t-3003">
                ./src/content/ch9_linearity/draft.wly:52:9
              </span>
            </span>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              A possible final exploration releases the remaining constraint by allowing separate input and output rotations around a diagonal scaling. With signed scales allowed, every real two-by-two matrix can be represented this way. Treat this as a destination to investigate, not a prerequisite that must be fully proved before continuing.
              <span class="t-3003">
                ./src/content/ch9_linearity/draft.wly:54:9
              </span>
            </span>
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
              <span class="t-3003-c">
                A question to carry forward.
                <span class="t-3003">
                  ./src/content/ch9_linearity/draft.wly:60:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Which matrices encode rotations? Ask what their columns must satisfy: unit length, perpendicularity, and the appropriate orientation. Perpendicular unit columns alone also admit reflections.
              <span class="t-3003">
                ./src/content/ch9_linearity/draft.wly:62:9
              </span>
            </span>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Stop with a geometric characterization that the next chapter can turn into a sine-and-cosine formula. Determinants or full eigenvalue classification need not become additional requirements for finishing this chapter.
              <span class="t-3003">
                ./src/content/ch9_linearity/draft.wly:64:9
              </span>
            </span>
          </p>
        </CodexSuggestion>
      </Section>
    </>}
  </>;
};