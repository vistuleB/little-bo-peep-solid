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
import { SectionDivider, StarDivider } from "~/components/SectionDivider";
import VerticalChunk from "~/components/VerticalChunk";

const Article = () => {
  return (
    <Chapter
      number={2}
      title="Slopes">
      <Section>
        <VerticalChunk>
          <b>
            Slopes.
          </b>
          {" "}
          The{" "}
          <i>
            slope
          </i>
          {" "}of a line is a mathematical measure
          of how “steep” a line is. Here are a few examples
          (for an explanation of the values, see below):
        </VerticalChunk>
        <Pause />
        <Image src="/images/chapter_2_1.svg" />
        <Pause />
        <VerticalChunk>
          To explain, the slope of a line is...
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          the number of units the line goes up with each
          unit to the right
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          ...assuming that numbers on the{" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -axis
          </NoBreak>
          {" "}increase
          going up and that numbers on the{" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -axis
          </NoBreak>
          {" "}increase
          going right, as is usually the case. One can also
          describe slope as...
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          the amount of vertical change per unit of
          horizontal change
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          ...more elegant!
        </VerticalChunk>
        <VerticalChunk indent={true}>
          For example, the line below has slope 1, because
          it goes up by{" "}
          <Math>
            $1$
          </Math>
          {" "}unit for each unit to the right:
        </VerticalChunk>
        <Pause />
        <Image src="/images/slope_1_example.svg" />
        <Pause />
        <VerticalChunk>
          On the other hand, the line below has slope
          {" "}
          <NoBreak>
            <Math>
              $-0.5$
            </Math>
            ,
          </NoBreak>
          {" "}because it goes up by{" "}
          <i>
            minus
          </i>
          {" "}{" "}
          <Math>
            $0.5$
          </Math>
          {" "}units
          with each unit to the right:
        </VerticalChunk>
        <Pause />
        <Image src="/images/slope_0.5_example.svg" />
        <Pause />
        <VerticalChunk>
          (Etc.)
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Measuring Slope.
          </b>
          {" "}
          The slope of a line is also the ratio of vertical
          change to horizontal change between any two
          distinct points{" "}
          <NoBreak>
            <Math>
              $A$
            </Math>
            ,
          </NoBreak>
          {" "}{" "}
          <Math>
            $B$
          </Math>
          {" "}on the line:
        </VerticalChunk>
        <Pause />
        <Image src="/images/31.svg" />
        <Pause />
        <MathBlock>
          $$ \te&#123;slope&#125; = &#123;\te&#123;vertical change from A to B&#125; \over \te&#123;horizontal change from A to B&#125;&#125; $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          Indeed, dividing the vertical change by the
          horizontal change gives the per-horizontal-unit
          vertical change.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          More precisely, if
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$ A = (x_1, y_1) $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          and
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$ B = (x_2, y_2) $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          then
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$ x_2 - x_1 $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          and
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$ y_2 - y_1 $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          are the horizontal{" "}
          <i>
            &
          </i>
          {" "}the vertical change,
          respectively, from{" "}
          <Math>
            $A$
          </Math>
          {" "}to{" "}
          <NoBreak>
            <Math>
              $B$
            </Math>
            ,
          </NoBreak>
          {" "}so
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \te&#123;slope&#125; = &#123;y_2 - y_1 \over x_2 - x_1&#125;
          $$
          <ImageRight
            offset_x="3em"
            offset_y="-0.7em"
            src="/images/32.svg" />
        </MathBlock>
        <Pause />
        <VerticalChunk>
          more succinctly. We call this the{" "}
          <i>
            slope formula
          </i>
          .
        </VerticalChunk>
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 1.
            </b>
            {" "}
            A line that passes through the points
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$A = (-2, 5)$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            and
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$B = (4, 1)$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            has slope
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$&#123;1 - 5 \over 4 - (-2)&#125; = &#123;-4 \over 6&#125; = - &#123;2 \over 3&#125;.$$
          </MathBlock>
        </Example>
        <StarDivider style="margin-top:1.5em;margin-bottom:0em;" />
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Sign Combinations.
          </b>
          {" "}
          Technically, quantities such as
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$ x_2 - x_1 $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          and
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$ y_2 - y_1 $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          are not distances but{" "}
          <i>
            differences
          </i>
          {" "}(or,
          equivalently,{" "}
          <i>
            changes
          </i>
          ). A distance, by
          definition, is a nonnegative number, while a
          difference carries no such restriction.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          In particular, since
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$ x_2 - x_1 $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          can be positive or negative, while
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$ y_2 - y_1 $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          can be positive or negative or zero (more on
          zero below), the following sign combinations
          arise (lines of slope zero not included):
        </VerticalChunk>
        <Pause />
        <Table
          style="margin-top:0.5em;margin-bottom:0.5em;"
          class="lines">
          <colgroup>
            <col width={120} />
            <col width={120} />
            <col width={120} />
            <col width={120} />
          </colgroup>
          <tbody>
            <tr>
              <td>
                <Math>
                  $x_2 - x_1$
                </Math>
              </td>
              <td>
                <Math>
                  $y_2 - y_1$
                </Math>
              </td>
              <td>
                <img
                  style="padding-top:7px;padding-bottom:7px;"
                  width={50}
                  src="/images/33.svg" />
              </td>
              <td>
                <MathBlock>
                  $$
                  &#123;y_2-y_1 \over x_2-x_1&#125;
                  $$
                </MathBlock>
              </td>
            </tr>
            <tr>
              <td>
                <Math>
                  $+$
                </Math>
              </td>
              <td>
                <Math>
                  $+$
                </Math>
              </td>
              <td>
                <img
                  style="margin-top:7px;margin-bottom:7px;width:105px;"
                  src="/images/34.svg" />
              </td>
              <td>
                <MathBlock>
                  $$
                  &#123;+ \over +&#125; = \,+
                  $$
                </MathBlock>
              </td>
            </tr>
            <tr>
              <td>
                <Math>
                  $-$
                </Math>
              </td>
              <td>
                <Math>
                  $-$
                </Math>
              </td>
              <td>
                <img
                  style="margin-top:7px;margin-bottom:7px;"
                  width={105}
                  src="/images/35.svg" />
              </td>
              <td>
                <MathBlock>
                  $$
                  &#123;- \over -&#125; = \,+
                  $$
                </MathBlock>
              </td>
            </tr>
            <tr>
              <td>
                <Math>
                  $+$
                </Math>
              </td>
              <td>
                <Math>
                  $-$
                </Math>
              </td>
              <td>
                <img
                  style="margin-top:7px;margin-bottom:7px;"
                  width={105}
                  src="/images/36.svg" />
              </td>
              <td>
                <MathBlock>
                  $$
                  &#123;- \over +&#125; = \,-
                  $$
                </MathBlock>
              </td>
            </tr>
            <tr>
              <td>
                <Math>
                  $-$
                </Math>
              </td>
              <td>
                <Math>
                  $+$
                </Math>
              </td>
              <td>
                <img
                  style="margin-top:7px;margin-bottom:7px;"
                  width={105}
                  src="/images/37.svg" />
              </td>
              <td>
                <MathBlock>
                  $$
                  \frac&#123;+&#125;&#123;-&#125; = \,-
                  $$
                </MathBlock>
              </td>
            </tr>
          </tbody>
        </Table>
        <Pause />
        <VerticalChunk>
          In fact, we{" "}
          <i>
            should
          </i>
          {" "}be able to algebraically
          verify that the slope formula gives the same
          answer if{" "}
          <Math>
            $(x_1, y_1)$
          </Math>
          {" "}and{" "}
          <Math>
            $(x_2, y_2)$
          </Math>
          {" "}swap
          places, or, namely, to show that the fractions
          <ImageRight
            offset_x="-0.5em"
            line={3.0}
            src="/images/svg_ch2_ch_swap_cloud.svg" />
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$ &#123;y_2 - y_1 \over x_2 - x_1&#125;\qquad\,\,\,\,\,\te&#123;and&#125;\,\,\,\,\,\qquad&#123;y_1 - y_2 \over x_1 - x_2&#125; $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          are somehow equal. But, indeed,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$ &#123;y_2 - y_1 \over x_2 - x_1&#125; = &#123;-(y_2 - y_1) \over -(x_2 - x_1)&#125; = &#123;y_1 - y_2 \over x_1 - x_2&#125; $$
          <ImageLeft
            offset_y="-60px"
            offset_x="2.5em"
            src="/images/39.svg" />
        </MathBlock>
        <Pause />
        <VerticalChunk>
          which verifies this hypothesis. In particular,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$ &#123;y_2 - y_1 \over x_2 - x_1&#125;\qquad\,\,\,\,\,\te&#123;and&#125;\,\,\,\,\,\qquad&#123;y_1 - y_2 \over x_1 - x_2&#125; $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          are equally valid incarnations of the slope
          formula.
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Pathological Cases.
          </b>
          {" "}
          If
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$ x_2 - x_1 = 0 $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          the slope formula “breaks down” in the sense that
          division by 0 is undefined. This occurs, e.g., if
          we attempt to measure the slope of a vertical
          line:
        </VerticalChunk>
        <Pause />
        <Image src="/images/40.svg" />
        <Pause />
        <VerticalChunk>
          Indeed, vertical lines have{" "}
          <i>
            undefined
          </i>
          {" "}slope.
          Moreover the bad case
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$ x_2 - x_1 = 0 $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          can also occur another way, namely if the points
          {" "}
          <Math>
            $(x_1, y_1)$
          </Math>
          {" "}and{" "}
          <Math>
            $(x_2, y_2)$
          </Math>
          {" "}coincide. In that
          case, more precisely, the slope formula evaluates
          to
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$ \frac&#123;y_2 - y_1&#125;&#123;x_2 - x_1&#125; = \frac&#123;0&#125;&#123;0&#125; $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          which could be anything. (Technically,{" "}
          <NoBreak>
            “
            <Math>
              $0/0$
            </Math>
            ”
          </NoBreak>
          {" "}is
          undefined.) Indeed, infinitely many different
          lines pass through any given point!
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            “Rise over Run”.
          </b>
          {" "}
          Some people remember the slope formula as “slope
          equals rise over run” (i.e.,{" "}
          <NoBreak>
            “
            <Math>
              $\te&#123;slope&#125; =$
            </Math>
          </NoBreak>
          <span class="nobreak">
            <InlineImage
              width="28px"
              src="/images/rise-run.svg" />
            ”),
          </span>
          {" "}following such a picture:
        </VerticalChunk>
        <Pause />
        <Image src="/images/44.svg" />
        <Pause />
        <VerticalChunk>
          In this context, note that, in physics, a
          one-dimensional displacement is measured as
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \left(&#123;\te&#123;coordinate&#125; \atop \te&#123;at arrival&#125;&#125;\right)\,\, - \,\,\left(&#123;\te&#123;coordinate&#125; \atop \te&#123;at start&#125;&#125;\right)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          in accordance, namely, with the coordinate
          differences{" "}
          <NoBreak>
            “
            <Math>
              $x_2 - x_1\!$
            </Math>
            ”,
          </NoBreak>
          {" "}{" "}
          <NoBreak>
            “
            <Math>
              $y_2 - y_1\!$
            </Math>
            ”
          </NoBreak>
          {" "}
          that appear in the slope formula.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          (In order not to discriminate, maybe we should
          also include this picture:
        </VerticalChunk>
        <Pause />
        <Image src="/images/47.svg" />
        <Pause />
        <VerticalChunk>
          Then “rise” and “run” have their signs flipped,
          but the ratio rise-over-run is the same, as
          already mentioned.)
        </VerticalChunk>
        <Pause />
        <VerticalChunk>
          <i>
            An Additional Miscellaneous Notation.
          </i>
          {" "}
          The slope formula is occasionally written
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \te&#123;slope&#125; = \frac&#123;\Delta y&#125;&#123;\Delta x&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          where the foreign-looking symbols{" "}
          <NoBreak>
            <Math>
              $\Delta x$
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <Math>
            $\Delta y$
          </Math>
          {" "}can be thought of as shorthands for
          {" "}
          <NoBreak>
            “
            <Math>
              $x_2 - x_1$
            </Math>
            ”,
          </NoBreak>
          {" "}{" "}
          <NoBreak>
            “
            <Math>
              $y_2 - y_1$
            </Math>
            ”
          </NoBreak>
          {" "}respectively. (Or,
          a little more exactly, as shorthands for the
          phrases “change in{" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            ”,
          </NoBreak>
          {" "}“change in{" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            ”.)
          </NoBreak>
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Solving for “rise” and “run”.
          </b>
          {" "}
          Multiplying
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \te&#123;slope&#125; = &#123;\te&#123;rise&#125; \over \te&#123;run&#125;&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          on each side by “run” gives
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \te&#123;slope&#125; \times \te&#123;run&#125; = \te&#123;rise&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          or “rise equals slope times run”. After which,
          dividing each side by “slope”, we find
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \te&#123;run&#125; = &#123;\te&#123;rise&#125; \over \te&#123;slope&#125;&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          or “run equals rise over slope”. Thus:
        </VerticalChunk>
        <Pause />
        <Image src="/images/48.svg" />
        <Pause />
        <VerticalChunk>
          ...as can sometimes be useful to know.
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Slopes and Line Equations.
          </b>
          {" "}An equation of the
          form
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$y = ax + b$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          where{" "}
          <Math>
            $a$
          </Math>
          {" "}and{" "}
          <Math>
            $b$
          </Math>
          {" "}are constants defines a line in
          the Cartesian plane. E.g.:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch2_ch_line_equations.svg" />
        <Pause />
        <VerticalChunk>
          Note that, assuming said{" "}
          <NoBreak>
            <Math>
              $y = ax + b$
            </Math>
            ,
          </NoBreak>
          {" "}one has
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$y = a\cdot 0 + b = b$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          at{" "}
          <NoBreak>
            <Math>
              $x = 0$
            </Math>
            ,
          </NoBreak>
          {" "}so{" "}
          <Math>
            $b$
          </Math>
          {" "}is the height of the line at
          {" "}
          <NoBreak>
            <Math>
              $x = 0$
            </Math>
            .
          </NoBreak>
          {" "}(FYI, this height is called the
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          {" "}{" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -intercept
          </NoBreak>
          {" "}{" "}
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          of the line, because{" "}
          <Math>
            $x = 0$
          </Math>
          {" "}is where the line
          crosses the{" "}
          <Math>
            $y$
          </Math>
          {" "}axis. But the point
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$(0, b)$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is also sometimes called the
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          {" "}{" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -intercept
          </NoBreak>
          {" "}{" "}
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          of the line, so the term{" "}
          <NoBreak>
            “
            <Math>
              $y$
            </Math>
            -intercept”
          </NoBreak>
          {" "}might
          either refer to the value{" "}
          <Math>
            $b$
          </Math>
          {" "}or to the point
          {" "}
          <NoBreak>
            <Math>
              $(0,b)$
            </Math>
            ,
          </NoBreak>
          {" "}depending.) On the other hand, at
          {" "}
          <NoBreak>
            <Math>
              $x = 1$
            </Math>
            ,
          </NoBreak>
          {" "}we have
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$y = a\cdot 1 + b = a + b$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          so{" "}
          <Math>
            $y$
          </Math>
          {" "}increases by{" "}
          <Math>
            $a$
          </Math>
          {" "}between{" "}
          <Math>
            $x = 0$
          </Math>
          {" "}and
          {" "}
          <NoBreak>
            <Math>
              $x = 1$
            </Math>
            .
          </NoBreak>
          {" "}In fact,{" "}
          <Math>
            $y$
          </Math>
          {" "}increases by{" "}
          <Math>
            $a$
          </Math>
          {" "}each time
          {" "}
          <Math>
            $x$
          </Math>
          {" "}increases by 1, so, by our own definition of
          slope—the increase in{" "}
          <Math>
            $y$
          </Math>
          {" "}per unit increase in
          {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            —
          </NoBreak>
          {" "}{" "}
          <Math>
            $a$
          </Math>
          {" "}is the slope of{" "}
          <NoBreak>
            <Math>
              $y = ax + b$
            </Math>
            .
          </NoBreak>
        </VerticalChunk>
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 2.
            </b>
            {" "}
            The equation
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$y = 100x - 3$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            defines a line of slope 100.
          </VerticalChunk>
        </Example>
        <Pause />
        <VerticalChunk>
          On the other hand, an equation of the form
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$y = ax + b$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          cannot describe a vertical line, because{" "}
          <Math>
            $a$
          </Math>
          {" "}is
          the slope, while a vertical line has no slope, so
          what would{" "}
          <Math>
            $a$
          </Math>
          {" "}be equal to? Instead, a vertical
          line is described by an equation of the form
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$x = c$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          (see Fig. 1) where{" "}
          <Math>
            $c \in \rr$
          </Math>
          {" "}is a constant, 
          similarly to the more familiar equation
          <ImageLeft
            offset_x="1em"
            offset_y="-6em"
            src="/images/svg_ch2_ch_vertical_line_equation.svg" />
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$y = b$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          for a horizontal line, where{" "}
          <Math>
            $b \in \rr$
          </Math>
          {" "}is a
          constant.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          One should also bear in mind that an equation can
          define a line without having either of the forms
          {" "}
          <NoBreak>
            “
            <Math>
              $y = ax + b$
            </Math>
            ”
          </NoBreak>
          {" "}or{" "}
          <NoBreak>
            “
            <Math>
              $x = c$
            </Math>
            ”.
          </NoBreak>
          {" "}For example,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$x + y = 3$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is equivalent to
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$y = 3 - x$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          and thus describes a line of{" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -intercept
          </NoBreak>
          {" "}{" "}
          <Math>
            $3$
          </Math>
          {" "}
          and slope{" "}
          <NoBreak>
            <Math>
              $-1$
            </Math>
            .
          </NoBreak>
          <ImageRight
            offset_x="2rem"
            line={1.0}
            src="/images/svg_3_plus_minus_one_times_x_cloud.svg" />
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Slopes and Units.
          </b>
          {" "}
          If the{" "}
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
            -axes
          </NoBreak>
          {" "}have units then a line's
          slope has units
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;$y$ axis units&#125; \over \te&#123;$x$ axis units&#125;&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          as should make sense, given that the slope is a
          change in{" "}
          <Math>
            $y$
          </Math>
          {" "}divided by a change in{" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            .
          </NoBreak>
        </VerticalChunk>
        <VerticalChunk indent={true}>
          For example, if the units on the{" "}
          <Math>
            $y$
          </Math>
          {" "}axis are
          meters (“m”) and the units on the{" "}
          <Math>
            $x$
          </Math>
          {" "}axis are
          seconds (“s”) then the slope has units
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;$y$ axis units&#125; \over \te&#123;$x$ axis units&#125;&#125; = &#123;\te&#123;m&#125; \over \te&#123;s&#125;&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          also known as{" "}
          <i>
            meters per second
          </i>
          . This is
          precisely the case, for example, in the following
          graph, that purports to plot the height of a
          balloon, in meters, as a function of time elapsed,
          in seconds:
        </VerticalChunk>
        <Pause />
        <Image src="/images/52.svg" />
        <Pause />
        <VerticalChunk>
          The slope of the graph is{" "}
          <Math>
            $0.75$
          </Math>
          {" "}{" "}
          <i>
            meters per
            second
          </i>
          {" "}because the balloon's height increases by
          three{" "}
          <i>
            meters
          </i>
          {" "}over the first four{" "}
          <i>
            seconds
          </i>
          {" "}(if
          you had noticed):
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \te&#123;slope&#125; \left(\!= &#123;\te&#123;rise&#125; \over \te&#123;run&#125;&#125;\right) = &#123;3\te&#123;m&#125; \over 4\te&#123;s&#125;&#125; = 0.75\te&#123;m&#125;/\te&#123;s&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          In fact, the slope is the balloon's upward
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          velocity
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          since velocity is defined as
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          displacement over time
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          and this is precisely the form of the ratio “rise
          over run” for the current graph. (More generally,
          we have
        </VerticalChunk>
        <Pause />
        <CentralDisplay>
          “slope = velocity”
        </CentralDisplay>
        <Pause />
        <VerticalChunk>
          whenever the{" "}
          <Math>
            $y$
          </Math>
          {" "}axis has dimensions of length and
          the{" "}
          <Math>
            $x$
          </Math>
          {" "}axis has dimensions of time—whether the
          slope turns out to be{" "}
          <Math>
            $\te&#123;m&#125;/\te&#123;s&#125;$
          </Math>
          {" "}or{" "}
          <Math>
            $\te&#123;km&#125;/\te&#123;s&#125;$
          </Math>
          {" "}
          or km/hour, etc, depends on the exact units involved.)
        </VerticalChunk>
        <VerticalChunk indent={true}>
          Terminology-wise, slopes are often known as
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          rates of change
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          in the presence of units. More particularly, in the
          common case when the{" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -axis
          </NoBreak>
          {" "}denotes time, the
          formula
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$\te&#123;slope&#125; = &#123;\te&#123;rise&#125; \over \te&#123;run&#125;&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          can be rephrased as
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$\te&#123;“&#125;\rt&#123;0.1&#125;\te&#123;rate of change&#125; \,\,=\,\,
          &#123;\!\rt&#123;0.15&#125;\te&#123;amount of change&#125;\!\rt&#123;0.1&#125; \over \te&#123;amount of time&#125;&#125;\rt&#123;0.1&#125;\te&#123;”&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          where “amount of change” is short for “amount of
          change on the{" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -axis”.
          </NoBreak>
          {" "}By extension, taking all
          three permutations of the slope formula into account
          gives us...
        </VerticalChunk>
        <Pause />
        <Image src="/images/53.svg" />
        <Pause />
        <VerticalChunk>
          ...these formulas, commonly useful in “applied”
          problems.
        </VerticalChunk>
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 3.
            </b>
            {" "}
            The increase in height of the above balloon
            over a period of 5 seconds is
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$
            0.75\te&#123;m&#125;/\te&#123;s&#125; \times 5\te&#123;s&#125; = 3.75\te&#123;m&#125;
            $$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            following the template
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$
            \begin&#123;array&#125;&#123;c&#125;
            \rt&#123;0.08&#125;
            (\te&#123;rate of change&#125;) \times \te&#123;(amount of time)&#125;\\
            = \te&#123;(amount of change)&#125;\rt&#123;0.05&#125;
            \end&#123;array&#125;
            $$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            found in the second line of the table. (Indeed,
            {" "}
            <NoBreak>
              <Math>
                $0.75$
              </Math>
              m
            </NoBreak>
            {" "}{" "}
            <NoBreak>
              <Math>
                $/$
              </Math>
              s
            </NoBreak>
            {" "}is the “rate of change” of the
            balloon's height.)
          </VerticalChunk>
        </Example>
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 4.
            </b>
            {" "}
            The amount of time required
            for the balloon to go up by (say){" "}
            <NoBreak>
              <Math>
                $4$
              </Math>
              m
            </NoBreak>
            {" "}is
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$
            \frac&#123;4\te&#123;m&#125;&#125;&#123;0.75\te&#123;m&#125;/\te&#123;s&#125;&#125;\! = 5.3333...\te&#123;s&#125;
            $$
            <ImageRight
              style="width:930px"
              offset_x="-6rem"
              src="/images/svg_ch2_ch_units_cloud.svg" />
          </MathBlock>
          <Pause />
          <VerticalChunk>
            following the template
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$
            \te&#123;“&#125;\rt&#123;0.1&#125;
            \te&#123;amount of time&#125; \,\,=\,\, \frac&#123;\!\rt&#123;0.15&#125;\te&#123;amount of change&#125;\!\rt&#123;0.1&#125;&#125;&#123;\te&#123;rate of change&#125;&#125;
            \rt&#123;0.1&#125;\te&#123;”&#125;
            $$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            found in the third line of the table.
          </VerticalChunk>
        </Example>
      </Section>
      <Pause />
      <Section divider={false}>
        <VerticalChunk>
          <b>
            Postscript: Units vs Dimensions.
          </b>
          {" "}
          Comparing
        </VerticalChunk>
        <Pause />
        <CentralDisplay>
          “the{" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -axis
          </NoBreak>
          {" "}has dimensions of time”
        </CentralDisplay>
        <Pause />
        <VerticalChunk>
          with
        </VerticalChunk>
        <Pause />
        <CentralDisplay>
          “the{" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -axis
          </NoBreak>
          {" "}has units of seconds”
        </CentralDisplay>
        <Pause />
        <VerticalChunk>
          one could easily be tricked into thinking that a
          “dimension” is the same thing as a “unit”. In
          fact, dimensions are broader categories, such as,
          namely,
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          time
        </CentralDisplayItalic>
        <Pause />
        <CentralDisplayItalic>
          length
        </CentralDisplayItalic>
        <Pause />
        <CentralDisplayItalic>
          mass
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          each of which covers{" "}
          <i>
            several different
          </i>
          {" "}units.
          For example, in the “time” dimension, one finds
          individual units of the type
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          years, seconds, minutes, hours, days
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          (etc), while in
          the “length” dimension one finds
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          meters, kilometers, millimeters, yards, feet
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          (etc), and so on. (You can imagine some of the
          units found in the “mass” dimension, e.g..) On
          the other hand, dimensions can be multiplied and
          divided just like units. For example,
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          length over time
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          is another dimension, commonly known as...
          velocity!
        </VerticalChunk>
      </Section>
      <Pause />
      <Exercises labels={["0", "1", "2", "3"]}>
        <Exercise exercise_number={1}>
          <VerticalChunk>
            <b>
              Exercise 1.
            </b>
            {" "}
            True or false: Lines of slope{" "}
            <Math>
              $-1 \over 2$
            </Math>
            {" "}
            are perpendicular to lines of slope{" "}
            <NoBreak>
              <Math>
                $2$
              </Math>
              .
            </NoBreak>
          </VerticalChunk>
          <Pause />
          <Solution solution_number={1}>
            <VerticalChunk>
              This is true, as illustrated by the following
              pair of lines:
            </VerticalChunk>
            <Pause />
            <Image
              class="relative w-fit"
              src="/images/55.svg">
              <ImageRight
                offset_x="-1.3rem"
                offset_y="5rem"
                src="/images/56.svg" />
              <ImageLeft
                offset_y="8rem"
                offset_x="-8rem"
                src="/images/57.svg" />
            </Image>
            <Pause />
            <VerticalChunk>
              In more detail, the two triangles are related
              by a{" "}
              <Math>
                $90^\circ$
              </Math>
              {" "}rotation and so, likewise,
              are the lines defined by their hypotenuses!
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                More generally, a line of slope{" "}
                <Math>
                  $p$
                </Math>
                {" "}is
                perpendicular to a line of slope{" "}
                <NoBreak>
                  <Math>
                    $-1/p$
                  </Math>
                  ,
                </NoBreak>
                {" "}for
                all{" "}
                <NoBreak>
                  <Math>
                    $p \ne 0$
                  </Math>
                  .
                </NoBreak>
                {" "}By a similar drawing:
              </VerticalChunk>
              <Pause />
              <Image
                class="relative w-fit"
                src="/images/58.svg">
                <ImageRight
                  offset_x="-10%"
                  offset_y="27%"
                  src="/images/59.svg" />
                <ImageLeft
                  offset_y="33%"
                  offset_x="-24%"
                  src="/images/60.svg" />
              </Image>
              <StarDivider />
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={2}>
          <VerticalChunk>
            <b>
              Exercise 2.
            </b>
            {" "}
            Find the general equation of a line of slope
            {" "}
            <Math>
              $p$
            </Math>
            {" "}passing through a point{" "}
            <NoBreak>
              <Math>
                $(x_0, y_0)$
              </Math>
              .
            </NoBreak>
            {" "}
            (Hint: Start from the slope formula.)
          </VerticalChunk>
          <Pause />
          <Solution solution_number={2}>
            <VerticalChunk>
              A point{" "}
              <Math>
                $(x,y) \ne (x_0,y_0)$
              </Math>
              {" "}is on the
              line of slope{" "}
              <Math>
                $p$
              </Math>
              {" "}if and only if
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$ p = &#123;y - y_0 \over x - x_0&#125; $$
              <ImageLeft
                offset_y="103px"
                offset_x="7.5em"
                src="/images/svg_ch2_ex_x0_y0_line_equation_cloud.svg" />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              because
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$ \,\,&#123;y - y_0 \over x - x_0&#125; $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is the slope of the line segment from
              {" "}
              <Math>
                $(x_0,y_0)$
              </Math>
              {" "}to{" "}
              <NoBreak>
                <Math>
                  $(x,y)$
                </Math>
                ,
              </NoBreak>
              {" "}and it is necessary
              and sufficient for this segment to have slope
              {" "}
              <Math>
                $p$
              </Math>
              {" "}in order for the point{" "}
              <Math>
                $(x,y)$
              </Math>
              {" "}to be on
              the line!
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Unfortunately, the equation
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$ p = &#123;y - y_0 \over x - x_0&#125; $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is not an entirely satisfactory answer,
              because the point{" "}
              <Math>
                $(x,y) = (x_0,y_0)$
              </Math>
              {" "}itself
              does not satisfy the equation. (We find
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$ p = &#123;0 \over 0&#125; $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              if we plug in{" "}
              <NoBreak>
                <Math>
                  $x = x_0$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $y = y_0$
                </Math>
                ,
              </NoBreak>
              {" "}which is
              not a valid equality because the right-hand
              side is an undefined quantity.)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Instead, multiplying
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              p = &#123;y - y_0 \over x - x_0&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              on both sides by{" "}
              <NoBreak>
                <Math>
                  $x-x_0$
                </Math>
                ,
              </NoBreak>
              {" "}we find the
              fraction-less equation
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              p(x-x_0) = y-y_0
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              which is satisfied by the point{" "}
              <Math>
                $(x,y) = (x_0,y_0)$
              </Math>
              {" "}
              as well as by every other point on the line.
              This can be a final answer, and, pleasingly,
              has the form
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \te&#123;“&#125;\te&#123;slope&#125; \times \te&#123;run&#125; = \te&#123;rise&#125;\te&#123;”&#125;
              $$
              <ImageRight
                offset_y="-0.5rem"
                offset_x="2.5rem"
                src="/images/svg_slope_times_run_equals_rise_cloud.svg" />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              which can also make it easy to remember!
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}
              The answer we gave is more often written
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              y - y_0 = p(x - x_0)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              with the two sides of the equation swapped, or
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              y = p(x - x_0) + y_0
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              with{" "}
              <Math>
                $y$
              </Math>
              {" "}isolated on the left-hand side. From
              there one can also distribute{" "}
              <NoBreak>
                <Math>
                  $p(x-x_0)$
                </Math>
                ,
              </NoBreak>
              {" "}
              obtaining (after putting{" "}
              <NoBreak>
                “
                <Math>
                  $-px_0$
                </Math>
                ”
              </NoBreak>
              {" "}last)
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              y = px + y_0 - px_0
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              which has the form
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              y = ax + b
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              with{" "}
              <NoBreak>
                <Math>
                  $a = p$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $b = y_0 - px_0$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={3}>
          <VerticalChunk>
            <b>
              Exercise 3.
            </b>
            {" "}
            Plot the vertical velocity of{" "}
            <del>
              an object
            </del>
            {" "}a mosquito whose height over time is 
            given by this graph (use the same time interval 
            as the graph):
          </VerticalChunk>
          <Pause />
          <Image src="/images/1.svg" />
          <Pause />
          <Solution solution_number={3}>
            <VerticalChunk>
              Here is the “official” graph of the (vertical)
              velocity:
            </VerticalChunk>
            <Pause />
            <Image src="/images/64.svg" />
            <Pause />
            <VerticalChunk>
              On each interval, the velocity is rate of
              change of the height, i.e., the{" "}
              <i>
                slope
              </i>
              {" "}of
              the height. For example, the rate of change
              of the height is
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              &#123;1\te&#123;m&#125; \over 1\te&#123;s&#125;&#125; = 1\te&#123;m&#125;/\te&#123;s&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              between{" "}
              <NoBreak>
                <Math>
                  $-4$
                </Math>
                s
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $-3$
                </Math>
                s,
              </NoBreak>
              {" "}where the mosquito
              goes up by one meter during a one second
              period, so the vertical velocity is{" "}
              <NoBreak>
                1m
                <Math>
                  $/$
                </Math>
                s
              </NoBreak>
              {" "}
              for that time interval, etc.
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}
              As explained in Chapter 3, an empty circle of
              this type
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_empty_circle_alone.svg" />
            <Pause />
            <VerticalChunk>
              indicates a “missing” value. Specifically, in
              our case, the vertical velocity is{" "}
              <i>
                undefined
              </i>
              {" "}
              wherever the graph of the height has a sharp
              corner. (Because the slope of the graph is not
              well-defined at such corners.)
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 2.
              </i>
              {" "}
              For the time interval from{" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                s
              </NoBreak>
              {" "}to{" "}
              <NoBreak>
                <Math>
                  $2.5$
                </Math>
                s,
              </NoBreak>
              {" "}the
              slope is
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$ &#123;-2\rt&#123;0.05&#125;\te&#123;m&#125; \over 0.5\rt&#123;0.05&#125;\te&#123;s&#125;&#125; = -\rt&#123;0.07&#125;4\rt&#123;0.1&#125;\te&#123;m&#125;/\te&#123;s&#125; $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and similarly for the time interval from
              {" "}
              <NoBreak>
                <Math>
                  $2.5$
                </Math>
                s
              </NoBreak>
              {" "}to{" "}
              <NoBreak>
                <Math>
                  $3$
                </Math>
                s
              </NoBreak>
              {" "}the slope is
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$ &#123;2\rt&#123;0.05&#125;\te&#123;m&#125; \over 0.5\rt&#123;0.05&#125;\te&#123;s&#125;&#125; = 4\rt&#123;0.1&#125;\te&#123;m&#125;/\te&#123;s&#125; $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              because{" "}
              <NoBreak>
                <Math>
                  $2/0.5 = 4$
                </Math>
                .
              </NoBreak>
              {" "}(Think:{" "}
              <i>
                how many times
              </i>
              {" "}
              does{" "}
              <Math>
                $0.5$
              </Math>
              {" "}go into{" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                ?)
              </NoBreak>
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={4}>
          <VerticalChunk>
            <b>
              Exercise 4.
            </b>
            {" "}
            Digressing on the second-to-last equation
            in the solution to Exercise 2, explain why
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$ y_0 - px_0 $$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            is the{" "}
            <NoBreak>
              <Math>
                $y$
              </Math>
              -intercept
            </NoBreak>
            {" "}of the line of slope{" "}
            <Math>
              $p$
            </Math>
            {" "}
            through the point{" "}
            <Math>
              $(x_0,y_0)$
            </Math>
            {" "}by using a drawing
            and “rise equals slope times run”.
          </VerticalChunk>
          <Pause />
          <Solution solution_number={4}>
            <VerticalChunk>
              E.g.:
            </VerticalChunk>
            <Pause />
            <Image src="/images/66.svg" />
            <Pause />
            <VerticalChunk>
              The rise from the{" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -intercept
              </NoBreak>
              {" "}to{" "}
              <Math>
                $(x_0, y_0)$
              </Math>
              {" "}
              is{" "}
              <NoBreak>
                <Math>
                  $px_0$
                </Math>
                ,
              </NoBreak>
              {" "}as found by “rise equals slope times
              run”, implying that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              y_0 - px_0
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is the{" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -intercept.
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}Our drawing makes some implicit
              assumptions, such as{" "}
              <Math>
                $p &gt; 0$
              </Math>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $x_0 &gt; 0$
                </Math>
                .
              </NoBreak>
              {" "}But
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$ px_0 $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is the rise from the{" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -intercept
              </NoBreak>
              {" "}to
              {" "}
              <Math>
                $(x_0, y_0)$
              </Math>
              {" "}regardless of the sign of{" "}
              <Math>
                $p$
              </Math>
              {" "}or
              {" "}
              <Math>
                $x_0$
              </Math>
              {" "}(because{" "}
              <Math>
                $x_0$
              </Math>
              {" "}is the run in all cases),
              making
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$ y_0 - px_0 $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              the{" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -intercept
              </NoBreak>
              {" "}in all cases.
            </VerticalChunk>
          </Solution>
        </Exercise>
      </Exercises>
    </Chapter>
  );
};

export default Article;