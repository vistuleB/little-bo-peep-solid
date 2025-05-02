import Chapter from "~/components/Chapter";
import { Section, Note, SolutionNote, Example, NoBreak, Pause, WriterlyBlankLine } from "~/components/Wrappers";
import { CentralDisplay, CentralDisplayItalic } from "~/components/Delimiters";
import TextParent from "~/components/TextParent";
import { Math, MathBlock } from "~/components/Math";
import { ImageRight, ImageLeft } from "~/components/SideImage";
import Image from "~/components/Image";
import InlineImage from "~/components/InlineImage";
import { Exercise, Exercises, ExerciseStatement } from "~/components/Exercises";
import InChapterLink from "~/components/InChapterLink";
import Solution from "~/components/Solution";
import Table from "~/components/Table";
import Grid from "~/components/Grid";
import { List, Item } from "~/components/List";
import { SectionDivider } from "~/components/SectionDivider";
import { StarDivider } from "~/components/StarDivider";
import VerticalChunk from "~/components/VerticalChunk";
import useSetRoute from "~/hooks/useSetRoute";
import useShowMore from "~/hooks/useShowMore";

const Article = () => {
  useSetRoute();
  return (<>
      <Chapter
        number={5}
        title="The Trigonometric Functions">
        <a
          class="prev_page"
          href="/article/chapter4" />
        <Section>
          <VerticalChunk>
            <b>
              Cos and Sin. (“Cosine” and “sine”.)
            </b>
            {" "}
            We've already encountered the ‘cos’ 
            function in Exercise 7 of Chapter 3, e.g.. 
            It is the one that has this graph:
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch5_ch_cosine.svg" />
          <Pause />
          <VerticalChunk>
            It has a close cousin named ‘sin’.
            While{" "}
            <Math>
              $\cos(x)$
            </Math>
            {" "}“tops off” at{" "}
            <NoBreak>
              <Math>
                $x = 0$
              </Math>
              ,
            </NoBreak>
            {" "}
            {" "}
            <Math>
              $\sin(x)$
            </Math>
            {" "}goes diagonally through the point
            {" "}
            <NoBreak>
              <Math>
                $(0, 0)$
              </Math>
              :
            </NoBreak>
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch5_ch_cosine_and_sine.svg" />
          <Pause />
          <VerticalChunk>
            As far as standard definitions go,
            {" "}
            <Math>
              $\cos(x)$
            </Math>
            {" "}is the
          </VerticalChunk>
          <Pause />
          <CentralDisplayItalic>
            {" "}{" "}
            <NoBreak>
              <Math>
                $x$
              </Math>
              -coordinate
            </NoBreak>
            {" "}{" "}
          </CentralDisplayItalic>
          <Pause />
          <VerticalChunk>
            and{" "}
            <Math>
              $\sin(x)$
            </Math>
            {" "}is the
          </VerticalChunk>
          <Pause />
          <CentralDisplayItalic>
            {" "}{" "}
            <NoBreak>
              <Math>
                $y$
              </Math>
              -coordinate
            </NoBreak>
            {" "}{" "}
          </CentralDisplayItalic>
          <Pause />
          <VerticalChunk>
            of a point{" "}
            <Math>
              $x$
            </Math>
            {" "}units counterclockwise from
            {" "}
            <Math>
              $(1, 0)$
            </Math>
            {" "}on the unit circle. (Nb: “a”
          </VerticalChunk>
          <Pause />
          <CentralDisplayItalic>
            unit circle
          </CentralDisplayItalic>
          <Pause />
          <VerticalChunk>
            is a circle of radius{" "}
            <NoBreak>
              <Math>
                $1$
              </Math>
              ,
            </NoBreak>
            {" "}while “the” unit
            circle is the circle of radius{" "}
            <Math>
              $1$
            </Math>
            {" "}centered
            at{" "}
            <NoBreak>
              <Math>
                $(0, 0)$
              </Math>
              .)
            </NoBreak>
            {" "}For example, if we look at{" "}
            <NoBreak>
              <Math>
                $x = &#123;1\over 2&#125;$
              </Math>
              ,
            </NoBreak>
            {" "}
            we see{" "}
            <NoBreak>
              <Math>
                $\cos(&#123;1\over 2&#125;) \approx 0.9$
              </Math>
              ,
            </NoBreak>
            {" "}
            {" "}
            <NoBreak>
              <Math>
                $\sin(&#123;1\over 2&#125;) \approx 0.5$
              </Math>
              :
            </NoBreak>
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch5_ch_cosine_and_sine_@0.5.svg" />
          <Pause />
          <VerticalChunk>
            Per the definitions,
            the point half a unit
            counterclockwise from{" "}
            <Math>
              $(1, 0)$
            </Math>
            {" "}on the unit
            circle has coordinates{" "}
            <Math>
              $\approx 0.9$
            </Math>
            {" "}in{" "}
            <Math>
              $x$
            </Math>
            {" "}
            and{" "}
            <Math>
              $\approx 0.5$
            </Math>
            {" "}in{" "}
            <Math>
              $y$
            </Math>
            {" "}(or actually{" "}
            <Math>
              $0.87758...$
            </Math>
            {" "}
            and{" "}
            <NoBreak>
              <Math>
                $0.47942...$
              </Math>
              ,
            </NoBreak>
            {" "}it turns out, as we can know by
            a calculator equipped with ‘sin’ and ‘cos’):
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch5_ch_unit_circle_@0.5_smaller.svg" />
          <Pause />
          <VerticalChunk>
            As a second example, the graphs indicate that 
            {" "}
            <NoBreak>
              <Math>
                $\sin(-3) \approx -0.2$
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <Math>
              $\cos(-3) \approx -0.99$
            </Math>
            {" "}
            (or something very close to{" "}
            <NoBreak>
              <Math>
                $-1$
              </Math>
              ,
            </NoBreak>
            {" "}in any case):
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch5_ch_cosine_and_sine_@-3.svg" />
          <Pause />
          <VerticalChunk>
            Indeed, going{" "}
            <Math>
              $-3$
            </Math>
            {" "}units counterclockwise—which
            means, going{" "}
            <Math>
              $3$
            </Math>
            {" "}units clockwise—on the unit
            circle, starting from{" "}
            <NoBreak>
              <Math>
                $(1, 0)$
              </Math>
              ,
            </NoBreak>
            {" "}brings us to a point
            with{" "}
            <NoBreak>
              <Math>
                $y$
              </Math>
              -
            </NoBreak>
            {" "}and{" "}
            <NoBreak>
              <Math>
                $x$
              </Math>
              -coordinates
            </NoBreak>
            {" "}of{" "}
            <Math>
              $\approx -0.2$
            </Math>
            {" "}
            and{" "}
            <Math>
              $\approx -0.99$
            </Math>
            {" "}respectively (or{" "}
            <Math>
              $-0.1411...$
            </Math>
            {" "}
            and{" "}
            <NoBreak>
              <Math>
                $-0.989992...$
              </Math>
              ,
            </NoBreak>
            {" "}to be exact, it turns out):
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch5_ch_unit_circle_@-3_smaller.svg" />
          <Pause />
          <VerticalChunk>
            For a last example, 
            note that there appears
            to be a value of{" "}
            <Math>
              $x$
            </Math>
            {" "}near{" "}
            <NoBreak>
              <Math>
                $-1.6$
              </Math>
              ,
            </NoBreak>
            {" "}where{" "}
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
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch5_ch_cosine_and_sine_@minus_eta.svg" />
          <Pause />
          <VerticalChunk>
            Some thought reveals that this value of{" "}
            <Math>
              $x$
            </Math>
            {" "}
            would be{" "}
            <i>
              minus one-quarter the circumference
              of a unit circle
            </i>
            , because{" "}
            <Math>
              $(0, -1)$
            </Math>
            {" "}is 
            one-quarter of the unit circle clockwise from{" "}
            <NoBreak>
              <Math>
                $(1, 0)$
              </Math>
              .
            </NoBreak>
            {" "}
            Note that one-quarter the circumference of a unit
            circle was estimated to be
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$
            \approx &#123;11\over 7&#125; = 1.\overline&#123;571428&#125;
            $$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            in Exercise 24 of Chapter 3 (by direct inspection
            of the graph{" "}
            <NoBreak>
              <Math>
                $y = \cos(x)$
              </Math>
              ,
            </NoBreak>
            {" "}for that matter,
            which may or may not be cheating), which agrees
            with the visual estimate{" "}
            <NoBreak>
              <Math>
                $x \approx -1.6$
              </Math>
              .
            </NoBreak>
            {" "}(But
            that value would be namely{" "}
            <NoBreak>
              <Math>
                $x = -1.57...$
              </Math>
              ,
            </NoBreak>
            {" "}not
            {" "}
            <NoBreak>
              <Math>
                $x = -1.6$
              </Math>
              .)
            </NoBreak>
          </VerticalChunk>
          <VerticalChunk indent={true}>
            In another possible definition,
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$
            \sin(x)
            $$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            is defined as the{" "}
            <NoBreak>
              <Math>
                $x$
              </Math>
              -coordinate
            </NoBreak>
            {" "}of a point that
            is{" "}
            <Math>
              $x$
            </Math>
            {" "}units counterclockwise from{" "}
            <Math>
              $(0, -1)$
            </Math>
            {" "}on
            the unit circle. In this case,{" "}
            <Math>
              $\sin(x)$
            </Math>
            {" "}and
            {" "}
            <Math>
              $\cos(x)$
            </Math>
            {" "}are both defined by{" "}
            <NoBreak>
              <Math>
                $x$
              </Math>
              -coordinates:
            </NoBreak>
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch5_ch_unit_circle_with_new_definition.svg" />
          <Pause />
          <VerticalChunk>
            In more detail, if you tilt your head  sideways,
            you will see that the{" "}
            <Math>
              $x$
            </Math>
            {" "}axis looks, from the
            vantage point of{" "}
            <NoBreak>
              <Math>
                $(0, -1)$
              </Math>
              ,
            </NoBreak>
            {" "}the same as the{" "}
            <Math>
              $y$
            </Math>
            {" "}
            axis looks from the vantage point of{" "}
            <NoBreak>
              <Math>
                $(1, 0)$
              </Math>
              .
            </NoBreak>
            {" "}
            So the old and new definitions of{" "}
            <Math>
              $\sin(x)$
            </Math>
            {" "}are
            equivalent! (👍👍)
          </VerticalChunk>
          <VerticalChunk indent={true}>
            In particular,{" "}
            <Math>
              $\sin(x)$
            </Math>
            {" "}and{" "}
            <Math>
              $\cos(x)$
            </Math>
            {" "}can also
            be understood as the{" "}
            <NoBreak>
              <Math>
                $x$
              </Math>
              -coordinates
            </NoBreak>
            {" "}of two
            particles on the unit circle such that the ‘sin’
            particle is one-quarter-turn behind the{" "}
            <NoBreak>
              ‘
              <Math>
                $\cos$
              </Math>
              ’
            </NoBreak>
            {" "}
            particle:
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch5_ch_unit_circle_with_sin_and_cos_particles.svg" />
          <Pause />
          <VerticalChunk>
            ...to be contrasted with our first definition,
            employing a single point projected onto
            two different axes:
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch5_ch_unit_circle_with_sincos_particle.svg" />
          <Pause />
          <VerticalChunk>
            The second definition (former diagram) explains
            why values of{" "}
            <Math>
              $\sin$
            </Math>
            {" "}lag a fixed amount behind
            values of{" "}
            <NoBreak>
              <Math>
                $\cos$
              </Math>
              .
            </NoBreak>
            {" "}(“Lagging” when you read the
            graphs from left to right.) It's because the ‘sin’
            particle follows in the trail blazed by the ‘cos’
            particle!
          </VerticalChunk>
        </Section>
        <Rest />
      </Chapter>
  </>);
};

const Rest = () => {
  const showMore = useShowMore();
  return(<>
    { showMore() && <>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Derivatives.
          </b>
          {" "}
          Continuing the last “chapter” in the
          definitions of{" "}
          <Math>
            $\sin$
          </Math>
          {" "}and{" "}
          <NoBreak>
            <Math>
              $\cos$
            </Math>
            ,
          </NoBreak>
          {" "}we can
          add two more particles to the diagram that
          defines ‘sin’ and ‘cos’ via{" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinates.
          </NoBreak>
          {" "}
          The two new particles are labeled{" "}
          <NoBreak>
            “
            <Math>
              $-\!\sin$
            </Math>
            ”
          </NoBreak>
          {" "}
          and{" "}
          <NoBreak>
            “
            <Math>
              $-\!\cos$
            </Math>
            ”:
          </NoBreak>
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_unit_circle_with_four_particles.svg" />
        <Pause />
        <VerticalChunk>
          These labels are chosen
          because
          the{" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinate
          </NoBreak>
          {" "}of the
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
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          -\!\sin(x)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          by symmetry with the{" "}
          <Math>
            $\sin$
          </Math>
          {" "}particle,
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
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          x \ra -\!\sin(x)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          also known simply as
        </VerticalChunk>
        <Pause />
        <CentralDisplay>
          {" "}{" "}
          <NoBreak>
            “
            <Math>
              $-\!\sin$
            </Math>
            ”
          </NoBreak>
          {" "}{" "}
        </CentralDisplay>
        <Pause />
        <VerticalChunk>
          by the general definition that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          -f = (x \ra -f(x))
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          for all{" "}
          <NoBreak>
            <Math>
              $f : \rr \ra \rr$
            </Math>
            ,
          </NoBreak>
          {" "}
          and similarly for{" "}
          <NoBreak>
            “
            <Math>
              $-\!\cos$
            </Math>
            ”.
          </NoBreak>
        </VerticalChunk>
        <VerticalChunk indent={true}>
          Adding the curves for{" "}
          <Math>
            $-\!\sin$
          </Math>
          {" "}and{" "}
          <Math>
            $-\!\cos$
          </Math>
          {" "}
          to the graphs fills the “gap” between{" "}
          <Math>
            $y = \sin(x)$
          </Math>
          {" "}
          and{" "}
          <Math>
            $y = \cos(x)$
          </Math>
          {" "}with two new equally-spaced curves; 
          note that 
          {" "}
          <Math>
            $\cos$
          </Math>
          {" "}lags behind{" "}
          <Math>
            $-\!\sin$
          </Math>
          {" "}
          (reading the graphs from left to right)
          by the same amount that{" "}
          <Math>
            $\sin$
          </Math>
          {" "}lags behind
          {" "}
          <NoBreak>
            <Math>
              $\cos$
            </Math>
            ,
          </NoBreak>
          {" "}etc:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_four_curves.svg" />
        <Pause />
        <VerticalChunk>
          These are the same four curves that
          appear in Exercise 12 of Chapter 4.
          In particular,
        </VerticalChunk>
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
        <VerticalChunk>
          because the rate of change of each
          particle's{" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinate
          </NoBreak>
          {" "}is the
          {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinate
          </NoBreak>
          {" "}of the next particle
          in the order of rotation, as explained
          in the solution to that problem.
          (Clockwise vs. counterclockwise rotation
          notwithstanding.)
        </VerticalChunk>
        <VerticalChunk indent={true}>
          One can also note that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          (-f)' = ((-1)\cdot f)' = (-1) \cdot f' = -f'
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          in general for any{" "}
          <Math>
            $f : \rr \ra \rr$
          </Math>
          {" "}
          (cf. Exercise 20 and Exercise 10 of Chapter 4),
          which implies that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          (-\!\sin)' = -\!\sin'
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          (or
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          (-\!\sin)' = -\!\sin' = -\!\cos
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          to finish the computation),
          and that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          (-\!\cos)' = -\!\cos'
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          (or
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          (-\!\cos)' = -\!\cos' = -(-\!\sin) = \sin
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          to finish the computation),
          which means that one only needs to
          remember the first two equations. Though,
          in fact, one really just needs to remember 
          the four-particle diagram!
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Even/odd identities, and identities with{" "}
            <NoBreak>
              “
              <Math>
                $\eta$
              </Math>
              ”.
            </NoBreak>
            {" "}{" "}
          </b>
          {" "}
          One has
        </VerticalChunk>
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
        <VerticalChunk>
          for all{" "}
          <NoBreak>
            <Math>
              $x \in \rr$
            </Math>
            ,
          </NoBreak>
          {" "}where
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large \eta
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          (“aye-tah”, Greek letter “eta”) is a
          constant that denotes the quarter-circumference
          of a unit circle, or about{" "}
          <NoBreak>
            <Math>
              $&#123;11\over 7&#125;$
            </Math>
            .
          </NoBreak>
          {" "}
          (Cf. Exercise 24, Chapter 4.) You should
          be able to verify each of these identities
          just by looking at them and thinking of the
          definitions of{" "}
          <NoBreak>
            <Math>
              $\sin(x)$
            </Math>
            ,
          </NoBreak>
          {" "}{" "}
          <NoBreak>
            <Math>
              $\cos(x)$
            </Math>
            —possibly
          </NoBreak>
          {" "}
          the “second” definition of{" "}
          <NoBreak>
            <Math>
              $\sin(x)$
            </Math>
            ,
          </NoBreak>
          {" "}in some
          cases—but in case something goes wrong, here
          is a cheat sheet that does some of the thinking
          for you (or, help you compare your way of seeing
          things to the author's way of seeing things):
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_identity_explanations.svg" />
        <Pause />
        <VerticalChunk>
          Two more identities
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \sin(\eta - x) = \cos(x)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          and
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \cos(\eta - x) = \sin(x)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          are related to the last identity above, in that they
          involve symmetry about the line{" "}
          <Math>
            $x = y$
          </Math>
          {" "}in the Cartesian
          plane:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_identity_explanations_more.svg" />
        <Pause />
        <VerticalChunk>
          We also have these identities...
        </VerticalChunk>
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
        <VerticalChunk>
          ...that follow because one full turn 
          around the circle brings you back to the
          same position, whereas a half-turn brings
          you around  to your{" "}
          <i>
            antipode
          </i>
          {" "}(where
          both coordinates are negated), and these 
          two more...
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \displaylines&#123;\up&#123;1.0&#125;\cos(x + \eta) = -\!\sin(x) \\
          \up&#123;1.7&#125;\sin(x - \eta) = -\!\cos(x)&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          ...that follow from the four-particle
          diagram, e.g..
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Relation to derivatives.
          </b>
          {" "}
          Note that the derivatives of
          sin and cos can also be expressed by 
          the [possibly more “logical”] formulas
        </VerticalChunk>
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
        <VerticalChunk>
          given that
        </VerticalChunk>
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
        <VerticalChunk>
          as seen in the previous section.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          In fact, one can make the further observation that
        </VerticalChunk>
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
        <VerticalChunk>
          where{" "}
          <NoBreak>
            “
            <Math>
              $^&#123;(\ell)&#125;$
            </Math>
            ”
          </NoBreak>
          {" "}denotes the{" "}
          <NoBreak>
            <Math>
              $\ell$
            </Math>
            -th
          </NoBreak>
          {" "}
          derivative, for all{" "}
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
          derivative is obtained by adding{" "}
          <Math>
            $+\eta$
          </Math>
          {" "}to the
          input!
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            The pythagorean identity.
          </b>
          {" "}
          Because
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          x^2 + y^2 = 1
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is the equation of the unit circle, and
          points of the form
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          (\cos(x), \sin(x))
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          are points on the unit circle, we have
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \cos^2(x) + \sin^2(x) = 1 \tag&#123;*&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          for all{" "}
          <NoBreak>
            <Math>
              $x \in \rr$
            </Math>
            ,
          </NoBreak>
          {" "}surprise or not.
          We refer to (*) as the{" "}
          <i>
            pythagorean identity
          </i>
          .
        </VerticalChunk>
        <VerticalChunk indent={true}>
          Various “tricks” are associated to the
          pythagorean identity. For example, the
          number
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          1
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is forevermore suspect, because it might
          just be
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \sin^2(x) + \cos^2(x)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          (or for some other variable) in disguise,
          depending on the situation. Also
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \sin^2(y)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          (variable not important) might be
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          1 - \cos^2(y)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          just as
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \cos^2(y)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          might be
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          1 - \sin^2(y)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          (also
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          1 - \cos^2(y)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          and
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          1 - \sin^2(y)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          might end up respectively rewritten
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          (1 - \cos(y))\cdot (1 + \cos(y))
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          and
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          (1 - \sin(y))\cdot (1 + \sin(y))
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          by the difference-of-squares factorization),
          and
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \sin^2(\theta) - \cos^2(\theta)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          might be
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          1 - 2\cos^2(\theta)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          or otherwise
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          2\sin^2(\theta) - 1
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          and symmetrically for the opposite difference. (I.e.,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \,\cos^2(\theta) - \sin^2(\theta),
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          this one.) Etc.
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Inputs as radians.
          </b>
          {" "}
          The
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          radian measure
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          of an angle was briefly touched upon in
          Note{" "}
          <a href="/article/chapter4?id=_929811304059">
            10
          </a>
          {" "}of Exercise 37, Chapter 4. 
          In short, it is a “scientific” measure
          of angles in which the value of an angle
          is the length of a circular arc subtended
          by the angle, divided by the radius of
          that arc:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_radian_definition.svg" />
        <Pause />
        <VerticalChunk>
          The definition implies that the radian
          measure of an angle is the length subtended
          by the angle on a unit circle:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_radian_definition_radius_1.svg" />
        <Pause />
        <VerticalChunk>
          In particular,{" "}
          <Math>
            $90^\circ$
          </Math>
          {" "}is{" "}
          <Math>
            $\eta$
          </Math>
          {" "}radians:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_radian_definition_90_degrees_is.svg" />
        <Pause />
        <VerticalChunk>
          To imprint this fact in our memories:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_radian_definition_90_imprint.svg" />
        <Pause />
        <VerticalChunk>
          (We will often leave out the “rad”—in fact,
          if you don't see a degree symbol{" "}
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
          example,{" "}
          <Math>
            $45^\circ$
          </Math>
          {" "}is{" "}
          <Math>
            $\eta/2$
          </Math>
          {" "}radians:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_radian_definition_45_imprint.svg" />
        <Pause />
        <VerticalChunk>
          aaaand... and so on.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          As a consequence of the definition, a
          displacement of{" "}
          <Math>
            $x$
          </Math>
          {" "}units on the unit circle
          subtends an angle—or technically:{" "}
          <i>
            rotation
          </i>
          , 
          because there is a “positive” direction—and
          you can also say{" "}
          <i>
            signed angle
          </i>
          {" "}instead of
          {" "}
          <i>
            rotation
          </i>
          , by the way—whose (signed) radian
          measure is{" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            :
          </NoBreak>
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_x_displacement_and_x_radians.svg" />
        <Pause />
        <VerticalChunk>
          In particular,
          instead of positing the definitions of
          sin and cos like this...
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_x_displacement_and_x_radians_displacement_definition.svg" />
        <Pause />
        <VerticalChunk>
          ...with the input appearing as a
          displacement, we can posit the definitions
          like this...
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch_ch_x_displacement_and_x_radians_radian_definition.svg" />
        <Pause />
        <VerticalChunk>
          ...with the input appearing as a radian.
        </VerticalChunk>
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 1.
            </b>
            {" "}
            We can conceptualize{" "}
            <NoBreak>
              <Math>
                $\cos(\eta/2)$
              </Math>
              ...
            </NoBreak>
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch_5_ch_etaOver2_example_displacement_version.svg" />
          <Pause />
          <VerticalChunk>
            ...like this, with the input appearing as a displacement,
            or else like this...
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch5_ch_etaOver2_example_angle_version.svg" />
          <Pause />
          <VerticalChunk>
            ...with the input appearing as a radian.
          </VerticalChunk>
        </Example>
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 2.
            </b>
            {" "}
            We can conceptualize{" "}
            <NoBreak>
              <Math>
                $\sin(\eta/3)$
              </Math>
              ...
            </NoBreak>
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch5_ch_etaOver3_example_displacement_version.svg" />
          <Pause />
          <VerticalChunk>
            ...like this, with the input appearing as a displacement,
            or else like this...
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch5_ch_etaOver3_example_angle_version.svg" />
          <Pause />
          <VerticalChunk>
            ...with the input appearing as a radian.
          </VerticalChunk>
        </Example>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
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
          {" "}to be pig lipstick on top of
          radians by defining
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          x^\circ = x \cdot &#123;\eta\over 90&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          for all{" "}
          <NoBreak>
            <Math>
              $x \in \rr$
            </Math>
            ,
          </NoBreak>
          {" "}where the multiplication
          by
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \eta\over 90
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          converts from degrees to radians.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          For example,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          90^\circ = 90 \cdot &#123;\eta\over 90&#125; = \eta
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          and
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          45^\circ = 45 \cdot &#123;\eta\over 90&#125; = \eta/2,
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          per this definition.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          In this way, in particular, we can write
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \cos(90^\circ\hlfbk)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          as a stand-in for
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \cos(\eta)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          ...without committing any informality.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          (Note that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \cos(\eta) = 0
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          in case you had any doubt, by the way—an
          angle of{" "}
          <Math>
            $\eta$
          </Math>
          {" "}puts you at the tippy-top
          of the circle!)
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Sines and cosines of{" "}
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
            {" "}and{" "}
            <NoBreak>
              <Math>
                $\mathbf&#123;60^\circ&#125;$
              </Math>
              .
            </NoBreak>
            {" "}{" "}
          </b>
          {" "}
          Note that every point of the form
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          (\pm\sqrt&#123;x&#125;, \pm\sqrt&#123;1 - x&#125;),\,\,\,0 \leq x \leq 1 \tag&#123;*&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is on the unit circle, because the
          sum-of-the-squares-of-the-two-coordinates is{" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            .
          </NoBreak>
          {" "}
          (The equation of the unit circle is{" "}
          <NoBreak>
            <Math>
              $x^2 + y^2 = 1$
            </Math>
            .)
          </NoBreak>
          {" "}
          E.g.,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          (\sqrt&#123;0.2&#125;, \sqrt&#123;0.8&#125;)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is on the unit circle, as is
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          (\sqrt&#123;0.1&#125;, \sqrt&#123;0.9&#125;)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          and so on. (If you're curious, points of this
          family...
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_that_family.svg" />
        <Pause />
        <VerticalChunk>
          ...look like this.) Vice-versa, every point
          on the unit circle has the form (*) for some 
          {" "}
          <Math>
            $0 \leq x \leq 1$
          </Math>
          {" "}and some choice of the{" "}
          <NoBreak>
            ‘
            <Math>
              $\pm$
            </Math>
            ’
          </NoBreak>
          {" "}
          signs.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          In particular, the unit circle contains the
          following points:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_main_angles_first.svg" />
        <Pause />
        <VerticalChunk>
          Here
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          (\sqrt&#123;0.5&#125;,\, \sqrt&#123;0.5&#125;\rt&#123;0.2&#125;)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is obviously at{" "}
          <Math>
            $45^\circ\hlfbk$
          </Math>
          {" "}from the{" "}
          <Math>
            $x$
          </Math>
          {" "}
          axis, which implies
        </VerticalChunk>
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
        <VerticalChunk>
          or
        </VerticalChunk>
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
        <VerticalChunk>
          in radians. Symmetrically,
        </VerticalChunk>
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
        <VerticalChunk>
          (or
        </VerticalChunk>
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
        <VerticalChunk>
          in radians) in the second quadrant, and so on.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          For the remaining values we rely on the 
          existence of the following two equilateral
          triangles:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_main_angles_two_equilateral_triangles.svg" />
        <Pause />
        <VerticalChunk>
          The first triangle implies that the the unique 
          point on the unit circle with{" "}
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
          {" "}in the first quadrant is at{" "}
          <Math>
            $60^\circ\hlfbk$
          </Math>
          {" "}
          from the{" "}
          <Math>
            $x$
          </Math>
          {" "}axis, while the second triangle implies that the unique point
          on the unit circle with{" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -coordinate
          </NoBreak>
          {" "}{" "}
          <Math>
            $0.5$
          </Math>
          {" "}
          in the first quadrant is at{" "}
          <Math>
            $30^\circ\hlfbk$
          </Math>
          {" "}
          from the{" "}
          <Math>
            $x$
          </Math>
          {" "}axis; but since
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \sqrt&#123;0.25&#125; = 0.5
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          (surprise!), the two points in question must be 
          the afore-shown
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          (\sqrt&#123;0.25&#125;, \,\sqrt&#123;0.75&#125;) = (0.5, \,\sqrt&#123;0.75&#125;)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          at the upper tip of the first triangle, and
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          (\sqrt&#123;0.75&#125;, \,\sqrt&#123;0.25&#125;) = (\sqrt&#123;0.75&#125;, \,0.5)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          at the rightward tip of the second triangle,
          and we find
        </VerticalChunk>
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
        <VerticalChunk>
          and
        </VerticalChunk>
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
        <VerticalChunk>
          by conclusion; or
        </VerticalChunk>
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
        <VerticalChunk>
          and
        </VerticalChunk>
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
        <VerticalChunk>
          in radians!
        </VerticalChunk>
        <VerticalChunk indent={true}>
          (And symmetrically in other quadrants, e.g.,
        </VerticalChunk>
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
        <VerticalChunk>
          a.k.a.,
        </VerticalChunk>
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
        <VerticalChunk>
          in radians, etc.)
        </VerticalChunk>
        <Pause />
        <VerticalChunk>
          <i>
            Postscript 1.
          </i>
          {" "}We have
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \sqrt&#123;0.5&#125; = &#123;1\over \sqrt&#123;2&#125;&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          and
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \sqrt&#123;0.75&#125; = &#123;\sqrt&#123;3&#125;\over 2&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          so the above “wheel of special values” can also be
          drawn as follows (adding the angles in, as well):
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_main_angles_second.svg" />
        <Pause />
        <VerticalChunk>
          <i>
            Postscript 2.
          </i>
          {" "}
          Some teachers also like to so-call
          “rationalize the denominator”; they will write
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          &#123;\sqrt&#123;2&#125;\over 2&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          for{" "}
          <NoBreak>
            <Math>
              $\sqrt&#123;0.5&#125; = &#123;1\over \sqrt&#123;2&#125;&#125;$
            </Math>
            .
          </NoBreak>
          {" "}In this case:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_main_angles_third.svg" />
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Scaling the circle.
          </b>
          {" "}
          In the following diagram, the coordinates 
          of the point{" "}
          <Math>
            $P$
          </Math>
          {" "}are obviously{" "}
          <NoBreak>
            <Math>
              $(\cos(\theta), \sin(\theta))$
            </Math>
            ,
          </NoBreak>
          {" "}
          because that is the definition of sin and cos:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_scaling_circle_1.svg" />
        <Pause />
        <VerticalChunk>
          But say now that
          we re-scale the circle to have some arbitrary
          radius{" "}
          <NoBreak>
            <Math>
              $r$
            </Math>
            ,
          </NoBreak>
          {" "}while maintaining the angle{" "}
          <NoBreak>
            <Math>
              $\theta$
            </Math>
            :
          </NoBreak>
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_scaling_circle_r.svg" />
        <Pause />
        <VerticalChunk>
          ...what are the coordinates of{" "}
          <NoBreak>
            <Math>
              $Q$
            </Math>
            ?
          </NoBreak>
          {" "}
          The coordinates are obviously the old coordinates
          scaled up/down by{" "}
          <NoBreak>
            <Math>
              $r$
            </Math>
            ,
          </NoBreak>
          {" "}i.e.,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          Q = (r\cos(\theta), r\sin(\theta))
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          or, in individual formulas,
        </VerticalChunk>
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
        <VerticalChunk>
          ...where{" "}
          <NoBreak>
            <Math>
              $Q_x$
            </Math>
            ,
          </NoBreak>
          {" "}{" "}
          <Math>
            $Q_y$
          </Math>
          {" "}are the{" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -
          </NoBreak>
          {" "}and{" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -
          </NoBreak>
          {" "}coordinates of{" "}
          <NoBreak>
            <Math>
              $Q$
            </Math>
            .
          </NoBreak>
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Polar coordinates.
          </b>
          {" "}
          The so-called
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          polar coordinates
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          of a point{" "}
          <Math>
            $P$
          </Math>
          {" "}in the plane are a pair of 
          numbers
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          (r, \theta)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          with{" "}
          <Math>
            $r \geq 0$
          </Math>
          {" "}such that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          P = (r\cos(\theta), r\sin(\theta))
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          or namely with the property that:
        </VerticalChunk>
        <TextParent>
          <ul style="list-style-type:disc;margin-top:1em;margin-bottom:1em;">
            <li style="margin:0 60px;">
              <Math>
                $r$
              </Math>
              {" "}is the distance from{" "}
              <Math>
                $P$
              </Math>
              {" "}to the origin;
            </li>
            <li style="margin:0 60px;">
              <Math>
                $\theta$
              </Math>
              {" "}is “the” counterclockwise angle 
              from the positive{" "}
              <Math>
                $x$
              </Math>
              {" "}axis to the segment
              {" "}
              <NoBreak>
                <Math>
                  $OP$
                </Math>
                ,
              </NoBreak>
              {" "}where{" "}
              <Math>
                $O$
              </Math>
              {" "}is the origin;
            </li>
          </ul>
        </TextParent>
        <VerticalChunk>
          ...even though{" "}
          <Math>
            $\theta$
          </Math>
          {" "}is not unique,
          because any multiple of{" "}
          <Math>
            $4\eta$
          </Math>
          {" "}may be
          added to{" "}
          <Math>
            $\theta$
          </Math>
          {" "}without altering the
          values of{" "}
          <Math>
            $\sin(\theta)$
          </Math>
          {" "}or{" "}
          <NoBreak>
            <Math>
              $\cos(\theta)$
            </Math>
            ;
          </NoBreak>
          {" "}
          slightly worse even: if{" "}
          <NoBreak>
            <Math>
              $r = 0$
            </Math>
            ,
          </NoBreak>
          {" "}then
          {" "}
          <Math>
            $\theta$
          </Math>
          {" "}may be anything. (Because in that
          case
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          P = (0, 0)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          and any value of{" "}
          <Math>
            $\theta$
          </Math>
          {" "}will satisfy
          the equation
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          P = (0\cdot \cos(\theta), 0\cdot \sin(\theta))
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          namely.)
        </VerticalChunk>
        <VerticalChunk indent={true}>
          NONETHELESS—even though the polar coordinates
          of a point are not (not ever!) uniquely
          determined, we say “the” polar coordinates of
          a point, out of expediency!
        </VerticalChunk>
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 3.
            </b>
            {" "}
            The pairs
          </VerticalChunk>
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
          <VerticalChunk>
            count among the polar coordinates of the point
            {" "}
            <NoBreak>
              <Math>
                $(1, 1) \in \rr^2$
              </Math>
              .
            </NoBreak>
          </VerticalChunk>
        </Example>
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 4.
            </b>
            {" "}
            The pairs
          </VerticalChunk>
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
          <VerticalChunk>
            count among the polar coordinates of the point
            {" "}
            <NoBreak>
              <Math>
                $(-1, 1) \in \rr^2$
              </Math>
              .
            </NoBreak>
          </VerticalChunk>
        </Example>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Change-of-coordinate formulas.
          </b>
          {" "}
          Definitionally, the equations
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \displaylines&#123;x = r \cos(\theta)\\
          \up&#123;1.3&#125;y = r \sin(\theta)&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          give the change-of-coordinate formulas
          from a polar coordinate{" "}
          <Math>
            $(r, \theta)$
          </Math>
          {" "}
          to a cartesian coordinate{" "}
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
        </VerticalChunk>
        <VerticalChunk indent={true}>
          Conversely, to recover the polar 
          coordinates{" "}
          <Math>
            $(r, \theta)$
          </Math>
          {" "}from the cartesian 
          coordinates{" "}
          <NoBreak>
            <Math>
              $(x, y)$
            </Math>
            ,
          </NoBreak>
          {" "}one has at least
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          r = \sqrt&#123;x^2 + y^2&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          by the Pythagorean theorem, but the 
          formula for{" "}
          <Math>
            $\theta$
          </Math>
          {" "}is not so cheerful—out 
          of completeness, we can jot it down
          anyway, for your entertainment:
        </VerticalChunk>
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
        <VerticalChunk>
          ...where “arctan”, “arccot” are 
          some-functions-or-other-to-be-discussed-later.
        </VerticalChunk>
        <Pause />
        <VerticalChunk>
          <i>
            Note.
          </i>
          {" "}
          Popular programming languages such as
          python offer a function named{" "}
          <span style="font-family:monaco;background-color:beige;font-size:0.8em;border-radius:0.4em;padding:0.1em 0.3em;">
            atan2
          </span>
          that will compute the{" "}
          <i>
            argument
          </i>
          {" "}(see 
          Vocabulary below){" "}
          <Math>
            $\theta$
          </Math>
          {" "}of a given pair 
          {" "}
          <Math>
            $(x, y)$
          </Math>
          {" "}out of the box, without you having to 
          worry about which of{" "}
          <Math>
            $x$
          </Math>
          {" "}or{" "}
          <Math>
            $y$
          </Math>
          {" "}is{" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            ,
          </NoBreak>
          {" "}etc.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          But the call goes{" "}
          <span style="font-family:monaco;background-color:beige;font-size:0.8em;border-radius:0.4em;padding:0.1em 0.3em;">
            atan2(y, x)
          </span>
          &ensp;not
          <span style="font-family:monaco;background-color:beige;font-size:0.8em;border-radius:0.4em;padding:0.1em 0.3em;">
            atan2(x, y)
          </span>
          &ensp;by some bizareness. (Well, actually a 
          throwback to the fact that in this expression...
        </VerticalChunk>
        <Pause />
        <CentralDisplay>
          {" "}{" "}
          <NoBreak>
            “
            <Math>
              $\arctan(y/x)$
            </Math>
            ”
          </NoBreak>
          {" "}{" "}
        </CentralDisplay>
        <Pause />
        <VerticalChunk>
          ...you hit{" "}
          <NoBreak>
            “
            <Math>
              $y$
            </Math>
            ”
          </NoBreak>
          {" "}before{" "}
          <NoBreak>
            “
            <Math>
              $x$
            </Math>
            ”.)
          </NoBreak>
        </VerticalChunk>
        <Pause />
        <VerticalChunk>
          <i>
            Vocabulary.
          </i>
          {" "}
          The first coordinate of a polar 
          coordinate—colloquially,{" "}
          <NoBreak>
            “
            <Math>
              $r$
            </Math>
            ”—is
          </NoBreak>
          {" "}called the 
          {" "}
          <i>
            radius
          </i>
          {" "}or the{" "}
          <i>
            norm
          </i>
          . The second coordinate
          of a polar coordinate—colloquially,{" "}
          <NoBreak>
            “
            <Math>
              $\theta$
            </Math>
            ”—is
          </NoBreak>
          {" "}
          called the{" "}
          <i>
            angle
          </i>
          {" "}or the{" "}
          <i>
            argument
          </i>
          .
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Right triangles.
          </b>
          {" "}
          Hopefully, the following figure should seem
          believable-and/or-familiar, at this point 
          (it's a scaled-up/down unit circle):
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_triangle_sequence_1.svg" />
        <Pause />
        <VerticalChunk>
          If we assume{" "}
          <Math>
            $0 \leq \theta \leq \eta$
          </Math>
          {" "}then both
          {" "}
          <Math>
            $r\cos(\theta)$
          </Math>
          {" "}and{" "}
          <Math>
            $r\sin(\theta)$
          </Math>
          {" "}are nonnegative,
          and we can redraw the figure as a relationship between
          the sidelengths of a right triangle:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_triangle_sequence_2.svg" />
        <Pause />
        <VerticalChunk>
          If we rebrand the three legs of the triangle
          as “hypotenuse”, “opposite”, and “adjacent” according
          to their relationship to the angle{" "}
          <NoBreak>
            <Math>
              $\theta$
            </Math>
            ...
          </NoBreak>
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_triangle_sequence_rebranded.svg" />
        <Pause />
        <VerticalChunk>
          ...the relationship can be written:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_relationships_of_note.svg" />
        <Pause />
        <VerticalChunk>
          To be paired with this figure:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_relationships_of_note_triangle_version.svg" />
        <Pause />
        <VerticalChunk>
          The arrows are meant to indicate that{" "}
          <Math>
            $\cos(\theta)$
          </Math>
          {" "}is the
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          multiplicative factor
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          that takes one from “hypotenuse” to “adjacent”,
          while{" "}
          <Math>
            $\sin(\theta)$
          </Math>
          {" "}is (again) the
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          multiplicative factor
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          that takes one from “hypotenuse” to “opposite”.
        </VerticalChunk>
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 5.
            </b>
            {" "}
            In the following diagram...
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch5_ch_example_multiplications_1.svg" />
          <Pause />
          <VerticalChunk>
            ...the length of the side marked ‘?’ is
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$
            10\cdot \cos(43^\circ\hlfbk)\cdot \cos(20^\circ\hlfbk)
            $$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            by following two ‘cos’ arrows (i.e., 
            two hypotenuse-to-adjacent arrows) starting
            from the sidelength of{" "}
            <NoBreak>
              <Math>
                $10$
              </Math>
              .
            </NoBreak>
          </VerticalChunk>
        </Example>
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 6.
            </b>
            {" "}
            In the following diagram...
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch5_ch_example_multiplications_2.svg" />
          <Pause />
          <VerticalChunk>
            ...the length of the side marked ‘?’ is
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$
            10\cdot \cos(43^\circ\hlfbk)\cdot \sin(60^\circ\hlfbk)\cdot \sin(50^\circ\hlfbk)
            $$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            by following one ‘cos’ and then two ‘sin’ 
            arrows, starting from the sidelength of 
            {" "}
            <NoBreak>
              <Math>
                $10$
              </Math>
              .
            </NoBreak>
          </VerticalChunk>
        </Example>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            A famous diagram.
          </b>
          {" "}
          There is a somewhat infamous diagram similar
          to the diagrams of examples 5 and 6; to draw the 
          diagram, start with a “snail shell” stack of 
          two right triangles:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_snail_stack_1.svg" />
        <Pause />
        <VerticalChunk>
          Rotate a copy of the smaller
          triangle by{" "}
          <Math>
            $90^\circ$
          </Math>
          {" "}towards the bigger one; 
          we end up with two pairs of parallel sides:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_snail_stack_2.svg" />
        <Pause />
        <VerticalChunk>
          Therefore, if we snap a scaled copy of the
          smaller triangle onto the remaining non-hypotenuse
          side of the bigger triangle, we end up with a
          flush side consisting of a single straight 
          segment (you can also think in terms of 
          angles that add up to{" "}
          <NoBreak>
            <Math>
              $180^\circ$
            </Math>
            ):
          </NoBreak>
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_snail_stack_3.svg" />
        <Pause />
        <VerticalChunk>
          We finish off the diagram by setting the
          hypotenuse of the original big triangle to 
          have length{" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            :
          </NoBreak>
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_snail_stack_4.svg" />
        <Pause />
        <VerticalChunk>
          This completes the diagram. Note that it is 
          possible for the sum of{" "}
          <Math>
            $\theta_1$
          </Math>
          {" "}and{" "}
          <Math>
            $\theta_2$
          </Math>
          {" "}
          to be greater than{" "}
          <NoBreak>
            <Math>
              $\eta$
            </Math>
            ...
          </NoBreak>
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_snail_stack_greater_eta.svg" />
        <Pause />
        <VerticalChunk>
          ...but, by construction,{" "}
          <Math>
            $\theta_1$
          </Math>
          {" "}and 
          {" "}
          <Math>
            $\theta_2$
          </Math>
          {" "}are individually in the range from 
          {" "}
          <Math>
            $0$
          </Math>
          {" "}to{" "}
          <NoBreak>
            <Math>
              $\eta$
            </Math>
            .
          </NoBreak>
          {" "}(Being “proper angles” of right 
          triangles.) (You can now contemplate what the 
          “utility” of the diagram might be!)
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            The Abercrombie inequality.
          </b>
          {" "}
          Take an ordinary angle of aperture less than 
          {" "}
          <Math>
            $180^\circ\hlfbk$
          </Math>
          {" "}with a circular arc drawn 
          inside and a line segment spanning the two
          sides of the angle that clears the arc:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_abercrombie_statement.svg" />
        <Pause />
        <VerticalChunk>
          The eponymous
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          Abercrombie inequality
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          states that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          A\leq S
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          in the language of the above figure, i.e.,
          that the length of the segment is 
          at least
          the length of the arc.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          The proof is that, if this were not the case,
          the
          length
          {" "}
          <Math>
            $S$
          </Math>
          {" "}of the segment would lie to left of the
          length{" "}
          <Math>
            $A$
          </Math>
          {" "}of the arc on the number line, as
          pictured in this stylized view of the number line:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_abercrombie_to_the_left.svg" />
        <Pause />
        <VerticalChunk>
          In the space between{" "}
          <Math>
            $S$
          </Math>
          {" "}and{" "}
          <NoBreak>
            <Math>
              $A$
            </Math>
            ,
          </NoBreak>
          {" "}we could then 
          find the length{" "}
          <Math>
            $P$
          </Math>
          {" "}of a polygonal line 
          approximating the arc...
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_abercrombie_with_P.svg" />
        <Pause />
        <VerticalChunk>
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
          {" "}on the number line from the left. 
          (This constitutes our “axiomatic” belief 
          about the  nature of curved length.) But this 
          will be a contradiction, because we claim 
          that each segment of the polygonal line has 
          length less than its corresponding “shadow” 
          on the segment of length{" "}
          <NoBreak>
            <Math>
              $S$
            </Math>
            :
          </NoBreak>
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_abercrombie_shadows.svg" />
        <Pause />
        <VerticalChunk>
          ...this last claim follows from the following 
          diagram:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_abercrombie_s1s2p1p2.svg" />
        <Pause />
        <VerticalChunk>
          The point is that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \overline&#123;s_1s_2&#125;\, &gt; \,\overline&#123;p_1p_2&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          because{" "}
          <Math>
            $s_1$
          </Math>
          {" "}and{" "}
          <Math>
            $s_2$
          </Math>
          {" "}are separated by a 
          pair of parallel lines that are at distance 
          {" "}
          <Math>
            $\overline&#123;p_1p_2&#125;$
          </Math>
          {" "}from one another, and
          because at least one of{" "}
          <NoBreak>
            <Math>
              $s_1$
            </Math>
            ,
          </NoBreak>
          {" "}{" "}
          <Math>
            $s_2$
          </Math>
          {" "}is 
          not on either of the parallel lines (or else
          we would have{" "}
          <NoBreak>
            <Math>
              $s_1 = p_1$
            </Math>
            ,
          </NoBreak>
          {" "}{" "}
          <NoBreak>
            <Math>
              $s_2 = p_2$
            </Math>
            ,
          </NoBreak>
          {" "}and 
          the segment{" "}
          <Math>
            $s_1s_2$
          </Math>
          {" "}would not clear the arc).
        </VerticalChunk>
        <VerticalChunk indent={true}>
          Therefore, each segment of{" "}
          <Math>
            $P$
          </Math>
          {" "}has length 
          less than its corresponding “shadow segment”
          on the crossover segment of length{" "}
          <NoBreak>
            <Math>
              $S$
            </Math>
            ,
          </NoBreak>
          {" "}from 
          which{" "}
          <NoBreak>
            <Math>
              $S &gt; P$
            </Math>
            ,
          </NoBreak>
          {" "}from which this arrangement 
          of values...
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_abercrombie_to_the_left_second.svg" />
        <Pause />
        <VerticalChunk>
          ...on the number line is an impossibility, 
          i.e.,{" "}
          <NoBreak>
            <Math>
              $S \geq A$
            </Math>
            .
          </NoBreak>
          {" "}
          This constitutes the proof of the Abercrombie
          inequality.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          One can polish a few more details by noting that:
        </VerticalChunk>
        <p style="text-indent:-1.3em;padding-top:1em;padding-bottom:0.5em;padding-left:3em;padding-right:1.5em;">
          {" "}{" "}
          <b>
            (i)
          </b>
          {" "}the segment can be tangent to the 
          arc at one point, the proof will still go
          through (so the segment does not need to
          {" "}
          <i>
            strictly
          </i>
          {" "}clear the arc);
        </p>
        <p style="text-indent:-1.6em;padding-top:0em;padding-bottom:1em;padding-left:3em;padding-right:1.5em;">
          {" "}{" "}
          <b>
            (ii)
          </b>
          {" "}as long as the angle is nonzero, 
          and the arc has nonzero radius, the
          length of the segment will be STRICTLY
          GREATER than the length of the arc,
          not just greater-or-equal-to
        </p>
        <VerticalChunk>
          (Point{" "}
          <b>
            (ii)
          </b>
          {" "}can be seen by 
          comparing the segment to a two-segment 
          assemblage that is shorter than the segment 
          itself, but still-as-long-as-the-arc, by virtue 
          of the original inequality.)
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            The “Fisher sandwich”.
          </b>
          {" "}
          The “Fisher sandwich”—we don't make these 
          terms up—states that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \sin(\theta) \,&lt;\, \theta \,&lt;\, &#123;\sin(\theta)\over\cos(\theta)&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          for all{" "}
          <NoBreak>
            <Math>
              $0 &lt; \theta &lt; \eta$
            </Math>
            .
          </NoBreak>
          {" "}
          The Fisher sandwich is so-called because 
          it “sandwiches”{" "}
          <Math>
            $\theta$
          </Math>
          {" "}
          between
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \sin(\theta)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          below, and
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          &#123;\sin(\theta)\over\cos(\theta)&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          above. (Indeed,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          &#123;\sin(\theta)\over\cos(\theta)&#125; &gt; \sin(\theta)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          in the range{" "}
          <Math>
            $0 &lt; \theta &lt; \eta$
          </Math>
          {" "}
          because dividing by
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \cos(\theta)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          makes you
        </VerticalChunk>
        <Pause />
        <CentralDisplay>
          BIGGER
        </CentralDisplay>
        <Pause />
        <VerticalChunk>
          when{" "}
          <NoBreak>
            <Math>
              $0 &lt; \cos(\theta) &lt; 1$
            </Math>
            ,
          </NoBreak>
          {" "}which is the case
          for{" "}
          <NoBreak>
            <Math>
              $0 &lt; \theta &lt; \eta$
            </Math>
            —in
          </NoBreak>
          {" "}fact, dividing by
          {" "}
          <Math>
            $\cos(\theta)$
          </Math>
          {" "}will make you
        </VerticalChunk>
        <Pause />
        <CentralDisplay>
          DRAMATICALLY BIGGER
        </CentralDisplay>
        <Pause />
        <VerticalChunk>
          when{" "}
          <Math>
            $\cos(\theta)$
          </Math>
          {" "}is close to{" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            ,
          </NoBreak>
          {" "}which is the 
          case when{" "}
          <Math>
            $\theta$
          </Math>
          {" "}is close to{" "}
          <NoBreak>
            <Math>
              $\eta$
            </Math>
            .)
          </NoBreak>
        </VerticalChunk>
        <VerticalChunk indent={true}>
          The first inequality
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \sin(\theta) \rt&#123;0.1&#125;&lt;\rt&#123;0.1&#125; \theta
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          follows by this illustration (using{" "}
          <NoBreak>
            <Math>
              $0 &lt; \theta &lt; \eta$
            </Math>
            ):
          </NoBreak>
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_fisher_first_ineq.svg" />
        <Pause />
        <VerticalChunk>
          Namely, per the one slightly pedantic logic,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \theta &gt; L
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          on the one hand, where{" "}
          <Math>
            $L$
          </Math>
          {" "}is the length of
          the dotted chord, and
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          L &gt; \sin(\theta)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          on the other hand. Together, this implies 
          {" "}
          <NoBreak>
            <Math>
              $\theta \rt&#123;0.1&#125;&gt;\rt&#123;0.1&#125; \sin(\theta)$
            </Math>
            .
          </NoBreak>
        </VerticalChunk>
        <VerticalChunk indent={true}>
          For the second inequality, we have to start
          by noting that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          &#123;\sin(\theta)\over \cos(\theta)&#125; = &#123;1\over \cos(\theta)&#125;\cdot \sin(\theta)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is the length that{" "}
          <Math>
            $\theta$
          </Math>
          {" "}projects onto
          the line{" "}
          <NoBreak>
            <Math>
              $x = 1$
            </Math>
            :
          </NoBreak>
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_fisher_second_ineq.svg" />
        <Pause />
        <VerticalChunk>
          Specifically,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          &#123;1\over \cos(\theta)&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          turns the bottom segment of length{" "}
          <Math>
            $1$
          </Math>
          {" "}
          into the pink hypotenuse, because just as ‘cos’
          is the hypotenuse-to-adjacent multiplicative
          factor, so is{" "}
          <NoBreak>
            ‘
            <Math>
              $1/\!\cos$
            </Math>
            ’
          </NoBreak>
          {" "}the adjacent-to-hypotenuse
          multiplicative factor (don't be confused by the
          presence of two possible triangles to which 
          this can be applied); then,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \sin(\theta)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          brings one over to the right-hand segment
          from the pink hypotenuse, being the 
          hypotenuse-to-opposite multiplicative
          factor.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          The fact that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          &#123;\theta&#125; \rt&#123;0.1&#125;&lt;\rt&#123;0.1&#125; &#123;\sin(\theta)\over \cos(\theta)&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          then follows from the “polished” version 
          of the Abercrombie inequality. (The version
          that allows the segment to be tangent to the
          arc, and that claims a strict inequality.)
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            The angle-sum formulas.
          </b>
          {" "}
          In the “famous diagram” from above there 
          are a total of four different ways to 
          reach an outer edge by means of ‘cos’ 
          and ‘sin’ arrows while starting from the 
          edge of length{" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            ,
          </NoBreak>
          {" "}reaching each of the 
          four other outer edges precisely once:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_angle_sum_1.svg" />
        <Pause />
        <VerticalChunk>
          (Note by the way that{" "}
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
          {" "}because of 
          the way the figure is constructed, which 
          implies that{" "}
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
          {" "}and{" "}
          <Math>
            $\cos(\theta_2\!\rt&#123;0.1&#125;)$
          </Math>
          {" "}
          are all nonnegative, and that all their
          products are nonnegative, as well.)
        </VerticalChunk>
        <VerticalChunk indent={true}>
          On the other hand, if we inscribe the
          figure in the unit circle with the joint angle
          {" "}
          <Math>
            $\theta_1 + \theta_2$
          </Math>
          {" "}at the center, we find that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \,\sin(\theta_1 + \theta_2)\,
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          and
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \,\cos(\theta_1 + \theta_2)\,
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          make an appearance as coordinates, and 
          that these coordinates can be expressed as 
          sums or differences of the four outer edges:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_angle_sum_2.svg" />
        <Pause />
        <VerticalChunk>
          (Or with{" "}
          <NoBreak>
            <Math>
              $\theta_1 + \theta_2 &gt; \eta$
            </Math>
            ...
          </NoBreak>
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_angle_sum_3.svg" />
        <Pause />
        <VerticalChunk>
          ...works as well!)
        </VerticalChunk>
        <VerticalChunk indent={true}>
          In other words, we find...
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_angle_sum_formulas_flowers.svg" />
        <Pause />
        <VerticalChunk>
          ...for{" "}
          <Math>
            $\theta_1$
          </Math>
          {" "}and{" "}
          <Math>
            $\theta_2$
          </Math>
          {" "}as may
          appear in such a figure, i.e., for 
          {" "}
          <NoBreak>
            <Math>
              $0 \leq \theta_1, \theta_2 \leq \eta$
            </Math>
            .
          </NoBreak>
          {" "}In 
          fact, these two formulas hold for{" "}
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
          {" "}{" "}
          <NoBreak>
            <Math>
              $\theta_2 \in \rr$
            </Math>
            .
          </NoBreak>
          {" "}They are 
          known as the{" "}
          <i>
            angle-sum formulas
          </i>
          . Also 
          note the “pattern” of the angle-sum formulas:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_angle_sum_formulas_by_heart.svg" />
        <Pause />
        <VerticalChunk>
          The point of remembering these patterns 
          is that, on their own, these patterns are
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          enough
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          to reconstruct the full formulas from scratch!
          (Well, a lot of students remember the formulas
          that way, at least.)
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            The missing arrows.
          </b>
          {" "}
          ‘sin’ and ‘cos’ only constitute two out 
          of six ratios that exist among the sides 
          of a right triangle. The four “missing ratios” 
          are hereby drawn:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_missing_arrows_veiled.svg" />
        <Pause />
        <VerticalChunk>
          In fact, there is a dedicated, named function 
          that computes each of the six ratios. We shall 
          now reveal the names of the four missing 
          functions (!!):
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_missing_arrows_unveiled.svg" />
        <Pause />
        <VerticalChunk>
          Here 
          “sec” is short for{" "}
          <i>
            secant
          </i>
          ,
          “tan” is short for{" "}
          <i>
            tangent
          </i>
          ,
          “cot” is short for{" "}
          <i>
            cotangent
          </i>
          , and
          “csc” is short for{" "}
          <i>
            cosecant
          </i>
          .
        </VerticalChunk>
        <VerticalChunk indent={true}>
          To be clear, multiplying by
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \sec(\theta)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          takes you from ‘adjacent’ to ‘hypotenuse’, multiplying by
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \csc(\theta)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          takes you from ‘opposite’ to ‘hypotenuse’, multiplying by
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \tan(\theta)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          takes you from ‘adjacent’ to ‘opposite’, 
          and multiplying by
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \cot(\theta)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          takes you from ‘opposite’ to ‘adjacent’. (!)
        </VerticalChunk>
        <VerticalChunk indent={true}>
          You may observe that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \sec = &#123;1\over \cos&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          and that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \csc = &#123;1\over \sin&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          as multiplying by ‘cos’ undoes the work 
          of multiplying by ‘sec’, and likewise for 
          ‘sin’ and ‘csc’; also,
        </VerticalChunk>
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
        <VerticalChunk>
          modulo a very small technicality (to do
          with the fact that{" "}
          <NoBreak>
            <Math>
              $&#123;1\over \infty&#125; \ne 0$
            </Math>
            ,
          </NoBreak>
          {" "}
          or, to dig in a little, to do with the fact that
          what people think of as{" "}
          <NoBreak>
            “
            <Math>
              $\pm\infty$
            </Math>
            ”
          </NoBreak>
          {" "}
          is, in fact, an{" "}
          <i>
            undefined
          </i>
          {" "}value of the function),
          and
        </VerticalChunk>
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
        <VerticalChunk>
          since one way to reach ‘opposite’ from
          ‘adjacent’ is to go via ‘hypotenuse’, and 
          vice-versa for reaching ‘adjacent’ from 
          ‘opposite’. (In fact, the next-to-last
          identity played a role in our proof of the 
          Fisher sandwich.) (Indeed: the Fisher 
          sandwich can be written...
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \te&#123;“&#125;\sin(\theta)&lt; \theta&lt; \tan(\theta)\rt&#123;0.1&#125;\te&#123;”&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          ...in this form, as well!)
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Secant: a second view.
          </b>
          {" "}
          We will point out that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \sec(\theta)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is also the multiplicative factor that takes you from the{" "}
          <span style="background-color:#ff82d7;border-radius:0.3em;font-size:0.7em;padding-left:0.5em;padding-right:0.5em;padding-top:0.3em;padding-bottom:0.3em;border:1px solid black;font-family:arial;">
            PURPLE
          </span>
          &ensp;to the{" "}
          <span style="white-space:nowrap;background-color:#ccffaa;border-radius:0.3em;font-size:0.7em;padding-left:0.5em;padding-right:0.5em;padding-top:0.3em;padding-bottom:0.3em;border:1px solid black;font-family:arial;">
            LIME GREEN
          </span>
          &ensp;triangle 
          (hard to draw, because it is behind the 
          purple triangle!) in the following figure:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_secant_reinterpretation_1.svg" />
        <Pause />
        <VerticalChunk>
          Indeed, the scaling factor that is needed 
          to turn the purple into the lime green
          triangle is the solution{" "}
          <Math>
            $A$
          </Math>
          {" "}to
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          A\cdot \cos(\theta) = 1
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          which gives
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          A = &#123;1\over \cos(\theta)&#125; = \sec(\theta)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          using{" "}
          <NoBreak>
            <Math>
              $\sec = 1/\cos$
            </Math>
            .
          </NoBreak>
        </VerticalChunk>
        <VerticalChunk indent={true}>
          (After all, this multiplicative factor...
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_secant_reinterpretation_2.svg" />
        <Pause />
        <VerticalChunk>
          ...was always going to equal 
          this multiplicative factor...
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_secant_reinterpretation_3.svg" />
        <Pause />
        <VerticalChunk>
          ...given that the target segment has length{" "}
          <Math>
            $1$
          </Math>
          {" "}each time!)
        </VerticalChunk>
        <Pause />
        <VerticalChunk>
          <i>
            Postscript.
          </i>
          {" "}
          Similarly,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \csc(\theta)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is the multiplicative factor that takes you from the{" "}
          <span style="white-space:nowrap;background-color:#ff6600;border-radius:0.3em;font-size:0.7em;padding-left:0.5em;padding-right:0.5em;padding-top:0.3em;padding-bottom:0.3em;border:1px solid black;font-family:arial;">
            BURNT ORANGE
          </span>
          &ensp;to the{" "}
          <span style="white-space:nowrap;background-color:#e9afaf;border-radius:0.3em;font-size:0.7em;padding-left:0.5em;padding-right:0.5em;padding-top:0.3em;padding-bottom:0.3em;border:1px solid black;font-family:arial;">
            FAUX BORDEAUX
          </span>
          &ensp;triangle below:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch5_ch_secant_reinterpretation_4.svg" />
        <Pause />
        <VerticalChunk>
          (But this fact is not used as often.)
        </VerticalChunk>
        <Pause />
        <VerticalChunk>
          <b>
            Note on calculators.
          </b>
          {" "}
          Your calculator has “degree mode” and 
          “radian mode”. If your calculator tells
          you that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \cos(1.57)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is a number close to{" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            ,
          </NoBreak>
          {" "}instead of being 
          a number close to{" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            ,
          </NoBreak>
          {" "}it means that your
          calculator is in “degree mode”—it has treated
          as{" "}
          <Math>
            $1.57$
          </Math>
          {" "}as a number of degrees, instead of
          as a number of radians! (Be sure, in any 
          case, that you're in the mode that you want.)
        </VerticalChunk>
      </Section>
      <Pause />
      <Exercises>
        <Exercise exercise_number={1}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 1.
              </b>
              {" "}
              Is
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              y =  \cos(x + 0.1)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              the shift of{" "}
              <Math>
                $y = \cos(x)$
              </Math>
              {" "}to the left by{" "}
              <NoBreak>
                <Math>
                  $0.1$
                </Math>
                ,
              </NoBreak>
              {" "}
              or to the right by{" "}
              <NoBreak>
                <Math>
                  $0.1$
                </Math>
                ?
              </NoBreak>
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={1}>
            <VerticalChunk>
              The function{" "}
              <Math>
                $x \ra \cos(x + 0.1)$
              </Math>
              {" "}fetches its values
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              in the future
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              by{" "}
              <NoBreak>
                <Math>
                  $0.1$
                </Math>
                ,
              </NoBreak>
              {" "}compared to{" "}
              <NoBreak>
                <Math>
                  $\cos(x)$
                </Math>
                .
              </NoBreak>
              {" "}It is therefore
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              ahead
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              or its graph
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              to the left
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              of{" "}
              <NoBreak>
                <Math>
                  $y = \cos(x)$
                </Math>
                ,
              </NoBreak>
              {" "}by{" "}
              <NoBreak>
                <Math>
                  $0.1$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={2}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 2.
              </b>
              {" "}
              Guesstimate a function with this graph:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_cosine_10x_plus_x_over_4.svg" />
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={2}>
            <VerticalChunk>
              It appears that the function is “a line plus
              something”, in the sense of the following
              diagram:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_cosine_10x_plus_x_over_4_equation.svg" />
            <Pause />
            <VerticalChunk>
              (Or in the technical sense of taking the sum
              of two functions, to be more exact—that is what 
              the sum of two functions looks like, pictorialized!)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              The line appears to be
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              y = &#123;1\over 4&#125;x
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              making it a true{" "}
              <i>
                linear
              </i>
              {" "}function (as opposed
              to{" "}
              <i>
                affine
              </i>
              , cf. Chapter 3).
            </VerticalChunk>
            <VerticalChunk indent={true}>
              As for the “something”—the bumpy one—it appears
              to just be a “sped up cosine”, and note that
              the graph goes through approximately{" "}
              <Math>
                $10$
              </Math>
              {" "}
              cycles between{" "}
              <Math>
                $x = 0$
              </Math>
              {" "}and{" "}
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
                src="/images/svg_ch5_ex_cosine_10x_plus_x_over_4_4eta_cloud.svg"
                line={-2} />
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_cosine_10x_plus_x_over_4_bump_count.svg" />
            <Pause />
            <VerticalChunk>
              As cos goes through{" "}
              <i>
                one
              </i>
              {" "}cycle from{" "}
              <Math>
                $x = 0$
              </Math>
              {" "}to 
              {" "}
              <NoBreak>
                <Math>
                  $x = 4\eta$
                </Math>
                ,
              </NoBreak>
              {" "}the “bumpy function” is therefore 
              (roughly, from what we can see) a{" "}
              <NoBreak>
                “
                <Math>
                  $10$
                </Math>
                &#x200b;
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $\times$
                </Math>
                ”
              </NoBreak>
              {" "}
              sped-up version of cosine, i.e.,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              y = \cos(10x)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              from which the guesstimate for the initial function
              would be
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              y = \cos(10x) + &#123;1\over 4&#125; x
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              adding our two separate guesstimates together.
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={3}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 3.
              </b>
              {" "}
              Guesstimate a function with this graph (we can
              tell you that the large-scale curve is a
              parabola):
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch5_ex_cosine_minus_cos_20x_plus_quadratic.svg"
              style="margin-top:0.8em;margin-bottom:1em;" />
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={3}>
            <VerticalChunk>
              Having intimated that the answer is the sum of
              a parabola and of some cosine deviant, let us
              focus on the parabolic portion first, that would
              namely be roughly this purple curve:
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch5_ex_cosine_minus_cos_20x_plus_quadratic_with_parabola.svg"
              style="margin-top:0.8em;margin-bottom:1em;" />
            <Pause />
            <VerticalChunk>
              [Nb:
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              parabolic
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              is a synonym of
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              quadratic
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              or
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              degree{" "}
              <Math>
                $\mathit&#123;2&#125;$
              </Math>
              {" "}polynomial
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              i.e., a function of the form
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              x \ra a_2x^2 + a_1x + a_0
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for constants{" "}
              <NoBreak>
                <Math>
                  $a_2$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $a_1$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $a_0 \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "}cf. Chapter 3.]
            </VerticalChunk>
            <VerticalChunk indent={true}>
              As the parabola is symmetric about the{" "}
              <Math>
                $y$
              </Math>
              {" "}axis it will
              be of the form
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              y = Ax^2 + C
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for some constants{" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
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
            </VerticalChunk>
            <VerticalChunk indent={true}>
              The value
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              C
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is easy because it is the value of the parabola at
              {" "}
              <NoBreak>
                <Math>
                  $x = 0$
                </Math>
                ,
              </NoBreak>
              {" "}which in this case appears to be{" "}
              <NoBreak>
                <Math>
                  $y = -3$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch5_ex_cosine_minus_cos_20x_plus_quadratic_C_estimate.svg"
              style="margin-top:0.8em;margin-bottom:1em;" />
            <Pause />
            <VerticalChunk>
              ...so...
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              C = -3
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              (we say). For{" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "}
              note that the parabola appears to have value{" "}
              <Math>
                $y \approx 3$
              </Math>
              {" "}
              at{" "}
              <NoBreak>
                <Math>
                  $x = \pm 12$
                </Math>
                ,
              </NoBreak>
              {" "}resulting in an increase of{" "}
              <Math>
                $\approx 6$
              </Math>
              {" "}
              between{" "}
              <Math>
                $x = 0$
              </Math>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $x = \pm 12$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch5_ex_cosine_minus_cos_20x_plus_quadratic_A_estimate.svg"
              style="margin-top:0.8em;margin-bottom:1em;" />
            <Pause />
            <VerticalChunk>
              That increase being entirely due to the term
              {" "}
              <NoBreak>
                <Math>
                  $Ax^2$
                </Math>
                ,
              </NoBreak>
              {" "}we get{" "}
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              A \cdot 12^2 \approx 6
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              (in more detail,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              %(A\cdot 12^2) - (A\cdot 0^2) \approx 6
              A\cdot 12^2 - A\cdot 0^2 \approx 6
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              but{" "}
              <Math>
                $A\cdot 0^2$
              </Math>
              {" "}goes away), meaning
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              A \approx &#123;6\over 12^2&#125; = &#123;1\over 24&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              meaning that the quadratic portion of the function is
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              &#123;x^2\over 24&#125; - 3
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              per this estimate.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              The other portion of the answer—what is left
              after the parabola is subtracted—is a cosine-like
              function (or{" "}
              <i>
                sinusoid
              </i>
              ) whose amplitude (the
              height of a bump) is roughly{" "}
              <NoBreak>
                <Math>
                  $0.5$
                </Math>
                ,
              </NoBreak>
              {" "}which is half the
              amplitude of 
              sine/cosine:
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch5_ex_cosine_minus_cos_20x_plus_quadratic_with_inset.svg"
              style="margin-top:0.8em;margin-bottom:1em;" />
            <Pause />
            <VerticalChunk>
              Moreover at{" "}
              <Math>
                $x = 0$
              </Math>
              {" "}we find 
              more or less exactly
              the{" "}
              <i>
                bottom
              </i>
              {" "}of a
              bump, 
              so altogether 
              we can use a function of the form
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              -0.5\cos(Bx)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              to model this sinusoid,
              where the multiplication by{" "}
              <Math>
                $0.5$
              </Math>
              {" "}gives us 
              the desired amplitude and where the{" "}
              <NoBreak>
                ‘
                <Math>
                  $-$
                </Math>
                ’
              </NoBreak>
              {" "}gives
              us an anti-bump (“trough”?) instead of a bump at{" "}
              <NoBreak>
                <Math>
                  $x = 0$
                </Math>
                ;
              </NoBreak>
              {" "}
              on the other hand the value{" "}
              <Math>
                $B$
              </Math>
              {" "}will control the amount of
              horizontal compression inside the curve; specifically,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              B = 1
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              will give a curve that goes through one full cycle
              per interval of length{" "}
              <NoBreak>
                <Math>
                  $4\eta$
                </Math>
                ,
              </NoBreak>
              {" "}
              while, in general, an arbitrary value of{" "}
              <Math>
                $B$
              </Math>
              {" "}will give a
              curve that goes{" "}
              <Math>
                $B$
              </Math>
              {" "}full cycles 
              per interval of length{" "}
              <Math>
                $4\eta$
              </Math>
              {" "}(the larger{" "}
              <Math>
                $B$
              </Math>
              {" "}is,
              the more “frenzied” the curve);
              in our case, it seems that{" "}
              <NoBreak>
                <Math>
                  $B \approx 20$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch5_ex_cosine_minus_cos_20x_plus_quadratic_B_estimate.svg"
              style="margin-top:0.8em;margin-bottom:1em;" />
            <Pause />
            <VerticalChunk>
              So an estimate for the 
              second function
              would be...
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              -0.5\cos(20x)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...giving us...
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              -0.5\cos(20x) + &#123;x^2\over 24&#125; - 3
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...for our final answer, after adding the parabola back.
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={4}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 4.
              </b>
              {" "}
              Guesstimate a function with this graph:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_big_wave.svg" />
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={4}>
            <VerticalChunk>
              First we estimate a function for the large-scale
              curve in purple:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_big_wave_purple.svg" />
            <Pause />
            <VerticalChunk>
              It appears to be a linear function (line through
              {" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "}sloping down) plus a sinusoid. To 
              estimate the slope of the linear function we can 
              take two points in like relation to the sinusoid, 
              draw a line between them and estimate the slope:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_big_wave_purple_blue_with_1_4.svg" />
            <Pause />
            <VerticalChunk>
              This makes the linear function portion of the purple 
              curve
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              y = -&#123;1\over 4&#125;x
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              or thereabouts.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              To model the sinusoid portion of the large-scale 
              purple curve we need more measurements, such as
              the total height of the sinusoid from top of
              bump to bottom of trough; we can add a third “bottom
              of trough” dot, in same relation to the top of
              bumps (but we won't actually draw this dot or else
              we won't be able to see where we're measuring):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_big_wave_purple_blue_with_height.svg" />
            <Pause />
            <VerticalChunk>
              So it appears that the sinusoid has a total height
              of{" "}
              <Math>
                $\approx 4$
              </Math>
              {" "}from top of bump to bottom of trough.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              (And in case you're confused by what we're trying
              to do,
              let us re-explain that we are trying
              to measure the vertical width of this blue band...
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_big_wave_purple_blue_with_band.svg" />
            <Pause />
            <VerticalChunk>
              ...that, indeed, seems near{" "}
              <NoBreak>
                <Math>
                  $4$
                </Math>
                .)
              </NoBreak>
            </VerticalChunk>
            <VerticalChunk indent={true}>
              What this means is that if we remove the linear
              portion
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              y = -&#123;1\over 4&#125;x
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              from the purple curve, what we will find is a
              sinusoid whose individual bumps have height{" "}
              <NoBreak>
                <Math>
                  $\approx 2$
                </Math>
                ;
              </NoBreak>
              {" "}
              something like this (we switch the color to aquamarine, so
              that “purple curve” retains its unique meaning):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_big_wave_purple_sinusoid_only.svg" />
            <Pause />
            <VerticalChunk>
              This graph has the form
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              y = -2\sin(Bx)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for some value of{" "}
              <Math>
                $B \in \rr$
              </Math>
              {" "}that, chosen correctly,
              will give us the desired “wavelength”. (Note that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              y = -\sin(x)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              has graph...
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch5_ex_big_wave_minus_sin_x.svg"
              style="margin-top:0.8em;margin-bottom:1em;" />
            <Pause />
            <VerticalChunk>
              ...and that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              y = -2\sin(x)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              has graph...
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_big_wave_minus_2sin_x.svg" />
            <Pause />
            <VerticalChunk>
              ...and, from there, all that remains is to 
              “slow down” the oscillation to match the 
              aquamarine graph—the “slowing down” is what 
              {" "}
              <Math>
                $B$
              </Math>
              {" "}is for.)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              To know how much{" "}
              <Math>
                $B$
              </Math>
              {" "}must be, we must measure 
              the cycle length (it is, admittedly, hard to
              accurately determine the position of the top 
              of each large-scale bump, but we do our best by 
              basing ourselves off of what appear to be identical 
              patterns in the small-scale oscillations at 
              the top of each large-scale bump):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_big_wave_purple_blue_period_measurement.svg" />
            <Pause />
            <VerticalChunk>
              As
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              12.6 \approx 12.56 = 2\times 6.28 \approx 2\cdot 4\eta
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              the period of the large-scale sinusoid is near
              twice the period of sin or cos; i.e., we need to 
              “slow down”
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              -2\sin(x)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by a factor{" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                ,
              </NoBreak>
              {" "}i.e., put
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              B = 0.5
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              i.e., use
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              y = -2\sin(0.5x)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for the large-scale sinusoid. (Aquamarine graph.)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              (So far we have
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              -&#123;1\over 4&#125;x - 2\sin(0.5x)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for our approximation to the purple curve, putting
              the linear and sinusoidal parts together. Now we 
              move on from the purple curve.)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              It remains to add in the small-scale oscillation
              from the original curve; we can do the tedious 
              part first, and count the number cycles in an
              interval of length{" "}
              <NoBreak>
                <Math>
                  $4\eta \approx 6.28$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_big_wave_purple_small_scale_bump_count.svg" />
            <Pause />
            <VerticalChunk>
              So the small-scale oscillation is running
              at{" "}
              <Math>
                $\approx 19$
              </Math>
              {" "}times the frequency of an ordinary 
              sine or cosine, and we can model the small-scale
              oscillation by
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              x \ra -0.5\sin(19x)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              since, like the large-scale oscillation from the
              purple curve, it shares the same phase as{" "}
              <NoBreak>
                <Math>
                  $-\sin(x)$
                </Math>
                ,
              </NoBreak>
              {" "}
              and since, like the small-scale oscillation from
              Exercise 3, it has an amplitude of{" "}
              <NoBreak>
                <Math>
                  $\approx 0.5$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Altogether, we get
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              y = -&#123;1\over 4&#125;x - 2\sin(0.5x) - 0.5\sin(19x)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              as our “guesstimate”, while adding the linear 
              function, the large-scale sinusoid, and the small-scale 
              sinusoid together.
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={5}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 5.
              </b>
              {" "}
              Which function is most plausibly associated to
              which graph?
            </VerticalChunk>
            <Pause />
            <table
              style="border-collapse:collapse;font-size:100%;text-align:center;margin:auto;margin-top:1em;margin-bottom:1.5em;"
              class="slice">
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
            <Image src="/images/svg_ch5_ex_four_graphs.svg" />
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={5}>
            <VerticalChunk>
              The culprits are:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_four_graphs_labeled.svg" />
            <Pause />
            <VerticalChunk>
              For reference (if you need help checking), the
              graphs of{" "}
              <Math>
                $\sin$
              </Math>
              {" "}and{" "}
              <Math>
                $\cos$
              </Math>
              {" "}are as follows:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_four_graphs_cos.svg" />
            <Pause />
            <Image src="/images/svg_ch5_ex_four_graphs_sin.svg" />
            <Pause />
            <VerticalChunk>
              (Then imagine summing together, squaring, etc.)
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
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
                as a function of the form{" "}
                <Math>
                  $x \ra A\cdot \sin(Bx + C) + D$
                </Math>
                {" "}
                for some constants{" "}
                <NoBreak>
                  <Math>
                    $A$
                  </Math>
                  ,
                </NoBreak>
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $B$
                  </Math>
                  ,
                </NoBreak>
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $C$
                  </Math>
                  ,
                </NoBreak>
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $D \in \rr$
                  </Math>
                  .)
                </NoBreak>
              </VerticalChunk>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={6}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 6.
              </b>
              {" "}
              Is the pythagorean identity apparent in the
              graphs of the previous exercise?
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={6}>
            <VerticalChunk>
              Yes. 
              Imagine two wooden cutouts made
              from the graphs of{" "}
              <NoBreak>
                <Math>
                  $y = \sin^2(x)$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $y = \cos^2(x)$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch5_ex_pythagorean_graphs_sin2.svg"
              style="margin-top:1.1em;margin-bottom:1.1em;" />
            <Pause />
            <Image
              src="/images/svg_ch5_ex_pythagorean_graphs_cos2.svg"
              style="margin-top:1.1em;margin-bottom:1.1em;" />
            <Pause />
            <VerticalChunk>
              After vertically flipping the cutout
              of{" "}
              <NoBreak>
                <Math>
                  $y = \cos^2(x)$
                </Math>
                ,
              </NoBreak>
              {" "}the cutouts 
              fit together to make
              the constant function{" "}
              <Math>
                $y = 1$
              </Math>
              {" "}(like a parquet):
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch5_ex_pythagorean_graphs_compounded.svg"
              style="margin-top:1.1em;margin-bottom:1.1em;" />
            <Pause />
            <VerticalChunk>
              And this occurs because
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \cos^2(x) + \sin^2(x) = 1
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for all{" "}
              <NoBreak>
                <Math>
                  $x \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "}which is the pythagorean identity.
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={7}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 7.
              </b>
              {" "}
              Compute the ratio{" "}
              <Math>
                $A/B$
              </Math>
              {" "}assuming all same-colored
              triangles are similar, with the help of a calculator:
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch5_ex_big_snail.svg"
              style="width:500px;margin-top:1em;margin-bottom:1em;" />
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={7}>
            <VerticalChunk>
              What we want is the multiplicative ratio that
              would take us from the bottom to the top side of 
              this quadrilateral, so that we can multiply by that
              ratio over and over again:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_big_snail_quad.svg" />
            <Pause />
            <VerticalChunk>
              But the two triangles involved are
            </VerticalChunk>
            <Pause />
            <CentralDisplay>
              NOT RIGHT TRIANGLES
            </CentralDisplay>
            <Pause />
            <VerticalChunk>
              and we must break them into smaller parts that 
              {" "}
              <i>
                are
              </i>
              {" "}right triangles in order to use trigonometric
              functions. Specifically, as per this drawing:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_big_snail_quad_four_parts.svg" />
            <Pause />
            <VerticalChunk>
              The multiplicative ratios that correspond to the
              first and third arrows (in arrow-order from bottom 
              to top) are
            </VerticalChunk>
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
            <VerticalChunk>
              because these are “hypotenuse-to-opposite” arrows,
              while the multiplicative ratios that correspond to the
              second and fourth arrows are
            </VerticalChunk>
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
            <VerticalChunk>
              because these are the opposite (no pun intended),
              i.e.,“opposite-to-hypotenuse” arrows. The “big grey 
              arrow” ratio from two diagrams ago is obtained by multiplying 
              these four small-arrow ratios together, or
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \sin(68^\circ\hlfbk)\times\csc(71^\circ\hlfbk)\times\sin(59^\circ\hlfbk)\times\csc(60^\circ\hlfbk)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              (that can also be written
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              &#123;\sin(68^\circ\hlfbk)\times\sin(59^\circ\hlfbk) \over \sin(71^\circ\hlfbk)\times\sin(60^\circ\hlfbk)&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              because{" "}
              <NoBreak>
                <Math>
                  $\csc = &#123;1\over \sin&#125;$
                </Math>
                )
              </NoBreak>
              {" "}which, numerically, comes out to
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              0.97057870529467...
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              meaning that the top side of the quadrilateral tile is
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              97\%
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and some the length of the bottom side; taking
              the{" "}
              <NoBreak>
                <Math>
                  $36$
                </Math>
                -th
              </NoBreak>
              {" "}power of{" "}
              <NoBreak>
                <Math>
                  $0.9705\dots$
                </Math>
                ,
              </NoBreak>
              {" "}because{" "}
              <Math>
                $36$
              </Math>
              {" "}is the 
              number of times that the quadrilateral
              repeats within the spiral, we find
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              0.34127722635785...
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              which is the desired ratio{" "}
              <NoBreak>
                <Math>
                  $A/B$
                </Math>
                ,
              </NoBreak>
              {" "}and which agrees with the
              drawing, as{" "}
              <Math>
                $A$
              </Math>
              {" "}seems plausibly to be about one-third of 
              {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "}from the drawing!
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                While the final answer can be written
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                (\sin(68^\circ\hlfbk)\cdot\csc(71^\circ\hlfbk)\cdot\sin(59^\circ\hlfbk)\cdot\csc(60^\circ\hlfbk))^&#123;36&#125;
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                or
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \left(&#123;\sin(68^\circ\hlfbk)\cdot\sin(59^\circ\hlfbk) \over \sin(71^\circ\hlfbk)\cdot\sin(60^\circ\hlfbk)&#125;\right)^&#123;\!36&#125;
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                teachers typically want to see such expressions
                evualuated out, to make sure that you and your 
                calculator form a good team. (And, to be fair,
                catching one's own calculator mistakes by virtue
                of spotting a nonsensical number is a skill in
                itself.)
              </VerticalChunk>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 2.
                </i>
                {" "}
                Instead of counting the number of times that the
                quadrilateral appears in the double spiral by hand
                one can 
                calculate the amount of rotation between one
                quadrilateral and the next, which is this purple angle:
              </VerticalChunk>
              <Pause />
              <Image
                src="/images/svg_ch5_ex_big_snail_quad_purple_angle_1.svg"
                style="margin-top:0.8em;margin-bottom:1em;" />
              <Pause />
              <VerticalChunk>
                The key to measuring this
                angle is the concept of an “alternating angle”,
                whereby{" "}
                <Math>
                  $68^\circ$
                </Math>
                {" "}reappears to the left of{" "}
                <NoBreak>
                  <Math>
                    $71^\circ$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                here:
              </VerticalChunk>
              <Pause />
              <Image
                src="/images/svg_ch5_ex_big_snail_quad_purple_angle_2.svg"
                style="margin-top:0.8em;margin-bottom:1em;" />
              <Pause />
              <VerticalChunk>
                Then we can calculate the purple angle as
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                68^\circ + 71^\circ + 61^\circ - 180^\circ = 20^\circ
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                meaning that each quadrilateral is rotated by{" "}
                <Math>
                  $20^\circ$
                </Math>
                {" "}from the
                previous, and in one turn of the spiral there are
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                &#123;360^\circ\over 20^\circ&#125; = 18
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                quadrilaterals, or
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                2 \times 18 = 36
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                quadrilaterals for two turns!
              </VerticalChunk>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={8}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 8.
              </b>
              {" "}
              In the drawing below the oval is a circle of
              radius{" "}
              <Math>
                $r$
              </Math>
              {" "}and the angle{" "}
              <Math>
                $\phi$
              </Math>
              {" "}is in “standard
              position”, meaning that it opens counterclockwise
              for a positive angle from the direction of the
              positive{" "}
              <Math>
                $x$
              </Math>
              {" "}axis. What are the coordinates
              of{" "}
              <Math>
                $P$
              </Math>
              {" "}in terms of{" "}
              <NoBreak>
                <Math>
                  $r$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $x_0$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $y_0$
              </Math>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $\phi$
                </Math>
                ?
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch5_ex_P_in_terms_of_ADEphi_v2.svg"
              style="margin-top:1em;margin-bottom:0.5em;" />
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={8}>
            <VerticalChunk>
              The{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinates
              </NoBreak>
              {" "}are 
              respectively
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              x_0 + r\cdot \cos(\phi)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              y_0 + r\cdot \sin(\phi)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              because
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              r\cdot\cos(\phi)
              $$
              <ImageRight
                offset_x="5.5em"
                src="/images/svg_ch5_ex_P_in_terms_of_ADEphi_DeltaX_v2_cloud.svg"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is the difference from the center of the 
              circle to{" "}
              <Math>
                $P$
              </Math>
              {" "}in{" "}
              <Math>
                $x$
              </Math>
              {" "}and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              r\cdot\sin(\phi)
              $$
              <ImageLeft
                offset_x="7.5em"
                src="/images/svg_ch5_ex_P_in_terms_of_ADEphi_DeltaY_v2_cloud.svg"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is the difference from the center of the circle to{" "}
              <Math>
                $P$
              </Math>
              {" "}in{" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                ,
              </NoBreak>
              {" "}
              as per scaling a unit circle to radius{" "}
              <NoBreak>
                <Math>
                  $r$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={9}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 9.
              </b>
              {" "}
              If a
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              vector
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              is{" "}
              <i>
                a pair of numbers
              </i>
              {" "}(in 2D), suggest a 
              definition for the
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              sum
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              of two vectors. (The most logical definition wins.)
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={9}>
            <VerticalChunk>
              The standard definition is that the sum
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \vec&#123;u&#125; + \vec&#123;v&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              of a vector
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \vec&#123;u&#125; = (u_x, u_y)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and of a vector
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \vec&#123;v&#125; = (v_x, v_y)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is the vector
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              (u_x + v_x, u_y + v_y)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              whose first coordinate is the sum of the first
              coordinates of{" "}
              <Math>
                $\vec&#123;u&#125;$
              </Math>
              {" "}and{" "}
              <Math>
                $\vec&#123;v&#125;$
              </Math>
              {" "}and whose 
              second coordinate is the sum of the second coordinates
              of{" "}
              <Math>
                $\vec&#123;u&#125;$
              </Math>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $\vec&#123;v&#125;$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Example 1.
              </i>
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \vec&#123;u&#125; = (100, 100)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \vec&#123;v&#125; = (1, -1)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              then
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \,\vec&#123;u&#125; + \vec&#123;v&#125; = (101, 99)
              $$
              <ImageRight
                offset_x="1em"
                src="/images/svg_ch5_ex_vector_sum_101_cloud.svg"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              because
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              100 + 1 = 101
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              on the one hand, and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              100 - 1 = 99
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              on the other hand.
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                The little arrow{" "}
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
              </VerticalChunk>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 2.
                </i>
                {" "}
                Represent the vectors{" "}
                <NoBreak>
                  <Math>
                    $\vec&#123;u&#125;$
                  </Math>
                  ,
                </NoBreak>
                {" "}{" "}
                <Math>
                  $\vec&#123;v&#125;$
                </Math>
                {" "}
                by arrows whose components are displacements{" "}
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
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $v_x$
                  </Math>
                  ,
                </NoBreak>
                {" "}{" "}
                <Math>
                  $v_y$
                </Math>
                {" "}in{" "}
                <NoBreak>
                  <Math>
                    $x$
                  </Math>
                  ,
                </NoBreak>
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $y$
                  </Math>
                  ,
                </NoBreak>
                {" "}{" "}
                <Math>
                  $x$
                </Math>
                {" "}and{" "}
                <Math>
                  $y$
                </Math>
                {" "}again
                respectively:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_vector_sum_vectors.svg" />
              <Pause />
              <VerticalChunk>
                Then
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                u_x + v_x
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                may be geometrically realized as the concatenation
                of the{" "}
                <Math>
                  $u_x$
                </Math>
                {" "}and{" "}
                <NoBreak>
                  <Math>
                    $v_x$
                  </Math>
                  ...
                </NoBreak>
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_vector_sum_ux_plus_vx.svg" />
              <Pause />
              <VerticalChunk>
                ...component displacements, while
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                u_y + v_y
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                may be geometrically realized as the concatenation
                of the{" "}
                <Math>
                  $u_y$
                </Math>
                {" "}and{" "}
                <NoBreak>
                  <Math>
                    $v_y$
                  </Math>
                  ...
                </NoBreak>
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_vector_sum_uy_plus_vy.svg" />
              <Pause />
              <VerticalChunk>
                ...component displacements; moreover, both 
                concatenations may be simultaneously obtained by 
                concatenating the original{" "}
                <Math>
                  $\vec&#123;u&#125;$
                </Math>
                {" "}and{" "}
                <Math>
                  $\vec&#123;v&#125;$
                </Math>
                {" "}
                arrows...
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_vector_sum_u_concat_v.svg" />
              <Pause />
              <VerticalChunk>
                ...which actually implies that{" "}
                <Math>
                  $\vec&#123;u&#125; + \vec&#123;v&#125;$
                </Math>
                {" "}
                is the vector going from the head of{" "}
                <Math>
                  $\vec&#123;u&#125;$
                </Math>
                {" "}to 
                the tail of{" "}
                <Math>
                  $\vec&#123;v&#125;$
                </Math>
                {" "}in the afore-mentioned 
                concatenation, because of how we defined 
                {" "}
                <NoBreak>
                  <Math>
                    $\vec&#123;u&#125; + \vec&#123;v&#125;$
                  </Math>
                  :
                </NoBreak>
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_vector_sum_u_plus_v.svg" />
              <Pause />
              <VerticalChunk>
                This makes a mess, but the point is that this
                gives us a
              </VerticalChunk>
              <Pause />
              <CentralDisplayItalic>
                geometric interpretation
              </CentralDisplayItalic>
              <Pause />
              <VerticalChunk>
                or
              </VerticalChunk>
              <Pause />
              <CentralDisplayItalic>
                geometric representation
              </CentralDisplayItalic>
              <Pause />
              <VerticalChunk>
                or
              </VerticalChunk>
              <Pause />
              <CentralDisplayItalic>
                geometric method of evaluation
              </CentralDisplayItalic>
              <Pause />
              <VerticalChunk>
                for the sum of two vectors: concatenate the arrows
                of the vectors you're summing, and take the final
                displacement from the head of the first arrow to the
                tail of the last arrow.
              </VerticalChunk>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 3.
                </i>
                {" "}
                The solution to Exercise 7 can be cast in terms of
                vector addition, with, specifically, the position
                vector of the point being equal to the sum of the
                position vector of the circle's center with the “radial
                vector” from the center to the point:
              </VerticalChunk>
              <Pause />
              <Image
                src="/images/svg_ch5_ex_vector_sum_previous_example.svg"
                style="margin-top:1em;margin-bottom:0.8em;" />
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={10}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 10.
              </b>
              {" "}
              If a particle in{" "}
              <Math>
                $\rr^2$
              </Math>
              {" "}(= “in the plane”)
              has{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              A\cdot\cos(Bt + C) + D
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              at time{" "}
              <Math>
                $t$
              </Math>
              {" "}what is the most likely motion
              that the particle is undergoing? In that 
              case, what is the geometric meaning of the
              constants{" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $C$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $D$
                </Math>
                ?
              </NoBreak>
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={10}>
            <VerticalChunk>
              The simplest motion that would produce such
              an{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}(according to subjective human
              standards of simplicity, admittedly) is circular
              motion at uniform speed. In this case:
            </VerticalChunk>
            <TextParent>
              <ul style="list-style-type:disc;margin-top:1em;margin-bottom:1em;padding-left:66px;line-height:1.7em;">
                <li>
                  <Math>
                    $A$
                  </Math>
                  {" "}is the radius of the circle
                </li>
                <li>
                  <Math>
                    $D$
                  </Math>
                  {" "}is the{" "}
                  <NoBreak>
                    <Math>
                      $x$
                    </Math>
                    -coordinate
                  </NoBreak>
                  {" "}of the circle's center
                </li>
              </ul>
            </TextParent>
            <VerticalChunk>
              And either:
            </VerticalChunk>
            <TextParent>
              <ul style="list-style-type:disc;margin-top:1em;margin-bottom:1em;padding-left:66px;line-height:1.7em;">
                <li>
                  <Math>
                    $B$
                  </Math>
                  {" "}is the counterclockwise 
                  {" "}
                  <i>
                    angular speed
                  </i>
                  /_angular frequency_ (radians per 
                  unit time) and{" "}
                  <Math>
                    $C$
                  </Math>
                  {" "}is the counterclockwise 
                  starting angle{" "}
                  <NoBreak>
                    (
                    <Math>
                      $t = 0$
                    </Math>
                    )
                  </NoBreak>
                  {" "}of the particle, as 
                  measured from a translate of the positive{" "}
                  <Math>
                    $x$
                  </Math>
                  {" "}
                  axis going through the center of the circle
                </li>
              </ul>
            </TextParent>
            <VerticalChunk>
              Or:
            </VerticalChunk>
            <TextParent>
              <ul style="list-style-type:disc;margin-top:1em;margin-bottom:1em;padding-left:66px;line-height:1.7em;">
                <li>
                  <Math>
                    $-B$
                  </Math>
                  {" "}is the counterclockwise 
                  angular speed/angular frequency of the particle 
                  and{" "}
                  <Math>
                    $-C$
                  </Math>
                  {" "}is the counterclockwise starting angle 
                  of the particle, as measured from a translate of 
                  the positive{" "}
                  <Math>
                    $x$
                  </Math>
                  {" "}axis going through the center 
                  of the circle
                </li>
              </ul>
            </TextParent>
            <VerticalChunk>
              In more detail, every time
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              t
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              increases by{" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              Bt + C
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              increases by{" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "}but
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              Bt + C
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is an amount of radians, because anything 
              fed to ‘cos’ is an amount of radians; and so 
              {" "}
              <Math>
                $B$
              </Math>
              {" "}ends up being the
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              radian increase per unit time,
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              or angular speed, of the particle.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              However, said “increase” in radians can be
              associated to either clockwise or a 
              counterclockwise motion, there is no telling. 
              (Quite aside from the fact that{" "}
              <Math>
                $B$
              </Math>
              {" "}might be
              negative.) Indeed, while we have a tendency to
              think of{" "}
              <Math>
                $\cos(x)$
              </Math>
              {" "}as
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              the{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}of a point{" "}
              <Math>
                $x$
              </Math>
              {" "}units
              <br />
              counterclockwise from{" "}
              <Math>
                $(1, 0)$
              </Math>
              {" "}on the unit circle
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              <Math>
                $\cos(x)$
              </Math>
              {" "}is also
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              the{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}of a point{" "}
              <Math>
                $x$
              </Math>
              {" "}units
              <br />
              clockwise from{" "}
              <Math>
                $(1, 0)$
              </Math>
              {" "}on the unit circle
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              [“counterclockwise”{" "}
              <Math>
                $\ra$
              </Math>
              {" "}“clockwise”].
              Per the one interpretation of ‘cos’,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              Bt + C
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is an amount of counterclockwise radians; per 
              the other,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              Bt + C
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is an amount of{" "}
              <i>
                clockwise
              </i>
              {" "}radians. The following 
              diagram illustrates the two possibilities:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_Bt_plus_C_OccamsRazor_combined_clockwise_version.svg" />
            <Pause />
            <VerticalChunk>
              (Or... ~ ~ ~ ~ ~ ~ ~ ~ ~
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_Bt_plus_C_OccamsRazor_combined_counterclockwise_version.svg" />
            <Pause />
            <VerticalChunk>
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
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                If you harbor any doubts about there being no more
                than two solutions, picture this diagram...
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_Bt_plus_C_black_on_white.svg" />
              <Pause />
              <VerticalChunk>
                ...and imagine the vertical line scanning 
                to the left and to the right again as it 
                tracks the{" "}
                <NoBreak>
                  <Math>
                    $x$
                  </Math>
                  -coordinate
                </NoBreak>
                {" "}of a particle going 
                around the circle, unseen. Then there is one 
                clockwise particle that tracks with the line, 
                and one counterclockwise particle that tracks 
                with the line, but no more, insofar as 
                non-direction-reversing particles are 
                concerned!
              </VerticalChunk>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={11}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 11.
              </b>
              {" "}
              Take a particle traveling around a 
              circle at constant speed. What is the
              number of cycles [full revolutions] per
              {" "}
              <Math>
                $4\eta$
              </Math>
              {" "}units of time equal to, by 
              another name?
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={11}>
            <VerticalChunk>
              Let
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              x
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              be the number of cycles per{" "}
              <Math>
                $4\eta$
              </Math>
              {" "}units
              of time.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Since one cycle is{" "}
              <Math>
                $4\eta$
              </Math>
              {" "}radians, we can,
              instead of saying that the particle travels
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              {" "}{" "}
              <Math>
                $x$
              </Math>
              {" "}cycles per{" "}
              <Math>
                $4\eta$
              </Math>
              {" "}units of time
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              say that the particle travels
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              {" "}{" "}
              <Math>
                $x\cdot 4\eta&#123;&#125;$
              </Math>
              {" "}radians per{" "}
              <Math>
                $4\eta$
              </Math>
              {" "}units of time
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              or that the particle travels
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              {" "}{" "}
              <Math>
                $x$
              </Math>
              {" "}radians per{" "}
              <Math>
                $1$
              </Math>
              {" "}unit of time
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              dividing by{" "}
              <NoBreak>
                <Math>
                  $4\eta$
                </Math>
                .
              </NoBreak>
              {" "}In other words,{" "}
              <Math>
                $x$
              </Math>
              {" "}is the so-called
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              angular speed
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              or
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              angular frequency
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              of the particle. (That's the answer: “angular
              speed”, or, equivalently, “angular frequency”.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={12}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 12.
              </b>
              {" "}
              Which of these angles is{" "}
              <Math>
                $0.2$
              </Math>
              {" "}radians?
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_0_2_radians_guess.svg" />
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={12}>
            <VerticalChunk>
              An angle is{" "}
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              0.2
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              radians if the length of the subtended arc is
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              20\%
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              the length of the radius; 
              proceeding by elimination—many things are obviously
              not{" "}
              <Math>
                $20\%$
              </Math>
              {" "}of the radius—that's this one:
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch5_ex_0_2_radians_guess_answer.svg"
              style="margin-top:1em;margin-bottom:1em;" />
            <Pause />
            <VerticalChunk>
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
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch5_ex_0_2_radians_guess_joke.svg"
              style="margin-top:1em;margin-bottom:1em;" />
            <Pause />
            <VerticalChunk>
              (Joking.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={13}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 13.
              </b>
              {" "}
              What geometric ratios do
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \eta
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              4\eta
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              represent?
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={13}>
            <VerticalChunk>
              While{" "}
              <Math>
                $\eta$
              </Math>
              {" "}was defined
              as the quarter-circumference of a unit circle, 
              more generally,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \eta
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is the quarter-circumference of a circle (any 
              circle) divided by its radius, and, correspondingly,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              4\eta
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is the circumference of a circle (any circle) 
              divided by its radius.
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                As one consequence, it follows that the circumference 
                of a circle is
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                4\eta\cdot r
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                where{" "}
                <Math>
                  $r$
                </Math>
                {" "}is the radius.
              </VerticalChunk>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 2.
                </i>
                {" "}
                These “ratio descriptions” of{" "}
                <Math>
                  $\eta$
                </Math>
                {" "}and 
                {" "}
                <Math>
                  $4\eta$
                </Math>
                {" "}also follow by viewing{" "}
                <Math>
                  $\eta$
                </Math>
                {" "}and{" "}
                <Math>
                  $4\eta$
                </Math>
                {" "}
                as the radian values of a right angle and a full angle, 
                respectively.
              </VerticalChunk>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={14}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 14.
              </b>
              {" "}
              Compute
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              &#123;11\over 7&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by hand using long division.
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={14}>
            <VerticalChunk>
              Here is the division in American notation
              overlayed on top of a “Plaza” wallpaper to
              help demarcate the different columns of 
              digits (in American notation each column 
              of digits is associated to a power of{" "}
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
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_11_over_7_longhand_eloise.svg" />
            <Pause />
            <VerticalChunk>
              The division stops when we see the same 
              remainder twice—here{" "}
              <NoBreak>
                ‘
                <Math>
                  $40$
                </Math>
                ’
              </NoBreak>
              {" "}reappears, which 
              means that the next digit of the quotient 
              will be{" "}
              <Math>
                $5$
              </Math>
              {" "}(like the second digit of the 
              quotient, that we obtained back when we had 
              a remainder of{" "}
              <NoBreak>
                <Math>
                  $40$
                </Math>
                ),
              </NoBreak>
              {" "}the next one{" "}
              <Math>
                $7$
              </Math>
              {" "}(the 
              third digit of the quotient), etc—digits will 
              repeat and the “final” quotient when we let 
              the division unravel infinitely far to the right 
              will be
            </VerticalChunk>
            <div style="font-size:1.65em;margin:1em 0;">
              <MathBlock>
                $$
                1.\overline&#123;571428&#125;
                $$
              </MathBlock>
            </div>
            <VerticalChunk>
              ...where the decimal point is after the 
              first{" "}
              <NoBreak>
                ‘
                <Math>
                  $1$
                </Math>
                ’
              </NoBreak>
              {" "}because the first{" "}
              <NoBreak>
                ‘
                <Math>
                  $1$
                </Math>
                ’
              </NoBreak>
              {" "}is in the
              {" "}
              <NoBreak>
                ‘
                <Math>
                  $10^0$
                </Math>
                ’
              </NoBreak>
              {" "}column.
            </VerticalChunk>
            <Pause />
            <StarDivider />
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                If you've never done this kind of thing before, the
                division starts in this blank state:
              </VerticalChunk>
              <Pause />
              <Image
                src="/images/svg_ch5_ex_11_over_7_longhand_eloise_start_1.svg"
                style="margin-top:0.8em;margin-bottom:1.4em;" />
              <Pause />
              <VerticalChunk>
                We take the first digit of the numerator, 
                which is{" "}
                <NoBreak>
                  ‘
                  <Math>
                    $1$
                  </Math>
                  ’,
                </NoBreak>
                {" "}ask “how many times does
                {" "}
                <Math>
                  $7$
                </Math>
                {" "}go into{" "}
                <NoBreak>
                  <Math>
                    $1$
                  </Math>
                  ?”,
                </NoBreak>
                {" "}we will write the answer 
                here:
              </VerticalChunk>
              <Pause />
              <Image
                src="/images/svg_ch5_ex_11_over_7_longhand_eloise_start_2a.svg"
                style="margin-top:0.8em;margin-bottom:1.5em;" />
              <Pause />
              <VerticalChunk>
                The answer is{" "}
                <NoBreak>
                  ‘
                  <Math>
                    $0$
                  </Math>
                  ’
                </NoBreak>
                {" "}{" "}
                <NoBreak>
                  (
                  <Math>
                    $7$
                  </Math>
                </NoBreak>
                {" "}goes{" "}
                <Math>
                  $0$
                </Math>
                {" "}times into{" "}
                <NoBreak>
                  <Math>
                    $1$
                  </Math>
                  ):
                </NoBreak>
              </VerticalChunk>
              <Pause />
              <Image
                src="/images/svg_ch5_ex_11_over_7_longhand_eloise_start_2b.svg"
                style="margin-top:0.8em;margin-bottom:1.5em;" />
              <Pause />
              <VerticalChunk>
                We next add a digit from the numerator, giving
                us{" "}
                <NoBreak>
                  <Math>
                    $11$
                  </Math>
                  ,
                </NoBreak>
                {" "}we ask “how many times does{" "}
                <Math>
                  $7$
                </Math>
                {" "}go into 
                {" "}
                <NoBreak>
                  <Math>
                    $11$
                  </Math>
                  ?”,
                </NoBreak>
                {" "}we will write the answer here:
              </VerticalChunk>
              <Pause />
              <Image
                src="/images/svg_ch5_ex_11_over_7_longhand_eloise_start_3a.svg"
                style="margin-top:0.8em;margin-bottom:1.5em;" />
              <Pause />
              <VerticalChunk>
                The answer is{" "}
                <NoBreak>
                  ‘
                  <Math>
                    $1$
                  </Math>
                  ’
                </NoBreak>
                {" "}{" "}
                <NoBreak>
                  (
                  <Math>
                    $7$
                  </Math>
                </NoBreak>
                {" "}goes{" "}
                <Math>
                  $1$
                </Math>
                {" "}times into{" "}
                <NoBreak>
                  <Math>
                    $11$
                  </Math>
                  ):
                </NoBreak>
              </VerticalChunk>
              <Pause />
              <Image
                src="/images/svg_ch5_ex_11_over_7_longhand_eloise_start_3b.svg"
                style="margin-top:0.8em;margin-bottom:1.5em;" />
              <Pause />
              <VerticalChunk>
                We subtract
              </VerticalChunk>
              <div style="font-size:1.65em;margin:1em 0;">
                <MathBlock>
                  $$
                  1 \times 7
                  $$
                </MathBlock>
              </div>
              <VerticalChunk>
                from{" "}
                <NoBreak>
                  <Math>
                    $11$
                  </Math>
                  ,
                </NoBreak>
                {" "}giving us a new remainder
                of{" "}
                <Math>
                  $4$
                </Math>
                {" "}(the very first “remainder” is actually{" "}
                <NoBreak>
                  <Math>
                    $11$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                before anything starts) (before anything started we
                had{" "}
                <NoBreak>
                  <Math>
                    $11 = 7 \times 0 + 11$
                  </Math>
                  ,
                </NoBreak>
                {" "}and now we have
                {" "}
                <NoBreak>
                  <Math>
                    $11 = 7 \times 1 + 4$
                  </Math>
                  ):
                </NoBreak>
              </VerticalChunk>
              <Pause />
              <Image
                src="/images/svg_ch5_ex_11_over_7_longhand_eloise_start_4.svg"
                style="margin-top:0.8em;margin-bottom:1.5em;" />
              <Pause />
              <VerticalChunk>
                Because{" "}
                <Math>
                  $7$
                </Math>
                {" "}does not fit into{" "}
                <Math>
                  $4$
                </Math>
                {" "}(and if it did,
                we would have done something wrong)
                we “bring down a{" "}
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  ”
                </NoBreak>
                {" "}that is actually part of
                a hidden sequence of{" "}
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  's
                </NoBreak>
                {" "}sitting to the right
                of{" "}
                <NoBreak>
                  <Math>
                    $11$
                  </Math>
                  :
                </NoBreak>
              </VerticalChunk>
              <Pause />
              <Image
                src="/images/svg_ch5_ex_11_over_7_longhand_eloise_start_5.svg"
                style="margin-top:0.8em;margin-bottom:1.5em;" />
              <Pause />
              <VerticalChunk>
                We ask “how many times does{" "}
                <Math>
                  $7$
                </Math>
                {" "}go into{" "}
                <NoBreak>
                  <Math>
                    $40$
                  </Math>
                  ?”,
                </NoBreak>
                {" "}
                we will write the answer here:
              </VerticalChunk>
              <Pause />
              <Image
                src="/images/svg_ch5_ex_11_over_7_longhand_eloise_start_6a.svg"
                style="margin-top:0.8em;margin-bottom:1.5em;" />
              <Pause />
              <VerticalChunk>
                The answer is{" "}
                <NoBreak>
                  ‘
                  <Math>
                    $5$
                  </Math>
                  ’
                </NoBreak>
                {" "}{" "}
                <NoBreak>
                  (
                  <Math>
                    $7$
                  </Math>
                </NoBreak>
                {" "}goes{" "}
                <Math>
                  $5$
                </Math>
                {" "}times into{" "}
                <NoBreak>
                  <Math>
                    $40$
                  </Math>
                  ):
                </NoBreak>
              </VerticalChunk>
              <Pause />
              <Image
                src="/images/svg_ch5_ex_11_over_7_longhand_eloise_start_6b.svg"
                style="margin-top:0.8em;margin-bottom:1.5em;" />
              <Pause />
              <VerticalChunk>
                We subtract
              </VerticalChunk>
              <div style="font-size:1.65em;margin:1em 0;">
                <MathBlock>
                  $$
                  5\times 7
                  $$
                </MathBlock>
              </div>
              <VerticalChunk>
                from{" "}
                <NoBreak>
                  <Math>
                    $40$
                  </Math>
                  ,
                </NoBreak>
                {" "}giving us a new remainder
                of{" "}
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
                {" "}not{" "}
                <NoBreak>
                  <Math>
                    $5$
                  </Math>
                  ,
                </NoBreak>
                {" "}but 
                the teacher at the board will often say{" "}
                <NoBreak>
                  “
                  <Math>
                    $5$
                  </Math>
                  ”):
                </NoBreak>
              </VerticalChunk>
              <Pause />
              <Image
                src="/images/svg_ch5_ex_11_over_7_longhand_eloise_start_7.svg"
                style="margin-top:0.8em;margin-bottom:1.5em;" />
              <Pause />
              <VerticalChunk>
                Because{" "}
                <Math>
                  $7$
                </Math>
                {" "}does not fit into{" "}
                <NoBreak>
                  <Math>
                    $5$
                  </Math>
                  ,
                </NoBreak>
                {" "}we bring
                another{" "}
                <Math>
                  $0$
                </Math>
                {" "}down from our infinite reserve of
                {" "}
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  's:
                </NoBreak>
              </VerticalChunk>
              <Pause />
              <Image
                src="/images/svg_ch5_ex_11_over_7_longhand_eloise_start_8.svg"
                style="margin-top:0.8em;margin-bottom:1.5em;" />
              <Pause />
              <VerticalChunk>
                (Etc.)
              </VerticalChunk>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={15}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 15.
              </b>
              {" "}
              Compute
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              &#123;22\over 7&#125;, \,\,\,\,\, &#123;33\over 7&#125;, \,\,\,\,\,\rm&#123;and&#125;\,\,\,\,\,&#123;44\over 7&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by hand using long division.
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={15}>
            <VerticalChunk>
              The divisions, pursued up to the point where
              remainders repeat, look as follows:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_22_and_33_and_44_over_7_combined_longhands.svg" />
            <Pause />
            <VerticalChunk>
              From which...
            </VerticalChunk>
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
            <VerticalChunk>
              ...because the digits of the quotient are,
              in each case, about to
              restart from the first digit 
              after the decimal point.
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                Because...
              </VerticalChunk>
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
              <VerticalChunk>
                ...we thus have...
              </VerticalChunk>
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
              <VerticalChunk>
                ...though none of these estimates are actually
                accurate to more than two decimal places. (While all
                are accurate up to{" "}
                <i>
                  at least
                </i>
                {" "}two decimal places.)
              </VerticalChunk>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 2.
                </i>
                {" "}
                As mentioned in Note 1 of Exercise 24, 
                Chapter 3, these approximations are about 
                half-a-part-in-a-thousand too large, or to 
                be more exact,
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \approx 0.0004
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                too large in relative terms. I.e., you can subtract
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \approx 1.\overline&#123;571428&#125; \cdot 0.0004 \approx 0.0006
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                from
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \approx 1.\overline&#123;571428&#125;
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                to get a better approximation for{" "}
                <NoBreak>
                  <Math>
                    $\eta$
                  </Math>
                  ,
                </NoBreak>
                {" "}subtract
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \approx 3.\overline&#123;142857&#125; \cdot 0.0004 \approx 0.0012
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                from
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \approx 3.\overline&#123;142857&#125;
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                to get a better approximation for{" "}
                <NoBreak>
                  <Math>
                    $2\eta$
                  </Math>
                  ,
                </NoBreak>
                {" "}subtract
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \approx 4.\overline&#123;714285&#125; \cdot 0.0004 \approx 0.0019
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                from
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \approx 4.\overline&#123;714285&#125;
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                to get a better approximation for{" "}
                <NoBreak>
                  <Math>
                    $3\eta$
                  </Math>
                  ,
                </NoBreak>
                {" "}subtract
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \approx 6.\overline&#123;285714&#125; \cdot 0.0004 \approx 0.0025
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                from
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \approx 6.\overline&#123;285714&#125;
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                to get a better approximation for{" "}
                <NoBreak>
                  <Math>
                    $4\eta$
                  </Math>
                  .
                </NoBreak>
                {" "}The resulting
                approximations end up being...
              </VerticalChunk>
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
              <VerticalChunk>
                ...that are correct approximations up to
                the fourth digit, it turns out, modulo
                rounding off of the fifth digit. (But these
                are not worth learning by heart, by any means.)
              </VerticalChunk>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={16}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 16.
              </b>
              {" "}
              To close our division skills: use the
              table below to compute the integer part and
              the first three digits past the decimal point
              (no rounding based on the fourth digit) of
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              15542486476949/777
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by hand, using long division. What is the
              new (last) remainder when the quotient reaches
              the 3rd digit after the decimal point, and what 
              equation is implied from the quotient and the 
              new (last) remainder at that point?
            </VerticalChunk>
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
          <Pause />
          <Solution solution_number={16}>
            <VerticalChunk>
              Here is the long division, pursued up to
              the{" "}
              <NoBreak>
                “
                <Math>
                  $10^&#123;-3&#125;$
                </Math>
                ”
              </NoBreak>
              {" "}column of the quotient,
              including one last remainder computation
              that occurs pursuant to adding the digit in
              the{" "}
              <NoBreak>
                “
                <Math>
                  $10^&#123;-3&#125;$
                </Math>
                ”
              </NoBreak>
              {" "}column of the quotient (this
              is what the problem statement refers to as
              the “last remainder”):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_big_division.svg" />
            <Pause />
            <VerticalChunk>
              Said quotient is
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              20003200099.033
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              while the new (last) remainder is
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              0.359
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and the equation linking the two is
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              15542486476949 = 777 \times 20003200099.033 + 0.359
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              per properties of the long division algorithm.
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                Lest anyone get left behind, we can go
                over the division “on the board”
                for a bit.
              </VerticalChunk>
              <VerticalChunk indent={true}>
                We start by asking “how many times does{" "}
                <Math>
                  $777$
                </Math>
                {" "}
                go into{" "}
                <NoBreak>
                  <Math>
                    $1$
                  </Math>
                  ?”,
                </NoBreak>
                {" "}the answer will go here:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_inside_1.svg" />
              <Pause />
              <VerticalChunk>
                The answer is{" "}
                <Math>
                  $0$
                </Math>
                {" "}(that we need not write
                down, but we can), we move to asking
                “how many times does{" "}
                <Math>
                  $777$
                </Math>
                {" "}
                go into{" "}
                <NoBreak>
                  <Math>
                    $15$
                  </Math>
                  ?”,
                </NoBreak>
                {" "}the answer will go here:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_inside_2.svg" />
              <Pause />
              <VerticalChunk>
                The answer is{" "}
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  ,
                </NoBreak>
                {" "}we move to asking
                “how many times does{" "}
                <Math>
                  $777$
                </Math>
                {" "}
                go into{" "}
                <NoBreak>
                  <Math>
                    $155$
                  </Math>
                  ?”,
                </NoBreak>
                {" "}the answer will go here:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_inside_3.svg" />
              <Pause />
              <VerticalChunk>
                The answer is{" "}
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  ,
                </NoBreak>
                {" "}we move to asking
                “how many times does{" "}
                <Math>
                  $777$
                </Math>
                {" "}
                go into{" "}
                <NoBreak>
                  <Math>
                    $1554$
                  </Math>
                  ?”,
                </NoBreak>
                {" "}the answer will go here:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_inside_4.svg" />
              <Pause />
              <VerticalChunk>
                The answer is{" "}
                <NoBreak>
                  <Math>
                    $2$
                  </Math>
                  ,
                </NoBreak>
                {" "}we subtract{" "}
                <Math>
                  $2 \times 777$
                </Math>
                {" "}
                from{" "}
                <NoBreak>
                  <Math>
                    $1554$
                  </Math>
                  ,
                </NoBreak>
                {" "}giving us a new “prefix” for
                the remainder:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_inside_4b.svg" />
              <Pause />
              <VerticalChunk>
                (FYI, the remainder now consists of these yellow
                digits:)
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_inside_4remainder.svg" />
              <Pause />
              <VerticalChunk>
                Continuing, we bring down a{" "}
                <NoBreak>
                  <Math>
                    $2$
                  </Math>
                  ,
                </NoBreak>
                {" "}ask “how many times does{" "}
                <Math>
                  $777$
                </Math>
                {" "}
                go into{" "}
                <NoBreak>
                  <Math>
                    $2$
                  </Math>
                  ?”,
                </NoBreak>
                {" "}the answer will go here:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_inside_5b_v2.svg" />
              <Pause />
              <VerticalChunk>
                The answer is{" "}
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  ;
                </NoBreak>
                {" "}we bring down a{" "}
                <NoBreak>
                  <Math>
                    $4$
                  </Math>
                  ,
                </NoBreak>
                {" "}ask “how many 
                times does{" "}
                <Math>
                  $777$
                </Math>
                {" "}go into{" "}
                <NoBreak>
                  <Math>
                    $24$
                  </Math>
                  ?”,
                </NoBreak>
                {" "}the answer will go 
                here:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_inside_6b_v2.svg" />
              <Pause />
              <VerticalChunk>
                The answer is{" "}
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  ;
                </NoBreak>
                {" "}we bring down an{" "}
                <NoBreak>
                  <Math>
                    $8$
                  </Math>
                  ,
                </NoBreak>
                {" "}ask “how many 
                times does{" "}
                <Math>
                  $777$
                </Math>
                {" "}go into{" "}
                <NoBreak>
                  <Math>
                    $248$
                  </Math>
                  ?”,
                </NoBreak>
                {" "}the answer will go 
                here:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_inside_7b_v2.svg" />
              <Pause />
              <VerticalChunk>
                The answer is{" "}
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  ;
                </NoBreak>
                {" "}we bring down a{" "}
                <NoBreak>
                  <Math>
                    $6$
                  </Math>
                  ,
                </NoBreak>
                {" "}ask “how many 
                times does{" "}
                <Math>
                  $777$
                </Math>
                {" "}go into{" "}
                <NoBreak>
                  <Math>
                    $2486$
                  </Math>
                  ?”,
                </NoBreak>
                {" "}the answer will go 
                here:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_inside_8b_v2.svg" />
              <Pause />
              <VerticalChunk>
                The answer is{" "}
                <NoBreak>
                  <Math>
                    $3$
                  </Math>
                  ,
                </NoBreak>
                {" "}we subtract{" "}
                <Math>
                  $3 \times 777$
                </Math>
                {" "}
                from{" "}
                <NoBreak>
                  <Math>
                    $2648$
                  </Math>
                  ,
                </NoBreak>
                {" "}giving us a new remainder:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_inside_8c.svg" />
              <Pause />
              <VerticalChunk>
                (And to be specific, the remainder is now formed
                by...
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_inside_8remainder.svg" />
              <Pause />
              <VerticalChunk>
                ...these yellow digits.) Etc.
              </VerticalChunk>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 2.
                </i>
                {" "}
                If you need help brushing up on your
                long-form subtraction, say your subtraction is this:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_big_subtraction_a.svg" />
              <Pause />
              <VerticalChunk>
                You can either treat the top or bottom number as an
                odometer, and count how much a car with this
                odometer must be driven back/forth to reach the other
                number.
              </VerticalChunk>
              <VerticalChunk indent={true}>
                Viewing the top number as an odometer, the odometer
                would be as follows:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_odometer_1.svg" />
              <Pause />
              <VerticalChunk>
                Starting from the right end of the subtraction, we ask
                “by how much (or how little) does a car need to be 
                driven backwards, to turn the{" "}
                <NoBreak>
                  ‘
                  <Math>
                    $2$
                  </Math>
                  ’
                </NoBreak>
                {" "}into an{" "}
                <NoBreak>
                  ‘
                  <Math>
                    $8$
                  </Math>
                  ’?”,
                </NoBreak>
                {" "}we
                will write the answer below:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_big_subtraction_c.svg" />
              <Pause />
              <VerticalChunk>
                The answer is:{" "}
                <Math>
                  $4$
                </Math>
                {" "}[miles
                <b>
                  ] (
                </b>
                say):
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_big_subtraction_d.svg" />
              <Pause />
              <VerticalChunk>
                But the odometer will pass
                from{" "}
                <NoBreak>
                  ‘
                  <Math>
                    $0$
                  </Math>
                  ’
                </NoBreak>
                {" "}to{" "}
                <NoBreak>
                  ‘
                  <Math>
                    $9$
                  </Math>
                  ’
                </NoBreak>
                {" "}on its way down to{" "}
                <NoBreak>
                  <Math>
                    $8$
                  </Math>
                  ,
                </NoBreak>
                {" "}so we also
                turn the{" "}
                <NoBreak>
                  ‘
                  <Math>
                    $6$
                  </Math>
                  ’
                </NoBreak>
                {" "}into a{" "}
                <NoBreak>
                  ‘
                  <Math>
                    $5$
                  </Math>
                  ’
                </NoBreak>
                {" "}(or “borrow a{" "}
                <NoBreak>
                  <Math>
                    $10$
                  </Math>
                  ”
                </NoBreak>
                {" "}to do
                {" "}
                <NoBreak>
                  <Math>
                    $12 - 8 = 4$
                  </Math>
                  ,
                </NoBreak>
                {" "}as some teachers put it):
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_big_subtraction_e.svg" />
              <Pause />
              <VerticalChunk>
                Next we ask “by how many{" "}
                <NoBreak>
                  [
                  <Math>
                    $10$
                  </Math>
                  s
                </NoBreak>
                {" "}of miles] does the car need
                to be driven back, to turn the{" "}
                <NoBreak>
                  ‘
                  <Math>
                    $5$
                  </Math>
                  ’
                </NoBreak>
                {" "}into a{" "}
                <NoBreak>
                  ‘
                  <Math>
                    $9$
                  </Math>
                  ’?”,
                </NoBreak>
                {" "}we
                will write the answer below:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_big_subtraction_f.svg" />
              <Pause />
              <VerticalChunk>
                The answer is:{" "}
                <Math>
                  $6$
                </Math>
                {" "}{" "}
                <NoBreak>
                  [
                  <Math>
                    $10$
                  </Math>
                  s
                </NoBreak>
                {" "}of miles]:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_big_subtraction_g.svg" />
              <Pause />
              <VerticalChunk>
                But here too the odometer will pass
                from{" "}
                <NoBreak>
                  ‘
                  <Math>
                    $0$
                  </Math>
                  ’
                </NoBreak>
                {" "}to{" "}
                <NoBreak>
                  ‘
                  <Math>
                    $9$
                  </Math>
                  ’
                </NoBreak>
                {" "}as we reduce it, so the wheel to its
                left must be turned back a notch as well; and because that
                wheel is a{" "}
                <NoBreak>
                  ‘
                  <Math>
                    $0$
                  </Math>
                  ’
                </NoBreak>
                {" "}already, the wheel to{" "}
                <i>
                  its
                </i>
                left
                must be turned back a notch; and so on, resulting in a small cascade
                effect:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_big_subtraction_h.svg" />
              <Pause />
              <VerticalChunk>
                Next we ask “by how many{" "}
                <NoBreak>
                  [
                  <Math>
                    $100$
                  </Math>
                  s
                </NoBreak>
                {" "}of miles] does the car need
                to be driven back, to turn the{" "}
                <NoBreak>
                  ‘
                  <Math>
                    $9$
                  </Math>
                  ’
                </NoBreak>
                {" "}into a{" "}
                <NoBreak>
                  ‘
                  <Math>
                    $0$
                  </Math>
                  ’?”,
                </NoBreak>
                {" "}we
                will write the answer below:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_big_subtraction_i.svg" />
              <Pause />
              <VerticalChunk>
                The answer is:{" "}
                <Math>
                  $9$
                </Math>
                {" "}{" "}
                <NoBreak>
                  [
                  <Math>
                    $100$
                  </Math>
                  s
                </NoBreak>
                {" "}of miles]:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_big_subtraction_j.svg" />
              <Pause />
              <VerticalChunk>
                Next we ask “by how many{" "}
                <NoBreak>
                  [
                  <Math>
                    $1000$
                  </Math>
                  s
                </NoBreak>
                {" "}of miles] does the car need
                to be driven back, to turn the{" "}
                <NoBreak>
                  ‘
                  <Math>
                    $9$
                  </Math>
                  ’
                </NoBreak>
                {" "}into a{" "}
                <NoBreak>
                  ‘
                  <Math>
                    $5$
                  </Math>
                  ’?”:
                </NoBreak>
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_big_subtraction_k.svg" />
              <Pause />
              <VerticalChunk>
                The answer is:{" "}
                <Math>
                  $4$
                </Math>
                {" "}{" "}
                <NoBreak>
                  [
                  <Math>
                    $1000$
                  </Math>
                  s
                </NoBreak>
                {" "}of miles]:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_big_subtraction_l.svg" />
              <Pause />
              <VerticalChunk>
                Etc—we finally obtain:
              </VerticalChunk>
              <Pause />
              <Image
                src="/images/svg_ch5_ex_big_division_big_subtraction_final.svg"
                style="margin-top:1em;margin-bottom:1em;" />
              <Pause />
              <VerticalChunk>
                (And like we alluded to above, one can also
                consider the bottom number to be the odometer,
                and “count up” towards the top number, leading
                to a symmetric algorithm, but one method is not
                better than the other.)
              </VerticalChunk>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 3.
                </i>
                {" "}
                Generally,
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_remainder_equation.svg" />
              <Pause />
              <VerticalChunk>
                at any point in a long division after the
                remainder is updated to account for a new term
                added to the quotient. That's what the remainder
                is for: to satisfy this equation!
              </VerticalChunk>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={17}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 17.
              </b>
              {" "}
              What is the angle marked ‘?’, as a function
              of{" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ?
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_angle_sum_180.svg" />
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={17}>
            <VerticalChunk>
              It is{" "}
              <NoBreak>
                <Math>
                  $\eta - \theta$
                </Math>
                .
              </NoBreak>
              {" "}(Since...
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \theta + (\eta - \theta) + \eta = 2\eta
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...you know that's the right answer!) (Nb:{" "}
              <NoBreak>
                <Math>
                  $2\eta = 180^\circ$
                </Math>
                .)
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                Two angles that sum to{" "}
                <Math>
                  $\eta$
                </Math>
                {" "}are 
                called{" "}
                <i>
                  complementary
                </i>
                , with each angle being
                the{" "}
                <i>
                  complement
                </i>
                {" "}of the other. 
                The two 
                non-right angles of a right triangle are, 
                therefore, complementary! 
                (Not
              </VerticalChunk>
              <Pause />
              <CentralDisplayItalic>
                complimentary
              </CentralDisplayItalic>
              <Pause />
              <VerticalChunk>
                which would indicate that the angles are
                given to you for free—everything in math is
                free, not just those angles!)
              </VerticalChunk>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={18}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 18.
              </b>
              {" "}
              The graph{" "}
              <Math>
                $y = \cos(x) + \sin(x)$
              </Math>
              {" "}from
              Exercise 5 has a maximum value greater than
              {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_maximum_of_sin_plus_cos.svg" />
            <Pause />
            <VerticalChunk>
              What is this maximum value, and for which
              value(s) of{" "}
              <Math>
                $x$
              </Math>
              {" "}is it achieved?
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={18}>
            <VerticalChunk>
              The sum
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              x + y
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              where
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              (x, y)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is a point in{" "}
              <Math>
                $\rr^2$
              </Math>
              {" "}can be understood as a
              certain vertical displacement added to a 
              certain horizontal displacement, but where
              the sum is numerical. (Not vectorial.)
              To realize the sum geometrically we must
              either align the vertical displacement to be
              horizontal, or else align the horizontal 
              displacement to be vertical:
            </VerticalChunk>
            <Pause />
            <Image
              style="background-color:#fdfdfd"
              src="/images/svg_ch5_ex_x_plus_y_options.svg" />
            <Pause />
            <VerticalChunk>
              Either way, the upshot is that the sum
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              x + y
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              can be found as the intersection of a line of 
              angle{" "}
              <Math>
                $-45^\circ$
              </Math>
              {" "}through the point{" "}
              <Math>
                $(x, y)$
              </Math>
              {" "}
              with either the{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -
              </NoBreak>
              {" "}or{" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -axis:
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_x_plus_y_intersections.svg" />
            <Pause />
            <VerticalChunk>
              (By the way: when we say “line of angle 
              {" "}
              <NoBreak>
                <Math>
                  $-45^\circ$
                </Math>
                ”
              </NoBreak>
              {" "}we refer to the standard position
              of{" "}
              <Math>
                $-45^\circ$
              </Math>
              {" "}on the unit circle, and, more
              specifically, to a line that is parallel
              to a line going through{" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "}and that standard
              position.)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              To add a little imagery, if we make a heatmap
              of{" "}
              <Math>
                $\rr^2$
              </Math>
              {" "}according to the value of the coordinate 
              sum...
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              x + y
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...over all points{" "}
              <Math>
                $(x, y)$
              </Math>
              {" "}we will obtain diagonal
              bands of slope{" "}
              <NoBreak>
                <Math>
                  $-1$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_x_plus_y_rainbow.svg" />
            <Pause />
            <VerticalChunk>
              If we are confined to some region of the plane
              and we need to find a point that maximizes the 
              coordinate sum we must go as far up and to the
              right as possible, towards brown—whereas
              to minimize the sum we must go as far down and
              to the left as possible, towards purple!
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Having said this,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \cos(x) + \sin(x)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              can be interpreted as the sum of the{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -
              </NoBreak>
              {" "}and 
              {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinates
              </NoBreak>
              {" "}of the point
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              (\cos(x), \sin(x))
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              that is a point on the unit circle. In other words,
              the unit circle is “the region of the plane” (cf.
              previous paragraph) to which we are confined—we 
              must choose a value of{" "}
              <Math>
                $x$
              </Math>
              {" "}that puts us as far 
              “up and to the right” as possible on the circle.
              That value is...{" "}
              <Math>
                $x = \eta/2$
              </Math>
              {" "}(!!!!):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_x_plus_y_eta_over_2.svg" />
            <Pause />
            <VerticalChunk>
              ...or with any multiple of{" "}
              <Math>
                $4\eta$
              </Math>
              {" "}added, 
              making the set of solutions{" "}
              <Math>
                $x$
              </Math>
              {" "}actually equal to
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large \&#123;\eta/2 + 4\eta&#123;&#125;k : k \in \zz\&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              (to be read{" "}
              <NoBreak>
                “
                <Math>
                  $\eta/2$
                </Math>
              </NoBreak>
              {" "}plus any multiple of{" "}
              <NoBreak>
                <Math>
                  $4\eta$
                </Math>
                ”)
              </NoBreak>
              {" "}
              (*or: “the{" "}
              <i>
                set of
              </i>
              {" "}values of the form{" "}
              <NoBreak>
                <Math>
                  $\eta/2$
                </Math>
                ,
              </NoBreak>
              {" "}
              plus any multiple of{" "}
              <NoBreak>
                <Math>
                  $4\eta$
                </Math>
                ”).
              </NoBreak>
            </VerticalChunk>
            <VerticalChunk indent={true}>
              The actual value of{" "}
              <Math>
                $\cos(x) + \sin(x)$
              </Math>
              {" "}achieved
              at this point is
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large
              \begin&#123;align&#125;
              &amp;\,\, \cos(\eta/2) + \sin(\eta/2)\\ =&\,\,\up&#123;1.5&#125;  \sqrt&#123;0.5&#125; + \sqrt&#123;0.5&#125;\\ =&\,\,\up&#123;1.5&#125; \sqrt&#123;2&#125;
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              using the fact that
            </VerticalChunk>
            <div>
              <MathBlock>
                $$
                \Large \cos(\eta/2) = \sin(\eta/2) = \sqrt&#123;0.5&#125;
                $$
              </MathBlock>
            </div>
            <VerticalChunk>
              and that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large \sqrt&#123;0.5&#125; = &#123;\sqrt&#123;2&#125; \over 2&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              (cf. Exercise 1, Chapter 1).
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                The fact that
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \Large \cos(\eta/2) + \sin(\eta/2) = \sqrt&#123;2&#125;
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                can also be seen from this diagram...
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_x_plus_y_pythagoras.svg" />
              <Pause />
              <VerticalChunk>
                ...which is an application of the Pythagorean
                theorem. (In the above,{" "}
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
                {" "}and the sum is seen to be
                {" "}
                <NoBreak>
                  <Math>
                    $\sqrt&#123;1^2 + 1^2&#125; = \sqrt&#123;2&#125;$
                  </Math>
                  .)
                </NoBreak>
              </VerticalChunk>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
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
                {" "}of the maximum is therefore 
                {" "}
                <NoBreak>
                  <Math>
                    $y = \sqrt&#123;2&#125;$
                  </Math>
                  ,
                </NoBreak>
                {" "}attained at{" "}
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
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $x = -7\eta/2$
                  </Math>
                  ,
                </NoBreak>
                {" "}etc:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_maximum_of_sin_plus_cos_with_answer.svg" />
              <Pause />
              <VerticalChunk>
                (Note that
              </VerticalChunk>
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
              <VerticalChunk>
                and, in general, the numerators of these fractions
                will be some multiple of{" "}
                <Math>
                  $8\eta$
                </Math>
                {" "}apart.)
              </VerticalChunk>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={19}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 19.
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
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_angle_sum_180_followup.svg" />
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={19}>
            <VerticalChunk>
              It is{" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ,
              </NoBreak>
              {" "}as well. One method of
              deduction uses the fact that “the complement
              of my complement is myself”:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_angle_sum_180_followup_explanation.svg" />
            <Pause />
            <VerticalChunk>
              Another method of deduction uses the fact that,
              together with the angle immediately to its left
              (which happens to be{" "}
              <NoBreak>
                <Math>
                  $\eta - \theta$
                </Math>
                ,
              </NoBreak>
              {" "}because 
              it is the complement of{" "}
              <Math>
                $\theta$
              </Math>
              {" "}via the smallest
              right triangle present), the sought-for angle 
              makes up{" "}
              <NoBreak>
                <Math>
                  $90^\circ$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_angle_sum_180_followup_explanation_2.svg" />
            <Pause />
            <VerticalChunk>
              (In one case we use the fact that the
              medium-sized triangle is a right triangle,
              in another case that the smallest-size 
              triangle is a right triangle—and in both cases
              that the original, largest triangle is a 
              right triangle.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={20}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 20.
              </b>
              {" "}
              Argue that, in the following figure, the
              angle marked ‘?’ equals{" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ,
              </NoBreak>
              {" "}the angle at 
              the center of the circle:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_tangent_angle_v2.svg" />
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={20}>
            <VerticalChunk>
              The ending and starting half-lines of the 
              angle marked ‘?’ are both{" "}
              <Math>
                $90^\circ$
              </Math>
              {" "}counterclockwise
              from the ending and starting half-lines,
              respectively, of the central angle:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_tangent_angle_explanation_v2.svg" />
            <Pause />
            <VerticalChunk>
              The angle marked ‘?’ is therefore obtained
              by a{" "}
              <Math>
                $90^\circ$
              </Math>
              {" "}rotation (and then translation)
              of the central angle, and is, therefore, equal
              to the central angle{" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                This holds no matter which quadrant we
                push{" "}
                <Math>
                  $\theta$
                </Math>
                {" "}to:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_tangent_angle_explanation_other_quadrants.svg" />
              <Pause />
              <VerticalChunk>
                Verbalized:{" "}
                <i>
                  the counterclockwise angle from the positive
                  {" "}
                  <Math>
                    $x$
                  </Math>
                  {" "}axis to 
                  the radial vector
                  equals the counterclockwise angle from the positive
                  {" "}
                  <Math>
                    $y$
                  </Math>
                  {" "}axis to the counterclockwise tangent.
                </i>
              </VerticalChunk>
              <VerticalChunk indent={true}>
                (Nb: When we say the “radial vector” and 
                “counterclockwise tangent” we mean those objects that
                are illustrated here:)
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_tangent_angle_explanation_radian_vector.svg" />
            </SolutionNote>
            <Pause />
            <StarDivider />
          </Solution>
        </Exercise>
        <Exercise exercise_number={21}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 21.
              </b>
              {" "}
              If each of these dotted lines...
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_max_xy_x_plus_y_isosets.svg" />
            <Pause />
            <VerticalChunk>
              ...is a so-called
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              isoset
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              (also:{" "}
              <i>
                isoline
              </i>
              ,{" "}
              <i>
                contour line
              </i>
              ,{" "}
              <i>
                isoquant
              </i>
              ,
              {" "}
              <i>
                isosurface
              </i>
              ,{" "}
              <i>
                isovalue line
              </i>
              , or{" "}
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
              {" "}of the two-variable function
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              f : \rr^2\ra \rr
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              given by
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              f(x, y) = x + y
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              then what are similar
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              isosets
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              (man, we like this word! of the two-variable
              function
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              g : \rr^2\ra \rr
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              given by
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              g(x, y) = xy
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...?
            </VerticalChunk>
            <VerticalChunk indent={true}>
              [In human terms: draw solutions of the equation
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              xy = C
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              in{" "}
              <Math>
                $\rr^2$
              </Math>
              {" "}for some different values of
              {" "}
              <NoBreak>
                <Math>
                  $C \in \rr$
                </Math>
                .]
              </NoBreak>
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Next: Use any geometric insights gleaned from
              these
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              isosets
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              (😍😍😍) to find the maximum value of
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \sin\theta&#123;&#125;\cos\theta
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for{" "}
              <NoBreak>
                <Math>
                  $\theta \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "}and specify the set of
              values of{" "}
              <Math>
                $\theta$
              </Math>
              {" "}for which the maximum is 
              attained.
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={21}>
            <VerticalChunk>
              The isosets of
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              (x, y) \ra xy
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              (lambda-notation for a two-variable function)
              have this general appearance (it depends on
              the window and on the exact isosets that 
              you choose to  draw—we chose a few 
              different random ones):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_max_xy_xy_isosets.svg" />
            <Pause />
            <VerticalChunk>
              Note that each isoset consists of the union of TWO 
              disjoint curves, except for the isoset
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              xy = 0
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              (or: “the isoset
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \&#123;(x, y) \in \rr^2 : xy = 0 \&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...” to pedantically indicate that we are
              talking about{" "}
              <i>
                a set of points in the plane
              </i>
              ),
              that, for its part, cannot be said to consist
              of two{" "}
              <i>
                ~
              </i>
              ~_disjoint
              <i>
                ~_~
              </i>
              {" "}curves, because it
              is the union of the{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -
              </NoBreak>
              {" "}axes, that
              intersect.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              (For a throwback, the solution of Exercise
              16 of Chapter 3 mentions that the product of
              two numbers is{" "}
              <Math>
                $0$
              </Math>
              {" "}if and only if one of the 
              numbers is{" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                .
              </NoBreak>
              {" "}In our case,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              xy = 0
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              if and only
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \,x = 0\,
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              <i>
                or
              </i>
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \,y = 0
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              where
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              x = 0
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              happens to be the equation of the{" "}
              <Math>
                $y$
              </Math>
              {" "}axis, and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              y = 0
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              happens to be the equation of the{" "}
              <Math>
                $x$
              </Math>
              {" "}axis, which
              explains the shape of the isoset.)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              If we draw a “heatmap” of
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              xy
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              in some region of the plane, similarly to 
              Exercise 18, the larger (more positive)
              values show up in the first and third
              quadrants, while the smaller (more negative)
              values show up in the second and fourth 
              quadrants:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_max_xy_rainbow.svg" />
            <Pause />
            <VerticalChunk>
              Of particular interest to us: at a given 
              distance from the origin, the line
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              x = y
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              can be seen seen to hold the largest of values of{" "}
              <NoBreak>
                <Math>
                  $xy$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_max_xy_fixed_distance.svg" />
            <Pause />
            <VerticalChunk>
              In particular,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \cos\theta\,\sin\theta
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              will reach its maximum at those values of 
              {" "}
              <Math>
                $\theta$
              </Math>
              {" "}that put the point{" "}
              <Math>
                $(\cos \theta, \sin \theta)$
              </Math>
              {" "}
              at either{" "}
              <Math>
                $(\sqrt&#123;0.5&#125;, \sqrt&#123;0.5&#125;)$
              </Math>
              {" "}or 
              {" "}
              <Math>
                $(-\sqrt&#123;0.5&#125;, -\sqrt&#123;0.5&#125;)$
              </Math>
              {" "}on the unit circle; 
              these values of{" "}
              <Math>
                $\theta$
              </Math>
              {" "}are
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large \&#123;0.5\eta + 4\eta&#123;&#125;k : k \in \zz\&#125; \\
              \Large \cup \&#123;2.5\eta + 4\eta&#123;&#125;k : k \in \zz\&#125;\up&#123;1.5&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              as per this illustration...
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_max_xy_angles.svg" />
            <Pause />
            <VerticalChunk>
              ...and the maximum value of
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large \cos\theta\,\sin\theta
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              itself will be
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large \sqrt&#123;0.5&#125; \cdot \sqrt&#123;0.5&#125; = &#123;1\over 2&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              or
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large (-\sqrt&#123;0.5&#125;) \cdot (-\sqrt&#123;0.5&#125;) = &#123;1\over 2&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              equivalently; though one should also note
              that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large \&#123;0.5\eta + 4\eta&#123;&#125;k : k \in \zz\&#125; \cup \&#123;2.5\eta + 4\eta&#123;&#125;k : k \in \zz\&#125; \\ \Large \up&#123;1.5&#125;= \&#123;0.5\eta + 2\eta&#123;&#125;k : k \in \zz\&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              which is the “clever” way of writing the set
              of{" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                's
              </NoBreak>
              {" "}for which the maximum is achieved.
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                As a consequence, the function
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                x \ra \sin x&#123;&#125;\cos x
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                discussed in Exercise 4 has maximum value
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                &#123;1\over 2&#125;
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                achieved for inputs in the set
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \Large \&#123;0.5\eta + 2\eta&#123;&#125;k : k \in \zz\&#125;
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                comprising the sequence of values...
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \large \dots,\,\, -&#123;7\eta\over 2&#125;,\,\, -&#123;3\eta\over 2&#125;,\,\, &#123;\dn&#123;0.25&#125;\eta \over 2&#125;,\,\, &#123;5\eta \over 2&#125;,\,\, &#123;9\eta \over 2&#125;,\,\, \dots
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                ...or...
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \large \dots,\,\, &#123;-3.5\eta&#125;,\,\, &#123;-1.5\eta&#125;,\,\, &#123;0.5\eta&#125;,\,\, &#123;2.5\eta&#125;,\,\, &#123;4.5\eta&#125;,\,\, \dots
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                ...(maybe more legibly); annotating the graph
                given in Exercise 4:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_max_xy_graph.svg" />
              <Pause />
              <StarDivider />
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 2.
                </i>
                {" "}
                For completeness, here is a closer look at 
                the isoset{" "}
                <NoBreak>
                  <Math>
                    $xy = 1$
                  </Math>
                  ,
                </NoBreak>
                {" "}including some labeled points:
              </VerticalChunk>
              <Pause />
              <Image
                src="/images/svg_ch5_ex_max_xy_example_isoset.svg"
                style="margin-top:1em;margin-bottom:1em;" />
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 3.
                </i>
                {" "}
                Because a point{" "}
                <Math>
                  $(x, y)$
                </Math>
                {" "}satisfies
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                xy = 1
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                if and only if the point{" "}
                <Math>
                  $(2x, y)$
                </Math>
                {" "}satisfies
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                xy = 2
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                (one has
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                x_0y_0 = 1
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                if and only if
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                (2x_0)y_0 = 2
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                surprise or not) the curve
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                xy = 2
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                is the horizontal dilation of the curve
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                xy = 1
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                by a factor{" "}
                <NoBreak>
                  <Math>
                    $2$
                  </Math>
                  ;
                </NoBreak>
                {" "}likewise, it is also the
              </VerticalChunk>
              <Pause />
              <CentralDisplayItalic>
                vertical dilation
              </CentralDisplayItalic>
              <Pause />
              <VerticalChunk>
                of the curve
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                xy = 1
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                by a factor{" "}
                <NoBreak>
                  <Math>
                    $2$
                  </Math>
                  ;
                </NoBreak>
                {" "}the two dilations are
                illustrated here:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_max_xy_2x_scaling_v2.svg" />
              <Pause />
              <VerticalChunk>
                More generally, the curve
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                xy = C
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                for{" "}
                <Math>
                  $C \ne 0$
                </Math>
                {" "}is the
              </VerticalChunk>
              <Pause />
              <CentralDisplayItalic>
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $(a, b)$
                  </Math>
                  -dilation
                </NoBreak>
                {" "}{" "}
              </CentralDisplayItalic>
              <Pause />
              <VerticalChunk>
                [meaning: a horizontal dilation by a factor
                {" "}
                <Math>
                  $a$
                </Math>
                {" "}followed by a vertical dilation by a
                factor{" "}
                <NoBreak>
                  <Math>
                    $b$
                  </Math>
                  ,
                </NoBreak>
                {" "}or vice-versa, the order doesn't
                matter] of the curve
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                xy = 1
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                for all pairs{" "}
                <Math>
                  $(a, b)$
                </Math>
                {" "}such that{" "}
                <NoBreak>
                  <Math>
                    $ab = C$
                  </Math>
                  ;
                </NoBreak>
                {" "}for
                example,
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                xy = 3
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                is the
              </VerticalChunk>
              <Pause />
              <CentralDisplayItalic>
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $(3, 1)$
                  </Math>
                  -dilation
                </NoBreak>
                {" "}{" "}
              </CentralDisplayItalic>
              <Pause />
              <VerticalChunk>
                [horizontal dilation by factor{" "}
                <NoBreak>
                  <Math>
                    $3$
                  </Math>
                  ]
                </NoBreak>
                {" "}of 
                {" "}
                <NoBreak>
                  <Math>
                    $xy = 1$
                  </Math>
                  ,
                </NoBreak>
                {" "}as it is the
              </VerticalChunk>
              <Pause />
              <CentralDisplayItalic>
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $(1, 3)$
                  </Math>
                  -dilation
                </NoBreak>
                {" "}{" "}
              </CentralDisplayItalic>
              <Pause />
              <VerticalChunk>
                [vertical dilation by factor{" "}
                <NoBreak>
                  <Math>
                    $3$
                  </Math>
                  ]
                </NoBreak>
                {" "}of{" "}
                <NoBreak>
                  <Math>
                    $xy = 1$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                but is also the
              </VerticalChunk>
              <Pause />
              <CentralDisplayItalic>
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $(\sqrt&#123;3&#125;, \sqrt&#123;3&#125;)$
                  </Math>
                  -dilation
                </NoBreak>
                {" "}{" "}
              </CentralDisplayItalic>
              <Pause />
              <VerticalChunk>
                of{" "}
                <NoBreak>
                  <Math>
                    $xy = 1$
                  </Math>
                  ,
                </NoBreak>
                {" "}since{" "}
                <NoBreak>
                  <Math>
                    $\sqrt&#123;3&#125;\cdot\sqrt&#123;3&#125; = 3$
                  </Math>
                  ,
                </NoBreak>
                {" "}and the
              </VerticalChunk>
              <Pause />
              <CentralDisplayItalic>
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $(12, &#123;1\over 4&#125;)$
                  </Math>
                  -dilation
                </NoBreak>
                {" "}{" "}
              </CentralDisplayItalic>
              <Pause />
              <VerticalChunk>
                of{" "}
                <NoBreak>
                  <Math>
                    $xy = 1$
                  </Math>
                  ,
                </NoBreak>
                {" "}since{" "}
                <NoBreak>
                  <Math>
                    $12 \cdot &#123;1\over 4&#125; = 3$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                etc.
              </VerticalChunk>
              <VerticalChunk indent={true}>
                For another specifically noteworthy instance
                of this phenomenon,
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                xy = 1
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                is the
              </VerticalChunk>
              <Pause />
              <CentralDisplayItalic>
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $(-1, -1)$
                  </Math>
                  -dilation
                </NoBreak>
                {" "}{" "}
              </CentralDisplayItalic>
              <Pause />
              <VerticalChunk>
                of itself, since{" "}
                <NoBreak>
                  <Math>
                    $(-1)\cdot(-1) = 1$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                a fact that is also known as the “central 
                symmetry” of{" "}
                <NoBreak>
                  <Math>
                    $xy = 1$
                  </Math>
                  .
                </NoBreak>
                {" "}(You can take this
                last statement as the definition of “centrally
                symmetric”. I.e., a set{" "}
                <Math>
                  $S \subseteq \rr^2$
                </Math>
                {" "}
                is centrally symmetric if and only if{" "}
                <Math>
                  $S$
                </Math>
                {" "}
                is equal to the{" "}
                <NoBreak>
                  <Math>
                    $(-1, -1)$
                  </Math>
                  -dilation
                </NoBreak>
                {" "}of 
                itself.)
              </VerticalChunk>
              <VerticalChunk indent={true}>
                (Indeed, since
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                xy = C
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                if and only if
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                (-x)(-y) = C
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                each of the isosets is centrally symmetric, not only
                {" "}
                <NoBreak>
                  <Math>
                    $xy = 1$
                  </Math>
                  .)
                </NoBreak>
              </VerticalChunk>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 4.
                </i>
                {" "}
                Among other additional symmetries, the line
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                x = y
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                is an axis of symmetry of each isoset, meaning
                that each isoset equals its mirror reflection
                about that line:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_max_xy_mirror_image.svg" />
              <Pause />
              <VerticalChunk>
                Note that, technically, a set{" "}
                <Math>
                  $S \subseteq \rr^2$
                </Math>
                {" "}
                [meaning:{" "}
                <Math>
                  $S$
                </Math>
                {" "}is a set of points in the plane] is
                symmetric about{" "}
                <Math>
                  $x = y$
                </Math>
                {" "}if and only if
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \Large (x_0, y_0) \in S \iff (y_0, x_0) \in S
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                [read{" "}
                <NoBreak>
                  “
                  <Math>
                    $(x_0, y_0)$
                  </Math>
                </NoBreak>
                {" "}is in{" "}
                <Math>
                  $S$
                </Math>
                {" "}if and only if 
                {" "}
                <Math>
                  $(y_0, x_0)$
                </Math>
                {" "}is in{" "}
                <NoBreak>
                  <Math>
                    $S$
                  </Math>
                  ”]
                </NoBreak>
                {" "}for all{" "}
                <NoBreak>
                  <Math>
                    $(x_0, y_0)$
                  </Math>
                  .
                </NoBreak>
                {" "}
                Illustrated:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_max_xy_mirror_image_with_x0_y0.svg" />
              <Pause />
              <VerticalChunk>
                In our case, a point{" "}
                <Math>
                  $(x_0, y_0)$
                </Math>
                {" "}is on the curve
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                xy = C
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                if and only if the point{" "}
                <Math>
                  $(y_0, x_0)$
                </Math>
                {" "}is on
                the curve, because{" "}
                <NoBreak>
                  <Math>
                    $x_0y_0 = y_0x_0$
                  </Math>
                  ,
                </NoBreak>
                {" "}by 
                commutativity of multiplication. This observation
                constitutes the “proof” that each isoset is
                mirror symmetric through{" "}
                <NoBreak>
                  <Math>
                    $x = y$
                  </Math>
                  .
                </NoBreak>
              </VerticalChunk>
              <VerticalChunk indent={true}>
                (Or...
              </VerticalChunk>
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
              <VerticalChunk>
                ...to put it over-the-top formally.)
              </VerticalChunk>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 5.
                </i>
                {" "}
                Lastly, each isoset is symmetric
                through the line{" "}
                <NoBreak>
                  <Math>
                    $x = -y$
                  </Math>
                  :
                </NoBreak>
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_max_xy_mirror_image_other_way.svg" />
              <Pause />
              <VerticalChunk>
                Indeed, this symmetry can be obtained as the
              </VerticalChunk>
              <Pause />
              <CentralDisplayItalic>
                composition
              </CentralDisplayItalic>
              <Pause />
              <VerticalChunk>
                of a symmetry through{" "}
                <Math>
                  $x = y$
                </Math>
                {" "}and a central
                symmetry:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_max_xy_mirror_image_other_way_explanation.svg" />
              <Pause />
              <VerticalChunk>
                In other words, any set that is symmetric through
                {" "}
                <Math>
                  $x = y$
                </Math>
                {" "}and that is centrally symmetric is also
                symmetric through{" "}
                <NoBreak>
                  <Math>
                    $x = -y$
                  </Math>
                  ,
                </NoBreak>
                {" "}so there is nothing “new”
                to prove here, except to make this observation 
                about composition!
              </VerticalChunk>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={22}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 22.
              </b>
              {" "}
              Express{" "}
              <Math>
                $A/B$
              </Math>
              {" "}as a function of{" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_tan_sq_AB_ratio.svg" />
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={22}>
            <VerticalChunk>
              We shall use the height{" "}
              <Math>
                $C$
              </Math>
              {" "}of the triangle
              as a stopover between{" "}
              <Math>
                $A$
              </Math>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_tan_sq_AB_ratio_height_C.svg" />
            <Pause />
            <VerticalChunk>
              On the one hand,{" "}
              <NoBreak>
                <Math>
                  $C/B = \tan(\theta)$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_tan_sq_AB_ratio_left_part.svg" />
            <Pause />
            <VerticalChunk>
              On the other hand,{" "}
              <Math>
                $A/C = \tan(\theta)$
              </Math>
              {" "}
              also, by the result of Exercise 19 (whereby
              {" "}
              <Math>
                $\theta$
              </Math>
              {" "}reappears as the top left angle of
              the middle-sized right triangle):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_tan_sq_AB_ratio_right_part.svg" />
            <Pause />
            <VerticalChunk>
              The answer is therefore:
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \tan(\theta)\cdot\tan(\theta) = \tan^2(\theta).
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              (As per the fact that{" "}
              <NoBreak>
                <Math>
                  $(A/B) = (C/B)\cdot(A/C)$
                </Math>
                .)
              </NoBreak>
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={23}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 23.
              </b>
              {" "}
              Express{" "}
              <Math>
                $A/B$
              </Math>
              {" "}as a function of{" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_tan_sq_AB_ratio_big_A.svg" />
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={23}>
            <VerticalChunk>
              Here are two solutions:
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Solution 1.
              </i>
              {" "}We use the small leg{" "}
              <Math>
                $D$
              </Math>
              {" "}
              of the triangle as a stopover between{" "}
              <Math>
                $A$
              </Math>
              {" "}and
              {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_tan_sq_AB_ratio_big_A_with_D.svg" />
            <Pause />
            <VerticalChunk>
              On the one hand,{" "}
              <NoBreak>
                <Math>
                  $D/B = \sec(\theta)\,\, (= 1/\cos(\theta))$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_tan_sq_AB_ratio_big_A_left_part.svg" />
            <Pause />
            <VerticalChunk>
              On the other hand,{" "}
              <NoBreak>
                <Math>
                  $A/D = \sec(\theta)$
                </Math>
                ,
              </NoBreak>
              {" "}also (!?):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_tan_sq_AB_ratio_big_A_right_part_shrunk.svg" />
            <Pause />
            <VerticalChunk>
              Thus:
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              &#123;A\over B&#125; = &#123;D\over B&#125;\times &#123;A\over D&#125; = \sec(\theta)\cdot \sec(\theta) = \sec^2(\theta).
              $$
            </MathBlock>
            <Pause />
            <StarDivider style="margin-top:0.5em;" />
            <Pause />
            <VerticalChunk>
              <i>
                Solution 2.
              </i>
              {" "}
              We decompose{" "}
              <Math>
                $A$
              </Math>
              {" "}as{" "}
              <Math>
                $B + A'$
              </Math>
              {" "}
              where{" "}
              <Math>
                $A' = B - A$
              </Math>
              {" "}is the “old{" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ”
              </NoBreak>
              {" "}from
              Exercise 22:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_tan_sq_AB_ratio_big_A_with_Aprime.svg" />
            <Pause />
            <VerticalChunk>
              We find:
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              &#123;A\over B&#125; = &#123;&#123;B + A'&#125;\over B&#125; = &#123;B\over B&#125; + &#123;A'\over B&#125; = 1 + \tan^2(\theta)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...since
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              &#123;A'\over B&#125; = \tan^2(\theta)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by Exercise 22. (The End.)
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                Since the two solutions compute
                answers to the same question,
                one can in particular deduce that
              </VerticalChunk>
              <center style="margin-top:1.5em;margin-bottom:1.5em;">
                <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                  <MathBlock>
                    $$
                    \sec^2(\theta) = 1 + \tan^2(\theta)
                    $$
                  </MathBlock>
                </div>
              </center>
              <VerticalChunk>
                for all{" "}
                <NoBreak>
                  <Math>
                    $0 &lt; \theta &lt; \eta$
                  </Math>
                  ,
                </NoBreak>
                {" "}which is
                the range of{" "}
                <Math>
                  $\theta$
                </Math>
                {" "}covered by these 
                diagrams. (The same identity holds more 
                generally than just those{" "}
                <NoBreak>
                  <Math>
                    $\theta$
                  </Math>
                  's,
                </NoBreak>
                {" "}
                however.)
              </VerticalChunk>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={24}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 24.
              </b>
              {" "}
              In general,{" "}
              <Math>
                $\sec(\theta)$
              </Math>
              {" "}and{" "}
              <Math>
                $\tan(\theta)$
              </Math>
              {" "}
              are defined for all{" "}
              <Math>
                $\theta$
              </Math>
              {" "}such that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \cos(\theta) \ne 0
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              with the definitions being...
            </VerticalChunk>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
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
              </div>
            </center>
            <VerticalChunk>
              ...for all{" "}
              <NoBreak>
                <Math>
                  $\theta \in \rr$
                </Math>
                .
              </NoBreak>
              {" "}(I.e., if the fraction is undefined,
              then the function is undefined.)
              Use these definitions 
              to prove that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              1 + \tan^2(\theta) = \sec^2(\theta)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for all 
              {" "}
              <NoBreak>
                <Math>
                  $\theta \in \dom \tan = \dom \sec$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={24}>
            <VerticalChunk>
              Let{" "}
              <NoBreak>
                <Math>
                  $\theta \in \dom \tan = \dom \sec$
                </Math>
                .
              </NoBreak>
              {" "}Then
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \cos(\theta) \ne 0
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              1 = &#123;\cos(\theta)\over \cos(\theta)&#125; = &#123;\cos^2(\theta)\over \cos^2(\theta)&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and, by the definitions,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              1 + \tan^2(\theta)
              \,\,&=\,\, 1 + \left(&#123;\sin(\theta)\over \cos(\theta)&#125;\right)^&#123;\!2&#125; \\
              &amp;=\,\, \up&#123;2&#125; &#123;\cos^2(\theta)\over \cos^2(\theta)&#125; + &#123;\sin^2(\theta)\over \cos^2(\theta)&#125; \\
              &amp;=\,\, \up&#123;2&#125; &#123;\cos^2(\theta) + \sin^2(\theta)\over \cos^2(\theta)&#125; \\
              &amp;=\,\, \up&#123;2&#125; &#123;1\over \cos^2(\theta)&#125; \\
              &amp;=\,\, \up&#123;2&#125; \left(&#123;1\over \cos(\theta)&#125;\right)^&#123;\!2&#125; \\
              &amp;=\,\, \up&#123;2&#125; \sec^2(\theta)
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              using the pythagorean identity in the fourth step.
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={25}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 25.
              </b>
              {" "}
              Run the computation of the
              previous exercise backwards, starting with
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \sec^2(\theta)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              at the near end, and ending with
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$1 + \tan^2(\theta)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              at the far end. (No peeking back at the solution of
              that exercise.)
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={25}>
            <VerticalChunk>
              Viz:
            </VerticalChunk>
            <center style="margin:1em 0em;">
              <div style="display:inline-block;border:1px solid red;padding:1.2em 1.4em;">
                <MathBlock>
                  $$
                  \begin&#123;align&#125;
                  \sec^2(\theta)
                  \,\,&=\,\, &#123;1\over \cos^2(\theta)&#125; \\
                  &amp;=\,\, \up&#123;2&#125; &#123;\cos^2(\theta) + \sin^2(\theta)\over \cos^2(\theta)&#125; \\
                  &amp;=\,\, \up&#123;2&#125; &#123;\cos^2(\theta)\over \cos^2(\theta)&#125; + &#123;\sin^2(\theta)\over \cos^2(\theta)&#125; \\
                  &amp;=\,\, \up&#123;2&#125; 1 + \left(&#123;\sin(\theta)\over \cos(\theta)&#125;\right)^&#123;\!2&#125; \\
                  &amp;=\,\, \up&#123;2&#125;1 + \tan^2(\theta).
                  \end&#123;align&#125;
                  $$
                </MathBlock>
              </div>
            </center>
            <VerticalChunk>
              (Ta-daa!) (It's slightly harder in this 
              direction, when you have to think of
              turning the{" "}
              <NoBreak>
                “
                <Math>
                  $1$
                </Math>
                ”
              </NoBreak>
              {" "}into{" "}
              <NoBreak>
                “
                <Math>
                  $\cos^2(\theta) + \sin^2(\theta)$
                </Math>
                ”,
              </NoBreak>
              {" "}
              instead of the other way around.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={26}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 26.
              </b>
              {" "}
              Here are four function compositions
              depicted as “function box” diagrams, with
              inputs coming in the right and outputs
              going out the left (with{" "}
              <Math>
                $f$
              </Math>
              {" "}being some generic
              function):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_four_compositions.svg" />
            <Pause />
            <VerticalChunk>
              Rewrite each case:
            </VerticalChunk>
            <TextParent>
              <ol
                style="margin-top:0.5em;"
                class="l1">
                <li>
                  using the composition{" "}
                  <NoBreak>
                    “
                    <Math>
                      $\circ$
                    </Math>
                    ”
                  </NoBreak>
                  {" "}operator;
                </li>
                <li>
                  as an expression of the form
                  <Pause />
                  <MathBlock>
                    $$x \ra \dots$$
                  </MathBlock>
                  <Pause />
                  for some value of{" "}
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
          <Pause />
          <Solution solution_number={26}>
            <VerticalChunk>
              <b>
                (a)
              </b>
              {" "}
              The expressions are respectively...
            </VerticalChunk>
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
            <VerticalChunk>
              ...but where the dummy variables don't matter,
              so we might as well write...
            </VerticalChunk>
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
            <VerticalChunk>
              ...or...
            </VerticalChunk>
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
            <VerticalChunk>
              ...etc. (All are correct.)
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <b>
                (b)
              </b>
              {" "}
              The expressions are respectively:
            </VerticalChunk>
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
            <VerticalChunk>
              ...where we use{" "}
              <NoBreak>
                “
                <Math>
                  $x$
                </Math>
                ”
              </NoBreak>
              {" "}as the dummy variable 
              because we were{" "}
              <i>
                told
              </i>
              {" "}to use{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                .
              </NoBreak>
              {" "}(By the statement.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={27}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 27.
              </b>
              {" "}
              How would the graph of each of the compositions
              from Exercise 26 compare to the graph of the 
              generic function{" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                ?
              </NoBreak>
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={27}>
            <VerticalChunk>
              For reference, the four functions are:
            </VerticalChunk>
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
            <VerticalChunk>
              For which the graphs are respectively obtained by:
            </VerticalChunk>
            <TextParent>
              <ul style="list-style-type:decimal;margin-top:1em;margin-bottom:1em;padding-left:66px;line-height:1.5em;">
                <li>
                  horizontally translating the graph of{" "}
                  <Math>
                    $f$
                  </Math>
                  {" "}by{" "}
                  <Math>
                    $A$
                  </Math>
                  {" "}units to the left;
                </li>
                <li>
                  horizontally compressing the graph of{" "}
                  <Math>
                    $f$
                  </Math>
                  {" "}by a factor{" "}
                  <NoBreak>
                    <Math>
                      $B$
                    </Math>
                    ;
                  </NoBreak>
                </li>
                <li>
                  vertically translating the graph of{" "}
                  <Math>
                    $f$
                  </Math>
                  {" "}by{" "}
                  <Math>
                    $A$
                  </Math>
                  {" "}units upward;
                </li>
                <li>
                  vertically dilating (scaling) the graph of{" "}
                  <Math>
                    $f$
                  </Math>
                  {" "}by a factor{" "}
                  <NoBreak>
                    <Math>
                      $B$
                    </Math>
                    .
                  </NoBreak>
                </li>
              </ul>
            </TextParent>
            <VerticalChunk>
              (Cf. Exercise 7 of Chapter 3, Exercise 14 of 
              Chapter 3.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={28}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 28.
              </b>
              {" "}
              Prove that{" "}
              <NoBreak>
                <Math>
                  $\cos\cdot\sin$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $\cos^2$
                </Math>
                ,
              </NoBreak>
              {" "}and{" "}
              <Math>
                $\sin^2$
              </Math>
              {" "}
              are periodic mod{" "}
              <NoBreak>
                <Math>
                  $2\eta$
                </Math>
                ,
              </NoBreak>
              {" "}where a function{" "}
              <Math>
                $f$
              </Math>
              {" "}is 
              “periodic mod{" "}
              <NoBreak>
                <Math>
                  $T$
                </Math>
                ”
              </NoBreak>
              {" "}if
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              &#123;f(x + T) = f(x)&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for all{" "}
              <NoBreak>
                <Math>
                  $x \in \rr$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={28}>
            <VerticalChunk>
              We have
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &amp;\,\,\, (\cos\cdot\sin)(x + 2\eta)\\
              =&\,\,\, \up&#123;1.2&#125;\cos(x + 2\eta)\cdot\sin(x + 2\eta)\\
              =&\,\,\, \up&#123;1.2&#125;(-\cos(x))\cdot(-\sin(x))\\
              =&\,\,\, \up&#123;1.2&#125;\cos(x)\cdot\sin(x)\\
              =&\,\,\, \up&#123;1.2&#125;(\cos\cdot\sin)(x)
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for all{" "}
              <NoBreak>
                <Math>
                  $x \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "}using the fact that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \cos(x + 2\eta) = -\cos(x)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \sin(x + 2\eta) = -\sin(x)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for all{" "}
              <NoBreak>
                <Math>
                  $x \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "}and, likewise,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &amp;\,\,\, \cos^2(x + 2\eta)\\
              =&\,\,\, \up&#123;1.2&#125;\cos(x + 2\eta)\cdot\cos(x + 2\eta)\\
              =&\,\,\, \up&#123;1.2&#125;(-\cos(x))\cdot(-\cos(x))\\
              =&\,\,\, \up&#123;1.2&#125;\cos(x)\cdot\cos(x)\\
              =&\,\,\, \up&#123;1.2&#125;\cos^2(x)
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for all{" "}
              <NoBreak>
                <Math>
                  $x \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "}and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &amp;\,\,\, \sin^2(x + 2\eta)\\
              =&\,\,\, \up&#123;1.2&#125;\sin(x + 2\eta)\cdot\sin(x + 2\eta)\\
              =&\,\,\, \up&#123;1.2&#125;(-\sin(x))\cdot(-\sin(x))\\
              =&\,\,\, \up&#123;1.2&#125;\sin(x)\cdot\sin(x)\\
              =&\,\,\, \up&#123;1.2&#125;\sin^2(x)
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for all{" "}
              <NoBreak>
                <Math>
                  $x \in \rr$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                Note that
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \te&#123;“&#125;\cos\cdot\sin\te&#123;”&#125;
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                is a shorthand for
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \te&#123;“&#125;\rt&#123;0.1&#125;x \ra \cos(x)\sin(x)\rt&#123;0.1&#125;\te&#123;”&#125;
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                (“the function that maps ...”), just as
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                fg
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                is a shorthand for [or really: “defined as”]
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                x\ra f(x)g(x)
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                more generally for all functions{" "}
                <NoBreak>
                  <Math>
                    $f$
                  </Math>
                  ,
                </NoBreak>
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $g$
                  </Math>
                  .
                </NoBreak>
                {" "}So when we plug
                in an input to{" "}
                <NoBreak>
                  “
                  <Math>
                    $\cos\cdot\sin$
                  </Math>
                  ”,
                </NoBreak>
                {" "}as in...
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                (\cos\cdot\sin)(x+2\eta)
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                ...it unfolds to...
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \cos(x + 2\eta)\cdot\sin(x+2\eta)
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                ...per the definition of function multiplication. (Etc.)
                (We mean: likewise for{" "}
                <NoBreak>
                  “
                  <Math>
                    $\sin^2$
                  </Math>
                  ”
                </NoBreak>
                {" "}and{" "}
                <NoBreak>
                  “
                  <Math>
                    $\cos^2$
                  </Math>
                  ”.)
                </NoBreak>
              </VerticalChunk>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={29}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 29.
              </b>
              {" "}
              Given the graphs{" "}
              <Math>
                $y = \cos(x)\sin(x)$
              </Math>
              {" "}and 
              {" "}
              <NoBreak>
                <Math>
                  $y = \cos^2(x)$
                </Math>
                ...
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_sinxcosx_and_cos2_comparison.svg" />
            <Pause />
            <VerticalChunk>
              ...it{" "}
              <i>
                appears
              </i>
              {" "}that one graph is a
              translate of the other; if this were 
              really so, what would the exact amounts
              of translation be? (Vertical{" "}
              <i>
                &
              </i>
              {" "}horizontal.)
              What algebraic identity would this imply? How to
              prove this identity?
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={29}>
            <VerticalChunk>
              We know from Exercise 21 that the 
              bump immediately to the right of{" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "}
              on the graph{" "}
              <Math>
                $y = \cos(x)\sin(x)$
              </Math>
              {" "}has 
              coordinates{" "}
              <NoBreak>
                <Math>
                  $(\eta/2, 0.5)$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_sinxcosx_and_cos2_comparison_sinxcosx_max.svg" />
            <Pause />
            <VerticalChunk>
              It might therefore be that a translation
              of{" "}
              <Math>
                $-\eta/2$
              </Math>
              {" "}units horizontally and 
              {" "}
              <Math>
                $&#123;1\over 2&#125;$
              </Math>
              {" "}units vertically maps the graph 
              {" "}
              <Math>
                $y = \sin(x)\cos(x)$
              </Math>
              {" "}onto the graph 
              {" "}
              <NoBreak>
                <Math>
                  $y = \cos^2(x)$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_sinxcosx_and_cos2_comparison_zoomed_in.svg" />
            <Pause />
            <VerticalChunk>
              If true, this would indicate that
            </VerticalChunk>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="border:1px solid red;padding:1em 1em;width:fit-content;">
                <MathBlock>
                  $$
                  \cos^2(x) = &#123;1\over 2&#125; + \cos(x + \eta/2)\sin(x + \eta/2)
                  $$
                </MathBlock>
              </div>
            </center>
            <VerticalChunk>
              since replacing{" "}
              <NoBreak>
                “
                <Math>
                  $x$
                </Math>
                ”
              </NoBreak>
              {" "}by{" "}
              <NoBreak>
                “
                <Math>
                  $x + \eta/2$
                </Math>
                ”
              </NoBreak>
              {" "}
              in{" "}
              <Math>
                $\sin(x)\cos(x)$
              </Math>
              {" "}effects horizontal 
              translation of the graph by{" "}
              <NoBreak>
                <Math>
                  $-\eta/2$
                </Math>
                ,
              </NoBreak>
              {" "}
              while adding{" "}
              <Math>
                $&#123;1\over 2&#125;$
              </Math>
              {" "}to the result 
              effects a vertical translation by{" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 2&#125;$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
            <VerticalChunk indent={true}>
              To prove formula we use the angle-sum formulas;
              specifically...
            </VerticalChunk>
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
            <VerticalChunk>
              ...(in case you had forgotten those); since
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \,\cos(\eta/2) = \sin(\eta/2) = \sqrt&#123;0.5&#125;,
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              we find:
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              \cos(x + \eta/2) &= \cos(x)\cos(\eta/2) - \sin(x)\sin(\eta/2) \\
              &= \up&#123;1.6&#125;\sqrt&#123;0.5&#125;\cdot(\cos(x) - \sin(x))
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and:
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              \sin(x + \eta/2) &= \cos(x)\sin(\eta/2) + \sin(x)\cos(\eta/2) \\
              &= \up&#123;1.6&#125;\sqrt&#123;0.5&#125;\cdot(\cos(x) + \sin(x))
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...from which the product...
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \cos(x + \eta/2)\sin(x + \eta/2)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...becomes...
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &\sqrt&#123;0.5&#125;\cdot\sqrt&#123;0.5&#125;\cdot(\cos^2(x) - \sin^2(x)) \\
              \up&#123;1.6&#125; =\,\,&&#123;1\over 2&#125;\cdot(\cos^2(x) - \sin^2(x)) \\
              \up&#123;1.6&#125; =\,\,&&#123;1\over 2&#125;\cdot(\cos^2(x) - (1 - \cos^2(x))) \\
              \up&#123;1.6&#125; =\,\,&&#123;1\over 2&#125;\cdot(2\cos^2(x) - 1) \\
              \up&#123;1.6&#125; =\,\,&\cos^2(x) - &#123;1\over 2&#125; \\
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...by the difference-of-squares formula and
              the pythagorean identity (often used together),
              and adding{" "}
              <Math>
                $&#123;1\over 2&#125;$
              </Math>
              {" "}gives{" "}
              <NoBreak>
                <Math>
                  $\cos^2(x)$
                </Math>
                ,
              </NoBreak>
              {" "}Q.E.D.!
              (So{" "}
              <Math>
                $y = \cos^2(x)$
              </Math>
              {" "}truly is the translate of 
              {" "}
              <NoBreak>
                <Math>
                  $y = \cos(x)\sin(x)$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <i>
                &
              </i>
              {" "}vice-versa.)
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                We can turn the identity around, mapping
                {" "}
                <Math>
                  $y = \cos^2(x)$
                </Math>
                {" "}onto{" "}
                <Math>
                  $y = \sin(x)\cos(x)$
                </Math>
                {" "}via a
                translation, instead of the other way around; this gives:
              </VerticalChunk>
              <center style="margin-top:1em;margin-bottom:1em;">
                <div style="border:1px solid red;padding:1em 1em;width:fit-content;">
                  <MathBlock>
                    $$
                    \,- &#123;1\over 2&#125; + \cos^2(x - \eta/2) = \cos(x)\sin(x).
                    $$
                  </MathBlock>
                </div>
              </center>
              <VerticalChunk>
                In more detail: replacing
                {" "}
                <NoBreak>
                  “
                  <Math>
                    $x$
                  </Math>
                  ”
                </NoBreak>
                {" "}by{" "}
                <NoBreak>
                  “
                  <Math>
                    $x - \eta/2$
                  </Math>
                  ”
                </NoBreak>
                {" "}in{" "}
                <Math>
                  $\cos^2(x)$
                </Math>
                {" "}effects
                horizontal translation by{" "}
                <NoBreak>
                  <Math>
                    $+\eta/2$
                  </Math>
                  ,
                </NoBreak>
                {" "}and adding
                {" "}
                <Math>
                  $-&#123;1\over 2&#125;$
                </Math>
                {" "}
                to the result effects a vertical translation by{" "}
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
                {" "}onto{" "}
                <NoBreak>
                  <Math>
                    $y = \cos^2(x)$
                  </Math>
                  .)
                </NoBreak>
              </VerticalChunk>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 2.
                </i>
                {" "}
                The identity from the previous note can also
                be proved via the angle-sum formulas; since{" "}
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \cos(A + B) = \cos(A)\cos(B) - \sin(A)\sin(B)
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                and
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \sin(-\eta/2) = -\sqrt&#123;0.5&#125;
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                we have
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \begin&#123;align*&#125;
                \cos(x - \eta/2) &= \cos(x)\cos(-\eta/2) - \sin(x)\sin(-\eta/2) \\
                \up&#123;1.6&#125; &=\,\, \cos(x)\sqrt&#123;0.5&#125; - \sin(x)(-\sqrt&#123;0.5&#125;) \\
                \up&#123;1.6&#125; &=\,\, \sqrt&#123;0.5&#125;\cdot(\cos(x) + \sin(x)) \\
                \end&#123;align*&#125;
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                from which
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \cos^2(x - \eta/2)
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                becomes
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \begin&#123;align*&#125;
                &\left(\sqrt&#123;0.5&#125;\cdot(\cos x + \sin x)\right)^2 \\
                \up&#123;1.6&#125; =\,\,&&#123;1\over 2&#125;\cdot(\cos^2 x + 2\cos x\sin x +  \sin^2 x) \\
                \up&#123;1.6&#125; =\,\,&&#123;1\over 2&#125;\cdot(1 + 2\cos x\sin x) \\
                \up&#123;1.6&#125; =\,\,&&#123;1\over 2&#125; + \cos(x)\sin(x) \\
                \end&#123;align*&#125;
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                using the pythagorean identity in the third equality, 
                and
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \begin&#123;align*&#125;
                & -&#123;1\over 2&#125; + \cos^2(x - \eta/2) \\
                \up&#123;1.7&#125; =\,\,&-&#123;1\over 2&#125; + \left(&#123;1\over 2&#125; + \cos(x)\sin(x)\right) \\
                \up&#123;1.7&#125; =\,\,&\cos(x)\sin(x)
                \end&#123;align*&#125;
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                as claimed.
              </VerticalChunk>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={30}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 30.
              </b>
              {" "}
              It also seems from the graphs that{" "}
              <Math>
                $y = \cos^2(x)$
              </Math>
              {" "}
              is a{" "}
              <i>
                sinusoid
              </i>
              , i.e., some combination of a
              scaling and translation of{" "}
              <NoBreak>
                <Math>
                  $y = \cos(x)$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_cos_and_cos2_comparison.svg" />
            <Pause />
            <VerticalChunk>
              If so, what scaling and translation operations,
              more exactly, can be conjectured to relate the 
              two graphs? Can you prove this geometric relationship 
              by algebra?
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={30}>
            <VerticalChunk>
              Since{" "}
              <Math>
                $\cos^2$
              </Math>
              {" "}is periodic mod{" "}
              <Math>
                $2\eta$
              </Math>
              {" "}while
              {" "}
              <Math>
                $\cos$
              </Math>
              {" "}is periodic mod{" "}
              <NoBreak>
                <Math>
                  $4\eta$
                </Math>
                ,
              </NoBreak>
              {" "}
              we need, at the very least, a horizontal compression by
              a factor{" "}
              <Math>
                $2$
              </Math>
              {" "}in order to map the bumps of{" "}
              <Math>
                $y = \cos(x)$
              </Math>
              {" "}
              onto those of{" "}
              <NoBreak>
                <Math>
                  $y = \cos^2(x)$
                </Math>
                .
              </NoBreak>
              {" "}From there we have to
              readjust the range and amplitude of the curve, such as,
              e.g., by translating up by{" "}
              <Math>
                $1$
              </Math>
              {" "}and scaling vertically
              by{" "}
              <Math>
                $&#123;1\over 2&#125;$
              </Math>
              {" "}(or scaling vertically by{" "}
              <Math>
                $&#123;1\over 2&#125;$
              </Math>
              {" "}
              and translating up by{" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 2&#125;$
                </Math>
                ,
              </NoBreak>
              {" "}either way):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_cos_and_cos2_comparison_transformations_1.svg" />
            <Pause />
            <VerticalChunk>
              Algebraically, the three steps above turn
              {" "}
              <Math>
                $\cos(x)$
              </Math>
              {" "}into{" "}
              <NoBreak>
                <Math>
                  $\cos(2x)$
                </Math>
                ,
              </NoBreak>
              {" "}into{" "}
              <NoBreak>
                <Math>
                  $1 + \cos(2x)$
                </Math>
                ,
              </NoBreak>
              {" "}
              into{" "}
              <NoBreak>
                <Math>
                  $&#123;1 + \cos(2x)\over 2&#125;$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
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
                offset_x="4em"
                src="/images/svg_ch5_ex_cos_and_cos2_comparison_step1_cloud.svg"
                compensate_offset_x_for_large_text_columns={true} />
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
                offset_x="4em"
                src="/images/svg_ch5_ex_cos_and_cos2_comparison_step2_cloud.svg"
                compensate_offset_x_for_large_text_columns={true} />
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
                offset_x="4em"
                src="/images/svg_ch5_ex_cos_and_cos2_comparison_step3_cloud.svg"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large&#123;1 + \cos(2x)\over 2&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              as substituting{" "}
              <NoBreak>
                “
                <Math>
                  $2x$
                </Math>
                ”
              </NoBreak>
              {" "}for{" "}
              <NoBreak>
                “
                <Math>
                  $x$
                </Math>
                ”
              </NoBreak>
              {" "}effects a horizontal
              compression by{" "}
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
            </VerticalChunk>
            <VerticalChunk indent={true}>
              (NB: If we do it the other way around, 
              putting the vertical scaling before the vertical 
              translation, we obtain{" "}
              <NoBreak>
                “
                <Math>
                  $&#123;1\over 2&#125;\cos(2x)$
                </Math>
                ”
              </NoBreak>
              {" "}
              as the third function and{" "}
              <NoBreak>
                “
                <Math>
                  $&#123;1\over 2&#125; + &#123;1\over 2&#125;\cos(2x)$
                </Math>
                ”
              </NoBreak>
              {" "}
              as the fourth function:
            </VerticalChunk>
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
            <VerticalChunk>
              ...which is same-same since
              {" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 2&#125; + &#123;1\over 2&#125;\cos(2x) = &#123;1 + \cos(2x)\over 2&#125;$
                </Math>
                .)
              </NoBreak>
            </VerticalChunk>
            <VerticalChunk indent={true}>
              The issue for the second part of the problem is
              therefore to prove that...
            </VerticalChunk>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                <MathBlock>
                  $$
                  &#123;1 + \cos(2x)\over 2&#125; = \cos^2(x)
                  $$
                </MathBlock>
              </div>
            </center>
            <VerticalChunk>
              ...by algebraic means.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              For this we again use the angle-sum formula
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \cos(A + B) = \cos(A)\cos(B) - \sin(A)\sin(B)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for{" "}
              <NoBreak>
                <Math>
                  $\cos$
                </Math>
                ,
              </NoBreak>
              {" "}but with{" "}
              <NoBreak>
                <Math>
                  $A = B = x$
                </Math>
                ,
              </NoBreak>
              {" "}namely
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              \cos(2x) 
              &= \cos(x + x) \\
              &= \up&#123;1.6&#125; \cos(x)\cos(x) - \sin(x)\sin(x) \\
              &= \up&#123;1.6&#125; \cos^2(x) - \sin^2(x)
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              which gives us
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &#123;1 + \cos(2x)\over 2&#125; 
              &= \up&#123;2.0&#125; &#123;1 + \cos^2(x) - \sin^2(x) \over 2&#125; \\
              &= \up&#123;2.0&#125; &#123;(1 - \sin^2(x)) + \cos^2(x)\over 2&#125; \\
              &= \up&#123;2.0&#125; &#123;\cos^2(x) + \cos^2(x)\over 2&#125; \\
              &= \up&#123;2.0&#125; &#123;2\cos^2(x)\over 2&#125; \\
              &= \up&#123;2.0&#125; \cos^2(x)
              \end&#123;align*&#125;
              $$
              <ImageLeft
                offset_y="3%"
                offset_x="3.4em"
                src="/images/svg_ch5_ex_cos_and_cos2_comparison_pythagorean_cloud.svg"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...as conjectured! 
              (In particular,{" "}
              <Math>
                $\cos^2(x)$
              </Math>
              {" "}truly{" "}
              <i>
                is
              </i>
              {" "}a
              sinusoid, as a result of all this, surprisingly
              enough.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={31}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 31.
              </b>
              {" "}
              Relate
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \sin(x)\cos(x)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              to
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \sin(2x)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              with the help of the angle-sum formulas.
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={31}>
            <VerticalChunk>
              The angle-sum formula for sin is
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \sin(A+B) = \cos A\sin B + \sin A\cos B
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              from which
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              \sin(2x) =&\,\, \sin(x + x) \\
              \up&#123;1.6&#125; =&\,\, \cos x\sin x + \sin x\cos x \\
              \up&#123;1.6&#125; =&\,\, 2\sin x\cos x
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and
            </VerticalChunk>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                <MathBlock>
                  $$
                  \sin x\cos x = &#123;1\over 2&#125;\sin(2x)
                  $$
                </MathBlock>
              </div>
            </center>
            <VerticalChunk>
              ...solving for{" "}
              <NoBreak>
                <Math>
                  $\sin x\cos x$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={32}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 32.
              </b>
              {" "}
              What sequence of geometric transformations
              can turn [the graph]{" "}
              <Math>
                $y = \sin(x)$
              </Math>
              {" "}
              into [the graph]{" "}
              <NoBreak>
                <Math>
                  $y = \sin(x)\cos(x)$
                </Math>
                ?
              </NoBreak>
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={32}>
            <VerticalChunk>
              Since
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \sin x\cos x = &#123;1\over 2&#125;\sin(2x)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by Exercise 30 and since the substitution
              of{" "}
              <NoBreak>
                “
                <Math>
                  $x$
                </Math>
                ”
              </NoBreak>
              {" "}by{" "}
              <NoBreak>
                “
                <Math>
                  $2x$
                </Math>
                ”
              </NoBreak>
              {" "}effects a horizontal
              compression by{" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                ,
              </NoBreak>
              {" "}the answer is: 
              “a horizontal scaling by{" "}
              <Math>
                $&#123;1\over 2&#125;$
              </Math>
              {" "}followed by a vertical scaling by{" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 2&#125;$
                </Math>
                ”,
              </NoBreak>
              {" "}
              though order doesn't matter, and we might also
              say “uniform scaling by{" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 2&#125;$
                </Math>
                ”.
              </NoBreak>
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={33}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 33.
              </b>
              {" "}
              What sequence of geometric transformations
              maps the graph
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              y = \cos x
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              onto the graph
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              y = \sin x + \cos x
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...? 
              (Study Exercise 18, if you have no inspiration.)
              (PS: Prove your answer.)
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={33}>
            <VerticalChunk>
              Note that{" "}
              <Math>
                $\sin + \cos$
              </Math>
              {" "}
              has period{" "}
              <Math>
                $4\eta$
              </Math>
              {" "}just like{" "}
              <Math>
                $\sin$
              </Math>
              {" "}or
              {" "}
              <NoBreak>
                <Math>
                  $\cos$
                </Math>
                ,
              </NoBreak>
              {" "}but, unlike{" "}
              <Math>
                $\sin$
              </Math>
              {" "}and{" "}
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
              {" "}reaches a maximum of{" "}
              <Math>
                $\sqrt&#123;2&#125;$
              </Math>
              {" "}
              at{" "}
              <NoBreak>
                <Math>
                  $x = \eta/2$
                </Math>
                ,
              </NoBreak>
              {" "}as uncovered in Exercise 18,
              from which the following graphic is recovered:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_cos_to_sin_plus_cos_reminder.svg" />
            <Pause />
            <VerticalChunk>
              (We have added the minimum at{" "}
              <NoBreak>
                <Math>
                  $y = -\sqrt&#123;2&#125;$
                </Math>
                ,
              </NoBreak>
              {" "}
              which is no harder to prove than the
              maximum at{" "}
              <NoBreak>
                <Math>
                  $y = \sqrt&#123;2&#125;$
                </Math>
                .)
              </NoBreak>
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Note that while the above graph may
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              seem
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              like a sinusoid, we have
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              not yet proved
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              that it is a sinusoid, which is indeed the goal
              of the current exercise! But we can conjecture
              that the
              following two steps would take us from{" "}
              <Math>
                $y = \cos(x)$
              </Math>
              {" "}
              to{" "}
              <NoBreak>
                <Math>
                  $y = \sin(x) + \cos(x)$
                </Math>
                ,
              </NoBreak>
              {" "}given the structure above:
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              1. horizontal translation to the right by{" "}
              <Math>
                $\eta/2$
              </Math>
              {" "}{" "}
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              2. vertical scaling by{" "}
              <Math>
                $\sqrt&#123;2&#125;$
              </Math>
              {" "}{" "}
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              Now you might recall from previous discussions
              (cf. Exercise 7 of Chapter 3, part 1 of Exercise 27
              in this chapter) that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              x \ra f(x + a)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              has a graph that is the translate of{" "}
              <Math>
                $y = f(x)$
              </Math>
              {" "}to
              left by{" "}
              <Math>
                $a$
              </Math>
              {" "}units, whence
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              x \ra f(x - a)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              has a graph that is the translate of{" "}
              <Math>
                $y = f(x)$
              </Math>
              {" "}to
              the{" "}
              <i>
                right
              </i>
              {" "}by{" "}
              <Math>
                $a$
              </Math>
              {" "}units; whence, we can
              conjecture that...
            </VerticalChunk>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                <MathBlock>
                  $$
                  \sqrt&#123;2&#125;\cdot \cos(x - \eta/2)
                  $$
                </MathBlock>
              </div>
            </center>
            <VerticalChunk>
              <NoBreak>
                ...[
                <Math>
                  $\cos(x)$
                </Math>
                ,
              </NoBreak>
              {" "}translated, scaled] actually coincides
              with{" "}
              <NoBreak>
                <Math>
                  $\cos(x) + \sin(x)$
                </Math>
                !!!
              </NoBreak>
              {" "}(!!!)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              For the proof, we resort to the angle-sum formula...
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \cos(A + B) = \cos A\cos B - \sin A\sin B
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...again, giving us...
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &\,\, \sqrt&#123;2&#125;\cdot \cos(x - \eta/2) \\
              \up&#123;1.6&#125; =&\,\, \sqrt&#123;2&#125;\cdot(\cos(x)\cos(-\eta/2) - \sin(x)\sin(-\eta/2)) \\
              \up&#123;1.6&#125; =&\,\, \sqrt&#123;2&#125;\cdot(\cos(x)\sqrt&#123;0.5&#125; - \sin(x)(-\sqrt&#123;0.5&#125;)) \\
              \up&#123;1.6&#125; =&\,\, \sqrt&#123;2&#125;\cdot\sqrt&#123;0.5&#125;\cdot(\cos(x) + \sin(x)) \\
              \up&#123;1.6&#125; =&\,\, \sqrt&#123;2 \cdot 0.5&#125;\cdot(\cos(x) + \sin(x)) \\
              \up&#123;1.6&#125; =&\,\, \sqrt&#123;1&#125;\cdot(\cos(x) + \sin(x)) \\
              \up&#123;1.6&#125; =&\,\, \cos(x) + \sin(x)
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...victory!!!!
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                The fact that
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \sqrt&#123;2&#125;\cdot \sqrt&#123;0.5&#125; = 1
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                can also be seen from the fact that
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \sqrt&#123;0.5&#125; = &#123;1\over \sqrt&#123;2&#125;&#125;
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                that some might prefer.
              </VerticalChunk>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={34}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 34.
              </b>
              {" "}
              Prove that for every{" "}
              <NoBreak>
                <Math>
                  $A_1$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $A_2 \in \rr$
                </Math>
                ,
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              x \ra A_1\cos x + A_2\sin x
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              equals
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              x \ra W\cdot \cos(x + \psi)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for some appropriate constants{" "}
              <Math>
                $W$
              </Math>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $\psi$
                </Math>
                .
              </NoBreak>
              {" "}(That shall
              be functions of{" "}
              <NoBreak>
                <Math>
                  $A_1$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $A_2$
                </Math>
                .)
              </NoBreak>
              {" "}Also: draw a deep analogy
              to polar coordinates, regarding the transform that gives
              {" "}
              <NoBreak>
                <Math>
                  $W$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $\psi$
              </Math>
              {" "}as a function of{" "}
              <NoBreak>
                <Math>
                  $A_1$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $A_2$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={34}>
            <VerticalChunk>
              One approach is to expand
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \cos(x + \psi)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              using the angle-sum formula, which gives
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \cos(x)\cos(\psi) - \sin(x)\sin(\psi)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              after which multiplying by{" "}
              <Math>
                $W$
              </Math>
              {" "}and collecting coefficients of
              {" "}
              <NoBreak>
                <Math>
                  $\cos x$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $\sin x$
              </Math>
              {" "}gives
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \up&#123;1.4&#125;(W \cdot \cos \psi)\cdot\cos(x) - (W \cdot \sin \psi) \cdot \sin(x)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              comparing to
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              A_1\cos x + A_2\sin x
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
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
              if we could find{" "}
              <NoBreak>
                <Math>
                  $W$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $\psi$
              </Math>
              {" "}such that{" "}
            </VerticalChunk>
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
            <VerticalChunk>
              ...that we can actually rewrite{" "}
            </VerticalChunk>
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
            <VerticalChunk>
              because{" "}
              <NoBreak>
                <Math>
                  $\cos(-x) = \cos(x)$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $-\sin(x) = \sin(-x)$
              </Math>
              {" "}
              for all{" "}
              <NoBreak>
                <Math>
                  $x \in \rr$
                </Math>
                .
              </NoBreak>
              {" "}But the above 
              two
              equations are very similar to
            </VerticalChunk>
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
            <VerticalChunk>
              that give the transformation 
              from polar coordinates{" "}
              <Math>
                $(r, \theta)$
              </Math>
              {" "}
              to Cartesian coordinates{" "}
              <NoBreak>
                <Math>
                  $(x, y)$
                </Math>
                ;
              </NoBreak>
              {" "}in fact these are the
              exact same equations, except that we have 
              {" "}
              <NoBreak>
                ‘
                <Math>
                  $W$
                </Math>
                ’
              </NoBreak>
              {" "}in place of{" "}
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
              in place of{" "}
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
              {" "}in place of{" "}
              <NoBreak>
                ‘
                <Math>
                  $x$
                </Math>
                ’,
              </NoBreak>
              {" "}and
              {" "}
              <NoBreak>
                ‘
                <Math>
                  $A_2$
                </Math>
                ’
              </NoBreak>
              {" "}in place of{" "}
              <NoBreak>
                ‘
                <Math>
                  $y$
                </Math>
                ’;
              </NoBreak>
              {" "}
              so in other words,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              (W, -\psi)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              are the
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              polar coordinates
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              of the Cartesian point
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              (A_1, A_2)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              with{" "}
              <Math>
                $W$
              </Math>
              {" "}being the “radius”, or distance to the origin,
              and{" "}
              <Math>
                $-\psi$
              </Math>
              {" "}being the angle from the{" "}
              <Math>
                $x$
              </Math>
              {" "}axis (or{" "}
              <i>
                argument
              </i>
              ):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_polar_discovery.svg" />
            <Pause />
            <VerticalChunk>
              In particular,
              since every pair of Cartesian coordinates
              has a corresponding pair of polar coordinates
              (in fact, many corresponding pairs!), 
              we will
              always be able to find{" "}
              <NoBreak>
                <Math>
                  $W$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $\psi$
              </Math>
              {" "}such as to
              match the equations above, 
              which concludes the problem.
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                To explicitly give formulas,
                one can set
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                W = \sqrt&#123;A_1^2 + A_2^2&#125;
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                and
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                -\psi = \begin&#123;cases&#125;
                \arctan(A_2/A_1) & \te&#123;if &#125;\, A_1 \ne 0, \,\te&#123;else&#125; \\
                \up&#123;1.2&#125;\te&#123;arccot&#125;(A_1/A_2) & \te&#123;if &#125;\, A_2 \ne 0, \,\te&#123;else&#125; \\
                \up&#123;1.2&#125;\rm&#123;?&#125;       & \te&#123;if &#125;\, A_1 = 0, A_2 = 0
                \end&#123;cases&#125;
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                where we are copy-pasting the formula that appears
                in the chapter for going from cartesian to polar
                coordinates (no need to remember this formula, though,
                really); though, IN TRUTH, setting
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                W = -\sqrt&#123;A_1^2 + A_2^2&#125;
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                would work as well, 
                if we add
                {" "}
                <Math>
                  $2\eta$
                </Math>
                {" "}to the argument!
              </VerticalChunk>
            </SolutionNote>
            <Pause />
            <VerticalChunk>
              <i>
                Example 1.
              </i>
              {" "}
              The previously-studied
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \cos x + \sin x
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              (cf. Exercise 4) corresponds to the case
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$A_1 = A_2 = 1$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              of this exercise, and 
              in which case we can set
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$W = \sqrt&#123;2&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and{" "}
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\psi = -\eta/2$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              because the pair
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              (W, \,-\psi) \,=\, (\sqrt&#123;2&#125;, \,\,\eta/2)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is a polar coordinate of{" "}
              <NoBreak>
                <Math>
                  $(A_1, A_2) = (1, 1)$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_polar_discovery_1_1.svg" />
            <Pause />
            <VerticalChunk>
              (In fact, the fact that...
            </VerticalChunk>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                <MathBlock>
                  $$
                  \cos x + \sin x = \sqrt&#123;2&#125;\cdot\cos(x - \eta/2)
                  $$
                  <ImageRight
                    src="/images/svg_ch5_ex_polar_discovery_cloud.svg"
                    compensate_offset_x_for_large_text_columns={true} />
                </MathBlock>
              </div>
            </center>
            <VerticalChunk>
              ...was painstakingly uncovered 
              in Exercise 33, if you recall.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={35}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 35.
              </b>
              {" "}
              If we attempt to express
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              A_1\sin x + A_2\cos x
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              in the form
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              W\cdot\sin(x + \psi)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              then what does the relationship
              between{" "}
              <NoBreak>
                <Math>
                  $A_1$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $A_2$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $W$
              </Math>
              {" "}and{" "}
              <Math>
                $\psi$
              </Math>
              {" "}become?
            </VerticalChunk>
            <VerticalChunk indent={true}>
              (NB: We have flipped{" "}
              <NoBreak>
                ‘
                <Math>
                  $\cos$
                </Math>
                ’
              </NoBreak>
              {" "}and
              {" "}
              <NoBreak>
                ‘
                <Math>
                  $\sin$
                </Math>
                ’
              </NoBreak>
              {" "}in the first expression, compared
              to Exercise 34, and reducing to that exercise is
              likely to produce confusion. 
              Solving from scratch is recommended.)
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={35}>
            <VerticalChunk>
              Expanding
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \sin(x + \psi)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by the angle-sum formula gives
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \sin x\cos \psi + \cos x\sin \psi
              $$
              <ImageRight
                offset_x="8em"
                src="/images/svg_ch5_ex_polar_discovery2_cloud.svg"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              whereby multiplying by{" "}
              <Math>
                $W$
              </Math>
              {" "}and collecting coefficients
              of{" "}
              <NoBreak>
                <Math>
                  $\sin x$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $\cos x$
              </Math>
              {" "}gives
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              (W\cdot\cos \psi)\cdot\sin x + (W\cdot\sin \psi)\cdot\cos x
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and equating to
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              A_1\cdot\sin x + A_2\cdot\cos x
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              gives the system of equations
            </VerticalChunk>
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
            <VerticalChunk>
              which is to say that, for this specific arrangement of
              the variables,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              (W, \,\psi)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              are the
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              exact
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              polar coordinates of{" "}
              <NoBreak>
                <Math>
                  $(A_1, A_2)$
                </Math>
                !!!
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Example 1.
              </i>
              {" "}
              By this result,
            </VerticalChunk>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                <MathBlock>
                  $$
                  \sin(x) + \cos(x) = \sqrt&#123;2&#125;\cdot\sin(x + \eta/2)
                  $$
                </MathBlock>
              </div>
            </center>
            <VerticalChunk>
              since
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              (\sqrt&#123;2&#125;, \,\eta/2)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              are the (hum: “the”) polar coordinates of{" "}
              <NoBreak>
                <Math>
                  $(1, 1)$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={36}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 36.
              </b>
              {" "}
              If aliens descended on Earth, captured everyone,
              took you aside and told you that the fate of
              humanity rested on your ability to “illustrate
              powers of secant”, without further instructions,
              what would you do?
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={36}>
            <VerticalChunk>
              Presumably the aliens are asking
              for an illustration of the sequence
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \sec \theta, \,\sec^2(\theta), \,\sec^3(\theta), \,\sec^4(\theta), \dots
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for some fixed{" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ,
              </NoBreak>
              {" "}based on a geometric
              interpretation of{" "}
              <NoBreak>
                <Math>
                  $\sec$
                </Math>
                .
              </NoBreak>
              {" "}(Actually...
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              1, \,\sec \theta, \,\sec^2(\theta), \,\sec^3(\theta),  \,\sec^4(\theta), \dots,
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...we should start the sequence at{" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "}since
              {" "}
              <NoBreak>
                <Math>
                  $1 = \sec^0(\theta)$
                </Math>
                .)
              </NoBreak>
              {" "}Here is a possibility that
              echoes back to the first solution to Exercise 27:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_sec_powers_bounce.svg" />
            <Pause />
            <VerticalChunk>
              Starting with a length of{" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "}bottom left,
              successive multiplications by{" "}
              <Math>
                $\sec(\theta)$
              </Math>
              {" "}
              are performed by “dropping a height up” onto
              the opposite side of the angle{" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ,
              </NoBreak>
              {" "}
              bouncing back and forth between the two sides.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              If we are willing to reproduce the angle
              {" "}
              <Math>
                $\theta$
              </Math>
              {" "}several times over,
              another possibility is to draw a “snail stack”
              of right triangles sharing a common vertex:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_sec_powers_snail.svg" />
            <Pause />
            <VerticalChunk>
              Or if we move the angle{" "}
              <Math>
                $\theta$
              </Math>
              {" "}around from
              one end of the previously obtained segment to
              another, another somewhat exotic possibility is
              this one:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_sec_powers_inverted_towers.svg" />
            <Pause />
            <VerticalChunk>
              We can also take a page from the geometric
              interpretation of sec that is mentioned towards
              the end of the chapter, and draw this figure:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_sec_powers_circles.svg" />
            <Pause />
            <VerticalChunk>
              (In which we are effectively using a circular arc
              to each time realign the last obtained segment with 
              horizontal.) In any case, with so many nice drawings,
              you are bound to save humanity!
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                One can note that the third diagram makes a cameo 
                appearance within the second diagram (modulo scale):
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_sec_powers_bounce_cameo.svg" />
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={37}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 37.
              </b>
              {" "}
              What do similar illustrations look like for
              powers of cosine, and for powers of tangent?
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={37}>
            <VerticalChunk>
              For cosines we can copy the same figures as
              for secant, but go “in the other direction”:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_costan_powers_cos_bounce.svg" />
            <Pause />
            <Image
              src="/images/svg_ch5_ex_costan_powers_cos_snail.svg"
              style="margin-top:1.5em;" />
            <Pause />
            <Image src="/images/svg_ch5_ex_costan_powers_cos_inverted_towers.svg" />
            <Pause />
            <Image src="/images/svg_ch5_ex_costan_powers_circles.svg" />
            <Pause />
            <VerticalChunk>
              For ‘tan’ it is possible to produce spirals:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_costan_powers_tan_48_big.svg" />
            <Pause />
            <Image src="/images/svg_ch5_ex_costan_powers_tan_48_big_other_spiral.svg" />
            <Pause />
            <VerticalChunk>
              There is also a staircase possibility (nb:
              the spirals will go inward, and the staircase
              collapses to a point, if{" "}
              <NoBreak>
                <Math>
                  $\theta &lt; \eta/2$
                </Math>
                ):
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_costan_powers_tan_48_wedge.svg" />
            <Pause />
            <VerticalChunk>
              We can also do as in the second spiral,
              and put the powers of{" "}
              <Math>
                $\tan(\theta)$
              </Math>
              {" "}on the
              hypotenuses of the triangles...
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_costan_powers_tan_48_other_wedge.svg" />
            <Pause />
            <VerticalChunk>
              ...since the size ratio of successive triangles
              is{" "}
              <NoBreak>
                <Math>
                  $\tan(\theta)$
                </Math>
                ,
              </NoBreak>
              {" "}by the first staircase drawing!
              (In fact, we could have done this trick with
              powers of sec/cos as well, relabeling some other
              side of the triangle to be the power of{" "}
              <NoBreak>
                <Math>
                  $\cos$
                </Math>
                .)
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                Here are some examples of what we suggest at the
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_costan_powers_cos_snail_other_way.svg" />
              <Pause />
              <Image src="/images/svg_ch5_ex_costan_powers_cos_towers_other_way.svg" />
              <Pause />
              <VerticalChunk>
                (To reiterate, this works because the triangles are all similar,
                and the size ratio of one triangle to the previous—specifically,
                the ratio of the hypotenuses—is
                {" "}
                <NoBreak>
                  <Math>
                    $\cos(\theta)$
                  </Math>
                  .)
                </NoBreak>
              </VerticalChunk>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 2.
                </i>
                {" "}
                To illustrate powers of
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \cot(\theta)
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                one can start from the illustrations for
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \tan(\theta)
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                and replace the complementary angle by{" "}
                <NoBreak>
                  ‘
                  <Math>
                    $\theta$
                  </Math>
                  ’.
                </NoBreak>
                {" "}
                E.g.:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_costan_powers_cot_48_big.svg" />
              <Pause />
              <VerticalChunk>
                Likewise, to illustrate powers of
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \sin(\theta)
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                one can start with an illustration for powers of
                {" "}
                <Math>
                  $\cos(\theta)$
                </Math>
                {" "}and reverse the role of{" "}
                <Math>
                  $\theta$
                </Math>
                {" "}and
                its complement. E.g., with our two variations of the
                snail:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_costan_powers_sin_snail.svg" />
              <Pause />
              <Image src="/images/svg_ch5_ex_costan_powers_sin_snail_other_way.svg" />
              <Pause />
              <VerticalChunk>
                (Likewise to switch from an illustration of{" "}
                <Math>
                  $\sec$
                </Math>
                {" "}
                to illustration of{" "}
                <Math>
                  $\csc$
                </Math>
                {" "}it suffices to move{" "}
                <Math>
                  $\theta$
                </Math>
                {" "}
                around, not that aliens will ever descend on Earth and
                ask us these things.)
              </VerticalChunk>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={38}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 38.
              </b>
              {" "}
              What sequence of geometric transformations
              of the plane will map the graph
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              y = \cos(x)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              onto the graph...
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              y = \cos(0.1x + 0.1)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...?
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={38}>
            <VerticalChunk>
              Place{" "}
              <Math>
                $\cos(x + 0.1)$
              </Math>
              {" "}as an intermediate function
              between{" "}
              <Math>
                $\cos(x)$
              </Math>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $\cos(0.1x + 0.1)$
                </Math>
                ,
              </NoBreak>
              {" "}
              breaking the transformation into two steps:
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \cos(x)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \downarrow
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \cos(x + 0.1)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \downarrow
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \,\cos(0.1x + 0.1).
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              The first step, going to{" "}
              <NoBreak>
                <Math>
                  $\cos(x + 0.1)$
                </Math>
                ,
              </NoBreak>
              {" "}shifts 
              the graph of cos left by{" "}
              <Math>
                $0.1$
              </Math>
              {" "}(cf. Exercise 1, 
              Exercise 22); the second step dilates the 
              resulting graph by a factor{" "}
              <Math>
                $10$
              </Math>
              {" "}horizontally, 
              because the multiplication by{" "}
              <Math>
                $0.1$
              </Math>
              {" "}slows 
              everything down by a factor{" "}
              <NoBreak>
                <Math>
                  $10$
                </Math>
                .
              </NoBreak>
              {" "}Thus
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              y = \cos(0.1x + 0.1)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is obtained from{" "}
              <Math>
                $y = \cos(x)$
              </Math>
              {" "}by:
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              1. left translation by{" "}
              <Math>
                $0.1$
              </Math>
              {" "}{" "}
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              2. horizontal scaling by{" "}
              <Math>
                $10$
              </Math>
              {" "}{" "}
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              (Or “horizontal compression by{" "}
              <NoBreak>
                <Math>
                  $0.1$
                </Math>
                ”,
              </NoBreak>
              {" "}for 2.)
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                One can also place{" "}
                <Math>
                  $\cos(0.1x)$
                </Math>
                {" "}as an 
                intermediate function between{" "}
                <Math>
                  $\cos(x)$
                </Math>
                {" "}and 
                {" "}
                <NoBreak>
                  <Math>
                    $\cos(0.1x + 0.1)$
                  </Math>
                  :
                </NoBreak>
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \cos(x)
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \downarrow
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \cos(0.1x)
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \downarrow
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \,\cos(0.1(x + 1)) = \cos(0.1x + 0.1).
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                In this case the first step, going to{" "}
                <NoBreak>
                  <Math>
                    $\cos(0.1x)$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                dilates the graph horizontally by a factor{" "}
                <NoBreak>
                  <Math>
                    $10$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                while the second step, in which{" "}
                <Math>
                  $x$
                </Math>
                {" "}is replaced 
                by{" "}
                <NoBreak>
                  <Math>
                    $x + 1$
                  </Math>
                  ,
                </NoBreak>
                {" "}shifts the resulting graph to the
                left by{" "}
                <NoBreak>
                  <Math>
                    $1$
                  </Math>
                  ,
                </NoBreak>
                {" "}and the obtained sequence is:
              </VerticalChunk>
              <Pause />
              <CentralDisplayItalic>
                1. horizontal scaling by{" "}
                <Math>
                  $10$
                </Math>
                {" "}{" "}
              </CentralDisplayItalic>
              <Pause />
              <CentralDisplayItalic>
                2. left translation by{" "}
                <Math>
                  $1$
                </Math>
                {" "}{" "}
              </CentralDisplayItalic>
              <Pause />
              <VerticalChunk>
                (Indeed, this ends up performing the same overall
                transformation of the plane as the first solution,
                albeit decomposed differently in terms of its sub-steps.
                Neither sequence is more correct than the other.)
              </VerticalChunk>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 2.
                </i>
                {" "}
                Take the following three-box assemblage, that 
                computes{" "}
                <NoBreak>
                  <Math>
                    $x \ra \cos(0.1x + 0.1)$
                  </Math>
                  :
                </NoBreak>
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_cos_01x.svg" />
              <Pause />
              <VerticalChunk>
                (The label of the middle box is pasted diagonally
                above the box because of reasons of space.)
              </VerticalChunk>
              <VerticalChunk indent={true}>
                We can understand our first solution as gluing
                the middle and right boxes onto the{" "}
                <NoBreak>
                  ‘
                  <Math>
                    $\cos$
                  </Math>
                  ’
                </NoBreak>
                {" "}box
                one at a time, and observing the effect of each 
                additional gluing on the graph:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_cos_01x_2.svg" />
              <Pause />
              <VerticalChunk>
                On the other hand, if we perform the same
                analysis on this alternate three-box sequence...
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_cos_01x_3.svg" />
              <Pause />
              <VerticalChunk>
                ...that also computes{" "}
                <NoBreak>
                  <Math>
                    $x \ra \cos(0.1x + 0.1)$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                we recover our second solution:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_cos_01x_4.svg" />
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={39}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 39.
              </b>
              {" "}
              More generally, how is the graph of
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              x \ra \cos(Bx + C)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              related to the graph of{" "}
              <NoBreak>
                <Math>
                  $\cos$
                </Math>
                ,
              </NoBreak>
              {" "}for constants 
              {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $C \in \rr$
                </Math>
                ?
              </NoBreak>
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={39}>
            <VerticalChunk>
              As in the solution to Exercise 37 place
              {" "}
              <Math>
                $\cos(x + C)$
              </Math>
              {" "}as an intermediate function between
              {" "}
              <Math>
                $\cos(x)$
              </Math>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $\cos(Bx + C)$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \cos(x)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \downarrow
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \cos(x + C)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \downarrow
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \cos(Bx + C)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              The first step effects a tranlation to the left by{" "}
              <NoBreak>
                <Math>
                  $C$
                </Math>
                ,
              </NoBreak>
              {" "}
              the second step (since it replaces{" "}
              <Math>
                $x$
              </Math>
              {" "}by{" "}
              <NoBreak>
                <Math>
                  $Bx$
                </Math>
                )
              </NoBreak>
              {" "}effects
              a horizontal compression by a factor{" "}
              <Math>
                $B$
              </Math>
              {" "}(speed-up by
              factor{" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ),
              </NoBreak>
              {" "}so the following pair of steps, in order,
              takes the graph{" "}
              <Math>
                $y = \cos(x)$
              </Math>
              {" "}to the graph{" "}
              <NoBreak>
                <Math>
                  $y = \cos(Bx + C)$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              1. horizontal translation by{" "}
              <Math>
                $-C$
              </Math>
              {" "}{" "}
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              2. horizontal scaling by{" "}
              <Math>
                $1/B$
              </Math>
              {" "}{" "}
            </CentralDisplayItalic>
            <Pause />
            <StarDivider />
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                Alternately, like Note 1 of Exercise 37, we can
                stop at{" "}
                <Math>
                  $\cos(Bx)$
                </Math>
                {" "}as an intermediate point:
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \cos(x)
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \downarrow
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \cos(Bx)
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \downarrow
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \cos(B(x + C/B)) = \cos(Bx + C)
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                This gives us the following alternate sequence:
              </VerticalChunk>
              <Pause />
              <CentralDisplayItalic>
                1. horizontal scaling by{" "}
                <Math>
                  $1/B$
                </Math>
                {" "}{" "}
              </CentralDisplayItalic>
              <Pause />
              <CentralDisplayItalic>
                2. horizontal translation by{" "}
                <Math>
                  $-C/B$
                </Math>
                {" "}{" "}
              </CentralDisplayItalic>
              <Pause />
              <VerticalChunk>
                ...which is different-but-equivalent, but 
                generally considered inferior 
                by virtue of involving the more complicated translation 
                term,{" "}
                <NoBreak>
                  <Math>
                    $-C/B$
                  </Math>
                  !
                </NoBreak>
              </VerticalChunk>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 2.
                </i>
                {" "}
                One says that translation and scaling  are
              </VerticalChunk>
              <Pause />
              <CentralDisplayItalic>
                non-commutative
              </CentralDisplayItalic>
              <Pause />
              <VerticalChunk>
                because it matters which of the two operations is performed 
                first. If it didn't matter,
                then both of our solutions would involve the 
                same amount of translation, but they don't!
              </VerticalChunk>
              <VerticalChunk indent={true}>
                (Also:
              </VerticalChunk>
              <Pause />
              <CentralDisplayItalic>
                translation and scaling don't commute
              </CentralDisplayItalic>
              <Pause />
              <VerticalChunk>
                or
              </VerticalChunk>
              <Pause />
              <CentralDisplayItalic>
                transation doesn't commute with scaling
              </CentralDisplayItalic>
              <Pause />
              <VerticalChunk>
                ...all good sentences to use in the wild!)
              </VerticalChunk>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={40}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 40.
              </b>
              {" "}
              If
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              A \ne 0
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is a point on the{" "}
              <Math>
                $x$
              </Math>
              {" "}axis, how can we construct
              the value
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              1 / A
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by purely geometric means?
              (We assume that{" "}
              <NoBreak>
                ‘
                <Math>
                  $0$
                </Math>
                ’
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                ‘
                <Math>
                  $1$
                </Math>
                ’
              </NoBreak>
              {" "}are also marked on the axis.)
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={40}>
            <VerticalChunk>
              The key is to view{" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $1/A$
              </Math>
              {" "}as values of the form{" "}
            </VerticalChunk>
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
            <VerticalChunk>
              for some angle{" "}
              <NoBreak>
                <Math>
                  $\theta \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "}if{" "}
              <NoBreak>
                <Math>
                  $|A| \geq 1$
                </Math>
                ,
              </NoBreak>
              {" "}or
              as values of the form
            </VerticalChunk>
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
            <VerticalChunk>
              for some angle{" "}
              <NoBreak>
                <Math>
                  $\theta \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "}if{" "}
              <NoBreak>
                <Math>
                  $|A| \leq 1$
                </Math>
                .
              </NoBreak>
              {" "}
              In more detail, we make use of the fact that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \sec(\theta)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              can be obtained as the intersection of the tangent
              to the unit circle with the{" "}
              <Math>
                $x$
              </Math>
              {" "}axis (we never discussed
              this, you can't be faulted for missing it):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_one_over_A_secant_construction.svg">
              <ImageRight src="/images/svg_ch5_ex_one_over_A_secant_construction_cloud.svg" />
            </Image>
            <Pause />
            <VerticalChunk>
              So the idea is, for example if{" "}
              <NoBreak>
                <Math>
                  $|A| \geq 1$
                </Math>
                ,
              </NoBreak>
              {" "}to draw
              a tangent to the circle from{" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "}then to drop a height
              onto the{" "}
              <Math>
                $x$
              </Math>
              {" "}axis:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_one_over_A_secant_Agt1.svg" />
            <Pause />
            <VerticalChunk>
              ...the position obtained is the corresponding 
              {" "}
              <NoBreak>
                <Math>
                  $\cos(\theta)$
                </Math>
                ,
              </NoBreak>
              {" "}and{" "}
              <Math>
                $\cos(\theta)\cdot\sec(\theta) = 1$
              </Math>
              {" "}&#x2705;.
              If{" "}
              <Math>
                $|A| \leq 1$
              </Math>
              {" "}we can reverse the process, 
              “dropping a height onto the circle”, and then finding
              the intersection of the tangent at that point with
              the{" "}
              <Math>
                $x$
              </Math>
              {" "}axis! (Which will not work, as should be,
              if and only if{" "}
              <NoBreak>
                <Math>
                  $\cos(\theta) = 0$
                </Math>
                ,
              </NoBreak>
              {" "}a.k.a., if and only 
              if{" "}
              <NoBreak>
                <Math>
                  $A = 0$
                </Math>
                .)
              </NoBreak>
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={41}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 41.
              </b>
              {" "}
              In the following drawing at what
              coordinates does the tangent to the circle
              intersect the axes, as marked by the purple
              triangles?
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_60_tangent.svg" />
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={41}>
            <VerticalChunk>
              First we note that the{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinates
              </NoBreak>
              {" "}of
              the point of tangency are{" "}
              <Math>
                $1/2$
              </Math>
              {" "}and 
              {" "}
              <NoBreak>
                <Math>
                  $\sqrt&#123;0.75&#125; = &#123;\sqrt&#123;3&#125;\over 2&#125;$
                </Math>
                ,
              </NoBreak>
              {" "}being{" "}
              <Math>
                $\cos(60^\circ)$
              </Math>
              {" "}
              and{" "}
              <Math>
                $\sin(60^\circ)$
              </Math>
              {" "}respectively:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_60_tangent_with_coordinates.svg" />
            <Pause />
            <VerticalChunk>
              But by Exercise 43 this implies that the coordinate 
              of the intersectionj of the tangent is
              <ImageRight src="/images/svg_ch5_ex_60_tangent_sec_cloud.svg" />
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over 1/2&#125; = 2
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              with the{" "}
              <Math>
                $x$
              </Math>
              {" "}axis, and
              <ImageRight src="/images/svg_ch5_ex_60_tangent_csc_cloud.svg" />
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over \sqrt&#123;3&#125;/2&#125; = &#123;2\over \sqrt&#123;3&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              with the{" "}
              <Math>
                $y$
              </Math>
              {" "}axis, reasoning symmetrically.
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={42}>
          <ExerciseStatement id="_157441688610">
            <VerticalChunk>
              <b>
                Exercise 42.
              </b>
              {" "}
              Compute the vertical distance from{" "}
              <Math>
                $A$
              </Math>
              {" "}to{" "}
              <Math>
                $A'$
              </Math>
              {" "}
              from the following set of blueprints for a shed with 
              an angled inside wall (all distances in inches):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_floorplan.svg" />
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={42}>
            <VerticalChunk>
              We will compute the two green lengths, then the
              red length, then the blue length, then add 130:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_floorplan_soln1.svg" />
            <Pause />
            <VerticalChunk>
              Proceeding, the longer and smaller green lengths
              are{" "}
              <Math>
                $112\rt&#123;0.1&#125; \cdot \sin(25.5^\circ\hlfbk)$
              </Math>
              {" "}
              and{" "}
              <Math>
                $8\rt&#123;0.1&#125; \cdot \cos(25.5^\circ\hlfbk)$
              </Math>
              {" "}inches, 
              respectively:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_floorplan_soln2.svg" />
            <Pause />
            <VerticalChunk>
              The red length is therefore
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &\,\,268 - 8 - 112\cdot\sin(25.5^\circ\hlfbk) - 8\cdot\cos(25.5^\circ\hlfbk) \\
              \up&#123;1.6&#125; =&\,\,260 - 112\cdot\sin(25.5^\circ\hlfbk) - 8\cdot\cos(25.5^\circ\hlfbk)
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              (inches) while the blue length is
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \tan(22^\circ\hlfbk)\cdot[260 - 112\cdot\sin(25.5^\circ\hlfbk) - 8\cdot\cos(25.5^\circ\hlfbk)]
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              (inches) and the final answer is
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              130 + \tan(22^\circ\hlfbk)\cdot[260 - 112\cdot\sin(25.5^\circ\hlfbk) - 8\cdot\cos(25.5^\circ\hlfbk)]
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              inches, which comes out to
              <ImageLeft src="/images/svg_ch5_ex_floorplan_computation_cloud.svg" />
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              212.65
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              minus some. (Approximating to{" "}
              <NoBreak>
                <Math>
                  $1/100$
                </Math>
                -th
              </NoBreak>
              {" "}of an inch 
              should be good enough for a construction site.)
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                Note that...
              </VerticalChunk>
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
              <VerticalChunk>
                ...and if you are not finding these values, then make sure
                that your calculator is in “degree mode”. 
                (Otherwise you have to manually 
                convert the arguments to radians.)
              </VerticalChunk>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={43}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 43.
              </b>
              {" "}
              Given the following sketch, to what angle
              can the door be opened before it hits against 
              the roof? (Hint: You will need to Google “how
              to use arctan”, or “how to convert from polar
              to Cartesian coordinates”.)
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_opening_door.svg" />
            <Pause />
            <VerticalChunk>
              And:
            </VerticalChunk>
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
          <Pause />
          <Solution solution_number={43}>
            <VerticalChunk>
              We start by computing these lengths in the
              original plane of the{" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                -dimensional
              </NoBreak>
              {" "}drawing:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_opening_door_soln1.svg" />
            <Pause />
            <VerticalChunk>
              (Nb: One can also compute the length marked ‘2’ as
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              &#123;42\over \tan(23^\circ)&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              since{" "}
              <NoBreak>
                <Math>
                  $\cot = 1/\tan$
                </Math>
                ,
              </NoBreak>
              {" "}or
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              42\cdot \tan(67^\circ)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              since{" "}
              <Math>
                $67^\circ = 90^\circ - 23^\circ$
              </Math>
              {" "}is the complement
              of{" "}
              <NoBreak>
                <Math>
                  $23^\circ$
                </Math>
                .)
              </NoBreak>
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Next, as
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              0.5
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is the distance from the side of the door to its
              hinge, the door swings at a radius of
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              38.5
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and the distance between the hinge's center
              and the ceiling, measured horizontally at the top
              of the door, is
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              30.945 - 0.5 = 30.445...
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by subtracting from the length marked ‘5’.
              We can draw the following overhead sketch of the situation
              (not to scale, and keeping to{" "}
              <Math>
                $3$
              </Math>
              {" "}digits of accuracy):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_opening_door_overhead.svg" />
            <Pause />
            <VerticalChunk>
              Here
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \arctan
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is a function that you can find notated as
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \te&#123;“&#125;\tan^&#123;-1&#125;\te&#123;”&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              on your calculator (a questionable choice of notation,
              because it is{" "}
              <i>
                not
              </i>
              {" "}the same as{" "}
              <NoBreak>
                <Math>
                  $1/\tan = \cot$
                </Math>
                ),
              </NoBreak>
              {" "}and
              sometimes known as
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              tangent inverse
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              by the gallery, converts a fraction of the form
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              &#123;\te&#123;opposite&#125;\over\te&#123;adjacent&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              into the corresponding angle whose tangent equals that 
              fraction.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              The final answer to the problem is...
            </VerticalChunk>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                <MathBlock>
                  $$
                  90^\circ + 52.26^\circ = 142.26^\circ
                  $$
                </MathBlock>
              </div>
            </center>
            <VerticalChunk>
              ...because{" "}
              <Math>
                $\alpha$
              </Math>
              {" "}only constitutes the amount of rotation
              past{" "}
              <NoBreak>
                <Math>
                  $90^\circ$
                </Math>
                ,
              </NoBreak>
              {" "}per the drawing.
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={44}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 44.
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
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_bomb_shelter_door_tru_sizes.svg" />
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={44}>
            <VerticalChunk>
              In the interest of mass-producing our results
              we will write a general formula to compute 
              {" "}
              <Math>
                $\alpha$
              </Math>
              {" "}in terms of{" "}
              <NoBreak>
                <Math>
                  $x_0$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $y_0$
              </Math>
              {" "}and{" "}
              <Math>
                $z$
              </Math>
              {" "}in 
              the following diagram (note that{" "}
              <NoBreak>
                <Math>
                  $r = \sqrt&#123;x_0^2 + y_0^2&#125;$
                </Math>
                ):
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_bomb_shelter_door_alpha_x0y0.svg" />
            <Pause />
            <VerticalChunk>
              We can decompose
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \alpha
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              as
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              90^\circ + \beta - \gamma
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              with{" "}
              <Math>
                $\beta$
              </Math>
              {" "}and{" "}
              <Math>
                $\gamma$
              </Math>
              {" "}as depicted here:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_bomb_shelter_door_alpha_decomposed.svg" />
            <Pause />
            <VerticalChunk>
              By definition of{" "}
              <NoBreak>
                ‘
                <Math>
                  $\arctan$
                </Math>
                ’
              </NoBreak>
              {" "}(cf. Exercise 43), 
              we have
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \gamma = \arctan(y_0/x_0)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \beta = \arctan(z/\sqrt&#123;r^2 - z^2&#125;)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              or
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \beta = \arctan(z/\sqrt&#123;x_0^2 + y_0^2 - z^2&#125;)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              directly in terms of{" "}
              <NoBreak>
                <Math>
                  $z$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $x_0$
              </Math>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $y_0$
                </Math>
                ,
              </NoBreak>
              {" "}since
              {" "}
              <NoBreak>
                <Math>
                  $r^2 = x_0^2 + y_0^2$
                </Math>
                ,
              </NoBreak>
              {" "}so
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \alpha = 90^\circ + \arctan(z/\sqrt&#123;x_0^2 + y_0^2 - z^2&#125;) - \arctan(y_0/x_0)
              $$
              <ImageRight
                src="/images/svg_ch5_ex_bomb_shelter_door_alpha_cloud.svg"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              which constitutes our “general formula”.
            </VerticalChunk>
            <VerticalChunk indent={true}>
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
              {" "}and
              {" "}
              <NoBreak>
                <Math>
                  $(x_0, y_0) = (108, 22)$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_bomb_shelter_annotated.svg" />
            <Pause />
            <VerticalChunk>
              The three values of{" "}
              <Math>
                $\alpha$
              </Math>
              {" "}obtained, respectively,
              are...
            </VerticalChunk>
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
            <VerticalChunk>
              ...being, namely, upper bounds on the amount of
              rotation of the door caused by a putative contact of 
              the big handle in open position with the wall, of the 
              big handle in closed position with the wall, and of 
              the small handle with the wall.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              (By the way: don't be confused by the fact that 
              {" "}
              <Math>
                $\alpha$
              </Math>
              {" "}is not an angle measured “from
              horizontal”;{" "}
              <Math>
                $\alpha$
              </Math>
              {" "}is still the amount of rotation (aperture)
              undergone by the door, as it measures the amount of rotation
              of a specific point attached to the door!)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              In particular, since
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              104.3033\ldots &lt; 109.1225\ldots
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              the big handle is not the limiting factor when
              the big handle is in open position, at which point
              the small handle is the limiting factor and prevents
              the door from opening more than{" "}
              <NoBreak>
                <Math>
                  $104^\circ$
                </Math>
                -and-some,
              </NoBreak>
              {" "}
              whereas since
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              101.5410\ldots &lt; 104.3033\ldots
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              the big handle becomes the limiting factor when it
              is in closed position, at which point the door can
              only open to{" "}
              <NoBreak>
                <Math>
                  $101^\circ$
                </Math>
                -and-some!
              </NoBreak>
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={45}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 45.
              </b>
              {" "}
              If a sphere is projected directly outward onto
              a cylinder abutting the sphere at the equator, with each
              point remaining at its height, as pictured in the 
              sketch and in the visualization below, by what factor are
              areas stretched as a function of the latitude{" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ?
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_horizontal_projection_sphere_statement.svg" />
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={45}>
            <VerticalChunk>
              Areas are scaled by a factor of
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \sec(\theta) \cdot \cos(\theta) = 1
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              because latitudes (circles that slice the sphere
              horizontally) are stretched by a factor of
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \sec(\theta)
              $$
              <ImageRight
                src="/images/svg_ch5_ex_horizontal_projection_sphere_sec_cloud.svg"
                offset_x="9em"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by the projection, whereas longitudes (the other
              ones, perpendicular to latitudes) are locally stretched 
              by a factor of...
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \cos(\theta)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...as depicted in this...
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_horizontal_projection_sphere_cos_explanation.svg" />
            <Pause />
            <VerticalChunk>
              ...sketch, and because the 
              overall scaling in area is the latitudinal
              scaling factor times the longitudinal
              scaling factor. (Area = width{" "}
              <Math>
                $\times$
              </Math>
              {" "}height,
              so you take the factor by which “width” scales,
              times the factor by which “height” scales—presuming
              your old “width” and “height” are still at right 
              angle to one another after the projection, which
              is the case here: longitudes and latitudes, that
              are perpendicular on the sphere, project to 
              lines and circles, respectively, that are 
              perpendicular on the cylinder.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={46}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 46.
              </b>
              {" "}
              Rank the{" "}
              <Math>
                $7$
              </Math>
              {" "}slices of this
              sphere with unit radius from the greatest to
              smallest area slice:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_pez_sphere_statement.svg" />
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={46}>
            <VerticalChunk>
              The three slices of height{" "}
              <Math>
                $1/3$
              </Math>
              {" "}have the same
              area, as do the four slices of height{" "}
              <NoBreak>
                <Math>
                  $1/4$
                </Math>
                .
              </NoBreak>
              {" "}But
              naturally, the slices of height{" "}
              <Math>
                $1/3$
              </Math>
              {" "}have larger
              area than the slices of height{" "}
              <NoBreak>
                <Math>
                  $1/4$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                This holds because each slice has the same area
                as the horizontal projection of that slice onto a cylinder
                hugging the sphere, by Exercise 46, and because
                the area of a cylinder slice only depends on its
                height.
                <ImageRight src="/images/svg_ch5_ex_pez_sphere_cloud.svg" />
              </VerticalChunk>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 2.
                </i>
                {" "}
                The slices of height{" "}
                <Math>
                  $1/3$
                </Math>
                {" "}have area exactly
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                &#123;1/3 \over 1/4&#125; = 4/3 = 1.333...
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                times the area of the slices of height{" "}
                <NoBreak>
                  <Math>
                    $1/4$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                given that the area of a slice is directly
                proportional to its height.
              </VerticalChunk>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={47}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 47.
              </b>
              {" "}
              Give a formula for the area of a sphere of
              radius{" "}
              <NoBreak>
                <Math>
                  $r$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={47}>
            <VerticalChunk>
              The area of a sphere of radius{" "}
              <Math>
                $r$
              </Math>
              {" "}is
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              4\eta\rt&#123;0.05&#125;r\cdot 2r = 8\eta\rt&#123;0.05&#125;r^2
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              because it is the same as the area of a cylinder
              of radius{" "}
              <Math>
                $r$
              </Math>
              {" "}and and height{" "}
              <NoBreak>
                <Math>
                  $2r$
                </Math>
                ,
              </NoBreak>
              {" "}by Exercise 46:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_sphere_area.svg" />
            <Pause />
            <VerticalChunk>
              (Namely,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              4\eta\rt&#123;0.05&#125;r\cdot 2r
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is the product “circumference{" "}
              <Math>
                $\times$
              </Math>
              {" "}height”
              that gives the area of the cylinder.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={48}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 48.
              </b>
              {" "}
              Give a formula for the volume of a sphere of
              radius{" "}
              <Math>
                $r$
              </Math>
              {" "}using the fact that the volume of
              a cone is “one third base times height”.
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={48}>
            <VerticalChunk>
              The basic idea is that we can view the
              sphere as being made up of many cones:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_sphere_volume_idea.svg" />
            <Pause />
            <VerticalChunk>
              When we add up the volume
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over 3&#125;\times \rm&#123;base&#125; \times \rm&#123;height&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              over all these cones, each height is nearly{" "}
              <NoBreak>
                <Math>
                  $r$
                </Math>
                ,
              </NoBreak>
              {" "}
              so what we really need is the sum of
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over 3&#125;\times \rm&#123;base&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              over all the cones, which comes out to
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over 3&#125;\times (&#123;\rm sphere\,\,area&#125;)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              because the sum of all the areas of the bases
              is the sphere area. (Everything speaking 
              approximately, for many fine cones, in the 
              limit of our imagination as they become 
              infinitely fine.) (*Where each ‘base’ stands
              for the shaved-off, “flattened” version of the 
              base.) So multiplying the height{" "}
              <Math>
                $r$
              </Math>
              {" "}back in, 
              we find
            </VerticalChunk>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                <MathBlock>
                  $$
                  V = &#123;1\over 3&#125;\times (&#123;\rm sphere\,\,area&#125;) \times r = &#123;8\over 3&#125;\eta\rt&#123;.1&#125;r^3
                  $$
                </MathBlock>
              </div>
            </center>
            <VerticalChunk>
              for the volume{" "}
              <Math>
                $V$
              </Math>
              {" "}of the sphere, using the fact that
              the sphere area{" "}
              <Math>
                $A$
              </Math>
              {" "}is
            </VerticalChunk>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                <MathBlock>
                  $$
                  A = 8\eta\rt&#123;.05&#125;r^2
                  $$
                </MathBlock>
              </div>
            </center>
            <VerticalChunk>
              by Exercise 49.
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                To formalize the argument, consider that
                we can approximate the volume of the sphere
                by finitely many cones with triangular bases,
                by triangulating the surface of the sphere:
              </VerticalChunk>
            </SolutionNote>
            <Pause />
            <Image src="/images/svg_ch5_ex_sphere_tetrahedrons.svg">
              <VerticalChunk>
                Note that a cone with a triangular base is
                just a
              </VerticalChunk>
              <Pause />
              <CentralDisplayItalic>
                tetrahedron
                <ImageLeft src="/images/svg_ch5_ex_sphere_volume_cones_cloud.svg" />
              </CentralDisplayItalic>
              <Pause />
              <VerticalChunk>
                where “tetrahedron” means “four-sided shape”. 
                (There is only 1 way to pull off a four-sided 
                shape in 3D: to make all sides triangles.)
                So the volume of the sphere is approximated
                by the sum of the volumes of the tetrahedrons,
                a.k.a. cones.
              </VerticalChunk>
              <VerticalChunk indent={true}>
                Define the
              </VerticalChunk>
              <Pause />
              <CentralDisplayItalic>
                mesh size
              </CentralDisplayItalic>
              <Pause />
              <VerticalChunk>
                of such a set of tetrahedrons to be the largest
                sidelength of any tetrahedron base.
              </VerticalChunk>
              <VerticalChunk indent={true}>
                (The smaller the mesh size, the more pointed
                the tetrahedrons.)
              </VerticalChunk>
              <VerticalChunk indent={true}>
                For the current 
                discussion we take it for granted that as the 
                mesh size shrinks, the sum of the volumes of
                the cones (= tetrahedrons) converges to the 
                volume of sphere.
              </VerticalChunk>
              <VerticalChunk indent={true}>
                (Or take the limit, as the mesh size shrinks,
                of the sum of the volume of the tetrahedrons 
                to be the{" "}
                <i>
                  definition
                </i>
                {" "}of the “volume of the 
                sphere”—that's just as well, since we don't have 
                any other competing notion of “volume of the sphere”,
                at the moment.)
              </VerticalChunk>
              <VerticalChunk indent={true}>
                Here is a closer look at a single tetrahedron 
                {" "}
                <NoBreak>
                  (
                  <Math>
                    $h_i$
                  </Math>
                </NoBreak>
                {" "}is the height of the tetrahedron):
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_ch5_ex_sphere_volume_closeup.svg" />
              <Pause />
              <VerticalChunk>
                One observes that
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                B_i \leq A_i
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                where
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                B_i
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                is the base of the tetrahedron and
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                A_i
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                is the projection of the base onto the surface
                of the sphere from the center of the sphere, and 
                that
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                h_i \leq r
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                where
                {" "}
                <Math>
                  $
                  h_i
                  $
                </Math>
                {" "}
                is the height of the tetrahedron, and{" "}
                <Math>
                  $r$
                </Math>
                {" "}is the
                radius of sphere. On the other hand, it is not hard
                to convince oneself that
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                B_i \geq 0.9A_i
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                and
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                h_i \geq 0.9r
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                for all of the tetrahedrons, if the mesh size is 
                sufficiently small; even,
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                B_i \geq 0.99A_i
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                and
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                h_i \geq 0.99r
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                for all of the tetrahedrons simultaenously,
                {" "}
                <i>
                  if the mesh size is sufficiently small
                </i>
                ; even,
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                B_i \geq 0.99999A_i
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                and
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                h_i \geq 0.99999r
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                for all... if etc.
              </VerticalChunk>
              <VerticalChunk indent={true}>
                (Or as mathematicians would put it: “for all{" "}
                <Math>
                  $\e &gt; 0$
                </Math>
                {" "}
                there exists an{" "}
                <Math>
                  $s &gt; 0$
                </Math>
                {" "}such that
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                B_i \geq (1-\e)A_i
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                and
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                h_i \geq (1-\e)r
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                for all of the tetrahedrons, if the mesh size less than{" "}
                <NoBreak>
                  <Math>
                    $s$
                  </Math>
                  .”)
                </NoBreak>
                {" "}
                (“For all... there exists... such that... if... .”)
              </VerticalChunk>
              <VerticalChunk indent={true}>
                This implies that
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \sum_&#123;i=1&#125;^N &#123;1\over 3&#125;B_ih_i
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                [nb: fast-foward to Exercise 38 if you have never
                seen{" "}
                <NoBreak>
                  <Math>
                    $\sum$
                  </Math>
                  -notation,
                </NoBreak>
                {" "}but this basically reads 
                “sum from{" "}
                <Math>
                  $i$
                </Math>
                {" "}equals{" "}
                <Math>
                  $1$
                </Math>
                {" "}up to{" "}
                <NoBreak>
                  <Math>
                    $N$
                  </Math>
                  ”]
                </NoBreak>
                {" "}which is the 
                total volume of the tetrahedrons, where{" "}
                <Math>
                  $N$
                </Math>
                {" "}denotes
                the number of tetrahedrons and{" "}
                <NoBreak>
                  <Math>
                    $B_i$
                  </Math>
                  ,
                </NoBreak>
                {" "}{" "}
                <Math>
                  $h_i$
                </Math>
                {" "}are the 
                base and height of the{" "}
                <NoBreak>
                  <Math>
                    $i$
                  </Math>
                  -th
                </NoBreak>
                {" "}tetrahedron, is 
                sandwiched between
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \sum_&#123;i=1&#125;^N &#123;1\over 3&#125;A_i r
                $$
                <ImageRight
                  src="/images/svg_ch5_ex_sphere_volume_AiBi_cloud.svg"
                  offset_x="5em"
                  compensate_offset_x_for_large_text_columns={true} />
              </MathBlock>
              <Pause />
              <VerticalChunk>
                above, and
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \sum_&#123;i=1&#125;^N &#123;1\over 3&#125;\cdot 0.99999\cdot A_i\cdot 0.99999\cdot r
                $$
                <ImageLeft
                  src="/images/svg_ch5_ex_sphere_volume_AiBi_other_cloud.svg"
                  offset_x="2.5em"
                  compensate_offset_x_for_large_text_columns={true} />
              </MathBlock>
              <Pause />
              <VerticalChunk>
                below, for sufficiently small mesh size; but
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \sum_&#123;i=1&#125;^N A_i = A
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                where{" "}
                <Math>
                  $A = 8\eta\rt&#123;.05&#125;r^2$
                </Math>
                {" "}is the total area 
                of the sphere, and so
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \sum_&#123;i=1&#125;^N &#123;1\over 3&#125;B_ih_i
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                is sandwiched between
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \sum_&#123;i=1&#125;^N &#123;1\over 3&#125;A_ir = &#123;1\over 3&#125;\cdot r\cdot \sum_&#123;i=1&#125;^N A_i = &#123;1\over 3&#125;Ar
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                above, and
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \sum_&#123;i=1&#125;^N &#123;1\over 3&#125;\cdot 0.99999\cdot A_i\cdot 0.99999\cdot r = (0.99999)^2&#123;1\over 3&#125;Ar
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                below; or, nicely put in a double inequality:
              </VerticalChunk>
              <center style="margin-top:1em;margin-bottom:1em;">
                <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                  <MathBlock>
                    $$
                    &#123;1\over 3&#125;Ar \geq \sum_&#123;i=1&#125;^N &#123;1\over 3&#125;B_ih_i \geq (0.99999)^2&#123;1\over 3&#125;Ar
                    $$
                  </MathBlock>
                </div>
              </center>
              <VerticalChunk>
                ...but we could replace{" "}
                <NoBreak>
                  “
                  <Math>
                    $0.99999$
                  </Math>
                  ”
                </NoBreak>
                {" "}by any other
                constant less that{" "}
                <Math>
                  $1$
                </Math>
                {" "}[yah no: because of the square,
                we need to say “between{" "}
                <Math>
                  $0$
                </Math>
                {" "}and{" "}
                <NoBreak>
                  <Math>
                    $1$
                  </Math>
                  ”]
                </NoBreak>
                {" "}by further 
                shrinking the size of the mesh, which implies that
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \sum_&#123;i=1&#125;^N &#123;1\over 3&#125;B_ih_i
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                must converge to
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                &#123;1\over 3&#125;Ar
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                as the mesh size goes to zero—it cannot converge to
                something greater than, nor less than, this number!
              </VerticalChunk>
            </Image>
          </Solution>
        </Exercise>
        <Exercise exercise_number={49}>
          <ExerciseStatement>
            <VerticalChunk>
              <b>
                Exercise 49.
              </b>
              {" "}
              Similarly to Exercise 9, suggest a definition for
              the product
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              c\cdot\vec&#123;v&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              of a vector{" "}
              <Math>
                $\vec&#123;v&#125;$
              </Math>
              {" "}by a real number{" "}
              <NoBreak>
                <Math>
                  $c$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
          </ExerciseStatement>
          <Pause />
          <Solution solution_number={49}>
            <VerticalChunk>
              We define
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              c \cdot (v_x, v_y) = (c\rt&#123;0.1&#125;v_x, c\rt&#123;0.1&#125;v_y)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for the product of a real number{" "}
              <Math>
                $c$
              </Math>
              {" "}with a
              vector{" "}
              <NoBreak>
                <Math>
                  $\vec&#123;v&#125; = (v_x, v_y) \in \rr^2$
                </Math>
                .
              </NoBreak>
              {" "}
              (Similarly for a vector of higher dimension—those
              exist too.)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              In other words, the product takes the constant
              {" "}
              <Math>
                $c$
              </Math>
              {" "}“inside”, multiplying each coordinate of
              the vector by{" "}
              <NoBreak>
                <Math>
                  $c$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Example 1.
              </i>
              {" "}We have
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              2 \cdot (10, 3.333) = (20, 6.666),
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              applying the definition with{" "}
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
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Example 2.
              </i>
              {" "}We have
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              2 \cdot (a, b) = (2a, 2b),
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for all{" "}
              <NoBreak>
                <Math>
                  $a, b \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "}for an example
              that is half-algebraic, half-numerical.
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                In some sense, the vector “wins” over the 
                number, in that their conjoint baby is a vector,
                not a number.
              </VerticalChunk>
            </SolutionNote>
          </Solution>
        </Exercise>
      </Exercises>
</> }
</>);
};

export default Article;