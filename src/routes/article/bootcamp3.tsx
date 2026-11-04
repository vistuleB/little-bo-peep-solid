import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { CodexSuggestion }  from "~/components/CodexSuggestions";
import InChapterLink  from "~/components/InChapterLink";
import { MathBlock, Math }  from "~/components/Math";
import MathJaxSvgExportTooltip  from "~/components/MathJaxSvgExportTooltip";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { Pause, NoBreak, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Bootcamp3__() {
  return (
    <Article
      prevPage=""
      nextPage="/article/bootcamp2"
      pageNecessaryMargin={160}
      maxElementWidth={850}
      id="_21_h.a.i_"
      path="/article/bootcamp3"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            <span class="t-3003-c">
              distance
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:6:10
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            <span class="t-3003-c">
              circles and spheres
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:50:10
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=section-3">
            <span class="t-3003-c">
              vector lengths
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:102:10
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            <span class="t-3003-c">
              exercise possibilities
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:148:10
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Bootcamp 3:">
        <span class="t-3003-c">
          The Pythagorean Theorem
          <span class="t-3003">
            ./src/content/bt3/__parent.wly:2:11
          </span>
        </span>
      </ArticleTitle>
      <Section id="section-1">
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Distance.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:6:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              First of three passes through the same sequence: two dimensions, three dimensions, {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:8:9
              </span>
            </span>
            <Math>
              $n$
            </Math>
            <span class="t-3003-c">
              {" "} dimensions, then one dimension. Start with the Pythagorean theorem itself and a right-triangle picture. Use a three-four-five example before deriving the distance formula between {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:8:95
              </span>
            </span>
            <Math>
              $(a,b)$
            </Math>
            <span class="t-3003-c">
              {" "} and {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:8:282
              </span>
            </span>
            <NoBreak>
              <Math>
                $(x,y)$
              </Math>
              <span class="t-3003-c">
                :
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:8:294
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
                ./src/content/bt3/bt3.wly:14:9
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
                  ./src/content/bt3/bt3.wly:18:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} Apply the Pythagorean theorem twice: first in the horizontal plane, then with the vertical difference. Show how this gives the distance between {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:18:40
              </span>
            </span>
            <Math>
              $(a,b,c)$
            </Math>
            <span class="t-3003-c">
              {" "} and {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:18:194
              </span>
            </span>
            <NoBreak>
              <Math>
                $(x,y,z)$
              </Math>
              <span class="t-3003-c">
                :
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:18:208
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
                ./src/content/bt3/bt3.wly:24:9
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
                  ./src/content/bt3/bt3.wly:28:10
                </span>
              </span>
              <Math>
                $n$
              </Math>
              <span class="t-3003-c">
                {" "} dimensions.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:28:25
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} Introduce points as lists of {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:28:38
              </span>
            </span>
            <Math>
              $n$
            </Math>
            <span class="t-3003-c">
              {" "} coordinates. Extend the pattern, writing out the terms rather than requiring summation notation:
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:28:71
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
                ./src/content/bt3/bt3.wly:34:9
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
                  ./src/content/bt3/bt3.wly:38:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} End this first pass by reducing the formula to
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:38:37
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
                ./src/content/bt3/bt3.wly:44:9
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
  const visibleRestSections = useShowMore(3);
  return <>
    {visibleRestSections() > 0 && <>
      <Pause />
      <Section id="section-2">
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Circles and spheres.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:50:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Second pass through {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:52:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $2,3,n,1$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:52:38
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} Reuse distance to describe all points at a fixed distance {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:52:38
              </span>
            </span>
            <Math>
              $r$
            </Math>
            <span class="t-3003-c">
              {" "} from a center. Take {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:52:101
              </span>
            </span>
            <Math>
              $r&gt;0$
            </Math>
            <span class="t-3003-c">
              {" "} throughout this pass.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:52:127
              </span>
            </span>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              In two dimensions, turn the distance formula into the circle equation
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:54:9
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
                ./src/content/bt3/bt3.wly:60:9
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
                ./src/content/bt3/bt3.wly:66:9
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
                  ./src/content/bt3/bt3.wly:70:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} Repeat the same fixed-distance question to obtain
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:70:40
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
                ./src/content/bt3/bt3.wly:76:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $x^2+y^2+z^2=1$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:76:48
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} Again distinguish the surface from the solid interior, without turning terminology into a detour.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:76:48
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
                  ./src/content/bt3/bt3.wly:80:10
                </span>
              </span>
              <Math>
                $n$
              </Math>
              <span class="t-3003-c">
                {" "} dimensions.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:80:25
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} Continue the coordinate pattern:
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:80:38
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
                ./src/content/bt3/bt3.wly:86:9
              </span>
            </span>
            <Math>
              $n$
            </Math>
            <span class="t-3003-c">
              {" "} dimensions” to avoid the competing convention under which an {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:86:68
              </span>
            </span>
            <NoBreak>
              <span class="t-3003-c">
                “
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:86:68
                </span>
              </span>
              <Math>
                $n$
              </Math>
              <span class="t-3003-c">
                -sphere”
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:86:134
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} lies in {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:86:134
              </span>
            </span>
            <Math>
              $n+1$
            </Math>
            <span class="t-3003-c">
              {" "} dimensions.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:86:156
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
                  ./src/content/bt3/bt3.wly:90:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} Ask what the same equation becomes on the number line:
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:90:37
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
                ./src/content/bt3/bt3.wly:96:9
              </span>
            </span>
            <Math>
              $a-r$
            </Math>
            <span class="t-3003-c">
              {" "} and {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:96:36
              </span>
            </span>
            <NoBreak>
              <Math>
                $a+r$
              </Math>
              <span class="t-3003-c">
                :
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:96:46
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} exactly the points at distance {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:96:46
              </span>
            </span>
            <Math>
              $r$
            </Math>
            <span class="t-3003-c">
              {" "} from {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:96:82
              </span>
            </span>
            <NoBreak>
              <Math>
                $a$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:96:91
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} The origin-centered unit case is {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:96:91
              </span>
            </span>
            <NoBreak>
              <Math>
                $x^2=1$
              </Math>
              <span class="t-3003-c">
                ,
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:96:133
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} giving {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:96:133
              </span>
            </span>
            <Math>
              $-1$
            </Math>
            <span class="t-3003-c">
              {" "} and {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:96:146
              </span>
            </span>
            <NoBreak>
              <Math>
                $1$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:96:154
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} Let this be the small surprise that closes the second pass; formal “zero-sphere” terminology is unnecessary here.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:96:154
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
                Vector lengths.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:102:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Third pass through {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:104:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $2,3,n,1$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:104:37
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} Introduce a vector concretely as an arrow with coordinate components, and explain those components before introducing the norm bars. Relate its length to the distance from the origin to its endpoint.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:104:37
              </span>
            </span>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              In two dimensions, for {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:106:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $u=(u_1,u_2)$
              </Math>
              <span class="t-3003-c">
                ,
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:106:45
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
                ./src/content/bt3/bt3.wly:112:9
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
                  ./src/content/bt3/bt3.wly:116:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} For {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:116:45
              </span>
            </span>
            <NoBreak>
              <Math>
                $u=(u_1,u_2,u_3)$
              </Math>
              <span class="t-3003-c">
                ,
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:116:67
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
                ./src/content/bt3/bt3.wly:122:9
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
                  ./src/content/bt3/bt3.wly:126:10
                </span>
              </span>
              <Math>
                $n$
              </Math>
              <span class="t-3003-c">
                {" "} dimensions.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:126:30
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} For {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:126:43
              </span>
            </span>
            <NoBreak>
              <Math>
                $u=(u_1,\ldots,u_n)$
              </Math>
              <span class="t-3003-c">
                ,
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:126:68
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
                ./src/content/bt3/bt3.wly:132:9
              </span>
            </span>
            <Math>
              $\|u-v\|$
            </Math>
            <span class="t-3003-c">
              {" "} or assume fluency with vector algebra.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:132:98
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
                  ./src/content/bt3/bt3.wly:136:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} A single coordinate {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:136:42
              </span>
            </span>
            <Math>
              $x$
            </Math>
            <span class="t-3003-c">
              {" "} gives
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:136:66
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
                ./src/content/bt3/bt3.wly:142:9
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
                Exercise possibilities.
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:148:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Keep exercises at the end of the bootcamp. Choose a small selection that revisits all three stories: compute a three-dimensional distance; recognize a circle or sphere's center and radius; describe the one-dimensional fixed-distance set; compute a vector's length, including one with negative components. Include a case where changing signs leaves the length unchanged.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:150:9
              </span>
            </span>
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <span class="t-3003-c">
              Reserve, if still wanted: a coordinate-based pair of questions on the distance between two vector endpoints and whether two three-dimensional vectors are orthogonal. First expand the endpoint differences explicitly; only then identify that distance as {" "}
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:154:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $\|u-v\|$
              </Math>
              <span class="t-3003-c">
                .
                <span class="t-3003">
                  ./src/content/bt3/bt3.wly:154:270
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} A right-angle test can use the three lengths and the Pythagorean theorem. This is not part of the three-pass core, and should not require an unexplained norm identity or introduce the dot product in passing.
              <span class="t-3003">
                ./src/content/bt3/bt3.wly:154:270
              </span>
            </span>
          </p>
        </CodexSuggestion>
      </Section>
    </>}
  </>;
};