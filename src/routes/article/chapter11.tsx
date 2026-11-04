import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { CodexSuggestion }  from "~/components/CodexSuggestions";
import InChapterLink  from "~/components/InChapterLink";
import { Math, MathBlock }  from "~/components/Math";
import MathJaxSvgExportTooltip  from "~/components/MathJaxSvgExportTooltip";
import OutChapterLink  from "~/components/OutChapterLink";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter11__() {
  return (
    <Article
      prevPage="/article/chapter10"
      nextPage="/article/chapter12"
      pageNecessaryMargin={160}
      maxElementWidth={850}
      id="_150_h.a.i_"
      path="/article/chapter11"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            <span class="t-3003-c">
              measuring along a direction
              <span class="t-3003">
                ./src/content/ch8_vectors/draft.wly:6:10
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            <span class="t-3003-c">
              two descriptions of the dot product
              <span class="t-3003">
                ./src/content/ch8_vectors/draft.wly:16:10
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=section-3">
            <span class="t-3003-c">
              what the definition lets us do
              <span class="t-3003">
                ./src/content/ch8_vectors/draft.wly:30:10
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            <span class="t-3003-c">
              differentiating a dot product
              <span class="t-3003">
                ./src/content/ch8_vectors/draft.wly:40:10
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-4">
          <InChapterLink href="?id=section-5">
            <span class="t-3003-c">
              distance and direction
              <span class="t-3003">
                ./src/content/ch8_vectors/draft.wly:54:10
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 11:">
        <span class="t-3003-c">
          The Lambert Projection
          <span class="t-3003">
            ./src/content/ch8_vectors/__parent.wly:2:11
          </span>
        </span>
      </ArticleTitle>
      <Section id="section-1">
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Measuring along a direction.
                <span class="t-3003">
                  ./src/content/ch8_vectors/draft.wly:6:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Build on the position and velocity pairs from {" "}
              <span class="t-3003">
                ./src/content/ch8_vectors/draft.wly:8:9
              </span>
            </span>
            <OutChapterLink
              href="/article/chapter5#_83_h.a.i_"
              class="out-chapter-link"
            >
              Chapter 5
            </OutChapterLink>
            <span class="t-3003-c">
              . The new question is how much of one vector lies along another. Begin with a unit direction and signed projection, using a diagram in which the projection can be negative.
              <span class="t-3003">
                ./src/content/ch8_vectors/draft.wly:8:9
              </span>
            </span>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Bring the projection and dot-product exercises currently in {" "}
              <span class="t-3003">
                ./src/content/ch8_vectors/draft.wly:10:9
              </span>
            </span>
            <OutChapterLink
              href="/article/chapter6#_103_h.a.i_"
              class="out-chapter-link"
            >
              Chapter 6
            </OutChapterLink>
            <span class="t-3003-c">
              {" "} into this development when revising. Essential explanations should become main text rather than remain prerequisites hidden in solutions.
              <span class="t-3003">
                ./src/content/ch8_vectors/draft.wly:10:9
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
                Two descriptions of the dot product.
                <span class="t-3003">
                  ./src/content/ch8_vectors/draft.wly:16:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Connect the coordinate formula and geometric interpretation:
              <span class="t-3003">
                ./src/content/ch8_vectors/draft.wly:18:9
              </span>
            </span>
          </p>
          <Pause />
          <MathBlock>
            $$
            u\cdot v=u_xv_x+u_yv_y=\|u\|\,\|v\|\cos\theta.
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <p>
            <span class="t-3003-c">
              Supply the geometric justification rather than merely displaying both formulas. Use projections onto coordinate directions to build it, without assuming the angle-sum formulas that will be developed later. Distinguish a signed component, its absolute value, and a projection vector.
              <span class="t-3003">
                ./src/content/ch8_vectors/draft.wly:24:9
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
                What the definition lets us do.
                <span class="t-3003">
                  ./src/content/ch8_vectors/draft.wly:30:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Develop symmetry and linearity in each input from the coordinate definition. Include a short formal-statement exercise in the spirit of Chapter 4: specify the objects and assumptions, then prove one property.
              <span class="t-3003">
                ./src/content/ch8_vectors/draft.wly:32:9
              </span>
            </span>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Possible small questions: can two nonzero vectors have dot product zero? Is a projection onto a non-unit vector given by the same formula as for a unit vector? What stays unchanged if we rotate both vectors together? Work toward the projection vector {" "}
              <span class="t-3003">
                ./src/content/ch8_vectors/draft.wly:34:9
              </span>
            </span>
            <Math>
              $(u\cdot v)u/(u\cdot u)$
            </Math>
            <span class="t-3003-c">
              {" "} for {" "}
              <span class="t-3003">
                ./src/content/ch8_vectors/draft.wly:34:284
              </span>
            </span>
            <NoBreak>
              <Math>
                $u\ne0$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/ch8_vectors/draft.wly:34:296
                </span>
              </span>
            </NoBreak>
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
                Differentiating a dot product.
                <span class="t-3003">
                  ./src/content/ch8_vectors/draft.wly:40:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Derive the rule coordinate by coordinate:
              <span class="t-3003">
                ./src/content/ch8_vectors/draft.wly:42:9
              </span>
            </span>
          </p>
          <Pause />
          <MathBlock>
            $$
            &#123;d\over dt&#125;(u\cdot v)=u'\cdot v+u\cdot v'.
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <p>
            <span class="t-3003-c">
              Then ask the reader to discover what constant length implies. Differentiating {" "}
              <span class="t-3003">
                ./src/content/ch8_vectors/draft.wly:48:9
              </span>
            </span>
            <Math>
              $v\cdot v$
            </Math>
            <span class="t-3003-c">
              {" "} shows {" "}
              <span class="t-3003">
                ./src/content/ch8_vectors/draft.wly:48:97
              </span>
            </span>
            <NoBreak>
              <Math>
                $v\cdot v'=0$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/ch8_vectors/draft.wly:48:117
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} Return to circular motion: its tangent velocity becomes an instance of a general fact rather than a separate geometric coincidence.
              <span class="t-3003">
                ./src/content/ch8_vectors/draft.wly:48:117
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
                Distance and direction.
                <span class="t-3003">
                  ./src/content/ch8_vectors/draft.wly:54:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Possible closing exercise or extension, for {" "}
              <span class="t-3003">
                ./src/content/ch8_vectors/draft.wly:56:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $r(t)\ne0$
              </Math>
              <span class="t-3003-c">
                :
                <span class="t-3003">
                  ./src/content/ch8_vectors/draft.wly:56:63
                </span>
              </span>
            </NoBreak>
          </p>
          <Pause />
          <MathBlock>
            $$
            &#123;d\over dt&#125;\|r\|=&#123;r\over\|r\|&#125;\cdot r'.
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <p>
            <span class="t-3003-c">
              Relate this to the proposed absolute-value derivative {" "}
              <span class="t-3003">
                ./src/content/ch8_vectors/draft.wly:62:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $x/|x|$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/ch8_vectors/draft.wly:62:70
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} The rate of change of distance from the origin is the radial component of velocity, while speed is {" "}
              <span class="t-3003">
                ./src/content/ch8_vectors/draft.wly:62:70
              </span>
            </span>
            <NoBreak>
              <Math>
                $\|r'\|$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/ch8_vectors/draft.wly:62:179
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} Ask for a motion with constant distance but nonzero speed. Keep the origin exception visible. This extension needs the square-root derivative and chain rule established beforehand.
              <span class="t-3003">
                ./src/content/ch8_vectors/draft.wly:62:179
              </span>
            </span>
          </p>
        </CodexSuggestion>
      </Section>
    </>}
  </>;
};