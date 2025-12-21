import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Boxed  from "~/components/Boxed";
import { CentralDisplay, CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { Math, MathBlock }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageRight, ImageLeft }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { StarDivider }  from "~/components/StarDivider";
import TextParent  from "~/components/TextParent";
import { TildeDivider }  from "~/components/TildeDivider";
import { SolutionNote, NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter5__() {
  return (
    <Article
      prevPage="/article/chapter4"
      nextPage=""
      pageNecessaryMargin={950}
      maxElementWidth={1000}
      id="_128_hgi_"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            secant: a second view
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            note on calculators
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
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
            Secant: a second view.
          </b>
          {" "}
          We will point out that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sec(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is also the multiplicative factor that takes 
          you from the {" "}
          <span style="background-color:#ff82d7;border-radius:0.3em;font-size:0.7em;padding-left:0.5em;padding-right:0.5em;padding-top:0.3em;padding-bottom:0.3em;border:1px solid black;font-family:arial;">
            PURPLE
          </span>
          {" "} to the {" "}
          <span style="white-space:nowrap;background-color:#ccffaa;border-radius:0.3em;font-size:0.7em;padding-left:0.5em;padding-right:0.5em;padding-top:0.3em;padding-bottom:0.3em;border:1px solid black;font-family:arial;">
            LIME GREEN
          </span>
          {" "} triangle (hard to draw, because it is
          behind the purple triangle!) in the following
          figure:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/LLc5.svg" />
        <Pause />
        <OuterP>
          Indeed, the scaling factor that is needed
          to turn the purple into the lime green
          triangle is the solution {" "}
          <Math>
            $A$
          </Math>
          {" "} to
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          A\cdot \cos(\theta) = 1
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          which gives
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          A = &#123;1\over \cos(\theta)&#125; = \sec(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          using {" "}
          <NoBreak>
            <Math>
              $\sec = 1/\cos$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          (After all, this multiplicative factor...
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/47_1.svg" />
        <Pause />
        <OuterP>
          ...was always going to equal
          this multiplicative factor...
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/5W5r.svg" />
        <Pause />
        <OuterP>
          ...given that the target segment has length {" "}
          <Math>
            $1$
          </Math>
          {" "} each time!)
        </OuterP>
        <Pause />
        <OuterP>
          <i>
            Postscript.
          </i>
          {" "}
          Similarly,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \csc(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is the multiplicative factor that takes you 
          from the {" "}
          <span style="white-space:nowrap;background-color:#ff6600;border-radius:0.3em;font-size:0.7em;padding-left:0.5em;padding-right:0.5em;padding-top:0.3em;padding-bottom:0.3em;border:1px solid black;font-family:arial;">
            BURNT ORANGE
          </span>
          {" "} to the {" "}
          <span style="white-space:nowrap;background-color:#e9afaf;border-radius:0.3em;font-size:0.7em;padding-left:0.5em;padding-right:0.5em;padding-top:0.3em;padding-bottom:0.3em;border:1px solid black;font-family:arial;">
            FAUX BORDEAUX
          </span>
          {" "} triangle below:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/wZkI.svg" />
        <Pause />
        <OuterP>
          (But this fact is not used as often.)
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
      <Exercises>
        <Exercise number={1}>
          <ExerciseStatement id="_81_hgi_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              {" "}
              Is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y =  \cos(x + 0.1)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              the shift of {" "}
              <Math>
                $y = \cos(x)$
              </Math>
              {" "} to the left by {" "}
              <NoBreak>
                <Math>
                  $0.1$
                </Math>
                ,
              </NoBreak>
              {" "}
              or to the right by {" "}
              <NoBreak>
                <Math>
                  $0.1$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The function {" "}
              <Math>
                $x \ra \cos(x + 0.1)$
              </Math>
              {" "} fetches its values
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              in the future
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              by {" "}
              <NoBreak>
                <Math>
                  $0.1$
                </Math>
                ,
              </NoBreak>
              {" "} compared to {" "}
              <NoBreak>
                <Math>
                  $\cos(x)$
                </Math>
                .
              </NoBreak>
              {" "} It is therefore
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              ahead
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              or its graph
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              to the left
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of {" "}
              <NoBreak>
                <Math>
                  $y = \cos(x)$
                </Math>
                ,
              </NoBreak>
              {" "} by {" "}
              <NoBreak>
                <Math>
                  $0.1$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={2}>
          <ExerciseStatement id="_82_hgi_">
            <OuterP>
              <b>
                Exercise 2.
              </b>
              {" "}
              Guesstimate a function with this graph:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/l9jw.svg" />
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
              , cf. Chapter 3).
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
            <Image src="/build-img/svgo-svg/e7Qr.svg" />
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
        <Exercise number={3}>
          <ExerciseStatement id="_83_hgi_">
            <OuterP>
              <b>
                Exercise 3.
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
              {" "} cf. Chapter 3.]
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
              %(A\cdot 12^2) - (A\cdot 0^2) \approx 6
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
        <Exercise number={4}>
          <ExerciseStatement id="_84_hgi_">
            <OuterP>
              <b>
                Exercise 4.
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
              Exercise 3, it has an amplitude of {" "}
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
              sinusoid together.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={5}>
          <ExerciseStatement id="_85_hgi_">
            <OuterP>
              <b>
                Exercise 5.
              </b>
              {" "}
              compute {" "}
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
        <Exercise number={6}>
          <ExerciseStatement id="_86_hgi_">
            <OuterP>
              <b>
                Exercise 6.
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
        <Exercise number={7}>
          <ExerciseStatement id="_87_hgi_">
            <OuterP>
              <b>
                Exercise 7.
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
                offset_x="5.5em"
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
                offset_x="7.5em"
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
        <Exercise number={8}>
          <ExerciseStatement id="_88_hgi_">
            <OuterP>
              <b>
                Exercise 8.
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
                Represent the vectors {" "}
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
                respectively:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/Sx1Y.svg" />
              <Pause />
              <OuterP>
                Then
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
                ...component displacements, while
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                u_y + v_y
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                may be geometrically realized as the concatenation
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
        <Exercise number={9}>
          <ExerciseStatement id="_89_hgi_">
            <OuterP>
              <b>
                Exercise 9.
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
            <TextParent>
              <ul style="list-style-type:disc;margin-top:1em;margin-bottom:1em;padding-left:66px;line-height:1.7em;">
                <li>
                  <Math>
                    $A$
                  </Math>
                  {" "} is the radius of the circle
                </li>
                <li>
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
                </li>
              </ul>
            </TextParent>
            <OuterP>
              And either:
            </OuterP>
            <TextParent>
              <ul style="list-style-type:disc;margin-top:1em;margin-bottom:1em;padding-left:66px;line-height:1.7em;">
                <li>
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
                </li>
              </ul>
            </TextParent>
            <OuterP>
              Or:
            </OuterP>
            <TextParent>
              <ul style="list-style-type:disc;margin-top:1em;margin-bottom:1em;padding-left:66px;line-height:1.7em;">
                <li>
                  <Math>
                    $-B$
                  </Math>
                  {" "} is the counterclockwise
                  angular speed/angular frequency of the particle
                  and {" "}
                  <Math>
                    $-C$
                  </Math>
                  {" "} is the counterclockwise starting angle
                  of the particle, as measured from a translate of
                  the positive {" "}
                  <Math>
                    $x$
                  </Math>
                  {" "} axis going through the center
                  of the circle
                </li>
              </ul>
            </TextParent>
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
              (Or... ~ ~ ~ ~ ~ ~ ~ ~ ~
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/UkNB.svg" />
            <Pause />
            <OuterP>
              ...to put everything in terms of
              counterclockwise-ness.) This accounts for
              the two solutions listed above. (But it can
              only be one of those two solutions, having made
              the “Occam's razor” assumption that the
              particle is traveling at uniform speed around
              a circle.) (Nb: In particular, “uniform speed”
              precludes sudden reversals of direction at either
              end of the circle, if you were at all thinking
              of that, for speed would be undefined at
              those points where direction is reversed.)
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
        <Exercise number={10}>
          <ExerciseStatement id="_90_hgi_">
            <OuterP>
              <b>
                Exercise 10.
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
              style="margin-top:1em;margin-bottom:1em;"
              src="/build-img/svgo-svg/TFcy.svg"
            />
            <Pause />
            <OuterP>
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
              style="margin-top:1em;margin-bottom:1em;"
              src="/build-img/svgo-svg/4Ufj.svg"
            />
            <Pause />
            <OuterP>
              (Joking.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={11}>
          <ExerciseStatement id="_91_hgi_">
            <OuterP>
              <b>
                Exercise 11.
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
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                As one consequence, it follows that the circumference
                of a circle is
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                4\eta\cdot r
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                where {" "}
                <Math>
                  $r$
                </Math>
                {" "} is the radius.
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                These “ratio descriptions” of {" "}
                <Math>
                  $\eta$
                </Math>
                {" "} and
                {" "}
                <Math>
                  $4\eta$
                </Math>
                {" "} also follow by viewing {" "}
                <Math>
                  $\eta$
                </Math>
                {" "} and {" "}
                <Math>
                  $4\eta$
                </Math>
                {" "}
                as the radian values of a right angle and a full angle,
                respectively.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={12}>
          <ExerciseStatement id="_92_hgi_">
            <OuterP>
              <b>
                Exercise 12.
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
        <Exercise number={13}>
          <ExerciseStatement id="_93_hgi_">
            <OuterP>
              <b>
                Exercise 13.
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
              From which...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \displaylines&#123;
              \Large \up&#123;1.5&#125;&#123;22\over 7&#125; = 3.\overline&#123;142857&#125;\\
              \Large \up&#123;1.7&#125;&#123;33\over 7&#125; = 4.\overline&#123;714285&#125;\\
              \Large \up&#123;1.7&#125;&#123;44\over 7&#125; = 6.\overline&#123;285714&#125;
              &#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...because the digits of the quotient are,
              in each case, about to
              restart from the first digit
              after the decimal point.
            </OuterP>
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
                ...though none of these estimates are actually
                accurate to more than two decimal places. (While all
                are accurate up to {" "}
                <i>
                  at least
                </i>
                {" "} two decimal places.)
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                As mentioned in Note 1 of Exercise 24,
                Chapter 3, these approximations are about
                half-a-part-in-a-thousand too large, or to
                be more exact,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \approx 0.0004
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                too large in relative terms. I.e., you can subtract
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \approx 1.\overline&#123;571428&#125; \cdot 0.0004 \approx 0.0006
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                from
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \approx 1.\overline&#123;571428&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                to get a better approximation for {" "}
                <NoBreak>
                  <Math>
                    $\eta$
                  </Math>
                  ,
                </NoBreak>
                {" "} subtract
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \approx 3.\overline&#123;142857&#125; \cdot 0.0004 \approx 0.0012
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                from
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \approx 3.\overline&#123;142857&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                to get a better approximation for {" "}
                <NoBreak>
                  <Math>
                    $2\eta$
                  </Math>
                  ,
                </NoBreak>
                {" "} subtract
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \approx 4.\overline&#123;714285&#125; \cdot 0.0004 \approx 0.0019
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                from
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \approx 4.\overline&#123;714285&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                to get a better approximation for {" "}
                <NoBreak>
                  <Math>
                    $3\eta$
                  </Math>
                  ,
                </NoBreak>
                {" "} subtract
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \approx 6.\overline&#123;285714&#125; \cdot 0.0004 \approx 0.0025
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                from
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \approx 6.\overline&#123;285714&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                to get a better approximation for {" "}
                <NoBreak>
                  <Math>
                    $4\eta$
                  </Math>
                  .
                </NoBreak>
                {" "} The resulting
                approximations end up being...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \displaylines&#123;
                \Large         \eta \approx  1.5708\\
                \Large \up&#123;1.7&#125;2\eta \approx 3.1416\\
                \Large \up&#123;1.7&#125;3\eta \approx 4.7123\\
                \Large \up&#123;1.7&#125;4\eta \approx 6.2832&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...that are correct approximations up to
                the fourth digit, it turns out, modulo
                rounding off of the fifth digit. (But these
                are not worth learning by heart, by any means.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={14}>
          <ExerciseStatement id="_94_hgi_">
            <OuterP>
              <b>
                Exercise 14.
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
        <Exercise number={15}>
          <ExerciseStatement id="_95_hgi_">
            <OuterP>
              <b>
                Exercise 15.
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
        <Exercise number={16}>
          <ExerciseStatement id="_96_hgi_">
            <OuterP>
              <b>
                Exercise 16.
              </b>
              {" "}
              The graph {" "}
              <Math>
                $y = \cos(x) + \sin(x)$
              </Math>
              {" "} from {" "}
              <InChapterLink
                href="/article/chapter5#_86_hgi_"
                class="handle-in-chapter-link"
              >
                Exercise 6
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
              \begin&#123;align&#125;
              &amp;\,\, \cos(\eta/2) + \sin(\eta/2)\\ =&amp;\,\,\up&#123;1.5&#125;  \sqrt&#123;0.5&#125; + \sqrt&#123;0.5&#125;\\ =&amp;\,\,\up&#123;1.5&#125; \sqrt&#123;2&#125;
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              using the fact that
            </OuterP>
            <div>
              <MathBlock>
                $$
                \Large \cos(\eta/2) = \sin(\eta/2) = \sqrt&#123;0.5&#125;
                $$
              </MathBlock>
            </div>
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
        <Exercise number={17}>
          <ExerciseStatement id="_97_hgi_">
            <OuterP>
              <b>
                Exercise 17.
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
              <Image src="/build-img/svgo-svg/0gj5.svg" />
              <Pause />
              <OuterP>
                Verbalized: {" "}
                <i>
                  the counterclockwise angle from the positive
                  {" "}
                  <Math>
                    $x$
                  </Math>
                  {" "} axis to
                  the radial vector
                  equals the counterclockwise angle from the positive
                  {" "}
                  <Math>
                    $y$
                  </Math>
                  {" "} axis to the counterclockwise tangent.
                </i>
              </OuterP>
              <OuterP class="indent-10">
                (Nb: When we say the “radial vector” and
                “counterclockwise tangent” we mean those objects that
                are illustrated here:)
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/MRNc.svg" />
            </SolutionNote>
            <Pause />
            <StarDivider />
          </Solution>
        </Exercise>
        <Exercise number={18}>
          <ExerciseStatement id="_98_hgi_">
            <OuterP>
              <b>
                Exercise 18.
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
        <Exercise number={19}>
          <ExerciseStatement id="_99_hgi_">
            <OuterP>
              <b>
                Exercise 19.
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
        <Exercise number={20}>
          <ExerciseStatement id="_100_hgi_">
            <OuterP>
              <b>
                Exercise 20.
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
        <Exercise number={21}>
          <ExerciseStatement id="_101_hgi_">
            <OuterP>
              <b>
                Exercise 21.
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
        <Exercise number={22}>
          <ExerciseStatement id="_102_hgi_">
            <OuterP>
              <b>
                Exercise 22.
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
            <TextParent>
              <ol
                class="l1"
                style="margin-top:0.5em;"
              >
                <li>
                  using the composition {" "}
                  <NoBreak>
                    “
                    <Math>
                      $\circ$
                    </Math>
                    ”
                  </NoBreak>
                  {" "} operator;
                </li>
                <li>
                  as an expression of the form
                  <Pause />
                  <MathBlock>
                    $$
                    x \ra \dots
                    $$
                  </MathBlock>
                  <Pause />
                  for some value of {" "}
                  <NoBreak>
                    “
                    <Math>
                      $\dots$
                    </Math>
                    ”.
                  </NoBreak>
                </li>
              </ol>
            </TextParent>
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
        <Exercise number={23}>
          <ExerciseStatement id="_103_hgi_">
            <OuterP>
              <b>
                Exercise 23.
              </b>
              {" "}
              How would the graph of each of the compositions
              from Exercise 26 compare to the graph of the
              generic function {" "}
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
            <TextParent>
              <ul style="list-style-type:decimal;margin-top:1em;margin-bottom:1em;padding-left:66px;line-height:1.5em;">
                <li>
                  horizontally translating the graph of {" "}
                  <Math>
                    $f$
                  </Math>
                  {" "} by {" "}
                  <Math>
                    $A$
                  </Math>
                  {" "} units to the left;
                </li>
                <li>
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
                </li>
                <li>
                  vertically translating the graph of {" "}
                  <Math>
                    $f$
                  </Math>
                  {" "} by {" "}
                  <Math>
                    $A$
                  </Math>
                  {" "} units upward;
                </li>
                <li>
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
                </li>
              </ul>
            </TextParent>
            <OuterP>
              (Cf. Exercise 7 of Chapter 3, Exercise 14 of
              Chapter 3.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={24}>
          <ExerciseStatement id="_104_hgi_">
            <OuterP>
              <b>
                Exercise 24.
              </b>
              {" "}
              Prove that {" "}
              <NoBreak>
                <Math>
                  $\cos\cdot\sin$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $\cos^2$
                </Math>
                ,
              </NoBreak>
              {" "} and {" "}
              <Math>
                $\sin^2$
              </Math>
              {" "}
              are periodic mod {" "}
              <NoBreak>
                <Math>
                  $2\eta$
                </Math>
                ,
              </NoBreak>
              {" "} where a function {" "}
              <Math>
                $f$
              </Math>
              {" "} is
              “periodic mod {" "}
              <NoBreak>
                <Math>
                  $T$
                </Math>
                ”
              </NoBreak>
              {" "} if
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;f(x + T) = f(x)&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for all {" "}
              <NoBreak>
                <Math>
                  $x \in \rr$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              We have
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &amp;\,\,\, (\cos\cdot\sin)(x + 2\eta)\\
              =&amp;\,\,\, \up&#123;1.2&#125;\cos(x + 2\eta)\cdot\sin(x + 2\eta)\\
              =&amp;\,\,\, \up&#123;1.2&#125;(-\cos(x))\cdot(-\sin(x))\\
              =&amp;\,\,\, \up&#123;1.2&#125;\cos(x)\cdot\sin(x)\\
              =&amp;\,\,\, \up&#123;1.2&#125;(\cos\cdot\sin)(x)
              \end&#123;align&#125;
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
              {" "} using the fact that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(x + 2\eta) = -\cos(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(x + 2\eta) = -\sin(x)
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
              {" "} and, likewise,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &amp;\,\,\, \cos^2(x + 2\eta)\\
              =&amp;\,\,\, \up&#123;1.2&#125;\cos(x + 2\eta)\cdot\cos(x + 2\eta)\\
              =&amp;\,\,\, \up&#123;1.2&#125;(-\cos(x))\cdot(-\cos(x))\\
              =&amp;\,\,\, \up&#123;1.2&#125;\cos(x)\cdot\cos(x)\\
              =&amp;\,\,\, \up&#123;1.2&#125;\cos^2(x)
              \end&#123;align&#125;
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
              {" "} and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &amp;\,\,\, \sin^2(x + 2\eta)\\
              =&amp;\,\,\, \up&#123;1.2&#125;\sin(x + 2\eta)\cdot\sin(x + 2\eta)\\
              =&amp;\,\,\, \up&#123;1.2&#125;(-\sin(x))\cdot(-\sin(x))\\
              =&amp;\,\,\, \up&#123;1.2&#125;\sin(x)\cdot\sin(x)\\
              =&amp;\,\,\, \up&#123;1.2&#125;\sin^2(x)
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for all {" "}
              <NoBreak>
                <Math>
                  $x \in \rr$
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
                Note that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \te&#123;“&#125;\cos\cdot\sin\te&#123;”&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is a shorthand for
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \te&#123;“&#125;\rt&#123;0.1&#125;x \ra \cos(x)\sin(x)\rt&#123;0.1&#125;\te&#123;”&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                (“the function that maps ...”), just as
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                fg
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is a shorthand for [or really: “defined as”]
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x\ra f(x)g(x)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                more generally for all functions {" "}
                <NoBreak>
                  <Math>
                    $f$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $g$
                  </Math>
                  .
                </NoBreak>
                {" "} So when we plug
                in an input to {" "}
                <NoBreak>
                  “
                  <Math>
                    $\cos\cdot\sin$
                  </Math>
                  ”,
                </NoBreak>
                {" "} as in...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (\cos\cdot\sin)(x+2\eta)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...it unfolds to...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \cos(x + 2\eta)\cdot\sin(x+2\eta)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...per the definition of function multiplication. (Etc.)
                (We mean: likewise for {" "}
                <NoBreak>
                  “
                  <Math>
                    $\sin^2$
                  </Math>
                  ”
                </NoBreak>
                {" "} and {" "}
                <NoBreak>
                  “
                  <Math>
                    $\cos^2$
                  </Math>
                  ”.)
                </NoBreak>
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={25}>
          <ExerciseStatement id="_105_hgi_">
            <OuterP>
              <b>
                Exercise 25.
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
        <Exercise number={26}>
          <ExerciseStatement id="_106_hgi_">
            <OuterP>
              <b>
                Exercise 26.
              </b>
              {" "}
              It also seems from the graphs that {" "}
              <Math>
                $y = \cos^2(x)$
              </Math>
              {" "}
              is a {" "}
              <i>
                sinusoid
              </i>
              , i.e., some combination of a
              scaling and translation of {" "}
              <NoBreak>
                <Math>
                  $y = \cos(x)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/q2Pb.svg" />
            <Pause />
            <OuterP>
              If so, what scaling and translation operations,
              more exactly, can be conjectured to relate the
              two graphs? Can you prove this geometric relationship
              by algebra?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Since {" "}
              <Math>
                $\cos^2$
              </Math>
              {" "} is periodic mod {" "}
              <Math>
                $2\eta$
              </Math>
              {" "} while
              {" "}
              <Math>
                $\cos$
              </Math>
              {" "} is periodic mod {" "}
              <NoBreak>
                <Math>
                  $4\eta$
                </Math>
                ,
              </NoBreak>
              {" "}
              we need, at the very least, a horizontal compression by
              a factor {" "}
              <Math>
                $2$
              </Math>
              {" "} in order to map the bumps of {" "}
              <Math>
                $y = \cos(x)$
              </Math>
              {" "}
              onto those of {" "}
              <NoBreak>
                <Math>
                  $y = \cos^2(x)$
                </Math>
                .
              </NoBreak>
              {" "} From there we have to
              readjust the range and amplitude of the curve, such as,
              e.g., by translating up by {" "}
              <Math>
                $1$
              </Math>
              {" "} and scaling vertically
              by {" "}
              <Math>
                $&#123;1\over 2&#125;$
              </Math>
              {" "} (or scaling vertically by {" "}
              <Math>
                $&#123;1\over 2&#125;$
              </Math>
              {" "}
              and translating up by {" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 2&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} either way):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/atoq.svg" />
            <Pause />
            <OuterP>
              Algebraically, the three steps above turn
              {" "}
              <Math>
                $\cos(x)$
              </Math>
              {" "} into {" "}
              <NoBreak>
                <Math>
                  $\cos(2x)$
                </Math>
                ,
              </NoBreak>
              {" "} into {" "}
              <NoBreak>
                <Math>
                  $1 + \cos(2x)$
                </Math>
                ,
              </NoBreak>
              {" "}
              into {" "}
              <NoBreak>
                <Math>
                  $&#123;1 + \cos(2x)\over 2&#125;$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large\cos(x)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large\downarrow
              $$
              <ImageRight
                src="/build-img/svgo-svg/45U7.svg"
                offset_x="4em"
                compensate_offset_x_for_large_text_columns={true}
              />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large\cos(2x)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large\downarrow
              $$
              <ImageRight
                src="/build-img/svgo-svg/aaHy.svg"
                offset_x="4em"
                compensate_offset_x_for_large_text_columns={true}
              />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large 1 + \cos(2x)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large\downarrow
              $$
              <ImageRight
                src="/build-img/svgo-svg/auto.svg"
                offset_x="4em"
                compensate_offset_x_for_large_text_columns={true}
              />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large&#123;1 + \cos(2x)\over 2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as substituting {" "}
              <NoBreak>
                “
                <Math>
                  $2x$
                </Math>
                ”
              </NoBreak>
              {" "} for {" "}
              <NoBreak>
                “
                <Math>
                  $x$
                </Math>
                ”
              </NoBreak>
              {" "} effects a horizontal
              compression by {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                .
              </NoBreak>
              {" "}
              (See
              the second case
              of Exercise 27, in particular.)
            </OuterP>
            <OuterP class="indent-10">
              (NB: If we do it the other way around,
              putting the vertical scaling before the vertical
              translation, we obtain {" "}
              <NoBreak>
                “
                <Math>
                  $&#123;1\over 2&#125;\cos(2x)$
                </Math>
                ”
              </NoBreak>
              {" "}
              as the third function and {" "}
              <NoBreak>
                “
                <Math>
                  $&#123;1\over 2&#125; + &#123;1\over 2&#125;\cos(2x)$
                </Math>
                ”
              </NoBreak>
              {" "}
              as the fourth function:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large\cos(x)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large\downarrow
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large\cos(2x)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large\downarrow
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large&#123;1\over 2&#125;\cos(2x)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large\downarrow
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large&#123;1\over 2&#125; + &#123;1\over 2&#125;\cos(2x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...which is same-same since
              {" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 2&#125; + &#123;1\over 2&#125;\cos(2x) = &#123;1 + \cos(2x)\over 2&#125;$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              The issue for the second part of the problem is
              therefore to prove that...
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                &#123;1 + \cos(2x)\over 2&#125; = \cos^2(x)
                $$
              </MathBlock>
            </Boxed>
            <OuterP>
              ...by algebraic means.
            </OuterP>
            <OuterP class="indent-10">
              For this we again use the angle-sum formula
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(A + B) = \cos(A)\cos(B) - \sin(A)\sin(B)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for {" "}
              <NoBreak>
                <Math>
                  $\cos$
                </Math>
                ,
              </NoBreak>
              {" "} but with {" "}
              <NoBreak>
                <Math>
                  $A = B = x$
                </Math>
                ,
              </NoBreak>
              {" "} namely
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              \cos(2x)
              &amp;= \cos(x + x) \\
              &amp;= \up&#123;1.6&#125; \cos(x)\cos(x) - \sin(x)\sin(x) \\
              &amp;= \up&#123;1.6&#125; \cos^2(x) - \sin^2(x)
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              which gives us
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &#123;1 + \cos(2x)\over 2&#125;
              &amp;= \up&#123;2.0&#125; &#123;1 + \cos^2(x) - \sin^2(x) \over 2&#125; \\
              &amp;= \up&#123;2.0&#125; &#123;(1 - \sin^2(x)) + \cos^2(x)\over 2&#125; \\
              &amp;= \up&#123;2.0&#125; &#123;\cos^2(x) + \cos^2(x)\over 2&#125; \\
              &amp;= \up&#123;2.0&#125; &#123;2\cos^2(x)\over 2&#125; \\
              &amp;= \up&#123;2.0&#125; \cos^2(x)
              \end&#123;align*&#125;
              $$
              <ImageLeft
                src="/build-img/svgo-svg/by7R.svg"
                offset_x="3.4em"
                offset_y="3%"
                compensate_offset_x_for_large_text_columns={true}
              />
            </MathBlock>
            <Pause />
            <OuterP>
              ...as conjectured!
              (In particular, {" "}
              <Math>
                $\cos^2(x)$
              </Math>
              {" "} truly {" "}
              <i>
                is
              </i>
              {" "} a
              sinusoid, as a result of all this, surprisingly
              enough.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={27}>
          <ExerciseStatement id="_107_hgi_">
            <OuterP>
              <b>
                Exercise 27.
              </b>
              {" "}
              Relate
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(x)\cos(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(2x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              with the help of the angle-sum formulas.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The angle-sum formula for sin is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(A+B) = \cos A\sin B + \sin A\cos B
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              from which
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              \sin(2x) =&amp;\,\, \sin(x + x) \\
              \up&#123;1.6&#125; =&amp;\,\, \cos x\sin x + \sin x\cos x \\
              \up&#123;1.6&#125; =&amp;\,\, 2\sin x\cos x
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                \sin x\cos x = &#123;1\over 2&#125;\sin(2x)
                $$
              </MathBlock>
            </Boxed>
            <OuterP>
              ...solving for {" "}
              <NoBreak>
                <Math>
                  $\sin x\cos x$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={28}>
          <ExerciseStatement id="_108_hgi_">
            <OuterP>
              <b>
                Exercise 28.
              </b>
              {" "}
              What sequence of geometric transformations
              can turn [the graph] {" "}
              <Math>
                $y = \sin(x)$
              </Math>
              {" "}
              into [the graph] {" "}
              <NoBreak>
                <Math>
                  $y = \sin(x)\cos(x)$
                </Math>
                ?
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
              \sin x\cos x = &#123;1\over 2&#125;\sin(2x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by Exercise 30 and since the substitution
              of {" "}
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
                  $2x$
                </Math>
                ”
              </NoBreak>
              {" "} effects a horizontal
              compression by {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                ,
              </NoBreak>
              {" "} the answer is:
              “a horizontal scaling by {" "}
              <Math>
                $&#123;1\over 2&#125;$
              </Math>
              {" "} followed by a vertical scaling by {" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 2&#125;$
                </Math>
                ”,
              </NoBreak>
              {" "}
              though order doesn't matter, and we might also
              say “uniform scaling by {" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 2&#125;$
                </Math>
                ”.
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={29}>
          <ExerciseStatement id="_109_hgi_">
            <OuterP>
              <b>
                Exercise 29.
              </b>
              {" "}
              Conjecture a sequence of geometric transformations
              that maps
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = \cos x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              onto
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = \sin x + \cos x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and prove your answer. (Comparison: {" "}
              <NoBreak>
                <InChapterLink
                  href="/article/chapter5#_96_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 16
                </InChapterLink>
                .)
              </NoBreak>
              {" "}{" "}
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Note that {" "}
              <Math>
                $\sin + \cos$
              </Math>
              {" "}
              has period {" "}
              <Math>
                $4\eta$
              </Math>
              {" "} just like {" "}
              <Math>
                $\sin$
              </Math>
              {" "} or
              {" "}
              <NoBreak>
                <Math>
                  $\cos$
                </Math>
                ,
              </NoBreak>
              {" "} but, unlike {" "}
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
              {" "}
              {" "}
              <Math>
                $\sin + \cos$
              </Math>
              {" "} reaches a maximum of {" "}
              <Math>
                $\sqrt&#123;2&#125;$
              </Math>
              {" "}
              at {" "}
              <NoBreak>
                <Math>
                  $x = \eta/2$
                </Math>
                ,
              </NoBreak>
              {" "} as uncovered in {" "}
              <NoBreak>
                <InChapterLink
                  href="/article/chapter5#_96_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 16
                </InChapterLink>
                ,
              </NoBreak>
              {" "}
              from which the following graphic is recovered:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/QLsx.svg" />
            <Pause />
            <OuterP>
              (We have added the minimum at {" "}
              <NoBreak>
                <Math>
                  $y = -\sqrt&#123;2&#125;$
                </Math>
                ,
              </NoBreak>
              {" "}
              which is no harder to prove than the
              maximum at {" "}
              <NoBreak>
                <Math>
                  $y = \sqrt&#123;2&#125;$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              Note that while the above graph may
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              seem
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              like a sinusoid, we have
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              not yet proved
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              that it is a sinusoid, which is indeed the goal
              of the current exercise! But we can conjecture
              that the
              following two steps would take us from {" "}
              <Math>
                $y = \cos(x)$
              </Math>
              {" "}
              to {" "}
              <NoBreak>
                <Math>
                  $y = \sin(x) + \cos(x)$
                </Math>
                ,
              </NoBreak>
              {" "} given the structure above:
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              1. horizontal translation to the right by {" "}
              <Math>
                $\eta/2$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              2. vertical scaling by {" "}
              <Math>
                $\sqrt&#123;2&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              Now you might recall from previous discussions
              (cf. Exercise 7 of Chapter 3, part 1 of Exercise 27
              in this chapter) that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra f(x + a)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              has a graph that is the translate of {" "}
              <Math>
                $y = f(x)$
              </Math>
              {" "} to
              left by {" "}
              <Math>
                $a$
              </Math>
              {" "} units, whence
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra f(x - a)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              has a graph that is the translate of {" "}
              <Math>
                $y = f(x)$
              </Math>
              {" "} to
              the {" "}
              <i>
                right
              </i>
              {" "} by {" "}
              <Math>
                $a$
              </Math>
              {" "} units; whence, we can
              conjecture that...
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                \sqrt&#123;2&#125;\cdot \cos(x - \eta/2)
                $$
              </MathBlock>
            </Boxed>
            <OuterP>
              <NoBreak>
                ...[
                <Math>
                  $\cos(x)$
                </Math>
                ,
              </NoBreak>
              {" "} translated, scaled] actually coincides
              with {" "}
              <NoBreak>
                <Math>
                  $\cos(x) + \sin(x)$
                </Math>
                !!!
              </NoBreak>
              {" "} (!!!)
            </OuterP>
            <OuterP class="indent-10">
              For the proof, we resort to the angle-sum formula...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(A + B) = \cos A\cos B - \sin A\sin B
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...again, giving us...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &amp;\,\, \sqrt&#123;2&#125;\cdot \cos(x - \eta/2) \\
              \up&#123;1.6&#125; =&amp;\,\, \sqrt&#123;2&#125;\cdot(\cos(x)\cos(-\eta/2) - \sin(x)\sin(-\eta/2)) \\
              \up&#123;1.6&#125; =&amp;\,\, \sqrt&#123;2&#125;\cdot(\cos(x)\sqrt&#123;0.5&#125; - \sin(x)(-\sqrt&#123;0.5&#125;)) \\
              \up&#123;1.6&#125; =&amp;\,\, \sqrt&#123;2&#125;\cdot\sqrt&#123;0.5&#125;\cdot(\cos(x) + \sin(x)) \\
              \up&#123;1.6&#125; =&amp;\,\, \sqrt&#123;2 \cdot 0.5&#125;\cdot(\cos(x) + \sin(x)) \\
              \up&#123;1.6&#125; =&amp;\,\, \sqrt&#123;1&#125;\cdot(\cos(x) + \sin(x)) \\
              \up&#123;1.6&#125; =&amp;\,\, \cos(x) + \sin(x)
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...victory!!!!
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
                \sqrt&#123;2&#125;\cdot \sqrt&#123;0.5&#125; = 1
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                can also be seen from the fact that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \sqrt&#123;0.5&#125; = &#123;1\over \sqrt&#123;2&#125;&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                previously discussed.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={30}>
          <ExerciseStatement id="_110_hgi_">
            <OuterP>
              <b>
                Exercise 30.
              </b>
              {" "}
              Prove that for every {" "}
              <NoBreak>
                <Math>
                  $A_1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $A_2 \in \rr$
                </Math>
                ,
              </NoBreak>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra A_1\cos x + A_2\sin x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              equals
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra W\cdot \cos(x + \psi)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for some appropriate constants {" "}
              <Math>
                $W$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $\psi$
                </Math>
                .
              </NoBreak>
              {" "} (That shall
              be functions of {" "}
              <NoBreak>
                <Math>
                  $A_1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $A_2$
                </Math>
                .)
              </NoBreak>
              {" "} Also: draw a deep analogy
              to polar coordinates, regarding the transform that gives
              {" "}
              <NoBreak>
                <Math>
                  $W$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\psi$
              </Math>
              {" "} as a function of {" "}
              <NoBreak>
                <Math>
                  $A_1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $A_2$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              One approach is to expand
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(x + \psi)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              using the angle-sum formula, which gives
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(x)\cos(\psi) - \sin(x)\sin(\psi)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              after which multiplying by {" "}
              <Math>
                $W$
              </Math>
              {" "} and collecting coefficients of
              {" "}
              <NoBreak>
                <Math>
                  $\cos x$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\sin x$
              </Math>
              {" "} gives
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \up&#123;1.4&#125;(W \cdot \cos \psi)\cdot\cos(x) - (W \cdot \sin \psi) \cdot \sin(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              comparing to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A_1\cos x + A_2\sin x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              we see that
              {" "}
              <Math>
                $W \cos(x + \psi)$
              </Math>
              {" "}
              would equal
              {" "}
              <Math>
                $A_1\cos x + A_2\sin x$
              </Math>
              {" "}
              if we could find {" "}
              <NoBreak>
                <Math>
                  $W$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\psi$
              </Math>
              {" "} such that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \phantom&#123;-&#125;W\cdot\cos(\psi) = A_1
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              -W\cdot\sin(\psi) = A_2
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...that we can actually rewrite
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              W\cdot\cos(-\psi) = A_1
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              W\cdot\sin(-\psi) = A_2
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because {" "}
              <NoBreak>
                <Math>
                  $\cos(-x) = \cos(x)$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $-\sin(x) = \sin(-x)$
              </Math>
              {" "}
              for all {" "}
              <NoBreak>
                <Math>
                  $x \in \rr$
                </Math>
                .
              </NoBreak>
              {" "} But the above
              two
              equations are very similar to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              r\cdot\cos(\theta) = x
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              r\cdot\sin(\theta) = y
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              that give the transformation
              from polar coordinates {" "}
              <Math>
                $(r, \theta)$
              </Math>
              {" "}
              to Cartesian coordinates {" "}
              <NoBreak>
                <Math>
                  $(x, y)$
                </Math>
                ;
              </NoBreak>
              {" "} in fact these are the
              exact same equations, except that we have
              {" "}
              <NoBreak>
                ‘
                <Math>
                  $W$
                </Math>
                ’
              </NoBreak>
              {" "} in place of {" "}
              <NoBreak>
                ‘
                <Math>
                  $r$
                </Math>
                ’,
              </NoBreak>
              {" "}
              {" "}
              <NoBreak>
                ‘
                <Math>
                  $-\psi$
                </Math>
                ’
              </NoBreak>
              {" "}
              in place of {" "}
              <NoBreak>
                ‘
                <Math>
                  $\theta$
                </Math>
                ’,
              </NoBreak>
              {" "}
              {" "}
              <NoBreak>
                ‘
                <Math>
                  $A_1$
                </Math>
                ’
              </NoBreak>
              {" "} in place of {" "}
              <NoBreak>
                ‘
                <Math>
                  $x$
                </Math>
                ’,
              </NoBreak>
              {" "} and
              {" "}
              <NoBreak>
                ‘
                <Math>
                  $A_2$
                </Math>
                ’
              </NoBreak>
              {" "} in place of {" "}
              <NoBreak>
                ‘
                <Math>
                  $y$
                </Math>
                ’;
              </NoBreak>
              {" "}
              so in other words,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (W, -\psi)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              are the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              polar coordinates
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of the Cartesian point
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (A_1, A_2)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              with {" "}
              <Math>
                $W$
              </Math>
              {" "} being the “radius”, or distance to the origin,
              and {" "}
              <Math>
                $-\psi$
              </Math>
              {" "} being the angle from the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis (or {" "}
              <i>
                argument
              </i>
              ):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/NJdy.svg" />
            <Pause />
            <OuterP>
              In particular,
              since every pair of Cartesian coordinates
              has a corresponding pair of polar coordinates
              (in fact, many corresponding pairs!),
              we will
              always be able to find {" "}
              <NoBreak>
                <Math>
                  $W$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\psi$
              </Math>
              {" "} such as to
              match the equations above,
              which concludes the problem.
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                To explicitly give formulas,
                one can set
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                W = \sqrt&#123;A_1^2 + A_2^2&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                -\psi = \begin&#123;cases&#125;
                \arctan(A_2/A_1) &amp; \te&#123;if &#125;\, A_1 \ne 0, \,\te&#123;else&#125; \\
                \up&#123;1.2&#125;\te&#123;arccot&#125;(A_1/A_2) &amp; \te&#123;if &#125;\, A_2 \ne 0, \,\te&#123;else&#125; \\
                \up&#123;1.2&#125;\rm&#123;?&#125;       &amp; \te&#123;if &#125;\, A_1 = 0, A_2 = 0
                \end&#123;cases&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                where we are copy-pasting the formula that appears
                in the chapter for going from cartesian to polar
                coordinates (no need to remember this formula, though,
                really); though, IN TRUTH, setting
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                W = -\sqrt&#123;A_1^2 + A_2^2&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                would work as well,
                if we add
                {" "}
                <Math>
                  $2\eta$
                </Math>
                {" "} to the argument!
              </OuterP>
              <Pause />
              <OuterP>
                <i>
                  Example 1.
                </i>
                {" "}
                The previously-studied
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \cos x + \sin x
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                (cf. Exercise 4) corresponds to the case
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                A_1 = A_2 = 1
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                of this exercise, and
                in which case we can set
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                W = \sqrt&#123;2&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \psi = -\eta/2
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                because the pair
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (W, \,-\psi) \,=\, (\sqrt&#123;2&#125;, \,\,\eta/2)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is a polar coordinate of {" "}
                <NoBreak>
                  <Math>
                    $(A_1, A_2) = (1, 1)$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/-FKv.svg" />
              <Pause />
              <OuterP>
                (In fact, the fact that...
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  \cos x + \sin x = \sqrt&#123;2&#125;\cdot\cos(x - \eta/2)
                  $$
                  <ImageRight
                    src="/build-img/svgo-svg/R7FG.svg"
                    compensate_offset_x_for_large_text_columns={true}
                  />
                </MathBlock>
              </Boxed>
              <OuterP>
                ...was painstakingly uncovered
                in {" "}
                <NoBreak>
                  <InChapterLink
                    href="/article/chapter5#_109_hgi_"
                    class="handle-in-chapter-link"
                  >
                    Exercise 29
                  </InChapterLink>
                  ,
                </NoBreak>
                {" "} if you recall.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={31}>
          <ExerciseStatement id="_111_hgi_">
            <OuterP>
              <b>
                Exercise 31.
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
        <Exercise number={32}>
          <ExerciseStatement id="_112_hgi_">
            <OuterP>
              <b>
                Exercise 32.
              </b>
              {" "}
              If we attempt to express
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A_1\sin x + A_2\cos x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              in the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              W\cdot\sin(x + \psi)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              then what does the relationship
              between {" "}
              <NoBreak>
                <Math>
                  $A_1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $A_2$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $W$
              </Math>
              {" "} and {" "}
              <Math>
                $\psi$
              </Math>
              {" "} become?
            </OuterP>
            <OuterP class="indent-10">
              (NB: We have flipped {" "}
              <NoBreak>
                ‘
                <Math>
                  $\cos$
                </Math>
                ’
              </NoBreak>
              {" "} and
              {" "}
              <NoBreak>
                ‘
                <Math>
                  $\sin$
                </Math>
                ’
              </NoBreak>
              {" "} in the first expression, compared
              to Exercise 34, and reducing to that exercise is
              likely to produce confusion.
              Solving from scratch is recommended.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Expanding
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(x + \psi)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by the angle-sum formula gives
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin x\cos \psi + \cos x\sin \psi
              $$
              <ImageRight
                src="/build-img/svgo-svg/F6pP.svg"
                offset_x="8em"
                compensate_offset_x_for_large_text_columns={true}
              />
            </MathBlock>
            <Pause />
            <OuterP>
              whereby multiplying by {" "}
              <Math>
                $W$
              </Math>
              {" "} and collecting coefficients
              of {" "}
              <NoBreak>
                <Math>
                  $\sin x$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\cos x$
              </Math>
              {" "} gives
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (W\cdot\cos \psi)\cdot\sin x + (W\cdot\sin \psi)\cdot\cos x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and equating to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A_1\cdot\sin x + A_2\cdot\cos x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              gives the system of equations
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              W\cdot\cos \psi = A_1
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              W\cdot\sin \psi = A_2
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              which is to say that, for this specific arrangement of
              the variables,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (W, \,\psi)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              are the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              exact
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              polar coordinates of {" "}
              <NoBreak>
                <Math>
                  $(A_1, A_2)$
                </Math>
                !!!
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Example 1.
              </i>
              {" "}
              By this result,
            </OuterP>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                <MathBlock>
                  $$
                  \sin(x) + \cos(x) = \sqrt&#123;2&#125;\cdot\sin(x + \eta/2)
                  $$
                </MathBlock>
              </div>
            </center>
            <OuterP>
              since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (\sqrt&#123;2&#125;, \,\eta/2)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              are the (hum: “the”) polar coordinates of {" "}
              <NoBreak>
                <Math>
                  $(1, 1)$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={33}>
          <ExerciseStatement id="_113_hgi_">
            <OuterP>
              <b>
                Exercise 33.
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
        <Exercise number={34}>
          <ExerciseStatement id="_114_hgi_">
            <OuterP>
              <b>
                Exercise 34.
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
        <Exercise number={35}>
          <ExerciseStatement id="_115_hgi_">
            <OuterP>
              <b>
                Exercise 35.
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
        <Exercise number={36}>
          <ExerciseStatement id="_116_hgi_">
            <OuterP>
              <b>
                Exercise 36.
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
            <TextParent>
              <ul style="list-style-type:disc;margin-top:1em;margin-bottom:1em;padding-left:66px;line-height:1.7em;">
                <li>
                  all distances are in inches
                </li>
                <li>
                  assume half an inch from the edge of the door
                  to the center of its hinge
                </li>
                <li>
                  assume the door has negligible thicknesss
                </li>
              </ul>
            </TextParent>
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
        <Exercise number={37}>
          <ExerciseStatement id="_117_hgi_">
            <OuterP>
              <b>
                Exercise 37.
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
        <Exercise number={38}>
          <ExerciseStatement id="_118_hgi_">
            <OuterP>
              <b>
                Exercise 38.
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
          </Solution>
        </Exercise>
        <Exercise number={39}>
          <ExerciseStatement id="_119_hgi_">
            <OuterP>
              <b>
                Exercise 39.
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
        <Exercise number={40}>
          <ExerciseStatement id="_120_hgi_">
            <OuterP>
              <b>
                Exercise 40.
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
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                To formalize the argument, consider that
                we can approximate the volume of the sphere
                by finitely many cones with triangular bases,
                by triangulating the surface of the sphere:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/qioC.svg" />
              <Pause />
              <OuterP>
                Note that a cone with a triangular base is
                just a
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                tetrahedron
                <ImageLeft src="/build-img/svgo-svg/kB0X.svg" />
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                where “tetrahedron” means “four-sided shape”.
                (There is only 1 way to pull off a four-sided
                shape in 3D: to make all sides triangles.)
                So the volume of the sphere is approximated
                by the sum of the volumes of the tetrahedrons,
                a.k.a. cones.
              </OuterP>
              <OuterP class="indent-10">
                Define the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                mesh size
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                of such a set of tetrahedrons to be the largest
                sidelength of any tetrahedron base.
              </OuterP>
              <OuterP class="indent-10">
                (The smaller the mesh size, the more pointed
                the tetrahedrons.)
              </OuterP>
              <OuterP class="indent-10">
                For the current
                discussion we take it for granted that as the
                mesh size shrinks, the sum of the volumes of
                the cones (= tetrahedrons) converges to the
                volume of sphere.
              </OuterP>
              <OuterP class="indent-10">
                (Or take the limit, as the mesh size shrinks,
                of the sum of the volume of the tetrahedrons
                to be the {" "}
                <i>
                  definition
                </i>
                {" "} of the “volume of the
                sphere”—that's just as well, since we don't have
                any other competing notion of “volume of the sphere”,
                at the moment.)
              </OuterP>
              <OuterP class="indent-10">
                Here is a closer look at a single tetrahedron
                {" "}
                <NoBreak>
                  (
                  <Math>
                    $h_i$
                  </Math>
                </NoBreak>
                {" "} is the height of the tetrahedron):
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/7QrH.svg" />
              <Pause />
              <OuterP>
                One observes that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                B_i \leq A_i
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                where
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                B_i
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is the base of the tetrahedron and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                A_i
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is the projection of the base onto the surface
                of the sphere from the center of the sphere, and
                that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                h_i \leq r
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                where
                {" "}
                <Math>
                  $h_i$
                </Math>
                {" "}
                is the height of the tetrahedron, and {" "}
                <Math>
                  $r$
                </Math>
                {" "} is the
                radius of sphere. On the other hand, it is not hard
                to convince oneself that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                B_i \geq 0.9A_i
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                h_i \geq 0.9r
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for all of the tetrahedrons, if the mesh size is
                sufficiently small; even,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                B_i \geq 0.99A_i
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                h_i \geq 0.99r
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for all of the tetrahedrons simultaenously,
                {" "}
                <i>
                  if the mesh size is sufficiently small
                </i>
                ; even,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                B_i \geq 0.99999A_i
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                h_i \geq 0.99999r
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for all... if etc.
              </OuterP>
              <OuterP class="indent-10">
                (Or as mathematicians would put it: “for all {" "}
                <Math>
                  $\e &gt; 0$
                </Math>
                {" "}
                there exists an {" "}
                <Math>
                  $s &gt; 0$
                </Math>
                {" "} such that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                B_i \geq (1-\e)A_i
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                h_i \geq (1-\e)r
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for all of the tetrahedrons, if the mesh size less than {" "}
                <NoBreak>
                  <Math>
                    $s$
                  </Math>
                  .”)
                </NoBreak>
                {" "}
                (“For all... there exists... such that... if... .”)
              </OuterP>
              <OuterP class="indent-10">
                This implies that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \sum_&#123;i=1&#125;^N &#123;1\over 3&#125;B_ih_i
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                [nb: fast-foward to Exercise 38 if you have never
                seen {" "}
                <NoBreak>
                  <Math>
                    $\sum$
                  </Math>
                  -notation,
                </NoBreak>
                {" "} but this basically reads
                “sum from {" "}
                <Math>
                  $i$
                </Math>
                {" "} equals {" "}
                <Math>
                  $1$
                </Math>
                {" "} up to {" "}
                <NoBreak>
                  <Math>
                    $N$
                  </Math>
                  ”]
                </NoBreak>
                {" "} which is the
                total volume of the tetrahedrons, where {" "}
                <Math>
                  $N$
                </Math>
                {" "} denotes
                the number of tetrahedrons and {" "}
                <NoBreak>
                  <Math>
                    $B_i$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $h_i$
                </Math>
                {" "} are the
                base and height of the {" "}
                <NoBreak>
                  <Math>
                    $i$
                  </Math>
                  -th
                </NoBreak>
                {" "} tetrahedron, is
                sandwiched between
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \sum_&#123;i=1&#125;^N &#123;1\over 3&#125;A_i r
                $$
                <ImageRight
                  offset_x="5em"
                  src="/build-img/svgo-svg/6Cvw.svg"
                  compensate_offset_x_for_large_text_columns={true}
                />
              </MathBlock>
              <Pause />
              <OuterP>
                above, and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \sum_&#123;i=1&#125;^N &#123;1\over 3&#125;\cdot 0.99999\cdot A_i\cdot 0.99999\cdot r
                $$
                <ImageLeft
                  offset_x="2.5em"
                  src="/build-img/svgo-svg/r3o2.svg"
                  compensate_offset_x_for_large_text_columns={true}
                />
              </MathBlock>
              <Pause />
              <OuterP>
                below, for sufficiently small mesh size; but
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \sum_&#123;i=1&#125;^N A_i = A
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                where {" "}
                <Math>
                  $A = 8\eta\rt&#123;.05&#125;r^2$
                </Math>
                {" "} is the total area
                of the sphere, and so
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \sum_&#123;i=1&#125;^N &#123;1\over 3&#125;B_ih_i
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is sandwiched between
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \sum_&#123;i=1&#125;^N &#123;1\over 3&#125;A_ir = &#123;1\over 3&#125;\cdot r\cdot \sum_&#123;i=1&#125;^N A_i = &#123;1\over 3&#125;Ar
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                above, and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \sum_&#123;i=1&#125;^N &#123;1\over 3&#125;\cdot 0.99999\cdot A_i\cdot 0.99999\cdot r = (0.99999)^2&#123;1\over 3&#125;Ar
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                below; or, nicely put in a double inequality:
              </OuterP>
              <center style="margin-top:1em;margin-bottom:1em;">
                <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                  <MathBlock>
                    $$
                    &#123;1\over 3&#125;Ar \geq \sum_&#123;i=1&#125;^N &#123;1\over 3&#125;B_ih_i \geq (0.99999)^2&#123;1\over 3&#125;Ar
                    $$
                  </MathBlock>
                </div>
              </center>
              <OuterP>
                ...but we could replace {" "}
                <NoBreak>
                  “
                  <Math>
                    $0.99999$
                  </Math>
                  ”
                </NoBreak>
                {" "} by any other
                constant less that {" "}
                <Math>
                  $1$
                </Math>
                {" "} [yah no: because of the square,
                we need to say “between {" "}
                <Math>
                  $0$
                </Math>
                {" "} and {" "}
                <NoBreak>
                  <Math>
                    $1$
                  </Math>
                  ”]
                </NoBreak>
                {" "} by further
                shrinking the size of the mesh, which implies that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \sum_&#123;i=1&#125;^N &#123;1\over 3&#125;B_ih_i
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                must converge to
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;1\over 3&#125;Ar
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                as the mesh size goes to zero—it cannot converge to
                something greater than, nor less than, this number!
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={41}>
          <ExerciseStatement id="_121_hgi_">
            <OuterP>
              <b>
                Exercise 41.
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
        <Exercise number={42}>
          <ExerciseStatement id="_122_hgi_">
            <OuterP>
              <b>
                Exercise 42.
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
        <Exercise number={43}>
          <ExerciseStatement id="_123_hgi_">
            <OuterP>
              <b>
                Exercise 43.
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
              16 of Chapter 3 mentions that the product of
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
        <Exercise number={44}>
          <ExerciseStatement id="_124_hgi_">
            <OuterP>
              <b>
                Exercise 44.
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
              , so there absolutely no fudging
              going on if we write it the second way), 
              and
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
        <Exercise number={45}>
          <ExerciseStatement id="_125_hgi_">
            <OuterP>
              <b>
                Exercise 45.
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
        <Exercise number={46}>
          <ExerciseStatement id="_126_hgi_">
            <OuterP>
              <b>
                Exercise 46.
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
        <Exercise number={47}>
          <ExerciseStatement id="_127_hgi_">
            <OuterP>
              <b>
                Exercise 47.
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
              As discussed in Exercise 12, the function
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
            <TextParent>
              <div style="border:red solid 1px;margin:1.2em auto 1.2em;padding:0.3em 1.2em 0.4em;width:100%;box-sizing:border-box;">
                <CentralDisplayItalic>
                  1. horizontally translate the graph by {" "}
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
              </div>
            </TextParent>
            <Pause />
            <TildeDivider />
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
                &lt;i&gt;before&lt;/i&gt; adjusting the phase, the phase
                will need to be adjusted by a different amount,
                in order to account for the already-changed
                angular frequency; in that case, the sequence
                of transformations becomes:
              </OuterP>
              <TextParent>
                <div style="border:red solid 1px;margin:1.2em auto 1.4em;padding:0.3em 1.2em 0.4em;width:100%;box-sizing:border-box;">
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
                </div>
              </TextParent>
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
      </Exercises>
    </>}
  </>;
};