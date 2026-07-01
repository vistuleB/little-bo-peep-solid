import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Boxed  from "~/components/Boxed";
import BoxedText  from "~/components/BoxedText";
import { CentralDisplayItalic, CentralDisplay }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Grid  from "~/components/Grid";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import InlineImage  from "~/components/InlineImage";
import { Item }  from "~/components/List";
import { MathBlock, Math }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageRight, ImageLeft }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { StarDivider }  from "~/components/StarDivider";
import { TildeDivider }  from "~/components/TildeDivider";
import { InTextWarning, SolutionNote, NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __AppendixA__() {
  return (
    <Article
      prevPage="/article/chapter6"
      nextPage=""
      pageNecessaryMargin={800}
      maxElementWidth={500}
      id="_215_h.a.i_"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            from chapter 3
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Appendix A:">
        Cutting Room Floor Exercises
      </ArticleTitle>
      <Section id="section-1">
        <OuterP>
          <b>
            From Chapter 3
          </b>
        </OuterP>
        <Pause />
        <Exercises
          chapter="&gt;&gt;functions"
          mode="switcher-only"
        >
          <Exercise number={1}>
            <ExerciseStatement id="_166_h.a.i_">
              <OuterP>
                <b>
                  Exercise 1.
                </b>
                {" "}
                True or false {" "}
                <NoBreak>
                  (
                  <Math>
                    $f$
                  </Math>
                </NoBreak>
                {" "} and {" "}
                <Math>
                  $g$
                </Math>
                {" "} are functions):
              </OuterP>
              <Pause />
              <Grid
                cols={2}
                mobileCols={1}
                centerOnOverflow={true}
                placeItems="start"
                withPadding={false}
                columnFirst={true}
              >
                <Item>
                  i. {" "}
                  <Math>
                    $f \circ g = (x \ra f(g(x)))$
                  </Math>
                </Item>
                <Item>
                  ii. {" "}
                  <Math>
                    $g \circ f = (x \ra f(g(x)))$
                  </Math>
                </Item>
                <Item>
                  iii. {" "}
                  <Math>
                    $f \circ g = (x \ra g(f(x)))$
                  </Math>
                </Item>
                <Item>
                  iv. {" "}
                  <Math>
                    $g \circ f = (x \ra g(f(x)))$
                  </Math>
                </Item>
              </Grid>
            </ExerciseStatement>
            <Solution>
              <OuterP>
                The true statements are i, iv, because
                {" "}
                <Math>
                  $f \circ g$
                </Math>
                {" "} is the function that maps an
                input {" "}
                <Math>
                  $x$
                </Math>
                {" "} to {" "}
                <NoBreak>
                  <Math>
                    $f(g(x))$
                  </Math>
                  ,
                </NoBreak>
                {" "} and symmetrically
                for {" "}
                <NoBreak>
                  <Math>
                    $g \circ f$
                  </Math>
                  .
                </NoBreak>
              </OuterP>
            </Solution>
          </Exercise>
        </Exercises>
        <Pause />
        <StarDivider />
        <Pause />
        <OuterP>
          <b>
            From Chapter 4
          </b>
        </OuterP>
        <Pause />
        <Exercises
          chapter="&gt;&gt;derivatives"
          mode="switcher-only"
        >
          <Exercise number={1}>
            <ExerciseStatement id="_167_h.a.i_">
              <OuterP>
                <b>
                  Exercise 1.
                </b>
                {" "}
                Given these graphs...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/-Gn0.svg" />
              <Pause />
              <OuterP>
                ...what can you say about {" "}
                <NoBreak>
                  <Math>
                    $g'(x)$
                  </Math>
                  ?
                </NoBreak>
                {" "}
                (Produce the best sketch of {" "}
                <Math>
                  $g'(x)$
                </Math>
                {" "} that
                you can, taking into account all the
                information above.) (Don't get us wrong:
                You don't {" "}
                <i>
                  need
                </i>
                {" "} the second derivative
                to sketch the first derivative, but if
                you're a human and not a machine, it can
                help!)
              </OuterP>
            </ExerciseStatement>
            <Solution>
              <OuterP>
                To start with, the slope of {" "}
                <Math>
                  $g$
                </Math>
                {" "} seems to be
                about {" "}
                <NoBreak>
                  <Math>
                    $-1.5$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $0$
                </Math>
                {" "} and (a bit greater than) {" "}
                <Math>
                  $2$
                </Math>
                {" "}
                at {" "}
                <NoBreak>
                  <Math>
                    $x = -2$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $x = 0$
                </Math>
                {" "} and {" "}
                <Math>
                  $x = 2$
                </Math>
                {" "} respectively:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/Vtlo.svg" />
              <Pause />
              <OuterP>
                This already gives us three points from which
                to interpolate a basic approximation to the graph
                {" "}
                <NoBreak>
                  <Math>
                    $y = g'(x)$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/jVL0.svg" />
              <Pause />
              <OuterP>
                But the graph of {" "}
                <Math>
                  $g''(x)$
                </Math>
                {" "} indicates more,
                namely that {" "}
                <Math>
                  $g'(x)$
                </Math>
                {" "} has a slope that rises
                from {" "}
                <Math>
                  $\approx 0.2$
                </Math>
                {" "} near the left edge of
                the graph up to {" "}
                <Math>
                  $1.3$
                </Math>
                {" "} at {" "}
                <NoBreak>
                  <Math>
                    $x = 0.5$
                  </Math>
                  ,
                </NoBreak>
                {" "} before
                falling again to {" "}
                <Math>
                  $0.6$
                </Math>
                {" "} past {" "}
                <NoBreak>
                  <Math>
                    $x = 2$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/l4WF.svg" />
              <Pause />
              <OuterP>
                As a second step, we thus “bend into shape”
                our previous sketch to produce these slopes...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/zXu5.svg" />
              <Pause />
              <OuterP>
                ...achieving our final answer.
              </OuterP>
              <Pause />
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "} For reference, the actual
                derivative looks like so:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/LvNA.svg" />
            </Solution>
          </Exercise>
          <Exercise number={2}>
            <ExerciseStatement id="_168_h.a.i_">
              <OuterP>
                <b>
                  Exercise 2.
                </b>
                {" "}
                Given these graphs...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/45I8.svg" />
              <Pause />
              <OuterP>
                ...sketch {" "}
                <NoBreak>
                  <Math>
                    $y = h'(x)$
                  </Math>
                  ,
                </NoBreak>
                {" "} analogously to
                {" "}
                <InChapterLink
                  href="/article/appendixA#_167_h.a.i_"
                  class="in-chapter-link"
                >
                  Exercise 1
                </InChapterLink>
                &#8288;.
              </OuterP>
            </ExerciseStatement>
            <Solution>
              <OuterP>
                Firstly, the graph of {" "}
                <Math>
                  $h(x)$
                </Math>
                {" "} seems to have
                slope {" "}
                <Math>
                  $0$
                </Math>
                {" "} around {" "}
                <NoBreak>
                  <Math>
                    $x = 0.6$
                  </Math>
                  ...
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/kazC.svg" />
              <Pause />
              <OuterP>
                ...which gives us one data point on the
                curve {" "}
                <Math>
                  $y = h'(x)$
                </Math>
                {" "} to start with...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/sMSm.svg" />
              <Pause />
              <OuterP>
                ...moreover, by the graph of {" "}
                <NoBreak>
                  <Math>
                    $h''(x)$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                the slope of {" "}
                <Math>
                  $h'(x)$
                </Math>
                {" "} is near {" "}
                <Math>
                  $-1/3$
                </Math>
                {" "} on an
                interval that is approximately (say)
                {" "}
                <NoBreak>
                  <Math>
                    $[-0.85,0.7]$
                  </Math>
                  ....
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/hXW9.svg" />
              <Pause />
              <OuterP>
                ...so, as a second step, we can extend
                the graph of {" "}
                <Math>
                  $h'(x)$
                </Math>
                {" "} by a segment of slope
                {" "}
                <Math>
                  $-1/3$
                </Math>
                {" "} on this interval:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/EfV0.svg">
                <ImageLeft src="/build-img/svgo-svg/w-6f.svg" />
              </Image>
              <Pause />
              <OuterP>
                (To achieve a passable slope of {" "}
                <Math>
                  $-1/3$
                </Math>
                {" "} we
                modeled ourselves on a nearby grid segment.)
                Next, {" "}
                <Math>
                  $h(x)$
                </Math>
                {" "} has slope {" "}
                <Math>
                  $\approx 1.2$
                </Math>
                {" "} at
                {" "}
                <NoBreak>
                  <Math>
                    $x = -2$
                  </Math>
                  ,
                </NoBreak>
                {" "} and slope {" "}
                <Math>
                  $\approx -0.9$
                </Math>
                {" "} (?) at
                {" "}
                <NoBreak>
                  <Math>
                    $x = 2$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/7Oh-.svg" />
              <Pause />
              <OuterP>
                This gives us two more points on the graph
                {" "}
                <NoBreak>
                  <Math>
                    $y = h'(x)$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/AlvD.svg" />
              <Pause />
              <OuterP>
                Then, because the second derivative has
                value {" "}
                <Math>
                  $\approx -1/3$
                </Math>
                {" "} for {" "}
                <Math>
                  $x \leq -1.6$
                </Math>
                {" "}
                (about) and for {" "}
                <Math>
                  $x \geq 1.5$
                </Math>
                {" "} (about)...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/-wEN.svg" />
              <Pause />
              <OuterP>
                ...we extend these two new data points by
                segments of slope {" "}
                <NoBreak>
                  <Math>
                    $-1/3$
                  </Math>
                  ...
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/xIBg.svg" />
              <Pause />
              <OuterP>
                ...on the relevant intervals. (I.e., for
                {" "}
                <Math>
                  $x \leq -1.6$
                </Math>
                {" "} and for {" "}
                <NoBreak>
                  <Math>
                    $x \geq 1.5$
                  </Math>
                  .)
                </NoBreak>
                {" "} The
                last step is to join the existing segments
                by some kind of “connector curves” of
                yet-to-be-determined shape:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/4fl7.svg" />
              <Pause />
              <OuterP>
                Since {" "}
                <Math>
                  $h''(x)$
                </Math>
                {" "} shows that the two
                connectors have slopes of about {" "}
                <Math>
                  $-1/3$
                </Math>
                {" "}
                at their edges and slopes of about {" "}
                <Math>
                  $-1.4$
                </Math>
                {" "}
                and {" "}
                <Math>
                  $-1.6$
                </Math>
                {" "} (respectively) near their
                middles...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/JUoK.svg" />
              <Pause />
              <OuterP>
                ...our final answer, given by the
                following sketch, is obtained by
                “bending into shape” the connector curves...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/ZF4t.svg" />
              <Pause />
              <OuterP>
                ...to give them a slope of {" "}
                <Math>
                  $-1/3$
                </Math>
                {" "} at
                their endpoints, and slopes of {" "}
                <NoBreak>
                  <Math>
                    $-1.4$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                {" "}
                <NoBreak>
                  <Math>
                    $-1.6$
                  </Math>
                  ,
                </NoBreak>
                {" "} respectively, in their middles.
              </OuterP>
              <Pause />
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                Here is the actual graph of {" "}
                <NoBreak>
                  <Math>
                    $h'$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/dkg9.svg" />
            </Solution>
          </Exercise>
          <Exercise number={3}>
            <ExerciseStatement id="_169_h.a.i_">
              <OuterP>
                <b>
                  Exercise 3.
                </b>
                {" "}
                The graphs below are the horizontal and
                vertical velocities...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/hGqu.svg">
                <ImageLeft
                  offset_y="1em"
                  src="/build-img/svgo-svg/nwVf.svg"
                />
              </Image>
              <Pause />
              <Image src="/build-img/svgo-svg/MGlT.svg" />
              <Pause />
              <OuterP>
                ...of PACMAN, with unit of
                distance of one “cell”, or “c”—the distance
                between two food pellets—and units of velocity
                of “cells per second”, or “c/s”—also,
                {" "}
                <NoBreak>
                  <Math>
                    $x$
                  </Math>
                  -coordinates
                </NoBreak>
                {" "} increase towards the right,
                and {" "}
                <NoBreak>
                  <Math>
                    $y$
                  </Math>
                  -coordinates
                </NoBreak>
                {" "} increase towards the top:
              </OuterP>
              <Pause />
              <Image
                width="860px"
                src="/build-img/svgo-svg/m7Ll.svg"
              />
              <Pause />
              <OuterP>
                Where is Pacman at {" "}
                <NoBreak>
                  <Math>
                    $t = 49$
                  </Math>
                  s?
                </NoBreak>
                {" "} (Note: Pacman
                is NOT assumed to be anywhere in particular at
                {" "}
                <NoBreak>
                  <Math>
                    $t = 40$
                  </Math>
                  s—you
                </NoBreak>
                {" "} have to figure that out from the
                data!)
              </OuterP>
            </ExerciseStatement>
            <Solution>
              <OuterP>
                Let's start by examining Pacman's first six displacements,
                appearing here in blue (positive displacements, going to the right
                or up) and red (negative displacements, going to the left or down):
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/IBuM.svg" />
              <Pause />
              <Image src="/build-img/svgo-svg/mMn6.svg" />
              <Pause />
              <OuterP>
                We can estimate the duration of each
                displacement to the closest 10th of a second
                (mistakes of estimation can be made, we shall recover):
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/u4My.svg" />
              <Pause />
              <Image src="/build-img/svgo-svg/rH2b.svg" />
              <Pause />
              <OuterP>
                We can also estimate the velocity to be
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \pm 6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                when it is nonzero (for displacement {" "}
                <InlineImage
                  class="ch4_pacman1_inline_number_pellet"
                  src="/build-img/svgo-svg/-5FM.svg"
                />
                {" "} the velocity might seem more like {" "}
                <Math>
                  $-6.8\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
                </Math>
                {" "}
                at the least, but we've already made more
                significant errors while eyeballing the durations, so
                nevermind). Using
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (\te&#123;velocity&#125;) \times (\te&#123;amount of time&#125;) = (\te&#123;displacement&#125;)
                $$
                <ImageRight
                  src="/build-img/svgo-svg/Uk9d.svg"
                  compensate_offset_x_for_large_text_columns={true}
                />
              </MathBlock>
              <Pause />
              <OuterP>
                then gives us the following estimates for the {" "}
                <del>
                  amount of travel
                </del>
                {" "} {" "}
                <del>
                  during the
                </del>
                {" "} six displacements:
              </OuterP>
              <Pause />
              <CentralDisplay>
                <p>
                  <InlineImage
                    class="ch4_pacman1_inline_number_pellet"
                    src="/build-img/svgo-svg/nS4I.svg"
                    style="margin-right:1em"
                  />
                  <Math>
                    $-6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\,\times\,\,0.5\te&#123;s&#125;\,\,=\,\,-3.375\,\te&#123;cells&#125;$
                  </Math>
                </p>
                <ImageRight src="/build-img/svgo-svg/baQ_.svg" />
              </CentralDisplay>
              <Pause />
              <CentralDisplay>
                <p>
                  <InlineImage
                    class="ch4_pacman1_inline_number_pellet"
                    src="/build-img/svgo-svg/42_Z.svg"
                    style="margin-right:1em"
                  />
                  <Math>
                    $-6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\,\times\,\,0.4\te&#123;s&#125;\,\,=\,\,-2.7\,\te&#123;cells&#125;$
                  </Math>
                </p>
              </CentralDisplay>
              <Pause />
              <CentralDisplay>
                <p>
                  <InlineImage
                    class="ch4_pacman1_inline_number_pellet"
                    src="/build-img/svgo-svg/6ZPh.svg"
                    style="margin-right:1em"
                  />
                  <Math>
                    $6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\,\times\,\,0.9\te&#123;s&#125;\,\,=\,\,6.075\,\te&#123;cells&#125;$
                  </Math>
                </p>
              </CentralDisplay>
              <Pause />
              <CentralDisplay>
                <p>
                  <InlineImage
                    class="ch4_pacman1_inline_number_pellet"
                    src="/build-img/svgo-svg/6IhU.svg"
                    style="margin-right:1em"
                  />
                  <Math>
                    $6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\,\times\,\,0.4\te&#123;s&#125;\,\,=\,\,2.7\,\te&#123;cells&#125;$
                  </Math>
                </p>
              </CentralDisplay>
              <Pause />
              <CentralDisplay>
                <p>
                  <InlineImage
                    class="ch4_pacman1_inline_number_pellet"
                    src="/build-img/svgo-svg/-5FM.svg"
                    style="margin-right:1em"
                  />
                  <Math>
                    $-6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\,\times\,\,0.4\te&#123;s&#125;\,\,=\,\,-2.7\,\te&#123;cells&#125;$
                  </Math>
                </p>
              </CentralDisplay>
              <Pause />
              <CentralDisplay>
                <p>
                  <InlineImage
                    class="ch4_pacman1_inline_number_pellet"
                    src="/build-img/svgo-svg/DMGg.svg"
                    style="margin-right:1em"
                  />
                  <Math>
                    $6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\,\times\,\,0.9\te&#123;s&#125;\,\,=\,\,6.075\,\te&#123;cells&#125;$
                  </Math>
                </p>
              </CentralDisplay>
              <Pause />
              <OuterP>
                Given the horizontal/vertical alternation
                of displacements, this would nominally
                imply the following set of initial motions:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/QFoq.svg" />
              <Pause />
              <OuterP>
                But these are approximate numbers and the
                true values must be integers, except for {" "}
                <InlineImage
                  class="ch4_pacman1_inline_number_pellet"
                  src="/build-img/svgo-svg/nS4I.svg"
                />
                . (Because we don't know where Pacman started
                out. For {" "}
                <InlineImage
                  class="ch4_pacman1_inline_number_pellet"
                  src="/build-img/svgo-svg/DMGg.svg"
                />
                {" "} the next displacement, if you look back at
                the graphs, is horizontal, so yes.) In fact,
                if you look at the maze,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                3
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                cells is the smallest amount that Pacman
                can travel vertically when changing {" "}
                <NoBreak>
                  <Math>
                    $y$
                  </Math>
                  -coordinate,
                </NoBreak>
                {" "}
                between two moments of horizontal motion.
                The next smallest possible amounts are
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                4
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                6
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                7
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                cells, with {" "}
                <Math>
                  $5$
                </Math>
                {" "} not being a possibility.
                In the horizontal direction,
                the smallest amounts are
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                3, 6, \te&#123; and &#125; 9
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                (and {" "}
                <Math>
                  $12$
                </Math>
                {" "} and ...) which is even more restrictive.
                Now if each of our duration
                measurements carries an error of no more than
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \pm&#123;&#125;0.2\te&#123;s&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                each computed displacement is at most
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\times\,\pm&#123;&#125;0.2\te&#123;s&#125;\,=\,\pm1.35\te&#123;c&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                from the truth, give or take the small
                difference between {" "}
                <Math>
                  $6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
                </Math>
                {" "}
                and the actual velocity. So
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                -2.7\te&#123;c&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                must be either
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                -3\te&#123;c&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                or
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                -4\te&#123;c&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                these being the only two posssible integer
                vertical displacements within {" "}
                <NoBreak>
                  <Math>
                    $\pm1.35$
                  </Math>
                  c
                </NoBreak>
                {" "} of {" "}
                <NoBreak>
                  <Math>
                    $-2.7$
                  </Math>
                  c.
                </NoBreak>
                {" "}
                Then, applying similar logic to each
                measurement, the initial motions must be:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/D-ST.svg" />
              <Pause />
              <OuterP>
                The maze fits these constraints in only two places
                (note that {" "}
                <InlineImage
                  class="ch4_pacman1_inline_number_pellet"
                  src="/build-img/svgo-svg/42_Z.svg"
                />
                {" "} and {" "}
                <InlineImage
                  class="ch4_pacman1_inline_number_pellet"
                  src="/build-img/svgo-svg/6IhU.svg"
                />
                {" "} equal {" "}
                <Math>
                  $-3\te&#123;c&#125;$
                </Math>
                {" "} and {" "}
                <NoBreak>
                  <Math>
                    $3\te&#123;c&#125;$
                  </Math>
                  ,
                </NoBreak>
                {" "} in each
                case):
              </OuterP>
              <Pause />
              <Image
                width="860px"
                src="/build-img/svgo-svg/tzR7.svg"
              />
              <Pause />
              <OuterP>
                Looking into the future,
                the next three displacements are
                right/down/right and last
                {" "}
                <NoBreak>
                  ~
                  <Math>
                    $3.2$
                  </Math>
                  s/~
                </NoBreak>
                <NoBreak>
                  <Math>
                    $0.4$
                  </Math>
                  s/~
                </NoBreak>
                <NoBreak>
                  <Math>
                    $1.3$
                  </Math>
                  s
                </NoBreak>
                {" "}
                respectively:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/Toj1.svg" />
              <Pause />
              <Image src="/build-img/svgo-svg/MAtZ.svg" />
              <Pause />
              <OuterP>
                (Nb: Imagine translating these intervals to the left or right until
                the start of the interval is at an integer value: this is a good
                way to estimate the length.)
              </OuterP>
              <OuterP class="indent-10">
                Because displacement {" "}
                <InlineImage
                  class="ch4_pacman1_inline_number_pellet"
                  src="/build-img/svgo-svg/g6cf.svg"
                />
                {" "} is horizontal to the right the only possible
                remaining solution is the right-hand one,
                or else Pacman would collide with the ghost cage,
                with displacement {" "}
                <InlineImage
                  class="ch4_pacman1_inline_number_pellet"
                  src="/build-img/svgo-svg/DMGg.svg"
                />
                {" "} equal to 6c not 7c, or else Pacman would
                collide with a wall:
              </OuterP>
              <Pause />
              <Image
                width="860px"
                src="/build-img/svgo-svg/s8YV.svg"
              />
              <Pause />
              <OuterP>
                Since
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\times\,3.2\te&#123;s&#125;\,=\,21.6\te&#123;c&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                it seems that displacement {" "}
                <InlineImage
                  class="ch4_pacman1_inline_number_pellet"
                  src="/build-img/svgo-svg/g6cf.svg"
                />
                {" "} brings Pacman all the way around the maze to
                the left edge of the ghost cage, like so...
              </OuterP>
              <Pause />
              <Image
                width="860px"
                src="/build-img/svgo-svg/0Agm.svg"
              />
              <Pause />
              <OuterP>
                ...though it is hard to measure that distance;
                but this is confirmed by the fact that the next
                two displacements are “down by {" "}
                <Math>
                  $3$
                </Math>
                {" "} and to the right”;
                specifically, since
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                -6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\times\,0.4\te&#123;s&#125;\,=\,-2.7\te&#123;c&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                displacement {" "}
                <InlineImage
                  class="ch4_pacman1_inline_number_pellet"
                  src="/build-img/svgo-svg/bLYc.svg"
                />
                {" "} must be {" "}
                <NoBreak>
                  <Math>
                    $-3$
                  </Math>
                  c
                </NoBreak>
                {" "} or {" "}
                <NoBreak>
                  <Math>
                    $-4$
                  </Math>
                  c;
                </NoBreak>
                {" "}
                must actually be {" "}
                <NoBreak>
                  <Math>
                    $-3$
                  </Math>
                  c
                </NoBreak>
                {" "} since displacement {" "}
                <InlineImage
                  class="ch4_pacman1_inline_number_pellet"
                  src="/build-img/svgo-svg/oU3r.svg"
                />
                {" "} is to the right; so, notwithstanding the exact
                length of displacement {" "}
                <InlineImage
                  class="ch4_pacman1_inline_number_pellet"
                  src="/build-img/svgo-svg/oU3r.svg"
                />
                , there is only one possibility for displacements {" "}
                <InlineImage
                  class="ch4_pacman1_inline_number_pellet"
                  src="/build-img/svgo-svg/nS4I.svg"
                />
                {" "} through {" "}
                <InlineImage
                  class="ch4_pacman1_inline_number_pellet"
                  src="/build-img/svgo-svg/bLYc.svg"
                />
                :
              </OuterP>
              <Pause />
              <Image
                width="860px"
                src="/build-img/svgo-svg/zXtI.svg"
              />
              <Pause />
              <OuterP>
                So at {" "}
                <NoBreak>
                  <Math>
                    $t = 49$
                  </Math>
                  s,
                </NoBreak>
                {" "} between displacements {" "}
                <InlineImage
                  class="ch4_pacman1_inline_number_pellet"
                  src="/build-img/svgo-svg/g6cf.svg"
                />
                {" "} and {" "}
                <InlineImage
                  class="ch4_pacman1_inline_number_pellet"
                  src="/build-img/svgo-svg/bLYc.svg"
                />
                , Pacman is immediately to the left of the ghost cage.
              </OuterP>
            </Solution>
          </Exercise>
          <Exercise number={4}>
            <ExerciseStatement id="_170_h.a.i_">
              <OuterP>
                <b>
                  Exercise 4.
                </b>
                {" "}
                Same question, but for the following maze...
              </OuterP>
              <Pause />
              <Image
                width="860px"
                src="/build-img/svgo-svg/d8B6.svg"
              />
              <Pause />
              <OuterP>
                ...and for the following velocity data, with the
                horizontal and vertical velocities
                superimposed on one graph (just a cosmetic
                change—note that green is the vertical velocity)...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/VWaV.svg" />
              <Pause />
              <OuterP>
                ...and asking for Pacman's position at {" "}
                <NoBreak>
                  <Math>
                    $t = 34$
                  </Math>
                  s.
                </NoBreak>
              </OuterP>
            </ExerciseStatement>
            <Solution>
              <OuterP>
                It seems well-advised to start by heuristically verifying
                that Pacman's speed remains
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \approx 6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                no matter the direction that Pacman is headed, as long as Pacman is
                in motion.
              </OuterP>
              <OuterP class="indent-10">
                For example, take the instant {" "}
                <NoBreak>
                  <Math>
                    $t \approx 23.7$
                  </Math>
                  s,
                </NoBreak>
                {" "} when the
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
                  -velocities
                </NoBreak>
                {" "} are
                both about (?) {" "}
                <NoBreak>
                  <Math>
                    $4.8\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/GAWM.svg" />
              <Pause />
              <OuterP>
                The velocity vector (cf. {" "}
                <a
                  href="/article/chapter4#_74_h.a.i_"
                  class="out-chapter-link"
                >
                  Exercise 12
                </a>
                &#8288;) is therefore about
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (4.8, 4.8)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                in units of {" "}
                <Math>
                  $\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
                </Math>
                {" "} at {" "}
                <NoBreak>
                  <Math>
                    $t \approx 23.7$
                  </Math>
                  s,
                </NoBreak>
                {" "}
                and the speed, being the length of the velocity
                vector (cf. {" "}
                <a
                  href="/article/chapter4#_74_h.a.i_"
                  class="out-chapter-link"
                >
                  Exercise 12
                </a>
                &#8288;), is about
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \sqrt&#123;4.8^2 + 4.8^2&#125; = \sqrt&#123;2&#125; \times 4.8 = 6.788...
                $$
                <ImageLeft
                  src="/build-img/svgo-svg/wsTF.svg"
                  compensate_offset_x_for_large_text_columns={true}
                />
              </MathBlock>
              <Pause />
              <OuterP>
                (Pythagoras!)
                in units of {" "}
                <Math>
                  $\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
                </Math>
                {" "} as well,
                and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                6.788... \approx 6.75
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                which supports, in this case, the hypothesis that
                Pacman's speed is {" "}
                <Math>
                  $\approx 6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
                </Math>
                {" "}
                regardless of the direction of travel.
              </OuterP>
              <OuterP class="indent-10">
                For more verification, take {" "}
                <NoBreak>
                  <Math>
                    $t = 26\te&#123;s&#125;$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                at which point the velocity vector is roughly
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (6.5, -2)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                cells per second:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/GBWO.svg" />
              <Pause />
              <OuterP>
                This gives a speed of
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \sqrt&#123;6.5^2 + 2^2&#125; = \sqrt&#123;46.25&#125; = 6.800...
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                cells per second, again close to 
                {" "}
                <NoBreak>
                  <Math>
                    $6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
                  </Math>
                  .
                </NoBreak>
                {" "} (!)
              </OuterP>
              <OuterP class="indent-10">
                For two more verifications take {" "}
                <Math>
                  $t = 27\te&#123;s&#125;$
                </Math>
                {" "}
                and {" "}
                <NoBreak>
                  <Math>
                    $t = 30\te&#123;s&#125;$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/3t-v.svg" />
              <Pause />
              <OuterP>
                The speed at {" "}
                <Math>
                  $t = 27\te&#123;s&#125;$
                </Math>
                {" "} is approximately
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \sqrt&#123;3^2 + 6.2^2&#125; = \sqrt&#123;47.44&#125; = 6.888
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                cells per second, while the speed at {" "}
                <Math>
                  $t = 30\te&#123;s&#125;$
                </Math>
                {" "}
                is approximately
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \sqrt&#123;5.6^2 + 3.6^2&#125; = \sqrt&#123;44.32&#125; = 6.657
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                cells per second. Both close-ish to
                {" "}
                <NoBreak>
                  <Math>
                    $6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
                  </Math>
                  !
                </NoBreak>
                {" "} For one last
                verification (truly the last, we promise)
                consider {" "}
                <NoBreak>
                  <Math>
                    $t = 31\te&#123;s&#125;$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/QXY0.svg" />
              <Pause />
              <OuterP>
                This yields a speed of
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \sqrt&#123;2.6^2 + 6.2^2&#125; = \sqrt&#123;45.2&#125; = 6.723...
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                cells per second, again close to {" "}
                <NoBreak>
                  <Math>
                    $6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
                  </Math>
                  !
                </NoBreak>
                {" "}
                (Closest so far, in fact.)
              </OuterP>
              <OuterP class="indent-10">
                We now admit, after this “heuristic verification”,
                that Pacman goes approximately the same speed
                regardless of direction, namely something in
                the vicinity of {" "}
                <NoBreak>
                  <Math>
                    $6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
                  </Math>
                  .
                </NoBreak>
              </OuterP>
              <OuterP class="indent-10">
                Now consider the time interval from {" "}
                <Math>
                  $t = 22.7\te&#123;s&#125;$
                </Math>
                {" "} to {" "}
                <NoBreak>
                  <Math>
                    $t = 24.7\te&#123;s&#125;$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/Tyoa.svg" />
              <Pause />
              <OuterP>
                Both the {" "}
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
                  -velocities
                </NoBreak>
                {" "} are nonzero
                during this interval, which indicates the presence
                of a curve. The curve starts with vertical motion
                and ends with horizontal motion:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/niov.svg" />
              <Pause />
              <OuterP>
                Thus Pacman starts the curve going up, and ends the curve
                going right. Moreover, it takes Pacman
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                24.7\te&#123;s&#125; - 22.7\te&#123;s&#125; = 3\te&#123;s&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                to complete the curve (we know the curve is fully
                completed from the purely horizontal motion at
                either end), from which the curve must be
                approximately
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125; \times 3\te&#123;s&#125; = 20.25\te&#123;c&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                in length! In turn, using the approximation
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \approx &#123;11 \over 7&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for the quarter-circumference of a unit circle
                {" "}
                <NoBreak>
                  (cf
                  <Math>
                    $.$
                  </Math>
                </NoBreak>
                {" "} {" "}
                <a
                  href="/article/chapter4#_89_h.a.i_"
                  class="out-chapter-link"
                >
                  Exercise 25
                </a>
                &#8288;),
                this would indicate that
                the curve (which is a quarter-circle, as
                all curves in this maze) has radius
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \approx &#123;20.25\te&#123;c&#125; \over 11/7&#125; = &#123;7 \times 20.25\te&#123;c&#125; \over 11&#125; = &#123;141.75\te&#123;c&#125; \over 11&#125; = 12.886...\te&#123;c&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                where we give up and use a calculator at the
                last step. But the possible radii are {" "}
                <NoBreak>
                  <Math>
                    $3$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $6$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                {" "}
                <Math>
                  $9$
                </Math>
                {" "} and {" "}
                <NoBreak>
                  <Math>
                    $12$
                  </Math>
                  .
                </NoBreak>
                {" "} This all but rules out all of the
                maze curves except the one that has radius {" "}
                <NoBreak>
                  <Math>
                    $12$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                and that allows a traversal that starts upward
                and ends rightward; we mean the upper left
                curve of the maze:
              </OuterP>
              <Pause />
              <Image
                width="860px"
                src="/build-img/svgo-svg/Fs4p.svg"
              />
              <Pause />
              <OuterP>
                From there, Pacman goes right for a bit, then
                takes another curve 3 seconds long, that starts
                rightward and ends downward:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/gJqp.svg" />
              <Pause />
              <OuterP>
                ...this second curve must, of course, be the
                upper right-hand corner of the maze, that has the
                appropriate length, position, and orientation:
              </OuterP>
              <Pause />
              <Image
                width="860px"
                src="/build-img/svgo-svg/zqM6.svg"
              />
              <Pause />
              <OuterP>
                What is extremely strange, however, is that
                Pacman immediately follows the end of this curve
                with rightward motion:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/hJnh.svg" />
              <Pause />
              <OuterP>
                In fact, it is also strange that Pacman {" "}
                <i>
                  preceded
                </i>
                {" "}
                the first curve with rightward motion (when that curve
                starts at the leftmost edge of the maze):
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/fCqh.svg" />
              <Pause />
              <OuterP>
                Looking back over our work,
                we find that we made a mistake when we wrote
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                24.7\te&#123;s&#125; - 22.7\te&#123;s&#125; = 3\te&#123;s&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                the corrected version of that being of course
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                24.7\te&#123;s&#125; - 22.7\te&#123;s&#125; = 2\te&#123;s&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                (the second curve likewise lasted {" "}
                <NoBreak>
                  <Math>
                    $2\te&#123;s&#125;$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                not {" "}
                <NoBreak>
                  <Math>
                    $3\te&#123;s&#125;$
                  </Math>
                  )
                </NoBreak>
                {" "} making the length and radius of
                the first curve two-thirds of whatever we previously
                computed (because {" "}
                <Math>
                  $2\te&#123;s&#125;$
                </Math>
                {" "} is two-thirds of
                {" "}
                <NoBreak>
                  <Math>
                    $3\te&#123;s&#125;$
                  </Math>
                  ),
                </NoBreak>
                {" "} i.e.,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;2 \over 3&#125; \times 12.886...\te&#123;c&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for the {" "}
                <i>
                  radius
                </i>
                {" "} of the first (and second)
                curve, which means that the first and second curves
                actually had radii {" "}
                <NoBreak>
                  <Math>
                    $9$
                  </Math>
                  ,
                </NoBreak>
                {" "} undoubtedly,
                and that Pacman's initial motion followed the
                one-inside track (the two rightward motions are
                easily seen to be {" "}
                <NoBreak>
                  ~
                  <Math>
                    $3\te&#123;c&#125;$
                  </Math>
                </NoBreak>
                {" "} each):
              </OuterP>
              <Pause />
              <Image
                width="860px"
                src="/build-img/svgo-svg/Ywed.svg"
              />
              <Pause />
              <OuterP>
                Next, after some downward motion we are faced
                with a long, juicy, down-and-then-left curve,
                which must surely be the bottom-right curve of
                radius {" "}
                <NoBreak>
                  <Math>
                    $12$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/Pepc.svg" />
              <Pause />
              <OuterP>
                Indeed, the curve lasts {" "}
                <NoBreak>
                  ~
                  <Math>
                    $2.7$
                  </Math>
                  s,
                </NoBreak>
                {" "} and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125; \times 2.7\te&#123;s&#125; = 18.225\te&#123;c&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is approximately the same as
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;11 \over 7&#125; \cdot 12\te&#123;c&#125; = 18.85...\te&#123;c&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                confirming the radius of {" "}
                <Math>
                  $12\te&#123;c&#125;$
                </Math>
                {" "} and the location
                of the curve.
                Pacman's trajectory so far is then:
              </OuterP>
              <Pause />
              <Image
                width="860px"
                src="/build-img/svgo-svg/Bi-p.svg"
              />
              <Pause />
              <OuterP>
                Next Pacman seems to reverse course, and briefly
                re-enters the curve (going right and up a tiny bit):
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/aL8R.svg" />
              <Pause />
              <OuterP>
                But then changes again, and re-exits the curve
                (going left and down a tiny bit):
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/TUEH.svg" />
              <Pause />
              <OuterP>
                Then Pacman goes left-and-then-right-again by
                some small amount:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/TUEH.svg" />
              <Pause />
              <OuterP>
                At this point—and in particular at
                {" "}
                <NoBreak>
                  <Math>
                    $t = 34\te&#123;s&#125;$
                  </Math>
                  —Pacman
                </NoBreak>
                {" "} is between a moment
                of purely horizontal motion and purely vertical
                motion; since the left-and-then-right-again
                motion did obviously not bring Pacman {" "}
                <Math>
                  $3$
                </Math>
                {" "} cells
                over to the left (which is the next place
                after the curve exit that is connected to both
                horizontal and vertical paths),
                Pacman must
                be at the bottom-left exit of the bottom-right
                maze corner, still.
              </OuterP>
            </Solution>
          </Exercise>
          <Exercise number={5}>
            <ExerciseStatement id="_171_h.a.i_">
              <OuterP>
                <b>
                  Exercise 5.
                </b>
                {" "}
                Prove that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                f + g = g + f
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                fg = gf
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for all {" "}
                <NoBreak>
                  <Math>
                    $f, g : \rr \ra \rr$
                  </Math>
                  ,
                </NoBreak>
                {" "} using the fact that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                a + b = b + a
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                ab = ba
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for all {" "}
                <NoBreak>
                  <Math>
                    $a, b \in \rr$
                  </Math>
                  .
                </NoBreak>
                {" "}
                (Prove something for functions by using the
                corresponding fact for numbers, namely.)
              </OuterP>
            </ExerciseStatement>
            <Solution>
              <OuterP>
                Given an arbitrary {" "}
                <Math>
                  $u \in \rr$
                </Math>
                {" "} we have
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (f + g)(u) = f(u) + g(u)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (g + f)(u) = g(u) + f(u)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                by the definition of function addition. But
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                f(u) + g(u) = g(u) + f(u)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                by the commutativity of real number addition
                {" "}
                <NoBreak>
                  [
                  <Math>
                    $f(u)$
                  </Math>
                </NoBreak>
                {" "} and {" "}
                <Math>
                  $g(u)$
                </Math>
                {" "} are both real numbers—the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                commutativity
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                of real number addition is the fact that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                a + b = b + a
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for all real numbers {" "}
                <NoBreak>
                  <Math>
                    $a$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $b$
                  </Math>
                  ,
                </NoBreak>
                {" "} mentioned in the
                statement—so we can use this here]; thus
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (f + g)(u) = (g + f)(u)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for all {" "}
                <NoBreak>
                  <Math>
                    $u \in \rr$
                  </Math>
                  ,
                </NoBreak>
                {" "} which implies
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                f + g = g + f
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                by definition of function equality.
              </OuterP>
              <OuterP class="indent-10">
                For the second half we have, similarly,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \begin&#123;align&#125;
                (fg)(u) &amp;= f(u) \cdot g(u) \\
                &amp;= g(u) \cdot f(u) \up&#123;1.5&#125;\\
                &amp;= (gf)(u) \up&#123;1.5&#125;
                \end&#123;align&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for arbitrary {" "}
                <NoBreak>
                  <Math>
                    $u\in \rr$
                  </Math>
                  ,
                </NoBreak>
                {" "} where the first and
                last equality are by the definition of a
                product of functions and where
                the middle equality is by commutativity of real
                number multiplication. [That would be the fact that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                ab = ba
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
                {" "} as mentioned in the statement.] Hence
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                fg
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                gf
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                agree on an arbitrary input, hence {" "}
                <Math>
                  $fg = gf$
                </Math>
                {" "} by
                definition of function equality.
              </OuterP>
            </Solution>
          </Exercise>
          <Exercise number={6}>
            <ExerciseStatement id="_173_h.a.i_">
              <OuterP>
                <b>
                  Exercise 6.
                </b>
                {" "}
                A rat is running a fundraising race. The function
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large f : \rr \ra \rr
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                gives the amount raised as a function of position;
                specifically, {" "}
                <Math>
                  $&#123;f(x)&#125;$
                </Math>
                {" "} is the total number of
                $'s earned by virtue of running
                {" "}
                <Math>
                  $x$
                </Math>
                {" "} meters from the start of the race;
                a second function
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large g : \rr \ra \rr
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                gives the position of the rat as a function of time;
                specifically, {" "}
                <Math>
                  $&#123;g(t)&#125;$
                </Math>
                {" "} is the position from the start,
                in meters, reached by the rat at {" "}
                <Math>
                  $t$
                </Math>
                {" "} seconds after the
                start of the race.
              </OuterP>
              <OuterP class="indent-10">
                In this case, what does {" "}
                <Math>
                  $f \circ g$
                </Math>
                {" "} compute?
              </OuterP>
            </ExerciseStatement>
            <Solution>
              <OuterP>
                It computes the amount earned by the rat as a
                function of time. In more detail, {" "}
                <Math>
                  $(f \circ g)(t)$
                </Math>
                {" "}
                is the number of $'s earned by the rat at {" "}
                <Math>
                  $t$
                </Math>
                {" "}
                seconds after the start of the race.
              </OuterP>
              <Pause />
              <SolutionNote>
                <OuterP>
                  <i>
                    Note 1.
                  </i>
                  {" "}
                  In even more detail,
                </OuterP>
                <Pause />
                <MathBlock>
                  $$
                  g(t)
                  $$
                </MathBlock>
                <Pause />
                <OuterP>
                  is the position in meters of the rat {" "}
                  <Math>
                    $t$
                  </Math>
                  {" "}
                  seconds after start, by definition
                  of {" "}
                  <NoBreak>
                    <Math>
                      $g$
                    </Math>
                    ,
                  </NoBreak>
                  {" "} at which position the rat has
                  earned
                </OuterP>
                <Pause />
                <MathBlock>
                  $$
                  f(g(t))
                  $$
                </MathBlock>
                <Pause />
                <OuterP>
                  $'s in total, by definition of {" "}
                  <NoBreak>
                    <Math>
                      $f$
                    </Math>
                    .
                  </NoBreak>
                  {" "}
                  And
                </OuterP>
                <Pause />
                <MathBlock>
                  $$
                  f(g(t))
                  $$
                </MathBlock>
                <Pause />
                <OuterP>
                  is
                </OuterP>
                <Pause />
                <MathBlock>
                  $$
                  (f \circ g)(t)
                  $$
                </MathBlock>
                <Pause />
                <OuterP>
                  by definition of {" "}
                  <NoBreak>
                    “
                    <Math>
                      $\circ$
                    </Math>
                    ”.
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
                  If it helps, here is a pictorialization of the
                  “units transformation pipeline” that
                  occurs inside {" "}
                  <NoBreak>
                    <Math>
                      $f \circ g$
                    </Math>
                    :
                  </NoBreak>
                </OuterP>
                <Pause />
                <Image src="/build-img/svgo-svg/96sV.svg" />
              </SolutionNote>
              <Pause />
              <SolutionNote id="_172_h.a.i_">
                <OuterP>
                  <i>
                    Note 3.
                  </i>
                  {" "}
                  To emphasize, {" "}
                  <Math>
                    $f(x)$
                  </Math>
                  {" "} is the
                </OuterP>
                <Pause />
                <CentralDisplayItalic>
                  ~ total ~
                </CentralDisplayItalic>
                <Pause />
                <OuterP>
                  amount earned when position {" "}
                  <Math>
                    $x$
                  </Math>
                  {" "} is reached.
                  In real life {" "}
                  <NoBreak>
                    <Math>
                      $f$
                    </Math>
                    's
                  </NoBreak>
                  {" "}
                  graph might therefore look something like this,
                  while inventing some numbers:
                </OuterP>
                <Pause />
                <Image src="/build-img/svgo-svg/CzxM.svg" />
                <Pause />
                <OuterP>
                  In the above the rat earns {" "}
                  <NoBreak>
                    <Math>
                      \(\te&#123;\$&#125;\)
                    </Math>
                    3
                  </NoBreak>
                  {" "} for the
                  first 50m, after which the dollar-per-meter
                  rate is reduced.
                  Or {" "}
                  <Math>
                    $f$
                  </Math>
                  {" "} could look like this, with discrete
                  “unlocks”:
                </OuterP>
                <Pause />
                <Image src="/build-img/svgo-svg/UxiE.svg" />
                <Pause />
                <OuterP>
                  In our mathematicians' imaginations, however, {" "}
                  <Math>
                    $f$
                  </Math>
                  {" "}
                  might also look like this, nice and differentiable,
                  with periods of negative slope (corresponding to
                  parts of the course that momentarily lose you money):
                </OuterP>
                <Pause />
                <Image src="/build-img/svgo-svg/-wVL.svg" />
                <Pause />
                <OuterP>
                  (Etc.)
                </OuterP>
              </SolutionNote>
            </Solution>
          </Exercise>
          <Exercise number={7}>
            <ExerciseStatement id="_174_h.a.i_">
              <OuterP>
                <b>
                  Exercise 7.
                </b>
                {" "}
                What does {" "}
                <Math>
                  $(f \circ g)'$
                </Math>
                {" "} compute,
                keeping the same setup as in Exercise 34?
              </OuterP>
            </ExerciseStatement>
            <Solution>
              <OuterP>
                It computes the dollars-per-second earnings rate
                as a function of time. In full detail,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (f \circ g)'(t)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is the dollars-per-second rate which the rat is
                fundraising at {" "}
                <Math>
                  $t$
                </Math>
                {" "} seconds after the start of the race.
              </OuterP>
              <Pause />
              <SolutionNote>
                <OuterP>
                  <i>
                    Note 1.
                  </i>
                  {" "}
                  You don't need to know anything about {" "}
                  <NoBreak>
                    “
                    <Math>
                      $f$
                    </Math>
                    ”
                  </NoBreak>
                  {" "}
                  or {" "}
                  <NoBreak>
                    “
                    <Math>
                      $g$
                    </Math>
                    ”
                  </NoBreak>
                  {" "} to answer this question. You only need to
                  know what {" "}
                  <NoBreak>
                    “
                    <Math>
                      $f \circ g$
                    </Math>
                    ”
                  </NoBreak>
                  {" "} is.
                </OuterP>
              </SolutionNote>
            </Solution>
          </Exercise>
          <Exercise number={8}>
            <ExerciseStatement id="_175_h.a.i_">
              <OuterP>
                <b>
                  Exercise 8.
                </b>
                {" "}
                Continuing with the fundraising rat as in the
                previous two exercises, assume that the functions
                {" "}
                <Math>
                  $f$
                </Math>
                {" "} and {" "}
                <Math>
                  $g$
                </Math>
                {" "} have these graphs:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/3IfQ.svg" />
              <Pause />
              <Image src="/build-img/svgo-svg/TBiP.svg" />
              <Pause />
              <OuterP>
                In this case what is {" "}
                <NoBreak>
                  <Math>
                    $(f \circ g)'(2)$
                  </Math>
                  ?
                </NoBreak>
              </OuterP>
            </ExerciseStatement>
            <Solution>
              <OuterP>
                At {" "}
                <NoBreak>
                  <Math>
                    $t = 2$
                  </Math>
                  s
                </NoBreak>
                {" "} the rat is running at a velocity of
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;5\over 3\up&#123;1&#125;&#125;[&#123;\te&#123;m/s&#125;&#125;]
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                by the slope of this line segment on {" "}
                <NoBreak>
                  <Math>
                    $y = g(t)$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/qPIg.svg" />
              <Pause />
              <OuterP>
                Moreover at {" "}
                <NoBreak>
                  <Math>
                    $t = 2$
                  </Math>
                  s
                </NoBreak>
                {" "} the rat
                has reached
                {" "}
                <NoBreak>
                  <Math>
                    $2 \cdot (5/3) = 10/3 = 3.\overline&#123;33&#125;$
                  </Math>
                  m,
                </NoBreak>
                {" "}
                where the dollars-per-meter earnings
                rate is one-tenth of a dollar per meter, by
                the slope of this segment on the graph {" "}
                <NoBreak>
                  <Math>
                    $y = f(x)$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/dAMr.svg" />
              <Pause />
              <OuterP>
                Multiplying the {" "}
                <Math>
                  $5/3$
                </Math>
                {" "} meters-per-second velocity
                by the {" "}
                <Math>
                  $1/10$
                </Math>
                {" "} dollars-per-meter rate gives
                us the dollars-per-second rate at {" "}
                <NoBreak>
                  <Math>
                    $t = 2$
                  </Math>
                  s
                </NoBreak>
                {" "} (our
                final answer—recall that {" "}
                <Math>
                  $(f \circ g)'(2)$
                </Math>
                {" "} is
                the dollars-per-second rate at {" "}
                <NoBreak>
                  <Math>
                    $t = 2$
                  </Math>
                  s,
                </NoBreak>
                {" "} by Exercise 35):
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \left(&#123;5\over 3\up&#123;1&#125;&#125;\left[&#123;\te&#123;m&#125; \over \te&#123;s&#125;&#125;\right]\right) \times \left(&#123;1 \over 10\up&#123;1&#125;&#125;\left[&#123;\te&#123;\$&#125; \over \te&#123;m&#125;&#125;\right]\right) = &#123;5\over 30\up&#123;1&#125;&#125;\left[&#123;\te&#123;\$&#125; \over \te&#123;s&#125;&#125;\right].
                $$
                <ImageRight
                  src="/build-img/svgo-svg/eJML.svg"
                  compensate_offset_x_for_large_text_columns={true}
                />
              </MathBlock>
              <Pause />
              <OuterP>
                Or since
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;5 \over 3&#125; = 1.6666...
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                that would be
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;0.1666...&#125;[\te&#123;\$/s&#125;]
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                in decimal, i.e.,
                <span style="font-family:Clicker Script;font-size:1.3em;">
                  ~sixteen~
                </span>
                point {" "}
                <Math>
                  $666...$
                </Math>
                {" "} cents per second.
              </OuterP>
              <Pause />
              <OuterP>
                <i>
                  Postscript.
                </i>
                {" "}
                It turns out that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;5 \over 30&#125; = &#123;1 \over 6&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                as we weren't really paying attention to the
                possibility of simplifying the fraction. In
                particular,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;1 \over 6&#125; = 0.1666...
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                as, indeed, {" "}
                <Math>
                  $0.1666...$
                </Math>
                {" "} is half of {" "}
                <NoBreak>
                  <Math>
                    $0.333...$
                  </Math>
                  !
                </NoBreak>
              </OuterP>
            </Solution>
          </Exercise>
          <Exercise number={9}>
            <ExerciseStatement id="_176_h.a.i_">
              <OuterP>
                <b>
                  Exercise 9.
                </b>
                {" "}
                Sketch the velocity vector of a particle
                going at three times unit speed (“speed {" "}
                <NoBreak>
                  <Math>
                    $3$
                  </Math>
                  ”
                </NoBreak>
                {" "} in common
                parlance) clockwise around a circle of radius {" "}
                <NoBreak>
                  <Math>
                    $2$
                  </Math>
                  .
                </NoBreak>
                {" "}
                What path does the velocity vector describe
                over time? (I.e., if you cut-paste the velocity
                vector back to the origin, so that its “tail”
                is at {" "}
                <NoBreak>
                  <Math>
                    $(0, 0)$
                  </Math>
                  ,
                </NoBreak>
                {" "} what curve does the far end of the
                vector describe?) Over how much time?
              </OuterP>
            </ExerciseStatement>
            <Solution>
              <OuterP>
                The velocity vector is an arrow of length {" "}
                <Math>
                  $3$
                </Math>
                {" "}
                tangent to a circle of radius {" "}
                <NoBreak>
                  <Math>
                    $2$
                  </Math>
                  ,
                </NoBreak>
                {" "} brushed
                clockwise:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/6etX.svg" />
              <Pause />
              <OuterP>
                If we bring the tail of the vector back to
                {" "}
                <Math>
                  $(0, 0)$
                </Math>
                {" "} we find an arrow of length {" "}
                <Math>
                  $3$
                </Math>
                {" "}
                tracing a circle of radius {" "}
                <NoBreak>
                  <Math>
                    $3$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/F9Zp.svg" />
              <Pause />
              <OuterP>
                Lastly, the velocity vector does a full revolution
                of the red circle in the same amount of time that
                the particle does a full revolution of the blue circle,
                which is
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;2\cdot (\te&#123;circumference of a unit circle&#125;) \over \te&#123;3&#125;&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                because the circumference of the blue circle
                is twice the circumference of a unit circle,
                and the particle is going at speed {" "}
                <NoBreak>
                  <Math>
                    $3$
                  </Math>
                  .
                </NoBreak>
              </OuterP>
              <Pause />
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                In such diagrams we recycle the axes
                to plot quantities of several different
                dimensions: positions (in blue, in this
                case) have dimensions of length ([L]) while
                velocities (in red, in this case) have
                dimensions of length over time ([L/T]).
              </OuterP>
            </Solution>
          </Exercise>
          <Exercise number={10}>
            <ExerciseStatement id="_177_h.a.i_">
              <OuterP>
                <b>
                  Exercise 10.
                </b>
                {" "}
                What is the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                acceleration vector
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                (velocity vector of the velocity vector)
                of the particle from Exercise 39?
              </OuterP>
            </ExerciseStatement>
            <Solution>
              <OuterP>
                The velocity vector of Exercise 39 travels
                in a circle of radius {" "}
                <Math>
                  $3$
                </Math>
                {" "} in the same amount
                of time that the position vector
                travels around a circle of radius {" "}
                <NoBreak>
                  <Math>
                    $2$
                  </Math>
                  .
                </NoBreak>
                {" "}
                The speed of the velocity vector is therefore
                {" "}
                <Math>
                  $1.5$
                </Math>
                {" "} times the speed of the position vector,
                or {" "}
                <NoBreak>
                  <Math>
                    $1.5 \times 3 = 4.5$
                  </Math>
                  .
                </NoBreak>
              </OuterP>
              <OuterP class="indent-10">
                As the derivative of the velocity vector,
                the acceleration vector is therefore
                a vector of length {" "}
                <Math>
                  $4.5$
                </Math>
                {" "} (= the speed of the
                velocity vector) brushed clockwise along
                the path of the velocity vector:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/wKig.svg" />
              <Pause />
              <OuterP>
                Or, if we translate the acceleration vector back
                to the origin and trace out its path over time
                (either way is fine):
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/bvs-.svg" />
              <Pause />
              <SolutionNote>
                <OuterP>
                  <i>
                    Note 1.
                  </i>
                  {" "}
                  You truly have to think of the acceleration
                  vector as “the velocity of the velocity
                  vector”—if the velocity vector is changing, the
                  acceleration vector is nonzero!
                </OuterP>
              </SolutionNote>
            </Solution>
          </Exercise>
          <Exercise number={11}>
            <ExerciseStatement id="_179_h.a.i_">
              <OuterP>
                <b>
                  Exercise 11.
                </b>
                {" "}
                Sketch the velocity vector, acceleration vector,
                and jerk vector of a particle going around a circle
                of radius {" "}
                <Math>
                  $3$
                </Math>
                {" "} at speed {" "}
                <NoBreak>
                  <Math>
                    $2$
                  </Math>
                  .
                </NoBreak>
                {" "} (Clockwise, say.)
              </OuterP>
            </ExerciseStatement>
            <Solution>
              <OuterP>
                The velocity vector has length {" "}
                <NoBreak>
                  <Math>
                    $2$
                  </Math>
                  ,
                </NoBreak>
                {" "} because the
                particle has speed {" "}
                <NoBreak>
                  <Math>
                    $2$
                  </Math>
                  .
                </NoBreak>
                {" "} So the velocity vector
                looks like so, while attached to the particle path
                (top) or brought back to the origin (bottom):
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/d71u.svg" />
              <Pause />
              <Image src="/build-img/svgo-svg/q6Sb.svg" />
              <Pause />
              <OuterP>
                Moreover (!) the speed of the velocity vector is
                {" "}
                <Math>
                  $2/3$
                </Math>
                {" "} the speed of the particle, because the
                velocity vector goes around a circle of {" "}
                <Math>
                  $2/3$
                </Math>
                {" "} the
                radius in the same amount of time. So the velocity
                vector has speed
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large 2 \cdot &#123;2\over 3&#125; = &#123;4\over 3&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                from which the acceleration vector—that can be
                described as “the velocity vector of the velocity
                vector”—has length {" "}
                <Math>
                  $&#123;4\over 3&#125;$
                </Math>
                {" "} (the speed of the
                velocity vector), and looks like so (in either representation):
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/dF7b.svg" />
              <Pause />
              <Image src="/build-img/svgo-svg/F2u1.svg" />
              <Pause />
              <OuterP>
                Lastly the acceleration vector has speed
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large &#123;4\over 3&#125;\cdot &#123;2\over 3&#125; = &#123;8 \over 9&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                by virtue of circling a circle of radius {" "}
                <Math>
                  $2/3$
                </Math>
                {" "}
                that of the velocity vector, that has speed {" "}
                <NoBreak>
                  <Math>
                    $4/3$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                in the same amount of time. Since the jerk is the
                derivative of the acceleration, this becomes the
                length of the jerk vector, that is exactly opposite
                to the velocity vector, being twice {" "}
                <Math>
                  $90^\circ$
                </Math>
                {" "} away:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/VSpZ.svg" />
              <Pause />
              <Image src="/build-img/svgo-svg/1EdZ.svg" />
              <Pause />
              <StarDivider />
              <Pause />
              <SolutionNote id="_178_h.a.i_">
                <OuterP>
                  <i>
                    Note 1.
                  </i>
                  {" "}
                  If the particle's original path is centered at
                  {" "}
                  <Math>
                    $(0, 0)$
                  </Math>
                  {" "} then that path constitutes a fourth
                  circle obeying the same pattern
                  of {" "}
                  <NoBreak>
                    <Math>
                      $2/3$
                    </Math>
                    -ratios
                  </NoBreak>
                  {" "} between the successive radii:
                </OuterP>
              </SolutionNote>
              <Pause />
              <Image src="/build-img/svgo-svg/nVRw.svg" />
            </Solution>
          </Exercise>
          <Exercise number={12}>
            <ExerciseStatement id="_181_h.a.i_">
              <OuterP>
                <b>
                  Exercise 12.
                </b>
                {" "}
                Sketch the velocity vector, acceleration vector,
                and jerk vector of a particle going around a circle
                of radius {" "}
                <Math>
                  $r$
                </Math>
                {" "} at speed {" "}
                <NoBreak>
                  <Math>
                    $v$
                  </Math>
                  .
                </NoBreak>
                {" "}
                (You can assume say {" "}
                <Math>
                  $v/r \approx 1.2$
                </Math>
                {" "} for the sake
                of your sketch.) Give algebraic expressions for the
                lengths of the various vectors.
              </OuterP>
            </ExerciseStatement>
            <Solution>
              <OuterP>
                While the particle goes around a circle of
                radius {" "}
                <NoBreak>
                  <Math>
                    $r$
                  </Math>
                  ,
                </NoBreak>
                {" "} the velocity vector goes around a
                circle of radius {" "}
                <NoBreak>
                  <Math>
                    $v$
                  </Math>
                  .
                </NoBreak>
                {" "} (Indeed {" "}
                <NoBreak>
                  <Math>
                    $v$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                being the speed, is the length of the velocity
                vector, and the length of the velocity vector
                is the radius of the circle traced by the
                velocity vector.) So the circle traced by the
                velocity vector is
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large &#123;v \over r&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                times as large as the circle traced by the
                position vector. Therefore, the  velocity vector
                goes
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large &#123;v \over r&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                times as fast as the position vector! (The two
                vectors trace their respective circles in the
                same amount of time, so the only difference
                in speed is caused by differences in the
                radii—and this is the ratio of the radii.)
                Therefore, the velocity vector has speed
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large v \cdot &#123;v \over r&#125; = &#123;v^2 \over r&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...as obtained by multiplying the speed of the
                position vector {" "}
                <NoBreak>
                  (
                  <Math>
                    $v$
                  </Math>
                  )
                </NoBreak>
                {" "} by the ratio of the speeds
                {" "}
                <NoBreak>
                  (
                  <Math>
                    $v/r$
                  </Math>
                  ).
                </NoBreak>
                {" "} This is also the length of the acceleration
                vector. (Speed of velocity vector = length of
                acceleration vector.)
              </OuterP>
              <OuterP class="indent-10">
                Next, the ratio
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large &#123;\te&#123;speed&#125;\over \te&#123;radius&#125;&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is the same for the velocity vector as it is for
                the position vector, because both “speed” and
                “radius” are scaled up by a factor
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large &#123;v \over r&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                compared to the position vector.
                So
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large &#123;\te&#123;speed&#125;\over \te&#123;radius&#125;&#125; = &#123;v \over r&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for the velocity vector as well as for the position
                vector. But we can also write this ratio as
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large &#123;\te&#123;length of acceleration vector&#125;\over \te&#123;radius&#125;&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                since the speed of the velocity vector is the
                length of the acceleration vector, or as
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large &#123;\te&#123;length of acceleration vector&#125;\over \te&#123;radius of velocity vector circle&#125;&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                to be more exact, or as
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;\Large &#123;\te&#123;radius of acceleration vector circle&#125;\over \te&#123;radius of velocity vector circle&#125;&#125;&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                in yet another way! Therefore, the circle traced by
                the acceleration vector is
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;\Large &#123;v \over r&#125;&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                times as large as the circle traced by the velocity
                vector, and the same pattern starts all over again!
              </OuterP>
              <OuterP class="indent-10">
                (In other words, each time we take a derivative we
                find that the vector whose derivative we are taking
                has speed
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;\Large &#123;v \over r&#125;&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                times the speed of the previous vector whose
                derivative we took, resulting in a circle
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;\Large &#123;v \over r&#125;&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                times as large as the current circle, resulting in
                a future speed {" "}
                <Math>
                  $v/r$
                </Math>
                {" "} times as large for the next
                derivative, etc, etc.)
              </OuterP>
              <OuterP class="indent-10">
                Concretely, the length of the jerk vector will be
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;\Large &#123;v^2 \over r&#125; \cdot &#123;v \over r&#125; = &#123;v^3 \over r^2&#125;&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                because the length of the acceleration is {" "}
                <NoBreak>
                  <Math>
                    $v^2/r$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                and the length of the derivative of the jerk would
                be
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;\Large &#123;v^3 \over r^2&#125; \cdot &#123;v \over r&#125; = &#123;v^4 \over r^3&#125;&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                because the length of the jerk is {" "}
                <NoBreak>
                  <Math>
                    $v^3/r^2$
                  </Math>
                  ,
                </NoBreak>
                {" "} etc.
                (Not that we needed to go beyond the jerk.)
              </OuterP>
              <OuterP class="indent-10">
                Coming back to a sketch of all this, if
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;\Large &#123;v \over r&#125; \approx 1.2&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                the sketch will involve concentric circles
                of successive ratio {" "}
                <Math>
                  $\approx 1.2$
                </Math>
                {" "} with the
                successive vectors being off by {" "}
                <NoBreak>
                  <Math>
                    $90^\circ$
                  </Math>
                  .
                </NoBreak>
                {" "}
                The position circle might not be centered at
                {" "}
                <NoBreak>
                  <Math>
                    $(0, 0)$
                  </Math>
                  ,
                </NoBreak>
                {" "} so we didn't include it in this sketch
                (this sketch presumes clockwise motion, but
                it's unimportant):
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/ltlc.svg">
                <p>
                  But if the position circle is centered at {" "}
                  <NoBreak>
                    <Math>
                      $(0, 0)$
                    </Math>
                    ,
                  </NoBreak>
                  {" "}
                  it becomes the first circle in the sequence:
                </p>
              </Image>
              <Pause />
              <Image src="/build-img/svgo-svg/U8eB.svg" />
              <Pause />
              <StarDivider />
              <Pause />
              <SolutionNote id="_180_h.a.i_">
                <OuterP>
                  <i>
                    Note 1.
                  </i>
                  {" "}
                  The ratio
                </OuterP>
                <Pause />
                <MathBlock>
                  $$
                  &#123;\Large &#123;v \over r&#125;&#125;
                  $$
                </MathBlock>
                <Pause />
                <OuterP>
                  is known as the
                </OuterP>
                <Pause />
                <CentralDisplayItalic>
                  angular velocity
                </CentralDisplayItalic>
                <Pause />
                <OuterP>
                  of the particle. You can think of the angular velocity
                  as
                </OuterP>
                <Pause />
                <MathBlock>
                  $$
                  &#123;\Large &#123;\te&#123;speed&#125;\over \te&#123;radius&#125;&#125;&#125;
                  $$
                </MathBlock>
                <Pause />
                <OuterP>
                  directly per the expression above, or as
                </OuterP>
                <Pause />
                <MathBlock>
                  $$
                  &#123;\Large &#123;\te&#123;distance per unit time&#125;\over \te&#123;radius&#125;&#125;&#125;
                  $$
                </MathBlock>
                <Pause />
                <OuterP>
                  since that is just the definition of “speed”, but which also
                  means that you can think of the angular velocity as
                </OuterP>
                <Pause />
                <MathBlock>
                  $$
                  \Large &#123;\te&#123;number of radii per unit time&#125;&#125;
                  $$
                </MathBlock>
                <Pause />
                <OuterP>
                  or, say, just as
                </OuterP>
                <Pause />
                <MathBlock>
                  $$
                  \Large &#123;\te&#123;radii per unit time&#125;&#125;
                  $$
                </MathBlock>
                <Pause />
                <OuterP>
                  in other words.
                  (The “number or radii” covered by an arc is
                  also known as the {" "}
                  <i>
                    radian measure
                  </i>
                  {" "} of the arc—an
                  alternate measure of angle—so this can also be
                  phrased {" "}
                  <i>
                    radians per unit time
                  </i>
                  , in that sense.)
                  What is noteworthy is that the angular velocity
                  of the position vector is the same as the
                  angular velocity of the velocity vector, of the
                  acceleration vector, etc, and it also constitutes
                  the ratio between the successive lengths of all
                  these vectors!
                </OuterP>
              </SolutionNote>
              <Pause />
              <SolutionNote>
                <OuterP>
                  <i>
                    Note 2.
                  </i>
                  {" "}
                  A common notation for the angular velocity of a
                  particle is
                </OuterP>
                <Pause />
                <MathBlock>
                  $$
                  &#123;\Large \omega&#125;
                  $$
                </MathBlock>
                <Pause />
                <OuterP>
                  which means that the velocity vector, acceleration
                  vector, and jerk vector have lengths
                  have lengths
                </OuterP>
                <Pause />
                <MathBlock>
                  $$
                  &#123;\Large \omega&#123;&#125;^1r&#125;
                  $$
                </MathBlock>
                <Pause />
                <MathBlock>
                  $$
                  &#123;\Large \omega&#123;&#125;^2r&#125;
                  $$
                </MathBlock>
                <Pause />
                <MathBlock>
                  $$
                  &#123;\Large \omega&#123;&#125;^3r&#125;
                  $$
                </MathBlock>
                <Pause />
                <OuterP>
                  respectively, where {" "}
                  <Math>
                    $r$
                  </Math>
                  {" "} is the radius of the circle,
                  as the angular velocity is the ratio of the lengths
                  of the successive vectors, as noted. (PS: As the
                  length of the velocity vector is also known as the
                  speed, {" "}
                  <Math>
                    $\omega^1r = \omega&#123;&#125;r$
                  </Math>
                  {" "} is also the speed,
                  by another name.) (PPS: We couldn't resist writing
                  {" "}
                  <NoBreak>
                    “
                    <Math>
                      $\omega^1r$
                    </Math>
                    ”
                  </NoBreak>
                  {" "} instead of {" "}
                  <NoBreak>
                    “
                    <Math>
                      $\omega&#123;&#125;r$
                    </Math>
                    ”,
                  </NoBreak>
                  {" "} to keep things
                  extra symmetric {" "}
                  <i>
                    &amp;
                  </i>
                  {" "} typographically aligned.)
                </OuterP>
              </SolutionNote>
            </Solution>
          </Exercise>
          <Exercise number={13}>
            <ExerciseStatement id="_182_h.a.i_">
              <OuterP>
                <b>
                  Exercise 13.
                </b>
                {" "}
                Four particles are moving at speed {" "}
                <Math>
                  $3$
                </Math>
                {" "}
                around a circle of radius {" "}
                <Math>
                  $3$
                </Math>
                {" "} centered at {" "}
                <NoBreak>
                  <Math>
                    $(0, 0)$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                spaced out by {" "}
                <NoBreak>
                  <Math>
                    $90^\circ$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/VDnQ.svg" />
              <Pause />
              <OuterP>
                Sketch the position vector, velocity vector,
                acceleration vector, and jerk vector of each
                particle. What is the angular velocity of each
                particle?
              </OuterP>
            </ExerciseStatement>
            <Solution>
              <OuterP>
                Starting with the second part of the
                question, because the particles are going around
                a circle of radius {" "}
                <Math>
                  $3$
                </Math>
                {" "} at speed {" "}
                <Math>
                  $3$
                </Math>
                {" "} the
                angular velocity (cf. Exercise 37) is
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;\Large &#123;3\over 3&#125; = 1&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                which means that the ratio of the lengths of
                all the vectors will be {" "}
                <NoBreak>
                  <Math>
                    $1$
                  </Math>
                  ,
                </NoBreak>
                {" "} i.e., all vectors
                (velocity, acceleration, jerk) will have the
                same length as the radius, which is {" "}
                <NoBreak>
                  <Math>
                    $3$
                  </Math>
                  .
                </NoBreak>
              </OuterP>
              <OuterP class="indent-10">
                Keeping in mind that the jerk is
                {" "}
                <Math>
                  $90^\circ$
                </Math>
                {" "} ahead of the acceleration is {" "}
                <Math>
                  $90^\circ$
                </Math>
                {" "}
                ahead of the velocity, etc, in the direction of
                rotation, the sixteen vectors—four for each
                particle—are therefore as follows:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/186P.svg" />
              <Pause />
              <OuterP>
                (In particular, the purple particle's position
                ends up being the velocity of the red particle,
                and many other identities of the sort.)
              </OuterP>
            </Solution>
          </Exercise>
          <Exercise number={14}>
            <ExerciseStatement id="_183_h.a.i_">
              <OuterP>
                <b>
                  Exercise 14.
                </b>
                {" "}
                What are the dimensions of angular velocity?
                (For example, the dimensions of velocity are
                “length over time”, ([L/T]).)
              </OuterP>
            </ExerciseStatement>
            <Solution>
              <OuterP>
                <i>
                  Solution 1.
                </i>
                {" "}
                Angular velocity is
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                speed over radius
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                which has dimensions
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;\Large &#123;\te&#123;L/T&#125; \over \te&#123;L&#125;&#125;&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                because speed has dimensions of length over time,
                L/T, while the radius has dimensions of length, L;
                this simplifies...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/ds09.svg" />
              <Pause />
              <OuterP>
                ...down to dimensions of “one over time”.
              </OuterP>
              <Pause />
              <OuterP>
                <i>
                  Solution 2.
                </i>
                {" "}
                Angular velocity is
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                radians per unit time
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                or
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                number of radii per unit time
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                (if you prefer),
                which is a “one over time” quantity, because
                radians are dimensionless.
              </OuterP>
              <OuterP class="indent-10">
                Indeed, “radian” is
                short for “number of radii that fit inside the
                arc length”, which is one length
                divided by another length,
                which is, therefore,
                dimensionless.
              </OuterP>
            </Solution>
          </Exercise>
          <Exercise number={15}>
            <ExerciseStatement id="_184_h.a.i_">
              <OuterP>
                <b>
                  Exercise 15.
                </b>
                {" "}
                Find a nonzero function {" "}
                <Math>
                  $f$
                </Math>
                {" "} and a nonzero
                constant {" "}
                <Math>
                  $a \in \rr$
                </Math>
                {" "} such that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                f'(x) = f(x + a)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for all {" "}
                <NoBreak>
                  <Math>
                    $x$
                  </Math>
                  .
                </NoBreak>
              </OuterP>
            </ExerciseStatement>
            <Solution>
              <OuterP>
                Recall the curves from {" "}
                <a
                  href="/article/chapter4#_74_h.a.i_"
                  class="out-chapter-link"
                >
                  Exercise 12
                </a>
                &#8288;:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/X2nI.svg" />
              <Pause />
              <OuterP>
                The blue curve is the derivative of the red curve
                but is also the horizontal translate of the red curve by
                {" "}
                <Math>
                  $a$
                </Math>
                {" "} units to the left, where
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                a
                $$
                <ImageLeft
                  src="/build-img/svgo-svg/be04.svg"
                  offset_x="200px"
                  compensate_offset_x_for_large_text_columns={true}
                />
              </MathBlock>
              <Pause />
              <OuterP>
                is the distance between adjacent bumps. Thus if
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                f
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is the function that generates the red curve, then
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                f'(x) = f(x + a)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                using the fact that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                y = f(x + a)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is the horizontal translate of {" "}
                <Math>
                  $y = f(x)$
                </Math>
                {" "} by {" "}
                <Math>
                  $a$
                </Math>
                {" "}
                units to the left, in general for any function
                {" "}
                <Math>
                  $f$
                </Math>
                {" "} and constant {" "}
                <NoBreak>
                  <Math>
                    $a \in \rr$
                  </Math>
                  ,
                </NoBreak>
                {" "} as discussed
                in Exercise 14 of {" "}
                <a
                  href="/article/chapter3#_61_h.a.i_"
                  class="out-chapter-link"
                >
                  Chapter 3
                </a>
                &#8288;. (Well, this shows
                one solution, at least.)
              </OuterP>
            </Solution>
          </Exercise>
          <Exercise number={16}>
            <ExerciseStatement id="_185_h.a.i_">
              <OuterP>
                <b>
                  Exercise 16.
                </b>
                {" "}
                How can we generate the following set of
                curves by rotating points around a circle,
                and tracking their {" "}
                <NoBreak>
                  <Math>
                    $x$
                  </Math>
                  -coordinates?
                </NoBreak>
                {" "} (This
                graph is an exact {" "}
                <NoBreak>
                  <Math>
                    $2$
                  </Math>
                  &#x200b;
                </NoBreak>
                <Math>
                  $\times$
                </Math>
                {" "} [“two
                x”] vertical dilation of the graph in 
                {" "}
                <a
                  href="/article/chapter4#_74_h.a.i_"
                  class="out-chapter-link"
                >
                  Exercise 12
                </a>
                &#8288;.) Should we use 
                a circle of radius {" "}
                <NoBreak>
                  <Math>
                    $2$
                  </Math>
                  ,
                </NoBreak>
                {" "} or make the points 
                go twice as fast? Or both? Or something else
                yet?
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/B7D4.svg" />
            </ExerciseStatement>
            <Solution>
              <OuterP>
                The values oscillate between {" "}
                <Math>
                  $+2$
                </Math>
                {" "} and
                {" "}
                <NoBreak>
                  <Math>
                    $-2$
                  </Math>
                  ,
                </NoBreak>
                {" "} so we need a circle of radius {" "}
                <Math>
                  $2$
                </Math>
                {" "}
                to generate these curves. Also the
                values go through one cycle in the same
                amount of time as the particles of
                {" "}
                <a
                  href="/article/chapter4#_74_h.a.i_"
                  class="out-chapter-link"
                >
                  Exercise 12
                </a>
                &#8288;, but the circle has twice the
                circumference (having twice the radius),
                so the particles are going twice as fast!
                (I.e.: speed 2, since the particles of
                {" "}
                <a
                  href="/article/chapter4#_74_h.a.i_"
                  class="out-chapter-link"
                >
                  Exercise 12
                </a>
                {" "} have unit speed.)
              </OuterP>
              <Pause />
              <SolutionNote>
                <OuterP>
                  <i>
                    Note 1.
                  </i>
                  {" "}
                  In this and in the previous exercise the
                  units of time and distance are “anonymous”:
                  distance could be meters, kilometers, or
                  anything, and time could be seconds, hours,
                  etc—it doesn't matter. Either way,
                </OuterP>
                <Pause />
                <CentralDisplayItalic>
                  unit speed
                </CentralDisplayItalic>
                <Pause />
                <OuterP>
                  means that one unit of distance is traveled
                  per unit of time, whatever the units are.
                </OuterP>
              </SolutionNote>
            </Solution>
          </Exercise>
          <Exercise number={17}>
            <ExerciseStatement id="_186_h.a.i_">
              <OuterP>
                <b>
                  Exercise 17.
                </b>
                {" "}
                If we rewrite the “product rule” of Exercise
                17 in the same terse style as the “sum rule”
                of Exercise 19, what do we obtain?
              </OuterP>
            </ExerciseStatement>
            <Solution>
              <OuterP>
                The form of...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (fg)'(t_0) = f'(t_0)g(t_0) + f(t_0)g'(t_0)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...that follows the style of...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (f + g)' = f' + g'
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...is...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (fg)' = f'g + fg'
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...this. (Valid for differentiable functions
                {" "}
                <NoBreak>
                  <Math>
                    $f$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $g:$
                </Math>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $\rr \ra \rr$
                  </Math>
                  .)
                </NoBreak>
              </OuterP>
              <Pause />
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                Whereas
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (fg)'(t_0) = f'(t_0)g(t_0) + f(t_0)g'(t_0)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is an equality between real numbers,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (fg)' = f'g + fg'
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is an equality between functions. So there is
                a more-than-skin-deep difference between the
                two forms. Also note that each form has its
                own “qualitatively distinct” qualifying conditions.
              </OuterP>
              <OuterP class="indent-10">
                (To wit,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (fg)'(t_0) = f'(t_0)g(t_0) + f(t_0)g'(t_0)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                holds “for {" "}
                <Math>
                  $t_0$
                </Math>
                {" "} at which {" "}
                <Math>
                  $f$
                </Math>
                {" "} and {" "}
                <Math>
                  $g$
                </Math>
                {" "} are
                differentiable”, while
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (fg)' = f'g + fg'
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                holds “for differentiable functions {" "}
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
                  ”.)
                </NoBreak>
              </OuterP>
            </Solution>
          </Exercise>
          <Exercise number={18}>
            <ExerciseStatement id="_188_h.a.i_">
              <OuterP>
                <b>
                  Exercise 18.
                </b>
                {" "}
                If the identities
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (f + g)' = f' + g'
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (fg)' = f'g + fg'
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for differentiable {" "}
                <NoBreak>
                  <Math>
                    $f$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $g$
                </Math>
                {" "} are deemed
                “differentiation formulas”, then what is a
                third “differentiation formula” {" "}
                <i>
                  already
                  encountered
                </i>
                {" "} (in possibly disguised form) prior
                to this point?
              </OuterP>
            </ExerciseStatement>
            <Solution>
              <OuterP>
                That would be the fact that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (cf)' = cf'
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for all differentiable functions {" "}
                <NoBreak>
                  <Math>
                    $f : \rr \ra \rr$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                for all {" "}
                <NoBreak>
                  <Math>
                    $c \in \rr$
                  </Math>
                  ,
                </NoBreak>
                {" "} mentioned in Exercise 10
                for {" "}
                <NoBreak>
                  <Math>
                    $c = 2$
                  </Math>
                  .
                </NoBreak>
              </OuterP>
              <Pause />
              <SolutionNote id="_187_h.a.i_">
                <OuterP>
                  <i>
                    Note 1.
                  </i>
                  {" "}
                  You can also write
                </OuterP>
                <Pause />
                <MathBlock>
                  $$
                  (cf)' = c \cdot f'
                  $$
                </MathBlock>
                <Pause />
                <OuterP>
                  if it helps clarify the difference between the
                  left- and right-hand sides. (The difference being
                  namely {" "}
                  <NoBreak>
                    “(
                    <Math>
                      $c$
                    </Math>
                  </NoBreak>
                  {" "} times {" "}
                  <NoBreak>
                    <Math>
                      $f$
                    </Math>
                    )
                  </NoBreak>
                  {" "} prime” on the left vs. “c
                  times {" "}
                  <NoBreak>
                    (
                    <Math>
                      $f$
                    </Math>
                  </NoBreak>
                  {" "} prime)” on the right.)
                </OuterP>
              </SolutionNote>
            </Solution>
          </Exercise>
          <Exercise number={19}>
            <ExerciseStatement id="_189_h.a.i_">
              <OuterP>
                <b>
                  Exercise 19.
                </b>
                {" "}
                The definition
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                f + g = (x \ra f(x) + f(x))
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for a sum of functions {" "}
                <Math>
                  $f, g : \rr \ra \rr$
                </Math>
                {" "}
                can also be written
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (f + g)(x) = f(x) + g(x)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                in the sense that either of these equations tells
                you how {" "}
                <Math>
                  $f + g$
                </Math>
                {" "} acts on an arbitrary input. (Which
                is what you need to do, to define a function. A
                slight subtlety is that the definition
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                f + g = (x \ra f(x) + f(x))
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                announces more clearly via its notation that
                {" "}
                <NoBreak>
                  “
                  <Math>
                    $f + g$
                  </Math>
                  ”
                </NoBreak>
                {" "} {" "}
                <i>
                  is a function
                </i>
                {" "} and not some other
                object, like a number, but this is a minor point.)
                Rewrite the definitions of
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                f \circ g
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                fg
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                f/g
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                f - g
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                in the style of the second equation. For extra
                credit: use a different symbol each time to denote
                the input.
              </OuterP>
            </ExerciseStatement>
            <Solution>
              <OuterP>
                E.g.:
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (f \circ g)(x) = f(g(x))
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                (fg)(u) = f(u)g(u)
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                (f/g)(z) = f(z)/g(z)
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                (f - g)(t) = f(t) - g(t)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                (Looking at these definitions we must really admit that
                we prefer the first form, with the arrow, found at the
                end of the chapter—it's more explicit!)
              </OuterP>
            </Solution>
          </Exercise>
          <Exercise number={20}>
            <ExerciseStatement id="_190_h.a.i_">
              <OuterP>
                <b>
                  Exercise 20.
                </b>
                {" "}
                Describe what a function might look like
                if its second derivative has this graph (broadly):
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/JTxK.svg" />
            </ExerciseStatement>
            <Solution>
              <OuterP>
                As the second derivative is the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                rate of change of the slope
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                places where the second derivative is zero are
                places where the slope of the function is constant.
                So the function will have a constant slope over
                each of these purple intervals (we're going to
                assume that what looks like {" "}
                <Math>
                  $0$
                </Math>
                {" "} is {" "}
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  ,
                </NoBreak>
                {" "} and eyeball
                where that starts and ends, the statement
                does say “broadly” anyway):
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/ZIg9.svg" />
              <Pause />
              <OuterP>
                As
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                constant slope
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                means
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                line segment
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                the function will therefore be a
                line segment, over each of the purple intervals!
              </OuterP>
              <OuterP class="indent-10">
                Between these line segments, however, things
                happen, and there is a change in slope! The
                change in slope is given by the “amount of bump”
                in the second derivative between the intervals.
                As it turns out, the area enclosed by the bump
                gives the total change in slope:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/_hHv.svg" />
              <Pause />
              <OuterP>
                (We won't argue this right now, but it's
                sort-of-intuitive.)
                For bumps lying below the {" "}
                <NoBreak>
                  <Math>
                    $x$
                  </Math>
                  -axis
                </NoBreak>
                {" "} the area
                counts as negative; that negative area is, again,
                the total change in slope from one end of the bump
                to the other:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/apR2.svg" />
              <Pause />
              <OuterP>
                In any case the areas are all the same {" "}
                <i>
                  in absolute
                  value
                </i>
                , meaning that whatever slope is gained as
                we pass over a positive bump, the same amount
                is lost again as we pass over a negative bump!
                Thus, the line segments of the original function
                will alternate between “low” and “high”
                slopes—as we pass over a positive bump we switch
                from a “low slope” line segment to a “high slope”
                line segment, and vice-versa when we pass over a
                negative bump.
              </OuterP>
              <OuterP class="indent-10">
                Put
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large a
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for the area of a positive bump (per appearances,
                {" "}
                <NoBreak>
                  <Math>
                    $a \approx 1$
                  </Math>
                  ),
                </NoBreak>
                {" "} and
                <ImageRight src="/build-img/svgo-svg/37OV.svg" />
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large c
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for the slope of a “low slope” line segment. Then a
                “high slope” line segment has slope
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large c + a
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                since we add {" "}
                <Math>
                  $a$
                </Math>
                {" "} to the slope each time we go over
                a positive bump.
                (And the slope goes back down to
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large (c + a) + (-a) = c
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                when we pass over a negative bump, with {" "}
                <Math>
                  $-a$
                </Math>
                {" "} being
                the (negative) area of a negative bump.)
              </OuterP>
              <OuterP class="indent-10">
                With these variables in place, here is a generic
                illustration of a graph (in black) whose second
                derivative is the one from the statement (faded in
                the background):
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/tisG.svg">
                <ImageLeft src="/build-img/svgo-svg/iSTR.svg" />
              </Image>
              <Pause />
              <OuterP>
                In this example {" "}
                <NoBreak>
                  <Math>
                    $c \approx 0.2$
                  </Math>
                  ,
                </NoBreak>
                {" "} but {" "}
                <Math>
                  $c$
                </Math>
                {" "} can be any
                value—this is not constrained by the second derivative.
                Moreover any amount of vertical translation can
                also be introduced to the graph. (Vertical
                translation does not affect the derivative,
                much less the second derivative.)
              </OuterP>
              <OuterP class="indent-10">
                For another example, if {" "}
                <NoBreak>
                  <Math>
                    $c = -a/2$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                meaning {" "}
                <NoBreak>
                  <Math>
                    $c \approx -1/2$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                the graph ends up a perfectly balanced see-saw that
                stays confined to a bounded range of {" "}
                <NoBreak>
                  <Math>
                    $y$
                  </Math>
                  -values:
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/w9j2.svg">
                <ImageLeft src="/build-img/svgo-svg/ywUL.svg" />
              </Image>
              <Pause />
              <OuterP>
                Moreover, like the previous graph, this solution
                can also be vertically translated by any amount!
                (And same for any solution.)
              </OuterP>
              <OuterP class="indent-10">
                For yet another example, here is a graph in which
                {" "}
                <NoBreak>
                  <Math>
                    $c + a = 0$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $c = -a \approx -1$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/jkLB.svg" />
              <Pause />
              <OuterP>
                Again, any of these graphs are
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                equally valid
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                solutions, and, for the last time,
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                any amount of vertical translation can be introduced
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                (you can move the graphs up and down). So in
                other words we have a “two-parameter family of
                solutions”: one parameter of the solution—free
                to choose—is {" "}
                <NoBreak>
                  <Math>
                    $c$
                  </Math>
                  —while
                </NoBreak>
                {" "} another parameter—independently
                free to choose—is the amount of vertical
                translation.
              </OuterP>
              <OuterP class="indent-10">
                To claim a truly good “theoretical” understanding
                of the solution, however, we should also determine
                this rise here, if we can, as a function of {" "}
                <Math>
                  $c$
                </Math>
                {" "}
                and {" "}
                <NoBreak>
                  <Math>
                    $a$
                  </Math>
                  ,
                </NoBreak>
                {" "} i.e., the amount of rise between the end
                of one line segment and the start of the next:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/Urvs.svg" />
              <Pause />
              <OuterP>
                In fact, is not entirely clear that there aren't
                possibly {" "}
                <i>
                  two different
                </i>
                {" "} values of this rise,
                for the two different kinds of “connector curves”
                that exist (the concave ones and the convex ones):
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/cpt7.svg" />
              <Pause />
              <OuterP>
                (It will turn out that
                the rises are all the same
                but we're just pointing out.)
                Focusing on the case
                of a convex connector curve, note
                that the rise is lower bounded by
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large 1.6c
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                where {" "}
                <Math>
                  $1.6 = 0.8 + 0.8$
                </Math>
                {" "} is the length (run) of
                the connector curve, because {" "}
                <Math>
                  $c$
                </Math>
                {" "} is the {" "}
                <i>
                  lowest
                  slope
                </i>
                {" "} found anywhere inside the connector
                curve:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/VC1t.svg" />
              <Pause />
              <OuterP>
                Symmetrically,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large 1.6(c + a)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is an upper bound on the rise, because {" "}
                <Math>
                  $c + a$
                </Math>
                {" "} is the
                {" "}
                <i>
                  greatest slope
                </i>
                {" "} anywhere inside the
                connector curve:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/ImNP.svg" />
              <Pause />
              <OuterP>
                To go any further we must add the first
                derivative to this sketch—the first derivative
                has value
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large c
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                where the function has slope {" "}
                <NoBreak>
                  <Math>
                    $c$
                  </Math>
                  ,
                </NoBreak>
                {" "} has value
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large c + a
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                where the function has slope {" "}
                <NoBreak>
                  <Math>
                    $c + a$
                  </Math>
                  ,
                </NoBreak>
                {" "} and
                climbs up/down along an S-shaped curve outside
                of those intervals, adhering
                to a slope that is given by the value of the
                second derivative:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/sAnB.svg" />
              <Pause />
              <OuterP>
                The afore-mentioned lower bound of
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large 1.6c
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                coincides with the area of a rectangle that {" "}
                <i>
                  lies
                  below
                </i>
                {" "} the graph of the derivative:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/-0Ye.svg" />
              <Pause />
              <OuterP>
                Whereas the afore-mentioned upper bound of
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large 1.6(a + c)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                coincides with the area of a rectangle that
                {" "}
                <i>
                  lies above
                </i>
                {" "} the graph of the derivative:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/QLRv.svg" />
              <Pause />
              <OuterP>
                In other words, the rise of the convex connector
                curve is lower and upper bounded by these
                two areas. It will be helpful to write this
                as a pictorial inequality:
              </OuterP>
              <Pause />
              <Image
                width="800px"
                src="/build-img/svgo-svg/4IQl.svg"
              />
              <Pause />
              <OuterP>
                But we can tighten the inequality by dividing the
                areas halfway (we'll let you think about this
                one—if you don't get it, don't worry, because we'll
                revisit the same topic in detail at some point):
              </OuterP>
              <Pause />
              <Image
                width="800px"
                src="/build-img/svgo-svg/U7Hx.svg"
              />
              <Pause />
              <OuterP>
                Or even:
              </OuterP>
              <Pause />
              <Image
                width="800px"
                src="/build-img/svgo-svg/Kx_N.svg"
              />
              <Pause />
              <OuterP>
                If we take this logic to its bitter conclusion, we
                find the {" "}
                <i>
                  e
                </i>
                quality:
              </OuterP>
              <Pause />
              <Image
                width="800px"
                src="/build-img/svgo-svg/66Fx.svg"
              />
              <Pause />
              <OuterP>
                And because the S-curve is centrally symmetric
                (the slopes at equal distance from the center are
                the same because those slopes can be read off the
                second derivative, and the second derivative bump
                is left-right symmetric) we can compute the area
                that the curve encloses exactly, by a geometric
                surgery:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/_bVJ.svg" />
              <Pause />
              <OuterP>
                Long story short, the area enclosed, which is
                also the rise of the connector curve, is
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large 1.6\cdot (c + &#123;a\over 2&#125;)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...that can be read as “run times average slope”
                (because
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large 1.6
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is the run while the slope (first derivative)
                spends equal amounts of time, in equal measure,
                above and below the value
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large c + &#123;a \over 2&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                that is, indeed, the average of {" "}
                <Math>
                  $c$
                </Math>
                {" "} and {" "}
                <NoBreak>
                  <Math>
                    $c + a$
                  </Math>
                  ).
                </NoBreak>
                {" "}
                For concave connector curves the
                S-curve of the derivative is...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/x6B_.svg" />
              <Pause />
              <OuterP>
                ...flipped around from before, going from
                high to low, but the area enclosed by the S-curve
                is the same. This area is also the rise of the
                connector curve. Hence, long story short—for the
                second time—all connector curves have rise
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large 1.6\cdot (c + &#123;a\over 2&#125;)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and we can annotate our sketch of the
                “generic” solution with this additional piece of
                information, if we want. (Well...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/CHGf.svg" />
              <Pause />
              <OuterP>
                ...there, no one can accuse us of not doing the
                homework ourselves.)
              </OuterP>
            </Solution>
          </Exercise>
        </Exercises>
        <Pause />
        <StarDivider />
        <Pause />
        <OuterP>
          <b>
            From Chapter 5
          </b>
        </OuterP>
        <Pause />
        <Exercises
          chapter="&gt;&gt;trigonometry"
          at_end_of_page={true}
          mode="switcher-only"
        >
          <Exercise number={1}>
            <ExerciseStatement id="_191_h.a.i_">
              <OuterP>
                <b>
                  Exercise 1.
                </b>
                {" "}
                Prove that
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  \huge a^2 + b^2 \geq 2ab
                  $$
                </MathBlock>
              </Boxed>
              <OuterP>
                for all {" "}
                <NoBreak>
                  <Math>
                    $a, b \in \rr$
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
                \begin&#123;aligned&#125;
                &amp; a^2 + b^2 \geq 2ab \\
                \iff &amp; \up&#123;1.5&#125; a^2 - 2ab + b^2 \geq 0 \\
                \iff &amp; \up&#123;1.5&#125; (a - b)^2 \geq 0
                \end&#123;aligned&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                where the last inequality is true because the
                square of any real number is nonnegative, and,
                therefore, the first inequality is true. (Recall
                that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \te&#123;“&#125;\!\!\iff\!\!\te&#123;”&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                means “if and only if”.)
              </OuterP>
              <Pause />
              <SolutionNote>
                <OuterP>
                  <i>
                    Note 1.
                  </i>
                  {" "}
                  One can also note that
                </OuterP>
                <Pause />
                <MathBlock>
                  $$
                  \begin&#123;aligned&#125;
                  &amp; a^2 + b^2 &gt; 2ab \\
                  \iff &amp; \up&#123;1.5&#125; a^2 - 2ab + b^2 &gt; 0 \\
                  \iff &amp; \up&#123;1.5&#125; (a - b)^2 &gt; 0 \\
                  \iff &amp; \up&#123;1.5&#125; a \ne b
                  \end&#123;aligned&#125;
                  $$
                </MathBlock>
                <Pause />
                <OuterP>
                  which means that {" "}
                  <Math>
                    $a^2 + b^2$
                  </Math>
                  {" "} is
                </OuterP>
                <Pause />
                <CentralDisplayItalic>
                  strictly greater
                </CentralDisplayItalic>
                <Pause />
                <OuterP>
                  than {" "}
                  <Math>
                    $2ab$
                  </Math>
                  {" "} except in one case and in one case only:
                  the case that {" "}
                  <Math>
                    $a$
                  </Math>
                  {" "} equals {" "}
                  <NoBreak>
                    <Math>
                      $b$
                    </Math>
                    .
                  </NoBreak>
                  {" "}
                  (In which case, indeed, {" "}
                  <NoBreak>
                    <Math>
                      $a^2 + b^2 = 2a^2 = 2ab$
                    </Math>
                    .)
                  </NoBreak>
                </OuterP>
              </SolutionNote>
            </Solution>
          </Exercise>
          <Exercise number={2}>
            <ExerciseStatement id="_193_h.a.i_">
              <OuterP>
                <b>
                  Exercise 2.
                </b>
                {" "}
                What might
                {" "}
                <InChapterLink
                  href="/article/appendixA#_191_h.a.i_"
                  class="in-chapter-link"
                >
                  Exercise 1
                </InChapterLink>
                {" "}
                have to do with sine and cosine?
              </OuterP>
            </ExerciseStatement>
            <Solution>
              <OuterP>
                Setting {" "}
                <NoBreak>
                  <Math>
                    $a = \cos x$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $b = \sin x$
                </Math>
                {" "}
                gives us
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \huge 1 \geq 2\sin x\cos x
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
                by {" "}
                <NoBreak>
                  <Math>
                    $\cos^2 x + \sin^2 x = 1$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                or
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \huge \sin x\cos x \leq &#123;1\over 2&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                equivalently. 
                (This is one possibility of an answer, at least.)
              </OuterP>
              <Pause />
              <SolutionNote>
                <OuterP>
                  <i>
                    Note 1.
                  </i>
                  {" "}
                  The same inequality can be deduced 
                  by the angle-sum formula for sin and the
                  fact that {" "}
                  <Math>
                    $|\sin x| \leq 1$
                  </Math>
                  {" "} for all {" "}
                  <NoBreak>
                    <Math>
                      $x \in \rr$
                    </Math>
                    :
                  </NoBreak>
                </OuterP>
                <Pause />
                <MathBlock>
                  $$
                  \huge \sin x\cos x = &#123;1\over 2&#125;\sin(2x) \leq &#123;1\over 2&#125;\cdot 1 = &#123;1\over 2&#125;
                  $$
                  <ImageLeft
                    src="/build-img/svgo-svg/R199.svg"
                    compensate_offset_x_for_large_text_columns={true}
                  />
                </MathBlock>
              </SolutionNote>
              <Pause />
              <SolutionNote id="_192_h.a.i_">
                <OuterP>
                  <i>
                    Note 2.
                  </i>
                  {" "}
                  The {" "}
                  <NoBreak>
                    “
                    <Math>
                      $a^2 + b^2 \geq 2ab$
                    </Math>
                    ”
                  </NoBreak>
                  {" "} inequality 
                  also tells us that
                </OuterP>
                <Pause />
                <MathBlock>
                  $$
                  \huge \sin x\cos x = &#123;1\over 2&#125;
                  $$
                </MathBlock>
                <Pause />
                <OuterP>
                  if and only if {" "}
                  <NoBreak>
                    <Math>
                      $\sin x = \cos x$
                    </Math>
                    ,
                  </NoBreak>
                  {" "} which is to say
                  if and only if {" "}
                  <Math>
                    $x = \eta/2 + 2\eta k$
                  </Math>
                  {" "} {" "}
                  <NoBreak>
                    [
                    <Math>
                      $x \in \&#123;\eta/2 + 2\eta k: k \in \zz\&#125;$
                    </Math>
                    ],
                  </NoBreak>
                  {" "}
                  since, as observed in Note 1 of {" "}
                  <InChapterLink
                    href="/article/appendixA#_191_h.a.i_"
                    class="in-chapter-link"
                  >
                    Exercise 1
                  </InChapterLink>
                  &#8288;,
                  equality holds if and only if {" "}
                  <NoBreak>
                    <Math>
                      $a = b$
                    </Math>
                    ,
                  </NoBreak>
                  {" "} i.e., in our
                  case, if and only if {" "}
                  <NoBreak>
                    <Math>
                      $\cos x = \sin x$
                    </Math>
                    !
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
                  Since
                </OuterP>
                <Pause />
                <MathBlock>
                  $$
                  \huge \sin \theta = 1
                  $$
                </MathBlock>
                <Pause />
                <OuterP>
                  if and ony if {" "}
                  <NoBreak>
                    <Math>
                      $\theta \in \&#123;\eta + 4\eta k : k \in \zz\&#125;$
                    </Math>
                    ,
                  </NoBreak>
                  {" "}
                  we have
                </OuterP>
                <Pause />
                <MathBlock>
                  $$
                  \huge \sin(2x) = 1
                  $$
                </MathBlock>
                <Pause />
                <OuterP>
                  if and only if 
                  {" "}
                  <NoBreak>
                    <Math>
                      $x \in \&#123;\eta/2 + 2\eta k: k \in \zz\&#125;$
                    </Math>
                    ,
                  </NoBreak>
                  {" "} 
                  so the second proof of the inequality via the
                  angle-sum formula for sin also gives us
                  the final conclusion of {" "}
                  <InChapterLink
                    href="/article/appendixA#_192_h.a.i_"
                    class="in-chapter-link"
                  >
                    Note 2
                  </InChapterLink>
                  &#8288;, though it does
                  not provide the extra semantic observation that
                  “this happens if and only if {" "}
                  <NoBreak>
                    <Math>
                      $\sin x = \cos x$
                    </Math>
                    ”.
                  </NoBreak>
                  {" "}
                  (It only gives the final set of {" "}
                  <NoBreak>
                    <Math>
                      $x$
                    </Math>
                    's
                  </NoBreak>
                  {" "} for which
                  equality holds, which just happens to be those
                  {" "}
                  <NoBreak>
                    <Math>
                      $x$
                    </Math>
                    's
                  </NoBreak>
                  {" "} for which {" "}
                  <NoBreak>
                    <Math>
                      $\sin x = \cos x$
                    </Math>
                    .)
                  </NoBreak>
                </OuterP>
              </SolutionNote>
            </Solution>
          </Exercise>
          <Exercise number={3}>
            <ExerciseStatement id="_194_h.a.i_">
              <OuterP>
                <b>
                  Exercise 3.
                </b>
                {" "}
                Using only algebra, prove that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                |\cos x + \sin x| \leq \sqrt&#123;2&#125;
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
                characterize those {" "}
                <NoBreak>
                  <Math>
                    $x$
                  </Math>
                  's
                </NoBreak>
                {" "} for which the inequality
                holds with equality.
              </OuterP>
            </ExerciseStatement>
            <Solution>
              <OuterP>
                Since we can square the two sides of an
                inequality for which both sides are nonnegative,
                we have
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \begin&#123;aligned&#125;
                &amp; |\cos x + \sin x| \leq \sqrt&#123;2&#125; \\
                \iff &amp; \up&#123;1.5&#125; (\cos x + \sin x)^2 \leq (\sqrt&#123;2&#125;)^2 \\
                \iff &amp; \up&#123;1.5&#125; \cos^2 x + 2\cos x\sin x + \sin^2 x \leq 2 \\
                \iff &amp; \up&#123;1.5&#125; 1 + 2\cos x\sin x \leq 2 \\
                \iff &amp; \up&#123;1.5&#125; 2\cos x\sin x \leq 1 \\
                \iff &amp; \up&#123;1.5&#125; \cos x\sin x \leq &#123;1\over 2&#125;
                \end&#123;aligned&#125;
                $$
                <ImageLeft
                  src="/build-img/svgo-svg/kHZk.svg"
                  offset_y="0.7em"
                  compensate_offset_x_for_large_text_columns={true}
                />
              </MathBlock>
              <Pause />
              <OuterP>
                ...and we know that the last inequality (even,
                the next-to-last inequality) to be true by
                {" "}
                <InChapterLink
                  href="/article/appendixA#_193_h.a.i_"
                  class="in-chapter-link"
                >
                  Exercise 2
                </InChapterLink>
                &#8288;.
              </OuterP>
              <OuterP class="indent-10">
                This establishes the inequality.
              </OuterP>
              <OuterP class="indent-10">
                For the second part of the question
                we can observe
                that the above sequence of 
                if-and-only-ifs
                also holds
                if we replace {" "}
                <NoBreak>
                  “
                  <Math>
                    $\leq$
                  </Math>
                  ”
                </NoBreak>
                {" "} with {" "}
                <NoBreak>
                  “
                  <Math>
                    $=$
                  </Math>
                  ”
                </NoBreak>
                {" "} throughout, 
                so equality occurs if and only if
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \cos x\sin x = &#123;1\over 2&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                which, as covered in {" "}
                <InChapterLink
                  href="/article/appendixA#_192_h.a.i_"
                  class="in-chapter-link"
                >
                  Note 2 of Exercise 2
                </InChapterLink>
                &#8288;,
                occurs if and only if {" "}
                <NoBreak>
                  <Math>
                    $\cos x = \sin x$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                i.e., iff {" "}
                <NoBreak>
                  <Math>
                    $x \in \&#123;\eta/2 + 2\eta k: k \in \zz\&#125;$
                  </Math>
                  .
                </NoBreak>
              </OuterP>
            </Solution>
          </Exercise>
          <Exercise number={4}>
            <ExerciseStatement id="_195_h.a.i_">
              <OuterP>
                <b>
                  Exercise 4.
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
          <Exercise number={5}>
            <ExerciseStatement id="_196_h.a.i_">
              <OuterP>
                <b>
                  Exercise 5.
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
          <Exercise number={6}>
            <ExerciseStatement id="_197_h.a.i_">
              <OuterP>
                <b>
                  Exercise 6.
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
          <Exercise number={7}>
            <ExerciseStatement id="_198_h.a.i_">
              <OuterP>
                <b>
                  Exercise 7.
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
                <a
                  href="/article/chapter5#_151_h.a.i_"
                  class="out-chapter-link"
                >
                  Exercise 56
                </a>
                &#8288;.)
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
                <a
                  href="/article/chapter5#_151_h.a.i_"
                  class="out-chapter-link"
                >
                  Exercise 56
                </a>
                &#8288;,
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
                (cf. {" "}
                <a
                  href="/article/chapter3#_53_h.a.i_"
                  class="out-chapter-link"
                >
                  Exercise 14 of Chapter 3
                </a>
                &#8288;,
                part 1 of {" "}
                <a
                  href="/article/chapter5#_128_h.a.i_"
                  class="out-chapter-link"
                >
                  Exercise 33
                </a>
                {" "} in this chapter) that
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
          <Exercise number={8}>
            <ExerciseStatement id="_199_h.a.i_">
              <OuterP>
                <b>
                  Exercise 8.
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
          <Exercise number={9}>
            <ExerciseStatement id="_200_h.a.i_">
              <OuterP>
                <b>
                  Exercise 9.
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
          <Exercise number={10}>
            <ExerciseStatement id="_201_h.a.i_">
              <OuterP>
                <b>
                  Exercise 10.
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
                  in Exercise {" "}
                  <InTextWarning>
                    undefined handle at ch5^exercises/_for_every_A1_A2_.wly:157:13: _cosx_to_cosx_
                  </InTextWarning>
                  +
                  <i>
                    sinx
                  </i>
                  , if you recall.)
                </OuterP>
              </SolutionNote>
            </Solution>
          </Exercise>
          <Exercise number={11}>
            <ExerciseStatement id="_202_h.a.i_">
              <OuterP>
                <b>
                  Exercise 11.
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
          <Exercise number={12}>
            <ExerciseStatement id="_203_h.a.i_">
              <OuterP>
                <b>
                  Exercise 12.
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
          <Exercise number={13}>
            <ExerciseStatement id="_204_h.a.i_">
              <OuterP>
                <b>
                  Exercise 13.
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
          <Exercise number={14}>
            <ExerciseStatement id="_205_h.a.i_">
              <OuterP>
                <b>
                  Exercise 14.
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
          <Exercise number={15}>
            <ExerciseStatement id="_206_h.a.i_">
              <OuterP>
                <b>
                  Exercise 15.
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
          <Exercise number={16}>
            <ExerciseStatement id="_207_h.a.i_">
              <OuterP>
                <b>
                  Exercise 16.
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
          <Exercise number={17}>
            <ExerciseStatement id="_208_h.a.i_">
              <OuterP>
                <b>
                  Exercise 17.
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
          <Exercise number={18}>
            <ExerciseStatement id="_209_h.a.i_">
              <OuterP>
                <b>
                  Exercise 18.
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
          <Exercise number={19}>
            <ExerciseStatement id="_210_h.a.i_">
              <OuterP>
                <b>
                  Exercise 19.
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
                <a
                  href="/article/chapter4#_74_h.a.i_"
                  class="out-chapter-link"
                >
                  Exercise 12
                </a>
                &#8288;, the function
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
          <Exercise number={20}>
            <ExerciseStatement id="_211_h.a.i_">
              <OuterP>
                <b>
                  Exercise 20.
                </b>
                {" "}
                True or false: 
                for all {" "}
                <NoBreak>
                  <Math>
                    $B_1$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $B_2 \in \rr$
                  </Math>
                  ,
                </NoBreak>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \cos(B_1x) + \sin(B_2x)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                can be rewritten
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                W\cdot\cos(x + \psi)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for some {" "}
                <NoBreak>
                  <Math>
                    $W$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $\psi \in \rr$
                  </Math>
                  .
                </NoBreak>
              </OuterP>
            </ExerciseStatement>
            <Solution>
              <OuterP>
                If {" "}
                <NoBreak>
                  <Math>
                    $B_1 = B_2 = 2$
                  </Math>
                  ,
                </NoBreak>
                {" "} e.g., then
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \cos(B_1x) + \sin(B_2x) = \cos(2x) + \sin(2x)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is periodic mod {" "}
                <NoBreak>
                  <Math>
                    $2\eta$
                  </Math>
                  ,
                </NoBreak>
                {" "} but
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                W\cdot \cos(x + \psi)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is only going to be periodic mod {" "}
                <NoBreak>
                  <Math>
                    $4\eta$
                  </Math>
                  ,
                </NoBreak>
                {" "} not
                {" "}
                <NoBreak>
                  <Math>
                    $2\eta$
                  </Math>
                  ,
                </NoBreak>
                {" "} unless one sets {" "}
                <NoBreak>
                  <Math>
                    $W = 0$
                  </Math>
                  ,
                </NoBreak>
                {" "} which is obviously
                not going to work, so the statement is false.
              </OuterP>
            </Solution>
          </Exercise>
          <Exercise number={21}>
            <ExerciseStatement id="_212_h.a.i_">
              <OuterP>
                <b>
                  Exercise 21.
                </b>
                {" "}
                The graph {" "}
                <Math>
                  $y = \cos x + \sin x$
                </Math>
                {" "} from {" "}
                <a
                  href="/article/chapter5#_147_h.a.i_"
                  class="out-chapter-link"
                >
                  Exercise 52
                </a>
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
                Note that if we move 
                diagonally along a line of angle {" "}
                <Math>
                  $-45^\circ$
                </Math>
                {" "} 
                from a point {" "}
                <Math>
                  $(x_1, y_1)$
                </Math>
                {" "}
                to a point {" "}
                <NoBreak>
                  <Math>
                    $(x_2, y_2)$
                  </Math>
                  ...
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/AwZe.svg" />
              <Pause />
              <OuterP>
                ...then...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x_1 + y_1 = x_2 + y_2
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...because whatever has been gained in the {" "}
                <NoBreak>
                  <Math>
                    $x$
                  </Math>
                  -coordinate
                </NoBreak>
                {" "}
                has been lost in the {" "}
                <NoBreak>
                  <Math>
                    $y$
                  </Math>
                  -coordinate,
                </NoBreak>
                {" "} and vice-versa. In
                particular,
              </OuterP>
              <Pause />
              <CentralDisplay>
                ALL
              </CentralDisplay>
              <Pause />
              <OuterP>
                points on any line of angle {" "}
                <Math>
                  $-45^\circ$
                </Math>
                {" "} have the
                same coordinate sum as one another—such a line is indeed
                the graph of the solution to an equation of the form
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x + y = c
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                (to be read “the coordinate sum is such-and-such {" "}
                <NoBreak>
                  [
                  <Math>
                    $c$
                  </Math>
                  ]”)
                </NoBreak>
                {" "}
                because if we solve the latter equation for {" "}
                <Math>
                  $y$
                </Math>
                {" "} we find
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                y = c - x
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...a line of slope {" "}
                <NoBreak>
                  <Math>
                    $-1$
                  </Math>
                  ,
                </NoBreak>
                {" "} i.e., a line of angle {" "}
                <NoBreak>
                  <Math>
                    $-45^\circ$
                  </Math>
                  !
                </NoBreak>
                {" "}
                (Yes, well, anyway.) In particular, if we draw a “heatmap” of
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x + y
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                over all points {" "}
                <Math>
                  $(x, y) \in \rr^2$
                </Math>
                {" "} we find a pattern of diagonal bands of 
                slope {" "}
                <NoBreak>
                  <Math>
                    $-1$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/6ho6.svg" />
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
                \cos x + \sin x
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
                (\cos x, \sin x)
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
                {" "} added; the {" "}
                <i>
                  value
                </i>
                {" "}
                attained at the maximum is...
              </OuterP>
              <Boxed style="padding-bottom:0.9em">
                <MathBlock>
                  $$
                  \cos(\eta/2) + \sin(\eta/2) = 2\cdot&#123;1\over \sqrt&#123;2&#125;&#125; = \sqrt&#123;2&#125;
                  $$
                </MathBlock>
              </Boxed>
              <OuterP>
                ...since {" "}
                <NoBreak>
                  <Math>
                    $\cos(\eta/2) = \sin(\eta/2) = \sqrt&#123;0.5&#125; = &#123;1\over \sqrt&#123;2&#125;&#125;$
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
                  A similar argument shows that the minimum
                  of {" "}
                  <Math>
                    $\cos x + \sin x$
                  </Math>
                  {" "} is {" "}
                  <NoBreak>
                    <Math>
                      $-\sqrt&#123;2&#125;$
                    </Math>
                    ,
                  </NoBreak>
                  {" "} attained
                  at {" "}
                  <Math>
                    $x = -135^\circ$
                  </Math>
                  {" "} plus or minus any multiple
                  of {" "}
                  <NoBreak>
                    <Math>
                      $360^\circ$
                    </Math>
                    ;
                  </NoBreak>
                  {" "} here is the original graph adorned
                  with some of this extra information:
                </OuterP>
                <Pause />
                <Image src="/build-img/svgo-svg/GHRw.svg" />
                <Pause />
                <OuterP>
                  Or using radians (in some ways clearer):
                </OuterP>
                <Pause />
                <Image src="/build-img/svgo-svg/BJ2x.svg" />
                <Pause />
                <OuterP>
                  (Note that {" "}
                  <Math>
                    $45^\circ = 0.78539\ldots = \eta/2$
                  </Math>
                  {" "}
                  as a real number, there is no technical difference
                  between the two graphs.)
                </OuterP>
              </SolutionNote>
              <Pause />
              <SolutionNote>
                <OuterP>
                  <i>
                    Note 2.
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
              <Pause />
              <SolutionNote>
                <OuterP>
                  <i>
                    Note 3.
                  </i>
                  {" "}
                  In general, the sum
                </OuterP>
                <Pause />
                <MathBlock>
                  $$
                  x_0 + y_0
                  $$
                </MathBlock>
                <Pause />
                <OuterP>
                  of the coordinates of a point {" "}
                  <Math>
                    $(x, y) \in \rr^2$
                  </Math>
                  {" "} 
                  affords this geometric interpretation:
                </OuterP>
                <Pause />
                <Image src="/build-img/svgo-svg/yicL.svg" />
                <Pause />
                <OuterP>
                  (By the time you reach one of the axes,
                  all of the coordinate sum is concentrated
                  in one coordinate.)
                  This can also be used to compute
                </OuterP>
                <Pause />
                <MathBlock>
                  $$
                  \cos(\eta/2) + \sin(\eta/2)
                  $$
                </MathBlock>
                <Pause />
                <OuterP>
                  by the following, somewhat clever diagram:
                </OuterP>
                <Pause />
                <Image src="/build-img/svgo-svg/spaK.svg" />
                <Pause />
                <OuterP>
                  ...which is an application of the Pythagorean theorem. 
                  (In the above, {" "}
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
            </Solution>
          </Exercise>
          <Exercise number={22}>
            <ExerciseStatement id="_213_h.a.i_">
              <OuterP>
                <b>
                  Exercise 22.
                </b>
                {" "}
                The graph {" "}
                <Math>
                  $y = \cos(x) + \sin(x)$
                </Math>
                {" "} from {" "}
                <a
                  href="/article/chapter5#_147_h.a.i_"
                  class="out-chapter-link"
                >
                  Exercise 52
                </a>
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
              <Image src="/build-img/svgo-svg/C0lu.svg" />
              <Pause />
              <Image src="/build-img/svgo-svg/GElL.svg" />
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
                \cos x + \sin x
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
                (\cos x, \sin x)
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
          <Exercise number={23}>
            <ExerciseStatement id="_214_h.a.i_">
              <OuterP>
                <b>
                  Exercise 23.
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
        </Exercises>
      </Section>
      <Rest />
    </Article>
  );
}

const Rest = () => {
  const showMore = useShowMore();
  return <>
    {showMore() && <>
    </>}
  </>;
};