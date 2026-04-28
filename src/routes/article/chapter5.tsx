import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { CentralDisplay, CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { Item, List }  from "~/components/List";
import { MathBlock, Math }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageLeft }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import TextParent  from "~/components/TextParent";
import { TildeDivider }  from "~/components/TildeDivider";
import { Example, Pause, Section, NoBreak }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter5__() {
  return (
    <Article
      prevPage="/article/chapter4"
      nextPage=""
      ref="rence"
      pageNecessaryMargin={1500}
      maxElementWidth={1000}
      id="_90_hgi_"
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
          <a
            href="/article/chapter3#_36_hgi_"
            class="handle-out-chapter-link"
          >
            Exercise 5 of Chapter 3
          </a>
          &#8288;,
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
            href="/article/chapter4#_66_hgi_"
            class="handle-out-chapter-link"
          >
            Exercise 11 of Chapter 3
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
          These labels are chosen because the {" "}
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
          {" "} particle (e.g.) is
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
        </MathBlock>
        <Pause />
        <OuterP>
          which is also known simply as
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
            .
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
          <a
            href="/article/chapter4#_71_hgi_"
            class="handle-out-chapter-link"
          >
            Exercise 16 of Chapter 4
          </a>
          &#8288;.
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
            href="/article/chapter4#_70_hgi_"
            class="handle-out-chapter-link"
          >
            Exercise 15
          </a>
          {" "}
          and {" "}
          <a
            href="/article/chapter4#_63_hgi_"
            class="handle-out-chapter-link"
          >
            Exercise 8 of Chapter 4
          </a>
          &#8288;),
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
          remember the first two equations—though
          even better is to just remember the entire
          four-particle diagram, and never think about
          signs again!
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
          <a
            href="/article/chapter4#_66_hgi_"
            class="handle-out-chapter-link"
          >
            Exercise 11
          </a>
          &#8288;, {" "}
          <a
            href="/article/chapter4#_86_hgi_"
            class="handle-out-chapter-link"
          >
            Chapter 4
          </a>
          &#8288;.) You should
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
          (\cos(x))^2
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
          \arctan(y/x) &amp; \te&#123;if &#125;\, x \ne 0, \,\te&#123;else&#125; \\
          \up&#123;1.2&#125;\te&#123;arccot&#125;(x/y) &amp; \te&#123;if &#125;\, y \ne 0, \,\te&#123;else&#125; \\
          \up&#123;1.2&#125;\rm&#123;?&#125; &amp; \te&#123;if &#125;\, x = 0, y = 0
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
          <span class="code-cartouche">
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
          <span class="code-cartouche">
            atan2(y, x)
          </span>
          {" "} not {" "}
          <span class="code-cartouche">
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
          marker="lower-roman-paren"
          markerFontFamily="Baskerville Bold"
          style="gap:1em;"
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
        <Example id="_87_hgi_">
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
              href="/article/chapter5#_87_hgi_"
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
      <Exercises
        at_end_of_page={true}
        id="_89_hgi_"
      >
        <Exercise number={1}>
          <ExerciseStatement id="_88_hgi_">
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
              <a
                href="/article/chapter3#_53_hgi_"
                class="handle-out-chapter-link"
              >
                Chapter 3
              </a>
              &#8288;).
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
      </Exercises>
    </>}
  </>;
};