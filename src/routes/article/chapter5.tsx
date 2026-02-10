import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Boxed  from "~/components/Boxed";
import BoxedText  from "~/components/BoxedText";
import { CentralDisplay, CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { Item, List }  from "~/components/List";
import { MathBlock, Math }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageLeft, ImageRight }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { StarDivider }  from "~/components/StarDivider";
import TextParent  from "~/components/TextParent";
import { TildeDivider }  from "~/components/TildeDivider";
import { SolutionNote, Example, Pause, Section, NoBreak }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter5__() {
  return (
    <Article
      prevPage="/article/chapter4"
      nextPage=""
      pageNecessaryMargin={950}
      maxElementWidth={1000}
      id="_119_hgi_"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            cos and sin. (“cosine” and “sine”.)
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            derivatives
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=section-3">
            even/odd identities, and identities with {" "}
            <NoBreak>
              “
              <Math>
                $\eta$
              </Math>
              ”
            </NoBreak>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            relation to derivatives
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-4">
          <InChapterLink href="?id=section-5">
            parenthetization and powers
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-5">
          <InChapterLink href="?id=section-6">
            the pythagorean identity
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-6">
          <InChapterLink href="?id=section-7">
            inputs as radians
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-7">
          <InChapterLink href="?id=section-8">
            auto-converting degrees to radians
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-8">
          <InChapterLink href="?id=section-9">
            sines and cosines of {" "}
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
            </NoBreak>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-9">
          <InChapterLink href="?id=section-10">
            scaling the circle
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-10">
          <InChapterLink href="?id=section-11">
            polar coordinates
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-11">
          <InChapterLink href="?id=section-12">
            change-of-coordinate formulas
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-12">
          <InChapterLink href="?id=section-13">
            right triangles
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-13">
          <InChapterLink href="?id=section-14">
            a famous diagram
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-14">
          <InChapterLink href="?id=section-15">
            the abercrombie inequality
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-15">
          <InChapterLink href="?id=section-16">
            the gregorinovich sandwich
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-16">
          <InChapterLink href="?id=section-17">
            the angle-sum formulas
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-17">
          <InChapterLink href="?id=section-18">
            the missing arrows
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-18">
          <InChapterLink href="?id=section-19">
            note on calculators
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-19">
          <InChapterLink href="?id=exercises">
            exercises
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 5:">
        The Trigonometric Functions
      </ArticleTitle>
      <Section id="section-1">
        <OuterP>
          <b>
            Cos and Sin. (“Cosine” and “sine”.)
          </b>
          {" "} We've
          already encountered the ‘cos’ function in 
          {" "}
          <NoBreak>
            <a
              href="/article/chapter3#_37_hgi_"
              class="handle-out-chapter-link"
            >
              Exercise 7 of Chapter 3
            </a>
            ,
          </NoBreak>
          {" "}
          e.g.. It is the one that has this graph:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/hiZe.svg" />
        <Pause />
        <OuterP>
          It has a close cousin named ‘sin’. While {" "}
          <Math>
            $\cos(x)$
          </Math>
          {" "}
          “tops off” at {" "}
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
          the point {" "}
          <NoBreak>
            <Math>
              $(0, 0)$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/fuoV.svg" />
        <Pause />
        <OuterP>
          As far as standard definitions go, {" "}
          <Math>
            $\cos(x)$
          </Math>
          {" "}
          is the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinate
          </NoBreak>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          and {" "}
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
            -coordinate
          </NoBreak>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          of a point {" "}
          <Math>
            $x$
          </Math>
          {" "} units counterclockwise from
          {" "}
          <Math>
            $(1, 0)$
          </Math>
          {" "} on the unit circle. (Nb: “a”
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          unit circle
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          is a circle of radius {" "}
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
          one can see from the graphs that {" "}
          <NoBreak>
            <Math>
              $\cos(&#123;1\over 3&#125;) \approx 0.9$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $\sin(&#123;1\over 3&#125;) \approx 0.3$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/tmp-images/svg_ch5_ch_cosine_and_sine_@0.333.svg" />
        <Pause />
        <OuterP>
          Per the definitions, the point one third of a
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
            $\approx 0.3$
          </Math>
          {" "} in {" "}
          <Math>
            $y$
          </Math>
          {" "} (or actually 
          {" "}
          <Math>
            $0.94495...$
          </Math>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $0.32719...$
            </Math>
            ,
          </NoBreak>
          {" "} 
          it turns out, as we can know by
          a calculator equipped with ‘sin’ and ‘cos’):
        </OuterP>
        <Pause />
        <Image src="/tmp-images/svg_ch5_ch_unit_circle_@0.333_smaller.svg" />
        <Pause />
        <OuterP>
          As a second example, the graphs indicate that
          {" "}
          <NoBreak>
            <Math>
              $\sin(-3) \approx -0.2$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $\cos(-3) \approx -0.99$
          </Math>
          {" "}
          (or something very close to {" "}
          <NoBreak>
            <Math>
              $-1$
            </Math>
            ,
          </NoBreak>
          {" "} in any case):
        </OuterP>
        <Pause />
        <Image src="/tmp-images/svg_ch5_ch_cosine_and_sine_@-3_v2.svg" />
        <Pause />
        <OuterP>
          Indeed, going {" "}
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
          {" "} to be exact, it turns out):
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/9Ygl.svg" />
        <Pause />
        <OuterP>
          For a last example,
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
        <Image src="/tmp-images/svg_ch5_ch_cosine_and_sine_@minus_eta_v2.svg" />
        <Pause />
        <OuterP>
          Some thought reveals that 
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
        </MathBlock>
        <Pause />
        <OuterP>
          in {" "}
          <a
            href="/article/chapter4#_81_hgi_"
            class="handle-out-chapter-link"
          >
            Exercise 24 of Chapter 3
          </a>
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
          In another possible definition,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(x)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is defined as the {" "}
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
        <Image src="/build-img/svgo-svg/h28T.svg" />
        <Pause />
        <OuterP>
          In more detail, if you tilt your head  sideways,
          you will see that the {" "}
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
          In particular, {" "}
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
        <Image src="/build-img/svgo-svg/5m2X.svg" />
        <Pause />
        <OuterP>
          ...to be contrasted with our first definition,
          employing a single point projected onto
          two different axes:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/7839.svg" />
        <Pause />
        <OuterP>
          The second definition (former diagram) explains
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
          particle!
        </OuterP>
      </Section>
      <Rest />
    </Article>
  );
}

const Rest = () => {
  const showMore = useShowMore();
  return <>
    {showMore() && <>
      <Pause />
      <Section id="section-2">
        <OuterP>
          <b>
            Derivatives.
          </b>
          {" "}
          Continuing the last “chapter” in the
          definitions of {" "}
          <Math>
            $\sin$
          </Math>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $\cos$
            </Math>
            ,
          </NoBreak>
          {" "} we can
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
        <Image src="/build-img/svgo-svg/WKck.svg" />
        <Pause />
        <OuterP>
          These labels are chosen
          because
          the {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinate
          </NoBreak>
          {" "} of the
          {" "}
          <NoBreak>
            “
            <Math>
              $-\!\sin$
            </Math>
            ”
          </NoBreak>
          {" "}
          particle is
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          -\!\sin(x)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          by symmetry with the {" "}
          <Math>
            $\sin$
          </Math>
          {" "} particle,
          meaning that the
          {" "}
          <NoBreak>
            “
            <Math>
              $-\!\sin$
            </Math>
            ”
          </NoBreak>
          {" "}
          particle
          defines the function
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x \ra -\!\sin(x)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          also known simply as
        </OuterP>
        <Pause />
        <CentralDisplay>
          <NoBreak>
            “
            <Math>
              $-\!\sin$
            </Math>
            ”
          </NoBreak>
        </CentralDisplay>
        <Pause />
        <OuterP>
          by the general definition that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          -f = (x \ra -f(x))
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for all {" "}
          <NoBreak>
            <Math>
              $f : \rr \ra \rr$
            </Math>
            ,
          </NoBreak>
          {" "}
          and similarly for {" "}
          <NoBreak>
            “
            <Math>
              $-\!\cos$
            </Math>
            ”.
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          Adding the curves for {" "}
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
        <Image src="/build-img/svgo-svg/RzLW.svg" />
        <Pause />
        <OuterP>
          These are the same four curves that
          appear in {" "}
          <NoBreak>
            <a
              href="/article/chapter4#_67_hgi_"
              class="handle-out-chapter-link"
            >
              Exercise 12 of Chapter 4
            </a>
            .
          </NoBreak>
          {" "}
          In particular,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin' = \cos
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \cos' = -\!\sin
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          (-\!\sin)' = -\!\cos
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          (-\!\cos)' = \sin
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          because the rate of change of each
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
          in the solution to that problem.
          (Clockwise vs. counterclockwise rotation
          notwithstanding.)
        </OuterP>
        <OuterP class="indent-10">
          One can also note that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (-f)' = ((-1)\cdot f)' = (-1) \cdot f' = -f'
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          in general for any {" "}
          <Math>
            $f : \rr \ra \rr$
          </Math>
          {" "}
          (cf. {" "}
          <a
            href="/article/chapter4#_65_hgi_"
            class="handle-out-chapter-link"
          >
            Exercise 10
          </a>
          {" "}
          and {" "}
          <NoBreak>
            <a
              href="/article/chapter4#_66_hgi_"
              class="handle-out-chapter-link"
            >
              Exercise 11 of Chapter 4
            </a>
            ),
          </NoBreak>
          {" "}
          which implies that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (-\!\sin)' = -\!\sin'
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (or
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (-\!\sin)' = -\!\sin' = -\!\cos
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          to finish the computation),
          and that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (-\!\cos)' = -\!\cos'
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (or
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (-\!\cos)' = -\!\cos' = -(-\!\sin) = \sin
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          to finish the computation),
          which means that one only needs to
          remember the first two equations.
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-3">
        <OuterP>
          <b>
            Even/odd identities, and identities with {" "}
            <NoBreak>
              “
              <Math>
                $\eta$
              </Math>
              ”.
            </NoBreak>
          </b>
          {" "}
          One has
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
        </MathBlock>
        <Pause />
        <OuterP>
          for all {" "}
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
        </MathBlock>
        <Pause />
        <OuterP>
          (“aye-tah”, Greek letter “eta”) is a
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
          <NoBreak>
            <a
              href="/article/chapter4#_81_hgi_"
              class="handle-out-chapter-link"
            >
              Exercise 24
            </a>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <a
              href="/article/chapter4#_83_hgi_"
              class="handle-out-chapter-link"
            >
              Chapter 4
            </a>
            .)
          </NoBreak>
          {" "} You should
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
          for you
          (or help you compare your way of seeing
          things to the author's way of seeing things):
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/g1x7.svg" />
        <Pause />
        <OuterP>
          Two more identities
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(\eta - x) = \cos(x)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(\eta - x) = \sin(x)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          are related to the last identity above, in that they
          involve symmetry about the line {" "}
          <Math>
            $x = y$
          </Math>
          {" "} in the Cartesian
          plane:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/9iTV.svg" />
        <Pause />
        <OuterP>
          We also have these identities...
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
        </MathBlock>
        <Pause />
        <OuterP>
          ...that follow because one full turn
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
        </MathBlock>
        <Pause />
        <OuterP>
          ...that follow from the four-particle
          diagram, e.g..
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-4">
        <OuterP>
          <b>
            Relation to derivatives.
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
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \cos'(x) = \cos(x + \eta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          given that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(x + \eta) = \cos(x)
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \cos(x + \eta) = -\!\sin(x)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          as seen in the previous section.
        </OuterP>
        <OuterP class="indent-10">
          In fact, one can make the further observation that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin^&#123;(\ell)&#125;(x) = \sin(x + \ell\eta)
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \cos^&#123;(\ell)&#125;(x) = \cos(x + \ell\eta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          where {" "}
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
      <Pause />
      <Section
        work="ing"
        id="section-5"
      >
        <OuterP>
          <b>
            Parenthetization and powers.
          </b>
          {" "} 
          It is allowed to write
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;“&#125;\cos x\rt&#123;0.2&#125;\te&#123;”&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;“&#125;\cos(x)\rt&#123;0.1&#125;\te&#123;”&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          when the input is just one symbol. Also,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos^2(x)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (or
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos^2 x
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          similarly to the just-introduced convention)
          means
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (\cos(x))^2 = (\cos x)^2
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          which is a special case of the fact that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f^2(x) = (f(x))^2
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for any function {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            ,
          </NoBreak>
          {" "}
          which is itself a special case of the fact that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (fg)(x) = f(x)g(x)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for all functions {" "}
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
      <Pause />
      <Section id="section-6">
        <OuterP>
          <b>
            The pythagorean identity.
          </b>
          {" "}
          Because
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^2 + y^2 = 1
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is the equation of the unit circle, and
          points of the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (\cos x, \sin x)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          are points on the unit circle, we have
        </OuterP>
        <Pause />
        <TextParent>
          <MathBlock>
            $$
            \cos^2(x) + \sin^2(x) = 1 \tag&#123;*&#125;
            $$
          </MathBlock>
        </TextParent>
        <Pause />
        <OuterP>
          for all {" "}
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
          Various “tricks” are associated to the
          pythagorean identity. For example, the
          number
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          1
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is forevermore suspect, because it might
          just be
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin^2(x) + \cos^2(x)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (or for some other variable) in disguise,
          depending on the situation. Also
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin^2 (y)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (variable not important) might be
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          1 - \cos^2 (y)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          just as
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos^2 (y)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          might be
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          1 - \sin^2 (y)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (also
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          1 - \cos^2 (y)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          1 - \sin^2 (y)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          might end up respectively rewritten
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (1 - \cos y)\cdot (1 + \cos y)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (1 - \sin y)\cdot (1 + \sin y)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          by the difference-of-squares factorization),
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin^2 \theta - \cos^2 \theta
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          might be
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          1 - 2\cos^2 \theta
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          since {" "}
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
        </MathBlock>
        <Pause />
        <OuterP>
          since {" "}
          <NoBreak>
            <Math>
              $\cos^2 \theta = 1 - \sin^2\theta$
            </Math>
            ,
          </NoBreak>
          {" "}
          and symmetrically for the opposite difference. (I.e.,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \,\cos^2 \theta - \sin^2 \theta,
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          this one.) Etc.
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-7">
        <OuterP>
          <b>
            Inputs as radians.
          </b>
          {" "}
          The
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          radian measure
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          of an angle 
          is the length of a circular arc subtended
          by the angle, divided by the radius of
          that arc:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/dau_.svg" />
        <Pause />
        <OuterP>
          By this definition, the radian measure of an
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
        <Image src="/build-img/svgo-svg/byWA.svg" />
        <Pause />
        <OuterP>
          In particular, the radian measure
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
        <Image src="/build-img/svgo-svg/uhJc.svg" />
        <Pause />
        <OuterP>
          To imprint this fact in our memories:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/GrNS.svg" />
        <Pause />
        <OuterP>
          (We will often leave out the “rad”—in fact,
          if you don't see a degree symbol {" "}
          <NoBreak>
            “
            <Math>
              $^\circ$
            </Math>
            ”
          </NoBreak>
          {" "}
          next to an angle measure, that means the angle
          measure is a radian.) From there, other radian
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
        <Image src="/build-img/svgo-svg/PhlK.svg" />
        <Pause />
        <OuterP>
          aaaand... and so on.
        </OuterP>
        <OuterP class="indent-10">
          As a consequence of the definition, a
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
        <Image src="/build-img/svgo-svg/KPHA.svg" />
        <Pause />
        <OuterP>
          In particular,
          instead of positing the definitions of
          sin and cos like this...
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/n-qa.svg" />
        <Pause />
        <OuterP>
          ...with the input appearing as a
          displacement, we can posit the definitions
          like this...
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/kCui.svg" />
        <Pause />
        <OuterP>
          ...with the input appearing as a radian!
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 1.
            </b>
            {" "}
            We can conceptualize {" "}
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
          <Image src="/build-img/svgo-svg/tIP3.svg" />
          <Pause />
          <OuterP>
            ...with the input appearing as a displacement,
            or like this...
          </OuterP>
          <Pause />
          <Image src="/build-img/svgo-svg/jn-F.svg" />
          <Pause />
          <OuterP>
            ...with the input appearing as a radian.
          </OuterP>
        </Example>
        <Pause />
        <OuterP>
          <i>
            Note.
          </i>
          {" "}
          Another thing to know about radians 
          is that the length of a circular
          arc subtended by an angle is its radian
          measure times the radius:
        </OuterP>
        <Pause />
        <Image src="/tmp-images/svg_ch5_ch_radian_definition_consequence.svg" />
        <Pause />
        <TildeDivider style="margin-top:-1em" />
      </Section>
      <Pause />
      <Section id="section-8">
        <OuterP>
          <b>
            Auto-converting degrees to radians.
          </b>
          {" "}
          We will consider the degree notation
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
        </MathBlock>
        <Pause />
        <OuterP>
          for all {" "}
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
        </MathBlock>
        <Pause />
        <OuterP>
          converts from degrees to radians.
        </OuterP>
        <OuterP class="indent-10">
          For example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          90^\circ = 90 \cdot &#123;\eta\over 90&#125; = \eta
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          45^\circ = 45 \cdot &#123;\eta\over 90&#125; = \eta/2,
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          per this definition.
        </OuterP>
        <OuterP class="indent-10">
          In this way, in particular, we can write
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(90^\circ\hlfbk)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          as a stand-in for
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(\eta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          ...without committing any informality.
        </OuterP>
        <OuterP class="indent-10">
          (Note that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(\eta) = 0
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          in case you had any doubt, by the way—an
          angle of {" "}
          <Math>
            $\eta$
          </Math>
          {" "} puts you at the tippy-top
          of the circle!)
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-9">
        <OuterP>
          <b>
            Sines and cosines of {" "}
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
          </MathBlock>
        </TextParent>
        <Pause />
        <OuterP>
          is on the unit circle, because the
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
        </MathBlock>
        <Pause />
        <OuterP>
          is on the unit circle, as is
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (\sqrt&#123;0.1&#125;, \sqrt&#123;0.9&#125;)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and so on. (If you're curious, points of this
          family...
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/Yhim.svg" />
        <Pause />
        <OuterP>
          ...look like this.) Vice-versa, every point
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
          In particular, the unit circle contains the
          following points:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/BFW6.svg" />
        <Pause />
        <OuterP>
          Here
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (\sqrt&#123;0.5&#125;,\, \sqrt&#123;0.5&#125;\rt&#123;0.2&#125;)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is obviously at {" "}
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
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(45^\circ\hlfbk) = \sqrt&#123;0.5&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          or
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(\eta/2) = \sqrt&#123;0.5&#125;
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(\eta/2) = \sqrt&#123;0.5&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          in radians. Symmetrically,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(135^\circ\hlfbk) = -\sqrt&#123;0.5&#125;
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(135^\circ\hlfbk) = \sqrt&#123;0.5&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (or
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(1.5\eta) = -\sqrt&#123;0.5&#125;
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(1.5\eta) = \sqrt&#123;0.5&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          in radians) in the second quadrant, and so on.
        </OuterP>
        <OuterP class="indent-10">
          For the remaining values we rely on the
          existence of the following two equilateral
          triangles:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/uUEG.svg" />
        <Pause />
        <OuterP>
          The first triangle implies that the the unique
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
        </MathBlock>
        <Pause />
        <OuterP>
          (surprise!), the two points in question must be
          the afore-shown
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (\sqrt&#123;0.25&#125;, \,\sqrt&#123;0.75&#125;) = (0.5, \,\sqrt&#123;0.75&#125;)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          at the upper tip of the first triangle, and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (\sqrt&#123;0.75&#125;, \,\sqrt&#123;0.25&#125;) = (\sqrt&#123;0.75&#125;, \,0.5)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          at the rightward tip of the second triangle,
          and we find
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(60^\circ\hlfbk) = 0.5 \,\,(= \sqrt&#123;0.25&#125;),
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(60^\circ\hlfbk) = \sqrt&#123;0.75&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(30^\circ\hlfbk) = \sqrt&#123;0.75&#125;,
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(30^\circ\hlfbk) = 0.5 \,\,(= \sqrt&#123;0.25&#125;),
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          by conclusion; or
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(2\eta/3) = 0.5 \,\,(= \sqrt&#123;0.25&#125;),
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(2\eta/3) = \sqrt&#123;0.75&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(\eta/3) = \sqrt&#123;0.75&#125;,
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(\eta/3) = 0.5 \,\,(= \sqrt&#123;0.25&#125;)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          in radians!
        </OuterP>
        <OuterP class="indent-10">
          (And symmetrically in other quadrants, e.g.,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(120^\circ\hlfbk) = -0.5 \,\,(= -\sqrt&#123;0.25&#125;),
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(120^\circ\hlfbk) = \sqrt&#123;0.75&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          a.k.a.,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(4\eta/3) = -0.5 \,\,(= -\sqrt&#123;0.25&#125;),
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(4\eta/3) = \sqrt&#123;0.75&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          in radians, etc.)
        </OuterP>
        <Pause />
        <OuterP>
          <i>
            Postscript 1.
          </i>
          {" "} We have
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sqrt&#123;0.5&#125; = &#123;1\over \sqrt&#123;2&#125;&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sqrt&#123;0.75&#125; = &#123;\sqrt&#123;3&#125;\over 2&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          so the above “wheel of special values” can also be
          drawn as follows (adding the angles in, as well):
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/Zu5W.svg" />
        <Pause />
        <OuterP>
          <i>
            Postscript 2.
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
        </MathBlock>
        <Pause />
        <OuterP>
          for {" "}
          <NoBreak>
            <Math>
              $\sqrt&#123;0.5&#125; = &#123;1\over \sqrt&#123;2&#125;&#125;$
            </Math>
            .
          </NoBreak>
          {" "} In this case:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/tDhP.svg" />
      </Section>
      <Pause />
      <Section id="section-10">
        <OuterP>
          <b>
            Scaling the circle.
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
              $(\cos(\theta), \sin(\theta))$
            </Math>
            ,
          </NoBreak>
          {" "}
          because that is the definition of sin and cos:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/HYoa.svg" />
        <Pause />
        <OuterP>
          But say now that
          we re-scale the circle to have some arbitrary
          radius {" "}
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
        <Image src="/build-img/svgo-svg/oidH.svg" />
        <Pause />
        <OuterP>
          ...what are the coordinates of {" "}
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
          Q = (r\cos(\theta), r\sin(\theta))
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          or, in individual formulas,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          Q_x = r\cdot\cos(\theta)
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          Q_y = r\cdot\sin(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          ...where {" "}
          <NoBreak>
            <Math>
              $Q_x$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $Q_y$
          </Math>
          {" "} are the {" "}
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
            -
          </NoBreak>
          {" "} coordinates of {" "}
          <NoBreak>
            <Math>
              $Q$
            </Math>
            .
          </NoBreak>
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-11">
        <OuterP>
          <b>
            Polar coordinates.
          </b>
          {" "}
          The so-called
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          polar coordinates
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          of a point {" "}
          <Math>
            $P$
          </Math>
          {" "} in the plane are a pair of
          numbers
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (r, \theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          with {" "}
          <Math>
            $r \geq 0$
          </Math>
          {" "} such that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          P = (r\cos(\theta), r\sin(\theta))
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          or namely with the property that:
        </OuterP>
        <Pause />
        <List style="padding-left:1.8em;">
          <Item>
            <p>
              <Math>
                $r$
              </Math>
              {" "} is the distance from {" "}
              <Math>
                $P$
              </Math>
              {" "} to the origin;
            </p>
          </Item>
          <Item>
            <p>
              <Math>
                $\theta$
              </Math>
              {" "} is “the” counterclockwise angle
              from the positive {" "}
              <Math>
                $x$
              </Math>
              {" "} axis to the segment
              {" "}
              <NoBreak>
                <Math>
                  $OP$
                </Math>
                ,
              </NoBreak>
              {" "} where {" "}
              <Math>
                $O$
              </Math>
              {" "} is the origin;
            </p>
          </Item>
        </List>
        <Pause />
        <OuterP>
          ...even though {" "}
          <Math>
            $\theta$
          </Math>
          {" "} is not unique,
          because any multiple of {" "}
          <Math>
            $4\eta$
          </Math>
          {" "} may be
          added to {" "}
          <Math>
            $\theta$
          </Math>
          {" "} without altering the
          values of {" "}
          <Math>
            $\sin(\theta)$
          </Math>
          {" "} or {" "}
          <NoBreak>
            <Math>
              $\cos(\theta)$
            </Math>
            ;
          </NoBreak>
          {" "}
          slightly worse even: if {" "}
          <NoBreak>
            <Math>
              $r = 0$
            </Math>
            ,
          </NoBreak>
          {" "} then
          {" "}
          <Math>
            $\theta$
          </Math>
          {" "} may be anything. (Because in that
          case
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          P = (0, 0)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and any value of {" "}
          <Math>
            $\theta$
          </Math>
          {" "} will satisfy
          the equation
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          P = (0\cdot \cos(\theta), 0\cdot \sin(\theta))
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          namely.)
        </OuterP>
        <OuterP class="indent-10">
          NONETHELESS—even though the polar coordinates
          of a point are not (not ever!) uniquely
          determined, we say “the” polar coordinates of
          a point, out of expediency!
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 2.
            </b>
            {" "}
            The pairs
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (\sqrt&#123;2&#125;,\, -3.5\eta)
            $$
          </MathBlock>
          <Pause />
          <MathBlock>
            $$
            (\sqrt&#123;2&#125;,\, 0.5\eta)
            $$
          </MathBlock>
          <Pause />
          <MathBlock>
            $$
            (\sqrt&#123;2&#125;,\, 4.5\eta)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            count among the polar coordinates of the point
            {" "}
            <NoBreak>
              <Math>
                $(1, 1) \in \rr^2$
              </Math>
              .
            </NoBreak>
          </OuterP>
        </Example>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 3.
            </b>
            {" "}
            The pairs
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (\sqrt&#123;2&#125;,\, -2.5\eta)
            $$
          </MathBlock>
          <Pause />
          <MathBlock>
            $$
            (\sqrt&#123;2&#125;,\, 1.5\eta)
            $$
          </MathBlock>
          <Pause />
          <MathBlock>
            $$
            (\sqrt&#123;2&#125;,\, 101.5\eta)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            count among the polar coordinates of the point
            {" "}
            <NoBreak>
              <Math>
                $(-1, 1) \in \rr^2$
              </Math>
              .
            </NoBreak>
          </OuterP>
        </Example>
      </Section>
      <Pause />
      <Section id="section-12">
        <OuterP>
          <b>
            Change-of-coordinate formulas.
          </b>
          {" "}
          Definitionally, the equations
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \displaylines&#123;x = r \cos(\theta)\\
          \up&#123;1.3&#125;y = r \sin(\theta)&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          give the change-of-coordinate formulas
          from a polar coordinate {" "}
          <Math>
            $(r, \theta)$
          </Math>
          {" "}
          to a cartesian coordinate {" "}
          <NoBreak>
            <Math>
              $(x, y)$
            </Math>
            .
          </NoBreak>
          {" "}
          (It's right there in the promise of what
          it means to be a valid polar coordinate
          {" "}
          <NoBreak>
            <Math>
              $(r, \theta)$
            </Math>
            .)
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          Conversely, to recover the polar
          coordinates {" "}
          <Math>
            $(r, \theta)$
          </Math>
          {" "} from the cartesian
          coordinates {" "}
          <NoBreak>
            <Math>
              $(x, y)$
            </Math>
            ,
          </NoBreak>
          {" "} one has at least
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          r = \sqrt&#123;x^2 + y^2&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          by the Pythagorean theorem, but the
          formula for {" "}
          <Math>
            $\theta$
          </Math>
          {" "} is not so cheerful—out
          of completeness, we can jot it down
          anyway, for your entertainment:
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \theta = \begin&#123;cases&#125;
          \arctan(y/x)&amp;\te&#123;if &#125;\, x \ne 0, \,\te&#123;else&#125; \\
          \up&#123;1.2&#125;\te&#123;arccot&#125;(x/y) &amp;\te&#123;if &#125;\, y \ne 0, \,\te&#123;else&#125; \\
          \up&#123;1.2&#125;\rm&#123;?&#125; &amp;\te&#123;if &#125;\, x = 0, y = 0
          \end&#123;cases&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          ...where “arctan”, “arccot” are
          some-functions-or-other-to-be-discussed-later.
        </OuterP>
        <Pause />
        <OuterP>
          <i>
            Note.
          </i>
          {" "}
          Popular programming languages such as
          python offer a function named {" "}
          <span style="font-family:monaco;background-color:#999;font-size:0.8em;border-radius:0.4em;padding:0.1em 0.3em;">
            atan2
          </span>
          {" "} that will compute the {" "}
          <i>
            argument
          </i>
          {" "} (see
          Vocabulary below) {" "}
          <Math>
            $\theta$
          </Math>
          {" "} of a given pair
          {" "}
          <Math>
            $(x, y)$
          </Math>
          {" "} out of the box, without you having to
          worry about which of {" "}
          <Math>
            $x$
          </Math>
          {" "} or {" "}
          <Math>
            $y$
          </Math>
          {" "} is {" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            ,
          </NoBreak>
          {" "} etc.
        </OuterP>
        <OuterP class="indent-10">
          But the call goes {" "}
          <span style="font-family:monaco;background-color:#999;font-size:0.8em;border-radius:0.4em;padding:0.1em 0.3em;">
            atan2(y, x)
          </span>
          {" "} not {" "}
          <span style="font-family:monaco;background-color:#999;font-size:0.8em;border-radius:0.4em;padding:0.1em 0.3em;">
            atan2(x, y)
          </span>
          {" "} by some bizareness. (Well, actually a
          throwback to the fact that in this expression...
        </OuterP>
        <Pause />
        <CentralDisplay>
          <NoBreak>
            “
            <Math>
              $\arctan(y/x)$
            </Math>
            ”
          </NoBreak>
        </CentralDisplay>
        <Pause />
        <OuterP>
          ...you hit {" "}
          <NoBreak>
            “
            <Math>
              $y$
            </Math>
            ”
          </NoBreak>
          {" "} before {" "}
          <NoBreak>
            “
            <Math>
              $x$
            </Math>
            ”.)
          </NoBreak>
        </OuterP>
        <Pause />
        <OuterP>
          <i>
            Vocabulary.
          </i>
          {" "}
          The first coordinate of a polar
          coordinate—colloquially, {" "}
          <NoBreak>
            “
            <Math>
              $r$
            </Math>
            ”—is
          </NoBreak>
          {" "} called the
          {" "}
          <i>
            radius
          </i>
          {" "} or the {" "}
          <i>
            norm
          </i>
          . The second coordinate
          of a polar coordinate—colloquially, {" "}
          <NoBreak>
            “
            <Math>
              $\theta$
            </Math>
            ”—is
          </NoBreak>
          {" "}
          called the {" "}
          <i>
            angle
          </i>
          {" "} or the {" "}
          <i>
            argument
          </i>
          .
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-13">
        <OuterP>
          <b>
            Right triangles.
          </b>
          {" "}
          Hopefully, the following figure should seem
          believable-and/or-familiar, at this point
          (it's a scaled-up/down unit circle):
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/xqXh.svg" />
        <Pause />
        <OuterP>
          If we assume {" "}
          <Math>
            $0 \leq \theta \leq \eta$
          </Math>
          {" "} then both
          {" "}
          <Math>
            $r\cos(\theta)$
          </Math>
          {" "} and {" "}
          <Math>
            $r\sin(\theta)$
          </Math>
          {" "} are nonnegative,
          and we can redraw the figure as a relationship between
          the sidelengths of a right triangle:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/VAIj.svg" />
        <Pause />
        <OuterP>
          If we rebrand the three legs of the triangle
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
        <Image src="/build-img/svgo-svg/j3G_.svg" />
        <Pause />
        <OuterP>
          ...the relationship can be written:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/3N4N.svg" />
        <Pause />
        <OuterP>
          To be paired with this figure:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/Jk8H.svg" />
        <Pause />
        <OuterP>
          The arrows are meant to indicate that {" "}
          <Math>
            $\cos(\theta)$
          </Math>
          {" "} is the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          multiplicative factor
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          that takes one from “hypotenuse” to “adjacent”,
          while {" "}
          <Math>
            $\sin(\theta)$
          </Math>
          {" "} is (again) the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          multiplicative factor
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          that takes one from “hypotenuse” to “opposite”.
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 4.
            </b>
            {" "}
            In the following diagram...
          </OuterP>
          <Pause />
          <Image src="/build-img/svgo-svg/zVzp.svg" />
          <Pause />
          <OuterP>
            ...the length of the side marked ‘?’ is
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            10\cdot \cos(43^\circ\hlfbk)\cdot \cos(20^\circ\hlfbk)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            by following two ‘cos’ arrows (i.e.,
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
        <Example>
          <OuterP>
            <b>
              Example 5.
            </b>
            {" "}
            In the following diagram...
          </OuterP>
          <Pause />
          <Image src="/build-img/svgo-svg/WPT7.svg" />
          <Pause />
          <OuterP>
            ...the length of the side marked ‘?’ is
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            14\cdot \cos(43^\circ\hlfbk)\cdot \sin(60^\circ\hlfbk)\cdot \sin(50^\circ\hlfbk)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            by following one ‘cos’ and then two ‘sin’
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
      <Pause />
      <Section id="section-14">
        <OuterP>
          <b>
            A famous diagram.
          </b>
          {" "}
          There is a somewhat infamous diagram similar
          to the diagrams of examples 5 and 6; to draw the
          diagram, start with a “snail shell” stack of
          two right triangles:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/-N5q.svg" />
        <Pause />
        <OuterP>
          Rotate a copy of the smaller
          triangle by {" "}
          <Math>
            $90^\circ$
          </Math>
          {" "} towards the bigger one;
          we end up with two pairs of parallel sides:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/-oWb.svg" />
        <Pause />
        <OuterP>
          Therefore, if we snap a scaled copy of the
          smaller triangle onto the remaining non-hypotenuse
          side of the bigger triangle, we end up with a
          flush side consisting of a single straight
          segment (you can also think in terms of
          angles that add up to {" "}
          <NoBreak>
            <Math>
              $180^\circ$
            </Math>
            ):
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/ADw8.svg" />
        <Pause />
        <OuterP>
          We finish off the diagram by setting the
          hypotenuse of the original big triangle to
          have length {" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/1jEs.svg" />
        <Pause />
        <OuterP>
          This completes the diagram. Note that it is
          possible for the sum of {" "}
          <Math>
            $\theta_1$
          </Math>
          {" "} and {" "}
          <Math>
            $\theta_2$
          </Math>
          {" "}
          to be greater than {" "}
          <NoBreak>
            <Math>
              $\eta$
            </Math>
            ...
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/G2n-.svg" />
        <Pause />
        <OuterP>
          ...but, by construction, {" "}
          <Math>
            $\theta_1$
          </Math>
          {" "} and
          {" "}
          <Math>
            $\theta_2$
          </Math>
          {" "} are individually in the range from
          {" "}
          <Math>
            $0$
          </Math>
          {" "} to {" "}
          <NoBreak>
            <Math>
              $\eta$
            </Math>
            .
          </NoBreak>
          {" "} (Being “proper angles” of right
          triangles.) (You can now contemplate what the
          “utility” of the diagram might be!)
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-15">
        <OuterP>
          <b>
            The Abercrombie inequality.
          </b>
          {" "}
          Take an ordinary angle of aperture less than
          {" "}
          <Math>
            $180^\circ\hlfbk$
          </Math>
          {" "} with a circular arc drawn
          inside and a line segment spanning the two
          sides of the angle, clearing the arc:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/dXdk.svg" />
        <Pause />
        <OuterP>
          The eponymous
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          Abercrombie inequality
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          states that
          the length of the arc is less than or equal to the length of the segment, i.e., that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          A\leq S
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          where {" "}
          <Math>
            $A$
          </Math>
          {" "} is the length of the arc and {" "}
          <Math>
            $S$
          </Math>
          {" "} is
          the length of the segment, as in the figure.
        </OuterP>
        <OuterP class="indent-10">
          The proof is that, if this were not the case,
          the length {" "}
          <Math>
            $S$
          </Math>
          {" "} of the segment would lie to left of the
          length {" "}
          <Math>
            $A$
          </Math>
          {" "} of the arc on the number line...
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/KxqB.svg" />
        <Pause />
        <OuterP>
          ...and in the space between {" "}
          <Math>
            $S$
          </Math>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $A$
            </Math>
            ,
          </NoBreak>
          {" "} we could then
          find the length {" "}
          <Math>
            $P$
          </Math>
          {" "} of a polygonal line
          approximating the arc...
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/0Mwx.svg" />
        <Pause />
        <OuterP>
          ...because such polygonal lines can
          approximate the arc arbitrarily closely, i.e.,
          have lengths that come arbitrarily close to
          {" "}
          <NoBreak>
            “
            <Math>
              $A$
            </Math>
            ”
          </NoBreak>
          {" "} on the number line from the left.
          (This constitutes our “axiomatic” belief
          about the  nature of curved length.) But this
          will be a contradiction, because we claim
          that each segment of the polygonal line has
          length less than its corresponding “shadow”
          on the segment of length {" "}
          <NoBreak>
            <Math>
              $S$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/Vx2_.svg" />
        <Pause />
        <OuterP>
          This last claim follows from the following
          diagram:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/onjp.svg" />
        <Pause />
        <OuterP>
          The point is that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \overline&#123;s_1s_2&#125;\, &gt; \,\overline&#123;p_1p_2&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          because {" "}
          <Math>
            $s_1$
          </Math>
          {" "} and {" "}
          <Math>
            $s_2$
          </Math>
          {" "} are separated by a
          pair of parallel lines that are at distance
          {" "}
          <Math>
            $\overline&#123;p_1p_2&#125;$
          </Math>
          {" "} from one another, and
          because at least one of {" "}
          <NoBreak>
            <Math>
              $s_1$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $s_2$
          </Math>
          {" "} is
          not on either of the parallel lines (or else
          we would have {" "}
          <NoBreak>
            <Math>
              $s_1 = p_1$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $s_2 = p_2$
            </Math>
            ,
          </NoBreak>
          {" "} and
          the segment {" "}
          <Math>
            $s_1s_2$
          </Math>
          {" "} would not clear the arc).
        </OuterP>
        <OuterP class="indent-10">
          Therefore, each segment of {" "}
          <Math>
            $P$
          </Math>
          {" "} has length
          less than its corresponding “shadow segment”
          on the crossover segment of length {" "}
          <NoBreak>
            <Math>
              $S$
            </Math>
            ,
          </NoBreak>
          {" "} from
          which {" "}
          <NoBreak>
            <Math>
              $S &gt; P$
            </Math>
            ,
          </NoBreak>
          {" "} from which this arrangement
          of values...
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/2Fam.svg" />
        <Pause />
        <OuterP>
          ...on the number line is 
          false—we have achieved a so-called {" "}
          <i>
            contradiction
          </i>
          —from
          which this original arrangement of values...
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/dTqx.svg" />
        <Pause />
        <OuterP>
          ...on the number line is an impossibility,
          i.e., it must be that {" "}
          <NoBreak>
            <Math>
              $S \geq A$
            </Math>
            .
          </NoBreak>
          {" "}
          This constitutes the proof of the Abercrombie
          inequality.
        </OuterP>
        <OuterP class="indent-10">
          One can polish a few more details by noting that:
        </OuterP>
        <Pause />
        <List
          type="lower-roman-paren"
          markerBold={true}
          style="gap: 1em;"
        >
          <Item>
            <p>
              the segment can be tangent to the
              arc at one point, the proof will still go
              through (so the segment does not need to
              {" "}
              <i>
                strictly
              </i>
              {" "} clear the arc);
            </p>
          </Item>
          <Item>
            <p>
              as long as the angle is nonzero,
              and the arc has nonzero radius, the
              length of the segment will be STRICTLY
              GREATER than the length of the arc,
              not just greater-or-equal-to
            </p>
          </Item>
        </List>
        <Pause />
        <OuterP>
          (Point {" "}
          <b>
            (ii)
          </b>
          {" "} can be seen by
          comparing the segment to a two-segment
          assemblage that is shorter than the segment
          itself, but still-as-long-as-the-arc, by virtue
          of the original inequality.)
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-16">
        <OuterP>
          <b>
            The Gregorinovich sandwich.
          </b>
          {" "}
          The “Gregorinovich sandwich”—sometimes
          Gr
          <i>
            i
          </i>
          gorinovich—states that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(\theta) \,&lt;\, \theta \,&lt;\, &#123;\sin(\theta)\over\cos(\theta)&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for all {" "}
          <NoBreak>
            <Math>
              $0 &lt; \theta &lt; \eta$
            </Math>
            .
          </NoBreak>
          {" "}
          The Gregorinovich sandwich is so-called because
          it “sandwiches” {" "}
          <Math>
            $\theta$
          </Math>
          {" "}
          between
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          below, and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\sin(\theta)\over\cos(\theta)&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          above. (Indeed,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\sin(\theta)\over\cos(\theta)&#125; &gt; \sin(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          in the range {" "}
          <Math>
            $0 &lt; \theta &lt; \eta$
          </Math>
          {" "}
          because dividing by
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          makes you
        </OuterP>
        <Pause />
        <CentralDisplay>
          BIGGER
        </CentralDisplay>
        <Pause />
        <OuterP>
          when {" "}
          <NoBreak>
            <Math>
              $0 &lt; \cos(\theta) &lt; 1$
            </Math>
            ,
          </NoBreak>
          {" "} which is the case
          for {" "}
          <NoBreak>
            <Math>
              $0 &lt; \theta &lt; \eta$
            </Math>
            —in
          </NoBreak>
          {" "} fact, dividing by
          {" "}
          <Math>
            $\cos(\theta)$
          </Math>
          {" "} will make you
        </OuterP>
        <Pause />
        <CentralDisplay>
          DRAMATICALLY BIGGER
        </CentralDisplay>
        <Pause />
        <OuterP>
          when {" "}
          <Math>
            $\cos(\theta)$
          </Math>
          {" "} is close to {" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            ,
          </NoBreak>
          {" "} which is the
          case when {" "}
          <Math>
            $\theta$
          </Math>
          {" "} is close to {" "}
          <NoBreak>
            <Math>
              $\eta$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $0 &lt; \theta &lt; \eta$
            </Math>
            .)
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          The first inequality
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(\theta) \rt&#123;0.1&#125;&lt;\rt&#123;0.1&#125; \theta
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          follows by this illustration (using {" "}
          <NoBreak>
            <Math>
              $0 &lt; \theta &lt; \eta$
            </Math>
            ):
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/wtkr.svg" />
        <Pause />
        <OuterP>
          Namely, per the one slightly pedantic logic,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \theta &gt; L
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          on the one hand, where {" "}
          <Math>
            $L$
          </Math>
          {" "} is the length of
          the dotted chord, and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          L &gt; \sin(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          on the other hand. Together, this implies
          {" "}
          <NoBreak>
            <Math>
              $\theta \rt&#123;0.1&#125;&gt;\rt&#123;0.1&#125; \sin(\theta)$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          For the second inequality, we have to start
          by noting that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\sin(\theta)\over \cos(\theta)&#125; = &#123;1\over \cos(\theta)&#125;\cdot \sin(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is the length that {" "}
          <Math>
            $\theta$
          </Math>
          {" "} projects onto
          the line {" "}
          <NoBreak>
            <Math>
              $x = 1$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/HxgB.svg" />
        <Pause />
        <OuterP>
          Specifically,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;1\over \cos(\theta)&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          turns the bottom segment of length {" "}
          <Math>
            $1$
          </Math>
          {" "}
          into the pink hypotenuse, because just as ‘cos’
          is the hypotenuse-to-adjacent multiplicative
          factor, so is {" "}
          <NoBreak>
            ‘
            <Math>
              $1/\!\cos$
            </Math>
            ’
          </NoBreak>
          {" "} the adjacent-to-hypotenuse
          multiplicative factor (don't be confused by the
          presence of two possible triangles to which
          this can be applied); then,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          brings one over to the right-hand segment
          from the pink hypotenuse, being the
          hypotenuse-to-opposite multiplicative
          factor.
        </OuterP>
        <OuterP class="indent-10">
          The fact that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\theta&#125; \rt&#123;0.1&#125;&lt;\rt&#123;0.1&#125; &#123;\sin(\theta)\over \cos(\theta)&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          then follows from the “polished” version
          of the Abercrombie inequality. (The version
          that allows the segment to be tangent to the
          arc, and that claims a strict inequality.)
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-17">
        <OuterP>
          <b>
            The angle-sum formulas.
          </b>
          {" "}
          In the “famous diagram” from above there
          are a total of four different ways to
          reach an outer edge by means of ‘cos’
          and ‘sin’ arrows while starting from the
          edge of length {" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            ,
          </NoBreak>
          {" "} reaching each of the
          four other outer edges precisely once:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/pFL0.svg" />
        <Pause />
        <OuterP>
          (Note by the way that {" "}
          <NoBreak>
            <Math>
              $0 \leq \theta_1 \leq \eta$
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <Math>
            $0 \leq \theta_2 \leq \eta$
          </Math>
          {" "} because of
          the way the figure is constructed, which
          implies that {" "}
          <NoBreak>
            <Math>
              $\sin(\theta_1\!\rt&#123;0.1&#125;)$
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <NoBreak>
            <Math>
              $\cos(\theta_1\!\rt&#123;0.1&#125;)$
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <Math>
            $\sin(\theta_2\!\rt&#123;0.1&#125;)$
          </Math>
          {" "} and {" "}
          <Math>
            $\cos(\theta_2\!\rt&#123;0.1&#125;)$
          </Math>
          {" "}
          are all nonnegative, and that all their
          products are nonnegative, as well.)
        </OuterP>
        <OuterP class="indent-10">
          On the other hand, if we inscribe the
          figure in the unit circle with the joint angle
          {" "}
          <Math>
            $\theta_1 + \theta_2$
          </Math>
          {" "} at the center, we find that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \,\sin(\theta_1 + \theta_2)\,
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \,\cos(\theta_1 + \theta_2)\,
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          make an appearance as coordinates, and
          that these coordinates can be expressed as
          sums or differences of the four outer edges:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/C7FC.svg" />
        <Pause />
        <OuterP>
          (Or with {" "}
          <NoBreak>
            <Math>
              $\theta_1 + \theta_2 &gt; \eta$
            </Math>
            ...
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/cixf.svg" />
        <Pause />
        <OuterP>
          ...works as well!)
        </OuterP>
        <OuterP class="indent-10">
          In other words, we find...
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/FJxQ.svg" />
        <Pause />
        <OuterP>
          ...for {" "}
          <Math>
            $\theta_1$
          </Math>
          {" "} and {" "}
          <Math>
            $\theta_2$
          </Math>
          {" "} as may
          appear in such a figure, i.e., for
          {" "}
          <NoBreak>
            <Math>
              $0 \leq \theta_1, \theta_2 \leq \eta$
            </Math>
            .
          </NoBreak>
          {" "} In
          fact, these two formulas hold for {" "}
          <i>
            all
          </i>
          {" "}
          {" "}
          <NoBreak>
            <Math>
              $\theta_1$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $\theta_2 \in \rr$
            </Math>
            .
          </NoBreak>
          {" "} They are
          known as the {" "}
          <i>
            angle-sum formulas
          </i>
          . Also
          note the “pattern” of the angle-sum formulas:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/3BtA.svg" />
        <Pause />
        <OuterP>
          The point of remembering these patterns
          is that, on their own, these patterns are
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          enough
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          to reconstruct the full formulas from scratch!
          (Well, a lot of students remember the formulas
          that way, at least.)
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-18">
        <OuterP>
          <b>
            The missing arrows.
          </b>
          {" "}
          ‘sin’ and ‘cos’ only constitute two out
          of six ratios that exist among the sides
          of a right triangle. The four “missing ratios”
          are hereby drawn:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/sa0S.svg" />
        <Pause />
        <OuterP>
          In fact, there is a dedicated, named function
          that computes each of the six ratios. We shall
          now reveal the names of the four missing
          functions (!!):
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/wra-.svg" />
        <Pause />
        <OuterP>
          Here
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
          To be clear, multiplying by
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sec(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          takes you from ‘adjacent’ to ‘hypotenuse’, multiplying by
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \csc(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          takes you from ‘opposite’ to ‘hypotenuse’, multiplying by
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \tan(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          takes you from ‘adjacent’ to ‘opposite’,
          and multiplying by
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cot(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          takes you from ‘opposite’ to ‘adjacent’. (!)
        </OuterP>
        <OuterP class="indent-10">
          You may observe that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sec = &#123;1\over \cos&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \csc = &#123;1\over \sin&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          as multiplying by ‘cos’ undoes the work
          of multiplying by ‘sec’, and likewise for
          ‘sin’ and ‘csc’; also,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \,\tan = &#123;1\over \cot&#125;,
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \cot = &#123;1\over \tan&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          modulo the fact that {" "}
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
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \cot \,=\, \csc \cdot \cos \,\,=\,\, &#123;\cos\!\!\!\!\phantom&#123;1&#125;\over \sin&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          since one way to reach ‘opposite’ from
          ‘adjacent’ is to go via ‘hypotenuse’, and
          vice-versa for reaching ‘adjacent’ from
          ‘opposite’. (In fact, the next-to-last
          identity played a role in our proof of the
          Gregorinovich sandwich.) (Indeed,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(\theta) &lt; \theta &lt; \tan(\theta)\rt&#123;0.1&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is another way of writing the Grigorinovich
          sandwich.)
        </OuterP>
        <Pause />
        <Example id="_84_hgi_">
          <OuterP>
            <b>
              Example 6.
            </b>
            {" "}
            If the Earth [is modeled as] a sphere
            of radius {" "}
            <Math>
              $1$
            </Math>
            {" "} then, as stands to reason, the circle
            of latitude {" "}
            <Math>
              $\theta$
            </Math>
            {" "} has radius {" "}
            <NoBreak>
              <Math>
                $\cos(\theta)$
              </Math>
              :
            </NoBreak>
          </OuterP>
          <Pause />
          <Image
            width="480px"
            src="/build-img/svgo-svg/_wct.svg"
          />
          <Pause />
          <OuterP>
            [Example {" "}
            <InChapterLink
              href="/article/chapter5#_84_hgi_"
              class="handle-in-chapter-link"
            >
              6
            </InChapterLink>
            {" "} continued.] In particular, this means that 
            in any cylindrical
            projection** of the Earth, such as the
            “Lambert projection” depicted below
            (that just sends each latitude out to
            its own height), the radius of a latitude is dilated
            by [a factor of] {" "}
            <NoBreak>
              <Math>
                $\sec(\theta)$
              </Math>
              :
            </NoBreak>
          </OuterP>
          <Pause />
          <Image
            width="480px"
            src="/build-img/svgo-svg/ZWuF.svg"
            style="margin-bottom:-1em"
          />
          <Pause />
          <OuterP>
            ...because...
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Huge \sec(\theta)\cdot\cos(\theta) = 1
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            ...which means that {" "}
            <NoBreak>
              “
              <Math>
                $\sec(\theta)$
              </Math>
              ”
            </NoBreak>
            {" "}
            is the correct multiplicative factor
            to take the Earth-radius to the
            cylinder-radius. 
            (Or just
            think of the fact that {" "}
            <NoBreak>
              <Math>
                $1/\cos(\theta) = \sec(\theta)$
              </Math>
              ,
            </NoBreak>
            {" "}
            dividing one radius by the other.)
          </OuterP>
        </Example>
        <Pause />
        <OuterP>
          <b>
            **Vocabulary.
          </b>
          {" "} A (so-called
          {" "}
          <i>
            normal
          </i>
          ) {" "}
          <i>
            cylindrical projection
          </i>
          {" "}
          is a projection that maps the Earth to
          a vertical cylinder abutting the Earth at the
          equator while sending each latitude of the
          Earth to a circle on the cylinder, etc;
          besides the Lambert projection depicted
          above, two more examples are the {" "}
          <i>
            central
            cylindrical projection
          </i>
          {" "} and the
          {" "}
          <i>
            plate carée
          </i>
          :
        </OuterP>
        <Pause />
        <Image
          width="1300px"
          src="/build-img/svgo-svg/sA2I.svg"
        />
        <Pause />
        <OuterP>
          (In the plate carée, at right, 
          longitudes are “unrolled” onto the cylinder,
          which preserves north-south distances.)
        </OuterP>
      </Section>
      <Pause />
      <Section
        work="ing"
        id="section-19"
      >
        <OuterP>
          <b>
            Note on calculators.
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
        </MathBlock>
        <Pause />
        <OuterP>
          is a number close to {" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            ,
          </NoBreak>
          {" "} instead of being
          a number close to {" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            ,
          </NoBreak>
          {" "} it means that your
          calculator is in “degree mode”—it has treated
          as {" "}
          <Math>
            $1.57$
          </Math>
          {" "} as a number of degrees, instead of
          as a number of radians! (Be sure, in any
          case, that you're in the mode that you want.)
        </OuterP>
      </Section>
      <Pause />
      <Exercises id="_118_hgi_">
        <Exercise number={1}>
          <ExerciseStatement id="_85_hgi_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              {" "}
              Which function is most plausibly associated to
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
                      $x \ra \cos^2(x)$
                    </Math>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0.5em 0;border-right:1px solid black">
                    <Math>
                      $x \ra \sin^2(x)$
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
            <Image src="/build-img/svgo-svg/huBu.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The culprits are:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/Ninz.svg" />
            <Pause />
            <OuterP>
              For reference (if you need help checking), the
              graphs of {" "}
              <Math>
                $\sin$
              </Math>
              {" "} and {" "}
              <Math>
                $\cos$
              </Math>
              {" "} are as follows:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/DrDG.svg" />
            <Pause />
            <Image src="/build-img/svgo-svg/s3Tk.svg" />
            <Pause />
            <OuterP>
              (Then imagine summing together, squaring, etc.)
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                It is, indeed, intriguing that all of these
                functions appear to be
                <i>
                  sinusoids
                </i>
                . (Formally defined
                as a function of the form {" "}
                <Math>
                  $x \ra A\cdot \sin(Bx + C) + D$
                </Math>
                {" "}
                for some constants {" "}
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
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise
          work="ing"
          number={2}
        >
          <ExerciseStatement id="_86_hgi_">
            <OuterP>
              <b>
                Exercise 2.
              </b>
              {" "}
              What is the angle marked ‘?’, as a function
              of {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ?
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/Vd8x.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              It is {" "}
              <NoBreak>
                <Math>
                  $\eta - \theta$
                </Math>
                .
              </NoBreak>
              {" "} (Since...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \theta + (\eta - \theta) + \eta = 2\eta
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...you know that's the right answer!) (Nb: {" "}
              <NoBreak>
                <Math>
                  $2\eta = 180^\circ$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                Two angles that sum to {" "}
                <Math>
                  $\eta$
                </Math>
                {" "} are
                called {" "}
                <i>
                  complementary
                </i>
                , with each angle being
                the {" "}
                <i>
                  complement
                </i>
                {" "} of the other.
                The two
                non-right angles of a right triangle are,
                therefore, complementary!
                (Not
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                complimentary
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                which would indicate that the angles are
                given to you for free—everything in math is
                free, not just those angles!)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise
          work="ing"
          number={3}
        >
          <ExerciseStatement id="_87_hgi_">
            <OuterP>
              <b>
                Exercise 3.
              </b>
              {" "}
              What is the angle marked ‘?’, as a function of
              {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ?
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/MXN9.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              It is {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ,
              </NoBreak>
              {" "} as well. One method of
              deduction uses the fact that “the complement
              of my complement is myself”:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/SIuZ.svg" />
            <Pause />
            <OuterP>
              Another method of deduction uses the fact that,
              together with the angle immediately to its left
              (which happens to be {" "}
              <NoBreak>
                <Math>
                  $\eta - \theta$
                </Math>
                ,
              </NoBreak>
              {" "} because
              it is the complement of {" "}
              <Math>
                $\theta$
              </Math>
              {" "} via the smallest
              right triangle present), the sought-for angle
              makes up {" "}
              <NoBreak>
                <Math>
                  $90^\circ$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/lswQ.svg" />
            <Pause />
            <OuterP>
              (In one case we use the fact that the
              medium-sized triangle is a right triangle,
              in another case that the smallest-size
              triangle is a right triangle—and in both cases
              that the original, largest triangle is a
              right triangle.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={4}>
          <ExerciseStatement id="_88_hgi_">
            <OuterP>
              <b>
                Exercise 4.
              </b>
              {" "}
              The graph {" "}
              <Math>
                $y = \cos(x) + \sin(x)$
              </Math>
              {" "} from {" "}
              <InChapterLink
                href="/article/chapter5#_85_hgi_"
                class="handle-in-chapter-link"
              >
                Exercise 1
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
            <Image src="/build-img/svgo-svg/TH1y.svg" />
            <Pause />
            <OuterP>
              What is this maximum value, and for which
              value(s) of {" "}
              <Math>
                $x$
              </Math>
              {" "} is it achieved?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The sum
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x + y
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              where
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x, y)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is a point in {" "}
              <Math>
                $\rr^2$
              </Math>
              {" "} can be understood as a
              certain vertical displacement added to a
              certain horizontal displacement, but where
              the sum is numerical. (Not vectorial.)
              To realize the sum geometrically we must
              either align the vertical displacement to be
              horizontal, or else align the horizontal
              displacement to be vertical:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/P2nU.svg"
              style="background-color:#fdfdfd"
            />
            <Pause />
            <OuterP>
              Either way, the upshot is that the sum
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x + y
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              can be found as the intersection of a line of
              angle {" "}
              <Math>
                $-45^\circ$
              </Math>
              {" "} through the point {" "}
              <Math>
                $(x, y)$
              </Math>
              {" "}
              with either the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -
              </NoBreak>
              {" "} or {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -axis:
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/Ocj9.svg" />
            <Pause />
            <OuterP>
              (By the way: when we say “line of angle
              {" "}
              <NoBreak>
                <Math>
                  $-45^\circ$
                </Math>
                ”
              </NoBreak>
              {" "} we refer to the standard position
              of {" "}
              <Math>
                $-45^\circ$
              </Math>
              {" "} on the unit circle, and, more
              specifically, to a line that is parallel
              to a line going through {" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "} and that standard
              position.)
            </OuterP>
            <OuterP class="indent-10">
              To add a little imagery, if we make a heatmap
              of {" "}
              <Math>
                $\rr^2$
              </Math>
              {" "} according to the value of the coordinate
              sum...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x + y
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...over all points {" "}
              <Math>
                $(x, y)$
              </Math>
              {" "} we will obtain diagonal
              bands of slope {" "}
              <NoBreak>
                <Math>
                  $-1$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/AlsP.svg" />
            <Pause />
            <OuterP>
              If we are confined to some region of the plane
              and we need to find a point that maximizes the
              coordinate sum we must go as far up and to the
              right as possible, towards brown—whereas
              to minimize the sum we must go as far down and
              to the left as possible, towards purple!
            </OuterP>
            <OuterP class="indent-10">
              Having said this,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(x) + \sin(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              can be interpreted as the sum of the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -
              </NoBreak>
              {" "} and
              {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinates
              </NoBreak>
              {" "} of the point
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (\cos(x), \sin(x))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              that is a point on the unit circle. In other words,
              the unit circle is “the region of the plane” (cf.
              previous paragraph) to which we are confined—we
              must choose a value of {" "}
              <Math>
                $x$
              </Math>
              {" "} that puts us as far
              “up and to the right” as possible on the circle.
              That value is... {" "}
              <Math>
                $x = \eta/2$
              </Math>
              {" "} (!!!!):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/-wma.svg" />
            <Pause />
            <OuterP>
              ...or with any multiple of {" "}
              <Math>
                $4\eta$
              </Math>
              {" "} added,
              making the set of solutions {" "}
              <Math>
                $x$
              </Math>
              {" "} actually equal to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \&#123;\eta/2 + 4\eta&#123;&#125;k : k \in \zz\&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (to be read {" "}
              <NoBreak>
                “
                <Math>
                  $\eta/2$
                </Math>
              </NoBreak>
              {" "} plus any multiple of {" "}
              <NoBreak>
                <Math>
                  $4\eta$
                </Math>
                ”)
              </NoBreak>
              {" "}
              (*or: “the {" "}
              <i>
                set of
              </i>
              {" "} values of the form {" "}
              <NoBreak>
                <Math>
                  $\eta/2$
                </Math>
                ,
              </NoBreak>
              {" "}
              plus any multiple of {" "}
              <NoBreak>
                <Math>
                  $4\eta$
                </Math>
                ”).
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              The actual value of {" "}
              <Math>
                $\cos(x) + \sin(x)$
              </Math>
              {" "} achieved
              at this point is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large
              \begin&#123;aligned&#125;
                &amp;\,\, \cos(\eta/2) + \sin(\eta/2)\\
               =&amp;\,\,\up&#123;1.5&#125;  \sqrt&#123;0.5&#125; + \sqrt&#123;0.5&#125;\\ =&amp;\,\,\up&#123;1.5&#125; \sqrt&#123;2&#125;
              \end&#123;aligned&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              using the fact that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \cos(\eta/2) = \sin(\eta/2) = \sqrt&#123;0.5&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \sqrt&#123;0.5&#125; = &#123;\sqrt&#123;2&#125; \over 2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (cf. Exercise 1, Chapter 1).
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                The fact that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large \cos(\eta/2) + \sin(\eta/2) = \sqrt&#123;2&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                can also be seen from this diagram...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/spaK.svg" />
              <Pause />
              <OuterP>
                ...which is an application of the Pythagorean
                theorem. (In the above, {" "}
                <NoBreak>
                  <Math>
                    $x_0 = \cos(\eta/2)$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                {" "}
                <NoBreak>
                  <Math>
                    $y_0 = \sin(\eta/2)$
                  </Math>
                  ,
                </NoBreak>
                {" "} and the sum is seen to be
                {" "}
                <NoBreak>
                  <Math>
                    $\sqrt&#123;1^2 + 1^2&#125; = \sqrt&#123;2&#125;$
                  </Math>
                  .)
                </NoBreak>
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                On the original graph from the statement, the
                {" "}
                <NoBreak>
                  <Math>
                    $y$
                  </Math>
                  -value
                </NoBreak>
                {" "} of the maximum is therefore
                {" "}
                <NoBreak>
                  <Math>
                    $y = \sqrt&#123;2&#125;$
                  </Math>
                  ,
                </NoBreak>
                {" "} attained at {" "}
                <NoBreak>
                  <Math>
                    $x = \eta/2$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                {" "}
                <NoBreak>
                  <Math>
                    $x = 9\eta/2$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $x = -7\eta/2$
                  </Math>
                  ,
                </NoBreak>
                {" "} etc:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/PaSr.svg" />
              <Pause />
              <OuterP>
                (Note that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large &#123;\eta\over 2&#125; + 4\eta = &#123;\eta\over 2&#125; + &#123;8\eta\over 2&#125; = &#123;9\eta\over 2&#125;
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \Large
                &#123;\eta\over 2&#125; - 4\eta = &#123;\eta\over 2&#125; - &#123;8\eta\over 2&#125; = -&#123;7\eta\over 2&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and, in general, the numerators of these fractions
                will be some multiple of {" "}
                <Math>
                  $8\eta$
                </Math>
                {" "} apart.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise
          work="ing"
          number={5}
        >
          <ExerciseStatement id="_89_hgi_">
            <OuterP>
              <b>
                Exercise 5.
              </b>
              {" "}
              Argue that, in the following figure, the
              angle marked ‘?’ equals {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ,
              </NoBreak>
              {" "} the angle at
              the center of the circle:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/XRFw.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The ending and starting half-lines of the
              angle marked ‘?’ are both {" "}
              <Math>
                $90^\circ$
              </Math>
              {" "} counterclockwise
              from the ending and starting half-lines,
              respectively, of the central angle:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/wC_h.svg" />
            <Pause />
            <OuterP>
              The angle marked ‘?’ is therefore obtained
              by a {" "}
              <Math>
                $90^\circ$
              </Math>
              {" "} rotation (and then translation)
              of the central angle, and is, therefore, equal
              to the central angle {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                This holds no matter which quadrant we
                push {" "}
                <Math>
                  $\theta$
                </Math>
                {" "} to:
              </OuterP>
              <Pause />
              <Image src="/tmp-images/svg_ch5_ex_tangent_angle_explanation_other_quadrants_machine_version.svg" />
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                Here is an attempt at verbalization:
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                the counterclockwise angle from the positive
                {" "}
                <Math>
                  $x$
                </Math>
                {" "} axis to
                the radial vector [of angle {" "}
                <NoBreak>
                  <Math>
                    $\theta$
                  </Math>
                  ]
                </NoBreak>
                {" "}
                equals the counterclockwise angle from the positive
                {" "}
                <Math>
                  $y$
                </Math>
                {" "} axis to the counterclockwise tangent [of angle {" "}
                <NoBreak>
                  <Math>
                    $\theta$
                  </Math>
                  ]
                </NoBreak>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                ...where we sort of made up the terms “radial vector”
                and “counterclockwise tangent” to suit our
                momentary needs, but anyway, it was just an attempt!
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={6}>
          <ExerciseStatement id="_90_hgi_">
            <OuterP>
              <b>
                Exercise 6.
              </b>
              {" "}
              Express {" "}
              <Math>
                $A/B$
              </Math>
              {" "} as a function of {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/WqQR.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              We shall use the height {" "}
              <Math>
                $C$
              </Math>
              {" "} of the triangle
              as a stopover between {" "}
              <Math>
                $A$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/1KiR.svg" />
            <Pause />
            <OuterP>
              On the one hand, {" "}
              <NoBreak>
                <Math>
                  $C/B = \tan(\theta)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/DU_p.svg" />
            <Pause />
            <OuterP>
              On the other hand, {" "}
              <Math>
                $A/C = \tan(\theta)$
              </Math>
              {" "}
              also, by the result of Exercise 19 (whereby
              {" "}
              <Math>
                $\theta$
              </Math>
              {" "} reappears as the top left angle of
              the middle-sized right triangle):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/OHG8.svg" />
            <Pause />
            <OuterP>
              The answer is therefore:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \tan(\theta)\cdot\tan(\theta) = \tan^2(\theta).
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (As per the fact that {" "}
              <NoBreak>
                <Math>
                  $(A/B) = (C/B)\cdot(A/C)$
                </Math>
                .)
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={7}>
          <ExerciseStatement id="_91_hgi_">
            <OuterP>
              <b>
                Exercise 7.
              </b>
              {" "}
              Express {" "}
              <Math>
                $A/B$
              </Math>
              {" "} as a function of {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/8gZl.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Here are two solutions:
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Solution 1.
              </i>
              {" "} We use the small leg {" "}
              <Math>
                $D$
              </Math>
              {" "}
              of the triangle as a stopover between {" "}
              <Math>
                $A$
              </Math>
              {" "} and
              {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/0rFq.svg" />
            <Pause />
            <OuterP>
              On the one hand, {" "}
              <NoBreak>
                <Math>
                  $D/B = \sec(\theta)\,\, (= 1/\cos(\theta))$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/xVQI.svg" />
            <Pause />
            <OuterP>
              On the other hand, {" "}
              <NoBreak>
                <Math>
                  $A/D = \sec(\theta)$
                </Math>
                ,
              </NoBreak>
              {" "} also (!?):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/4_JC.svg" />
            <Pause />
            <OuterP>
              Thus:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;A\over B&#125; = &#123;D\over B&#125;\times &#123;A\over D&#125; = \sec(\theta)\cdot \sec(\theta) = \sec^2(\theta).
              $$
            </MathBlock>
            <Pause />
            <StarDivider style="margin-top:0.5em;" />
            <Pause />
            <OuterP>
              <i>
                Solution 2.
              </i>
              {" "}
              We decompose {" "}
              <Math>
                $A$
              </Math>
              {" "} as {" "}
              <Math>
                $B + A'$
              </Math>
              {" "}
              where {" "}
              <Math>
                $A' = B - A$
              </Math>
              {" "} is the “old {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ”
              </NoBreak>
              {" "} from
              Exercise 22:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/YcZS.svg" />
            <Pause />
            <OuterP>
              We find:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;A\over B&#125; = &#123;&#123;B + A'&#125;\over B&#125; = &#123;B\over B&#125; + &#123;A'\over B&#125; = 1 + \tan^2(\theta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;A'\over B&#125; = \tan^2(\theta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by Exercise 22. (The End.)
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                Since the two solutions compute
                answers to the same question,
                one can in particular deduce that
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  \sec^2(\theta) = 1 + \tan^2(\theta)
                  $$
                </MathBlock>
              </Boxed>
              <OuterP>
                for all {" "}
                <NoBreak>
                  <Math>
                    $0 &lt; \theta &lt; \eta$
                  </Math>
                  ,
                </NoBreak>
                {" "} which is
                the range of {" "}
                <Math>
                  $\theta$
                </Math>
                {" "} covered by these
                diagrams. (The same identity holds more
                generally than just those {" "}
                <NoBreak>
                  <Math>
                    $\theta$
                  </Math>
                  's,
                </NoBreak>
                {" "}
                however.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={8}>
          <ExerciseStatement id="_92_hgi_">
            <OuterP>
              <b>
                Exercise 8.
              </b>
              {" "}
              In general, {" "}
              <Math>
                $\sec(\theta)$
              </Math>
              {" "} and {" "}
              <Math>
                $\tan(\theta)$
              </Math>
              {" "}
              are defined for all {" "}
              <Math>
                $\theta$
              </Math>
              {" "} such that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(\theta) \ne 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              with the definitions being...
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                \,\tan(\theta) = &#123;\sin(\theta)\over \cos(\theta)&#125;\,
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \,\sec(\theta) = &#123;1\over \cos(\theta)&#125;\,
                $$
              </MathBlock>
            </Boxed>
            <OuterP>
              ...for all {" "}
              <NoBreak>
                <Math>
                  $\theta \in \rr$
                </Math>
                .
              </NoBreak>
              {" "} (I.e., if the fraction is undefined,
              then the function is undefined.)
              Use these definitions
              to prove that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              1 + \tan^2(\theta) = \sec^2(\theta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for all
              {" "}
              <NoBreak>
                <Math>
                  $\theta \in \dom \tan = \dom \sec$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Let {" "}
              <NoBreak>
                <Math>
                  $\theta \in \dom \tan = \dom \sec$
                </Math>
                .
              </NoBreak>
              {" "} Then
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(\theta) \ne 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              1 = &#123;\cos(\theta)\over \cos(\theta)&#125; = &#123;\cos^2(\theta)\over \cos^2(\theta)&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and, by the definitions,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              1 + \tan^2(\theta)
              \,\,&amp;=\,\, 1 + \left(&#123;\sin(\theta)\over \cos(\theta)&#125;\right)^&#123;\!2&#125; \\
              &amp;=\,\, \up&#123;2&#125; &#123;\cos^2(\theta)\over \cos^2(\theta)&#125; + &#123;\sin^2(\theta)\over \cos^2(\theta)&#125; \\
              &amp;=\,\, \up&#123;2&#125; &#123;\cos^2(\theta) + \sin^2(\theta)\over \cos^2(\theta)&#125; \\
              &amp;=\,\, \up&#123;2&#125; &#123;1\over \cos^2(\theta)&#125; \\
              &amp;=\,\, \up&#123;2&#125; \left(&#123;1\over \cos(\theta)&#125;\right)^&#123;\!2&#125; \\
              &amp;=\,\, \up&#123;2&#125; \sec^2(\theta)
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              using the pythagorean identity in the fourth step.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={9}>
          <ExerciseStatement id="_93_hgi_">
            <OuterP>
              <b>
                Exercise 9.
              </b>
              {" "}
              Run the computation of the
              previous exercise backwards, starting with
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sec^2(\theta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              at the near end, and ending with
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              1 + \tan^2(\theta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              at the far end. (No peeking back at the solution of
              that exercise.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Viz:
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                \begin&#123;align&#125;
                \sec^2(\theta)
                \,\,&amp;=\,\, &#123;1\over \cos^2(\theta)&#125; \\
                &amp;=\,\, \up&#123;2&#125; &#123;\cos^2(\theta) + \sin^2(\theta)\over \cos^2(\theta)&#125; \\
                &amp;=\,\, \up&#123;2&#125; &#123;\cos^2(\theta)\over \cos^2(\theta)&#125; + &#123;\sin^2(\theta)\over \cos^2(\theta)&#125; \\
                &amp;=\,\, \up&#123;2&#125; 1 + \left(&#123;\sin(\theta)\over \cos(\theta)&#125;\right)^&#123;\!2&#125; \\
                &amp;=\,\, \up&#123;2&#125;1 + \tan^2(\theta).
                \end&#123;align&#125;
                $$
              </MathBlock>
            </Boxed>
            <OuterP>
              (Ta-daa!) (It's slightly harder in this
              direction, when you have to think of
              turning the {" "}
              <NoBreak>
                “
                <Math>
                  $1$
                </Math>
                ”
              </NoBreak>
              {" "} into {" "}
              <NoBreak>
                “
                <Math>
                  $\cos^2(\theta) + \sin^2(\theta)$
                </Math>
                ”,
              </NoBreak>
              {" "}
              instead of the other way around.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={10}>
          <ExerciseStatement id="_94_hgi_">
            <OuterP>
              <b>
                Exercise 10.
              </b>
              {" "}
              Below are four function compositions
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
            <Image src="/build-img/svgo-svg/hzK8.svg" />
            <Pause />
            <OuterP>
              Rewrite each case:
            </OuterP>
            <Pause />
            <List
              type="lower-alpha-paren"
              markerBold={true}
              style="gap:0.2em;padding-left:2em;"
            >
              <Item>
                <p>
                  using the composition {" "}
                  <NoBreak>
                    “
                    <Math>
                      $\circ$
                    </Math>
                    ”
                  </NoBreak>
                  {" "} operator;
                </p>
              </Item>
              <Item>
                <p>
                  as an expression of the form
                </p>
                <Pause />
                <MathBlock>
                  $$
                  x \ra \dots
                  $$
                </MathBlock>
                <Pause />
                <p>
                  for some value of {" "}
                  <NoBreak>
                    “
                    <Math>
                      $\dots$
                    </Math>
                    ”.
                  </NoBreak>
                </p>
              </Item>
            </List>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <b>
                (a)
              </b>
              {" "}
              The expressions are respectively...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f  \circ (u \ra u + A)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              f  \circ (z \ra Bz)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              (u \ra u + A)\circ f
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              (z \ra Bz)\circ f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...but where the dummy variables don't matter,
              so we might as well write...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f  \circ (t \ra t + A)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              f  \circ (t \ra Bt)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              (t \ra t + A)\circ f
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              (t \ra Bt)\circ f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...or...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f  \circ (x \ra x + A)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              f  \circ (x \ra Bx)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              (x \ra x + A)\circ f
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              (x \ra Bx)\circ f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...etc. (All are correct.)
            </OuterP>
            <Pause />
            <OuterP>
              <b>
                (b)
              </b>
              {" "}
              The expressions are respectively:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra f(x + A)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              x \ra f(Bx)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              x \ra f(x) + A
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              x \ra Bf(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...where we use {" "}
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
        <Exercise number={11}>
          <ExerciseStatement id="_95_hgi_">
            <OuterP>
              <b>
                Exercise 11.
              </b>
              {" "}
              How would the graph of each of the compositions
              from {" "}
              <InChapterLink
                href="/article/chapter5#_94_hgi_"
                class="handle-in-chapter-link"
              >
                Exercise 10
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
              For reference, the four functions are:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \te&#123;1.&#125;\,\, x \ra f(x + A)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \te&#123;2.&#125;\,\, x \ra f(Bx)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \te&#123;3.&#125;\,\, x \ra f(x) + A
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \te&#123;4.&#125;\,\, x \ra Bf(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              For which the graphs are respectively obtained by:
            </OuterP>
            <Pause />
            <List
              type="decimal"
              style="padding-left: 2em;"
            >
              <Item>
                <p>
                  horizontally translating the graph of {" "}
                  <Math>
                    $f$
                  </Math>
                  {" "} by {" "}
                  <Math>
                    $A$
                  </Math>
                  {" "} units to the left;
                </p>
              </Item>
              <Item>
                <p>
                  horizontally compressing the graph of {" "}
                  <Math>
                    $f$
                  </Math>
                  {" "} by a factor {" "}
                  <NoBreak>
                    <Math>
                      $B$
                    </Math>
                    ;
                  </NoBreak>
                </p>
              </Item>
              <Item>
                <p>
                  vertically translating the graph of {" "}
                  <Math>
                    $f$
                  </Math>
                  {" "} by {" "}
                  <Math>
                    $A$
                  </Math>
                  {" "} units upward;
                </p>
              </Item>
              <Item>
                <p>
                  vertically dilating (scaling) the graph of {" "}
                  <Math>
                    $f$
                  </Math>
                  {" "} by a factor {" "}
                  <NoBreak>
                    <Math>
                      $B$
                    </Math>
                    .
                  </NoBreak>
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              (Cf. Exercise 7 of {" "}
              <NoBreak>
                <a
                  href="/article/chapter3#_54_hgi_"
                  class="handle-out-chapter-link"
                >
                  Chapter 3
                </a>
                ,
              </NoBreak>
              {" "} Exercise 14 of
              {" "}
              <NoBreak>
                <a
                  href="/article/chapter3#_54_hgi_"
                  class="handle-out-chapter-link"
                >
                  Chapter 3
                </a>
                .)
              </NoBreak>
              {" "}{" "}
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={12}>
          <ExerciseStatement id="_96_hgi_">
            <OuterP>
              <b>
                Exercise 12.
              </b>
              {" "}
              Given the graphs {" "}
              <Math>
                $y = \cos(x)\sin(x)$
              </Math>
              {" "} and
              {" "}
              <NoBreak>
                <Math>
                  $y = \cos^2(x)$
                </Math>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/CEQ8.svg" />
            <Pause />
            <OuterP>
              ...it {" "}
              <i>
                appears
              </i>
              {" "} that one graph is a
              translate of the other; if this were
              really so, what would the exact amounts
              of translation be? (Vertical {" "}
              <i>
                &amp;
              </i>
              {" "} horizontal.)
              What algebraic identity would this imply? How to
              prove this identity?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              We know from Exercise 21 that the
              bump immediately to the right of {" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "}
              on the graph {" "}
              <Math>
                $y = \cos(x)\sin(x)$
              </Math>
              {" "} has
              coordinates {" "}
              <NoBreak>
                <Math>
                  $(\eta/2, 0.5)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/LzPB.svg" />
            <Pause />
            <OuterP>
              It might therefore be that a translation
              of {" "}
              <Math>
                $-\eta/2$
              </Math>
              {" "} units horizontally and
              {" "}
              <Math>
                $&#123;1\over 2&#125;$
              </Math>
              {" "} units vertically maps the graph
              {" "}
              <Math>
                $y = \sin(x)\cos(x)$
              </Math>
              {" "} onto the graph
              {" "}
              <NoBreak>
                <Math>
                  $y = \cos^2(x)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/xAor.svg" />
            <Pause />
            <OuterP>
              If true, this would indicate that
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                \cos^2(x) = &#123;1\over 2&#125; + \cos(x + \eta/2)\sin(x + \eta/2)
                $$
              </MathBlock>
            </Boxed>
            <OuterP>
              since replacing {" "}
              <NoBreak>
                “
                <Math>
                  $x$
                </Math>
                ”
              </NoBreak>
              {" "} by {" "}
              <NoBreak>
                “
                <Math>
                  $x + \eta/2$
                </Math>
                ”
              </NoBreak>
              {" "}
              in {" "}
              <Math>
                $\sin(x)\cos(x)$
              </Math>
              {" "} effects horizontal
              translation of the graph by {" "}
              <NoBreak>
                <Math>
                  $-\eta/2$
                </Math>
                ,
              </NoBreak>
              {" "}
              while adding {" "}
              <Math>
                $&#123;1\over 2&#125;$
              </Math>
              {" "} to the result
              effects a vertical translation by {" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 2&#125;$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              To prove formula we use the angle-sum formulas;
              specifically...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(A + B) = \cos(A)\cos(B) - \sin(A)\sin(B)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \sin(A + B) = \cos(A)\sin(B) + \sin(A)\cos(B)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...(in case you had forgotten those); since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \,\cos(\eta/2) = \sin(\eta/2) = \sqrt&#123;0.5&#125;,
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              we find:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              \cos(x + \eta/2) &amp;= \cos(x)\cos(\eta/2) - \sin(x)\sin(\eta/2) \\
              &amp;= \up&#123;1.6&#125;\sqrt&#123;0.5&#125;\cdot(\cos(x) - \sin(x))
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              \sin(x + \eta/2) &amp;= \cos(x)\sin(\eta/2) + \sin(x)\cos(\eta/2) \\
              &amp;= \up&#123;1.6&#125;\sqrt&#123;0.5&#125;\cdot(\cos(x) + \sin(x))
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...from which the product...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(x + \eta/2)\sin(x + \eta/2)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...becomes...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &amp;\sqrt&#123;0.5&#125;\cdot\sqrt&#123;0.5&#125;\cdot(\cos^2(x) - \sin^2(x)) \\
              \up&#123;1.6&#125; =\,\,&amp;&#123;1\over 2&#125;\cdot(\cos^2(x) - \sin^2(x)) \\
              \up&#123;1.6&#125; =\,\,&amp;&#123;1\over 2&#125;\cdot(\cos^2(x) - (1 - \cos^2(x))) \\
              \up&#123;1.6&#125; =\,\,&amp;&#123;1\over 2&#125;\cdot(2\cos^2(x) - 1) \\
              \up&#123;1.6&#125; =\,\,&amp;\cos^2(x) - &#123;1\over 2&#125; \\
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...by the difference-of-squares formula and
              the pythagorean identity (often used together),
              and adding {" "}
              <Math>
                $&#123;1\over 2&#125;$
              </Math>
              {" "} gives {" "}
              <NoBreak>
                <Math>
                  $\cos^2(x)$
                </Math>
                ,
              </NoBreak>
              {" "} Q.E.D.!
              (So {" "}
              <Math>
                $y = \cos^2(x)$
              </Math>
              {" "} truly is the translate of
              {" "}
              <NoBreak>
                <Math>
                  $y = \cos(x)\sin(x)$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <i>
                &amp;
              </i>
              {" "} vice-versa.)
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                We can turn the identity around, mapping
                {" "}
                <Math>
                  $y = \cos^2(x)$
                </Math>
                {" "} onto {" "}
                <Math>
                  $y = \sin(x)\cos(x)$
                </Math>
                {" "} via a
                translation, instead of the other way around; this gives:
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  \,- &#123;1\over 2&#125; + \cos^2(x - \eta/2) = \cos(x)\sin(x).
                  $$
                </MathBlock>
              </Boxed>
              <OuterP>
                In more detail: replacing
                {" "}
                <NoBreak>
                  “
                  <Math>
                    $x$
                  </Math>
                  ”
                </NoBreak>
                {" "} by {" "}
                <NoBreak>
                  “
                  <Math>
                    $x - \eta/2$
                  </Math>
                  ”
                </NoBreak>
                {" "} in {" "}
                <Math>
                  $\cos^2(x)$
                </Math>
                {" "} effects
                horizontal translation by {" "}
                <NoBreak>
                  <Math>
                    $+\eta/2$
                  </Math>
                  ,
                </NoBreak>
                {" "} and adding
                {" "}
                <Math>
                  $-&#123;1\over 2&#125;$
                </Math>
                {" "}
                to the result effects a vertical translation by {" "}
                <NoBreak>
                  <Math>
                    $-&#123;1\over 2&#125;$
                  </Math>
                  .
                </NoBreak>
                {" "}
                (I.e., we are using the
                inverse amounts of translation that we used to map
                {" "}
                <Math>
                  $y = \cos(x)\sin(x)$
                </Math>
                {" "} onto {" "}
                <NoBreak>
                  <Math>
                    $y = \cos^2(x)$
                  </Math>
                  .)
                </NoBreak>
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                The identity from the previous note can also
                be proved via the angle-sum formulas; since
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \cos(A + B) = \cos(A)\cos(B) - \sin(A)\sin(B)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \sin(-\eta/2) = -\sqrt&#123;0.5&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                we have
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \begin&#123;align*&#125;
                \cos(x - \eta/2) &amp;= \cos(x)\cos(-\eta/2) - \sin(x)\sin(-\eta/2) \\
                \up&#123;1.6&#125; &amp;=\,\, \cos(x)\sqrt&#123;0.5&#125; - \sin(x)(-\sqrt&#123;0.5&#125;) \\
                \up&#123;1.6&#125; &amp;=\,\, \sqrt&#123;0.5&#125;\cdot(\cos(x) + \sin(x)) \\
                \end&#123;align*&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                from which
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \cos^2(x - \eta/2)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                becomes
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \begin&#123;align*&#125;
                &amp;\left(\sqrt&#123;0.5&#125;\cdot(\cos x + \sin x)\right)^2 \\
                \up&#123;1.6&#125; =\,\,&amp;&#123;1\over 2&#125;\cdot(\cos^2 x + 2\cos x\sin x +  \sin^2 x) \\
                \up&#123;1.6&#125; =\,\,&amp;&#123;1\over 2&#125;\cdot(1 + 2\cos x\sin x) \\
                \up&#123;1.6&#125; =\,\,&amp;&#123;1\over 2&#125; + \cos(x)\sin(x) \\
                \end&#123;align*&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                using the pythagorean identity in the third equality,
                and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \begin&#123;align*&#125;
                &amp; -&#123;1\over 2&#125; + \cos^2(x - \eta/2) \\
                \up&#123;1.7&#125; =\,\,&amp;-&#123;1\over 2&#125; + \left(&#123;1\over 2&#125; + \cos(x)\sin(x)\right) \\
                \up&#123;1.7&#125; =\,\,&amp;\cos(x)\sin(x)
                \end&#123;align*&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                as claimed.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={13}>
          <ExerciseStatement id="_97_hgi_">
            <OuterP>
              <b>
                Exercise 13.
              </b>
              {" "}
              If aliens descended on Earth, captured everyone,
              took you aside and told you that the fate of
              humanity rested on your ability to “illustrate
              powers of secant”, without further instructions,
              what would you do?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Presumably the aliens are asking
              for an illustration of the sequence
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sec \theta, \,\sec^2(\theta), \,\sec^3(\theta), \,\sec^4(\theta), \dots
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for some fixed {" "}
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
                .
              </NoBreak>
              {" "} (Actually...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              1, \,\sec \theta, \,\sec^2(\theta), \,\sec^3(\theta),  \,\sec^4(\theta), \dots,
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...we should start the sequence at {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} since
              {" "}
              <NoBreak>
                <Math>
                  $1 = \sec^0(\theta)$
                </Math>
                .)
              </NoBreak>
              {" "} Here is a possibility that
              echoes back to the first solution to Exercise 27:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/zo9k.svg" />
            <Pause />
            <OuterP>
              Starting with a length of {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} bottom left,
              successive multiplications by {" "}
              <Math>
                $\sec(\theta)$
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
              If we are willing to reproduce the angle
              {" "}
              <Math>
                $\theta$
              </Math>
              {" "} several times over,
              another possibility is to draw a “snail stack”
              of right triangles sharing a common vertex:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/4t03.svg" />
            <Pause />
            <OuterP>
              Or if we move the angle {" "}
              <Math>
                $\theta$
              </Math>
              {" "} around from
              one end of the previously obtained segment to
              another, another somewhat exotic possibility is
              this one:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/bwJb.svg" />
            <Pause />
            <OuterP>
              We can also take a page from the geometric
              interpretation of sec that is mentioned towards
              the end of the chapter, and draw this figure:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/Qzlj.svg" />
            <Pause />
            <OuterP>
              (In which we are effectively using a circular arc
              to each time realign the last obtained segment with
              horizontal.) In any case, with so many nice drawings,
              you are bound to save humanity!
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                One can note that the third diagram makes a cameo
                appearance within the second diagram (modulo scale):
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/eiL2.svg" />
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={14}>
          <ExerciseStatement id="_98_hgi_">
            <OuterP>
              <b>
                Exercise 14.
              </b>
              {" "}
              In the drawing below, at what coordinates,
              expressed as a function of {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ,
              </NoBreak>
              {" "}
              does the tangent to the circle
              intersect the {" "}
              <Math>
                $x$
              </Math>
              {" "} and {" "}
              <Math>
                $y$
              </Math>
              {" "} axes?
            </OuterP>
            <Pause />
            <Image src="/tmp-images/svg_ch5_ex_theta_tangent.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Assume for starters that
              {" "}
              <Math>
                $\theta$
              </Math>
              {" "} lies inside the first quadrant—i.e., that {" "}
              <NoBreak>
                <Math>
                  $0 &lt; \theta &lt; \eta$
                </Math>
                —in
              </NoBreak>
              {" "}
              which case both coordinates are nonnegative, and, more specifically, 
              are equal to the two 
              purple lengths below:
            </OuterP>
            <Pause />
            <Image src="/tmp-images/svg_ch5_ex_theta_tangent_Q1.svg" />
            <Pause />
            <OuterP>
              Regarding this diagram, note that:
            </OuterP>
            <Pause />
            <List style="gap:1em">
              <Item>
                <p>
                  we have already “used up” the fact that
                  the radius of the circle is {" "}
                  <Math>
                    $1$
                  </Math>
                  {" "} by
                  making the dropped height (which used to
                  be a radius) length {" "}
                  <NoBreak>
                    <Math>
                      $1$
                    </Math>
                    ;
                  </NoBreak>
                  {" "} and that
                </p>
              </Item>
              <Item>
                <p>
                  we use a “the complement of my complement
                  is myself”-type argument to deduce that the
                  upper left angle is {" "}
                  <NoBreak>
                    <Math>
                      $\theta$
                    </Math>
                    ,
                  </NoBreak>
                  {" "} as well
                  (cf. {" "}
                  <NoBreak>
                    <InChapterLink
                      href="/article/chapter5#_86_hgi_"
                      class="handle-in-chapter-link"
                    >
                      Exercise 2
                    </InChapterLink>
                    ,
                  </NoBreak>
                  {" "}
                  {" "}
                  <NoBreak>
                    <InChapterLink
                      href="/article/chapter5#_87_hgi_"
                      class="handle-in-chapter-link"
                    >
                      Exercise 3
                    </InChapterLink>
                    ).
                  </NoBreak>
                  {" "}{" "}
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              Because {" "}
              <Math>
                $1 \cdot \sec(\theta) = \sec(\theta)$
              </Math>
              {" "} the
              bottom length is {" "}
              <Math>
                $\sec(\theta)$
              </Math>
              {" "} while the vertical
              length is {" "}
              <NoBreak>
                <Math>
                  $1\cdot \csc(\theta) = \csc(\theta)$
                </Math>
                ,
              </NoBreak>
              {" "} similarly:
            </OuterP>
            <Pause />
            <Image src="/tmp-images/svg_ch5_ex_theta_tangent_Q1_first_solve.svg" />
            <Pause />
            <Image src="/tmp-images/svg_ch5_ex_theta_tangent_Q1_second_solve.svg" />
            <Pause />
            <OuterP>
              I.e., in the first quadrant, at least, the
              coordinates are {" "}
              <Math>
                $\sec(\theta)$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $\csc(\theta)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/tmp-images/svg_ch5_ex_theta_tangent_Q1_with_answer.svg" />
            <Pause />
            <OuterP>
              For the other quadrants we can reason by
              symmetry with the first quadrant:
            </OuterP>
            <Pause />
            <Image src="/tmp-images/svg_ch5_ex_theta_tangent_all_quadrants.svg" />
            <Pause />
            <OuterP>
              In more detail, the product of the two coordinates
              marked by purple arrows is the same in all four
              quadrants, because “minus times minus is plus”; but
              in first quadrant, the product is {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} because
              we know the product takes the form {" "}
              <Math>
                $\cos(\theta)\cdot\sec(\theta)$
              </Math>
              {" "}
              in that quadrant;
              therefore the product is {" "}
              <Math>
                $1$
              </Math>
              {" "} in {" "}
              <i>
                all
              </i>
              {" "} quadrants; but
              the coordinate marked by the inside purple arrow is
              {" "}
              <Math>
                $\cos(\theta)$
              </Math>
              {" "} in all quadrants; therefore, lastly,
              the coordinate marked by the {" "}
              <i>
                outside
              </i>
              {" "} purple arrow
              is {" "}
              <Math>
                $\sec(\theta)$
              </Math>
              {" "} in all quadrants, since {" "}
              <Math>
                $\sec(\theta)$
              </Math>
              {" "}
              is the unique number whose product with {" "}
              <Math>
                $\cos(\theta)$
              </Math>
              {" "}
              is {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ;
              </NoBreak>
              {" "} similarly the inside orange arrow marks coordinate
              {" "}
              <Math>
                $\sin(\theta)$
              </Math>
              {" "} is all quadrants, so the outside orange
              arrow (by similar reasoning) has coordinate {" "}
              <Math>
                $\csc(\theta)$
              </Math>
              {" "}
              in all quadrants, QED. (I.e., the grand conclusion is that the
              two coordinates are
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Huge \sec(\theta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -axis
              </NoBreak>
              {" "} intersection, and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Huge \csc(\theta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for the {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -axis
              </NoBreak>
              {" "} intersection, no matter the quadrant.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise
          work="ing"
          number={15}
        >
          <ExerciseStatement id="_99_hgi_">
            <OuterP>
              <b>
                Exercise 15.
              </b>
              {" "}
              If
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A \ne 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is a point on the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis, how can we construct
              the value
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              1 / A
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by purely geometric means?
              (We assume that {" "}
              <NoBreak>
                ‘
                <Math>
                  $0$
                </Math>
                ’
              </NoBreak>
              {" "} and {" "}
              <NoBreak>
                ‘
                <Math>
                  $1$
                </Math>
                ’
              </NoBreak>
              {" "} are also marked on the axis.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The key is to view {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $1/A$
              </Math>
              {" "} as values of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A = \sec(\theta)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              1/A = \cos(\theta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for some angle {" "}
              <NoBreak>
                <Math>
                  $\theta \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} if {" "}
              <NoBreak>
                <Math>
                  $|A| \geq 1$
                </Math>
                ,
              </NoBreak>
              {" "} or
              as values of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A = \cos(\theta)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              1/A = \sec(\theta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for some angle {" "}
              <NoBreak>
                <Math>
                  $\theta \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} if {" "}
              <NoBreak>
                <Math>
                  $|A| \leq 1$
                </Math>
                .
              </NoBreak>
              {" "}
              In more detail, we make use of the fact that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sec(\theta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              can be obtained as the intersection of the tangent
              to the unit circle with the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis (we never discussed
              this, you can't be faulted for missing it):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/l-Hm.svg">
              <ImageRight src="/build-img/svgo-svg/7MXJ.svg" />
            </Image>
            <Pause />
            <OuterP>
              So the idea is, for example if {" "}
              <NoBreak>
                <Math>
                  $|A| \geq 1$
                </Math>
                ,
              </NoBreak>
              {" "} to draw
              a tangent to the circle from {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} then to drop a height
              onto the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/fLKk.svg" />
            <Pause />
            <OuterP>
              ...the position obtained is the corresponding
              {" "}
              <NoBreak>
                <Math>
                  $\cos(\theta)$
                </Math>
                ,
              </NoBreak>
              {" "} and {" "}
              <Math>
                $\cos(\theta)\cdot\sec(\theta) = 1$
              </Math>
              {" "} &#x2705;.
              If {" "}
              <Math>
                $|A| \leq 1$
              </Math>
              {" "} we can reverse the process,
              “dropping a height onto the circle”, and then finding
              the intersection of the tangent at that point with
              the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis! (Which will not work, as should be,
              if and only if {" "}
              <NoBreak>
                <Math>
                  $\cos(\theta) = 0$
                </Math>
                ,
              </NoBreak>
              {" "} a.k.a., if and only
              if {" "}
              <NoBreak>
                <Math>
                  $A = 0$
                </Math>
                .)
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={16}>
          <ExerciseStatement id="_100_hgi_">
            <OuterP>
              <b>
                Exercise 16.
              </b>
              {" "}
              In the following drawing at what
              coordinates does the tangent to the circle
              intersect the axes, as marked by the purple
              triangles?
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/_yNG.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              First we note that the {" "}
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
              {" "} of
              the point of tangency are  {" "}
              <Math>
                $1/2$
              </Math>
              {" "} and
              {" "}
              <NoBreak>
                <Math>
                  $\sqrt&#123;0.75&#125; = &#123;\sqrt&#123;3&#125;\over 2&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} being {" "}
              <Math>
                $\cos(60^\circ)$
              </Math>
              {" "}
              and {" "}
              <Math>
                $\sin(60^\circ)$
              </Math>
              {" "} respectively:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/UN4d.svg" />
            <Pause />
            <OuterP>
              But by Exercise 43 this implies that the coordinate
              of the intersectionj of the tangent is
              <ImageRight src="/build-img/svgo-svg/Aloh.svg" />
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over 1/2&#125; = 2
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              with the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis, and
              <ImageRight src="/build-img/svgo-svg/w1CI.svg" />
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over \sqrt&#123;3&#125;/2&#125; = &#123;2\over \sqrt&#123;3&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              with the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis, reasoning symmetrically.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={17}>
          <ExerciseStatement id="_101_hgi_">
            <OuterP>
              <b>
                Exercise 17.
              </b>
              {" "}
              Compute the vertical distance from {" "}
              <Math>
                $A$
              </Math>
              {" "} to {" "}
              <Math>
                $A'$
              </Math>
              {" "}
              from the following set of blueprints for a shed with
              an angled inside wall (all distances in inches):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/shI1.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              We will compute the two green lengths, then the
              red length, then the blue length, then add 130:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/nm64.svg" />
            <Pause />
            <OuterP>
              Proceeding, the longer and smaller green lengths
              are {" "}
              <Math>
                $112\rt&#123;0.1&#125; \cdot \sin(25.5^\circ\hlfbk)$
              </Math>
              {" "}
              and {" "}
              <Math>
                $8\rt&#123;0.1&#125; \cdot \cos(25.5^\circ\hlfbk)$
              </Math>
              {" "} inches,
              respectively:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/xKw8.svg" />
            <Pause />
            <OuterP>
              The red length is therefore
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &amp;\,\,268 - 8 - 112\cdot\sin(25.5^\circ\hlfbk) - 8\cdot\cos(25.5^\circ\hlfbk) \\
              \up&#123;1.6&#125; =&amp;\,\,260 - 112\cdot\sin(25.5^\circ\hlfbk) - 8\cdot\cos(25.5^\circ\hlfbk)
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (inches) while the blue length is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \tan(22^\circ\hlfbk)\cdot[260 - 112\cdot\sin(25.5^\circ\hlfbk) - 8\cdot\cos(25.5^\circ\hlfbk)]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (inches) and the final answer is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              130 + \tan(22^\circ\hlfbk)\cdot[260 - 112\cdot\sin(25.5^\circ\hlfbk) - 8\cdot\cos(25.5^\circ\hlfbk)]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              inches, which comes out to
              <ImageLeft src="/build-img/svgo-svg/O1mN.svg" />
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              212.65
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              minus some. (Approximating to {" "}
              <NoBreak>
                <Math>
                  $1/100$
                </Math>
                -th
              </NoBreak>
              {" "} of an inch
              should be good enough for a construction site.)
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                Note that...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \cos(25.5^\circ) = 0.90258\dots
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \sin(25.5^\circ) = 0.43051\dots
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \tan(22^\circ) = 0.40402\dots
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...and if you are not finding these values, then make sure
                that your calculator is in “degree mode”.
                (Otherwise you have to manually
                convert the arguments to radians.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={18}>
          <ExerciseStatement id="_102_hgi_">
            <OuterP>
              <b>
                Exercise 18.
              </b>
              {" "}
              Given the following sketch, to what angle
              can the door be opened before it hits against
              the roof? (Hint: You will need to Google “how
              to use arctan”, or “how to convert from polar
              to Cartesian coordinates”.)
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/fgGT.svg" />
            <Pause />
            <OuterP>
              And:
            </OuterP>
            <Pause />
            <List style="padding-left: 2.2em; gap: 0.2em;">
              <Item>
                <p>
                  all distances are in inches
                </p>
              </Item>
              <Item>
                <p>
                  assume half an inch from the edge of the door
                  to the center of its hinge
                </p>
              </Item>
              <Item>
                <p>
                  assume the door has negligible thicknesss
                </p>
              </Item>
            </List>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              We start by computing these lengths in the
              original plane of the {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                -dimensional
              </NoBreak>
              {" "} drawing:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/odA8.svg" />
            <Pause />
            <OuterP>
              (Nb: One can also compute the length marked ‘2’ as
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;42\over \tan(23^\circ)&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              since {" "}
              <NoBreak>
                <Math>
                  $\cot = 1/\tan$
                </Math>
                ,
              </NoBreak>
              {" "} or
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              42\cdot \tan(67^\circ)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              since {" "}
              <Math>
                $67^\circ = 90^\circ - 23^\circ$
              </Math>
              {" "} is the complement
              of {" "}
              <NoBreak>
                <Math>
                  $23^\circ$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              Next, as
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0.5
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the distance from the side of the door to its
              hinge, the door swings at a radius of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              38.5
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and the distance between the hinge's center
              and the ceiling, measured horizontally at the top
              of the door, is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              30.945 - 0.5 = 30.445...
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by subtracting from the length marked ‘5’.
              We can draw the following overhead sketch of the situation
              (not to scale, and keeping to {" "}
              <Math>
                $3$
              </Math>
              {" "} digits of accuracy):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/OO4Q.svg" />
            <Pause />
            <OuterP>
              Here
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \arctan
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is a function that you can find notated as
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \te&#123;“&#125;\tan^&#123;-1&#125;\te&#123;”&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              on your calculator (a questionable choice of notation,
              because it is {" "}
              <i>
                not
              </i>
              {" "} the same as {" "}
              <NoBreak>
                <Math>
                  $1/\tan = \cot$
                </Math>
                ),
              </NoBreak>
              {" "} and
              sometimes known as
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              tangent inverse
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              by the gallery, converts a fraction of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\te&#123;opposite&#125;\over\te&#123;adjacent&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              into the corresponding angle whose tangent equals that
              fraction.
            </OuterP>
            <OuterP class="indent-10">
              The final answer to the problem is...
            </OuterP>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                <MathBlock>
                  $$
                  90^\circ + 52.26^\circ = 142.26^\circ
                  $$
                </MathBlock>
              </div>
            </center>
            <OuterP>
              ...because {" "}
              <Math>
                $\alpha$
              </Math>
              {" "} only constitutes the amount of rotation
              past {" "}
              <NoBreak>
                <Math>
                  $90^\circ$
                </Math>
                ,
              </NoBreak>
              {" "} per the drawing.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={19}>
          <ExerciseStatement id="_103_hgi_">
            <OuterP>
              <b>
                Exercise 19.
              </b>
              {" "}
              Rank the {" "}
              <Math>
                $7$
              </Math>
              {" "} slices of this
              sphere with unit radius from the greatest to
              smallest area slice:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/MAo2.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The three slices of height {" "}
              <Math>
                $1/3$
              </Math>
              {" "} have the same
              area, as do the four slices of height {" "}
              <NoBreak>
                <Math>
                  $1/4$
                </Math>
                .
              </NoBreak>
              {" "} But
              naturally, the slices of height {" "}
              <Math>
                $1/3$
              </Math>
              {" "} have larger
              area than the slices of height {" "}
              <NoBreak>
                <Math>
                  $1/4$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                This holds because each slice has the same area
                as the horizontal projection of that slice onto a cylinder
                hugging the sphere, by Exercise 46, and because
                the area of a cylinder slice only depends on its
                height.
                <ImageRight src="/build-img/svgo-svg/xEpL.svg" />
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                The slices of height {" "}
                <Math>
                  $1/3$
                </Math>
                {" "} have area exactly
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;1/3 \over 1/4&#125; = 4/3 = 1.333...
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                times the area of the slices of height {" "}
                <NoBreak>
                  <Math>
                    $1/4$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                given that the area of a slice is directly
                proportional to its height.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={20}>
          <ExerciseStatement id="_104_hgi_">
            <OuterP>
              <b>
                Exercise 20.
              </b>
              {" "}
              If a sphere is projected directly outward onto
              a cylinder abutting the sphere at the equator, with each
              point remaining at its height, as pictured in the
              sketch and in the visualization below, by what factor are
              areas stretched as a function of the latitude {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ?
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/dKeI.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Areas are scaled by a factor of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sec(\theta) \cdot \cos(\theta) = 1
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because latitudes (circles that slice the sphere
              horizontally) are stretched by a factor of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sec(\theta)
              $$
              <ImageRight
                offset_x="9em"
                src="/build-img/svgo-svg/MW7M.svg"
                compensate_offset_x_for_large_text_columns={true}
              />
            </MathBlock>
            <Pause />
            <OuterP>
              by the projection, whereas longitudes (the other
              ones, perpendicular to latitudes) are locally stretched
              by a factor of...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(\theta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...as depicted in this...
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/BvFn.svg" />
            <Pause />
            <OuterP>
              ...sketch, and because the
              overall scaling in area is the latitudinal
              scaling factor times the longitudinal
              scaling factor. (Area = width {" "}
              <Math>
                $\times$
              </Math>
              {" "} height,
              so you take the factor by which “width” scales,
              times the factor by which “height” scales—presuming
              your old “width” and “height” are still at right
              angle to one another after the projection, which
              is the case here: longitudes and latitudes, that
              are perpendicular on the sphere, project to
              lines and circles, respectively, that are
              perpendicular on the cylinder.)
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                As a consequence, 
                the area of a shape on the sphere is equal to
                the area of the projection of that shape onto
                the cylinder, for any shape.
                This (strange?) fact is known as the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                Archimedean property
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                of the sphere.
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                For example, the following two orange areas, one
                on the sphere and one on the cylinder, are
                equal, by the Archimedean property:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/pG5W.svg" />
              <Pause />
              <OuterP>
                For a more fun example, since all corresponding areas
                on the sphere and on the cylinder are equal in
                this example by the Archimedean property...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/7Dao.svg" />
              <Pause />
              <OuterP>
                ...it implies that the various “tube sections”
                of either circle have equal areas on the cylinder,
                even though dissimilar in shape, since those sections
                have equal area to one another on the sphere!
                (For each circle separately.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={21}>
          <ExerciseStatement id="_105_hgi_">
            <OuterP>
              <b>
                Exercise 21.
              </b>
              {" "}
              Give a formula for the area of a sphere of
              radius {" "}
              <NoBreak>
                <Math>
                  $r$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The area of a sphere of radius {" "}
              <Math>
                $r$
              </Math>
              {" "} is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              4\eta\rt&#123;0.05&#125;r\cdot 2r = 8\eta\rt&#123;0.05&#125;r^2
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because it is the same as the area of a cylinder
              of radius {" "}
              <Math>
                $r$
              </Math>
              {" "} and and height {" "}
              <NoBreak>
                <Math>
                  $2r$
                </Math>
                ,
              </NoBreak>
              {" "} by Exercise 46:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/ivEh.svg" />
            <Pause />
            <OuterP>
              (Namely,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              4\eta\rt&#123;0.05&#125;r\cdot 2r
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the product “circumference {" "}
              <Math>
                $\times$
              </Math>
              {" "} height”
              that gives the area of the cylinder.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={22}>
          <ExerciseStatement id="_106_hgi_">
            <OuterP>
              <b>
                Exercise 22.
              </b>
              {" "}
              Give a formula for the volume of a sphere of
              radius {" "}
              <Math>
                $r$
              </Math>
              {" "} using the fact that the volume of
              a cone is “one third base times height”.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The basic idea is that we can view the
              sphere as being made up of many cones:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/TNdV.svg" />
            <Pause />
            <OuterP>
              When we add up the volume
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over 3&#125;\times \rm&#123;base&#125; \times \rm&#123;height&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              over all these cones, each height is nearly {" "}
              <NoBreak>
                <Math>
                  $r$
                </Math>
                ,
              </NoBreak>
              {" "}
              so what we really need is the sum of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over 3&#125;\times \rm&#123;base&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              over all the cones, which comes out to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over 3&#125;\times (&#123;\rm sphere\,\,area&#125;)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because the sum of all the areas of the bases
              is the sphere area. (Everything speaking
              approximately, for many fine cones, in the
              limit of our imagination as they become
              infinitely fine.) (*Where each ‘base’ stands
              for the shaved-off, “flattened” version of the
              base.) So multiplying the height {" "}
              <Math>
                $r$
              </Math>
              {" "} back in,
              we find
            </OuterP>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                <MathBlock>
                  $$
                  V = &#123;1\over 3&#125;\times (&#123;\rm sphere\,\,area&#125;) \times r = &#123;8\over 3&#125;\eta\rt&#123;.1&#125;r^3
                  $$
                </MathBlock>
              </div>
            </center>
            <OuterP>
              for the volume {" "}
              <Math>
                $V$
              </Math>
              {" "} of the sphere, using the fact that
              the sphere area {" "}
              <Math>
                $A$
              </Math>
              {" "} is
            </OuterP>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                <MathBlock>
                  $$
                  A = 8\eta\rt&#123;.05&#125;r^2
                  $$
                </MathBlock>
              </div>
            </center>
            <OuterP>
              by Exercise 49.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={23}>
          <ExerciseStatement id="_107_hgi_">
            <OuterP>
              <b>
                Exercise 23.
              </b>
              {" "}
              Similarly to Exercise 9, suggest a definition for
              the product
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              c\cdot\vec&#123;v&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              of a vector {" "}
              <Math>
                $\vec&#123;v&#125;$
              </Math>
              {" "} by a real number {" "}
              <NoBreak>
                <Math>
                  $c$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              We define
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              c \cdot (v_x, v_y) = (c\rt&#123;0.1&#125;v_x, c\rt&#123;0.1&#125;v_y)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for the product of a real number {" "}
              <Math>
                $c$
              </Math>
              {" "} with a
              vector {" "}
              <NoBreak>
                <Math>
                  $\vec&#123;v&#125; = (v_x, v_y) \in \rr^2$
                </Math>
                .
              </NoBreak>
              {" "}
              (Similarly for a vector of higher dimension—those
              exist too.)
            </OuterP>
            <OuterP class="indent-10">
              In other words, the product takes the constant
              {" "}
              <Math>
                $c$
              </Math>
              {" "} “inside”, multiplying each coordinate of
              the vector by {" "}
              <NoBreak>
                <Math>
                  $c$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Example 1.
              </i>
              {" "} We have
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              2 \cdot (10, 3.333) = (20, 6.666),
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              applying the definition with {" "}
              <NoBreak>
                <Math>
                  $c = 2$
                </Math>
                ,
              </NoBreak>
              {" "}
              {" "}
              <NoBreak>
                <Math>
                  $\vec&#123;v&#125; = (10, 3.333)$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Example 2.
              </i>
              {" "} We have
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              2 \cdot (a, b) = (2a, 2b),
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for all {" "}
              <NoBreak>
                <Math>
                  $a, b \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} for an example
              that is half-algebraic, half-numerical.
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                In some sense, the vector “wins” over the
                number, in that their conjoint baby is a vector,
                not a number.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={24}>
          <ExerciseStatement id="_108_hgi_">
            <OuterP>
              <b>
                Exercise 24.
              </b>
              {" "}
              (Speaking of doors with negligible thickness.)
              The sketch below shows the top view of a bomb
              shelter door set in a corner near a wall,
              with distances in centimeters.
              How far can the door open when the big handle
              is in the “open” position, shown in the figure?
              How far can it open when the big handle is in
              the “closed” position, shown by the dotted line?
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/vhkB.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              In the interest of mass-producing our results
              we will write a general formula to compute
              {" "}
              <Math>
                $\alpha$
              </Math>
              {" "} in terms of {" "}
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
              <Math>
                $z$
              </Math>
              {" "} in
              the following diagram (note that {" "}
              <NoBreak>
                <Math>
                  $r = \sqrt&#123;x_0^2 + y_0^2&#125;$
                </Math>
                ):
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/TW6_.svg" />
            <Pause />
            <OuterP>
              We can decompose
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \alpha
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              90^\circ + \beta - \gamma
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              with {" "}
              <Math>
                $\beta$
              </Math>
              {" "} and {" "}
              <Math>
                $\gamma$
              </Math>
              {" "} as depicted here:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/2IHE.svg" />
            <Pause />
            <OuterP>
              By definition of {" "}
              <NoBreak>
                ‘
                <Math>
                  $\arctan$
                </Math>
                ’
              </NoBreak>
              {" "} (cf. Exercise 43),
              we have
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \gamma = \arctan(y_0/x_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \beta = \arctan(z/\sqrt&#123;r^2 - z^2&#125;)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              or
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \beta = \arctan(z/\sqrt&#123;x_0^2 + y_0^2 - z^2&#125;)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              directly in terms of {" "}
              <NoBreak>
                <Math>
                  $z$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $x_0$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $y_0$
                </Math>
                ,
              </NoBreak>
              {" "} since
              {" "}
              <NoBreak>
                <Math>
                  $r^2 = x_0^2 + y_0^2$
                </Math>
                ,
              </NoBreak>
              {" "} so
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \alpha = 90^\circ + \arctan(z/\sqrt&#123;x_0^2 + y_0^2 - z^2&#125;) - \arctan(y_0/x_0)
              $$
              <ImageRight
                src="/build-img/svgo-svg/KJb5.svg"
                compensate_offset_x_for_large_text_columns={true}
              />
            </MathBlock>
            <Pause />
            <OuterP>
              which constitutes our “general formula”.
            </OuterP>
            <OuterP class="indent-10">
              From this point, we apply the general formula with
              {" "}
              <NoBreak>
                <Math>
                  $z = 66 - 18 = 44$
                </Math>
                ,
              </NoBreak>
              {" "}
              {" "}
              <NoBreak>
                <Math>
                  $(x_0, y_0) = (60, 30)$
                </Math>
                ,
              </NoBreak>
              {" "}
              {" "}
              <NoBreak>
                <Math>
                  $(x_0, y_0) = (93, 30)$
                </Math>
                ,
              </NoBreak>
              {" "} and
              {" "}
              <NoBreak>
                <Math>
                  $(x_0, y_0) = (108, 22)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/x_qH.svg" />
            <Pause />
            <OuterP>
              The three values of {" "}
              <Math>
                $\alpha$
              </Math>
              {" "} obtained, respectively,
              are...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \alpha = 90^\circ + \arctan(48/\sqrt&#123;60^2 + 30^2 - 48^2&#125;) - \arctan(30/60) = 109.1225\ldots^\circ
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \alpha = 90^\circ + \arctan(48/\sqrt&#123;93^2 + 30^2 - 48^2&#125;) - \arctan(30/93) = 101.5410\ldots^\circ
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \alpha = 90^\circ + \arctan(48/\sqrt&#123;108^2 + 22^2 - 48^2&#125;) - \arctan(22/108) = 104.3033\ldots^\circ
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...being, namely, upper bounds on the amount of
              rotation of the door caused by a putative contact of
              the big handle in open position with the wall, of the
              big handle in closed position with the wall, and of
              the small handle with the wall.
            </OuterP>
            <OuterP class="indent-10">
              (By the way: don't be confused by the fact that
              {" "}
              <Math>
                $\alpha$
              </Math>
              {" "} is not an angle measured “from
              horizontal”; {" "}
              <Math>
                $\alpha$
              </Math>
              {" "} is still the amount of rotation (aperture)
              undergone by the door, as it measures the amount of rotation
              of a specific point attached to the door!)
            </OuterP>
            <OuterP class="indent-10">
              In particular, since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              104.3033\ldots &lt; 109.1225\ldots
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              the big handle is not the limiting factor when
              the big handle is in open position, at which point
              the small handle is the limiting factor and prevents
              the door from opening more than {" "}
              <NoBreak>
                <Math>
                  $104^\circ$
                </Math>
                -and-some,
              </NoBreak>
              {" "}
              whereas since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              101.5410\ldots &lt; 104.3033\ldots
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              the big handle becomes the limiting factor when it
              is in closed position, at which point the door can
              only open to {" "}
              <NoBreak>
                <Math>
                  $101^\circ$
                </Math>
                -and-some!
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={25}>
          <ExerciseStatement id="_109_hgi_">
            <OuterP>
              <b>
                Exercise 25.
              </b>
              {" "}
              If each of these dotted lines...
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/CbYC.svg" />
            <Pause />
            <OuterP>
              ...is a so-called
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              isoset
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              (also: {" "}
              <i>
                isoline
              </i>
              , {" "}
              <i>
                contour line
              </i>
              , {" "}
              <i>
                isoquant
              </i>
              ,
              {" "}
              <i>
                isosurface
              </i>
              , {" "}
              <i>
                isovalue line
              </i>
              , or {" "}
              <i>
                isovalue set
              </i>
              {" "}
              {" "}
              <NoBreak>
                <Math>
                  $\rt&#123;0.1&#125;$
                </Math>
                )
              </NoBreak>
              {" "} of the two-variable function
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f : \rr^2\ra \rr
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              given by
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f(x, y) = x + y
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              then what are similar
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              isosets
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              (man, we like this word! of the two-variable
              function
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              g : \rr^2\ra \rr
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              given by
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              g(x, y) = xy
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...?
            </OuterP>
            <OuterP class="indent-10">
              [In human terms: draw solutions of the equation
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              xy = C
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              in {" "}
              <Math>
                $\rr^2$
              </Math>
              {" "} for some different values of
              {" "}
              <NoBreak>
                <Math>
                  $C \in \rr$
                </Math>
                .]
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              Next: Use any geometric insights gleaned from
              these
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              isosets
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              (😍😍😍) to find the maximum value of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin\theta&#123;&#125;\cos\theta
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for {" "}
              <NoBreak>
                <Math>
                  $\theta \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} and specify the set of
              values of {" "}
              <Math>
                $\theta$
              </Math>
              {" "} for which the maximum is
              attained.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The isosets of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x, y) \ra xy
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (lambda-notation for a two-variable function)
              have this general appearance (it depends on
              the window and on the exact isosets that
              you choose to  draw—we chose a few
              different random ones):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/ME1k.svg" />
            <Pause />
            <OuterP>
              Note that each isoset consists of the union of TWO
              disjoint curves, except for the isoset
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              xy = 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (or: “the isoset
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \&#123;(x, y) \in \rr^2 : xy = 0 \&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...” to pedantically indicate that we are
              talking about {" "}
              <i>
                a set of points in the plane
              </i>
              ),
              that, for its part, cannot be said to consist
              of two {" "}
              <i>
                ~
              </i>
              ~
              <i>
                disjoint
              </i>
              ~
              <i>
                ~
              </i>
              {" "} curves, because it
              is the union of the {" "}
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
                -
              </NoBreak>
              {" "} axes, that
              intersect.
            </OuterP>
            <OuterP class="indent-10">
              (For a throwback, the solution of Exercise
              16 of {" "}
              <a
                href="/article/chapter3#_54_hgi_"
                class="handle-out-chapter-link"
              >
                Chapter 3
              </a>
              {" "} mentions that the product of
              two numbers is {" "}
              <Math>
                $0$
              </Math>
              {" "} if and only if one of the
              numbers is {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                .
              </NoBreak>
              {" "} In our case,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              xy = 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              if and only
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \,x = 0\,
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                or
              </i>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \,y = 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              where
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              happens to be the equation of the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis, and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              happens to be the equation of the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis, which
              explains the shape of the isoset.)
            </OuterP>
            <OuterP class="indent-10">
              If we draw a “heatmap” of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              xy
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              in some region of the plane, similarly to
              Exercise 18, the larger (more positive)
              values show up in the first and third
              quadrants, while the smaller (more negative)
              values show up in the second and fourth
              quadrants:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/FGx3.svg" />
            <Pause />
            <OuterP>
              Of particular interest to us: at a given
              distance from the origin, the line
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = y
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              can be seen seen to hold the largest of values of {" "}
              <NoBreak>
                <Math>
                  $xy$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/Pdlp.svg" />
            <Pause />
            <OuterP>
              In particular,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos\theta\,\sin\theta
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              will reach its maximum at those values of
              {" "}
              <Math>
                $\theta$
              </Math>
              {" "} that put the point {" "}
              <Math>
                $(\cos \theta, \sin \theta)$
              </Math>
              {" "}
              at either {" "}
              <Math>
                $(\sqrt&#123;0.5&#125;, \sqrt&#123;0.5&#125;)$
              </Math>
              {" "} or
              {" "}
              <Math>
                $(-\sqrt&#123;0.5&#125;, -\sqrt&#123;0.5&#125;)$
              </Math>
              {" "} on the unit circle;
              these values of {" "}
              <Math>
                $\theta$
              </Math>
              {" "} are
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \&#123;0.5\eta + 4\eta&#123;&#125;k : k \in \zz\&#125; \\
              \Large \cup \&#123;2.5\eta + 4\eta&#123;&#125;k : k \in \zz\&#125;\up&#123;1.5&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as per this illustration...
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/HCJC.svg" />
            <Pause />
            <OuterP>
              ...and the maximum value of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \cos\theta\,\sin\theta
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              itself will be
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \sqrt&#123;0.5&#125; \cdot \sqrt&#123;0.5&#125; = &#123;1\over 2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              or
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large (-\sqrt&#123;0.5&#125;) \cdot (-\sqrt&#123;0.5&#125;) = &#123;1\over 2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              equivalently; though one should also note
              that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \&#123;0.5\eta + 4\eta&#123;&#125;k : k \in \zz\&#125; \cup \&#123;2.5\eta + 4\eta&#123;&#125;k : k \in \zz\&#125; \\ \Large \up&#123;1.5&#125;= \&#123;0.5\eta + 2\eta&#123;&#125;k : k \in \zz\&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              which is the “clever” way of writing the set
              of {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                's
              </NoBreak>
              {" "} for which the maximum is achieved.
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                As a consequence, the function
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x \ra \sin x&#123;&#125;\cos x
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                discussed in Exercise 4 has maximum value
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;1\over 2&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                achieved for inputs in the set
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large \&#123;0.5\eta + 2\eta&#123;&#125;k : k \in \zz\&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                comprising the sequence of values...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \large \dots,\,\, -&#123;7\eta\over 2&#125;,\,\, -&#123;3\eta\over 2&#125;,\,\, &#123;\dn&#123;0.25&#125;\eta \over 2&#125;,\,\, &#123;5\eta \over 2&#125;,\,\, &#123;9\eta \over 2&#125;,\,\, \dots
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...or...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \large \dots,\,\, &#123;-3.5\eta&#125;,\,\, &#123;-1.5\eta&#125;,\,\, &#123;0.5\eta&#125;,\,\, &#123;2.5\eta&#125;,\,\, &#123;4.5\eta&#125;,\,\, \dots
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...(maybe more legibly); annotating the graph
                given in Exercise 4:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/IAYw.svg" />
              <Pause />
              <StarDivider />
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                For completeness, here is a closer look at
                the isoset {" "}
                <NoBreak>
                  <Math>
                    $xy = 1$
                  </Math>
                  ,
                </NoBreak>
                {" "} including some labeled points:
              </OuterP>
              <Pause />
              <Image
                style="margin-top:1em;margin-bottom:1em;"
                src="/build-img/svgo-svg/Hk2G.svg"
              />
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 3.
                </i>
                {" "}
                Because a point {" "}
                <Math>
                  $(x, y)$
                </Math>
                {" "} satisfies
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                xy = 1
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                if and only if the point {" "}
                <Math>
                  $(2x, y)$
                </Math>
                {" "} satisfies
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                xy = 2
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                (one has
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x_0y_0 = 1
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                if and only if
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (2x_0)y_0 = 2
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                surprise or not) the curve
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                xy = 2
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is the horizontal dilation of the curve
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                xy = 1
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                by a factor {" "}
                <NoBreak>
                  <Math>
                    $2$
                  </Math>
                  ;
                </NoBreak>
                {" "} likewise, it is also the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                vertical dilation
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                of the curve
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                xy = 1
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                by a factor {" "}
                <NoBreak>
                  <Math>
                    $2$
                  </Math>
                  ;
                </NoBreak>
                {" "} the two dilations are
                illustrated here:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/u7DJ.svg" />
              <Pause />
              <Image src="/build-img/svgo-svg/h7PS.svg" />
              <Pause />
              <OuterP>
                More generally, the curve
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                xy = C
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for {" "}
                <Math>
                  $C \ne 0$
                </Math>
                {" "} is the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <NoBreak>
                  <Math>
                    $(a, b)$
                  </Math>
                  -dilation
                </NoBreak>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                [meaning: a horizontal dilation by a factor
                {" "}
                <Math>
                  $a$
                </Math>
                {" "} followed by a vertical dilation by a
                factor {" "}
                <NoBreak>
                  <Math>
                    $b$
                  </Math>
                  ,
                </NoBreak>
                {" "} or vice-versa, the order doesn't
                matter] of the curve
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                xy = 1
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for all pairs {" "}
                <Math>
                  $(a, b)$
                </Math>
                {" "} such that {" "}
                <NoBreak>
                  <Math>
                    $ab = C$
                  </Math>
                  ;
                </NoBreak>
                {" "} for
                example,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                xy = 3
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <NoBreak>
                  <Math>
                    $(3, 1)$
                  </Math>
                  -dilation
                </NoBreak>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                [horizontal dilation by factor {" "}
                <NoBreak>
                  <Math>
                    $3$
                  </Math>
                  ]
                </NoBreak>
                {" "} of
                {" "}
                <NoBreak>
                  <Math>
                    $xy = 1$
                  </Math>
                  ,
                </NoBreak>
                {" "} as it is the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <NoBreak>
                  <Math>
                    $(1, 3)$
                  </Math>
                  -dilation
                </NoBreak>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                [vertical dilation by factor {" "}
                <NoBreak>
                  <Math>
                    $3$
                  </Math>
                  ]
                </NoBreak>
                {" "} of {" "}
                <NoBreak>
                  <Math>
                    $xy = 1$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                but is also the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <NoBreak>
                  <Math>
                    $(\sqrt&#123;3&#125;, \sqrt&#123;3&#125;)$
                  </Math>
                  -dilation
                </NoBreak>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                of {" "}
                <NoBreak>
                  <Math>
                    $xy = 1$
                  </Math>
                  ,
                </NoBreak>
                {" "} since {" "}
                <NoBreak>
                  <Math>
                    $\sqrt&#123;3&#125;\cdot\sqrt&#123;3&#125; = 3$
                  </Math>
                  ,
                </NoBreak>
                {" "} and the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <NoBreak>
                  <Math>
                    $(12, &#123;1\over 4&#125;)$
                  </Math>
                  -dilation
                </NoBreak>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                of {" "}
                <NoBreak>
                  <Math>
                    $xy = 1$
                  </Math>
                  ,
                </NoBreak>
                {" "} since {" "}
                <NoBreak>
                  <Math>
                    $12 \cdot &#123;1\over 4&#125; = 3$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                etc.
              </OuterP>
              <OuterP class="indent-10">
                For another specifically noteworthy instance
                of this phenomenon,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                xy = 1
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <NoBreak>
                  <Math>
                    $(-1, -1)$
                  </Math>
                  -dilation
                </NoBreak>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                of itself, since {" "}
                <NoBreak>
                  <Math>
                    $(-1)\cdot(-1) = 1$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                a fact that is also known as the “central
                symmetry” of {" "}
                <NoBreak>
                  <Math>
                    $xy = 1$
                  </Math>
                  .
                </NoBreak>
                {" "} (You can take this
                last statement as the definition of “centrally
                symmetric”. I.e., a set {" "}
                <Math>
                  $S \subseteq \rr^2$
                </Math>
                {" "}
                is centrally symmetric if and only if {" "}
                <Math>
                  $S$
                </Math>
                {" "}
                is equal to the {" "}
                <NoBreak>
                  <Math>
                    $(-1, -1)$
                  </Math>
                  -dilation
                </NoBreak>
                {" "} of
                itself.)
              </OuterP>
              <OuterP class="indent-10">
                (Indeed, since
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                xy = C
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                if and only if
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (-x)(-y) = C
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                each of the isosets is centrally symmetric, not only
                {" "}
                <NoBreak>
                  <Math>
                    $xy = 1$
                  </Math>
                  .)
                </NoBreak>
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 4.
                </i>
                {" "}
                Among other additional symmetries, the line
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x = y
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is an axis of symmetry of each isoset, meaning
                that each isoset equals its mirror reflection
                about that line:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/A16i.svg" />
              <Pause />
              <OuterP>
                Note that, technically, a set {" "}
                <Math>
                  $S \subseteq \rr^2$
                </Math>
                {" "}
                [meaning: {" "}
                <Math>
                  $S$
                </Math>
                {" "} is a set of points in the plane] is
                symmetric about {" "}
                <Math>
                  $x = y$
                </Math>
                {" "} if and only if
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large (x_0, y_0) \in S \iff (y_0, x_0) \in S
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                [read {" "}
                <NoBreak>
                  “
                  <Math>
                    $(x_0, y_0)$
                  </Math>
                </NoBreak>
                {" "} is in {" "}
                <Math>
                  $S$
                </Math>
                {" "} if and only if
                {" "}
                <Math>
                  $(y_0, x_0)$
                </Math>
                {" "} is in {" "}
                <NoBreak>
                  <Math>
                    $S$
                  </Math>
                  ”]
                </NoBreak>
                {" "} for all {" "}
                <NoBreak>
                  <Math>
                    $(x_0, y_0)$
                  </Math>
                  .
                </NoBreak>
                {" "}
                Illustrated:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/r97O.svg" />
              <Pause />
              <OuterP>
                In our case, a point {" "}
                <Math>
                  $(x_0, y_0)$
                </Math>
                {" "} is on the curve
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                xy = C
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                if and only if the point {" "}
                <Math>
                  $(y_0, x_0)$
                </Math>
                {" "} is on
                the curve, because {" "}
                <NoBreak>
                  <Math>
                    $x_0y_0 = y_0x_0$
                  </Math>
                  ,
                </NoBreak>
                {" "} by
                commutativity of multiplication. This observation
                constitutes the “proof” that each isoset is
                mirror symmetric through {" "}
                <NoBreak>
                  <Math>
                    $x = y$
                  </Math>
                  .
                </NoBreak>
              </OuterP>
              <OuterP class="indent-10">
                (Or...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \large
                \begin&#123;align&#125;
                \large     &amp; (x_0, y_0) \in \&#123;(x,y)\in \rr^2: xy = C\&#125; \\
                \large\up&#123;1.4&#125; \iff&amp; \,x_0y_0 = C \\
                \large\up&#123;1.4&#125; \iff&amp; \,y_0x_0 = C \\
                \large\up&#123;1.4&#125; \iff&amp; (y_0, x_0) \in \&#123;(x,y)\in \rr^2: xy = C\&#125;
                \end&#123;align&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...to put it over-the-top formally.)
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 5.
                </i>
                {" "}
                Lastly, each isoset is symmetric
                through the line {" "}
                <NoBreak>
                  <Math>
                    $x = -y$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/d39n.svg" />
              <Pause />
              <OuterP>
                Indeed, this symmetry can be obtained as the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                composition
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                of a symmetry through {" "}
                <Math>
                  $x = y$
                </Math>
                {" "} and a central
                symmetry:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/EMv4.svg" />
              <Pause />
              <OuterP>
                In other words, any set that is symmetric through
                {" "}
                <Math>
                  $x = y$
                </Math>
                {" "} and that is centrally symmetric is also
                symmetric through {" "}
                <NoBreak>
                  <Math>
                    $x = -y$
                  </Math>
                  ,
                </NoBreak>
                {" "} so there is nothing “new”
                to prove here, except to make this observation
                about composition!
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={26}>
          <ExerciseStatement id="_110_hgi_">
            <OuterP>
              <b>
                Exercise 26.
              </b>
              {" "}
              A point {" "}
              <Math>
                $P \in \rr^3$
              </Math>
              {" "} at distance {" "}
              <Math>
                $R$
              </Math>
              {" "} from the
              origin forms an angle {" "}
              <Math>
                $\phi$
              </Math>
              {" "} with the positive
              {" "}
              <Math>
                $z$
              </Math>
              {" "} axis, while {" "}
              <NoBreak>
                <Math>
                  $P$
                </Math>
                's
              </NoBreak>
              {" "} projection onto the {" "}
              <NoBreak>
                <Math>
                  $xy$
                </Math>
                -plane
              </NoBreak>
              {" "}
              is at a counterclockwise angle {" "}
              <Math>
                $\theta$
              </Math>
              {" "} from the
              positive {" "}
              <Math>
                $x$
              </Math>
              {" "} axis:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/FZVx.svg" />
            <Pause />
            <OuterP>
              What are {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $y$
              </Math>
              {" "} and {" "}
              <Math>
                $z$
              </Math>
              {" "} in terms of {" "}
              <NoBreak>
                <Math>
                  $R$
                </Math>
                ,
              </NoBreak>
              {" "}
              {" "}
              <Math>
                $\phi$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Since {" "}
              <Math>
                $\phi$
              </Math>
              {" "} is an ordinary geometric angle
              between two lines, (as opposed to: an oriented
              angle, a.k.a., “signed angle”), we have
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0 \leq \phi \leq 2\eta
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (or
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0 \leq \phi \leq 180^\circ
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              equivalently—and recall that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              180^\circ = 2\eta
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                as real numbers
              </i>
              , so there is absolutely no fudging
              going on if we write it the second way), and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(\phi) \geq 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              R\sin(\phi) \geq 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and from which {" "}
              <NoBreak>
                <Math>
                  $R\sin(\phi)$
                </Math>
                ,
              </NoBreak>
              {" "} as it appears in the 
              following diagram, is the actual {" "}
              <i>
                length
              </i>
              {" "} of
              {" "}
              <NoBreak>
                <Math>
                  $P$
                </Math>
                's
              </NoBreak>
              {" "} projection onto the {" "}
              <NoBreak>
                <Math>
                  $xy$
                </Math>
                -plane:
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/giDO.svg" />
            <Pause />
            <OuterP>
              ...whereas {" "}
              <NoBreak>
                <Math>
                  $R\cos(\phi)$
                </Math>
                ,
              </NoBreak>
              {" "} as it appears above, is a
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              signed length
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              (or “coordinate”) (or “real number”, haha) as
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(\phi)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is negative for {" "}
              <NoBreak>
                <Math>
                  $\eta &lt; \phi \leq 2\eta$
                </Math>
                ,
              </NoBreak>
              {" "} positive
              for {" "}
              <NoBreak>
                <Math>
                  $0 \leq \phi &lt; \eta$
                </Math>
                !
              </NoBreak>
              {" "} But in any case that is what
              we want, since {" "}
              <Math>
                $z$
              </Math>
              {" "} switches from positive to negative
              at {" "}
              <Math>
                $\phi = \eta$
              </Math>
              {" "} just like {" "}
              <NoBreak>
                <Math>
                  $\cos(\phi)$
                </Math>
                ,
              </NoBreak>
              {" "}
              giving us
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              z = R\cos(\phi)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and “one coordinate down”.
            </OuterP>
            <OuterP class="indent-10">
              For {" "}
              <Math>
                $x$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                ,
              </NoBreak>
              {" "} then, we are left in a “classical”
              situation of converting polar coordinates to Cartesian
              coordinates in the {" "}
              <NoBreak>
                <Math>
                  $xy$
                </Math>
                -plane;
              </NoBreak>
              {" "} only  the {" "}
              <NoBreak>
                “
                <Math>
                  $r$
                </Math>
                ”
              </NoBreak>
              {" "} of
              polar coordinates is now {" "}
              <NoBreak>
                “
                <Math>
                  $R\sin(\phi)$
                </Math>
                ”
              </NoBreak>
              {" "} (but
              which is nonnegative, happily, as noted):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/10Fl.svg" />
            <Pause />
            <OuterP>
              Thus:
            </OuterP>
            <Boxed style="margin-bottom:-5px;">
              <MathBlock>
                $$
                x = R\sin(\phi)\cos(\theta)
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                y = R\sin(\phi)\sin(\theta)
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                z = R\cos(\phi)
                $$
              </MathBlock>
            </Boxed>
            <Pause />
            <StarDivider />
          </Solution>
        </Exercise>
        <Exercise number={27}>
          <ExerciseStatement id="_111_hgi_">
            <OuterP>
              <b>
                Exercise 27.
              </b>
              {" "}
              Let {" "}
              <NoBreak>
                <Math>
                  $A, B \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $f : \rr \ra \rr$
                </Math>
                .
              </NoBreak>
              {" "}
              Rewrite the two compositions below in the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra \dots
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and describe how the graph of
              each composition relates to the graph of 
              {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/JAXv.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The first composition is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra f(B(x + A))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              per this illustration:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/l5nA.svg" />
            <Pause />
            <OuterP>
              The second composition is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra f(Bx + A)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              per this illustration:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/dK-G.svg" />
            <Pause />
            <OuterP>
              Insofar as the second part of the question,
              recall that by Exercise 40, gluing this box...
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/llY6.svg" />
            <Pause />
            <OuterP>
              ...to the right of any function compresses
              the graph of that function horizontally by a
              factor {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "} whereas gluing this box...
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/-MNj.svg" />
            <Pause />
            <OuterP>
              ...to the right of any function translates the
              graph of that function by {" "}
              <Math>
                $A$
              </Math>
              {" "} to the left; so the 
              graph of the first composition...
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/8uHP.svg" />
            <Pause />
            <OuterP>
              ...where we glue the {" "}
              <NoBreak>
                “
                <Math>
                  $z \ra Bz$
                </Math>
                ”
              </NoBreak>
              {" "} box first and
              the {" "}
              <NoBreak>
                “
                <Math>
                  $u \ra u + A$
                </Math>
                ”
              </NoBreak>
              {" "} box second (starting from {" "}
              <Math>
                $f$
              </Math>
              {" "}
              as the “base box” onto which others are glued—because
              the problem asks how the graph {" "}
              <Math>
                $y = f(x)$
              </Math>
              {" "} is affected,
              we have to start there), will be...
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the graph of {" "}
              <Math>
                $f$
              </Math>
              {" "} horizontally compressed by {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              <br />
              translated left by {" "}
              <Math>
                $A$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              ...while the graph of the second composition...
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/nwU5.svg" />
            <Pause />
            <OuterP>
              ...where we glue the boxes onto {" "}
              <Math>
                $f$
              </Math>
              {" "} in the opposite
              order, with the {" "}
              <NoBreak>
                “
                <Math>
                  $z \ra Bz$
                </Math>
                ”
              </NoBreak>
              {" "} box glued second and the 
              {" "}
              <NoBreak>
                “
                <Math>
                  $u \ra u + A$
                </Math>
                ”
              </NoBreak>
              {" "} box glued first, will be...
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the graph of {" "}
              <Math>
                $f$
              </Math>
              {" "} translated left by {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              <br />
              horizontally compressed by {" "}
              <Math>
                $B$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              ...which is slightly different!
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={28}>
          <ExerciseStatement id="_112_hgi_">
            <OuterP>
              <b>
                Exercise 28.
              </b>
              {" "}
              Let {" "}
              <NoBreak>
                <Math>
                  $f : \rr \ra \rr$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $A, B \in \rr$
                </Math>
                .
              </NoBreak>
              {" "}
              Rewrite the two compositions below in the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra \dots
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and describe how the graph of
              each composition relates to the graph of {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/81Lp.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The first composition equals
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra Bf(x) + A
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as illustrated here:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/9wa1.svg" />
            <Pause />
            <OuterP>
              Similarly, the second composition equals
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra B(f(x) + A)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (or
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra Bf(x) + AB
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              equivalently), as is easy to check. (No drawing!)
            </OuterP>
            <OuterP class="indent-10">
              For the second part of the question, since gluing
              the box
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/llY6.svg" />
            <Pause />
            <OuterP>
              to the left of any function scales the graph of that
              function vertically by a factor {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "} while gluing the
              box
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/-MNj.svg" />
            <Pause />
            <OuterP>
              to the left of any function translates the graph of
              that function up by {" "}
              <Math>
                $A$
              </Math>
              {" "} (cf. Exercise 22), the graph 
              of the first composition...
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/iG8-.svg" />
            <Pause />
            <OuterP>
              ...is...
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the graph of {" "}
              <Math>
                $f$
              </Math>
              {" "} vertically scaled by {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              <br />
              translated up by {" "}
              <Math>
                $A$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              ...while the graph of the second composition...
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/uQnY.svg" />
            <Pause />
            <OuterP>
              ...is...
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the graph of {" "}
              <Math>
                $f$
              </Math>
              {" "} translated up by {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              <br />
              vertically scaled by {" "}
              <Math>
                $B$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              ...as we reason by gluing the boxes onto the {" "}
              <NoBreak>
                “
                <Math>
                  $f$
                </Math>
                ”
              </NoBreak>
              {" "} box 
              one-by-one.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={29}>
          <ExerciseStatement id="_113_hgi_">
            <OuterP>
              <b>
                Exercise 29.
              </b>
              {" "}
              What sequence of transformations of the plane
              maps the graph of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra \sin(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              onto the graph of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra \sin(Bx + C)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              We give a “physics-based answer”.
            </OuterP>
            <OuterP class="indent-10">
              As discussed in {" "}
              <NoBreak>
                <a
                  href="/article/chapter4#_67_hgi_"
                  class="handle-out-chapter-link"
                >
                  Exercise 12
                </a>
                ,
              </NoBreak>
              {" "} the function
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              t \ra \cos(Bt + C)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              describes, among others, the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of a
              particle going clockwise around the unit circle
              at {" "}
              <Math>
                $B$
              </Math>
              {" "} radians per unit time,
              starting at {" "}
              <Math>
                $C$
              </Math>
              {" "} radians clockwise from {" "}
              <Math>
                $(1, 0)$
              </Math>
              {" "}
              at time {" "}
              <NoBreak>
                <Math>
                  $t = 0$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              By the same token,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              t \ra \cos(t)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              describes (among others) the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of a
              particle going clockwise around the unit circle 
              at ONE radian per unit time, starting at ZERO radians
              clockwise from {" "}
              <Math>
                $(1, 0)$
              </Math>
              {" "} at time {" "}
              <NoBreak>
                <Math>
                  $t = 0$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              To get from the {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                -
              </NoBreak>
              <NoBreak>
                <Math>
                  $0$
                </Math>
                -graph
              </NoBreak>
              {" "} to the {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                -
              </NoBreak>
              <NoBreak>
                <Math>
                  $C$
                </Math>
                -graph
              </NoBreak>
              {" "}
              we need to do first things first, and start
              by translating the graph {" "}
              <Math>
                $y = \cos(t)$
              </Math>
              {" "} until the
              point {" "}
              <Math>
                $(C, \cos(C))$
              </Math>
              {" "} is at the origin, 
              i.e., the
              first thing is to translate the graph left by {" "}
              <Math>
                $C$
              </Math>
              {" "}
              units, so that the value {" "}
              <Math>
                $\cos(C)$
              </Math>
              {" "} is at {" "}
              <NoBreak>
                <Math>
                  $t = 0$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/CGPj.svg" />
            <Pause />
            <OuterP>
              Now that we have the value we want at {" "}
              <NoBreak>
                <Math>
                  $t = 0$
                </Math>
                ,
              </NoBreak>
              {" "}
              the next step is to “accelerate” the graph by a
              factor {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                —i.e.,
              </NoBreak>
              {" "} the second step is to
              {" "}
              <i>
                horizontally compress by a factor {" "}
                <Math>
                  $B$
                </Math>
              </i>
              , to
              reflect a particle going {" "}
              <Math>
                $B$
              </Math>
              {" "} radians per second,
              not {" "}
              <Math>
                $1$
              </Math>
              {" "} radian per second—here illustrated with
              {" "}
              <NoBreak>
                <Math>
                  $B = 5.5$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/lYEn.svg" />
            <Pause />
            <OuterP>
              And what goes for {" "}
              <Math>
                $\cos$
              </Math>
              {" "} goes for {" "}
              <Math>
                $\sin$
              </Math>
              {" "} (or 
              indeed for any function {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                ,
              </NoBreak>
              {" "} even though the
              physical interpretation is no longer at hand);
              but to recapitulate, the answer is the
              following sequence of two steps:
            </OuterP>
            <BoxedText
              class="px-0"
              style="padding-top:1.5rem;padding-bottom:1.5rem;"
            >
              <CentralDisplayItalic>
                1. horizontally translate the graph
                <br />
                by {" "}
                <Math>
                  $-C$
                </Math>
              </CentralDisplayItalic>
              <Pause />
              <CentralDisplayItalic>
                2. horizontally compress the resulting graph
                by a factor {" "}
                <Math>
                  $B$
                </Math>
              </CentralDisplayItalic>
            </BoxedText>
            <Pause />
            <TildeDivider style="margin-top:-1em" />
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                The first step corresponds to
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                phase adjustment
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                in the language of physicists (i.e., when
                a sinusoid is horizontally translated such that
                it crosses the {" "}
                <Math>
                  $y$
                </Math>
                {" "} axis at a desired
                location of its wave), while the second step
                can be described as
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                angular frequency adjustment
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                or just
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                frequency adjustment
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                if we imagine playing with the dial of a
                synthetizer and watching some blue wave modulate.
                (Recall that “angular frequency” is a synonym
                of “angular velocity”, meaning
                {" "}
                <i>
                  radians per unit time
                </i>
                .)
              </OuterP>
              <OuterP class="indent-10">
                Note that if you adjust the angular frequency
                {" "}
                <i>
                  before
                </i>
                {" "} adjusting the phase, the phase
                will need to be adjusted by a different amount,
                in order to account for the already-changed
                angular frequency; in that case, the sequence
                of transformations becomes:
              </OuterP>
              <BoxedText
                class="px-0"
                style="padding-top:1.5rem;padding-bottom:1.5rem;"
              >
                <CentralDisplayItalic>
                  1. horizontally compress the resulting graph
                  by a factor {" "}
                  <Math>
                    $B$
                  </Math>
                </CentralDisplayItalic>
                <Pause />
                <CentralDisplayItalic>
                  2. horizontally translate the graph by {" "}
                  <Math>
                    $-C/B$
                  </Math>
                </CentralDisplayItalic>
              </BoxedText>
              <OuterP>
                ...where the translation is now {" "}
                <Math>
                  $-C/B$
                </Math>
                {" "} instead
                of {" "}
                <Math>
                  $-C$
                </Math>
                {" "} to account for the fact that the graph
                has already been compressed when the translation
                is effected. (In fact, this alternate sequence of
                transformations and the {" "}
                <Math>
                  $C/B$
                </Math>
                {" "} term are directly 
                related to the fact that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                Bx + C
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                can be written
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                B(x + C/B)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                believe it or not.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={30}>
          <ExerciseStatement id="_114_hgi_">
            <OuterP>
              <b>
                Exercise 30.
              </b>
              {" "}
              An access staircase goes up the side of a
              hemispheric gas tank. It keeps a constant angle
              of {" "}
              <Math>
                $45^\circ$
              </Math>
              {" "} to vertical at its inside edge 
              until it reaches {" "}
              <Math>
                $45^\circ$
              </Math>
              {" "} up the tank, at which
              point it makes a beeline for the top:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/wF1d.svg" />
            <Pause />
            <OuterP>
              How long, roughly, is the inside handrail
              of the staircase as a function of the radius
              of the tank?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Putting {" "}
              <Math>
                $r$
              </Math>
              {" "} for the radius, the answer is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \approx r(1 + \eta/2)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              where
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              r\cdot 1=r
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              accounts for the first (lower) portion of the
              handrail, and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              r\cdot(\eta/2)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              accounts for the upper portion of the handrail.
              (Ignoring that the handrail doesn't quite
              follow through to the tippy-top of the gas tank,
              per the picture.)
            </OuterP>
            <OuterP class="indent-10">
              To reason about the lower portion of the handrail
              imagine a butterly that follows up the
              handrail by flying straight up and
              straight over, then straight up and straight
              over again, etc, like so:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/EiSR.svg" />
            <Pause />
            <OuterP>
              The total length of the handrail is the sum of
              all the diagonal segments (in dotted white) above.
              Because the diagonal segment has length
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;2&#125;h
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for a leg in which the butterly goes up by {" "}
              <NoBreak>
                <Math>
                  $h$
                </Math>
                ,
              </NoBreak>
              {" "} the
              total length of the diagonal segments is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              times the total amount that the butterfly goes up
              for the first half of the handrail. But this
              amount—call it {" "}
              <NoBreak>
                <Math>
                  $H$
                </Math>
                —is
              </NoBreak>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              r\cdot\sin(45^\circ) = r\cdot &#123;1\over \sqrt&#123;2&#125;&#125; = &#123;r\over \sqrt&#123;2&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as illustrated here:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/VrOC.svg" />
            <Pause />
            <OuterP>
              And therefore the sum of the white diagonal segments
              is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;2&#125;\cdot H = \sqrt&#123;2&#125;\cdot &#123;r\over \sqrt&#123;2&#125;&#125; = r
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...just {" "}
              <NoBreak>
                <Math>
                  $r$
                </Math>
                ,
              </NoBreak>
              {" "} as we said.
            </OuterP>
            <OuterP class="indent-10">
              On the other hand, the upper portion of the handrail
              has length
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              r\cdot(\eta/2)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (modulo the kerfuffle at the top) simply by the fact
              that, in a circle of radius {" "}
              <NoBreak>
                <Math>
                  $r$
                </Math>
                ,
              </NoBreak>
              {" "} an angle of {" "}
              <Math>
                $\alpha$
              </Math>
              {" "}
              radians subtends an arc of length {" "}
              <NoBreak>
                <Math>
                  $r\alpha$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/E5ov.svg" />
            <Pause />
            <OuterP>
              ...and hence the {" "}
              <i>
                total
              </i>
              {" "} length of the handrail
              is...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \approx r + r\cdot\eta/2 = r(1 + \eta/2)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...as claimed.
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                Another way to think about the length of the lower
                portion of the handrail is via the green triangle 
                depicted below, that drops down  onto the handrail
                like a curtain, starting at the top of the lower
                portion of the handrail:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/tyZN.svg" />
              <Pause />
              <OuterP>
                If we “unroll” the triangle onto a vertical plane
                while keeping its left edge vertical we find a 
                triangle with a straight lower edge at {" "}
                <Math>
                  $45^\circ$
                </Math>
                {" "}
                to horizontal, because that is the property of the
                handrail to maintain this angle everywhere:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/-SnV.svg" />
              <Pause />
              <OuterP>
                Hence the length of the lower half of the handrail
                is
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \large \sqrt&#123;2&#125;H
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                with {" "}
                <Math>
                  $H = r/\sqrt&#123;2&#125;$
                </Math>
                {" "} as previously defined.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={31}>
          <ExerciseStatement id="_115_hgi_">
            <OuterP>
              <b>
                Exercise 31.
              </b>
              {" "}
              Give a decimal approximation to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              r(1 + \eta/2)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for {" "}
              <NoBreak>
                <Math>
                  $r = 100$
                </Math>
                m,
              </NoBreak>
              {" "} accurate within {" "}
              <NoBreak>
                <Math>
                  $\pm 5\%$
                </Math>
                .
              </NoBreak>
              {" "} (No calculators.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \eta \approx &#123;11\over 7&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              within 1/1000th, we have
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
                 r(1 + \eta/2)\,\, \approx&amp;\,\,\,\dn&#123;1.3&#125;\up&#123;0.0&#125; r\left(1 + &#123;11\over 14&#125;\right)\\
                                         =&amp;\,\,\,\dn&#123;1.3&#125;\up&#123;1.3&#125; r\left(&#123;14 + 11\over 14&#125;\right)\\
                                         =&amp;\,\,\,\dn&#123;1.3&#125;\up&#123;1.3&#125; r\cdot &#123;25\over 14&#125;\\
                                         =&amp;\,\,\,\dn&#123;1.3&#125;\up&#123;1.3&#125; r\cdot &#123;28 - 3\over 14&#125;\\
                                         =&amp;\,\,\,\dn&#123;1.3&#125;\up&#123;1.3&#125; r\left(2 - &#123;3\over 14&#125;\right)\\
                                   \approx&amp;\,\,\,\dn&#123;1.3&#125;\up&#123;1.3&#125; r\left(2 - &#123;3\over 15&#125;\right)\\
                                         =&amp;\,\,\,\dn&#123;1.3&#125;\up&#123;1.3&#125; r\left(2 - &#123;1\over 5&#125;\right)\\
                                         =&amp;\,\,\,\dn&#123;1.3&#125;\up&#123;1.3&#125; r(2 - 0.2)\\
                                         =&amp;\,\,\,\dn&#123;0.0&#125;\up&#123;1.3&#125; 1.8r
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              leading to an approximation of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \approx 180\te&#123;m&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for {" "}
              <NoBreak>
                <Math>
                  $r = 100$
                </Math>
                m.
              </NoBreak>
              {" "}
              For a different, coarser approach, one can
              even use
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \eta \approx &#123;10.5\over 7&#125; = 1.5
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              which gives
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              1 + \eta/2 \approx 1.75
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and a final approximation of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \approx 175\te&#123;m&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for {" "}
              <NoBreak>
                <Math>
                  $r = 100$
                </Math>
                m.
              </NoBreak>
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                The two approximations given produce
                {" "}
                <NoBreak>
                  1
                  <Math>
                    $\%$
                  </Math>
                </NoBreak>
                {" "} and {" "}
                <NoBreak>
                  2
                  <Math>
                    $\%$
                  </Math>
                </NoBreak>
                {" "} of error, respectively, 
                or {" "}
                <Math>
                  $\approx 0.8\%$
                </Math>
                {" "} and {" "}
                <NoBreak>
                  <Math>
                    $\approx 1.9\%$
                  </Math>
                  ,
                </NoBreak>
                {" "} 
                more exactly, respectively. (For the
                second approximation,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                1.5
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is nearly {" "}
                <NoBreak>
                  5
                  <Math>
                    $\%$
                  </Math>
                </NoBreak>
                {" "} less than {" "}
                <Math>
                  $\eta/2$
                </Math>
                {" "} right
                off the bat, but the fraction represented
                by this error is diluted by the fact that
                we add 1.)
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                The true value is {" "}
                <NoBreak>
                  <Math>
                    $178.5$
                  </Math>
                  m,
                </NoBreak>
                {" "} as
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \eta/2 = 0.785\dots
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and some, as
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \eta = 1.570\dots
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and some. (Note that half of {" "}
                <Math>
                  $0.07$
                </Math>
                {" "} is {" "}
                <NoBreak>
                  <Math>
                    $0.035$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                and that {" "}
                <NoBreak>
                  <Math>
                    $0.75 + 0.035 = 0.785$
                  </Math>
                  .)
                </NoBreak>
                {" "} (PS: In fact,
                doing the division
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                1.57/2
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                “by head” constitutes another perfectly valid
                method of approximation, if you can remember
                that {" "}
                <NoBreak>
                  <Math>
                    $\eta = 1.570\dots$
                  </Math>
                  .)
                </NoBreak>
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={32}>
          <ExerciseStatement id="_116_hgi_">
            <OuterP>
              <b>
                Exercise 32.
              </b>
              {" "}
              From the first three steps of the
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
            <Image src="/build-img/svgo-svg/bA_Z.svg" />
            <Pause />
            <OuterP>
              Use this approximation of {" "}
              <Math>
                $\eta$
              </Math>
              {" "} to approximate
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              three-quarters the circumference
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of a circle of radius {" "}
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
              Since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \eta
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is one-quarter the circumference of a circle divided
              by its radius,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              3\eta
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is three-quarters the circumference of a circle divided
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
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              =\,\,4.5 + 0.21
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              =\,\,4.71
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              so three-quarters the circumference of a circle of radius {" "}
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
            </MathBlock>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                The following table gives approximation ratios
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
              </MathBlock>
              <Pause />
              <OuterP>
                For example,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                6.28
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is an approximation to the circumference of a circle
                divided by its radius, since {" "}
                <NoBreak>
                  <Math>
                    $6.28 = 4 \times 1.57$
                  </Math>
                  .
                </NoBreak>
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                While
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large&#123;11\over 7&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is about half-a-part-in-a-thousand
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                too large
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                compared to the true value of {" "}
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
                too small
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                due to the fact that the the long division of {" "}
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
              <Image src="/build-img/svgo-svg/qFb7.svg" />
              <Pause />
              <OuterP>
                ...we obtain the modified approximation...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \eta \approx 1.571
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...that is, for its part, an {" "}
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
              </MathBlock>
              <Pause />
              <OuterP>
                is still an {" "}
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
                {" "}
                In fact, the true value of {" "}
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
              </MathBlock>
              <Pause />
              <OuterP>
                and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;11\over 7&#125; = 1.571428\dots
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                being
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \,\eta = 1.570796\dots
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                per the calculator. (That knows this value by heart.)
                Taking into account that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                1.570796
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is {" "}
                <i>
                  basically
                </i>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                1.5708
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                gives us the following improved approximations of
                {" "}
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
              </MathBlock>
              <Pause />
              <OuterP>
                ...with these approximations being good to {" "}
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
        <Exercise number={33}>
          <ExerciseStatement id="_117_hgi_">
            <OuterP>
              <b>
                Exercise 33.
              </b>
              {" "}
              A ship travels from the South pole of a watery
              copy of the Earth to the North pole while maintaining
              a constant compass bearing of {" "}
              <Math>
                $5^\circ$
              </Math>
              {" "} North of East.
              (See Fig.) What is the length of the curve traced by the
              ship?
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/NUnQ.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Imagine that a butterfly that only flies by
              small steps East and North, alternately, follows 
              with the boat:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/tjm5.svg" />
            <Pause />
            <OuterP>
              (We replace
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Huge 5^\circ
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Huge \alpha
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              radians for more generality, that will make the
              problem no more nor less easy.) The total of all the
              small northward legs that the butterfly travels is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              20004\,\te&#123;km&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              or one-half the so-called {" "}
              <i>
                meridional circumference
              </i>
              {" "}
              of the Earth. But the total distance traveled
              by the ship is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Huge \csc(\alpha)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              times the sum of all the butterly's northward legs:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/u2Fw.svg" />
            <Pause />
            <OuterP>
              The total distance traveled by the ship
              is therefore
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 20004\,\te&#123;km&#125;\cdot \csc \alpha = &#123;20004\,\te&#123;km&#125; \over \sin \alpha&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              that comes out to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \sim 229520\,\te&#123;km&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              with {" "}
              <NoBreak>
                <Math>
                  $\alpha = 5^\circ$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                In reality the butterly's triangle is
                drawn on a spherical shell and it is
                only because the triangle is very small
                compared to the radius of the shell that
                it resembles an ordinary triangle, without
                quite being an ordinary triangle. But what
                is important is that the {" "}
                <i>
                  ratios
                </i>
                {" "} of the
                lengths of the butterly triangle approach
                those of an ordinary right triangle of
                angle {" "}
                <Math>
                  $\alpha$
                </Math>
                {" "} as we make the butterfly's
                triangle sufficiently small. 
                (Which is believable.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};