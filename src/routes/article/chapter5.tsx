import Chapter from "~/components/Chapter";
import { Section, Note, SolutionNote, Example, NoBreak, CustomBlock, Pause, WriterlyBlankLine } from "~/components/Wrappers";
import { CentralDisplay, CentralDisplayItalic } from "~/components/Delimiters";
import TextParent from "~/components/TextParent";
import { Math, MathBlock } from "~/components/Math";
import { ImageRight, ImageLeft } from "~/components/SideImage";
import Image from "~/components/Image";
import InlineImage from "~/components/InlineImage";
import { Exercise, Exercises } from "~/components/Exercises";
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
            function in Exercise{" "}
            <a
              class="exercise-link"
              href="/article/chapter3#83531157529">
              7
            </a>
            {" "}of Chapter 3, e.g.. 
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
            in Exercise{" "}
            <a
              class="exercise-link"
              href="/article/chapter3#499723503913">
              21
            </a>
            {" "}of Chapter 3 (by direct inspection
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
          appear in Exercise{" "}
          <a
            class="exercise-link"
            href="/article/chapter4#92865502141">
            12
          </a>
          {" "}of Chapter 4.
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
          (cf. Exercise{" "}
          <a
            class="exercise-link"
            href="/article/chapter4#93405715572">
            20
          </a>
          {" "}and Exercise{" "}
          <a
            class="exercise-link"
            href="/article/chapter4#20604811982">
            10
          </a>
          {" "}of Chapter 4),
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
          (Cf. Exercise{" "}
          <a
            class="exercise-link"
            href="/article/chapter4#51789241162">
            24
          </a>
          , Chapter 4.) You should
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
          Note 1 of Exercise{" "}
          <a
            class="exercise-link"
            href="/article/chapter4#591410978741">
            37
          </a>
          , Chapter 4. 
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
          These triangles imply that the the unique 
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
          {" "}axis, and that the unique point
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
          {" "}not
          <span style="font-family:monaco;background-color:beige;font-size:0.8em;border-radius:0.4em;padding:0.1em 0.3em;">
            atan2(x, y)
          </span>
          {" "}by some bizareness. (Well, actually a 
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
          {" "}to the{" "}
          <span style="white-space:nowrap;background-color:#ccffaa;border-radius:0.3em;font-size:0.7em;padding-left:0.5em;padding-right:0.5em;padding-top:0.3em;padding-bottom:0.3em;border:1px solid black;font-family:arial;">
            LIME GREEN
          </span>
          {" "}triangle 
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
          {" "}to the{" "}
          <span style="white-space:nowrap;background-color:#e9afaf;border-radius:0.3em;font-size:0.7em;padding-left:0.5em;padding-right:0.5em;padding-top:0.3em;padding-bottom:0.3em;border:1px solid black;font-family:arial;">
            FAUX BORDEAUX
          </span>
          {" "}triangle below:
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
          <VerticalChunk>
            <b id={253515767}>
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
          <VerticalChunk>
            <b id={1489286262}>
              Exercise 2.
            </b>
            {" "}
            Guesstimate a function with this graph:
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch5_ex_cosine_10x_plus_x_over_4.svg" />
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
                line={-2.0} />
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
          <VerticalChunk>
            <b id={5503839855}>
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
          <VerticalChunk>
            <b id={45582319240}>
              Exercise 4.
            </b>
            {" "}
            Guesstimate a function with this graph:
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch5_ex_big_wave.svg" />
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
              Exercise{" "}
              <a
                class="exercise-link"
                href="/article/chapter5#5503839855">
                3
              </a>
              , it has an amplitude of{" "}
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
          <VerticalChunk>
            <b id={93414135213}>
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
          <VerticalChunk>
            <b id={23654748396}>
              Exercise 6.
            </b>
            {" "}
            Is the pythagorean identity apparent in the
            graphs of the previous exercise?
          </VerticalChunk>
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
          <VerticalChunk>
            <b id={95065071153}>
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
          <VerticalChunk>
            <b id={29426623154}>
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
          <VerticalChunk>
            <b id={73137111881}>
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
                The solution to Exercise{" "}
                <a
                  class="exercise-link"
                  href="/article/chapter5#95065071153">
                  7
                </a>
                {" "}can be cast in terms of
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
          <VerticalChunk>
            <b id={27918764315}>
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
                  /
                  <i>
                    angular frequency
                  </i>
                  {" "}(radians per 
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
          <VerticalChunk>
            <b id={441310315155}>
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
          <VerticalChunk>
            <b id={777110749742}>
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
          <VerticalChunk>
            <b id={886111126110}>
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
          <VerticalChunk>
            <b id={682711664904}>
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
          <VerticalChunk>
            <b id={423613245042}>
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
              \Large \up&#123;1.5&#125;&#123;22\over 7&#125; = 3.\overline&#123;142857&#125;\\
              \Large \up&#123;1.7&#125;&#123;33\over 7&#125; = 4.\overline&#123;714285&#125;\\
              \Large \up&#123;1.7&#125;&#123;44\over 7&#125; = 6.\overline&#123;285714&#125;
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
                As mentioned in Note 1 of Exercise{" "}
                <a
                  class="exercise-link"
                  href="/article/chapter3#499723503913">
                  21
                </a>
                , 
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
          <VerticalChunk>
            <b id={155614553661}>
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
                {" "}[miles*] (*say):
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
          <VerticalChunk>
            <b id={746017104620}>
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
              </VerticalChunk>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={18}>
          <VerticalChunk>
            <b id={982317445492}>
              Exercise 18.
            </b>
            {" "}
            The graph{" "}
            <Math>
              $y = \cos(x) + \sin(x)$
            </Math>
            {" "}from
            Exercise{" "}
            <a
              class="exercise-link"
              href="/article/chapter5#93414135213">
              5
            </a>
            {" "}has a maximum value greater than
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
              (cf. Exercise{" "}
              <a
                class="exercise-link"
                href="/article/chapter1#105472712">
                1
              </a>
              , Chapter 1).
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
          <VerticalChunk>
            <b id={777819257789}>
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
          <VerticalChunk>
            <b id={260319599856}>
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
          <VerticalChunk>
            <b id={48920071628}>
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
              ~
              <i>
                disjoint
              </i>
              ~
              <i>
                ~
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
              Exercise{" "}
              <a
                class="exercise-link"
                href="/article/chapter5#982317445492">
                18
              </a>
              , the larger (more positive)
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
                discussed in Exercise{" "}
                <a
                  class="exercise-link"
                  href="/article/chapter5#45582319240">
                  4
                </a>
                {" "}has maximum value
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
                given in Exercise{" "}
                <a
                  class="exercise-link"
                  href="/article/chapter5#45582319240">
                  4
                </a>
                :
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
          <VerticalChunk>
            <b id={402524816041}>
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
              also, by the result of Exercise{" "}
              <a
                class="exercise-link"
                href="/article/chapter5#777819257789">
                19
              </a>
              {" "}(whereby
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
          <VerticalChunk>
            <b id={369025178368}>
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
              Exercise{" "}
              <a
                class="exercise-link"
                href="/article/chapter5#402524816041">
                22
              </a>
              :
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
              by Exercise{" "}
              <a
                class="exercise-link"
                href="/article/chapter5#402524816041">
                22
              </a>
              . (The End.)
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
          <VerticalChunk>
            <b id={470325994962}>
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
          <VerticalChunk>
            <b id={843426562028}>
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
          <VerticalChunk>
            <b id={6826928426}>
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
          <VerticalChunk>
            <b id={318027818533}>
              Exercise 27.
            </b>
            {" "}
            How would the graph of each of the compositions
            from Exercise{" "}
            <a
              class="exercise-link"
              href="/article/chapter5#6826928426">
              26
            </a>
            {" "}compare to the graph of the 
            generic function{" "}
            <NoBreak>
              <Math>
                $f$
              </Math>
              ?
            </NoBreak>
          </VerticalChunk>
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
              (Cf. Exercise{" "}
              <a
                class="exercise-link"
                href="/article/chapter3#83531157529">
                7
              </a>
              {" "}of Chapter 3, Exercise{" "}
              <a
                class="exercise-link"
                href="/article/chapter3#440717762616">
                14
              </a>
              {" "}of 
              Chapter 3.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={28}>
          <VerticalChunk>
            <b id={242028256564}>
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
          <VerticalChunk>
            <b id={349929095564}>
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
          <Pause />
          <Solution solution_number={29}>
            <VerticalChunk>
              We know from Exercise{" "}
              <a
                class="exercise-link"
                href="/article/chapter5#48920071628">
                21
              </a>
              {" "}that the 
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
          <VerticalChunk>
            <b id={629431104557}>
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
              of Exercise{" "}
              <a
                class="exercise-link"
                href="/article/chapter5#318027818533">
                27
              </a>
              , in particular.)
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
          <VerticalChunk>
            <b id={243932711106}>
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
          <VerticalChunk>
            <b id={986033127604}>
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
              by Exercise{" "}
              <a
                class="exercise-link"
                href="/article/chapter5#629431104557">
                30
              </a>
              {" "}and since the substitution
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
          <VerticalChunk>
            <b id={800933339675}>
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
            (Study Exercise{" "}
            <a
              class="exercise-link"
              href="/article/chapter5#982317445492">
              18
            </a>
            , if you have no inspiration.)
            (PS: Prove your answer.)
          </VerticalChunk>
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
              {" "}as uncovered in Exercise{" "}
              <a
                class="exercise-link"
                href="/article/chapter5#982317445492">
                18
              </a>
              ,
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
              (cf. Exercise{" "}
              <a
                class="exercise-link"
                href="/article/chapter3#83531157529">
                7
              </a>
              {" "}of Chapter 3, part 1 of Exercise{" "}
              <a
                class="exercise-link"
                href="/article/chapter5#318027818533">
                27
              </a>
              {" "}
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
          <VerticalChunk>
            <b id={354834459123}>
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
              (cf. Exercise{" "}
              <a
                class="exercise-link"
                href="/article/chapter5#45582319240">
                4
              </a>
              ) corresponds to the case
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
              in Exercise{" "}
              <a
                class="exercise-link"
                href="/article/chapter5#800933339675">
                33
              </a>
              , if you recall.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={35}>
          <VerticalChunk>
            <b id={969436039581}>
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
            to Exercise{" "}
            <a
              class="exercise-link"
              href="/article/chapter5#354834459123">
              34
            </a>
            , and reducing to that exercise is
            bound to produce a mess—solving from scratch is recommended!)
          </VerticalChunk>
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
                offset_x="3em"
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
          <VerticalChunk>
            <b id={555036831451}>
              Exercise 36.
            </b>
            {" "}
            Similarly to Exercise{" "}
            <a
              class="exercise-link"
              href="/article/chapter5#73137111881">
              9
            </a>
            , suggest a
            definition for the product
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
          <Pause />
          <Solution solution_number={36}>
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
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                In some sense, the vector “wins” over the 
                number, in that their conjoint baby is a vector:
              </VerticalChunk>
              <Pause />
              <Image
                style="background-color:rgb(226 232 240);"
                src="/images/svg_ch5_ex_c_times_vector_box.svg" />
            </SolutionNote>
          </Solution>
        </Exercise>
      </Exercises>
</> }
</>);
};

export default Article;