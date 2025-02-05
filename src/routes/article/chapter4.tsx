import Chapter from "~/components/Chapter";
import { Section, Example, NoBreak, CustomBlock, Pause, WriterlyBlankLine } from "~/components/Wrappers";
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
      number={4}
      title="Derivatives">
      <Image src="/images/svg_ch4_ch_polaroids.svg" />
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Definitions.
          </b>
          {" "}
          The{" "}
          <i>
            derivative
          </i>
          {" "}of a function
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$f : \rr \ra \rr $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is a (new) function
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$f' : \rr \ra \rr$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          that gives the slope of{" "}
          <Math>
            $f$
          </Math>
          {" "}at each point. 
          In other words
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$f'(a)$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is the slope of the graph{" "}
          <Math>
            $y = f(x)$
          </Math>
          {" "}at
          {" "}
          <NoBreak>
            <Math>
              $x = a$
            </Math>
            .
          </NoBreak>
          {" "}And—surprise!—each pair of graphs
          above is a pair of the form{" "}
          <Math>
            $y = f(x)$
          </Math>
          {" "}[
          <Math>
            $=$
          </Math>
          {" "}
          “before”],{" "}
          <Math>
            $y = f'(x)$
          </Math>
          {" "}[
          <Math>
            $=$
          </Math>
          {" "}“after”]. (Meaning,
          the “after” graph records the slope of the 
          “before” graph.) E.g.:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch4_explanation1.svg" />
        <Pause />
        <VerticalChunk>
          Note that{" "}
          <Math>
            $f'\!$
          </Math>
          {" "}(read “
          <Math>
            $f$
          </Math>
          {" "}prime”) remains 
          undefined where{" "}
          <Math>
            $y = f(x)$
          </Math>
          {" "}has a sharp “corner” 
          and no well-defined slope. By opposition, if 
          there is a well-defined tangent line to 
          {" "}
          <Math>
            $y = f(x)$
          </Math>
          {" "}at{" "}
          <Math>
            $x = a$
          </Math>
          {" "}the slope of this
          tangent line supplies the value of{" "}
          <Math>
            $f'(a)$
          </Math>
          :
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch4_explanation2.svg">
          <ImageRight
            src="/images/svg_ch4_explanation2_cloud.svg"
            offset_x="-13em"
            offset_y="-17em" />
        </Image>
        <Pause />
        <VerticalChunk>
          In fact, we can
          succinctly describe the derivative by...
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$f'(a) = \te&#123;[slope of tangent line to $y = f(x)$ at $x = a$]&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          ...with the understanding that{" "}
          <Math>
            $f'(a)$
          </Math>
          {" "}is 
          undefined if a tangent line does not exist 
          or if the tangent is vertical. But for one 
          last asterisk—and speaking of the existence,
          or not, of the tangent—note that the endpoint
          of a curve does not count as having a tangent,
          and therefore leaves a missing value for the 
          derivative:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch4_explanation_one_sided_tangent.svg" />
        <Pause />
        <VerticalChunk>
          (In other words, “half-tangents” do not actually 
          count as tangents.)
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Vocabulary.
          </b>
          {" "}
          A function{" "}
          <Math>
            $f : \rr \ra \rr$
          </Math>
          {" "}is
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          differentiable
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          if{" "}
          <NoBreak>
            <Math>
              $\dom\,f' = \dom\,f$
            </Math>
            .
          </NoBreak>
          {" "}Also, if{" "}
          <NoBreak>
            <Math>
              $a, b \in \rr$
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <NoBreak>
            <Math>
              $a &lt; b$
            </Math>
            ,
          </NoBreak>
          {" "}{" "}
          <Math>
            $f$
          </Math>
          {" "}is
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          differentiable on{" "}
          <Math>
            $[a,b]$
          </Math>
          {" "}{" "}
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          if{" "}
          <NoBreak>
            <Math>
              $[a,b] \subseteq \dom \,f'$
            </Math>
            .
          </NoBreak>
          {" "}Lastly,{" "}
          <Math>
            $f$
          </Math>
          {" "}is
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          differentiable at{" "}
          <Math>
            $a$
          </Math>
          {" "}{" "}
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          if{" "}
          <Math>
            $a \in \dom\,f'$
          </Math>
          .
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Sketching a Derivative.
          </b>
          {" "}
          Say that you would like to sketch the derivative
          of the “before” function from the last “before”/“after” pair above
          (the one with the closed endpoints):
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch4_curve_to_sketch.svg" />
        <Pause />
        <VerticalChunk>
          One method is simply to eyeball the slope at 
          a few points along the curve, plot these 
          values and interpolate:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch4_first_derivative_sketch.svg">
          <ImageRight src="/images/svg_ch4_polaroid_cloud.svg" />
        </Image>
        <Pause />
        <VerticalChunk>
          ...voilà!
        </VerticalChunk>
        <VerticalChunk indent={true}>
          An alternate approach is to start by
          determining intervals on which the derivative
          is positive and negative, and then to 
          interpolate via the largest (respectively, 
          smallest) value of the derivative in each 
          interval:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch4_second_derivative_sketch_pt1.svg" />
        <Pause />
        <Image src="/images/svg_ch4_second_derivative_sketch_pt2.svg" />
        <Pause />
        <VerticalChunk>
          The result (at bottom right)
          is a charming “robosketch” of the true
          derivative! (Well, charming in our opinion,
          at least.)
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Derivative of a constant function.
          </b>
          {" "}
          A constant function is a function of the form
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$x \ra B$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          for some{" "}
          <Math>
            $B \in \rr$
          </Math>
          {" "}independent of{" "}
          <Math>
            $x$
          </Math>
          .
          The graph of the constant function is the line
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$y = B$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          of slope{" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            .
          </NoBreak>
          {" "}So
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$(x \ra B)' = (x \ra 0)$$
          <ImageLeft src="/images/svg_ch4_constant_derivative_cloud.svg" />
        </MathBlock>
        <Pause />
        <VerticalChunk>
          because at each{" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -value
          </NoBreak>
          {" "}you find a slope of
          {" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            ,
          </NoBreak>
          {" "}when you look up (down?) at the graph.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          If we refer to
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$x \ra 0$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          as the
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          zero function
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          we can summarize the situation by saying that
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          ~ the derivative of a constant function
          is the zero function ~
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          or, more shortly,
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          ~ the derivative of a constant is zero ~
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          (the way people usually state it).
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Derivative of an affine function.
          </b>
          {" "}
          An affine function is a function of the form
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$x \ra Ax + B$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          for constants{" "}
          <NoBreak>
            <Math>
              $A$
            </Math>
            ,
          </NoBreak>
          {" "}{" "}
          <Math>
            $B \in \rr$
          </Math>
          .
          The graph of{" "}
          <Math>
            $x \ra Ax + B$
          </Math>
          {" "}is a line of 
          slope{" "}
          <NoBreak>
            <Math>
              $A$
            </Math>
            ,
          </NoBreak>
          {" "}so
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$(x \ra Ax + B)' = (x \ra A)$$
          <ImageLeft src="/images/svg_ch4_affine_derivative_cloud.svg" />
        </MathBlock>
        <Pause />
        <VerticalChunk>
          because the slope of a line of slope{" "}
          <Math>
            $A$
          </Math>
          {" "}is
          {" "}
          <NoBreak>
            <Math>
              $A$
            </Math>
            ,
          </NoBreak>
          {" "}no matter where you put yourself on the
          line. In particular,{" "}
          <Math>
            $B$
          </Math>
          {" "}plays no role in the
          derivative! (
          <NoBreak>
            <Math>
              $\,$
            </Math>
            Just
          </NoBreak>
          {" "}like in the case of a
          constant function, the derivative leaves no
          trace of{" "}
          <NoBreak>
            <Math>
              $B$
            </Math>
            's
          </NoBreak>
          {" "}value—and for the same reason
          that{" "}
          <Math>
            $B$
          </Math>
          {" "}effects a vertical translation, which
          does not change the slope of anything.)
        </VerticalChunk>
        <VerticalChunk indent={true}>
          In words:
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          ~ the derivative of the affine function 
          {" "}
          <Math>
            $y = ax + b$
          </Math>
          {" "}is the constant function{" "}
          <Math>
            $y = a$
          </Math>
          {" "}~
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          Or, flexing our linguistic prowess a tad more:
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          ~ the derivative of an affine function is 
          the coefficient of its linear term ~
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          (The “linear term” of{" "}
          <Math>
            $y = ax + b$
          </Math>
          {" "}is{" "}
          <NoBreak>
            <Math>
              $ax$
            </Math>
            ,
          </NoBreak>
          {" "}
          of coefficient{" "}
          <Math>
            $a$
          </Math>
          .)
        </VerticalChunk>
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 1.
            </b>
            {" "}
            One has
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$(x \ra 3x + 1)' = (x \ra 3)$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            as per
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$(x \ra Ax + B)' = (x \ra A)$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            with{" "}
            <NoBreak>
              <Math>
                $A = 3$
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <Math>
              $B = 1$
            </Math>
            .
          </VerticalChunk>
        </Example>
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 2.
            </b>
            {" "}
            One has
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$(x \ra 12 - x)' = (x \ra -1)$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            as per
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$(x \ra Ax + B)' = (x \ra A)$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            with{" "}
            <NoBreak>
              <Math>
                $A = -1$
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <Math>
              $B = 12$
            </Math>
            .
          </VerticalChunk>
        </Example>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Units of the Derivative.
          </b>
          {" "}
          If units are present, we have
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$\te&#123;$y$ axis units for $f'$&#125; \,= &#123;\te&#123;$y$ axis units for $\f$&#125; \over \te&#123;$x$ axis units for $\f$&#125;&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          because a value output by{" "}
          <Math>
            $\f'$
          </Math>
          {" "}is the
          {" "}
          <i>
            slope
          </i>
          {" "}of a tangent line attached to the
          graph{" "}
          <NoBreak>
            <Math>
              $y = f(x)$
            </Math>
            ,
          </NoBreak>
          {" "}and
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$\te&#123;$x$ axis units for $f'$&#125;\, = \rt&#123;0.02&#125;\,\te&#123;$x$ axis units for $f$&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          because an input for{" "}
          <Math>
            $\f'$
          </Math>
          {" "}is, originally, 
          an input for{" "}
          <Math>
            $\f$
          </Math>
          .
        </VerticalChunk>
        <VerticalChunk indent={true}>
          For example, if the “before” graph has units 
          of...
        </VerticalChunk>
        <ul>
          <li>
            seconds on the{" "}
            <Math>
              $x$
            </Math>
            {" "}axis, meters on the 
            {" "}
            <Math>
              $y$
            </Math>
            {" "}axis
          </li>
        </ul>
        <ImageRight src="/images/svg_ch4_units1_cloud.svg" />
        <VerticalChunk>
          ...then the “after” graph will have units of...
        </VerticalChunk>
        <ul>
          <li>
            seconds on the{" "}
            <Math>
              $x$
            </Math>
            {" "}axis, meters per
            second on the{" "}
            <Math>
              $y$
            </Math>
            {" "}axis
          </li>
        </ul>
        <VerticalChunk>
          ...while if the “before” graph has units of...
        </VerticalChunk>
        <ul>
          <li>
            years on the{" "}
            <Math>
              $x$
            </Math>
            {" "}axis, dollars on the
            {" "}
            <Math>
              $y$
            </Math>
            {" "}axis
          </li>
        </ul>
        <ImageLeft src="/images/svg_ch4_units2_cloud.svg" />
        <VerticalChunk>
          ...then the “after” graph will have units of...
        </VerticalChunk>
        <ul>
          <li>
            years on the{" "}
            <Math>
              $x$
            </Math>
            {" "}axis, dollars per
            year on the{" "}
            <Math>
              $y$
            </Math>
            {" "}axis
          </li>
        </ul>
        <VerticalChunk>
          ...and so on.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          Units might additionally prompt us to refer
          to{" "}
          <Math>
            $f'$
          </Math>
          {" "}as the
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          rate of change
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          of{" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            ,
          </NoBreak>
          {" "}or, depending, as the
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          instantaneous
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          rate of change of{" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            .
          </NoBreak>
          {" "}The latter bit of
          emphasis has to do with the fact that, in a
          general graph, the slope of the tangent
          keeps changing from point to point.
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            The second derivative.
          </b>
          {" "}
          The{" "}
          <i>
            second derivative
          </i>
          {" "}of{" "}
          <Math>
            $f$
          </Math>
          {" "}is the derivative
          of the derivative of{" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            .
          </NoBreak>
          {" "}It is written “
          <Math>
            $f''$
          </Math>
          ”:
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$\,\,\,f'' = (f')'.$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          Likewise, we have, e.g.,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$\begin&#123;align&#125;
          \up&#123;0.95&#125;f''' &= (f'')'\\
          \up&#123;1.25&#125;f'''' &= (f''')'\\
          \up&#123;1.25&#125;f''''\psa' &= (f'''')'\\
          \end&#123;align&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          these being, namely, the{" "}
          <i>
            third
          </i>
          ,{" "}
          <i>
            fourth
          </i>
          {" "}
          and{" "}
          <i>
            fifth
          </i>
          {" "}derivatives of{" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            .
          </NoBreak>
          {" "}One can also 
          write
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$f^&#123;(n)&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          for the{" "}
          <NoBreak>
            <Math>
              $n$
            </Math>
            -th
          </NoBreak>
          {" "}derivative of{" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            ,
          </NoBreak>
          {" "}so that, for
          example,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$f^&#123;(7)&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          means the same as
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$f'''''''$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          but with the advantage that you don't have to
          squint and start re-counting the apostrophes 
          several times over.
        </VerticalChunk>
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 3.
            </b>
            {" "}
            We have
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$(x \ra 3x + 1)'' = (x \ra 0)$$
            <ImageRight src="/images/svg_ch4_3x_plus_one_and_second_cloud.svg" />
          </MathBlock>
        </Example>
        <Pause />
        <VerticalChunk>
          because, firstly,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$(x \ra 3x + 1)' = (x \ra 3)$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          and, secondly,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$(x \ra 3)' = (x \ra 0)$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          so that, from start to finish,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$(x \ra 3x + 1)'' =  ((x \ra 3x + 1)')' = (x \ra 3)' = (x \ra 0)$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          where we unpeel the onion starting from the
          inside. (Physically difficult.)
        </VerticalChunk>
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 4.
            </b>
            {" "}
            More generally,
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$\,\,\,(x \ra ax + b)'' = (x \ra 0)$$
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
            {" "}by a similar computation;
            a.k.a.:
          </VerticalChunk>
          <Pause />
          <CentralDisplayItalic>
            ~ the second derivative of an affine function is zero ~
          </CentralDisplayItalic>
          <Pause />
          <VerticalChunk>
            <ImageLeft src="/images/svg_ch4_adding_statements_cloud.svg" />
          </VerticalChunk>
        </Example>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Geometric interpretation of the second derivative.
          </b>
          {" "}
          The sign of the second derivative—whether
          it is positive or negative—indicates whether
          a graph is “bending upwards” or “bending 
          downwards”. Upward-bending graphs have a positive
          second derivative, whereas downward-bending graphs
          have a negative second derivative:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch4_bendiness.svg" />
        <Pause />
        <VerticalChunk>
          Reason like this: the second derivative is{" "}
          <del>
            “the rate of change of the rate of change”.
          </del>
          Sorry: “the rate of change of the slope”. 
          (Same difference.) Ergo, if the second derivative
          is positive, the slope is increasing; if the
          second derivative is negative, the slope is 
          decreasing. Moreover, an
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          increasing
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          slope gives curves a “bending upwards” shape, while a
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          decreasing
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          slope gives curves a “bending downward” shape!
        </VerticalChunk>
        <VerticalChunk indent={true}>
          To emphasize, if the second derivative is some
        </VerticalChunk>
        <Pause />
        <CentralDisplay>
          LARGE POSITIVE NUMBER
        </CentralDisplay>
        <Pause />
        <VerticalChunk>
          then the slope is increasing at that rate, 
          which could result in a sharp bend upwards
          in the graph (unless you are near vertical
          already—you can't see the difference between
          slope{" "}
          <Math>
            $100$
          </Math>
          {" "}and slope{" "}
          <Math>
            $1000$
          </Math>
          {" "}very well, at most
          scales—nor between{" "}
          <Math>
            $-1000$
          </Math>
          {" "}and{" "}
          <NoBreak>
            <Math>
              $-100$
            </Math>
            ,
          </NoBreak>
          {" "}for that
          matter).
        </VerticalChunk>
        <VerticalChunk indent={true}>
          Likewise, if the second derivative is some
        </VerticalChunk>
        <Pause />
        <CentralDisplay>
          LARGE NEGATIVE NUMBER
        </CentralDisplay>
        <Pause />
        <VerticalChunk>
          then the slope is decreasing at [the absolute 
          value of] that rate, which could result in 
          a sharp bend downwards in the graph (unless
          you are near vertical already, once again,
          because verticality can disguise the presence
          of a significant change in slope, once again).
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Vocabulary #1.
          </b>
          {" "}
          Curves with increasing (technically: 
          {" "}
          <i>
            nondecreasing
          </i>
          ) slope are called{" "}
          <i>
            convex
          </i>
          , 
          while curves with decreasing (technically: 
          {" "}
          <i>
            nonincreasing
          </i>
          ) slope are called{" "}
          <i>
            concave
          </i>
          .
          Viz:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch4_convex_concave.svg" />
        <Pause />
        <VerticalChunk>
          <b>
            Vocabulary #2.
          </b>
          {" "}
          An{" "}
          <i>
            inflection point
          </i>
          {" "}is a point at the
          interface between convex and concave sections
          of a graph:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch4_inflection_point.svg" />
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 5.
            </b>
            {" "}
            The fact that
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$(x \ra 3x + 1)'' = (x \ra 0)$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            indicates that the graph
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$y = 3x + 1$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            is neither “bending upwards” nor “bending 
            downwards”—
            <Math>
              $0$
            </Math>
            {" "}is neither positive, nor negative.
          </VerticalChunk>
        </Example>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            The Second Derivative of Position.
          </b>
          {" "}
          A graph of the form...
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch4_position_by_time.svg" />
        <Pause />
        <VerticalChunk>
          ...describes{" "}
          <i>
            position as a function of time
          </i>
          {" "}
          (look at the units); the derivative...
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch4_position_by_time_der.svg">
          <ImageRight src="/images/svg_ch4_position_by_time_cloud.svg" />
        </Image>
        <Pause />
        <VerticalChunk>
          ...describes{" "}
          <i>
            velocity as a function of time
          </i>
          ;
          finally, the second derivative...
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch4_position_by_time_der_der.svg">
          <ImageLeft src="/images/svg_ch4_position_by_time_der_cloud.svg" />
        </Image>
        <Pause />
        <VerticalChunk>
          ...describes
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          the rate of change of velocity
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          also known as the
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          acceleration
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          as a function of time.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          Note that the units on the{" "}
          <Math>
            $y$
          </Math>
          {" "}axis of the
          second derivative are given by
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$&#123;\te&#123;$y$ axis units for $f'$&#125; \over \te&#123;$x$ axis units for $f'$&#125;&#125; = 
          &#123;\te&#123;m&#125;/\te&#123;s&#125; \over \te&#123;s&#125;&#125; = 
          &#123;\te&#123;m&#125; \over \rt&#123;0.1&#125;\te&#123;s&#125;\!&#123;\,&#125;^2&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          because{" "}
          <NoBreak>
            <Math>
              $f'' = (f')'$
            </Math>
            .
          </NoBreak>
          {" "}The point is, a tangent
          to the graph{" "}
          <Math>
            $y = f'(t)$
          </Math>
          {" "}has a “rise” measured
          in meters per second and a “run” measured in 
          seconds:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch4_position_by_time_tangent.svg" />
        <Pause />
        <VerticalChunk>
          The ratio “rise over run” has the form
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$&#123;\te&#123;m&#125;/\te&#123;s&#125; \over \te&#123;s&#125;&#125; 
          = &#123;\te&#123;m&#125; \over \te&#123;s&#125;&#125; \times &#123;1 \over \te&#123;s&#125;&#125;
          = &#123;\te&#123;m&#125; \over \te&#123;s&#125;\!&#123;\,&#125;^2&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          which produces the above-mentioned units of
          the second derivative. Also note that a ratio of
          the form
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$&#123;\te&#123;difference in velocity&#125; \over \te&#123;amount of time&#125;&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is, indeed, an acceleration, in that acceleration
          is defined as “the increase in velocity per unit 
          time”.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          To summarize:
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          ~ velocity is the derivative of position ~
        </CentralDisplayItalic>
        <Pause />
        <CentralDisplayItalic>
          ~ acceleration is the derivative of velocity ~
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          <StarDivider />
          {" "}{" "}
          <b>
            Note.
          </b>
          {" "}
          The exotic units
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$%\left[&#123;\te&#123;m&#125; \over \,\te&#123;s&#125;\!&#123;\,&#125;^2&#125;\right]
          &#123;\te&#123;m&#125; \over \,\te&#123;s&#125;\!&#123;\,&#125;^2&#125;
          %\te&#123;m&#125;/\te&#123;s&#125;\!&#123;\,&#125;^2$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          can be read
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          meters per second squared
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          which sounds pretty cryptic, unfortunately, or
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          meters per second per second
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          which is better, or (slight difference!)
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          meters per second, per second
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          which is even better because it “shows” acceleration
          to be a number of m
          <NoBreak>
            <Math>
              $/$
            </Math>
            s
          </NoBreak>
          {" "}per second. (Acceleration{" "}
          <i>
            is
          </i>
          {" "}
          a number of m
          <NoBreak>
            <Math>
              $/$
            </Math>
            s
          </NoBreak>
          {" "}per second, no?)
        </VerticalChunk>
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 6.
            </b>
            {" "}
            Over a period of{" "}
            <NoBreak>
              <Math>
                $10$
              </Math>
              s,
            </NoBreak>
            {" "}an object that is
            accelerating at a constant rate of
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$2&#123;\te&#123;m&#125;/\te&#123;s&#125;\!&#123;\,&#125;^2&#125;$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            increases its velocity by
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$(2&#123;\te&#123;m&#125;/\te&#123;s&#125;\!&#123;\,&#125;^2&#125;) \times\, (10\te&#123;s&#125;) = 20&#123;\te&#123;m&#125;/\te&#123;s&#125;&#125;$$
            <ImageRight src="/images/svg_ch4_unit_cancellation_cloud.svg" />
          </MathBlock>
          <Pause />
          <VerticalChunk>
            according to the template
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$(\te&#123;rate of change&#125;) \times \te&#123;(amount of time)&#125;\\
            = \te&#123;(amount of change)&#125;$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            or, more specifically,
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$(\te&#123;acceleration&#125;) \times (\te&#123;amount of time&#125;) =\\ (\te&#123;change in velocity&#125;)$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            since acceleration is the rate of change of
            velocity.
          </VerticalChunk>
        </Example>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            The Jerk.
          </b>
          {" "}
          The rate of change of acceleration has a
          name as well, being known as the
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          jerk
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          in physics. The units of jerk (or “the”
          units of jerk, since any units of same 
          {" "}
          <i>
            dimension
          </i>
          {" "}would do as well) are
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$&#123;\te&#123;m&#125; \over \,\te&#123;s&#125;\!&#123;\,&#125;^3&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          or
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          meters per second, per second, per second
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          which is mildly amusing. Basically, the
          jerk specifies how many{" "}
          <i>
            meters per second,
            per second
          </i>
          {" "}(a measure of acceleration!)
          is being gained or lost{" "}
          <i>
            per second
          </i>
          .
        </VerticalChunk>
        <VerticalChunk indent={true}>
          The word “jerk” is aptly chosen,
          too, considering that people don't lose 
          balance under constant acceleration, but, 
          rather, when some some{" "}
          <i>
            jerk
          </i>
          {" "}occurs in 
          the movement of their train or subway car,
          etc. In fact,
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          constant acceleration
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          and
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          zero jerk
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          are synonymous, insofar as the everyday 
          world is concerned—which is good, because
          these notions are also equivalent in the
          mathematical realm, what with jerk being
          the derivative of acceleration!
        </VerticalChunk>
        <Pause />
        <VerticalChunk>
          <b>
            Postscript: Sums, Products, Quotients,
            and Differences of Functions.
          </b>
          {" "}
          Coming briefly back to Chapter 3-related
          matters, if
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$f, g : \rr \ra \rr$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          then
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$f \circ g = (x \ra f(g(x)))$$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$f + g = (x \ra f(x) + g(x))$$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$fg = (x \ra f(x)g
          (x))$$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$&#123;f/g&#125; = (x \ra &#123;f(x)/g(x)&#125;)$$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$f - g = (x \ra f(x) - g(x))$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          with each equation being a{" "}
          <i>
            definition
          </i>
          . 
          The notation
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$f \circ g$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          goes back to Exercise 5 of Chapter 3, with
          the little circle “
          <NoBreak>
            <Math>
              $\circ$
            </Math>
            ”
          </NoBreak>
          {" "}being known as
          the{" "}
          <i>
            composition operator
          </i>
          , while the sum
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$f + g$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          and product
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$fg$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          of functions already appear in Exercise 18 of
          Chapter 3, also. On the other hand, the quotient
          (i.e.{" "}
          <NoBreak>
            <Math>
              $f/g$
            </Math>
            )
          </NoBreak>
          {" "}and difference (i.e.,{" "}
          <Math>
            $f - g$
          </Math>
          {" "}of
          functions are defined above for the first time.
        </VerticalChunk>
      </Section>
      <Pause />
      <Exercises labels={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40"]}>
        <Exercise exercise_number={1}>
          <VerticalChunk>
            <b>
              Exercise 1.
            </b>
            {" "}
            Sketch the derivative of a function with the
            following graph (what{" "}
            <i>
              looks
            </i>
            {" "}like a sharp
            corner{" "}
            <i>
              is
            </i>
            {" "}a sharp corner):
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch4_slope_one_half_see_saw.svg" />
          <Pause />
          <Solution solution_number={1}>
            <VerticalChunk>
              That would be:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_slope_one_half_see_saw_derivative.svg" />
            <Pause />
            <VerticalChunk>
              (The derivative is{" "}
              <Math>
                $1/2$
              </Math>
              {" "}when the slope is{" "}
              <Math>
                $1/2$
              </Math>
              ,
              is{" "}
              <Math>
                $-1/2$
              </Math>
              {" "}when the slope is{" "}
              <NoBreak>
                <Math>
                  $-1/2$
                </Math>
                ,
              </NoBreak>
              {" "}and is undefined at
              the corners.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={2}>
          <VerticalChunk>
            <b>
              Exercise 2.
            </b>
            {" "}
            Would the derivative of
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$y = &#123;1\over x&#125;$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            be a very large negative number, or a very
            large positive number, near{" "}
            <NoBreak>
              <Math>
                $x = 0$
              </Math>
              ?
            </NoBreak>
            {" "}Or would
            it depend on which side of 0 you are?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={2}>
            <VerticalChunk>
              The graph of{" "}
              <Math>
                $y = &#123;1 \over x&#125;$
              </Math>
              {" "}looks like so:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_one_over_x.svg" />
            <Pause />
            <VerticalChunk>
              As one can see, the slope is very negative
              near{" "}
              <NoBreak>
                <Math>
                  $x = 0$
                </Math>
                ,
              </NoBreak>
              {" "}on either side. So the answer is:
              “very large negative”.
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={3}>
          <VerticalChunk>
            <b>
              Exercise 3.
            </b>
            {" "}
            Sketch the
          </VerticalChunk>
          <Pause />
          <CentralDisplayItalic>
            second
          </CentralDisplayItalic>
          <Pause />
          <VerticalChunk>
            derivative of the graph in Exercise 1.
          </VerticalChunk>
          <Pause />
          <Solution solution_number={3}>
            <VerticalChunk>
              The second derivative is zero wherever the
              first derivative is flat, and is undefined
              wherever the first derivative is undefined;
              this gives the second derivative the following 
              pockmarked appearance:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_slope_one_half_see_saw_second_derivative.svg" />
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}
              Taking even further derivatives produces
              the same graph back, over and over again.
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 2.
              </i>
              {" "}
              “first derivative” is a synonym of “derivative”.
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={4}>
          <VerticalChunk>
            <b>
              Exercise 4.
            </b>
            {" "}
            If we pretend that the graph of Exercise 1
            depicts the{" "}
            <del>
              distance that a car has traveled
              as a function of time,
            </del>
            &ensp;position of a car as a function of 
            time, with hours (hr) on the{" "}
            <NoBreak>
              <Math>
                $x$
              </Math>
              -axis
            </NoBreak>
            {" "}
            and kilometers (km) on the{" "}
            <NoBreak>
              <Math>
                $y$
              </Math>
              -axis,
            </NoBreak>
            {" "}what
            do the units become on the axes of the first
            and second derivatives?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={4}>
            <VerticalChunk>
              The units on the{" "}
              <Math>
                $y$
              </Math>
              {" "}axis become kilometers,
              kilometers per hour, and kilometers per
              hours squared (or “kilometers per hour, per
              hour”), including the first graph. (Each time
              another derivative is taken, divide the
              units of the{" "}
              <Math>
                $y$
              </Math>
              {" "}axis by the units of the 
              {" "}
              <Math>
                $x$
              </Math>
              {" "}axis.) These are the position, velocity,
              and acceleration of the car as a function
              of time:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_slope_one_half_see_saw_with_units.svg" />
            <Pause />
            <Image src="/images/svg_ch4_slope_one_half_see_saw_with_units_derivative.svg" />
            <Pause />
            <Image src="/images/svg_ch4_slope_one_half_see_saw_with_units_second_derivative.svg" />
          </Solution>
        </Exercise>
        <Exercise exercise_number={5}>
          <VerticalChunk>
            <b>
              Exercise 5.
            </b>
            {" "}
            Is the following equation correct, incorrect,
            or nonsensical?
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$(x \ra x + 1) \,+\, (u \ra 2u + 1) \,=\, (t \ra 3t + 2)$$
          </MathBlock>
          <Pause />
          <Solution solution_number={5}>
            <VerticalChunk>
              The equation is true!
              Syntatically,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(x \ra x + 1) \,+\, (u \ra 2u + 1)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is a
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              sum of functions
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              because{" "}
              <Math>
                $x \ra x + 1$
              </Math>
              {" "}and{" "}
              <Math>
                $u \ra 2u + 1$
              </Math>
              {" "}are
              both functions. Now by definition, the sum
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$f + g$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              of functions{" "}
              <Math>
                $f$
              </Math>
              {" "}and{" "}
              <Math>
                $g$
              </Math>
              {" "}is the function
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$x \ra f(x) + g(x)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              that maps a number to the sum of the individual
              values of the functions. So—for example—
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\begin&#123;align&#125;
              & \,\,\,((x \ra x + 1) \,+\, (u \ra 2u + 1))(5) \\
              =& \,\,\,(x \ra x + 1)(5) + (u \ra 2u + 1)(5) \up&#123;1.5&#125; \\
              =& \,\,\,(5 + 1) + (2\cdot 5 + 1) \up&#123;1.5&#125; \\
              =& \,\,\,3\cdot 5 + 2 = 17 \up&#123;1.5&#125;
              \end&#123;align&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and—with a general input{" "}
              <Math>
                $t$
              </Math>
              —
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\begin&#123;align&#125;
              & \,\,\,((x \ra x + 1) \,+\, (u \ra 2u + 1))(t) \\
              =& \,\,\,(x \ra x + 1)(t) + (u \ra 2u + 1)(t) \up&#123;1.5&#125; \\
              =& \,\,\,(t + 1) + (2t + 1) \up&#123;1.5&#125; \\
              =& \,\,\,3t + 2 \up&#123;1.5&#125;
              \end&#123;align&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              which implies that, indeed,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(x \ra x + 1) \,+\, (u \ra 2u + 1)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is the function that maps each real number{" "}
              <Math>
                $t$
              </Math>
              {" "}to{" "}
              <Math>
                $3t + 2$
              </Math>
              ,
              i.e., is equal to the function{" "}
              <NoBreak>
                <Math>
                  $t \ra 3t + 2$
                </Math>
                .
              </NoBreak>
              {" "}(!!)
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}
              One can also do the main computation with{" "}
              <Math>
                $x$
              </Math>
              {" "}
              in place of{" "}
              <Math>
                $t$
              </Math>
              :
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\begin&#123;align&#125;
              & \,\,\,((x \ra x + 1) \,+\, (u \ra 2u + 1))(x) \\
              =& \,\,\,(x \ra x + 1)(x) + (u \ra 2u + 1)(x) \up&#123;1.5&#125; \\
              =& \,\,\,(x + 1) + (2x + 1) \up&#123;1.5&#125; \\
              =& \,\,\,3x + 2 \up&#123;1.5&#125;
              \end&#123;align&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              Here we have two different{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                's:
              </NoBreak>
              {" "}the{" "}
              <Math>
                $x$
              </Math>
              {" "}that
              denotes the input, and the{" "}
              <Math>
                $x$
              </Math>
              {" "}that is used as
              a placeholder to describe how the first function
              acts.
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={6}>
          <VerticalChunk>
            <b>
              Exercise 6.
            </b>
            {" "}
            Complete the missing units for each strip
            below, based on those units that are given:
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch4_missing_units.svg" />
          <Pause />
          <Solution solution_number={6}>
            <VerticalChunk>
              The pattern to respect is that, each time 
              you take a derivative, the units on the{" "}
              <Math>
                $x$
              </Math>
              {" "}
              axis stay the same, while the units on the
              {" "}
              <Math>
                $y$
              </Math>
              {" "}axis become divided by those on the{" "}
              <Math>
                $x$
              </Math>
              {" "}
              axis. This gives the unique solutions:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_missing_units_solution.svg" />
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}
              A unit of “
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ”
              </NoBreak>
              {" "}is a
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              dimensionless
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              unit. Dimensionless units arise when 
              quantities are divided by like quantities.
              Think of dimensionless quantities as “pure 
              fractions” or “pure ratios”. (Percentages
              are dimensionless—in fact the term
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              percentage
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              is synonymous with
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              dimensionless ratio
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              though if you spoke to people about 
              “dimensionless ratios” they would look at 
              you funny. Also percentages are a system of
              notation, whereby the symbol “%” means 
              “divide the preceding number by 100, in 
              order to discover the numerical value of 
              the ratio I'm talking about”.) (To drive
              it home: In Chinese, the written expressions 
              “
              <NoBreak>
                <Math>
                  $23\%$
                </Math>
                ”
              </NoBreak>
              {" "}and “
              <NoBreak>
                <Math>
                  $23/100$
                </Math>
                ”
              </NoBreak>
              {" "}are 
              indistinguishable when read out loud; they
              are both  read “
              <Math>
                $23$
              </Math>
              {" "}over{" "}
              <NoBreak>
                <Math>
                  $100$
                </Math>
                ”;
              </NoBreak>
              {" "}that is
              the simple{" "}
              <i>
                &
              </i>
              {" "}correct way!)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={7}>
          <VerticalChunk>
            <b>
              Exercise 7.
            </b>
            {" "}
            Among the functions below, which is the
            zeroth, first, and second derivative? 
            (I.e., which is{" "}
            <NoBreak>
              <Math>
                $f$
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <NoBreak>
              <Math>
                $f'$
              </Math>
              ,
            </NoBreak>
            {" "}and{" "}
            <NoBreak>
              <Math>
                $f''$
              </Math>
              ,
            </NoBreak>
            {" "}
            assuming that relationship exists.)
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch4_position_by_time_find_the_order.svg" />
          <Pause />
          <Solution solution_number={7}>
            <VerticalChunk>
              The graphs are already in the right order 
              (hehe): if “
              <NoBreak>
                <Math>
                  $f$
                </Math>
                ”
              </NoBreak>
              {" "}is the original function 
              then{" "}
              <Math>
                $f$
              </Math>
              {" "}is on the left,{" "}
              <Math>
                $f'$
              </Math>
              {" "}is in the 
              middle, and{" "}
              <Math>
                $f''$
              </Math>
              {" "}is on the right:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_position_by_time_find_the_order_answer.svg" />
            <Pause />
            <VerticalChunk>
              For example, the graph on the left 
              has a slope that starts at{" "}
              <Math>
                $\sim\!-1$
              </Math>
              {" "}and
              ends at{" "}
              <NoBreak>
                <Math>
                  $\sim\!1$
                </Math>
                ,
              </NoBreak>
              {" "}while those are the
              values at which the graph in the middle
              starts and ends (and not coincidentally,
              since the graph in the middle is the
              derivative of the graph on the left!):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_position_by_time_find_the_order_first_pair.svg" />
            <Pause />
            <VerticalChunk>
              Moreover the middle graph has slope
              close to{" "}
              <Math>
                $0$
              </Math>
              {" "}at either end, and some
              slope near{" "}
              <Math>
                $1.5$
              </Math>
              {" "}or{" "}
              <Math>
                $2$
              </Math>
              {" "}towards the middle,
              matching the{" "}
              <i>
                values
              </i>
              {" "}of the graph
              on the right:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_position_by_time_find_the_order_second_pair.svg" />
            <Pause />
            <VerticalChunk>
              (Taking one more derivative would produce a
              zigzag, by the way.)
              <ImageRight src="/images/svg_ch4_position_by_time_find_the_order_cloud.svg" />
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={8}>
          <VerticalChunk>
            <b>
              Exercise 8.
            </b>
            {" "}
            Given these graphs...
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch4_sketch_the_middle_a.svg" />
          <Pause />
          <VerticalChunk>
            ...what can you say about{" "}
            <Math>
              $g'(x)$
            </Math>
            ?
            (Produce the best sketch of{" "}
            <Math>
              $g'(x)$
            </Math>
            {" "}that
            you can, taking into account all the
            information above.) (Don't get us wrong:
            You don't{" "}
            <i>
              need
            </i>
            {" "}the second derivative
            to sketch the first derivative, but if
            you're a human and not a machine, it can
            help!)
          </VerticalChunk>
          <Pause />
          <Solution solution_number={8}>
            <VerticalChunk>
              To start with, the slope of{" "}
              <Math>
                $g$
              </Math>
              {" "}seems to be
              about{" "}
              <NoBreak>
                <Math>
                  $-1.5$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $0$
              </Math>
              {" "}and (a bit greater than){" "}
              <Math>
                $2$
              </Math>
              {" "}
              at{" "}
              <NoBreak>
                <Math>
                  $x = -2$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $x = 0$
              </Math>
              {" "}and{" "}
              <Math>
                $x = 2$
              </Math>
              {" "}respectively:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_a_sol1.svg" />
            <Pause />
            <VerticalChunk>
              This already gives us three points from which
              to interpolate a basic approximation to the graph 
              {" "}
              <Math>
                $y = g'(x)$
              </Math>
              :
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_a_sol2.svg" />
            <Pause />
            <VerticalChunk>
              But the graph of{" "}
              <Math>
                $g''(x)$
              </Math>
              {" "}indicates more,
              namely that{" "}
              <Math>
                $g'(x)$
              </Math>
              {" "}has a slope that rises 
              from{" "}
              <Math>
                $\approx 0.2$
              </Math>
              {" "}near the left edge of 
              the graph up to{" "}
              <Math>
                $1.3$
              </Math>
              {" "}at{" "}
              <NoBreak>
                <Math>
                  $x = 0.5$
                </Math>
                ,
              </NoBreak>
              {" "}before 
              falling again to{" "}
              <Math>
                $0.6$
              </Math>
              {" "}past{" "}
              <Math>
                $x = 2$
              </Math>
              :
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_a_sol3.svg" />
            <Pause />
            <VerticalChunk>
              As a second step, we thus “bend into shape”
              our previous sketch to produce these slopes...
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_a_sol4.svg" />
            <Pause />
            <VerticalChunk>
              ...achieving our final answer.
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}For reference, the actual 
              derivative looks like so:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_a_sol5.svg" />
          </Solution>
        </Exercise>
        <Exercise exercise_number={9}>
          <VerticalChunk>
            <b>
              Exercise 9.
            </b>
            {" "}
            Given these graphs...
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch4_sketch_the_middle_b.svg" />
          <Pause />
          <VerticalChunk>
            ...sketch{" "}
            <NoBreak>
              <Math>
                $y = h'(x)$
              </Math>
              ,
            </NoBreak>
            {" "}analogously to
            Exercise 10.
          </VerticalChunk>
          <Pause />
          <Solution solution_number={9}>
            <VerticalChunk>
              Firstly, the graph of{" "}
              <Math>
                $h(x)$
              </Math>
              {" "}seems to have
              slope{" "}
              <Math>
                $0$
              </Math>
              {" "}around{" "}
              <Math>
                $x = 0.6$
              </Math>
              ...
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b_sol1.svg" />
            <Pause />
            <VerticalChunk>
              ...which gives us one data point on the
              curve{" "}
              <Math>
                $y = h'(x)$
              </Math>
              {" "}to start with...
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b_sol2.svg" />
            <Pause />
            <VerticalChunk>
              ...moreover, by the graph of{" "}
              <Math>
                $h''(x)$
              </Math>
              ,
              the slope of{" "}
              <Math>
                $h'(x)$
              </Math>
              {" "}is near{" "}
              <Math>
                $-1/3$
              </Math>
              {" "}on an
              interval that is approximately (say)
              {" "}
              <Math>
                $[-0.85,0.7]$
              </Math>
              ....
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b_sol3.svg" />
            <Pause />
            <VerticalChunk>
              ...so, as a second step, we can extend
              the graph of{" "}
              <Math>
                $h'(x)$
              </Math>
              {" "}by a segment of slope
              {" "}
              <Math>
                $-1/3$
              </Math>
              {" "}on this interval:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b_sol4.svg">
              <ImageLeft src="/images/svg_ch4_sketch_the_middle_b_cloud.svg" />
            </Image>
            <Pause />
            <VerticalChunk>
              (To achieve a passable slope of{" "}
              <Math>
                $-1/3$
              </Math>
              {" "}we
              modeled ourselves on a nearby grid segment.) 
              Next,{" "}
              <Math>
                $h(x)$
              </Math>
              {" "}has slope{" "}
              <Math>
                $\approx 1.2$
              </Math>
              {" "}at
              {" "}
              <NoBreak>
                <Math>
                  $x = -2$
                </Math>
                ,
              </NoBreak>
              {" "}and slope{" "}
              <Math>
                $\approx -0.9$
              </Math>
              {" "}(?) at
              {" "}
              <Math>
                $x = 2$
              </Math>
              :
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b_sol5.svg" />
            <Pause />
            <VerticalChunk>
              This gives us two more points on the graph
              {" "}
              <Math>
                $y = h'(x)$
              </Math>
              :
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b_sol6.svg" />
            <Pause />
            <VerticalChunk>
              Then, because the second derivative has
              value{" "}
              <Math>
                $\approx -1/3$
              </Math>
              {" "}for{" "}
              <Math>
                $x \leq -1.6$
              </Math>
              {" "}
              (about) and for{" "}
              <Math>
                $x \geq 1.5$
              </Math>
              {" "}(about)...
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b_sol7.svg" />
            <Pause />
            <VerticalChunk>
              ...we extend these two new data points by
              segments of slope{" "}
              <Math>
                $-1/3$
              </Math>
              ...
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b_sol8.svg" />
            <Pause />
            <VerticalChunk>
              ...on the relevant intervals. (I.e., for 
              {" "}
              <Math>
                $x \leq -1.6$
              </Math>
              {" "}and for{" "}
              <NoBreak>
                <Math>
                  $x \geq 1.5$
                </Math>
                .)
              </NoBreak>
              {" "}The 
              last step is to join the existing segments 
              by some kind of “connector curves” of 
              yet-to-be-determined shape:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b_sol9.svg" />
            <Pause />
            <VerticalChunk>
              Since{" "}
              <Math>
                $h''(x)$
              </Math>
              {" "}shows that the two 
              connectors have slopes of about{" "}
              <Math>
                $-1/3$
              </Math>
              {" "}
              at their edges and slopes of about{" "}
              <Math>
                $-1.4$
              </Math>
              {" "}
              and{" "}
              <Math>
                $-1.6$
              </Math>
              {" "}(respectively) near their
              middles...
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b_sol10.svg" />
            <Pause />
            <VerticalChunk>
              ...our final answer, given by the
              following sketch, is obtained by 
              “bending into shape” the connector curves...
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b_sol11.svg" />
            <Pause />
            <VerticalChunk>
              ...to give them a slope of{" "}
              <Math>
                $-1/3$
              </Math>
              {" "}at
              their endpoints, and slopes of{" "}
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
              {" "}respectively, in their middles.
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}
              Here is the actual graph of{" "}
              <Math>
                $h'$
              </Math>
              :
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b_sol12.svg" />
          </Solution>
        </Exercise>
        <Exercise exercise_number={10}>
          <VerticalChunk>
            <b>
              Exercise 10.
            </b>
            {" "}
            If you scale the graph of a function{" "}
            <Math>
              $f$
            </Math>
            {" "}
            vertically by a factor{" "}
            <NoBreak>
              <Math>
                $2$
              </Math>
              —i.e.,
            </NoBreak>
            {" "}multiply
            each output by{" "}
            <NoBreak>
              <Math>
                $2$
              </Math>
              —is
            </NoBreak>
            {" "}the derivative 
            also scaled by{" "}
            <Math>
              $2$
            </Math>
            ?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={10}>
            <VerticalChunk>
              Yes, this is the case. For a joke way
              of seeing it, here is a graph of a 
              putative function{" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                ,
              </NoBreak>
              {" "}before and after
              scaling:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_scaling_figure.svg" />
            <Pause />
            <VerticalChunk>
              The second graph truly is the first
              graph vertically scaled by a factor{" "}
              <Math>
                $2$
              </Math>
              ,
              because the scale on the{" "}
              <Math>
                $y$
              </Math>
              {" "}axis has
              been doubled. This means that the ratio
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;\te&#123;rise&#125;\over \te&#123;run&#125;&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              has doubled in the second graph, because
              “rise” has doubled (each{" "}
              <Math>
                $y$
              </Math>
              -coordinate
              is twice as large!), whereas “run” stays
              the same. (So the slope of the tangent has
              doubled, so the derivative is doubled.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={11}>
          <VerticalChunk>
            <b>
              Exercise 11.
            </b>
            {" "}
            Where is the rate of change of the function
            below, on the part shown, greatest? And
            where is the
          </VerticalChunk>
          <Pause />
          <CentralDisplayItalic>
            rate of change of the rate of change
          </CentralDisplayItalic>
          <Pause />
          <VerticalChunk>
            greatest?
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch4_narrow_and_less_narrow_bends.svg" />
          <Pause />
          <Solution solution_number={11}>
            <VerticalChunk>
              The rate of change is the slope, which
              is greatest along the right-hand portion
              of the curve:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_narrow_and_less_narrow_bends_steepest.svg" />
            <Pause />
            <VerticalChunk>
              On the other hand,
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the rate of change
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              [a.k.a., second derivative] is the rate
              of change  of the slope, and that will
              be greatest at the first bend of the curve,
              where the slope is changing at the fastest 
              rate:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_narrow_and_less_narrow_bends_curviest.svg" />
            <Pause />
            <VerticalChunk>
              (Well, believe us or not, but we're right!)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={12}>
          <VerticalChunk>
            <b>
              Exercise 12.
            </b>
            {" "}
            In the following graph, which curve might 
            be a derivative of which other curve?
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch4_cosine_curves.svg" />
          <Pause />
          <Solution solution_number={12}>
            <VerticalChunk>
              As it happens—and by the exact method
              that we used to generate these curves—the
              blue is the derivative of the red:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_cosine_curves_blue_red_only.svg" />
            <Pause />
            <VerticalChunk>
              Likewise, the derivative of the blue
              is the yellow, the derivative of the yellow
              is the green, and the derivative of the 
              green is the red, at which point it starts
              all over again! (For example, the 
              {" "}
              <i>
                fifth
              </i>
              {" "}derivative of the red curve
              is the blue, because the{" "}
              <i>
                fourth
              </i>
              {" "}
              derivative of the red curve is itself.)
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}
              After all, the slope of these curves
              keeps oscillating between two fixed 
              values—the “most slanted up” and the 
              “most slanted down”—so their derivatives
              were always going to have an oscillatory
              pattern, as well.
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 2.
              </i>
              {" "}
              Because “most slanted up” occurs when
              the curve has not yet crested, but when
              the derivative{" "}
              <i>
                is already
              </i>
              {" "}in the
              process of cresting (that's why it's
              “most slanted up”), the derivative is
              ahead of the original curve by half a
              bump, not the other way around:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_cosine_curves_cresting.svg" />
            <Pause />
            <VerticalChunk>
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
              {" "}and{" "}
              <Math>
                $y$
              </Math>
              -axes:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_cosine_curves_two_dimensional_vel.svg" />
            <Pause />
            <VerticalChunk>
              The velocities of the two shadows
              encode the overall “two-dimensional”
              velocity of the particle. (No need for 
              quotes, really: the velocity{" "}
              <i>
                is
              </i>
              {" "}
              two-dimensional.)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Here's another point of view: just like
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              position
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              is encoded by a pair of numbers—sometimes
              known as the{" "}
              <i>
                position vector
              </i>
              {" "}by
              the way, where “vector” is a term of art
              for “pair of numbers”—so the
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              velocity
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              is encoded by a pair of numbers—equally
              known as the{" "}
              <i>
                velocity vector
              </i>
              —which
              is no coincidence, because the first
              coordinate of the
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              velocity vector
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              is the derivative of the first coordinate
              of the
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              position vector
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              and likewise for the second coordinate—two
              coordinates, two rates of change!
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Geometrically, if we use the{" "}
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
                -components
              </NoBreak>
              {" "}{" "}
              <Math>
                $v_x$
              </Math>
              {" "}and{" "}
              <Math>
                $v_y$
              </Math>
              {" "}of the 
              velocity to draw an arrow emanating 
              from a point on the curve, this arrow
              is tangent to the curve, and the
              <ImageRight src="/images/svg_ch4_cosine_curves_tangent_velocity_cloud.svg" />
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              length
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              of the arrow is the
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              speed
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              of the particle at that moment in time.
              More precisely, if you let the particle
              drift at the exact same{" "}
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
                -velocities
              </NoBreak>
              {" "}{" "}
              <Math>
                $v_x$
              </Math>
              {" "}and{" "}
              <Math>
                $v_y$
              </Math>
              {" "}that you
              measured at the root of the arrow for
              one unit of time, the particle would 
              cover exactly the length of the arrow
              in that one unit of time, no more no less, 
              because the particle would cover{" "}
              <Math>
                $v_x$
              </Math>
              {" "}
              units in{" "}
              <Math>
                $x$
              </Math>
              {" "}and{" "}
              <Math>
                $v_y$
              </Math>
              {" "}units in{" "}
              <Math>
                $y$
              </Math>
              .
              And speed being
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              distance per unit time
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              the length of the arrow is, therefore,
              the speed!
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Now consider not one but four particles,
              going around a unit circle in clockwise
              fashion, 90° apart in phase, at unit 
              speed (“unit speed” = speed 1, “unit 
              circle” = radius 1) (ps: We center the
              circle at the origin):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_cosine_curves_unit_circle.svg" />
            <Pause />
            <VerticalChunk>
              The
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              position vectors
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              of the particles are as follows:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_cosine_curves_unit_circle_position_vectors.svg" />
            <Pause />
            <VerticalChunk>
              (You can't really see it so well, but
              each arrow originates at{" "}
              <NoBreak>
                <Math>
                  $(0, 0)$
                </Math>
                .)
              </NoBreak>
              {" "}While
              the
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              velocity vectors
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              are as follows:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_cosine_curves_unit_circle_velocity_vectors.svg" />
            <Pause />
            <VerticalChunk>
              (Like the position vectors, the 
              velocity vectors keep changing instant by 
              instant—this is the subtlety of calculus!)
              The velocity vectors have length{" "}
              <Math>
                $1$
              </Math>
              {" "}because
              the speed is{" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <i>
                &
              </i>
              {" "}are brushed
              in the direction of travel.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              (Nb: When we draw a vector as an arrow
              we mean that the first coordinate of the
              vector is equal to the horizontal 
              displacement from the tail of the arrow
              to the head of the arrow, and likewise
              that the second coordinate is equal to the
              vertical displacement from the tail of the
              arrow to the head of the arrow.)
              <ImageRight src="/images/svg_ch4_cosine_curves_vector_illustration_cloud.svg" />
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Due to the 90° rotations and uniform 
              lengths of{" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "}one particle's velocity
              vector is another particle's position
              vector; as one example, the red particle's
              velocity vector is the blue particle's 
              position vector:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_cosine_curves_unit_circle_equality.svg" />
            <Pause />
            <VerticalChunk>
              From the{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinates,
              </NoBreak>
              {" "}for example,
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              the velocity in{" "}
              <Math>
                $x$
              </Math>
              {" "}of the red particle
              is the position in{" "}
              <Math>
                $x$
              </Math>
              {" "}of the blue particle
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              at any given moment in time. This also
              means:
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the{" "}
              <Math>
                $x$
              </Math>
              -coordinate
              of the red particle is the{" "}
              <Math>
                $x$
              </Math>
              -coordinate
              of the blue particle
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              ...because “velocity in{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                ”
              </NoBreak>
              {" "}is the same
              as “rate of change of the{" "}
              <Math>
                $x$
              </Math>
              -coordinate”.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Concretely, if you graph the
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinates
              </NoBreak>
              {" "}of the red and blue 
              particles on the same graph, the rate of
              change of the red particle's{" "}
              <Math>
                $x$
              </Math>
              -coordinate
              will equal the value of the blue particle's
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate.
              </NoBreak>
              {" "}These are the reds and blue
              curves from the problem statement, if we
              start the red particle at position
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(1, 0)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              at time{" "}
              <Math>
                $t = 0$
              </Math>
              :
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_cosine_curves_verified.svg" />
            <Pause />
            <VerticalChunk>
              If we add the{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinates
              </NoBreak>
              {" "}of the green
              and yellow particles, we find the graph
              from the problem statement!
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 4.
              </i>
              {" "}
              If needed, here is an illustration of 
              one{" "}
              <Math>
                $360^\circ$
              </Math>
              {" "}rotation of the particles
              of Note 3,  with each curve being an 
              {" "}
              <Math>
                $x$
              </Math>
              -coordinate:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_cosine_curves_rolling_wheel.svg" />
            <Pause />
            <VerticalChunk>
              (If the above just looks like a 
              confusing mess then don't sweat it—it's
              not that important.)
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 5.
              </i>
              {" "}
              To reiterate, take a look at this
              figure again:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_cosine_curves_cresting.svg" />
            <Pause />
            <VerticalChunk>
              The derivative is
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              ahead
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              of the red particle, so that 
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinates
              </NoBreak>
              {" "}you see{" "}
              <i>
                now
              </i>
              {" "}on the
              blue particle will be seen{" "}
              <i>
                a little later
              </i>
              {" "}
              on the red particle! (In particular, if you
              wanted to generate the same curves with a
              counterclockwise rotation, you could do that,
              but you would have to reverse the order of
              the particles around the circle to keep the
              blue particle ahead of the red particle,
              the yellow particle ahead of the blue 
              particle, etc.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={13}>
          <VerticalChunk>
            <b>
              Exercise 13.
            </b>
            {" "}
            How can we generate the following set of
            curves by rotating points around a circle,
            and tracking their{" "}
            <NoBreak>
              <Math>
                $x$
              </Math>
              -coordinates?
            </NoBreak>
            {" "}(This
            graph is an exact{" "}
            <Math>
              $2$
            </Math>
            &#x200b;
            <Math>
              $\times$
            </Math>
            {" "}[“two
            x”] vertical dilation of the graph in Exercise
            12.) Should we use a circle of radius{" "}
            <Math>
              $2$
            </Math>
            ,
            or make the points go twice as fast? Or both?
            Or something else yet?
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch4_scaled_cosine_curves.svg" />
          <Pause />
          <Solution solution_number={13}>
            <VerticalChunk>
              The values oscillate between{" "}
              <Math>
                $+2$
              </Math>
              {" "}and
              {" "}
              <NoBreak>
                <Math>
                  $-2$
                </Math>
                ,
              </NoBreak>
              {" "}so we need a circle of radius{" "}
              <Math>
                $2$
              </Math>
              {" "}
              to generate these curves. Also the
              values go through one cycle in the same 
              amount of time as the particles of
              Exercise 12, but the circle has twice the 
              circumference (having twice the radius),
              so the particles are going twice as fast!
              (I.e.: speed 2, since the particles of
              Exercise 12 have unit speed.)
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}
              In this and in the previous exercise the
              units of time and distance are “anonymous”: 
              distance could be meters, kilometers, or
              anything, and time could be seconds, hours,
              etc—it doesn't matter. However, one should
              be aware that what amounts to
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              unit speed
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              under one set of units is no longer “unit
              speed” under a different set of units—this
              is not a “physical” property of the 
              particles, but, rather, a “mathematical”
              property that holds only for one specific
              “tweaking” of the units.
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={14}>
          <VerticalChunk>
            <b>
              Exercise 14.
            </b>
            {" "}
            Exercise 12 exhibits a function{" "}
            <NoBreak>
              <Math>
                $f$
              </Math>
              —in
            </NoBreak>
            {" "}fact,
            four different functions{" "}
            <NoBreak>
              <Math>
                $f$
              </Math>
              —such
            </NoBreak>
            {" "}that
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$f' \ne f$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            and
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$f'' \ne f$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            and
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$f''' \ne f$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            but
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$f^&#123;(4)&#125; = f$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            surprise, surprise! Can you do the same with
            “
            <NoBreak>
              <Math>
                $5$
              </Math>
              ”
            </NoBreak>
            {" "}instead of “
            <NoBreak>
              <Math>
                $4$
              </Math>
              ”?
            </NoBreak>
            {" "}I.e., find a function
            {" "}
            <Math>
              $f$
            </Math>
            {" "}such that
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$f^&#123;(n)&#125; \ne f$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            for{" "}
            <Math>
              $n = 1, 2, 3, 4$
            </Math>
            {" "}but
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$f^&#123;(5)&#125; = f$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            ...?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={14}>
            <VerticalChunk>
              We can naïvely try to imitiate how the
              curves of Exercise 16 are generated by
              placing five equally spaced particles
              around the unit circle (“the” unit circle
              is the one centered at{" "}
              <NoBreak>
                <Math>
                  $(0, 0)$
                </Math>
                ,
              </NoBreak>
              {" "}by
              convention), instead of 4:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_position_vectors.svg" />
            <Pause />
            <VerticalChunk>
              The idea would be that the
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              velocity vector
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              of the red particle is the
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              position vector
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              of the blue particle, 
              likewise for the blue and yellow particles,
              and so on. (Position vectors shown above.)
              For example, at the instant above, the
              velocity vectors would be as follows:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_velocity_vectors.svg" />
            <Pause />
            <VerticalChunk>
              The velocity vectors are
            </VerticalChunk>
            <Pause />
            <CentralDisplay>
              NOT
            </CentralDisplay>
            <Pause />
            <VerticalChunk>
              tangent to the unit circle, and so the
              particles will leave the circle!
              (But that's OK.) In one-tenth a unit
              of time, for example, the particles would
              travel approximately one-tenth their
              velocity vectors, that would bring them
              to approximately these new positions:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_after_1_10th.svg" />
            <Pause />
            <VerticalChunk>
              In the next one-tenth unit of time we 
              can apply a similar approximation again,
              advancing the particles by{" "}
              <Math>
                $&#123;1\over 10&#125;$
              </Math>
              th
              of [the current approximation to] their
              velocity vectors. Skipping the construction
              lines:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_after_2_10th.svg" />
            <Pause />
            <VerticalChunk>
              Applying the same process for{" "}
              <Math>
                $8$
              </Math>
              {" "}more
              steps:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_after_10_10th.svg" />
            <Pause />
            <VerticalChunk>
              To be clear, in the above figure, the
              position of the red particle at, say, the
              fifth step...
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_after_5_10th.svg" />
            <Pause />
            <VerticalChunk>
              ...is obtained by starting from the red
              particle's position at the fourth step...
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_after_4_10th.svg" />
            <Pause />
            <VerticalChunk>
              ...and adding one-tenth of the approximation
              that we have to the red particle's velocity
              vector at that moment, that approximation
              being namely the blue particle's position 
              vector at the fourth step (
              <Math>
                $t = &#123;4\over 10&#125;$
              </Math>
              )...
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_after_4_10th_b.svg" />
            <Pause />
            <VerticalChunk>
              ...and we do the same for each particle,
              to advance to the next step.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              If we stop{" "}
              <Math>
                $10$
              </Math>
              {" "}times as often,
              advancing the clock by{" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 100&#125;$
                </Math>
                th
              </NoBreak>
              {" "}of
              a unit of time at each step, the same figure
              becomes just a blur (still going from
              {" "}
              <Math>
                $t = 0$
              </Math>
              {" "}to{" "}
              <Math>
                $t = 1$
              </Math>
              ):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_after_100_100th_blur.svg" />
            <Pause />
            <VerticalChunk>
              To visualize such a fine-grained
              approximation we need to revert to drawing
              the particles as points. In the following
              figure the colored paths are points that
              come from a “
              <NoBreak>
                <Math>
                  $&#123;1\over 100&#125;$
                </Math>
                th”
              </NoBreak>
              {" "}approximation,
              while the orange dots are the old positions
              obtained from a “
              <Math>
                $&#123;1\over 10&#125;$
              </Math>
              th”
              approximation:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_after_100_100th_points.svg" />
            <Pause />
            <VerticalChunk>
              Zooming in a bit (or else we still can't
              see anything):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_after_100_100th_zoomed.svg" />
            <Pause />
            <VerticalChunk>
              In any case, even the “
              <Math>
                $&#123;1\over 100&#125;$
              </Math>
              th”
              approximation is just an approximation,
              but the point is that such approximations
              do converge to a set of “true” particle
              paths, as pictured in Fig
              <Math>
                $.$
              </Math>
              {" "}1, that can
              be computed by some wizards; as time can
              be played forward or backward, these paths
              form doubly-infinite spirals—in to infinity,
              out to infinity.
              <ImageLeft
                children_y="2em"
                children_x="50%"
                src="/images/svg_ch4_5_euler_spiral_figure.svg"
                offset_x="1.5em">
                <span font-size="1.4em">
                  Fig. 1
                </span>
              </ImageLeft>
            </VerticalChunk>
            <VerticalChunk indent={true}>
              In any case [take two] the point is that
              whether or not you are one of the wizards,
              you can
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              guess
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              the existence of these five paths—sort 
              of “feel” that they exist! (This is a 
              moral consolation prize, at least.)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              We can also convert the paths into a 
              function
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$f$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              that satisfies the problem requirements.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              For example let{" "}
              <Math>
                $f$
              </Math>
              {" "}be the function that,
              given a time{" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                ,
              </NoBreak>
              {" "}outputs the{" "}
              <Math>
                $x$
              </Math>
              -coordinate
              of the red particle at{" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                ;
              </NoBreak>
              {" "}then, to spell
              it all out, since
            </VerticalChunk>
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
              {" "}of the red particle is the 
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the blue particle
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              <Math>
                $f'$
              </Math>
              {" "}is the{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the blue 
              particle; and since
            </VerticalChunk>
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
              {" "}of the blue particle is the
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the yellow particle
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              <Math>
                $f''$
              </Math>
              {" "}is the{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the
              yellow particle; and since
            </VerticalChunk>
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
              {" "}of the yellow particle is the
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the green particle
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              <Math>
                $f'''$
              </Math>
              {" "}is the{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the
              green particle; and since
            </VerticalChunk>
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
              {" "}of the green particle
              is the{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the purple
              particle
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              <Math>
                $f''''$
              </Math>
              {" "}is the{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the
              purple particle; and since
            </VerticalChunk>
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
              {" "}of the purple particle is the 
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the red particle
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              <Math>
                $f''''' = f^&#123;(5)&#125;$
              </Math>
              {" "}equals{" "}
              <Math>
                $f$
              </Math>
              .
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}
              If you graph the{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinates
              </NoBreak>
              {" "}of the
              5 particles over time, each in their 
              color, you get a graph like so, in which
              blue is the derivative of red, yellow is
              the derivative of blue, etc; the function 
              {" "}
              <Math>
                $f$
              </Math>
              {" "}can be taken to be any one of these
              curves:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_final_graph.svg" />
            <Pause />
            <VerticalChunk>
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
              {" "}vis-à-vis{" "}
              <Math>
                $y$
              </Math>
              -coordinates.
              You can also define{" "}
              <Math>
                $f(t)$
              </Math>
              {" "}to be, e.g.,
              the{" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the red particle
              at time{" "}
              <Math>
                $t$
              </Math>
              .
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 3.
              </i>
              {" "}
              It is worth noting that, in fact, the 
              {" "}
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
              {" "}live separate
              lives. The rate of change of each 
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}is some other{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate,
              </NoBreak>
              {" "}
              and the rate of change of each{" "}
              <Math>
                $y$
              </Math>
              -coordinate
              is some other{" "}
              <Math>
                $y$
              </Math>
              -coordinate.
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 4.
              </i>
              {" "}
              Adding to this observation, we don't
              {" "}
              <i>
                need
              </i>
              {" "}to start the particles in
              a symmetric configuration. Symmetry only
              helps to picture how the positions of the
              particles will evolve without making any
              computations. We also don't{" "}
              <i>
                need
              </i>
              {" "}
              to work in two dimensions. We can place
              the particles in a one-dimensional world,
              e.g., ...
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_one_dimensional.svg" />
            <Pause />
            <VerticalChunk>
              ...(the initial positions really don't
              matter much, as long as you don't give 
              all the particles the{" "}
              <i>
                same
              </i>
              {" "}initial
              position, or else you won't have{" "}
              <Math>
                $f \ne f'$
              </Math>
              {" "}
              etc) and stipulate the same rules, namely
              that the
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              velocity
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              (now{" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                -dimensional)
              </NoBreak>
              {" "}of the red particle
              be the
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              position
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              (now{" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                -dimensional)
              </NoBreak>
              {" "}of the blue particle
              and so on—you can “release” the particles
              from their initial configuration and
              simulate (or compute exactly, if you have
              the know-how) their motion by the same
              methods as above. The five position
              functions obtained are each a solution
              {" "}
              <Math>
                $f$
              </Math>
              {" "}to the problem. (But this solution will
              typically look more chaotic than the curves
              from Note 1.)
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 5.
              </i>
              {" "}
              In fact, our symmetric two-dimensional
              solution is an instance in which you can say
              that
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              the whole is simpler than the parts
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              <ImageLeft src="/images/svg_ch4_5_euler_hearts_left.svg" />
              <ImageRight src="/images/svg_ch4_5_euler_hearts_right.svg" />
            </VerticalChunk>
            <VerticalChunk indent={true}>
              in that you would never spot the symmetry
              at play, or have a chance of eyeballing
              the long-term evolution of the system, if
              you were shown just the{" "}
              <Math>
                $x$
              </Math>
              -coordinates,
              or just the{" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinates,
              </NoBreak>
              {" "}on their own!
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={15}>
          <VerticalChunk>
            <b>
              Exercise 15.
            </b>
            {" "}
            If we seek a function{" "}
            <Math>
              $f : \rr \ra \rr$
            </Math>
            {" "}
            such that
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$f^&#123;(17)&#125; = f$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            and such that{" "}
            <Math>
              $f \ne 0$
            </Math>
            {" "}(or:{" "}
            <Math>
              $f \ne (x \ra 0)$
            </Math>
            ,
            pedantically) and such that{" "}
            <Math>
              $f$
            </Math>
            {" "}grows relatively
            slowly in either the positive or negative direction
            of the number line, insofar as such things are 
            concerned, what would our options be?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={15}>
            <VerticalChunk>
              Take{" "}
              <Math>
                $17$
              </Math>
              {" "}particles equally spaced out along
              the unit circle, such as these (shown here 
              with position vectors):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_17_position_vectors.svg" />
            <Pause />
            <VerticalChunk>
              Set the velocity of particle
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;\Large 1&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              equal to the position of particle
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;\Large 5&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and keep going by this pattern, making the
              velocity of each particle equal to the
              position of the particle that is{" "}
              <Math>
                $4$
              </Math>
              {" "}later;
              in the configuration above, the velocity
              vectors end up looking like so, for example:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_17_velocity_vector_1.svg">
              <ImageRight src="/images/svg_ch4_17_velocity_vector_1_cloud.svg" />
            </Image>
            <Pause />
            <VerticalChunk>
              Maintaining this relationship at all 
              points in time, and given that the velocity 
              vectors point very slightly outward from
              the unit circle, and because all the
              symmetry and all the angles are maintained
              as we play time forward or backward, the
              particles spiral gently outward/inward from
              the circle for time forward/backward,
              respectively. Taking{" "}
              <Math>
                $f(t)$
              </Math>
              {" "}to be the{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -
              </NoBreak>
              {" "}
              or{" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinate
              </NoBreak>
              {" "}of any one of the particles
              (e.g., particle{" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                )
              </NoBreak>
              {" "}at time{" "}
              <Math>
                $t$
              </Math>
              {" "}gives an
              oscillating function whose{" "}
              <NoBreak>
                <Math>
                  $17$
                </Math>
                th
              </NoBreak>
              {" "}derivative
              is itself (because the rate of change of
              the{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}of particle{" "}
              <Math>
                $1$
              </Math>
              {" "}is the
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}of particle{" "}
              <NoBreak>
                <Math>
                  $5$
                </Math>
                ,
              </NoBreak>
              {" "}etc, until
              we make it all the way back to particle{" "}
              <Math>
                $1$
              </Math>
              ),
              and that grows comparatively slowly over
              time. ~The End~
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}
              In case you're curious, the actual spiral paths
              of the particles look like so:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_17_paths.svg" />
            <Pause />
            <VerticalChunk>
              ...and if you take the{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinates
              </NoBreak>
              {" "}of
              the particles over time, with time{" "}
              <Math>
                $t = 0$
              </Math>
              {" "}
              corresponding to the original configuration
              depicted where particle 1 is at{" "}
              <NoBreak>
                <Math>
                  $(1, 0)$
                </Math>
                ,
              </NoBreak>
              {" "}you
              find{" "}
              <del>
                paths
              </del>
              &ensp;functions that look like so:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_17_actual_functions.svg" />
            <Pause />
            <VerticalChunk>
              For example, the derivative of curve{" "}
              <InlineImage src="/images/svg_ch4_17_particle1_inline.svg" />
              , highlighted below in red, is curve{" "}
              <InlineImage src="/images/svg_ch4_17_particle5_inline.svg" />
              , highlighted in blue:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_17_actual_functions_with_highlights.svg" />
            <Pause />
            <VerticalChunk>
              ...and taking sixteen more derivatives 
              starting from curve{" "}
              <InlineImage
                style="margin-right:0.8em"
                src="/images/svg_ch4_17_particle5_inline.svg" />
              we would go through curves{" "}
              <InlineImage src="/images/svg_ch4_17_particle9_inline.svg" />
              ,{" "}
              <InlineImage src="/images/svg_ch4_17_particle13_inline.svg" />
              ,{" "}
              <InlineImage src="/images/svg_ch4_17_particle17_inline.svg" />
              ,{" "}
              <InlineImage src="/images/svg_ch4_17_particle4_inline.svg" />
              , ...,{" "}
              <InlineImage src="/images/svg_ch4_17_particle14_inline.svg" />
              before finally coming back to curve
              <InlineImage
                style="margin-right:0.1em"
                src="/images/svg_ch4_17_particle1_inline.svg" />
              !
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
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
              {" "}exactly from particle 1, 
              particle 9 is at{" "}
              <Math>
                $90^\circ$
              </Math>
              {" "}exactly from
              particle 5, and so on, until we reach
              particle 14, the last particle in this
              order; then we have the following starting
              configuration:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_17_other_start.svg" />
            <Pause />
            <VerticalChunk>
              To parse the above figure, understand
              that:
            </VerticalChunk>
            <ul style="margin:20px 20px 0px 50px">
              <li>
                the red arrows indicate which particle
                takes its velocity from the position
                of which other particle; for example,
                particle 1 has velocity equal to the
                position of particle 5
              </li>
              <li>
                particles that occupy the same starting
                position on the unit circle appear
                stacked together, as a representation
                device; for example, particle 2 has the
                same starting position as particle 5
              </li>
            </ul>
            <VerticalChunk>
              (Note that the red arrows have to form
              a cycle of length 17 in order for us to
              later extract a function{" "}
              <Math>
                $f$
              </Math>
              {" "}such that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$f^&#123;(17)&#125; = f$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              but this is the case: the red arrows only
              “close the loop” after going through all
              17 particles!)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              In this starting configuration, all
              velocity vectors are exactly tangent to
              the unit circle
            </VerticalChunk>
            <Pause />
            <CentralDisplay>
              EXCEPT
            </CentralDisplay>
            <Pause />
            <VerticalChunk>
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
              <Math>
                $t \geq 0$
              </Math>
              ):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_17_other_start_paths.svg" />
            <Pause />
            <VerticalChunk>
              The particles shoot of to infinity in short
              order—the solution is much worse—for fun we
              have also highlighted two particle trajectories
              in this figure:
            </VerticalChunk>
            <ul style="margin:1em 1em 0em 2.5em">
              <li>
                in{" "}
                <span style="border:1px solid blue">
                  blue
                </span>
                , particle 1, the last particle
                to be (noticeably*) “peeled off” from
                the circle (*all particles are 
                instantaneously peeled off from the 
                circle to{" "}
                <i>
                  some
                </i>
                {" "}degree, as one 
                particle's slight deviation affects
                the next, that affects the next, etc)
              </li>
              <li>
                in{" "}
                <span style="border:1px solid red">
                  red
                </span>
                , particle 14, the{" "}
                <i>
                  first
                </i>
                {" "}particle
                to leave the circle—but because its
                velocity vector is given by particle 1,
                which itself starts by going around in
                a circle, it, too, starts out by going
                around in a circle!
              </li>
            </ul>
            <VerticalChunk>
              (The point is: if your velocity vector 
              is tracing a circle centered at{" "}
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
              necessarily at{" "}
              <Math>
                $(0, 0)$
              </Math>
              !)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={16}>
          <VerticalChunk>
            <b>
              Exercise 16.
            </b>
            {" "}
            Add elements to the following drawing...
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch4_newton_quotient_unfinished.svg" />
          <Pause />
          <VerticalChunk>
            ...such that it becomes a “complete”
            illustration of this here algebraic 
            expression...
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$&#123;f(x+h) - f(x) \over h&#125;$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            ...and reveal the “geometric meaning” of
            the expression, if any.
          </VerticalChunk>
          <Pause />
          <Solution solution_number={16}>
            <VerticalChunk>
              This version pictures all the elements
              that appear in the fraction:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_newton_quotient_finished.svg" />
            <Pause />
            <VerticalChunk>
              The point is: the fraction
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;f(x + h) - f(x)\over h&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is seen to have the form{" "}
              <i>
                rise over run
              </i>
              , 
              and is more precisely equal to the slope
              of the pale brown line going through the
              point
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(x, f(x))$$
              <ImageLeft src="/images/svg_ch4_new_quatient_x_fx_cloud.svg" />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              at one end, and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(x + h, f(x + h))$$
              <ImageRight
                src="/images/svg_ch4_new_quatient_x_fxplush_cloud.svg"
                offset_y="-0.5em" />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              at the other end. (This is also the case
              if{" "}
              <Math>
                $h$
              </Math>
              {" "}is negative, by the way.)
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}
              A fraction of this form is called a{" "}
              <i>
                Newton
                quotient
              </i>
              .
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 2.
              </i>
              {" "}
              The pale brown line is sometimes known as
              the{" "}
              <i>
                secant
              </i>
              {" "}[through{" "}
              <NoBreak>
                <Math>
                  $(x, f(x))$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $(x+h, f(x+h))$
              </Math>
              ].
              “Secant” is a general term for “line passing
              through two specified points on another
              curve”.
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 3.
              </i>
              {" "}
              If we let{" "}
              <Math>
                $h$
              </Math>
              {" "}drop to{" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "}and if{" "}
              <Math>
                $f$
              </Math>
              {" "}is
              differentiable at{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                ,
              </NoBreak>
              {" "}the 
              Newton-quotient-a.k.a.-slope-of-the-secant
              approaches
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$f'(x)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              because the secant approaches the tangent,
              in that case, and the slope of the secant
              is also, perforce, approaching the slope
              of the tangent, which is{" "}
              <NoBreak>
                <Math>
                  $f'(x)$
                </Math>
                .
              </NoBreak>
              {" "}(But you
              cannot directly set{" "}
              <NoBreak>
                <Math>
                  $h = 0$
                </Math>
                ,
              </NoBreak>
              {" "}because
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;f(x+0)-f(x)\over 0&#125; = &#123;0 \over 0&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is undefined.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={17}>
          <VerticalChunk>
            <b>
              Exercise 17.
            </b>
            {" "}
            In this exercise we consider two points
            in time{" "}
            <Math>
              $t_0$
            </Math>
            {" "}and{" "}
            <Math>
              $t_0 + \Delta&#123;&#125;t$
            </Math>
            {" "}(here
            “
            <NoBreak>
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              ”,
            </NoBreak>
            {" "}read “delta{" "}
            <NoBreak>
              <Math>
                $t$
              </Math>
              ”,
            </NoBreak>
            {" "}is a
            standard notation for a small amount of
            time):
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch4_RATS_timeline.svg" />
          <Pause />
          <VerticalChunk>
            We also consider quantities{" "}
            <Math>
              $A$
            </Math>
            {" "}and{" "}
            <Math>
              $B$
            </Math>
            {" "}
            that are changing with time;{" "}
            <Math>
              $A$
            </Math>
            {" "}and{" "}
            <Math>
              $B$
            </Math>
            {" "}
            have some value at{" "}
            <NoBreak>
              <Math>
                $t_0$
              </Math>
              ,
            </NoBreak>
            {" "}and, say, grow
            to be larger at{" "}
            <Math>
              $t_0 + \Delta&#123;&#125;t$
            </Math>
            :
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch4_RATS_timeline_with_A_B.svg" />
          <Pause />
          <VerticalChunk>
            More specifically, we are interested in
            the change in the value of the product
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$\Large AB$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            over said course of time.
          </VerticalChunk>
          <VerticalChunk indent={true}>
            To introduce an unsolicited metaphor,
            imagine{" "}
            <Math>
              $A$
            </Math>
            {" "}and{" "}
            <Math>
              $B$
            </Math>
            {" "}as
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch4_RATS_rats.svg" />
          <Pause />
          <VerticalChunk>
            that are crossing a hallway surveyed by
            a cat. One side of the hallway is time
            {" "}
            <NoBreak>
              <Math>
                $t_0$
              </Math>
              ,
            </NoBreak>
            {" "}the other side of the hallway is
            time{" "}
            <NoBreak>
              <Math>
                $t_0 + \Delta&#123;&#125;t$
              </Math>
              .
            </NoBreak>
            {" "}So great is their
            terror that{" "}
            <Math>
              $A$
            </Math>
            {" "}and{" "}
            <Math>
              $B$
            </Math>
            {" "}have decided to 
            scurry across the hallway one at a time.
            First{" "}
            <Math>
              $A$
            </Math>
            {" "}will go, then{" "}
            <NoBreak>
              <Math>
                $B$
              </Math>
              .
            </NoBreak>
            {" "}In so, we 
            can separate the following moments of 
            interest (“moments” that exist inside the
            metaphorical timeline of the story, not
            on the{" "}
            <NoBreak>
              <Math>
                $t$
              </Math>
              -number
            </NoBreak>
            {" "}line, to be clear):
            <ImageLeft
              src="/images/svg_ch4_RATS_corridor_cloud.svg"
              offset_y="-0.5em"
              offset_x="0.5em" />
          </VerticalChunk>
          <ol style="margin:0 1.5em 1em 2em">
            <li style="margin-top:0.5em">
              when{" "}
              <Math>
                $A$
              </Math>
              {" "}and{" "}
              <Math>
                $B$
              </Math>
              {" "}are both still at{" "}
              <Math>
                $t_0$
              </Math>
            </li>
            <li style="margin-top:0.5em">
              when{" "}
              <Math>
                $A$
              </Math>
              {" "}has made it to{" "}
              <Math>
                $t_0 + \Delta&#123;&#125;t$
              </Math>
              ,
              and{" "}
              <Math>
                $B$
              </Math>
              {" "}is still at{" "}
              <Math>
                $t_0$
              </Math>
            </li>
            <li style="margin-top:0.5em">
              <del>
                when{" "}
                <NoBreak>
                  <Math>
                    $B$
                  </Math>
                  's
                </NoBreak>
                {" "}tail is sticking out of the
                cat's mouth, and
              </del>
              &ensp;when{" "}
              <Math>
                $A$
              </Math>
              {" "}and{" "}
              <Math>
                $B$
              </Math>
              {" "}have both made it
              to{" "}
              <Math>
                $t_0 + \Delta&#123;&#125;t$
              </Math>
            </li>
          </ol>
          <VerticalChunk>
            Correspondingly, the product
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$\Large AB$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            changes in two increments: first as{" "}
            <Math>
              $A$
            </Math>
            {" "}
            makes it to the other side of the hallway
            (and{" "}
            <Math>
              $A$
            </Math>
            {" "}grows bigger); then as{" "}
            <Math>
              $B$
            </Math>
            {" "}joins
            him/her (and{" "}
            <Math>
              $B$
            </Math>
            {" "}grows bigger). In an
            equation:
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch4_RATS_equation.svg" />
          <Pause />
          <VerticalChunk>
            If we divide the above equation by{" "}
            <Math>
              $\Delta&#123;&#125;t$
            </Math>
            {" "}
            and let{" "}
            <Math>
              $\Delta&#123;&#125;t$
            </Math>
            {" "}drop to{" "}
            <NoBreak>
              <Math>
                $0$
              </Math>
              ,
            </NoBreak>
            {" "}what does
            each term become?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={17}>
            <VerticalChunk>
              Dividing by{" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              :
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_RATS_equation_over_Dt.svg" />
            <Pause />
            <VerticalChunk>
              As{" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "}approaches{" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "}the term
              on the left-hand side approaches
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(AB)'(t_0)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              where we view{" "}
              <Math>
                $A$
              </Math>
              {" "}and{" "}
              <Math>
                $B$
              </Math>
              {" "}as functions
              of time with, therefore, the product{" "}
              <Math>
                $AB$
              </Math>
              {" "}
              also becoming a function of time. (By 
              definition,{" "}
              <Math>
                $AB$
              </Math>
              {" "}is the function
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$t \rightarrow A(t)B(t)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              where{" "}
              <Math>
                $A(t)$
              </Math>
              {" "}is the value of{" "}
              <Math>
                $A$
              </Math>
              {" "}at time 
              {" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $B(t)$
              </Math>
              {" "}is the value of{" "}
              <Math>
                $B$
              </Math>
              {" "}at time
              {" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                .)
              </NoBreak>
              {" "}Indeed, a ratio of the form
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;f(t_0 + \Delta&#123;&#125;t) - f(t_0)\over \Delta&#123;&#125;t&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is a Newton quotient (cf. Exercise 16),
              that approaches
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$f'(t_0)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              as{" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "}approaches{" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "}assuming
              {" "}
              <Math>
                $f$
              </Math>
              {" "}is differentiable at{" "}
              <Math>
                $t_0$
              </Math>
              {" "}(cf.
              Exercise 16 Note 3), and
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_RATS_over_Dt_first_term.svg" />
            <Pause />
            <VerticalChunk>
              has the form
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;f(t_0 + \Delta&#123;&#125;t) - f(t_0)\over \Delta&#123;&#125;t&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for{" "}
              <Math>
                $f = AB$
              </Math>
              .
              <ImageLeft src="/images/svg_ch4_RATS_for_f_equals_AB_cloud.svg" />
            </VerticalChunk>
            <VerticalChunk indent={true}>
              The first term on the right-hand side, for
              its part, approaches
              <ImageRight src="/images/svg_ch4_RATS_first_term_cloud.svg" />
            </VerticalChunk>
            <VerticalChunk indent={true}>
              as{" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "}approaches{" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                .
              </NoBreak>
              {" "}Indeed,
              when you write it out, that term becomes
              the algebraic expression
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;A(t_0 + \Delta&#123;&#125;t)B(t_0) - A(t_0)B(t_0) \over \Delta&#123;&#125;t&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              where every term on top contains a
              “
              <NoBreak>
                <Math>
                  $B(t_0)$
                </Math>
                ”,
              </NoBreak>
              {" "}that can therefore be factored
              out, giving us the equivalent expression
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$B(t_0)\cdot&#123;A(t_0 + \Delta&#123;&#125;t) - A(t_0) \over \Delta&#123;&#125;t&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              that, you will notice, has the form
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$B(t_0)\cdot&#123;f(t_0 + \Delta&#123;&#125;t) - f(t_0) \over \Delta&#123;&#125;t&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for{" "}
              <NoBreak>
                <Math>
                  $f = A$
                </Math>
                ,
              </NoBreak>
              {" "}and thus approaches
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$B(t_0) \cdot A'(t_0)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              as{" "}
              <Math>
                $\Delta t$
              </Math>
              {" "}approaches{" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "}by the property
              of the Newton quotient.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Lastly the most interesting term is the
              second term on the right-hand side!
              Symmetrically to the first term on the
              right-hand side, the second term approaches{" "}
              <ImageRight src="/images/svg_ch4_RATS_second_term_cloud.svg" />
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$A(t_0)B'(t_0)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              as{" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "}approaches{" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "}but the
              reasons are slightly different! (Slightly.)
              Indeed, this term, written out, is
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;A(t_0 + \Delta&#123;&#125;t)B(t_0+\Delta&#123;&#125;t) - A(t_0+ \Delta&#123;&#125;t)B(t_0) \over \Delta&#123;&#125;t&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              which is equal to
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$A(t_0 + \Delta&#123;&#125;t)\cdot&#123;B(t_0+\Delta&#123;&#125;t) - B(t_0) \over \Delta&#123;&#125;t&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by factoring out the common term{" "}
              <Math>
                $A(t_0 + \Delta&#123;&#125;t)$
              </Math>
              ;
              and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;B(t_0+\Delta&#123;&#125;t) - B(t_0) \over \Delta&#123;&#125;t&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              approaches
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$B'(t_0)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              as{" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "}approaches{" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "}like before
              (when we had{" "}
              <Math>
                $AB$
              </Math>
              {" "}or{" "}
              <Math>
                $A$
              </Math>
              {" "}instead of{" "}
              <Math>
                $B$
              </Math>
              )
              whereas
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$A(t_0 + \Delta&#123;&#125;t)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              —which is a bit different from before—approaches
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$A(t_0)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              as{" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "}approaches{" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                —so
              </NoBreak>
              {" "}that makes up
              {" "}
              <NoBreak>
                <Math>
                  $A(t_0)B'(t_0)$
                </Math>
                .
              </NoBreak>
              {" "}(The
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              differentiability
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              of{" "}
              <Math>
                $A$
              </Math>
              {" "}and{" "}
              <Math>
                $B$
              </Math>
              {" "}at{" "}
              <NoBreak>
                <Math>
                  $t_0$
                </Math>
                —that
              </NoBreak>
              {" "}we are tacitly
              assuming—implies
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              continuity
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              as well, which implies that{" "}
              <Math>
                $A(t_0 + \Delta&#123;&#125;t)$
              </Math>
              {" "}
              approaches{" "}
              <Math>
                $A(t_0)$
              </Math>
              {" "}as{" "}
              <Math>
                $\Delta t$
              </Math>
              {" "}approaches{" "}
              <Math>
                $0$
              </Math>
              .)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Summarizing, the three terms separately
              approach
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(AB)'(t_0)$$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$B(t_0)A'(t_0)$$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$A(t_0)B'(t_0)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              as{" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "}approaches{" "}
              <Math>
                $0$
              </Math>
              {" "}and, in fact, 
              because the equation holds no matter how
              close we make each term to its respective limit
              above, one can conclude that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(AB)'(t_0) = B(t_0)A'(t_0) + A(t_0)B'(t_0)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for functions{" "}
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
              {" "}differentiable at
              a point{" "}
              <NoBreak>
                <Math>
                  $t_0$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Nb: This result is known as the{" "}
              <i>
                product rule
              </i>
              .
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}
              Keeping things alphabetical everywhere, the 
              same equation is more often written
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(AB)'(t_0) = A'(t_0)B(t_0) + A(t_0)B'(t_0)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              with “
              <NoBreak>
                <Math>
                  $A'(t_0)B(t_0)$
                </Math>
                ”
              </NoBreak>
              {" "}in the middle. (But
              which is the same, of course, as{" "}
              <Math>
                $B(t_0)A'(t_0)$
              </Math>
              .)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={18}>
          <VerticalChunk>
            <b>
              Exercise 18.
            </b>
            {" "}
            The identity
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$(f + g)' = f' + g'$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            happens to be true for differentiable
            functions{" "}
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
            {" "}What English-language
            aphorism can summarize it? (This identity
            is known as the{" "}
            <i>
              sum rule
            </i>
            , by the way.)
          </VerticalChunk>
          <Pause />
          <Solution solution_number={18}>
            <VerticalChunk>
              One can say
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              the derivative of the sum is the sum of the
              derivatives
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              or
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the sum is the sum of
              the rates of change
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              or (we made this one up)
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the aggregate is the sum
              of the rates of change of the components
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              (etc).
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={19}>
          <VerticalChunk>
            <b>
              Exercise 19.
            </b>
            {" "}
            If we rewrite the “product rule” of Exercise
            17 in the same terse style as the “sum rule”
            of Exercise 19, what do we obtain?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={19}>
            <VerticalChunk>
              The form of...
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(fg)'(t_0) = f'(t_0)g(t_0) + f(t_0)g'(t_0)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...that follows the style of...
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(f + g)' = f' + g'$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...is...
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(fg)' = f'g + fg'$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...this. (Valid for differentiable functions
              {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $g:$
              </Math>
              {" "}{" "}
              <Math>
                $\rr \ra \rr$
              </Math>
              .)
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}
              Whereas
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(fg)'(t_0) = f'(t_0)g(t_0) + f(t_0)g'(t_0)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is an equality between real numbers,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(fg)' = f'g + fg'$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is an equality between functions. So there is 
              a more-than-skin-deep difference between the
              two forms. Also note that each form has its
              own “qualitatively distinct” qualifying conditions.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              (To wit,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(fg)'(t_0) = f'(t_0)g(t_0) + f(t_0)g'(t_0)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              holds “for{" "}
              <Math>
                $t_0$
              </Math>
              {" "}at which{" "}
              <Math>
                $f$
              </Math>
              {" "}and{" "}
              <Math>
                $g$
              </Math>
              {" "}are
              differentiable”, while
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(fg)' = f'g + fg'$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              holds “for differentiable functions{" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $g$
              </Math>
              ”.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={20}>
          <VerticalChunk>
            <b>
              Exercise 20.
            </b>
            {" "}
            If the identities
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$(f + g)' = f' + g'$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            and
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$(fg)' = f'g + fg'$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            for differentiable{" "}
            <NoBreak>
              <Math>
                $f$
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <Math>
              $g$
            </Math>
            {" "}are deemed 
            “differentiation formulas”, then what is a
            third “differentiation formula”{" "}
            <i>
              already 
              encountered
            </i>
            {" "}(in possibly disguised form) prior 
            to this point?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={20}>
            <VerticalChunk>
              That would be the fact that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(cf)' = cf'$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for all differentiable functions{" "}
              <Math>
                $f : \rr \ra \rr$
              </Math>
              ,
              for all{" "}
              <NoBreak>
                <Math>
                  $c \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "}mentioned in Exercise 10
              for{" "}
              <Math>
                $c = 2$
              </Math>
              .
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}
              You can also write
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(cf)' = c \cdot f'$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              if it helps clarify the difference between the
              left- and right-hand sides. (The difference being
              namely “(
              <Math>
                $c$
              </Math>
              {" "}times{" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                )
              </NoBreak>
              {" "}prime” on the left vs. “c
              times (
              <Math>
                $f$
              </Math>
              {" "}prime)” on the right.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={21}>
          <VerticalChunk>
            <b>
              Exercise 21.
            </b>
            {" "}
            The solution to the previous exercise
            erroneously assumes that the product of a
            constant and a function has been defined. It
            has not! Keeping in mind that the{" "}
            <i>
              sum
            </i>
            {" "}
            of two functions{" "}
            <NoBreak>
              <Math>
                $f$
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <Math>
              $g: \rr \ra \rr$
            </Math>
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$f + g$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            is defined by the equation
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$f + g = (x \ra f(x) + g(x))$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            while their composition is defined by
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$f \circ g = (x \ra f(g(x)))$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            and so on, what is the similar, most logical
            definition for
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$cf$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            where{" "}
            <Math>
              $c \in \rr$
            </Math>
            {" "}and{" "}
            <Math>
              $f : \rr \ra \rr$
            </Math>
            ?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={21}>
            <VerticalChunk>
              The “logical” definition is:
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$cf = (x \ra cf(x))$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              where the product “
              <NoBreak>
                <Math>
                  $cf(x)$
                </Math>
                ”
              </NoBreak>
              {" "}is an ordinary
              multiplication between two real numbers,
              because{" "}
              <Math>
                $c$
              </Math>
              {" "}is a real number and{" "}
              <Math>
                $f(x)$
              </Math>
              {" "}is
              a real number! (In this way, the product of
              a function by a real number “bootstraps”
              off of the ordinary product of real numbers—this
              is already similar to what happens for the
              definition...
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$fg = (x \ra f(x)g(x))$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              of the product of two functions from{" "}
              <Math>
                $\rr$
              </Math>
              {" "}to{" "}
              <Math>
                $\rr$
              </Math>
              ,
              or with the case of function addition, that
              relies on real number addition.) BUT. There
              is a MORE CLEVER way of doing the definition.
              Which is to define
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$cf = (x \ra c)f$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              where the right-hand-side is{" "}
              <i>
                one function
                times another
              </i>
              , i.e.,{" "}
              <i>
                a product of functions
              </i>
              ,
              which is something that has ITSELF ALREADY BEEN
              DEFINED. (!) (To wit, the definition of
              function multiplication is that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$fg = (x \ra f(x)g(x))$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              of course.) (Wait we just mentioned that
              already.) Mathematicians LOVE to bootstrap off
              an intermediate step, instead of going back to
              the beginning, so the second way is clearly the
              superior definition!!
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={22}>
          <VerticalChunk>
            <b>
              Exercise 22.
            </b>
            {" "}
            The definition
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$f + g = (x \ra f(x) + f(x))$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            for a sum of functions{" "}
            <Math>
              $f, g : \rr \ra \rr$
            </Math>
            {" "}
            can also be written
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$(f + g)(x) = f(x) + g(x)$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            in the sense that either of these equations tells
            you how{" "}
            <Math>
              $f + g$
            </Math>
            {" "}acts on an arbitrary input. (Which
            is what you need to do, to define a function. A
            slight subtlety is that the definition
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$f + g = (x \ra f(x) + f(x))$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            announces more clearly via its notation that 
            “
            <NoBreak>
              <Math>
                $f + g$
              </Math>
              ”
            </NoBreak>
            {" "}{" "}
            <i>
              is a function
            </i>
            {" "}and not some other
            object, like a number, but this is a minor point.)
            Rewrite the definitions of
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$f \circ g$$
          </MathBlock>
          <Pause />
          <MathBlock>
            $$fg$$
          </MathBlock>
          <Pause />
          <MathBlock>
            $$f/g$$
          </MathBlock>
          <Pause />
          <MathBlock>
            $$f - g$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            in the style of the second equation. For extra
            credit: use a different symbol each time to denote
            the input.
          </VerticalChunk>
          <Pause />
          <Solution solution_number={22}>
            <VerticalChunk>
              E.g.:
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(f \circ g)(x) = f(g(x))$$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$(fg)(u) = f(u)g(u)$$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$(f/g)(z) = f(z)/g(z)$$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$(f - g)(t) = f(t) - g(t)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              (Looking at these definitions we must really admit that
              we prefer the first form, with the arrow, found at the
              end of the chapter—it's more explicit!)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={23}>
          <VerticalChunk>
            <b>
              Exercise 23.
            </b>
            {" "}
            What does...
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$A_1(t_0 + h) \,\times\, \dots \,\times\, A_&#123;i-1&#125;(t_0 + h) \,\times\, &#123;A_i(t_0 + h) - A_i(t_0)\over h&#125; \,\times\, A_&#123;i + 1&#125;(t_0) \,\times\, \cdots  \,\times\, A_n(t_0)$$
            <ImageRight src="/images/svg_ch4_big_product_parchment_cloud.svg" />
          </MathBlock>
          <Pause />
          <VerticalChunk>
            ...approach as{" "}
            <Math>
              $h$
            </Math>
            {" "}goes to{" "}
            <NoBreak>
              <Math>
                $0$
              </Math>
              ,
            </NoBreak>
            {" "}if{" "}
            <Math>
              $A_1, \dots, A_n$
            </Math>
            {" "}
            {" "}
            <Math>
              $: \rr \ra \rr$
            </Math>
            {" "}are differentiable at the point{" "}
            <Math>
              $t_0$
            </Math>
            ?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={23}>
            <VerticalChunk>
              We can start with the fraction in the
              middle of the product:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_big_product_fraction_outline.svg" />
            <Pause />
            <VerticalChunk>
              This is seen to be a Newton quotient
              (cf. Exercise 16)
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$f(x + h) - f(x)\over h$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              with{" "}
              <NoBreak>
                <Math>
                  $f = A_i$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $x = t_0$
                </Math>
                ,
              </NoBreak>
              {" "}per which
              (Exercise 16 Note 3), the fraction approaches
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$A_i'(t_0)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              as{" "}
              <Math>
                $h$
              </Math>
              {" "}approaches{" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "}given also the assumption 
              that each of the functions{" "}
              <NoBreak>
                <Math>
                  $A_1$
                </Math>
                ,
              </NoBreak>
              {" "}...,{" "}
              <Math>
                $A_n$
              </Math>
              {" "}
              (including{" "}
              <NoBreak>
                <Math>
                  $A_i$
                </Math>
                )
              </NoBreak>
              {" "}is differentiable at{" "}
              <Math>
                $t_0$
              </Math>
              .
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Next down in order of interesting-ness we presumably
              have the terms{" "}
              <Math>
                $A_1(t_0 + h)$
              </Math>
              {" "}through{" "}
              <Math>
                $A_&#123;i-1&#125;(t_0 + h)$
              </Math>
              {" "}
              at the beginning of the product...
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_big_product_prefix_outline.svg" />
            <Pause />
            <VerticalChunk>
              ...; here the
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              differentiability
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              of{" "}
              <Math>
                $A_1$
              </Math>
              {" "}at{" "}
              <Math>
                $t_0$
              </Math>
              {" "}implies the
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              continuity
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              of{" "}
              <Math>
                $A_1$
              </Math>
              {" "}at{" "}
              <NoBreak>
                <Math>
                  $t_0$
                </Math>
                ,
              </NoBreak>
              {" "}which implies that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$A_1(t_0 + h)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              approaches
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$A_1(t_0)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              as{" "}
              <Math>
                $h$
              </Math>
              {" "}approaches{" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                .
              </NoBreak>
              {" "}(These various
              technicalities concerning a generic function
              {" "}
              <Math>
                $f : \rr \ra \rr$
              </Math>
              {" "}are mentioned in the solution
              to Exercise 17.) Similarly for{" "}
              <Math>
                $A_2(t_0 + h)$
              </Math>
              ,
              etc, up to{" "}
              <NoBreak>
                <Math>
                  $A_&#123;i-1&#125;(t_0 + h)$
                </Math>
                ,
              </NoBreak>
              {" "}so
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$A_1(t_0 + h) \,\times\, \dots \,\times\, A_&#123;i-1&#125;(t_0 + h)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              approaches
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$A_1(t_0) \,\times\, \dots \,\times\, A_&#123;i-1&#125;(t_0)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              as{" "}
              <Math>
                $h$
              </Math>
              {" "}approaches{" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                .
              </NoBreak>
              {" "}(If some quantities are
              each approaching a different value, then the 
              product-of-the-quantities will approach the 
              product-of-the-values—something not mentioned
              in the solution to Exercise 17, but that might
              have been.)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Lastly one has the tail end of the product,
              where{" "}
              <Math>
                $h$
              </Math>
              {" "}does not even appear:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_big_product_suffix_outline.svg" />
            <Pause />
            <VerticalChunk>
              Because{" "}
              <Math>
                $h$
              </Math>
              {" "}does not appear here, the tail end
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              stays put
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              where it is, irrespective of the value of{" "}
              <Math>
                $h$
              </Math>
              .
              So that was easy! Altogether, the answer is
              therefore:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_big_product_final_answer.svg" />
            <Pause />
            <VerticalChunk>
              ...with a lone “
              <NoBreak>
                <Math>
                  $A_i'$
                </Math>
                ”
              </NoBreak>
              {" "}in the middle.
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={24}>
          <VerticalChunk>
            <b>
              Exercise 24.
            </b>
            {" "}
            The function below is also the red
            curve from Exercise 12, known as the
            {" "}
            <i>
              cosine function
            </i>
            {" "}(already encountered
            in Chapter 3, Exercise 7). Knowing that
            this function is the{" "}
            <NoBreak>
              <Math>
                $x$
              </Math>
              -coordinate
            </NoBreak>
            {" "}of a
            point rotating at unit speed around a unit
            circle, find, by inspection of the graph,
            a rational approximation to the circumference
            of a unit circle.
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch4_cosine_for_eta.svg" />
          <Pause />
          <Solution solution_number={24}>
            <VerticalChunk>
              Because the particle is going at unit speed the
              circumference of the unit circle is equal to the
              amount of time it takes the particle to complete one
              revolution of the circle. That is, for example, the
              length of this yellow interval:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_cosine_for_eta_with_yellow.svg" />
            <Pause />
            <VerticalChunk>
              One revolution around the circle is also
              made up of four quarter-revolutions, where
              each quarter-revolution of the circle is “half a bump”,
              on the graph:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_cosine_for_eta_with_two_yellows.svg" />
            <Pause />
            <VerticalChunk>
              Going a bit further,{" "}
              <i>
                seven
              </i>
              {" "}of these
              quarter-revolutions appear to take up exactly
              {" "}
              <Math>
                $t = 11$
              </Math>
              {" "}units of time (!!!!!!!!!!!) (or maybe
              just a{" "}
              <i>
                little
              </i>
              {" "}less than{" "}
              <Math>
                $11$
              </Math>
              {" "}units, if
              you zoom in):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_cosine_for_eta_revealed.svg" />
            <Pause />
            <VerticalChunk>
              Therefore
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\Large &#123;11 \over 7&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is an approximation to the quarter-circumference of
              the circle, and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\Large 4 \cdot &#123;11 \over 7&#125; = &#123;44 \over 7&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is an approximation to the circumference of a unit
              circle.
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}
              This approximation ends up being about 
              half-a-part-in-a-thousand too large 
              (
              <Math>
                $0.040249943...\%$
              </Math>
              {" "}too large) (or just: 
              &lt;span class="nobreak"&gt;“
              <Math>
                $0.00040249943...$
              </Math>
              &lt;/span&gt;
              too large”), which is strikingly good, all things
              considered.
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 2.
              </i>
              {" "}
              Numerically, note that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\Large &#123;44 \over 7&#125; = 6.285714\dots$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is a bit larger than{" "}
              <NoBreak>
                <Math>
                  $6$
                </Math>
                ,
              </NoBreak>
              {" "}which agrees with
              what we see here for the length of a full
              revolution...
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_cosine_for_eta_tau_verification.svg" />
            <Pause />
            <VerticalChunk>
              ...whereas
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\Large &#123;11 \over 7&#125; = 1.571428\dots$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is about{" "}
              <NoBreak>
                <Math>
                  $1.6$
                </Math>
                ,
              </NoBreak>
              {" "}which also appears to agree
              with what we can see on the graph about the
              length of a quarter-revolution:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_cosine_for_eta_eta_verification.svg" />
            <Pause />
            <VerticalChunk>
              (So, we have some secondary “visual confirmation”
              of our approximations.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={25}>
          <VerticalChunk>
            <b>
              Exercise 25.
            </b>
            {" "}
            The graphs below are the horizontal and
            vertical velocities...
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch4_pacman1_hor0.svg">
            <ImageLeft
              src="/images/svg_ch4_pacman1_x_prime_t_scloud.svg"
              offset_y="1em" />
          </Image>
          <Pause />
          <Image src="/images/svg_ch4_pacman1_ver0.svg" />
          <Pause />
          <VerticalChunk>
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
            {" "}increase towards the right, 
            and{" "}
            <NoBreak>
              <Math>
                $y$
              </Math>
              -coordinates
            </NoBreak>
            {" "}increase towards the top:
          </VerticalChunk>
          <Pause />
          <Image
            src="/images/svg_ch4_pacman1_maze.svg"
            height="590px" />
          <Pause />
          <VerticalChunk>
            Where is Pacman at{" "}
            <NoBreak>
              <Math>
                $t = 49$
              </Math>
              s?
            </NoBreak>
            {" "}(Note: Pacman 
            is NOT assumed to be anywhere in particular at 
            {" "}
            <NoBreak>
              <Math>
                $t = 40$
              </Math>
              s—you
            </NoBreak>
            {" "}have to figure that out from the 
            data!)
          </VerticalChunk>
          <Pause />
          <Solution solution_number={25}>
            <VerticalChunk>
              Let's start by examining Pacman's first six displacements,
              appearing here in blue (positive displacements, going to the right 
              or up) and red (negative displacements, going to the left or down):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_pacman1_hor1.svg" />
            <Pause />
            <Image src="/images/svg_ch4_pacman1_ver1.svg" />
            <Pause />
            <VerticalChunk>
              We can estimate the duration of each
              displacement to the closest 10th of a second
              (mistakes of estimation can be made, we shall recover):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_pacman1_hor2.svg" />
            <Pause />
            <Image src="/images/svg_ch4_pacman1_ver2.svg" />
            <Pause />
            <VerticalChunk>
              We can also estimate the velocity to be
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\pm 6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              when it is nonzero (for displacement
              <InlineImage
                src="/images/svg_ch4_pacman1_pellet5_inline.svg"
                class="ch4_pacman1_inline_number_pellet" />
              the velocity might seem more like{" "}
              <Math>
                $-6.8\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
              </Math>
              {" "}
              at the least, but we've already made more
              significant errors while eyeballing the durations, so
              nevermind). Using
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(\te&#123;velocity&#125;) \times (\te&#123;amount of time&#125;) = (\te&#123;displacement&#125;)$$
              <ImageRight src="/images/svg_ch4_pacman1_velocity_times_amt_time_cloud.svg" />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              then gives us the following estimates for the
              <del>
                amount of travel
              </del>
              &ensp;
              <del>
                during the
              </del>
              &ensp;six displacements:
            </VerticalChunk>
            <Pause />
            <CentralDisplay>
              <InlineImage
                style="margin-right:1em"
                src="/images/svg_ch4_pacman1_pellet1_inline.svg"
                class="ch4_pacman1_inline_number_pellet" />
              {" "}{" "}
              <Math>
                $-6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\,\times\,\,0.5\te&#123;s&#125;\,\,=\,\,-3.375\,\te&#123;cells&#125;$
              </Math>
              {" "}{" "}
              <ImageRight src="/images/svg_ch4_pacman1_cells_per_second_times_seconds_cloud.svg" />
            </CentralDisplay>
            <Pause />
            <CentralDisplay>
              <InlineImage
                style="margin-right:1em"
                src="/images/svg_ch4_pacman1_pellet2_inline.svg"
                class="ch4_pacman1_inline_number_pellet" />
              {" "}{" "}
              <Math>
                $-6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\,\times\,\,0.4\te&#123;s&#125;\,\,=\,\,-2.7\,\te&#123;cells&#125;$
              </Math>
              {" "}{" "}
            </CentralDisplay>
            <Pause />
            <CentralDisplay>
              <InlineImage
                style="margin-right:1em"
                src="/images/svg_ch4_pacman1_pellet3_inline.svg"
                class="ch4_pacman1_inline_number_pellet" />
              {" "}{" "}
              <Math>
                $6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\,\times\,\,0.9\te&#123;s&#125;\,\,=\,\,6.075\,\te&#123;cells&#125;$
              </Math>
              {" "}{" "}
            </CentralDisplay>
            <Pause />
            <CentralDisplay>
              <InlineImage
                style="margin-right:1em"
                src="/images/svg_ch4_pacman1_pellet4_inline.svg"
                class="ch4_pacman1_inline_number_pellet" />
              {" "}{" "}
              <Math>
                $6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\,\times\,\,0.4\te&#123;s&#125;\,\,=\,\,2.7\,\te&#123;cells&#125;$
              </Math>
              {" "}{" "}
            </CentralDisplay>
            <Pause />
            <CentralDisplay>
              <InlineImage
                style="margin-right:1em"
                src="/images/svg_ch4_pacman1_pellet5_inline.svg"
                class="ch4_pacman1_inline_number_pellet" />
              {" "}{" "}
              <Math>
                $-6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\,\times\,\,0.4\te&#123;s&#125;\,\,=\,\,-2.7\,\te&#123;cells&#125;$
              </Math>
              {" "}{" "}
            </CentralDisplay>
            <Pause />
            <CentralDisplay>
              <InlineImage
                style="margin-right:1em"
                src="/images/svg_ch4_pacman1_pellet6_inline.svg"
                class="ch4_pacman1_inline_number_pellet" />
              {" "}{" "}
              <Math>
                $6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\,\times\,\,0.9\te&#123;s&#125;\,\,=\,\,6.075\,\te&#123;cells&#125;$
              </Math>
              {" "}{" "}
            </CentralDisplay>
            <Pause />
            <VerticalChunk>
              Given the horizontal/vertical alternation
              of displacements, this would nominally 
              imply the following set of initial motions:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_pacman1_initial_displacements_before_rounding.svg" />
            <Pause />
            <VerticalChunk>
              But these are approximate numbers and the
              true values must be integers, except for
              <InlineImage
                src="/images/svg_ch4_pacman1_pellet1_inline.svg"
                class="ch4_pacman1_inline_number_pellet" />
              . (Because we don't know where Pacman started
              out. For
              <InlineImage
                src="/images/svg_ch4_pacman1_pellet6_inline.svg"
                class="ch4_pacman1_inline_number_pellet" />
              &ensp;the next displacement, if you look back at
              the graphs, is horizontal, so yes.) In fact,
              if you look at the maze,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$3$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              cells is the smallest amount that Pacman
              can travel vertically when changing{" "}
              <Math>
                $y$
              </Math>
              -coordinate,
              between two moments of horizontal motion.
              The next smallest possible amounts are
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$4$$
              <ImageLeft
                src="/images/svg_ch4_pacman1_disp_4_cloud.svg"
                width="700px" />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$6$$
              <ImageLeft
                src="/images/svg_ch4_pacman1_disp_6_cloud.svg"
                width="1400px" />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$7$$
              <ImageLeft
                src="/images/svg_ch4_pacman1_disp_7_cloud.svg"
                width="700px" />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              cells, with{" "}
              <Math>
                $5$
              </Math>
              {" "}not being a possibility.
              In the horizontal direction,
              the smallest amounts are
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$3, 6, \te&#123; and &#125; 9$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              (and{" "}
              <Math>
                $12$
              </Math>
              {" "}and ...) which is even more restrictive.
              Now if each of our duration 
              measurements carries an error of no more than
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\pm&#123;&#125;0.2\te&#123;s&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              each computed displacement is at most
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\times\,\pm&#123;&#125;0.2\te&#123;s&#125;\,=\,\pm1.35\te&#123;c&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              from the truth, give or take the small
              difference between{" "}
              <Math>
                $6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
              </Math>
              {" "}
              and the actual velocity. So
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$-2.7\te&#123;c&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              must be either
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$-3\te&#123;c&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              or
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$-4\te&#123;c&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              these being the only two posssible integer
              vertical displacements within{" "}
              <NoBreak>
                <Math>
                  $\pm1.35$
                </Math>
                c
              </NoBreak>
              {" "}of{" "}
              <NoBreak>
                <Math>
                  $-2.7$
                </Math>
                c.
              </NoBreak>
              {" "}
              Then, applying similar logic to each
              measurement, the initial motions must be:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_pacman1_initial_motions.svg" />
            <Pause />
            <VerticalChunk>
              The maze fits these constraints in only two places
              (note that
              <InlineImage
                src="/images/svg_ch4_pacman1_pellet2_inline.svg"
                class="ch4_pacman1_inline_number_pellet" />
              &ensp;and{" "}
              <InlineImage
                src="/images/svg_ch4_pacman1_pellet4_inline.svg"
                class="ch4_pacman1_inline_number_pellet" />
              &ensp;equal{" "}
              <Math>
                $-3\te&#123;c&#125;$
              </Math>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $3\te&#123;c&#125;$
                </Math>
                ,
              </NoBreak>
              {" "}in each
              case):
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch4_pacman1_maze_two_possibilities.svg"
              height="590px" />
            <Pause />
            <VerticalChunk>
              Looking into the future, 
              the next three displacements are 
              right/down/right and last
              ~
              <Math>
                $3.2$
              </Math>
              s/~
              <Math>
                $0.4$
              </Math>
              s/~
              <Math>
                $1.3$
              </Math>
              s
              respectively:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_pacman1_hor3.svg" />
            <Pause />
            <Image src="/images/svg_ch4_pacman1_ver3.svg" />
            <Pause />
            <VerticalChunk>
              (Nb: Imagine translating these intervals to the left or right until
              the start of the interval is at an integer value: this is a good
              way to estimate the length.)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Because displacement
              <InlineImage
                src="/images/svg_ch4_pacman1_pellet7_inline.svg"
                class="ch4_pacman1_inline_number_pellet" />
              &ensp;is horizontal to the right the only possible
              remaining solution is the right-hand one,
              or else Pacman would collide with the ghost cage,
              with displacement
              <InlineImage
                src="/images/svg_ch4_pacman1_pellet6_inline.svg"
                class="ch4_pacman1_inline_number_pellet" />
              &ensp;equal to 6c not 7c, or else Pacman would 
              collide with a wall:
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch4_pacman1_maze_would_collide.svg"
              height="590px" />
            <Pause />
            <VerticalChunk>
              Since
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\times\,3.2\te&#123;s&#125;\,=\,21.6\te&#123;c&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              it seems that displacement
              <InlineImage
                src="/images/svg_ch4_pacman1_pellet7_inline.svg"
                class="ch4_pacman1_inline_number_pellet" />
              &ensp;brings Pacman all the way around the maze to
              the left edge of the ghost cage, like so...
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch4_pacman1_maze_bring_around.svg"
              height="590px" />
            <Pause />
            <VerticalChunk>
              ...though it is hard to measure that distance;
              but this is confirmed by the fact that the next
              two displacements are “down by{" "}
              <Math>
                $3$
              </Math>
              {" "}and to the right”;
              specifically, since
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$-6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\times\,0.4\te&#123;s&#125;\,=\,-2.7\te&#123;c&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              displacement
              <InlineImage
                src="/images/svg_ch4_pacman1_pellet8_inline.svg"
                class="ch4_pacman1_inline_number_pellet" />
              &ensp;must be{" "}
              <NoBreak>
                <Math>
                  $-3$
                </Math>
                c
              </NoBreak>
              {" "}or{" "}
              <Math>
                $-4$
              </Math>
              c;
              must actually be{" "}
              <NoBreak>
                <Math>
                  $-3$
                </Math>
                c
              </NoBreak>
              {" "}since displacement
              <InlineImage
                src="/images/svg_ch4_pacman1_pellet9_inline.svg"
                class="ch4_pacman1_inline_number_pellet" />
              is to the right; so, notwithstanding the exact 
              length of displacement
              <InlineImage
                src="/images/svg_ch4_pacman1_pellet9_inline.svg"
                class="ch4_pacman1_inline_number_pellet" />
              , there is only one possibility for displacements
              <InlineImage
                src="/images/svg_ch4_pacman1_pellet1_inline.svg"
                class="ch4_pacman1_inline_number_pellet" />
              through
              <InlineImage
                src="/images/svg_ch4_pacman1_pellet8_inline.svg"
                class="ch4_pacman1_inline_number_pellet" />
              :
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch4_pacman1_maze_final_solution.svg"
              height="590px" />
            <Pause />
            <VerticalChunk>
              So at{" "}
              <NoBreak>
                <Math>
                  $t = 49$
                </Math>
                s,
              </NoBreak>
              {" "}between displacements
              <InlineImage
                src="/images/svg_ch4_pacman1_pellet7_inline.svg"
                class="ch4_pacman1_inline_number_pellet" />
              &ensp;and
              <InlineImage
                src="/images/svg_ch4_pacman1_pellet8_inline.svg"
                class="ch4_pacman1_inline_number_pellet" />
              , Pacman is immediately to the left of the ghost cage.
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={26}>
          <VerticalChunk>
            <b>
              Exercise 26.
            </b>
            {" "}
            Same question, but for the following maze...
          </VerticalChunk>
          <Pause />
          <Image
            src="/images/svg_ch4_pacman2_maze.svg"
            height="551px" />
          <Pause />
          <VerticalChunk>
            ...and for the following velocity data, with the 
            horizontal and vertical velocities
            superimposed on one graph (just a cosmetic 
            change—note that green is the vertical velocity)...
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch4_pacman2_frankenstein.svg" />
          <Pause />
          <VerticalChunk>
            ...and asking for Pacman's position at{" "}
            <Math>
              $t = 34$
            </Math>
            s.
          </VerticalChunk>
          <Pause />
          <Solution solution_number={26}>
            <VerticalChunk>
              It seems well-advised to start by heuristically verifying
              that Pacman's speed remains
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\approx 6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              no matter the direction that Pacman is headed, as long as Pacman is
              in motion.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              For example, take the instant{" "}
              <NoBreak>
                <Math>
                  $t \approx 23.7$
                </Math>
                s,
              </NoBreak>
              {" "}when the 
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -
              </NoBreak>
              {" "}and &lt;span class="nobreak"&gt;
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -velocities&lt;/span&gt;
              </NoBreak>
              {" "}are 
              both about (?){" "}
              <Math>
                $4.8\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
              </Math>
              :
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_at_23_7.svg" />
            <Pause />
            <VerticalChunk>
              The velocity vector (cf. Exercise 12) is therefore about
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(4.8, 4.8)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              in units of{" "}
              <Math>
                $\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
              </Math>
              {" "}at{" "}
              <Math>
                $t \approx 23.7$
              </Math>
              s,
              and the speed, being the length of the velocity
              vector (cf. Exercise 12), is about
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\sqrt&#123;4.8^2 + 4.8^2&#125; = \sqrt&#123;2&#125; \times 4.8 = 6.788...$$
              <ImageLeft src="/images/svg_ch4_pacman2_4_point_8_cloud.svg" />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              (Pythagoras!)
              in units of{" "}
              <Math>
                $\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
              </Math>
              {" "}as well,
              and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$6.788... \approx 6.75$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              which supports, in this case, the hypothesis that
              Pacman's speed is{" "}
              <Math>
                $\approx 6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
              </Math>
              {" "}
              regardless of the direction of travel.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              For more verification, take{" "}
              <NoBreak>
                <Math>
                  $t = 26\te&#123;s&#125;$
                </Math>
                ,
              </NoBreak>
              {" "}
              at which point the velocity vector is roughly
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(6.5, -2)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              cells per second:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_at_26.svg" />
            <Pause />
            <VerticalChunk>
              This gives a speed of
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\sqrt&#123;6.5^2 + 2^2&#125; = \sqrt&#123;46.25&#125; = 6.800...$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              cells per second, Again close to{" "}
              <NoBreak>
                <Math>
                  $6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
                </Math>
                .
              </NoBreak>
              {" "}(!)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              For two more verifications take{" "}
              <Math>
                $t = 27\te&#123;s&#125;$
              </Math>
              {" "}
              and{" "}
              <Math>
                $t = 30\te&#123;s&#125;$
              </Math>
              :
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_at_27_and_30.svg" />
            <Pause />
            <VerticalChunk>
              The speed at{" "}
              <Math>
                $t = 27\te&#123;s&#125;$
              </Math>
              {" "}is approximately
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\sqrt&#123;3^2 + 6.2^2&#125; = \sqrt&#123;47.44&#125; = 6.888$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              cells per second, while the speed at{" "}
              <Math>
                $t = 30\te&#123;s&#125;$
              </Math>
              {" "}
              is approximately
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\sqrt&#123;5.6^2 + 3.6^2&#125; = \sqrt&#123;44.32&#125; = 6.657$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              cells per second. Both close-ish to
              {" "}
              <NoBreak>
                <Math>
                  $6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
                </Math>
                !
              </NoBreak>
              {" "}For one last
              verification (truly the last, we promise)
              consider{" "}
              <Math>
                $t = 31\te&#123;s&#125;$
              </Math>
              :
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_at_31.svg" />
            <Pause />
            <VerticalChunk>
              This yields a speed of
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\sqrt&#123;2.6^2 + 6.2^2&#125; = \sqrt&#123;45.2&#125; = 6.723...$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              cells per second, again close to{" "}
              <NoBreak>
                <Math>
                  $6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
                </Math>
                !
              </NoBreak>
              {" "}
              (Closest so far, in fact.)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              We now admit, after this “heuristic verification”, 
              that Pacman goes approximately the same speed
              regardless of direction, namely something in
              the vicinity of{" "}
              <Math>
                $6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
              </Math>
              .
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Now consider the time interval from{" "}
              <Math>
                $t = 22.7\te&#123;s&#125;$
              </Math>
              {" "}to{" "}
              <Math>
                $t = 24.7\te&#123;s&#125;$
              </Math>
              :
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_first_big_purple.svg" />
            <Pause />
            <VerticalChunk>
              Both the{" "}
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
                -velocities
              </NoBreak>
              {" "}are nonzero
              during this interval, which indicates the presence
              of a curve. The curve starts with vertical motion
              and ends with horizontal motion:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_first_big_purple_annotations.svg" />
            <Pause />
            <VerticalChunk>
              Thus Pacman starts the curve going up, and ends the curve
              going right. Moreover, it takes Pacman
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$24.7\te&#123;s&#125; - 22.7\te&#123;s&#125; = 3\te&#123;s&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              to complete the curve (we know the curve is fully
              completed from the purely horizontal motion at
              either end), from which the curve must be
              approximately
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125; \times 3\te&#123;s&#125; = 20.25\te&#123;c&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              in length! In turn, using the approximation
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\approx &#123;11 \over 7&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for the quarter-circumference of a unit circle
              (cf
              <Math>
                $.$
              </Math>
              {" "}Exercise 24), this would indicate that
              the curve (which is a quarter-circle, as 
              all curves in this maze) has radius
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\approx &#123;20.25\te&#123;c&#125; \over 11/7&#125; = &#123;7 \times 20.25\te&#123;c&#125; \over 11&#125; = &#123;141.75\te&#123;c&#125; \over 11&#125; = 12.886...\te&#123;c&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              where we give up and use a calculator at the
              last step. But the possible radii are{" "}
              <NoBreak>
                <Math>
                  $3$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $6$
              </Math>
              ,
              {" "}
              <Math>
                $9$
              </Math>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $12$
                </Math>
                .
              </NoBreak>
              {" "}This all but rules out all of the
              maze curves except the one that has radius{" "}
              <Math>
                $12$
              </Math>
              ,
              and that allows a traversal that starts upward
              and ends rightward; we mean the upper left
              curve of the maze:
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch4_pacman2_upper_left_highlight.svg"
              height="551px" />
            <Pause />
            <VerticalChunk>
              From there, Pacman goes right for a bit, then
              takes another curve 3 seconds long, that starts
              rightward and ends downward:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_second_big_purple.svg" />
            <Pause />
            <VerticalChunk>
              ...this second curve must, of course, be the
              upper right-hand corner of the maze, that has the
              appropriate length, position, and orientation:
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch4_pacman2_upper_right_highlight.svg"
              height="551px" />
            <Pause />
            <VerticalChunk>
              What is extremely strange, however, is that
              Pacman immediately follows the end of this curve
              with rightward motion:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_first_warning_purple.svg" />
            <Pause />
            <VerticalChunk>
              In fact, it is also strange that Pacman{" "}
              <i>
                preceded
              </i>
              {" "}
              the first curve with rightward motion (when that curve
              starts at the leftmost edge of the maze):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_second_warning_purple.svg" />
            <Pause />
            <VerticalChunk>
              Looking back over our work, 
              we find that we made a mistake when we wrote
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$24.7\te&#123;s&#125; - 22.7\te&#123;s&#125; = 3\te&#123;s&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              the corrected version of that being of course
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$24.7\te&#123;s&#125; - 22.7\te&#123;s&#125; = 2\te&#123;s&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              (the second curve likewise lasted{" "}
              <Math>
                $2\te&#123;s&#125;$
              </Math>
              ,
              not{" "}
              <NoBreak>
                <Math>
                  $3\te&#123;s&#125;$
                </Math>
                )
              </NoBreak>
              {" "}making the length and radius of
              the first curve two-thirds of whatever we previously 
              computed (because{" "}
              <Math>
                $2\te&#123;s&#125;$
              </Math>
              {" "}is two-thirds of
              {" "}
              <NoBreak>
                <Math>
                  $3\te&#123;s&#125;$
                </Math>
                ),
              </NoBreak>
              {" "}i.e.,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;2 \over 3&#125; \times 12.886...\te&#123;c&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for the{" "}
              <i>
                radius
              </i>
              {" "}of the first (and second)
              curve, which means that the first and second curves
              actually had radii{" "}
              <NoBreak>
                <Math>
                  $9$
                </Math>
                ,
              </NoBreak>
              {" "}undoubtedly,
              and that Pacman's initial motion followed the 
              one-inside track (the two rightward motions are 
              easily seen to be ~
              <Math>
                $3\te&#123;c&#125;$
              </Math>
              {" "}each):
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch4_pacman2_corrected_highlights.svg"
              height="551px" />
            <Pause />
            <VerticalChunk>
              Next, after some downward motion we are faced
              with a long, juicy, down-and-then-left curve,
              which must surely be the bottom-right curve of
              radius{" "}
              <Math>
                $12$
              </Math>
              :
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_third_big_purple.svg" />
            <Pause />
            <VerticalChunk>
              Indeed, the curve lasts ~
              <NoBreak>
                <Math>
                  $2.7$
                </Math>
                s,
              </NoBreak>
              {" "}and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125; \times 2.7\te&#123;s&#125; = 18.225\te&#123;c&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is approximately the same as
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;11 \over 7&#125; \cdot 12\te&#123;c&#125; = 18.85...\te&#123;c&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              confirming the radius of{" "}
              <Math>
                $12\te&#123;c&#125;$
              </Math>
              {" "}and the location
              of the curve.
              Pacman's trajectory so far is then:
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch4_pacman2_continued_highlights.svg"
              height="551px" />
            <Pause />
            <VerticalChunk>
              Next Pacman seems to reverse course, and briefly
              re-enters the curve (going right and up a tiny bit):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_back_in_purple.svg" />
            <Pause />
            <VerticalChunk>
              But then changes again, and re-exits the curve
              (going left and down a tiny bit):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_back_out_purple.svg" />
            <Pause />
            <VerticalChunk>
              Then Pacman goes left-and-then-right-again by
              some small amount:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_back_out_purple.svg" />
            <Pause />
            <VerticalChunk>
              At this point—and in particular at 
              {" "}
              <NoBreak>
                <Math>
                  $t = 34\te&#123;s&#125;$
                </Math>
                —Pacman
              </NoBreak>
              {" "}is between a moment 
              of purely horizontal motion and purely vertical
              motion; since the left-and-then-right-again 
              motion did obviously not bring Pacman{" "}
              <Math>
                $3$
              </Math>
              {" "}cells
              over to the left (which is the next place 
              after the curve exit that is connected to both 
              horizontal and vertical paths),
              Pacman must 
              be at the bottom-left exit of the bottom-right
              maze corner, still.
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}
              Feel free to follow Pacman all the way
              to the end of the timeseries. He ends up somewhere
              near...
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={27}>
          <VerticalChunk>
            <b>
              Exercise 27.
            </b>
            {" "}
            Describe what a function might look like
            if its second derivative has this graph (broadly):
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch4_one_long_line.svg" />
          <Pause />
          <Solution solution_number={27}>
            <VerticalChunk>
              As the second derivative is the
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              rate of change of the slope
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              places where the second derivative is zero are 
              places where the slope of the function is constant.
              So the function will have a constant slope over
              each of these purple intervals (we're going to
              assume that what looks like{" "}
              <Math>
                $0$
              </Math>
              {" "}is{" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "}and eyeball 
              where that starts and ends, the statement
              does say “broadly” anyway):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_with_purple.svg" />
            <Pause />
            <VerticalChunk>
              As
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              constant slope
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              means
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              line segment
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              the function will therefore be a 
              line segment, over each of the purple intervals!
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Between these line segments, however, things
              happen, and there is a change in slope! The
              change in slope is given by the “amount of bump”
              in the second derivative between the intervals.
              As it turns out, the area enclosed by the bump
              gives the total change in slope:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_positive_area.svg" />
            <Pause />
            <VerticalChunk>
              (We won't argue this right now, but it's 
              sort-of-intuitive.)
              For bumps lying below the{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -axis
              </NoBreak>
              {" "}the area
              counts as negative; that negative area is, again,
              the total change in slope from one end of the bump
              to the other:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_negative_area.svg" />
            <Pause />
            <VerticalChunk>
              In any case the areas are all the same{" "}
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
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Put
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\Large a$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for the area of a positive bump (per appearances, 
              {" "}
              <NoBreak>
                <Math>
                  $a \approx 1$
                </Math>
                ),
              </NoBreak>
              {" "}and
              <ImageRight src="/images/svg_ch4_one_long_line_a_is_about_1_cloud.svg" />
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\Large c$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for the slope of a “low slope” line segment. Then a
              “high slope” line segment has slope
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\Large c + a$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              since we add{" "}
              <Math>
                $a$
              </Math>
              {" "}to the slope each time we go over
              a positive bump. 
              (And the slope goes back down to
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\Large (c + a) + (-a) = c$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              when we pass over a negative bump, with{" "}
              <Math>
                $-a$
              </Math>
              {" "}being
              the (negative) area of a negative bump.)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              With these variables in place, here is a generic
              illustration of a graph (in black) whose second
              derivative is the one from the statement (faded in
              the background):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_solution_sketch_1.svg">
              <ImageLeft src="/images/svg_ch4_one_long_line_c_is_approx_0_point_2_cloud.svg" />
            </Image>
            <Pause />
            <VerticalChunk>
              In this example{" "}
              <NoBreak>
                <Math>
                  $c \approx 0.2$
                </Math>
                ,
              </NoBreak>
              {" "}but{" "}
              <Math>
                $c$
              </Math>
              {" "}can be any
              value—this is not constrained by the second derivative.
              Moreover any amount of vertical translation can 
              also be introduced to the graph. (Vertical
              translation does not affect the derivative,
              much less the second derivative.)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              For another example, if{" "}
              <Math>
                $c = -a/2$
              </Math>
              ,
              meaning{" "}
              <Math>
                $c \approx -1/2$
              </Math>
              ,
              the graph ends up a perfectly balanced see-saw that 
              stays confined to a bounded range of{" "}
              <Math>
                $y$
              </Math>
              -values:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_solution_sketch_2.svg">
              <ImageLeft src="/images/svg_ch4_one_long_line_c_is_approx_minus_a_over_2_cloud.svg" />
            </Image>
            <Pause />
            <VerticalChunk>
              Moreover, like the previous graph, this solution
              can also be vertically translated by any amount!
              (And same for any solution.)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              For yet another example, here is a graph in which
              {" "}
              <NoBreak>
                <Math>
                  $c + a = 0$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $c = -a \approx -1$
              </Math>
              :
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_solution_sketch_3.svg" />
            <Pause />
            <VerticalChunk>
              Again, any of these graphs are
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              equally valid
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              solutions, and, for the last time,
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              any amount of vertical translation can be introduced
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              (you can move the graphs up and down). So in
              other words we have a “two-parameter family of
              solutions”: one parameter of the solution—free
              to choose—is{" "}
              <NoBreak>
                <Math>
                  $c$
                </Math>
                —while
              </NoBreak>
              {" "}another parameter—independently
              free to choose—is the amount of vertical
              translation.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              To claim a truly good “theoretical” understanding
              of the solution, however, we should also determine
              this rise here, if we can, as a function of{" "}
              <Math>
                $c$
              </Math>
              {" "}
              and{" "}
              <NoBreak>
                <Math>
                  $a$
                </Math>
                ,
              </NoBreak>
              {" "}i.e., the amount of rise between the end
              of one line segment and the start of the next:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_what_are_the_rises_1.svg" />
            <Pause />
            <VerticalChunk>
              In fact, is not entirely clear that there aren't
              possibly{" "}
              <i>
                two different
              </i>
              {" "}values of this rise,
              for the two different kinds of “connector curves”
              that exist (the concave ones and the convex ones):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_what_are_the_rises_2.svg" />
            <Pause />
            <VerticalChunk>
              (It will turn out that 
              the rises are all the same
              but we're just pointing out.)
              Focusing on the case
              of a convex connector curve, note 
              that the rise is lower bounded by
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\Large 1.6c$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              where{" "}
              <Math>
                $1.6 = 0.8 + 0.8$
              </Math>
              {" "}is the length (run) of
              the connector curve, because{" "}
              <Math>
                $c$
              </Math>
              {" "}is the{" "}
              <i>
                lowest 
                slope
              </i>
              {" "}found anywhere inside the connector
              curve:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_connector_curve_lower_bound.svg" />
            <Pause />
            <VerticalChunk>
              Symmetrically,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\Large 1.6(c + a)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is an upper bound on the rise, because{" "}
              <Math>
                $c + a$
              </Math>
              {" "}is the
              {" "}
              <i>
                greatest slope
              </i>
              {" "}anywhere inside the
              connector curve:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_connector_curve_upper_bound.svg" />
            <Pause />
            <VerticalChunk>
              To go any further we must add the first
              derivative to this sketch—the first derivative
              has value
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\Large c$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              where the function has slope{" "}
              <NoBreak>
                <Math>
                  $c$
                </Math>
                ,
              </NoBreak>
              {" "}has value
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\Large c + a$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              where the function has slope{" "}
              <NoBreak>
                <Math>
                  $c + a$
                </Math>
                ,
              </NoBreak>
              {" "}and
              climbs up/down along an S-shaped curve outside
              of those intervals, adhering
              to a slope that is given by the value of the
              second derivative:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_what_are_the_rises_3.svg" />
            <Pause />
            <VerticalChunk>
              The afore-mentioned lower bound of
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\Large 1.6c$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              coincides with the area of a rectangle that{" "}
              <i>
                lies
                below
              </i>
              {" "}the graph of the derivative:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_connector_curve_lower_bound_area.svg" />
            <Pause />
            <VerticalChunk>
              Whereas the afore-mentioned upper bound of
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\Large 1.6(a + c)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              coincides with the area of a rectangle that
              {" "}
              <i>
                lies above
              </i>
              {" "}the graph of the derivative:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_connector_curve_upper_bound_area.svg" />
            <Pause />
            <VerticalChunk>
              In other words, the rise of the convex connector
              curve is lower and upper bounded by these
              two areas. It will be helpful to write this
              as a pictorial inequality:
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch4_one_long_line_inequality_1.svg"
              width="800px" />
            <Pause />
            <VerticalChunk>
              But we can tighten the inequality by dividing the
              areas halfway (we'll let you think about this 
              one—if you don't get it, don't worry, because we'll
              revisit the same topic in detail at some point):
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch4_one_long_line_inequality_2.svg"
              width="800px" />
            <Pause />
            <VerticalChunk>
              Or even:
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch4_one_long_line_inequality_3.svg"
              width="800px" />
            <Pause />
            <VerticalChunk>
              If we take this logic to its bitter conclusion, we
              find the{" "}
              <i>
                e
              </i>
              quality:
            </VerticalChunk>
            <Pause />
            <Image
              src="/images/svg_ch4_one_long_line_equality.svg"
              width="800px" />
            <Pause />
            <VerticalChunk>
              And because the S-curve is centrally symmetric
              (the slopes at equal distance from the center are
              the same because those slopes can be read off the
              second derivative, and the second derivative bump
              is left-right symmetric) we can compute the area
              that the curve encloses exactly, by a geometric
              surgery:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_area_surgery.svg" />
            <Pause />
            <VerticalChunk>
              Long story short, the area enclosed, which is
              also the rise of the connector curve, is
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\Large 1.6\cdot (c + &#123;a\over 2&#125;)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...that can be read as “run times average slope”
              (because
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\Large 1.6$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is the run while the slope (first derivative)
              spends equal amounts of time, in equal measure,
              above and below the value
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\Large c + &#123;a \over 2&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              that is, indeed, the average of{" "}
              <Math>
                $c$
              </Math>
              {" "}and{" "}
              <Math>
                $c + a$
              </Math>
              ).
              For concave connector curves the
              S-curve of the derivative is...
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_concave_connector.svg" />
            <Pause />
            <VerticalChunk>
              ...flipped around from before, going from
              high to low, but the area enclosed by the S-curve
              is the same. This area is also the rise of the
              connector curve. Hence, long story short—for the
              second time—all connector curves have rise
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\Large 1.6\cdot (c + &#123;a\over 2&#125;)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and we can annotate our sketch of the
              “generic” solution with this additional piece of
              information, if we want. (Well...
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_with_rises_shown.svg" />
            <Pause />
            <VerticalChunk>
              ...there, no one can accuse us of not doing the
              homework ourselves.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={28}>
          <VerticalChunk>
            <b>
              Exercise 28.
            </b>
            {" "}
            Apply the definition
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$fg = (u \ra f(u)g(u))$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            of function multiplication
            in order to show that
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$(fg)h = f(gh)$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            for all functions{" "}
            <Math>
              $f, g, h : \rr \ra \rr$
            </Math>
            ,
            or, namely, to show that
          </VerticalChunk>
          <Pause />
          <CentralDisplayItalic>
            (
            <Math>
              $f$
            </Math>
            {" "}times{" "}
            <NoBreak>
              <Math>
                $g$
              </Math>
              )
            </NoBreak>
            {" "}times{" "}
            <Math>
              $h$
            </Math>
            {" "}{" "}
          </CentralDisplayItalic>
          <Pause />
          <VerticalChunk>
            equals
          </VerticalChunk>
          <Pause />
          <CentralDisplayItalic>
            {" "}{" "}
            <Math>
              $f$
            </Math>
            {" "}times (
            <Math>
              $g$
            </Math>
            {" "}times{" "}
            <Math>
              $h$
            </Math>
            )
          </CentralDisplayItalic>
          <Pause />
          <VerticalChunk>
            for all functions{" "}
            <Math>
              $f, g, h : \rr \ra \rr$
            </Math>
            .
          </VerticalChunk>
          <Pause />
          <Solution solution_number={28}>
            <VerticalChunk>
              It is necessary and sufficient to show that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$((fg)h)(u)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is the same as
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(f(gh))(u)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for an arbitrary input{" "}
              <NoBreak>
                <Math>
                  $u \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "}in order to
              show that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(fg)h$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$f(gh)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              are the same function. (Function equality is
              based on input-output behavior: two functions are
              equal if and only if every input is mapped to the
              same output under either function. See Note 6,
              Exercise 9, Chapter 3.)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Starting up,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$((fg)h)(u) = (fg)(u) \cdot h(u)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by the definition of function multiplication,
              and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(f(gh))(u) = f(u) \cdot (gh)(u)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              likewise. Moreover,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(fg)(u) = f(u) \cdot g(u)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(gh)(u) = g(u) \cdot h(u)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by the same definition again. Therefore,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$((fg)h)(u) = (f(u) \cdot g(u)) \cdot h(u)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              on the one hand, and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(f(gh))(u) = f(u) \cdot (g(u) \cdot h(u))$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              on the other hand. But
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(f(u) \cdot g(u)) \cdot h(u) = f(u) \cdot (g(u) \cdot h(u))$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by the associativity of ordinary real number
              multiplication. (Not function multiplication:
              {" "}
              <i>
                real number multiplication
              </i>
              .) So
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$((fg)h)(u)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              equals
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(f(gh))(u)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for arbitrary{" "}
              <NoBreak>
                <Math>
                  $u$
                </Math>
                ,
              </NoBreak>
              {" "}which completes the proof.
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}
              In words, we have just established the
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              associativity of function multiplication
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              while we had previously established the
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              associativity of function composition
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              (if you recall that one) in Exercise 9 of Chapter 
              3.
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 2.
              </i>
              {" "}
              By this result, we can write
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$fgh$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              without any parentheses at all: 
              it doesn't matter whether we think of this 
              product as{" "}
              <Math>
                $(fg)h$
              </Math>
              {" "}or{" "}
              <NoBreak>
                <Math>
                  $f(gh)$
                </Math>
                ,
              </NoBreak>
              {" "}the result 
              is the same.
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={29}>
          <VerticalChunk>
            <b>
              Exercise 29.
            </b>
            {" "}
            Prove that
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$f + g = g + f$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            and that
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$fg = gf$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            for all{" "}
            <NoBreak>
              <Math>
                $f, g : \rr \ra \rr$
              </Math>
              ,
            </NoBreak>
            {" "}using the fact that
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$a + b = b + a$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            and that
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$ab = ba$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            for all{" "}
            <NoBreak>
              <Math>
                $a, b \in \rr$
              </Math>
              .
            </NoBreak>
            {" "}
            (Prove something for functions by using the
            corresponding fact for numbers, namely.)
          </VerticalChunk>
          <Pause />
          <Solution solution_number={29}>
            <VerticalChunk>
              Given an arbitrary{" "}
              <Math>
                $u \in \rr$
              </Math>
              {" "}we have
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(f + g)(u) = f(u) + g(u)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(g + f)(u) = g(u) + f(u)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by the definition of function addition. But
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$f(u) + g(u) = g(u) + f(u)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by the commutativity of real number addition
              [
              <Math>
                $f(u)$
              </Math>
              {" "}and{" "}
              <Math>
                $g(u)$
              </Math>
              {" "}are both real numbers—the
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              commutativity
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              of real number addition is the fact that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$a + b = b + a$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for all real numbers{" "}
              <NoBreak>
                <Math>
                  $a$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $b$
                </Math>
                ,
              </NoBreak>
              {" "}mentioned in the
              statement—so we can use this here]; thus
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(f + g)(u) = (g + f)(u)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for all{" "}
              <NoBreak>
                <Math>
                  $u \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "}which implies
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$f + g = g + f$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by definition of function equality.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              For the second half we have, similarly,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\begin&#123;align&#125;
              (fg)(u) &= f(u) \cdot g(u) \\
              &= g(u) \cdot f(u) \up&#123;1.5&#125;\\
              &= (gf)(u) \up&#123;1.5&#125;
              \end&#123;align&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for arbitrary{" "}
              <NoBreak>
                <Math>
                  $u\in \rr$
                </Math>
                ,
              </NoBreak>
              {" "}where the first and
              last equality are by the definition of a
              product of functions and where
              the middle equality is by commutativity of real
              number multiplication. [That would be the fact that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$ab = ba$$
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
              {" "}as mentioned in the statement.] Hence
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$fg$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$gf$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              agree on an arbitrary input, hence{" "}
              <Math>
                $fg = gf$
              </Math>
              {" "}by
              definition of function equality.
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={30}>
          <VerticalChunk>
            <b>
              Exercise 30.
            </b>
            {" "}
            A rat is running a fundraising race. The function
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$\Large f : \rr \ra \rr$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            gives the amount raised as a function of position;
            specifically,{" "}
            <Math>
              $&#123;f(x)&#125;$
            </Math>
            {" "}is the total number of 
            {" "}
            <NoBreak>
              <Math>
                $\te&#123;\$&#125;$
              </Math>
              's
            </NoBreak>
            {" "}earned by virtue of running 
            {" "}
            <Math>
              $x$
            </Math>
            {" "}meters from the start of the race; 
            a second function
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$\Large g : \rr \ra \rr$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            gives the position of the rat as a function of time;
            specifically,{" "}
            <Math>
              $&#123;g(t)&#125;$
            </Math>
            {" "}is the position from the start,
            in meters, reached by the rat at{" "}
            <Math>
              $t$
            </Math>
            {" "}seconds after the
            start of the race.
          </VerticalChunk>
          <VerticalChunk indent={true}>
            In this case, what does{" "}
            <Math>
              $f \circ g$
            </Math>
            {" "}compute?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={30}>
            <VerticalChunk>
              It computes
              the amount earned by the rat as a function of time. In 
              more detail,{" "}
              <Math>
                $(f \circ g)(t)$
              </Math>
              {" "}
              is the number of{" "}
              <NoBreak>
                <Math>
                  $\te&#123;\$&#125;$
                </Math>
                's
              </NoBreak>
              {" "}earned by the rat at{" "}
              <Math>
                $t$
              </Math>
              {" "}
              seconds after the start of the race.
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}
              In even more detail,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$g(t)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is the position in meters of the rat{" "}
              <Math>
                $t$
              </Math>
              {" "}
              seconds after start, by definition 
              of{" "}
              <NoBreak>
                <Math>
                  $g$
                </Math>
                ,
              </NoBreak>
              {" "}at which position the rat has
              earned
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$f(g(t))$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              <NoBreak>
                <Math>
                  $\te&#123;\$&#125;$
                </Math>
                's
              </NoBreak>
              {" "}in total, by definition of{" "}
              <Math>
                $f$
              </Math>
              .
              And
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$f(g(t))$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(f \circ g)(t)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by definition of “
              <Math>
                $\circ$
              </Math>
              ”.
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 2.
              </i>
              {" "}
              If it helps, 
              here is a pictorialization of the 
              “units transformation pipeline” that 
              occurs inside{" "}
              <NoBreak>
                <Math>
                  $f \circ g$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_f_g_composition_units.svg" />
            <Pause />
            <VerticalChunk>
              <i>
                Note 3.
              </i>
              {" "}
              To emphasize,{" "}
              <Math>
                $f(x)$
              </Math>
              {" "}is the
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              ~ total ~
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              amount earned when position{" "}
              <Math>
                $x$
              </Math>
              {" "}is reached.
              In real life{" "}
              <Math>
                $f$
              </Math>
              's
              graph might therefore look something like this, 
              while inventing some numbers:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_f_g_first_example_of_f.svg" />
            <Pause />
            <VerticalChunk>
              In the above the rat earns{" "}
              <NoBreak>
                <Math>
                  $\te&#123;\$&#125;$
                </Math>
                3
              </NoBreak>
              {" "}for the 
              first 50m, after which the dollar-per-meter 
              rate is reduced.
              Or 
              {" "}
              <Math>
                $f$
              </Math>
              {" "}
              could look like this,
              with discrete “unlocks”:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_f_g_second_example_of_f.svg" />
            <Pause />
            <VerticalChunk>
              In our mathematicians' imaginations, however,{" "}
              <Math>
                $f$
              </Math>
              {" "}
              might also look like this, nice and differentiable,
              with periods of negative slope (corresponding to
              parts of the course that momentarily lose you money):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_f_g_third_example_of_f.svg" />
            <Pause />
            <VerticalChunk>
              (Etc.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={31}>
          <VerticalChunk>
            <b>
              Exercise 31.
            </b>
            {" "}
            What does{" "}
            <Math>
              $(f \circ g)'$
            </Math>
            {" "}compute,
            keeping the same setup as in Exercise 34?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={31}>
            <VerticalChunk>
              It computes the dollars-per-second earnings rate 
              as a function of time. In full detail,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(f \circ g)'(t)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is the dollars-per-second rate which the rat is
              fundraising at{" "}
              <Math>
                $t$
              </Math>
              {" "}seconds after the start of the race.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              <i>
                Note 1.
              </i>
              {" "}
              You don't need to know anything about “
              <Math>
                $f$
              </Math>
              ”
              or “
              <NoBreak>
                <Math>
                  $g$
                </Math>
                ”
              </NoBreak>
              {" "}to answer this question. You only need to
              know what “
              <NoBreak>
                <Math>
                  $f \circ g$
                </Math>
                ”
              </NoBreak>
              {" "}is.
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={32}>
          <VerticalChunk>
            <b>
              Exercise 32.
            </b>
            {" "}
            Continuing with the fundraising rat as in the 
            previous two exercises, assume that the functions
            {" "}
            <Math>
              $f$
            </Math>
            {" "}and{" "}
            <Math>
              $g$
            </Math>
            {" "}have these graphs:
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch4_f_g_actual_exercise_f.svg" />
          <Pause />
          <Image src="/images/svg_ch4_f_g_actual_exercise_g.svg" />
          <Pause />
          <Solution solution_number={32}>
            <VerticalChunk>
              At{" "}
              <NoBreak>
                <Math>
                  $t = 2$
                </Math>
                s
              </NoBreak>
              {" "}the rat is running at a velocity of
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;5\over 3\up&#123;1&#125;&#125;[&#123;\te&#123;m/s&#125;&#125;]$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by the slope of this line segment on{" "}
              <Math>
                $y = g(t)$
              </Math>
              :
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_f_g_actual_exercise_g_with_slope.svg" />
            <Pause />
            <VerticalChunk>
              Moreover at{" "}
              <NoBreak>
                <Math>
                  $t = 2$
                </Math>
                s
              </NoBreak>
              {" "}the rat 
              has reached
              {" "}
              <Math>
                $2 \cdot (5/3) = 10/3 = 3.\overline&#123;33&#125;$
              </Math>
              m,
              where the dollars-per-meter earnings
              rate is one-tenth of a dollar per meter, by
              the slope of this segment on the graph{" "}
              <Math>
                $y = f(x)$
              </Math>
              :
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_f_g_actual_exercise_f_with_slope.svg" />
            <Pause />
            <VerticalChunk>
              Multiplying the{" "}
              <Math>
                $5/3$
              </Math>
              {" "}meters-per-second velocity
              by the{" "}
              <Math>
                $1/10$
              </Math>
              {" "}dollars-per-meter rate gives
              us the dollars-per-second rate at{" "}
              <NoBreak>
                <Math>
                  $t = 2$
                </Math>
                s
              </NoBreak>
              {" "}(our 
              final answer—recall that{" "}
              <Math>
                $(f \circ g)'(2)$
              </Math>
              {" "}is 
              the dollars-per-second rate at{" "}
              <NoBreak>
                <Math>
                  $t = 2$
                </Math>
                s,
              </NoBreak>
              {" "}by Exercise 35):
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\left(&#123;5\over 3\up&#123;1&#125;&#125;\left[&#123;\te&#123;m&#125; \over \te&#123;s&#125;&#125;\right]\right) \times \left(&#123;1 \over 10\up&#123;1&#125;&#125;\left[&#123;\te&#123;\$&#125; \over \te&#123;m&#125;&#125;\right]\right) = &#123;5\over 30\up&#123;1&#125;&#125;\left[&#123;\te&#123;\$&#125; \over \te&#123;s&#125;&#125;\right].$$
              <ImageRight src="/images/svg_ch4_f_g_actual_exercise_cloud.svg" />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              Or since
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;5 \over 3&#125; = 1.6666...$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              that would be
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;0.1666...&#125;[\te&#123;\$/s&#125;]$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              in decimal, i.e.,{" "}
              <span style="font-family:Clicker Script;font-size:1.3em;">
                ~sixteen~{" "}
              </span>
              point{" "}
              <Math>
                $666...$
              </Math>
              {" "}cents per second.
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Postscript.
              </i>
              {" "}
              It turns out that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;5 \over 30&#125; = &#123;1 \over 6&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              as we weren't really paying attention to the 
              possibility of simplifying the fraction. In
              particular,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over 6&#125; = 0.1666...$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              as, indeed,{" "}
              <Math>
                $0.1666...$
              </Math>
              {" "}is half of{" "}
              <NoBreak>
                <Math>
                  $0.333...$
                </Math>
                !
              </NoBreak>
              {" "}(Learn
              something every day.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={33}>
          <VerticalChunk>
            <b>
              Exercise 33.
            </b>
            {" "}
            Conjecture a general formula for
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$(f \circ g)'(t)$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            for arbitrary (differentiable, say) functions
            {" "}
            <NoBreak>
              <Math>
                $f, g : \rr \ra \rr$
              </Math>
              .
            </NoBreak>
            {" "}(If it helps, interpret{" "}
            <Math>
              $f$
            </Math>
            {" "}
            and{" "}
            <Math>
              $g$
            </Math>
            {" "}exactly as in the scenario of the fundraising
            race, cf
            <Math>
              $.$
            </Math>
            {" "}Exercises 34-37.)
          </VerticalChunk>
          <Pause />
          <Solution solution_number={33}>
            <VerticalChunk>
              The sought-for formula is
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$g'(t)\cdot f'(g(t))$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              because—to come back to the example of the 
              fundraising race—one must multiply the meters-per-second
              velocity at time{" "}
              <Math>
                $t$
              </Math>
              {" "}(that is,{" "}
              <NoBreak>
                <Math>
                  $g'(t)$
                </Math>
                )
              </NoBreak>
              {" "}by the dollars-per-meter 
              earnings rate at position{" "}
              <Math>
                $g(t)$
              </Math>
              {" "}(that is,{" "}
              <NoBreak>
                <Math>
                  $f'(g(t))$
                </Math>
                )
              </NoBreak>
              {" "}to obtain
              the final dollars-per-second earning rate at time{" "}
              <Math>
                $t$
              </Math>
              {" "}
              (that is,{" "}
              <Math>
                $(f \circ g)'(t)$
              </Math>
              ).
            </VerticalChunk>
            <VerticalChunk indent={true}>
              (For example, the solution to Exercise 36 can actually
              be written
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$g'(2) \cdot f'(g(2))$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              since, indeed,{" "}
              <NoBreak>
                <Math>
                  $g(2) = 3.333...$
                </Math>
                .
              </NoBreak>
              {" "}[Remember that we ended
              up multiplying{" "}
              <Math>
                $g'(2) = &#123;5\over 3&#125;\te&#123;m/s&#125;$
              </Math>
              {" "}by 
              {" "}
              <NoBreak>
                <Math>
                  $f'(3.333...) = &#123;1\over 10&#125;\te&#123;\$/s&#125;$
                </Math>
                —the
              </NoBreak>
              {" "}“
              <NoBreak>
                <Math>
                  $3.333...$
                </Math>
                ”
              </NoBreak>
              {" "}is
              {" "}
              <Math>
                $g(2)$
              </Math>
              .])
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Nb: This result is known as the{" "}
              <i>
                chain rule
              </i>
              .
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}Said{" "}
              <i>
                chain rule
              </i>
              {" "}
              is more commonly written...
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(f \circ g)'(x) = f'(g(x))g'(x)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...with “
              <NoBreak>
                <Math>
                  $g'(x)$
                </Math>
                ”
              </NoBreak>
              {" "}last. (And “
              <NoBreak>
                <Math>
                  $x$
                </Math>
                ”
              </NoBreak>
              {" "}instead of “
              <Math>
                $t$
              </Math>
              ”.)
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 2.
              </i>
              {" "}One can also write the chain rule very succinctly like so...
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(f \circ g)' = (f' \circ g)g'$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...where the right-hand-side is the product of{" "}
              <Math>
                $g'$
              </Math>
              {" "}and{" "}
              <Math>
                $f' \circ g$
              </Math>
              .
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={34}>
          <VerticalChunk>
            <b>
              Exercise 34.
            </b>
            {" "}
            Sketch the velocity vector of a particle
            going at three times unit speed (“speed{" "}
            <NoBreak>
              <Math>
                $3$
              </Math>
              ”
            </NoBreak>
            {" "}in common
            parlance) clockwise around a circle of radius{" "}
            <Math>
              $2$
            </Math>
            .
            What path does the velocity vector describe 
            over time? (I.e., if you cut-paste the velocity
            vector back to the origin, so that its “tail” 
            is at{" "}
            <NoBreak>
              <Math>
                $(0, 0)$
              </Math>
              ,
            </NoBreak>
            {" "}what curve does the far end of the
            vector describe?) Over how much time?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={34}>
            <VerticalChunk>
              The velocity vector is an arrow of length{" "}
              <Math>
                $3$
              </Math>
              {" "}
              tangent to a circle of radius{" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                ,
              </NoBreak>
              {" "}brushed
              clockwise:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_velocity_vector_radius_2_speed_3_sketch_1.svg" />
            <Pause />
            <VerticalChunk>
              If we bring the tail of the vector back to
              {" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "}we find an arrow of length{" "}
              <Math>
                $3$
              </Math>
              {" "}
              tracing a circle of radius{" "}
              <Math>
                $3$
              </Math>
              :
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_velocity_vector_radius_2_speed_3_centered.svg" />
            <Pause />
            <VerticalChunk>
              Lastly, the velocity vector does a full revolution
              of the red circle in the same amount of time that
              the particle does a full revolution of the blue circle,
              which is
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;2\cdot (\te&#123;circumference of a unit circle&#125;) \over \te&#123;3&#125;&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              because the circumference of the blue circle
              is twice the circumference of a unit circle,
              and the particle is going at speed{" "}
              <Math>
                $3$
              </Math>
              .
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
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
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={35}>
          <VerticalChunk>
            <b>
              Exercise 35.
            </b>
            {" "}
            What is the
          </VerticalChunk>
          <Pause />
          <CentralDisplayItalic>
            acceleration vector
          </CentralDisplayItalic>
          <Pause />
          <VerticalChunk>
            (velocity vector of the velocity vector)
            of the particle from Exercise 39?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={35}>
            <VerticalChunk>
              The velocity vector of Exercise 39 travels
              in a circle of radius{" "}
              <Math>
                $3$
              </Math>
              {" "}in the same amount
              of time that the position vector 
              travels around a circle of radius{" "}
              <Math>
                $2$
              </Math>
              .
              The speed of the velocity vector is therefore
              {" "}
              <Math>
                $1.5$
              </Math>
              {" "}times the speed of the position vector,
              or{" "}
              <Math>
                $1.5 \times 3 = 4.5$
              </Math>
              .
            </VerticalChunk>
            <VerticalChunk indent={true}>
              As the derivative of the velocity vector,
              the acceleration vector is therefore
              a vector of length{" "}
              <Math>
                $4.5$
              </Math>
              {" "}(= the speed of the 
              velocity vector) brushed clockwise along 
              the path of the velocity vector:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_what_is_the_acceleration_vector_uncentered.svg" />
            <Pause />
            <VerticalChunk>
              Or, if we translate the acceleration vector back 
              to the origin and trace out its path over time 
              (either way is fine):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_what_is_the_acceleration_vector_centered.svg" />
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}
              You truly have to think of the acceleration
              vector as “the velocity of the velocity 
              vector”—if the velocity vector is changing, the
              acceleration vector is nonzero!
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={36}>
          <VerticalChunk>
            <b>
              Exercise 36.
            </b>
            {" "}
            Sketch the velocity vector, acceleration vector,
            and jerk vector of a particle going around a circle
            of radius{" "}
            <Math>
              $3$
            </Math>
            {" "}at speed{" "}
            <NoBreak>
              <Math>
                $2$
              </Math>
              .
            </NoBreak>
            {" "}(Clockwise, say.)
          </VerticalChunk>
          <Pause />
          <Solution solution_number={36}>
            <VerticalChunk>
              The velocity vector has length{" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                ,
              </NoBreak>
              {" "}because the
              particle has speed{" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                .
              </NoBreak>
              {" "}So the velocity vector
              looks like so, while attached to the particle path
              (top) or brought back to the origin (bottom):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_velocity_vector_radius_3_speed_2_uncentered.svg" />
            <Pause />
            <Image src="/images/svg_ch4_velocity_vector_radius_3_speed_2_centered.svg" />
            <Pause />
            <VerticalChunk>
              Moreover (!) the speed of the velocity vector is 
              {" "}
              <Math>
                $2/3$
              </Math>
              {" "}the speed of the particle, because the 
              velocity vector goes around a circle of{" "}
              <Math>
                $2/3$
              </Math>
              {" "}the 
              radius in the same amount of time. So the velocity 
              vector has speed
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\Large 2 \cdot &#123;2\over 3&#125; = &#123;4\over 3&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              from which the acceleration vector—that can be 
              described as “the velocity vector of the velocity
              vector”—has length{" "}
              <Math>
                $&#123;4\over 3&#125;$
              </Math>
              {" "}(the speed of the
              velocity vector), and looks like so (in either representation):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_velocity_vector_radius_3_speed_2_acceleration_uncentered.svg" />
            <Pause />
            <Image src="/images/svg_ch4_velocity_vector_radius_3_speed_2_acceleration_centered.svg" />
            <Pause />
            <VerticalChunk>
              Lastly the acceleration vector has speed
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\Large &#123;4\over 3&#125;\cdot &#123;2\over 3&#125; = &#123;8 \over 9&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by virtue of circling a circle of radius{" "}
              <Math>
                $2/3$
              </Math>
              {" "}
              that of the velocity vector, that has speed{" "}
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
              to the velocity vector, being twice{" "}
              <Math>
                $90^\circ$
              </Math>
              {" "}away:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_velocity_vector_radius_3_speed_2_jerk_uncentered.svg" />
            <Pause />
            <Image src="/images/svg_ch4_velocity_vector_radius_3_speed_2_jerk_centered.svg" />
            <StarDivider />
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}
              If the particle's original path is centered at
              {" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "}then that path constitutes a fourth
              circle obeying the same pattern
              of{" "}
              <NoBreak>
                <Math>
                  $2/3$
                </Math>
                -ratios
              </NoBreak>
              {" "}between the successive radii:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_velocity_vector_radius_3_speed_2_with_position.svg" />
          </Solution>
        </Exercise>
        <Exercise exercise_number={37}>
          <VerticalChunk>
            <b>
              Exercise 37.
            </b>
            {" "}
            Imagine a single particle in a one-dimensional
            world, whose velocity equals its position; at{" "}
            <Math>
              $t = 0$
            </Math>
            ,
            the particle is sitting at{" "}
            <Math>
              $x = 1$
            </Math>
            :
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch4_one_particle_at_1.svg" />
          <Pause />
          <VerticalChunk>
            If we play time backward, will the particle 
            ever reach{" "}
            <NoBreak>
              <Math>
                $x = 0$
              </Math>
              ?
            </NoBreak>
          </VerticalChunk>
          <Pause />
          <Solution solution_number={37}>
            <VerticalChunk>
              Going back in time,
              examine how long it would take
              the particle to cross each of the intervals defined by
              the following geometric progression* (*see Note 1):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_one_particle_interval_subdivision.svg" />
            <Pause />
            <VerticalChunk>
              The interval from{" "}
              <Math>
                $0.5$
              </Math>
              {" "}to{" "}
              <Math>
                $1$
              </Math>
              {" "}
              takes{" "}
              <i>
                at least
              </i>
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;0.5 \over 1&#125; = 0.5$$
              <ImageLeft src="/images/svg_ch4_one_particle_speed_equals_time_cloud.svg" />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              time to cross, because the maximum speed of the particle
              inside of that interval is{" "}
              <Math>
                $1$
              </Math>
              .
              Similarly, the interval from
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$x = 0.25$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              to
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$x = 0.5$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              takes{" "}
              <i>
                at least
              </i>
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;0.25 \over 0.5&#125; = 0.5$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              time to cross, because the maximum speed of the particle
              inside of that interval is{" "}
              <Math>
                $0.5$
              </Math>
              !
              And, again, the interval from
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$x = 0.125$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              to
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$x = 0.25$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              takes at least
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;0.125 \over 0.25&#125; = 0.5$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              time to cross, because the maximum speed of the particle
              inside of that interval is{" "}
              <NoBreak>
                <Math>
                  $0.25$
                </Math>
                .
              </NoBreak>
              {" "}Etc—each interval 
              takes{" "}
              <i>
                at least
              </i>
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$0.5$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              units of time to cross, because the length of each
              interval is half of the maximum speed within the interval!
              But there are infinitely many intervals, and, therefore,
              it takes
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              at least
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              infinitely much time to make it to{" "}
              <NoBreak>
                <Math>
                  $x = 0$
                </Math>
                ,
              </NoBreak>
              {" "}where the
              “infinitely” comes from adding infinitely many{" "}
              <Math>
                $0.5$
              </Math>
              's
              together! (In other words, the particle never makes it to
              {" "}
              <NoBreak>
                <Math>
                  $x = 0$
                </Math>
                ,
              </NoBreak>
              {" "}no matter how far back in time you look.)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              A so-called
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              geometric progression
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              is a sequence of numbers in which each number
              is a fixed multiple of the previous number.
              For example,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$100,\, 300,\, 900,\, 2700$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is a (finite) geometric progression, because each number
              is the previous number multiplied by{" "}
              <Math>
                $3$
              </Math>
              ,
              and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$1,\, 0.5,\, 0.25,\, 0.125,\, 0.0625,\, \ldots$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is an (infinite) geometric progression, because each number
              is the previous multiplied by{" "}
              <Math>
                $0.5$
              </Math>
              .
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={38}>
          <VerticalChunk>
            <b>
              Exercise 38.
            </b>
            {" "}
            Take a system of two particles on the real
            line; at time{" "}
            <NoBreak>
              <Math>
                $t = 0$
              </Math>
              ,
            </NoBreak>
            {" "}the first particle (yellow)
            is at{" "}
            <NoBreak>
              <Math>
                $x = -1$
              </Math>
              ,
            </NoBreak>
            {" "}while the second one (blue)
            is at{" "}
            <Math>
              $x = 1$
            </Math>
            :
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch4_three_one_dimensional_particles.svg" />
          <Pause />
          <VerticalChunk>
            If the velocity of the yellow particle is set to track
            the position of the blue particle and vice-versa, 
            give a qualitative sketch of the
            position-as-a-function-of-time (time on the{" "}
            <Math>
              $x$
            </Math>
            {" "}
            axis, position on the{" "}
            <Math>
              $y$
            </Math>
            {" "}axis) of the two 
            particles. If we add also the graph of the position
            of the red particle from Exercise 41 to this set of
            graphs, what symmetries
            exist altogether between the three graphs?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={38}>
            <VerticalChunk>
              For{" "}
              <Math>
                $t &gt; 0$
              </Math>
              {" "}the yellow and blue particles
              approach{" "}
              <Math>
                $0$
              </Math>
              {" "}in a kind of “radioactive decay”
              pattern; for{" "}
              <Math>
                $t &lt; 0$
              </Math>
              ,
              they spin
              off to{" "}
              <Math>
                $-\infty$
              </Math>
              {" "}and{" "}
              <Math>
                $\infty$
              </Math>
              {" "}respectively at an
              accelerating rate:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_three_one_dimensional_particles_blue_yellow.svg" />
            <Pause />
            <VerticalChunk>
              If we add the graph of the red particle to the
              mix, it is simply the mirror image of the
              blue particle's position through the{" "}
              <Math>
                $y$
              </Math>
              {" "}axis
              (
              <Math>
                $y$
              </Math>
              {" "}axis that is ironically labeled “
              <Math>
                $x$
              </Math>
              ”):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_three_one_dimensional_particles_blue_yellow_red.svg" />
            <Pause />
            <VerticalChunk>
              Indeed, for the red graph,
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              the slope equals the{" "}
              <Math>
                $y$
              </Math>
              -value
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              (velocity = position), while
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              the slope equals minus the{" "}
              <Math>
                $y$
              </Math>
              -value
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              for the blue graph (velocity = position
              of yellow = minus own position). 
              (We forgot to mention that the blue and
              yellow graphs are mirror images of one another
              through the horizontal axis—this is one of the 
              “symmetries” that the problem statement asks about, though.)
              As taking a mirror image through the{" "}
              <Math>
                $y$
              </Math>
              {" "}axis
              negates slopes without affecting{" "}
              <Math>
                $y$
              </Math>
              -coordinates,
              while both the blue and red graphs have the same
              value at{" "}
              <NoBreak>
                <Math>
                  $t = 0$
                </Math>
                ,
              </NoBreak>
              {" "}this explains why the mirror
              image of one graph fits the constraints of the other
              and vice-versa:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_three_one_dimensional_particles_red_and_blue_symmetry.svg" />
            <Pause />
            <VerticalChunk>
              Also note that all graphs have slopes of
              {" "}
              <Math>
                $
                \pm 1
                $
              </Math>
              {" "}
              at{" "}
              <NoBreak>
                <Math>
                  $t = 0$
                </Math>
                ,
              </NoBreak>
              {" "}as we tried to reflect in the sketches, 
              because each corresponding particle position 
              is either{" "}
              <Math>
                $1$
              </Math>
              {" "}or{" "}
              <Math>
                $-1$
              </Math>
              .
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={39}>
          <VerticalChunk>
            <b>
              Exercise 39.
            </b>
            {" "}
            Four particles are placed 
            at intervals of{" "}
            <Math>
              $90^\circ$
            </Math>
            {" "}
            around a circle of radius{" "}
            <Math>
              $1$
            </Math>
            {" "}
            centered at{" "}
            <Math>
              $(2, 4)$
            </Math>
            {" "}in the plane:
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch4_circle_at_2_4.svg" />
          <Pause />
          <VerticalChunk>
            The velocity of each particle is set to 
            the position of the next particle clockwise
            around the circle, with this relationship
            maintained at all points in time.
            If the configuration above shows time 
            {" "}
            <NoBreak>
              <Math>
                $t = 0$
              </Math>
              ,
            </NoBreak>
            {" "}how will the positions of the
            particles evolve? Discuss both positive and 
            negative values of{" "}
            <Math>
              $t$
            </Math>
            .
          </VerticalChunk>
          <Pause />
          <Solution solution_number={39}>
            <VerticalChunk>
              At{" "}
              <Math>
                $t = 0$
              </Math>
              {" "}
              the particles have position vectors that
              are up and the right,
              so the velocity vectors will be
              up and to the right,
              so the particles will move more up and
              to the right, and the velocity vectors
              will become more “up and to the right”, 
              and so on—broadly speaking, for{" "}
              <Math>
                $t &gt; 0$
              </Math>
              {" "}
              there will ensue
              a kind of 
              four-particle explosion
              that goes up and to the right,
              off to{" "}
              <Math>
                $(+\infty, +\infty)$
              </Math>
              .
              <ImageRight src="/images/svg_ch4_circle_at_2_4_with_some_vectors_cloud.svg" />
            </VerticalChunk>
            <VerticalChunk indent={true}>
              For{" "}
              <Math>
                $t &lt; 0$
              </Math>
              {" "}motion will be
              down and to the left, at least initially—it
              is hard to forecast off the top of one's
              head (unless you have a sudden flash of insight)
              what will happen for larger negative
              values of{" "}
              <Math>
                $t$
              </Math>
              .
            </VerticalChunk>
            <VerticalChunk indent={true}>
              HOWEVER.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              It is possible to say much more.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              To go deeper, we introduce eight new
              particles, comprising the original colors but
              in white and black flavors:
            </VerticalChunk>
            <Pause />
            <CentralDisplay>
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
            </CentralDisplay>
            <Pause />
            <VerticalChunk>
              At{" "}
              <Math>
                $t = 0$
              </Math>
              {" "}the white particles are just a
              translate of the original particles, such
              that the circle on which they lie is 
              centered at{" "}
              <Math>
                $(0, 0)$
              </Math>
              :
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_circle_at_2_4_white_version.svg" />
            <Pause />
            <VerticalChunk>
              The black particles, for their part, are
              piled on top of one another at{" "}
              <Math>
                $(x, y) = (2, 4)$
              </Math>
              {" "}at{" "}
              <NoBreak>
                <Math>
                  $t = 0$
                </Math>
                ,
              </NoBreak>
              {" "}
              that we draw as four quarter-pies
              of different colors, like a UNO card:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_circle_at_2_4_black_version.svg" />
            <Pause />
            <VerticalChunk>
              Within each group we set the velocity of
              the purple particle to the position of the
              yellow particle, 
              the velocity of the yellow particle to the
              position of the green particle, and so on,
              like for the original set of particles.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              In this case the white particles will
              rotate at unit speed around their circle of
              radius{" "}
              <Math>
                $1$
              </Math>
              {" "}centered at the origin, just like
              the particles discussed in the solution to
              Exercise 12, that obey a similar set of
              constraints
              (albeit with a different set of colors).
            </VerticalChunk>
            <VerticalChunk indent={true}>
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
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $(2, 4)$
                </Math>
                ,
              </NoBreak>
              {" "}as their velocity—being
              equal to their position—stays parallel to the
              line between them and the origin, meaning
              they are “stuck” to that line.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Also note that the
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              speed
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              of the black particles, being equal to the
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              length of the velocity vector
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              of said particles, is equal to the
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              length of the position vector
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              <ImageRight src="/images/svg_ch4_circle_at_2_4_position_equals_velocity_cloud.svg" />
            </VerticalChunk>
            <VerticalChunk indent={true}>
              of said particles, is equal to the
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              distance to the origin
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              of said particles,
              since the length of the position vector is
              the distance to the origin.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              This means that if we introduce gradations
              to the afore-mentioned half-line through{" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "}
              and{" "}
              <Math>
                $(2, 4)$
              </Math>
              ...
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_circle_at_2_4_UNO_with_gradated_line.svg" />
            <Pause />
            <VerticalChunk>
              ...indicating the distance to the origin,
              the black particles behave like a 
              one-dimensional system comprising a single
              particle on a half-line (or entire line,
              it doesn't hurt) whose velocity is equal to
              its position on this line:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_circle_at_2_4_UNO_flat_half_line.svg" />
            <Pause />
            <VerticalChunk>
              The behavior of such a particle is
              identical to the behavior of the red
              particle from Exercise 41, 
              except that the current
              “UNO particle” has a slight head-start over the
              red particle from Exercise 41, being
              at position{" "}
              <Math>
                $x = 2\sqrt&#123;5&#125;$
              </Math>
              {" "}
              instead of at position{" "}
              <Math>
                $x = 1$
              </Math>
              {" "}at{" "}
              <Math>
                $t = 0$
              </Math>
              .
              (!!)
              <ImageLeft src="/images/svg_ch4_circle_at_2_4_sqrt_20_cloud.svg" />
            </VerticalChunk>
            <VerticalChunk indent={true}>
              This describes an “understandable”
              behavior of the black and white particles.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Next we write
            </VerticalChunk>
            <Pause />
            <CentralDisplay>
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x$
              </Math>
              {" "}{" "}
            </CentralDisplay>
            <Pause />
            <VerticalChunk>
              for the function that gives 
              the{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the purple-white particle
              as a function of time (in more detail,
            </VerticalChunk>
            <Pause />
            <CentralDisplay>
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x : \rr \ra \rr$
              </Math>
              {" "}{" "}
            </CentralDisplay>
            <Pause />
            <VerticalChunk>
              to emphasize that WE ARE TALKING ABOUT A FUNCTION, e.g.,
            </VerticalChunk>
            <Pause />
            <CentralDisplay>
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(2)$
              </Math>
              {" "}{" "}
            </CentralDisplay>
            <Pause />
            <VerticalChunk>
              is the{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}of 
              the purple-white particle at
              {" "}
              <NoBreak>
                <Math>
                  $t = 2$
                </Math>
                ,
              </NoBreak>
              {" "}etc), and write
            </VerticalChunk>
            <Pause />
            <CentralDisplay>
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y$
              </Math>
              {" "}{" "}
            </CentralDisplay>
            <Pause />
            <VerticalChunk>
              for the function that gives
              the{" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the purple-white 
              particle as a function of time, and so on 
              for all the other particles.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              For example,
            </VerticalChunk>
            <Pause />
            <CentralDisplay>
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x\,\!\!\!' = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x$
              </Math>
              {" "}{" "}
            </CentralDisplay>
            <Pause />
            <VerticalChunk>
              because the rate of change of the 
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the purple-white particle 
              is the value of the{" "}
              <Math>
                $x$
              </Math>
              -coordinate
              of the yellow-white particle; we also have
            </VerticalChunk>
            <Pause />
            <CentralDisplay>
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x\,\!\!\!' + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x\,\!\!\!' = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x$
              </Math>
              {" "}{" "}
            </CentralDisplay>
            <Pause />
            <VerticalChunk>
              by adding two such equations together; this can also be
              written
            </VerticalChunk>
            <Pause />
            <CentralDisplay>
              {" "}{" "}
              <Math>
                $($
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x)' = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x$
              </Math>
              {" "}{" "}
            </CentralDisplay>
            <Pause />
            <VerticalChunk>
              by the sum rule; but this gives us an idea!; we can
              try to{" "}
              <i>
                define
              </i>
              {" "}the original particles{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              &ensp;by setting...
            </VerticalChunk>
            <Pause />
            <CentralDisplay>
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y$
              </Math>
              {" "}{" "}
            </CentralDisplay>
            <Pause />
            <VerticalChunk>
              ...and see if these definitions satisfy the constraints
              of the problem! (We momentarily have two different
              purple particles: the one from the problem statement, 
              and the one that we have just defined; but that's ok,
              as long as we are aware of this small semantic
              transgression, it is not such a big deal, 
              and we shall soon prove that these two
              particles are one and the same.)
              For starters...
            </VerticalChunk>
            <Pause />
            <CentralDisplay>
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x\,\!\!\!' = ($
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x\!\rt&#123;0.05&#125;)' = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x =$
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y\,\!\!\!' = ($
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y\!\rt&#123;0.05&#125;)' = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y =$
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x\,\!\!\!' = ($
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x\!\rt&#123;0.05&#125;)' = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x =$
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y\,\!\!\!' = ($
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y\!\rt&#123;0.05&#125;)' = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y =$
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x\,\!\!\!' = ($
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x\!\rt&#123;0.05&#125;)' = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x =$
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y\,\!\!\!' = ($
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y\!\rt&#123;0.05&#125;)' = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y =$
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x\,\!\!\!' = ($
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x\!\rt&#123;0.05&#125;)' = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x =$
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y\,\!\!\!' = ($
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y\!\rt&#123;0.05&#125;)' = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y =$
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y$
              </Math>
              {" "}{" "}
            </CentralDisplay>
            <Pause />
            <VerticalChunk>
              ...or...
            </VerticalChunk>
            <Pause />
            <CentralDisplay>
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x\,\!\!\!' = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y\,\!\!\!' = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x\,\!\!\!' = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y\,\!\!\!' = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x\,\!\!\!' = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y\,\!\!\!' = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x\,\!\!\!' = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y\,\!\!\!' = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y$
              </Math>
              {" "}{" "}
            </CentralDisplay>
            <Pause />
            <VerticalChunk>
              ...cutting out the middle computation, so the constraints
              relating particle velocities to particle positions are
              satisfied (e.g., the velocity vector of the purple particle
              is the position vector of the yellow particle); 
              for seconders, evaluating these definitions at{" "}
              <Math>
                $t = 0$
              </Math>
              {" "}gives...
            </VerticalChunk>
            <Pause />
            <CentralDisplay>
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(0) = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(0) + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(0) = 2\,\,+$
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(0)$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y(0) = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y(0) + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y(0) = 2\,\,+$
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y(0)$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(0) = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(0) + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(0) = 2\,\,+$
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(0)$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y(0) = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y(0) + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y(0) = 2\,\,+$
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y(0)$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(0) = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(0) + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(0) = 2\,\,+$
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(0)$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y(0) = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y(0) + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y(0) = 2\,\,+$
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y(0)$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(0) = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(0) + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(0) = 2\,\,+$
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(0)$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y(0) = $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y(0) + $
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y(0) = 2\,\,+$
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y(0)$
              </Math>
              {" "}{" "}
            </CentralDisplay>
            <Pause />
            <VerticalChunk>
              ...or...
            </VerticalChunk>
            <Pause />
            <CentralDisplay>
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(0) = 2\,\,+$
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(0)$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y(0) = 2\,\,+$
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y(0)$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(0) = 2\,\,+$
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(0)$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y(0) = 2\,\,+$
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y(0)$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(0) = 2\,\,+$
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(0)$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y(0) = 2\,\,+$
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y(0)$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(0) = 2\,\,+$
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_x(0)$
              </Math>
              {" "}{" "}
              <br />
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y(0) = 2\,\,+$
              </Math>
              {" "}{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              {" "}{" "}
              <Math>
                $_y(0)$
              </Math>
              {" "}{" "}
            </CentralDisplay>
            <Pause />
            <VerticalChunk>
              ...cutting out the middle computation, which is to
              say that the positions at time{" "}
              <Math>
                $t = 0$
              </Math>
              {" "}of our 
              newly-defined particles{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              &ensp;and
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              &ensp;are the translate of the white particle
              positions at{" "}
              <Math>
                $t = 0$
              </Math>
              {" "}back up and to the right
              by the vector{" "}
              <NoBreak>
                <Math>
                  $(2, 4)$
                </Math>
                ,
              </NoBreak>
              {" "}which brings those
              positions back to the original positions of{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              &ensp;and{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              &ensp;as they appear in the problem statement! I.e.,
              our newly-defined
              particles{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              &ensp;and{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              &ensp;are in the desired place at{" "}
              <Math>
                $t = 0$
              </Math>
              !
            </VerticalChunk>
            <VerticalChunk indent={true}>
              In other words, the proposed definitions of{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              &ensp;and{" "}
              <InlineImage
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                class="ch4_inline_blackwhite_particles" />
              &ensp;“work” in the sense of satisfying all the conditions
              of the problem statement, and are, indeed, the
              solution we seek.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Qualitatively, this implies that the particles
              can be understood as four particles rotating at 
              unit speed around a circle of radius{" "}
              <Math>
                $1$
              </Math>
              {" "}(the 
              white particles) where the center of circle (the 
              UNO particle) is moving at exponential rate along
              a half-line. In particular, the particles remain
              at constant distance from one another for all{" "}
              <Math>
                $t$
              </Math>
              ,
              whether that seems intuitive or not.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Concretely, 
              the particle trajectories
              end up like so, locally around{" "}
              <Math>
                $t = 0$
              </Math>
              :
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_circle_at_2_4_solution_curves.svg" />
            <Pause />
            <VerticalChunk>
              The above plot goes from{" "}
              <Math>
                $t = -5$
              </Math>
              {" "}to 
              {" "}
              <NoBreak>
                <Math>
                  $t \approx 1$
                </Math>
                —winding
              </NoBreak>
              {" "}further back in time would produce
              near-perfect counterclockwise circular motion,
              as the black particles rush up to{" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "}
              and come to a near-halt rather fast,
              leaving only the residual motion of the white
              particles!
            </VerticalChunk>
            <VerticalChunk indent={true}>
              <i>
                Note 1.
              </i>
              {" "}
              When we said that, for{" "}
              <NoBreak>
                <Math>
                  $t &gt; 0$
                </Math>
                ,
              </NoBreak>
              {" "}there ensues
            </VerticalChunk>
            <Pause />
            <CentralDisplay>
              “a [kind of] four-particle explosion”
            </CentralDisplay>
            <Pause />
            <VerticalChunk>
              in the first paragraph of the solution, the word 
              “explosion” might be misleading, implying increased
              distances between the particles over time. This is
              not the case! (But we didn't know any better, back
              then.)
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 2.
              </i>
              {" "}
              As you might already have caught on, but is
              maybe worth emphasizing,
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              speed
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              is not the same thing as
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              velocity
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              because, specifically, speed is
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              distance per unit time
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              —a nonnegative number—whereas velocity is
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              displacement per unit time
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              —a vector-valued quantity, or{" "}
              <NoBreak>
                <Math>
                  $\pm$
                </Math>
                -valued
              </NoBreak>
              {" "}quantity,
              in 1 dimension!
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={40}>
          <VerticalChunk>
            <b>
              Exercise 40.
            </b>
            {" "}
            Find a nonzero function{" "}
            <Math>
              $f$
            </Math>
            {" "}and a nonzero
            constant{" "}
            <Math>
              $a \in \rr$
            </Math>
            {" "}such that
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$f'(x) = f(x + a)$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            for all{" "}
            <NoBreak>
              <Math>
                $x$
              </Math>
              .
            </NoBreak>
          </VerticalChunk>
          <Pause />
          <Solution solution_number={40}>
            <VerticalChunk>
              Recall the curves from Exercise 12:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch4_cosine_recall.svg" />
            <Pause />
            <VerticalChunk>
              The blue curve is the derivative of the red curve
              but is also the horizontal translate of the red curve by
              {" "}
              <Math>
                $a$
              </Math>
              {" "}units to the left, where
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$a$$
              <ImageLeft src="/images/svg_ch4_cosine_recall_cloud.svg" />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is the distance between adjacent bumps. Thus if
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$f$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is the function that generates the red curve, then
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$f'(x) = f(x + a)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              using the fact that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$y = f(x + a)$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is the horizontal translate of{" "}
              <Math>
                $y = f(x)$
              </Math>
              {" "}by{" "}
              <Math>
                $a$
              </Math>
              {" "}
              units to the left, in general for any function
              {" "}
              <Math>
                $f$
              </Math>
              {" "}and constant{" "}
              <NoBreak>
                <Math>
                  $a \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "}as discussed 
              in Exercise 14 of Chapter 3. (Well, this shows
              one solution, at least.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={41}>
          <VerticalChunk>
            <b>
              Exercise 41.
            </b>
            {" "}
            Express the...
          </VerticalChunk>
          <ul style="margin:1em 0 0 2.5em">
            <li>
              associativity of function composition
            </li>
            <li>
              associativity of function kmultiplication
            </li>
            <li>
              associativity of function addition&lt;/li&gt;
            </li>
            <li>
              commutativity of function multiplication&lt;/li&gt;
            </li>
            <li>
              commutativity of function addition&lt;/li&gt;
            </li>
          </ul>
          <VerticalChunk>
            ...as well as the..
          </VerticalChunk>
          <ul style="margin:1em 0 0 2.5em">
            <li>
              associativity of real number multiplication
            </li>
            <li>
              associativity of real number addition
            </li>
            <li>
              commutativity of real number multiplication
            </li>
            <li>
              commutativity of real number addition
            </li>
          </ul>
          <VerticalChunk>
            ...in the form of self-contained, formal statements.
          </VerticalChunk>
          <Pause />
          <Solution solution_number={41}>
            <VerticalChunk>
              For the functions:
            </VerticalChunk>
            <ul style="margin:1em 0 0 2.5em">
              <li>
                <i>
                  the associativity of function multiplication is
                  the fact that{" "}
                  <Math>
                    $(f \circ g) \circ h = f \circ (g \circ h)$
                  </Math>
                  {" "}
                  for all functions{" "}
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
                    ,
                  </NoBreak>
                  {" "}{" "}
                  <Math>
                    $h$
                  </Math>
                  {" "}such that 
                  {" "}
                  <NoBreak>
                    <Math>
                      $h : D \ra C$
                    </Math>
                    ,
                  </NoBreak>
                  {" "}{" "}
                  <NoBreak>
                    <Math>
                      $g : C \ra B$
                    </Math>
                    ,
                  </NoBreak>
                  {" "}{" "}
                  <Math>
                    $f : B \ra A$
                  </Math>
                  {" "}
                  [for arbitrary sets{" "}
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
                  <Math>
                    $D$
                  </Math>
                  ]
                </i>
              </li>
              <li>
                <i>
                  the associativity of function multiplication is
                  the fact that{" "}
                  <Math>
                    $f(gh) = (fg)h$
                  </Math>
                  {" "}for all{" "}
                  <Math>
                    $f, g, h : \rr \ra \rr$
                  </Math>
                  {" "}{" "}
                </i>
              </li>
              <li>
                <i>
                  the associativity of function addition is
                  the fact that{" "}
                  <Math>
                    $f + (g + h) = (f + g) + h$
                  </Math>
                  {" "}for all{" "}
                  <Math>
                    $f, g, h : \rr \ra \rr$
                  </Math>
                  {" "}{" "}
                </i>
              </li>
              <li>
                <i>
                  the commutativity of function multiplication is
                  the fact that{" "}
                  <Math>
                    $fg = gf$
                  </Math>
                  {" "}for all{" "}
                  <Math>
                    $f, g : \rr \ra \rr$
                  </Math>
                  {" "}{" "}
                </i>
              </li>
              <li>
                <i>
                  the commutativity of function addition is
                  the fact that{" "}
                  <Math>
                    $f + g = g + f$
                  </Math>
                  {" "}for all{" "}
                  <Math>
                    $f, g : \rr \ra \rr$
                  </Math>
                  {" "}{" "}
                </i>
              </li>
            </ul>
            <ImageLeft src="/images/svg_ch4_express_the_f_g_h_A_B_C_D_cloud.svg" />
            <VerticalChunk>
              For the real numbers:
            </VerticalChunk>
            <ul style="margin:1em 0 0 2.5em">
              <li>
                <i>
                  the associativity of [real number] multiplication is
                  the fact that{" "}
                  <Math>
                    $a(bc) = (ab)c$
                  </Math>
                  {" "}for all{" "}
                  <Math>
                    $a, b, c \in \rr$
                  </Math>
                  {" "}{" "}
                </i>
              </li>
              <li>
                <i>
                  the associativity of [real number] addition is
                  the fact that{" "}
                  <Math>
                    $a + (b + c) = (a + b) + c$
                  </Math>
                  {" "}for all{" "}
                  <Math>
                    $a, b, c \in \rr$
                  </Math>
                  {" "}{" "}
                </i>
              </li>
              <li>
                <i>
                  the commutativity of [real number] multiplication is
                  the fact that{" "}
                  <Math>
                    $ab = ba$
                  </Math>
                  {" "}for all{" "}
                  <Math>
                    $a, b \in \rr$
                  </Math>
                  {" "}{" "}
                </i>
              </li>
              <li>
                <i>
                  the commutativity of [real number] addition is
                  the fact that{" "}
                  <Math>
                    $a + b = b + a$
                  </Math>
                  {" "}for all{" "}
                  <Math>
                    $a, b \in \rr$
                  </Math>
                  {" "}{" "}
                </i>
              </li>
            </ul>
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}
              We never took the time to prove the associativity
              of function addition, but it is easy to prove! 
              (For other proofs see Exercise 32, Exercise 33, as
              well as Exercise 9, Chapter 3.)
            </VerticalChunk>
          </Solution>
        </Exercise>
      </Exercises>
    </Chapter>
  );
};

export default Article;