import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { CentralDisplay, CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import InlineImage  from "~/components/InlineImage";
import { MathBlock, Math }  from "~/components/Math";
import MathJaxSvgExportTooltip  from "~/components/MathJaxSvgExportTooltip";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageLeft, ImageRight }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { StarDivider }  from "~/components/StarDivider";
import Table  from "~/components/Table";
import { SolutionNote, Example, NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter2__() {
  return (
    <Article
      prevPage="/article/chapter1"
      nextPage="/article/chapter3"
      pageNecessaryMargin={650}
      maxElementWidth={900}
      id="_33_h.a.i_"
      path="/article/chapter2"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            <span class="t-3003-c">
              definition
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:4:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            <span class="t-3003-c">
              measuring slope
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:51:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=section-3">
            <span class="t-3003-c">
              sign combinations
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:124:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            <span class="t-3003-c">
              pathological cases
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:279:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-4">
          <InChapterLink href="?id=section-5">
            <span class="t-3003-c">
              “rise over run”
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:309:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-5">
          <InChapterLink href="?id=section-6">
            <span class="t-3003-c">
              solving for “rise” and “run”
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:360:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-6">
          <InChapterLink href="?id=section-7">
            <span class="t-3003-c">
              slopes and line equations
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:392:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-7">
          <InChapterLink href="?id=section-8">
            <span class="t-3003-c">
              slopes and units
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:484:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-8">
          <InChapterLink href="?id=section-9">
            <span class="t-3003-c">
              postscript: units vs dimensions
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:606:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-9">
          <InChapterLink href="?id=exercises">
            <span class="t-3003-c">
              exercises
              <span class="t-3003">
                ./src/content/ch2/ch2^exercises/__parent.wly:1:1
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 2:">
        <span class="t-3003-c">
          Slopes
          <span class="t-3003">
            ./src/content/ch2/__parent.wly:2:11
          </span>
        </span>
      </ArticleTitle>
      <Section id="section-1">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Definition.
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:4:6
              </span>
            </span>
          </b>
          {" "} The {" "}
          <i>
            slope
          </i>
          {" "} of a line is a
          measure of how “steep” the line is.
          Here are a few examples:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/2--j.svg"
          local_url="./images/c2_slope_examples.svg"
          intrinsicWidth={470}
          intrinsicHeight={945}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            To explain, the slope of a line is...
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:11:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            the number of units the line goes up
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:13:7
            </span>
          </span>
          <br />
          <span class="t-3003-c">
            with each unit to the right
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:15:5
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...assuming that numbers on the {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:17:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $y$
            </Math>
            -axis
          </NoBreak>
          {" "} increase
          going up and that numbers on the {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -axis
          </NoBreak>
          {" "} increase
          going right, as is usually the case.
          Or...
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            the amount of vertical change per
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:25:7
            </span>
          </span>
          <br />
          <span class="t-3003-c">
            unit of horizontal change
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:27:5
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...expresses the same idea.
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:31:5
            </span>
          </span>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            For example, the line below has slope 1, because
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:33:5
            </span>
          </span>
          {" "}
          {" "}
          it goes up by {" "}
          <Math>
            $1$
          </Math>
          {" "} unit for each unit to the right:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/P_gw.svg"
          local_url="./images/c2_slope_1_example.svg"
          intrinsicWidth={327}
          intrinsicHeight={321}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            On the other hand, the line below has slope
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:39:5
            </span>
          </span>
          {" "}
          {" "}
          {" "}{" "}
          <NoBreak>
            <Math>
              $-0.5$
            </Math>
            ,
          </NoBreak>
          {" "} because it goes up by {" "}
          <i>
            minus
          </i>
          {" "} {" "}
          <Math>
            $0.5$
          </Math>
          {" "} units
          with each unit to the right:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/0j6M.svg"
          local_url="./images/c2_slope_minus_0.5_example.svg"
          intrinsicWidth={340}
          intrinsicHeight={329}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...and so on.
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:46:5
            </span>
          </span>
        </OuterP>
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
              Measuring Slope.
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:51:6
              </span>
            </span>
          </b>
          {" "}
          The slope of a line is also the ratio of vertical
          change to horizontal change between any two
          distinct points {" "}
          <NoBreak>
            <Math>
              $A$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $B$
          </Math>
          {" "} on the line:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/v-HV.svg"
          local_url="./images/c2_vertical_change_over_horizontal_change_grey_cloud.svg"
          intrinsicWidth={405}
          intrinsicHeight={390}
        />
        <Pause />
        <MathBlock>
          $$
          \te&#123;slope&#125; = &#123;\te&#123;vertical change from A to B&#125; \over \te&#123;horizontal change from A to B&#125;&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Indeed, dividing the vertical change by the
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:61:5
            </span>
          </span>
          {" "}
          {" "}
          horizontal change gives the per-horizontal-unit
          vertical change.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            If
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:65:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          A = (x_1, y_1)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:69:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          B = (x_2, y_2)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            then
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:73:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x_2 - x_1
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:77:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          y_2 - y_1
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            are the horizontal and the vertical change,
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:81:5
            </span>
          </span>
          {" "}
          {" "}
          respectively, from {" "}
          <Math>
            $A$
          </Math>
          {" "} to {" "}
          <NoBreak>
            <Math>
              $B$
            </Math>
            ,
          </NoBreak>
          {" "} so
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;slope&#125; = &#123;y_2 - y_1 \over x_2 - x_1&#125;
          $$
          <ImageRight
            src="/build-img/svgo-svg/EgBm.svg"
            offsetY="-0.7em"
            offsetX="3em"
            atLeastAsWide={true}
            local_url="./images/c2_slope_formula_cloud.svg"
            intrinsicWidth={600}
            intrinsicHeight={400}
          />
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            We call this equation the {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:93:5
            </span>
          </span>
          <i>
            slope formula
          </i>
          .
        </OuterP>
        <Pause />
        <Example id="_27_h.a.i_">
          <OuterP>
            <b>
              Example 1.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              A line that passes through the points
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:98:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            A = (-2, 5)
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              and
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:102:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            B = (4, 1)
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              has slope
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:106:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            &#123;1 - 5 \over 4 - (-2)&#125; = &#123;-4 \over 6&#125; = - &#123;2 \over 3&#125;.
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
        </Example>
        <Pause />
        <StarDivider />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (In {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:113:5
            </span>
          </span>
          <InChapterLink
            href="#_27_h.a.i_"
            class="in-chapter-link"
          >
            Example 1
          </InChapterLink>
          &#8288;,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          1 - 5
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is the vertical change from {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:117:5
            </span>
          </span>
          <Math>
            $A$
          </Math>
          {" "} to {" "}
          <NoBreak>
            <Math>
              $B$
            </Math>
            ,
          </NoBreak>
          {" "} while
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          4 - (-2)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is the horizontal change from {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:121:5
            </span>
          </span>
          <Math>
            $A$
          </Math>
          {" "} to {" "}
          <NoBreak>
            <Math>
              $B$
            </Math>
            .)
          </NoBreak>
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 1 && <>
      <Pause />
      <Section id="section-3">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Sign Combinations.
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:124:6
              </span>
            </span>
          </b>
          {" "}
          Technically, quantities such as
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x_2 - x_1
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:129:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          y_2 - y_1
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            are not distances but {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:133:5
            </span>
          </span>
          <i>
            differences
          </i>
          {" "} (or,
          equivalently, {" "}
          <i>
            changes
          </i>
          ). A distance, by
          definition, is a nonnegative number, while a
          difference carries no such restriction.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            In particular, since
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:138:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x_2 - x_1
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            can be positive or negative, while
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:142:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          y_2 - y_1
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            can be positive or negative or zero—more on
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:146:5
            </span>
          </span>
          {" "}
          {" "}
          zero below—the following sign combinations
          arise (lines of slope zero not included):
        </OuterP>
        <Pause />
        <Table
          class="lines"
          style="margin-top:0.5em;margin-bottom:0.5em;"
        >
          <colgroup>
            <col width={120} />
            <col width={120} />
            <col width={120} />
            <col width={120} />
          </colgroup>
          <tbody>
            <tr>
              <td>
                <Math>
                  $x_2 - x_1$
                </Math>
              </td>
              <td>
                <Math>
                  $y_2 - y_1$
                </Math>
              </td>
              <td>
                <img
                  src="/build-img/svg/za9i.svg"
                  width={50}
                  style="padding-top:7px;padding-bottom:7px;"
                  intrinsicWidth="311.273"
                  intrinsicHeight="247.518"
                />
                <span class="t-3003 t-3003-i">
                  <span class="t-3003-i-url">
                    ./images/c2_image_icon.svg
                    <span
                      class="t-3003-i-copy"
                      data-copy-src="./images/c2_image_icon.svg"
                      onclick="event.stopPropagation(); navigator.clipboard.writeText(this.dataset.copySrc); return false;"
                      title="Copy image src"
                    >
                      {" "} ⧉
                    </span>
                  </span>
                </span>
              </td>
              <td>
                <MathBlock>
                  $$
                  &#123;y_2-y_1 \over x_2-x_1&#125;
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </td>
            </tr>
            <tr>
              <td>
                <Math>
                  $+$
                </Math>
              </td>
              <td>
                <Math>
                  $+$
                </Math>
              </td>
              <td>
                <img
                  src="/build-img/svgo-svg/a4fG.svg"
                  style="margin-top:7px;margin-bottom:7px;width:105px;"
                  intrinsicWidth="453.802"
                  intrinsicHeight="407.973"
                />
                <span class="t-3003 t-3003-i">
                  <span class="t-3003-i-url">
                    ./images/c2_plus_plus_slope.svg
                    <span
                      class="t-3003-i-copy"
                      data-copy-src="./images/c2_plus_plus_slope.svg"
                      onclick="event.stopPropagation(); navigator.clipboard.writeText(this.dataset.copySrc); return false;"
                      title="Copy image src"
                    >
                      {" "} ⧉
                    </span>
                  </span>
                </span>
              </td>
              <td>
                <MathBlock>
                  $$
                  &#123;+ \over +&#125; = \,+
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </td>
            </tr>
            <tr>
              <td>
                <Math>
                  $-$
                </Math>
              </td>
              <td>
                <Math>
                  $-$
                </Math>
              </td>
              <td>
                <img
                  src="/build-img/svgo-svg/dHNp.svg"
                  width={105}
                  style="margin-top:7px;margin-bottom:7px;"
                  intrinsicWidth="471.106"
                  intrinsicHeight="409.862"
                />
                <span class="t-3003 t-3003-i">
                  <span class="t-3003-i-url">
                    ./images/c2_minus_minus_slope.svg
                    <span
                      class="t-3003-i-copy"
                      data-copy-src="./images/c2_minus_minus_slope.svg"
                      onclick="event.stopPropagation(); navigator.clipboard.writeText(this.dataset.copySrc); return false;"
                      title="Copy image src"
                    >
                      {" "} ⧉
                    </span>
                  </span>
                </span>
              </td>
              <td>
                <MathBlock>
                  $$
                  &#123;- \over -&#125; = \,+
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </td>
            </tr>
            <tr>
              <td>
                <Math>
                  $+$
                </Math>
              </td>
              <td>
                <Math>
                  $-$
                </Math>
              </td>
              <td>
                <img
                  src="/build-img/svgo-svg/st9S.svg"
                  width={105}
                  style="margin-top:7px;margin-bottom:7px;"
                  intrinsicWidth="466.97"
                  intrinsicHeight="418.406"
                />
                <span class="t-3003 t-3003-i">
                  <span class="t-3003-i-url">
                    ./images/c2_plus_minus_slope.svg
                    <span
                      class="t-3003-i-copy"
                      data-copy-src="./images/c2_plus_minus_slope.svg"
                      onclick="event.stopPropagation(); navigator.clipboard.writeText(this.dataset.copySrc); return false;"
                      title="Copy image src"
                    >
                      {" "} ⧉
                    </span>
                  </span>
                </span>
              </td>
              <td>
                <MathBlock>
                  $$
                  &#123;- \over +&#125; = \,-
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </td>
            </tr>
            <tr>
              <td>
                <Math>
                  $-$
                </Math>
              </td>
              <td>
                <Math>
                  $+$
                </Math>
              </td>
              <td>
                <img
                  src="/build-img/svgo-svg/dHNp.svg"
                  width={105}
                  style="margin-top:7px;margin-bottom:7px;"
                  intrinsicWidth="471.106"
                  intrinsicHeight="409.862"
                />
                <span class="t-3003 t-3003-i">
                  <span class="t-3003-i-url">
                    ./images/c2_minus_minus_slope.svg
                    <span
                      class="t-3003-i-copy"
                      data-copy-src="./images/c2_minus_minus_slope.svg"
                      onclick="event.stopPropagation(); navigator.clipboard.writeText(this.dataset.copySrc); return false;"
                      title="Copy image src"
                    >
                      {" "} ⧉
                    </span>
                  </span>
                </span>
              </td>
              <td>
                <MathBlock>
                  $$
                  \frac&#123;+&#125;&#123;-&#125; = \,-
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </td>
            </tr>
          </tbody>
        </Table>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            In fact, we {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:253:5
            </span>
          </span>
          <i>
            should
          </i>
          {" "} be able to algebraically
          verify that the slope formula gives the same
          answer if {" "}
          <Math>
            $(x_1, y_1)$
          </Math>
          {" "} and {" "}
          <Math>
            $(x_2, y_2)$
          </Math>
          {" "} swap
          places, that is, show that the fractions
          <ImageRight
            src="/build-img/svgo-svg/9GPK.svg"
            line={3}
            offsetX="-0.5em"
            local_url="./images/c2_swap_cloud.svg"
            intrinsicWidth={400}
            intrinsicHeight={200}
          />
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;y_2 - y_1 \over x_2 - x_1&#125;\qquad\,\,\,\,\,\te&#123;and&#125;\,\,\,\,\,\qquad&#123;y_1 - y_2 \over x_1 - x_2&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            are somehow equal. Indeed,
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:265:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;y_2 - y_1 \over x_2 - x_1&#125; = &#123;-(y_2 - y_1) \over -(x_2 - x_1)&#125; = &#123;y_1 - y_2 \over x_1 - x_2&#125;
          $$
          <ImageLeft
            src="/build-img/svgo-svg/kzAf.svg"
            offsetX="2.5em"
            offsetY={0}
            atLeastAsWide={true}
            local_url="./images/c2_a_b_fraction_cloud.svg"
            intrinsicWidth={300}
            intrinsicHeight={500}
          />
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            So both forms of the slope formula are equally valid.
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:274:5
            </span>
          </span>
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 2 && <>
      <Pause />
      <Section id="section-4">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Pathological Cases.
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:279:6
              </span>
            </span>
          </b>
          {" "}
          If
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x_2 - x_1 = 0
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            the slope formula “breaks down” because
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:284:5
            </span>
          </span>
          {" "}
          {" "}
          division by 0 is undefined. This occurs, e.g., if
          we attempt to measure the slope of a vertical
          line:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/o4Yb.svg"
          local_url="./images/c2_vertical_line.svg"
          intrinsicWidth={355}
          intrinsicHeight={270}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Indeed, vertical lines have {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:292:5
            </span>
          </span>
          <i>
            undefined
          </i>
          {" "} slope.
          Moreover the bad case
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x_2 - x_1 = 0
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            also occurs if the points
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:297:5
            </span>
          </span>
          {" "}
          {" "}
          {" "}{" "}
          <Math>
            $(x_1, y_1)$
          </Math>
          {" "} and {" "}
          <Math>
            $(x_2, y_2)$
          </Math>
          {" "} coincide. In that
          case, the slope formula gives
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \frac&#123;y_2 - y_1&#125;&#123;x_2 - x_1&#125; = \frac&#123;0&#125;&#123;0&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            which could be anything. (Technically, {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:303:5
            </span>
          </span>
          <NoBreak>
            “
            <Math>
              $0/0$
            </Math>
            ”
          </NoBreak>
          {" "} is
          undefined.) Indeed, infinitely many different
          lines pass through any given point!
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 3 && <>
      <Pause />
      <Section id="section-5">
        <OuterP>
          <b>
            <span class="t-3003-c">
              “Rise over Run”.
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:309:6
              </span>
            </span>
          </b>
          {" "}
          Some people remember the slope formula as “slope
          equals rise over run” (i.e., {" "}
          <NoBreak>
            “
            <Math>
              $\te&#123;slope&#125; =$
            </Math>
          </NoBreak>
          <span class="nobreak">
            <InlineImage
              src="/build-img/svgo-svg/OonE.svg"
              width="28px"
              intrinsicWidth={61}
              intrinsicHeight={62}
            />
            ”),
          </span>
          {" "} following such a picture:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/nL2k.svg"
          local_url="./images/c2_rise_over_run_1st_figure.svg"
          intrinsicWidth={300}
          intrinsicHeight="245.948"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            In physics, a
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:323:5
            </span>
          </span>
          {" "}
          {" "}
          one-dimensional displacement is measured as
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \left(&#123;\te&#123;coordinate&#125; \atop \te&#123;at arrival&#125;&#125;\right)\,\, - \,\,\left(&#123;\te&#123;coordinate&#125; \atop \te&#123;at start&#125;&#125;\right)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            matching the coordinate differences
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:330:5
            </span>
          </span>
          {" "}
          {" "}
          {" "}{" "}
          <NoBreak>
            “
            <Math>
              $x_2 - x_1\!$
            </Math>
            ”,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            “
            <Math>
              $y_2 - y_1\!$
            </Math>
            ”
          </NoBreak>
          {" "} in the slope formula.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            (In order not to discriminate, maybe we should
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:333:5
            </span>
          </span>
          {" "}
          {" "}
          also include this picture:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/x7mx.svg"
          local_url="./images/c2_rise_over_run_2nd_figure.svg"
          intrinsicWidth={300}
          intrinsicHeight="245.258"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Then “rise” and “run” have their signs flipped,
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:339:5
            </span>
          </span>
          {" "}
          {" "}
          but the ratio rise-over-run is the same.)
        </OuterP>
        <Pause />
        <OuterP>
          <i>
            <span class="t-3003-c">
              An Additional Miscellaneous Notation.
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:344:6
              </span>
            </span>
          </i>
          {" "}
          The slope formula is occasionally written
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;slope&#125; = \frac&#123;\Delta y&#125;&#123;\Delta x&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            where the foreign-looking symbols {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:351:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $\Delta x$
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <Math>
            $\Delta y$
          </Math>
          {" "} stand for
          {" "}
          <NoBreak>
            “
            <Math>
              $x_2 - x_1$
            </Math>
            ”,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            “
            <Math>
              $y_2 - y_1$
            </Math>
            ”
          </NoBreak>
          {" "} respectively. (Or,
          a little more exactly, as shorthands for the
          phrases “change in {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            ”,
          </NoBreak>
          {" "} “change in {" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            ”.)
          </NoBreak>
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 4 && <>
      <Pause />
      <Section id="section-6">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Solving for “rise” and “run”.
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:360:6
              </span>
            </span>
          </b>
          {" "}
          Multiplying
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;slope&#125; = &#123;\te&#123;rise&#125; \over \te&#123;run&#125;&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            on each side by “run” gives
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:365:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;slope&#125; \times \te&#123;run&#125; = \te&#123;rise&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            or “rise equals slope times run”. After which,
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:371:5
            </span>
          </span>
          {" "}
          {" "}
          for nonzero slope, dividing each side by “slope” gives
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;run&#125; = &#123;\te&#123;rise&#125; \over \te&#123;slope&#125;&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            or “run equals rise over slope”. Or:
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:378:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/DoAv.svg"
          local_url="./images/c2_flower_bed_1.svg"
          intrinsicWidth={340}
          intrinsicHeight={415}
        />
        <Pause />
        <StarDivider style="margin-top:-0.3em" />
      </Section>
    </>}
    {visibleRestSections() > 5 && <>
      <Pause />
      <Section id="section-7">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Slopes and Line Equations.
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:392:6
              </span>
            </span>
          </b>
          {" "} An equation of the
          form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          y = ax + b
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            where {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:397:5
            </span>
          </span>
          <Math>
            $a$
          </Math>
          {" "} and {" "}
          <Math>
            $b$
          </Math>
          {" "} are constants defines a line in
          the Cartesian plane. E.g.:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/LVCC.svg"
          local_url="./images/c2_line_equation_examples.svg"
          intrinsicWidth={644}
          intrinsicHeight={680}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            For {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:403:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $y = ax + b$
            </Math>
            ,
          </NoBreak>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          y = a\cdot 0 + b = b
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            at {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:407:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $x = 0$
            </Math>
            ,
          </NoBreak>
          {" "} so {" "}
          <Math>
            $b$
          </Math>
          {" "} is the height of the line at
          {" "}
          <NoBreak>
            <Math>
              $x = 0$
            </Math>
            .
          </NoBreak>
          {" "} (FYI, this height is called the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <NoBreak>
            <Math>
              $y$
            </Math>
            <span class="t-3003-c">
              -intercept
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:410:10
              </span>
            </span>
          </NoBreak>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            of the line, because {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:412:5
            </span>
          </span>
          <Math>
            $x = 0$
          </Math>
          {" "} is where the line
          crosses the {" "}
          <Math>
            $y$
          </Math>
          {" "} axis. But the point
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (0, b)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is also sometimes called the
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:417:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <NoBreak>
            <Math>
              $y$
            </Math>
            <span class="t-3003-c">
              -intercept
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:419:10
              </span>
            </span>
          </NoBreak>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            of the line, so the term {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:421:5
            </span>
          </span>
          <NoBreak>
            “
            <Math>
              $y$
            </Math>
            -intercept”
          </NoBreak>
          {" "} might
          either refer to the value {" "}
          <Math>
            $b$
          </Math>
          {" "} or to the point
          {" "}
          <NoBreak>
            <Math>
              $(0,b)$
            </Math>
            ,
          </NoBreak>
          {" "} depending.) On the other hand, at
          {" "}
          <NoBreak>
            <Math>
              $x = 1$
            </Math>
            ,
          </NoBreak>
          {" "} we have
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          y = a\cdot 1 + b = a + b
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            so {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:428:5
            </span>
          </span>
          <Math>
            $y$
          </Math>
          {" "} increases by {" "}
          <Math>
            $a$
          </Math>
          {" "} between {" "}
          <Math>
            $x = 0$
          </Math>
          {" "} and
          {" "}
          <NoBreak>
            <Math>
              $x = 1$
            </Math>
            .
          </NoBreak>
          {" "} In fact, {" "}
          <Math>
            $y$
          </Math>
          {" "} increases by {" "}
          <Math>
            $a$
          </Math>
          {" "} each time
          {" "}
          <Math>
            $x$
          </Math>
          {" "} increases by 1, so, by our definition of
          slope—the increase in {" "}
          <Math>
            $y$
          </Math>
          {" "} per unit increase in
          {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            —
          </NoBreak>
          <Math>
            $a$
          </Math>
          {" "} is the slope of {" "}
          <NoBreak>
            <Math>
              $y = ax + b$
            </Math>
            !
          </NoBreak>
        </OuterP>
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
              The equation
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:436:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            y = 100x - 3
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              defines a line of slope 100.
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:440:9
              </span>
            </span>
          </OuterP>
        </Example>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            On the other hand, an equation of the form
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:442:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          y = ax + b
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            cannot describe a vertical line, because {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:446:5
            </span>
          </span>
          <Math>
            $a$
          </Math>
          {" "} is
          the slope, while a vertical line has no slope, so
          what would {" "}
          <Math>
            $a$
          </Math>
          {" "} be equal to? Instead, a vertical
          line is described by an equation of the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x = c
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (see Fig. 1) where {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:453:5
            </span>
          </span>
          <Math>
            $c \in \rr$
          </Math>
          {" "} is a constant,
          similarly to the more familiar equation
          <ImageLeft
            src="/build-img/svgo-svg/3IFS.svg"
            offsetY="-6em"
            offsetX=" 1em"
            local_url="./images/svg_ch2_ch_vertical_line_equation.svg"
            intrinsicWidth={200}
            intrinsicHeight="335.103"
          />
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          y = b
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for a horizontal line, where {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:463:5
            </span>
          </span>
          <Math>
            $b \in \rr$
          </Math>
          {" "} is a
          constant.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            An equation can also define a line without having either form
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:466:5
            </span>
          </span>
          {" "}
          {" "}
          {" "}{" "}
          <NoBreak>
            “
            <Math>
              $y = ax + b$
            </Math>
            ”
          </NoBreak>
          {" "} or {" "}
          <NoBreak>
            “
            <Math>
              $x = c$
            </Math>
            ”.
          </NoBreak>
          {" "} For example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x + y = 3
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is equivalent to
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:471:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          y = 3 - x
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and thus describes a line of {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:475:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $y$
            </Math>
            -intercept
          </NoBreak>
          {" "} {" "}
          <Math>
            $3$
          </Math>
          {" "}
          and slope {" "}
          <NoBreak>
            <Math>
              $-1$
            </Math>
            .
          </NoBreak>
          <ImageRight
            src="/build-img/svgo-svg/h7oS.svg"
            line={1}
            local_url="./images/svg_3_plus_minus_one_times_x_cloud.svg"
            intrinsicWidth={300}
            intrinsicHeight={150}
          />
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 6 && <>
      <Pause />
      <Section id="section-8">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Slopes and Units.
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:484:6
              </span>
            </span>
          </b>
          {" "}
          If the {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -
          </NoBreak>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -axes
          </NoBreak>
          {" "} have units then a line's
          slope has units
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;$y$ axis units&#125; \over \te&#123;$x$ axis units&#125;&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            because slope is a
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:492:5
            </span>
          </span>
          {" "}
          {" "}
          change in {" "}
          <Math>
            $y$
          </Math>
          {" "} divided by a change in {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            For example, if the units on the {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:495:5
            </span>
          </span>
          <Math>
            $y$
          </Math>
          {" "} axis are
          meters (“m”) and the units on the {" "}
          <Math>
            $x$
          </Math>
          {" "} axis are
          seconds (“s”) then the slope has units
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;$y$ axis units&#125; \over \te&#123;$x$ axis units&#125;&#125; = &#123;\te&#123;m&#125; \over \te&#123;s&#125;&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            also known as {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:503:5
            </span>
          </span>
          <i>
            meters per second
          </i>
          . For example, the following graph purports to plot the height of a
          balloon, in meters, as a function of time elapsed,
          in seconds:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/88nB.svg"
          local_url="./images/c2_meters_over_seconds_balloon.svg"
          intrinsicWidth={423}
          intrinsicHeight={325}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            The slope of the graph is {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:510:5
            </span>
          </span>
          <Math>
            $0.75$
          </Math>
          {" "} {" "}
          <i>
            meters per
            second
          </i>
          {" "} because the balloon's height increases by
          three {" "}
          <i>
            meters
          </i>
          {" "} over the first four {" "}
          <i>
            seconds
          </i>
          {" "} (if
          you had noticed):
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;slope&#125; \left(\!= &#123;\te&#123;rise&#125; \over \te&#123;run&#125;&#125;\right) = &#123;3\te&#123;m&#125; \over 4\te&#123;s&#125;&#125; = 0.75\te&#123;m&#125;/\te&#123;s&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            In fact, the slope is the balloon's upward
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:519:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            velocity
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:521:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            since velocity is defined as
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:523:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            displacement over time
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:525:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            which is “rise over run” for this graph. (More generally,
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:527:5
            </span>
          </span>
          {" "}
          {" "}
          we have
        </OuterP>
        <Pause />
        <CentralDisplay>
          <span class="t-3003-c">
            “slope = velocity”
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:530:7
            </span>
          </span>
        </CentralDisplay>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            whenever the {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:532:5
            </span>
          </span>
          <Math>
            $y$
          </Math>
          {" "} axis has dimensions of length and
          the {" "}
          <Math>
            $x$
          </Math>
          {" "} axis has dimensions of time—whether the
          slope turns out to be {" "}
          <Math>
            $\te&#123;m&#125;/\te&#123;s&#125;$
          </Math>
          {" "} or {" "}
          <Math>
            $\te&#123;km&#125;/\te&#123;s&#125;$
          </Math>
          {" "}
          or km/hour, etc, depends on the exact units involved.)
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            Slopes are often called
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:537:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            rates of change
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:539:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            in the presence of units. More particularly, in the
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:541:5
            </span>
          </span>
          {" "}
          {" "}
          common case when the {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -axis
          </NoBreak>
          {" "} denotes time, the
          formula
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;slope&#125; = &#123;\te&#123;rise&#125; \over \te&#123;run&#125;&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            can be rephrased as
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:547:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;“&#125;\rt&#123;0.1&#125;\te&#123;rate of change&#125; \,\,=\,\,
          &#123;\!\rt&#123;0.15&#125;\te&#123;amount of change&#125;\!\rt&#123;0.1&#125; \over \te&#123;amount of time&#125;&#125;\rt&#123;0.1&#125;\te&#123;”&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            where “amount of change” is short for “amount of
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:552:5
            </span>
          </span>
          {" "}
          {" "}
          change on the {" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -axis”.
          </NoBreak>
          {" "} The three forms of the slope formula give this
          triptych in “applied” language:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/s_jj.svg"
          local_url="./images/c2_flower_bed_2.svg"
          intrinsicWidth={512}
          intrinsicHeight={460}
        />
        <Pause />
        <StarDivider style="margin-top:-0.3em" />
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
              The increase in height of the above balloon
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:564:9
              </span>
            </span>
            {" "}
            {" "}
            over a period of 5 seconds is
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            0.75\te&#123;m&#125;/\te&#123;s&#125; \times 5\te&#123;s&#125; = 3.75\te&#123;m&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              following the template
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:571:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \begin&#123;array&#125;&#123;c&#125;
            \rt&#123;0.08&#125;
            (\te&#123;rate of change&#125;) \times \te&#123;(amount of time)&#125;\\
            = \te&#123;(amount of change)&#125;\rt&#123;0.05&#125;
            \end&#123;array&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              found in the second line of the table.
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:581:9
              </span>
            </span>
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
              The time for the balloon to go up by (say) {" "}
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:585:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $4$
              </Math>
              m
            </NoBreak>
            {" "} is
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \frac&#123;4\te&#123;m&#125;&#125;&#123;0.75\te&#123;m&#125;/\te&#123;s&#125;&#125;\! = 5.3333...\te&#123;s&#125;
            $$
            <ImageRight
              src="/build-img/svgo-svg/mtGc.svg"
              atLeastAsWide={true}
              local_url="./images/c2_units_cloud.svg"
              intrinsicWidth={930}
              intrinsicHeight={250}
            />
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              following the template
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:594:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \rt&#123;0.1&#125;
            \te&#123;amount of time&#125; \,\,=\,\, \frac&#123;\!\rt&#123;0.15&#125;\te&#123;amount of change&#125;\!\rt&#123;0.1&#125;&#125;&#123;\te&#123;rate of change&#125;&#125;
            \rt&#123;0.1&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              found in the third line of the table.
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:602:9
              </span>
            </span>
          </OuterP>
        </Example>
      </Section>
    </>}
    {visibleRestSections() > 7 && <>
      <Pause />
      <Section id="section-9">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Postscript: units vs dimensions.
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:606:6
              </span>
            </span>
          </b>
          {" "}
          Comparing
        </OuterP>
        <Pause />
        <CentralDisplay>
          <span class="t-3003-c">
            “the {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:609:7
            </span>
          </span>
          <NoBreak>
            <Math>
              $x$
            </Math>
            <span class="t-3003-c">
              -axis
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:609:15
              </span>
            </span>
          </NoBreak>
          <span class="t-3003-c">
            {" "} has dimensions of time”
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:609:15
            </span>
          </span>
        </CentralDisplay>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            with
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:611:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplay>
          <span class="t-3003-c">
            “the {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:613:7
            </span>
          </span>
          <NoBreak>
            <Math>
              $x$
            </Math>
            <span class="t-3003-c">
              -axis
              <span class="t-3003">
                ./src/content/ch2/ch2.wly:613:15
              </span>
            </span>
          </NoBreak>
          <span class="t-3003-c">
            {" "} has units of seconds”
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:613:15
            </span>
          </span>
        </CentralDisplay>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            one could easily be tricked into thinking that a
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:615:5
            </span>
          </span>
          {" "}
          {" "}
          “dimension” is the same thing as a “unit”. In
          fact, dimensions are broader categories, such as
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            time
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:619:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            length
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:620:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            mass
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:621:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            each of which covers {" "}
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:623:5
            </span>
          </span>
          <i>
            several
          </i>
          {" "} units.
          For example, the “time” dimension includes units such as
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            years, seconds, minutes, hours, days
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:626:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (etc), while in
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:628:5
            </span>
          </span>
          {" "}
          {" "}
          the “length” dimension one finds
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            meters, kilometers, millimeters, yards, feet
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:631:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (etc), and so on. (You can imagine some of the
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:633:5
            </span>
          </span>
          {" "}
          {" "}
          units found in the “mass” dimension, e.g..) On
          the other hand, dimensions can be multiplied and
          divided just like units. For example,
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            length over time
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:638:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is another dimension, commonly known as...
            <span class="t-3003">
              ./src/content/ch2/ch2.wly:640:5
            </span>
          </span>
          {" "}
          {" "}
          velocity!
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 8 && <>
      <Pause />
      <Exercises
        at_end_of_page={true}
        mode="dual"
        show_curlicue={true}
        id="_32_h.a.i_"
      >
        <Exercise number={1}>
          <ExerciseStatement id="_28_h.a.i_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                True or false: Lines of slope {" "}
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_lines_of_slope_1_over_2_.wly:4:5
                </span>
              </span>
              <Math>
                $-&#123;1 \over 2&#125;$
              </Math>
              {" "}
              are perpendicular to lines of slope {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                True, as this pair of lines illustrates:
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_lines_of_slope_1_over_2_.wly:9:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/t-Sk.svg"
              class="relative w-fit"
              local_url="./images/c2_slope_two_and_minus_one_half.svg"
              intrinsicWidth={400}
              intrinsicHeight={400}
            >
              <ImageRight
                src="/build-img/svgo-svg/Y5Cw.svg"
                offsetY="20%"
                offsetX="-5%"
                local_url="./images/c2_slope_two_and_minus_one_half_cloud_right.svg"
                intrinsicWidth={340}
                intrinsicHeight="154.789"
              />
              <ImageLeft
                src="/build-img/svgo-svg/P0MQ.svg"
                offsetX="-25%"
                offsetY="47%"
                local_url="./images/c2_slope_two_and_minus_one_half_cloud_left.svg"
                intrinsicWidth={340}
                intrinsicHeight={180}
              />
            </Image>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The two triangles are related
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_lines_of_slope_1_over_2_.wly:25:9
                </span>
              </span>
              {" "}
              {" "}
              by a {" "}
              <Math>
                $90^\circ$
              </Math>
              {" "} rotation and so
              are the lines defined by their hypotenuses!
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  More generally, a line of slope {" "}
                  <span class="t-3003">
                    ./src/content/ch2/ch2^exercises/_lines_of_slope_1_over_2_.wly:31:13
                  </span>
                </span>
                <Math>
                  $p$
                </Math>
                {" "} is
                perpendicular to a line of slope {" "}
                <NoBreak>
                  <Math>
                    $-1/p$
                  </Math>
                  ,
                </NoBreak>
                {" "} for
                all {" "}
                <NoBreak>
                  <Math>
                    $p \ne 0$
                  </Math>
                  .
                </NoBreak>
                {" "} By a similar drawing:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/_wle.svg"
                class="relative w-fit"
                local_url="./images/c2_slope_p_minus_one_over_p.svg"
                intrinsicWidth={400}
                intrinsicHeight={400}
              />
              <Pause />
              <StarDivider />
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={2}>
          <ExerciseStatement id="_29_h.a.i_">
            <OuterP>
              <b>
                Exercise 2.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Find the general equation of a line of slope
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_x0_y0_slope_p_general_equation_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <Math>
                $p$
              </Math>
              {" "} passing through a point {" "}
              <NoBreak>
                <Math>
                  $(x_0, y_0)$
                </Math>
                .
              </NoBreak>
              {" "}
              (Hint: Start from the slope formula.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                For {" "}
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_x0_y0_slope_p_general_equation_.wly:10:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x \ne x_0$
                </Math>
                ,
              </NoBreak>
              {" "} a point {" "}
              <Math>
                $(x,y)$
              </Math>
              {" "} is on the
              line of slope {" "}
              <Math>
                $p$
              </Math>
              {" "} if and only if
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              p = &#123;y - y_0 \over x - x_0&#125;
              $$
              <ImageLeft
                src="/build-img/svgo-svg/eaW7.svg"
                offsetX="0rem"
                offsetY="0%"
                atLeastAsWide={true}
                local_url="./images/svg_ch2_ex_x0_y0_line_equation_cloud.svg"
                intrinsicWidth={700}
                intrinsicHeight={800}
              />
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                because
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_x0_y0_slope_p_general_equation_.wly:20:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \,\,&#123;y - y_0 \over x - x_0&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is the slope of the line segment from
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_x0_y0_slope_p_general_equation_.wly:24:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <Math>
                $(x_0,y_0)$
              </Math>
              {" "} to {" "}
              <NoBreak>
                <Math>
                  $(x,y)$
                </Math>
                ,
              </NoBreak>
              {" "} and {" "}
              <Math>
                $(x,y)$
              </Math>
              {" "} is on the line
              exactly when this segment has slope {" "}
              <NoBreak>
                <Math>
                  $p$
                </Math>
                !
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Unfortunately, the equation
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_x0_y0_slope_p_general_equation_.wly:28:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              p = &#123;y - y_0 \over x - x_0&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is not an entirely satisfactory answer,
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_x0_y0_slope_p_general_equation_.wly:32:9
                </span>
              </span>
              {" "}
              {" "}
              because the point {" "}
              <Math>
                $(x,y) = (x_0,y_0)$
              </Math>
              {" "} itself
              does not satisfy the equation. (We find
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              p = &#123;0 \over 0&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                if we plug in {" "}
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_x0_y0_slope_p_general_equation_.wly:38:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x = x_0$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $y = y_0$
                </Math>
                ,
              </NoBreak>
              {" "} which is
              not a valid equality because the right-hand
              side is undefined.)
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Instead, multiplying
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_x0_y0_slope_p_general_equation_.wly:42:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              p = &#123;y - y_0 \over x - x_0&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                on both sides by {" "}
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_x0_y0_slope_p_general_equation_.wly:48:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x-x_0$
                </Math>
                ,
              </NoBreak>
              {" "} we find the
              fraction-less equation
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              p(x-x_0) = y-y_0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which is satisfied by the point {" "}
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_x0_y0_slope_p_general_equation_.wly:55:9
                </span>
              </span>
              <Math>
                $(x,y) = (x_0,y_0)$
              </Math>
              {" "}
              as well as by every other point on the line.
              This can be a final answer, and, pleasingly,
              has the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \te&#123;“&#125;\te&#123;slope&#125; \times \te&#123;run&#125; = \te&#123;rise&#125;\te&#123;”&#125;
              $$
              <ImageRight
                src="/build-img/svgo-svg/8ZCw.svg"
                offsetX="2.5rem"
                offsetY="0%"
                atLeastAsWide={true}
                local_url="./images/svg_slope_times_run_equals_rise_cloud.svg"
                intrinsicWidth={400}
                intrinsicHeight="123.091"
              />
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which makes it easy to remember!
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_x0_y0_slope_p_general_equation_.wly:69:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Note 1.
                  <span class="t-3003">
                    ./src/content/ch2/ch2^exercises/_x0_y0_slope_p_general_equation_.wly:73:10
                  </span>
                </span>
              </i>
              {" "}
              The answer is more often written
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y - y_0 = p(x - x_0)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                with the two sides of the equation swapped, or
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_x0_y0_slope_p_general_equation_.wly:80:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = p(x - x_0) + y_0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                with {" "}
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_x0_y0_slope_p_general_equation_.wly:86:9
                </span>
              </span>
              <Math>
                $y$
              </Math>
              {" "} isolated on the left-hand side. Expanding {" "}
              <Math>
                $p(x-x_0)$
              </Math>
              {" "} gives (after putting {" "}
              <NoBreak>
                “
                <Math>
                  $-px_0$
                </Math>
                ”
              </NoBreak>
              {" "} last)
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = px + y_0 - px_0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which has the form
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_x0_y0_slope_p_general_equation_.wly:92:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = ax + b
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                with {" "}
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_x0_y0_slope_p_general_equation_.wly:98:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $a = p$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $b = y_0 - px_0$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={3}>
          <ExerciseStatement id="_30_h.a.i_">
            <OuterP>
              <b>
                Exercise 3.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Plot the vertical velocity of {" "}
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_vertical_velocity_plot_.wly:4:5
                </span>
              </span>
              <del>
                an object
              </del>
              {" "} a mosquito whose height over time is
              given by this graph (use the same time interval
              as the graph):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/lnNr.svg"
              local_url="./images/1.svg"
              intrinsicWidth={667}
              intrinsicHeight={358}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Here is the “official” graph of the (vertical)
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_vertical_velocity_plot_.wly:16:9
                </span>
              </span>
              {" "}
              {" "}
              velocity:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/u0yv.svg"
              local_url="./images/64.svg"
              intrinsicWidth={623}
              intrinsicHeight={420}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                On each interval, the velocity is the rate of
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_vertical_velocity_plot_.wly:22:9
                </span>
              </span>
              {" "}
              {" "}
              change of the height, i.e., the {" "}
              <i>
                slope
              </i>
              {" "} of
              the height graph. For example, it is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\te&#123;m&#125; \over 1\te&#123;s&#125;&#125; = 1\te&#123;m&#125;/\te&#123;s&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                between {" "}
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_vertical_velocity_plot_.wly:30:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $-4$
                </Math>
                s
              </NoBreak>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $-3$
                </Math>
                s,
              </NoBreak>
              {" "} where the mosquito
              goes up by one meter in one second.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Note 1.
                  <span class="t-3003">
                    ./src/content/ch2/ch2^exercises/_vertical_velocity_plot_.wly:35:10
                  </span>
                </span>
              </i>
              {" "} An empty circle
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Jp8B.svg"
              local_url="./images/svg_empty_circle_alone.svg"
              intrinsicWidth={30}
              intrinsicHeight="30.001"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                indicates a “missing” value. Here, the vertical velocity is {" "}
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_vertical_velocity_plot_.wly:42:9
                </span>
              </span>
              <i>
                undefined
              </i>
              {" "}
              wherever the graph of the height has a sharp
              corner. (Because the slope of the graph is not
              well-defined at such corners.)
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Note 2.
                  <span class="t-3003">
                    ./src/content/ch2/ch2^exercises/_vertical_velocity_plot_.wly:49:10
                  </span>
                </span>
              </i>
              {" "}
              From {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                s
              </NoBreak>
              {" "} to {" "}
              <NoBreak>
                <Math>
                  $2.5$
                </Math>
                s,
              </NoBreak>
              {" "} the
              slope is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;-2\rt&#123;0.05&#125;\te&#123;m&#125; \over 0.5\rt&#123;0.05&#125;\te&#123;s&#125;&#125; = -\rt&#123;0.07&#125;4\rt&#123;0.1&#125;\te&#123;m&#125;/\te&#123;s&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and similarly from
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_vertical_velocity_plot_.wly:55:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <NoBreak>
                <Math>
                  $2.5$
                </Math>
                s
              </NoBreak>
              {" "} to {" "}
              <NoBreak>
                <Math>
                  $3$
                </Math>
                s
              </NoBreak>
              {" "} the slope is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;2\rt&#123;0.05&#125;\te&#123;m&#125; \over 0.5\rt&#123;0.05&#125;\te&#123;s&#125;&#125; = 4\rt&#123;0.1&#125;\te&#123;m&#125;/\te&#123;s&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                because {" "}
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_vertical_velocity_plot_.wly:60:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $2/0.5 = 4$
                </Math>
                .
              </NoBreak>
              {" "} (Think: {" "}
              <i>
                how many times
              </i>
              {" "}
              does {" "}
              <Math>
                $0.5$
              </Math>
              {" "} go into {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                ?)
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={4}>
          <ExerciseStatement id="_31_h.a.i_">
            <OuterP>
              <b>
                Exercise 4.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Digressing on the second-to-last equation
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_y0-px_0_intercept_explanation_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              in the solution to {" "}
              <InChapterLink
                href="#_29_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 2
              </InChapterLink>
              &#8288;, explain why
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y_0 - px_0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is the {" "}
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_y0-px_0_intercept_explanation_.wly:11:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -intercept
              </NoBreak>
              {" "} of the line of slope {" "}
              <Math>
                $p$
              </Math>
              {" "}
              through the point {" "}
              <Math>
                $(x_0,y_0)$
              </Math>
              {" "} using a drawing
              and “rise equals slope times run”.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                E.g.:
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_y0-px_0_intercept_explanation_.wly:17:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/gR1_.svg"
              local_url="./images/c2_y_intercept_explanation.svg"
              intrinsicWidth={500}
              intrinsicHeight={250}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The rise from the {" "}
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_y0-px_0_intercept_explanation_.wly:22:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -intercept
              </NoBreak>
              {" "} to {" "}
              <Math>
                $(x_0, y_0)$
              </Math>
              {" "}
              is {" "}
              <NoBreak>
                <Math>
                  $px_0$
                </Math>
                ,
              </NoBreak>
              {" "} by “rise equals slope times run”, so
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y_0 - px_0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is the {" "}
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_y0-px_0_intercept_explanation_.wly:29:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -intercept.
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Note 1.
                  <span class="t-3003">
                    ./src/content/ch2/ch2^exercises/_y0-px_0_intercept_explanation_.wly:33:10
                  </span>
                </span>
              </i>
              {" "} Our drawing makes some implicit
              assumptions, such as {" "}
              <Math>
                $p &gt; 0$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $x_0 &gt; 0$
                </Math>
                .
              </NoBreak>
              {" "} But
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              px_0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is the rise from the {" "}
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_y0-px_0_intercept_explanation_.wly:38:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -intercept
              </NoBreak>
              {" "} to
              {" "}
              <Math>
                $(x_0, y_0)$
              </Math>
              {" "} regardless of the sign of {" "}
              <Math>
                $p$
              </Math>
              {" "} or
              {" "}
              <Math>
                $x_0$
              </Math>
              {" "} (because {" "}
              <Math>
                $x_0$
              </Math>
              {" "} is the run in all cases),
              making
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y_0 - px_0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                the {" "}
                <span class="t-3003">
                  ./src/content/ch2/ch2^exercises/_y0-px_0_intercept_explanation_.wly:45:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -intercept
              </NoBreak>
              {" "} in all cases.
            </OuterP>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};