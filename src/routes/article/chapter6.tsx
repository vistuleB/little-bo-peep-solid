import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Boxed  from "~/components/Boxed";
import { CodexSuggestion }  from "~/components/CodexSuggestions";
import { CentralDisplay, CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { Item, List }  from "~/components/List";
import { MathBlock, Math }  from "~/components/Math";
import MathJaxSvgExportTooltip  from "~/components/MathJaxSvgExportTooltip";
import OutChapterLink  from "~/components/OutChapterLink";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageLeft, ImageRight }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { StarDivider }  from "~/components/StarDivider";
import TextParent  from "~/components/TextParent";
import { TildeDivider }  from "~/components/TildeDivider";
import { SolutionNote, Example, Pause, Section, NoBreak }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter6__() {
  return (
    <Article
      prevPage="/article/chapter5"
      nextPage="/article/chapter7"
      pageNecessaryMargin={1500}
      maxElementWidth={1000}
      id="_103_h.a.i_"
      path="/article/chapter6"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            <span class="t-3003-c">
              cos and sin. (“cosine” and “sine”.)
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:4:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            <span class="t-3003-c">
              derivatives
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:157:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=section-3">
            <span class="t-3003-c">
              even/odd identities, and identities with {" "}
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:271:6
              </span>
            </span>
            <NoBreak>
              <span class="t-3003-c">
                “
                <span class="t-3003">
                  ./src/content/ch5/ch5.wly:271:6
                </span>
              </span>
              <Math>
                $\eta$
              </Math>
              <span class="t-3003-c">
                ”
                <span class="t-3003">
                  ./src/content/ch5/ch5.wly:271:54
                </span>
              </span>
            </NoBreak>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            <span class="t-3003-c">
              relation to derivatives
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:347:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-4">
          <InChapterLink href="?id=section-5">
            <span class="t-3003-c">
              parenthetization and powers
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:393:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-5">
          <InChapterLink href="?id=section-6">
            <span class="t-3003-c">
              the pythagorean identity
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:431:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-6">
          <InChapterLink href="?id=section-7">
            <span class="t-3003-c">
              inputs as radians
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:542:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-7">
          <InChapterLink href="?id=section-8">
            <span class="t-3003-c">
              the degree “°” notation
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:650:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-8">
          <InChapterLink href="?id=section-9">
            <span class="t-3003-c">
              sines and cosines of {" "}
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:718:6
              </span>
            </span>
            <NoBreak>
              <Math>
                $\mathbf&#123;30^\circ&#125;$
              </Math>
              <span class="t-3003-c">
                ,
                <span class="t-3003">
                  ./src/content/ch5/ch5.wly:718:46
                </span>
              </span>
            </NoBreak>
            {" "}
            {" "}
            <Math>
              $\mathbf&#123;45^\circ&#125;$
            </Math>
            <span class="t-3003-c">
              {" "} and {" "}
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:719:24
              </span>
            </span>
            <NoBreak>
              <Math>
                $\mathbf&#123;60^\circ&#125;$
              </Math>
            </NoBreak>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-9">
          <InChapterLink href="?id=section-10">
            <span class="t-3003-c">
              scaling the circle
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:937:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-10">
          <InChapterLink href="?id=section-11">
            <span class="t-3003-c">
              right triangles
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:968:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-11">
          <InChapterLink href="?id=section-12">
            <span class="t-3003-c">
              the missing arrows
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:1048:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-12">
          <InChapterLink href="?id=section-13">
            <span class="t-3003-c">
              note on calculators
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:1144:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-13">
          <InChapterLink href="?id=exercises">
            <span class="t-3003-c">
              exercises
              <span class="t-3003">
                ./src/content/ch5/ch5^exercises/__parent.wly:1:1
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 6:">
        <span class="t-3003-c">
          Trigonometry I
          <span class="t-3003">
            ./src/content/ch5/__parent.wly:2:11
          </span>
        </span>
      </ArticleTitle>
      <Section id="section-1">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Cos and sin. (“Cosine” and “sine”.)
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:4:6
              </span>
            </span>
          </b>
          {" "} We have
          already encountered the ‘cos’ function in 
          {" "}
          <OutChapterLink
            href="/article/chapter3#_41_h.a.i_"
            class="out-chapter-link"
          >
            Exercise 7 of Chapter 3
          </OutChapterLink>
          ,
          e.g.. It has this graph:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/hiZe.svg"
          local_url="./images/svg_ch5_ch_cosine.svg"
          intrinsicWidth="1139.5"
          intrinsicHeight="175.5"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            It has a close cousin named ‘sin’. While {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:12:5
            </span>
          </span>
          <Math>
            $\cos(x)$
          </Math>
          {" "}
          tops off at {" "}
          <NoBreak>
            <Math>
              $x = 0$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $\sin(x)$
          </Math>
          {" "} goes diagonally through
          {" "}
          <NoBreak>
            <Math>
              $(0, 0)$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/fuoV.svg"
          local_url="./images/svg_ch5_ch_cosine_and_sine.svg"
          intrinsicWidth="1139.5"
          intrinsicHeight="175.5"
        />
        <Pause />
        <OuterP>
          <Math>
            $\cos(x)$
          </Math>
          {" "}{" "}
          {" "}
          {" "}
          <span class="t-3003-c">
            is the
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:20:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <NoBreak>
            <Math>
              $x$
            </Math>
            <span class="t-3003-c">
              -coordinate
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:22:10
              </span>
            </span>
          </NoBreak>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:24:5
            </span>
          </span>
          <Math>
            $\sin(x)$
          </Math>
          {" "} is the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <NoBreak>
            <Math>
              $y$
            </Math>
            <span class="t-3003-c">
              -coordinate
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:26:10
              </span>
            </span>
          </NoBreak>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            of a point {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:28:5
            </span>
          </span>
          <Math>
            $x$
          </Math>
          {" "} units counterclockwise from
          {" "}
          <Math>
            $(1, 0)$
          </Math>
          {" "} on the unit circle. (Note that “a”
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            unit circle
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:31:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a circle of radius {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:33:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $1$
            </Math>
            ,
          </NoBreak>
          {" "} while “the” unit
          circle is the circle of radius {" "}
          <Math>
            $1$
          </Math>
          {" "} centered
          at {" "}
          <NoBreak>
            <Math>
              $(0, 0)$
            </Math>
            .)
          </NoBreak>
          {" "} For example, 
          the graphs show
          that {" "}
          <NoBreak>
            <Math>
              $\cos(&#123;1\over 2&#125;) \approx 0.9$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $\sin(&#123;1\over 2&#125;) \approx 0.5$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/aPyP.svg"
          local_url="./images/svg_ch5_ch_cosine_and_sine_@0.5_v2.svg"
          intrinsicWidth={1200}
          intrinsicHeight={205}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Per the definitions, the point half a
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:43:5
            </span>
          </span>
          {" "}
          {" "}
          unit counterclockwise from {" "}
          <Math>
            $(1, 0)$
          </Math>
          {" "} on the unit
          circle has coordinates {" "}
          <Math>
            $\approx 0.9$
          </Math>
          {" "} in {" "}
          <Math>
            $x$
          </Math>
          {" "}
          and {" "}
          <Math>
            $\approx 0.5$
          </Math>
          {" "} in {" "}
          <Math>
            $y$
          </Math>
          {" "} (or actually 
          {" "}
          <Math>
            $0.87758...$
          </Math>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $0.47942...$
            </Math>
            ,
          </NoBreak>
          {" "} 
          which is what 
          a calculator equipped with ‘sin’ and ‘cos’ will tell us):
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/SPMY.svg"
          local_url="./images/svg_ch5_ch_unit_circle_@0.5_smaller_v2.svg"
          intrinsicWidth={400}
          intrinsicHeight={345}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            As a second example, the graphs show that
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:62:5
            </span>
          </span>
          {" "}
          {" "}
          {" "}{" "}
          <NoBreak>
            <Math>
              $\sin(-3) \approx -0.2$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $\cos(-3) \approx -0.99$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/T8lW.svg"
          local_url="./images/svg_ch5_ch_cosine_and_sine_@-3_v2.svg"
          intrinsicWidth={1200}
          intrinsicHeight={205}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Indeed, going {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:68:5
            </span>
          </span>
          <Math>
            $-3$
          </Math>
          {" "} units counterclockwise—which
          means, going {" "}
          <Math>
            $3$
          </Math>
          {" "} units clockwise—on the unit
          circle, starting from {" "}
          <NoBreak>
            <Math>
              $(1, 0)$
            </Math>
            ,
          </NoBreak>
          {" "} brings us to a point
          with {" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -
          </NoBreak>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinates
          </NoBreak>
          {" "} of {" "}
          <Math>
            $\approx -0.2$
          </Math>
          {" "}
          and {" "}
          <Math>
            $\approx -0.99$
          </Math>
          {" "} respectively (or {" "}
          <Math>
            $-0.1411...$
          </Math>
          {" "}
          and {" "}
          <NoBreak>
            <Math>
              $-0.989992...$
            </Math>
            ,
          </NoBreak>
          {" "} 
          per the calculator):
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/9Ygl.svg"
          local_url="./images/svg_ch5_ch_unit_circle_@-3_smaller.svg"
          intrinsicWidth={400}
          intrinsicHeight={345}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            For a last example,
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:80:5
            </span>
          </span>
          {" "}
          {" "}
          note that there appears
          to be a value of {" "}
          <Math>
            $x$
          </Math>
          {" "} near {" "}
          <NoBreak>
            <Math>
              $-1.6$
            </Math>
            ,
          </NoBreak>
          {" "} where {" "}
          <NoBreak>
            <Math>
              $\cos(x) = 0$
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <NoBreak>
            <Math>
              $\sin(x) = -1$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/BfG4.svg"
          local_url="./images/svg_ch5_ch_cosine_and_sine_@minus_eta_v2.svg"
          intrinsicWidth={1200}
          intrinsicHeight={205}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Some thought reveals that {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:88:5
            </span>
          </span>
          {" "}
          {" "}
          such a value {" "}
          <Math>
            $x$
          </Math>
          {" "} does exist, and more precisely equals 
          {" "}
          <i>
            minus one-quarter the circumference
            of a unit circle
          </i>
          , because {" "}
          <Math>
            $(0, -1)$
          </Math>
          {" "} is
          one-quarter of the unit circle clockwise from {" "}
          <NoBreak>
            <Math>
              $(1, 0)$
            </Math>
            .
          </NoBreak>
          {" "}
          Note that one-quarter the circumference of a unit
          circle was estimated to be
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \approx &#123;11\over 7&#125; = 1.\overline&#123;571428&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            in {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:100:5
            </span>
          </span>
          <OutChapterLink
            href="/article/chapter5#_79_h.a.i_"
            class="out-chapter-link"
          >
            Exercise 4 of Chapter 3
          </OutChapterLink>
          {" "} (by direct inspection
          of the graph {" "}
          <NoBreak>
            <Math>
              $y = \cos(x)$
            </Math>
            ,
          </NoBreak>
          {" "} for that matter,
          which may or may not be cheating), which agrees
          with the visual estimate {" "}
          <NoBreak>
            <Math>
              $x \approx -1.6$
            </Math>
            .
          </NoBreak>
          {" "} (But
          that value would be namely {" "}
          <NoBreak>
            <Math>
              $x = -1.57...$
            </Math>
            ,
          </NoBreak>
          {" "} not
          {" "}
          <NoBreak>
            <Math>
              $x = -1.6$
            </Math>
            .)
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            In another definition,
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:110:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(x)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is defined as the {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:116:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinate
          </NoBreak>
          {" "} of a point that
          is {" "}
          <Math>
            $x$
          </Math>
          {" "} units counterclockwise from {" "}
          <Math>
            $(0, -1)$
          </Math>
          {" "} on
          the unit circle. In this case, {" "}
          <Math>
            $\sin(x)$
          </Math>
          {" "} and
          {" "}
          <Math>
            $\cos(x)$
          </Math>
          {" "} are both defined by {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinates:
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/h28T.svg"
          local_url="./images/svg_ch5_ch_unit_circle_with_new_definition.svg"
          intrinsicWidth={720}
          intrinsicHeight={455}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            If you tilt your head sideways,
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:124:5
            </span>
          </span>
          {" "}
          {" "}
          the {" "}
          <Math>
            $x$
          </Math>
          {" "} axis looks, from the
          vantage point of {" "}
          <NoBreak>
            <Math>
              $(0, -1)$
            </Math>
            ,
          </NoBreak>
          {" "} the same as the {" "}
          <Math>
            $y$
          </Math>
          {" "}
          axis looks from the vantage point of {" "}
          <NoBreak>
            <Math>
              $(1, 0)$
            </Math>
            .
          </NoBreak>
          {" "}
          So the old and new definitions of {" "}
          <Math>
            $\sin(x)$
          </Math>
          {" "} are
          equivalent! (👍👍)
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            In particular, {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:131:5
            </span>
          </span>
          <Math>
            $\sin(x)$
          </Math>
          {" "} and {" "}
          <Math>
            $\cos(x)$
          </Math>
          {" "} can also
          be understood as the {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinates
          </NoBreak>
          {" "} of two
          particles on the unit circle such that the ‘sin’
          particle is one-quarter-turn behind the {" "}
          <NoBreak>
            ‘
            <Math>
              $\cos$
            </Math>
            ’
          </NoBreak>
          {" "}
          particle:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/5m2X.svg"
          local_url="./images/svg_ch5_ch_unit_circle_with_sin_and_cos_particles.svg"
          intrinsicWidth={440}
          intrinsicHeight={370}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...to be contrasted with our first definition,
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:140:5
            </span>
          </span>
          {" "}
          {" "}
          employing a single point projected onto
          two different axes:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/7839.svg"
          local_url="./images/svg_ch5_ch_unit_circle_with_sincos_particle.svg"
          intrinsicWidth={440}
          intrinsicHeight={345}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            The second definition (former diagram) explains
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:147:5
            </span>
          </span>
          {" "}
          {" "}
          why values of {" "}
          <Math>
            $\sin$
          </Math>
          {" "} lag a fixed amount behind
          values of {" "}
          <NoBreak>
            <Math>
              $\cos$
            </Math>
            .
          </NoBreak>
          {" "} (“Lagging” when you read the
          graphs from left to right.) It's because the ‘sin’
          particle follows in the trail blazed by the ‘cos’
          particle.
        </OuterP>
      </Section>
      <Rest />
    </Article>
  );
}

const Rest = () => {
  const visibleRestSections = useShowMore(13);
  return <>
    {visibleRestSections() > 0 && <>
      <Pause />
      <Section id="section-2">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Derivatives.
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:157:6
              </span>
            </span>
          </b>
          {" "}
          We can
          add two more particles to the diagram that
          defines ‘sin’ and ‘cos’ via {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinates.
          </NoBreak>
          {" "}
          The two new particles are labeled {" "}
          <NoBreak>
            “
            <Math>
              $-\!\sin$
            </Math>
            ”
          </NoBreak>
          {" "}
          and {" "}
          <NoBreak>
            “
            <Math>
              $-\!\cos$
            </Math>
            ”:
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/WKck.svg"
          local_url="./images/svg_ch5_ch_unit_circle_with_four_particles.svg"
          intrinsicWidth={460}
          intrinsicHeight={390}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            These labels are chosen because the {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:167:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinate
          </NoBreak>
          {" "}
          of the {" "}
          <NoBreak>
            “
            <Math>
              $-\!\sin$
            </Math>
            ”
          </NoBreak>
          {" "} particle, e.g., is
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          -\!\sin(x)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            by symmetry with the {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:174:5
            </span>
          </span>
          <Math>
            $\sin$
          </Math>
          {" "} particle, meaning that 
          the {" "}
          <NoBreak>
            “
            <Math>
              $-\!\sin$
            </Math>
            ”
          </NoBreak>
          {" "} particle defines the function
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x \ra -\!\sin(x)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            also known as
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:181:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplay>
          <NoBreak>
            <span class="t-3003-c">
              “
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:183:7
              </span>
            </span>
            <Math>
              $-\!\sin$
            </Math>
            <span class="t-3003-c">
              ”#negation-of-a-function-first-mention##&lt;&lt;
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:183:17
              </span>
            </span>
          </NoBreak>
        </CentralDisplay>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            by the general definition that
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:185:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          -f = (x \ra -f(x))
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for all {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:189:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $f : \rr \ra \rr$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            Adding the curves for {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:191:5
            </span>
          </span>
          <Math>
            $-\!\sin$
          </Math>
          {" "} and {" "}
          <Math>
            $-\!\cos$
          </Math>
          {" "}
          to the graphs fills the “gap” between {" "}
          <Math>
            $y = \sin(x)$
          </Math>
          {" "}
          and {" "}
          <Math>
            $y = \cos(x)$
          </Math>
          {" "} with two new equally-spaced curves;
          note that
          {" "}
          <Math>
            $\cos$
          </Math>
          {" "} lags behind {" "}
          <Math>
            $-\!\sin$
          </Math>
          {" "}
          (reading the graphs from left to right)
          by the same amount that {" "}
          <Math>
            $\sin$
          </Math>
          {" "} lags behind
          {" "}
          <NoBreak>
            <Math>
              $\cos$
            </Math>
            ,
          </NoBreak>
          {" "} etc:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/RzLW.svg"
          local_url="./images/svg_ch5_ch_four_curves.svg"
          intrinsicWidth={1261}
          intrinsicHeight={200}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            These are the same four curves that
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:203:5
            </span>
          </span>
          {" "}
          {" "}
          appear in {" "}
          <OutChapterLink
            href="/article/chapter5#_74_h.a.i_"
            class="out-chapter-link"
          >
            Example 1 of Chapter 5
          </OutChapterLink>
          .
          In particular,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin' = \cos
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \cos' = -\!\sin
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          (-\!\sin)' = -\!\cos
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          (-\!\cos)' = \sin
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            because the rate of change of each
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:218:5
            </span>
          </span>
          {" "}
          {" "}
          particle's {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinate
          </NoBreak>
          {" "} is the
          {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinate
          </NoBreak>
          {" "} of the next particle
          in the order of rotation, as explained
          in the solution to that problem,
          clockwise vs. counterclockwise rotation
          notwithstanding.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            One can also note that
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:226:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (-f)' = ((-1)\cdot f)' = (-1) \cdot f' = -f'
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            in general for any {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:230:5
            </span>
          </span>
          <Math>
            $f : \rr \ra \rr$
          </Math>
          {" "}
          (cf. {" "}
          <OutChapterLink
            href="/article/chapter7#_110_h.a.i_"
            class="out-chapter-link"
          >
            Exercise 6
          </OutChapterLink>
          {" "}
          and {" "}
          <OutChapterLink
            href="/article/chapter7#_111_h.a.i_"
            class="out-chapter-link"
          >
            Exercise 7 of Chapter 4
          </OutChapterLink>
          ),
          which implies that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (-\!\sin)' = -\!\sin'
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (or
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:244:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (-\!\sin)' = -\!\sin' = -\!\cos
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            to finish the computation),
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:248:5
            </span>
          </span>
          {" "}
          {" "}
          and that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (-\!\cos)' = -\!\cos'
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (or
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:253:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (-\!\cos)' = -\!\cos' = -(-\!\sin) = \sin
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            to finish the computation),
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:257:5
            </span>
          </span>
          {" "}
          {" "}
          which means that one only needs to
          remember the first two equations—though
          even better is to just remember the entire
          four-particle diagram, and never think about
          signs again!
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 1 && <>
      <Pause />
      <Section id="section-3">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Even/odd identities, and identities with {" "}
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:271:6
              </span>
            </span>
            <NoBreak>
              “
              <Math>
                $\eta$
              </Math>
              ”.
            </NoBreak>
          </b>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \displaylines&#123;
          \up&#123;1.0&#125;\cos(-x) = \cos(x) \\
          \up&#123;1.7&#125;\sin(-x) = -\sin(x) \\
          \up&#123;1.7&#125;\sin(x + \eta) = \cos(x) \\
          \up&#123;1.7&#125;\cos(x - \eta) = \sin(x) \\
          \up&#123;1.7&#125;\dn&#123;0.5&#125;\cos(\eta/2 + x) = \sin(\eta/2 - x)
          &#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for all {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:283:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $x \in \rr$
            </Math>
            ,
          </NoBreak>
          {" "} where
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \eta
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (“aye-tah”, Greek letter “eta”) is a
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:289:5
            </span>
          </span>
          {" "}
          {" "}
          constant that denotes the quarter-circumference
          of a unit circle, or about {" "}
          <NoBreak>
            <Math>
              $&#123;11\over 7&#125;$
            </Math>
            .
          </NoBreak>
          {" "}
          (Cf. {" "}
          <OutChapterLink
            href="/article/chapter5#_79_h.a.i_"
            class="out-chapter-link"
          >
            Exercise 4
          </OutChapterLink>
          , {" "}
          <OutChapterLink
            href="/article/chapter4#_73_h.a.i_"
            class="out-chapter-link"
          >
            Chapter 4
          </OutChapterLink>
          .) You should
          be able to verify each of these identities
          just by looking at them and thinking of the
          definitions of {" "}
          <NoBreak>
            <Math>
              $\sin(x)$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $\cos(x)$
            </Math>
            —possibly
          </NoBreak>
          {" "}
          the “second” definition of {" "}
          <NoBreak>
            <Math>
              $\sin(x)$
            </Math>
            ,
          </NoBreak>
          {" "} in some
          cases—but in case something goes wrong, here
          is a cheat sheet that does some of the thinking
          for you:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/g1x7.svg"
          local_url="./images/svg_ch5_ch_identity_explanations.svg"
          intrinsicWidth={780}
          intrinsicHeight={1050}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Two more identities
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:304:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(\eta - x) = \cos(x)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:308:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(\eta - x) = \sin(x)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            are related to the last identity above, in that they
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:312:5
            </span>
          </span>
          {" "}
          {" "}
          involve symmetry about the line {" "}
          <Math>
            $x = y$
          </Math>
          {" "} in the Cartesian
          plane:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/9iTV.svg"
          local_url="./images/svg_ch5_ch_identity_explanations_more.svg"
          intrinsicWidth={780}
          intrinsicHeight={305}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            We also have these identities...
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:319:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \displaylines&#123;
          \up&#123;1.2&#125;\cos(x + 4\eta) = \cos(x)\\
          \up&#123;1.7&#125;\sin(x + 4\eta) = \rt&#123;0.15&#125;\sin(x)\rt&#123;0.15&#125;\\
          \up&#123;1.7&#125;\cos(x + 2\eta) = \rt&#123;0.15&#125;-\!\cos(x)\rt&#123;0.15&#125;\\
          \up&#123;1.7&#125;\sin(x + 2\eta) = \rt&#123;0.15&#125;-\!\sin(x)\rt&#123;0.15&#125;
          &#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...that follow because one full turn
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:330:5
            </span>
          </span>
          {" "}
          {" "}
          around the circle brings you back to the
          same position, whereas a half-turn brings
          you around  to your {" "}
          <i>
            antipode
          </i>
          {" "} (where
          both coordinates are negated), and these
          two more...
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \displaylines&#123;\up&#123;1.0&#125;\cos(x + \eta) = -\!\sin(x) \\
          \up&#123;1.7&#125;\sin(x - \eta) = -\!\cos(x)&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...that follow from the four-particle
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:342:5
            </span>
          </span>
          {" "}
          {" "}
          diagram, e.g..
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 2 && <>
      <Pause />
      <Section id="section-4">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Relation to derivatives.
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:347:6
              </span>
            </span>
          </b>
          {" "}
          Note that the derivatives of
          sin and cos can also be expressed by
          the [possibly more “logical”] formulas
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin'(x) = \sin(x + \eta)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \cos'(x) = \cos(x + \eta)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            given that
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:359:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(x + \eta) = \cos(x)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \cos(x + \eta) = -\!\sin(x)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            as seen in the previous section.
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:368:5
            </span>
          </span>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            More generally,
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:370:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin^&#123;(\ell)&#125;(x) = \sin(x + \ell\eta)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \cos^&#123;(\ell)&#125;(x) = \cos(x + \ell\eta)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            where {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:379:5
            </span>
          </span>
          <NoBreak>
            “
            <Math>
              $^&#123;(\ell)&#125;$
            </Math>
            ”
          </NoBreak>
          {" "} denotes the {" "}
          <NoBreak>
            <Math>
              $\ell$
            </Math>
            -th
          </NoBreak>
          {" "}
          derivative, for all {" "}
          <NoBreak>
            <Math>
              $\ell \in \nn$
            </Math>
            .
          </NoBreak>
          {" "}
          Since each
          derivative is obtained by moving to the next
          particle in the order of rotation, each
          derivative is obtained by adding {" "}
          <Math>
            $+\eta$
          </Math>
          {" "} to the
          input!
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 3 && <>
      <Pause />
      <Section id="section-5">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Parenthetization and powers.
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:393:6
              </span>
            </span>
          </b>
          {" "} 
          It is allowed to write
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;“&#125;\cos x\rt&#123;0.2&#125;\te&#123;”&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:398:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;“&#125;\cos(x)\rt&#123;0.1&#125;\te&#123;”&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            when the input is just one symbol. Also,
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:402:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos^2(x)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (or
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:406:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos^2 x
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ) means
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:410:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (\cos(x))^2,
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            a special case of
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:417:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f^2(x) = (f(x))^2
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for any function {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:421:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $f$
            </Math>
            ,
          </NoBreak>
          {" "}
          itself a special case of
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (fg)(x) = f(x)g(x)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for all functions {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:426:5
            </span>
          </span>
          <Math>
            $f$
          </Math>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $g$
            </Math>
            .
          </NoBreak>
          {" "}
          (The definition of function multiplication!)
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 4 && <>
      <Pause />
      <Section id="section-6">
        <OuterP>
          <b>
            <span class="t-3003-c">
              The pythagorean identity.
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:431:6
              </span>
            </span>
          </b>
          {" "}
          Because
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^2 + y^2 = 1
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is the equation of the unit circle, and
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:438:5
            </span>
          </span>
          {" "}
          {" "}
          points of the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (\cos x, \sin x)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            are points on the unit circle, we have
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:445:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <TextParent>
          <MathBlock>
            $$
            \cos^2 x + \sin^2 x = 1 \tag&#123;*&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
        </TextParent>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for all {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:451:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $x \in \rr$
            </Math>
            ,
          </NoBreak>
          {" "} surprise or not.
          We refer to (*) as the {" "}
          <i>
            pythagorean identity
          </i>
          .
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            Various “tricks” are associated to the
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:454:5
            </span>
          </span>
          {" "}
          {" "}
          pythagorean identity. For example, the
          number
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          1
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is forevermore suspect, because it might
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:462:5
            </span>
          </span>
          {" "}
          {" "}
          just be
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin^2 x + \cos^2 x
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (or for some other variable) in disguise,
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:469:5
            </span>
          </span>
          {" "}
          {" "}
          depending on the situation. Also
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin^2 y
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (variable not important) might be
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:476:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          1 - \cos^2 y
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            just as
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:482:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos^2 y
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            might be
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:488:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          1 - \sin^2 y
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (also
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:494:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          1 - \cos^2 y
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:500:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          1 - \sin^2 y
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            might end up respectively rewritten
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:506:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (1 - \cos y)\cdot (1 + \cos y)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:512:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (1 - \sin y)\cdot (1 + \sin y)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            by the difference-of-squares factorization),
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:518:5
            </span>
          </span>
          {" "}
          {" "}
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin^2 \theta - \cos^2 \theta
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            might be
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:525:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          1 - 2\cos^2 \theta
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            since {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:531:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $\sin^2 \theta = 1 - \cos^2\theta$
            </Math>
            ,
          </NoBreak>
          {" "} or
          might be
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          2\sin^2 \theta - 1
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            since {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:538:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $\cos^2 \theta = 1 - \sin^2\theta$
            </Math>
            ,
          </NoBreak>
          {" "}
          and symmetrically for the opposite difference. Etc.
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 5 && <>
      <Pause />
      <Section id="section-7">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Inputs as radians.
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:542:6
              </span>
            </span>
          </b>
          {" "}
          The
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            radian measure
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:545:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            of an angle {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:547:5
            </span>
          </span>
          {" "}
          {" "}
          is the length of a circular arc subtended
          by the angle, divided by the radius of
          that arc:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/dau_.svg"
          local_url="./images/svg_ch5_ch_radian_definition.svg"
          intrinsicWidth={400}
          intrinsicHeight={180}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            By this definition, the radian measure of an
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:555:5
            </span>
          </span>
          {" "}
          {" "}
          angle coincides with the length of a subtended arc
          of radius {" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/byWA.svg"
          local_url="./images/svg_ch5_ch_radian_definition_radius_1.svg"
          intrinsicWidth={400}
          intrinsicHeight={190}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            In particular, the radian measure
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:562:5
            </span>
          </span>
          {" "}
          {" "}
          of {" "}
          <Math>
            $90^\circ$
          </Math>
          {" "} is {" "}
          <NoBreak>
            <Math>
              $\eta$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/uhJc.svg"
          local_url="./images/svg_ch5_ch_radian_definition_90_degrees_is.svg"
          intrinsicWidth={420}
          intrinsicHeight={250}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            To imprint this fact in our memories:
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:568:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/GrNS.svg"
          local_url="./images/svg_ch5_ch_radian_definition_90_imprint.svg"
          intrinsicWidth={420}
          intrinsicHeight={130}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (We will often leave out the “rad”—in fact,
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:573:5
            </span>
          </span>
          {" "}
          {" "}
          if you don't see a degree symbol {" "}
          <NoBreak>
            “
            <Math>
              $^\circ$
            </Math>
            ”
          </NoBreak>
          {" "}
          next to an angle, that means the angle
          is a radian.) From there, other radian
          measures can be proportionally deduced; for
          example, {" "}
          <Math>
            $45^\circ$
          </Math>
          {" "} is {" "}
          <Math>
            $\eta/2$
          </Math>
          {" "} radians:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/PhlK.svg"
          local_url="./images/svg_ch5_ch_radian_definition_45_imprint.svg"
          intrinsicWidth={420}
          intrinsicHeight={130}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            aaaand... and so on.
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:583:5
            </span>
          </span>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            As a consequence of the definition, a
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:585:5
            </span>
          </span>
          {" "}
          {" "}
          displacement of {" "}
          <Math>
            $x$
          </Math>
          {" "} units on the unit circle
          subtends an angle—or technically: {" "}
          <i>
            rotation
          </i>
          ,
          because there is a “positive” direction—and
          you can also say {" "}
          <i>
            signed angle
          </i>
          {" "} instead of
          {" "}
          <i>
            rotation
          </i>
          , by the way—whose (signed) radian
          measure is {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/KPHA.svg"
          local_url="./images/svg_ch5_ch_x_displacement_and_x_radians.svg"
          intrinsicWidth={430}
          intrinsicHeight={345}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            In particular,
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:596:5
            </span>
          </span>
          {" "}
          {" "}
          instead of positing the definitions of
          sin and cos like this...
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/n-qa.svg"
          local_url="./images/svg_ch5_ch_x_displacement_and_x_radians_displacement_definition.svg"
          intrinsicWidth={420}
          intrinsicHeight={345}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...with the input appearing as a
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:603:5
            </span>
          </span>
          {" "}
          {" "}
          displacement, we can posit the definitions
          like this...
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/kCui.svg"
          local_url="./images/svg_ch_ch_x_displacement_and_x_radians_radian_definition.svg"
          intrinsicWidth={420}
          intrinsicHeight={345}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...with the input appearing as a radian.
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:610:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 1.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              We can conceptualize {" "}
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:613:9
              </span>
            </span>
            <Math>
              $\cos(\eta/2)$
            </Math>
            {" "}
            and {" "}
            <Math>
              $\sin(\eta/2)$
            </Math>
            {" "} like this...
          </OuterP>
          <Pause />
          <Image
            src="/build-img/svgo-svg/tIP3.svg"
            local_url="./images/svg_ch5_ch_etaOver2_example_displacement_version.svg"
            intrinsicWidth={420}
            intrinsicHeight={345}
          />
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              ...with the input {" "}
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:619:9
              </span>
            </span>
            <Math>
              $\eta/2$
            </Math>
            {" "} being a displacement
            along the periphery of the unit circle,
            or like this...
          </OuterP>
          <Pause />
          <Image
            src="/build-img/svgo-svg/jn-F.svg"
            local_url="./images/svg_ch5_ch_etaOver2_example_angle_version.svg"
            intrinsicWidth={420}
            intrinsicHeight={345}
          />
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              ...with the input {" "}
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:626:9
              </span>
            </span>
            <Math>
              $\eta/2$
            </Math>
            {" "} being the radian measure
            of an angle opening counterclockwise from the positive {" "}
            <Math>
              $x$
            </Math>
            {" "} axis.
          </OuterP>
        </Example>
        <Pause />
        <OuterP>
          <i>
            <span class="t-3003-c">
              Note.
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:631:6
              </span>
            </span>
          </i>
          {" "}
          The definition of radians also implies
          that the length of a circular
          arc subtended by an angle is its radian
          measure times the radius:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/8wuf.svg"
          local_url="./images/svg_ch5_ch_radian_definition_consequence.svg"
          intrinsicWidth={400}
          intrinsicHeight={180}
        />
        <Pause />
        <TildeDivider style="margin-top:-1em" />
      </Section>
    </>}
    {visibleRestSections() > 6 && <>
      <Pause />
      <Section id="section-8">
        <OuterP>
          <b>
            <span class="t-3003-c">
              The degree “°” notation.
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:650:6
              </span>
            </span>
          </b>
          {" "}
          We consider the degree notation
          {" "}
          <NoBreak>
            “
            <Math>
              $^\circ$
            </Math>
            ”
          </NoBreak>
          {" "} to be pig lipstick on top of
          radians by defining
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^\circ = x \cdot &#123;\eta\over 90&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for all {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:659:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $x \in \rr$
            </Math>
            ,
          </NoBreak>
          {" "} where the multiplication
          by
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \eta\over 90
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            converts from degrees to radians.
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:666:5
            </span>
          </span>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            For example,
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:668:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          90^\circ = 90 \cdot &#123;\eta\over 90&#125; = \eta
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:674:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          45^\circ = 45 \cdot &#123;\eta\over 90&#125; = \eta/2,
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and so on.
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:680:5
            </span>
          </span>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            Thus, for example,
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:682:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(90^\circ\hlfbk) = \cos \eta
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            not because of anything to do with ‘cos’ or
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:688:5
            </span>
          </span>
          {" "}
          {" "}
          by some sort of convention, etc, but because
          {" "}
          <Math>
            $90^\circ$
          </Math>
          {" "} and {" "}
          <Math>
            $\eta$
          </Math>
          {" "} {" "}
          <i>
            are the same real number
          </i>
          .
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 7 && <>
      <Pause />
      <Section id="section-9">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Sines and cosines of {" "}
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:718:6
              </span>
            </span>
            <NoBreak>
              <Math>
                $\mathbf&#123;30^\circ&#125;$
              </Math>
              ,
            </NoBreak>
            {" "}
            {" "}
            <Math>
              $\mathbf&#123;45^\circ&#125;$
            </Math>
            {" "} and {" "}
            <NoBreak>
              <Math>
                $\mathbf&#123;60^\circ&#125;$
              </Math>
              .
            </NoBreak>
          </b>
          {" "}
          Note that every point of the form
        </OuterP>
        <Pause />
        <TextParent>
          <MathBlock>
            $$
            (\pm\sqrt&#123;x&#125;, \pm\sqrt&#123;1 - x&#125;),\,\,\,0 \leq x \leq 1 \tag&#123;*&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
        </TextParent>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is on the unit circle, because the
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:726:5
            </span>
          </span>
          {" "}
          {" "}
          sum-of-the-squares-of-the-two-coordinates is {" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            .
          </NoBreak>
          {" "}
          (The equation of the unit circle is {" "}
          <NoBreak>
            <Math>
              $x^2 + y^2 = 1$
            </Math>
            .)
          </NoBreak>
          {" "}
          E.g.,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (\sqrt&#123;0.2&#125;, \sqrt&#123;0.8&#125;)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is on the unit circle, as is
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:735:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (\sqrt&#123;0.1&#125;, \sqrt&#123;0.9&#125;)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and so on. (If you're curious, points of this
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:741:5
            </span>
          </span>
          {" "}
          {" "}
          family look like this:)
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/Yhim.svg"
          local_url="./images/svg_ch5_ch_that_family.svg"
          intrinsicWidth={530}
          intrinsicHeight={530}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Vice-versa, every point
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:748:5
            </span>
          </span>
          {" "}
          {" "}
          on the unit circle has the form (*) for some
          {" "}
          <Math>
            $0 \leq x \leq 1$
          </Math>
          {" "} and some choice of the {" "}
          <NoBreak>
            ‘
            <Math>
              $\pm$
            </Math>
            ’
          </NoBreak>
          {" "}
          signs.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            In particular, the unit circle contains the
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:753:5
            </span>
          </span>
          {" "}
          {" "}
          following points:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/BFW6.svg"
          local_url="./images/svg_ch5_ch_main_angles_first.svg"
          intrinsicWidth={720}
          intrinsicHeight={415}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Here
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:759:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (\sqrt&#123;0.5&#125;,\, \sqrt&#123;0.5&#125;\rt&#123;0.2&#125;)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is obviously at {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:765:5
            </span>
          </span>
          <Math>
            $45^\circ\hlfbk$
          </Math>
          {" "} from the {" "}
          <Math>
            $x$
          </Math>
          {" "}
          axis, which implies
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(45^\circ\hlfbk) = \sqrt&#123;0.5&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(45^\circ\hlfbk) = \sqrt&#123;0.5&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            or
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:775:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(\eta/2) = \sqrt&#123;0.5&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(\eta/2) = \sqrt&#123;0.5&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            in radians. Symmetrically,
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:784:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(135^\circ\hlfbk) = -\sqrt&#123;0.5&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(135^\circ\hlfbk) = \sqrt&#123;0.5&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (or
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:793:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(1.5\eta) = -\sqrt&#123;0.5&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(1.5\eta) = \sqrt&#123;0.5&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            in radians) in the second quadrant, and so on.
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:802:5
            </span>
          </span>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            For the remaining values we use these two
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:804:5
            </span>
          </span>
          {" "}
          {" "}
          equilateral triangles:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/uUEG.svg"
          local_url="./images/svg_ch5_ch_main_angles_two_equilateral_triangles.svg"
          intrinsicWidth={520}
          intrinsicHeight={250}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            The first triangle implies that the unique
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:817:5
            </span>
          </span>
          {" "}
          {" "}
          point on the unit circle with {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinate
          </NoBreak>
          {" "}
          {" "}
          <Math>
            $0.5$
          </Math>
          {" "} in the first quadrant is at {" "}
          <Math>
            $60^\circ\hlfbk$
          </Math>
          {" "}
          from the {" "}
          <Math>
            $x$
          </Math>
          {" "} axis, while the second triangle implies that the unique point
          on the unit circle with {" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -coordinate
          </NoBreak>
          {" "} {" "}
          <Math>
            $0.5$
          </Math>
          {" "}
          in the first quadrant is at {" "}
          <Math>
            $30^\circ\hlfbk$
          </Math>
          {" "}
          from the {" "}
          <Math>
            $x$
          </Math>
          {" "} axis; but since
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sqrt&#123;0.25&#125; = 0.5
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (surprise!), the two points must be
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:829:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (\sqrt&#123;0.25&#125;, \,\sqrt&#123;0.75&#125;) = (0.5, \,\sqrt&#123;0.75&#125;)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            at the upper tip of the first triangle, and
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:835:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (\sqrt&#123;0.75&#125;, \,\sqrt&#123;0.25&#125;) = (\sqrt&#123;0.75&#125;, \,0.5)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            at the rightward tip of the second triangle,
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:841:5
            </span>
          </span>
          {" "}
          {" "}
          and we find
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(60^\circ\hlfbk) = 0.5 \,\,(= \sqrt&#123;0.25&#125;),
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(60^\circ\hlfbk) = \sqrt&#123;0.75&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:851:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(30^\circ\hlfbk) = \sqrt&#123;0.75&#125;,
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(30^\circ\hlfbk) = 0.5 \,\,(= \sqrt&#123;0.25&#125;),
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            or
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:860:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(2\eta/3) = 0.5 \,\,(= \sqrt&#123;0.25&#125;),
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(2\eta/3) = \sqrt&#123;0.75&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:869:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(\eta/3) = \sqrt&#123;0.75&#125;,
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(\eta/3) = 0.5 \,\,(= \sqrt&#123;0.25&#125;)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            in radians!
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:878:5
            </span>
          </span>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            (And symmetrically in other quadrants, e.g.,
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:880:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(120^\circ\hlfbk) = -0.5 \,\,(= -\sqrt&#123;0.25&#125;),
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(120^\circ\hlfbk) = \sqrt&#123;0.75&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            a.k.a.,
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:889:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(4\eta/3) = -0.5 \,\,(= -\sqrt&#123;0.25&#125;),
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(4\eta/3) = \sqrt&#123;0.75&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            in radians, etc.)
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:898:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <OuterP>
          <i>
            <span class="t-3003-c">
              Postscript 1.
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:902:6
              </span>
            </span>
          </i>
          {" "} We have
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sqrt&#123;0.5&#125; = &#123;1\over \sqrt&#123;2&#125;&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:908:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sqrt&#123;0.75&#125; = &#123;\sqrt&#123;3&#125;\over 2&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            so the above “wheel of special values” can also be
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:914:5
            </span>
          </span>
          {" "}
          {" "}
          drawn as follows (adding the angles in, as well):
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/Zu5W.svg"
          local_url="./images/svg_ch5_ch_main_angles_second.svg"
          intrinsicWidth={600}
          intrinsicHeight={415}
        />
        <Pause />
        <OuterP>
          <i>
            <span class="t-3003-c">
              Postscript 2.
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:922:6
              </span>
            </span>
          </i>
          {" "}
          Some teachers also like to so-call
          “rationalize the denominator”; they will write
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\sqrt&#123;2&#125;\over 2&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:930:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $\sqrt&#123;0.5&#125; = &#123;1\over \sqrt&#123;2&#125;&#125;$
            </Math>
            .
          </NoBreak>
          {" "} In this case:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/tDhP.svg"
          local_url="./images/svg_ch5_ch_main_angles_third.svg"
          intrinsicWidth={600}
          intrinsicHeight={415}
        />
      </Section>
    </>}
    {visibleRestSections() > 8 && <>
      <Pause />
      <Section id="section-10">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Scaling the circle.
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:937:6
              </span>
            </span>
          </b>
          {" "}
          In the following diagram, the coordinates
          of the point {" "}
          <Math>
            $P$
          </Math>
          {" "} are obviously {" "}
          <NoBreak>
            <Math>
              $(\cos \theta, \sin\theta)$
            </Math>
            ,
          </NoBreak>
          {" "}
          because that is the definition of sin and cos:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/HYoa.svg"
          local_url="./images/svg_ch5_ch_scaling_circle_1.svg"
          intrinsicWidth={400}
          intrinsicHeight={345}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            But say we re-scale the circle to radius {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:945:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $r$
            </Math>
            ,
          </NoBreak>
          {" "} while maintaining the angle {" "}
          <NoBreak>
            <Math>
              $\theta$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/oidH.svg"
          local_url="./images/svg_ch5_ch_scaling_circle_r.svg"
          intrinsicWidth={400}
          intrinsicHeight={345}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...what are the coordinates of {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:950:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $Q$
            </Math>
            ?
          </NoBreak>
          {" "}
          The coordinates are obviously the old coordinates
          scaled up/down by {" "}
          <NoBreak>
            <Math>
              $r$
            </Math>
            ,
          </NoBreak>
          {" "} i.e.,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          Q = (r\cos\theta, r\sin\theta)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            or
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:956:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;aligned&#125;
          Q_x &amp;= r\cdot\cos \theta, \\
          Q_y &amp;= r\cdot\sin \theta \up&#123;1.4&#125;
          \end&#123;aligned&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            where {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:963:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $(Q_x, Q_y) = Q$
            </Math>
            .
          </NoBreak>
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 9 && <>
      <Pause />
      <Section id="section-11">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Right triangles.
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:968:6
              </span>
            </span>
          </b>
          {" "}
          Hopefully, the following figure should seem
          believable-and/or-familiar, at this point
          (it's a scaled-up/down unit circle):
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/xqXh.svg"
          local_url="./images/svg_ch5_ch_triangle_sequence_1.svg"
          intrinsicWidth={400}
          intrinsicHeight={345}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            If {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:976:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $0 \leq \theta \leq \eta$
            </Math>
            ,
          </NoBreak>
          {" "} both
          {" "}
          <Math>
            $r\cos \theta$
          </Math>
          {" "} and {" "}
          <Math>
            $r\sin \theta$
          </Math>
          {" "} are nonnegative,
          and we can redraw the figure as a relationship between
          the sidelengths of a right triangle:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/VAIj.svg"
          local_url="./images/svg_ch5_ch_triangle_sequence_2.svg"
          intrinsicWidth={400}
          intrinsicHeight={230}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            If we rebrand the three legs of the triangle
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:984:5
            </span>
          </span>
          {" "}
          {" "}
          as “hypotenuse”, “opposite”, and “adjacent” according
          to their relationship to the angle {" "}
          <NoBreak>
            <Math>
              $\theta$
            </Math>
            ...
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/j3G_.svg"
          local_url="./images/svg_ch5_ch_triangle_sequence_rebranded.svg"
          intrinsicWidth={400}
          intrinsicHeight={260}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...the relationship can be written:
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:991:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/3N4N.svg"
          local_url="./images/svg_ch5_ch_relationships_of_note.svg"
          intrinsicWidth={470}
          intrinsicHeight={255}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            To be paired with this figure:
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:996:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/Jk8H.svg"
          local_url="./images/svg_ch5_ch_relationships_of_note_triangle_version.svg"
          intrinsicWidth={470}
          intrinsicHeight={415}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            The arrows indicate that {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:1001:5
            </span>
          </span>
          <Math>
            $\cos \theta$
          </Math>
          {" "} is the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            multiplicative factor
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:1003:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            that takes one from “hypotenuse” to “adjacent”,
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:1005:5
            </span>
          </span>
          {" "}
          {" "}
          while {" "}
          <Math>
            $\sin \theta$
          </Math>
          {" "} is (again) the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            multiplicative factor
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:1008:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            that takes one from “hypotenuse” to “opposite”.
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:1010:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <Example id="_84_h.a.i_">
          <OuterP>
            <b>
              Example 2.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              In the following diagram...
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:1015:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <Image
            src="/build-img/svgo-svg/zVzp.svg"
            local_url="./images/svg_ch5_ch_example_multiplications_1.svg"
            intrinsicWidth={400}
            intrinsicHeight={315}
          />
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              ...the length of the side marked ‘?’ is
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:1020:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            10\cdot \cos(43^\circ\hlfbk)\cdot \cos(20^\circ\hlfbk)
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              by following two ‘cos’ arrows (i.e.,
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:1026:9
              </span>
            </span>
            {" "}
            {" "}
            two hypotenuse-to-adjacent arrows) starting
            from the sidelength of {" "}
            <NoBreak>
              <Math>
                $10$
              </Math>
              .
            </NoBreak>
          </OuterP>
        </Example>
        <Pause />
        <Example id="_85_h.a.i_">
          <OuterP>
            <b>
              Example 3.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              In the following diagram...
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:1033:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <Image
            src="/build-img/svgo-svg/WPT7.svg"
            local_url="./images/svg_ch5_ch_example_multiplications_2.svg"
            intrinsicWidth={400}
            intrinsicHeight={315}
          />
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              ...the length of the side marked ‘?’ is
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:1038:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            14\cdot \cos(43^\circ\hlfbk)\cdot \sin(60^\circ\hlfbk)\cdot \sin(50^\circ\hlfbk)
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              by following one ‘cos’ and then two ‘sin’
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:1044:9
              </span>
            </span>
            {" "}
            {" "}
            arrows, starting from the sidelength of {" "}
            <NoBreak>
              <Math>
                $14$
              </Math>
              .
            </NoBreak>
          </OuterP>
        </Example>
      </Section>
    </>}
    {visibleRestSections() > 10 && <>
      <Pause />
      <Section id="section-12">
        <OuterP>
          <b>
            <span class="t-3003-c">
              The missing arrows.
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:1048:6
              </span>
            </span>
          </b>
          {" "}
          ‘sin’ and ‘cos’ give only two of the six ratios
          between the sides
          of a right triangle. The four “missing ratios”
          are hereby drawn:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/sa0S.svg"
          local_url="./images/svg_ch5_ch_missing_arrows_veiled.svg"
          intrinsicWidth={440}
          intrinsicHeight={230}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Each of the six ratios has a named function. We shall
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:1057:5
            </span>
          </span>
          {" "}
          {" "}
          now reveal the names of the four missing
          functions (!!):
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/wra-.svg"
          local_url="./images/svg_ch5_ch_missing_arrows_unveiled.svg"
          intrinsicWidth={440}
          intrinsicHeight={230}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Here
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:1064:5
            </span>
          </span>
          {" "}
          {" "}
          “sec” is short for {" "}
          <i>
            secant
          </i>
          ,
          “tan” is short for {" "}
          <i>
            tangent
          </i>
          ,
          “cot” is short for {" "}
          <i>
            cotangent
          </i>
          , and
          “csc” is short for {" "}
          <i>
            cosecant
          </i>
          .
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            To be clear, multiplying by
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:1070:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sec \theta
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            takes you from ‘adjacent’ to ‘hypotenuse’, multiplying by
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:1076:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \csc \theta
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            takes you from ‘opposite’ to ‘hypotenuse’, multiplying by
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:1082:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \tan \theta
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            takes you from ‘adjacent’ to ‘opposite’,
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:1088:5
            </span>
          </span>
          {" "}
          {" "}
          and multiplying by
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cot \theta
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            takes you from ‘opposite’ to ‘adjacent’. (!)
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:1095:5
            </span>
          </span>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            You may observe that
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:1097:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sec = &#123;1\over \cos&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and that
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:1102:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \csc = &#123;1\over \sin&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            as multiplying by ‘cos’ undoes the work
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:1107:5
            </span>
          </span>
          {" "}
          {" "}
          of multiplying by ‘sec’, and likewise for
          ‘sin’ and ‘csc’; also,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \,\tan = &#123;1\over \cot&#125;,
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \cot = &#123;1\over \tan&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            modulo the fact that {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:1118:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $&#123;1\over \infty&#125; \ne 0$
            </Math>
            .
          </NoBreak>
          {" "}
          (Or, more exactly, 
          modulo
          the fact that what people think of as {" "}
          <NoBreak>
            “
            <Math>
              $\pm\infty$
            </Math>
            ”
          </NoBreak>
          {" "}
          is, in fact, an {" "}
          <i>
            undefined
          </i>
          {" "} value of the function.)
          And
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \tan \,=\, \sec \cdot \sin \,\,=\,\, &#123;\sin\!\!\!\!\phantom&#123;1&#125;\over \cos&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \cot \,=\, \csc \cdot \cos \,\,=\,\, &#123;\cos\!\!\!\!\phantom&#123;1&#125;\over \sin&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            since one way to reach ‘opposite’ from
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:1137:5
            </span>
          </span>
          {" "}
          {" "}
          ‘adjacent’ is to go via ‘hypotenuse’, and
          vice-versa for reaching ‘adjacent’ from
          ‘opposite’.
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 11 && <>
      <Pause />
      <Section
        work="ing"
        id="section-13"
      >
        <OuterP>
          <b>
            <span class="t-3003-c">
              Note on calculators.
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:1144:6
              </span>
            </span>
          </b>
          {" "}
          Your calculator has “degree mode” and
          “radian mode”. If your calculator tells
          you that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(1.57)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is close to {" "}
            <span class="t-3003">
              ./src/content/ch5/ch5.wly:1153:5
            </span>
          </span>
          <Math>
            $1$
          </Math>
          {" "} instead of {" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            ,
          </NoBreak>
          {" "} it means that your
          calculator is in “degree mode”—it has treated
          {" "}
          <Math>
            $1.57$
          </Math>
          {" "} as a number of degrees, instead of
          as a number of radians! (Be sure, in any
          case, that you're in the mode that you want.)
        </OuterP>
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                The shorter exercise sequence.
                <span class="t-3003">
                  ./src/content/ch5/ch5.wly:1161:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} The chapter now has 16 exercises with angles and geometric ratios first (1–3), long division and a circumference approximation next (4–7), then powers of secant (8), function composition and sinusoidal motion (9–12), and discoveries from four graphs (13–16). Keep this finish line visible rather than filling the vacated places with replacement drills.
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:1161:41
              </span>
            </span>
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Keep the long-division sidequest.
                <span class="t-3003">
                  ./src/content/ch5/ch5.wly:1165:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} Exercises 4–6 remain together, followed by the circumference approximation in Exercise 7. That final question brings the arithmetic back to the chapter. The sidequest is deliberate; the other excursions have moved to Trig II for now.
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:1165:44
              </span>
            </span>
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Keep the function-language thread.
                <span class="t-3003">
                  ./src/content/ch5/ch5.wly:1169:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} Exercises 9–10 translate function boxes into composition and lambda notation, then interpret their graphs. Exercise 11 establishes the circular-motion interpretation; Exercise 12 then applies both approaches to parameter dials. Preserve the ambiguity about direction of travel in Exercise 11. Keep any future solution edits concise rather than adding a second lesson on composition.
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:1169:45
              </span>
            </span>
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Preserve discovery before proof.
                <span class="t-3003">
                  ./src/content/ch5/ch5.wly:1173:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} Exercises 13–16 share one set of graphs: match the functions, spot the Pythagorean identity, notice doubled frequency, and find the maximum of sine plus cosine geometrically. Let the graphs suggest that these combinations are sinusoids; reserve the exact identities and their angle-sum proofs for Trig II.
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:1173:43
              </span>
            </span>
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Watch the spiral, without removing the play.
                <span class="t-3003">
                  ./src/content/ch5/ch5.wly:1177:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} The spiral calculation (Exercise 3) comes early, while the reader has energy for its extended geometry. The powers-of-secant question (Exercise 8) follows the long-division sidequest as a playful return to geometric thinking, before the function-box sequence. Keep both initially, but watch the length of the spiral’s solution. Its extended geometry need not establish the expected difficulty of every exercise. The other 14 exercises from the previous sequence are preserved in Trig II for later selection, not deleted.
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:1177:55
              </span>
            </span>
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Watch where the ratios are used.
                <span class="t-3003">
                  ./src/content/ch5/ch5.wly:1181:10
                </span>
              </span>
            </b>
            <span class="t-3003-c">
              {" "} The standalone question asking what ratios η and 4η represent is now excluded. When these quantities appear as ratios, especially in circumference formulas, check that the connection from arc lengths on the unit circle to arc length divided by radius has been sufficiently explained at that point. Do not assume that removing the question also removes the need for that connection.
              <span class="t-3003">
                ./src/content/ch5/ch5.wly:1181:43
              </span>
            </span>
          </p>
        </CodexSuggestion>
      </Section>
    </>}
    {visibleRestSections() > 12 && <>
      <Pause />
      <Exercises
        at_end_of_page={true}
        mode="dual"
        show_curlicue={true}
        id="_102_h.a.i_"
      >
        <Exercise number={1}>
          <ExerciseStatement id="_86_h.a.i_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Which of these angles is {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_0.2_radians_.wly:4:5
                </span>
              </span>
              <Math>
                $0.2$
              </Math>
              {" "} radians?
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/lwHG.svg"
              local_url="./images/svg_ch5_ex_0_2_radians_guess.svg"
              intrinsicWidth={400}
              intrinsicHeight={182}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                An angle is
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_0.2_radians_.wly:11:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0.2
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                radians if the length of the subtended arc is
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_0.2_radians_.wly:15:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              20\%
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                the length of the radius;
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_0.2_radians_.wly:19:9
                </span>
              </span>
              {" "}
              {" "}
              proceeding by elimination—many things are obviously
              not {" "}
              <Math>
                $20\%$
              </Math>
              {" "} of the radius—that's this one:
            </OuterP>
            <Pause />
            <Image
              style="margin-top:1em;margin-bottom:0em;"
              src="/build-img/svgo-svg/TFcy.svg"
              local_url="./images/svg_ch5_ex_0_2_radians_guess_answer.svg"
              intrinsicWidth={400}
              intrinsicHeight={182}
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
                  If you zoom in a little you can see
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_0.2_radians_.wly:30:13
                  </span>
                </span>
                {" "}
                {" "}
                {" "}{" "}
                <NoBreak>
                  “
                  <Math>
                    $100\%$
                  </Math>
                  ”,
                </NoBreak>
                {" "}
                {" "}
                <NoBreak>
                  “
                  <Math>
                    $20\%$
                  </Math>
                  ”
                </NoBreak>
                {" "}
                written in fine print:
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:0em;"
                src="/build-img/svgo-svg/0sAj.svg"
                local_url="./images/svg_ch5_ex_0_2_radians_guess_joke_v1.svg"
                intrinsicWidth={400}
                intrinsicHeight={120}
              />
              <Pause />
              <StarDivider />
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={2}>
          <ExerciseStatement id="_87_h.a.i_">
            <OuterP>
              <b>
                Exercise 2.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                In the drawing below the oval is a circle of
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_handdraw_oval_P_position_.wly:3:5
                </span>
              </span>
              {" "}
              {" "}
              radius {" "}
              <Math>
                $r$
              </Math>
              {" "} and the angle {" "}
              <Math>
                $\phi$
              </Math>
              {" "} is in “standard
              position”, meaning that it opens counterclockwise
              for a positive angle from the direction of the
              positive {" "}
              <Math>
                $x$
              </Math>
              {" "} axis. What are the coordinates
              of {" "}
              <Math>
                $P$
              </Math>
              {" "} in terms of {" "}
              <NoBreak>
                <Math>
                  $r$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $x_0$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $y_0$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $\phi$
                </Math>
                ?
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              style="margin-top:1em;margin-bottom:0.5em;"
              src="/build-img/svgo-svg/PhJT.svg"
              local_url="./images/svg_ch5_ex_P_in_terms_of_ADEphi_v2.svg"
              intrinsicWidth={440}
              intrinsicHeight={250}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_handdraw_oval_P_position_.wly:16:9
                </span>
              </span>
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
                -coordinates
              </NoBreak>
              {" "} are
              respectively
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x_0 + r\cdot \cos(\phi)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_handdraw_oval_P_position_.wly:22:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y_0 + r\cdot \sin(\phi)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                because
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_handdraw_oval_P_position_.wly:26:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              r\cdot\cos(\phi)
              $$
              <ImageRight
                src="/build-img/svgo-svg/8O7n.svg"
                offsetX="6em"
                atLeastAsWide={true}
                local_url="./images/svg_ch5_ex_P_in_terms_of_ADEphi_DeltaX_v2_cloud.svg"
                intrinsicWidth={300}
                intrinsicHeight={250}
              />
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is the difference from the center of the
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_handdraw_oval_P_position_.wly:36:9
                </span>
              </span>
              {" "}
              {" "}
              circle to {" "}
              <Math>
                $P$
              </Math>
              {" "} in {" "}
              <Math>
                $x$
              </Math>
              {" "} and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              r\cdot\sin(\phi)
              $$
              <ImageLeft
                src="/build-img/svgo-svg/_riK.svg"
                offsetX=" 7.75em"
                atLeastAsWide={true}
                local_url="./images/svg_ch5_ex_P_in_terms_of_ADEphi_DeltaY_v2_cloud.svg"
                intrinsicWidth={300}
                intrinsicHeight={250}
              />
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is the difference from the center of the circle to {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_handdraw_oval_P_position_.wly:47:9
                </span>
              </span>
              <Math>
                $P$
              </Math>
              {" "} in {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                ,
              </NoBreak>
              {" "}
              as per scaling a unit circle to radius {" "}
              <NoBreak>
                <Math>
                  $r$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={3}>
          <ExerciseStatement id="_88_h.a.i_">
            <OuterP>
              <b>
                Exercise 3.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Compute {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_triangle_conch_.wly:4:5
                </span>
              </span>
              <Math>
                $A/B$
              </Math>
              {" "} assuming all same-colored
              triangles are similar and
              with the help of a calculator:
            </OuterP>
            <Pause />
            <Image
              width="600px"
              style="margin-top:1em;margin-bottom:1em;"
              src="/build-img/svgo-svg/OeWS.svg"
              local_url="./images/svg_ch5_ex_big_snail.svg"
              intrinsicWidth={740}
              intrinsicHeight={640}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                What we want is the multiplicative ratio that
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_triangle_conch_.wly:15:9
                </span>
              </span>
              {" "}
              {" "}
              would take us from the bottom to the top side of
              this quadrilateral, so that we can multiply by that
              ratio over and over again:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/QIQa.svg"
              local_url="./images/svg_ch5_ex_big_snail_quad.svg"
              intrinsicWidth={400}
              intrinsicHeight={270}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                But the two triangles involved are
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_triangle_conch_.wly:23:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplay>
              <span class="t-3003-c">
                NOT RIGHT TRIANGLES
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_triangle_conch_.wly:25:11
                </span>
              </span>
            </CentralDisplay>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and we must break them into smaller parts that
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_triangle_conch_.wly:27:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <i>
                are
              </i>
              {" "} right triangles in order to use trigonometric
              functions. Specifically, as per this drawing:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/IZD7.svg"
              local_url="./images/svg_ch5_ex_big_snail_quad_four_parts.svg"
              intrinsicWidth={400}
              intrinsicHeight={270}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The multiplicative ratios for the first and third arrows (in arrow-order from bottom
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_triangle_conch_.wly:34:9
                </span>
              </span>
              {" "}
              {" "}
              to top) are
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(68^\circ\hlfbk)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \sin(59^\circ\hlfbk)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                because these are “hypotenuse-to-opposite” arrows,
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_triangle_conch_.wly:44:9
                </span>
              </span>
              {" "}
              {" "}
              while the multiplicative ratios that correspond to the
              second and fourth arrows are
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \csc(71^\circ\hlfbk)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \csc(60^\circ\hlfbk)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                because these are the opposite (no pun intended),
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_triangle_conch_.wly:55:9
                </span>
              </span>
              {" "}
              {" "}
              i.e.,“opposite-to-hypotenuse” arrows. The “big grey
              arrow” ratio from two diagrams ago is obtained by multiplying
              these four small-arrow ratios together, or
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(68^\circ\hlfbk)\times\csc(71^\circ\hlfbk)\times\sin(59^\circ\hlfbk)\times\csc(60^\circ\hlfbk)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (that can also be written
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_triangle_conch_.wly:64:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\sin(68^\circ\hlfbk)\times\sin(59^\circ\hlfbk) \over \sin(71^\circ\hlfbk)\times\sin(60^\circ\hlfbk)&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                because {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_triangle_conch_.wly:70:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\csc = &#123;1\over \sin&#125;$
                </Math>
                )
              </NoBreak>
              {" "} which, numerically, comes out to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0.97057870529467...
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                meaning that the top side of the quadrilateral tile is
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_triangle_conch_.wly:76:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              97\%
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and some the length of the bottom side; taking
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_triangle_conch_.wly:82:9
                </span>
              </span>
              {" "}
              {" "}
              the {" "}
              <NoBreak>
                <Math>
                  $36$
                </Math>
                -th
              </NoBreak>
              {" "} power of {" "}
              <NoBreak>
                <Math>
                  $0.9705\dots$
                </Math>
                ,
              </NoBreak>
              {" "} because {" "}
              <Math>
                $36$
              </Math>
              {" "} is the
              number of times that the quadrilateral
              repeats within the spiral, we find
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0.34127722635785...
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which is the desired ratio {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_triangle_conch_.wly:91:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $A/B$
                </Math>
                ,
              </NoBreak>
              {" "} and which agrees with the
              drawing, as {" "}
              <Math>
                $A$
              </Math>
              {" "} seems plausibly to be about one-third of
              {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "} from the drawing!
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
                  While the final answer can be written
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_triangle_conch_.wly:97:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (\sin(68^\circ\hlfbk)\cdot\csc(71^\circ\hlfbk)\cdot\sin(59^\circ\hlfbk)\cdot\csc(60^\circ\hlfbk))^&#123;36&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  or
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_triangle_conch_.wly:103:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \left(&#123;\sin(68^\circ\hlfbk)\cdot\sin(59^\circ\hlfbk) \over \sin(71^\circ\hlfbk)\cdot\sin(60^\circ\hlfbk)&#125;\right)^&#123;\!36&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  teachers typically want to see such expressions
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_triangle_conch_.wly:109:13
                  </span>
                </span>
                {" "}
                {" "}
                evualuated out, to make sure that you and your
                calculator form a good team. (And, to be fair,
                catching one's own calculator mistakes by virtue
                of spotting a nonsensical number is a skill in
                itself.)
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
                  Instead of counting the number of times that the
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_triangle_conch_.wly:118:13
                  </span>
                </span>
                {" "}
                {" "}
                quadrilateral appears in the double spiral by hand
                one can
                calculate the amount of rotation between one
                quadrilateral and the next, which is this purple angle:
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1em;"
                src="/build-img/svgo-svg/FQro.svg"
                local_url="./images/svg_ch5_ex_big_snail_quad_purple_angle_1.svg"
                intrinsicWidth={400}
                intrinsicHeight={255}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  The key to measuring this
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_triangle_conch_.wly:128:13
                  </span>
                </span>
                {" "}
                {" "}
                angle is the concept of an “alternating angle”,
                whereby {" "}
                <Math>
                  $68^\circ$
                </Math>
                {" "} reappears to the left of {" "}
                <NoBreak>
                  <Math>
                    $71^\circ$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                here:
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1em;"
                src="/build-img/svgo-svg/JRLJ.svg"
                local_url="./images/svg_ch5_ex_big_snail_quad_purple_angle_2.svg"
                intrinsicWidth={400}
                intrinsicHeight={255}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  Then we can calculate the purple angle as
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_triangle_conch_.wly:137:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                68^\circ + 71^\circ + 61^\circ - 180^\circ = 20^\circ
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  meaning that each quadrilateral is rotated by {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_triangle_conch_.wly:143:13
                  </span>
                </span>
                <Math>
                  $20^\circ$
                </Math>
                {" "} from the
                previous, and in one turn of the spiral there are
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;360^\circ\over 20^\circ&#125; = 18
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  quadrilaterals, or
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_triangle_conch_.wly:150:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                2 \times 18 = 36
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  quadrilaterals for two turns!
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_triangle_conch_.wly:156:13
                  </span>
                </span>
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={4}>
          <ExerciseStatement id="_89_h.a.i_">
            <OuterP>
              <b>
                Exercise 4.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Compute
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_long_division_11_over_7_.wly:4:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;11\over 7&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by hand using long division.
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_long_division_11_over_7_.wly:10:5
                </span>
              </span>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Here is the division in American notation
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_long_division_11_over_7_.wly:14:9
                </span>
              </span>
              {" "}
              {" "}
              overlayed on a “Plaza” wallpaper to
              help demarcate the different columns of
              digits (in American notation each column
              of digits is associated to a power of {" "}
              <NoBreak>
                <Math>
                  $10$
                </Math>
                ,
              </NoBreak>
              {" "}
              with both the numerator and the quotient
              [the result] living inside the same set of
              columns, and only the denominator living
              outside, in a time-space porthole of its own):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Mpne.svg"
              local_url="./images/svg_ch5_ex_11_over_7_longhand_eloise.svg"
              intrinsicWidth="456.029"
              intrinsicHeight="706.523"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The division stops when we see the same
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_long_division_11_over_7_.wly:27:9
                </span>
              </span>
              {" "}
              {" "}
              remainder twice—here {" "}
              <NoBreak>
                ‘
                <Math>
                  $40$
                </Math>
                ’
              </NoBreak>
              {" "} reappears, which
              means that the next digit of the quotient
              will be {" "}
              <Math>
                $5$
              </Math>
              {" "} (like the second digit of the
              quotient, that we obtained back when we had
              a remainder of {" "}
              <NoBreak>
                <Math>
                  $40$
                </Math>
                ),
              </NoBreak>
              {" "} the next one {" "}
              <Math>
                $7$
              </Math>
              {" "} (the
              third digit of the quotient), etc—digits will
              repeat and the “final” quotient when we let
              the division unravel infinitely far to the right
              will be
            </OuterP>
            <div style="font-size:1.65em;margin:1em 0;">
              <MathBlock>
                $$
                1.\overline&#123;571428&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </div>
            <OuterP>
              <span class="t-3003-c">
                ...where the decimal point is after the
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_long_division_11_over_7_.wly:45:9
                </span>
              </span>
              {" "}
              {" "}
              first {" "}
              <NoBreak>
                ‘
                <Math>
                  $1$
                </Math>
                ’
              </NoBreak>
              {" "} because the first {" "}
              <NoBreak>
                ‘
                <Math>
                  $1$
                </Math>
                ’
              </NoBreak>
              {" "} is in the
              {" "}
              <NoBreak>
                ‘
                <Math>
                  $10^0$
                </Math>
                ’
              </NoBreak>
              {" "} column.
            </OuterP>
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
                  If you've never done this kind of thing before, the
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_11_over_7_.wly:53:13
                  </span>
                </span>
                {" "}
                {" "}
                division starts in this blank state:
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1.4em;"
                src="/build-img/svgo-svg/Izko.svg"
                local_url="./images/svg_ch5_ex_11_over_7_longhand_eloise_start_1.svg"
                intrinsicWidth="456.029"
                intrinsicHeight={190}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  We take the first digit of the numerator,
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_11_over_7_.wly:60:13
                  </span>
                </span>
                {" "}
                {" "}
                which is {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $1$
                  </Math>
                  ’,
                </NoBreak>
                {" "} ask “how many times does
                {" "}
                <Math>
                  $7$
                </Math>
                {" "} go into {" "}
                <NoBreak>
                  <Math>
                    $1$
                  </Math>
                  ?”,
                </NoBreak>
                {" "} we will write the answer
                here:
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1.5em;"
                src="/build-img/svgo-svg/60IQ.svg"
                local_url="./images/svg_ch5_ex_11_over_7_longhand_eloise_start_2a.svg"
                intrinsicWidth="456.029"
                intrinsicHeight={190}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  The answer is {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_11_over_7_.wly:69:13
                  </span>
                </span>
                <NoBreak>
                  ‘
                  <Math>
                    $0$
                  </Math>
                  ’
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  (
                  <Math>
                    $7$
                  </Math>
                </NoBreak>
                {" "} goes {" "}
                <Math>
                  $0$
                </Math>
                {" "} times into {" "}
                <NoBreak>
                  <Math>
                    $1$
                  </Math>
                  ):
                </NoBreak>
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1.5em;"
                src="/build-img/svgo-svg/51XG.svg"
                local_url="./images/svg_ch5_ex_11_over_7_longhand_eloise_start_2b.svg"
                intrinsicWidth="456.029"
                intrinsicHeight={190}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  We next add a digit from the numerator, giving
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_11_over_7_.wly:75:13
                  </span>
                </span>
                {" "}
                {" "}
                us {" "}
                <NoBreak>
                  <Math>
                    $11$
                  </Math>
                  ,
                </NoBreak>
                {" "} we ask “how many times does {" "}
                <Math>
                  $7$
                </Math>
                {" "} go into
                {" "}
                <NoBreak>
                  <Math>
                    $11$
                  </Math>
                  ?”,
                </NoBreak>
                {" "} we will write the answer here:
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1.5em;"
                src="/build-img/svgo-svg/IIuD.svg"
                local_url="./images/svg_ch5_ex_11_over_7_longhand_eloise_start_3a.svg"
                intrinsicWidth="456.029"
                intrinsicHeight={190}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  The answer is {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_11_over_7_.wly:83:13
                  </span>
                </span>
                <NoBreak>
                  ‘
                  <Math>
                    $1$
                  </Math>
                  ’
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  (
                  <Math>
                    $7$
                  </Math>
                </NoBreak>
                {" "} goes {" "}
                <Math>
                  $1$
                </Math>
                {" "} times into {" "}
                <NoBreak>
                  <Math>
                    $11$
                  </Math>
                  ):
                </NoBreak>
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1.5em;"
                src="/build-img/svgo-svg/0ytO.svg"
                local_url="./images/svg_ch5_ex_11_over_7_longhand_eloise_start_3b.svg"
                intrinsicWidth="456.029"
                intrinsicHeight={190}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  We subtract
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_11_over_7_.wly:89:13
                  </span>
                </span>
              </OuterP>
              <div style="font-size:1.65em;margin:1em 0;">
                <MathBlock>
                  $$
                  1 \times 7
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </div>
              <OuterP>
                <span class="t-3003-c">
                  from {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_11_over_7_.wly:98:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $11$
                  </Math>
                  ,
                </NoBreak>
                {" "} giving us a new remainder
                of {" "}
                <Math>
                  $4$
                </Math>
                {" "} (the very first “remainder” is actually {" "}
                <NoBreak>
                  <Math>
                    $11$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                before anything starts) (before anything started we
                had {" "}
                <NoBreak>
                  <Math>
                    $11 = 7 \times 0 + 11$
                  </Math>
                  ,
                </NoBreak>
                {" "} and now we have
                {" "}
                <NoBreak>
                  <Math>
                    $11 = 7 \times 1 + 4$
                  </Math>
                  ):
                </NoBreak>
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1.5em;"
                src="/build-img/svgo-svg/vfTE.svg"
                local_url="./images/svg_ch5_ex_11_over_7_longhand_eloise_start_4.svg"
                intrinsicWidth="456.029"
                intrinsicHeight={240}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  Because {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_11_over_7_.wly:108:13
                  </span>
                </span>
                <Math>
                  $7$
                </Math>
                {" "} does not fit into {" "}
                <Math>
                  $4$
                </Math>
                {" "} (and if it did,
                we would have done something wrong)
                we “bring down a {" "}
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  ”
                </NoBreak>
                {" "} that is actually part of
                a hidden sequence of {" "}
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  's
                </NoBreak>
                {" "} sitting to the right
                of {" "}
                <NoBreak>
                  <Math>
                    $11$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1.5em;"
                src="/build-img/svgo-svg/cQmJ.svg"
                local_url="./images/svg_ch5_ex_11_over_7_longhand_eloise_start_5.svg"
                intrinsicWidth="456.029"
                intrinsicHeight={240}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  We ask “how many times does {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_11_over_7_.wly:118:13
                  </span>
                </span>
                <Math>
                  $7$
                </Math>
                {" "} go into {" "}
                <NoBreak>
                  <Math>
                    $40$
                  </Math>
                  ?”,
                </NoBreak>
                {" "}
                we will write the answer here:
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1.5em;"
                src="/build-img/svgo-svg/4s2G.svg"
                local_url="./images/svg_ch5_ex_11_over_7_longhand_eloise_start_6a.svg"
                intrinsicWidth="456.029"
                intrinsicHeight={240}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  The answer is {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_11_over_7_.wly:125:13
                  </span>
                </span>
                <NoBreak>
                  ‘
                  <Math>
                    $5$
                  </Math>
                  ’
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  (
                  <Math>
                    $7$
                  </Math>
                </NoBreak>
                {" "} goes {" "}
                <Math>
                  $5$
                </Math>
                {" "} times into {" "}
                <NoBreak>
                  <Math>
                    $40$
                  </Math>
                  ):
                </NoBreak>
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1.5em;"
                src="/build-img/svgo-svg/RSlJ.svg"
                local_url="./images/svg_ch5_ex_11_over_7_longhand_eloise_start_6b.svg"
                intrinsicWidth="456.029"
                intrinsicHeight={240}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  We subtract
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_11_over_7_.wly:131:13
                  </span>
                </span>
              </OuterP>
              <div style="font-size:1.65em;margin:1em 0;">
                <MathBlock>
                  $$
                  5\times 7
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </div>
              <OuterP>
                <span class="t-3003-c">
                  from {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_11_over_7_.wly:140:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $40$
                  </Math>
                  ,
                </NoBreak>
                {" "} giving us a new remainder
                of {" "}
                <Math>
                  $5$
                </Math>
                {" "}
                (well, to be technical, the remainder is actually
                {" "}
                <NoBreak>
                  <Math>
                    $5 \times 10^&#123;-1&#125;$
                  </Math>
                  ,
                </NoBreak>
                {" "} not {" "}
                <NoBreak>
                  <Math>
                    $5$
                  </Math>
                  ,
                </NoBreak>
                {" "} but
                the teacher at the board will often say {" "}
                <NoBreak>
                  “
                  <Math>
                    $5$
                  </Math>
                  ”):
                </NoBreak>
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1.5em;"
                src="/build-img/svgo-svg/Yo2I.svg"
                local_url="./images/svg_ch5_ex_11_over_7_longhand_eloise_start_7.svg"
                intrinsicWidth="456.029"
                intrinsicHeight={320}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  Because {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_11_over_7_.wly:150:13
                  </span>
                </span>
                <Math>
                  $7$
                </Math>
                {" "} does not fit into {" "}
                <NoBreak>
                  <Math>
                    $5$
                  </Math>
                  ,
                </NoBreak>
                {" "} we bring
                another {" "}
                <Math>
                  $0$
                </Math>
                {" "} down from our infinite reserve of
                {" "}
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  's:
                </NoBreak>
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1.5em;"
                src="/build-img/svgo-svg/xkzr.svg"
                local_url="./images/svg_ch5_ex_11_over_7_longhand_eloise_start_8.svg"
                intrinsicWidth="456.029"
                intrinsicHeight={320}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  (Etc.)
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_11_over_7_.wly:158:13
                  </span>
                </span>
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={5}>
          <ExerciseStatement id="_90_h.a.i_">
            <OuterP>
              <b>
                Exercise 5.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Compute
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_long_division_22_over_7_.wly:4:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;22\over 7&#125;, \,\,\,\,\, &#123;33\over 7&#125;, \,\,\,\,\,\rm&#123;and&#125;\,\,\,\,\,&#123;44\over 7&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by hand using long division.
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_long_division_22_over_7_.wly:8:5
                </span>
              </span>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The divisions, continued until remainders repeat, look as follows:
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_long_division_22_over_7_.wly:12:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/CURd.svg"
              local_url="./images/svg_ch5_ex_22_and_33_and_44_over_7_combined_longhands.svg"
              intrinsicWidth="1492.16"
              intrinsicHeight="697.643"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                In each case, the digits of the quotient
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_long_division_22_over_7_.wly:17:9
                </span>
              </span>
              {" "}
              {" "}
              are about to restart from the first digit
              after the decimal point; the answers are therefore:
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                \displaylines&#123;
                \Large \up&#123;1.5&#125;&#123;22\over 7&#125; = 3.\overline&#123;142857&#125;\\
                \Large \up&#123;1.7&#125;&#123;33\over 7&#125; = 4.\overline&#123;714285&#125;\\
                \Large \up&#123;1.7&#125;&#123;44\over 7&#125; = 6.\overline&#123;285714&#125;
                &#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </Boxed>
            <Pause />
            <StarDivider style="margin-top:-1.5em" />
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
                  Because...
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_22_over_7_.wly:50:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \displaylines&#123;
                \Large         \eta  \approx&#123;11\over 7&#125;\\
                \Large \up&#123;1.7&#125;2\eta \approx&#123;22\over 7&#125;\\
                \Large \up&#123;1.7&#125;3\eta \approx&#123;33\over 7&#125;\\
                \Large \up&#123;1.7&#125;4\eta \approx&#123;44\over 7&#125;
                &#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...we thus have...
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_22_over_7_.wly:61:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \displaylines&#123;
                \Large         \eta \approx  1.\overline&#123;571428&#125;\\
                \Large \up&#123;1.7&#125;2\eta \approx 3.\overline&#123;142857&#125;\\
                \Large \up&#123;1.7&#125;3\eta \approx 4.\overline&#123;714285&#125;\\
                \Large \up&#123;1.7&#125;4\eta \approx 6.\overline&#123;285714&#125;&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...though each estimate is only accurate to
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_22_over_7_.wly:71:13
                  </span>
                </span>
                {" "}
                {" "}
                two decimal places, meaning that the last four
                digits of the period are “wasted (in)accuracy”.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={6}>
          <ExerciseStatement id="_91_h.a.i_">
            <OuterP>
              <b>
                Exercise 6.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                To close our division skills: use the
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              table below to compute the integer part and
              the first three digits past the decimal point
              (no rounding based on the fourth digit) of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              15542486476949/777
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by hand, using long division. What is the
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:13:5
                </span>
              </span>
              {" "}
              {" "}
              new (last) remainder when the quotient reaches
              the 3rd digit after the decimal point, and what
              equation is implied from the quotient and the
              new (last) remainder at that point?
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;array&#125;&#123;c|cc&#125;
              \up&#123;1&#125;\dn&#123;0.5&#125; n            &amp;\,1&amp;2&amp;3&amp;4&amp;5&amp;6&amp;7&amp;8&amp;9 \\ \hline
              \up&#123;1&#125;\dn&#123;0.5&#125; n \cdot 777\,&amp;\,777&amp;1554&amp;2331&amp;3108&amp;3885&amp;4662&amp;5439&amp;6216&amp;6993
              \\
              \end&#123;array&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Here is the long division, pursued up to
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:29:9
                </span>
              </span>
              {" "}
              {" "}
              the {" "}
              <NoBreak>
                “
                <Math>
                  $10^&#123;-3&#125;$
                </Math>
                ”
              </NoBreak>
              {" "} column of the quotient,
              including one last remainder computation
              after adding the digit in
              the {" "}
              <NoBreak>
                “
                <Math>
                  $10^&#123;-3&#125;$
                </Math>
                ”
              </NoBreak>
              {" "} column of the quotient (this
              is what the problem statement refers to as
              the “last remainder”):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/yLyJ.svg"
              local_url="./images/svg_ch5_ex_big_division.svg"
              intrinsicWidth="655.542"
              intrinsicHeight="696.25"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Said quotient is
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:40:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              20003200099.033
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                while the new (last) remainder is
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:46:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0.359
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and the equation linking the two is
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:52:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              15542486476949 = 777 \times 20003200099.033 + 0.359
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                per properties of the long division algorithm.
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:58:9
                </span>
              </span>
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
                  Lest anyone get left behind, we can go
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:62:13
                  </span>
                </span>
                {" "}
                {" "}
                over the division “on the board”
                for a bit.
              </OuterP>
              <OuterP class="indent-10">
                <span class="t-3003-c">
                  We start by asking “how many times does {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:66:13
                  </span>
                </span>
                <Math>
                  $777$
                </Math>
                {" "}
                go into {" "}
                <NoBreak>
                  <Math>
                    $1$
                  </Math>
                  ?”,
                </NoBreak>
                {" "} the answer will go here:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/x9Ng.svg"
                local_url="./images/svg_ch5_ex_big_division_inside_1.svg"
                intrinsicWidth="655.542"
                intrinsicHeight={150}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  The answer is {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:72:13
                  </span>
                </span>
                <Math>
                  $0$
                </Math>
                {" "} (that we need not write
                down, but we can), we move to asking
                “how many times does {" "}
                <Math>
                  $777$
                </Math>
                {" "}
                go into {" "}
                <NoBreak>
                  <Math>
                    $15$
                  </Math>
                  ?”,
                </NoBreak>
                {" "} the answer will go here:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/6uMQ.svg"
                local_url="./images/svg_ch5_ex_big_division_inside_2.svg"
                intrinsicWidth="655.542"
                intrinsicHeight={150}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  The answer is {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:80:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  ,
                </NoBreak>
                {" "} we move to asking
                “how many times does {" "}
                <Math>
                  $777$
                </Math>
                {" "}
                go into {" "}
                <NoBreak>
                  <Math>
                    $155$
                  </Math>
                  ?”,
                </NoBreak>
                {" "} the answer will go here:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/D10R.svg"
                local_url="./images/svg_ch5_ex_big_division_inside_3.svg"
                intrinsicWidth="655.542"
                intrinsicHeight={150}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  The answer is {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:87:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  ,
                </NoBreak>
                {" "} we move to asking
                “how many times does {" "}
                <Math>
                  $777$
                </Math>
                {" "}
                go into {" "}
                <NoBreak>
                  <Math>
                    $1554$
                  </Math>
                  ?”,
                </NoBreak>
                {" "} the answer will go here:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/2kAo.svg"
                local_url="./images/svg_ch5_ex_big_division_inside_4.svg"
                intrinsicWidth="655.542"
                intrinsicHeight={150}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  The answer is {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:94:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $2$
                  </Math>
                  ,
                </NoBreak>
                {" "} we subtract {" "}
                <Math>
                  $2 \times 777$
                </Math>
                {" "}
                from {" "}
                <NoBreak>
                  <Math>
                    $1554$
                  </Math>
                  ,
                </NoBreak>
                {" "} giving us a new “prefix” for
                the remainder:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/qwI2.svg"
                local_url="./images/svg_ch5_ex_big_division_inside_4b.svg"
                intrinsicWidth="655.542"
                intrinsicHeight={215}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  (FYI, the remainder now consists of these yellow
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:101:13
                  </span>
                </span>
                {" "}
                {" "}
                digits:)
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/mxCX.svg"
                local_url="./images/svg_ch5_ex_big_division_inside_4remainder.svg"
                intrinsicWidth="655.542"
                intrinsicHeight={220}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  Continuing, we bring down a {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:107:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $2$
                  </Math>
                  ,
                </NoBreak>
                {" "} ask “how many times does {" "}
                <Math>
                  $777$
                </Math>
                {" "}
                go into {" "}
                <NoBreak>
                  <Math>
                    $2$
                  </Math>
                  ?”,
                </NoBreak>
                {" "} the answer will go here:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/SaeW.svg"
                local_url="./images/svg_ch5_ex_big_division_inside_5b_v2.svg"
                intrinsicWidth="655.542"
                intrinsicHeight={215}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  The answer is {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:113:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  ;
                </NoBreak>
                {" "} we bring down a {" "}
                <NoBreak>
                  <Math>
                    $4$
                  </Math>
                  ,
                </NoBreak>
                {" "} ask “how many
                times does {" "}
                <Math>
                  $777$
                </Math>
                {" "} go into {" "}
                <NoBreak>
                  <Math>
                    $24$
                  </Math>
                  ?”,
                </NoBreak>
                {" "} the answer will go
                here:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/sCyt.svg"
                local_url="./images/svg_ch5_ex_big_division_inside_6b_v2.svg"
                intrinsicWidth="655.542"
                intrinsicHeight={215}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  The answer is {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:120:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  ;
                </NoBreak>
                {" "} we bring down an {" "}
                <NoBreak>
                  <Math>
                    $8$
                  </Math>
                  ,
                </NoBreak>
                {" "} ask “how many
                times does {" "}
                <Math>
                  $777$
                </Math>
                {" "} go into {" "}
                <NoBreak>
                  <Math>
                    $248$
                  </Math>
                  ?”,
                </NoBreak>
                {" "} the answer will go
                here:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/QJ-A.svg"
                local_url="./images/svg_ch5_ex_big_division_inside_7b_v2.svg"
                intrinsicWidth="655.542"
                intrinsicHeight={215}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  The answer is {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:127:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  ;
                </NoBreak>
                {" "} we bring down a {" "}
                <NoBreak>
                  <Math>
                    $6$
                  </Math>
                  ,
                </NoBreak>
                {" "} ask “how many
                times does {" "}
                <Math>
                  $777$
                </Math>
                {" "} go into {" "}
                <NoBreak>
                  <Math>
                    $2486$
                  </Math>
                  ?”,
                </NoBreak>
                {" "} the answer will go
                here:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/aGjl.svg"
                local_url="./images/svg_ch5_ex_big_division_inside_8b_v2.svg"
                intrinsicWidth="655.542"
                intrinsicHeight={215}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  The answer is {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:134:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $3$
                  </Math>
                  ,
                </NoBreak>
                {" "} we subtract {" "}
                <Math>
                  $3 \times 777$
                </Math>
                {" "}
                from {" "}
                <NoBreak>
                  <Math>
                    $2648$
                  </Math>
                  ,
                </NoBreak>
                {" "} giving us a new remainder:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/mwDw.svg"
                local_url="./images/svg_ch5_ex_big_division_inside_8c.svg"
                intrinsicWidth="655.542"
                intrinsicHeight={300}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  (And to be specific, the remainder is now formed
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:140:13
                  </span>
                </span>
                {" "}
                {" "}
                by...
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/zsA9.svg"
                local_url="./images/svg_ch5_ex_big_division_inside_8remainder.svg"
                intrinsicWidth="655.542"
                intrinsicHeight={303}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...these yellow digits.) Etc.
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:146:13
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
                  If you need help brushing up on your
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:150:13
                  </span>
                </span>
                {" "}
                {" "}
                long-form subtraction, say your subtraction is this:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/DL_-.svg"
                local_url="./images/svg_ch5_ex_big_division_big_subtraction_a.svg"
                intrinsicWidth={320}
                intrinsicHeight={95}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  You can either treat the top or bottom number as an
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:156:13
                  </span>
                </span>
                {" "}
                {" "}
                odometer, and count how much a car with this
                odometer must be driven back/forth to reach the other
                number.
              </OuterP>
              <OuterP class="indent-10">
                <span class="t-3003-c">
                  Viewing the top number as an odometer, the odometer
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:161:13
                  </span>
                </span>
                {" "}
                {" "}
                would be as follows:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/tkDH.svg"
                local_url="./images/svg_ch5_ex_big_division_odometer_1.svg"
                intrinsicWidth="305.007"
                intrinsicHeight="163.326"
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  Starting from the right end of the subtraction, we ask
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:167:13
                  </span>
                </span>
                {" "}
                {" "}
                “by how much (or how little) does a car need to be
                driven backwards, to turn the {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $2$
                  </Math>
                  ’
                </NoBreak>
                {" "} into an {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $8$
                  </Math>
                  ’?”,
                </NoBreak>
                {" "} we
                will write the answer below:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/eoA2.svg"
                local_url="./images/svg_ch5_ex_big_division_big_subtraction_c.svg"
                intrinsicWidth={320}
                intrinsicHeight={164}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  The answer is: {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:175:13
                  </span>
                </span>
                <Math>
                  $4$
                </Math>
                {" "} [miles
                <b>
                  ] (
                </b>
                say):
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/XKhM.svg"
                local_url="./images/svg_ch5_ex_big_division_big_subtraction_d.svg"
                intrinsicWidth={320}
                intrinsicHeight={164}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  But the odometer will pass
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:180:13
                  </span>
                </span>
                {" "}
                {" "}
                from {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $0$
                  </Math>
                  ’
                </NoBreak>
                {" "} to {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $9$
                  </Math>
                  ’
                </NoBreak>
                {" "} on its way down to {" "}
                <NoBreak>
                  <Math>
                    $8$
                  </Math>
                  ,
                </NoBreak>
                {" "} so we also
                turn the {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $6$
                  </Math>
                  ’
                </NoBreak>
                {" "} into a {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $5$
                  </Math>
                  ’
                </NoBreak>
                {" "} (or “borrow a {" "}
                <NoBreak>
                  <Math>
                    $10$
                  </Math>
                  ”
                </NoBreak>
                {" "} to do
                {" "}
                <NoBreak>
                  <Math>
                    $12 - 8 = 4$
                  </Math>
                  ,
                </NoBreak>
                {" "} as some teachers put it):
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/5nhK.svg"
                local_url="./images/svg_ch5_ex_big_division_big_subtraction_e.svg"
                intrinsicWidth={320}
                intrinsicHeight={164}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  Next we ask “by how many {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:188:13
                  </span>
                </span>
                <NoBreak>
                  [
                  <Math>
                    $10$
                  </Math>
                  s
                </NoBreak>
                {" "} of miles] does the car need
                to be driven back, to turn the {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $5$
                  </Math>
                  ’
                </NoBreak>
                {" "} into a {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $9$
                  </Math>
                  ’?”,
                </NoBreak>
                {" "} we
                will write the answer below:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/_-US.svg"
                local_url="./images/svg_ch5_ex_big_division_big_subtraction_f.svg"
                intrinsicWidth={320}
                intrinsicHeight={164}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  The answer is: {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:195:13
                  </span>
                </span>
                <Math>
                  $6$
                </Math>
                {" "} {" "}
                <NoBreak>
                  [
                  <Math>
                    $10$
                  </Math>
                  s
                </NoBreak>
                {" "} of miles]:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/jj0a.svg"
                local_url="./images/svg_ch5_ex_big_division_big_subtraction_g.svg"
                intrinsicWidth={320}
                intrinsicHeight={164}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  But here too the odometer will pass
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:200:13
                  </span>
                </span>
                {" "}
                {" "}
                from {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $0$
                  </Math>
                  ’
                </NoBreak>
                {" "} to {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $9$
                  </Math>
                  ’
                </NoBreak>
                {" "} as we reduce it, so the wheel to its
                left must be turned back a notch as well; and because that
                wheel is a {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $0$
                  </Math>
                  ’
                </NoBreak>
                {" "} already, the wheel to {" "}
                <i>
                  its
                </i>
                left
                must be turned back a notch; and so on, resulting in a small cascade
                effect:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/qylE.svg"
                local_url="./images/svg_ch5_ex_big_division_big_subtraction_h.svg"
                intrinsicWidth={320}
                intrinsicHeight={164}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  Next we ask “by how many {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:210:13
                  </span>
                </span>
                <NoBreak>
                  [
                  <Math>
                    $100$
                  </Math>
                  s
                </NoBreak>
                {" "} of miles] does the car need
                to be driven back, to turn the {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $9$
                  </Math>
                  ’
                </NoBreak>
                {" "} into a {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $0$
                  </Math>
                  ’?”,
                </NoBreak>
                {" "} we
                will write the answer below:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/anHE.svg"
                local_url="./images/svg_ch5_ex_big_division_big_subtraction_i.svg"
                intrinsicWidth={320}
                intrinsicHeight={164}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  The answer is: {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:217:13
                  </span>
                </span>
                <Math>
                  $9$
                </Math>
                {" "} {" "}
                <NoBreak>
                  [
                  <Math>
                    $100$
                  </Math>
                  s
                </NoBreak>
                {" "} of miles]:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/Tte9.svg"
                local_url="./images/svg_ch5_ex_big_division_big_subtraction_j.svg"
                intrinsicWidth={320}
                intrinsicHeight={164}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  Next we ask “by how many {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:222:13
                  </span>
                </span>
                <NoBreak>
                  [
                  <Math>
                    $1000$
                  </Math>
                  s
                </NoBreak>
                {" "} of miles] does the car need
                to be driven back, to turn the {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $9$
                  </Math>
                  ’
                </NoBreak>
                {" "} into a {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $5$
                  </Math>
                  ’?”:
                </NoBreak>
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/_sJ5.svg"
                local_url="./images/svg_ch5_ex_big_division_big_subtraction_k.svg"
                intrinsicWidth={320}
                intrinsicHeight={175}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  The answer is: {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:228:13
                  </span>
                </span>
                <Math>
                  $4$
                </Math>
                {" "} {" "}
                <NoBreak>
                  [
                  <Math>
                    $1000$
                  </Math>
                  s
                </NoBreak>
                {" "} of miles]:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/jqe5.svg"
                local_url="./images/svg_ch5_ex_big_division_big_subtraction_l.svg"
                intrinsicWidth={320}
                intrinsicHeight={164}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  Etc—we finally obtain:
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:233:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <Image
                style="margin-top:1em;margin-bottom:1em;"
                src="/build-img/svgo-svg/y31C.svg"
                local_url="./images/svg_ch5_ex_big_division_big_subtraction_final.svg"
                intrinsicWidth={320}
                intrinsicHeight={164}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  (And like we alluded to above, one can also
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:239:13
                  </span>
                </span>
                {" "}
                {" "}
                consider the bottom number to be the odometer,
                and “count up” towards the top number, leading
                to a symmetric algorithm, but one method is not
                better than the other.)
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 3.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  Generally,
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:247:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/E79T.svg"
                local_url="./images/svg_ch5_ex_big_division_remainder_equation.svg"
                intrinsicWidth={530}
                intrinsicHeight={120}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  at any point in a long division after the
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_long_division_15542486476949_777_.wly:252:13
                  </span>
                </span>
                {" "}
                {" "}
                remainder is updated to account for a new term
                added to the quotient. That's what the remainder
                is for: to satisfy this equation!
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={7}>
          <ExerciseStatement id="_92_h.a.i_">
            <OuterP>
              <b>
                Exercise 7.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                From the first three steps of the
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              division of {" "}
              <Math>
                $11$
              </Math>
              {" "} by {" "}
              <Math>
                $7$
              </Math>
              {" "} we find {" "}
              <NoBreak>
                <Math>
                  $\eta \approx 1.57$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/bA_Z.svg"
              local_url="./images/svg_ch5_ex_1_57_three_quarters_division.svg"
              intrinsicWidth="290.51501"
              intrinsicHeight="375.13101"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Use this approximation of {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:10:5
                </span>
              </span>
              <Math>
                $\eta$
              </Math>
              {" "} to approximate
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                three-quarters the circumference
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:12:7
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of a circle of radius {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:14:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $100$
                </Math>
                m.
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Since
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:18:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \eta
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is one-quarter the circumference of a circle divided
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:24:9
                </span>
              </span>
              {" "}
              {" "}
              by its radius,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              3\eta
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is three-quarters the circumference of a circle divided
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:31:9
                </span>
              </span>
              {" "}
              {" "}
              by its radius; using {" "}
              <NoBreak>
                <Math>
                  $\eta \approx 1.57$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $3\eta$
              </Math>
              {" "} is approximately
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              3 \times 1.57 = 3\times (1.5 + 0.07) = 3 \times 1.5 + 3\times 0.07
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              =\,\,4.5 + 0.21
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              =\,\,4.71
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                so three-quarters the circumference of a circle of radius {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:44:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $100$
                </Math>
                m
              </NoBreak>
              {" "}
              will be
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \approx 4.71 \times 100\te&#123;m&#125; = 471\te&#123;m&#125;.
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
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
                  The following table gives approximation ratios
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:52:13
                  </span>
                </span>
                {" "}
                {" "}
                going from {" "}
                <Math>
                  $n = 1$
                </Math>
                {" "} to {" "}
                <Math>
                  $n = 4$
                </Math>
                {" "} quarters, similarly
                computed, that one might as well remember:
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \begin&#123;array&#125;&#123;c|c|c&#125;
                \,\,\,\,n\,\,\,\, &amp; n(1.5 + 0.07) &amp; \,\,\,\,\approx n\eta\,\,\,\,\Rule&#123;0pt&#125;&#123;0.8em&#125;&#123;0.5em&#125; \\ \hline
                1 &amp; \up&#123;1.2&#125; 1.5 + 0.07 &amp; 1.57\\
                2 &amp; \up&#123;1.2&#125; 3.0 + 0.14 &amp; 3.14\\
                3 &amp; \up&#123;1.2&#125; 4.5 + 0.21 &amp; 4.71\\
                4 &amp; \up&#123;1.2&#125; 6.0 + 0.28 &amp; 6.28
                \end&#123;array&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
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
                  While
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:73:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large&#123;11\over 7&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  is about half-a-part-in-a-thousand
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:79:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  too large
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:81:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  compared to the true value of {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:83:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $\eta$
                  </Math>
                  ,
                </NoBreak>
                {" "} 
                the approximations above just so turn out to
                be (really nearly quite exactly) half-a-part-in-a-thousand
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  too small
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:87:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  because the long division of {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:89:13
                  </span>
                </span>
                <Math>
                  $11$
                </Math>
                {" "} by
                {" "}
                <Math>
                  $7$
                </Math>
                {" "} is terminated early. But if we pursue the division
                for just one more step, which adds a {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $1$
                  </Math>
                  ’
                </NoBreak>
                {" "} to the
                quotient...
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/qFb7.svg"
                local_url="./images/svg_ch5_ex_1_57_three_quarters_division_one_more.svg"
                intrinsicWidth="316.51501"
                intrinsicHeight={460}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...we obtain the modified approximation...
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:97:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \eta \approx 1.571
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...that is, for its part, an {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:103:13
                  </span>
                </span>
                <i>
                  overestimate
                </i>
                {" "} of {" "}
                <NoBreak>
                  <Math>
                    $\eta$
                  </Math>
                  .
                </NoBreak>
                {" "}
                (Whereas
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                1.57
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  is still an {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:104:30
                  </span>
                </span>
                <i>
                  underestimate
                </i>
                .) From there,
                any further digits that are added to the quotient only
                worsen the approximation, since we are already overshooting!
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 3.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  In fact, the true value of {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:110:13
                  </span>
                </span>
                <Math>
                  $\eta$
                </Math>
                {" "} is roughly half-way
                between
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                1.57
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  and
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:117:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;11\over 7&#125; = 1.571428\dots
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  being
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:123:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \,\eta = 1.570796\dots
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  per the calculator. (That knows this value by heart.)
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:129:13
                  </span>
                </span>
                {" "}
                {" "}
                Taking into account that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                1.570796
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  is {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:136:13
                  </span>
                </span>
                <i>
                  basically
                </i>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                1.5708
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  gives us the following improved approximations of
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:142:13
                  </span>
                </span>
                {" "}
                {" "}
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $\eta$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $2\eta$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $3\eta$
                  </Math>
                  ,
                </NoBreak>
                {" "} and {" "}
                <NoBreak>
                  <Math>
                    $4\eta$
                  </Math>
                  ,
                </NoBreak>
                {" "} based on adding
                multiples of {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $08$
                  </Math>
                  ’
                </NoBreak>
                {" "} to the tail end of our previous
                approximations:
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \begin&#123;array&#125;&#123;c|c|c&#125;
                \,\,\,\,n\,\,\,\, &amp; n(1.5 + 0.07 + 0.0008) &amp; \,\,\,\,\approx n\eta\,\,\,\,\Rule&#123;0pt&#125;&#123;0.8em&#125;&#123;0.5em&#125; \\ \hline
                1 &amp; \up&#123;1.2&#125; 1.5 + 0.07 + 0.0008 &amp; 1.5708\\
                2 &amp; \up&#123;1.2&#125; 3.0 + 0.14 + 0.0016 &amp; 3.1416\\
                3 &amp; \up&#123;1.2&#125; 4.5 + 0.21 + 0.0024 &amp; 4.7124\\
                4 &amp; \up&#123;1.2&#125; 6.0 + 0.28 + 0.0032 &amp; 6.2832
                \end&#123;array&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...with these approximations being good to {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_three_quarters_decimal_approximation_.wly:157:13
                  </span>
                </span>
                <i>
                  three
                  parts in a million
                </i>
                . (Improved, namely, from {" "}
                <i>
                  half a
                  part in a thousand
                </i>
                .)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={8}>
          <ExerciseStatement id="_93_h.a.i_">
            <OuterP>
              <b>
                Exercise 8.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                If aliens descended on Earth, captured everyone,
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_powers_of_secant_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              took you aside and told you that the fate of
              humanity rested on your ability to “illustrate
              powers of secant”, without further instructions,
              what would you do?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Presumably the aliens are asking
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_powers_of_secant_.wly:12:9
                </span>
              </span>
              {" "}
              {" "}
              for an illustration of the sequence
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              1, \sec \theta, \,\sec^2(\theta), \,\sec^3(\theta), \,\sec^4(\theta), \dots
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for some fixed {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_powers_of_secant_.wly:19:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ,
              </NoBreak>
              {" "} based on a geometric
              interpretation of {" "}
              <NoBreak>
                <Math>
                  $\sec$
                </Math>
                ,
              </NoBreak>
              {" "} where we start the sequence
              at {" "}
              <NoBreak>
                <Math>
                  $\sec^0(\theta) = 1$
                </Math>
                .
              </NoBreak>
              {" "} Here is a possibility:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/uqSS.svg"
              local_url="./images/e5_sec_powers_bounce.svg"
              intrinsicWidth={430}
              intrinsicHeight={333}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Starting with a length of {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_powers_of_secant_.wly:26:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} bottom left,
              successive multiplications by {" "}
              <Math>
                $\sec \theta$
              </Math>
              {" "}
              are performed by “dropping a height up” onto
              the opposite side of the angle {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ,
              </NoBreak>
              {" "}
              bouncing back and forth between the two sides.
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                If we are willing to reproduce the angle
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_powers_of_secant_.wly:32:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <Math>
                $\theta$
              </Math>
              {" "} several times over,
              another possibility is to draw a “snail stack”
              of right triangles sharing a common vertex:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/2Pqq.svg"
              local_url="./images/e5_sec_powers_snail.svg"
              intrinsicWidth={430}
              intrinsicHeight={220}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Or if we move the angle {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_powers_of_secant_.wly:40:9
                </span>
              </span>
              <Math>
                $\theta$
              </Math>
              {" "} around from
              one end of the previously obtained segment to
              another, another somewhat exotic possibility is
              this one:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/H7R8.svg"
              local_url="./images/e5_sec_powers_inverted_towers.svg"
              intrinsicWidth={330}
              intrinsicHeight={335}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Though in fact, this tower is already embedded
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_powers_of_secant_.wly:48:9
                </span>
              </span>
              {" "}
              {" "}
              as a subdiagram of our first illustration (modulo
              scale and orientation) (!):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Xdq7.svg"
              local_url="./images/e5_sec_powers_bounce_cameo.svg"
              intrinsicWidth={430}
              intrinsicHeight={333}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                In each of these diagrams, in fact,
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_powers_of_secant_.wly:55:9
                </span>
              </span>
              {" "}
              {" "}
              successive “similar” lengths are a factor {" "}
              <Math>
                $\sec(\theta)$
              </Math>
              {" "}
              from one another—giving rise to many possibilities
              of labeling a single diagram. For example, in the
              original diagram, the blue lengths below also
              form a geometric sequence
              of ratio {" "}
              <Math>
                $\sec(\theta)$
              </Math>
              {" "} [below left], leading to an
              alternate labeling of the tower [below middle],
              or the snail stack could be labeled from the
              outside [below right]:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/ICZK.svg"
              local_url="./images/e5_sec_powers_bounce_triptic.svg"
              intrinsicWidth={1210}
              intrinsicHeight={333}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Two slight variants on another diagram (for
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_powers_of_secant_.wly:69:9
                </span>
              </span>
              {" "}
              {" "}
              which more labelings are also possible):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/CvsG.svg"
              local_url="./images/e5_sec_powers_circles_two_labelings.svg"
              intrinsicWidth={855}
              intrinsicHeight={362}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and other more-or-less logical diagrams
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_powers_of_secant_.wly:75:9
                </span>
              </span>
              {" "}
              {" "}
              are possible,
              but this seems to content the aliens!
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
                  One way to formally verify that...
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_powers_of_secant_.wly:110:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/ci-a.svg"
                local_url="./images/e5_sec_powers_bounce_ratio_explanation_fraction.svg"
                intrinsicWidth={130}
                intrinsicHeight={80}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...in this diagram...
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_powers_of_secant_.wly:115:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/UspN.svg"
                local_url="./images/e5_sec_powers_bounce_ratio_explanation.svg"
                intrinsicWidth={430}
                intrinsicHeight={333}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...is to note that...
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_powers_of_secant_.wly:120:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/VLwm.svg"
                local_url="./images/e5_sec_powers_bounce_ratio_explanation_fraction_2.svg"
                intrinsicWidth={590}
                intrinsicHeight={80}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...by direct measure and simplifying the fraction—always
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_powers_of_secant_.wly:130:13
                  </span>
                </span>
                {" "}
                {" "}
                nice to see a bit of algebra!
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={9}>
          <ExerciseStatement id="_94_h.a.i_">
            <OuterP>
              <b>
                Exercise 9.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Below are four function compositions
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_four_compositions_expressed_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              depicted as “function box” diagrams, with
              inputs coming in the right and outputs
              going out the left (with {" "}
              <Math>
                $f$
              </Math>
              {" "} being some generic
              function):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/hzK8.svg"
              local_url="./images/svg_ch5_ex_four_compositions.svg"
              intrinsicWidth={460}
              intrinsicHeight={420}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Rewrite each case:
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_four_compositions_expressed_.wly:13:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <List
              marker="lower-alpha-paren"
              markerFontFamily="Baskerville Bold"
              style="gap:0.2em;padding-left:2em;"
            >
              <Item>
                <p>
                  <span class="t-3003-c">
                    using the composition {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_four_compositions_expressed_.wly:20:9
                    </span>
                  </span>
                  <NoBreak>
                    <span class="t-3003-c">
                      “
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_four_compositions_expressed_.wly:20:9
                      </span>
                    </span>
                    <Math>
                      $\circ$
                    </Math>
                    <span class="t-3003-c">
                      ”
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_four_compositions_expressed_.wly:20:39
                      </span>
                    </span>
                  </NoBreak>
                  <span class="t-3003-c">
                    {" "} operator;
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_four_compositions_expressed_.wly:20:39
                    </span>
                  </span>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    as an expression of the form
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_four_compositions_expressed_.wly:22:9
                    </span>
                  </span>
                </p>
                <Pause />
                <MathBlock>
                  $$
                  x \ra \dots
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
                <Pause />
                <p>
                  <span class="t-3003-c">
                    for some value of {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_four_compositions_expressed_.wly:23:9
                    </span>
                  </span>
                  <NoBreak>
                    <span class="t-3003-c">
                      “
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_four_compositions_expressed_.wly:23:9
                      </span>
                    </span>
                    <Math>
                      $\dots$
                    </Math>
                    <span class="t-3003-c">
                      ”.
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_four_compositions_expressed_.wly:23:35
                      </span>
                    </span>
                  </NoBreak>
                </p>
              </Item>
            </List>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <b>
                <span class="t-3003-c">
                  (a)
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_four_compositions_expressed_.wly:27:10
                  </span>
                </span>
              </b>
              {" "}
              The expressions are respectively...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f  \circ (u \ra u + A)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              f  \circ (z \ra Bz)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              (u \ra u + A)\circ f
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              (z \ra Bz)\circ f
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...but where the dummy variables don't matter,
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_four_compositions_expressed_.wly:41:9
                </span>
              </span>
              {" "}
              {" "}
              so we might as well write...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f  \circ (t \ra t + A)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              f  \circ (t \ra Bt)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              (t \ra t + A)\circ f
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              (t \ra Bt)\circ f
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...or...
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_four_compositions_expressed_.wly:55:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f  \circ (x \ra x + A)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              f  \circ (x \ra Bx)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              (x \ra x + A)\circ f
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              (x \ra Bx)\circ f
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...etc. (All are correct.)
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_four_compositions_expressed_.wly:68:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <OuterP>
              <b>
                <span class="t-3003-c">
                  (b)
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_four_compositions_expressed_.wly:72:10
                  </span>
                </span>
              </b>
              {" "}
              The expressions are respectively:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra f(x + A)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              x \ra f(Bx)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              x \ra f(x) + A
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              x \ra Bf(x)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...where we use {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_four_compositions_expressed_.wly:86:9
                </span>
              </span>
              <NoBreak>
                “
                <Math>
                  $x$
                </Math>
                ”
              </NoBreak>
              {" "} as the dummy variable
              because we were {" "}
              <i>
                told
              </i>
              {" "} to use {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                .
              </NoBreak>
              {" "} (By the statement.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={10}>
          <ExerciseStatement id="_95_h.a.i_">
            <OuterP>
              <b>
                Exercise 10.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                How would the graphs of the four compositions
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_four_compositions_graphed_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              in {" "}
              <InChapterLink
                href="#_94_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 9
              </InChapterLink>
              {" "} 
              compare to the graph of the generic function {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                For reference, the four functions are:
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_four_compositions_graphed_.wly:10:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \te&#123;1.&#125;\,\, x \ra f(x + A)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \te&#123;2.&#125;\,\, x \ra f(Bx)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \te&#123;3.&#125;\,\, x \ra f(x) + A
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \te&#123;4.&#125;\,\, x \ra Bf(x)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                For which the graphs are respectively obtained by:
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_four_compositions_graphed_.wly:23:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <List
              marker="decimal"
              style="padding-left:2em;"
            >
              <Item>
                <p>
                  <span class="t-3003-c">
                    horizontally translating the graph of {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_four_compositions_graphed_.wly:29:13
                    </span>
                  </span>
                  <Math>
                    $f$
                  </Math>
                  <span class="t-3003-c">
                    {" "} by {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_four_compositions_graphed_.wly:29:54
                    </span>
                  </span>
                  <Math>
                    $A$
                  </Math>
                  <span class="t-3003-c">
                    {" "} units to the left;
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_four_compositions_graphed_.wly:29:61
                    </span>
                  </span>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    horizontally compressing the graph of {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_four_compositions_graphed_.wly:31:13
                    </span>
                  </span>
                  <Math>
                    $f$
                  </Math>
                  <span class="t-3003-c">
                    {" "} by a factor {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_four_compositions_graphed_.wly:31:54
                    </span>
                  </span>
                  <NoBreak>
                    <Math>
                      $B$
                    </Math>
                    <span class="t-3003-c">
                      ;
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_four_compositions_graphed_.wly:31:70
                      </span>
                    </span>
                  </NoBreak>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    vertically translating the graph of {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_four_compositions_graphed_.wly:33:13
                    </span>
                  </span>
                  <Math>
                    $f$
                  </Math>
                  <span class="t-3003-c">
                    {" "} by {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_four_compositions_graphed_.wly:33:52
                    </span>
                  </span>
                  <Math>
                    $A$
                  </Math>
                  <span class="t-3003-c">
                    {" "} units upward;
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_four_compositions_graphed_.wly:33:59
                    </span>
                  </span>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    vertically dilating (scaling) the graph of {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_four_compositions_graphed_.wly:35:13
                    </span>
                  </span>
                  <Math>
                    $f$
                  </Math>
                  <span class="t-3003-c">
                    {" "} by a factor {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_four_compositions_graphed_.wly:35:59
                    </span>
                  </span>
                  <NoBreak>
                    <Math>
                      $B$
                    </Math>
                    <span class="t-3003-c">
                      .
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_four_compositions_graphed_.wly:35:75
                      </span>
                    </span>
                  </NoBreak>
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (Cf. {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_four_compositions_graphed_.wly:37:9
                </span>
              </span>
              <OutChapterLink
                href="/article/chapter3#_41_h.a.i_"
                class="out-chapter-link"
              >
                Exercise 7 of Chapter 3
              </OutChapterLink>
              , 
              {" "}
              <OutChapterLink
                href="/article/chapter3#_49_h.a.i_"
                class="out-chapter-link"
              >
                Exercise 14 of Chapter 3
              </OutChapterLink>
              .)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={11}>
          <ExerciseStatement id="_96_h.a.i_">
            <OuterP>
              <b>
                Exercise 11.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                If a particle in {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:4:5
                </span>
              </span>
              <Math>
                $\rr^2$
              </Math>
              {" "} (= “in the plane”)
              has {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A\cdot\cos(Bt + C) + D
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                at time {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:9:5
                </span>
              </span>
              <Math>
                $t$
              </Math>
              {" "} what is the most likely motion
              that the particle is undergoing? In that
              case, what is the geometric meaning of the
              constants {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $C$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $D$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The simplest motion that would produce such
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:16:9
                </span>
              </span>
              {" "}
              {" "}
              an {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} (according to subjective human
              standards of simplicity, admittedly) is circular
              motion at uniform speed. In this case:
            </OuterP>
            <Pause />
            <List style="padding-left:2em;gap:0.2em;">
              <Item>
                <p>
                  <Math>
                    $A$
                  </Math>
                  <span class="t-3003-c">
                    {" "} is the radius of the circle
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:24:16
                    </span>
                  </span>
                </p>
              </Item>
              <Item>
                <p>
                  <Math>
                    $D$
                  </Math>
                  <span class="t-3003-c">
                    {" "} is the {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:26:16
                    </span>
                  </span>
                  <NoBreak>
                    <Math>
                      $x$
                    </Math>
                    <span class="t-3003-c">
                      -coordinate
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:26:27
                      </span>
                    </span>
                  </NoBreak>
                  <span class="t-3003-c">
                    {" "} of the circle's center
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:26:27
                    </span>
                  </span>
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                And either:
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:28:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <List style="padding-left:2em;">
              <Item>
                <p>
                  <Math>
                    $B$
                  </Math>
                  <span class="t-3003-c">
                    {" "} is the counterclockwise
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:33:16
                    </span>
                  </span>
                  {" "}
                  {" "}
                  {" "}{" "}
                  <i>
                    <span class="t-3003-c">
                      angular speed
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:34:14
                      </span>
                    </span>
                  </i>
                  <span class="t-3003-c">
                    /
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:34:28
                    </span>
                  </span>
                  <i>
                    <span class="t-3003-c">
                      angular frequency
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:34:30
                      </span>
                    </span>
                  </i>
                  <span class="t-3003-c">
                    {" "} (radians per
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:34:48
                    </span>
                  </span>
                  {" "}
                  {" "}
                  unit time) and {" "}
                  <Math>
                    $C$
                  </Math>
                  <span class="t-3003-c">
                    {" "} is the counterclockwise
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:35:31
                    </span>
                  </span>
                  {" "}
                  {" "}
                  starting angle {" "}
                  <NoBreak>
                    <span class="t-3003-c">
                      (
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:36:13
                      </span>
                    </span>
                    <Math>
                      $t = 0$
                    </Math>
                    <span class="t-3003-c">
                      )
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:36:36
                      </span>
                    </span>
                  </NoBreak>
                  <span class="t-3003-c">
                    {" "} of the particle, as
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:36:36
                    </span>
                  </span>
                  {" "}
                  {" "}
                  measured from a translate of the positive {" "}
                  <Math>
                    $x$
                  </Math>
                  {" "}{" "}
                  {" "}
                  {" "}
                  <span class="t-3003-c">
                    axis going through the center of the circle
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:38:13
                    </span>
                  </span>
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Or:
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:40:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <List style="padding-left:2em;">
              <Item>
                <p>
                  <Math>
                    $B$
                  </Math>
                  <span class="t-3003-c">
                    {" "} is the {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:45:16
                    </span>
                  </span>
                  <i>
                    <span class="t-3003-c">
                      clockwise
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:45:25
                      </span>
                    </span>
                  </i>
                  {" "}{" "}
                  {" "}
                  {" "}
                  <span class="t-3003-c">
                    angular speed/angular frequency of the particle
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:46:13
                    </span>
                  </span>
                  {" "}
                  {" "}
                  and {" "}
                  <Math>
                    $C$
                  </Math>
                  <span class="t-3003-c">
                    {" "} is the {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:47:20
                    </span>
                  </span>
                  <i>
                    <span class="t-3003-c">
                      clockwise
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:47:29
                      </span>
                    </span>
                  </i>
                  <span class="t-3003-c">
                    {" "} starting angle
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:47:39
                    </span>
                  </span>
                  {" "}
                  {" "}
                  of the particle, as measured from a translate of
                  the positive {" "}
                  <Math>
                    $x$
                  </Math>
                  <span class="t-3003-c">
                    {" "} axis going through the center
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:49:29
                    </span>
                  </span>
                  {" "}
                  {" "}
                  of the circle
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                In more detail, every time
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:52:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              t
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                increases by {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:58:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              Bt + C
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                increases by {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:64:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "} but
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              Bt + C
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is an amount of radians, because anything
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:70:9
                </span>
              </span>
              {" "}
              {" "}
              fed to ‘cos’ is an amount of radians; and so
              {" "}
              <Math>
                $B$
              </Math>
              {" "} ends up being the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                radian increase per unit time,
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:74:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                or angular speed, of the particle.
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:76:9
                </span>
              </span>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                However, said “increase” in radians can be
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:78:9
                </span>
              </span>
              {" "}
              {" "}
              associated to either clockwise or a
              counterclockwise motion, there is no telling.
              (Quite aside from the fact that {" "}
              <Math>
                $B$
              </Math>
              {" "} might be
              negative.) Indeed, while we have a tendency to
              think of {" "}
              <Math>
                $\cos(x)$
              </Math>
              {" "} as
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                the {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:85:11
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x$
                </Math>
                <span class="t-3003-c">
                  -coordinate
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:85:18
                  </span>
                </span>
              </NoBreak>
              <span class="t-3003-c">
                {" "} of a point {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:85:18
                </span>
              </span>
              <Math>
                $x$
              </Math>
              <span class="t-3003-c">
                {" "} units
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:85:44
                </span>
              </span>
              <br />
              <span class="t-3003-c">
                counterclockwise from {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:87:9
                </span>
              </span>
              <Math>
                $(1, 0)$
              </Math>
              <span class="t-3003-c">
                {" "} on the unit circle
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:87:39
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <Math>
                $\cos(x)$
              </Math>
              <span class="t-3003-c">
                {" "} is also
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:89:18
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                the {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:91:11
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x$
                </Math>
                <span class="t-3003-c">
                  -coordinate
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:91:18
                  </span>
                </span>
              </NoBreak>
              <span class="t-3003-c">
                {" "} of a point {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:91:18
                </span>
              </span>
              <Math>
                $x$
              </Math>
              <span class="t-3003-c">
                {" "} units
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:91:44
                </span>
              </span>
              <br />
              <span class="t-3003-c">
                clockwise from {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:93:9
                </span>
              </span>
              <Math>
                $(1, 0)$
              </Math>
              <span class="t-3003-c">
                {" "} on the unit circle
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:93:32
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                [“counterclockwise” {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:95:9
                </span>
              </span>
              <Math>
                $\ra$
              </Math>
              {" "} “clockwise”].
              Per the one interpretation of ‘cos’,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              Bt + C
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is an amount of counterclockwise radians; per
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:102:9
                </span>
              </span>
              {" "}
              {" "}
              the other,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              Bt + C
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is an amount of {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:109:9
                </span>
              </span>
              <i>
                clockwise
              </i>
              {" "} radians. 
              This accounts for
              the two solutions listed above. (But it can
              only be one of those two solutions, having made
              the “Occam's razor” assumption that the
              particle is traveling at uniform speed around
              a circle.) (Nb: In particular, “uniform speed”
              precludes sudden reversals of direction at either
              end of the circle, if you were at all thinking
              of that, for speed would be undefined at
              those points where direction is reversed!)
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
                  This diagram illustrates the two possibilities:
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:123:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/rUnE.svg"
                local_url="./images/svg_ch5_ex_Bt_plus_C_OccamsRazor_combined_clockwise_version.svg"
                intrinsicWidth={760}
                intrinsicHeight={590}
              />
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
                  If you harbor any doubts about there being no more
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:138:13
                  </span>
                </span>
                {" "}
                {" "}
                than two solutions, picture this diagram...
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/0eyH.svg"
                local_url="./images/svg_ch5_ex_Bt_plus_C_black_on_white.svg"
                intrinsicWidth={190}
                intrinsicHeight={190}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...and imagine the vertical line scanning
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_circular_motion_from_x_coordinate_.wly:144:13
                  </span>
                </span>
                {" "}
                {" "}
                to the left and to the right again as it
                tracks the {" "}
                <NoBreak>
                  <Math>
                    $x$
                  </Math>
                  -coordinate
                </NoBreak>
                {" "} of a particle going
                around the circle, unseen. Then there is one
                clockwise particle that tracks with the line,
                and one counterclockwise particle that tracks
                with the line, but no more, insofar as
                non-direction-reversing particles are
                concerned!
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={12}>
          <ExerciseStatement id="_97_h.a.i_">
            <OuterP>
              <b>
                Exercise 12.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Let
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:4:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f(x) = A\cos(Bx + C) + D
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and imagine that each of the constants
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:10:5
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $C$
              </Math>
              {" "} and {" "}
              <Math>
                $D$
              </Math>
              {" "} is connected to a dial,
              and we originally set {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $C$
              </Math>
              {" "} and {" "}
              <Math>
                $D$
              </Math>
              {" "}
              to {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $0$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "} respectively.
              Then, in the following order, we...
            </OuterP>
            <Pause />
            <List
              marker="decimal"
              style="padding-left:20%;"
            >
              <Item>
                <p>
                  <span class="t-3003-c">
                    ...increase {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:20:9
                    </span>
                  </span>
                  <Math>
                    $C$
                  </Math>
                  <span class="t-3003-c">
                    {" "} from {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:20:24
                    </span>
                  </span>
                  <Math>
                    $0$
                  </Math>
                  <span class="t-3003-c">
                    {" "} to {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:20:33
                    </span>
                  </span>
                  <NoBreak>
                    <Math>
                      $1&#123;&#125;.33$
                    </Math>
                    <span class="t-3003-c">
                      ;
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:20:45
                      </span>
                    </span>
                  </NoBreak>
                  <span class="t-3003-c">
                    {" "} and
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:20:45
                    </span>
                  </span>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    ...increase {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:22:9
                    </span>
                  </span>
                  <Math>
                    $B$
                  </Math>
                  <span class="t-3003-c">
                    {" "} from {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:22:24
                    </span>
                  </span>
                  <Math>
                    $1$
                  </Math>
                  <span class="t-3003-c">
                    {" "} to {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:22:33
                    </span>
                  </span>
                  <NoBreak>
                    <Math>
                      $2.33$
                    </Math>
                    <span class="t-3003-c">
                      ;
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:22:43
                      </span>
                    </span>
                  </NoBreak>
                  <span class="t-3003-c">
                    {" "} and
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:22:43
                    </span>
                  </span>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    ...increase {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:24:9
                    </span>
                  </span>
                  <Math>
                    $A$
                  </Math>
                  <span class="t-3003-c">
                    {" "} from {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:24:24
                    </span>
                  </span>
                  <Math>
                    $1$
                  </Math>
                  <span class="t-3003-c">
                    {" "} to {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:24:33
                    </span>
                  </span>
                  <NoBreak>
                    <Math>
                      $3.33$
                    </Math>
                    <span class="t-3003-c">
                      ;
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:24:43
                      </span>
                    </span>
                  </NoBreak>
                  <span class="t-3003-c">
                    {" "} and
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:24:43
                    </span>
                  </span>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    ...increase {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:26:9
                    </span>
                  </span>
                  <Math>
                    $D$
                  </Math>
                  <span class="t-3003-c">
                    {" "} from {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:26:24
                    </span>
                  </span>
                  <Math>
                    $0$
                  </Math>
                  <span class="t-3003-c">
                    {" "} to {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:26:33
                    </span>
                  </span>
                  <NoBreak>
                    <Math>
                      $4.33$
                    </Math>
                    <span class="t-3003-c">
                      .
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:26:43
                      </span>
                    </span>
                  </NoBreak>
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                How does the graph of {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:28:5
                </span>
              </span>
              <Math>
                $f$
              </Math>
              {" "} react to each
              of these changes, as they occur in sequence?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Solution 1.
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:43:10
                  </span>
                </span>
              </i>
              {" "} Reasoning by the analogy of
              a particle going around a circle at uniform
              speed (cf. {" "}
              <InChapterLink
                href="#_96_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 11
              </InChapterLink>
              &#8288;):
            </OuterP>
            <Pause />
            <List style="padding-left:33px;padding-right:2em;">
              <Item>
                <p>
                  <span class="t-3003-c">
                    step 1: advances the initial position of
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:50:13
                    </span>
                  </span>
                  {" "}
                  {" "}
                  particle {" "}
                  <Math>
                    $C$
                  </Math>
                  <span class="t-3003-c">
                    {" "} radians forward, so the
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:51:25
                    </span>
                  </span>
                  {" "}
                  {" "}
                  graph shifts {" "}
                  <i>
                    <span class="t-3003-c">
                      left
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:52:27
                      </span>
                    </span>
                  </i>
                  <span class="t-3003-c">
                    {" "} by {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:52:32
                    </span>
                  </span>
                  <Math>
                    $C = 1.33$
                  </Math>
                  <span class="t-3003-c">
                    {" "} units (so that
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:52:46
                    </span>
                  </span>
                  {" "}
                  {" "}
                  the value {" "}
                  <Math>
                    $y = \sin(C)$
                  </Math>
                  <span class="t-3003-c">
                    {" "} finds itself at
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:53:36
                    </span>
                  </span>
                  {" "}
                  {" "}
                  {" "}{" "}
                  <NoBreak>
                    <Math>
                      $x = 0$
                    </Math>
                    <span class="t-3003-c">
                      )
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:54:20
                      </span>
                    </span>
                  </NoBreak>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    step 2: speeds up the angular velocity of
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:56:13
                    </span>
                  </span>
                  {" "}
                  {" "}
                  the particle from {" "}
                  <Math>
                    $1$
                  </Math>
                  <span class="t-3003-c">
                    {" "} radian per unit time
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:57:34
                    </span>
                  </span>
                  {" "}
                  {" "}
                  to {" "}
                  <Math>
                    $B = 2.33$
                  </Math>
                  <span class="t-3003-c">
                    {" "} radians per unit time; this
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:58:26
                    </span>
                  </span>
                  {" "}
                  {" "}
                  can be thought of as a “speeding up
                  of time”, and compresses the graph horizontally
                  about the {" "}
                  <Math>
                    $y$
                  </Math>
                  <span class="t-3003-c">
                    {" "} axis by a factor {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:61:26
                    </span>
                  </span>
                  <Math>
                    $2.33$
                  </Math>
                  <span class="t-3003-c">
                    {" "} (while
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:61:50
                    </span>
                  </span>
                  {" "}
                  {" "}
                  keeping {" "}
                  <Math>
                    $y = \sin(C)$
                  </Math>
                  <span class="t-3003-c">
                    {" "} at {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:62:34
                    </span>
                  </span>
                  <NoBreak>
                    <Math>
                      $x = 0$
                    </Math>
                    <span class="t-3003-c">
                      ,
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:62:45
                      </span>
                    </span>
                  </NoBreak>
                  <span class="t-3003-c">
                    {" "} as should be);
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:62:45
                    </span>
                  </span>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    step 3: increases the radius of the circle
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:64:13
                    </span>
                  </span>
                  {" "}
                  {" "}
                  from {" "}
                  <Math>
                    $1$
                  </Math>
                  <span class="t-3003-c">
                    {" "} to {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:65:21
                    </span>
                  </span>
                  <NoBreak>
                    <Math>
                      $A = 3.33$
                    </Math>
                    <span class="t-3003-c">
                      ,
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:65:35
                      </span>
                    </span>
                  </NoBreak>
                  <span class="t-3003-c">
                    {" "} which results in
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:65:35
                    </span>
                  </span>
                  {" "}
                  {" "}
                  a vertical dilation of the graph by a
                  factor {" "}
                  <NoBreak>
                    <Math>
                      $3.33$
                    </Math>
                    <span class="t-3003-c">
                      ;
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:67:26
                      </span>
                    </span>
                  </NoBreak>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    step 4: moves the coordinate (say,
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:69:13
                    </span>
                  </span>
                  {" "}
                  {" "}
                  {" "}{" "}
                  <NoBreak>
                    <Math>
                      $y$
                    </Math>
                    <span class="t-3003-c">
                      -coordinate,
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:70:16
                      </span>
                    </span>
                  </NoBreak>
                  <span class="t-3003-c">
                    {" "} if we are thinking of {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:70:16
                    </span>
                  </span>
                  <Math>
                    $f$
                  </Math>
                  {" "}{" "}
                  {" "}
                  {" "}
                  <span class="t-3003-c">
                    as reading off the {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:71:13
                    </span>
                  </span>
                  <NoBreak>
                    <Math>
                      $y$
                    </Math>
                    <span class="t-3003-c">
                      -coordinate
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:71:35
                      </span>
                    </span>
                  </NoBreak>
                  <span class="t-3003-c">
                    {" "} of the
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:71:35
                    </span>
                  </span>
                  {" "}
                  {" "}
                  particle) from {" "}
                  <Math>
                    $y = 0$
                  </Math>
                  <span class="t-3003-c">
                    {" "} to {" "}
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:72:35
                    </span>
                  </span>
                  <NoBreak>
                    <Math>
                      $y = D = 4.33$
                    </Math>
                    <span class="t-3003-c">
                      ,
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:72:53
                      </span>
                    </span>
                  </NoBreak>
                  <span class="t-3003-c">
                    {" "} resulting
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:72:53
                    </span>
                  </span>
                  {" "}
                  {" "}
                  in a vertical translation upwards of the
                  graph by {" "}
                  <Math>
                    $4.33$
                  </Math>
                  <span class="t-3003-c">
                    {" "} units!
                    <span class="t-3003">
                      ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:74:28
                    </span>
                  </span>
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Solution 2.
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:78:10
                  </span>
                </span>
              </i>
              {" "} One can understand
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f = x \ra A\sin(Bx + C) + D
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as a 5-fold composition (with functions
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:84:9
                </span>
              </span>
              {" "}
              {" "}
              boxes going right to left):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/r-G7.svg"
              local_url="./images/e5_ABCD_roles_general_comp.svg"
              intrinsicWidth={755}
              intrinsicHeight={95}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                In the initial setting of the variables
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:90:9
                </span>
              </span>
              {" "}
              {" "}
              with {" "}
              <Math>
                $A = B = 1$
              </Math>
              {" "} and {" "}
              <Math>
                $C = D = 0$
              </Math>
              {" "}
              the four boxes on the periphery are the
              identity*:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/sweo.svg"
              local_url="./images/e5_ABCD_roles_identity_comp.svg"
              intrinsicWidth={570}
              intrinsicHeight={150}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (*When we say “the identity” we mean
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:98:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                the identity function
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:100:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which is the function {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:102:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x \ra x$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                As we dial {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:104:9
                </span>
              </span>
              <Math>
                $C$
              </Math>
              {" "} up from {" "}
              <Math>
                $0$
              </Math>
              {" "} to {" "}
              <NoBreak>
                <Math>
                  $1.33$
                </Math>
                ,
              </NoBreak>
              {" "}
              the box to the right of sin is
              “brought online”:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/2ziI.svg"
              local_url="./images/e5_ABCD_roles_identity_comp_C.svg"
              intrinsicWidth={755}
              intrinsicHeight={150}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The effect of adding such a box to the
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:112:9
                </span>
              </span>
              {" "}
              {" "}
              right of sin is to translate the
              graph of sin to the left by {" "}
              <NoBreak>
                <Math>
                  $C$
                </Math>
                ,
              </NoBreak>
              {" "} as discussed
              in {" "}
              <InChapterLink
                href="#_95_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 10
              </InChapterLink>
              &#8288;.
              The second step in which {" "}
              <Math>
                $B$
              </Math>
              {" "} is increased from
              {" "}
              <Math>
                $1$
              </Math>
              {" "} to {" "}
              <NoBreak>
                <Math>
                  $2.33$
                </Math>
                ,
              </NoBreak>
              {" "} brings the rightmost box online:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Ao9J.svg"
              local_url="./images/e5_ABCD_roles_identity_comp_B.svg"
              intrinsicWidth={755}
              intrinsicHeight={150}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Because this box is to the right of all
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:122:9
                </span>
              </span>
              {" "}
              {" "}
              we have so far (which is {" "}
              <NoBreak>
                <Math>
                  $x \ra \sin(x + C)$
                </Math>
                ),
              </NoBreak>
              {" "}
              it compresses the [current] graph horizontally by
              a factor {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "} also as discussed in {" "}
              <InChapterLink
                href="#_95_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 10
              </InChapterLink>
              &#8288;;
              step 3 brings the box immediately to the
              left of sin online...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/DvlU.svg"
              local_url="./images/e5_ABCD_roles_identity_comp_A.svg"
              intrinsicWidth={755}
              intrinsicHeight={150}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...which scales the graph-so-far vertically by a
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:132:9
                </span>
              </span>
              {" "}
              {" "}
              factor {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} as discussed in {" "}
              <InChapterLink
                href="#_95_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 10
              </InChapterLink>
              &#8288;,
              and finally step 4 brings the leftmost box online...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/mE-x.svg"
              local_url="./images/e5_ABCD_roles_identity_comp_D.svg"
              intrinsicWidth={755}
              intrinsicHeight={95}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...that vertically translates the entire graph,
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:139:9
                </span>
              </span>
              {" "}
              {" "}
              as it stands, by {" "}
              <Math>
                $D$
              </Math>
              {" "} units up, as again discussed
              in {" "}
              <InChapterLink
                href="#_95_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 10
              </InChapterLink>
              &#8288;.
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
                  Concerning the second solution, for simplicity of
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:160:13
                  </span>
                </span>
                {" "}
                {" "}
                analysis it's important
                to bring the pre- and post-processing
                functions online “from the inside out”,
                gluing new boxes on to what's already there:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/EsiI.svg"
                local_url="./images/e5_ABCD_roles_identity_comp_inside_out.svg"
                intrinsicWidth={570}
                intrinsicHeight={195}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  (Otherwise, things get more complicated.)
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:169:13
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
                  The problem uses ‘sin’ as an example but the
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:266:13
                  </span>
                </span>
                {" "}
                {" "}
                same reasoning (with boxes) applies to any
                function. Namely, the graph
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                y = A\cdot f(Bx + C) + D
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  is the graph {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:274:13
                  </span>
                </span>
                <Math>
                  $y = f(x)$
                </Math>
                {" "} translated left by
                {" "}
                <NoBreak>
                  <Math>
                    $C$
                  </Math>
                  ,
                </NoBreak>
                {" "} compressed (horizontally) by {" "}
                <NoBreak>
                  <Math>
                    $B$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                scaled (vertically) by {" "}
                <NoBreak>
                  <Math>
                    $A$
                  </Math>
                  ,
                </NoBreak>
                {" "} etc. (Well, “etc.”:
                translated vertically by {" "}
                <NoBreak>
                  <Math>
                    $D$
                  </Math>
                  .)
                </NoBreak>
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 3.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  A function that can be written as
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:284:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x \ra A\sin(Bx + C) + D
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  for some values of {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:290:13
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
                    $B$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $C$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $D \in \rr$
                </Math>
                {" "}
                is called a
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  sinusoid
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:293:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  (if we switch ‘sin’ to ‘cos’ it gives the same
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:295:13
                  </span>
                </span>
                {" "}
                {" "}
                class of functions: {" "}
                <NoBreak>
                  <Math>
                    $\sin(Bx + C) = \cos(Bx + C - \eta)$
                  </Math>
                  ).
                </NoBreak>
              </OuterP>
              <OuterP class="indent-10">
                <span class="t-3003-c">
                  Moreover:
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:298:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <List style="padding-left:33px;padding-right:2em;">
                <Item>
                  <p>
                    <NoBreak>
                      <Math>
                        $C$
                      </Math>
                      <span class="t-3003-c">
                        :
                        <span class="t-3003">
                          ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:303:20
                        </span>
                      </span>
                    </NoBreak>
                    <span class="t-3003-c">
                      {" "} may be referred to as the {" "}
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:303:20
                      </span>
                    </span>
                    <i>
                      <span class="t-3003-c">
                        phase
                        <span class="t-3003">
                          ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:303:49
                        </span>
                      </span>
                    </i>
                    {" "}{" "}
                    {" "}
                    {" "}
                    <span class="t-3003-c">
                      of the sinuoid (but which is only uniquely determined
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:304:17
                      </span>
                    </span>
                    {" "}
                    {" "}
                    if you have decided whether your sinusoid is
                    written in terms of ‘cos’ or ‘sin’, and even
                    then only determined up to {" "}
                    <NoBreak>
                      <Math>
                        $360^\circ = 4\eta$
                      </Math>
                      <span class="t-3003-c">
                        ,
                        <span class="t-3003">
                          ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:307:63
                        </span>
                      </span>
                    </NoBreak>
                    {" "}{" "}
                    {" "}
                    {" "}
                    <span class="t-3003-c">
                      or, even worse,
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:308:17
                      </span>
                    </span>
                    {" "}
                    {" "}
                    up to {" "}
                    <Math>
                      $180^\circ = 2\eta$
                    </Math>
                    <span class="t-3003-c">
                      {" "} if negative values of {" "}
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:309:42
                      </span>
                    </span>
                    <Math>
                      $A$
                    </Math>
                    {" "}{" "}
                    {" "}
                    {" "}
                    <span class="t-3003-c">
                      are allowed)
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:310:17
                      </span>
                    </span>
                  </p>
                </Item>
                <Item>
                  <p>
                    <NoBreak>
                      <Math>
                        $A$
                      </Math>
                      <span class="t-3003-c">
                        :
                        <span class="t-3003">
                          ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:312:20
                        </span>
                      </span>
                    </NoBreak>
                    <span class="t-3003-c">
                      {" "} may be referred to as the {" "}
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:312:20
                      </span>
                    </span>
                    <i>
                      <span class="t-3003-c">
                        amplitude
                        <span class="t-3003">
                          ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:312:49
                        </span>
                      </span>
                    </i>
                    <span class="t-3003-c">
                      {" "} of the
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:312:59
                      </span>
                    </span>
                    {" "}
                    {" "}
                    sinusoid
                  </p>
                </Item>
                <Item>
                  <p>
                    <NoBreak>
                      <Math>
                        $B$
                      </Math>
                      <span class="t-3003-c">
                        :
                        <span class="t-3003">
                          ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:315:20
                        </span>
                      </span>
                    </NoBreak>
                    <span class="t-3003-c">
                      {" "} may be referred to as the {" "}
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:315:20
                      </span>
                    </span>
                    <i>
                      <span class="t-3003-c">
                        angular speed
                        <span class="t-3003">
                          ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:315:49
                        </span>
                      </span>
                    </i>
                    <span class="t-3003-c">
                      {" "} or
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:315:63
                      </span>
                    </span>
                    {" "}
                    {" "}
                    {" "}{" "}
                    <i>
                      <span class="t-3003-c">
                        angular frequency
                        <span class="t-3003">
                          ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:316:18
                        </span>
                      </span>
                    </i>
                    <span class="t-3003-c">
                      {" "} of the sinusoid
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:316:36
                      </span>
                    </span>
                  </p>
                </Item>
                <Item>
                  <p>
                    <NoBreak>
                      <Math>
                        $D$
                      </Math>
                      <span class="t-3003-c">
                        :
                        <span class="t-3003">
                          ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:318:20
                        </span>
                      </span>
                    </NoBreak>
                    <span class="t-3003-c">
                      {" "} may be referred to as the {" "}
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:318:20
                      </span>
                    </span>
                    <i>
                      <span class="t-3003-c">
                        vertical shift
                        <span class="t-3003">
                          ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:318:49
                        </span>
                      </span>
                    </i>
                    {" "}{" "}
                    {" "}
                    {" "}
                    <span class="t-3003-c">
                      or {" "}
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:319:17
                      </span>
                    </span>
                    <i>
                      <span class="t-3003-c">
                        mean
                        <span class="t-3003">
                          ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:319:21
                        </span>
                      </span>
                    </i>
                    {" "}{" "}
                    {" "}
                    {" "}
                    <span class="t-3003-c">
                      (mathematics) or as the {" "}
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:320:17
                      </span>
                    </span>
                    <i>
                      <span class="t-3003-c">
                        DC bias
                        <span class="t-3003">
                          ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:320:42
                        </span>
                      </span>
                    </i>
                    <span class="t-3003-c">
                      {" "} or {" "}
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:320:50
                      </span>
                    </span>
                    <i>
                      <span class="t-3003-c">
                        DC offset
                        <span class="t-3003">
                          ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:320:55
                        </span>
                      </span>
                    </i>
                    <span class="t-3003-c">
                      {" "} (engineering)
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:320:65
                      </span>
                    </span>
                    {" "}
                    {" "}
                    or as the {" "}
                    <i>
                      <span class="t-3003-c">
                        equilibrium position
                        <span class="t-3003">
                          ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:321:28
                        </span>
                      </span>
                    </i>
                    <span class="t-3003-c">
                      {" "} (physics) of
                      <span class="t-3003">
                        ./src/content/ch5/ch5^exercises/_ABCD_roles_.wly:321:49
                      </span>
                    </span>
                    {" "}
                    {" "}
                    the sinusoid
                  </p>
                </Item>
              </List>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={13}>
          <ExerciseStatement id="_98_h.a.i_">
            <OuterP>
              <b>
                Exercise 13.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Which function is most plausibly associated to
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_four_graphs_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              which graph?
            </OuterP>
            <Pause />
            <table
              class="slice"
              style="border-collapse:collapse;font-size:100%;text-align:center;margin:auto;margin-top:1em;margin-bottom:1.5em;"
            >
              <colgroup>
                <col width={200} />
                <col width={200} />
              </colgroup>
              <tbody>
                <tr style="border-bottom:1px solid black;">
                  <td style="padding:0.5em 0;border-right:1px solid black">
                    <Math>
                      $x \ra \sin x \cdot \cos x$
                    </Math>
                  </td>
                  <td style="padding:0.5em 0;">
                    <Math>
                      $x \ra \cos^2 x$
                    </Math>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0.5em 0;border-right:1px solid black">
                    <Math>
                      $x \ra \sin^2 x$
                    </Math>
                  </td>
                  <td style="padding:0.5em 0;">
                    <Math>
                      $x \ra \sin x + \cos x$
                    </Math>
                  </td>
                </tr>
              </tbody>
            </table>
            <Pause />
            <Image
              src="/build-img/svgo-svg/huBu.svg"
              local_url="./images/svg_ch5_ex_four_graphs.svg"
              intrinsicWidth="1203.483"
              intrinsicHeight="361.683"
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Since
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_four_graphs_.wly:39:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra \sin^2 x
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              x \ra \cos^2 x
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                are nonnegative [the square of a number
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_four_graphs_.wly:46:9
                </span>
              </span>
              {" "}
              {" "}
              is nonnegative]
              these functions must either be
              the top right or bottom left graphs, as the
              other two graphs weave in and out of negative territory;
              given that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \,\cos(0) = 1,
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \sin(0) = 0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                we deduce that
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_four_graphs_.wly:58:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra \sin^2 x
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                can only be the top right graph, and
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_four_graphs_.wly:62:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra \cos^2 x
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                can only be the bottom left graph; moreover, since
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_four_graphs_.wly:66:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              |\sin x \cdot \cos x| \leq 1
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for all {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_four_graphs_.wly:70:9
                </span>
              </span>
              <Math>
                $x \in \rr$
              </Math>
              {" "} (as the product of
              two numbers that are between {" "}
              <Math>
                $-1$
              </Math>
              {" "} and {" "}
              <Math>
                $1$
              </Math>
              {" "} is
              itself between {" "}
              <Math>
                $-1$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ),
              </NoBreak>
              {" "} whereas the
              top left graph is at times greater than {" "}
              <Math>
                $1$
              </Math>
              {" "}
              and at times less than {" "}
              <NoBreak>
                <Math>
                  $-1$
                </Math>
                ,
              </NoBreak>
              {" "}
              the last standing possibility is...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Ninz.svg"
              local_url="./images/svg_ch5_ex_four_graphs_labeled.svg"
              intrinsicWidth={1240}
              intrinsicHeight={375}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...this one!
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_four_graphs_.wly:81:9
                </span>
              </span>
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
                  These are in fact the actual graphs of
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_four_graphs_.wly:84:13
                  </span>
                </span>
                {" "}
                {" "}
                the stated functions, not just “plausible” graphs.
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
                  It is
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_four_graphs_.wly:88:13
                  </span>
                </span>
                {" "}
                {" "}
                indeed quite striking that all of these
                functions seem to be {" "}
                <i>
                  sinusoids
                </i>
                , given the
                appearance of their graphs. (A “sinusoid” is 
                formally defined as a function of the form
                {" "}
                <Math>
                  $x \ra A\cdot \sin(Bx + C) + D$
                </Math>
                {" "} for some 
                constants {" "}
                <NoBreak>
                  <Math>
                    $A$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $B$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $C$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $D \in \rr$
                  </Math>
                  .)
                </NoBreak>
                {" "}
                There is {" "}
                <i>
                  a priori
                </i>
                {" "} no good reason for this.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={14}>
          <ExerciseStatement id="_99_h.a.i_">
            <OuterP>
              <b>
                Exercise 14.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Where or how, if at all, is the
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_where_is_the_pythagorean_identity_.wly:3:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                pythagorean identity
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_where_is_the_pythagorean_identity_.wly:4:7
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                apparent in the four graphs of {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_where_is_the_pythagorean_identity_.wly:5:5
                </span>
              </span>
              <InChapterLink
                href="#_98_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 13
              </InChapterLink>
              &#8288;?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Imagine wooden cutouts made from {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_where_is_the_pythagorean_identity_.wly:8:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\sin^2$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $\cos^2$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              style="margin-top:1.1em;margin-bottom:1.1em;"
              src="/build-img/svgo-svg/hRhs.svg"
              local_url="./images/svg_ch5_ex_pythagorean_graphs_sin2.svg"
              intrinsicWidth={580}
              intrinsicHeight={160}
            />
            <Pause />
            <Image
              style="margin-top:1.1em;margin-bottom:1.1em;"
              src="/build-img/svgo-svg/nEBv.svg"
              local_url="./images/svg_ch5_ex_pythagorean_graphs_cos2.svg"
              intrinsicWidth={580}
              intrinsicHeight={160}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                It seems that if we vertically flip one of the cutouts {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_where_is_the_pythagorean_identity_.wly:19:9
                </span>
              </span>
              {" "}
              {" "}
              (in this case {" "}
              <NoBreak>
                <Math>
                  $y = \cos^2(x)$
                </Math>
                ),
              </NoBreak>
              {" "}
              it would perfectly fit on top of the other to make the
              constant function {" "}
              <NoBreak>
                <Math>
                  $y = 1$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              style="margin-top:1.1em;margin-bottom:1.1em;"
              src="/build-img/svgo-svg/qKN7.svg"
              local_url="./images/svg_ch5_ex_pythagorean_graphs_compounded.svg"
              intrinsicWidth={580}
              intrinsicHeight={160}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                This is no illusion: {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_where_is_the_pythagorean_identity_.wly:30:9
                </span>
              </span>
              {" "}
              {" "}
              it occurs because
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos^2(x) + \sin^2(x) = 1
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for all {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_where_is_the_pythagorean_identity_.wly:38:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} 
              i.e., because of 
              the pythagorean identity!
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={15}>
          <ExerciseStatement id="_100_h.a.i_">
            <OuterP>
              <b>
                Exercise 15.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Based on the graphs of {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:4:5
                </span>
              </span>
              <InChapterLink
                href="#_98_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 13
              </InChapterLink>
              &#8288;,
              or some other logic,
              does it seem more likely that 
              {" "}
              <NoBreak>
                <Math>
                  $x \ra \cos^2 x$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $x \ra \sin^2 x$
              </Math>
              {" "} and {" "}
              <Math>
                $x \ra \cos x\sin x$
              </Math>
              {" "} 
              are more closely related to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(x/2)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and/or {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:12:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\cos(x/2)$
                </Math>
                ,
              </NoBreak>
              {" "}
              or to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(2x)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and/or {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:17:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\cos(2x)$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                One can see from the graphs of {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:21:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\cos^2$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\sin^2$
              </Math>
              {" "}
              and {" "}
              <Math>
                $\sin\cdot\cos$
              </Math>
              {" "} that these functions cycle “twice as
              fast” as sine or cosine, just like {" "}
              <Math>
                $x \ra \sin(2x)$
              </Math>
              {" "}
              and {" "}
              <Math>
                $x\ra \cos(2x)$
              </Math>
              {" "} cycle twice as fast. The answer is
              therefore: the latter. (I.e., {" "}
              <NoBreak>
                “
                <Math>
                  $\sin(2x)$
                </Math>
              </NoBreak>
              {" "} and/or {" "}
              <NoBreak>
                <Math>
                  $\cos(2x)$
                </Math>
                ”.)
              </NoBreak>
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
                  More mathematically, say that {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:31:13
                  </span>
                </span>
                <Math>
                  $f : \rr \ra \rr$
                </Math>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  has period {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:33:15
                  </span>
                </span>
                <Math>
                  $T$
                </Math>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  or
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:35:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  is periodic mod {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:37:15
                  </span>
                </span>
                <Math>
                  $T$
                </Math>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  for some number {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:39:13
                  </span>
                </span>
                <Math>
                  $T \in \rr$
                </Math>
                {" "} if
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                f(x + T) = f(x)
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  for all {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:45:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $x \in \dom f$
                  </Math>
                  .
                </NoBreak>
                {" "} Then {" "}
                <NoBreak>
                  <Math>
                    $\sin$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $\cos$
                </Math>
                {" "} are
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  periodic mod {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:47:15
                  </span>
                </span>
                <Math>
                  $4\eta$
                </Math>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  while {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:49:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $\sin^2$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $\cos^2$
                </Math>
                {" "} and {" "}
                <Math>
                  $\sin\cos$
                </Math>
                {" "} are not
                only periodic mod {" "}
                <Math>
                  $4\eta$
                </Math>
                {" "} but accomplish the further
                feat of being
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  periodic mod {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:53:15
                  </span>
                </span>
                <Math>
                  $2\eta$
                </Math>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  since, for example,
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:55:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \sin(x + 2\eta)\cos(x + 2\eta) = (-\sin x)(-\cos x) = \sin x\cos x
                $$
                <ImageLeft
                  src="/build-img/svgo-svg/hCre.svg"
                  atLeastAsWide={true}
                  local_url="./images/e5_more_closely_related_to_sin2x_or_left_2eta_cloud.svg"
                  intrinsicWidth={500}
                  intrinsicHeight={100}
                />
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  for all {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:65:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $x \in \rr$
                  </Math>
                  ,
                </NoBreak>
                {" "} which establishes the periodicity of {" "}
                <Math>
                  $\sin\cdot\cos$
                </Math>
                {" "} mod
                {" "}
                <NoBreak>
                  <Math>
                    $2\eta$
                  </Math>
                  ,
                </NoBreak>
                {" "} etc.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={16}>
          <ExerciseStatement id="_101_h.a.i_">
            <OuterP>
              <b>
                Exercise 16.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                The graph {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_max_cosx_plus_sinx_new_new_ver_.wly:4:5
                </span>
              </span>
              <Math>
                $y = \cos x + \sin x$
              </Math>
              {" "} from {" "}
              <InChapterLink
                href="#_98_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 13
              </InChapterLink>
              {" "} has a maximum value greater than {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/TH1y.svg"
              local_url="./images/svg_ch5_ex_maximum_of_sin_plus_cos.svg"
              intrinsicWidth={600}
              intrinsicHeight={180}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Reasoning geometrically,
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_max_cosx_plus_sinx_new_new_ver_.wly:10:5
                </span>
              </span>
              {" "}
              {" "}
              what is this maximum value, and for which
              value(s) of {" "}
              <Math>
                $x$
              </Math>
              {" "} is it achieved?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                By the definition,
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_max_cosx_plus_sinx_new_new_ver_.wly:19:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos x + \sin x
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is the sum
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_max_cosx_plus_sinx_new_new_ver_.wly:23:9
                </span>
              </span>
              {" "}
              {" "}
              of an {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} and a {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinate.
              </NoBreak>
              {" "}
              We can represent the coordinates as
              two displacements (changes), one in {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                ,
              </NoBreak>
              {" "} 
              one in {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/xf9D.svg"
              local_url="./images/e5_max_cosx_plus_sinx_sol1_v3_2.svg"
              intrinsicWidth={660}
              intrinsicHeight={360}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The displacements can be summed geometrically
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_max_cosx_plus_sinx_new_new_ver_.wly:32:9
                </span>
              </span>
              {" "}
              {" "}
              by tipping the {" "}
              <NoBreak>
                “
                <Math>
                  $\sin x$
                </Math>
                ”
              </NoBreak>
              {" "} displacement to be
              horizontal on its side:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/byhq.svg"
              local_url="./images/e5_max_cosx_plus_sinx_sol1_v3_3.svg"
              intrinsicWidth={660}
              intrinsicHeight={360}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                For short:
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_max_cosx_plus_sinx_new_new_ver_.wly:39:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/2Wso.svg"
              local_url="./images/e5_max_cosx_plus_sinx_sol1_without_lines.svg"
              intrinsicWidth={660}
              intrinsicHeight={360}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Some more examples (if need be):
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_max_cosx_plus_sinx_new_new_ver_.wly:44:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/yFHg.svg"
              local_url="./images/e5_max_cosx_plus_sinx_sol1_without_lines_more_examples.svg"
              intrinsicWidth={900}
              intrinsicHeight={480}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Given this description, it seems obvious (or:
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_max_cosx_plus_sinx_new_new_ver_.wly:49:9
                </span>
              </span>
              {" "}
              {" "}
              it {" "}
              <i>
                is
              </i>
              {" "} obvious) that the value of {" "}
              <Math>
                $x$
              </Math>
              {" "} that
              maximizes {" "}
              <Math>
                $\cos x + \sin x$
              </Math>
              {" "} is {" "}
              <NoBreak>
                <Math>
                  $x = \eta/2$
                </Math>
                ,
              </NoBreak>
              {" "}
              to make the line that rains down at {" "}
              <Math>
                $-45^\circ$
              </Math>
              {" "}
              tangent to the circle at the top right corner of
              the circle, and for which {" "}
              <NoBreak>
                <Math>
                  $\cos x + \sin x = \sqrt&#123;2&#125;$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/xwF6.svg"
              local_url="./images/e5_max_cosx_plus_sinx_sol1_eta_over_2.svg"
              intrinsicWidth={660}
              intrinsicHeight={360}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (Individually, we have
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_max_cosx_plus_sinx_new_new_ver_.wly:59:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \,\cos(\eta/2)= \sqrt&#123;0.5&#125; = &#123;1 \over \sqrt&#123;2&#125;&#125;,
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \sin(\eta/2)=\sqrt&#123;0.5&#125; = &#123;1 \over \sqrt&#123;2&#125;&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and when we add those two together we get {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_max_cosx_plus_sinx_new_new_ver_.wly:68:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $&#123;2\over \sqrt&#123;2&#125;&#125; = \sqrt&#123;2&#125;$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Also,
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_max_cosx_plus_sinx_new_new_ver_.wly:70:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                any multiple of {" "}
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_max_cosx_plus_sinx_new_new_ver_.wly:72:11
                </span>
              </span>
              <Math>
                $4\eta$
              </Math>
              <span class="t-3003-c">
                {" "} can be added
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_max_cosx_plus_sinx_new_new_ver_.wly:72:34
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                [we don't need to say “or subtracted”
                <span class="t-3003">
                  ./src/content/ch5/ch5^exercises/_max_cosx_plus_sinx_new_new_ver_.wly:74:9
                </span>
              </span>
              {" "}
              {" "}
              because “multiple” intimates “integer multiple”,
              which subsumes negative multiples]
              to {" "}
              <NoBreak>
                <Math>
                  $x = \eta/2$
                </Math>
                ,
              </NoBreak>
              {" "} resulting in an infinite
              set of points at which the maximum is achieved.
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
                  A similar minimum of
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_max_cosx_plus_sinx_new_new_ver_.wly:82:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \large
                -\sqrt&#123;2&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  occurs at the other end of the circle.
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_max_cosx_plus_sinx_new_new_ver_.wly:87:13
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
                  Annotating the graph of {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_max_cosx_plus_sinx_new_new_ver_.wly:95:13
                  </span>
                </span>
                <Math>
                  $x \ra \cos x + \sin x$
                </Math>
                {" "}
                with this new information, in degrees and in radians:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/GHRw.svg"
                local_url="./images/e5_cosx_plus_sinx_with_max_min_info.svg"
                intrinsicWidth={600}
                intrinsicHeight={170}
              />
              <Pause />
              <Image
                src="/build-img/svgo-svg/BJ2x.svg"
                local_url="./images/e5_cosx_plus_sinx_with_max_min_info_radian_version.svg"
                intrinsicWidth={600}
                intrinsicHeight={170}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  (Note that {" "}
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_max_cosx_plus_sinx_new_new_ver_.wly:106:13
                  </span>
                </span>
                <Math>
                  $45^\circ = 0.78539\ldots = \eta/2$
                </Math>
                {" "}
                as a real number, 
                the two graphs really express the same thing.
                Also...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large
                \begin&#123;aligned&#125;
                 &#123;\eta\over 2&#125; + 180^\circ
                 =&amp;\,\,\up&#123;1.5&#125; &#123;\eta\over 2&#125; + 2\eta\\
                 =&amp;\,\,\up&#123;1.5&#125; &#123;\eta\over 2&#125; + &#123;4\eta\over 2&#125;\\
                 =&amp;\,\,\up&#123;1.5&#125; &#123;5\eta\over 2&#125;
                \end&#123;aligned&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...in case you haven't seen this kind of
                  <span class="t-3003">
                    ./src/content/ch5/ch5^exercises/_max_cosx_plus_sinx_new_new_ver_.wly:125:13
                  </span>
                </span>
                {" "}
                {" "}
                arithmetic before.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};