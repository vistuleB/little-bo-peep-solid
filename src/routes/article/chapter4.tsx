import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import CodexSuggestions,  { CodexSuggestion }  from "~/components/CodexSuggestions";
import { CentralDisplay, CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { Item, List }  from "~/components/List";
import { Math, MathBlock }  from "~/components/Math";
import MathJaxSvgExportTooltip  from "~/components/MathJaxSvgExportTooltip";
import OutChapterLink  from "~/components/OutChapterLink";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageLeft, ImageRight }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { StarDivider }  from "~/components/StarDivider";
import { SolutionNote, Example, NoBreak, Section, Pause }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter4__() {
  return (
    <Article
      prevPage="/article/chapter3"
      nextPage="/article/chapter5"
      pageNecessaryMargin={1450}
      maxElementWidth={700}
      id="_73_h.a.i_"
      path="/article/chapter4"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            <span class="t-3003-c">
              definitions
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:25:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            <span class="t-3003-c">
              vocabulary
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:80:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=section-3">
            <span class="t-3003-c">
              sketching a derivative
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:97:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            <span class="t-3003-c">
              derivative of a constant function
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:144:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-4">
          <InChapterLink href="?id=section-5">
            <span class="t-3003-c">
              derivative of an affine function
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:187:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-5">
          <InChapterLink href="?id=section-6">
            <span class="t-3003-c">
              units of the derivative
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:247:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-6">
          <InChapterLink href="?id=section-7">
            <span class="t-3003-c">
              the second derivative
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:319:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-7">
          <InChapterLink href="?id=section-8">
            <span class="t-3003-c">
              geometric interpretation of the second derivative
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:412:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-8">
          <InChapterLink href="?id=section-9">
            <span class="t-3003-c">
              vocabulary #1
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:462:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-9">
          <InChapterLink href="?id=section-10">
            <span class="t-3003-c">
              the second derivative of position
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:503:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-10">
          <InChapterLink href="?id=section-11">
            <span class="t-3003-c">
              the jerk
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:634:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-11">
          <InChapterLink href="?id=exercises">
            <span class="t-3003-c">
              exercises
              <span class="t-3003">
                ./src/content/ch4/ch4^exercises/__parent.wly:1:1
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 4:">
        <span class="t-3003-c">
          Derivatives
          <span class="t-3003">
            ./src/content/ch4/__parent.wly:2:11
          </span>
        </span>
      </ArticleTitle>
      <Pause />
      <Image
        src="/build-img/svgo-svg/myNp.svg"
        id="_58_h.a.i_"
        local_url="./images/svg_ch4_ch_polaroid_1.svg"
        intrinsicWidth={510}
        intrinsicHeight={310}
      />
      <Pause />
      <Image
        src="/build-img/svgo-svg/dO9o.svg"
        local_url="./images/svg_ch4_ch_polaroid_2.svg"
        intrinsicWidth={510}
        intrinsicHeight={335}
      />
      <Pause />
      <Image
        src="/build-img/svgo-svg/V6Pe.svg"
        local_url="./images/svg_ch4_ch_polaroid_3.svg"
        intrinsicWidth={510}
        intrinsicHeight={335}
      />
      <Pause />
      <Image
        src="/build-img/svgo-svg/tzk1.svg"
        local_url="./images/svg_ch4_ch_polaroid_4.svg"
        intrinsicWidth={510}
        intrinsicHeight={640}
      />
      <Pause />
      <Image
        src="/build-img/svgo-svg/an0s.svg"
        local_url="./images/svg_ch4_ch_polaroid_5.svg"
        intrinsicWidth={510}
        intrinsicHeight={335}
      />
      <div style="height:1.4em" />
      <Section id="section-1">
        <CodexSuggestions>
          <p>
            <span class="t-3003-c">
              Keep this chapter focused on reading derivatives: slopes, signs, domains, units, and successive derivatives. The particle-system material has moved to Motion in Two Dimensions; the finite-change and differentiation-rule exercises have moved to The Product Rule. Preserve the resulting lightness rather than refill the chapter. Exercise-selection suggestions are collected at the end of the main text and beside the closing exercises.
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:23:9
              </span>
            </span>
          </p>
        </CodexSuggestions>
        <OuterP>
          <b>
            <span class="t-3003-c">
              Definitions.
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:25:6
              </span>
            </span>
          </b>
          {" "}
          The {" "}
          <i>
            derivative
          </i>
          {" "} of a function
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f : \rr \ra \rr
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a (new) function
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:32:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f' : \rr \ra \rr
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            that gives the slope of {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:38:5
            </span>
          </span>
          <Math>
            $f$
          </Math>
          {" "} at each point.
          In other words,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f'(a)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is the slope of the graph {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:45:5
            </span>
          </span>
          <Math>
            $y = f(x)$
          </Math>
          {" "} at
          {" "}
          <NoBreak>
            <Math>
              $x = a$
            </Math>
            .
          </NoBreak>
          {" "} And—surprise!—each pair above has the form {" "}
          <Math>
            $y = f(x)$
          </Math>
          {" "} {" "}
          <NoBreak>
            [
            <Math>
              $=$
            </Math>
          </NoBreak>
          {" "}
          “before”], {" "}
          <Math>
            $y = f'(x)$
          </Math>
          {" "} {" "}
          <NoBreak>
            [
            <Math>
              $=$
            </Math>
          </NoBreak>
          {" "} “after”].
          (Meaning, the “after” graph records the slope
          of the “before” graph.) 
          E.g.:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/G9zf.svg"
          local_url="./images/svg_ch4_ch_explanation1.svg"
          intrinsicWidth={1000}
          intrinsicHeight={385}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Note that {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:55:5
            </span>
          </span>
          <Math>
            $f'\!$
          </Math>
          {" "} (read {" "}
          <NoBreak>
            “
            <Math>
              $f$
            </Math>
          </NoBreak>
          {" "} prime”) remains
          undefined where {" "}
          <Math>
            $y = f(x)$
          </Math>
          {" "} has a sharp “corner”
          and no well-defined slope. By opposition, if there is a well-defined tangent line to
          {" "}
          <Math>
            $y = f(x)$
          </Math>
          {" "} at {" "}
          <Math>
            $x = a$
          </Math>
          {" "} its slope gives {" "}
          <NoBreak>
            <Math>
              $f'(a)$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/Tf6r.svg"
          local_url="./images/svg_ch4_ch_explanation2.svg"
          intrinsicWidth={1000}
          intrinsicHeight={625}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            We can summarize this by...
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:63:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f'(a) = \te&#123;[slope of tangent line to $y = f(x)$ at $x = a$]&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...with the understanding that {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:69:5
            </span>
          </span>
          <Math>
            $f'(a)$
          </Math>
          {" "} is
          undefined if a tangent line does not exist
          or if the tangent is vertical.
          An endpoint does not count as having a tangent, leaving the derivative undefined:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/5-sP.svg"
          local_url="./images/svg_ch4_ch_one_sided_tangent.svg"
          intrinsicWidth={600}
          intrinsicHeight={320}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            In other words, “half-tangents” do not count as tangents!
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:77:5
            </span>
          </span>
        </OuterP>
      </Section>
      <Rest />
    </Article>
  );
}

const Rest = () => {
  const visibleRestSections = useShowMore(11);
  return <>
    {visibleRestSections() > 0 && <>
      <Pause />
      <Section id="section-2">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Vocabulary.
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:80:6
              </span>
            </span>
          </b>
          {" "}
          A function {" "}
          <Math>
            $f : \rr \ra \rr$
          </Math>
          {" "} is
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            differentiable
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:83:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            if {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:85:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $\dom\,f' = \dom\,f$
            </Math>
            .
          </NoBreak>
          {" "} Also, if {" "}
          <NoBreak>
            <Math>
              $a, b \in \rr$
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <NoBreak>
            <Math>
              $a &lt; b$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $f$
          </Math>
          {" "} is
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            differentiable on {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:88:7
            </span>
          </span>
          <Math>
            $[a,b]$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            if {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:90:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $[a,b] \subseteq \dom \,f'$
            </Math>
            .
          </NoBreak>
          {" "} Lastly, {" "}
          <Math>
            $f$
          </Math>
          {" "} is
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            differentiable at {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:92:7
            </span>
          </span>
          <Math>
            $a$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            if {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:94:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $a \in \dom\,f'$
            </Math>
            .
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
              Sketching a Derivative.
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:97:6
              </span>
            </span>
          </b>
          {" "}
          Say you want to sketch the derivative
          of the “before” function from the last “before”/“after” pair above:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/JpFf.svg"
          local_url="./images/derivative_sketching_method_1_step_0.svg"
          intrinsicWidth={429}
          intrinsicHeight={398}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            One method is to eyeball the slope at
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:105:5
            </span>
          </span>
          {" "}
          {" "}
          a few points along the curve, plot these
          values and interpolate:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/0-BA.svg"
          local_url="./images/derivative_sketching_method_1_step_1.svg"
          intrinsicWidth={850}
          intrinsicHeight={446}
        />
        <Pause />
        <Image
          src="/build-img/svgo-svg/azPc.svg"
          local_url="./images/derivative_sketching_method_1_step_2.svg"
          intrinsicWidth={850}
          intrinsicHeight="516.71069"
        />
        <Pause />
        <Image
          src="/build-img/svgo-svg/wTBE.svg"
          local_url="./images/derivative_sketching_method_1_step_3.svg"
          intrinsicWidth={850}
          intrinsicHeight="402.02762"
        >
          <ImageRight
            src="/build-img/svgo-svg/WzTO.svg"
            offsetY="  5%"
            offsetX="-25%"
            local_url="./images/svg_ch4_ch_curve_to_sketch_cloud_cleaned.svg"
            intrinsicWidth={450}
            intrinsicHeight={400}
          />
        </Image>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...voilà!
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:123:5
            </span>
          </span>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            Alternatively, determine intervals on which the derivative
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:125:5
            </span>
          </span>
          {" "}
          {" "}
          is positive and negative, then interpolate via the largest (respectively,
          smallest) value of the derivative in each
          interval:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/eRkQ.svg"
          local_url="./images/derivative_sketching_method_2_step_1.svg"
          intrinsicWidth={1250}
          intrinsicHeight="379.0542"
        />
        <Pause />
        <Image
          src="/build-img/svgo-svg/Biz-.svg"
          local_url="./images/derivative_sketching_method_2_step_2.svg"
          intrinsicWidth={1250}
          intrinsicHeight="370.5058"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            The result (at bottom right)
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:136:5
            </span>
          </span>
          {" "}
          {" "}
          is a charming “robosketch” of the true
          derivative!
          (Well, charming in our opinion, at least.)
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 2 && <>
      <Pause />
      <Section id="section-4">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Derivative of a constant function.
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:144:6
              </span>
            </span>
          </b>
          {" "}
          A constant function has the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x \ra B
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for some {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:149:5
            </span>
          </span>
          <Math>
            $B \in \rr$
          </Math>
          {" "} independent of {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            .
          </NoBreak>
          {" "}
          The graph of the constant function is the line
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          y = B
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            of slope {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:154:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $0$
            </Math>
            .
          </NoBreak>
          {" "} So
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (x \ra B)' = (x \ra 0)
          $$
          <ImageLeft
            src="/build-img/svgo-svg/tkpb.svg"
            atLeastAsWide={true}
            local_url="./images/svg_ch4_ch_constant_derivative_cloud.svg"
            intrinsicWidth={430}
            intrinsicHeight={300}
          />
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            because at each {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:163:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $x$
            </Math>
            -value
          </NoBreak>
          {" "} you find a slope of
          {" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            ,
          </NoBreak>
          {" "} when you look up or down at the graph.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            If we refer to
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:166:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x \ra 0
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            as the
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:170:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            zero function
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:172:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            we can say
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:174:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            ~ the derivative of a constant function
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:176:7
            </span>
          </span>
          {" "}
          {" "}
          is the zero function ~
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            or, more shortly,
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:179:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            ~ the derivative of a constant is zero ~
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:181:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (the way people usually state it).
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:183:5
            </span>
          </span>
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 3 && <>
      <Pause />
      <Section id="section-5">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Derivative of an affine function.
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:187:6
              </span>
            </span>
          </b>
          {" "}
          An affine function has the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x \ra Ax + B
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for constants {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:192:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $A$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $B \in \rr$
            </Math>
            .
          </NoBreak>
          {" "}
          The graph of {" "}
          <Math>
            $x \ra Ax + B$
          </Math>
          {" "} is a line of
          slope {" "}
          <NoBreak>
            <Math>
              $A$
            </Math>
            ,
          </NoBreak>
          {" "} so
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (x \ra Ax + B)' = (x \ra A)
          $$
          <ImageLeft
            src="/build-img/svgo-svg/2UFf.svg"
            atLeastAsWide={true}
            local_url="./images/svg_ch4_ch_affine_derivative_cloud.svg"
            intrinsicWidth={430}
            intrinsicHeight={300}
          />
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            because the slope is {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:203:5
            </span>
          </span>
          <Math>
            $A$
          </Math>
          {" "} everywhere on the line. In particular, {" "}
          <Math>
            $B$
          </Math>
          {" "} plays no role in the
          derivative! {" "}
          <NoBreak>
            (
            <Math>
              $\rt&#123;0.2&#125;$
            </Math>
            As
          </NoBreak>
          {" "} with a constant function, the derivative leaves no
          trace of {" "}
          <NoBreak>
            <Math>
              $B$
            </Math>
            's
          </NoBreak>
          {" "} value—because {" "}
          <Math>
            $B$
          </Math>
          {" "} effects a vertical translation, which
          does not change the slope of anything.)
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            In words:
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:208:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            ~ the derivative of the affine function
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:210:7
            </span>
          </span>
          {" "}
          {" "}
          {" "}{" "}
          <Math>
            $y = ax + b$
          </Math>
          <span class="t-3003-c">
            {" "} is the constant function {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:211:17
            </span>
          </span>
          <Math>
            $y = a$
          </Math>
          <span class="t-3003-c">
            {" "} ~
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:211:50
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Or:
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:214:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            ~ the derivative of an affine function is
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:216:7
            </span>
          </span>
          {" "}
          {" "}
          the coefficient of its linear term ~
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (The “linear term” of {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:219:5
            </span>
          </span>
          <Math>
            $y = ax + b$
          </Math>
          {" "} is {" "}
          <NoBreak>
            “
            <Math>
              $ax$
            </Math>
            ”,
          </NoBreak>
          {" "}
          of coefficient {" "}
          <NoBreak>
            <Math>
              $a$
            </Math>
            .)
          </NoBreak>
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 1.
            </b>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x \ra 3x + 1)' = (x \ra 3)
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              as per
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:227:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x \ra Ax + B)' = (x \ra A)
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              with {" "}
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:231:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $A = 3$
              </Math>
              ,
            </NoBreak>
            {" "} {" "}
            <NoBreak>
              <Math>
                $B = 1$
              </Math>
              .
            </NoBreak>
          </OuterP>
        </Example>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 2.
            </b>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x \ra 12 - x)' = (x \ra -1)
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              as per
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:238:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x \ra Ax + B)' = (x \ra A)
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              with {" "}
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:242:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $A = -1$
              </Math>
              ,
            </NoBreak>
            {" "} {" "}
            <NoBreak>
              <Math>
                $B = 12$
              </Math>
              .
            </NoBreak>
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
              Units of the Derivative.
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:247:6
              </span>
            </span>
          </b>
          {" "}
          If units are present, we have
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;$y$ axis units for $f'$&#125; \,= &#123;\te&#123;$y$ axis units for $\f$&#125; \over \te&#123;$x$ axis units for $\f$&#125;&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            because a value output by {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:254:5
            </span>
          </span>
          <Math>
            $\f'$
          </Math>
          {" "} is the
          {" "}
          <i>
            slope
          </i>
          {" "} of a tangent line attached to the
          graph {" "}
          <NoBreak>
            <Math>
              $y = f(x)$
            </Math>
            ,
          </NoBreak>
          {" "} and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;$x$ axis units for $f'$&#125;\, = \rt&#123;0.02&#125;\,\te&#123;$x$ axis units for $f$&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            because an input for {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:262:5
            </span>
          </span>
          <Math>
            $\f'$
          </Math>
          {" "} is an input for {" "}
          <NoBreak>
            <Math>
              $\f$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            For example, if the “before” graph has units
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:264:5
            </span>
          </span>
          {" "}
          {" "}
          of...
        </OuterP>
        <Pause />
        <List style="padding-left:2.5rem;padding-right:2rem;">
          <Item>
            <p>
              <span class="t-3003-c">
                seconds on the {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4.wly:270:9
                </span>
              </span>
              <Math>
                $x$
              </Math>
              <span class="t-3003-c">
                {" "} axis, meters on the
                <span class="t-3003">
                  ./src/content/ch4/ch4.wly:270:27
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <Math>
                $y$
              </Math>
              <span class="t-3003-c">
                {" "} axis
                <span class="t-3003">
                  ./src/content/ch4/ch4.wly:271:12
                </span>
              </span>
            </p>
          </Item>
        </List>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...then the “after” graph will have units of...
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:273:5
            </span>
          </span>
          <ImageRight
            src="/build-img/svgo-svg/whL5.svg"
            offsetY="0.6em"
            local_url="./images/derivative_units1_cloud.svg"
            intrinsicWidth={700}
            intrinsicHeight={400}
          />
        </OuterP>
        <Pause />
        <List style="padding-left:2.5rem;padding-right:2rem;">
          <Item>
            <p>
              <span class="t-3003-c">
                seconds on the {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4.wly:282:9
                </span>
              </span>
              <Math>
                $x$
              </Math>
              <span class="t-3003-c">
                {" "} axis, meters per
                <span class="t-3003">
                  ./src/content/ch4/ch4.wly:282:27
                </span>
              </span>
              {" "}
              {" "}
              second on the {" "}
              <Math>
                $y$
              </Math>
              <span class="t-3003-c">
                {" "} axis
                <span class="t-3003">
                  ./src/content/ch4/ch4.wly:283:26
                </span>
              </span>
            </p>
          </Item>
        </List>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...while if the “before” graph has units of...
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:285:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <List style="padding-left:2.5rem;padding-right:2rem;">
          <Item>
            <p>
              <span class="t-3003-c">
                apples on the {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4.wly:290:9
                </span>
              </span>
              <Math>
                $x$
              </Math>
              <span class="t-3003-c">
                {" "} axis, oranges on the
                <span class="t-3003">
                  ./src/content/ch4/ch4.wly:290:26
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <Math>
                $y$
              </Math>
              <span class="t-3003-c">
                {" "} axis
                <span class="t-3003">
                  ./src/content/ch4/ch4.wly:291:12
                </span>
              </span>
            </p>
          </Item>
        </List>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...then the “after” graph will have units of...
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:293:5
            </span>
          </span>
          <ImageLeft
            src="/build-img/svgo-svg/ekk4.svg"
            offsetY="0.6em"
            local_url="./images/derivative_units2_cloud.svg"
            intrinsicWidth={700}
            intrinsicHeight={400}
          />
        </OuterP>
        <Pause />
        <List style="padding-left:2.5rem;padding-right:2rem;">
          <Item>
            <p>
              <span class="t-3003-c">
                apples on the {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4.wly:302:9
                </span>
              </span>
              <Math>
                $x$
              </Math>
              <span class="t-3003-c">
                {" "} axis, oranges per apple
                <span class="t-3003">
                  ./src/content/ch4/ch4.wly:302:26
                </span>
              </span>
              {" "}
              {" "}
              on the {" "}
              <Math>
                $y$
              </Math>
              <span class="t-3003-c">
                {" "} axis
                <span class="t-3003">
                  ./src/content/ch4/ch4.wly:303:19
                </span>
              </span>
            </p>
          </Item>
        </List>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...and so on.
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:305:5
            </span>
          </span>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            Units might also prompt us to call {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:307:5
            </span>
          </span>
          <Math>
            $f'$
          </Math>
          {" "} the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            rate of change
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:309:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            of {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:311:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $f$
            </Math>
            ,
          </NoBreak>
          {" "} or, depending, as the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            instantaneous
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:313:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            rate of change of {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:315:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $f$
            </Math>
            .
          </NoBreak>
          {" "} The latter emphasizes that the tangent’s slope can change from point to point.
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 5 && <>
      <Pause />
      <Section id="section-7">
        <OuterP>
          <b>
            <span class="t-3003-c">
              The second derivative.
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:319:6
              </span>
            </span>
          </b>
          {" "}
          The {" "}
          <i>
            second derivative
          </i>
          {" "} of {" "}
          <Math>
            $f$
          </Math>
          {" "} is the derivative
          of the derivative of {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            .
          </NoBreak>
          {" "} It is written {" "}
          <NoBreak>
            “
            <Math>
              $f''$
            </Math>
            ”:
          </NoBreak>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \,\,\,f'' = (f')'.
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Likewise, we have, e.g.,
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:327:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;align*&#125;
          \up&#123;0.95&#125;f''' &amp;= (f'')'\\
          \up&#123;1.25&#125;f'''' &amp;= (f''')'\\
          \up&#123;1.25&#125;f''''\psa' &amp;= (f'''')'\\
          \end&#123;align*&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            the {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:337:5
            </span>
          </span>
          <i>
            third
          </i>
          , {" "}
          <i>
            fourth
          </i>
          {" "} and {" "}
          <i>
            fifth
          </i>
          {" "} derivatives of {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            .
          </NoBreak>
          {" "} One can also
          write
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f^&#123;(n)&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for the {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:344:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $n$
            </Math>
            -th
          </NoBreak>
          {" "} derivative of {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            ,
          </NoBreak>
          {" "} so that, for
          example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f^&#123;(7)&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            means the same as
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:351:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f'''''''
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            without having to squint and re-count the apostrophes several times.
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:357:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 3.
            </b>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x \ra 3x + 1)'' = (x \ra 0)
            $$
            <ImageRight
              src="/build-img/svgo-svg/ORL8.svg"
              offsetY="0.1em"
              atLeastAsWide={true}
              local_url="./images/svg_ch4_3x_plus_one_and_second_cloud.svg"
              intrinsicWidth={900}
              intrinsicHeight={700}
            />
            <MathJaxSvgExportTooltip />
          </MathBlock>
        </Example>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            because
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:369:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (x \ra 3x + 1)' = (x \ra 3)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:375:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (x \ra 3)' = (x \ra 0)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            so, from start to finish,
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:381:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (x \ra 3x + 1)'' =  ((x \ra 3x + 1)')' = (x \ra 3)' = (x \ra 0)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            where we unpeel the onion starting from the
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:387:5
            </span>
          </span>
          {" "}
          {" "}
          inside. (Physically difficult.)
        </OuterP>
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
              More generally,
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:392:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \,\,\,(x \ra ax + b)'' = (x \ra 0)
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              for all {" "}
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:398:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $a, b \in \rr$
              </Math>
              ,
            </NoBreak>
            {" "} by a similar computation;
            a.k.a.:
          </OuterP>
          <Pause />
          <CentralDisplayItalic>
            <span class="t-3003-c">
              ~ the second derivative of an affine function is zero ~
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:401:11
              </span>
            </span>
          </CentralDisplayItalic>
        </Example>
        <Pause />
        <StarDivider style="margin-top:-0.5em;margin-bottom:0em" />
      </Section>
    </>}
    {visibleRestSections() > 6 && <>
      <Pause />
      <Section id="section-8">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Geometric interpretation of the second derivative.
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:412:6
              </span>
            </span>
          </b>
          {" "}
          The sign of the second derivative indicates whether
          a graph is “bending upwards” or “bending
          downwards”. Upward-bending graphs have a positive
          second derivative, whereas downward-bending graphs
          have a negative second derivative:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/gmq7.svg"
          local_url="./images/svg_ch4_bendiness.svg"
          intrinsicWidth={1550}
          intrinsicHeight={450}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Reason like this: the second derivative is {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:422:5
            </span>
          </span>
          <del>
            “the rate of change of the rate of change”.
          </del>
          {" "} Sorry: “the rate of change of the slope”.
          (Same difference.) Ergo, if the second derivative
          is positive, the slope is increasing; if the
          second derivative is negative, the slope is
          decreasing. Moreover, an
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            increasing
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:431:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            slope gives curves a “bending upwards” shape, while a
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:433:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            decreasing
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:435:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            slope gives curves a “bending downward” shape!
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:437:5
            </span>
          </span>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            To emphasize, if the second derivative is some
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:439:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplay>
          <span class="t-3003-c">
            LARGE POSITIVE NUMBER
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:441:7
            </span>
          </span>
        </CentralDisplay>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            then the slope is increasing at that rate,
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:443:5
            </span>
          </span>
          {" "}
          {" "}
          which could result in a sharp bend upwards
          in the graph (unless you are near vertical
          already—you can't see the difference between
          slope {" "}
          <Math>
            $100$
          </Math>
          {" "} and slope {" "}
          <Math>
            $1000$
          </Math>
          {" "} very well, at most
          scales—nor between {" "}
          <Math>
            $-1000$
          </Math>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $-100$
            </Math>
            ,
          </NoBreak>
          {" "} for that
          matter).
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            Likewise, if the second derivative is some
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:451:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplay>
          <span class="t-3003-c">
            LARGE NEGATIVE NUMBER
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:453:7
            </span>
          </span>
        </CentralDisplay>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            then the slope is decreasing at [the absolute
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:455:5
            </span>
          </span>
          {" "}
          {" "}
          value of] that rate, which could result in
          a sharp bend downwards in the graph (unless you are near vertical already, once again).
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 7 && <>
      <Pause />
      <Section id="section-9">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Vocabulary #1.
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:462:6
              </span>
            </span>
          </b>
          {" "}
          Curves with increasing (technically:
          {" "}
          <i>
            nondecreasing
          </i>
          ) slope are called {" "}
          <i>
            convex
          </i>
          ,
          while curves with decreasing (technically:
          {" "}
          <i>
            nonincreasing
          </i>
          ) slope are called {" "}
          <i>
            concave
          </i>
          .
          Viz:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/at2Y.svg"
          local_url="./images/svg_ch4_ch_convex_concave.svg"
          intrinsicWidth={550}
          intrinsicHeight={220}
        />
        <Pause />
        <OuterP>
          <b>
            <span class="t-3003-c">
              Vocabulary #2.
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:472:6
              </span>
            </span>
          </b>
          {" "}
          An {" "}
          <i>
            inflection point
          </i>
          {" "} is a point at the
          interface between convex and concave sections
          of a graph:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/tv8l.svg"
          local_url="./images/svg_ch4_ch_inflection_point.svg"
          intrinsicWidth={500}
          intrinsicHeight="258.022"
        />
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 5.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              The fact that
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:482:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x \ra 3x + 1)'' = (x \ra 0)
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              indicates that the graph
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:488:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            y = 3x + 1
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              is neither “bending upwards” nor “bending
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:494:9
              </span>
            </span>
            {" "}
            {" "}
            {" "}{" "}
            <NoBreak>
              downwards”—
              <Math>
                $0$
              </Math>
            </NoBreak>
            {" "} is neither positive, nor negative.
          </OuterP>
        </Example>
      </Section>
    </>}
    {visibleRestSections() > 8 && <>
      <Pause />
      <Section id="section-10">
        <CodexSuggestions>
          <p>
            <span class="t-3003-c">
              Keep this basic position/velocity/acceleration interpretation here: it gives second derivatives and their units a concrete meaning. The new chapter can start where two coordinate rates must be combined, without repeating this introduction.
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:501:9
              </span>
            </span>
          </p>
        </CodexSuggestions>
        <OuterP>
          <b>
            <span class="t-3003-c">
              The second derivative of position.
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:503:6
              </span>
            </span>
          </b>
          {" "}
          A graph of the form...
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/UjMy.svg"
          local_url="./images/svg_ch4_ch_position_by_time.svg"
          intrinsicWidth={400}
          intrinsicHeight={300}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...describes {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:509:5
            </span>
          </span>
          <i>
            position as a function of time
          </i>
          {" "}
          (look at the units); the derivative...
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/wwWE.svg"
          local_url="./images/svg_ch4_ch_position_by_time_der.svg"
          intrinsicWidth={400}
          intrinsicHeight={300}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...describes {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:518:5
            </span>
          </span>
          <i>
            velocity as a function of time
          </i>
          ;
          finally, the second derivative...
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/cBcm.svg"
          local_url="./images/svg_ch4_ch_position_by_time_der_der.svg"
          intrinsicWidth={400}
          intrinsicHeight={300}
        >
          <ImageLeft
            src="/build-img/svgo-svg/zAav.svg"
            local_url="./images/svg_ch4_ch_position_by_time_der_cloud.svg"
            intrinsicWidth={1350}
            intrinsicHeight={700}
          />
        </Image>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...describes
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:532:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            the rate of change of velocity
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:534:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            also known as the
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:536:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            acceleration
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:538:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (!) as a function of time.
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:540:5
            </span>
          </span>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            The second derivative’s {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:542:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $y$
            </Math>
            -axis
          </NoBreak>
          {" "} units are
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;$y$ axis units for $f'$&#125; \over \te&#123;$x$ axis units for $f'$&#125;&#125; =
          &#123;\te&#123;m&#125;/\te&#123;s&#125; \over \te&#123;s&#125;&#125; =
          &#123;\te&#123;m&#125; \over \rt&#123;0.1&#125;\te&#123;s&#125;\!&#123;\,&#125;^2&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            because {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:550:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $f'' = (f')'$
            </Math>
            .
          </NoBreak>
          {" "} The point is, a tangent
          to the graph {" "}
          <Math>
            $y = f'(t)$
          </Math>
          {" "} has a “rise” measured
          in meters per second and a “run” measured in
          seconds:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/YS5-.svg"
          local_url="./images/svg_ch4_ch_position_by_time_tangent_v2.svg"
          intrinsicWidth={550}
          intrinsicHeight={470}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            The ratio “rise over run” has the form
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:558:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;m&#125;/\te&#123;s&#125; \over \te&#123;s&#125;&#125;
          = &#123;\te&#123;m&#125; \over \te&#123;s&#125;&#125; \times &#123;1 \over \te&#123;s&#125;&#125;
          = &#123;\te&#123;m&#125; \over \te&#123;s&#125;\!&#123;\,&#125;^2&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            giving the second derivative’s units. A ratio of the form
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:566:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;difference in velocity&#125; \over \te&#123;amount of time&#125;&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is an acceleration, defined as “the increase in velocity per unit
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:572:5
            </span>
          </span>
          {" "}
          {" "}
          time”.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            To summarize:
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:575:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            ~ velocity is the derivative of position ~
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:577:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            ~ acceleration is the derivative of velocity ~
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:579:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <StarDivider />
        <Pause />
        <OuterP>
          <b>
            <span class="t-3003-c">
              Note.
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:583:6
              </span>
            </span>
          </b>
          {" "}
          The exotic units
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;m&#125; \over \,\te&#123;s&#125;\!&#123;\,&#125;^2&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            can be read
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:588:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            meters per second squared
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:590:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            which sounds pretty cryptic, unfortunately, or
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:592:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            meters per second per second
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:594:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            which is better, or (slight difference!)
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:596:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            meters per second, per second
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:598:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            which is even better because it “shows” acceleration
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:600:5
            </span>
          </span>
          {" "}
          {" "}
          to be a number of {" "}
          <NoBreak>
            m
            <Math>
              $/$
            </Math>
            s
          </NoBreak>
          {" "} per second.
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 6.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              Over {" "}
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:606:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $10$
              </Math>
              s,
            </NoBreak>
            {" "} an object accelerating at a constant rate of
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            2&#123;\te&#123;m&#125;/\te&#123;s&#125;\!&#123;\,&#125;^2&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              increases its velocity by
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:612:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (2&#123;\te&#123;m&#125;/\te&#123;s&#125;\!&#123;\,&#125;^2&#125;) \times\, (10\te&#123;s&#125;) = 20&#123;\te&#123;m&#125;/\te&#123;s&#125;&#125;
            $$
            <ImageRight
              src="/build-img/svgo-svg/R0nW.svg"
              atLeastAsWide={true}
              local_url="./images/svg_ch4_ch_units_cancellation_cloud.svg"
              intrinsicWidth={350}
              intrinsicHeight={150}
            />
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              according to the template
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:621:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (\te&#123;rate of change&#125;) \times \te&#123;(amount of time)&#125;\\
            = \te&#123;(amount of change)&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              since acceleration is the rate of change of
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:628:9
              </span>
            </span>
            {" "}
            {" "}
            velocity.
          </OuterP>
        </Example>
      </Section>
    </>}
    {visibleRestSections() > 9 && <>
      <Pause />
      <Section id="section-11">
        <OuterP>
          <b>
            <span class="t-3003-c">
              The jerk.
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:634:6
              </span>
            </span>
          </b>
          {" "}
          The rate of change of acceleration is called the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            jerk
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:637:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            in physics. The units of jerk (or “the”
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:639:5
            </span>
          </span>
          {" "}
          {" "}
          units of jerk, since any units of same {" "}
          <a
            href="chapter2#section-9"
            class="underline-on-hover"
          >
            <i>
              dimension
            </i>
          </a>
          {" "} would do as well) are
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;m&#125; \over \,\te&#123;s&#125;\!&#123;\,&#125;^3&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            or
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:651:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            meters per second, per second, per second
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:653:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            which is to say that the
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:656:5
            </span>
          </span>
          {" "}
          {" "}
          jerk specifies how many {" "}
          <i>
            meters per second,
            per second
          </i>
          {" "} (a measure of acceleration!)
          is being gained or lost {" "}
          <i>
            per second
          </i>
          .
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            The term “jerk” is well-chosen,
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:661:5
            </span>
          </span>
          {" "}
          {" "}
          too, considering that
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            jerk
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:664:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            implies a change in acceleration, insofar as the
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:666:5
            </span>
          </span>
          {" "}
          {" "}
          everyday meaning of the word is concerned—think
          of experiencing a
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            constant acceleration
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:670:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            in a train or subway car, etc—the
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:672:5
            </span>
          </span>
          {" "}
          {" "}
          “constant” qualifier
          implies a buttery-smooth, “non-jerky” experience!
        </OuterP>
        <Pause />
        <CodexSuggestions>
          <p>
            <span class="t-3003-c">
              Keep these definitions available here: the formal-properties exercises and the final lambda-function callback depend on them. Moving the product rule does not require moving the definition of function multiplication.
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:730:9
              </span>
            </span>
          </p>
        </CodexSuggestions>
        <OuterP>
          <b>
            <span class="t-3003-c">
              Postscript: Sums, Products, Quotients,
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:732:6
              </span>
            </span>
            {" "}
            {" "}
            and Differences of Functions.
          </b>
          {" "}
          Returning briefly to {" "}
          <OutChapterLink
            href="/article/chapter3#_57_h.a.i_"
            class="out-chapter-link"
          >
            Chapter 3
          </OutChapterLink>
          , if
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f, g : \rr \ra \rr
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            then
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:740:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f \circ g = (x \ra f(g(x)))
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          f + g = (x \ra f(x) + g(x))
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          fg = (x \ra f(x)g
          (x))
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          &#123;f/g&#125; = (x \ra &#123;f(x)/g(x)&#125;)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          f - g = (x \ra f(x) - g(x))
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            each equation being a {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:759:5
            </span>
          </span>
          <i>
            definition
          </i>
          .
          The notation
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f \circ g
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            goes back to {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:766:5
            </span>
          </span>
          <OutChapterLink
            href="/article/chapter3#_39_h.a.i_"
            class="out-chapter-link"
          >
            Exercise 5 of Chapter 3
          </OutChapterLink>
          , with the little circle {" "}
          <NoBreak>
            “
            <Math>
              $\circ$
            </Math>
            ”
          </NoBreak>
          {" "} called the {" "}
          <i>
            composition operator
          </i>
          , while the sum
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f + g
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and product
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:772:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          fg
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            of functions already appear in {" "}
            <span class="t-3003">
              ./src/content/ch4/ch4.wly:778:5
            </span>
          </span>
          <OutChapterLink
            href="/article/chapter3#_52_h.a.i_"
            class="out-chapter-link"
          >
            Exercise 17 of Chapter 3
          </OutChapterLink>
          . (On the other hand, the
          quotient (i.e. {" "}
          <NoBreak>
            <Math>
              $f/g$
            </Math>
            )
          </NoBreak>
          {" "} and difference (i.e.,
          {" "}
          <NoBreak>
            <Math>
              $f - g$
            </Math>
            )
          </NoBreak>
          {" "} of functions are defined above for
          the first time, even if the definitions might
          {" "}
          <i>
            seem
          </i>
          {" "} familiar!)
        </OuterP>
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Exercise selection: keep the finish line visible.
                <span class="t-3003">
                  ./src/content/ch4/ch4.wly:787:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} Numbering here refers to the current draft. Keep Exercises 1–5: the seesaw, reciprocal slopes, second derivative, units of position, and the “correct, incorrect, or nonsensical” lambda equation. They are short and vary the kind of thinking required. Keep Exercise 6 if the units strip offers a useful independent check after Exercise 4; if it feels lengthy in use, reduce the number of strips rather than add further explanation.
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:787:60
              </span>
            </span>
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Where to shorten further.
                <span class="t-3003">
                  ./src/content/ch4/ch4.wly:791:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} Exercises 7 and 8 form a bump-counting pair. They are not identical, but Exercise 8 is the first optional omission I would test: keep the simpler count in Exercise 7 and see whether the chapter already gives enough practice distinguishing upward and downward behaviour. Keep Exercise 9’s identification of successive derivatives and Exercise 10’s distinction between greatest slope and greatest rate of change of slope. These can finish the graphical work. Do not add another reconstruction exercise or a general true/false battery just to replace the removed material.
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:791:36
              </span>
            </span>
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Add a small domain thread.
                <span class="t-3003">
                  ./src/content/ch4/ch4.wly:795:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} Ask “What is the simplest non-differentiable function you can think of?” Leave “simplest” open; square root and absolute value are natural answers under this chapter’s endpoint convention. Follow by restricting absolute value to the real line with zero removed and asking whether the new function is differentiable. Ask for its derivative without cases. Place this small pair before the formal-properties exercises, so the later identity-function question is a callback rather than a first introduction. Keep the solutions short; do not turn unusual one-point domains into an extra lesson.
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:795:37
              </span>
            </span>
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Keep the formal ending, then a callback.
                <span class="t-3003">
                  ./src/content/ch4/ch4.wly:799:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} Keep current Exercises 11–12 (original E21–22) together and substantially intact: state the properties as self-contained claims, then prove associativity of function multiplication from its definition. Their repetition serves the book’s abstraction thread. Follow them with a small selection from the candidate pool, not all seven candidates. This lets the final activity return to short computations and recognition after the proof.
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:799:51
              </span>
            </span>
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Choose from the pool, rather than assign the pool.
                <span class="t-3003">
                  ./src/content/ch4/ch4.wly:803:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} My preferred shortlist is B, D, and E: distinguish the jobs of id, recognize absolute value and a restricted identity behind compositions, then express the absolute-value derivative in terms of id. Use C as an alternative to B if identifying the neutral element for each operation is the more interesting task; avoid automatically assigning both. A is useful reserve practice but repeats Chapter 3. F is a reserve domain check if D and the punctured-domain question leave that distinction unclear. Defer G to The Product Rule rather than import a square-derivative prerequisite into this chapter. The pool’s current Exercise 13 is an editorial container, not one giant student exercise.
              <span class="t-3003">
                ./src/content/ch4/ch4.wly:803:61
              </span>
            </span>
          </p>
        </CodexSuggestion>
      </Section>
    </>}
    {visibleRestSections() > 10 && <>
      <Pause />
      <Exercises
        at_end_of_page={true}
        mode="dual"
        show_curlicue={true}
        id="_72_h.a.i_"
      >
        <Exercise number={1}>
          <ExerciseStatement id="_59_h.a.i_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Sketch the derivative of a function with the
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_see_saw.wly:3:5
                </span>
              </span>
              {" "}
              {" "}
              following graph (what {" "}
              <i>
                looks
              </i>
              {" "} like a sharp
              corner {" "}
              <i>
                is
              </i>
              {" "} a sharp corner):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Is8C.svg"
              local_url="./images/svg_ch4_slope_one_half_see_saw.svg"
              intrinsicWidth={450}
              intrinsicHeight={230}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                It is:
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_see_saw.wly:12:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/KPKF.svg"
              local_url="./images/svg_ch4_slope_one_half_see_saw_derivative.svg"
              intrinsicWidth={450}
              intrinsicHeight={260}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (I.e., the derivative is {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_see_saw.wly:20:9
                </span>
              </span>
              <Math>
                $1/2$
              </Math>
              {" "} when the slope is {" "}
              <NoBreak>
                <Math>
                  $1/2$
                </Math>
                ,
              </NoBreak>
              {" "}
              {" "}
              <Math>
                $-1/2$
              </Math>
              {" "} when the slope is {" "}
              <NoBreak>
                <Math>
                  $-1/2$
                </Math>
                ,
              </NoBreak>
              {" "} and undefined at the corners.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={2}>
          <ExerciseStatement id="_60_h.a.i_">
            <OuterP>
              <b>
                Exercise 2.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Would the derivative of
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_derivative_of_1_over_x_near_0_.wly:4:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = &#123;1\over x&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                be a very large negative number, or a very
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_derivative_of_1_over_x_near_0_.wly:10:5
                </span>
              </span>
              {" "}
              {" "}
              large positive number, near {" "}
              <NoBreak>
                <Math>
                  $x = 0$
                </Math>
                ?
              </NoBreak>
              {" "} Or would
              it depend on which side of 0 you are?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The graph of {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_derivative_of_1_over_x_near_0_.wly:16:9
                </span>
              </span>
              <Math>
                $y = &#123;1 \over x&#125;$
              </Math>
              {" "} looks like so:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/hWOn.svg"
              local_url="./images/svg_ch4_one_over_x.svg"
              intrinsicWidth={500}
              intrinsicHeight={500}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The slope is very negative near {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_derivative_of_1_over_x_near_0_.wly:21:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x = 0$
                </Math>
                ,
              </NoBreak>
              {" "} on either side.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={3}>
          <ExerciseStatement id="_61_h.a.i_">
            <OuterP>
              <b>
                Exercise 3.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Sketch the
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_see_saw_second_derivative_.wly:4:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                second
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_see_saw_second_derivative_.wly:6:7
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                derivative of the graph in {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_see_saw_second_derivative_.wly:8:5
                </span>
              </span>
              <InChapterLink
                href="#_59_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 1
              </InChapterLink>
              &#8288;.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The second derivative is zero wherever the
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_see_saw_second_derivative_.wly:12:9
                </span>
              </span>
              {" "}
              {" "}
              first derivative is flat, and is undefined
              wherever the first derivative is undefined;
              this gives the second derivative the following
              pockmarked appearance:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/oCwv.svg"
              local_url="./images/svg_ch4_slope_one_half_see_saw_second_derivative.svg"
              intrinsicWidth={450}
              intrinsicHeight={260}
            />
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
                  Further derivatives produce the same graph, over and over again.
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_see_saw_second_derivative_.wly:22:13
                  </span>
                </span>
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  “first derivative” is a synonym of “derivative”.
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_see_saw_second_derivative_.wly:25:13
                  </span>
                </span>
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={4}>
          <ExerciseStatement id="_62_h.a.i_">
            <OuterP>
              <b>
                Exercise 4.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                If we pretend that the graph of {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_see_saw_with_units_.wly:4:5
                </span>
              </span>
              <InChapterLink
                href="#_59_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 1
              </InChapterLink>
              {" "}
              depicts the {" "}
              <del>
                distance that a car has traveled
                as a function of time,
              </del>
              {" "} position of a car as a function of
              time, with hours (hr) on the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -axis
              </NoBreak>
              {" "}
              and kilometers (km) on the {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -axis,
              </NoBreak>
              {" "} what
              do the units become on the axes of the first
              and second derivatives?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The units on the {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_see_saw_with_units_.wly:17:9
                </span>
              </span>
              <Math>
                $y$
              </Math>
              {" "} axis become kilometers,
              kilometers per hour, and kilometers per
              hours squared, including the first graph
              (for each derivative, divide the {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -axis
              </NoBreak>
              {" "} units by the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -axis
              </NoBreak>
              {" "} units):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/0dwd.svg"
              local_url="./images/svg_ch4_slope_one_half_see_saw_with_units.svg"
              intrinsicWidth={470}
              intrinsicHeight={261}
            />
            <Pause />
            <Image
              src="/build-img/svgo-svg/b7Oc.svg"
              local_url="./images/svg_ch4_slope_one_half_see_saw_with_units_derivative.svg"
              intrinsicWidth={470}
              intrinsicHeight={280}
            />
            <Pause />
            <Image
              src="/build-img/svgo-svg/OG7m.svg"
              local_url="./images/svg_ch4_slope_one_half_see_saw_with_units_second_derivative.svg"
              intrinsicWidth={470}
              intrinsicHeight={280}
            />
            <Pause />
            <StarDivider />
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
                  The second and third functions are respectively
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_see_saw_with_units_.wly:34:13
                  </span>
                </span>
                {" "}
                {" "}
                the velocity and the acceleration of the car as
                a function of time.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={5}>
          <ExerciseStatement id="_63_h.a.i_">
            <OuterP>
              <b>
                Exercise 5.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Is the following equation correct, incorrect,
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_correct_incorrect_or_nonsensical_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              or nonsensical?
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x \ra x + 1) \,+\, (u \ra 2u + 1) \,=\, (t \ra 3t + 2)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The equation makes sense and is true.
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_correct_incorrect_or_nonsensical_.wly:13:9
                </span>
              </span>
              {" "}
              {" "}
              Syntactically,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x \ra x + 1) \,+\, (u \ra 2u + 1)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is a
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_correct_incorrect_or_nonsensical_.wly:20:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                sum of functions
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_correct_incorrect_or_nonsensical_.wly:22:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                because {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_correct_incorrect_or_nonsensical_.wly:24:9
                </span>
              </span>
              <Math>
                $x \ra x + 1$
              </Math>
              {" "} and {" "}
              <Math>
                $u \ra 2u + 1$
              </Math>
              {" "} are
              both functions. Now by definition, the sum
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f + g
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of functions {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_correct_incorrect_or_nonsensical_.wly:31:9
                </span>
              </span>
              <Math>
                $f$
              </Math>
              {" "} and {" "}
              <Math>
                $g$
              </Math>
              {" "} is the function
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra f(x) + g(x)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                that maps an input to the sum of the functions’ outputs. So—for example—
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_correct_incorrect_or_nonsensical_.wly:37:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &amp; \,\,\,((x \ra x + 1) \,+\, (u \ra 2u + 1))(5) \\
              =&amp; \,\,\,(x \ra x + 1)(5) + (u \ra 2u + 1)(5) \up&#123;1.5&#125; \\
              =&amp; \,\,\,(5 + 1) + (2\cdot 5 + 1) \up&#123;1.5&#125; \\
              =&amp; \,\,\,3\cdot 5 + 2 = 17 \up&#123;1.5&#125;
              \end&#123;align*&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and—with a general input {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_correct_incorrect_or_nonsensical_.wly:48:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $t$
                </Math>
                —
              </NoBreak>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &amp; \,\,\,((x \ra x + 1) \,+\, (u \ra 2u + 1))(t) \\
              =&amp; \,\,\,(x \ra x + 1)(t) + (u \ra 2u + 1)(t) \up&#123;1.5&#125; \\
              =&amp; \,\,\,(t + 1) + (2t + 1) \up&#123;1.5&#125; \\
              =&amp; \,\,\,3t + 2 \up&#123;1.5&#125;
              \end&#123;align*&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                so
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_correct_incorrect_or_nonsensical_.wly:59:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x \ra x + 1) \,+\, (u \ra 2u + 1)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is the function {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_correct_incorrect_or_nonsensical_.wly:65:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $t \ra 3t + 2$
                </Math>
                .
              </NoBreak>
              {" "} (!!)
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Note 1.
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_correct_incorrect_or_nonsensical_.wly:69:10
                  </span>
                </span>
              </i>
              {" "}
              One can also do the main computation with {" "}
              <Math>
                $x$
              </Math>
              {" "}
              in place of {" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &amp; \,\,\,((x \ra x + 1) \,+\, (u \ra 2u + 1))(x) \\
              =&amp; \,\,\,(x \ra x + 1)(x) + (u \ra 2u + 1)(x) \up&#123;1.5&#125; \\
              =&amp; \,\,\,(x + 1) + (2x + 1) \up&#123;1.5&#125; \\
              =&amp; \,\,\,3x + 2 \up&#123;1.5&#125;
              \end&#123;align*&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Here we have two different {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_correct_incorrect_or_nonsensical_.wly:82:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x$
                </Math>
                's:
              </NoBreak>
              {" "}
              the placeholder {" "}
              <Math>
                $x$
              </Math>
              {" "} describing the first function, and the {" "}
              <Math>
                $x$
              </Math>
              {" "} that denotes
              the “outermost” input to the sum of the two functions. (These are
              really separate, and the “placeholder” {" "}
              <Math>
                $x$
              </Math>
              {" "} could be
              any symbol.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={6}>
          <ExerciseStatement id="_64_h.a.i_">
            <OuterP>
              <b>
                Exercise 6.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Complete the missing units for each strip
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_complete_the_missing_units_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              below, using the given units:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/xFEG.svg"
              local_url="./images/svg_ch4_missing_units_v4.svg"
              intrinsicWidth={650}
              intrinsicHeight={1145}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Each time you take a derivative, the units on the {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_complete_the_missing_units_.wly:15:9
                </span>
              </span>
              <Math>
                $x$
              </Math>
              {" "}
              axis stay the same, while the units on the
              {" "}
              <Math>
                $y$
              </Math>
              {" "} axis become divided by those on the {" "}
              <Math>
                $x$
              </Math>
              {" "}
              axis. This gives the unique solutions:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/GQf4.svg"
              local_url="./images/svg_ch4_missing_units_solution_v4.svg"
              intrinsicWidth={800}
              intrinsicHeight={1145}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...where we find units of
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_complete_the_missing_units_.wly:24:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Huge \te&#123;s&#125;^&#123;1\over 2&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                or {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_complete_the_missing_units_.wly:30:9
                </span>
              </span>
              <i>
                square root seconds
              </i>
              {" "} on the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis
              in the last strip,
              which is not at all clear what it means, or
              if such a thing exists.
              (But if there's a solution, it's that one, so we
              blindly write that down.)
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
                  A unit of {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_complete_the_missing_units_.wly:38:13
                  </span>
                </span>
                <NoBreak>
                  “
                  <Math>
                    $1$
                  </Math>
                  ”
                </NoBreak>
                {" "} is a
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  dimensionless
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_complete_the_missing_units_.wly:40:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  unit. Dimensionless units arise when
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_complete_the_missing_units_.wly:42:13
                  </span>
                </span>
                {" "}
                {" "}
                quantities are divided by like quantities.
                Think of dimensionless quantities as “pure
                fractions” or “pure ratios”. (Percentages
                are dimensionless—in fact the term
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  percentage
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_complete_the_missing_units_.wly:48:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  is synonymous with
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_complete_the_missing_units_.wly:50:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  dimensionless ratio
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_complete_the_missing_units_.wly:52:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  though if you spoke to people about
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_complete_the_missing_units_.wly:54:13
                  </span>
                </span>
                {" "}
                {" "}
                “dimensionless ratios” they would look at
                you funny. Also percentages are a system of
                notation, whereby the symbol “%” means
                “divide the preceding number by 100 to get the ratio’s numerical value”.) (To drive
                it home: In Chinese, 
                {" "}
                <NoBreak>
                  “
                  <Math>
                    $23\%$
                  </Math>
                  ”
                </NoBreak>
                {" "} and {" "}
                <NoBreak>
                  “
                  <Math>
                    $23/100$
                  </Math>
                  ”
                </NoBreak>
                {" "} are
                indistinguishable when read out loud; they
                are both  read {" "}
                <NoBreak>
                  “
                  <Math>
                    $23$
                  </Math>
                </NoBreak>
                {" "} over {" "}
                <NoBreak>
                  <Math>
                    $100$
                  </Math>
                  ”;
                </NoBreak>
                {" "} that is
                the simple {" "}
                <i>
                  &amp;
                </i>
                {" "} correct way!)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise
          work="ing"
          number={7}
        >
          <ExerciseStatement id="_65_h.a.i_">
            <OuterP>
              <b>
                Exercise 7.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                If the graph below has three “bumps” (two up,
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_how_many_bumps_.wly:5:5
                </span>
              </span>
              {" "}
              {" "}
              one down), then how many “bumps” does its derivative
              have?
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/aG77.svg"
              style="padding-bottom:1rem"
              local_url="./images/how_many_bumps_statement.svg"
              intrinsicWidth={380}
              intrinsicHeight={260}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The derivative has a bump wherever the slope
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_how_many_bumps_.wly:15:9
                </span>
              </span>
              {" "}
              {" "}
              has a local maximum or local minimum, which happens
              at four places, per appearances:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/NfeV.svg"
              local_url="./images/how_many_bumps_highlights_v2.svg"
              intrinsicWidth={440}
              intrinsicHeight={308}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The derivative will therefore have four
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_how_many_bumps_.wly:22:9
                </span>
              </span>
              {" "}
              {" "}
              bumps—at least, four {" "}
              <i>
                large scale
              </i>
              {" "} bumps—if you're 
              curious, it looks like this:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/4xlL.svg"
              local_url="./images/how_many_bumps_derivative_v2.svg"
              intrinsicWidth={440}
              intrinsicHeight={320}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                But nothing prevents the graph from
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_how_many_bumps_.wly:29:9
                </span>
              </span>
              {" "}
              {" "}
              having small wobbles near maximum or minimum slope, too small to see,
              meaning that each bump of the derivative contains
              micro-bumps, like small ripples atop a big wave!
              (Still, “four” is a good bet to achieve full marks.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise
          work="ing"
          number={8}
        >
          <ExerciseStatement id="_66_h.a.i_">
            <OuterP>
              <b>
                Exercise 8.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                How many “up bumps” and “down bumps”, respectively,
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_how_many_up_and_down_bumps_.wly:5:5
                </span>
              </span>
              {" "}
              {" "}
              does the derivative of the function below have?
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/cRZH.svg"
              style="padding-bottom:1rem"
              local_url="./images/from_yaml__many_bumps_statement.svg"
              intrinsicWidth={720}
              intrinsicHeight={220}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The derivative crests each time the
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_how_many_up_and_down_bumps_.wly:24:9
                </span>
              </span>
              {" "}
              {" "}
              slope of the original function reaches a
              steepest point before de-sloping again, 
              giving us—barring unseen mini-variations in slope that produce mini-bumps—six “up bumps” for
              the derivative and,
              reasoning symmetrically, five “down bumps”:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/ArpL.svg"
              local_url="./images/from_yaml__many_bumps_soln1.svg"
              intrinsicWidth={780}
              intrinsicHeight={430}
            />
          </Solution>
        </Exercise>
        <Exercise
          work="ing"
          number={9}
        >
          <ExerciseStatement id="_67_h.a.i_">
            <OuterP>
              <b>
                Exercise 9.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Among the functions below, which is the
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_reorder_derivatives_v2_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              zeroth, first, and second derivative?
              (I.e., which is {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $f'$
                </Math>
                ,
              </NoBreak>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $f''$
                </Math>
                ,
              </NoBreak>
              {" "}
              assuming that relationship exists.)
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/-8uy.svg"
              local_url="./images/svg_ch4_ex_position_by_time_find_the_order.svg"
              intrinsicWidth="733.97"
              intrinsicHeight="146.452"
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The reodered sequence,
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_reorder_derivatives_v2_.wly:14:9
                </span>
              </span>
              {" "}
              {" "}
              from zeroth to second derivative,
              is:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/a02_.svg"
              local_url="./images/svg_ch4_ex_position_by_time_find_the_order_answer.svg"
              intrinsicWidth="733.97"
              intrinsicHeight={178}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                In this sequence, the first graph
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_reorder_derivatives_v2_.wly:21:9
                </span>
              </span>
              {" "}
              {" "}
              has a slope that starts at {" "}
              <Math>
                $\sim\!-1$
              </Math>
              {" "} and
              ends at {" "}
              <NoBreak>
                <Math>
                  $\sim\!1$
                </Math>
                ,
              </NoBreak>
              {" "} while those are the
              values at which 
              the second graph
              starts and ends:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/-86e.svg"
              local_url="./images/svg_ch4_ex_position_by_time_find_the_order_first_pair_v2.svg"
              intrinsicWidth={650}
              intrinsicHeight={210}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Likewise, the second graph has slope
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_reorder_derivatives_v2_.wly:31:9
                </span>
              </span>
              {" "}
              {" "}
              close to {" "}
              <Math>
                $0$
              </Math>
              {" "} at either end, and some
              slope near {" "}
              <Math>
                $1.5$
              </Math>
              {" "} or {" "}
              <Math>
                $2$
              </Math>
              {" "} towards the middle,
              matching the {" "}
              <i>
                values
              </i>
              {" "} of the third graph:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/m_fp.svg"
              local_url="./images/svg_ch4_ex_position_by_time_find_the_order_second_pair_v2.svg"
              intrinsicWidth={650}
              intrinsicHeight={220}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and none of this coincidentally, since the
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_reorder_derivatives_v2_.wly:39:9
                </span>
              </span>
              {" "}
              {" "}
              third graph is the derivative of the second, is the
              derivative of the first!
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={10}>
          <ExerciseStatement id="_68_h.a.i_">
            <OuterP>
              <b>
                Exercise 10.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Where is the rate of change of the function
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_narrow_and_less_narrow_bends_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              below, on the part shown, greatest? And
              where is the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                rate of change of the rate of change
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_narrow_and_less_narrow_bends_.wly:8:7
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                greatest?
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_narrow_and_less_narrow_bends_.wly:10:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/GWW0.svg"
              local_url="./images/svg_ch4_narrow_and_less_narrow_bends.svg"
              intrinsicWidth={450}
              intrinsicHeight={250}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The rate of change is the slope, which
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_narrow_and_less_narrow_bends_.wly:17:9
                </span>
              </span>
              {" "}
              {" "}
              is greatest along the right-hand portion
              of the curve:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Qi_q.svg"
              local_url="./images/svg_ch4_narrow_and_less_narrow_bends_steepest.svg"
              intrinsicWidth={450}
              intrinsicHeight={250}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                On the other hand,
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_narrow_and_less_narrow_bends_.wly:24:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                the rate of change of the rate of change
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_narrow_and_less_narrow_bends_.wly:26:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                [a.k.a., second derivative] is the rate of change of the slope, greatest at the first bend:
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_narrow_and_less_narrow_bends_.wly:28:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/kw0r.svg"
              local_url="./images/svg_ch4_narrow_and_less_narrow_bends_curviest.svg"
              intrinsicWidth={450}
              intrinsicHeight={250}
            />
            <Pause />
            <StarDivider />
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
                  The first bend of the curve is the point of
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_narrow_and_less_narrow_bends_.wly:37:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  maximum acceleration
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_narrow_and_less_narrow_bends_.wly:39:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  if the graph denotes the position as a
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_narrow_and_less_narrow_bends_.wly:41:13
                  </span>
                </span>
                {" "}
                {" "}
                function of time of an object.
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  The last segment of the curve is the point of
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_narrow_and_less_narrow_bends_.wly:46:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  maximum velocity
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_narrow_and_less_narrow_bends_.wly:48:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  if the graph denotes the position as a
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_narrow_and_less_narrow_bends_.wly:50:13
                  </span>
                </span>
                {" "}
                {" "}
                function of time of an object.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={11}>
          <ExerciseStatement id="_69_h.a.i_">
            <OuterP>
              <b>
                Exercise 11.
              </b>
            </OuterP>
            <CodexSuggestions>
              <p>
                <span class="t-3003-c">
                  Keep this exercise substantially intact: current Exercise 11 is original E21. Its repetition asks the reader to supply objects, assumptions, and quantifiers rather than merely recognize an identity. Keep the associativity proof immediately after it, then finish with a few short lambda-function callbacks. Do not split this into a longer sequence of new teaching exercises.
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:6:9
                  </span>
                </span>
              </p>
            </CodexSuggestions>
            <OuterP>
              <span class="t-3003-c">
                Express the...
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:8:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <List style="padding-left:2.4em;gap:0.1em;">
              <Item>
                <p>
                  <span class="t-3003-c">
                    associativity of function composition
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:13:9
                    </span>
                  </span>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    associativity of function multiplication
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:15:9
                    </span>
                  </span>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    associativity of function addition
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:17:9
                    </span>
                  </span>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    commutativity of function multiplication
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:19:9
                    </span>
                  </span>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    commutativity of function addition
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:21:9
                    </span>
                  </span>
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...as well as the...
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:23:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <List style="padding-left:2.4em;gap:0.1em;">
              <Item>
                <p>
                  <span class="t-3003-c">
                    associativity of real number multiplication
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:28:9
                    </span>
                  </span>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    associativity of real number addition
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:30:9
                    </span>
                  </span>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    commutativity of real number multiplication
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:32:9
                    </span>
                  </span>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    commutativity of real number addition
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:34:9
                    </span>
                  </span>
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...in the form of self-contained, formal statements.
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:36:5
                </span>
              </span>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                For the functions:
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:40:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <List>
              <Item>
                <Item>
                  <i>
                    <span class="t-3003-c">
                      the associativity of function multiplication is
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:45:18
                      </span>
                    </span>
                    {" "}
                    {" "}
                    the fact that {" "}
                    <Math>
                      $(f \circ g) \circ h = f \circ (g \circ h)$
                    </Math>
                    {" "}{" "}
                    {" "}
                    {" "}
                    <span class="t-3003-c">
                      for all functions {" "}
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:47:17
                      </span>
                    </span>
                    <NoBreak>
                      <Math>
                        $f$
                      </Math>
                      <span class="t-3003-c">
                        ,
                        <span class="t-3003">
                          ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:47:38
                        </span>
                      </span>
                    </NoBreak>
                    <span class="t-3003-c">
                      {" "} {" "}
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:47:38
                      </span>
                    </span>
                    <NoBreak>
                      <Math>
                        $g$
                      </Math>
                      <span class="t-3003-c">
                        ,
                        <span class="t-3003">
                          ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:47:43
                        </span>
                      </span>
                    </NoBreak>
                    <span class="t-3003-c">
                      {" "} {" "}
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:47:43
                      </span>
                    </span>
                    <Math>
                      $h$
                    </Math>
                    <span class="t-3003-c">
                      {" "} such that
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:47:48
                      </span>
                    </span>
                    {" "}
                    {" "}
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $h : D \ra C$
                      </Math>
                      <span class="t-3003-c">
                        ,
                        <span class="t-3003">
                          ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:48:30
                        </span>
                      </span>
                    </NoBreak>
                    <span class="t-3003-c">
                      {" "} {" "}
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:48:30
                      </span>
                    </span>
                    <NoBreak>
                      <Math>
                        $g : C \ra B$
                      </Math>
                      <span class="t-3003-c">
                        ,
                        <span class="t-3003">
                          ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:48:45
                        </span>
                      </span>
                    </NoBreak>
                    <span class="t-3003-c">
                      {" "} {" "}
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:48:45
                      </span>
                    </span>
                    <Math>
                      $f : B \ra A$
                    </Math>
                    {" "}{" "}
                    {" "}
                    {" "}
                    <span class="t-3003-c">
                      [for arbitrary sets {" "}
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:49:17
                      </span>
                    </span>
                    <NoBreak>
                      <Math>
                        $A$
                      </Math>
                      <span class="t-3003-c">
                        ,
                        <span class="t-3003">
                          ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:49:40
                        </span>
                      </span>
                    </NoBreak>
                    <span class="t-3003-c">
                      {" "} {" "}
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:49:40
                      </span>
                    </span>
                    <NoBreak>
                      <Math>
                        $B$
                      </Math>
                      <span class="t-3003-c">
                        ,
                        <span class="t-3003">
                          ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:49:45
                        </span>
                      </span>
                    </NoBreak>
                    <span class="t-3003-c">
                      {" "} {" "}
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:49:45
                      </span>
                    </span>
                    <NoBreak>
                      <Math>
                        $C$
                      </Math>
                      <span class="t-3003-c">
                        ,
                        <span class="t-3003">
                          ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:49:50
                        </span>
                      </span>
                    </NoBreak>
                    <span class="t-3003-c">
                      {" "} {" "}
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:49:50
                      </span>
                    </span>
                    <NoBreak>
                      <Math>
                        $D$
                      </Math>
                      <span class="t-3003-c">
                        ]
                        <span class="t-3003">
                          ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:49:55
                        </span>
                      </span>
                    </NoBreak>
                    <ImageLeft
                      src="/build-img/svgo-svg/pcYW.svg"
                      offsetX="4em"
                      local_url="./images/svg_ch4_ex_f_g_h_A_B_C_D_cloud.svg"
                      intrinsicWidth={430}
                      intrinsicHeight={240}
                    />
                  </i>
                </Item>
              </Item>
              <Item>
                <p>
                  <i>
                    <span class="t-3003-c">
                      the associativity of function multiplication is
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:55:14
                      </span>
                    </span>
                    {" "}
                    {" "}
                    the fact that {" "}
                    <Math>
                      $f(gh) = (fg)h$
                    </Math>
                    <span class="t-3003-c">
                      {" "} for all {" "}
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:56:42
                      </span>
                    </span>
                    <Math>
                      $f, g, h : \rr \ra \rr$
                    </Math>
                  </i>
                </p>
              </Item>
              <Item>
                <p>
                  <i>
                    <span class="t-3003-c">
                      the associativity of function addition is
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:58:14
                      </span>
                    </span>
                    {" "}
                    {" "}
                    the fact that {" "}
                    <Math>
                      $f + (g + h) = (f + g) + h$
                    </Math>
                    <span class="t-3003-c">
                      {" "} for all {" "}
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:59:54
                      </span>
                    </span>
                    <Math>
                      $f, g, h : \rr \ra \rr$
                    </Math>
                  </i>
                </p>
              </Item>
              <Item>
                <p>
                  <i>
                    <span class="t-3003-c">
                      the commutativity of function multiplication is
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:61:14
                      </span>
                    </span>
                    {" "}
                    {" "}
                    the fact that {" "}
                    <Math>
                      $fg = gf$
                    </Math>
                    <span class="t-3003-c">
                      {" "} for all {" "}
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:62:36
                      </span>
                    </span>
                    <Math>
                      $f, g : \rr \ra \rr$
                    </Math>
                  </i>
                </p>
              </Item>
              <Item>
                <p>
                  <i>
                    <span class="t-3003-c">
                      the commutativity of function addition is
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:64:14
                      </span>
                    </span>
                    {" "}
                    {" "}
                    the fact that {" "}
                    <Math>
                      $f + g = g + f$
                    </Math>
                    <span class="t-3003-c">
                      {" "} for all {" "}
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:65:42
                      </span>
                    </span>
                    <Math>
                      $f, g : \rr \ra \rr$
                    </Math>
                  </i>
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                For the real numbers:
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:67:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <List>
              <Item>
                <p>
                  <i>
                    <span class="t-3003-c">
                      the associativity of [real number] multiplication is
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:71:14
                      </span>
                    </span>
                    {" "}
                    {" "}
                    the fact that {" "}
                    <Math>
                      $a(bc) = (ab)c$
                    </Math>
                    <span class="t-3003-c">
                      {" "} for all {" "}
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:72:42
                      </span>
                    </span>
                    <Math>
                      $a, b, c \in \rr$
                    </Math>
                  </i>
                </p>
              </Item>
              <Item>
                <p>
                  <i>
                    <span class="t-3003-c">
                      the associativity of [real number] addition is
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:74:14
                      </span>
                    </span>
                    {" "}
                    {" "}
                    the fact that {" "}
                    <Math>
                      $a + (b + c) = (a + b) + c$
                    </Math>
                    <span class="t-3003-c">
                      {" "} for all {" "}
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:75:54
                      </span>
                    </span>
                    <Math>
                      $a, b, c \in \rr$
                    </Math>
                  </i>
                </p>
              </Item>
              <Item>
                <p>
                  <i>
                    <span class="t-3003-c">
                      the commutativity of [real number] multiplication is
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:77:14
                      </span>
                    </span>
                    {" "}
                    {" "}
                    the fact that {" "}
                    <Math>
                      $ab = ba$
                    </Math>
                    <span class="t-3003-c">
                      {" "} for all {" "}
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:78:36
                      </span>
                    </span>
                    <Math>
                      $a, b \in \rr$
                    </Math>
                  </i>
                </p>
              </Item>
              <Item>
                <p>
                  <i>
                    <span class="t-3003-c">
                      the commutativity of [real number] addition is
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:80:14
                      </span>
                    </span>
                    {" "}
                    {" "}
                    the fact that {" "}
                    <Math>
                      $a + b = b + a$
                    </Math>
                    <span class="t-3003-c">
                      {" "} for all {" "}
                      <span class="t-3003">
                        ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:81:42
                      </span>
                    </span>
                    <Math>
                      $a, b \in \rr$
                    </Math>
                  </i>
                </p>
              </Item>
            </List>
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
                  We never proved the associativity
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_express_the_associativity_etc_.wly:84:13
                  </span>
                </span>
                {" "}
                {" "}
                of function addition, but it is easy to prove!
                (For other proofs see Exercise 32, Exercise 33, as
                well as Exercise 9, {" "}
                <OutChapterLink
                  href="/article/chapter3#_57_h.a.i_"
                  class="out-chapter-link"
                >
                  Chapter 3
                </OutChapterLink>
                .)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={12}>
          <ExerciseStatement id="_70_h.a.i_">
            <OuterP>
              <b>
                Exercise 12.
              </b>
            </OuterP>
            <CodexSuggestions>
              <p>
                <span class="t-3003-c">
                  Keep directly after the formal-statements exercise: current Exercise 12 is original E22. Together they ask the reader to state a claim and unpack a definition to prove one instance. Keep the solution proportionate, then follow with the selected lambda-function callbacks. No additional theory is needed.
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:6:9
                  </span>
                </span>
              </p>
            </CodexSuggestions>
            <OuterP>
              <span class="t-3003-c">
                Apply the definition
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:8:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              fg = (u \ra f(u)g(u))
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of function multiplication
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:14:5
                </span>
              </span>
              {" "}
              {" "}
              to show that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (fg)h = f(gh)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for all functions {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:21:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $f, g, h : \rr \ra \rr$
                </Math>
                ,
              </NoBreak>
              {" "}
              or
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <NoBreak>
                <span class="t-3003-c">
                  (
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:24:7
                  </span>
                </span>
                <Math>
                  $f$
                </Math>
              </NoBreak>
              <span class="t-3003-c">
                {" "} times {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:24:11
                </span>
              </span>
              <NoBreak>
                <Math>
                  $g$
                </Math>
                <span class="t-3003-c">
                  )
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:24:21
                  </span>
                </span>
              </NoBreak>
              <span class="t-3003-c">
                {" "} times {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:24:21
                </span>
              </span>
              <Math>
                $h$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                equals
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:26:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <Math>
                $f$
              </Math>
              <span class="t-3003-c">
                {" "} times {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:28:10
                </span>
              </span>
              <NoBreak>
                <span class="t-3003-c">
                  (
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:28:10
                  </span>
                </span>
                <Math>
                  $g$
                </Math>
              </NoBreak>
              <span class="t-3003-c">
                {" "} times {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:28:21
                </span>
              </span>
              <NoBreak>
                <Math>
                  $h$
                </Math>
                <span class="t-3003-c">
                  )
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:28:31
                  </span>
                </span>
              </NoBreak>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for all functions {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:30:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $f, g, h : \rr \ra \rr$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                It is necessary and sufficient to show that {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:34:9
                </span>
              </span>
              <Math>
                $((fg)h)(u) = (f(gh))(u)$
              </Math>
              {" "}
              for an arbitrary input {" "}
              <NoBreak>
                <Math>
                  $u \in \rr$
                </Math>
                .
              </NoBreak>
              {" "} (Function equality is
              based on input-output behavior: two functions are
              equal if and only if every input is mapped to the
              same output under either function. See {" "}
              <OutChapterLink
                href="/article/chapter3#_43_h.a.i_"
                class="out-chapter-link"
              >
                Note 5, Exercise 9, Chapter 3
              </OutChapterLink>
              .)
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Starting up,
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:41:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              ((fg)h)(u) = (fg)(u) \cdot h(u)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by the definition of function multiplication,
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:47:9
                </span>
              </span>
              {" "}
              {" "}
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f(gh))(u) = f(u) \cdot (gh)(u)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                likewise. Moreover,
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:54:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (fg)(u) = f(u) \cdot g(u)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:60:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (gh)(u) = g(u) \cdot h(u)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by the same definition again. Therefore,
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:66:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              ((fg)h)(u) = (f(u) \cdot g(u)) \cdot h(u)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                on the one hand, and
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:72:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f(gh))(u) = f(u) \cdot (g(u) \cdot h(u))
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                on the other hand. But
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:78:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f(u) \cdot g(u)) \cdot h(u) = f(u) \cdot (g(u) \cdot h(u))
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by the associativity of ordinary real number
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:84:9
                </span>
              </span>
              {" "}
              {" "}
              multiplication. (Not function multiplication:
              {" "}
              <i>
                real number multiplication
              </i>
              .) So
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              ((fg)h)(u)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                equals
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:92:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f(gh))(u)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for arbitrary {" "}
                <span class="t-3003">
                  ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:98:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $u$
                </Math>
                ,
              </NoBreak>
              {" "} which completes the proof.
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
                  In words, we have just established the
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:102:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  associativity of function multiplication
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:103:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  while we had previously established the
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:104:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  associativity of function composition
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:105:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  (if you recall that one) in {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:106:13
                  </span>
                </span>
                <OutChapterLink
                  href="/article/chapter3#_44_h.a.i_"
                  class="out-chapter-link"
                >
                  Exercise 9 of Chapter 3
                </OutChapterLink>
                .
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  By this result, we can write
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:111:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                fgh
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  without parentheses: {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_associativity_of_function_multiplication_.wly:115:13
                  </span>
                </span>
                <Math>
                  $(fg)h$
                </Math>
                {" "} and {" "}
                <Math>
                  $f(gh)$
                </Math>
                {" "} give the same result.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={13}>
          <ExerciseStatement id="_71_h.a.i_">
            <OuterP>
              <b>
                Exercise 13.
              </b>
            </OuterP>
            <CodexSuggestion>
              <p>
                <span class="t-3003-c">
                  Selection to choose from, not a proposed requirement to do all of these. Current Exercise 13 is an editorial container following Exercises 11–12 (original E21–22). Preferred shortlist: B, D, E. C can replace B; A and F are reserves; G belongs later in The Product Rule. The shortlist assumes the small absolute-value/domain pair has been introduced earlier in these exercises. Keep all candidates available for selection now, but eventually present only the chosen short questions as the callback to “correct, incorrect, or nonsensical.” In the candidates below, {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:6:9
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $\mathrm&#123;id&#125;=(x\mapsto x)$
                  </Math>
                  <span class="t-3003-c">
                    ,
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:6:598
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} function products and powers are pointwise, and all inputs are real. State any domain restrictions.
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:6:598
                  </span>
                </span>
              </p>
            </CodexSuggestion>
            <CodexSuggestion>
              <p>
                <b>
                  <span class="t-3003-c">
                    Candidate A: two orders.
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:10:10
                    </span>
                  </span>
                </b>
                <span class="t-3003-c">
                  {" "} Rewrite each expression as a single lambda function:
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:10:35
                  </span>
                </span>
              </p>
              <Pause />
              <MathBlock>
                $$
                (x\mapsto x+1)\circ(u\mapsto u^2),\qquad
                (u\mapsto u^2)\circ(x\mapsto x+1).
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <p>
                <span class="t-3003-c">
                  Answer notes for selection: {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:17:9
                  </span>
                </span>
                <Math>
                  $t\mapsto t^2+1$
                </Math>
                <span class="t-3003-c">
                  {" "} and {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:17:53
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $t\mapsto(t+1)^2$
                  </Math>
                  <span class="t-3003-c">
                    .
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:17:75
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} Different bound-variable names should not become a separate obstacle. This is the most direct computational callback, but may repeat Chapter 3 too closely.
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:17:75
                  </span>
                </span>
              </p>
            </CodexSuggestion>
            <CodexSuggestion>
              <p>
                <b>
                  <span class="t-3003-c">
                    Candidate B: id has different jobs.
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:21:10
                    </span>
                  </span>
                </b>
                <span class="t-3003-c">
                  {" "} For {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:21:46
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $f:\mathbb R\to\mathbb R$
                  </Math>
                  <span class="t-3003-c">
                    ,
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:21:76
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} rewrite these as lambda functions, then identify which equal {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:21:76
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $f$
                  </Math>
                  <span class="t-3003-c">
                    :
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:21:142
                    </span>
                  </span>
                </NoBreak>
              </p>
              <Pause />
              <MathBlock>
                $$
                f\circ\mathrm&#123;id&#125;,\qquad \mathrm&#123;id&#125;\circ f,\qquad
                f+\mathrm&#123;id&#125;,\qquad f\,\mathrm&#123;id&#125;.
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <p>
                <span class="t-3003-c">
                  Answer notes: {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:28:9
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $x\mapsto f(x)$
                  </Math>
                  <span class="t-3003-c">
                    ,
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:28:38
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:28:38
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $x\mapsto f(x)$
                  </Math>
                  <span class="t-3003-c">
                    ,
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:28:55
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:28:55
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $x\mapsto f(x)+x$
                  </Math>
                  <span class="t-3003-c">
                    ,
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:28:74
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} and {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:28:74
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $x\mapsto xf(x)$
                  </Math>
                  <span class="t-3003-c">
                    .
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:28:96
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} Only the first two equal {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:28:96
                  </span>
                </span>
                <Math>
                  $f$
                </Math>
                <span class="t-3003-c">
                  {" "} for every {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:28:126
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $f$
                  </Math>
                  <span class="t-3003-c">
                    .
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:28:140
                    </span>
                  </span>
                </NoBreak>
              </p>
            </CodexSuggestion>
            <CodexSuggestion>
              <p>
                <b>
                  <span class="t-3003-c">
                    Candidate C: which identity?
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:32:10
                    </span>
                  </span>
                </b>
                <span class="t-3003-c">
                  {" "} Find a function that leaves every real-valued function on the real line unchanged when added to it. Then ask the same question for multiplication and for composition.
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:32:39
                  </span>
                </span>
              </p>
              <p class="indent-10">
                <span class="t-3003-c">
                  Answer notes: {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:34:9
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $x\mapsto0$
                  </Math>
                  <span class="t-3003-c">
                    ,
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:34:34
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:34:34
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $x\mapsto1$
                  </Math>
                  <span class="t-3003-c">
                    ,
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:34:47
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} and {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:34:47
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $\mathrm&#123;id&#125;$
                  </Math>
                  <span class="t-3003-c">
                    ,
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:34:66
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} respectively. Ask for the defining equations if a closer callback to the formal-statements exercise is wanted. “Identity” belongs to an operation, not simply to an object.
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:34:66
                  </span>
                </span>
              </p>
            </CodexSuggestion>
            <CodexSuggestion>
              <p>
                <b>
                  <span class="t-3003-c">
                    Candidate D: recognize the function.
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:38:10
                    </span>
                  </span>
                </b>
                <span class="t-3003-c">
                  {" "} Let {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:38:47
                  </span>
                </span>
                <Math>
                  $s=(x\mapsto\sqrt&#123;x&#125;)$
                </Math>
                <span class="t-3003-c">
                  {" "} on the nonnegative reals. Give an ordinary name or description for each function, including its domain:
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:38:74
                  </span>
                </span>
              </p>
              <Pause />
              <MathBlock>
                $$
                s\circ\mathrm&#123;id&#125;^2,\qquad \mathrm&#123;id&#125;^2\circ s.
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <p>
                <span class="t-3003-c">
                  Answer notes: absolute value on the real line; the identity restricted to the nonnegative reals. Here {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:44:9
                  </span>
                </span>
                <Math>
                  $\mathrm&#123;id&#125;^2$
                </Math>
                <span class="t-3003-c">
                  {" "} is the pointwise square, not {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:44:126
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $\mathrm&#123;id&#125;\circ\mathrm&#123;id&#125;$
                  </Math>
                  <span class="t-3003-c">
                    .
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:44:185
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} This candidate connects to both the absolute-value exercise and the importance of domains.
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:44:185
                  </span>
                </span>
              </p>
            </CodexSuggestion>
            <CodexSuggestion>
              <p>
                <b>
                  <span class="t-3003-c">
                    Candidate E: direction in terms of id.
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:48:10
                    </span>
                  </span>
                </b>
                <span class="t-3003-c">
                  {" "} Restrict {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:48:49
                  </span>
                </span>
                <Math>
                  $x\mapsto|x|$
                </Math>
                <span class="t-3003-c">
                  {" "} to the real line with zero removed. Write its derivative using {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:48:72
                  </span>
                </span>
                <Math>
                  $\mathrm&#123;id&#125;$
                </Math>
                <span class="t-3003-c">
                  {" "} and pointwise function operations, without cases or a lambda expression. Define {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:48:149
                  </span>
                </span>
                <Math>
                  $|f|=(x\mapsto|f(x)|)$
                </Math>
                <span class="t-3003-c">
                  {" "} first, or ask the student to supply that definition.
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:48:252
                  </span>
                </span>
              </p>
              <p class="indent-10">
                <span class="t-3003-c">
                  Answer notes: {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:50:9
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $\mathrm&#123;id&#125;/|\mathrm&#123;id&#125;|$
                  </Math>
                  <span class="t-3003-c">
                    ,
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:50:50
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} with zero excluded. An alternative using Candidate D is {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:50:50
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $\mathrm&#123;id&#125;/(s\circ\mathrm&#123;id&#125;^2)$
                  </Math>
                  <span class="t-3003-c">
                    .
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:50:143
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} Choose one notation rather than requiring both. The function retains the direction of a nonzero input and discards its magnitude.
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:50:143
                  </span>
                </span>
              </p>
            </CodexSuggestion>
            <CodexSuggestion>
              <p>
                <b>
                  <span class="t-3003-c">
                    Candidate F: the domain catches the cancellation.
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:54:10
                    </span>
                  </span>
                </b>
                <span class="t-3003-c">
                  {" "} Is
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:54:60
                  </span>
                </span>
              </p>
              <Pause />
              <MathBlock>
                $$
                &#123;\mathrm&#123;id&#125;\over\mathrm&#123;id&#125;&#125;=(x\mapsto1)
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <p>
                <span class="t-3003-c">
                  correct if the function on the right is defined on all real numbers? If not, repair the statement.
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:60:9
                  </span>
                </span>
              </p>
              <p class="indent-10">
                <span class="t-3003-c">
                  Answer notes: the left side is undefined at zero. Restrict the right-hand domain to the nonzero reals. The two formulas agree wherever the quotient is defined, but that alone does not make the original functions equal.
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:62:9
                  </span>
                </span>
              </p>
            </CodexSuggestion>
            <CodexSuggestion>
              <p>
                <b>
                  <span class="t-3003-c">
                    Candidate G: the same symbols, two operations.
                    <span class="t-3003">
                      ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:66:10
                    </span>
                  </span>
                </b>
                <span class="t-3003-c">
                  {" "} With {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:66:57
                  </span>
                </span>
                <Math>
                  $\mathrm&#123;id&#125;^2$
                </Math>
                <span class="t-3003-c">
                  {" "} meaning pointwise square, identify these two functions:
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:66:78
                  </span>
                </span>
              </p>
              <Pause />
              <MathBlock>
                $$
                (\mathrm&#123;id&#125;^2)',\qquad (\mathrm&#123;id&#125;')^2.
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <p>
                <span class="t-3003-c">
                  Answer notes: {" "}
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:72:9
                  </span>
                </span>
                <Math>
                  $2\mathrm&#123;id&#125;$
                </Math>
                <span class="t-3003-c">
                  {" "} and the constant-one function. Use only if the derivative of the square function has already been established by this point; otherwise defer this candidate to The Product Rule. It could later contrast differentiation as an operator with pointwise multiplication.
                  <span class="t-3003">
                    ./src/content/ch4/ch4^exercises/_lambda_callback_candidates_.wly:72:37
                  </span>
                </span>
              </p>
            </CodexSuggestion>
          </ExerciseStatement>
        </Exercise>
      </Exercises>
    </>}
  </>;
};