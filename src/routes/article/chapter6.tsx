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
import OutChapterLink  from "~/components/OutChapterLink";
import OuterP  from "~/components/OuterP";
import { ImageLeft, ImageRight }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { StarDivider }  from "~/components/StarDivider";
import TextParent  from "~/components/TextParent";
import { TildeDivider }  from "~/components/TildeDivider";
import { SolutionNote, Example, NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter6__() {
  return (
    <Article
      prevPage="/article/chapter5"
      nextPage="/article/chapter7"
      pageNecessaryMargin={1500}
      maxElementWidth={1000}
      id="_105_h.a.i_"
      path="/article/chapter6"
    >
      <ArticleTitle banner="Chapter 6:">
        Trigonometry I
      </ArticleTitle>
      <Section id="section-1">
        <OuterP>
          <b>
            Cos and sin. (“Cosine” and “sine”.)
          </b>
          {" "} We have
          already encountered the ‘cos’ function in 
          {" "}
          <OutChapterLink
            href="/article/chapter3#_43_h.a.i_"
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
          intrinsicWidth="1139.5"
          intrinsicHeight="175.5"
        />
        <Pause />
        <OuterP>
          It has a close cousin named ‘sin’. While {" "}
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
          intrinsicWidth="1139.5"
          intrinsicHeight="175.5"
        />
        <Pause />
        <OuterP>
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
          {" "} on the unit circle. (Note that “a”
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
          intrinsicWidth={1200}
          intrinsicHeight={205}
        />
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
          which is what 
          a calculator equipped with ‘sin’ and ‘cos’ will tell us):
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/SPMY.svg"
          intrinsicWidth={400}
          intrinsicHeight={345}
        />
        <Pause />
        <OuterP>
          As a second example, the graphs show that
          {" "}
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
          intrinsicWidth={1200}
          intrinsicHeight={205}
        />
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
          {" "} 
          per the calculator):
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/9Ygl.svg"
          intrinsicWidth={400}
          intrinsicHeight={345}
        />
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
        <Image
          src="/build-img/svgo-svg/BfG4.svg"
          intrinsicWidth={1200}
          intrinsicHeight={205}
        />
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
          <OutChapterLink
            href="/article/chapter5#_81_h.a.i_"
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
          In another definition,
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
        <Image
          src="/build-img/svgo-svg/h28T.svg"
          intrinsicWidth={720}
          intrinsicHeight={455}
        />
        <Pause />
        <OuterP>
          If you tilt your head sideways,
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
        <Image
          src="/build-img/svgo-svg/5m2X.svg"
          intrinsicWidth={440}
          intrinsicHeight={370}
        />
        <Pause />
        <OuterP>
          ...to be contrasted with our first definition,
          employing a single point projected onto
          two different axes:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/7839.svg"
          intrinsicWidth={440}
          intrinsicHeight={345}
        />
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
            Derivatives.
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
          intrinsicWidth={460}
          intrinsicHeight={390}
        />
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
          {" "} particle, e.g., is
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
          also known as
        </OuterP>
        <Pause />
        <CentralDisplay>
          <NoBreak>
            “
            <Math>
              $-\!\sin$
            </Math>
            ”#negation-of-a-function-first-mention##&lt;&lt;
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
        <Image
          src="/build-img/svgo-svg/RzLW.svg"
          intrinsicWidth={1261}
          intrinsicHeight={200}
        />
        <Pause />
        <OuterP>
          These are the same four curves that
          appear in {" "}
          <OutChapterLink
            href="/article/chapter5#_76_h.a.i_"
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
          in the solution to that problem,
          clockwise vs. counterclockwise rotation
          notwithstanding.
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
          <OutChapterLink
            href="/article/chapter7#_112_h.a.i_"
            class="out-chapter-link"
          >
            Exercise 6
          </OutChapterLink>
          {" "}
          and {" "}
          <OutChapterLink
            href="/article/chapter7#_113_h.a.i_"
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
    </>}
    {visibleRestSections() > 1 && <>
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
          <OutChapterLink
            href="/article/chapter5#_81_h.a.i_"
            class="out-chapter-link"
          >
            Exercise 4
          </OutChapterLink>
          , {" "}
          <OutChapterLink
            href="/article/chapter4#_75_h.a.i_"
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
          intrinsicWidth={780}
          intrinsicHeight={1050}
        />
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
        <Image
          src="/build-img/svgo-svg/9iTV.svg"
          intrinsicWidth={780}
          intrinsicHeight={305}
        />
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
    </>}
    {visibleRestSections() > 2 && <>
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
          More generally,
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
    </>}
    {visibleRestSections() > 3 && <>
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
          ) means
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (\cos(x))^2,
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          a special case of
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
          itself a special case of
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
    </>}
    {visibleRestSections() > 4 && <>
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
            \cos^2 x + \sin^2 x = 1 \tag&#123;*&#125;
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
          \sin^2 x + \cos^2 x
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
          \sin^2 y
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (variable not important) might be
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          1 - \cos^2 y
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          just as
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos^2 y
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          might be
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          1 - \sin^2 y
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (also
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          1 - \cos^2 y
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          1 - \sin^2 y
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
          and symmetrically for the opposite difference. Etc.
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 5 && <>
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
        <Image
          src="/build-img/svgo-svg/dau_.svg"
          intrinsicWidth={400}
          intrinsicHeight={180}
        />
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
        <Image
          src="/build-img/svgo-svg/byWA.svg"
          intrinsicWidth={400}
          intrinsicHeight={190}
        />
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
        <Image
          src="/build-img/svgo-svg/uhJc.svg"
          intrinsicWidth={420}
          intrinsicHeight={250}
        />
        <Pause />
        <OuterP>
          To imprint this fact in our memories:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/GrNS.svg"
          intrinsicWidth={420}
          intrinsicHeight={130}
        />
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
        <Image
          src="/build-img/svgo-svg/PhlK.svg"
          intrinsicWidth={420}
          intrinsicHeight={130}
        />
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
        <Image
          src="/build-img/svgo-svg/KPHA.svg"
          intrinsicWidth={430}
          intrinsicHeight={345}
        />
        <Pause />
        <OuterP>
          In particular,
          instead of positing the definitions of
          sin and cos like this...
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/n-qa.svg"
          intrinsicWidth={420}
          intrinsicHeight={345}
        />
        <Pause />
        <OuterP>
          ...with the input appearing as a
          displacement, we can posit the definitions
          like this...
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/kCui.svg"
          intrinsicWidth={420}
          intrinsicHeight={345}
        />
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
          <Image
            src="/build-img/svgo-svg/tIP3.svg"
            intrinsicWidth={420}
            intrinsicHeight={345}
          />
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
          <Image
            src="/build-img/svgo-svg/jn-F.svg"
            intrinsicWidth={420}
            intrinsicHeight={345}
          />
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
          The definition of radians also implies
          that the length of a circular
          arc subtended by an angle is its radian
          measure times the radius:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/8wuf.svg"
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
            The degree “°” notation.
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
          and so on.
        </OuterP>
        <OuterP class="indent-10">
          Thus, for example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(90^\circ\hlfbk) = \cos \eta
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          not because of anything to do with ‘cos’ or
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
          family look like this:)
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/Yhim.svg"
          intrinsicWidth={530}
          intrinsicHeight={530}
        />
        <Pause />
        <OuterP>
          Vice-versa, every point
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
        <Image
          src="/build-img/svgo-svg/BFW6.svg"
          intrinsicWidth={720}
          intrinsicHeight={415}
        />
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
          For the remaining values we use these two
          equilateral triangles:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/uUEG.svg"
          intrinsicWidth={520}
          intrinsicHeight={250}
        />
        <Pause />
        <OuterP>
          The first triangle implies that the unique
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
          (surprise!), the two points must be
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
          or
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
        <Image
          src="/build-img/svgo-svg/Zu5W.svg"
          intrinsicWidth={600}
          intrinsicHeight={415}
        />
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
        <Image
          src="/build-img/svgo-svg/tDhP.svg"
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
          intrinsicWidth={400}
          intrinsicHeight={345}
        />
        <Pause />
        <OuterP>
          But say we re-scale the circle to radius {" "}
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
          intrinsicWidth={400}
          intrinsicHeight={345}
        />
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
          Q = (r\cos\theta, r\sin\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          or
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;aligned&#125;
          Q_x &amp;= r\cdot\cos \theta, \\
          Q_y &amp;= r\cdot\sin \theta \up&#123;1.4&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          where {" "}
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
            Right triangles.
          </b>
          {" "}
          Hopefully, the following figure should seem
          believable-and/or-familiar, at this point
          (it's a scaled-up/down unit circle):
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/xqXh.svg"
          intrinsicWidth={400}
          intrinsicHeight={345}
        />
        <Pause />
        <OuterP>
          If {" "}
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
          intrinsicWidth={400}
          intrinsicHeight={230}
        />
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
        <Image
          src="/build-img/svgo-svg/j3G_.svg"
          intrinsicWidth={400}
          intrinsicHeight={260}
        />
        <Pause />
        <OuterP>
          ...the relationship can be written:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/3N4N.svg"
          intrinsicWidth={470}
          intrinsicHeight={255}
        />
        <Pause />
        <OuterP>
          To be paired with this figure:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/Jk8H.svg"
          intrinsicWidth={470}
          intrinsicHeight={415}
        />
        <Pause />
        <OuterP>
          The arrows indicate that {" "}
          <Math>
            $\cos \theta$
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
            $\sin \theta$
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
        <Example id="_86_h.a.i_">
          <OuterP>
            <b>
              Example 2.
            </b>
            {" "}
            In the following diagram...
          </OuterP>
          <Pause />
          <Image
            src="/build-img/svgo-svg/zVzp.svg"
            intrinsicWidth={400}
            intrinsicHeight={315}
          />
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
        <Example id="_87_h.a.i_">
          <OuterP>
            <b>
              Example 3.
            </b>
            {" "}
            In the following diagram...
          </OuterP>
          <Pause />
          <Image
            src="/build-img/svgo-svg/WPT7.svg"
            intrinsicWidth={400}
            intrinsicHeight={315}
          />
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
    </>}
    {visibleRestSections() > 10 && <>
      <Pause />
      <Section id="section-12">
        <OuterP>
          <b>
            The missing arrows.
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
          intrinsicWidth={440}
          intrinsicHeight={230}
        />
        <Pause />
        <OuterP>
          Each of the six ratios has a named function. We shall
          now reveal the names of the four missing
          functions (!!):
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/wra-.svg"
          intrinsicWidth={440}
          intrinsicHeight={230}
        />
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
          \sec \theta
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          takes you from ‘adjacent’ to ‘hypotenuse’, multiplying by
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \csc \theta
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          takes you from ‘opposite’ to ‘hypotenuse’, multiplying by
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \tan \theta
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
          \cot \theta
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
          is close to {" "}
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
              The shorter exercise sequence.
            </b>
            {" "} The chapter now has 16 exercises with angles and geometric ratios first (1–3), long division and a circumference approximation next (4–7), then powers of secant (8), function composition and sinusoidal motion (9–12), and discoveries from four graphs (13–16). Keep this finish line visible rather than filling the vacated places with replacement drills.
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              Keep the long-division sidequest.
            </b>
            {" "} Exercises 4–6 remain together, followed by the circumference approximation in Exercise 7. That final question brings the arithmetic back to the chapter. The sidequest is deliberate; the other excursions have moved to Trig II for now.
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              Keep the function-language thread.
            </b>
            {" "} Exercises 9–10 translate function boxes into composition and lambda notation, then interpret their graphs. Exercise 11 establishes the circular-motion interpretation; Exercise 12 then applies both approaches to parameter dials. Preserve the ambiguity about direction of travel in Exercise 11. Keep any future solution edits concise rather than adding a second lesson on composition.
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              Preserve discovery before proof.
            </b>
            {" "} Exercises 13–16 share one set of graphs: match the functions, spot the Pythagorean identity, notice doubled frequency, and find the maximum of sine plus cosine geometrically. Let the graphs suggest that these combinations are sinusoids; reserve the exact identities and their angle-sum proofs for Trig II.
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              Watch the spiral, without removing the play.
            </b>
            {" "} The spiral calculation (Exercise 3) comes early, while the reader has energy for its extended geometry. The powers-of-secant question (Exercise 8) follows the long-division sidequest as a playful return to geometric thinking, before the function-box sequence. Keep both initially, but watch the length of the spiral’s solution. Its extended geometry need not establish the expected difficulty of every exercise. The other 14 exercises from the previous sequence are preserved in Trig II for later selection, not deleted.
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              Watch where the ratios are used.
            </b>
            {" "} The standalone question asking what ratios η and 4η represent is now excluded. When these quantities appear as ratios, especially in circumference formulas, check that the connection from arc lengths on the unit circle to arc length divided by radius has been sufficiently explained at that point. Do not assume that removing the question also removes the need for that connection.
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
        id="_104_h.a.i_"
      >
        <Exercise number={1}>
          <ExerciseStatement id="_88_h.a.i_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              {" "}
              Which of these angles is {" "}
              <Math>
                $0.2$
              </Math>
              {" "} radians?
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/lwHG.svg"
              intrinsicWidth={400}
              intrinsicHeight={182}
            />
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
                {" "}
                If you zoom in a little you can see
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
                intrinsicWidth={400}
                intrinsicHeight={120}
              />
              <Pause />
              <StarDivider />
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={2}>
          <ExerciseStatement id="_89_h.a.i_">
            <OuterP>
              <b>
                Exercise 2.
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
              intrinsicWidth={440}
              intrinsicHeight={250}
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
                offsetX="6em"
                atLeastAsWide={true}
                intrinsicWidth={300}
                intrinsicHeight={250}
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
                offsetX=" 7.75em"
                atLeastAsWide={true}
                intrinsicWidth={300}
                intrinsicHeight={250}
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
        <Exercise number={3}>
          <ExerciseStatement id="_90_h.a.i_">
            <OuterP>
              <b>
                Exercise 3.
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
              width="600px"
              style="margin-top:1em;margin-bottom:1em;"
              src="/build-img/svgo-svg/OeWS.svg"
              intrinsicWidth={740}
              intrinsicHeight={640}
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
            <Image
              src="/build-img/svgo-svg/QIQa.svg"
              intrinsicWidth={400}
              intrinsicHeight={270}
            />
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
            <Image
              src="/build-img/svgo-svg/IZD7.svg"
              intrinsicWidth={400}
              intrinsicHeight={270}
            />
            <Pause />
            <OuterP>
              The multiplicative ratios for the first and third arrows (in arrow-order from bottom
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
                intrinsicWidth={400}
                intrinsicHeight={255}
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
                intrinsicWidth={400}
                intrinsicHeight={255}
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
        <Exercise number={4}>
          <ExerciseStatement id="_91_h.a.i_">
            <OuterP>
              <b>
                Exercise 4.
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
              intrinsicWidth="456.029"
              intrinsicHeight="706.523"
            />
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
                intrinsicWidth="456.029"
                intrinsicHeight={190}
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
                intrinsicWidth="456.029"
                intrinsicHeight={190}
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
                intrinsicWidth="456.029"
                intrinsicHeight={190}
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
                intrinsicWidth="456.029"
                intrinsicHeight={190}
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
                intrinsicWidth="456.029"
                intrinsicHeight={190}
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
                intrinsicWidth="456.029"
                intrinsicHeight={240}
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
                intrinsicWidth="456.029"
                intrinsicHeight={240}
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
                intrinsicWidth="456.029"
                intrinsicHeight={240}
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
                intrinsicWidth="456.029"
                intrinsicHeight={240}
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
                intrinsicWidth="456.029"
                intrinsicHeight={320}
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
                intrinsicWidth="456.029"
                intrinsicHeight={320}
              />
              <Pause />
              <OuterP>
                (Etc.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={5}>
          <ExerciseStatement id="_92_h.a.i_">
            <OuterP>
              <b>
                Exercise 5.
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
              The divisions, continued until remainders repeat, look as follows:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/CURd.svg"
              intrinsicWidth="1492.16"
              intrinsicHeight="697.643"
            />
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
        <Exercise number={6}>
          <ExerciseStatement id="_93_h.a.i_">
            <OuterP>
              <b>
                Exercise 6.
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
              intrinsicWidth="655.542"
              intrinsicHeight="696.25"
            />
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
              <Image
                src="/build-img/svgo-svg/x9Ng.svg"
                intrinsicWidth="655.542"
                intrinsicHeight={150}
              />
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
              <Image
                src="/build-img/svgo-svg/6uMQ.svg"
                intrinsicWidth="655.542"
                intrinsicHeight={150}
              />
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
              <Image
                src="/build-img/svgo-svg/D10R.svg"
                intrinsicWidth="655.542"
                intrinsicHeight={150}
              />
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
              <Image
                src="/build-img/svgo-svg/2kAo.svg"
                intrinsicWidth="655.542"
                intrinsicHeight={150}
              />
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
              <Image
                src="/build-img/svgo-svg/qwI2.svg"
                intrinsicWidth="655.542"
                intrinsicHeight={215}
              />
              <Pause />
              <OuterP>
                (FYI, the remainder now consists of these yellow
                digits:)
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/mxCX.svg"
                intrinsicWidth="655.542"
                intrinsicHeight={220}
              />
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
              <Image
                src="/build-img/svgo-svg/SaeW.svg"
                intrinsicWidth="655.542"
                intrinsicHeight={215}
              />
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
              <Image
                src="/build-img/svgo-svg/sCyt.svg"
                intrinsicWidth="655.542"
                intrinsicHeight={215}
              />
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
              <Image
                src="/build-img/svgo-svg/QJ-A.svg"
                intrinsicWidth="655.542"
                intrinsicHeight={215}
              />
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
              <Image
                src="/build-img/svgo-svg/aGjl.svg"
                intrinsicWidth="655.542"
                intrinsicHeight={215}
              />
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
              <Image
                src="/build-img/svgo-svg/mwDw.svg"
                intrinsicWidth="655.542"
                intrinsicHeight={300}
              />
              <Pause />
              <OuterP>
                (And to be specific, the remainder is now formed
                by...
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/zsA9.svg"
                intrinsicWidth="655.542"
                intrinsicHeight={303}
              />
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
              <Image
                src="/build-img/svgo-svg/DL_-.svg"
                intrinsicWidth={320}
                intrinsicHeight={95}
              />
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
              <Image
                src="/build-img/svgo-svg/tkDH.svg"
                intrinsicWidth="305.007"
                intrinsicHeight="163.326"
              />
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
              <Image
                src="/build-img/svgo-svg/eoA2.svg"
                intrinsicWidth={320}
                intrinsicHeight={164}
              />
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
              <Image
                src="/build-img/svgo-svg/XKhM.svg"
                intrinsicWidth={320}
                intrinsicHeight={164}
              />
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
              <Image
                src="/build-img/svgo-svg/5nhK.svg"
                intrinsicWidth={320}
                intrinsicHeight={164}
              />
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
              <Image
                src="/build-img/svgo-svg/_-US.svg"
                intrinsicWidth={320}
                intrinsicHeight={164}
              />
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
              <Image
                src="/build-img/svgo-svg/jj0a.svg"
                intrinsicWidth={320}
                intrinsicHeight={164}
              />
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
              <Image
                src="/build-img/svgo-svg/qylE.svg"
                intrinsicWidth={320}
                intrinsicHeight={164}
              />
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
              <Image
                src="/build-img/svgo-svg/anHE.svg"
                intrinsicWidth={320}
                intrinsicHeight={164}
              />
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
              <Image
                src="/build-img/svgo-svg/Tte9.svg"
                intrinsicWidth={320}
                intrinsicHeight={164}
              />
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
              <Image
                src="/build-img/svgo-svg/_sJ5.svg"
                intrinsicWidth={320}
                intrinsicHeight={175}
              />
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
              <Image
                src="/build-img/svgo-svg/jqe5.svg"
                intrinsicWidth={320}
                intrinsicHeight={164}
              />
              <Pause />
              <OuterP>
                Etc—we finally obtain:
              </OuterP>
              <Pause />
              <Image
                style="margin-top:1em;margin-bottom:1em;"
                src="/build-img/svgo-svg/y31C.svg"
                intrinsicWidth={320}
                intrinsicHeight={164}
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
              <Image
                src="/build-img/svgo-svg/E79T.svg"
                intrinsicWidth={530}
                intrinsicHeight={120}
              />
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
        <Exercise number={7}>
          <ExerciseStatement id="_94_h.a.i_">
            <OuterP>
              <b>
                Exercise 7.
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
            <Image
              src="/build-img/svgo-svg/bA_Z.svg"
              intrinsicWidth="290.51501"
              intrinsicHeight="375.13101"
            />
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
                because the long division of {" "}
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
                intrinsicWidth="316.51501"
                intrinsicHeight={460}
              />
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
        <Exercise number={8}>
          <ExerciseStatement id="_95_h.a.i_">
            <OuterP>
              <b>
                Exercise 8.
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
            <Image
              src="/build-img/svgo-svg/uqSS.svg"
              intrinsicWidth={430}
              intrinsicHeight={333}
            />
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
            <Image
              src="/build-img/svgo-svg/2Pqq.svg"
              intrinsicWidth={430}
              intrinsicHeight={220}
            />
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
            <Image
              src="/build-img/svgo-svg/H7R8.svg"
              intrinsicWidth={330}
              intrinsicHeight={335}
            />
            <Pause />
            <OuterP>
              Though in fact, this tower is already embedded
              as a subdiagram of our first illustration (modulo
              scale and orientation) (!):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Xdq7.svg"
              intrinsicWidth={430}
              intrinsicHeight={333}
            />
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
            <Image
              src="/build-img/svgo-svg/ICZK.svg"
              intrinsicWidth={1210}
              intrinsicHeight={333}
            />
            <Pause />
            <OuterP>
              Two slight variants on another diagram (for
              which more labelings are also possible):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/CvsG.svg"
              intrinsicWidth={855}
              intrinsicHeight={362}
            />
            <Pause />
            <OuterP>
              ...and other more-or-less logical diagrams
              are possible,
              but this seems to content the aliens!
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                One way to formally verify that...
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/ci-a.svg"
                intrinsicWidth={130}
                intrinsicHeight={80}
              />
              <Pause />
              <OuterP>
                ...in this diagram...
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/UspN.svg"
                intrinsicWidth={430}
                intrinsicHeight={333}
              />
              <Pause />
              <OuterP>
                ...is to note that...
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/VLwm.svg"
                intrinsicWidth={590}
                intrinsicHeight={80}
              />
              <Pause />
              <OuterP>
                ...by direct measure and simplifying the fraction—always
                nice to see a bit of algebra!
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={9}>
          <ExerciseStatement id="_96_h.a.i_">
            <OuterP>
              <b>
                Exercise 9.
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
            <Image
              src="/build-img/svgo-svg/hzK8.svg"
              intrinsicWidth={460}
              intrinsicHeight={420}
            />
            <Pause />
            <OuterP>
              Rewrite each case:
            </OuterP>
            <Pause />
            <List
              marker="lower-alpha-paren"
              markerFontFamily="Baskerville Bold"
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
        <Exercise number={10}>
          <ExerciseStatement id="_97_h.a.i_">
            <OuterP>
              <b>
                Exercise 10.
              </b>
              {" "}
              How would the graphs of the four compositions
              in {" "}
              <InChapterLink
                href="#_96_h.a.i_"
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
              marker="decimal"
              style="padding-left:2em;"
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
              <OutChapterLink
                href="/article/chapter3#_43_h.a.i_"
                class="out-chapter-link"
              >
                Exercise 7 of Chapter 3
              </OutChapterLink>
              , 
              {" "}
              <OutChapterLink
                href="/article/chapter3#_51_h.a.i_"
                class="out-chapter-link"
              >
                Exercise 14 of Chapter 3
              </OutChapterLink>
              .)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={11}>
          <ExerciseStatement id="_98_h.a.i_">
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
            <List style="padding-left:2em;gap:0.2em;">
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
            <List style="padding-left:2em;">
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
            <List style="padding-left:2em;">
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
                {" "}
                This diagram illustrates the two possibilities:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/rUnE.svg"
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
                {" "}
                If you harbor any doubts about there being no more
                than two solutions, picture this diagram...
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/0eyH.svg"
                intrinsicWidth={190}
                intrinsicHeight={190}
              />
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
          <ExerciseStatement id="_99_h.a.i_">
            <OuterP>
              <b>
                Exercise 12.
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
              marker="decimal"
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
              <InChapterLink
                href="#_98_h.a.i_"
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
                  can be thought of as a “speeding up
                  of time”, and compresses the graph horizontally
                  about the {" "}
                  <Math>
                    $y$
                  </Math>
                  {" "} axis by a factor {" "}
                  <Math>
                    $2.33$
                  </Math>
                  {" "} (while
                  keeping {" "}
                  <Math>
                    $y = \sin(C)$
                  </Math>
                  {" "} at {" "}
                  <NoBreak>
                    <Math>
                      $x = 0$
                    </Math>
                    ,
                  </NoBreak>
                  {" "} as should be);
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
            <Image
              src="/build-img/svgo-svg/r-G7.svg"
              intrinsicWidth={755}
              intrinsicHeight={95}
            />
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
            <Image
              src="/build-img/svgo-svg/sweo.svg"
              intrinsicWidth={570}
              intrinsicHeight={150}
            />
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
            <Image
              src="/build-img/svgo-svg/2ziI.svg"
              intrinsicWidth={755}
              intrinsicHeight={150}
            />
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
              <InChapterLink
                href="#_97_h.a.i_"
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
              intrinsicWidth={755}
              intrinsicHeight={150}
            />
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
              <InChapterLink
                href="#_97_h.a.i_"
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
              intrinsicWidth={755}
              intrinsicHeight={150}
            />
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
              <InChapterLink
                href="#_97_h.a.i_"
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
              intrinsicWidth={755}
              intrinsicHeight={95}
            />
            <Pause />
            <OuterP>
              ...that vertically translates the entire graph,
              as it stands, by {" "}
              <Math>
                $D$
              </Math>
              {" "} units up, as again discussed
              in {" "}
              <InChapterLink
                href="#_97_h.a.i_"
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
                {" "}
                Concerning the second solution, for simplicity of
                analysis it's important
                to bring the pre- and post-processing
                functions online “from the inside out”,
                gluing new boxes on to what's already there:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/EsiI.svg"
                intrinsicWidth={570}
                intrinsicHeight={195}
              />
              <Pause />
              <OuterP>
                (Otherwise, things get more complicated.)
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
                    or {" "}
                    <i>
                      mean
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
        <Exercise number={13}>
          <ExerciseStatement id="_100_h.a.i_">
            <OuterP>
              <b>
                Exercise 13.
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
            <Image
              src="/build-img/svgo-svg/huBu.svg"
              intrinsicWidth="1203.483"
              intrinsicHeight="361.683"
            />
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
              given that
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
              we deduce that
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
            <Image
              src="/build-img/svgo-svg/Ninz.svg"
              intrinsicWidth={1240}
              intrinsicHeight={375}
            />
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
        <Exercise number={14}>
          <ExerciseStatement id="_101_h.a.i_">
            <OuterP>
              <b>
                Exercise 14.
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
              <InChapterLink
                href="#_100_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 13
              </InChapterLink>
              &#8288;?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Imagine wooden cutouts made from {" "}
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
              intrinsicWidth={580}
              intrinsicHeight={160}
            />
            <Pause />
            <Image
              style="margin-top:1.1em;margin-bottom:1.1em;"
              src="/build-img/svgo-svg/nEBv.svg"
              intrinsicWidth={580}
              intrinsicHeight={160}
            />
            <Pause />
            <OuterP>
              It seems that if we vertically flip one of the cutouts 
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
              intrinsicWidth={580}
              intrinsicHeight={160}
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
        <Exercise number={15}>
          <ExerciseStatement id="_102_h.a.i_">
            <OuterP>
              <b>
                Exercise 15.
              </b>
              {" "}
              Based on the graphs of {" "}
              <InChapterLink
                href="#_100_h.a.i_"
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
            </MathBlock>
            <Pause />
            <OuterP>
              and/or {" "}
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
            </MathBlock>
            <Pause />
            <OuterP>
              and/or {" "}
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
              One can see from the graphs of {" "}
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
                {" "}
                More mathematically, say that {" "}
                <Math>
                  $f : \rr \ra \rr$
                </Math>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                has period {" "}
                <Math>
                  $T$
                </Math>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                or
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                is periodic mod {" "}
                <Math>
                  $T$
                </Math>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                for some number {" "}
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
              </MathBlock>
              <Pause />
              <OuterP>
                for all {" "}
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
                periodic mod {" "}
                <Math>
                  $4\eta$
                </Math>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                while {" "}
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
                periodic mod {" "}
                <Math>
                  $2\eta$
                </Math>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                since, for example,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \sin(x + 2\eta)\cos(x + 2\eta) = (-\sin x)(-\cos x) = \sin x\cos x
                $$
                <ImageLeft
                  src="/build-img/svgo-svg/hCre.svg"
                  atLeastAsWide={true}
                  intrinsicWidth={500}
                  intrinsicHeight={100}
                />
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
          <ExerciseStatement id="_103_h.a.i_">
            <OuterP>
              <b>
                Exercise 16.
              </b>
              {" "}
              The graph {" "}
              <Math>
                $y = \cos x + \sin x$
              </Math>
              {" "} from {" "}
              <InChapterLink
                href="#_100_h.a.i_"
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
              intrinsicWidth={600}
              intrinsicHeight={180}
            />
            <Pause />
            <OuterP>
              Reasoning geometrically,
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
              By the definition,
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
            <Image
              src="/build-img/svgo-svg/xf9D.svg"
              intrinsicWidth={660}
              intrinsicHeight={360}
            />
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
            <Image
              src="/build-img/svgo-svg/byhq.svg"
              intrinsicWidth={660}
              intrinsicHeight={360}
            />
            <Pause />
            <OuterP>
              For short:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/2Wso.svg"
              intrinsicWidth={660}
              intrinsicHeight={360}
            />
            <Pause />
            <OuterP>
              Some more examples (if need be):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/yFHg.svg"
              intrinsicWidth={900}
              intrinsicHeight={480}
            />
            <Pause />
            <OuterP>
              Given this description, it seems obvious (or:
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
              intrinsicWidth={660}
              intrinsicHeight={360}
            />
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
              Also,
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
                occurs at the other end of the circle.
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
              <Image
                src="/build-img/svgo-svg/GHRw.svg"
                intrinsicWidth={600}
                intrinsicHeight={170}
              />
              <Pause />
              <Image
                src="/build-img/svgo-svg/BJ2x.svg"
                intrinsicWidth={600}
                intrinsicHeight={170}
              />
              <Pause />
              <OuterP>
                (Note that {" "}
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
              </MathBlock>
              <Pause />
              <OuterP>
                ...in case you haven't seen this kind of
                arithmetic before.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};