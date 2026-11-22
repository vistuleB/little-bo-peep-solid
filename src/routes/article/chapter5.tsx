import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Boxed  from "~/components/Boxed";
import CodexSuggestions  from "~/components/CodexSuggestions";
import { CentralDisplay, CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import InlineImage  from "~/components/InlineImage";
import { Item, List }  from "~/components/List";
import { MathBlock, Math }  from "~/components/Math";
import OutChapterLink  from "~/components/OutChapterLink";
import OuterP  from "~/components/OuterP";
import { ImageLeft, ImageRight }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { SolutionNote, NoBreak, OldSolutionNote, Example, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter5__() {
  return (
    <Article
      prevPage="/article/chapter4"
      nextPage="/article/chapter6"
      pageNecessaryMargin={1450}
      maxElementWidth={1000}
      id="_85_h.a.i_"
      path="/article/chapter5"
    >
      <ArticleTitle banner="Chapter 5:">
        Motion in Two Dimensions
      </ArticleTitle>
      <Section id="section-1">
        <CodexSuggestions>
          <p>
            This is a cut-and-paste draft: the original four-curve question and its solution now form the main text. Consider starting with the coordinate-shadow explanation currently in Note 3, then introducing the four particles and returning to the curves as the payoff. Keep that circular-motion explanation before trigonometry, which already relies on these derivatives.
          </p>
          <p class="indent-10">
            The chapter’s narrow core could be position and velocity as pairs, movable arrows, and the four-particle derivative cycle. Addition and scaling should enter only where the existing constructions need them. The longer dynamical-system exercises below need not all remain in this first encounter.
          </p>
        </CodexSuggestions>
        <Pause />
        <Example
          ref="rence"
          id="_76_h.a.i_"
        >
          <OuterP>
            <b>
              Example 1.
            </b>
            {" "}
            In the following graph, which curve might
            be a derivative of which other curve?
          </OuterP>
          <Pause />
          <Image
            src="/build-img/svgo-svg/_2ki.svg"
            intrinsicWidth={1200}
            intrinsicHeight={160}
          />
          <Pause />
          <OuterP>
            As it happens—and by the exact method
            that we used to generate these curves—the
            blue is the derivative of the red:
          </OuterP>
          <Pause />
          <Image
            src="/build-img/svgo-svg/W11G.svg"
            intrinsicWidth={1200}
            intrinsicHeight={320}
          />
          <Pause />
          <OuterP>
            Likewise, the yellow is the derivative
            of the blue, the green is the derivative
            of the yellow, and the red is the derivative
            of the green, at which point it starts
            all over again! (For example, the {" "}
            <i>
              fifth
            </i>
            {" "} 
            derivative of the red curve is the blue,
            because the {" "}
            <i>
              fourth
            </i>
            {" "} derivative of the red
            curve is itself.)
          </OuterP>
          <Pause />
          <OldSolutionNote>
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              After all, the slope of these curves
              keeps oscillating between two fixed
              values—the “most slanted up” and the
              “most slanted down”—so their derivatives
              were always going to oscillate too.
            </OuterP>
          </OldSolutionNote>
          <Pause />
          <OldSolutionNote>
            <OuterP>
              <i>
                Note 2.
              </i>
              {" "}
              Because “most slanted up” occurs when
              the curve has not yet crested, but when
              the derivative {" "}
              <i>
                is already
              </i>
              {" "} in the
              process of cresting (that's why it's
              “most slanted up”), the derivative is
              ahead of the original curve by half a
              bump, not the other way around:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/P9o9.svg"
              intrinsicWidth={500}
              intrinsicHeight={250}
            />
          </OldSolutionNote>
          <CodexSuggestions>
            <p>
              Promote this material out of a note when the chapter is rewritten. Possible brief questions: do position vectors change when the origin moves? Do velocity vectors? Can two arrows with different starting points represent the same vector? These distinctions prepare the equality between one particle’s velocity and another’s position.
            </p>
          </CodexSuggestions>
          <Pause />
          <OldSolutionNote>
            <OuterP>
              <i>
                Note 3.
              </i>
              {" "}
              When we examine the velocity of a
              particle moving in the plane, we examine
              the velocities of its shadow on the
              {" "}
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
                -axes:
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/eSj9.svg"
              intrinsicWidth={450}
              intrinsicHeight={280}
            />
            <Pause />
            <OuterP>
              The velocities of the two shadows
              encode the overall “two-dimensional”
              velocity of the particle. (No need for
              quotes, really: the velocity {" "}
              <i>
                is
              </i>
              {" "}
              two-dimensional.)
            </OuterP>
            <OuterP class="indent-10">
              Here's another point of view: just like
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              position
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              is encoded by a pair of numbers—sometimes
              known as the {" "}
              <i>
                position vector
              </i>
              {" "} by
              the way, where “vector” is a term of art
              for “pair of numbers”—so the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              velocity
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              is encoded by a pair of numbers—equally
              known as the {" "}
              <i>
                velocity vector
              </i>
              —which
              is no coincidence, because the first
              coordinate of the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              velocity vector
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              is the derivative of the first coordinate
              of the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              position vector
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              and likewise for the second coordinate—two
              coordinates, two rates of change!
            </OuterP>
            <OuterP class="indent-10">
              Geometrically, if we use the {" "}
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
                -components
              </NoBreak>
              {" "} {" "}
              <Math>
                $v_x$
              </Math>
              {" "} and {" "}
              <Math>
                $v_y$
              </Math>
              {" "} of the
              velocity to draw an arrow emanating
              from a point on the curve, this arrow
              is tangent to the curve, and the
              <ImageRight
                src="/build-img/svgo-svg/52rF.svg"
                intrinsicWidth={800}
                intrinsicHeight={400}
              />
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              length
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of the arrow is the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              speed
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of the particle at that moment.
              More precisely, if you let the particle
              drift at the exact same {" "}
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
                -velocities
              </NoBreak>
              {" "} {" "}
              <Math>
                $v_x$
              </Math>
              {" "} and {" "}
              <Math>
                $v_y$
              </Math>
              {" "} that you
              measured at the root of the arrow for
              one unit of time, the particle would cover exactly the arrow’s length in that time,
              because the particle would cover {" "}
              <Math>
                $v_x$
              </Math>
              {" "}
              units in {" "}
              <Math>
                $x$
              </Math>
              {" "} and {" "}
              <Math>
                $v_y$
              </Math>
              {" "} units in {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                .
              </NoBreak>
              {" "}
              And speed being
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              distance per unit time
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              the length of the arrow is, therefore,
              the speed!
            </OuterP>
            <OuterP class="indent-10">
              Now consider not one but four particles,
              going around a unit circle in clockwise
              fashion, 90° apart in phase, at unit
              speed (“unit speed” = speed 1, “unit
              circle” = radius 1) (ps: We center the
              circle at the origin):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/zkYn.svg"
              intrinsicWidth={480}
              intrinsicHeight={380}
            />
            <Pause />
            <OuterP>
              The
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              position vectors
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of the particles are as follows:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/g6Et.svg"
              intrinsicWidth={480}
              intrinsicHeight={380}
            />
            <Pause />
            <OuterP>
              (You can't really see it so well, but
              each arrow originates at {" "}
              <NoBreak>
                <Math>
                  $(0, 0)$
                </Math>
                .)
              </NoBreak>
              {" "} While
              the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              velocity vectors
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              are as follows:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/4R5D.svg"
              intrinsicWidth={480}
              intrinsicHeight={380}
            />
            <Pause />
            <OuterP>
              (Like the position vectors, the
              velocity vectors keep changing instant by
              instant—this is the subtlety of calculus!)
              The velocity vectors have length {" "}
              <Math>
                $1$
              </Math>
              {" "} because
              the speed is {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <i>
                &amp;
              </i>
              {" "} are brushed
              in the direction of travel.
            </OuterP>
            <OuterP class="indent-10">
              (Nb: When we draw a vector as an arrow
              we mean that the coordinates give the horizontal and vertical displacements from the arrow’s tail to its head.)
              <ImageRight
                src="/build-img/svgo-svg/BcYN.svg"
                intrinsicWidth={750}
                intrinsicHeight={500}
              />
            </OuterP>
            <OuterP class="indent-10">
              Due to the 90° rotations and uniform
              lengths of {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} one particle's velocity
              vector is another particle's position
              vector; as one example, the red particle's
              velocity vector is the blue particle's
              position vector:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/9nrU.svg"
              intrinsicWidth={600}
              intrinsicHeight={380}
            />
            <Pause />
            <OuterP>
              Just looking at
              the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinates,
              </NoBreak>
              {" "} for example,
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the velocity in {" "}
              <Math>
                $x$
              </Math>
              {" "} of the red particle
              is the position in {" "}
              <Math>
                $x$
              </Math>
              {" "} of the blue particle
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              at any given moment in time. 
              Concretely, if you graph the
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinates
              </NoBreak>
              {" "} of the red and blue
              particles on the same graph, the rate of
              change of the red particle's {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}
              will equal the value of the blue particle's
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate.
              </NoBreak>
              {" "} These are the red and blue
              curves from the problem statement, if we
              start the blue particle at position
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (1, 0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              at time {" "}
              <NoBreak>
                <Math>
                  $t = 0$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/tBi5.svg"
              intrinsicWidth={1200}
              intrinsicHeight={240}
            />
            <Pause />
            <OuterP>
              If we add the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinates
              </NoBreak>
              {" "} of the green
              and yellow particles, we obtain the graph
              from the problem statement!
            </OuterP>
          </OldSolutionNote>
          <Pause />
          <OldSolutionNote>
            <OuterP>
              <i>
                Note 4.
              </i>
              {" "}
              If needed, here is an illustration of
              one {" "}
              <Math>
                $360^\circ$
              </Math>
              {" "} rotation of the particles
              of Note 3,  with each curve being an
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate:
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/E0qc.svg"
              intrinsicWidth={1200}
              intrinsicHeight={320}
            />
            <Pause />
            <OuterP>
              (If this just looks like a mess, then nevermind.)
            </OuterP>
          </OldSolutionNote>
          <Pause />
          <OldSolutionNote>
            <OuterP>
              <i>
                Note 5.
              </i>
              {" "}
              To reiterate, take a look at this
              figure again:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/P9o9.svg"
              intrinsicWidth={500}
              intrinsicHeight={250}
            />
            <Pause />
            <OuterP>
              The derivative is
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              ahead
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of the red particle, in the sense that
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinates
              </NoBreak>
              {" "} seen {" "}
              <i>
                now
              </i>
              {" "} by the
              blue particle will be encountered {" "}
              <i>
                a little later
              </i>
              {" "}
              by the red particle! (In particular, if we
              wanted to generate the same curves with a
              counterclockwise rotation, we could do that,
              but we would have to reverse the order of
              the particles around the circle to keep the
              blue particle ahead of the red particle,
              the yellow particle ahead of the blue
              particle, etc.)
            </OuterP>
          </OldSolutionNote>
        </Example>
      </Section>
      <Rest />
    </Article>
  );
}

const Rest = () => {
  const visibleRestSections = useShowMore(1);
  return <>
    {visibleRestSections() > 0 && <>
      <Pause />
      <Exercises
        at_end_of_page={true}
        mode="dual"
        show_curlicue={true}
        id="_84_h.a.i_"
      >
        <Exercise
          work="in"
          number={1}
        >
          <ExerciseStatement id="_78_h.a.i_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
            </OuterP>
            <CodexSuggestions>
              <p>
                Placement option: use this and the following two-particle exercise as a short one-dimensional prelude, or reserve them for the exponential chapter. The current two-dimensional main text does not require them. Avoid introducing exponentials in a long solution merely to justify their presence here.
              </p>
            </CodexSuggestions>
            <OuterP>
              Imagine a single particle in a one-dimensional
              world, whose velocity equals its position; at {" "}
              <NoBreak>
                <Math>
                  $t = 0$
                </Math>
                ,
              </NoBreak>
              {" "}
              the particle is sitting at {" "}
              <NoBreak>
                <Math>
                  $x = 1$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/vEPq.svg"
              intrinsicWidth={400}
              intrinsicHeight={100}
            />
            <Pause />
            <OuterP>
              If we play time backward, will the particle
              ever reach {" "}
              <NoBreak>
                <Math>
                  $x = 0$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Going back in time, examine how long it would take
              the particle to cross each of the intervals defined by
              the following geometric progression* (*see {" "}
              <InChapterLink
                href="#_77_h.a.i_"
                class="in-chapter-link"
              >
                Note 1
              </InChapterLink>
              &#8288;):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/ESgD.svg"
              intrinsicWidth={470}
              intrinsicHeight={80}
            />
            <Pause />
            <OuterP>
              The interval from {" "}
              <Math>
                $0.5$
              </Math>
              {" "} to {" "}
              <Math>
                $1$
              </Math>
              {" "} takes {" "}
              <i>
                at least
              </i>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;0.5 \over 1&#125; = 0.5
              $$
              <ImageLeft
                src="/build-img/svgo-svg/SiXb.svg"
                offsetX="10em"
                atLeastAsWide={true}
                intrinsicWidth={400}
                intrinsicHeight={200}
              />
            </MathBlock>
            <Pause />
            <OuterP>
              time to cross, because the particle’s maximum speed in that interval is {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                .
              </NoBreak>
              {" "} Similarly, the interval from
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = 0.25
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = 0.5
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              takes {" "}
              <i>
                at least
              </i>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;0.25 \over 0.5&#125; = 0.5
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              time to cross, because the particle’s maximum speed in that interval is {" "}
              <NoBreak>
                <Math>
                  $0.5$
                </Math>
                .
              </NoBreak>
              {" "}
              Again, the interval from
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = 0.125
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = 0.25
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              takes {" "}
              <i>
                at least
              </i>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;0.125 \over 0.25&#125; = 0.5
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              time to cross, because the particle’s maximum speed in that interval is {" "}
              <NoBreak>
                <Math>
                  $0.25$
                </Math>
                —etc—each
              </NoBreak>
              {" "} interval
              takes at least
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0.5
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              units of time to cross, but there are infinitely
              many such intervals, so it takes infinitely much time to
              crawl back to {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                .
              </NoBreak>
              {" "} (I.e., the particle never makes it to
              {" "}
              <NoBreak>
                <Math>
                  $x = 0$
                </Math>
                ,
              </NoBreak>
              {" "} no matter how far back in time we look.)
            </OuterP>
            <Pause />
            <SolutionNote id="_77_h.a.i_">
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                A so-called
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                geometric progression
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                is a sequence in which each number is a fixed multiple of the previous.
                For example,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                100,\, 300,\, 900,\, 2700
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is a (finite) geometric progression, because each number
                is the previous number multiplied by {" "}
                <NoBreak>
                  <Math>
                    $3$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                1,\, 0.5,\, 0.25,\, 0.125,\, 0.0625,\, \ldots
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is an (infinite) geometric progression, because each number
                is the previous multiplied by {" "}
                <NoBreak>
                  <Math>
                    $0.5$
                  </Math>
                  .
                </NoBreak>
                {" "} A so-called
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                arithmetic progression
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                is a sequence of numbers in which each number
                adds a fixed quantity to the previous. For example,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                900, 1000, 1100, 1200, 1300, \dots
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is an infinite arithmetic progression in which each number
                adds {" "}
                <Math>
                  $100$
                </Math>
                {" "} to the previous, and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                -5.5, -6, -6.5, -7
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is a finite arithmetic progression in which each number
                adds {" "}
                <Math>
                  $-0.5$
                </Math>
                {" "} to the previous.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={2}>
          <ExerciseStatement id="_79_h.a.i_">
            <OuterP>
              <b>
                Exercise 2.
              </b>
              {" "}
              Take a system of two particles on the real
              line; at time {" "}
              <NoBreak>
                <Math>
                  $t = 0$
                </Math>
                ,
              </NoBreak>
              {" "} the first particle (yellow)
              is at {" "}
              <NoBreak>
                <Math>
                  $x = -1$
                </Math>
                ,
              </NoBreak>
              {" "} while the second one (blue)
              is at {" "}
              <NoBreak>
                <Math>
                  $x = 1$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/zLWR.svg"
              intrinsicWidth={450}
              intrinsicHeight={70}
            />
            <Pause />
            <OuterP>
              If the velocity of the yellow particle is set to
              track the position of the blue particle and vice-versa,
              give a qualitative sketch of the
              position-as-a-function-of-time (time on the {" "}
              <Math>
                $x$
              </Math>
              {" "}
              axis, position on the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis) of the two
              particles. What is the defining geometric relationship
              between the two graphs?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              At {" "}
              <Math>
                $t = 0$
              </Math>
              {" "} the blue particle has velocity {" "}
              <NoBreak>
                <Math>
                  $-1$
                </Math>
                ,
              </NoBreak>
              {" "}
              which is the position of the yellow particle,
              and the yellow particle has velocity {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} which
              is the position of the blue particle:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/RULR.svg"
              intrinsicWidth={450}
              intrinsicHeight={150}
            />
            <Pause />
            <OuterP>
              As we “release” time the two particles thus
              start moving inward towards {" "}
              <Math>
                $0$
              </Math>
              {" "} and then
              start slowing down, as the opposing particle
              inches closer to {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                .
              </NoBreak>
              {" "} The result is two graphs that
              form a mirror-image radioactive decay:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/aATY.svg"
              intrinsicWidth={600}
              intrinsicHeight={500}
            />
            <Pause />
            <OuterP>
              The “defining geometric relationship” is that
              the slope of one graph equals the value of the
              other graph at any point in time. (One could 
              also name the fact that the graphs have value
              {" "}
              <Math>
                $\pm 1$
              </Math>
              {" "} at {" "}
              <NoBreak>
                <Math>
                  $t = 0$
                </Math>
                ,
              </NoBreak>
              {" "} otherwise the graphs are not
              uniquely determined, as they can be translated
              together left or right by any amount while
              maintaining the former condition about slope.)
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                Saying
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                a particle whose velocity is minus its
                position
                <br />
                and whose position is {" "}
                <Math>
                  $1$
                </Math>
                {" "} at time {" "}
                <Math>
                  $t = 0$
                </Math>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                characterizes the blue particle without invoking the yellow particle, and
                likewise
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                a particle whose velocity is minus its
                position
                <br />
                and whose position is {" "}
                <Math>
                  $-1$
                </Math>
                {" "} at time {" "}
                <Math>
                  $t = 0$
                </Math>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                is an alternate characterization of the yellow particle
                that does not invoke the blue particle.
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                The graph of the blue particle is the mirror
                image through the {" "}
                <Math>
                  $y$
                </Math>
                {" "} axis of the graph of the 
                particle of {" "}
                <InChapterLink
                  href="#_78_h.a.i_"
                  class="in-chapter-link"
                >
                  Exercise 1
                </InChapterLink>
                &#8288;, whose
                velocity is equal to its position and whose
                position is {" "}
                <Math>
                  $1$
                </Math>
                {" "} at {" "}
                <NoBreak>
                  <Math>
                    $t = 0$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/a0qL.svg"
                intrinsicWidth={526}
                intrinsicHeight={300}
              />
              <Pause />
              <OuterP>
                ...because a mirror symmetry through
                the {" "}
                <Math>
                  $y$
                </Math>
                {" "} axis flips the sign of the slope without
                affecting the value of {" "}
                <NoBreak>
                  <Math>
                    $y$
                  </Math>
                  ,
                </NoBreak>
                {" "} so that an equality of
                the form {" "}
                <NoBreak>
                  “
                  <Math>
                    $y = \te&#123;slope&#125;$
                  </Math>
                  ”
                </NoBreak>
                {" "} becomes {" "}
                <NoBreak>
                  “
                  <Math>
                    $y = -\te&#123;slope&#125;$
                  </Math>
                  ”,
                </NoBreak>
                {" "}
                and vice-versa.
              </OuterP>
              <OuterP class="indent-10">
                (I.e., the mirror image of the blue
                curve satisfies the constraints of the red curve, and
                vice-versa.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={3}>
          <ExerciseStatement id="_80_h.a.i_">
            <OuterP>
              <b>
                Exercise 3.
              </b>
            </OuterP>
            <CodexSuggestions>
              <p>
                This solution contains enough material for a separate development. Consider splitting the task into initial velocity arrows, motion of the centre, and motion relative to the centre, before asking for the full evolution. Retain the distinction between moving the entire configuration and changing the coordinate origin: the rule equating velocity with position is sensitive to that distinction.
              </p>
            </CodexSuggestions>
            <OuterP>
              Four particles are placed
              at intervals of {" "}
              <Math>
                $90^\circ$
              </Math>
              {" "}
              around a circle of radius {" "}
              <Math>
                $1$
              </Math>
              {" "}
              centered at {" "}
              <Math>
                $(2, 4)$
              </Math>
              {" "} in the plane:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Tb68.svg"
              intrinsicWidth="387.198"
              intrinsicHeight="387.198"
            />
            <Pause />
            <OuterP>
              The velocity of each particle is set to
              the position of the next particle clockwise
              around the circle, with this relationship maintained at all times.
              If the configuration above shows time
              {" "}
              <NoBreak>
                <Math>
                  $t = 0$
                </Math>
                ,
              </NoBreak>
              {" "} how will the positions of the
              particles evolve? Discuss both positive and
              negative values of {" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              At {" "}
              <Math>
                $t = 0$
              </Math>
              {" "} the particles have position
              vectors that are up and the right,
              so the velocity vectors will be
              up and to the right, so the particles
              will move more up and to the right,
              and the velocity vectors will become
              more “up and to the right”, and so
              on—broadly speaking, for {" "}
              <Math>
                $t &gt; 0$
              </Math>
              {" "} there
              will ensue a kind of  four-particle
              explosion that goes up and to the right,
              off to {" "}
              <NoBreak>
                <Math>
                  $(+\infty, +\infty)$
                </Math>
                .
              </NoBreak>
              <ImageRight
                src="/build-img/svgo-svg/7A0o.svg"
                offsetY="150px"
                offsetX=" -0.5em"
                intrinsicWidth={500}
                intrinsicHeight={600}
              />
            </OuterP>
            <OuterP class="indent-10">
              For {" "}
              <Math>
                $t &lt; 0$
              </Math>
              {" "} motion will be
              down and to the left, at least initially—it
              is hard to forecast off the top of one's
              head (unless you have a sudden flash of insight)
              what will happen for larger negative
              values of {" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              HOWEVER.
            </OuterP>
            <OuterP class="indent-10">
              It is possible to say much more.
            </OuterP>
            <OuterP class="indent-10">
              To go deeper, we introduce eight new
              particles, comprising the original colors but
              in white and black flavors:
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                , {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                , {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                , {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                , {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                , {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                , {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/JFOc.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                , {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Okyf.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              At {" "}
              <Math>
                $t = 0$
              </Math>
              {" "} the white particles are just a
              translate of the original particles, such
              that the circle on which they lie is
              centered at {" "}
              <NoBreak>
                <Math>
                  $(0, 0)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/rYi5.svg"
              intrinsicWidth={520}
              intrinsicHeight={520}
            />
            <Pause />
            <OuterP>
              The black particles, for their part, are
              piled on top of one another at {" "}
              <Math>
                $(x, y) = (2, 4)$
              </Math>
              {" "} at {" "}
              <NoBreak>
                <Math>
                  $t = 0$
                </Math>
                ,
              </NoBreak>
              {" "}
              that we draw as four quarter-pies
              of different colors, like a UNO card:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/qPL0.svg"
              intrinsicWidth={520}
              intrinsicHeight={520}
            />
            <Pause />
            <OuterP>
              Within each group we set the velocity of
              the purple particle to the position of the
              yellow particle,
              the velocity of the yellow particle to the
              position of the green particle, etc.
            </OuterP>
            <OuterP class="indent-10">
              In this case the white particles will
              rotate at unit speed around their circle of
              radius {" "}
              <Math>
                $1$
              </Math>
              {" "} centered at the origin, as in {" "}
              <InChapterLink
                href="#_76_h.a.i_"
                class="in-chapter-link"
              >
                Example 1
              </InChapterLink>
              {" "}
              (albeit with a different set of colors).
            </OuterP>
            <OuterP class="indent-10">
              The black particles, for their part,
              behave as a single fused-together particle
              whose velocity is equal to its position,
              and will
              see their motion confined to an infinite
              half-line through
              {" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $(2, 4)$
                </Math>
                ,
              </NoBreak>
              {" "} as their velocity—being
              equal to their position—stays parallel to the
              line between them and the origin, meaning
              they are “stuck” to that line.
            </OuterP>
            <OuterP class="indent-10">
              Also note that the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              speed
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of the black particles, being equal to the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              length of the velocity vector
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of said particles, is equal to the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              length of the position vector
              <ImageRight
                src="/build-img/svgo-svg/vnba.svg"
                offsetX="-4em"
                intrinsicWidth={250}
                intrinsicHeight={100}
              />
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of said particles, is equal to the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              distance to the origin
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of said particles,
              since the length of the position vector is
              the distance to the origin.
            </OuterP>
            <OuterP class="indent-10">
              This means that if we introduce gradations
              to the afore-mentioned half-line through {" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "}
              and {" "}
              <NoBreak>
                <Math>
                  $(2, 4)$
                </Math>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/VxRW.svg"
              intrinsicWidth={520}
              intrinsicHeight={520}
            />
            <Pause />
            <OuterP>
              ...indicating the distance to the origin,
              the black particles behave like a
              one-dimensional system comprising a single
              particle on a half-line (or entire line,
              it doesn't hurt) whose velocity is equal to
              its position on this line:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/xj0g.svg"
              intrinsicWidth={500}
              intrinsicHeight={100}
            />
            <Pause />
            <OuterP>
              The behavior of such a particle is
              identical to the behavior of the red
              particle from {" "}
              <InChapterLink
                href="#_78_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 1
              </InChapterLink>
              &#8288;,
              except that the current
              “UNO particle” has a slight head-start over the
              red particle from {" "}
              <InChapterLink
                href="#_78_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 1
              </InChapterLink>
              &#8288;, being
              at position {" "}
              <Math>
                $x = 2\sqrt&#123;5&#125;$
              </Math>
              {" "}
              instead of at position {" "}
              <Math>
                $x = 1$
              </Math>
              {" "} at {" "}
              <NoBreak>
                <Math>
                  $t = 0$
                </Math>
                .
              </NoBreak>
              {" "}
              (!!)
              <ImageLeft
                src="/build-img/svgo-svg/RFxt.svg"
                line={-1}
                intrinsicWidth={330}
                intrinsicHeight={100}
              />
            </OuterP>
            <OuterP class="indent-10">
              This describes an “understandable”
              behavior of the black and white particles.
            </OuterP>
            <OuterP class="indent-10">
              Next we write
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x$
                </Math>
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              for the function that gives
              the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of the purple-white particle
              as a function of time (in more detail,
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x : \rr \ra \rr$
                </Math>
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              to emphasize that WE ARE TALKING ABOUT A FUNCTION, e.g.,
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(2)$
                </Math>
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              is the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of
              the purple-white particle at
              {" "}
              <NoBreak>
                <Math>
                  $t = 2$
                </Math>
                ,
              </NoBreak>
              {" "} etc), and write
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y$
                </Math>
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              for the function that gives
              the {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of the purple-white
              particle as a function of time, and so on
              for all the other particles.
            </OuterP>
            <OuterP class="indent-10">
              For example,
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x\,\!\!\!' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x$
                </Math>
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              because the rate of change of the
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of the purple-white particle
              is the value of the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}
              of the yellow-white particle; we also have
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x\,\!\!\!' \,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x\,\!\!\!' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x +$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x$
                </Math>
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              by adding two such equations together; this can also be
              written
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <Math>
                  $($
                </Math>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x \,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x)' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x +$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x$
                </Math>
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              by the sum rule; but this gives us an idea!; we can
              try to {" "}
              <i>
                define
              </i>
              {" "} the original particles {" "}
              <NoBreak>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                ,
              </NoBreak>
              {" "} {" "}
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/build-img/svgo-svg/k4Y8.svg"
                intrinsicWidth={20}
                intrinsicHeight={20}
              />
              {" "} by setting...
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/JFOc.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/JFOc.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Okyf.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Okyf.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y$
                </Math>
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              ...and see if these definitions satisfy the constraints
              of the problem! (We momentarily have two purple particles: the original and the newly defined one. We shall prove they are the same.)
              For starters...
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x\,\!\!\!' = ($
                </Math>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x\!\rt&#123;0.05&#125;)' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y\,\!\!\!' = ($
                </Math>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y\!\rt&#123;0.05&#125;)' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x\,\!\!\!' = ($
                </Math>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x\!\rt&#123;0.05&#125;)' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/JFOc.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y\,\!\!\!' = ($
                </Math>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y\!\rt&#123;0.05&#125;)' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/JFOc.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x\,\!\!\!' = ($
                </Math>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x \,+$
                </Math>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/JFOc.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x\!\rt&#123;0.05&#125;)' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Okyf.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y\,\!\!\!' = ($
                </Math>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/JFOc.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y\!\rt&#123;0.05&#125;)' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Okyf.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x\,\!\!\!' = ($
                </Math>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Okyf.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x\!\rt&#123;0.05&#125;)' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y\,\!\!\!' = ($
                </Math>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Okyf.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y\!\rt&#123;0.05&#125;)' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y$
                </Math>
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              ...or...
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x\,\!\!\!' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y\,\!\!\!' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x\,\!\!\!' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y\,\!\!\!' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x\,\!\!\!' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y\,\!\!\!' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x\,\!\!\!' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y\,\!\!\!' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y$
                </Math>
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              ...cutting out the middle computation, so the constraints
              relating particle velocities to particle positions are
              satisfied (e.g., the velocity vector of the purple particle
              is the position vector of the yellow particle);
              for seconders, evaluating these definitions at {" "}
              <Math>
                $t = 0$
              </Math>
              {" "} gives...
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0) =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0) \,+$
                </Math>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0) = 2\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0)$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0) =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0) \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0) = 4\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0)$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0) =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0) \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0) = 2\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0)$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0) =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0) \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0) = 4\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0)$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0) =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0) \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/JFOc.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0) = 2\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0)$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0) =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0) \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/JFOc.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0) = 4\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0)$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0) =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0) \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Okyf.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0) = 2\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0)$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0) =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0) \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Okyf.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0) = 4\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0)$
                </Math>
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              ...or...
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0) = 2\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0)$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0) = 4\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0)$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0) = 2\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0)$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0) = 4\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0)$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0) = 2\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0)$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0) = 4\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0)$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0) = 2\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0)$
                </Math>
              </p>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0) = 4\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0)$
                </Math>
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              ...cutting out the middle computation, which is to
              say that the positions at time {" "}
              <Math>
                $t = 0$
              </Math>
              {" "} of our
              newly-defined particles {" "}
              <NoBreak>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                ,
              </NoBreak>
              {" "} {" "}
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/build-img/svgo-svg/Ya08.svg"
                intrinsicWidth={20}
                intrinsicHeight={20}
              />
              {" "} and {" "}
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/build-img/svgo-svg/k4Y8.svg"
                intrinsicWidth={20}
                intrinsicHeight={20}
              />
              {" "} are the translate of the white particle
              positions at {" "}
              <Math>
                $t = 0$
              </Math>
              {" "} back up and to the right
              by the vector {" "}
              <NoBreak>
                <Math>
                  $(2, 4)$
                </Math>
                ,
              </NoBreak>
              {" "} which brings those
              positions back to the original positions of {" "}
              <NoBreak>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                {" "} and {" "}
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
              </NoBreak>
              {" "} as they appear in the problem statement!
            </OuterP>
            <OuterP class="indent-10">
              The proposed definitions satisfy all the conditions of the problem.
            </OuterP>
            <OuterP class="indent-10">
              Qualitatively, this implies that the particles
              can be understood as four particles rotating at
              unit speed around a circle of radius {" "}
              <Math>
                $1$
              </Math>
              {" "} (the
              white particles) where the center of circle (the
              UNO particle) is moving at exponential rate along
              a half-line. In particular, the particles remain
              at constant distance from one another for all {" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                ,
              </NoBreak>
              {" "}
              whether that seems intuitive or not.
            </OuterP>
            <OuterP class="indent-10">
              The trajectories near {" "}
              <Math>
                $t = 0$
              </Math>
              {" "} look like so:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/KERt.svg"
              intrinsicWidth={470}
              intrinsicHeight={650}
            />
            <Pause />
            <OuterP>
              The above plot goes from {" "}
              <Math>
                $t = -5$
              </Math>
              {" "} to
              {" "}
              <NoBreak>
                <Math>
                  $t \approx 1$
                </Math>
                —winding
              </NoBreak>
              {" "} further back in time would produce
              near-perfect counterclockwise circular motion,
              as the black particles rush up to {" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "}
              and come to a near-halt rather fast,
              leaving only the residual motion of the white
              particles!
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                When we said that, for {" "}
                <NoBreak>
                  <Math>
                    $t &gt; 0$
                  </Math>
                  ,
                </NoBreak>
                {" "} there ensues
              </OuterP>
              <Pause />
              <CentralDisplay>
                “a [kind of] four-particle explosion”
              </CentralDisplay>
              <Pause />
              <OuterP>
                in the first paragraph of the solution, the word
                “explosion” might be misleading, implying increased
                distances between the particles over time. This is
                not the case! (But we didn't know any better, back
                then.)
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                As half-mentioned in {" "}
                <InChapterLink
                  href="#_76_h.a.i_"
                  class="in-chapter-link"
                >
                  Example 1
                </InChapterLink>
                &#8288;,
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                speed
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                is not the same thing as
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                velocity
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                because, specifically, speed is
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                distance per unit time
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                —a nonnegative number—whereas velocity is
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                displacement per unit time
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                —a vector-valued quantity. (Or {" "}
                <NoBreak>
                  <Math>
                    $\pm$
                  </Math>
                  -valued
                </NoBreak>
                {" "} quantity
                in one dimension.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise
          ref="rence"
          number={4}
        >
          <ExerciseStatement id="_81_h.a.i_">
            <OuterP>
              <b>
                Exercise 4.
              </b>
              {" "}
              The function below is also the blue
              curve from {" "}
              <InChapterLink
                href="#_76_h.a.i_"
                class="in-chapter-link"
              >
                Example 1
              </InChapterLink>
              &#8288;, known as the
              {" "}
              <i>
                cosine function
              </i>
              {" "} (already encountered
              in {" "}
              <OutChapterLink
                href="/article/chapter3#_43_h.a.i_"
                class="out-chapter-link"
              >
                Chapter 3, Exercise 7
              </OutChapterLink>
              ).
              Knowing that this function is the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of a
              point rotating at unit speed around a unit
              circle what approximation to its circumference can you deduce by looking (closely) at the graph?
            </OuterP>
            <CodexSuggestions>
              <p>
                Possible closing exercise for the core chapter: the circular construction now lets a graph reveal the circle’s circumference. This provides a direct bridge to trigonometry without requiring the five- or seventeen-particle extensions.
              </p>
            </CodexSuggestions>
            <Pause />
            <Image
              src="/build-img/svgo-svg/njEr.svg"
              intrinsicWidth={1240}
              intrinsicHeight={180}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Because the particle is going at unit speed the circumference equals the time for one revolution—that is, for example, the
              time covered by the yellow interval below, from crest
              to crest*:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/KEtq.svg"
              intrinsicWidth={1240}
              intrinsicHeight={190}
            />
            <Pause />
            <OuterP>
              (*We're just going to assume that the graph
              passes through the point {" "}
              <NoBreak>
                <Math>
                  $(0, 1)$
                </Math>
                ,
              </NoBreak>
              {" "} which is as good
              as our eyesight can tell, anyway.)
              From the graph, then, it seems as if the circumference
              of a unit circle is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\Large \approx 6.3&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and another possibility would be
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \approx &#123;12.5\over 2&#125; = 6.25
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              since it seems like the graph ends at {" "}
              <Math>
                $t = 12.5$
              </Math>
              {" "} (?)
              after going through exactly (??) two cycles.
            </OuterP>
            <OuterP class="indent-10">
              However, the exact position of “cresting” is hard to
              determine because the graph flattens at that point,
              and a better clue is that the graph seems to go almost exactly through
              {" "}
              <NoBreak>
                <Math>
                  $(t, x) = (11, 0)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/htXO.svg"
              intrinsicWidth={1240}
              intrinsicHeight={205}
            />
            <Pause />
            <OuterP>
              This implies that in
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\Large 11&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              units of time—or nearly so—the particle does
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\Large 7&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              quarter-turns,
              as each half-bump corresponds to a
              quarter-turn, if you think about it, and there
              are seven half-bumps from {" "}
              <Math>
                $t = 0$
              </Math>
              {" "} to that point:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/9cV2.svg"
              intrinsicWidth={1240}
              intrinsicHeight={205}
            />
            <Pause />
            <OuterP>
              Thus
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                \Large &#123;4\over 7&#125; \cdot 11 = &#123;44 \over 7&#125; = 6.\overline&#123;285714&#125;
                $$
              </MathBlock>
            </Boxed>
            <OuterP>
              must be an approximation to the circumference of a
              unit circle, by the graph.
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                This approximation ends up being about half-a-part-in-a-thousand
                too large, or
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                0.040249943...\%
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                too large (or just: {" "}
                <NoBreak>
                  “
                  <Math>
                    $0.00040249943...$
                  </Math>
                </NoBreak>
                {" "} too large”, no {" "}
                <NoBreak>
                  “
                  <Math>
                    $\%$
                  </Math>
                  ”
                </NoBreak>
                {" "}
                needed if you shift the decimals over two places), because
                the graph is actually crossing through {" "}
                <Math>
                  $0$
                </Math>
                {" "} just shy of {" "}
                <NoBreak>
                  <Math>
                    $t = 11$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                not {" "}
                <i>
                  at
                </i>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $t = 11$
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
                The “core” approximation is actually that of
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large &#123;11\over 7&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for one-quarter the circumference of a unit circle; from
                which,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large &#123;22\over 7&#125;, &#123;33\over 7&#125;,
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large &#123;44\over 7&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                are derived approximations for one-half, three-quarters,
                and the full circumference of the unit circle!
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={5}>
          <ExerciseStatement id="_82_h.a.i_">
            <OuterP>
              <b>
                Exercise 5.
              </b>
              {" "}
              {" "}
              <InChapterLink
                href="#_76_h.a.i_"
                class="in-chapter-link"
              >
                Example 1
              </InChapterLink>
              {" "} exhibits a function {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                —in
              </NoBreak>
              {" "} fact,
              four different functions {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                —such
              </NoBreak>
              {" "} that
            </OuterP>
            <CodexSuggestions>
              <p>
                Consider deferring this to a later chapter on following a differential rule numerically. The solution currently introduces time stepping as well as a new particle configuration. It could become several small tasks: draw velocities, take one step, compare step sizes, predict expansion or contraction, and relate the coordinate functions to repeated differentiation. Distinguish constructing a fifth-derivative cycle from establishing that its period is not smaller.
              </p>
            </CodexSuggestions>
            <Pause />
            <MathBlock>
              $$
              f' \ne f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f'' \ne f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f''' \ne f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              but
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f^&#123;(4)&#125; = f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              surprise, surprise! Can you do the same with
              {" "}
              <NoBreak>
                “
                <Math>
                  $5$
                </Math>
                ”
              </NoBreak>
              {" "} instead of {" "}
              <NoBreak>
                “
                <Math>
                  $4$
                </Math>
                ”?
              </NoBreak>
              {" "} I.e., find a function
              {" "}
              <Math>
                $f$
              </Math>
              {" "} such that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f^&#123;(n)&#125; \ne f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for {" "}
              <Math>
                $n = 1, 2, 3, 4$
              </Math>
              {" "} but
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f^&#123;(5)&#125; = f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              We can naïvely try to imitiate how the
              curves of {" "}
              <OutChapterLink
                href="/article/chapter7#_109_h.a.i_"
                class="out-chapter-link"
              >
                Exercise 3
              </OutChapterLink>
              {" "} are generated by
              placing five equally spaced particles
              around the unit circle (“the” unit circle
              is the one centered at {" "}
              <NoBreak>
                <Math>
                  $(0, 0)$
                </Math>
                ,
              </NoBreak>
              {" "} by
              convention), instead of 4:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/826P.svg"
              intrinsicWidth={480}
              intrinsicHeight={380}
            />
            <Pause />
            <OuterP>
              The idea would be that the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              velocity vector
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of the red particle is the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              position vector
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of the blue particle,
              likewise for the blue and yellow particles,
              and so on. (Position vectors shown above.)
              For example, at the instant above, the
              velocity vectors would be as follows:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/uq4U.svg"
              intrinsicWidth={480}
              intrinsicHeight={440}
            />
            <Pause />
            <OuterP>
              The velocity vectors are
            </OuterP>
            <Pause />
            <CentralDisplay>
              NOT
            </CentralDisplay>
            <Pause />
            <OuterP>
              tangent to the unit circle, and so the
              particles will leave the circle!
              (But that's OK.) In one-tenth a unit of time, the particles would travel approximately one-tenth their velocity vectors, reaching approximately these positions:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/ZQgt.svg"
              intrinsicWidth={540}
              intrinsicHeight={515}
            />
            <Pause />
            <OuterP>
              In the next one-tenth unit of time we
              can apply a similar approximation again,
              advancing the particles by {" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 10&#125;$
                </Math>
                th
              </NoBreak>
              {" "}
              of [the current approximation to] their
              velocity vectors. Skipping the construction
              lines:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/0xaW.svg"
              intrinsicWidth={560}
              intrinsicHeight={405}
            />
            <Pause />
            <OuterP>
              Applying the same process for {" "}
              <Math>
                $8$
              </Math>
              {" "} more
              steps:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/hg3g.svg"
              intrinsicWidth={560}
              intrinsicHeight={435}
            />
            <Pause />
            <OuterP>
              To be clear, in the above figure, the
              position of the red particle at, say, the
              fifth step...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/GKbB.svg"
              intrinsicWidth={560}
              intrinsicHeight={435}
            />
            <Pause />
            <OuterP>
              ...is obtained by starting from the red
              particle's position at the fourth step...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/jG_S.svg"
              intrinsicWidth={560}
              intrinsicHeight={435}
            />
            <Pause />
            <OuterP>
              ...and adding one-tenth of the approximation
              that we have to the red particle's velocity
              vector at that moment, that approximation
              being namely the blue particle's position
              vector at the fourth step {" "}
              <NoBreak>
                (
                <Math>
                  $t = &#123;4\over 10&#125;$
                </Math>
                )...
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Js6D.svg"
              intrinsicWidth={560}
              intrinsicHeight={435}
            />
            <Pause />
            <OuterP>
              ...and we do the same for each particle,
              to advance to the next step.
            </OuterP>
            <OuterP class="indent-10">
              If we stop {" "}
              <Math>
                $10$
              </Math>
              {" "} times as often,
              advancing the clock by {" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 100&#125;$
                </Math>
                th
              </NoBreak>
              {" "} of
              a unit of time at each step, the same figure
              becomes just a blur (still going from
              {" "}
              <Math>
                $t = 0$
              </Math>
              {" "} to {" "}
              <NoBreak>
                <Math>
                  $t = 1$
                </Math>
                ):
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/8BpD.svg"
              intrinsicWidth={560}
              intrinsicHeight={395}
            />
            <Pause />
            <OuterP>
              To visualize this finer approximation, we draw the particles as points. In the following
              figure the colored paths are points that
              come from a {" "}
              <NoBreak>
                “
                <Math>
                  $&#123;1\over 100&#125;$
                </Math>
                th”
              </NoBreak>
              {" "} approximation,
              while the orange dots are the old positions
              obtained from a {" "}
              <NoBreak>
                “
                <Math>
                  $&#123;1\over 10&#125;$
                </Math>
                th”
              </NoBreak>
              {" "}
              approximation:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/uXS-.svg"
              intrinsicWidth={560}
              intrinsicHeight={395}
            />
            <Pause />
            <OuterP>
              Zooming in a bit (or else we still can't
              see anything):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/IUP8.svg"
              intrinsicWidth={560}
              intrinsicHeight={395}
            />
            <Pause />
            <OuterP>
              In any case, even the {" "}
              <NoBreak>
                “
                <Math>
                  $&#123;1\over 100&#125;$
                </Math>
                th”
              </NoBreak>
              {" "}
              approximation is just an approximation,
              but the point is that such approximations
              do converge to a set of “true” particle
              paths, as pictured in {" "}
              <NoBreak>
                Fig
                <Math>
                  $.$
                </Math>
              </NoBreak>
              {" "} 1, that can
              be computed by some wizards; as time can
              be played forward or backward, these paths
              form doubly-infinite spirals—in to infinity,
              out to infinity.
              <ImageLeft
                offsetX="1.5em"
                src="/build-img/svgo-svg/QRVl.svg"
                childrenX="50%"
                childrenY="105%"
                intrinsicWidth={490}
                intrinsicHeight={490}
              >
                <p>
                  <span style="font-size:1.4em;left:50%;transform:translate(-50%);position:absolute;white-space:nowrap;">
                    Fig. 1
                  </span>
                </p>
              </ImageLeft>
            </OuterP>
            <OuterP class="indent-10">
              In any case [take two] the point is that
              whether or not you are one of the wizards,
              you can
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              guess
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              the existence of these five paths—sort
              of “feel” that they exist! (This is a
              moral consolation prize, at least.)
            </OuterP>
            <OuterP class="indent-10">
              We can also convert the paths into a
              function
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              that satisfies the problem requirements.
            </OuterP>
            <OuterP class="indent-10">
              For example let {" "}
              <Math>
                $f$
              </Math>
              {" "} be the function that,
              given a time {" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                ,
              </NoBreak>
              {" "} outputs the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}
              of the red particle at {" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                ;
              </NoBreak>
              {" "} then, to spell
              it all out, since
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of the red particle is the
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of the blue particle
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <Math>
                $f'$
              </Math>
              {" "} is the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of the blue
              particle. Likewise, {" "}
              <NoBreak>
                <Math>
                  $f''$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $f'''$
                </Math>
                ,
              </NoBreak>
              {" "} and {" "}
              <Math>
                $f''''$
              </Math>
              {" "} are the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinates
              </NoBreak>
              {" "}
              of the yellow, green, and purple particles, and {" "}
              <NoBreak>
                <Math>
                  $f^&#123;(5)&#125; = f$
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
                If you graph the {" "}
                <NoBreak>
                  <Math>
                    $x$
                  </Math>
                  -coordinates
                </NoBreak>
                {" "} of the
                5 particles over time, each in their
                color, you get a graph like so, in which
                blue is the derivative of red, yellow is
                the derivative of blue, etc; the function
                {" "}
                <Math>
                  $f$
                </Math>
                {" "} can be taken to be any one of these
                curves:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/U6Hi.svg"
                intrinsicWidth={820}
                intrinsicHeight={435}
              />
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                There is nothing special about
                {" "}
                <NoBreak>
                  <Math>
                    $x$
                  </Math>
                  -coordinates
                </NoBreak>
                {" "} vis-à-vis {" "}
                <NoBreak>
                  <Math>
                    $y$
                  </Math>
                  -coordinates.
                </NoBreak>
                {" "}
                You can also define {" "}
                <Math>
                  $f(t)$
                </Math>
                {" "} to be, e.g.,
                the {" "}
                <NoBreak>
                  <Math>
                    $y$
                  </Math>
                  -coordinate
                </NoBreak>
                {" "} of the red particle
                at time {" "}
                <NoBreak>
                  <Math>
                    $t$
                  </Math>
                  .
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
                {" "} live separate lives. The rate of change of each
                {" "}
                <NoBreak>
                  <Math>
                    $x$
                  </Math>
                  -coordinate
                </NoBreak>
                {" "} is some other {" "}
                <NoBreak>
                  <Math>
                    $x$
                  </Math>
                  -coordinate,
                </NoBreak>
                {" "}
                and the rate of change of each {" "}
                <NoBreak>
                  <Math>
                    $y$
                  </Math>
                  -coordinate
                </NoBreak>
                {" "}
                is some other {" "}
                <NoBreak>
                  <Math>
                    $y$
                  </Math>
                  -coordinate—you
                </NoBreak>
                {" "} could
                scramble a {" "}
                <NoBreak>
                  <Math>
                    $y$
                  </Math>
                  -coordinate,
                </NoBreak>
                {" "} and the {" "}
                <NoBreak>
                  <Math>
                    $x$
                  </Math>
                  -coordinates
                </NoBreak>
                {" "}
                would never know!
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 4.
                </i>
                {" "}
                Adding to the previous observation, we don't
                {" "}
                <i>
                  need
                </i>
                {" "} to start the particles in
                a symmetric configuration. Symmetry only
                helps to picture how the positions of the
                particles will evolve without making any
                computations. We also don't {" "}
                <i>
                  need
                </i>
                {" "}
                to work in two dimensions. We can place
                the particles in a one-dimensional world,
                e.g., ...
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/cejz.svg"
                intrinsicWidth={450}
                intrinsicHeight={70}
              />
              <Pause />
              <OuterP>
                ...(the initial positions really don't
                matter much, as long as you don't give
                all the particles the {" "}
                <i>
                  same
                </i>
                {" "} initial
                position, or else you won't have {" "}
                <Math>
                  $f \ne f'$
                </Math>
                {" "}
                etc) and stipulate the same rules, namely
                that the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                velocity
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                (now {" "}
                <NoBreak>
                  <Math>
                    $1$
                  </Math>
                  -dimensional)
                </NoBreak>
                {" "} of the red particle
                be the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                position
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                (now {" "}
                <NoBreak>
                  <Math>
                    $1$
                  </Math>
                  -dimensional)
                </NoBreak>
                {" "} of the blue particle
                and so on—you can “release” the particles
                from their initial configuration and
                simulate—or compute by a formula, if you have
                the know-how—their motion like above. The
                five position
                functions obtained are each a solution
                {" "}
                <Math>
                  $f$
                </Math>
                {" "} to the problem. (But this solution will
                typically look more chaotic than the curves
                from Note 1.)
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 5.
                </i>
                {" "}
                In fact, our symmetric two-dimensional
                solution is an instance in which you can say
                that
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                the whole is simpler than the parts
                <ImageLeft
                  src="/build-img/svgo-svg/_DUb.svg"
                  offsetX="-5rem"
                  intrinsicWidth={500}
                  intrinsicHeight={500}
                />
                <ImageRight
                  src="/build-img/svgo-svg/7DF3.svg"
                  offsetX="-5rem"
                  intrinsicWidth={500}
                  intrinsicHeight={500}
                />
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                in that you would never spot the symmetry
                at play, or have a chance of eyeballing
                the long-term evolution of the system, if
                you were shown just the {" "}
                <NoBreak>
                  <Math>
                    $x$
                  </Math>
                  -coordinates,
                </NoBreak>
                {" "}
                or just the {" "}
                <NoBreak>
                  <Math>
                    $y$
                  </Math>
                  -coordinates,
                </NoBreak>
                {" "} on their own!
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={6}>
          <ExerciseStatement id="_83_h.a.i_">
            <OuterP>
              <b>
                Exercise 6.
              </b>
            </OuterP>
            <CodexSuggestions>
              <p>
                Keep as a later excursion after the five-particle construction, rather than a requirement for finishing this chapter. The near-tangential velocity arrows and slow expansion are the payoff. Consider first asking which particle should supply the velocity to make the arrow nearly tangent, then asking how repeated differentiation walks through the labels.
              </p>
            </CodexSuggestions>
            <OuterP>
              If we seek a function {" "}
              <Math>
                $f : \rr \ra \rr$
              </Math>
              {" "}
              such that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f^&#123;(17)&#125; = f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and {" "}
              <Math>
                $f \ne 0$
              </Math>
              {" "} (or: {" "}
              <NoBreak>
                <Math>
                  $f \ne (x \ra 0)$
                </Math>
                ,
              </NoBreak>
              {" "}
              pedantically) and {" "}
              <Math>
                $f$
              </Math>
              {" "} grows relatively
              slowly in either the positive or negative direction
              of the number line, insofar as such things are
              concerned, what would our options be?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Take {" "}
              <Math>
                $17$
              </Math>
              {" "} particles equally spaced out along
              the unit circle, such as these (shown here
              with position vectors):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/UDTy.svg"
              intrinsicWidth={480}
              intrinsicHeight={380}
            />
            <Pause />
            <OuterP>
              Set the velocity of particle
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\Large 1&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              equal to the position of particle
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\Large 5&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and keep going by this pattern, making the
              velocity of each particle equal to the
              position of the particle that is {" "}
              <Math>
                $4$
              </Math>
              {" "} later;
              in the configuration above, the velocity
              vectors end up looking like so, for example:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/tkLL.svg"
              intrinsicWidth={480}
              intrinsicHeight={380}
            >
              <ImageRight
                src="/build-img/svgo-svg/Bvhk.svg"
                offsetX="3rem"
                intrinsicWidth={500}
                intrinsicHeight={388}
              />
            </Image>
            <Pause />
            <OuterP>
              Maintaining this relationship at all times, and given that the velocity
              vectors point very slightly outward from
              the unit circle, and because all the
              symmetry and all the angles are maintained
              as we play time forward or backward, the
              particles spiral gently outward/inward from
              the circle for time forward/backward,
              respectively. Taking {" "}
              <Math>
                $f(t)$
              </Math>
              {" "} to be the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -
              </NoBreak>
              {" "}
              or {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of any one of the particles
              (e.g., particle {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                )
              </NoBreak>
              {" "} at time {" "}
              <Math>
                $t$
              </Math>
              {" "} gives an
              oscillating function whose {" "}
              <NoBreak>
                <Math>
                  $17$
                </Math>
                th
              </NoBreak>
              {" "} derivative
              is itself (because the rate of change of
              the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of particle {" "}
              <Math>
                $1$
              </Math>
              {" "} is the
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of particle {" "}
              <NoBreak>
                <Math>
                  $5$
                </Math>
                ,
              </NoBreak>
              {" "} etc, until
              we make it all the way back to particle {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ),
              </NoBreak>
              {" "}
              and that grows comparatively slowly over
              time. ~The End~
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              In case you're curious, the actual spiral paths
              of the particles look like so:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/kytU.svg"
              intrinsicWidth={480}
              intrinsicHeight={380}
            />
            <Pause />
            <OuterP>
              ...and if you take the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinates
              </NoBreak>
              {" "} of
              the particles over time, with time {" "}
              <Math>
                $t = 0$
              </Math>
              {" "}
              corresponding to the original configuration
              depicted where particle 1 is at {" "}
              <NoBreak>
                <Math>
                  $(1, 0)$
                </Math>
                ,
              </NoBreak>
              {" "} you
              find {" "}
              <del>
                paths
              </del>
              {" "} functions that look like so:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/KuID.svg"
              intrinsicWidth={900}
              intrinsicHeight="408.207"
            />
            <Pause />
            <OuterP>
              For example, the derivative of curve {" "}
              <InlineImage
                class="ch4_17_pellets"
                src="/build-img/svgo-svg/i4u9.svg"
                intrinsicWidth="18.75"
                intrinsicHeight="18.75"
              />
              , highlighted below in red, is curve {" "}
              <InlineImage
                class="ch4_17_pellets"
                src="/build-img/svgo-svg/twzO.svg"
                intrinsicWidth="18.75"
                intrinsicHeight="18.75"
              />
              , highlighted in blue:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/SKRR.svg"
              intrinsicWidth={900}
              intrinsicHeight="408.207"
            />
            <Pause />
            <OuterP>
              ...and taking sixteen more derivatives
              starting from curve {" "}
              <InlineImage
                class="ch4_17_pellets"
                src="/build-img/svgo-svg/twzO.svg"
                intrinsicWidth="18.75"
                intrinsicHeight="18.75"
              />
              {" "} we would go through curves {" "}
              <InlineImage
                class="ch4_17_pellets"
                src="/build-img/svgo-svg/A7E1.svg"
                intrinsicWidth="18.75"
                intrinsicHeight="18.75"
              />
              , {" "}
              <InlineImage
                class="ch4_17_pellets"
                src="/build-img/svgo-svg/256c.svg"
                intrinsicWidth="18.75"
                intrinsicHeight="18.75"
              />
              , {" "}
              <InlineImage
                class="ch4_17_pellets"
                src="/build-img/svgo-svg/oMBk.svg"
                intrinsicWidth="18.75"
                intrinsicHeight="18.75"
              />
              , {" "}
              <InlineImage
                class="ch4_17_pellets"
                src="/build-img/svgo-svg/26-z.svg"
                intrinsicWidth="18.75"
                intrinsicHeight="18.75"
              />
              , ..., {" "}
              <InlineImage
                class="ch4_17_pellets"
                src="/build-img/svgo-svg/hEuY.svg"
                intrinsicWidth="18.75"
                intrinsicHeight="18.75"
              />
              {" "} before finally coming back to curve {" "}
              <InlineImage
                class="ch4_17_pellets"
                src="/build-img/svgo-svg/i4u9.svg"
                style="margin-right:0.1em"
                intrinsicWidth="18.75"
                intrinsicHeight="18.75"
              />
              !
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 2.
              </i>
              {" "}
              It can be interesting to examine what
              goes wrong if we attempt to make the
              velocity vectors even more tangent to the
              unit circle. For example, if we start the
              particles so that particle 5 is at
              {" "}
              <Math>
                $90^\circ$
              </Math>
              {" "} exactly from particle 1,
              particle 9 is at {" "}
              <Math>
                $90^\circ$
              </Math>
              {" "} exactly from
              particle 5, and so on, until we reach
              particle 14, the last particle in this
              order; then we have the following starting
              configuration:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/t94J.svg"
              intrinsicWidth={480}
              intrinsicHeight={390}
            />
            <Pause />
            <OuterP>
              In this figure:
            </OuterP>
            <Pause />
            <List style="padding-left:1.2em;gap:0.4em;">
              <Item>
                <p>
                  the red arrows indicate which particle
                  takes its velocity from the position
                  of which other particle; for example,
                  particle 1 has velocity equal to the
                  position of particle 5
                </p>
              </Item>
              <Item>
                <p>
                  particles that occupy the same starting
                  position on the unit circle appear
                  stacked together, as a representation
                  device; for example, particle 2 has the
                  same starting position as particle 5
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              (Note that the red arrows have to form
              a cycle of length 17 in order for us to
              later extract a function {" "}
              <Math>
                $f$
              </Math>
              {" "} such that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f^&#123;(17)&#125; = f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              but this is the case: the red arrows only
              “close the loop” after going through all
              17 particles!)
            </OuterP>
            <OuterP class="indent-10">
              In this starting configuration, all
              velocity vectors are exactly tangent to
              the unit circle
            </OuterP>
            <Pause />
            <CentralDisplay>
              EXCEPT
            </CentralDisplay>
            <Pause />
            <OuterP>
              for particle 14, whose velocity vector,
              being the position of particle 1, is straight
              out from the circle! So, as we “start time”,
              particle 14 will push out from the circle,
              that will in turn affect particle 10, and
              so on, until all particles end up being
              “peeled off” from the circle, in due time;
              if you are so curious, the particle
              trajectories end up like so (shown only for
              {" "}
              <NoBreak>
                <Math>
                  $t \geq 0$
                </Math>
                ):
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/3j-T.svg"
              intrinsicWidth={880}
              intrinsicHeight={880}
            />
            <Pause />
            <OuterP>
              The particles shoot of to infinity in short
              order—the solution is much worse—for fun we
              have also highlighted two particle trajectories
              in this figure:
            </OuterP>
            <Pause />
            <List style="padding-left:1.4em;gap:0.4em;">
              <Item>
                <p>
                  in {" "}
                  <span style="border:1px solid blue">
                    blue
                  </span>
                  , particle 1, the last particle
                  to be (noticeably*) “peeled off” from
                  the circle (*all particles are
                  instantaneously peeled off from the
                  circle to {" "}
                  <i>
                    some
                  </i>
                  {" "} degree, as one
                  particle's slight deviation affects
                  the next, that affects the next, etc)
                </p>
              </Item>
              <Item>
                <p>
                  in {" "}
                  <span style="border:1px solid red">
                    red
                  </span>
                  , particle 14, the {" "}
                  <i>
                    first
                  </i>
                  {" "} particle
                  to leave the circle—but because its
                  velocity vector is given by particle 1,
                  which itself starts by going around in
                  a circle, it, too, starts out by going
                  around in a circle!
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              (The point is: if your velocity vector
              is tracing a circle centered at {" "}
              <NoBreak>
                <Math>
                  $(0, 0)$
                </Math>
                —at
              </NoBreak>
              {" "}
              a uniform rate—then you, too, are going
              around in a circle—it's just that your
              circle could be centered anywhere, not
              necessarily at {" "}
              <NoBreak>
                <Math>
                  $(0, 0)$
                </Math>
                !)
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};