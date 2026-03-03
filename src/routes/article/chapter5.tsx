import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Boxed  from "~/components/Boxed";
import { CentralDisplay, CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { Item, List }  from "~/components/List";
import { MathBlock, Math }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageRight, ImageLeft }  from "~/components/SideImage";
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
      id="_125_hgi_"
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
          one can see from the graphs 
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
        <Image src="/build-img/svgo-svg/aPyP.svg" />
        <Pause />
        <OuterP>
          Per the definitions, the point half a
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
          it turns out, as we can know by
          a calculator equipped with ‘sin’ and ‘cos’):
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/SPMY.svg" />
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
        <Image src="/build-img/svgo-svg/T8lW.svg" />
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
        <Image src="/build-img/svgo-svg/BfG4.svg" />
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
            href="/article/chapter4#_80_hgi_"
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
              href="/article/chapter4#_66_hgi_"
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
            href="/article/chapter4#_64_hgi_"
            class="handle-out-chapter-link"
          >
            Exercise 10
          </a>
          {" "}
          and {" "}
          <NoBreak>
            <a
              href="/article/chapter4#_65_hgi_"
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
              href="/article/chapter4#_80_hgi_"
              class="handle-out-chapter-link"
            >
              Exercise 24
            </a>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <a
              href="/article/chapter4#_82_hgi_"
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
      <Section id="section-5">
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
          ...with the input appearing as a radian.
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
            ...with the input {" "}
            <Math>
              $\eta/2$
            </Math>
            {" "} being a displacement
            along the periphery of the unit circle,
            or like this...
          </OuterP>
          <Pause />
          <Image src="/build-img/svgo-svg/jn-F.svg" />
          <Pause />
          <OuterP>
            ...with the input {" "}
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
            Note.
          </i>
          {" "}
          Another thing to know about radians 
          is that the length of a circular
          arc subtended by an angle is its radian
          measure times the radius:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/8wuf.svg" />
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
          <span style="font-family:monaco;background-color:#bbb;font-size:0.8em;border-radius:0.4em;padding:0.1em 0.3em;">
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
          <span style="font-family:monaco;background-color:#bbb;font-size:0.8em;border-radius:0.4em;padding:0.1em 0.3em;">
            atan2(y, x)
          </span>
          {" "} not {" "}
          <span style="font-family:monaco;background-color:#bbb;font-size:0.8em;border-radius:0.4em;padding:0.1em 0.3em;">
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
      <Section
        work="ing"
        id="section-18"
      >
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
        <Example id="_83_hgi_">
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
              href="/article/chapter5#_83_hgi_"
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
      <Exercises id="_124_hgi_">
        <Exercise number={1}>
          <ExerciseStatement id="_84_hgi_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              {" "}
              Guesstimate a function with this graph:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/L2CX.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              It appears that the function is “a line plus
              something”, in the sense of the following
              diagram:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/tYzo.svg" />
            <Pause />
            <OuterP>
              (Or in the technical sense of taking the sum
              of two functions, to be more exact—that is what
              the sum of two functions looks like, pictorialized!)
            </OuterP>
            <OuterP class="indent-10">
              The line appears to be
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = &#123;1\over 4&#125;x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              making it a true {" "}
              <i>
                linear
              </i>
              {" "} function (as opposed
              to {" "}
              <i>
                affine
              </i>
              , cf. {" "}
              <NoBreak>
                <a
                  href="/article/chapter3#_53_hgi_"
                  class="handle-out-chapter-link"
                >
                  Chapter 3
                </a>
                ).
              </NoBreak>
              {" "}{" "}
            </OuterP>
            <OuterP class="indent-10">
              As for the “something”—the bumpy one—it appears
              to just be a “sped up cosine”, and note that
              the graph goes through approximately {" "}
              <Math>
                $10$
              </Math>
              {" "}
              cycles between {" "}
              <Math>
                $x = 0$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $x = 6.28 \approx 4\eta$
                </Math>
                ,
              </NoBreak>
              {" "}
              as we can count on the graph of the original
              function:
              <ImageLeft
                line={-2}
                src="/build-img/svgo-svg/9sIf.svg"
              />
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/tW8i.svg" />
            <Pause />
            <OuterP>
              As cos goes through {" "}
              <i>
                one
              </i>
              {" "} cycle from {" "}
              <Math>
                $x = 0$
              </Math>
              {" "} to
              {" "}
              <NoBreak>
                <Math>
                  $x = 4\eta$
                </Math>
                ,
              </NoBreak>
              {" "} the “bumpy function” is therefore
              (roughly, from what we can see) a {" "}
              <NoBreak>
                “
                <Math>
                  $10$
                </Math>
                &#x200b;
              </NoBreak>
              <NoBreak>
                <Math>
                  $\times$
                </Math>
                ”
              </NoBreak>
              {" "}
              sped-up version of cosine, i.e.,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = \cos(10x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              from which the guesstimate for the initial function
              would be
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = \cos(10x) + &#123;1\over 4&#125; x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              adding our two separate guesstimates together.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={2}>
          <ExerciseStatement id="_85_hgi_">
            <OuterP>
              <b>
                Exercise 2.
              </b>
              {" "}
              Guesstimate a function with this graph (we can
              tell you that the large-scale curve is a
              parabola):
            </OuterP>
            <Pause />
            <Image
              style="margin-top:0.8em;margin-bottom:1em;"
              src="/build-img/svgo-svg/yMU3.svg"
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Having intimated that the answer is the sum of
              a parabola and of some cosine deviant, let us
              focus on the parabolic portion first, that would
              namely be roughly this purple curve:
            </OuterP>
            <Pause />
            <Image
              style="margin-top:0.8em;margin-bottom:1em;"
              src="/build-img/svgo-svg/7pg9.svg"
            />
            <Pause />
            <OuterP>
              [Nb:
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              parabolic
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              is a synonym of
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              quadratic
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              or
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              degree {" "}
              <Math>
                $\mathit&#123;2&#125;$
              </Math>
              {" "} polynomial
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              i.e., a function of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra a_2x^2 + a_1x + a_0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for constants {" "}
              <NoBreak>
                <Math>
                  $a_2$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $a_1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $a_0 \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} cf. {" "}
              <NoBreak>
                <a
                  href="/article/chapter3#_53_hgi_"
                  class="handle-out-chapter-link"
                >
                  Chapter 3
                </a>
                .]
              </NoBreak>
              {" "}{" "}
            </OuterP>
            <OuterP class="indent-10">
              As the parabola is symmetric about the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis it will
              be of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = Ax^2 + C
              $$
            </MathBlock>
            <Pause />
            <OuterP>
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
                  $C \in \rr$
                </Math>
                .
              </NoBreak>
              {" "}
              (And specifically
              without a
              {" "}
              <NoBreak>
                “
                <Math>
                  $Bx$
                </Math>
                ”
              </NoBreak>
              {" "}
              term, that would break symmetry.)
            </OuterP>
            <OuterP class="indent-10">
              The value
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              C
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is easy because it is the value of the parabola at
              {" "}
              <NoBreak>
                <Math>
                  $x = 0$
                </Math>
                ,
              </NoBreak>
              {" "} which in this case appears to be {" "}
              <NoBreak>
                <Math>
                  $y = -3$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              style="margin-top:0.8em;margin-bottom:1em;"
              src="/build-img/svgo-svg/Wk9W.svg"
            />
            <Pause />
            <OuterP>
              ...so...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              C = -3
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (we say). For {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "}
              note that the parabola appears to have value {" "}
              <Math>
                $y \approx 3$
              </Math>
              {" "}
              at {" "}
              <NoBreak>
                <Math>
                  $x = \pm 12$
                </Math>
                ,
              </NoBreak>
              {" "} resulting in an increase of {" "}
              <Math>
                $\approx 6$
              </Math>
              {" "}
              between {" "}
              <Math>
                $x = 0$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $x = \pm 12$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              style="margin-top:0.8em;margin-bottom:1em;"
              src="/build-img/svgo-svg/XW1g.svg"
            />
            <Pause />
            <OuterP>
              That increase being entirely due to the term
              {" "}
              <NoBreak>
                <Math>
                  $Ax^2$
                </Math>
                ,
              </NoBreak>
              {" "} we get
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A \cdot 12^2 \approx 6
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (in more detail,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A\cdot 12^2 - A\cdot 0^2 \approx 6
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              but {" "}
              <Math>
                $A\cdot 0^2$
              </Math>
              {" "} goes away), meaning
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A \approx &#123;6\over 12^2&#125; = &#123;1\over 24&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              meaning that the quadratic portion of the function is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;x^2\over 24&#125; - 3
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              per this estimate.
            </OuterP>
            <OuterP class="indent-10">
              The other portion of the answer—what is left
              after the parabola is subtracted—is a cosine-like
              function (or {" "}
              <i>
                sinusoid
              </i>
              ) whose amplitude (the
              height of a bump) is roughly {" "}
              <NoBreak>
                <Math>
                  $0.5$
                </Math>
                ,
              </NoBreak>
              {" "} which is half the
              amplitude of
              sine/cosine:
            </OuterP>
            <Pause />
            <Image
              style="margin-top:0.8em;margin-bottom:1em;"
              src="/build-img/svgo-svg/MP5H.svg"
            />
            <Pause />
            <OuterP>
              Moreover at {" "}
              <Math>
                $x = 0$
              </Math>
              {" "} we find
              more or less exactly
              the {" "}
              <i>
                bottom
              </i>
              {" "} of a
              bump,
              so altogether
              we can use a function of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -0.5\cos(Bx)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              to model this sinusoid,
              where the multiplication by {" "}
              <Math>
                $0.5$
              </Math>
              {" "} gives us
              the desired amplitude and where the {" "}
              <NoBreak>
                ‘
                <Math>
                  $-$
                </Math>
                ’
              </NoBreak>
              {" "} gives
              us an anti-bump (“trough”?) instead of a bump at {" "}
              <NoBreak>
                <Math>
                  $x = 0$
                </Math>
                ;
              </NoBreak>
              {" "}
              on the other hand the value {" "}
              <Math>
                $B$
              </Math>
              {" "} will control the amount of
              horizontal compression inside the curve; specifically,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              B = 1
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              will give a curve that goes through one full cycle
              per interval of length {" "}
              <NoBreak>
                <Math>
                  $4\eta$
                </Math>
                ,
              </NoBreak>
              {" "}
              while, in general, an arbitrary value of {" "}
              <Math>
                $B$
              </Math>
              {" "} will give a
              curve that goes {" "}
              <Math>
                $B$
              </Math>
              {" "} full cycles
              per interval of length {" "}
              <Math>
                $4\eta$
              </Math>
              {" "} (the larger {" "}
              <Math>
                $B$
              </Math>
              {" "} is,
              the more “frenzied” the curve);
              in our case, it seems that {" "}
              <NoBreak>
                <Math>
                  $B \approx 20$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              style="margin-top:0.8em;margin-bottom:1em;"
              src="/build-img/svgo-svg/FLx-.svg"
            />
            <Pause />
            <OuterP>
              So an estimate for the
              second function
              would be...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -0.5\cos(20x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...giving us...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -0.5\cos(20x) + &#123;x^2\over 24&#125; - 3
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...for our final answer, after adding the parabola back.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={3}>
          <ExerciseStatement id="_86_hgi_">
            <OuterP>
              <b>
                Exercise 3.
              </b>
              {" "}
              Guesstimate a function with this graph:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/dt9I.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              First we estimate a function for the large-scale
              curve in purple:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/3ZYf.svg" />
            <Pause />
            <OuterP>
              It appears to be a linear function (line through
              {" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "} sloping down) plus a sinusoid. To
              estimate the slope of the linear function we can
              take two points in like relation to the sinusoid,
              draw a line between them and estimate the slope:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/r7Qe.svg" />
            <Pause />
            <OuterP>
              This makes the linear function portion of the purple
              curve
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = -&#123;1\over 4&#125;x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              or thereabouts.
            </OuterP>
            <OuterP class="indent-10">
              To model the sinusoid portion of the large-scale
              purple curve we need more measurements, such as
              the total height of the sinusoid from top of
              bump to bottom of trough; we can add a third “bottom
              of trough” dot, in same relation to the top of
              bumps (but we won't actually draw this dot or else
              we won't be able to see where we're measuring):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/CZVO.svg" />
            <Pause />
            <OuterP>
              So it appears that the sinusoid has a total height
              of {" "}
              <Math>
                $\approx 4$
              </Math>
              {" "} from top of bump to bottom of trough.
            </OuterP>
            <OuterP class="indent-10">
              (And in case you're confused by what we're trying
              to do,
              let us re-explain that we are trying
              to measure the vertical width of this blue band...
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/9l0x.svg" />
            <Pause />
            <OuterP>
              ...that, indeed, seems near {" "}
              <NoBreak>
                <Math>
                  $4$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              What this means is that if we remove the linear
              portion
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = -&#123;1\over 4&#125;x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              from the purple curve, what we will find is a
              sinusoid whose individual bumps have height {" "}
              <NoBreak>
                <Math>
                  $\approx 2$
                </Math>
                ;
              </NoBreak>
              {" "}
              something like this (we switch the color to aquamarine, so
              that “purple curve” retains its unique meaning):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/I-bw.svg" />
            <Pause />
            <OuterP>
              This graph has the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = -2\sin(Bx)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for some value of {" "}
              <Math>
                $B \in \rr$
              </Math>
              {" "} that, chosen correctly,
              will give us the desired “wavelength”. (Note that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = -\sin(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              has graph...
            </OuterP>
            <Pause />
            <Image
              style="margin-top:0.8em;margin-bottom:1em;"
              src="/build-img/svgo-svg/eM2n.svg"
            />
            <Pause />
            <OuterP>
              ...and that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = -2\sin(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              has graph...
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/YfcA.svg" />
            <Pause />
            <OuterP>
              ...and, from there, all that remains is to
              “slow down” the oscillation to match the
              aquamarine graph—the “slowing down” is what
              {" "}
              <Math>
                $B$
              </Math>
              {" "} is for.)
            </OuterP>
            <OuterP class="indent-10">
              To know how much {" "}
              <Math>
                $B$
              </Math>
              {" "} must be, we must measure
              the cycle length (it is, admittedly, hard to
              accurately determine the position of the top
              of each large-scale bump, but we do our best by
              basing ourselves off of what appear to be identical
              patterns in the small-scale oscillations at
              the top of each large-scale bump):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/So_Y.svg" />
            <Pause />
            <OuterP>
              As
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              12.6 \approx 12.56 = 2\times 6.28 \approx 2\cdot 4\eta
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              the period of the large-scale sinusoid is near
              twice the period of sin or cos; i.e., we need to
              “slow down”
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -2\sin(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by a factor {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                ,
              </NoBreak>
              {" "} i.e., put
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              B = 0.5
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              i.e., use
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = -2\sin(0.5x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for the large-scale sinusoid. (Aquamarine graph.)
            </OuterP>
            <OuterP class="indent-10">
              (So far we have
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -&#123;1\over 4&#125;x - 2\sin(0.5x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for our approximation to the purple curve, putting
              the linear and sinusoidal parts together. Now we
              move on from the purple curve.)
            </OuterP>
            <OuterP class="indent-10">
              It remains to add in the small-scale oscillation
              from the original curve; we can do the tedious
              part first, and count the number cycles in an
              interval of length {" "}
              <NoBreak>
                <Math>
                  $4\eta \approx 6.28$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/yXJ4.svg" />
            <Pause />
            <OuterP>
              So the small-scale oscillation is running
              at {" "}
              <Math>
                $\approx 19$
              </Math>
              {" "} times the frequency of an ordinary
              sine or cosine, and we can model the small-scale
              oscillation by
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra -0.5\sin(19x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              since, like the large-scale oscillation from the
              purple curve, it shares the same phase as {" "}
              <NoBreak>
                <Math>
                  $-\sin(x)$
                </Math>
                ,
              </NoBreak>
              {" "}
              and since, like the small-scale oscillation from
              {" "}
              <NoBreak>
                <InChapterLink
                  href="/article/chapter5#_85_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 2
                </InChapterLink>
                ,
              </NoBreak>
              {" "} it has
              an amplitude of {" "}
              <NoBreak>
                <Math>
                  $\approx 0.5$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              Altogether, we get
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = -&#123;1\over 4&#125;x - 2\sin(0.5x) - 0.5\sin(19x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as our “guesstimate”, while adding the linear
              function, the large-scale sinusoid, and the small-scale
              sinusoid together!
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={4}>
          <ExerciseStatement id="_87_hgi_">
            <OuterP>
              <b>
                Exercise 4.
              </b>
              {" "}
              Compute {" "}
              <Math>
                $A/B$
              </Math>
              {" "} assuming all same-colored
              triangles are similar and
              with the help of a calculator:
            </OuterP>
            <Pause />
            <Image
              style="width:500px;margin-top:1em;margin-bottom:1em;"
              src="/build-img/svgo-svg/OeWS.svg"
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              What we want is the multiplicative ratio that
              would take us from the bottom to the top side of
              this quadrilateral, so that we can multiply by that
              ratio over and over again:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/QIQa.svg" />
            <Pause />
            <OuterP>
              But the two triangles involved are
            </OuterP>
            <Pause />
            <CentralDisplay>
              NOT RIGHT TRIANGLES
            </CentralDisplay>
            <Pause />
            <OuterP>
              and we must break them into smaller parts that
              {" "}
              <i>
                are
              </i>
              {" "} right triangles in order to use trigonometric
              functions. Specifically, as per this drawing:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/IZD7.svg" />
            <Pause />
            <OuterP>
              The multiplicative ratios that correspond to the
              first and third arrows (in arrow-order from bottom
              to top) are
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(68^\circ\hlfbk)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \sin(59^\circ\hlfbk)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because these are “hypotenuse-to-opposite” arrows,
              while the multiplicative ratios that correspond to the
              second and fourth arrows are
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \csc(71^\circ\hlfbk)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \csc(60^\circ\hlfbk)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because these are the opposite (no pun intended),
              i.e.,“opposite-to-hypotenuse” arrows. The “big grey
              arrow” ratio from two diagrams ago is obtained by multiplying
              these four small-arrow ratios together, or
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(68^\circ\hlfbk)\times\csc(71^\circ\hlfbk)\times\sin(59^\circ\hlfbk)\times\csc(60^\circ\hlfbk)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (that can also be written
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\sin(68^\circ\hlfbk)\times\sin(59^\circ\hlfbk) \over \sin(71^\circ\hlfbk)\times\sin(60^\circ\hlfbk)&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because {" "}
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
            </MathBlock>
            <Pause />
            <OuterP>
              meaning that the top side of the quadrilateral tile is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              97\%
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and some the length of the bottom side; taking
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
            </MathBlock>
            <Pause />
            <OuterP>
              which is the desired ratio {" "}
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
                {" "}
                While the final answer can be written
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (\sin(68^\circ\hlfbk)\cdot\csc(71^\circ\hlfbk)\cdot\sin(59^\circ\hlfbk)\cdot\csc(60^\circ\hlfbk))^&#123;36&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                or
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \left(&#123;\sin(68^\circ\hlfbk)\cdot\sin(59^\circ\hlfbk) \over \sin(71^\circ\hlfbk)\cdot\sin(60^\circ\hlfbk)&#125;\right)^&#123;\!36&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                teachers typically want to see such expressions
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
                {" "}
                Instead of counting the number of times that the
                quadrilateral appears in the double spiral by hand
                one can
                calculate the amount of rotation between one
                quadrilateral and the next, which is this purple angle:
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1em;"
                src="/build-img/svgo-svg/FQro.svg"
              />
              <Pause />
              <OuterP>
                The key to measuring this
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
              />
              <Pause />
              <OuterP>
                Then we can calculate the purple angle as
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                68^\circ + 71^\circ + 61^\circ - 180^\circ = 20^\circ
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                meaning that each quadrilateral is rotated by {" "}
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
              </MathBlock>
              <Pause />
              <OuterP>
                quadrilaterals, or
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                2 \times 18 = 36
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                quadrilaterals for two turns!
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise
          work="ing"
          number={5}
        >
          <ExerciseStatement id="_88_hgi_">
            <OuterP>
              <b>
                Exercise 5.
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
            <Image src="/build-img/svgo-svg/huBu.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra \sin^2 x
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              x \ra \cos^2 x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              are nonnegative [the square of a number
              is nonnegative]
              these functions must either be
              the top right or bottom left graphs, as the
              other two graphs weave in and out of negative territory;
              given additionally that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \,\cos(0) = 1,
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \sin(0) = 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              we can further deduce that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra \sin^2 x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              can only be the top right graph, and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra \cos^2 x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              can only be the bottom left graph; moreover, since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              |\sin x \cdot \cos x| \leq 1
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for all {" "}
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
            <Image src="/build-img/svgo-svg/Ninz.svg" />
            <Pause />
            <OuterP>
              ...this one!
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                These are in fact the actual graphs of
                the stated functions, not just “plausible” graphs.
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                It is
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
        <Exercise number={6}>
          <ExerciseStatement id="_89_hgi_">
            <OuterP>
              <b>
                Exercise 6.
              </b>
              {" "}
              Where or how, if at all, is the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              pythagorean identity
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              apparent in the four graphs of {" "}
              <NoBreak>
                <InChapterLink
                  href="/article/chapter5#_88_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 5
                </InChapterLink>
                ?
              </NoBreak>
              {" "}{" "}
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Imagine turning the graphs {" "}
              <Math>
                $y = \sin^2(x)$
              </Math>
              {" "}
              and {" "}
              <Math>
                $y = \cos^2(x)$
              </Math>
              {" "} into wooden cutouts:
            </OuterP>
            <Pause />
            <Image
              style="margin-top:1.1em;margin-bottom:1.1em;"
              src="/build-img/svgo-svg/hRhs.svg"
            />
            <Pause />
            <Image
              style="margin-top:1.1em;margin-bottom:1.1em;"
              src="/build-img/svgo-svg/nEBv.svg"
            />
            <Pause />
            <OuterP>
              It seems that if we would vertically flip
              one of the cutouts (in this case {" "}
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
            />
            <Pause />
            <OuterP>
              This is no illusion: 
              it occurs because
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos^2(x) + \sin^2(x) = 1
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
              {" "} 
              i.e., because of 
              the pythagorean identity!
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={7}>
          <ExerciseStatement id="_90_hgi_">
            <OuterP>
              <b>
                Exercise 7.
              </b>
              {" "}
              Which of these angles is {" "}
              <Math>
                $0.2$
              </Math>
              {" "} radians?
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/lwHG.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              An angle is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0.2
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              radians if the length of the subtended arc is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              20\%
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              the length of the radius;
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
            />
            <Pause />
            <StarDivider />
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                If you zoom in
                a little bit
                you can actually see
                {" "}
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
              />
              <Pause />
              <OuterP>
                (&#8201;Joking.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={8}>
          <ExerciseStatement id="_91_hgi_">
            <OuterP>
              <b>
                Exercise 8.
              </b>
              {" "}
              In the drawing below the oval is a circle of
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
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The {" "}
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
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y_0 + r\cdot \sin(\phi)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              r\cdot\cos(\phi)
              $$
              <ImageRight
                src="/build-img/svgo-svg/8O7n.svg"
                offset_x="6em"
                compensate_offset_x_for_large_text_columns={true}
              />
            </MathBlock>
            <Pause />
            <OuterP>
              is the difference from the center of the
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
                offset_x="7.75em"
                compensate_offset_x_for_large_text_columns={true}
              />
            </MathBlock>
            <Pause />
            <OuterP>
              is the difference from the center of the circle to {" "}
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
        <Exercise number={9}>
          <ExerciseStatement id="_92_hgi_">
            <OuterP>
              <b>
                Exercise 9.
              </b>
              {" "}
              What ratios do
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \eta
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              4\eta
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              represent?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              While {" "}
              <Math>
                $\eta$
              </Math>
              {" "} was defined
              as the quarter-circumference of a unit circle,
              more generally,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \eta
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the quarter-circumference of a circle (any
              circle) divided by its radius, and, correspondingly,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              4\eta
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the circumference of a circle (any circle)
              divided by its radius.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={10}>
          <ExerciseStatement id="_93_hgi_">
            <OuterP>
              <b>
                Exercise 10.
              </b>
              {" "}
              If a
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              vector
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              is {" "}
              <i>
                a pair of numbers
              </i>
              {" "} (in 2D), suggest a
              definition for the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              sum
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of two vectors. (The most logical definition wins.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The standard definition is that the sum
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \vec&#123;u&#125; + \vec&#123;v&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              of a vector
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \vec&#123;u&#125; = (u_x, u_y)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and of a vector
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \vec&#123;v&#125; = (v_x, v_y)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the vector
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (u_x + v_x, u_y + v_y)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              whose first coordinate is the sum of the first
              coordinates of {" "}
              <Math>
                $\vec&#123;u&#125;$
              </Math>
              {" "} and {" "}
              <Math>
                $\vec&#123;v&#125;$
              </Math>
              {" "} and whose
              second coordinate is the sum of the second coordinates
              of {" "}
              <Math>
                $\vec&#123;u&#125;$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $\vec&#123;v&#125;$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Example 1.
              </i>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \vec&#123;u&#125; = (100, 100)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \vec&#123;v&#125; = (1, -1)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              then
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \,\vec&#123;u&#125; + \vec&#123;v&#125; = (101, 99)
              $$
              <ImageRight
                src="/build-img/svgo-svg/rUfo.svg"
                offset_x="1em"
                compensate_offset_x_for_large_text_columns={true}
              />
            </MathBlock>
            <Pause />
            <OuterP>
              because
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              100 + 1 = 101
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              on the one hand, and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              100 - 1 = 99
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              on the other hand.
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                The little arrow {" "}
                <NoBreak>
                  “
                  <Math>
                    $\vec&#123;\phantom&#123;x&#125;&#125;$
                  </Math>
                  ”
                </NoBreak>
                {" "}
                is a notation used to denote vectors. (Feel free
                to choose your own notation.)
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                If we represent the vectors {" "}
                <NoBreak>
                  <Math>
                    $\vec&#123;u&#125;$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $\vec&#123;v&#125;$
                </Math>
                {" "}
                by arrows whose components are displacements {" "}
                <NoBreak>
                  <Math>
                    $u_x$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                {" "}
                <NoBreak>
                  <Math>
                    $u_y$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $v_x$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $v_y$
                </Math>
                {" "} in {" "}
                <NoBreak>
                  <Math>
                    $x$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $y$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $x$
                </Math>
                {" "} and {" "}
                <Math>
                  $y$
                </Math>
                {" "} again
                respectively...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/Sx1Y.svg" />
              <Pause />
              <OuterP>
                ...then..
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                u_x + v_x
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                may be geometrically realized as the concatenation
                of the {" "}
                <Math>
                  $u_x$
                </Math>
                {" "} and {" "}
                <NoBreak>
                  <Math>
                    $v_x$
                  </Math>
                  ...
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/JkS_.svg" />
              <Pause />
              <OuterP>
                ...component displacements, while...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                u_y + v_y
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...may be geometrically realized as the concatenation
                of the {" "}
                <Math>
                  $u_y$
                </Math>
                {" "} and {" "}
                <NoBreak>
                  <Math>
                    $v_y$
                  </Math>
                  ...
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/efoR.svg" />
              <Pause />
              <OuterP>
                ...component displacements; moreover, both
                concatenations may be simultaneously obtained by
                concatenating the original {" "}
                <Math>
                  $\vec&#123;u&#125;$
                </Math>
                {" "} and {" "}
                <Math>
                  $\vec&#123;v&#125;$
                </Math>
                {" "}
                arrows...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/Qnaf.svg" />
              <Pause />
              <OuterP>
                ...which actually implies that {" "}
                <Math>
                  $\vec&#123;u&#125; + \vec&#123;v&#125;$
                </Math>
                {" "}
                is the vector going from the head of {" "}
                <Math>
                  $\vec&#123;u&#125;$
                </Math>
                {" "} to
                the tail of {" "}
                <Math>
                  $\vec&#123;v&#125;$
                </Math>
                {" "} in the afore-mentioned
                concatenation, because of how we defined
                {" "}
                <NoBreak>
                  <Math>
                    $\vec&#123;u&#125; + \vec&#123;v&#125;$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/7Z4q.svg" />
              <Pause />
              <OuterP>
                This makes a mess, but the point is that this
                gives us a
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                geometric interpretation
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                or
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                geometric representation
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                or
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                geometric method of evaluation
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                for the sum of two vectors: concatenate the arrows
                of the vectors you're summing, and take the final
                displacement from the head of the first arrow to the
                tail of the last arrow.
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 3.
                </i>
                {" "}
                The solution to Exercise 7 can be cast in terms of
                vector addition, with, specifically, the position
                vector of the point being equal to the sum of the
                position vector of the circle's center with the “radial
                vector” from the center to the point:
              </OuterP>
              <Pause />
              <Image
                style="margin-top:1em;margin-bottom:0.8em;"
                src="/build-img/svgo-svg/Mzki.svg"
              />
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={11}>
          <ExerciseStatement id="_94_hgi_">
            <OuterP>
              <b>
                Exercise 11.
              </b>
              {" "}
              If a particle in {" "}
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
            </MathBlock>
            <Pause />
            <OuterP>
              at time {" "}
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
              The simplest motion that would produce such
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
            <List style="padding-left: 2em; gap: 0.2em;">
              <Item>
                <p>
                  <Math>
                    $A$
                  </Math>
                  {" "} is the radius of the circle
                </p>
              </Item>
              <Item>
                <p>
                  <Math>
                    $D$
                  </Math>
                  {" "} is the {" "}
                  <NoBreak>
                    <Math>
                      $x$
                    </Math>
                    -coordinate
                  </NoBreak>
                  {" "} of the circle's center
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              And either:
            </OuterP>
            <Pause />
            <List style="padding-left: 2em;">
              <Item>
                <p>
                  <Math>
                    $B$
                  </Math>
                  {" "} is the counterclockwise
                  {" "}
                  <i>
                    angular speed
                  </i>
                  /
                  <i>
                    angular frequency
                  </i>
                  {" "} (radians per
                  unit time) and {" "}
                  <Math>
                    $C$
                  </Math>
                  {" "} is the counterclockwise
                  starting angle {" "}
                  <NoBreak>
                    (
                    <Math>
                      $t = 0$
                    </Math>
                    )
                  </NoBreak>
                  {" "} of the particle, as
                  measured from a translate of the positive {" "}
                  <Math>
                    $x$
                  </Math>
                  {" "}
                  axis going through the center of the circle
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              Or:
            </OuterP>
            <Pause />
            <List style="padding-left: 2em;">
              <Item>
                <p>
                  <Math>
                    $B$
                  </Math>
                  {" "} is the {" "}
                  <i>
                    clockwise
                  </i>
                  {" "}
                  angular speed/angular frequency of the particle
                  and {" "}
                  <Math>
                    $C$
                  </Math>
                  {" "} is the {" "}
                  <i>
                    clockwise
                  </i>
                  {" "} starting angle
                  of the particle, as measured from a translate of
                  the positive {" "}
                  <Math>
                    $x$
                  </Math>
                  {" "} axis going through the center
                  of the circle
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              In more detail, every time
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              t
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              increases by {" "}
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
            </MathBlock>
            <Pause />
            <OuterP>
              increases by {" "}
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
            </MathBlock>
            <Pause />
            <OuterP>
              is an amount of radians, because anything
              fed to ‘cos’ is an amount of radians; and so
              {" "}
              <Math>
                $B$
              </Math>
              {" "} ends up being the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              radian increase per unit time,
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              or angular speed, of the particle.
            </OuterP>
            <OuterP class="indent-10">
              However, said “increase” in radians can be
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
              the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of a point {" "}
              <Math>
                $x$
              </Math>
              {" "} units
              <br />
              counterclockwise from {" "}
              <Math>
                $(1, 0)$
              </Math>
              {" "} on the unit circle
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <Math>
                $\cos(x)$
              </Math>
              {" "} is also
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of a point {" "}
              <Math>
                $x$
              </Math>
              {" "} units
              <br />
              clockwise from {" "}
              <Math>
                $(1, 0)$
              </Math>
              {" "} on the unit circle
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              [“counterclockwise” {" "}
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
            </MathBlock>
            <Pause />
            <OuterP>
              is an amount of counterclockwise radians; per
              the other,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              Bt + C
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is an amount of {" "}
              <i>
                clockwise
              </i>
              {" "} radians. The following
              diagram illustrates the two possibilities:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/rUnE.svg" />
            <Pause />
            <OuterP>
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
                {" "}
                If you harbor any doubts about there being no more
                than two solutions, picture this diagram...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/0eyH.svg" />
              <Pause />
              <OuterP>
                ...and imagine the vertical line scanning
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
          <ExerciseStatement id="_95_hgi_">
            <OuterP>
              <b>
                Exercise 12.
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
        <Exercise number={13}>
          <ExerciseStatement id="_96_hgi_">
            <OuterP>
              <b>
                Exercise 13.
              </b>
              {" "}
              If, 
              in {" "}
              <NoBreak>
                <InChapterLink
                  href="/article/chapter5#_95_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 12
                </InChapterLink>
                ,
              </NoBreak>
              {" "}
              we modify the definition of the angle {" "}
              <Math>
                $\phi$
              </Math>
              {" "}
              to be {" "}
              <NoBreak>
                <Math>
                  $P$
                </Math>
                's
              </NoBreak>
              {" "} elevation above the {" "}
              <NoBreak>
                <Math>
                  $xy$
                </Math>
                -plane,
              </NoBreak>
              {" "}
              {" "}
              <NoBreak>
                <Math>
                  $\phi \in [-\eta, \eta]$
                </Math>
                ,
              </NoBreak>
              {" "}
              as illustrated below, 
              how are the corresponding change-of-coordinate 
              formulas affected?
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/haQ7.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \phi \in [-\eta, \eta]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              one has
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(\phi) \geq 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              R\cos(\phi) \geq 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              from which {" "}
              <Math>
                $R\cos(\phi)$
              </Math>
              {" "} becomes the 
              length of
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
                -plane,
              </NoBreak>
              {" "}
              similarly to {" "}
              <Math>
                $R\sin(\phi)$
              </Math>
              {" "} being that
              length in {" "}
              <NoBreak>
                <InChapterLink
                  href="/article/chapter5#_95_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 12
                </InChapterLink>
                ,
              </NoBreak>
              {" "}
              while on the other the other hand,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              R\sin(\phi)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is a signed quantity equal to {" "}
              <NoBreak>
                <Math>
                  $z$
                </Math>
                ,
              </NoBreak>
              {" "} similarly
              to {" "}
              <Math>
                $R\cos(\phi)$
              </Math>
              {" "} in {" "}
              <NoBreak>
                <InChapterLink
                  href="/article/chapter5#_95_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 12
                </InChapterLink>
                :
              </NoBreak>
              {" "}{" "}
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/3aFp.svg" />
            <Pause />
            <OuterP>
              The coordinate transformations are
              thus obtained by interchanging {" "}
              <NoBreak>
                “
                <Math>
                  $\sin(\phi)$
                </Math>
                ”
              </NoBreak>
              {" "} and
              {" "}
              <NoBreak>
                “
                <Math>
                  $\cos(\phi)$
                </Math>
                ”
              </NoBreak>
              {" "} in the formulas of {" "}
              <NoBreak>
                <InChapterLink
                  href="/article/chapter5#_95_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 12
                </InChapterLink>
                ,
              </NoBreak>
              {" "}
              giving us:
            </OuterP>
            <Boxed style="margin-bottom:0em;">
              <MathBlock>
                $$
                x = R\cos(\phi)\cos(\theta)
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                y = R\cos(\phi)\sin(\theta)
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                z = R\sin(\phi)
                $$
              </MathBlock>
            </Boxed>
            <Pause />
            <StarDivider />
          </Solution>
        </Exercise>
        <Exercise number={14}>
          <ExerciseStatement id="_97_hgi_">
            <OuterP>
              <b>
                Exercise 14.
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
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              212.65
              $$
              <ImageLeft
                src="/build-img/svgo-svg/O1mN.svg"
                offset_x="10em"
                compensate_offset_x_for_large_text_columns={true}
              />
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
        <Exercise number={15}>
          <ExerciseStatement id="_98_hgi_">
            <OuterP>
              <b>
                Exercise 15.
              </b>
              {" "}
              Given the following sketch, to what angle
              can the door be opened before it hits against
              the roof? (Hint: You will need to Google “how
              to use arctan”, or “how to convert from Cartesian
              to polar coordinates”.)
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
        <Exercise number={16}>
          <ExerciseStatement id="_99_hgi_">
            <OuterP>
              <b>
                Exercise 16.
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
              1, \sec \theta, \,\sec^2(\theta), \,\sec^3(\theta), \,\sec^4(\theta), \dots
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
            <Image src="/build-img/svgo-svg/uqSS.svg" />
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
            <Image src="/build-img/svgo-svg/2Pqq.svg" />
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
            <Image src="/build-img/svgo-svg/H7R8.svg" />
            <Pause />
            <OuterP>
              Though in fact, this tower is already embedded
              as a subdiagram of our first illustration (modulo
              scale and orientation) (!):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/Xdq7.svg" />
            <Pause />
            <OuterP>
              In each of these diagrams, in fact,
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
            <Image src="/build-img/svgo-svg/ICZK.svg" />
            <Pause />
            <OuterP>
              Two slight variants on another diagram (for
              which more labelings are also possible):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/CvsG.svg" />
            <Pause />
            <OuterP>
              The following is the first few steps of a diagram
              that would be self-intersecting (and make
              a mess) for {" "}
              <NoBreak>
                <Math>
                  $\theta \leq \eta/2$
                </Math>
                ,
              </NoBreak>
              {" "} so
              we draw it with {" "}
              <NoBreak>
                <Math>
                  $\theta &gt; \eta/2$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/_95g.svg" />
            <Pause />
            <OuterP>
              Zoomed out, with more steps:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/9Xj5.svg" />
            <Pause />
            <OuterP>
              ...but by this time the aliens are sick of hearing you
              talk about secant, and have moved on to another planet.
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                The last spiral is actually obtained by folding the “triangle tower”
                over, as below:
              </OuterP>
              <Pause />
              <Image
                style="margin-top:-0.7em;"
                src="/build-img/svgo-svg/5YcI.svg"
              />
              <Pause />
              <OuterP>
                ...as each crease is folded in order, the next biggest
                triangle (on the outside edge of the crease) encompasses
                all folded-over-stuff-so-far!
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                One way to formally verify that...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/ci-a.svg" />
              <Pause />
              <OuterP>
                ...in this diagram...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/UspN.svg" />
              <Pause />
              <OuterP>
                ...is to note that...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/VLwm.svg" />
              <Pause />
              <MathBlock>
                $$
                \Large
                &#123;\sec^3(\theta) - \sec(\theta)\over \sec^2(\theta)&#125; = &#123;\sec(\theta)(\sec^2(\theta) - 1)\over \sec^2(\theta) - 1&#125; = \sec(\theta)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...by direct measure and simplifying the fraction.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={17}>
          <ExerciseStatement id="_100_hgi_">
            <OuterP>
              <b>
                Exercise 17.
              </b>
              {" "}
              The graph {" "}
              <Math>
                $y = \cos x + \sin x$
              </Math>
              {" "} from {" "}
              <InChapterLink
                href="/article/chapter5#_88_hgi_"
                class="handle-in-chapter-link"
              >
                Exercise 5
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
              (Reason geometrically, NOT by calculus.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              From basics,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos x + \sin x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the sum
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
            <Image src="/build-img/svgo-svg/xf9D.svg" />
            <Pause />
            <OuterP>
              The displacements can be summed geometrically
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
            <Image src="/build-img/svgo-svg/byhq.svg" />
            <Pause />
            <OuterP>
              For short:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/2Wso.svg" />
            <Pause />
            <OuterP>
              This generalizes all over the circle (...
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/Q0sd.svg" />
            <Pause />
            <Image src="/build-img/svgo-svg/rIoB.svg" />
            <Pause />
            <Image src="/build-img/svgo-svg/50WM.svg" />
            <Pause />
            <OuterP>
              ...some more examples) and,
              given this description, it seems obvious (or:
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
            <Image src="/build-img/svgo-svg/xwF6.svg" />
            <Pause />
            <OuterP>
              (Individually, we have
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \,\cos(\eta/2)= \sqrt&#123;0.5&#125; = &#123;1 \over \sqrt&#123;2&#125;&#125;,
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \sin(\eta/2)=\sqrt&#123;0.5&#125; = &#123;1 \over \sqrt&#123;2&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and when we add those two together we get {" "}
              <NoBreak>
                <Math>
                  $&#123;2\over \sqrt&#123;2&#125;&#125; = \sqrt&#123;2&#125;$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              For the lawyers, we must add that
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              any multiple of {" "}
              <Math>
                $4\eta$
              </Math>
              {" "} can be added
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              [we don't need to say “or subtracted”
              because “multiple” intimates “integer multiple”,
              which subsumes negative multiples, hehe]
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
                {" "}
                A similar minimum of
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \large
                -\sqrt&#123;2&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                occurs at {" "}
                <Math>
                  $x = -135^\circ$
                </Math>
                {" "}
                and its added multiples of {" "}
                <NoBreak>
                  <Math>
                    $360^\circ$
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
                Annotating the graph of {" "}
                <Math>
                  $x \ra \cos x + \sin x$
                </Math>
                {" "}
                with this new information, in degrees and in radians:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/GHRw.svg" />
              <Pause />
              <Image src="/build-img/svgo-svg/BJ2x.svg" />
              <Pause />
              <OuterP>
                (Note that {" "}
                <Math>
                  $45^\circ = 0.78539\ldots = \eta/2$
                </Math>
                {" "}
                as a real number, 
                the two graphs really express the same thing.)
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 3.
                </i>
                {" "}
                Note that...
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
              </MathBlock>
              <Pause />
              <OuterP>
                ...in case you're not familiar with this kind of
                arithmetic!
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={18}>
          <ExerciseStatement id="_101_hgi_">
            <OuterP>
              <b>
                Exercise 18.
              </b>
              {" "}
              Compute
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;11\over 7&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by hand using long division.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Here is the division in American notation
              overlayed on top of a “Plaza” wallpaper to
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
            <Image src="/build-img/svgo-svg/Mpne.svg" />
            <Pause />
            <OuterP>
              The division stops when we see the same
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
              </MathBlock>
            </div>
            <OuterP>
              ...where the decimal point is after the
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
                {" "}
                If you've never done this kind of thing before, the
                division starts in this blank state:
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1.4em;"
                src="/build-img/svgo-svg/Izko.svg"
              />
              <Pause />
              <OuterP>
                We take the first digit of the numerator,
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
              />
              <Pause />
              <OuterP>
                The answer is {" "}
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
              />
              <Pause />
              <OuterP>
                We next add a digit from the numerator, giving
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
              />
              <Pause />
              <OuterP>
                The answer is {" "}
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
              />
              <Pause />
              <OuterP>
                We subtract
              </OuterP>
              <div style="font-size:1.65em;margin:1em 0;">
                <MathBlock>
                  $$
                  1 \times 7
                  $$
                </MathBlock>
              </div>
              <OuterP>
                from {" "}
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
              />
              <Pause />
              <OuterP>
                Because {" "}
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
              />
              <Pause />
              <OuterP>
                We ask “how many times does {" "}
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
              />
              <Pause />
              <OuterP>
                The answer is {" "}
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
              />
              <Pause />
              <OuterP>
                We subtract
              </OuterP>
              <div style="font-size:1.65em;margin:1em 0;">
                <MathBlock>
                  $$
                  5\times 7
                  $$
                </MathBlock>
              </div>
              <OuterP>
                from {" "}
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
              />
              <Pause />
              <OuterP>
                Because {" "}
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
              />
              <Pause />
              <OuterP>
                (Etc.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={19}>
          <ExerciseStatement id="_102_hgi_">
            <OuterP>
              <b>
                Exercise 19.
              </b>
              {" "}
              Compute
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;22\over 7&#125;, \,\,\,\,\, &#123;33\over 7&#125;, \,\,\,\,\,\rm&#123;and&#125;\,\,\,\,\,&#123;44\over 7&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by hand using long division.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The divisions, pursued up to the point where
              remainders repeat, look as follows:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/CURd.svg" />
            <Pause />
            <OuterP>
              In each case, the digits of the quotient
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
                {" "}
                Because...
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
              </MathBlock>
              <Pause />
              <OuterP>
                ...we thus have...
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
              </MathBlock>
              <Pause />
              <OuterP>
                ...though each estimate is only accurate to
                two decimal places, meaning that the last four
                digits of the period are “wasted (in)accuracy”.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={20}>
          <ExerciseStatement id="_103_hgi_">
            <OuterP>
              <b>
                Exercise 20.
              </b>
              {" "}
              To close our division skills: use the
              table below to compute the integer part and
              the first three digits past the decimal point
              (no rounding based on the fourth digit) of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              15542486476949/777
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by hand, using long division. What is the
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
            </MathBlock>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Here is the long division, pursued up to
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
              that occurs pursuant to adding the digit in
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
            <Image src="/build-img/svgo-svg/yLyJ.svg" />
            <Pause />
            <OuterP>
              Said quotient is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              20003200099.033
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              while the new (last) remainder is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0.359
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and the equation linking the two is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              15542486476949 = 777 \times 20003200099.033 + 0.359
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              per properties of the long division algorithm.
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                Lest anyone get left behind, we can go
                over the division “on the board”
                for a bit.
              </OuterP>
              <OuterP class="indent-10">
                We start by asking “how many times does {" "}
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
              <Image src="/build-img/svgo-svg/x9Ng.svg" />
              <Pause />
              <OuterP>
                The answer is {" "}
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
              <Image src="/build-img/svgo-svg/6uMQ.svg" />
              <Pause />
              <OuterP>
                The answer is {" "}
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
              <Image src="/build-img/svgo-svg/D10R.svg" />
              <Pause />
              <OuterP>
                The answer is {" "}
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
              <Image src="/build-img/svgo-svg/2kAo.svg" />
              <Pause />
              <OuterP>
                The answer is {" "}
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
              <Image src="/build-img/svgo-svg/qwI2.svg" />
              <Pause />
              <OuterP>
                (FYI, the remainder now consists of these yellow
                digits:)
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/mxCX.svg" />
              <Pause />
              <OuterP>
                Continuing, we bring down a {" "}
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
              <Image src="/build-img/svgo-svg/SaeW.svg" />
              <Pause />
              <OuterP>
                The answer is {" "}
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
              <Image src="/build-img/svgo-svg/sCyt.svg" />
              <Pause />
              <OuterP>
                The answer is {" "}
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
              <Image src="/build-img/svgo-svg/QJ-A.svg" />
              <Pause />
              <OuterP>
                The answer is {" "}
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
              <Image src="/build-img/svgo-svg/aGjl.svg" />
              <Pause />
              <OuterP>
                The answer is {" "}
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
              <Image src="/build-img/svgo-svg/mwDw.svg" />
              <Pause />
              <OuterP>
                (And to be specific, the remainder is now formed
                by...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/zsA9.svg" />
              <Pause />
              <OuterP>
                ...these yellow digits.) Etc.
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                If you need help brushing up on your
                long-form subtraction, say your subtraction is this:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/DL_-.svg" />
              <Pause />
              <OuterP>
                You can either treat the top or bottom number as an
                odometer, and count how much a car with this
                odometer must be driven back/forth to reach the other
                number.
              </OuterP>
              <OuterP class="indent-10">
                Viewing the top number as an odometer, the odometer
                would be as follows:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/tkDH.svg" />
              <Pause />
              <OuterP>
                Starting from the right end of the subtraction, we ask
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
              <Image src="/build-img/svgo-svg/eoA2.svg" />
              <Pause />
              <OuterP>
                The answer is: {" "}
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
              <Image src="/build-img/svgo-svg/XKhM.svg" />
              <Pause />
              <OuterP>
                But the odometer will pass
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
              <Image src="/build-img/svgo-svg/5nhK.svg" />
              <Pause />
              <OuterP>
                Next we ask “by how many {" "}
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
              <Image src="/build-img/svgo-svg/_-US.svg" />
              <Pause />
              <OuterP>
                The answer is: {" "}
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
              <Image src="/build-img/svgo-svg/jj0a.svg" />
              <Pause />
              <OuterP>
                But here too the odometer will pass
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
              <Image src="/build-img/svgo-svg/qylE.svg" />
              <Pause />
              <OuterP>
                Next we ask “by how many {" "}
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
              <Image src="/build-img/svgo-svg/anHE.svg" />
              <Pause />
              <OuterP>
                The answer is: {" "}
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
              <Image src="/build-img/svgo-svg/Tte9.svg" />
              <Pause />
              <OuterP>
                Next we ask “by how many {" "}
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
              <Image src="/build-img/svgo-svg/_sJ5.svg" />
              <Pause />
              <OuterP>
                The answer is: {" "}
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
              <Image src="/build-img/svgo-svg/jqe5.svg" />
              <Pause />
              <OuterP>
                Etc—we finally obtain:
              </OuterP>
              <Pause />
              <Image
                style="margin-top:1em;margin-bottom:1em;"
                src="/build-img/svgo-svg/y31C.svg"
              />
              <Pause />
              <OuterP>
                (And like we alluded to above, one can also
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
                {" "}
                Generally,
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/E79T.svg" />
              <Pause />
              <OuterP>
                at any point in a long division after the
                remainder is updated to account for a new term
                added to the quotient. That's what the remainder
                is for: to satisfy this equation!
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={21}>
          <ExerciseStatement id="_104_hgi_">
            <OuterP>
              <b>
                Exercise 21.
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
        <Exercise number={22}>
          <ExerciseStatement id="_105_hgi_">
            <OuterP>
              <b>
                Exercise 22.
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
        <Exercise number={23}>
          <ExerciseStatement id="_106_hgi_">
            <OuterP>
              <b>
                Exercise 23.
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
              <Image src="/build-img/svgo-svg/Wi-I.svg" />
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
                With the various terms illustrated here:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/hFz7.svg" />
              <Pause />
              <OuterP>
                ...but if it was such a great verbalization we
                wouldn't need to illustrate it, ergo, we failed!
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={24}>
          <ExerciseStatement id="_107_hgi_">
            <OuterP>
              <b>
                Exercise 24.
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
        <Exercise number={25}>
          <ExerciseStatement id="_108_hgi_">
            <OuterP>
              <b>
                Exercise 25.
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
        <Exercise number={26}>
          <ExerciseStatement id="_109_hgi_">
            <OuterP>
              <b>
                Exercise 26.
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
            <Image src="/build-img/svgo-svg/AdMn.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              For starters assume that {" "}
              <Math>
                $\theta$
              </Math>
              {" "} lies in
              the first quadrant, in
              which case both coordinates are nonnegative, and, more specifically, 
              are equal to the two 
              purple lengths below:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/nF2I.svg" />
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
                      href="/article/chapter5#_104_hgi_"
                      class="handle-in-chapter-link"
                    >
                      Exercise 21
                    </InChapterLink>
                    ,
                  </NoBreak>
                  {" "}
                  {" "}
                  <NoBreak>
                    <InChapterLink
                      href="/article/chapter5#_105_hgi_"
                      class="handle-in-chapter-link"
                    >
                      Exercise 22
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
            <Image src="/build-img/svgo-svg/wgBS.svg" />
            <Pause />
            <Image src="/build-img/svgo-svg/D8sZ.svg" />
            <Pause />
            <OuterP>
              ...i.e., in the first quadrant, at least, the
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
            <Image src="/build-img/svgo-svg/i6Bn.svg" />
            <Pause />
            <OuterP>
              For the other quadrants we can reason by
              symmetry with the first quadrant:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/TRpy.svg" />
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
        <Exercise number={27}>
          <ExerciseStatement id="_110_hgi_">
            <OuterP>
              <b>
                Exercise 27.
              </b>
              {" "}
              If {" "}
              <NoBreak>
                <Math>
                  $0$
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
              {" "} and a value {" "}
              <Math>
                $A &gt; 1$
              </Math>
              {" "} are marked
              on a line...
            </OuterP>
            <Pause />
            <Image
              style="margin-top:0.8em;margin-bottom:0.8em;"
              src="/build-img/svgo-svg/j4h0.svg"
            />
            <Pause />
            <OuterP>
              ...how can we find the placement of...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              1 / A
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...on the same line by a purely geometric construction?
              What about if {" "}
              <NoBreak>
                <Math>
                  $0 &lt; A &lt; 1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $-1 &lt; A &lt; 0$
                </Math>
                ,
              </NoBreak>
              {" "} etc?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The basic idea of the solution is to find
              an angle {" "}
              <Math>
                $\theta$
              </Math>
              {" "} such that {" "}
              <NoBreak>
                <Math>
                  $A = \sec(\theta)$
                </Math>
                ,
              </NoBreak>
              {" "}
              if {" "}
              <NoBreak>
                <Math>
                  $|A| &gt; 1$
                </Math>
                ,
              </NoBreak>
              {" "}
              or symmetrically, such that {" "}
              <NoBreak>
                <Math>
                  $A = \cos(\theta)$
                </Math>
                ,
              </NoBreak>
              {" "} if {" "}
              <NoBreak>
                <Math>
                  $|A| &lt; 1$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/kxTm.svg" />
            <Pause />
            <Image src="/build-img/svgo-svg/ryx0.svg" />
            <Pause />
            <OuterP>
              (Cf. {" "}
              <NoBreak>
                <InChapterLink
                  href="/article/chapter5#_109_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 26
                </InChapterLink>
                .)
              </NoBreak>
              {" "}
              We now proceed with
              step-by-step
              compass-and-ruler 
              instructions for the two cases:
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              ~ ~ case {" "}
              <Math>
                $|A| &gt; 1$
              </Math>
              {" "} ~ ~
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <i>
                Step 1.
              </i>
              {" "} Find the midpoint between {" "}
              <Math>
                $0$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ;
              </NoBreak>
              {" "} for
              this, the procedure is to use two circles of equal radius:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/JM7s.svg" />
            <Pause />
            <OuterP>
              <i>
                Step 2.
              </i>
              {" "} Draw a semicircle of radius {" "}
              <Math>
                $A/2$
              </Math>
              {" "} whose
              center is that midpoint:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/eQmC.svg" />
            <Pause />
            <OuterP>
              <i>
                Step 3.
              </i>
              {" "} Draw a circle of radius {" "}
              <Math>
                $1$
              </Math>
              {" "} whose center
              is {" "}
              <NoBreak>
                <Math>
                  $(0, 0)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/emr1.svg" />
            <Pause />
            <OuterP>
              <i>
                Step 4.
              </i>
              {" "} Draw a line through the intersections
              of the two circles to find the position of {" "}
              <NoBreak>
                <Math>
                  $1/A$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/XE7K.svg" />
            <Pause />
            <OuterP>
              (The reason that the whole procedure works is that
              this triangle...
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/KO2V.svg" />
            <Pause />
            <OuterP>
              ...is actually right-angled at its upper corner
              by 
              the Peloponnesian Theorem.
              This implies that the line from {" "}
              <Math>
                $(A, 0)$
              </Math>
              {" "} to that
              corner is tangent to the circle of radius {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} which is
              what we want/need.)
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              ~ ~ case {" "}
              <Math>
                $|A| &lt; 1$
              </Math>
              {" "} ~ ~
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <i>
                Step 1.
              </i>
              {" "} 
              With {" "}
              <NoBreak>
                <Math>
                  $|A| &lt; 1$
                </Math>
                ,
              </NoBreak>
              {" "} start by
              marking points at equal distance to {" "}
              <Math>
                $A$
              </Math>
              {" "} 
              by drawing a circle 
              centered at {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "}
              of any radius:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/RGWo.svg" />
            <Pause />
            <OuterP>
              <i>
                Step 2.
              </i>
              {" "} Use these points to draw a perpendicular 
              through {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} similarly to the first step of
              the case {" "}
              <NoBreak>
                <Math>
                  $|A| &gt; 1$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/4MXO.svg" />
            <Pause />
            <OuterP>
              <i>
                Step 3.
              </i>
              {" "} 
              Draw a circle of radius {" "}
              <Math>
                $1$
              </Math>
              {" "} centered at
              {" "}
              <NoBreak>
                <Math>
                  $(0, 0)$
                </Math>
                ,
              </NoBreak>
              {" "}
              and draw a line through {" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "} and the
              upper intersection of the circle with the perpendicular:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/FPj6.svg" />
            <Pause />
            <OuterP>
              <i>
                Step 4.
              </i>
              {" "} 
              Construct a perpendicular to this line
              at the point of intersection by repeating the
              process of the first two steps; 
              the intersection of that line with the
              main axis is {" "}
              <NoBreak>
                <Math>
                  $1/A$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/hKBQ.svg" />
            <Pause />
            <StarDivider />
          </Solution>
        </Exercise>
        <Exercise number={28}>
          <ExerciseStatement id="_111_hgi_">
            <OuterP>
              <b>
                Exercise 28.
              </b>
              {" "}
              By what factor are areas stretched
              as a function of the latitude {" "}
              <Math>
                $\theta$
              </Math>
              {" "} in the
              Lambert projection of a sphere onto a cylinder?
              (Cf. {" "}
              <NoBreak>
                <InChapterLink
                  href="/article/chapter5#_83_hgi_"
                  class="handle-in-chapter-link"
                >
                  Example 6
                </InChapterLink>
                .)
              </NoBreak>
              {" "}
              For reference, a profile view of the Lambert projection
              is also given below:
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
              because latitudes are stretched by a factor of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sec(\theta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as covered in {" "}
              <NoBreak>
                <InChapterLink
                  href="/article/chapter5#_83_hgi_"
                  class="handle-in-chapter-link"
                >
                  Example 6
                </InChapterLink>
                ,
              </NoBreak>
              {" "}
              whereas longitudes (the other
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
                We will refer to this (strange?) fact as the
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
                equal, by the Archimedean property (this is a Lambert
                projection):
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/pG5W.svg" />
              <Pause />
              <OuterP>
                For a more fun example,
                the 8 “tube sections” 
                of each circle
                in this diagram...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/7Dao.svg" />
              <Pause />
              <OuterP>
                ...have equal areas on the cylinder,
                even though dissimilar in shape,
                since those sections
                have equal area to one another on the sphere.
                (For each circle separately,
                we mean.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={29}>
          <ExerciseStatement id="_112_hgi_">
            <OuterP>
              <b>
                Exercise 29.
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
        <Exercise number={30}>
          <ExerciseStatement id="_113_hgi_">
            <OuterP>
              <b>
                Exercise 30.
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
        <Exercise number={31}>
          <ExerciseStatement id="_114_hgi_">
            <OuterP>
              <b>
                Exercise 31.
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
        <Exercise number={32}>
          <ExerciseStatement id="_115_hgi_">
            <OuterP>
              <b>
                Exercise 32.
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
        <Exercise number={33}>
          <ExerciseStatement id="_116_hgi_">
            <OuterP>
              <b>
                Exercise 33.
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
        <Exercise number={34}>
          <ExerciseStatement id="_117_hgi_">
            <OuterP>
              <b>
                Exercise 34.
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
        <Exercise number={35}>
          <ExerciseStatement id="_118_hgi_">
            <OuterP>
              <b>
                Exercise 35.
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
        <Exercise number={36}>
          <ExerciseStatement id="_119_hgi_">
            <OuterP>
              <b>
                Exercise 36.
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
        <Exercise number={37}>
          <ExerciseStatement id="_120_hgi_">
            <OuterP>
              <b>
                Exercise 37.
              </b>
              {" "}
              How would the graphs of the four compositions
              in {" "}
              <InChapterLink
                href="/article/chapter5#_119_hgi_"
                class="handle-in-chapter-link"
              >
                Exercise 36
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
              For reference again, the four functions are:
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
              (Cf. {" "}
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
              {" "}
              <NoBreak>
                <a
                  href="/article/chapter3#_45_hgi_"
                  class="handle-out-chapter-link"
                >
                  Exercise 14 of Chapter 3
                </a>
                .)
              </NoBreak>
              {" "}{" "}
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={38}>
          <ExerciseStatement id="_121_hgi_">
            <OuterP>
              <b>
                Exercise 38.
              </b>
              {" "}
              Let
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f(x) = A\cos(Bx + C) + D
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and imagine that each of the constants
              {" "}
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
              type="decimal"
              style="padding-left:20%;"
            >
              <Item>
                <p>
                  ...increase {" "}
                  <Math>
                    $C$
                  </Math>
                  {" "} from {" "}
                  <Math>
                    $0$
                  </Math>
                  {" "} to {" "}
                  <NoBreak>
                    <Math>
                      $1&#123;&#125;.33$
                    </Math>
                    ;
                  </NoBreak>
                  {" "} and
                </p>
              </Item>
              <Item>
                <p>
                  ...increase {" "}
                  <Math>
                    $B$
                  </Math>
                  {" "} from {" "}
                  <Math>
                    $1$
                  </Math>
                  {" "} to {" "}
                  <NoBreak>
                    <Math>
                      $2.33$
                    </Math>
                    ;
                  </NoBreak>
                  {" "} and
                </p>
              </Item>
              <Item>
                <p>
                  ...increase {" "}
                  <Math>
                    $A$
                  </Math>
                  {" "} from {" "}
                  <Math>
                    $1$
                  </Math>
                  {" "} to {" "}
                  <NoBreak>
                    <Math>
                      $3.33$
                    </Math>
                    ;
                  </NoBreak>
                  {" "} and
                </p>
              </Item>
              <Item>
                <p>
                  ...increase {" "}
                  <Math>
                    $D$
                  </Math>
                  {" "} from {" "}
                  <Math>
                    $0$
                  </Math>
                  {" "} to {" "}
                  <NoBreak>
                    <Math>
                      $4.33$
                    </Math>
                    .
                  </NoBreak>
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              How does the graph of {" "}
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
                Solution 1.
              </i>
              {" "} Reasoning by the analogy of
              a particle going around a circle at uniform
              speed (cf. {" "}
              <NoBreak>
                <InChapterLink
                  href="/article/chapter5#_94_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 11
                </InChapterLink>
                ):
              </NoBreak>
              {" "}{" "}
            </OuterP>
            <Pause />
            <List style="padding-left:33px;padding-right:2em;">
              <Item>
                <p>
                  step 1: advances the initial position of
                  particle {" "}
                  <Math>
                    $C$
                  </Math>
                  {" "} radians forward, so the
                  graph shifts {" "}
                  <i>
                    left
                  </i>
                  {" "} by {" "}
                  <Math>
                    $C = 1.33$
                  </Math>
                  {" "} units (so that
                  the value {" "}
                  <Math>
                    $y = \sin(C)$
                  </Math>
                  {" "} finds itself at
                  {" "}
                  <NoBreak>
                    <Math>
                      $x = 0$
                    </Math>
                    )
                  </NoBreak>
                </p>
              </Item>
              <Item>
                <p>
                  step 2: speeds up the angular velocity of
                  the particle from {" "}
                  <Math>
                    $1$
                  </Math>
                  {" "} radian per unit time
                  to {" "}
                  <Math>
                    $B = 2.33$
                  </Math>
                  {" "} radians per unit time; this
                  can simply be thought of as a “speeding up
                  of time”, and compresses the graph horizontally
                  about the {" "}
                  <Math>
                    $y$
                  </Math>
                  {" "} axis by a factor {" "}
                  <NoBreak>
                    <Math>
                      $2.33$
                    </Math>
                    ;
                  </NoBreak>
                </p>
              </Item>
              <Item>
                <p>
                  step 3: increases the radius of the circle
                  from {" "}
                  <Math>
                    $1$
                  </Math>
                  {" "} to {" "}
                  <NoBreak>
                    <Math>
                      $A = 3.33$
                    </Math>
                    ,
                  </NoBreak>
                  {" "} which results in
                  a vertical dilation of the graph by a
                  factor {" "}
                  <NoBreak>
                    <Math>
                      $3.33$
                    </Math>
                    ;
                  </NoBreak>
                </p>
              </Item>
              <Item>
                <p>
                  step 4: moves the coordinate (say,
                  {" "}
                  <NoBreak>
                    <Math>
                      $y$
                    </Math>
                    -coordinate,
                  </NoBreak>
                  {" "} if we are thinking of {" "}
                  <Math>
                    $f$
                  </Math>
                  {" "}
                  as reading off the {" "}
                  <NoBreak>
                    <Math>
                      $y$
                    </Math>
                    -coordinate
                  </NoBreak>
                  {" "} of the
                  particle) from {" "}
                  <Math>
                    $y = 0$
                  </Math>
                  {" "} to {" "}
                  <NoBreak>
                    <Math>
                      $y = D = 4.33$
                    </Math>
                    ,
                  </NoBreak>
                  {" "} resulting
                  in a vertical translation upwards of the
                  graph by {" "}
                  <Math>
                    $4.33$
                  </Math>
                  {" "} units!
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              <i>
                Solution 2.
              </i>
              {" "} One can understand
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f = x \ra A\sin(Bx + C) + D
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as a 5-fold composition (with functions
              boxes going right to left):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/r-G7.svg" />
            <Pause />
            <OuterP>
              In the initial setting of the variables
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
            <Image src="/build-img/svgo-svg/sweo.svg" />
            <Pause />
            <OuterP>
              (*When we say “the identity” we mean
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the identity function
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              which is the function {" "}
              <NoBreak>
                <Math>
                  $x \ra x$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              As we dial {" "}
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
            <Image src="/build-img/svgo-svg/2ziI.svg" />
            <Pause />
            <OuterP>
              The effect of adding such a box to the
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
              <NoBreak>
                <InChapterLink
                  href="/article/chapter5#_120_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 37
                </InChapterLink>
                .
              </NoBreak>
              {" "}
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
            <Image src="/build-img/svgo-svg/Ao9J.svg" />
            <Pause />
            <OuterP>
              Because this box is to the right of all
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
              <NoBreak>
                <InChapterLink
                  href="/article/chapter5#_120_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 37
                </InChapterLink>
                ;
              </NoBreak>
              {" "}
              step 3 brings the box immediately to the
              left of sin online...
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/DvlU.svg" />
            <Pause />
            <OuterP>
              ...which scales the graph-so-far vertically by a
              factor {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} as discussed in {" "}
              <NoBreak>
                <InChapterLink
                  href="/article/chapter5#_120_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 37
                </InChapterLink>
                ,
              </NoBreak>
              {" "}
              and finally step 4 brings the leftmost box online...
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/mE-x.svg" />
            <Pause />
            <OuterP>
              ...that vertically translates the entire graph,
              as it stands, by {" "}
              <Math>
                $D$
              </Math>
              {" "} units up, as again discussed
              in {" "}
              <NoBreak>
                <InChapterLink
                  href="/article/chapter5#_120_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 37
                </InChapterLink>
                .
              </NoBreak>
              {" "}{" "}
            </OuterP>
            <OuterP class="indent-10">
              To recapitulate, starting from {" "}
              <NoBreak>
                <Math>
                  $y = \sin(x)$
                </Math>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <List style="padding-left:33px;padding-right:2em;">
              <Item>
                <p>
                  step 1: translates the graph left by {" "}
                  <Math>
                    $1.33\,\,(= C)$
                  </Math>
                </p>
              </Item>
              <Item>
                <p>
                  step 2: compresses the resulting graph horizontally by {" "}
                  <Math>
                    $2.33\,\,(= B)$
                  </Math>
                  {" "} about the {" "}
                  <Math>
                    $y$
                  </Math>
                  {" "} axis
                </p>
              </Item>
              <Item>
                <p>
                  step 3: dilates the resulting graph vertically by {" "}
                  <Math>
                    $3.33\,\,(= A)$
                  </Math>
                  {" "} about the {" "}
                  <Math>
                    $x$
                  </Math>
                  {" "} axis
                </p>
              </Item>
              <Item>
                <p>
                  step 4: translates the resulting graph up by {" "}
                  <Math>
                    $4.33\,\,(= D)$
                  </Math>
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              ...and that's the end.
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                Concerning the second solution, for simplicity of analysis it's important
                to bring the pre- and post-processing
                functions online “from the inside out”,
                gluing new boxes on to what's already there:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/EsiI.svg" />
              <Pause />
              <OuterP>
                Otherwise, to give an example of what may
                go wrong, say that we first bring the rightmost
                box online:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/cm5u.svg" />
              <Pause />
              <OuterP>
                At this stage we have
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x \ra \sin(Bx)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                which is a copy of {" "}
                <Math>
                  $\sin(x)$
                </Math>
                {" "} horizontally
                compressed by {" "}
                <NoBreak>
                  <Math>
                    $B = 2.33$
                  </Math>
                  .
                </NoBreak>
                {" "} Then if we bring
                {" "}
                <Math>
                  $x \ra x + C$
                </Math>
                {" "} online...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/2e-D.svg" />
              <Pause />
              <OuterP>
                ...at this stage {" "}
                <Math>
                  $x \ra x + C$
                </Math>
                {" "} is
                NEITHER A PRE-PROCESSING NOR A POST-PROCESSING FUNCTION; 
                the effect of adding this function is
                NOT a translation of the graph by {" "}
                <Math>
                  $C$
                </Math>
                {" "} units in any
                direction!; instead, the effect of inserting this
                intermediate function into the chain is
                that the graph is translated left by
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                C/B
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                units, as we can verify by rewriting
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x \ra \sin(Bx + C)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                (the function above), as
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x \ra \sin(B(x + C/B))
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...which corresponds to this modified assemblage
                of boxes...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/kh5Y.svg" />
              <Pause />
              <OuterP>
                ...and in which you can see that, after we
                dial up {" "}
                <Math>
                  $B$
                </Math>
                {" "} (introducing the {" "}
                <NoBreak>
                  “
                  <Math>
                    $x \ra Bx$
                  </Math>
                  ”
                </NoBreak>
                {" "} box),
                the effect of dialing up {" "}
                <Math>
                  $C$
                </Math>
                {" "} is to translate
                the graph left by {" "}
                <Math>
                  $C/B$
                </Math>
                {" "} units. 
                (The point is, if you
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                translate-and-then-compress
                <ImageRight src="/build-img/svgo-svg/zaRv.svg" />
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                or if you
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                compress-and-then-translate
                <ImageRight src="/build-img/svgo-svg/w5g-.svg" />
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                the two amounts of translation required are
                not the same, to achieve the same end result—if
                the translation comes second, it needs to
                be compressed, because everything else has
                already been compressed!) (And by the 
                way things blow up even worse if you attempt
                to dial {" "}
                <Math>
                  $D$
                </Math>
                {" "} up before dialing {" "}
                <Math>
                  $A$
                </Math>
                {" "} up, because if
                you attempt the same distributivity trick on the
                left-hand side to invert the order of the two boxes
                there...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/te-X.svg">
                <ImageLeft
                  src="/build-img/svgo-svg/cCoO.svg"
                  offset_x="2em"
                />
              </Image>
              <Pause />
              <OuterP>
                ...you find that after {" "}
                <Math>
                  $D$
                </Math>
                {" "} has been dialed up,
                and it comes time to change {" "}
                <NoBreak>
                  <Math>
                    $A$
                  </Math>
                  ,
                </NoBreak>
                {" "} there are TWO
                boxes left that depend on {" "}
                <NoBreak>
                  <Math>
                    $A$
                  </Math>
                  !—so
                </NoBreak>
                {" "} long story
                short, it becomes very difficult/annoying to
                analyze the effect that changing {" "}
                <Math>
                  $A$
                </Math>
                {" "} has on the
                graph, if we do it after {" "}
                <Math>
                  $D$
                </Math>
                {" "} is nonzero.)
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                The problem uses ‘sin’ as an example but the
                same reasoning (with boxes) applies to any
                function. Namely, the graph
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                y = A\cdot f(Bx + C) + D
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is the graph {" "}
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
                {" "}
                A function that can be written as
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x \ra A\sin(Bx + C) + D
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for some values of {" "}
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
                sinusoid
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                (if we switch ‘sin’ to ‘cos’ it gives the same
                class of functions: {" "}
                <NoBreak>
                  <Math>
                    $\sin(Bx + C) = \cos(Bx + C - \eta)$
                  </Math>
                  ).
                </NoBreak>
              </OuterP>
              <OuterP class="indent-10">
                Moreover:
              </OuterP>
              <Pause />
              <List style="padding-left:33px;padding-right:2em;">
                <Item>
                  <p>
                    <NoBreak>
                      <Math>
                        $C$
                      </Math>
                      :
                    </NoBreak>
                    {" "} may be referred to as the {" "}
                    <i>
                      phase
                    </i>
                    {" "}
                    of the sinuoid (but which is only uniquely determined
                    if you have decided whether your sinusoid is
                    written in terms of ‘cos’ or ‘sin’, and even
                    then only determined up to {" "}
                    <NoBreak>
                      <Math>
                        $360^\circ = 4\eta$
                      </Math>
                      ,
                    </NoBreak>
                    {" "}
                    or, even worse,
                    up to {" "}
                    <Math>
                      $180^\circ = 2\eta$
                    </Math>
                    {" "} if negative values of {" "}
                    <Math>
                      $A$
                    </Math>
                    {" "}
                    are allowed)
                  </p>
                </Item>
                <Item>
                  <p>
                    <NoBreak>
                      <Math>
                        $A$
                      </Math>
                      :
                    </NoBreak>
                    {" "} may be referred to as the {" "}
                    <i>
                      amplitude
                    </i>
                    {" "} of the
                    sinusoid
                  </p>
                </Item>
                <Item>
                  <p>
                    <NoBreak>
                      <Math>
                        $B$
                      </Math>
                      :
                    </NoBreak>
                    {" "} may be referred to as the {" "}
                    <i>
                      angular speed
                    </i>
                    {" "} or
                    {" "}
                    <i>
                      angular frequency
                    </i>
                    {" "} of the sinusoid
                  </p>
                </Item>
                <Item>
                  <p>
                    <NoBreak>
                      <Math>
                        $D$
                      </Math>
                      :
                    </NoBreak>
                    {" "} may be referred to as the {" "}
                    <i>
                      vertical shift
                    </i>
                    {" "}
                    (mathematics) or as the {" "}
                    <i>
                      DC bias
                    </i>
                    {" "} or {" "}
                    <i>
                      DC offset
                    </i>
                    {" "} (engineering)
                    or as the {" "}
                    <i>
                      equilibrium position
                    </i>
                    {" "} (physics) of
                    the sinusoid
                  </p>
                </Item>
              </List>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={39}>
          <ExerciseStatement id="_122_hgi_">
            <OuterP>
              <b>
                Exercise 39.
              </b>
              {" "}
              Let points {" "}
              <Math>
                $P_1$
              </Math>
              {" "} and {" "}
              <Math>
                $P_2$
              </Math>
              {" "} have polar coordinates
              {" "}
              <Math>
                $(r_1, \theta_1)$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $(r_2, \theta_2)$
                </Math>
                ,
              </NoBreak>
              {" "} respectively:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/E-Fq.svg" />
            <Pause />
            <OuterP>
              What is the distance from {" "}
              <Math>
                $P_1$
              </Math>
              {" "} to {" "}
              <Math>
                $P_2$
              </Math>
              {" "}
              as a function of {" "}
              <NoBreak>
                <Math>
                  $r_1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $r_2$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\theta_1$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $\theta_2$
                </Math>
                ?
              </NoBreak>
              {" "}
              (Keep an eye out for algebraic simplifications and,
              in particular, for the fact that the distance should
              depend only on
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \theta_1 - \theta_2
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              or, even, only on
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              |\theta_1 - \theta_2|
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as opposed to depending on the individual values of
              {" "}
              <Math>
                $\theta_1$
              </Math>
              {" "} and {" "}
              <Math>
                $\theta_2$
              </Math>
              {" "} separately, since we can rotate
              the entire diagram while keeping the distance from
              {" "}
              <Math>
                $P_1$
              </Math>
              {" "} to {" "}
              <Math>
                $P_2$
              </Math>
              {" "} constant.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <i>
                Solution 1.
              </i>
              {" "} As a preliminary, we would like to note that...
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                \cos(A - B) = \cos A\cos B + \sin A\sin B
                $$
              </MathBlock>
            </Boxed>
            <OuterP>
              ...for all {" "}
              <NoBreak>
                <Math>
                  $A, B \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(A + B) = \cos A\cos B - \sin A\sin B
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for all {" "}
              <Math>
                $A, B \in \rr$
              </Math>
              {" "} implies
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;aligned&#125;
              \cos(A - B)\,&amp;=\,\,\up&#123;1.3&#125; \cos(A + (-B))\\
                          &amp;=\,\,\up&#123;1.4&#125; \cos(A)\cos(-B) - \sin(A)\sin(-B) \\
                          &amp;=\,\,\up&#123;1.4&#125; \cos A\cos B + \sin A\sin B
              \end&#123;aligned&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by {" "}
              <NoBreak>
                <Math>
                  $\cos(-x) = \cos(x)$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $\sin(-x) = -\sin(x)$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              (There is a similar formula
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                \sin(A - B) = -\cos A\sin B + \sin A\cos B
                $$
              </MathBlock>
            </Boxed>
            <OuterP>
              for the sine of a difference, but that one is hardly
              as important or useful, you should forget it even though
              we just boxed it.)
            </OuterP>
            <OuterP class="indent-10">
              We now apply the Cartesian formula
              for distance
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;(x_1 - x_2)^2 + (y_1 - y_2)^2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              that will be good to slightly rewrite as
              <ImageLeft src="/build-img/svgo-svg/Y5Rf.svg" />
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;x_1^2 + x_2^2 + y_1^2 + y_2^2 - 2(x_1x_2 + y_1y_2)&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              to be applied with {" "}
              <NoBreak>
                <Math>
                  $(x_1, y_1) = P_1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $(x_2, y_2) = P_2$
                </Math>
                ,
              </NoBreak>
              {" "} i.e., with
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;aligned&#125;
              (x_1, y_1) = (r_1\cos\theta_1, r_1\sin\theta_1) \\
              (x_2, y_2) = (r_2\cos\theta_2, r_2\sin\theta_2)\up&#123;1.4&#125;
              \end&#123;aligned&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by definition of polar coordinates,
              from which
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;aligned&#125;
              \,&amp;x_1^2 + y_1^2 = r_1^2\cos^2\theta_1 + r_1^2\sin^2\theta_1 = r_1^2(\cos^2\theta_1 + \sin^2\theta_1) = r_1^2,\up&#123;1.3&#125; \\
              &amp;x_2^2 + y_2^2 = r_2^2\cos^2\theta_2 + r_2^2\sin^2\theta_2 = r_2^2(\cos^2\theta_2 + \sin^2\theta_2) = r_2^2\up&#123;1.4&#125;
              \end&#123;aligned&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x_1^2 + x_2^2 + y_1^2 + y_2^2 = r_1^2 + r_2^2
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (in fact, we know that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x_1^2 + y_1^2 = r_1^2
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x_2^2 + y_2^2 = r_2^2
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              just from the 
              Pythagorean theorem
              and the fact that {" "}
              <NoBreak>
                <Math>
                  $P_1 = (x_1, y_1)$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $P_2 = (x_2, y_2)$
                </Math>
                ,
              </NoBreak>
              {" "} 
              but anyway), while
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;aligned&#125;
              \,x_1x_2 =\, r_1\cos\theta_1\cdot r_2\cos\theta_2 = r_1r_2\cos\theta_1\cos\theta_2,\up&#123;0.9&#125; \\
              y_1y_2 =\, r_1\sin\theta_1\cdot r_2\sin\theta_2 = r_1r_2\sin\theta_1\sin\theta_2\up&#123;1.5&#125;\,\,
              \end&#123;aligned&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              from which
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x_1x_2 + y_1y_2 = r_1r_2(\cos\theta_1\cos\theta_2 + \sin\theta_1\sin\theta_2)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              but
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos\theta_1\cos\theta_2 + \sin\theta_1\sin\theta_2 = \cos(\theta_1 - \theta_2)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by the first remark, so
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x_1y_1 + x_2y_2 = r_1r_2\cos(\theta_1 - \theta_2)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and, altogether, the distance...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;x_1^2 + x_2^2 + y_1^2 + y_2^2 - 2(x_1x_2 + y_1y_2)&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...turns out to be...
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                \sqrt&#123;r_1^2 + r_2^2 - 2r_2r_2\cos(\theta_1 - \theta_2)&#125;
                $$
              </MathBlock>
            </Boxed>
            <OuterP>
              ...that, as can be seen, depends only on
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \theta_1 - \theta_2
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              or, even, only on
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              |\theta_1 - \theta_2|
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              since {" "}
              <Math>
                $\cos(x) = \cos(-x) = \cos(|x|)$
              </Math>
              {" "} for all {" "}
              <NoBreak>
                <Math>
                  $x\in\rr$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Solution 2.
              </i>
              {" "} Start by rotating {" "}
              <NoBreak>
                <Math>
                  $P_1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $P_2$
              </Math>
              {" "} by
              {" "}
              <Math>
                $-\theta_2$
              </Math>
              {" "} radians about the origin, to new
              points {" "}
              <Math>
                $P_1'$
              </Math>
              {" "} and {" "}
              <Math>
                $P_2'$
              </Math>
              {" "} such that {" "}
              <Math>
                $P_2'$
              </Math>
              {" "} is aligned
              with the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis and {" "}
              <Math>
                $P_1'$
              </Math>
              {" "} has argument {" "}
              <NoBreak>
                <Math>
                  $\theta_1 - \theta_2$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/RLiz.svg" />
            <Pause />
            <OuterP>
              Since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gather&#125;
              \,P_1' = (r_1\cdot\cos(\theta_1 - \theta_2), r_1\cdot\sin(\theta_1 - \theta_2)),\\
              P_2' = (r_2, 0)\up&#123;1.8&#125;
              \end&#123;gather&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              the Euclidean distance
              formula gives
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;aligned&#125;
              \overline&#123;P_1P_2&#125;\,=\,\overline&#123;P_1'P_2'&#125;\,=&amp;\,\,\up&#123;1.4&#125;\sqrt&#123;(r_1\cos(\theta_1 - \theta_2) - r_2)^2 + (r_1\sin(\theta_1 - \theta_2) - 0)^2&#125;\\
              =&amp;\,\,\up&#123;1.4&#125;\sqrt&#123;r_1^2\cos^2(\theta_1 - \theta_2) - 2r_1r_2\cos(\theta_1 - \theta_2) + r_2^2 + r_1^2\sin^2(\theta_1 - \theta_2)&#125; \\
              =&amp;\,\,\up&#123;1.4&#125;\sqrt&#123;r_1^2(\cos^2(\theta_1 - \theta_2) + \sin^2(\theta_1 - \theta_2)) - 2r_1r_2\cos(\theta_1 - \theta_2) + r_2^2&#125; \\
              =&amp;\,\,\up&#123;1.4&#125;\sqrt&#123;r_1^2 - 2r_1r_2\cos(\theta_1 - \theta_2) + r_2^2&#125; \\
              =&amp;\,\,\up&#123;1.4&#125;\sqrt&#123;r_1^2 + r_2^2 - 2r_1r_2\cos(\theta_1 - \theta_2)&#125;
              \end&#123;aligned&#125;
              $$
              <ImageRight
                line={1}
                src="/build-img/svgo-svg/dosD.svg"
                offset_x="-2em"
                compensate_offset_x_for_large_text_columns={true}
              />
            </MathBlock>
            <Pause />
            <OuterP>
              which agrees with the first solution.
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                As a result, the {" "}
                <i>
                  distance squared
                </i>
                {" "} between {" "}
                <Math>
                  $P_1$
                </Math>
                {" "} and {" "}
                <Math>
                  $P_2$
                </Math>
                {" "}
                is:
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  r_1^2 + r_2^2 - 2r_2r_2\cos(\theta_1 - \theta_2)
                  $$
                </MathBlock>
              </Boxed>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                The distance formula reduces to
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  \sqrt&#123;r_1^2 + r_2^2&#125;
                  $$
                  <ImageRight
                    src="/build-img/svgo-svg/A3u9.svg"
                    offset_x="3em"
                    compensate_offset_x_for_large_text_columns={true}
                  />
                </MathBlock>
              </Boxed>
              <OuterP>
                if {" "}
                <Math>
                  $P_1$
                </Math>
                {" "} and {" "}
                <Math>
                  $P_2$
                </Math>
                {" "} are at right angle, since
                {" "}
                <Math>
                  $\cos|\theta_1 - \theta_2| = \cos\eta = 0$
                </Math>
                {" "} in that
                case.
                This accords with the Pythagorean theorem, and
                constitutes an extra check on our computations!
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 3.
                </i>
                {" "}
                By comparing the two solutions one can 
                actually deduce that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \cos(\theta_1 - \theta_2) = \cos\theta_1\cos\theta_2 + \sin\theta_1\sin\theta_2
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                without knowing the angle-sum formula
                for cosine beforehand.
                This constitutes a second* proof of the angle-sum
                formula for cos and, by extension, for sin.
              </OuterP>
              <OuterP class="indent-10">
                (*Some people would say {" "}
                <i>
                  first
                </i>
                {" "} proof, as our
                original proof from the chapter put some restrictions
                on the range of the angles, such as 
                {" "}
                <Math>
                  $0 \leq \theta_1, \theta_2 \leq \eta$
                </Math>
                {" "}
                specifically.) (**Though such restrictions can be lifted
                by diligent of use {" "}
                <Math>
                  $\cos(x+\eta) = -\sin(x)$
                </Math>
                {" "} -type identities.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise
          work="ing"
          number={40}
        >
          <ExerciseStatement id="_123_hgi_">
            <OuterP>
              <b>
                Exercise 40.
              </b>
              {" "}
              What are the maximum and minimum values
              of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \theta \ra \cos(\theta)\sin(\theta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and for which {" "}
              <Math>
                $\theta$
              </Math>
              {" "} are they attained?
              (Reason geometrically, not by calculus.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The “isosets” of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x, y) \ra xy
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              have this general aspect:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/ME1k.svg"
              style="margin-bottom:0.5em;"
            />
            <Pause />
            <OuterP>
              These isosets give rise to the boundaries
              between colored regions 
              when we draw a “heatmap” of {" "}
              <NoBreak>
                <Math>
                  $(x, y) \ra xy$
                </Math>
                ,
              </NoBreak>
              {" "}
              drawn here in the same 
              window:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/FGx3.svg"
              style="margin-bottom:0.5em;"
            />
            <Pause />
            <OuterP>
              The geometric insight that is of interest to
              us, and that we accept without further proof,
              is that,
              at any given
              distance from the origin, the lines
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = y
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = -y
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              seem to hold the largest and smallest values,
              respectively, of {" "}
              <NoBreak>
                <Math>
                  $xy$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/YYAQ.svg" />
            <Pause />
            <OuterP>
              In other words,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(\theta)\cdot\sin(\theta),
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as a value of the form {" "}
              <NoBreak>
                “
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} times {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinate”
              </NoBreak>
              {" "}
              of a point confined to the unit circle,
              will reach its maximum when
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (\cos \theta, \sin \theta) = \pm(\sqrt&#123;0.5&#125;, \sqrt&#123;0.5&#125;)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              where it attains value
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;0.5&#125; \cdot \sqrt&#123;0.5&#125; = (-\sqrt&#123;0.5&#125;) \cdot (-\sqrt&#123;0.5&#125;) = &#123;1\over 2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and will reach its minimum when
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (\cos \theta, \sin \theta) = \pm(-\sqrt&#123;0.5&#125;, \sqrt&#123;0.5&#125;)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              where it attains value
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (-\sqrt&#123;0.5&#125;) \cdot \sqrt&#123;0.5&#125; = \sqrt&#123;0.5&#125; \cdot (-\sqrt&#123;0.5&#125;) = -&#123;1\over 2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              while, to answer the last part of the question,
              the set of {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                's
              </NoBreak>
              {" "} for which the 
              maximum and minimum are reached will be...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \&#123;0.5\eta + 2\eta k: k \in \zz\&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...and...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \&#123;1.5\eta + 2\eta k: k \in \zz\&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...respectively, as illustrated...
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/FyVW.svg" />
            <Pause />
            <OuterP>
              ...here!
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                For interest, here is the graph {" "}
                <NoBreak>
                  <Math>
                    $y = \cos(x)\sin(x)$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                as previously given in {" "}
                <NoBreak>
                  <InChapterLink
                    href="/article/chapter5#_88_hgi_"
                    class="handle-in-chapter-link"
                  >
                    Exercise 5
                  </InChapterLink>
                  ,
                </NoBreak>
                {" "} annotated
                with the maximum, minimum, and the values {" "}
                <Math>
                  $x$
                </Math>
                {" "} at which they
                are attained:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/7Hpe.svg" />
              <Pause />
              <OuterP>
                (Or equivalently...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/H0zm.svg" />
              <Pause />
              <OuterP>
                ...in degrees.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};