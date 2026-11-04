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
import MathJaxSvgExportTooltip  from "~/components/MathJaxSvgExportTooltip";
import OutChapterLink  from "~/components/OutChapterLink";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
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
      id="_83_h.a.i_"
      path="/article/chapter5"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            example 1
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=exercises">
            <span class="t-3003-c">
              exercises
              <span class="t-3003">
                ./src/content/ch4a_motion/motion^exercises/__parent.wly:1:1
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 5:">
        <span class="t-3003-c">
          Motion in Two Dimensions
          <span class="t-3003">
            ./src/content/ch4a_motion/__parent.wly:2:11
          </span>
        </span>
      </ArticleTitle>
      <Section id="section-1">
        <CodexSuggestions>
          <p>
            <span class="t-3003-c">
              This is a cut-and-paste draft: the original four-curve question and its solution now form the main text. Consider starting with the coordinate-shadow explanation currently in Note 3, then introducing the four particles and returning to the curves as the payoff. Keep that circular-motion explanation before trigonometry, which already relies on these derivatives.
              <span class="t-3003">
                ./src/content/ch4a_motion/motion.wly:6:9
              </span>
            </span>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              The chapter’s narrow core could be position and velocity as pairs, movable arrows, and the four-particle derivative cycle. Addition and scaling should enter only where the existing constructions need them. The longer dynamical-system exercises below need not all remain in this first encounter.
              <span class="t-3003">
                ./src/content/ch4a_motion/motion.wly:8:9
              </span>
            </span>
          </p>
        </CodexSuggestions>
        <Pause />
        <Example
          ref="rence"
          id="_74_h.a.i_"
        >
          <OuterP>
            <b>
              Example 1.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              In the following graph, which curve might
              <span class="t-3003">
                ./src/content/ch4a_motion/motion.wly:14:9
              </span>
            </span>
            {" "}
            {" "}
            be a derivative of which other curve?
          </OuterP>
          <Pause />
          <Image
            src="/build-img/svgo-svg/_2ki.svg"
            local_url="./images/svg_ch4_cosine_curves.svg"
            intrinsicWidth={1200}
            intrinsicHeight={160}
          />
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              As it happens—and by the exact method
              <span class="t-3003">
                ./src/content/ch4a_motion/motion.wly:20:9
              </span>
            </span>
            {" "}
            {" "}
            that we used to generate these curves—the
            blue is the derivative of the red:
          </OuterP>
          <Pause />
          <Image
            src="/build-img/svgo-svg/W11G.svg"
            local_url="./images/svg_ch4_cosine_curves_blue_red_only_v2.svg"
            intrinsicWidth={1200}
            intrinsicHeight={320}
          />
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              Likewise, the yellow is the derivative
              <span class="t-3003">
                ./src/content/ch4a_motion/motion.wly:27:9
              </span>
            </span>
            {" "}
            {" "}
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
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                After all, the slope of these curves
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:37:13
                </span>
              </span>
              {" "}
              {" "}
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
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Because “most slanted up” occurs when
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:44:13
                </span>
              </span>
              {" "}
              {" "}
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
              local_url="./images/svg_ch4_cosine_curves_cresting.svg"
              intrinsicWidth={500}
              intrinsicHeight={250}
            />
          </OldSolutionNote>
          <CodexSuggestions>
            <p>
              <span class="t-3003-c">
                Promote this material out of a note when the chapter is rewritten. Possible brief questions: do position vectors change when the origin moves? Do velocity vectors? Can two arrows with different starting points represent the same vector? These distinctions prepare the equality between one particle’s velocity and another’s position.
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:57:13
                </span>
              </span>
            </p>
          </CodexSuggestions>
          <Pause />
          <OldSolutionNote>
            <OuterP>
              <i>
                Note 3.
              </i>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                When we examine the velocity of a
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:60:13
                </span>
              </span>
              {" "}
              {" "}
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
              local_url="./images/svg_ch4_cosine_curves_two_dimensional_vel.svg"
              intrinsicWidth={450}
              intrinsicHeight={280}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The velocities of the two shadows
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:68:13
                </span>
              </span>
              {" "}
              {" "}
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
              <span class="t-3003-c">
                Here's another point of view: just like
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:74:13
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                position
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:76:15
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is encoded by a pair of numbers—sometimes
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:78:13
                </span>
              </span>
              {" "}
              {" "}
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
              <span class="t-3003-c">
                velocity
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:83:15
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is encoded by a pair of numbers—equally
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:85:13
                </span>
              </span>
              {" "}
              {" "}
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
              <span class="t-3003-c">
                velocity vector
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:90:15
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is the derivative of the first coordinate
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:92:13
                </span>
              </span>
              {" "}
              {" "}
              of the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                position vector
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:95:15
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and likewise for the second coordinate—two
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:97:13
                </span>
              </span>
              {" "}
              {" "}
              coordinates, two rates of change!
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Geometrically, if we use the {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:100:13
                </span>
              </span>
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
                local_url="./images/svg_ch4_cosine_curves_tangent_velocity_cloud.svg"
                intrinsicWidth={800}
                intrinsicHeight={400}
              />
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                length
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:109:15
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of the arrow is the
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:111:13
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                speed
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:113:15
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of the particle at that moment.
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:115:13
                </span>
              </span>
              {" "}
              {" "}
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
              <span class="t-3003-c">
                distance per unit time
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:125:15
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                the length of the arrow is, therefore,
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:127:13
                </span>
              </span>
              {" "}
              {" "}
              the speed!
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Now consider not one but four particles,
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:130:13
                </span>
              </span>
              {" "}
              {" "}
              going around a unit circle in clockwise
              fashion, 90° apart in phase, at unit
              speed (“unit speed” = speed 1, “unit
              circle” = radius 1) (ps: We center the
              circle at the origin):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/zkYn.svg"
              local_url="./images/svg_ch4_cosine_curves_unit_circle.svg"
              intrinsicWidth={480}
              intrinsicHeight={380}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:140:13
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                position vectors
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:142:15
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of the particles are as follows:
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:144:13
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/g6Et.svg"
              local_url="./images/svg_ch4_cosine_curves_unit_circle_position_vectors.svg"
              intrinsicWidth={480}
              intrinsicHeight={380}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (You can't really see it so well, but
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:149:13
                </span>
              </span>
              {" "}
              {" "}
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
              <span class="t-3003-c">
                velocity vectors
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:153:15
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                are as follows:
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:155:13
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/4R5D.svg"
              local_url="./images/svg_ch4_cosine_curves_unit_circle_velocity_vectors.svg"
              intrinsicWidth={480}
              intrinsicHeight={380}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (Like the position vectors, the
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:160:13
                </span>
              </span>
              {" "}
              {" "}
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
              <span class="t-3003-c">
                (Nb: When we draw a vector as an arrow
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:167:13
                </span>
              </span>
              {" "}
              {" "}
              we mean that the coordinates give the horizontal and vertical displacements from the arrow’s tail to its head.)
              <ImageRight
                src="/build-img/svgo-svg/BcYN.svg"
                local_url="./images/svg_ch4_cosine_curves_vector_illustration_cloud.svg"
                intrinsicWidth={750}
                intrinsicHeight={500}
              />
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Due to the 90° rotations and uniform
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:173:13
                </span>
              </span>
              {" "}
              {" "}
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
              local_url="./images/svg_ch4_cosine_curves_unit_circle_equality.svg"
              intrinsicWidth={600}
              intrinsicHeight={380}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Just looking at
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:184:13
                </span>
              </span>
              {" "}
              {" "}
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
              <span class="t-3003-c">
                the velocity in {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:187:15
                </span>
              </span>
              <Math>
                $x$
              </Math>
              <span class="t-3003-c">
                {" "} of the red particle
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:187:34
                </span>
              </span>
              {" "}
              {" "}
              is the position in {" "}
              <Math>
                $x$
              </Math>
              <span class="t-3003-c">
                {" "} of the blue particle
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:188:35
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                at any given moment in time. {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:190:13
                </span>
              </span>
              {" "}
              {" "}
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
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                at time {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:204:13
                </span>
              </span>
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
              local_url="./images/svg_ch4_cosine_curves_verified_v2.svg"
              intrinsicWidth={1200}
              intrinsicHeight={240}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                If we add the {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:209:13
                </span>
              </span>
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
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                If needed, here is an illustration of
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:214:13
                </span>
              </span>
              {" "}
              {" "}
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
              local_url="./images/svg_ch4_cosine_curves_rolling_wheel.svg"
              intrinsicWidth={1200}
              intrinsicHeight={320}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (If this just looks like a mess, then nevermind.)
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:222:13
                </span>
              </span>
            </OuterP>
          </OldSolutionNote>
          <Pause />
          <OldSolutionNote>
            <OuterP>
              <i>
                Note 5.
              </i>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                To reiterate, take a look at this
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:257:13
                </span>
              </span>
              {" "}
              {" "}
              figure again:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/P9o9.svg"
              local_url="./images/svg_ch4_cosine_curves_cresting.svg"
              intrinsicWidth={500}
              intrinsicHeight={250}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The derivative is
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:262:13
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                ahead
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:264:15
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of the red particle, in the sense that
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion.wly:266:13
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
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
        id="_82_h.a.i_"
      >
        <Exercise
          work="in"
          number={1}
        >
          <ExerciseStatement id="_76_h.a.i_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
            </OuterP>
            <CodexSuggestions>
              <p>
                <span class="t-3003-c">
                  Placement option: use this and the following two-particle exercise as a short one-dimensional prelude, or reserve them for the exponential chapter. The current two-dimensional main text does not require them. Avoid introducing exponentials in a long solution merely to justify their presence here.
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_1d_red_particle_.wly:7:9
                  </span>
                </span>
              </p>
            </CodexSuggestions>
            <OuterP>
              <span class="t-3003-c">
                Imagine a single particle in a one-dimensional
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_1d_red_particle_.wly:9:5
                </span>
              </span>
              {" "}
              {" "}
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
              local_url="./images/svg_ch4_ex_one_particle_at_1.svg"
              intrinsicWidth={400}
              intrinsicHeight={100}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                If we play time backward, will the particle
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_1d_red_particle_.wly:16:5
                </span>
              </span>
              {" "}
              {" "}
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
              <span class="t-3003-c">
                Going back in time, examine how long it would take
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_1d_red_particle_.wly:21:9
                </span>
              </span>
              {" "}
              {" "}
              the particle to cross each of the intervals defined by
              the following geometric progression* (*see {" "}
              <InChapterLink
                href="#_75_h.a.i_"
                class="in-chapter-link"
              >
                Note 1
              </InChapterLink>
              &#8288;):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/ESgD.svg"
              local_url="./images/svg_ch4_ex_one_particle_interval_subdivision.svg"
              intrinsicWidth={470}
              intrinsicHeight={80}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The interval from {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_1d_red_particle_.wly:28:9
                </span>
              </span>
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
                local_url="./images/svg_ch4_one_particle_speed_equals_time_cloud.svg"
                intrinsicWidth={400}
                intrinsicHeight={200}
              />
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                time to cross, because the particle’s maximum speed in that interval is {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_1d_red_particle_.wly:38:9
                </span>
              </span>
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
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                to
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_1d_red_particle_.wly:44:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = 0.5
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                takes {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_1d_red_particle_.wly:50:9
                </span>
              </span>
              <i>
                at least
              </i>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;0.25 \over 0.5&#125; = 0.5
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                time to cross, because the particle’s maximum speed in that interval is {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_1d_red_particle_.wly:60:9
                </span>
              </span>
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
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                to
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_1d_red_particle_.wly:67:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = 0.25
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                takes {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_1d_red_particle_.wly:73:9
                </span>
              </span>
              <i>
                at least
              </i>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;0.125 \over 0.25&#125; = 0.5
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                time to cross, because the particle’s maximum speed in that interval is {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_1d_red_particle_.wly:83:9
                </span>
              </span>
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
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                units of time to cross, but there are infinitely
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_1d_red_particle_.wly:84:31
                </span>
              </span>
              {" "}
              {" "}
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
            <SolutionNote id="_75_h.a.i_">
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  A so-called
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_1d_red_particle_.wly:108:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  geometric progression
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_1d_red_particle_.wly:110:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  is a sequence in which each number is a fixed multiple of the previous.
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_1d_red_particle_.wly:112:13
                  </span>
                </span>
                {" "}
                {" "}
                For example,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                100,\, 300,\, 900,\, 2700
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  is a (finite) geometric progression, because each number
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_1d_red_particle_.wly:119:13
                  </span>
                </span>
                {" "}
                {" "}
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
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  is an (infinite) geometric progression, because each number
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_1d_red_particle_.wly:127:13
                  </span>
                </span>
                {" "}
                {" "}
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
                <span class="t-3003-c">
                  arithmetic progression
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_1d_red_particle_.wly:130:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  is a sequence of numbers in which each number
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_1d_red_particle_.wly:132:13
                  </span>
                </span>
                {" "}
                {" "}
                adds a fixed quantity to the previous. For example,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                900, 1000, 1100, 1200, 1300, \dots
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  is an infinite arithmetic progression in which each number
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_1d_red_particle_.wly:139:13
                  </span>
                </span>
                {" "}
                {" "}
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
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  is a finite arithmetic progression in which each number
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_1d_red_particle_.wly:146:13
                  </span>
                </span>
                {" "}
                {" "}
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
          <ExerciseStatement id="_77_h.a.i_">
            <OuterP>
              <b>
                Exercise 2.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Take a system of two particles on the real
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_1d_red_yellow_particles_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
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
              local_url="./images/1d_blue_yellow_particles.svg"
              intrinsicWidth={450}
              intrinsicHeight={70}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                If the velocity of the yellow particle is set to
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_1d_red_yellow_particles_.wly:12:5
                </span>
              </span>
              {" "}
              {" "}
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
              <span class="t-3003-c">
                At {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_1d_red_yellow_particles_.wly:22:9
                </span>
              </span>
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
              local_url="./images/1d_blue_yellow_particles_with_velocities.svg"
              intrinsicWidth={450}
              intrinsicHeight={150}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                As we “release” time the two particles thus
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_1d_red_yellow_particles_.wly:30:9
                </span>
              </span>
              {" "}
              {" "}
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
              local_url="./images/svg_ch4_three_one_dimensional_particles_blue_yellow_v2.svg"
              intrinsicWidth={600}
              intrinsicHeight={500}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The “defining geometric relationship” is that
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_1d_red_yellow_particles_.wly:39:9
                </span>
              </span>
              {" "}
              {" "}
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
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  Saying
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_1d_red_yellow_particles_.wly:50:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  a particle whose velocity is minus its
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_1d_red_yellow_particles_.wly:52:15
                  </span>
                </span>
                {" "}
                {" "}
                position
                <br />
                <span class="t-3003-c">
                  and whose position is {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_1d_red_yellow_particles_.wly:55:13
                  </span>
                </span>
                <Math>
                  $1$
                </Math>
                <span class="t-3003-c">
                  {" "} at time {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_1d_red_yellow_particles_.wly:55:38
                  </span>
                </span>
                <Math>
                  $t = 0$
                </Math>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  characterizes the blue particle without invoking the yellow particle, and
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_1d_red_yellow_particles_.wly:57:13
                  </span>
                </span>
                {" "}
                {" "}
                likewise
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  a particle whose velocity is minus its
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_1d_red_yellow_particles_.wly:60:15
                  </span>
                </span>
                {" "}
                {" "}
                position
                <br />
                <span class="t-3003-c">
                  and whose position is {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_1d_red_yellow_particles_.wly:63:13
                  </span>
                </span>
                <Math>
                  $-1$
                </Math>
                <span class="t-3003-c">
                  {" "} at time {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_1d_red_yellow_particles_.wly:63:39
                  </span>
                </span>
                <Math>
                  $t = 0$
                </Math>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  is an alternate characterization of the yellow particle
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_1d_red_yellow_particles_.wly:65:13
                  </span>
                </span>
                {" "}
                {" "}
                that does not invoke the blue particle.
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
                  The graph of the blue particle is the mirror
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_1d_red_yellow_particles_.wly:70:13
                  </span>
                </span>
                {" "}
                {" "}
                image through the {" "}
                <Math>
                  $y$
                </Math>
                {" "} axis of the graph of the 
                particle of {" "}
                <InChapterLink
                  href="#_76_h.a.i_"
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
                local_url="./images/svg_ch4_three_one_dimensional_particles_red_and_blue_symmetry.svg"
                intrinsicWidth={526}
                intrinsicHeight={300}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...because a mirror symmetry through
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_1d_red_yellow_particles_.wly:79:13
                  </span>
                </span>
                {" "}
                {" "}
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
                <span class="t-3003-c">
                  (I.e., the mirror image of the blue
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_1d_red_yellow_particles_.wly:85:13
                  </span>
                </span>
                {" "}
                {" "}
                curve satisfies the constraints of the red curve, and
                vice-versa.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={3}>
          <ExerciseStatement id="_78_h.a.i_">
            <OuterP>
              <b>
                Exercise 3.
              </b>
            </OuterP>
            <CodexSuggestions>
              <p>
                <span class="t-3003-c">
                  This solution contains enough material for a separate development. Consider splitting the task into initial velocity arrows, motion of the centre, and motion relative to the centre, before asking for the full evolution. Retain the distinction between moving the entire configuration and changing the coordinate origin: the rule equating velocity with position is sensitive to that distinction.
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:6:9
                  </span>
                </span>
              </p>
            </CodexSuggestions>
            <OuterP>
              <span class="t-3003-c">
                Four particles are placed
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:8:5
                </span>
              </span>
              {" "}
              {" "}
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
              local_url="./images/svg_ch4_circle_at_2_4.svg"
              intrinsicWidth="387.198"
              intrinsicHeight="387.198"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The velocity of each particle is set to
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:16:5
                </span>
              </span>
              {" "}
              {" "}
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
              <span class="t-3003-c">
                At {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:26:9
                </span>
              </span>
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
                local_url="./images/svg_ch4_circle_at_2_4_with_some_vectors_cloud.svg"
                intrinsicWidth={500}
                intrinsicHeight={600}
              />
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                For {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:43:9
                </span>
              </span>
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
              <span class="t-3003-c">
                HOWEVER.
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:50:9
                </span>
              </span>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                It is possible to say much more.
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:52:9
                </span>
              </span>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                To go deeper, we introduce eight new
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:54:9
                </span>
              </span>
              {" "}
              {" "}
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
                <span class="t-3003-c">
                  , {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:63:13
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <span class="t-3003-c">
                  , {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:67:13
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <span class="t-3003-c">
                  , {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:71:13
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <span class="t-3003-c">
                  , {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:75:13
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <span class="t-3003-c">
                  , {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:79:13
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <span class="t-3003-c">
                  , {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:83:13
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/JFOc.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <span class="t-3003-c">
                  , {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:87:13
                  </span>
                </span>
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
              <span class="t-3003-c">
                At {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:92:9
                </span>
              </span>
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
              local_url="./images/svg_ch4_circle_at_2_4_white_version.svg"
              intrinsicWidth={520}
              intrinsicHeight={520}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The black particles, for their part, are
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:100:9
                </span>
              </span>
              {" "}
              {" "}
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
              local_url="./images/svg_ch4_circle_at_2_4_black_version.svg"
              intrinsicWidth={520}
              intrinsicHeight={520}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Within each group we set the velocity of
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:108:9
                </span>
              </span>
              {" "}
              {" "}
              the purple particle to the position of the
              yellow particle,
              the velocity of the yellow particle to the
              position of the green particle, etc.
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                In this case the white particles will
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:115:9
                </span>
              </span>
              {" "}
              {" "}
              rotate at unit speed around their circle of
              radius {" "}
              <Math>
                $1$
              </Math>
              {" "} centered at the origin, as in {" "}
              <InChapterLink
                href="#_74_h.a.i_"
                class="in-chapter-link"
              >
                Example 1
              </InChapterLink>
              {" "}
              (albeit with a different set of colors).
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                The black particles, for their part,
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:120:9
                </span>
              </span>
              {" "}
              {" "}
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
              <span class="t-3003-c">
                Also note that the
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:131:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                speed
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:133:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of the black particles, being equal to the
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:135:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                length of the velocity vector
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:137:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of said particles, is equal to the
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:139:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                length of the position vector
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:141:11
                </span>
              </span>
              <ImageRight
                src="/build-img/svgo-svg/vnba.svg"
                offsetX="-4em"
                local_url="./images/svg_ch4_ex_circle_at_2_4_position_equals_velocity_cloud.svg"
                intrinsicWidth={250}
                intrinsicHeight={100}
              />
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of said particles, is equal to the
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:147:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                distance to the origin
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:149:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of said particles,
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:151:9
                </span>
              </span>
              {" "}
              {" "}
              since the length of the position vector is
              the distance to the origin.
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                This means that if we introduce gradations
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:155:9
                </span>
              </span>
              {" "}
              {" "}
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
              local_url="./images/svg_ch4_circle_at_2_4_UNO_with_gradated_line.svg"
              intrinsicWidth={520}
              intrinsicHeight={520}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...indicating the distance to the origin,
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:162:9
                </span>
              </span>
              {" "}
              {" "}
              the black particles behave like a
              one-dimensional system comprising a single
              particle on a half-line (or entire line,
              it doesn't hurt) whose velocity is equal to
              its position on this line:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/xj0g.svg"
              local_url="./images/svg_ch4_circle_at_2_4_UNO_flat_half_line.svg"
              intrinsicWidth={500}
              intrinsicHeight={100}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The behavior of such a particle is
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:172:9
                </span>
              </span>
              {" "}
              {" "}
              identical to the behavior of the red
              particle from {" "}
              <InChapterLink
                href="#_76_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 1
              </InChapterLink>
              &#8288;,
              except that the current
              “UNO particle” has a slight head-start over the
              red particle from {" "}
              <InChapterLink
                href="#_76_h.a.i_"
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
                local_url="./images/svg_ch4_ex_circle_at_2_4_sqrt_20_cloud.svg"
                intrinsicWidth={330}
                intrinsicHeight={100}
              />
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                This describes an “understandable”
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:186:9
                </span>
              </span>
              {" "}
              {" "}
              behavior of the black and white particles.
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Next we write
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:189:9
                </span>
              </span>
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
              <span class="t-3003-c">
                for the function that gives
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:197:9
                </span>
              </span>
              {" "}
              {" "}
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
              <span class="t-3003-c">
                to emphasize that WE ARE TALKING ABOUT A FUNCTION, e.g.,
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:207:9
                </span>
              </span>
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
              <span class="t-3003-c">
                is the {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:215:9
                </span>
              </span>
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
              <span class="t-3003-c">
                for the function that gives
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:225:9
                </span>
              </span>
              {" "}
              {" "}
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
              <span class="t-3003-c">
                For example,
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:230:9
                </span>
              </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:236:28
                  </span>
                </span>
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
              <span class="t-3003-c">
                because the rate of change of the
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:242:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:251:32
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x\,\!\!\!' =$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:255:28
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x +$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:259:19
                  </span>
                </span>
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
              <span class="t-3003-c">
                by adding two such equations together; this can also be
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:265:9
                </span>
              </span>
              {" "}
              {" "}
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:274:23
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x)' =$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:278:21
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x +$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:282:19
                  </span>
                </span>
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
              <span class="t-3003-c">
                by the sum rule; but this gives us an idea!; we can
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:288:9
                </span>
              </span>
              {" "}
              {" "}
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:317:19
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x \,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:321:21
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:330:19
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y \,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:334:21
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:343:19
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x \,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:347:21
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:356:19
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y \,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:360:21
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:369:19
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x \,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:373:21
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:382:19
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y \,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:386:21
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:395:19
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x \,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:399:21
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:408:19
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y \,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:412:21
                  </span>
                </span>
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
              <span class="t-3003-c">
                ...and see if these definitions satisfy the constraints
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:418:9
                </span>
              </span>
              {" "}
              {" "}
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:430:21
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x\!\rt&#123;0.05&#125;)' =$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:434:32
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x \,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:438:21
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x =$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:442:19
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:455:21
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y\!\rt&#123;0.05&#125;)' =$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:459:32
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y \,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:463:21
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y =$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:467:19
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:480:21
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x\!\rt&#123;0.05&#125;)' =$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:484:32
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x \,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:488:21
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/JFOc.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x =$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:492:19
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:505:21
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y\!\rt&#123;0.05&#125;)' =$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:509:32
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y \,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:513:21
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/JFOc.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y =$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:517:19
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:534:32
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x \,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:538:21
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Okyf.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x =$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:542:19
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:555:21
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/JFOc.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y\!\rt&#123;0.05&#125;)' =$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:559:32
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y \,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:563:21
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Okyf.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y =$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:567:19
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:580:21
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Okyf.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x\!\rt&#123;0.05&#125;)' =$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:584:32
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x \,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:588:21
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x =$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:592:19
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:605:21
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Okyf.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y\!\rt&#123;0.05&#125;)' =$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:609:32
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y \,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:613:21
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y =$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:617:19
                  </span>
                </span>
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
              <span class="t-3003-c">
                ...or...
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:623:9
                </span>
              </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:629:28
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:638:28
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:647:28
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:656:28
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:665:28
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:674:28
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:683:28
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:692:28
                  </span>
                </span>
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
              <span class="t-3003-c">
                ...cutting out the middle computation, so the constraints
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:698:9
                </span>
              </span>
              {" "}
              {" "}
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:708:22
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:716:29
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:725:22
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0) \,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:729:24
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0) = 4\,\,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:733:29
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:742:22
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0) \,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:746:24
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0) = 2\,\,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:750:29
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:759:22
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0) \,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:763:24
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0) = 4\,\,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:767:29
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:776:22
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0) \,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:780:24
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/JFOc.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0) = 2\,\,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:784:29
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:793:22
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0) \,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:797:24
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/JFOc.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0) = 4\,\,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:801:29
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:810:22
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0) \,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:814:24
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Okyf.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_x(0) = 2\,\,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:818:29
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:827:22
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0) \,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:831:24
                  </span>
                </span>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Okyf.svg"
                  intrinsicWidth={20}
                  intrinsicHeight={20}
                />
                <Math>
                  $_y(0) = 4\,\,+$
                </Math>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:835:29
                  </span>
                </span>
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
              <span class="t-3003-c">
                ...or...
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:841:9
                </span>
              </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:847:29
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:856:29
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:865:29
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:874:29
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:883:29
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:892:29
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:901:29
                  </span>
                </span>
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
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:910:29
                  </span>
                </span>
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
              <span class="t-3003-c">
                ...cutting out the middle computation, which is to
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:916:9
                </span>
              </span>
              {" "}
              {" "}
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
              <span class="t-3003-c">
                The proposed definitions satisfy all the conditions of the problem.
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:966:9
                </span>
              </span>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Qualitatively, this implies that the particles
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:968:9
                </span>
              </span>
              {" "}
              {" "}
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
              <span class="t-3003-c">
                The trajectories near {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:977:9
                </span>
              </span>
              <Math>
                $t = 0$
              </Math>
              {" "} look like so:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/KERt.svg"
              local_url="./images/svg_ch4_circle_at_2_4_solution_curves.svg"
              intrinsicWidth={470}
              intrinsicHeight={650}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The above plot goes from {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:982:9
                </span>
              </span>
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
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  When we said that, for {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:991:13
                  </span>
                </span>
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
                <span class="t-3003-c">
                  “a [kind of] four-particle explosion”
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:993:15
                  </span>
                </span>
              </CentralDisplay>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  in the first paragraph of the solution, the word
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:995:13
                  </span>
                </span>
                {" "}
                {" "}
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
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  As half-mentioned in {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:1003:13
                  </span>
                </span>
                <InChapterLink
                  href="#_74_h.a.i_"
                  class="in-chapter-link"
                >
                  Example 1
                </InChapterLink>
                &#8288;,
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  speed
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:1005:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  is not the same thing as
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:1007:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  velocity
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:1009:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  because, specifically, speed is
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:1011:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  distance per unit time
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:1013:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  —a nonnegative number—whereas velocity is
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:1015:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  displacement per unit time
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:1017:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  —a vector-valued quantity. (Or {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_four_particles_at_2_4_.wly:1019:13
                  </span>
                </span>
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
          <ExerciseStatement id="_79_h.a.i_">
            <OuterP>
              <b>
                Exercise 4.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                The function below is also the blue
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_eta_approximation_from_cosine_graph_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              curve from {" "}
              <InChapterLink
                href="#_74_h.a.i_"
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
                href="/article/chapter3#_41_h.a.i_"
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
                <span class="t-3003-c">
                  Possible closing exercise for the core chapter: the circular construction now lets a graph reveal the circle’s circumference. This provides a direct bridge to trigonometry without requiring the five- or seventeen-particle extensions.
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_eta_approximation_from_cosine_graph_.wly:14:9
                  </span>
                </span>
              </p>
            </CodexSuggestions>
            <Pause />
            <Image
              src="/build-img/svgo-svg/njEr.svg"
              local_url="./images/svg_ch4_cosine_for_eta.svg"
              intrinsicWidth={1240}
              intrinsicHeight={180}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Because the particle is going at unit speed the circumference equals the time for one revolution—that is, for example, the
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_eta_approximation_from_cosine_graph_.wly:21:9
                </span>
              </span>
              {" "}
              {" "}
              time covered by the yellow interval below, from crest
              to crest*:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/KEtq.svg"
              local_url="./images/svg_ch4_cosine_for_eta_with_yellow.svg"
              intrinsicWidth={1240}
              intrinsicHeight={190}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (*We're just going to assume that the graph
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_eta_approximation_from_cosine_graph_.wly:28:9
                </span>
              </span>
              {" "}
              {" "}
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
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and another possibility would be
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_eta_approximation_from_cosine_graph_.wly:38:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \approx &#123;12.5\over 2&#125; = 6.25
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                since it seems like the graph ends at {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_eta_approximation_from_cosine_graph_.wly:44:9
                </span>
              </span>
              <Math>
                $t = 12.5$
              </Math>
              {" "} (?)
              after going through exactly (??) two cycles.
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                However, the exact position of “cresting” is hard to
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_eta_approximation_from_cosine_graph_.wly:47:9
                </span>
              </span>
              {" "}
              {" "}
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
              local_url="./images/svg_ch4_cosine_for_eta_11_noticed.svg"
              intrinsicWidth={1240}
              intrinsicHeight={205}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                This implies that in
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_eta_approximation_from_cosine_graph_.wly:60:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\Large 11&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                units of time—or nearly so—the particle does
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_eta_approximation_from_cosine_graph_.wly:64:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\Large 7&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                quarter-turns,
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_eta_approximation_from_cosine_graph_.wly:68:9
                </span>
              </span>
              {" "}
              {" "}
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
              local_url="./images/svg_ch4_cosine_for_eta_counting_quarter_turns.svg"
              intrinsicWidth={1240}
              intrinsicHeight={205}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Thus
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_eta_approximation_from_cosine_graph_.wly:76:9
                </span>
              </span>
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                \Large &#123;4\over 7&#125; \cdot 11 = &#123;44 \over 7&#125; = 6.\overline&#123;285714&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </Boxed>
            <OuterP>
              <span class="t-3003-c">
                must be an approximation to the circumference of a
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_eta_approximation_from_cosine_graph_.wly:103:9
                </span>
              </span>
              {" "}
              {" "}
              unit circle, by the graph.
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
                  This approximation ends up being about half-a-part-in-a-thousand
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_eta_approximation_from_cosine_graph_.wly:136:13
                  </span>
                </span>
                {" "}
                {" "}
                too large, or
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                0.040249943...\%
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  too large (or just: {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_eta_approximation_from_cosine_graph_.wly:143:13
                  </span>
                </span>
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
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  The “core” approximation is actually that of
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_eta_approximation_from_cosine_graph_.wly:150:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large &#123;11\over 7&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  for one-quarter the circumference of a unit circle; from
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_eta_approximation_from_cosine_graph_.wly:156:13
                  </span>
                </span>
                {" "}
                {" "}
                which,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large &#123;22\over 7&#125;, &#123;33\over 7&#125;,
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  and
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_eta_approximation_from_cosine_graph_.wly:166:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large &#123;44\over 7&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  are derived approximations for one-half, three-quarters,
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_eta_approximation_from_cosine_graph_.wly:171:13
                  </span>
                </span>
                {" "}
                {" "}
                and the full circumference of the unit circle!
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={5}>
          <ExerciseStatement id="_80_h.a.i_">
            <OuterP>
              <b>
                Exercise 5.
              </b>
              {" "}
              {" "}
              <InChapterLink
                href="#_74_h.a.i_"
                class="in-chapter-link"
              >
                Example 1
              </InChapterLink>
              <span class="t-3003-c">
                {" "} exhibits a function {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:3:5
                </span>
              </span>
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
                <span class="t-3003-c">
                  Consider deferring this to a later chapter on following a differential rule numerically. The solution currently introduces time stepping as well as a new particle configuration. It could become several small tasks: draw velocities, take one step, compare step sizes, predict expansion or contraction, and relate the coordinate functions to repeated differentiation. Distinguish constructing a fifth-derivative cycle from establishing that its period is not smaller.
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:8:9
                  </span>
                </span>
              </p>
            </CodexSuggestions>
            <Pause />
            <MathBlock>
              $$
              f' \ne f
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:14:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f'' \ne f
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:20:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f''' \ne f
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                but
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:26:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f^&#123;(4)&#125; = f
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                surprise, surprise! Can you do the same with
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:32:5
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
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
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:40:5
                </span>
              </span>
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
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...?
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:46:5
                </span>
              </span>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                We can naïvely try to imitiate how the
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:50:9
                </span>
              </span>
              {" "}
              {" "}
              curves of {" "}
              <OutChapterLink
                href="/article/chapter7#_107_h.a.i_"
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
              local_url="./images/svg_ch4_5_euler_position_vectors.svg"
              intrinsicWidth={480}
              intrinsicHeight={380}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The idea would be that the
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:60:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                velocity vector
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:62:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of the red particle is the
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:64:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                position vector
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:66:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of the blue particle,
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:68:9
                </span>
              </span>
              {" "}
              {" "}
              likewise for the blue and yellow particles,
              and so on. (Position vectors shown above.)
              For example, at the instant above, the
              velocity vectors would be as follows:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/uq4U.svg"
              local_url="./images/svg_ch4_5_euler_velocity_vectors.svg"
              intrinsicWidth={480}
              intrinsicHeight={440}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The velocity vectors are
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:77:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplay>
              <span class="t-3003-c">
                NOT
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:79:11
                </span>
              </span>
            </CentralDisplay>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                tangent to the unit circle, and so the
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:81:9
                </span>
              </span>
              {" "}
              {" "}
              particles will leave the circle!
              (But that's OK.) In one-tenth a unit of time, the particles would travel approximately one-tenth their velocity vectors, reaching approximately these positions:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/ZQgt.svg"
              local_url="./images/svg_ch4_5_euler_after_1_10th.svg"
              intrinsicWidth={540}
              intrinsicHeight={515}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                In the next one-tenth unit of time we
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:88:9
                </span>
              </span>
              {" "}
              {" "}
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
              local_url="./images/svg_ch4_5_euler_after_2_10th.svg"
              intrinsicWidth={560}
              intrinsicHeight={405}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Applying the same process for {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:98:9
                </span>
              </span>
              <Math>
                $8$
              </Math>
              {" "} more
              steps:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/hg3g.svg"
              local_url="./images/svg_ch4_5_euler_after_10_10th.svg"
              intrinsicWidth={560}
              intrinsicHeight={435}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                To be clear, in the above figure, the
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:104:9
                </span>
              </span>
              {" "}
              {" "}
              position of the red particle at, say, the
              fifth step...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/GKbB.svg"
              local_url="./images/svg_ch4_5_euler_after_5_10th.svg"
              intrinsicWidth={560}
              intrinsicHeight={435}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...is obtained by starting from the red
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:111:9
                </span>
              </span>
              {" "}
              {" "}
              particle's position at the fourth step...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/jG_S.svg"
              local_url="./images/svg_ch4_5_euler_after_4_10th.svg"
              intrinsicWidth={560}
              intrinsicHeight={435}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and adding one-tenth of the approximation
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:117:9
                </span>
              </span>
              {" "}
              {" "}
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
              local_url="./images/svg_ch4_5_euler_after_4_10th_b.svg"
              intrinsicWidth={560}
              intrinsicHeight={435}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and we do the same for each particle,
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:126:9
                </span>
              </span>
              {" "}
              {" "}
              to advance to the next step.
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                If we stop {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:129:9
                </span>
              </span>
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
              local_url="./images/svg_ch4_5_euler_after_100_100th_blur.svg"
              intrinsicWidth={560}
              intrinsicHeight={395}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                To visualize this finer approximation, we draw the particles as points. In the following
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:138:9
                </span>
              </span>
              {" "}
              {" "}
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
              local_url="./images/svg_ch4_5_euler_after_100_100th_points.svg"
              intrinsicWidth={560}
              intrinsicHeight={395}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Zooming in a bit (or else we still can't
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:148:9
                </span>
              </span>
              {" "}
              {" "}
              see anything):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/IUP8.svg"
              local_url="./images/svg_ch4_5_euler_after_100_100th_zoomed.svg"
              intrinsicWidth={560}
              intrinsicHeight={395}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                In any case, even the {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:154:9
                </span>
              </span>
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
                local_url="./images/svg_ch4_5_euler_spiral_figure.svg"
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
              <span class="t-3003-c">
                In any case [take two] the point is that
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:174:9
                </span>
              </span>
              {" "}
              {" "}
              whether or not you are one of the wizards,
              you can
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                guess
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:178:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                the existence of these five paths—sort
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:180:9
                </span>
              </span>
              {" "}
              {" "}
              of “feel” that they exist! (This is a
              moral consolation prize, at least.)
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                We can also convert the paths into a
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:184:9
                </span>
              </span>
              {" "}
              {" "}
              function
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                that satisfies the problem requirements.
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:191:9
                </span>
              </span>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                For example let {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:193:9
                </span>
              </span>
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
              <span class="t-3003-c">
                the rate of change of the
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:198:11
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                <span class="t-3003-c">
                  -coordinate
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:199:12
                  </span>
                </span>
              </NoBreak>
              <span class="t-3003-c">
                {" "} of the red particle is the
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:199:12
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                <span class="t-3003-c">
                  -coordinate
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:200:12
                  </span>
                </span>
              </NoBreak>
              <span class="t-3003-c">
                {" "} of the blue particle
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:200:12
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <Math>
                $f'$
              </Math>
              <span class="t-3003-c">
                {" "} is the {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:202:13
                </span>
              </span>
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
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  If you graph the {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:207:13
                  </span>
                </span>
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
                local_url="./images/svg_ch4_5_euler_final_graph.svg"
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
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  There is nothing special about
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:219:13
                  </span>
                </span>
                {" "}
                {" "}
                {" "}{" "}
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
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  The {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:226:13
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
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  Adding to the previous observation, we don't
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:234:13
                  </span>
                </span>
                {" "}
                {" "}
                {" "}{" "}
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
                local_url="./images/svg_ch4_5_euler_one_dimensional.svg"
                intrinsicWidth={450}
                intrinsicHeight={70}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...(the initial positions really don't
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:247:13
                  </span>
                </span>
                {" "}
                {" "}
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
                <span class="t-3003-c">
                  velocity
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:254:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  (now {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:256:13
                  </span>
                </span>
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
                <span class="t-3003-c">
                  position
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:259:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  (now {" "}
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:261:13
                  </span>
                </span>
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
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  In fact, our symmetric two-dimensional
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:276:13
                  </span>
                </span>
                {" "}
                {" "}
                solution is an instance in which you can say
                that
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  the whole is simpler than the parts
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:280:15
                  </span>
                </span>
                <ImageLeft
                  src="/build-img/svgo-svg/_DUb.svg"
                  offsetX="-5rem"
                  local_url="./images/svg_ch4_5_euler_hearts_left.svg"
                  intrinsicWidth={500}
                  intrinsicHeight={500}
                />
                <ImageRight
                  src="/build-img/svgo-svg/7DF3.svg"
                  offsetX="-5rem"
                  local_url="./images/svg_ch4_5_euler_hearts_right.svg"
                  intrinsicWidth={500}
                  intrinsicHeight={500}
                />
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  in that you would never spot the symmetry
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_f_equals_f_5_.wly:290:13
                  </span>
                </span>
                {" "}
                {" "}
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
          <ExerciseStatement id="_81_h.a.i_">
            <OuterP>
              <b>
                Exercise 6.
              </b>
            </OuterP>
            <CodexSuggestions>
              <p>
                <span class="t-3003-c">
                  Keep as a later excursion after the five-particle construction, rather than a requirement for finishing this chapter. The near-tangential velocity arrows and slow expansion are the payoff. Consider first asking which particle should supply the velocity to make the arrow nearly tangent, then asking how repeated differentiation walks through the labels.
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:6:9
                  </span>
                </span>
              </p>
            </CodexSuggestions>
            <OuterP>
              <span class="t-3003-c">
                If we seek a function {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:8:5
                </span>
              </span>
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
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:15:5
                </span>
              </span>
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
              <span class="t-3003-c">
                Take {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:23:9
                </span>
              </span>
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
              local_url="./images/svg_ch4_17_position_vectors.svg"
              intrinsicWidth={480}
              intrinsicHeight={380}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Set the velocity of particle
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:30:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\Large 1&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                equal to the position of particle
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:34:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\Large 5&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and keep going by this pattern, making the
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:38:9
                </span>
              </span>
              {" "}
              {" "}
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
              local_url="./images/svg_ch4_17_velocity_vector_1.svg"
              intrinsicWidth={480}
              intrinsicHeight={380}
            >
              <ImageRight
                src="/build-img/svgo-svg/Bvhk.svg"
                offsetX="3rem"
                local_url="./images/svg_ch4_17_velocity_vector_1_cloud.svg"
                intrinsicWidth={500}
                intrinsicHeight={388}
              />
            </Image>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Maintaining this relationship at all times, and given that the velocity
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:51:9
                </span>
              </span>
              {" "}
              {" "}
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
                <span class="t-3003-c">
                  Note 1.
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:70:10
                  </span>
                </span>
              </i>
              {" "}
              In case you're curious, the actual spiral paths
              of the particles look like so:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/kytU.svg"
              local_url="./images/svg_ch4_17_paths.svg"
              intrinsicWidth={480}
              intrinsicHeight={380}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and if you take the {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:77:9
                </span>
              </span>
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
              local_url="./images/svg_ch4_17_actual_functions.svg"
              intrinsicWidth={900}
              intrinsicHeight="408.207"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                For example, the derivative of curve {" "}
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:89:9
                </span>
              </span>
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
              local_url="./images/svg_ch4_17_actual_functions_with_highlights.svg"
              intrinsicWidth={900}
              intrinsicHeight="408.207"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and taking sixteen more derivatives
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:102:9
                </span>
              </span>
              {" "}
              {" "}
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
                <span class="t-3003-c">
                  Note 2.
                  <span class="t-3003">
                    ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:135:10
                  </span>
                </span>
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
              local_url="./images/svg_ch4_17_other_start.svg"
              intrinsicWidth={480}
              intrinsicHeight={390}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                In this figure:
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:151:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <List style="padding-left:1.2em;gap:0.4em;">
              <Item>
                <p>
                  <span class="t-3003-c">
                    the red arrows indicate which particle
                    <span class="t-3003">
                      ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:156:13
                    </span>
                  </span>
                  {" "}
                  {" "}
                  takes its velocity from the position
                  of which other particle; for example,
                  particle 1 has velocity equal to the
                  position of particle 5
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    particles that occupy the same starting
                    <span class="t-3003">
                      ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:162:13
                    </span>
                  </span>
                  {" "}
                  {" "}
                  position on the unit circle appear
                  stacked together, as a representation
                  device; for example, particle 2 has the
                  same starting position as particle 5
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (Note that the red arrows have to form
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:168:9
                </span>
              </span>
              {" "}
              {" "}
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
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                but this is the case: the red arrows only
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:176:9
                </span>
              </span>
              {" "}
              {" "}
              “close the loop” after going through all
              17 particles!)
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                In this starting configuration, all
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:180:9
                </span>
              </span>
              {" "}
              {" "}
              velocity vectors are exactly tangent to
              the unit circle
            </OuterP>
            <Pause />
            <CentralDisplay>
              <span class="t-3003-c">
                EXCEPT
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:184:11
                </span>
              </span>
            </CentralDisplay>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for particle 14, whose velocity vector,
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:186:9
                </span>
              </span>
              {" "}
              {" "}
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
              local_url="./images/svg_ch4_17_other_start_paths.svg"
              intrinsicWidth={880}
              intrinsicHeight={880}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The particles shoot of to infinity in short
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:200:9
                </span>
              </span>
              {" "}
              {" "}
              order—the solution is much worse—for fun we
              have also highlighted two particle trajectories
              in this figure:
            </OuterP>
            <Pause />
            <List style="padding-left:1.4em;gap:0.4em;">
              <Item>
                <p>
                  <span class="t-3003-c">
                    in {" "}
                    <span class="t-3003">
                      ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:208:13
                    </span>
                  </span>
                  <span style="border:1px solid blue">
                    <span class="t-3003-c">
                      blue
                      <span class="t-3003">
                        ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:211:17
                      </span>
                    </span>
                  </span>
                  <span class="t-3003-c">
                    , particle 1, the last particle
                    <span class="t-3003">
                      ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:212:13
                    </span>
                  </span>
                  {" "}
                  {" "}
                  to be (noticeably*) “peeled off” from
                  the circle (*all particles are
                  instantaneously peeled off from the
                  circle to {" "}
                  <i>
                    <span class="t-3003-c">
                      some
                      <span class="t-3003">
                        ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:216:24
                      </span>
                    </span>
                  </i>
                  <span class="t-3003-c">
                    {" "} degree, as one
                    <span class="t-3003">
                      ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:216:29
                    </span>
                  </span>
                  {" "}
                  {" "}
                  particle's slight deviation affects
                  the next, that affects the next, etc)
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    in {" "}
                    <span class="t-3003">
                      ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:220:13
                    </span>
                  </span>
                  <span style="border:1px solid red">
                    <span class="t-3003-c">
                      red
                      <span class="t-3003">
                        ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:223:17
                      </span>
                    </span>
                  </span>
                  <span class="t-3003-c">
                    , particle 14, the {" "}
                    <span class="t-3003">
                      ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:224:13
                    </span>
                  </span>
                  <i>
                    <span class="t-3003-c">
                      first
                      <span class="t-3003">
                        ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:224:33
                      </span>
                    </span>
                  </i>
                  <span class="t-3003-c">
                    {" "} particle
                    <span class="t-3003">
                      ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:224:39
                    </span>
                  </span>
                  {" "}
                  {" "}
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
              <span class="t-3003-c">
                (The point is: if your velocity vector
                <span class="t-3003">
                  ./src/content/ch4a_motion/motion^exercises/_f_equals_f_17_.wly:231:9
                </span>
              </span>
              {" "}
              {" "}
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