import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Boxed  from "~/components/Boxed";
import { CodexSuggestion }  from "~/components/CodexSuggestions";
import { CentralDisplay, CentralDisplayItalic }  from "~/components/Delimiters";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import InlineImage  from "~/components/InlineImage";
import { MathBlock, Math }  from "~/components/Math";
import MathJaxSvgExportTooltip  from "~/components/MathJaxSvgExportTooltip";
import OuterP  from "~/components/OuterP";
import { Example, NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Bootcamp3__() {
  return (
    <Article
      prevPage=""
      nextPage="/article/bootcamp2"
      pageNecessaryMargin={160}
      maxElementWidth={850}
      id="_23_h.a.i_"
      path="/article/bootcamp3"
    >
      <ArticleTitle banner="Bootcamp 3:">
        <span class="t-3003-c">
          The Pythagorean Theorem
          <span class="t-3003">
            ./src/content/bt3/__parent.wly:2:11
          </span>
        </span>
      </ArticleTitle>
      <Section id="section-1">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Right triangles.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:4:6
              </span>
            </span>
          </b>
          {" "}
          A
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            right triangle
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:7:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a triangle in which one of the angles is {" "}
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:9:5
            </span>
          </span>
          {" "}
          {" "}
          {" "}{" "}
          <NoBreak>
            <Math>
              $90^\circ$
            </Math>
            .
          </NoBreak>
          {" "} 
          These are right triangles:
        </OuterP>
        <Pause />
        <Image
          src="/tmp-images/ABC_right_triangle.svg"
          local_url="./public/tmp-images/ABC_right_triangle.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            There is also the question of {" "}
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:38:5
            </span>
          </span>
          {" "}
          {" "}
          whether a completely flattened triangle is
          a right triangle, or not:
        </OuterP>
        <Pause />
        <Image
          src="/tmp-images/ABC_flattened.svg"
          local_url="./public/tmp-images/ABC_flattened.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            The answer is that this is
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:45:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplay>
          <span class="t-3003-c">
            NOT
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:47:7
            </span>
          </span>
        </CentralDisplay>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            a right triangle {" "}
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:49:5
            </span>
          </span>
          {" "}
          {" "}
          (nor the “point triangle” with {" "}
          <NoBreak>
            <Math>
              $\A = \B = \C$
            </Math>
            ,
          </NoBreak>
          {" "} for
          that matter)
          because angles at {" "}
          <Math>
            $\A = \B$
          </Math>
          {" "} are not 
          defined. In fact, as the right angle
          of a right triangle, or any other
          angle, needs two sides of length {" "}
          <Math>
            $&gt;0$
          </Math>
          {" "} 
          on either side to be well-defined, like so...
        </OuterP>
        <Pause />
        <Image
          src="/tmp-images/ABC_flattened.svg"
          local_url="./public/tmp-images/ABC_flattened.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...one can deduce that
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:64:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            all three sides
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:66:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            of a right triangle have nonzero length,
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:68:5
            </span>
          </span>
          {" "}
          {" "}
          and that
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            all three angles
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:71:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            of a right triangle are (well-defined, and)
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:73:5
            </span>
          </span>
          {" "}
          {" "}
          nonzero, as well. This also implies that there is
        </OuterP>
        <Pause />
        <CentralDisplay>
          <span class="t-3003-c">
            ONLY ONE
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:81:7
            </span>
          </span>
        </CentralDisplay>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            right angle in any right triangle, {" "}
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:83:5
            </span>
          </span>
          {" "}
          {" "}
          with the other two angles being
          {" "}
          <NoBreak>
            <Math>
              $&lt;90°$
            </Math>
            ,
          </NoBreak>
          {" "}
          or at least
          Euclideanly. 
          (If we depart from the Euclidean
          realm, e.g., do geometry on a sphere, it is
          easy to come up with triangles
          that have more than one {" "}
          <Math>
            $90^\circ$
          </Math>
          {" "} angle,
          such as this one
          here:
        </OuterP>
        <Pause />
        <Image
          src="/tmp-images/spherical_3_90.svg"
          local_url="./public/tmp-images/spherical_3_90.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            But non-Euclidean geometry is {" "}
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:98:5
            </span>
          </span>
          {" "}
          {" "}
          off-topic at the moment.)
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            The second point to know about right triangles
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:102:5
            </span>
          </span>
          {" "}
          {" "}
          is that the “two other” angles 
          (that are not the right angle) sum to {" "}
          <NoBreak>
            <Math>
              $90^\circ$
            </Math>
            ,
          </NoBreak>
          {" "}
          because all three angles must sum to {" "}
          <Math>
            $180^\circ$
          </Math>
          {" "}
          together.
        </OuterP>
        <Pause />
        <OuterP>
          <i>
            <span class="t-3003-c">
              Vocabulary #1.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:127:6
              </span>
            </span>
          </i>
          {" "} The “non-right angles” of a right
          triangle are called the {" "}
          <i>
            acute angles
          </i>
          {" "} of the
          triangle, because “acute” means “less than {" "}
          <NoBreak>
            <Math>
              $90^\circ$
            </Math>
            ”.
          </NoBreak>
          {" "}
          (Which they are.)
        </OuterP>
        <Pause />
        <OuterP>
          <i>
            <span class="t-3003-c">
              Vocabulary #2.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:138:6
              </span>
            </span>
          </i>
          {" "} Two angles that sum to {" "}
          <Math>
            $90^\circ$
          </Math>
          {" "}
          are called {" "}
          <i>
            complementary
          </i>
          . The two acute angles of 
          a right triangle are therefore {" "}
          <i>
            complementary
          </i>
          !!
        </OuterP>
        <Pause />
        <Example id="_21_h.a.i_">
          <OuterP>
            <b>
              Example 1.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              If an acute angle (i.e., non-right angle) of a
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:176:9
              </span>
            </span>
            {" "}
            {" "}
            right triangle is {" "}
            <NoBreak>
              <Math>
                $\theta$
              </Math>
              ,
            </NoBreak>
            {" "}
            the other one is {" "}
            <NoBreak>
              <Math>
                $90^\circ - \theta$
              </Math>
              ,
            </NoBreak>
            {" "} by complementarity:
          </OuterP>
        </Example>
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
              If we drop a height from the right angle {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:182:9
              </span>
            </span>
            {" "}
            {" "}
            of the triangle of {" "}
            <InChapterLink
              href="#_21_h.a.i_"
              class="in-chapter-link"
            >
              Example 1
            </InChapterLink>
            {" "}
            to the opposite side, one more copy of 
            {" "}
            <NoBreak>
              “
              <Math>
                $\theta$
              </Math>
              ”
            </NoBreak>
            {" "} and one more copy of {" "}
            <NoBreak>
              “
              <Math>
                $90^\circ - \theta$
              </Math>
              ”
            </NoBreak>
            {" "}
            emerge in the drawing, by complementarity inside 
            the two sub-right-triangles:
          </OuterP>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              (In particular, the two sub-triangles are
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:191:9
              </span>
            </span>
            {" "}
            {" "}
            similar to the original triangle, just at a
            smaller scale: but this, we already know from
            the fact that the height lands at {" "}
            <NoBreak>
              <Math>
                $90^\circ$
              </Math>
              ,
            </NoBreak>
            {" "}
            at which point two equal angles—and therefore,
            the third—are locked into place.)
          </OuterP>
        </Example>
      </Section>
      <Rest />
    </Article>
  );
}

const Rest = () => {
  const visibleRestSections = useShowMore(9);
  return <>
    {visibleRestSections() > 0 && <>
      <Pause />
      <Section id="section-2">
        <OuterP>
          <b>
            <span class="t-3003-c">
              “Hypotenuse” and “legs”.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:202:6
              </span>
            </span>
          </b>
          {" "}
          The side opposite the right angle of a
          right triangle is called the {" "}
          <i>
            hypotenuse
          </i>
          .
          It is the longest one. We refer to the
          two other sides as {" "}
          <i>
            legs
          </i>
          :
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 1 && <>
      <Pause />
      <Section id="section-3">
        <OuterP>
          <b>
            <span class="t-3003-c">
              The insight.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:210:6
              </span>
            </span>
          </b>
          {" "} Label the two legs of a 
          right triangle as {" "}
          <Math>
            $a$
          </Math>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $b$
            </Math>
            ,
          </NoBreak>
          {" "} the 
          hypotenuse as {" "}
          <NoBreak>
            <Math>
              $c$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Obviously, at the back of our minds, we
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:216:5
            </span>
          </span>
          {" "}
          {" "}
          sense that {" "}
          <Math>
            $c$
          </Math>
          {" "} is uniquely determined (no
          choice!) once {" "}
          <Math>
            $a$
          </Math>
          {" "} and {" "}
          <Math>
            $b$
          </Math>
          {" "} are determined.
          But what is the formula? (Or is there any
          “nice” formula at all? Maybe there isn't.)
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            The key insight is contained in this diagram:
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:222:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            The reason this diagram is a key insight is
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:226:5
            </span>
          </span>
          {" "}
          {" "}
          that {" "}
          <NoBreak>
            <Math>
              $c^2$
            </Math>
            ,
          </NoBreak>
          {" "} the area of this square...
        </OuterP>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...is determined by these two other areas,
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:231:5
            </span>
          </span>
          {" "}
          {" "}
          given here...
        </OuterP>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...that are {" "}
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:236:5
            </span>
          </span>
          <NoBreak>
            “
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
            -stuff”:
          </NoBreak>
          {" "} the area of the  
          full square on the left, call it {" "}
          <NoBreak>
            <Math>
              $\A_1$
            </Math>
            ,
          </NoBreak>
          {" "} is {" "}
          <NoBreak>
            <Math>
              $(a+b)^2$
            </Math>
            ...
          </NoBreak>
        </OuterP>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...while the area of the four triangles on
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:241:5
            </span>
          </span>
          {" "}
          {" "}
          the right, that we may collectively call {" "}
          <NoBreak>
            <Math>
              $\A_2$
            </Math>
            ,
          </NoBreak>
          {" "}
          is {" "}
          <NoBreak>
            <Math>
              $4\cdot&#123;1\over 2&#125;ab$
            </Math>
            ...
          </NoBreak>
        </OuterP>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...so altogether,
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:247:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          c^2 = \A_1 - \A_2 = (a+b)^2 - 4\cdot&#123;1\over 2&#125;ab
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            or
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:253:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          c = \sqrt&#123;(a+b)^2 - 4\cdot&#123;1\over 2&#125;ab&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            by taking a square root! Though, in reality,
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:259:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          - 4\cdot&#123;1\over 2&#125;ab = -2ab
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:265:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (a+b)^2 = a^2 + b^2 + 2ab
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            leading to the amazingly simple...
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:271:5
            </span>
          </span>
        </OuterP>
        <Boxed>
          <MathBlock>
            $$
            c = \sqrt&#123;a^2 + b^2&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
        </Boxed>
        <OuterP>
          <span class="t-3003-c">
            ...or..
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:278:5
            </span>
          </span>
        </OuterP>
        <Boxed>
          <MathBlock>
            $$
            \,\,c^2 = a^2 + b^2\,\,\up&#123;1.1&#125;\dn&#123;0.3&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
        </Boxed>
        <OuterP>
          <span class="t-3003-c">
            ...after squaring again!!! The latter equation
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:285:5
            </span>
          </span>
          {" "}
          {" "}
          is known as the {" "}
          <i>
            Pythagorean theorem
          </i>
          .
        </OuterP>
        <Pause />
        <OuterP>
          <i>
            <span class="t-3003-c">
              Note on dimensions.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:290:6
              </span>
            </span>
          </i>
          {" "}
          Note that in
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;“&#125;c^2 = a^2 + b^2\te&#123;”&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            we equate a length squared with a sum of lengths
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:297:5
            </span>
          </span>
          {" "}
          {" "}
          squared—apples to apples, as should be—whereas in
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;“&#125;c = \sqrt&#123;a^2 + b^2&#125;\te&#123;”&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            we equate a length to a square root of sums of
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:304:5
            </span>
          </span>
          {" "}
          {" "}
          lengths squared, which is also “apples to apples”.
          (The square root of an apple squared is an apple.)
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 2 && <>
      <Pause />
      <Section id="section-4">
        <OuterP>
          <b>
            <span class="t-3003-c">
              The flat case.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:310:6
              </span>
            </span>
          </b>
          {" "}
          We spent some energy above
          ranting against flat triangles being not right
          triangles. Nonetheless—and as some might say,
          “by continuity”—they respect the Pythagorean
          theorem:
        </OuterP>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (If the mark of a right triangle is that it
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:319:5
            </span>
          </span>
          {" "}
          {" "}
          respects the Pythagorean identity, then maybe
          flat triangles are right triangles after all.)
          (Actually, a triangle with {" "}
          <Math>
            $\A = \B$
          </Math>
          {" "} is an
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            orthogonal triangle
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:325:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            which is a small inside joke of kinds.)
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:329:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 3.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              The hypotenuse of a right triangle with two
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:333:9
              </span>
            </span>
            {" "}
            {" "}
            legs of length {" "}
            <Math>
              $1$
            </Math>
            {" "} is {" "}
            <NoBreak>
              <Math>
                $\sqrt&#123;2&#125;$
              </Math>
              :
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
              The hypotenuse of a right triangle with a
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:350:9
              </span>
            </span>
            {" "}
            {" "}
            leg of length {" "}
            <Math>
              $1$
            </Math>
            {" "} and a leg of length {" "}
            <Math>
              $2$
            </Math>
            {" "}
            is {" "}
            <NoBreak>
              <Math>
                $\sqrt&#123;1^2 + 2^2&#125; = \sqrt&#123;5&#125;$
              </Math>
              :
            </NoBreak>
          </OuterP>
        </Example>
      </Section>
    </>}
    {visibleRestSections() > 3 && <>
      <Pause />
      <Section id="section-5">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Solving for a leg.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:356:6
              </span>
            </span>
          </b>
          {" "}
          The fundamental equation
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          a^2 + b^2 = c^2
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            implies:
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:364:5
            </span>
          </span>
        </OuterP>
        <Boxed>
          <MathBlock>
            $$
            a^2 = c^2 - b^2
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
        </Boxed>
        <Boxed style="margin-top:0em">
          <MathBlock>
            $$
            b^2 = c^2 - a^2
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
        </Boxed>
        <OuterP>
          <span class="t-3003-c">
            Or:
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:379:5
            </span>
          </span>
        </OuterP>
        <Boxed>
          <MathBlock>
            $$
            a = \sqrt&#123;c^2 - b^2&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
        </Boxed>
        <Boxed style="margin-top:0em">
          <MathBlock>
            $$
            b = \sqrt&#123;c^2 - a^2&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
        </Boxed>
        <OuterP>
          <span class="t-3003-c">
            Or:
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:392:5
            </span>
          </span>
        </OuterP>
        <Boxed>
          <MathBlock>
            $$
            \te&#123;LEG1&#125; = \sqrt&#123;\te&#123;HYPOTENUSE&#125;^2 - \te&#123;LEG2&#125;^2&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
        </Boxed>
        <Boxed style="margin-top:0em">
          <MathBlock>
            $$
            \te&#123;LEG2&#125; = \sqrt&#123;\te&#123;HYPOTENUSE&#125;^2 - \te&#123;LEG1&#125;^2&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
        </Boxed>
        <OuterP>
          <span class="t-3003-c">
            ...that are symmetric equations, it doesn't matter
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:409:5
            </span>
          </span>
          {" "}
          {" "}
          which is “leg1”, which is “leg2”.
        </OuterP>
        <Pause />
        <Example id="_22_h.a.i_">
          <OuterP>
            <b>
              Example 5.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              If a {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:422:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $6$
              </Math>
              m
            </NoBreak>
            {" "} ladder is leaning against a wall with
            its base {" "}
            <NoBreak>
              <Math>
                $1$
              </Math>
              m
            </NoBreak>
            {" "} from the edge of the wall, the ladder
            reaches a height of
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \sqrt&#123;(6\m)^2 - (1\m)^2&#125; = \sqrt&#123;36\m^2 - 1\m^2&#125; = \sqrt&#123;35\m^2&#125; \approx 5.92\m
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              by using the {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:430:9
              </span>
            </span>
            <NoBreak>
              “
              <Math>
                $a = \sqrt&#123;c^2-b^2&#125;$
              </Math>
              ”
            </NoBreak>
            {" "} equation, with
            {" "}
            <NoBreak>
              <Math>
                $b = 1\m$
              </Math>
              ,
            </NoBreak>
            {" "} {" "}
            <NoBreak>
              <Math>
                $c = 6\m$
              </Math>
              :
            </NoBreak>
          </OuterP>
          <Pause />
          <OuterP>
            <i>
              <span class="t-3003-c">
                Note on units in {" "}
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:435:10
                </span>
              </span>
              <InChapterLink
                href="#_22_h.a.i_"
                class="in-chapter-link"
              >
                Example 5
              </InChapterLink>
              &#8288;.
            </i>
            {" "}
            Please do pay attention to the fact that
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \sqrt&#123;\m^2&#125; = \m
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              [“square root of meters squared equals meters”] in
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:442:9
              </span>
            </span>
            {" "}
            {" "}
            this example. The answer should be a number of meters,
            so this checks out.
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
              Distance formula in the plane.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:449:6
              </span>
            </span>
          </b>
          {" "}
          Take arbitrary points {" "}
          <NoBreak>
            <Math>
              $P = (x_1,y_1)$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $Q = (x_2,y_2)$
          </Math>
          {" "} in
          the plane:
        </OuterP>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Use {" "}
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:459:5
            </span>
          </span>
          {" "}
          {" "}
          {" "}{" "}
          <NoBreak>
            <Math>
              $P$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $Q$
          </Math>
          {" "} 
          as the two corners
          of an axis-aligned {" "}
          <del>
            right
          </del>
          orthogonal
          triangle:
        </OuterP>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Then, a few observations:
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:471:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            1. {" "}
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:475:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $c = \overline&#123;PQ&#125;$
            </Math>
            ,
          </NoBreak>
          {" "} 
          were {" "}
          <NoBreak>
            “
            <Math>
              $\overline&#123;PQ&#125;$
            </Math>
            ”
          </NoBreak>
          {" "} means the distance from
          {" "}
          <Math>
            $P$
          </Math>
          {" "} to {" "}
          <Math>
            $Q$
          </Math>
        </OuterP>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            2. {" "}
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:484:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $a^2 = (x_2 - x_1)^2$
            </Math>
            ,
          </NoBreak>
          {" "} regardless of whether
          {" "}
          <Math>
            $x_1 &lt; x_2$
          </Math>
          {" "} or not (a minus sign in {" "}
          <NoBreak>
            “
            <Math>
              $x_2 - x_1$
            </Math>
            ”
          </NoBreak>
          {" "} is washed away
          by the square)
        </OuterP>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            3. {" "}
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:490:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $b^2 = (y_2 - y_1)^2$
            </Math>
            ,
          </NoBreak>
          {" "} regardless of whether
          {" "}
          <Math>
            $y_1 &lt; y_2$
          </Math>
          {" "} or not (a minus sign in {" "}
          <NoBreak>
            “
            <Math>
              $y_2 - y_1$
            </Math>
            ”
          </NoBreak>
          {" "} is washed away
          by the square)
        </OuterP>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Thus
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:496:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          c = \sqrt&#123;a^2 + b^2&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            becomes
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:502:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \overline&#123;PQ&#125; = \sqrt&#123;(x_2 - x_1)^2 + (y_2 - y_1)^2&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            after taking these observations into
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:508:5
            </span>
          </span>
          {" "}
          {" "}
          account, or “the distance from {" "}
          <Math>
            $P$
          </Math>
          {" "} to {" "}
          <Math>
            $Q$
          </Math>
          {" "} is 
          {" "}
          <NoBreak>
            <Math>
              $\sqrt&#123;\textit&#123;...&#125;&#125;$
            </Math>
            ”.
          </NoBreak>
          {" "} We refer to the square 
          root
        </OuterP>
        <Boxed>
          <MathBlock>
            $$
            \sqrt&#123;(x_2 - x_1)^2 + (y_2 - y_1)^2&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
        </Boxed>
        <OuterP>
          <span class="t-3003-c">
            as the {" "}
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:519:5
            </span>
          </span>
          <i>
            distance formula
          </i>
          {" "} 
          or {" "}
          <i>
            Pythagorean distance
          </i>
          {" "}
          or {" "}
          <i>
            Euclidean distance
          </i>
          {" "}
          from a point
          {" "}
          <Math>
            $(x_1, y_1)$
          </Math>
          {" "} to a point {" "}
          <Math>
            $(x_2, y_2)$
          </Math>
          {" "} in the
          plane.
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 5 && <>
      <Pause />
      <Section id="section-7">
        <OuterP>
          <b>
            <span class="t-3003-c">
              The squares.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:529:6
              </span>
            </span>
          </b>
          {" "} Observe this computation of the
          area of a certain square:
        </OuterP>
        <Pause />
        <Image
          src="/tmp-images/bt3_tapestry.svg"
          local_url="./public/tmp-images/bt3_tapestry.svg"
          intrinsicWidth={1000}
          intrinsicHeight={500}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            We could have cut up the square directly {" "}
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:552:5
            </span>
          </span>
          {" "}
          {" "}
          into four triangles of area {" "}
          <Math>
            $1/2$
          </Math>
          {" "} {" "}
          <NoBreak>
            (
            <InlineImage
              width="1.7em"
              style="margin-block:-1em;vertical-align:middle"
              src="/tmp-images/bt3_tapestry_square_divided.svg"
              intrinsicWidth={130}
              intrinsicHeight={130}
            />
            )
          </NoBreak>
          {" "} but the interest of the above 
          approach is that it
          generalizes to a tilted square:
        </OuterP>
        <Pause />
        <Image
          src="/tmp-images/bt3_tapestry2.svg"
          local_url="./public/tmp-images/bt3_tapestry2.svg"
          intrinsicWidth={1000}
          intrinsicHeight={520}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (Different square, different area—naturally!)
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:569:5
            </span>
          </span>
          {" "}
          {" "}
          Or keeping the triangle legs as arbitrary variables
          {" "}
          <Math>
            $a$
          </Math>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $b$
            </Math>
            ,
          </NoBreak>
          {" "} which gives us a “general formula” for the
          area:
        </OuterP>
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Distance.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:576:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              First of three passes through the same sequence: two dimensions, three dimensions, {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:578:9
              </span>
            </span>
            <Math>
              $n$
            </Math>
            <span class="t-3003-c">
              {" "} dimensions, then one dimension. Start with the Pythagorean theorem itself and a right-triangle picture. Use a three-four-five example before deriving the distance formula between {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:578:95
              </span>
            </span>
            <Math>
              $(a,b)$
            </Math>
            <span class="t-3003-c">
              {" "} and {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:578:282
              </span>
            </span>
            <NoBreak>
              <Math>
                $(x,y)$
              </Math>
              <span class="t-3003-c">
                :
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:578:294
                </span>
              </span>
            </NoBreak>
          </p>
          <Pause />
          <MathBlock>
            $$
            \sqrt&#123;(x-a)^2+(y-b)^2&#125;.
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <p>
            <span class="t-3003-c">
              Make the coordinate differences visible as the triangle's legs. Work in coordinates throughout; do not assume vector notation or vector fluency.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:584:9
              </span>
            </span>
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Distance in three dimensions.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:588:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} Apply the Pythagorean theorem twice: first in the horizontal plane, then with the vertical difference. Show how this gives the distance between {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:588:40
              </span>
            </span>
            <Math>
              $(a,b,c)$
            </Math>
            <span class="t-3003-c">
              {" "} and {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:588:194
              </span>
            </span>
            <NoBreak>
              <Math>
                $(x,y,z)$
              </Math>
              <span class="t-3003-c">
                :
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:588:208
                </span>
              </span>
            </NoBreak>
          </p>
          <Pause />
          <MathBlock>
            $$
            \sqrt&#123;(x-a)^2+(y-b)^2+(z-c)^2&#125;.
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <p>
            <span class="t-3003-c">
              A box-diagonal picture and a small numerical example should carry the explanation. Keep the connection to the two-dimensional calculation explicit.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:594:9
              </span>
            </span>
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Distance in {" "}
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:598:10
                </span>
              </span>
              <Math>
                $n$
              </Math>
              <span class="t-3003-c">
                {" "} dimensions.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:598:25
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} Introduce points as lists of {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:598:38
              </span>
            </span>
            <Math>
              $n$
            </Math>
            <span class="t-3003-c">
              {" "} coordinates. Extend the pattern, writing out the terms rather than requiring summation notation:
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:598:71
              </span>
            </span>
          </p>
          <Pause />
          <MathBlock>
            $$
            \sqrt&#123;(x_1-a_1)^2+(x_2-a_2)^2+\cdots+(x_n-a_n)^2&#125;.
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <p>
            <span class="t-3003-c">
              Explain what the subscripts label. The numerical calculation should remain familiar even when the points cannot be pictured.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:604:9
              </span>
            </span>
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Distance in one dimension.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:608:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} End this first pass by reducing the formula to
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:608:37
              </span>
            </span>
          </p>
          <Pause />
          <MathBlock>
            $$
            \sqrt&#123;(x-a)^2&#125;=|x-a|.
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <p>
            <span class="t-3003-c">
              Return to the number line and distinguish distance from the signed coordinate difference. The one-dimensional case belongs last: absolute value emerges as the familiar version of the same distance formula.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:614:9
              </span>
            </span>
          </p>
        </CodexSuggestion>
      </Section>
    </>}
    {visibleRestSections() > 6 && <>
      <Pause />
      <Section id="section-8">
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Circles and spheres.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:620:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Second pass through {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:622:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $2,3,n,1$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:622:38
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} Reuse distance to describe all points at a fixed distance {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:622:38
              </span>
            </span>
            <Math>
              $r$
            </Math>
            <span class="t-3003-c">
              {" "} from a center. Take {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:622:101
              </span>
            </span>
            <Math>
              $r&gt;0$
            </Math>
            <span class="t-3003-c">
              {" "} throughout this pass.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:622:127
              </span>
            </span>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              In two dimensions, turn the distance formula into the circle equation
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:624:9
              </span>
            </span>
          </p>
          <Pause />
          <MathBlock>
            $$
            (x-a)^2+(y-b)^2=r^2.
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <p>
            <span class="t-3003-c">
              Include the origin-centered circle and explicitly identify the unit circle:
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:630:9
              </span>
            </span>
          </p>
          <Pause />
          <MathBlock>
            $$
            x^2+y^2=1.
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <p>
            <span class="t-3003-c">
              Emphasize that the equation describes a circumference, not the filled disk.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:636:9
              </span>
            </span>
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                A sphere in three dimensions.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:640:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} Repeat the same fixed-distance question to obtain
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:640:40
              </span>
            </span>
          </p>
          <Pause />
          <MathBlock>
            $$
            (x-a)^2+(y-b)^2+(z-c)^2=r^2.
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <p>
            <span class="t-3003-c">
              Include the unit sphere {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:646:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $x^2+y^2+z^2=1$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:646:48
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} Again distinguish the surface from the solid interior, without turning terminology into a detour.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:646:48
              </span>
            </span>
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                A sphere in {" "}
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:650:10
                </span>
              </span>
              <Math>
                $n$
              </Math>
              <span class="t-3003-c">
                {" "} dimensions.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:650:25
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} Continue the coordinate pattern:
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:650:38
              </span>
            </span>
          </p>
          <Pause />
          <MathBlock>
            $$
            (x_1-a_1)^2+(x_2-a_2)^2+\cdots+(x_n-a_n)^2=r^2.
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <p>
            <span class="t-3003-c">
              Include the origin-centered unit case. Say “a sphere in {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:656:9
              </span>
            </span>
            <Math>
              $n$
            </Math>
            <span class="t-3003-c">
              {" "} dimensions” to avoid the competing convention under which an {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:656:68
              </span>
            </span>
            <NoBreak>
              <span class="t-3003-c">
                “
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:656:68
                </span>
              </span>
              <Math>
                $n$
              </Math>
              <span class="t-3003-c">
                -sphere”
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:656:134
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} lies in {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:656:134
              </span>
            </span>
            <Math>
              $n+1$
            </Math>
            <span class="t-3003-c">
              {" "} dimensions.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:656:156
              </span>
            </span>
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                A sphere in one dimension.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:660:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} Ask what the same equation becomes on the number line:
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:660:37
              </span>
            </span>
          </p>
          <Pause />
          <MathBlock>
            $$
            (x-a)^2=r^2.
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <p>
            <span class="t-3003-c">
              Its two solutions are {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:666:9
              </span>
            </span>
            <Math>
              $a-r$
            </Math>
            <span class="t-3003-c">
              {" "} and {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:666:36
              </span>
            </span>
            <NoBreak>
              <Math>
                $a+r$
              </Math>
              <span class="t-3003-c">
                :
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:666:46
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} exactly the points at distance {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:666:46
              </span>
            </span>
            <Math>
              $r$
            </Math>
            <span class="t-3003-c">
              {" "} from {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:666:82
              </span>
            </span>
            <NoBreak>
              <Math>
                $a$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:666:91
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} The origin-centered unit case is {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:666:91
              </span>
            </span>
            <NoBreak>
              <Math>
                $x^2=1$
              </Math>
              <span class="t-3003-c">
                ,
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:666:133
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} giving {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:666:133
              </span>
            </span>
            <Math>
              $-1$
            </Math>
            <span class="t-3003-c">
              {" "} and {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:666:146
              </span>
            </span>
            <NoBreak>
              <Math>
                $1$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:666:154
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} Let this be the small surprise that closes the second pass; formal “zero-sphere” terminology is unnecessary here.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:666:154
              </span>
            </span>
          </p>
        </CodexSuggestion>
      </Section>
    </>}
    {visibleRestSections() > 7 && <>
      <Pause />
      <Section id="section-9">
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Vector lengths.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:672:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Third pass through {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:674:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $2,3,n,1$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:674:37
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} Introduce a vector concretely as an arrow with coordinate components, and explain those components before introducing the norm bars. Relate its length to the distance from the origin to its endpoint.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:674:37
              </span>
            </span>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              In two dimensions, for {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:676:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $u=(u_1,u_2)$
              </Math>
              <span class="t-3003-c">
                ,
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:676:45
                </span>
              </span>
            </NoBreak>
          </p>
          <Pause />
          <MathBlock>
            $$
            \|u\|=\sqrt&#123;u_1^2+u_2^2&#125;.
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <p>
            <span class="t-3003-c">
              Introduce “norm” as the name for this length. Use a coordinate example so that the new notation does not obscure an already familiar calculation.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:682:9
              </span>
            </span>
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Vector length in three dimensions.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:686:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} For {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:686:45
              </span>
            </span>
            <NoBreak>
              <Math>
                $u=(u_1,u_2,u_3)$
              </Math>
              <span class="t-3003-c">
                ,
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:686:67
                </span>
              </span>
            </NoBreak>
          </p>
          <Pause />
          <MathBlock>
            $$
            \|u\|=\sqrt&#123;u_1^2+u_2^2+u_3^2&#125;.
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <p>
            <span class="t-3003-c">
              Connect this directly to the three-dimensional distance formula, with one endpoint at the origin. The reader is reusing that result, not learning another independent formula.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:692:9
              </span>
            </span>
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Vector length in {" "}
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:696:10
                </span>
              </span>
              <Math>
                $n$
              </Math>
              <span class="t-3003-c">
                {" "} dimensions.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:696:30
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} For {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:696:43
              </span>
            </span>
            <NoBreak>
              <Math>
                $u=(u_1,\ldots,u_n)$
              </Math>
              <span class="t-3003-c">
                ,
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:696:68
                </span>
              </span>
            </NoBreak>
          </p>
          <Pause />
          <MathBlock>
            $$
            \|u\|=\sqrt&#123;u_1^2+u_2^2+\cdots+u_n^2&#125;.
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <p>
            <span class="t-3003-c">
              Keep the coordinate expansion visible. Do not jump here to identities involving {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:702:9
              </span>
            </span>
            <Math>
              $\|u-v\|$
            </Math>
            <span class="t-3003-c">
              {" "} or assume fluency with vector algebra.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:702:98
              </span>
            </span>
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Vector length in one dimension.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:706:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} A single coordinate {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:706:42
              </span>
            </span>
            <Math>
              $x$
            </Math>
            <span class="t-3003-c">
              {" "} gives
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:706:66
              </span>
            </span>
          </p>
          <Pause />
          <MathBlock>
            $$
            \|x\|=\sqrt&#123;x^2&#125;=|x|.
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <p>
            <span class="t-3003-c">
              Close by recognizing absolute value as one-dimensional length. The three stories have returned to the same familiar object from different directions: distance between points, points at a prescribed distance, and length of a vector.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:712:9
              </span>
            </span>
          </p>
        </CodexSuggestion>
      </Section>
    </>}
    {visibleRestSections() > 8 && <>
      <Pause />
      <Section id="section-10">
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Exercise possibilities.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:718:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Keep exercises at the end of the bootcamp. Choose a small selection that revisits all three stories: compute a three-dimensional distance; recognize a circle or sphere's center and radius; describe the one-dimensional fixed-distance set; compute a vector's length, including one with negative components. Include a case where changing signs leaves the length unchanged.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:720:9
              </span>
            </span>
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <span class="t-3003-c">
              Reserve, if still wanted: a coordinate-based pair of questions on the distance between two vector endpoints and whether two three-dimensional vectors are orthogonal. First expand the endpoint differences explicitly; only then identify that distance as {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:724:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $\|u-v\|$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:724:270
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} A right-angle test can use the three lengths and the Pythagorean theorem. This is not part of the three-pass core, and should not require an unexplained norm identity or introduce the dot product in passing.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:724:270
              </span>
            </span>
          </p>
        </CodexSuggestion>
      </Section>
    </>}
  </>;
};