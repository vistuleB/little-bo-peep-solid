import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Boxed  from "~/components/Boxed";
import { CodexSuggestion }  from "~/components/CodexSuggestions";
import { CentralDisplay, CentralDisplayItalic }  from "~/components/Delimiters";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import InlineImage  from "~/components/InlineImage";
import { MathBlock, Math }  from "~/components/Math";
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
        The Pythagorean Theorem
      </ArticleTitle>
      <Section id="section-1">
        <OuterP>
          <b>
            Right triangles.
          </b>
          {" "}
          A
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          right triangle
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          is a triangle in which one of the angles is 
          {" "}
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
        <Image src="/tmp-images/ABC_right_triangle.svg" />
        <Pause />
        <OuterP>
          There is also the question of 
          whether a completely flattened triangle is
          a right triangle, or not:
        </OuterP>
        <Pause />
        <Image src="/tmp-images/ABC_flattened.svg" />
        <Pause />
        <OuterP>
          The answer is that this is
        </OuterP>
        <Pause />
        <CentralDisplay>
          NOT
        </CentralDisplay>
        <Pause />
        <OuterP>
          a right triangle 
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
        <Image src="/tmp-images/ABC_flattened.svg" />
        <Pause />
        <OuterP>
          ...one can deduce that
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          all three sides
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          of a right triangle have nonzero length,
          and that
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          all three angles
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          of a right triangle are (well-defined, and)
          nonzero, as well. This also implies that there is
        </OuterP>
        <Pause />
        <CentralDisplay>
          ONLY ONE
        </CentralDisplay>
        <Pause />
        <OuterP>
          right angle in any right triangle, 
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
        <Image src="/tmp-images/spherical_3_90.svg" />
        <Pause />
        <OuterP>
          But non-Euclidean geometry is 
          off-topic at the moment.)
        </OuterP>
        <OuterP class="indent-10">
          The second point to know about right triangles
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
            Vocabulary #1.
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
            Vocabulary #2.
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
            {" "}
            If an acute angle (i.e., non-right angle) of a
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
            {" "}
            If we drop a height from the right angle 
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
            (In particular, the two sub-triangles are
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
            “Hypotenuse” and “legs”.
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
            The insight.
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
          Obviously, at the back of our minds, we
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
          The key insight is contained in this diagram:
        </OuterP>
        <Pause />
        <OuterP>
          The reason this diagram is a key insight is
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
          ...is determined by these two other areas,
          given here...
        </OuterP>
        <Pause />
        <OuterP>
          ...that are {" "}
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
          ...while the area of the four triangles on
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
          ...so altogether,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          c^2 = \A_1 - \A_2 = (a+b)^2 - 4\cdot&#123;1\over 2&#125;ab
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          or
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          c = \sqrt&#123;(a+b)^2 - 4\cdot&#123;1\over 2&#125;ab&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          by taking a square root! Though, in reality,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          - 4\cdot&#123;1\over 2&#125;ab = -2ab
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (a+b)^2 = a^2 + b^2 + 2ab
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          leading to the amazingly simple...
        </OuterP>
        <Boxed>
          <MathBlock>
            $$
            c = \sqrt&#123;a^2 + b^2&#125;
            $$
          </MathBlock>
        </Boxed>
        <OuterP>
          ...or..
        </OuterP>
        <Boxed>
          <MathBlock>
            $$
            \,\,c^2 = a^2 + b^2\,\,\up&#123;1.1&#125;\dn&#123;0.3&#125;
            $$
          </MathBlock>
        </Boxed>
        <OuterP>
          ...after squaring again!!! The latter equation
          is known as the {" "}
          <i>
            Pythagorean theorem
          </i>
          .
        </OuterP>
        <Pause />
        <OuterP>
          <i>
            Note on dimensions.
          </i>
          {" "}
          Note that in
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;“&#125;c^2 = a^2 + b^2\te&#123;”&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          we equate a length squared with a sum of lengths
          squared—apples to apples, as should be—whereas in
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;“&#125;c = \sqrt&#123;a^2 + b^2&#125;\te&#123;”&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          we equate a length to a square root of sums of
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
            The flat case.
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
          (If the mark of a right triangle is that it
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
          orthogonal triangle
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          which is a small inside joke of kinds.)
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 3.
            </b>
            {" "}
            The hypotenuse of a right triangle with two
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
            {" "}
            The hypotenuse of a right triangle with a
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
            Solving for a leg.
          </b>
          {" "}
          The fundamental equation
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          a^2 + b^2 = c^2
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          implies:
        </OuterP>
        <Boxed>
          <MathBlock>
            $$
            a^2 = c^2 - b^2
            $$
          </MathBlock>
        </Boxed>
        <Boxed style="margin-top:0em">
          <MathBlock>
            $$
            b^2 = c^2 - a^2
            $$
          </MathBlock>
        </Boxed>
        <OuterP>
          Or:
        </OuterP>
        <Boxed>
          <MathBlock>
            $$
            a = \sqrt&#123;c^2 - b^2&#125;
            $$
          </MathBlock>
        </Boxed>
        <Boxed style="margin-top:0em">
          <MathBlock>
            $$
            b = \sqrt&#123;c^2 - a^2&#125;
            $$
          </MathBlock>
        </Boxed>
        <OuterP>
          Or:
        </OuterP>
        <Boxed>
          <MathBlock>
            $$
            \te&#123;LEG1&#125; = \sqrt&#123;\te&#123;HYPOTENUSE&#125;^2 - \te&#123;LEG2&#125;^2&#125;
            $$
          </MathBlock>
        </Boxed>
        <Boxed style="margin-top:0em">
          <MathBlock>
            $$
            \te&#123;LEG2&#125; = \sqrt&#123;\te&#123;HYPOTENUSE&#125;^2 - \te&#123;LEG1&#125;^2&#125;
            $$
          </MathBlock>
        </Boxed>
        <OuterP>
          ...that are symmetric equations, it doesn't matter
          which is “leg1”, which is “leg2”.
        </OuterP>
        <Pause />
        <Example id="_22_h.a.i_">
          <OuterP>
            <b>
              Example 5.
            </b>
            {" "}
            If a {" "}
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
          </MathBlock>
          <Pause />
          <OuterP>
            by using the {" "}
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
              Note on units in {" "}
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
          </MathBlock>
          <Pause />
          <OuterP>
            [“square root of meters squared equals meters”] in
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
            Distance formula in the plane.
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
          Use 
          {" "}
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
          Then, a few observations:
        </OuterP>
        <OuterP class="indent-10">
          - {" "}
          <NoBreak>
            <Math>
              $c$
            </Math>
            ,
          </NoBreak>
          {" "} the hypotenuse of the triangle, is the 
          distance from {" "}
          <Math>
            $(x_1, y_1)$
          </Math>
          {" "} to {" "}
          <Math>
            $(x_2, y_2)$
          </Math>
        </OuterP>
        <OuterP class="indent-10">
          - {" "}
          <Math>
            $a^2 = (x_2 - x_1)^2$
          </Math>
          {" "} [regardless of whether
          {" "}
          <Math>
            $x_1 &lt; x_2$
          </Math>
          {" "} or not: a minus sign in {" "}
          <NoBreak>
            “
            <Math>
              $x_2 - x_1$
            </Math>
            ”
          </NoBreak>
          {" "} is washed away
          by the square]
        </OuterP>
        <OuterP class="indent-10">
          - {" "}
          <Math>
            $b^2 = (y_2 - y_1)^2$
          </Math>
          {" "} [regardless of whether
          {" "}
          <Math>
            $y_1 &lt; y_2$
          </Math>
          {" "} or not: a minus sign in {" "}
          <NoBreak>
            “
            <Math>
              $y_2 - y_1$
            </Math>
            ”
          </NoBreak>
          {" "} is washed away
          by the square]
        </OuterP>
        <Pause />
        <OuterP>
          Thus
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          c = \sqrt&#123;(x_2 - x_1)^2 + (y_2 - y_1)^2&#125;
          $$
        </MathBlock>
      </Section>
    </>}
    {visibleRestSections() > 5 && <>
      <Pause />
      <Section id="section-7">
        <OuterP>
          <b>
            The squares.
          </b>
          {" "} Observe this computation of the
          area of a certain square:
        </OuterP>
        <Pause />
        <Image
          src="/tmp-images/bt3_tapestry.svg"
          intrinsicWidth={1000}
          intrinsicHeight={500}
        />
        <Pause />
        <OuterP>
          We could have cut up the square directly 
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
          intrinsicWidth={1000}
          intrinsicHeight={520}
        />
        <Pause />
        <OuterP>
          (Different square, different area—naturally!)
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
              Distance.
            </b>
          </p>
          <p class="indent-10">
            First of three passes through the same sequence: two dimensions, three dimensions, {" "}
            <Math>
              $n$
            </Math>
            {" "} dimensions, then one dimension. Start with the Pythagorean theorem itself and a right-triangle picture. Use a three-four-five example before deriving the distance formula between {" "}
            <Math>
              $(a,b)$
            </Math>
            {" "} and {" "}
            <NoBreak>
              <Math>
                $(x,y)$
              </Math>
              :
            </NoBreak>
          </p>
          <Pause />
          <MathBlock>
            $$
            \sqrt&#123;(x-a)^2+(y-b)^2&#125;.
            $$
          </MathBlock>
          <Pause />
          <p>
            Make the coordinate differences visible as the triangle's legs. Work in coordinates throughout; do not assume vector notation or vector fluency.
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              Distance in three dimensions.
            </b>
            {" "} Apply the Pythagorean theorem twice: first in the horizontal plane, then with the vertical difference. Show how this gives the distance between {" "}
            <Math>
              $(a,b,c)$
            </Math>
            {" "} and {" "}
            <NoBreak>
              <Math>
                $(x,y,z)$
              </Math>
              :
            </NoBreak>
          </p>
          <Pause />
          <MathBlock>
            $$
            \sqrt&#123;(x-a)^2+(y-b)^2+(z-c)^2&#125;.
            $$
          </MathBlock>
          <Pause />
          <p>
            A box-diagonal picture and a small numerical example should carry the explanation. Keep the connection to the two-dimensional calculation explicit.
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              Distance in {" "}
              <Math>
                $n$
              </Math>
              {" "} dimensions.
            </b>
            {" "} Introduce points as lists of {" "}
            <Math>
              $n$
            </Math>
            {" "} coordinates. Extend the pattern, writing out the terms rather than requiring summation notation:
          </p>
          <Pause />
          <MathBlock>
            $$
            \sqrt&#123;(x_1-a_1)^2+(x_2-a_2)^2+\cdots+(x_n-a_n)^2&#125;.
            $$
          </MathBlock>
          <Pause />
          <p>
            Explain what the subscripts label. The numerical calculation should remain familiar even when the points cannot be pictured.
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              Distance in one dimension.
            </b>
            {" "} End this first pass by reducing the formula to
          </p>
          <Pause />
          <MathBlock>
            $$
            \sqrt&#123;(x-a)^2&#125;=|x-a|.
            $$
          </MathBlock>
          <Pause />
          <p>
            Return to the number line and distinguish distance from the signed coordinate difference. The one-dimensional case belongs last: absolute value emerges as the familiar version of the same distance formula.
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
              Circles and spheres.
            </b>
          </p>
          <p class="indent-10">
            Second pass through {" "}
            <NoBreak>
              <Math>
                $2,3,n,1$
              </Math>
              .
            </NoBreak>
            {" "} Reuse distance to describe all points at a fixed distance {" "}
            <Math>
              $r$
            </Math>
            {" "} from a center. Take {" "}
            <Math>
              $r&gt;0$
            </Math>
            {" "} throughout this pass.
          </p>
          <p class="indent-10">
            In two dimensions, turn the distance formula into the circle equation
          </p>
          <Pause />
          <MathBlock>
            $$
            (x-a)^2+(y-b)^2=r^2.
            $$
          </MathBlock>
          <Pause />
          <p>
            Include the origin-centered circle and explicitly identify the unit circle:
          </p>
          <Pause />
          <MathBlock>
            $$
            x^2+y^2=1.
            $$
          </MathBlock>
          <Pause />
          <p>
            Emphasize that the equation describes a circumference, not the filled disk.
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              A sphere in three dimensions.
            </b>
            {" "} Repeat the same fixed-distance question to obtain
          </p>
          <Pause />
          <MathBlock>
            $$
            (x-a)^2+(y-b)^2+(z-c)^2=r^2.
            $$
          </MathBlock>
          <Pause />
          <p>
            Include the unit sphere {" "}
            <NoBreak>
              <Math>
                $x^2+y^2+z^2=1$
              </Math>
              .
            </NoBreak>
            {" "} Again distinguish the surface from the solid interior, without turning terminology into a detour.
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              A sphere in {" "}
              <Math>
                $n$
              </Math>
              {" "} dimensions.
            </b>
            {" "} Continue the coordinate pattern:
          </p>
          <Pause />
          <MathBlock>
            $$
            (x_1-a_1)^2+(x_2-a_2)^2+\cdots+(x_n-a_n)^2=r^2.
            $$
          </MathBlock>
          <Pause />
          <p>
            Include the origin-centered unit case. Say “a sphere in {" "}
            <Math>
              $n$
            </Math>
            {" "} dimensions” to avoid the competing convention under which an {" "}
            <NoBreak>
              “
              <Math>
                $n$
              </Math>
              -sphere”
            </NoBreak>
            {" "} lies in {" "}
            <Math>
              $n+1$
            </Math>
            {" "} dimensions.
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              A sphere in one dimension.
            </b>
            {" "} Ask what the same equation becomes on the number line:
          </p>
          <Pause />
          <MathBlock>
            $$
            (x-a)^2=r^2.
            $$
          </MathBlock>
          <Pause />
          <p>
            Its two solutions are {" "}
            <Math>
              $a-r$
            </Math>
            {" "} and {" "}
            <NoBreak>
              <Math>
                $a+r$
              </Math>
              :
            </NoBreak>
            {" "} exactly the points at distance {" "}
            <Math>
              $r$
            </Math>
            {" "} from {" "}
            <NoBreak>
              <Math>
                $a$
              </Math>
              .
            </NoBreak>
            {" "} The origin-centered unit case is {" "}
            <NoBreak>
              <Math>
                $x^2=1$
              </Math>
              ,
            </NoBreak>
            {" "} giving {" "}
            <Math>
              $-1$
            </Math>
            {" "} and {" "}
            <NoBreak>
              <Math>
                $1$
              </Math>
              .
            </NoBreak>
            {" "} Let this be the small surprise that closes the second pass; formal “zero-sphere” terminology is unnecessary here.
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
              Vector lengths.
            </b>
          </p>
          <p class="indent-10">
            Third pass through {" "}
            <NoBreak>
              <Math>
                $2,3,n,1$
              </Math>
              .
            </NoBreak>
            {" "} Introduce a vector concretely as an arrow with coordinate components, and explain those components before introducing the norm bars. Relate its length to the distance from the origin to its endpoint.
          </p>
          <p class="indent-10">
            In two dimensions, for {" "}
            <NoBreak>
              <Math>
                $u=(u_1,u_2)$
              </Math>
              ,
            </NoBreak>
          </p>
          <Pause />
          <MathBlock>
            $$
            \|u\|=\sqrt&#123;u_1^2+u_2^2&#125;.
            $$
          </MathBlock>
          <Pause />
          <p>
            Introduce “norm” as the name for this length. Use a coordinate example so that the new notation does not obscure an already familiar calculation.
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              Vector length in three dimensions.
            </b>
            {" "} For {" "}
            <NoBreak>
              <Math>
                $u=(u_1,u_2,u_3)$
              </Math>
              ,
            </NoBreak>
          </p>
          <Pause />
          <MathBlock>
            $$
            \|u\|=\sqrt&#123;u_1^2+u_2^2+u_3^2&#125;.
            $$
          </MathBlock>
          <Pause />
          <p>
            Connect this directly to the three-dimensional distance formula, with one endpoint at the origin. The reader is reusing that result, not learning another independent formula.
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              Vector length in {" "}
              <Math>
                $n$
              </Math>
              {" "} dimensions.
            </b>
            {" "} For {" "}
            <NoBreak>
              <Math>
                $u=(u_1,\ldots,u_n)$
              </Math>
              ,
            </NoBreak>
          </p>
          <Pause />
          <MathBlock>
            $$
            \|u\|=\sqrt&#123;u_1^2+u_2^2+\cdots+u_n^2&#125;.
            $$
          </MathBlock>
          <Pause />
          <p>
            Keep the coordinate expansion visible. Do not jump here to identities involving {" "}
            <Math>
              $\|u-v\|$
            </Math>
            {" "} or assume fluency with vector algebra.
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              Vector length in one dimension.
            </b>
            {" "} A single coordinate {" "}
            <Math>
              $x$
            </Math>
            {" "} gives
          </p>
          <Pause />
          <MathBlock>
            $$
            \|x\|=\sqrt&#123;x^2&#125;=|x|.
            $$
          </MathBlock>
          <Pause />
          <p>
            Close by recognizing absolute value as one-dimensional length. The three stories have returned to the same familiar object from different directions: distance between points, points at a prescribed distance, and length of a vector.
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
              Exercise possibilities.
            </b>
          </p>
          <p class="indent-10">
            Keep exercises at the end of the bootcamp. Choose a small selection that revisits all three stories: compute a three-dimensional distance; recognize a circle or sphere's center and radius; describe the one-dimensional fixed-distance set; compute a vector's length, including one with negative components. Include a case where changing signs leaves the length unchanged.
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            Reserve, if still wanted: a coordinate-based pair of questions on the distance between two vector endpoints and whether two three-dimensional vectors are orthogonal. First expand the endpoint differences explicitly; only then identify that distance as {" "}
            <NoBreak>
              <Math>
                $\|u-v\|$
              </Math>
              .
            </NoBreak>
            {" "} A right-angle test can use the three lengths and the Pythagorean theorem. This is not part of the three-pass core, and should not require an unexplained norm identity or introduce the dot product in passing.
          </p>
        </CodexSuggestion>
      </Section>
    </>}
  </>;
};