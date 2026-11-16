import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { CodexSuggestion }  from "~/components/CodexSuggestions";
import { CentralDisplay, CentralDisplayItalic }  from "~/components/Delimiters";
import Image  from "~/components/Image";
import InlineImage  from "~/components/InlineImage";
import { MathBlock, Math }  from "~/components/Math";
import MathJaxSvgExportTooltip  from "~/components/MathJaxSvgExportTooltip";
import OuterP  from "~/components/OuterP";
import { NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Bootcamp1__() {
  return (
    <Article
      prevPage=""
      nextPage="/"
      pageNecessaryMargin={160}
      maxElementWidth={850}
      id="_1_h.a.i_"
      path="/article/bootcamp1"
    >
      <ArticleTitle banner="Bootcamp 1:">
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
          We use “” to mark a right angle:
        </OuterP>
        <Pause />
        <Image
          src="/tmp-images/ABC_right_triangle.svg"
          local_url="./public/tmp-images/ABC_right_triangle.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...so the above is an example of a {" "}
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:31:5
            </span>
          </span>
          {" "}
          {" "}
          said ~
          <i>
            right triangle
          </i>
          ~. (It has a right
          angle.)
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            The first question that quibblers may have
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:35:5
            </span>
          </span>
          {" "}
          {" "}
          is to know whether a flattened triangle with two
          coinciding corners is also a right triangle or not:
        </OuterP>
        <Pause />
        <Image
          src="/tmp-images/ABC_flattened.svg"
          local_url="./public/tmp-images/ABC_flattened.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            The official answer is that this is
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:42:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplay>
          <span class="t-3003-c">
            NOT
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:44:7
            </span>
          </span>
        </CentralDisplay>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            a right triangle (or for that matter in the
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:46:5
            </span>
          </span>
          {" "}
          {" "}
          more extreme case with {" "}
          <NoBreak>
            <Math>
              $\A = \B = \C$
            </Math>
            ,
          </NoBreak>
          {" "} either),
          because angles at {" "}
          <Math>
            $\A = \B$
          </Math>
          {" "} are not defined—you
          need two segments with length {" "}
          <NoBreak>
            <Math>
              $&gt;0$
            </Math>
            ,
          </NoBreak>
          {" "} to define
          an angle. 
          In fact, to get a right angle you need two healthy
          segments of length {" "}
          <Math>
            $&gt;0$
          </Math>
          {" "} on either side,
          which
          implies that all three corners are distinct...
        </OuterP>
        <Pause />
        <Image
          src="/tmp-images/ABC_flattened.svg"
          local_url="./public/tmp-images/ABC_flattened.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...and that all three angles are well-defined.
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:59:5
            </span>
          </span>
          {" "}
          {" "}
          It also implies that there is
        </OuterP>
        <Pause />
        <CentralDisplay>
          <span class="t-3003-c">
            ONLY ONE
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:67:7
            </span>
          </span>
        </CentralDisplay>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            right angle in a right triangle, {" "}
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:69:5
            </span>
          </span>
          {" "}
          {" "}
          with the other two remaining angles being
          {" "}
          <NoBreak>
            <Math>
              $&lt;90°$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            (Or at least Euclideanly. If we depart from the Euclidean
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:75:5
            </span>
          </span>
          {" "}
          {" "}
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
            But
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:85:5
            </span>
          </span>
          {" "}
          {" "}
          non-Euclidean geometry is not our topic here.)
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            Second point to know: the “two other” angles {" "}
            <span class="t-3003">
              ./src/content/bt3/bt3.wly:88:5
            </span>
          </span>
          {" "}
          {" "}
          that are not the right angle sum to {" "}
          <NoBreak>
            <Math>
              $90^\circ$
            </Math>
            ,
          </NoBreak>
          {" "}
          because adding the right angle must sum
          to {" "}
          <NoBreak>
            <Math>
              $180^\circ$
            </Math>
            .
          </NoBreak>
        </OuterP>
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
        <OuterP>
          <b>
            <span class="t-3003-c">
              The squares.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:94:6
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
              ./src/content/bt3/bt3.wly:117:5
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
              ./src/content/bt3/bt3.wly:134:5
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
                  ./src/content/bt3/bt3.wly:141:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              First of three passes through the same sequence: two dimensions, three dimensions, {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:143:9
              </span>
            </span>
            <Math>
              $n$
            </Math>
            <span class="t-3003-c">
              {" "} dimensions, then one dimension. Start with the Pythagorean theorem itself and a right-triangle picture. Use a three-four-five example before deriving the distance formula between {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:143:95
              </span>
            </span>
            <Math>
              $(a,b)$
            </Math>
            <span class="t-3003-c">
              {" "} and {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:143:282
              </span>
            </span>
            <NoBreak>
              <Math>
                $(x,y)$
              </Math>
              <span class="t-3003-c">
                :
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:143:294
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
                ./src/content/bt3/bt3.wly:149:9
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
                  ./src/content/bt3/bt3.wly:153:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} Apply the Pythagorean theorem twice: first in the horizontal plane, then with the vertical difference. Show how this gives the distance between {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:153:40
              </span>
            </span>
            <Math>
              $(a,b,c)$
            </Math>
            <span class="t-3003-c">
              {" "} and {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:153:194
              </span>
            </span>
            <NoBreak>
              <Math>
                $(x,y,z)$
              </Math>
              <span class="t-3003-c">
                :
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:153:208
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
                ./src/content/bt3/bt3.wly:159:9
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
                  ./src/content/bt3/bt3.wly:163:10
                </span>
              </span>
              <Math>
                $n$
              </Math>
              <span class="t-3003-c">
                {" "} dimensions.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:163:25
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} Introduce points as lists of {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:163:38
              </span>
            </span>
            <Math>
              $n$
            </Math>
            <span class="t-3003-c">
              {" "} coordinates. Extend the pattern, writing out the terms rather than requiring summation notation:
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:163:71
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
                ./src/content/bt3/bt3.wly:169:9
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
                  ./src/content/bt3/bt3.wly:173:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} End this first pass by reducing the formula to
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:173:37
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
                ./src/content/bt3/bt3.wly:179:9
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
                Circles and spheres.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:185:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Second pass through {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:187:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $2,3,n,1$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:187:38
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} Reuse distance to describe all points at a fixed distance {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:187:38
              </span>
            </span>
            <Math>
              $r$
            </Math>
            <span class="t-3003-c">
              {" "} from a center. Take {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:187:101
              </span>
            </span>
            <Math>
              $r&gt;0$
            </Math>
            <span class="t-3003-c">
              {" "} throughout this pass.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:187:127
              </span>
            </span>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              In two dimensions, turn the distance formula into the circle equation
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:189:9
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
                ./src/content/bt3/bt3.wly:195:9
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
                ./src/content/bt3/bt3.wly:201:9
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
                  ./src/content/bt3/bt3.wly:205:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} Repeat the same fixed-distance question to obtain
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:205:40
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
                ./src/content/bt3/bt3.wly:211:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $x^2+y^2+z^2=1$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:211:48
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} Again distinguish the surface from the solid interior, without turning terminology into a detour.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:211:48
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
                  ./src/content/bt3/bt3.wly:215:10
                </span>
              </span>
              <Math>
                $n$
              </Math>
              <span class="t-3003-c">
                {" "} dimensions.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:215:25
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} Continue the coordinate pattern:
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:215:38
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
                ./src/content/bt3/bt3.wly:221:9
              </span>
            </span>
            <Math>
              $n$
            </Math>
            <span class="t-3003-c">
              {" "} dimensions” to avoid the competing convention under which an {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:221:68
              </span>
            </span>
            <NoBreak>
              <span class="t-3003-c">
                “
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:221:68
                </span>
              </span>
              <Math>
                $n$
              </Math>
              <span class="t-3003-c">
                -sphere”
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:221:134
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} lies in {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:221:134
              </span>
            </span>
            <Math>
              $n+1$
            </Math>
            <span class="t-3003-c">
              {" "} dimensions.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:221:156
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
                  ./src/content/bt3/bt3.wly:225:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} Ask what the same equation becomes on the number line:
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:225:37
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
                ./src/content/bt3/bt3.wly:231:9
              </span>
            </span>
            <Math>
              $a-r$
            </Math>
            <span class="t-3003-c">
              {" "} and {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:231:36
              </span>
            </span>
            <NoBreak>
              <Math>
                $a+r$
              </Math>
              <span class="t-3003-c">
                :
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:231:46
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} exactly the points at distance {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:231:46
              </span>
            </span>
            <Math>
              $r$
            </Math>
            <span class="t-3003-c">
              {" "} from {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:231:82
              </span>
            </span>
            <NoBreak>
              <Math>
                $a$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:231:91
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} The origin-centered unit case is {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:231:91
              </span>
            </span>
            <NoBreak>
              <Math>
                $x^2=1$
              </Math>
              <span class="t-3003-c">
                ,
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:231:133
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} giving {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:231:133
              </span>
            </span>
            <Math>
              $-1$
            </Math>
            <span class="t-3003-c">
              {" "} and {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:231:146
              </span>
            </span>
            <NoBreak>
              <Math>
                $1$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:231:154
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} Let this be the small surprise that closes the second pass; formal “zero-sphere” terminology is unnecessary here.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:231:154
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
                Vector lengths.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:237:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Third pass through {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:239:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $2,3,n,1$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:239:37
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} Introduce a vector concretely as an arrow with coordinate components, and explain those components before introducing the norm bars. Relate its length to the distance from the origin to its endpoint.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:239:37
              </span>
            </span>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              In two dimensions, for {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:241:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $u=(u_1,u_2)$
              </Math>
              <span class="t-3003-c">
                ,
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:241:45
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
                ./src/content/bt3/bt3.wly:247:9
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
                  ./src/content/bt3/bt3.wly:251:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} For {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:251:45
              </span>
            </span>
            <NoBreak>
              <Math>
                $u=(u_1,u_2,u_3)$
              </Math>
              <span class="t-3003-c">
                ,
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:251:67
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
                ./src/content/bt3/bt3.wly:257:9
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
                  ./src/content/bt3/bt3.wly:261:10
                </span>
              </span>
              <Math>
                $n$
              </Math>
              <span class="t-3003-c">
                {" "} dimensions.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:261:30
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} For {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:261:43
              </span>
            </span>
            <NoBreak>
              <Math>
                $u=(u_1,\ldots,u_n)$
              </Math>
              <span class="t-3003-c">
                ,
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:261:68
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
                ./src/content/bt3/bt3.wly:267:9
              </span>
            </span>
            <Math>
              $\|u-v\|$
            </Math>
            <span class="t-3003-c">
              {" "} or assume fluency with vector algebra.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:267:98
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
                  ./src/content/bt3/bt3.wly:271:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} A single coordinate {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:271:42
              </span>
            </span>
            <Math>
              $x$
            </Math>
            <span class="t-3003-c">
              {" "} gives
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:271:66
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
                ./src/content/bt3/bt3.wly:277:9
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
                Exercise possibilities.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:283:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Keep exercises at the end of the bootcamp. Choose a small selection that revisits all three stories: compute a three-dimensional distance; recognize a circle or sphere's center and radius; describe the one-dimensional fixed-distance set; compute a vector's length, including one with negative components. Include a case where changing signs leaves the length unchanged.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:285:9
              </span>
            </span>
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <span class="t-3003-c">
              Reserve, if still wanted: a coordinate-based pair of questions on the distance between two vector endpoints and whether two three-dimensional vectors are orthogonal. First expand the endpoint differences explicitly; only then identify that distance as {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:289:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $\|u-v\|$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:289:270
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} A right-angle test can use the three lengths and the Pythagorean theorem. This is not part of the three-pass core, and should not require an unexplained norm identity or introduce the dot product in passing.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:289:270
              </span>
            </span>
          </p>
        </CodexSuggestion>
      </Section>
    </>}
  </>;
};