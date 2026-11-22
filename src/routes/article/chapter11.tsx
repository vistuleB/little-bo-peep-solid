import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { CodexSuggestion }  from "~/components/CodexSuggestions";
import { Math, MathBlock }  from "~/components/Math";
import OutChapterLink  from "~/components/OutChapterLink";
import { NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter11__() {
  return (
    <Article
      prevPage="/article/chapter10"
      nextPage="/article/chapter12"
      pageNecessaryMargin={160}
      maxElementWidth={850}
      id="_149_h.a.i_"
      path="/article/chapter11"
    >
      <ArticleTitle banner="Chapter 11:">
        The Lambert Projection
      </ArticleTitle>
      <Section id="section-1">
        <CodexSuggestion>
          <p>
            <b>
              Measuring along a direction.
            </b>
          </p>
          <p class="indent-10">
            Build on the position and velocity pairs from {" "}
            <OutChapterLink
              href="/article/chapter5#_85_h.a.i_"
              class="out-chapter-link"
            >
              Chapter 5
            </OutChapterLink>
            . The new question is how much of one vector lies along another. Begin with a unit direction and signed projection, using a diagram in which the projection can be negative.
          </p>
          <p class="indent-10">
            Bring the projection and dot-product exercises currently in {" "}
            <OutChapterLink
              href="/article/chapter6#_105_h.a.i_"
              class="out-chapter-link"
            >
              Chapter 6
            </OutChapterLink>
            {" "} into this development when revising. Essential explanations should become main text rather than remain prerequisites hidden in solutions.
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
              Two descriptions of the dot product.
            </b>
          </p>
          <p class="indent-10">
            Connect the coordinate formula and geometric interpretation:
          </p>
          <Pause />
          <MathBlock>
            $$
            u\cdot v=u_xv_x+u_yv_y=\|u\|\,\|v\|\cos\theta.
            $$
          </MathBlock>
          <Pause />
          <p>
            Supply the geometric justification rather than merely displaying both formulas. Use projections onto coordinate directions to build it, without assuming the angle-sum formulas that will be developed later. Distinguish a signed component, its absolute value, and a projection vector.
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
              What the definition lets us do.
            </b>
          </p>
          <p class="indent-10">
            Develop symmetry and linearity in each input from the coordinate definition. Include a short formal-statement exercise in the spirit of Chapter 4: specify the objects and assumptions, then prove one property.
          </p>
          <p class="indent-10">
            Possible small questions: can two nonzero vectors have dot product zero? Is a projection onto a non-unit vector given by the same formula as for a unit vector? What stays unchanged if we rotate both vectors together? Work toward the projection vector {" "}
            <Math>
              $(u\cdot v)u/(u\cdot u)$
            </Math>
            {" "} for {" "}
            <NoBreak>
              <Math>
                $u\ne0$
              </Math>
              .
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
              Differentiating a dot product.
            </b>
          </p>
          <p class="indent-10">
            Derive the rule coordinate by coordinate:
          </p>
          <Pause />
          <MathBlock>
            $$
            &#123;d\over dt&#125;(u\cdot v)=u'\cdot v+u\cdot v'.
            $$
          </MathBlock>
          <Pause />
          <p>
            Then ask the reader to discover what constant length implies. Differentiating {" "}
            <Math>
              $v\cdot v$
            </Math>
            {" "} shows {" "}
            <NoBreak>
              <Math>
                $v\cdot v'=0$
              </Math>
              .
            </NoBreak>
            {" "} Return to circular motion: its tangent velocity becomes an instance of a general fact rather than a separate geometric coincidence.
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
              Distance and direction.
            </b>
          </p>
          <p class="indent-10">
            Possible closing exercise or extension, for {" "}
            <NoBreak>
              <Math>
                $r(t)\ne0$
              </Math>
              :
            </NoBreak>
          </p>
          <Pause />
          <MathBlock>
            $$
            &#123;d\over dt&#125;\|r\|=&#123;r\over\|r\|&#125;\cdot r'.
            $$
          </MathBlock>
          <Pause />
          <p>
            Relate this to the proposed absolute-value derivative {" "}
            <NoBreak>
              <Math>
                $x/|x|$
              </Math>
              .
            </NoBreak>
            {" "} The rate of change of distance from the origin is the radial component of velocity, while speed is {" "}
            <NoBreak>
              <Math>
                $\|r'\|$
              </Math>
              .
            </NoBreak>
            {" "} Ask for a motion with constant distance but nonzero speed. Keep the origin exception visible. This extension needs the square-root derivative and chain rule established beforehand.
          </p>
        </CodexSuggestion>
      </Section>
    </>}
  </>;
};