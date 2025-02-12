import Chapter from "~/components/Chapter";
import { Section, Note, SolutionNote, Example, NoBreak, CustomBlock, Pause, WriterlyBlankLine } from "~/components/Wrappers";
import { CentralDisplay, CentralDisplayItalic } from "~/components/Delimiters";
import { Math, MathBlock } from "~/components/Math";
import { ImageRight, ImageLeft } from "~/components/SideImage";
import Image from "~/components/Image";
import InlineImage from "~/components/InlineImage";
import { Exercise, Exercises } from "~/components/Exercises";
import Solution from "~/components/Solution";
import Table from "~/components/Table";
import Grid from "~/components/Grid";
import { List, Item } from "~/components/List";
import { SectionDivider, StarDivider } from "~/components/SectionDivider";
import VerticalChunk from "~/components/VerticalChunk";

const Article = () => {
  return (
    <Chapter
      number={5}
      title="The Trigonometric Functions">
      <Section>
        <VerticalChunk>
          <b>
            Definitions.
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
              $x = 0.5$
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
          The reason for these values, per the
          definitions, is that the point half a unit
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
          As another example, the graphs indicate that 
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
          Again, going{" "}
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
          For a last example, note that there appears
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
          $$\approx &#123;11\over 7&#125; = 1.\overline&#123;571428&#125;$$
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
          (Etc.)
        </VerticalChunk>
        <VerticalChunk indent={true}>
          In another possible definition,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$\sin(x)$$
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
          particle, namely!
        </VerticalChunk>
      </Section>
    </Chapter>
  );
};

export default Article;