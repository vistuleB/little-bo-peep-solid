import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import CodexSuggestions,  { CodexSuggestion }  from "~/components/CodexSuggestions";
import { CentralDisplay, CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { Item, List }  from "~/components/List";
import { Math, MathBlock }  from "~/components/Math";
import OutChapterLink  from "~/components/OutChapterLink";
import OuterP  from "~/components/OuterP";
import { ImageLeft, ImageRight }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { StarDivider }  from "~/components/StarDivider";
import { SolutionNote, Example, NoBreak, Section, Pause }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter4__() {
  return (
    <Article
      prevPage="/article/chapter3"
      nextPage="/article/chapter5"
      pageNecessaryMargin={1450}
      maxElementWidth={700}
      id="_75_h.a.i_"
      path="/article/chapter4"
    >
      <ArticleTitle banner="Chapter 4:">
        Derivatives
      </ArticleTitle>
      <Pause />
      <Image
        src="/build-img/svgo-svg/myNp.svg"
        id="_60_h.a.i_"
        intrinsicWidth={510}
        intrinsicHeight={310}
      />
      <Pause />
      <Image
        src="/build-img/svgo-svg/dO9o.svg"
        intrinsicWidth={510}
        intrinsicHeight={335}
      />
      <Pause />
      <Image
        src="/build-img/svgo-svg/V6Pe.svg"
        intrinsicWidth={510}
        intrinsicHeight={335}
      />
      <Pause />
      <Image
        src="/build-img/svgo-svg/tzk1.svg"
        intrinsicWidth={510}
        intrinsicHeight={640}
      />
      <Pause />
      <Image
        src="/build-img/svgo-svg/an0s.svg"
        intrinsicWidth={510}
        intrinsicHeight={335}
      />
      <div style="height:1.4em" />
      <Section id="section-1">
        <CodexSuggestions>
          <p>
            Keep this chapter focused on reading derivatives: slopes, signs, domains, units, and successive derivatives. The particle-system material has moved to Motion in Two Dimensions; the finite-change and differentiation-rule exercises have moved to The Product Rule. Preserve the resulting lightness rather than refill the chapter. Exercise-selection suggestions are collected at the end of the main text and beside the closing exercises.
          </p>
        </CodexSuggestions>
        <OuterP>
          <b>
            Definitions.
          </b>
          {" "}
          The {" "}
          <i>
            derivative
          </i>
          {" "} of a function
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f : \rr \ra \rr
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is a (new) function
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f' : \rr \ra \rr
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          that gives the slope of {" "}
          <Math>
            $f$
          </Math>
          {" "} at each point.
          In other words,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f'(a)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is the slope of the graph {" "}
          <Math>
            $y = f(x)$
          </Math>
          {" "} at
          {" "}
          <NoBreak>
            <Math>
              $x = a$
            </Math>
            .
          </NoBreak>
          {" "} And—surprise!—each pair above has the form {" "}
          <Math>
            $y = f(x)$
          </Math>
          {" "} {" "}
          <NoBreak>
            [
            <Math>
              $=$
            </Math>
          </NoBreak>
          {" "}
          “before”], {" "}
          <Math>
            $y = f'(x)$
          </Math>
          {" "} {" "}
          <NoBreak>
            [
            <Math>
              $=$
            </Math>
          </NoBreak>
          {" "} “after”].
          (Meaning, the “after” graph records the slope
          of the “before” graph.) 
          E.g.:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/G9zf.svg"
          intrinsicWidth={1000}
          intrinsicHeight={385}
        />
        <Pause />
        <OuterP>
          Note that {" "}
          <Math>
            $f'\!$
          </Math>
          {" "} (read {" "}
          <NoBreak>
            “
            <Math>
              $f$
            </Math>
          </NoBreak>
          {" "} prime”) remains
          undefined where {" "}
          <Math>
            $y = f(x)$
          </Math>
          {" "} has a sharp “corner”
          and no well-defined slope. By opposition, if there is a well-defined tangent line to
          {" "}
          <Math>
            $y = f(x)$
          </Math>
          {" "} at {" "}
          <Math>
            $x = a$
          </Math>
          {" "} its slope gives {" "}
          <NoBreak>
            <Math>
              $f'(a)$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/Tf6r.svg"
          intrinsicWidth={1000}
          intrinsicHeight={625}
        />
        <Pause />
        <OuterP>
          We can summarize this by...
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f'(a) = \te&#123;[slope of tangent line to $y = f(x)$ at $x = a$]&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          ...with the understanding that {" "}
          <Math>
            $f'(a)$
          </Math>
          {" "} is
          undefined if a tangent line does not exist
          or if the tangent is vertical.
          An endpoint does not count as having a tangent, leaving the derivative undefined:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/5-sP.svg"
          intrinsicWidth={600}
          intrinsicHeight={320}
        />
        <Pause />
        <OuterP>
          In other words, “half-tangents” do not count as tangents!
        </OuterP>
      </Section>
      <Rest />
    </Article>
  );
}

const Rest = () => {
  const visibleRestSections = useShowMore(11);
  return <>
    {visibleRestSections() > 0 && <>
      <Pause />
      <Section id="section-2">
        <OuterP>
          <b>
            Vocabulary.
          </b>
          {" "}
          A function {" "}
          <Math>
            $f : \rr \ra \rr$
          </Math>
          {" "} is
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          differentiable
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          if {" "}
          <NoBreak>
            <Math>
              $\dom\,f' = \dom\,f$
            </Math>
            .
          </NoBreak>
          {" "} Also, if {" "}
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
          {" "} {" "}
          <Math>
            $f$
          </Math>
          {" "} is
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          differentiable on {" "}
          <Math>
            $[a,b]$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          if {" "}
          <NoBreak>
            <Math>
              $[a,b] \subseteq \dom \,f'$
            </Math>
            .
          </NoBreak>
          {" "} Lastly, {" "}
          <Math>
            $f$
          </Math>
          {" "} is
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          differentiable at {" "}
          <Math>
            $a$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          if {" "}
          <NoBreak>
            <Math>
              $a \in \dom\,f'$
            </Math>
            .
          </NoBreak>
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 1 && <>
      <Pause />
      <Section id="section-3">
        <OuterP>
          <b>
            Sketching a Derivative.
          </b>
          {" "}
          Say you want to sketch the derivative
          of the “before” function from the last “before”/“after” pair above:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/JpFf.svg"
          intrinsicWidth={429}
          intrinsicHeight={398}
        />
        <Pause />
        <OuterP>
          One method is to eyeball the slope at
          a few points along the curve, plot these
          values and interpolate:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/0-BA.svg"
          intrinsicWidth={850}
          intrinsicHeight={446}
        />
        <Pause />
        <Image
          src="/build-img/svgo-svg/azPc.svg"
          intrinsicWidth={850}
          intrinsicHeight="516.71069"
        />
        <Pause />
        <Image
          src="/build-img/svgo-svg/wTBE.svg"
          intrinsicWidth={850}
          intrinsicHeight="402.02762"
        >
          <ImageRight
            src="/build-img/svgo-svg/WzTO.svg"
            offsetY="  5%"
            offsetX="-25%"
            intrinsicWidth={450}
            intrinsicHeight={400}
          />
        </Image>
        <Pause />
        <OuterP>
          ...voilà!
        </OuterP>
        <OuterP class="indent-10">
          Alternatively, determine intervals on which the derivative
          is positive and negative, then interpolate via the largest (respectively,
          smallest) value of the derivative in each
          interval:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/eRkQ.svg"
          intrinsicWidth={1250}
          intrinsicHeight="379.0542"
        />
        <Pause />
        <Image
          src="/build-img/svgo-svg/Biz-.svg"
          intrinsicWidth={1250}
          intrinsicHeight="370.5058"
        />
        <Pause />
        <OuterP>
          The result (at bottom right)
          is a charming “robosketch” of the true
          derivative!
          (Well, charming in our opinion, at least.)
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 2 && <>
      <Pause />
      <Section id="section-4">
        <OuterP>
          <b>
            Derivative of a constant function.
          </b>
          {" "}
          A constant function has the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x \ra B
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for some {" "}
          <Math>
            $B \in \rr$
          </Math>
          {" "} independent of {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            .
          </NoBreak>
          {" "}
          The graph of the constant function is the line
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          y = B
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          of slope {" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            .
          </NoBreak>
          {" "} So
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (x \ra B)' = (x \ra 0)
          $$
          <ImageLeft
            src="/build-img/svgo-svg/tkpb.svg"
            atLeastAsWide={true}
            intrinsicWidth={430}
            intrinsicHeight={300}
          />
        </MathBlock>
        <Pause />
        <OuterP>
          because at each {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -value
          </NoBreak>
          {" "} you find a slope of
          {" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            ,
          </NoBreak>
          {" "} when you look up or down at the graph.
        </OuterP>
        <OuterP class="indent-10">
          If we refer to
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x \ra 0
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          as the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          zero function
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          we can say
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          ~ the derivative of a constant function
          is the zero function ~
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          or, more shortly,
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          ~ the derivative of a constant is zero ~
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          (the way people usually state it).
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 3 && <>
      <Pause />
      <Section id="section-5">
        <OuterP>
          <b>
            Derivative of an affine function.
          </b>
          {" "}
          An affine function has the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x \ra Ax + B
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for constants {" "}
          <NoBreak>
            <Math>
              $A$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $B \in \rr$
            </Math>
            .
          </NoBreak>
          {" "}
          The graph of {" "}
          <Math>
            $x \ra Ax + B$
          </Math>
          {" "} is a line of
          slope {" "}
          <NoBreak>
            <Math>
              $A$
            </Math>
            ,
          </NoBreak>
          {" "} so
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (x \ra Ax + B)' = (x \ra A)
          $$
          <ImageLeft
            src="/build-img/svgo-svg/2UFf.svg"
            atLeastAsWide={true}
            intrinsicWidth={430}
            intrinsicHeight={300}
          />
        </MathBlock>
        <Pause />
        <OuterP>
          because the slope is {" "}
          <Math>
            $A$
          </Math>
          {" "} everywhere on the line. In particular, {" "}
          <Math>
            $B$
          </Math>
          {" "} plays no role in the
          derivative! {" "}
          <NoBreak>
            (
            <Math>
              $\rt&#123;0.2&#125;$
            </Math>
            As
          </NoBreak>
          {" "} with a constant function, the derivative leaves no
          trace of {" "}
          <NoBreak>
            <Math>
              $B$
            </Math>
            's
          </NoBreak>
          {" "} value—because {" "}
          <Math>
            $B$
          </Math>
          {" "} effects a vertical translation, which
          does not change the slope of anything.)
        </OuterP>
        <OuterP class="indent-10">
          In words:
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          ~ the derivative of the affine function
          {" "}
          <Math>
            $y = ax + b$
          </Math>
          {" "} is the constant function {" "}
          <Math>
            $y = a$
          </Math>
          {" "} ~
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          Or:
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          ~ the derivative of an affine function is
          the coefficient of its linear term ~
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          (The “linear term” of {" "}
          <Math>
            $y = ax + b$
          </Math>
          {" "} is {" "}
          <NoBreak>
            “
            <Math>
              $ax$
            </Math>
            ”,
          </NoBreak>
          {" "}
          of coefficient {" "}
          <NoBreak>
            <Math>
              $a$
            </Math>
            .)
          </NoBreak>
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 1.
            </b>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x \ra 3x + 1)' = (x \ra 3)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            as per
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x \ra Ax + B)' = (x \ra A)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            with {" "}
            <NoBreak>
              <Math>
                $A = 3$
              </Math>
              ,
            </NoBreak>
            {" "} {" "}
            <NoBreak>
              <Math>
                $B = 1$
              </Math>
              .
            </NoBreak>
          </OuterP>
        </Example>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 2.
            </b>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x \ra 12 - x)' = (x \ra -1)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            as per
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x \ra Ax + B)' = (x \ra A)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            with {" "}
            <NoBreak>
              <Math>
                $A = -1$
              </Math>
              ,
            </NoBreak>
            {" "} {" "}
            <NoBreak>
              <Math>
                $B = 12$
              </Math>
              .
            </NoBreak>
          </OuterP>
        </Example>
      </Section>
    </>}
    {visibleRestSections() > 4 && <>
      <Pause />
      <Section id="section-6">
        <OuterP>
          <b>
            Units of the Derivative.
          </b>
          {" "}
          If units are present, we have
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;$y$ axis units for $f'$&#125; \,= &#123;\te&#123;$y$ axis units for $\f$&#125; \over \te&#123;$x$ axis units for $\f$&#125;&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          because a value output by {" "}
          <Math>
            $\f'$
          </Math>
          {" "} is the
          {" "}
          <i>
            slope
          </i>
          {" "} of a tangent line attached to the
          graph {" "}
          <NoBreak>
            <Math>
              $y = f(x)$
            </Math>
            ,
          </NoBreak>
          {" "} and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;$x$ axis units for $f'$&#125;\, = \rt&#123;0.02&#125;\,\te&#123;$x$ axis units for $f$&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          because an input for {" "}
          <Math>
            $\f'$
          </Math>
          {" "} is an input for {" "}
          <NoBreak>
            <Math>
              $\f$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          For example, if the “before” graph has units
          of...
        </OuterP>
        <Pause />
        <List style="padding-left:2.5rem;padding-right:2rem;">
          <Item>
            <p>
              seconds on the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis, meters on the
              {" "}
              <Math>
                $y$
              </Math>
              {" "} axis
            </p>
          </Item>
        </List>
        <Pause />
        <OuterP>
          ...then the “after” graph will have units of...
          <ImageRight
            src="/build-img/svgo-svg/whL5.svg"
            offsetY="0.6em"
            intrinsicWidth={700}
            intrinsicHeight={400}
          />
        </OuterP>
        <Pause />
        <List style="padding-left:2.5rem;padding-right:2rem;">
          <Item>
            <p>
              seconds on the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis, meters per
              second on the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis
            </p>
          </Item>
        </List>
        <Pause />
        <OuterP>
          ...while if the “before” graph has units of...
        </OuterP>
        <Pause />
        <List style="padding-left:2.5rem;padding-right:2rem;">
          <Item>
            <p>
              apples on the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis, oranges on the
              {" "}
              <Math>
                $y$
              </Math>
              {" "} axis
            </p>
          </Item>
        </List>
        <Pause />
        <OuterP>
          ...then the “after” graph will have units of...
          <ImageLeft
            src="/build-img/svgo-svg/ekk4.svg"
            offsetY="0.6em"
            intrinsicWidth={700}
            intrinsicHeight={400}
          />
        </OuterP>
        <Pause />
        <List style="padding-left:2.5rem;padding-right:2rem;">
          <Item>
            <p>
              apples on the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis, oranges per apple
              on the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis
            </p>
          </Item>
        </List>
        <Pause />
        <OuterP>
          ...and so on.
        </OuterP>
        <OuterP class="indent-10">
          Units might also prompt us to call {" "}
          <Math>
            $f'$
          </Math>
          {" "} the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          rate of change
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          of {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            ,
          </NoBreak>
          {" "} or, depending, as the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          instantaneous
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          rate of change of {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            .
          </NoBreak>
          {" "} The latter emphasizes that the tangent’s slope can change from point to point.
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 5 && <>
      <Pause />
      <Section id="section-7">
        <OuterP>
          <b>
            The second derivative.
          </b>
          {" "}
          The {" "}
          <i>
            second derivative
          </i>
          {" "} of {" "}
          <Math>
            $f$
          </Math>
          {" "} is the derivative
          of the derivative of {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            .
          </NoBreak>
          {" "} It is written {" "}
          <NoBreak>
            “
            <Math>
              $f''$
            </Math>
            ”:
          </NoBreak>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \,\,\,f'' = (f')'.
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          Likewise, we have, e.g.,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;align*&#125;
          \up&#123;0.95&#125;f''' &amp;= (f'')'\\
          \up&#123;1.25&#125;f'''' &amp;= (f''')'\\
          \up&#123;1.25&#125;f''''\psa' &amp;= (f'''')'\\
          \end&#123;align*&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          the {" "}
          <i>
            third
          </i>
          , {" "}
          <i>
            fourth
          </i>
          {" "} and {" "}
          <i>
            fifth
          </i>
          {" "} derivatives of {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            .
          </NoBreak>
          {" "} One can also
          write
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f^&#123;(n)&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for the {" "}
          <NoBreak>
            <Math>
              $n$
            </Math>
            -th
          </NoBreak>
          {" "} derivative of {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            ,
          </NoBreak>
          {" "} so that, for
          example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f^&#123;(7)&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          means the same as
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f'''''''
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          without having to squint and re-count the apostrophes several times.
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 3.
            </b>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x \ra 3x + 1)'' = (x \ra 0)
            $$
            <ImageRight
              src="/build-img/svgo-svg/ORL8.svg"
              offsetY="0.1em"
              atLeastAsWide={true}
              intrinsicWidth={900}
              intrinsicHeight={700}
            />
          </MathBlock>
        </Example>
        <Pause />
        <OuterP>
          because
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (x \ra 3x + 1)' = (x \ra 3)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (x \ra 3)' = (x \ra 0)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          so, from start to finish,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (x \ra 3x + 1)'' =  ((x \ra 3x + 1)')' = (x \ra 3)' = (x \ra 0)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          where we unpeel the onion starting from the
          inside. (Physically difficult.)
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 4.
            </b>
            {" "}
            More generally,
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \,\,\,(x \ra ax + b)'' = (x \ra 0)
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
            {" "} by a similar computation;
            a.k.a.:
          </OuterP>
          <Pause />
          <CentralDisplayItalic>
            ~ the second derivative of an affine function is zero ~
          </CentralDisplayItalic>
        </Example>
        <Pause />
        <StarDivider style="margin-top:-0.5em;margin-bottom:0em" />
      </Section>
    </>}
    {visibleRestSections() > 6 && <>
      <Pause />
      <Section id="section-8">
        <OuterP>
          <b>
            Geometric interpretation of the second derivative.
          </b>
          {" "}
          The sign of the second derivative indicates whether
          a graph is “bending upwards” or “bending
          downwards”. Upward-bending graphs have a positive
          second derivative, whereas downward-bending graphs
          have a negative second derivative:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/gmq7.svg"
          intrinsicWidth={1550}
          intrinsicHeight={450}
        />
        <Pause />
        <OuterP>
          Reason like this: the second derivative is {" "}
          <del>
            “the rate of change of the rate of change”.
          </del>
          {" "} Sorry: “the rate of change of the slope”.
          (Same difference.) Ergo, if the second derivative
          is positive, the slope is increasing; if the
          second derivative is negative, the slope is
          decreasing. Moreover, an
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          increasing
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          slope gives curves a “bending upwards” shape, while a
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          decreasing
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          slope gives curves a “bending downward” shape!
        </OuterP>
        <OuterP class="indent-10">
          To emphasize, if the second derivative is some
        </OuterP>
        <Pause />
        <CentralDisplay>
          LARGE POSITIVE NUMBER
        </CentralDisplay>
        <Pause />
        <OuterP>
          then the slope is increasing at that rate,
          which could result in a sharp bend upwards
          in the graph (unless you are near vertical
          already—you can't see the difference between
          slope {" "}
          <Math>
            $100$
          </Math>
          {" "} and slope {" "}
          <Math>
            $1000$
          </Math>
          {" "} very well, at most
          scales—nor between {" "}
          <Math>
            $-1000$
          </Math>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $-100$
            </Math>
            ,
          </NoBreak>
          {" "} for that
          matter).
        </OuterP>
        <OuterP class="indent-10">
          Likewise, if the second derivative is some
        </OuterP>
        <Pause />
        <CentralDisplay>
          LARGE NEGATIVE NUMBER
        </CentralDisplay>
        <Pause />
        <OuterP>
          then the slope is decreasing at [the absolute
          value of] that rate, which could result in
          a sharp bend downwards in the graph (unless you are near vertical already, once again).
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 7 && <>
      <Pause />
      <Section id="section-9">
        <OuterP>
          <b>
            Vocabulary #1.
          </b>
          {" "}
          Curves with increasing (technically:
          {" "}
          <i>
            nondecreasing
          </i>
          ) slope are called {" "}
          <i>
            convex
          </i>
          ,
          while curves with decreasing (technically:
          {" "}
          <i>
            nonincreasing
          </i>
          ) slope are called {" "}
          <i>
            concave
          </i>
          .
          Viz:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/at2Y.svg"
          intrinsicWidth={550}
          intrinsicHeight={220}
        />
        <Pause />
        <OuterP>
          <b>
            Vocabulary #2.
          </b>
          {" "}
          An {" "}
          <i>
            inflection point
          </i>
          {" "} is a point at the
          interface between convex and concave sections
          of a graph:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/tv8l.svg"
          intrinsicWidth={500}
          intrinsicHeight="258.022"
        />
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 5.
            </b>
            {" "}
            The fact that
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x \ra 3x + 1)'' = (x \ra 0)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            indicates that the graph
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            y = 3x + 1
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            is neither “bending upwards” nor “bending
            {" "}
            <NoBreak>
              downwards”—
              <Math>
                $0$
              </Math>
            </NoBreak>
            {" "} is neither positive, nor negative.
          </OuterP>
        </Example>
      </Section>
    </>}
    {visibleRestSections() > 8 && <>
      <Pause />
      <Section id="section-10">
        <CodexSuggestions>
          <p>
            Keep this basic position/velocity/acceleration interpretation here: it gives second derivatives and their units a concrete meaning. The new chapter can start where two coordinate rates must be combined, without repeating this introduction.
          </p>
        </CodexSuggestions>
        <OuterP>
          <b>
            The second derivative of position.
          </b>
          {" "}
          A graph of the form...
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/UjMy.svg"
          intrinsicWidth={400}
          intrinsicHeight={300}
        />
        <Pause />
        <OuterP>
          ...describes {" "}
          <i>
            position as a function of time
          </i>
          {" "}
          (look at the units); the derivative...
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/wwWE.svg"
          intrinsicWidth={400}
          intrinsicHeight={300}
        />
        <Pause />
        <OuterP>
          ...describes {" "}
          <i>
            velocity as a function of time
          </i>
          ;
          finally, the second derivative...
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/cBcm.svg"
          intrinsicWidth={400}
          intrinsicHeight={300}
        >
          <ImageLeft
            src="/build-img/svgo-svg/zAav.svg"
            intrinsicWidth={1350}
            intrinsicHeight={700}
          />
        </Image>
        <Pause />
        <OuterP>
          ...describes
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          the rate of change of velocity
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          also known as the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          acceleration
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          (!) as a function of time.
        </OuterP>
        <OuterP class="indent-10">
          The second derivative’s {" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -axis
          </NoBreak>
          {" "} units are
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;$y$ axis units for $f'$&#125; \over \te&#123;$x$ axis units for $f'$&#125;&#125; =
          &#123;\te&#123;m&#125;/\te&#123;s&#125; \over \te&#123;s&#125;&#125; =
          &#123;\te&#123;m&#125; \over \rt&#123;0.1&#125;\te&#123;s&#125;\!&#123;\,&#125;^2&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          because {" "}
          <NoBreak>
            <Math>
              $f'' = (f')'$
            </Math>
            .
          </NoBreak>
          {" "} The point is, a tangent
          to the graph {" "}
          <Math>
            $y = f'(t)$
          </Math>
          {" "} has a “rise” measured
          in meters per second and a “run” measured in
          seconds:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/YS5-.svg"
          intrinsicWidth={550}
          intrinsicHeight={470}
        />
        <Pause />
        <OuterP>
          The ratio “rise over run” has the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;m&#125;/\te&#123;s&#125; \over \te&#123;s&#125;&#125;
          = &#123;\te&#123;m&#125; \over \te&#123;s&#125;&#125; \times &#123;1 \over \te&#123;s&#125;&#125;
          = &#123;\te&#123;m&#125; \over \te&#123;s&#125;\!&#123;\,&#125;^2&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          giving the second derivative’s units. A ratio of the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;difference in velocity&#125; \over \te&#123;amount of time&#125;&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is an acceleration, defined as “the increase in velocity per unit
          time”.
        </OuterP>
        <OuterP class="indent-10">
          To summarize:
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          ~ velocity is the derivative of position ~
        </CentralDisplayItalic>
        <Pause />
        <CentralDisplayItalic>
          ~ acceleration is the derivative of velocity ~
        </CentralDisplayItalic>
        <Pause />
        <StarDivider />
        <Pause />
        <OuterP>
          <b>
            Note.
          </b>
          {" "}
          The exotic units
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;m&#125; \over \,\te&#123;s&#125;\!&#123;\,&#125;^2&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          can be read
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          meters per second squared
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          which sounds pretty cryptic, unfortunately, or
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          meters per second per second
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          which is better, or (slight difference!)
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          meters per second, per second
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          which is even better because it “shows” acceleration
          to be a number of {" "}
          <NoBreak>
            m
            <Math>
              $/$
            </Math>
            s
          </NoBreak>
          {" "} per second.
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 6.
            </b>
            {" "}
            Over {" "}
            <NoBreak>
              <Math>
                $10$
              </Math>
              s,
            </NoBreak>
            {" "} an object accelerating at a constant rate of
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            2&#123;\te&#123;m&#125;/\te&#123;s&#125;\!&#123;\,&#125;^2&#125;
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            increases its velocity by
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (2&#123;\te&#123;m&#125;/\te&#123;s&#125;\!&#123;\,&#125;^2&#125;) \times\, (10\te&#123;s&#125;) = 20&#123;\te&#123;m&#125;/\te&#123;s&#125;&#125;
            $$
            <ImageRight
              src="/build-img/svgo-svg/R0nW.svg"
              atLeastAsWide={true}
              intrinsicWidth={350}
              intrinsicHeight={150}
            />
          </MathBlock>
          <Pause />
          <OuterP>
            according to the template
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (\te&#123;rate of change&#125;) \times \te&#123;(amount of time)&#125;\\
            = \te&#123;(amount of change)&#125;
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            since acceleration is the rate of change of
            velocity.
          </OuterP>
        </Example>
      </Section>
    </>}
    {visibleRestSections() > 9 && <>
      <Pause />
      <Section id="section-11">
        <OuterP>
          <b>
            The jerk.
          </b>
          {" "}
          The rate of change of acceleration is called the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          jerk
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          in physics. The units of jerk (or “the”
          units of jerk, since any units of same {" "}
          <a
            href="chapter2#section-9"
            class="underline-on-hover"
          >
            <i>
              dimension
            </i>
          </a>
          {" "} would do as well) are
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;m&#125; \over \,\te&#123;s&#125;\!&#123;\,&#125;^3&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          or
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          meters per second, per second, per second
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          which is to say that the
          jerk specifies how many {" "}
          <i>
            meters per second,
            per second
          </i>
          {" "} (a measure of acceleration!)
          is being gained or lost {" "}
          <i>
            per second
          </i>
          .
        </OuterP>
        <OuterP class="indent-10">
          The term “jerk” is well-chosen,
          too, considering that
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          jerk
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          implies a change in acceleration, insofar as the
          everyday meaning of the word is concerned—think
          of experiencing a
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          constant acceleration
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          in a train or subway car, etc—the
          “constant” qualifier
          implies a buttery-smooth, “non-jerky” experience!
        </OuterP>
        <Pause />
        <CodexSuggestions>
          <p>
            Keep these definitions available here: the formal-properties exercises and the final lambda-function callback depend on them. Moving the product rule does not require moving the definition of function multiplication.
          </p>
        </CodexSuggestions>
        <OuterP>
          <b>
            Postscript: Sums, Products, Quotients,
            and Differences of Functions.
          </b>
          {" "}
          Returning briefly to {" "}
          <OutChapterLink
            href="/article/chapter3#_59_h.a.i_"
            class="out-chapter-link"
          >
            Chapter 3
          </OutChapterLink>
          , if
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f, g : \rr \ra \rr
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          then
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f \circ g = (x \ra f(g(x)))
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          f + g = (x \ra f(x) + g(x))
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          fg = (x \ra f(x)g
          (x))
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          &#123;f/g&#125; = (x \ra &#123;f(x)/g(x)&#125;)
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          f - g = (x \ra f(x) - g(x))
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          each equation being a {" "}
          <i>
            definition
          </i>
          .
          The notation
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f \circ g
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          goes back to {" "}
          <OutChapterLink
            href="/article/chapter3#_41_h.a.i_"
            class="out-chapter-link"
          >
            Exercise 5 of Chapter 3
          </OutChapterLink>
          , with the little circle {" "}
          <NoBreak>
            “
            <Math>
              $\circ$
            </Math>
            ”
          </NoBreak>
          {" "} called the {" "}
          <i>
            composition operator
          </i>
          , while the sum
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f + g
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and product
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          fg
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          of functions already appear in {" "}
          <OutChapterLink
            href="/article/chapter3#_54_h.a.i_"
            class="out-chapter-link"
          >
            Exercise 17 of Chapter 3
          </OutChapterLink>
          . (On the other hand, the
          quotient (i.e. {" "}
          <NoBreak>
            <Math>
              $f/g$
            </Math>
            )
          </NoBreak>
          {" "} and difference (i.e.,
          {" "}
          <NoBreak>
            <Math>
              $f - g$
            </Math>
            )
          </NoBreak>
          {" "} of functions are defined above for
          the first time, even if the definitions might
          {" "}
          <i>
            seem
          </i>
          {" "} familiar!)
        </OuterP>
        <CodexSuggestion>
          <p>
            <b>
              Exercise selection: keep the finish line visible.
            </b>
            {" "} Numbering here refers to the current draft. Keep Exercises 1–5: the seesaw, reciprocal slopes, second derivative, units of position, and the “correct, incorrect, or nonsensical” lambda equation. They are short and vary the kind of thinking required. Keep Exercise 6 if the units strip offers a useful independent check after Exercise 4; if it feels lengthy in use, reduce the number of strips rather than add further explanation.
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              Where to shorten further.
            </b>
            {" "} Exercises 7 and 8 form a bump-counting pair. They are not identical, but Exercise 8 is the first optional omission I would test: keep the simpler count in Exercise 7 and see whether the chapter already gives enough practice distinguishing upward and downward behaviour. Keep Exercise 9’s identification of successive derivatives and Exercise 10’s distinction between greatest slope and greatest rate of change of slope. These can finish the graphical work. Do not add another reconstruction exercise or a general true/false battery just to replace the removed material.
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              Add a small domain thread.
            </b>
            {" "} Ask “What is the simplest non-differentiable function you can think of?” Leave “simplest” open; square root and absolute value are natural answers under this chapter’s endpoint convention. Follow by restricting absolute value to the real line with zero removed and asking whether the new function is differentiable. Ask for its derivative without cases. Place this small pair before the formal-properties exercises, so the later identity-function question is a callback rather than a first introduction. Keep the solutions short; do not turn unusual one-point domains into an extra lesson.
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              Keep the formal ending, then a callback.
            </b>
            {" "} Keep current Exercises 11–12 (original E21–22) together and substantially intact: state the properties as self-contained claims, then prove associativity of function multiplication from its definition. Their repetition serves the book’s abstraction thread. Follow them with a small selection from the candidate pool, not all seven candidates. This lets the final activity return to short computations and recognition after the proof.
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <b>
              Choose from the pool, rather than assign the pool.
            </b>
            {" "} My preferred shortlist is B, D, and E: distinguish the jobs of id, recognize absolute value and a restricted identity behind compositions, then express the absolute-value derivative in terms of id. Use C as an alternative to B if identifying the neutral element for each operation is the more interesting task; avoid automatically assigning both. A is useful reserve practice but repeats Chapter 3. F is a reserve domain check if D and the punctured-domain question leave that distinction unclear. Defer G to The Product Rule rather than import a square-derivative prerequisite into this chapter. The pool’s current Exercise 13 is an editorial container, not one giant student exercise.
          </p>
        </CodexSuggestion>
      </Section>
    </>}
    {visibleRestSections() > 10 && <>
      <Pause />
      <Exercises
        at_end_of_page={true}
        mode="dual"
        show_curlicue={true}
        id="_74_h.a.i_"
      >
        <Exercise number={1}>
          <ExerciseStatement id="_61_h.a.i_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              {" "}
              Sketch the derivative of a function with the
              following graph (what {" "}
              <i>
                looks
              </i>
              {" "} like a sharp
              corner {" "}
              <i>
                is
              </i>
              {" "} a sharp corner):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Is8C.svg"
              intrinsicWidth={450}
              intrinsicHeight={230}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              It is:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/KPKF.svg"
              intrinsicWidth={450}
              intrinsicHeight={260}
            />
            <Pause />
            <OuterP>
              (I.e., the derivative is {" "}
              <Math>
                $1/2$
              </Math>
              {" "} when the slope is {" "}
              <NoBreak>
                <Math>
                  $1/2$
                </Math>
                ,
              </NoBreak>
              {" "}
              {" "}
              <Math>
                $-1/2$
              </Math>
              {" "} when the slope is {" "}
              <NoBreak>
                <Math>
                  $-1/2$
                </Math>
                ,
              </NoBreak>
              {" "} and undefined at the corners.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={2}>
          <ExerciseStatement id="_62_h.a.i_">
            <OuterP>
              <b>
                Exercise 2.
              </b>
              {" "}
              Would the derivative of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = &#123;1\over x&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              be a very large negative number, or a very
              large positive number, near {" "}
              <NoBreak>
                <Math>
                  $x = 0$
                </Math>
                ?
              </NoBreak>
              {" "} Or would
              it depend on which side of 0 you are?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The graph of {" "}
              <Math>
                $y = &#123;1 \over x&#125;$
              </Math>
              {" "} looks like so:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/hWOn.svg"
              intrinsicWidth={500}
              intrinsicHeight={500}
            />
            <Pause />
            <OuterP>
              The slope is very negative near {" "}
              <NoBreak>
                <Math>
                  $x = 0$
                </Math>
                ,
              </NoBreak>
              {" "} on either side.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={3}>
          <ExerciseStatement id="_63_h.a.i_">
            <OuterP>
              <b>
                Exercise 3.
              </b>
              {" "}
              Sketch the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              second
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              derivative of the graph in {" "}
              <InChapterLink
                href="#_61_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 1
              </InChapterLink>
              &#8288;.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The second derivative is zero wherever the
              first derivative is flat, and is undefined
              wherever the first derivative is undefined;
              this gives the second derivative the following
              pockmarked appearance:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/oCwv.svg"
              intrinsicWidth={450}
              intrinsicHeight={260}
            />
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                Further derivatives produce the same graph, over and over again.
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                “first derivative” is a synonym of “derivative”.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={4}>
          <ExerciseStatement id="_64_h.a.i_">
            <OuterP>
              <b>
                Exercise 4.
              </b>
              {" "}
              If we pretend that the graph of {" "}
              <InChapterLink
                href="#_61_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 1
              </InChapterLink>
              {" "}
              depicts the {" "}
              <del>
                distance that a car has traveled
                as a function of time,
              </del>
              {" "} position of a car as a function of
              time, with hours (hr) on the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -axis
              </NoBreak>
              {" "}
              and kilometers (km) on the {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -axis,
              </NoBreak>
              {" "} what
              do the units become on the axes of the first
              and second derivatives?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The units on the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis become kilometers,
              kilometers per hour, and kilometers per
              hours squared, including the first graph
              (for each derivative, divide the {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -axis
              </NoBreak>
              {" "} units by the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -axis
              </NoBreak>
              {" "} units):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/0dwd.svg"
              intrinsicWidth={470}
              intrinsicHeight={261}
            />
            <Pause />
            <Image
              src="/build-img/svgo-svg/b7Oc.svg"
              intrinsicWidth={470}
              intrinsicHeight={280}
            />
            <Pause />
            <Image
              src="/build-img/svgo-svg/OG7m.svg"
              intrinsicWidth={470}
              intrinsicHeight={280}
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
                The second and third functions are respectively
                the velocity and the acceleration of the car as
                a function of time.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={5}>
          <ExerciseStatement id="_65_h.a.i_">
            <OuterP>
              <b>
                Exercise 5.
              </b>
              {" "}
              Is the following equation correct, incorrect,
              or nonsensical?
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x \ra x + 1) \,+\, (u \ra 2u + 1) \,=\, (t \ra 3t + 2)
              $$
            </MathBlock>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The equation makes sense and is true.
              Syntactically,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x \ra x + 1) \,+\, (u \ra 2u + 1)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is a
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              sum of functions
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              because {" "}
              <Math>
                $x \ra x + 1$
              </Math>
              {" "} and {" "}
              <Math>
                $u \ra 2u + 1$
              </Math>
              {" "} are
              both functions. Now by definition, the sum
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f + g
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              of functions {" "}
              <Math>
                $f$
              </Math>
              {" "} and {" "}
              <Math>
                $g$
              </Math>
              {" "} is the function
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra f(x) + g(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              that maps an input to the sum of the functions’ outputs. So—for example—
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &amp; \,\,\,((x \ra x + 1) \,+\, (u \ra 2u + 1))(5) \\
              =&amp; \,\,\,(x \ra x + 1)(5) + (u \ra 2u + 1)(5) \up&#123;1.5&#125; \\
              =&amp; \,\,\,(5 + 1) + (2\cdot 5 + 1) \up&#123;1.5&#125; \\
              =&amp; \,\,\,3\cdot 5 + 2 = 17 \up&#123;1.5&#125;
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and—with a general input {" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                —
              </NoBreak>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &amp; \,\,\,((x \ra x + 1) \,+\, (u \ra 2u + 1))(t) \\
              =&amp; \,\,\,(x \ra x + 1)(t) + (u \ra 2u + 1)(t) \up&#123;1.5&#125; \\
              =&amp; \,\,\,(t + 1) + (2t + 1) \up&#123;1.5&#125; \\
              =&amp; \,\,\,3t + 2 \up&#123;1.5&#125;
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              so
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x \ra x + 1) \,+\, (u \ra 2u + 1)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the function {" "}
              <NoBreak>
                <Math>
                  $t \ra 3t + 2$
                </Math>
                .
              </NoBreak>
              {" "} (!!)
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              One can also do the main computation with {" "}
              <Math>
                $x$
              </Math>
              {" "}
              in place of {" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &amp; \,\,\,((x \ra x + 1) \,+\, (u \ra 2u + 1))(x) \\
              =&amp; \,\,\,(x \ra x + 1)(x) + (u \ra 2u + 1)(x) \up&#123;1.5&#125; \\
              =&amp; \,\,\,(x + 1) + (2x + 1) \up&#123;1.5&#125; \\
              =&amp; \,\,\,3x + 2 \up&#123;1.5&#125;
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              Here we have two different {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                's:
              </NoBreak>
              {" "}
              the placeholder {" "}
              <Math>
                $x$
              </Math>
              {" "} describing the first function, and the {" "}
              <Math>
                $x$
              </Math>
              {" "} that denotes
              the “outermost” input to the sum of the two functions. (These are
              really separate, and the “placeholder” {" "}
              <Math>
                $x$
              </Math>
              {" "} could be
              any symbol.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={6}>
          <ExerciseStatement id="_66_h.a.i_">
            <OuterP>
              <b>
                Exercise 6.
              </b>
              {" "}
              Complete the missing units for each strip
              below, using the given units:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/xFEG.svg"
              intrinsicWidth={650}
              intrinsicHeight={1145}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Each time you take a derivative, the units on the {" "}
              <Math>
                $x$
              </Math>
              {" "}
              axis stay the same, while the units on the
              {" "}
              <Math>
                $y$
              </Math>
              {" "} axis become divided by those on the {" "}
              <Math>
                $x$
              </Math>
              {" "}
              axis. This gives the unique solutions:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/GQf4.svg"
              intrinsicWidth={800}
              intrinsicHeight={1145}
            />
            <Pause />
            <OuterP>
              ...where we find units of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Huge \te&#123;s&#125;^&#123;1\over 2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              or {" "}
              <i>
                square root seconds
              </i>
              {" "} on the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis
              in the last strip,
              which is not at all clear what it means, or
              if such a thing exists.
              (But if there's a solution, it's that one, so we
              blindly write that down.)
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                A unit of {" "}
                <NoBreak>
                  “
                  <Math>
                    $1$
                  </Math>
                  ”
                </NoBreak>
                {" "} is a
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                dimensionless
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                unit. Dimensionless units arise when
                quantities are divided by like quantities.
                Think of dimensionless quantities as “pure
                fractions” or “pure ratios”. (Percentages
                are dimensionless—in fact the term
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                percentage
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                is synonymous with
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                dimensionless ratio
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                though if you spoke to people about
                “dimensionless ratios” they would look at
                you funny. Also percentages are a system of
                notation, whereby the symbol “%” means
                “divide the preceding number by 100 to get the ratio’s numerical value”.) (To drive
                it home: In Chinese, 
                {" "}
                <NoBreak>
                  “
                  <Math>
                    $23\%$
                  </Math>
                  ”
                </NoBreak>
                {" "} and {" "}
                <NoBreak>
                  “
                  <Math>
                    $23/100$
                  </Math>
                  ”
                </NoBreak>
                {" "} are
                indistinguishable when read out loud; they
                are both  read {" "}
                <NoBreak>
                  “
                  <Math>
                    $23$
                  </Math>
                </NoBreak>
                {" "} over {" "}
                <NoBreak>
                  <Math>
                    $100$
                  </Math>
                  ”;
                </NoBreak>
                {" "} that is
                the simple {" "}
                <i>
                  &amp;
                </i>
                {" "} correct way!)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise
          work="ing"
          number={7}
        >
          <ExerciseStatement id="_67_h.a.i_">
            <OuterP>
              <b>
                Exercise 7.
              </b>
              {" "}
              If the graph below has three “bumps” (two up,
              one down), then how many “bumps” does its derivative
              have?
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/aG77.svg"
              style="padding-bottom:1rem"
              intrinsicWidth={380}
              intrinsicHeight={260}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The derivative has a bump wherever the slope
              has a local maximum or local minimum, which happens
              at four places, per appearances:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/NfeV.svg"
              intrinsicWidth={440}
              intrinsicHeight={308}
            />
            <Pause />
            <OuterP>
              The derivative will therefore have four
              bumps—at least, four {" "}
              <i>
                large scale
              </i>
              {" "} bumps—if you're 
              curious, it looks like this:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/4xlL.svg"
              intrinsicWidth={440}
              intrinsicHeight={320}
            />
            <Pause />
            <OuterP>
              But nothing prevents the graph from
              having small wobbles near maximum or minimum slope, too small to see,
              meaning that each bump of the derivative contains
              micro-bumps, like small ripples atop a big wave!
              (Still, “four” is a good bet to achieve full marks.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise
          work="ing"
          number={8}
        >
          <ExerciseStatement id="_68_h.a.i_">
            <OuterP>
              <b>
                Exercise 8.
              </b>
              {" "}
              How many “up bumps” and “down bumps”, respectively,
              does the derivative of the function below have?
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/cRZH.svg"
              style="padding-bottom:1rem"
              intrinsicWidth={720}
              intrinsicHeight={220}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The derivative crests each time the
              slope of the original function reaches a
              steepest point before de-sloping again, 
              giving us—barring unseen mini-variations in slope that produce mini-bumps—six “up bumps” for
              the derivative and,
              reasoning symmetrically, five “down bumps”:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/ArpL.svg"
              intrinsicWidth={780}
              intrinsicHeight={430}
            />
          </Solution>
        </Exercise>
        <Exercise
          work="ing"
          number={9}
        >
          <ExerciseStatement id="_69_h.a.i_">
            <OuterP>
              <b>
                Exercise 9.
              </b>
              {" "}
              Among the functions below, which is the
              zeroth, first, and second derivative?
              (I.e., which is {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $f'$
                </Math>
                ,
              </NoBreak>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $f''$
                </Math>
                ,
              </NoBreak>
              {" "}
              assuming that relationship exists.)
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/-8uy.svg"
              intrinsicWidth="733.97"
              intrinsicHeight="146.452"
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The reodered sequence,
              from zeroth to second derivative,
              is:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/a02_.svg"
              intrinsicWidth="733.97"
              intrinsicHeight={178}
            />
            <Pause />
            <OuterP>
              In this sequence, the first graph
              has a slope that starts at {" "}
              <Math>
                $\sim\!-1$
              </Math>
              {" "} and
              ends at {" "}
              <NoBreak>
                <Math>
                  $\sim\!1$
                </Math>
                ,
              </NoBreak>
              {" "} while those are the
              values at which 
              the second graph
              starts and ends:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/-86e.svg"
              intrinsicWidth={650}
              intrinsicHeight={210}
            />
            <Pause />
            <OuterP>
              Likewise, the second graph has slope
              close to {" "}
              <Math>
                $0$
              </Math>
              {" "} at either end, and some
              slope near {" "}
              <Math>
                $1.5$
              </Math>
              {" "} or {" "}
              <Math>
                $2$
              </Math>
              {" "} towards the middle,
              matching the {" "}
              <i>
                values
              </i>
              {" "} of the third graph:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/m_fp.svg"
              intrinsicWidth={650}
              intrinsicHeight={220}
            />
            <Pause />
            <OuterP>
              ...and none of this coincidentally, since the
              third graph is the derivative of the second, is the
              derivative of the first!
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={10}>
          <ExerciseStatement id="_70_h.a.i_">
            <OuterP>
              <b>
                Exercise 10.
              </b>
              {" "}
              Where is the rate of change of the function
              below, on the part shown, greatest? And
              where is the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              rate of change of the rate of change
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              greatest?
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/GWW0.svg"
              intrinsicWidth={450}
              intrinsicHeight={250}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The rate of change is the slope, which
              is greatest along the right-hand portion
              of the curve:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Qi_q.svg"
              intrinsicWidth={450}
              intrinsicHeight={250}
            />
            <Pause />
            <OuterP>
              On the other hand,
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the rate of change
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              [a.k.a., second derivative] is the rate of change of the slope, greatest at the first bend:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/kw0r.svg"
              intrinsicWidth={450}
              intrinsicHeight={250}
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
                The first bend of the curve is the point of
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                maximum acceleration
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                if the graph denotes the position as a
                function of time of an object.
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                The last segment of the curve is the point of
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                maximum velocity
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                if the graph denotes the position as a
                function of time of an object.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={11}>
          <ExerciseStatement id="_71_h.a.i_">
            <OuterP>
              <b>
                Exercise 11.
              </b>
            </OuterP>
            <CodexSuggestions>
              <p>
                Keep this exercise substantially intact: current Exercise 11 is original E21. Its repetition asks the reader to supply objects, assumptions, and quantifiers rather than merely recognize an identity. Keep the associativity proof immediately after it, then finish with a few short lambda-function callbacks. Do not split this into a longer sequence of new teaching exercises.
              </p>
            </CodexSuggestions>
            <OuterP>
              Express the...
            </OuterP>
            <Pause />
            <List style="padding-left:2.4em;gap:0.1em;">
              <Item>
                <p>
                  associativity of function composition
                </p>
              </Item>
              <Item>
                <p>
                  associativity of function multiplication
                </p>
              </Item>
              <Item>
                <p>
                  associativity of function addition
                </p>
              </Item>
              <Item>
                <p>
                  commutativity of function multiplication
                </p>
              </Item>
              <Item>
                <p>
                  commutativity of function addition
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              ...as well as the...
            </OuterP>
            <Pause />
            <List style="padding-left:2.4em;gap:0.1em;">
              <Item>
                <p>
                  associativity of real number multiplication
                </p>
              </Item>
              <Item>
                <p>
                  associativity of real number addition
                </p>
              </Item>
              <Item>
                <p>
                  commutativity of real number multiplication
                </p>
              </Item>
              <Item>
                <p>
                  commutativity of real number addition
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              ...in the form of self-contained, formal statements.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              For the functions:
            </OuterP>
            <Pause />
            <List>
              <Item>
                <Item>
                  <i>
                    the associativity of function multiplication is
                    the fact that {" "}
                    <Math>
                      $(f \circ g) \circ h = f \circ (g \circ h)$
                    </Math>
                    {" "}
                    for all functions {" "}
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
                      ,
                    </NoBreak>
                    {" "} {" "}
                    <Math>
                      $h$
                    </Math>
                    {" "} such that
                    {" "}
                    <NoBreak>
                      <Math>
                        $h : D \ra C$
                      </Math>
                      ,
                    </NoBreak>
                    {" "} {" "}
                    <NoBreak>
                      <Math>
                        $g : C \ra B$
                      </Math>
                      ,
                    </NoBreak>
                    {" "} {" "}
                    <Math>
                      $f : B \ra A$
                    </Math>
                    {" "}
                    [for arbitrary sets {" "}
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
                      ]
                    </NoBreak>
                    <ImageLeft
                      src="/build-img/svgo-svg/pcYW.svg"
                      offsetX="4em"
                      intrinsicWidth={430}
                      intrinsicHeight={240}
                    />
                  </i>
                </Item>
              </Item>
              <Item>
                <p>
                  <i>
                    the associativity of function multiplication is
                    the fact that {" "}
                    <Math>
                      $f(gh) = (fg)h$
                    </Math>
                    {" "} for all {" "}
                    <Math>
                      $f, g, h : \rr \ra \rr$
                    </Math>
                  </i>
                </p>
              </Item>
              <Item>
                <p>
                  <i>
                    the associativity of function addition is
                    the fact that {" "}
                    <Math>
                      $f + (g + h) = (f + g) + h$
                    </Math>
                    {" "} for all {" "}
                    <Math>
                      $f, g, h : \rr \ra \rr$
                    </Math>
                  </i>
                </p>
              </Item>
              <Item>
                <p>
                  <i>
                    the commutativity of function multiplication is
                    the fact that {" "}
                    <Math>
                      $fg = gf$
                    </Math>
                    {" "} for all {" "}
                    <Math>
                      $f, g : \rr \ra \rr$
                    </Math>
                  </i>
                </p>
              </Item>
              <Item>
                <p>
                  <i>
                    the commutativity of function addition is
                    the fact that {" "}
                    <Math>
                      $f + g = g + f$
                    </Math>
                    {" "} for all {" "}
                    <Math>
                      $f, g : \rr \ra \rr$
                    </Math>
                  </i>
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              For the real numbers:
            </OuterP>
            <Pause />
            <List>
              <Item>
                <p>
                  <i>
                    the associativity of [real number] multiplication is
                    the fact that {" "}
                    <Math>
                      $a(bc) = (ab)c$
                    </Math>
                    {" "} for all {" "}
                    <Math>
                      $a, b, c \in \rr$
                    </Math>
                  </i>
                </p>
              </Item>
              <Item>
                <p>
                  <i>
                    the associativity of [real number] addition is
                    the fact that {" "}
                    <Math>
                      $a + (b + c) = (a + b) + c$
                    </Math>
                    {" "} for all {" "}
                    <Math>
                      $a, b, c \in \rr$
                    </Math>
                  </i>
                </p>
              </Item>
              <Item>
                <p>
                  <i>
                    the commutativity of [real number] multiplication is
                    the fact that {" "}
                    <Math>
                      $ab = ba$
                    </Math>
                    {" "} for all {" "}
                    <Math>
                      $a, b \in \rr$
                    </Math>
                  </i>
                </p>
              </Item>
              <Item>
                <p>
                  <i>
                    the commutativity of [real number] addition is
                    the fact that {" "}
                    <Math>
                      $a + b = b + a$
                    </Math>
                    {" "} for all {" "}
                    <Math>
                      $a, b \in \rr$
                    </Math>
                  </i>
                </p>
              </Item>
            </List>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                We never proved the associativity
                of function addition, but it is easy to prove!
                (For other proofs see Exercise 32, Exercise 33, as
                well as Exercise 9, {" "}
                <OutChapterLink
                  href="/article/chapter3#_59_h.a.i_"
                  class="out-chapter-link"
                >
                  Chapter 3
                </OutChapterLink>
                .)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={12}>
          <ExerciseStatement id="_72_h.a.i_">
            <OuterP>
              <b>
                Exercise 12.
              </b>
            </OuterP>
            <CodexSuggestions>
              <p>
                Keep directly after the formal-statements exercise: current Exercise 12 is original E22. Together they ask the reader to state a claim and unpack a definition to prove one instance. Keep the solution proportionate, then follow with the selected lambda-function callbacks. No additional theory is needed.
              </p>
            </CodexSuggestions>
            <OuterP>
              Apply the definition
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              fg = (u \ra f(u)g(u))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              of function multiplication
              to show that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (fg)h = f(gh)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for all functions {" "}
              <NoBreak>
                <Math>
                  $f, g, h : \rr \ra \rr$
                </Math>
                ,
              </NoBreak>
              {" "}
              or
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <NoBreak>
                (
                <Math>
                  $f$
                </Math>
              </NoBreak>
              {" "} times {" "}
              <NoBreak>
                <Math>
                  $g$
                </Math>
                )
              </NoBreak>
              {" "} times {" "}
              <Math>
                $h$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              equals
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <Math>
                $f$
              </Math>
              {" "} times {" "}
              <NoBreak>
                (
                <Math>
                  $g$
                </Math>
              </NoBreak>
              {" "} times {" "}
              <NoBreak>
                <Math>
                  $h$
                </Math>
                )
              </NoBreak>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              for all functions {" "}
              <NoBreak>
                <Math>
                  $f, g, h : \rr \ra \rr$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              It is necessary and sufficient to show that {" "}
              <Math>
                $((fg)h)(u) = (f(gh))(u)$
              </Math>
              {" "}
              for an arbitrary input {" "}
              <NoBreak>
                <Math>
                  $u \in \rr$
                </Math>
                .
              </NoBreak>
              {" "} (Function equality is
              based on input-output behavior: two functions are
              equal if and only if every input is mapped to the
              same output under either function. See {" "}
              <OutChapterLink
                href="/article/chapter3#_45_h.a.i_"
                class="out-chapter-link"
              >
                Note 5, Exercise 9, Chapter 3
              </OutChapterLink>
              .)
            </OuterP>
            <OuterP class="indent-10">
              Starting up,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              ((fg)h)(u) = (fg)(u) \cdot h(u)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by the definition of function multiplication,
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f(gh))(u) = f(u) \cdot (gh)(u)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              likewise. Moreover,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (fg)(u) = f(u) \cdot g(u)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (gh)(u) = g(u) \cdot h(u)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by the same definition again. Therefore,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              ((fg)h)(u) = (f(u) \cdot g(u)) \cdot h(u)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              on the one hand, and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f(gh))(u) = f(u) \cdot (g(u) \cdot h(u))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              on the other hand. But
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f(u) \cdot g(u)) \cdot h(u) = f(u) \cdot (g(u) \cdot h(u))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by the associativity of ordinary real number
              multiplication. (Not function multiplication:
              {" "}
              <i>
                real number multiplication
              </i>
              .) So
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              ((fg)h)(u)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              equals
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f(gh))(u)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for arbitrary {" "}
              <NoBreak>
                <Math>
                  $u$
                </Math>
                ,
              </NoBreak>
              {" "} which completes the proof.
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                In words, we have just established the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                associativity of function multiplication
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                while we had previously established the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                associativity of function composition
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                (if you recall that one) in {" "}
                <OutChapterLink
                  href="/article/chapter3#_46_h.a.i_"
                  class="out-chapter-link"
                >
                  Exercise 9 of Chapter 3
                </OutChapterLink>
                .
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                By this result, we can write
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                fgh
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                without parentheses: {" "}
                <Math>
                  $(fg)h$
                </Math>
                {" "} and {" "}
                <Math>
                  $f(gh)$
                </Math>
                {" "} give the same result.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={13}>
          <ExerciseStatement id="_73_h.a.i_">
            <OuterP>
              <b>
                Exercise 13.
              </b>
            </OuterP>
            <CodexSuggestion>
              <p>
                Selection to choose from, not a proposed requirement to do all of these. Current Exercise 13 is an editorial container following Exercises 11–12 (original E21–22). Preferred shortlist: B, D, E. C can replace B; A and F are reserves; G belongs later in The Product Rule. The shortlist assumes the small absolute-value/domain pair has been introduced earlier in these exercises. Keep all candidates available for selection now, but eventually present only the chosen short questions as the callback to “correct, incorrect, or nonsensical.” In the candidates below, {" "}
                <NoBreak>
                  <Math>
                    $\mathrm&#123;id&#125;=(x\mapsto x)$
                  </Math>
                  ,
                </NoBreak>
                {" "} function products and powers are pointwise, and all inputs are real. State any domain restrictions.
              </p>
            </CodexSuggestion>
            <CodexSuggestion>
              <p>
                <b>
                  Candidate A: two orders.
                </b>
                {" "} Rewrite each expression as a single lambda function:
              </p>
              <Pause />
              <MathBlock>
                $$
                (x\mapsto x+1)\circ(u\mapsto u^2),\qquad
                (u\mapsto u^2)\circ(x\mapsto x+1).
                $$
              </MathBlock>
              <Pause />
              <p>
                Answer notes for selection: {" "}
                <Math>
                  $t\mapsto t^2+1$
                </Math>
                {" "} and {" "}
                <NoBreak>
                  <Math>
                    $t\mapsto(t+1)^2$
                  </Math>
                  .
                </NoBreak>
                {" "} Different bound-variable names should not become a separate obstacle. This is the most direct computational callback, but may repeat Chapter 3 too closely.
              </p>
            </CodexSuggestion>
            <CodexSuggestion>
              <p>
                <b>
                  Candidate B: id has different jobs.
                </b>
                {" "} For {" "}
                <NoBreak>
                  <Math>
                    $f:\mathbb R\to\mathbb R$
                  </Math>
                  ,
                </NoBreak>
                {" "} rewrite these as lambda functions, then identify which equal {" "}
                <NoBreak>
                  <Math>
                    $f$
                  </Math>
                  :
                </NoBreak>
              </p>
              <Pause />
              <MathBlock>
                $$
                f\circ\mathrm&#123;id&#125;,\qquad \mathrm&#123;id&#125;\circ f,\qquad
                f+\mathrm&#123;id&#125;,\qquad f\,\mathrm&#123;id&#125;.
                $$
              </MathBlock>
              <Pause />
              <p>
                Answer notes: {" "}
                <NoBreak>
                  <Math>
                    $x\mapsto f(x)$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $x\mapsto f(x)$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $x\mapsto f(x)+x$
                  </Math>
                  ,
                </NoBreak>
                {" "} and {" "}
                <NoBreak>
                  <Math>
                    $x\mapsto xf(x)$
                  </Math>
                  .
                </NoBreak>
                {" "} Only the first two equal {" "}
                <Math>
                  $f$
                </Math>
                {" "} for every {" "}
                <NoBreak>
                  <Math>
                    $f$
                  </Math>
                  .
                </NoBreak>
              </p>
            </CodexSuggestion>
            <CodexSuggestion>
              <p>
                <b>
                  Candidate C: which identity?
                </b>
                {" "} Find a function that leaves every real-valued function on the real line unchanged when added to it. Then ask the same question for multiplication and for composition.
              </p>
              <p class="indent-10">
                Answer notes: {" "}
                <NoBreak>
                  <Math>
                    $x\mapsto0$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $x\mapsto1$
                  </Math>
                  ,
                </NoBreak>
                {" "} and {" "}
                <NoBreak>
                  <Math>
                    $\mathrm&#123;id&#125;$
                  </Math>
                  ,
                </NoBreak>
                {" "} respectively. Ask for the defining equations if a closer callback to the formal-statements exercise is wanted. “Identity” belongs to an operation, not simply to an object.
              </p>
            </CodexSuggestion>
            <CodexSuggestion>
              <p>
                <b>
                  Candidate D: recognize the function.
                </b>
                {" "} Let {" "}
                <Math>
                  $s=(x\mapsto\sqrt&#123;x&#125;)$
                </Math>
                {" "} on the nonnegative reals. Give an ordinary name or description for each function, including its domain:
              </p>
              <Pause />
              <MathBlock>
                $$
                s\circ\mathrm&#123;id&#125;^2,\qquad \mathrm&#123;id&#125;^2\circ s.
                $$
              </MathBlock>
              <Pause />
              <p>
                Answer notes: absolute value on the real line; the identity restricted to the nonnegative reals. Here {" "}
                <Math>
                  $\mathrm&#123;id&#125;^2$
                </Math>
                {" "} is the pointwise square, not {" "}
                <NoBreak>
                  <Math>
                    $\mathrm&#123;id&#125;\circ\mathrm&#123;id&#125;$
                  </Math>
                  .
                </NoBreak>
                {" "} This candidate connects to both the absolute-value exercise and the importance of domains.
              </p>
            </CodexSuggestion>
            <CodexSuggestion>
              <p>
                <b>
                  Candidate E: direction in terms of id.
                </b>
                {" "} Restrict {" "}
                <Math>
                  $x\mapsto|x|$
                </Math>
                {" "} to the real line with zero removed. Write its derivative using {" "}
                <Math>
                  $\mathrm&#123;id&#125;$
                </Math>
                {" "} and pointwise function operations, without cases or a lambda expression. Define {" "}
                <Math>
                  $|f|=(x\mapsto|f(x)|)$
                </Math>
                {" "} first, or ask the student to supply that definition.
              </p>
              <p class="indent-10">
                Answer notes: {" "}
                <NoBreak>
                  <Math>
                    $\mathrm&#123;id&#125;/|\mathrm&#123;id&#125;|$
                  </Math>
                  ,
                </NoBreak>
                {" "} with zero excluded. An alternative using Candidate D is {" "}
                <NoBreak>
                  <Math>
                    $\mathrm&#123;id&#125;/(s\circ\mathrm&#123;id&#125;^2)$
                  </Math>
                  .
                </NoBreak>
                {" "} Choose one notation rather than requiring both. The function retains the direction of a nonzero input and discards its magnitude.
              </p>
            </CodexSuggestion>
            <CodexSuggestion>
              <p>
                <b>
                  Candidate F: the domain catches the cancellation.
                </b>
                {" "} Is
              </p>
              <Pause />
              <MathBlock>
                $$
                &#123;\mathrm&#123;id&#125;\over\mathrm&#123;id&#125;&#125;=(x\mapsto1)
                $$
              </MathBlock>
              <Pause />
              <p>
                correct if the function on the right is defined on all real numbers? If not, repair the statement.
              </p>
              <p class="indent-10">
                Answer notes: the left side is undefined at zero. Restrict the right-hand domain to the nonzero reals. The two formulas agree wherever the quotient is defined, but that alone does not make the original functions equal.
              </p>
            </CodexSuggestion>
            <CodexSuggestion>
              <p>
                <b>
                  Candidate G: the same symbols, two operations.
                </b>
                {" "} With {" "}
                <Math>
                  $\mathrm&#123;id&#125;^2$
                </Math>
                {" "} meaning pointwise square, identify these two functions:
              </p>
              <Pause />
              <MathBlock>
                $$
                (\mathrm&#123;id&#125;^2)',\qquad (\mathrm&#123;id&#125;')^2.
                $$
              </MathBlock>
              <Pause />
              <p>
                Answer notes: {" "}
                <Math>
                  $2\mathrm&#123;id&#125;$
                </Math>
                {" "} and the constant-one function. Use only if the derivative of the square function has already been established by this point; otherwise defer this candidate to The Product Rule. It could later contrast differentiation as an operator with pointwise multiplication.
              </p>
            </CodexSuggestion>
          </ExerciseStatement>
        </Exercise>
      </Exercises>
    </>}
  </>;
};