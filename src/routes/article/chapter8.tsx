import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Boxed  from "~/components/Boxed";
import { CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { MathBlock, Math }  from "~/components/Math";
import OutChapterLink  from "~/components/OutChapterLink";
import OuterP  from "~/components/OuterP";
import { ImageRight, ImageLeft }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { StarDivider }  from "~/components/StarDivider";
import { SolutionNote, Example, NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter8__() {
  return (
    <Article
      prevPage="/article/chapter7"
      nextPage="/article/chapter9"
      pageNecessaryMargin={1500}
      maxElementWidth={1000}
      id="_146_h.a.i_"
      path="/article/chapter8"
    >
      <ArticleTitle banner="Chapter 8:">
        Dimensional Analysis
      </ArticleTitle>
      <Section id="section-1">
        <OuterP>
          <b>
            The topic.
          </b>
          {" "}
          A
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          dimension
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          is a category of units such as “time”, as
          touched upon in the 
          {" "}
          <OutChapterLink
            class="out-chapter-link"
            href="/article/chapter2#section-9"
          >
            Postcript to Chapter 
            2
          </OutChapterLink>
          .
          The topic of
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          dimensional analysis
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          is that of analyzing the units within a mathematical 
          expression to uncover contradictions (pointing
          to upstream errors) and/or conversely to offer
          validation.
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-2">
        <OuterP>
          <b>
            Notation: function signatures.
          </b>
          {" "}
          We associate units not only with numbers, but also with functions:
          if {" "}
          <Math>
            $f$
          </Math>
          {" "} is a function from {" "}
          <Math>
            $\rr$
          </Math>
          {" "} to {" "}
          <NoBreak>
            <Math>
              $\rr$
            </Math>
            ,
          </NoBreak>
          {" "}
          we write
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f : [\A] \ra [\B]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          to indicate that {" "}
          <Math>
            $f$
          </Math>
          {" "} takes inputs in units {" "}
          <Math>
            $\A$
          </Math>
          {" "} and returns
          outputs in units {" "}
          <NoBreak>
            <Math>
              $\B$
            </Math>
            .
          </NoBreak>
          {" "} The ordered pair {" "}
          <NoBreak>
            <Math>
              $(\A, \B)$
            </Math>
            ,
          </NoBreak>
          {" "} written
          {" "}
          <NoBreak>
            “
            <Math>
              $[\A] \ra [\B]$
            </Math>
            ”,
          </NoBreak>
          {" "} is the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          signature
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          of {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 1.
            </b>
            {" "}
            If
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            z : [\lbs] \ra [\pounds]
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            then its inputs denote pounds, the measure of weight,
            and its outputs pounds {" "}
            <i>
              sterling
            </i>
            , the measure of wealth.
          </OuterP>
        </Example>
      </Section>
      <Pause />
      <Rest />
    </Article>
  );
}

const Rest = () => {
  const visibleRestSections = useShowMore(10);
  return <>
    {visibleRestSections() > 0 && <>
      <Section id="section-3">
        <OuterP>
          <b>
            Dimensionless units.
          </b>
          {" "}
          We write {" "}
          <Math>
            $[1]$
          </Math>
          {" "} for dimensionless units, as when a quantity
          is divided by a like-dimensioned quantity. Thus
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \large \cos : [1] \ra [1]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          takes a ratio of arc length to radius—the radian—and returns
          a ratio of adjacent length to hypotenuse*. Both are “length over length”.
          The outputs of sin, tan, etc., are dimensionless for the same reason.
          <ImageLeft
            src="/build-img/svgo-svg/aIgf.svg"
            intrinsicWidth={600}
            intrinsicHeight={500}
          />
        </OuterP>
        <Pause />
        <OuterP>
          <i>
            *Note.
          </i>
          {" "} To be precise, these “lengths” are actually
          coordinate changes that may be negative—except for the
          hypotenuse-a.k.a.-radius, which is always positive—so they
          are “signed lengths”, or {" "}
          <i>
            displacements
          </i>
          , more accurately. 
          Likewise the radian carries a sign—the radian says “rotate by
          this multiple of the radius, with {" "}
          <NoBreak>
            ‘
            <Math>
              $+$
            </Math>
            ’
          </NoBreak>
          {" "} for counterclockwise and {" "}
          <NoBreak>
            ‘
            <Math>
              $-$
            </Math>
            ’
          </NoBreak>
          {" "}
          for clockwise**”.
        </OuterP>
        <Pause />
        <OuterP>
          <i>
            **Second Note.
          </i>
          {" "} To get into the weeds—re: clockwise
          vs. counterclockwise—what counts as the “positive” direction
          of rotation is actually the direction {" "}
          <i>
            from the positive {" "}
            <Math>
              $x$
            </Math>
            {" "}
            axis to the positive {" "}
            <Math>
              $y$
            </Math>
            {" "} axis
          </i>
          :
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/edTN.svg"
          intrinsicWidth={400}
          intrinsicHeight={275}
        />
        <Pause />
        <OuterP>
          What we mean is that if it was our custom to draw the
          {" "}
          <Math>
            $y$
          </Math>
          {" "} axis pointing downwards, but still draw the {" "}
          <Math>
            $x$
          </Math>
          {" "} axis
          pointing rightward, the “positive” direction of rotation
          would be clockwise, not counterclockwise:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/0QSx.svg"
          intrinsicWidth={400}
          intrinsicHeight={275}
        />
        <Pause />
        <OuterP>
          (This actually happens inside of SVG, the
          web standard for so-called “vector graphics”, in which the {" "}
          <Math>
            $y$
          </Math>
          {" "}
          axis points downwards. In an SVG file, {" "}
          <span class="code-cartouche">
            rotate(10)
          </span>
          {" "} rotates objects by {" "}
          <NoBreak>
            10
            <Math>
              $^\circ$
            </Math>
          </NoBreak>
          {" "} {" "}
          <i>
            clockwise
          </i>
          .)
          <ImageRight
            src="/build-img/svgo-svg/BYVX.svg"
            intrinsicWidth={1500}
            intrinsicHeight={500}
          />
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 1 && <>
      <Pause />
      <Section id="section-4">
        <OuterP>
          <b>
            Restrictions imposed on signatures by function
            operations.
          </b>
          {" "}
          When we add two functions, the same input is passed
          to both functions:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/trfz.svg"
          style="margin-bottom:-1.3em"
          intrinsicWidth={300}
          intrinsicHeight={50}
        />
        <Pause />
        <OuterP>
          For the sum to make sense, {" "}
          <Math>
            $f$
          </Math>
          {" "} and {" "}
          <Math>
            $g$
          </Math>
          {" "} must have the same
          input units and the same output units:
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;aligned&#125;
          f : [\A] &amp;\ra [\B] \\
          g : [\A] &amp;\ra [\B] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          We cannot add apples to oranges at the output end, either.
        </OuterP>
        <OuterP class="indent-10">
          By contrast, when multiplying two functions we can
          stomach the output units to be different since
          composite units such as “kilowatt-hour”, “worker-years”, etc,
          exist, and likewise when dividing. 
          The table gives the required component signatures and the
          resultant signature for each of the five main function operations:
        </OuterP>
        <Pause />
        <Image
          src="/tmp-images/c6_flowers_here_bob_v2.svg"
          id="_119_h.a.i_"
          intrinsicWidth={700}
          intrinsicHeight={883}
        />
        <Pause />
        <Example id="_120_h.a.i_">
          <OuterP>
            <b>
              Example 2.
            </b>
            {" "}
            If
          </OuterP>
          <Pause />
          <MathBlock style="margin-bottom:-0.8em;margin-top:-0.2em">
            $$
            \,p : [\underbrace&#123;\te&#123;days&#125;&#125;_&#123;\A&#125;] \ra [\underbrace&#123;\te&#123;dollars&#125;/\te&#123;kg&#125;&#125;_&#123;\B&#125;], \\
            m : [\underbrace&#123;\te&#123;days&#125;&#125;_&#123;\A&#125;] \ra [\underbrace&#123;\te&#123;kg&#125;&#125;_&#123;\C&#125;]\up&#123;1.2&#125;
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            then
          </OuterP>
          <Pause />
          <MathBlock style="margin-bottom:-0.4em;margin-top:-0.1em">
            $$
            pm : [\underbrace&#123;\te&#123;days&#125;&#125;_&#123;\A&#125;] \ra [(\underbrace&#123;\te&#123;dollars&#125;/\te&#123;kg&#125;&#125;_&#123;\B&#125;)\underbrace&#123;\te&#123;kg&#125;&#125;_&#123;\C&#125; = \underbrace&#123;\te&#123;dollars&#125;&#125;_&#123;\B\C&#125;]
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            per the “multiplication” cell (second row, first column) of {" "}
            <InChapterLink
              href="#_119_h.a.i_"
              class="in-chapter-link"
            >
              Table 1.1
            </InChapterLink>
            &#8288;.
          </OuterP>
        </Example>
        <Pause />
        <OuterP>
          <i>
            Note on {" "}
            <InChapterLink
              href="#_120_h.a.i_"
              class="in-chapter-link"
            >
              Example 2
            </InChapterLink>
            &#8288;.
          </i>
          {" "}
          For example, if
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          p(t)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is the dollars-per-kilogram price of apples on day {" "}
          <NoBreak>
            <Math>
              $t$
            </Math>
            ,
          </NoBreak>
          {" "} and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          m(t)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is the number of kilograms purchased on day {" "}
          <Math>
            $t$
          </Math>
          {" "} (of said apples), then
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (pm)(t) = p(t)m(t)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is the dollars 
          spent on apples on day {" "}
          <NoBreak>
            <Math>
              $t$
            </Math>
            .
          </NoBreak>
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 2 && <>
      <Pause />
      <Section id="section-5">
        <OuterP>
          <b>
            The unary function operations.
          </b>
          {" "}
          We will add two more not-yet-much-discussed
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          unary
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          function operations to our list of officially
          considered function operations, being {" "}
          <i>
            negation
          </i>
          {" "}
          and {" "}
          <i>
            reciprocal
          </i>
          ,
          written {" "}
          <NoBreak>
            “
            <Math>
              $-\f$
            </Math>
            ”
          </NoBreak>
          {" "} and {" "}
          <NoBreak>
            “
            <Math>
              $1/f$
            </Math>
            ”
          </NoBreak>
          {" "} respectively
          —note that
          the reciprocal of {" "}
          <Math>
            $f$
          </Math>
          {" "} has a different signature than {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/tmp-images/c6_flowers_here_two_more_v3.svg"
          id="_121_h.a.i_"
          intrinsicWidth={700}
          intrinsicHeight={310}
        />
        <Pause />
        <StarDivider style="margin-top:-0.3em" />
      </Section>
    </>}
    {visibleRestSections() > 3 && <>
      <Pause />
      <Section
        _handle="derivative_signature"
        id="section-6"
      >
        <OuterP>
          <b>
            Differentiation.
          </b>
          {" "}
          As reviewed in {" "}
          <OutChapterLink
            class="out-chapter-link"
            href="/article/chapter4#section-6"
          >
            Chapter 
            4
          </OutChapterLink>
          {" "}
          (see also {" "}
          <OutChapterLink
            href="/article/chapter4#_66_h.a.i_"
            class="out-chapter-link"
          >
            Exercise 6 of Chapter 4
          </OutChapterLink>
          ),
          differentiation divides the units of the output
          by the units of the input. 
          In terms of signatures,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f : [\tA] \ra [\tB]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          if and only if
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f' : [\tA] \ra [\tB/\tA]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for any units A, B.
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 3.
            </b>
            {" "}
            If
          </OuterP>
          <Pause />
          <MathBlock style="margin-bottom:-0.4em;margin-top:-0.1em">
            $$
            x : [\underbrace&#123;\s&#125;_&#123;\A&#125;] \ra [\underbrace&#123;\m&#125;_&#123;\B&#125;]
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            (“s” = seconds, “m” = meters)
            is a differentiable function from {" "}
            <Math>
              $\rr$
            </Math>
            {" "} to {" "}
            <Math>
              $\rr$
            </Math>
            {" "} (e.g., the
            horizontal position of an object as a function of time), then
          </OuterP>
          <Pause />
          <MathBlock style="margin-bottom:-0.4em;margin-top:-0.1em">
            $$
            x' : [\underbrace&#123;\s&#125;_&#123;\A&#125;] \ra [\underbrace&#123;\m/\s&#125;_&#123;\B/\A&#125;]
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            gives a
          </OuterP>
          <Pause />
          <CentralDisplayItalic>
            meters per second
          </CentralDisplayItalic>
          <Pause />
          <OuterP>
            value, per the general rule above.
          </OuterP>
        </Example>
      </Section>
    </>}
    {visibleRestSections() > 4 && <>
      <Pause />
      <Section id="section-7">
        <OuterP>
          <b>
            Operators.
          </b>
          {" "}
          On a conceptual note,
          we can view differentiation
          as a function-that-takes-functions-and-outputs-functions,
          the “bigger fish” of the function world. As mathematicians
          use the term
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          operator
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          to denote a function that takes other functions as inputs,
          we therefore speak of the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          differentiation operator
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          depicted here as an eye-of-Godzilla flying saucer:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/Pl1U.svg"
          intrinsicWidth={520}
          intrinsicHeight={220}
        />
        <Pause />
        <OuterP>
          The unary operations in {" "}
          <InChapterLink
            class="in-chapter-link"
            href="#_121_h.a.i_"
          >
            Table 1.2
          </InChapterLink>
          {" "} likewise take
          one function as input. An operator can also take two functions
          as inputs: function addition takes {" "}
          <Math>
            $f$
          </Math>
          {" "} and {" "}
          <Math>
            $g$
          </Math>
          {" "} and returns
          the single function {" "}
          <NoBreak>
            <Math>
              $f + g$
            </Math>
            .
          </NoBreak>
          {" "} Here it is as a two-input-tube-flying-saucer:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/A7d4.svg"
          intrinsicWidth={600}
          intrinsicHeight={235}
        />
        <Pause />
        <OuterP>
          The two inputs to this operator are the functions {" "}
          <Math>
            $f$
          </Math>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $g$
            </Math>
            .
          </NoBreak>
          {" "}
          The resulting function {" "}
          <Math>
            $f + g$
          </Math>
          {" "} still takes one number {" "}
          <Math>
            $x$
          </Math>
          {" "} as input,
          returning {" "}
          <NoBreak>
            <Math>
              $f(x) + g(x)$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          Operators that take two inputs are called
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          binary
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          operators, as with the operations in Table 1.1.
          This figure summarizes how the operators act on signatures:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/VuM1.svg"
          intrinsicWidth={810}
          intrinsicHeight={580}
        />
        <Pause />
        <StarDivider style="margin-top:-0.3em" />
      </Section>
    </>}
    {visibleRestSections() > 5 && <>
      <Pause />
      <Section id="section-8">
        <OuterP>
          <b>
            The sum rule.
          </b>
          {" "}
          The {" "}
          <i>
            sum rule
          </i>
          {" "} states that
        </OuterP>
        <Boxed>
          <MathBlock>
            $$
            (f + g)' = f' + g'
            $$
          </MathBlock>
        </Boxed>
        <OuterP>
          for all differentiable functions {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $g : \rr \ra \rr$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          To “check the units”, both sides must impose the same signature
          constraints and yield the same final signature.
        </OuterP>
        <OuterP class="indent-10">
          On the left-hand side,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f + g
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          imposes signatures of the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;aligned&#125;
          f : [\A] &amp;\ra [\B] \\
          g : [\A] &amp;\ra [\B] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          as listed in {" "}
          <InChapterLink
            href="#_119_h.a.i_"
            class="in-chapter-link"
          >
            Table 1.1
          </InChapterLink>
          &#8288;,
          while the subsequent taking of a derivative doesn't
          impose any new constraints.
        </OuterP>
        <OuterP class="indent-10">
          On the right-hand side,
          we start by adopting the agnostic point of view that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;aligned&#125;
          f : [\A] &amp;\ra [\B] \\
          g : [\C] &amp;\ra [\D] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for some arbitrary units {" "}
          <NoBreak>
            <Math>
              $\A$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $\B$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $\C$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $\D$
            </Math>
            ;
          </NoBreak>
          {" "} then,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;aligned&#125;
          f' : [\A] &amp;\ra [\B/\A] \\
          g' : [\C] &amp;\ra [\D/\C] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and the fact that we are taking the sum
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f' + g'
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          implies
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \A\,\,\, = \,\,\,\C
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \left[&#123;\B\over\A&#125;\right]\! =\! \left[&#123;\D\over\C&#125;\right]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          by Table 1.1 again, which, together, imply
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;aligned&#125;
          \,\A &amp;= \C, \\
          \B &amp;= \D \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          ...and we recover the same constraints on {" "}
          <Math>
            $f$
          </Math>
          {" "} and {" "}
          <Math>
            $g$
          </Math>
          {" "} as
          exist on the left-hand side!
        </OuterP>
        <OuterP class="indent-10">
          Assuming now that {" "}
          <Math>
            $f$
          </Math>
          {" "}
          and {" "}
          <Math>
            $g$
          </Math>
          {" "} have the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;aligned&#125;
          f : [\A] &amp;\ra [\B] \\
          g : [\A] &amp;\ra [\B] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          as required by either side of the equation, we have
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;aligned&#125;
          \,(f + g)' &amp;: [\A] \ra [\tB/\tA], \\
          f' + g' &amp;: [\A] \ra [\tB/\tA]. \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (For the second line, {" "}
          <Math>
            $f'$
          </Math>
          {" "} and {" "}
          <Math>
            $g'$
          </Math>
          {" "} each have signature
          {" "}
          <NoBreak>
            <Math>
              $[\A] \ra [\tB/\tA]$
            </Math>
            ,
          </NoBreak>
          {" "} and adding them preserves that signature.)
          So the sum rule “checks out” insofar
          as units are concerned: 
          both sides impose the same constraints on units, and
          evaluate to the same signature!
        </OuterP>
        <Pause />
        <Example id="_122_h.a.i_">
          <OuterP>
            <b>
              Example 4.
            </b>
            {" "}
            Let {" "}
            <Math>
              $x_1, x_2 : [\te&#123;s&#125;] \ra [\te&#123;m&#125;]$
            </Math>
            {" "} be differentiable
            functions giving position in meters as a function of time in seconds.
            Then
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \,(x_1 + x_2)' : [\te&#123;s&#125;] \ra [\te&#123;m&#125;/\te&#123;s&#125;], \\
            \,\,x_1' + x_2' : [\te&#123;s&#125;] \ra [\te&#123;m&#125;/\te&#123;s&#125;] \up&#123;1.35&#125;
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            as one can check by first constructing the
            signature of {" "}
            <NoBreak>
              <Math>
                $x_1 + x_2$
              </Math>
              ,
            </NoBreak>
            {" "} the differentiating,
            or vice-versa constructing the signatures of
            {" "}
            <Math>
              $x_1'$
            </Math>
            {" "} and {" "}
            <NoBreak>
              <Math>
                $x_2'$
              </Math>
              ,
            </NoBreak>
            {" "} then adding.
            In this case, the sum rule says that
          </OuterP>
          <Pause />
          <CentralDisplayItalic>
            the velocity of a sum of two points
            is the sum of their velocities
          </CentralDisplayItalic>
          <Pause />
          <OuterP>
            with {" "}
            <Math>
              $(x_1+x_2)'$
            </Math>
            {" "}
            being “the velocity of a sum
            of two points” and {" "}
            <Math>
              $x_1'+x_2'$
            </Math>
            {" "} being “the sum
            of their velocities”.
          </OuterP>
        </Example>
        <Pause />
        <Example id="_123_h.a.i_">
          <OuterP>
            <b>
              Example 5.
            </b>
            {" "}
            If
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            x_1, x_2 : \rr \ra \rr
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            are given by
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            x_1(t) = |t| = -x_2(t)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            for all {" "}
            <Math>
              $t \in \rr$
            </Math>
            {" "} (meaning that
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            x_2(t) = -|t|
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            in the case of {" "}
            <NoBreak>
              <Math>
                $x_2$
              </Math>
              )
            </NoBreak>
            {" "} then
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x_1 + x_2)'
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            is defined
            at {" "}
            <Math>
              $t = 0$
            </Math>
            {" "} but
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            x_1' + x_2'
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            is not. One can best see this 
            directly from the graphs of
            {" "}
            <NoBreak>
              <Math>
                $x_1$
              </Math>
              ,
            </NoBreak>
            {" "} {" "}
            <NoBreak>
              <Math>
                $x_2$
              </Math>
              ,
            </NoBreak>
            {" "} {" "}
            <NoBreak>
              <Math>
                $x_1'$
              </Math>
              ,
            </NoBreak>
            {" "} {" "}
            <NoBreak>
              <Math>
                $x_2'$
              </Math>
              ,
            </NoBreak>
            {" "} etc:
          </OuterP>
          <Pause />
          <Image
            src="/build-img/svgo-svg/aASR3HOTyax4yax47CfYU7nJ.svg"
            intrinsicWidth={442}
            intrinsicHeight={945}
          />
          <Pause />
          <OuterP>
            Thus
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x_1 + x_2)' \ne x_1' + x_2'
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            but the “reason”, precisely, is that {" "}
            <Math>
              $x_1$
            </Math>
            {" "} and {" "}
            <Math>
              $x_2$
            </Math>
            {" "} are not
            differentiable, as they
            are not differentiable, specifically, at {" "}
            <NoBreak>
              <Math>
                $t = 0$
              </Math>
              .
            </NoBreak>
            {" "}
            (But this is why we say “for differentiable {" "}
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
              ”
            </NoBreak>
            {" "}
            when we present the sum rule, or other such rules.)
          </OuterP>
        </Example>
        <Pause id="_124_h.a.i_" />
        <OuterP>
          <i>
            Postscript.
          </i>
          {" "} Even if {" "}
          <Math>
            $f$
          </Math>
          {" "} and {" "}
          <Math>
            $g$
          </Math>
          {" "} are not
          both differentiable it is still 
          true, however, that
        </OuterP>
        <Boxed>
          <MathBlock>
            $$
            (f + g)'(x_0) = f'(x_0) + g'(x_0)
            $$
          </MathBlock>
        </Boxed>
        <OuterP>
          at all points {" "}
          <Math>
            $x_0 \in \rr$
          </Math>
          {" "} {" "}
          <i>
            such that {" "}
            <Math>
              $f$
            </Math>
            {" "} and {" "}
            <Math>
              $g$
            </Math>
            {" "}
            are both differentiable at that specific {" "}
            <Math>
              $x_0$
            </Math>
          </i>
          —this gives
          us a “point by point” version of the sum rule—more granular!
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 6 && <>
      <Pause />
      <Section id="section-9">
        <OuterP>
          <b>
            The “early afteroon product rule”.
          </b>
          {" "}
          Gottfried Leibniz, co-inventor of calculus,
          initially guessed that
        </OuterP>
        <Boxed>
          <MathBlock>
            $$
            (fg)' = f'g'
            $$
          </MathBlock>
        </Boxed>
        <OuterP>
          which is incorrect, though Leibniz also had the
          distinction of making and correcting this
          guess 
          in the span 
          of a single day.
        </OuterP>
        <OuterP class="indent-10">
          Both sides require the same input units for {" "}
          <Math>
            $f$
          </Math>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $g$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;aligned&#125;
          f : [\A] &amp;\ra [\B] \\
          g : [\A] &amp;\ra [\C] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          So far so good! But
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (fg)' : [\tA] \ra [\tB\tC/\tA]
          $$
          <ImageLeft
            src="/build-img/svgo-svg/jPk2.svg"
            offsetX="0em"
            atLeastAsWide={true}
            intrinsicWidth={400}
            intrinsicHeight={300}
          />
        </MathBlock>
        <Pause />
        <OuterP>
          whereas
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f'g' : [\tA] \ra [\tB\tC/\tA^2]
          $$
          <ImageRight
            src="/build-img/svgo-svg/qX4a.svg"
            offsetX="0em"
            atLeastAsWide={true}
            intrinsicWidth={450}
            intrinsicHeight={300}
          />
        </MathBlock>
        <Pause />
        <OuterP>
          The rule cannot be correct: the two sides produce different
          units for the same functions {" "}
          <Math>
            $f$
          </Math>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $g$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <Pause />
        <Example id="_125_h.a.i_">
          <OuterP>
            <b>
              Example 6.
            </b>
            {" "}
            With {" "}
            <Math>
              $x_1, x_2 : [\te&#123;s&#125;] \ra [\te&#123;m&#125;]$
            </Math>
            {" "} as in
            {" "}
            <InChapterLink
              href="#_122_h.a.i_"
              class="in-chapter-link"
            >
              Example 4
            </InChapterLink>
            &#8288;,
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x_1x_2)' : [\te&#123;s&#125;] \ra [\te&#123;m&#125;^2/\te&#123;s&#125;]
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            whereas
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            x_1'x_2' : [\te&#123;s&#125;] \ra [\te&#123;m&#125;^2/\te&#123;s&#125;^2]
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            so there is no way these two quantities could
            ever be equal, in general. (For example,
            changing from counting time in seconds to
            counting it in hours, while correspondingly
            modifying {" "}
            <Math>
              $x_1$
            </Math>
            {" "} and {" "}
            <Math>
              $x_2$
            </Math>
            {" "} to reflect this
            change, would multiply {" "}
            <Math>
              $(x_1x_2)'$
            </Math>
            {" "} by {" "}
            <Math>
              $3600$
            </Math>
            {" "} but
            would multiply {" "}
            <Math>
              $x_1'x_2'$
            </Math>
            {" "} by {" "}
            <NoBreak>
              <Math>
                $3600^2$
              </Math>
              —so
            </NoBreak>
            {" "} if by
            some fluke the early afternoon product rule
            held before this change it would certainly*
            [*assuming {" "}
            <NoBreak>
              <Math>
                $(x_1x_2)' \ne 0$
              </Math>
              ]
            </NoBreak>
            {" "} not hold after,
            and therefore, the early afternoon product rule
            cannot hold in general.)
            <ImageLeft
              src="/build-img/svgo-svg/U86u.svg"
              offsetX="1em"
              intrinsicWidth={800}
              intrinsicHeight={550}
            />
          </OuterP>
          <Pause />
          <OuterP>
            <i>
              Note on {" "}
              <InChapterLink
                href="#_125_h.a.i_"
                class="in-chapter-link"
              >
                Example 6
              </InChapterLink>
              &#8288;.
            </i>
            {" "}
            {" "}
            <Math>
              $x_1'x_2'$
            </Math>
            {" "} has the same signature as {" "}
            <NoBreak>
              <Math>
                $(x_1x_2)''$
              </Math>
              ,
            </NoBreak>
            {" "} but
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x_1x_2)'' = x_1'x_2'
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            is still wrong. Dimensional analysis can debunk an equation;
            matching dimensions cannot prove it.
          </OuterP>
        </Example>
      </Section>
    </>}
    {visibleRestSections() > 7 && <>
      <Pause />
      <Section id="section-10">
        <OuterP>
          <b>
            The chain rule.
          </b>
          {" "}
          We would like a formula for
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (f \circ g)'
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          similar to the sum rule,
          and we can try guessing such a formula using
          dimensional analysis.
        </OuterP>
        <OuterP class="indent-10">
          To be clear, such a formula should use only the
          “atomic components”
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f,\,g,\,f',\,g'
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          on its right-hand side. These are the “lego pieces”
          from which we seek to assemble {" "}
          <NoBreak>
            <Math>
              $(f \circ g)'$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          The “lego pieces” have generic signatures
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;gathered&#125;
          f            :  [\tB] \ra [\tC] \\
          g            :  [\tA] \ra [\tB] \up&#123;1.35&#125; \\
          f'           :  [\tB] \ra [\tC/\tB] \up&#123;1.35&#125; \\
          g'           :  [\tA] \ra [\tB/\tA] \up&#123;1.35&#125;
          \end&#123;gathered&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (cf. {" "}
          <InChapterLink
            href="#_119_h.a.i_"
            class="in-chapter-link"
          >
            Table 1.1
          </InChapterLink>
          &#8288;), whereas the target
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (f \circ g)'
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          has signature
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          [\tA] \ra [\tC/\tA]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          as is easy to check—this is not the signature
          of any of the pieces, but since
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          [\tC/\tA] = \left[&#123;\tC\over \tB&#125;\right]\cdot\left[&#123;\tB\over\tA&#125;\right]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          we might multiply {" "}
          <Math>
            $f'$
          </Math>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $g'$
            </Math>
            ;
          </NoBreak>
          {" "}
          and yet the product
          {" "}
          <Math>
            $f'g'$
          </Math>
          {" "}
          {" "}
          <i>
            cannot be formed
          </i>
          {" "} since {" "}
          <Math>
            $f'$
          </Math>
          {" "} and {" "}
          <Math>
            $g'$
          </Math>
          {" "} have different
          input units!; 
          the answer is to pre-process inputs to {" "}
          <Math>
            $f'$
          </Math>
          {" "} via {" "}
          <NoBreak>
            <Math>
              $g$
            </Math>
            ,
          </NoBreak>
          {" "}
          i.e., take
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (f'\circ g)g'
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          which product makes sense because
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \,f'\circ g : [\tA] \ra [\tC/\tB], \\
          g' : [\tA] \ra [\tB/\tA] \up&#123;1.35&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          have the same input units {" "}
          <NoBreak>
            <Math>
              $[\A]$
            </Math>
            ,
          </NoBreak>
          {" "}
          and moreover, 
          multiplying their outputs gives the desired output units {" "}
          <NoBreak>
            <Math>
              $\tC/\tA$
            </Math>
            !
          </NoBreak>
          <ImageRight
            src="/build-img/svgo-svg/zysM.svg"
            offsetX="0em"
            intrinsicWidth={500}
            intrinsicHeight={300}
          />
        </OuterP>
        <OuterP class="indent-10">
          It turns out that this is the correct formula:
        </OuterP>
        <Boxed>
          <MathBlock>
            $$
            (f \circ g)' = (f'\circ g)g'
            $$
          </MathBlock>
        </Boxed>
        <OuterP>
          ...for all differentiable functions {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $g : \rr \ra \rr$
            </Math>
            ,
          </NoBreak>
          {" "}
          a formula known as the {" "}
          <i>
            chain rule
          </i>
          .
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 7.
            </b>
            {" "}
            Say that a cute
          </OuterP>
          <Pause />
          <Image
            src="/build-img/svgo-svg/kL1E.svg"
            intrinsicWidth={180}
            intrinsicHeight="164.25"
          />
          <Pause />
          <OuterP>
            is running a fundraising race. Let {" "}
            <Math>
              $f$
            </Math>
            {" "} give the money raised
            in dollars as a function of position in meters, and {" "}
            <Math>
              $g$
            </Math>
            {" "} give
            the rat's position as a function of elapsed time in seconds:
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \begin&#123;gathered&#125;
            \,f : [\te&#123;m&#125;] \ra [\te&#123;\$&#125;], \\
            \,g : [\te&#123;s&#125;] \ra [\te&#123;m&#125;]. \up&#123;1.35&#125;
            \end&#123;gathered&#125;
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            Then
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            f\circ g
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            gives money raised as a function of time,
            and
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (f\circ g)'
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            gives the fundraising rate in dollars per second.
          </OuterP>
          <OuterP class="indent-10">
            Meanwhile,
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            f'
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            gives the dollars-per-meter rate as
            a function of position, so
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            f'(g(t_0))
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            is the dollars-per-meter rate at which the rat is
            fundraising at time {" "}
            <NoBreak>
              <Math>
                $t_0$
              </Math>
              ,
            </NoBreak>
            {" "} as we have fed the rat's position {" "}
            <Math>
              $g(t_0)$
            </Math>
            {" "} into
            {" "}
            <NoBreak>
              <Math>
                $f'$
              </Math>
              .
            </NoBreak>
          </OuterP>
          <OuterP class="indent-10">
            As for the dollars-per-second rate, one can obtain
            that by multiplying the dollars-per-meter rate by the
            rat's meters-per-second velocity, i.e., by taking the product
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            f'(g(t_0))g'(t_0)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            which is indeed {" "}
            <NoBreak>
              <Math>
                $(f\circ g)'(t_0)$
              </Math>
              .
            </NoBreak>
            {" "} I.e.:
          </OuterP>
          <Pause />
          <Image
            width="530px"
            src="/build-img/svgo-svg/un6E.svg"
            intrinsicWidth={680}
            intrinsicHeight={145}
          />
          <Pause />
          <OuterP>
            Since {" "}
            <NoBreak>
              <Math>
                $f'(g(t_0)) = (f'\circ g)(t_0)$
              </Math>
              ,
            </NoBreak>
            {" "} this is the chain rule
            {" "}
            <Math>
              $(f \circ g)' = (f'\circ g)g'$
            </Math>
            {" "} evaluated at {" "}
            <NoBreak>
              <Math>
                $t_0$
              </Math>
              .
            </NoBreak>
          </OuterP>
          <Pause />
          <OuterP>
            <i>
              Note.
            </i>
            {" "} Another common way to write the chain rule is
          </OuterP>
          <Boxed>
            <MathBlock>
              $$
              (f \circ g)'(x) = f'(g(x))g'(x)
              $$
            </MathBlock>
          </Boxed>
          <OuterP>
            as just seen with {" "}
            <NoBreak>
              “
              <Math>
                $t_0$
              </Math>
              ”
            </NoBreak>
            {" "}
            in place of {" "}
            <NoBreak>
              “
              <Math>
                $x$
              </Math>
              ”.
            </NoBreak>
            {" "} 
            In this case, the assumption
          </OuterP>
          <Pause />
          <CentralDisplayItalic>
            for {" "}
            <NoBreak>
              <Math>
                $f$
              </Math>
              ,
            </NoBreak>
            {" "} {" "}
            <Math>
              $g : \rr \ra \rr$
            </Math>
            {" "} differentiable
          </CentralDisplayItalic>
          <Pause />
          <OuterP>
            can be replaced by the more surgical
          </OuterP>
          <Pause />
          <CentralDisplayItalic>
            for {" "}
            <NoBreak>
              <Math>
                $f, g : \rr \ra \rr$
              </Math>
              ,
            </NoBreak>
            {" "} {" "}
            <Math>
              $x \in \rr$
            </Math>
            {" "} such that {" "}
            <Math>
              $g$
            </Math>
            {" "} is 
            differentiable at {" "}
            <Math>
              $x$
            </Math>
            {" "} and {" "}
            <Math>
              $f$
            </Math>
            {" "} differentiable at {" "}
            <Math>
              $g(x)$
            </Math>
          </CentralDisplayItalic>
          <Pause />
          <OuterP>
            similarly to the {" "}
            <InChapterLink
              class="in-chapter-link"
              href="#_124_h.a.i_"
            >
              postscript following Example 
              5
            </InChapterLink>
            &#8288;,
            relative to the sum rule.
          </OuterP>
        </Example>
        <Pause />
        <Example id="_126_h.a.i_">
          <OuterP>
            <b>
              Example 8.
            </b>
            {" "}
            We have
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (\cos \circ \cos)' = ((-\sin) \circ \cos)(-\sin)
            $$
            <ImageLeft
              src="/build-img/svgo-svg/_iNd.svg"
              offsetX="2em"
              atLeastAsWide={true}
              intrinsicWidth={400}
              intrinsicHeight={300}
            />
          </MathBlock>
          <Pause />
          <OuterP>
            by {" "}
            <InChapterLink
              class="in-chapter-link"
              href="#section-10"
            >
              the chain rule
            </InChapterLink>
            &#8288;, since {" "}
            <NoBreak>
              <Math>
                $\cos' = -\sin$
              </Math>
              .
            </NoBreak>
            {" "}
            Cancelling the minus signs gives
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (\cos \circ \cos)' = (\sin \circ \cos)\sin,
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            or, evaluated at {" "}
            <NoBreak>
              <Math>
                $x$
              </Math>
              ,
            </NoBreak>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (\cos \circ \cos)'(x) = \sin(\cos(x))\sin(x).
            $$
          </MathBlock>
        </Example>
        <Pause />
        <Example id="_127_h.a.i_">
          <OuterP>
            <b>
              Example 9.
            </b>
            {" "}
            We have
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (\cos \circ \cos)'(2.5) = \sin(\cos(2.5))\cdot \sin(2.5) = -0.429\ldots
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            by {" "}
            <InChapterLink
              href="#_126_h.a.i_"
              class="in-chapter-link"
            >
              Example 8
            </InChapterLink>
            &#8288;,
            which
            looks visually compatible with the graph
            of {" "}
            <NoBreak>
              <Math>
                $x \ra \cos(\cos(x))$
              </Math>
              :
            </NoBreak>
          </OuterP>
          <Pause />
          <Image
            src="/build-img/svgo-svg/0dwB.svg"
            intrinsicWidth="892.21315"
            intrinsicHeight="163.02727"
          />
          <Pause />
          <StarDivider />
          <Pause />
          <OuterP>
            <i>
              Note on {" "}
              <InChapterLink
                href="#_127_h.a.i_"
                class="in-chapter-link"
              >
                Example 9
              </InChapterLink>
            </i>
            . 
            The values of {" "}
            <Math>
              $\cos(\cos(x))$
            </Math>
            {" "} can be throught of as
            the {" "}
            <NoBreak>
              <Math>
                $x$
              </Math>
              -coordinates
            </NoBreak>
            {" "} of a certain horizontal windshield-wiper
            whose angle at time {" "}
            <Math>
              $t$
            </Math>
            {" "} is {" "}
            <NoBreak>
              <Math>
                $\cos(t)$
              </Math>
              :
            </NoBreak>
          </OuterP>
          <Pause />
          <Image
            src="/build-img/svgo-svg/khDb.svg"
            intrinsicWidth={400}
            intrinsicHeight={300}
          />
          <Pause />
          <OuterP>
            Since {" "}
            <NoBreak>
              <Math>
                $-1 \leq \cos(t) \leq 1$
              </Math>
              ,
            </NoBreak>
            {" "} the wiper's angle stays between
            {" "}
            <Math>
              $-1\Rad$
            </Math>
            {" "} and {" "}
            <Math>
              $+1\Rad$
            </Math>
            {" "} (about {" "}
            <NoBreak>
              <Math>
                $\pm57.29^\circ$
              </Math>
              ),
            </NoBreak>
            {" "} so its {" "}
            <NoBreak>
              <Math>
                $x$
              </Math>
              -coordinate
            </NoBreak>
            {" "} ranges from
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \cos(\pm1) \approx 0.54 \quad\te&#123;to&#125;\quad \cos(0) = 1,
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            producing the compressed sinusoid-like wave above.
          </OuterP>
        </Example>
      </Section>
    </>}
    {visibleRestSections() > 8 && <>
      <Pause />
      <Section id="section-11">
        <OuterP>
          <b>
            Epilogue: the dimensionless plane.
          </b>
          {" "}
          Imagine that we define the radian value of an
          angle as
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          length subtended by the angle on the unit circle
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          as opposed to
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          arc length over radius
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          where the latter is the more traditional definition.
          In the latter definition, 
          the dimensions of the radian are
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;length&#125;\over\te&#123;length&#125;&#125; = \te&#123;dimensionless&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          whereas under the first definition it sounds like
          the dimensions are simply “length”. BUT: “length”
          {" "}
          <i>
            in what plane
          </i>
          ? The “original” plane in which the
          unit circle is embedded has dimensionless axes! And
          therefore {" "}
          <i>
            length itself
          </i>
          <Math>
            $\rt&#123;0.2&#125;$
          </Math>
          {" "} in that plane is a dimensionless
          quantity, not the usual “physical” notion of length!
          So both cases assign radians to be a dimensionless 
          unit!
          Whoo-hoo!
        </OuterP>
        <OuterP class="indent-10">
          Relatedly, you may have seen axes labelled “time/s” instead
          of “time {" "}
          <NoBreak>
            <Math>
              $[\te&#123;s&#125;]$
            </Math>
            ”:
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/oqAL.svg"
          style="margin-top:-0.5em"
          intrinsicWidth={600}
          intrinsicHeight={465}
        />
        <Pause />
        <OuterP>
          Dividing time by the unit “s” takes out the units, leaving a pure
          number that fits in the dimensionless plane. For example, the
          coordinate {" "}
          <Math>
            $3$
          </Math>
          {" "} means
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          3 = &#123;\te&#123;time&#125;\over\te&#123;s&#125;&#125; \quad\Longrightarrow\quad \te&#123;time&#125; = 3\te&#123;s&#125;.
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          The coordinate is the pure number {" "}
          <NoBreak>
            <Math>
              $3$
            </Math>
            !
          </NoBreak>
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 9 && <>
      <Pause />
      <Exercises
        at_end_of_page={true}
        mode="dual"
        show_curlicue={true}
        id="_145_h.a.i_"
      >
        <Exercise number={1}>
          <ExerciseStatement id="_128_h.a.i_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              {" "}
              If the expression
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \cos(\omega t)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is to be dimensionally consistent,
              and if {" "}
              <Math>
                $t$
              </Math>
              {" "} has units of seconds, then what units
              must {" "}
              <Math>
                $\omega$
              </Math>
              {" "} have?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos : [1] \ra [1]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              or
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos : [\rad] \ra [1]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              rephrased (we have {" "}
              <NoBreak>
                <Math>
                  $[\rad] = [1]$
                </Math>
                ),
              </NoBreak>
              {" "} {" "}
              <Math>
                $\omega$
              </Math>
              {" "} must have units of
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              radians per second
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              or
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              per second
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              (equiv.) in order to cancel out the seconds in {" "}
              <NoBreak>
                “
                <Math>
                  $t$
                </Math>
                ”.
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/5qHf.svg"
              intrinsicWidth={400}
              intrinsicHeight={150}
            />
          </Solution>
        </Exercise>
        <Exercise number={2}>
          <ExerciseStatement id="_129_h.a.i_">
            <OuterP>
              <b>
                Exercise 2.
              </b>
              {" "}
              If {" "}
              <Math>
                $x$
              </Math>
              {" "} is position and {" "}
              <Math>
                $v$
              </Math>
              {" "} is velocity, what is
              the dimension of {" "}
              <NoBreak>
                <Math>
                  $x/v$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Since velocity has dimensions
              “distance over time”, which cancels the “distance”
              dimension on top, it is “time”:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\te&#123;DISTANCE&#125;\over\te&#123;SPEED&#125;&#125; = &#123;\te&#123;DISTANCE&#125;\over \left(&#123;\te&#123;DISTANCE&#125; \over &#123;\te&#123;TIME&#125;&#125;&#125;\right)&#125; = &#123;\te&#123;DISTANCE&#125;&#125;\cdot &#123;\te&#123;TIME&#125;\over \te&#123;DISTANCE&#125;&#125; = \te&#123;TIME&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (The greater the velocity, the smaller the amount
              of time.) (Remember: {" "}
              <i>
                position over velocity is time
              </i>
              ;
              or: {" "}
              <i>
                displacement over velocity is time
              </i>
              .)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={3}>
          <ExerciseStatement id="_130_h.a.i_">
            <OuterP>
              <b>
                Exercise 3.
              </b>
              {" "}
              If {" "}
              <Math>
                $v$
              </Math>
              {" "} is a speed and {" "}
              <Math>
                $c$
              </Math>
              {" "} is the speed of light, what
              is the dimension of the expression below?
              (Known as the {" "}
              <i>
                Lorentz factor
              </i>
              .)
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over \sqrt&#123;1 - &#123;v^2\over c^2&#125;&#125;&#125;
              $$
            </MathBlock>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;v \over c&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is “speed over speed”, it is dimensionless,
              and since the sums, differences, squares,
              square roots, and reciprocals of dimensionless
              quantities are dimensionless, the 
              Lorentz factor is dimensionless.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={4}>
          <ExerciseStatement id="_131_h.a.i_">
            <OuterP>
              <b>
                Exercise 4.
              </b>
              {" "}
              If units of time and space are chosen
              such that {" "}
              <Math>
                $c = 1$
              </Math>
              {" "} where {" "}
              <Math>
                $c$
              </Math>
              {" "} is the speed of the light,
              why might 
              a physicist
              still choose
              to write expressions containing {" "}
              <NoBreak>
                ‘
                <Math>
                  $c$
                </Math>
                ’?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Besides wanting to “remind the general
              formula”, one reason is
              to keep expressions dimensionally consistent.
              For example, the Lorentz factor
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over \sqrt&#123;1 - &#123;v^2\over c^2&#125;&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (cf. {" "}
              <InChapterLink
                href="#_130_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 3
              </InChapterLink>
              &#8288;)
              would become
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over \sqrt&#123;1 - v^2&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              if 
              taking advantage of {" "}
              <Math>
                $c = 1$
              </Math>
              {" "} to
              elide the {" "}
              <NoBreak>
                ‘
                <Math>
                  $c$
                </Math>
                ’,
              </NoBreak>
              {" "} which
              might be numerically correct and typographically more
              expedient, but is dimensionally
              inconsistent: either a speed squared is being subtracted
              from a dimensionless {" "}
              <NoBreak>
                ‘
                <Math>
                  $1$
                </Math>
                ’,
              </NoBreak>
              {" "} or, in a last-ditch effort, we pretend
              that {" "}
              <NoBreak>
                ‘
                <Math>
                  $1$
                </Math>
                ’
              </NoBreak>
              {" "} stands for {" "}
              <NoBreak>
                ‘
                <Math>
                  $c^2$
                </Math>
                ’,
              </NoBreak>
              {" "} which is also a speed squared,
              but then the entire expression has units of inverse speed
              instead of being dimensionless, as the Lorentz factor should be!
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={5}>
          <ExerciseStatement id="_132_h.a.i_">
            <OuterP>
              <b>
                Exercise 5.
              </b>
              {" "}
              Can one construct a function of signature
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              [\s] \ra [1]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              given a function {" "}
              <NoBreak>
                <Math>
                  $f : [\s] \ra [\s]$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Yes: the functions {" "}
              <NoBreak>
                <Math>
                  $f'$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $f/f$
              </Math>
              {" "} (which is {" "}
              <Math>
                $1$
              </Math>
              {" "} whenever {" "}
              <NoBreak>
                <Math>
                  $f \ne 0$
                </Math>
                ,
              </NoBreak>
              {" "}
              else undefined), {" "}
              <NoBreak>
                <Math>
                  $\cos \circ f'$
                </Math>
                ,
              </NoBreak>
              {" "}
              and others, all work—another exotic option is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f^0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              which is identically {" "}
              <Math>
                $1$
              </Math>
              {" "} on {" "}
              <NoBreak>
                <Math>
                  $\dom f$
                </Math>
                ,
              </NoBreak>
              {" "} that 
              works becase
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f^n : [\s] \ra [\s^n]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              more generally for all integers {" "}
              <NoBreak>
                <Math>
                  $n$
                </Math>
                .
              </NoBreak>
              {" "} (And {" "}
              <NoBreak>
                <Math>
                  $[\s^0] = [1]$
                </Math>
                ,
              </NoBreak>
              {" "}
              if one can make the latter an article of faith.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={6}>
          <ExerciseStatement id="_133_h.a.i_">
            <OuterP>
              <b>
                Exercise 6.
              </b>
              {" "}
              Can one construct a function of signature
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              [\s] \ra [\te&#123;kg&#125;]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              from functions
              {" "}
              <NoBreak>
                <Math>
                  $f : [\s] \ra [\m]$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $g : [\m^2] \ra [\te&#123;kg&#125;]$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Yes: one can take {" "}
              <NoBreak>
                <Math>
                  $g \circ f^2$
                </Math>
                ,
              </NoBreak>
              {" "} since {" "}
              <NoBreak>
                <Math>
                  $f^2 : [\s] \ra [\m^2]$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={7}>
          <ExerciseStatement id="_134_h.a.i_">
            <OuterP>
              <b>
                Exercise 7.
              </b>
              {" "}
              Can one construct a function of signature
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              [\s] \ra [\te&#123;kg&#125;]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              from functions
              {" "}
              <NoBreak>
                <Math>
                  $f : [\s] \ra [\m]$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $g : [\te&#123;kg&#125;^2] \ra [\te&#123;kg&#125;]$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              👎
              It is impossible to manufacture a kilogram
              out of thin air: the only thing that can come
              upstream of {" "}
              <Math>
                $g$
              </Math>
              {" "} is “more {" "}
              <NoBreak>
                <Math>
                  $g$
                </Math>
                ”.
              </NoBreak>
              {" "}
              👎
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={8}>
          <ExerciseStatement id="_135_h.a.i_">
            <OuterP>
              <b>
                Exercise 8.
              </b>
              {" "}
              Can one construct a function of signature
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              [\s] \ra [\te&#123;kg&#125;]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              from functions
              {" "}
              <NoBreak>
                <Math>
                  $f : [\s] \ra [\m]$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $g : [\m^&#123;-1&#125;] \ra [\te&#123;kg&#125;]$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Yes: take {" "}
              <NoBreak>
                <Math>
                  $g \circ (1/f)$
                </Math>
                ,
              </NoBreak>
              {" "} since
              {" "}
              <NoBreak>
                <Math>
                  $1/f : [\s] \ra [\m^&#123;-1&#125;]$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={9}>
          <ExerciseStatement id="_136_h.a.i_">
            <OuterP>
              <b>
                Exercise 9.
              </b>
              {" "}
              Let
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f^&#123;-1&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              stand for the “inverse” of a function {" "}
              <Math>
                $f$
              </Math>
              {" "}
              for which such an inverse exists. 
              Specifically, 
              this means that {" "}
              <Math>
                $f$
              </Math>
              {" "} maps distinct
              inputs to distinct outputs, as in this graph:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/bzLT.svg"
              intrinsicWidth={450}
              intrinsicHeight={295}
            />
            <Pause />
            <OuterP>
              The inverse {" "}
              <Math>
                $f^&#123;-1&#125;$
              </Math>
              {" "} (no relation to {" "}
              <NoBreak>
                “
                <Math>
                  $1/f$
                </Math>
                ”)
              </NoBreak>
              {" "}
              is the function that inverts the flow, treating {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                's
              </NoBreak>
              {" "} as inputs, and
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                's
              </NoBreak>
              {" "} as outputs:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/4pb6.svg"
              intrinsicWidth={640}
              intrinsicHeight={290}
            />
            <Pause />
            <OuterP>
              The picture above shows {" "}
              <Math>
                $f^&#123;-1&#125;$
              </Math>
              {" "} with inputs on the vertical axis
              and outputs on the horizontal axis. What does the “ordinary” graph
              of {" "}
              <Math>
                $f^&#123;-1&#125;$
              </Math>
              {" "} look like? (The one that had inputs on the horizontal axis and outputs on the vertical axis.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The ordinary graph of {" "}
              <Math>
                $f^&#123;-1&#125;$
              </Math>
              {" "} is the reflection
              of the (also “ordinary”) graph of {" "}
              <Math>
                $f$
              </Math>
              {" "} through the
              line {" "}
              <NoBreak>
                <Math>
                  $x = y$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/tmp-images/e6_f_inverse_upright.svg"
              intrinsicWidth={440}
              intrinsicHeight={350}
            />
          </Solution>
        </Exercise>
        <Exercise number={10}>
          <ExerciseStatement id="_137_h.a.i_">
            <OuterP>
              <b>
                Exercise 10.
              </b>
              {" "}
              If {" "}
              <Math>
                $f : [\A] \ra [\B]$
              </Math>
              {" "} is invertible (cf. {" "}
              <InChapterLink
                href="#_136_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 9
              </InChapterLink>
              &#8288;),
              what are the signatures of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f^&#123;-1&#125;,\qquad f^&#123;-1&#125;\circ f,\qquad f\circ f^&#123;-1&#125;,\qquad (f^&#123;-1&#125;)'?
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (Assume the inverse is differentiable for the last part.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The inverse swaps the roles of inputs
              and outputs. Thus
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f^&#123;-1&#125; : [\B] \ra [\A]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gathered&#125;
              f^&#123;-1&#125;\circ f : [\A] \ra [\A]\up&#123;1.35&#125; \\
              f\circ f^&#123;-1&#125; : [\B] \ra [\B]\up&#123;1.35&#125; \\
              (f^&#123;-1&#125;)' : [\B] \ra [\A/\B]\up&#123;1.35&#125;
              \end&#123;gathered&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by the usual rules for signatures.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={11}>
          <ExerciseStatement id="_138_h.a.i_">
            <OuterP>
              <b>
                Exercise 11.
              </b>
              {" "}
              If {" "}
              <Math>
                $x$
              </Math>
              {" "} is position, {" "}
              <Math>
                $v$
              </Math>
              {" "} is velocity,
              and {" "}
              <Math>
                $c$
              </Math>
              {" "} is the speed of light, what are
              the dimensions of {" "}
              <NoBreak>
                <Math>
                  $xv/c^2$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The factor
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;v\over c&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is dimensionless since {" "}
              <Math>
                $v$
              </Math>
              {" "} and {" "}
              <Math>
                $c$
              </Math>
              {" "} both
              have dimensions of speed (nb: velocity = speed,
              insofar as dimensionality is concerned—one being
              the absolute value of the other does not change
              the units!),
              so
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;xv\over c^2&#125; = &#123;v\over c&#125;\cdot&#123;x\over c&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              has the same dimensions as
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;x\over c&#125;
              $$
              <ImageRight
                atLeastAsWide={false}
                src="/build-img/svgo-svg/Z9Xf.svg"
                offsetX="1em"
                intrinsicWidth={200}
                intrinsicHeight={100}
              />
            </MathBlock>
            <Pause />
            <OuterP>
              which has dimensions of time by
              {" "}
              <InChapterLink
                href="#_129_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 2
              </InChapterLink>
              &#8288;.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={12}>
          <ExerciseStatement id="_139_h.a.i_">
            <OuterP>
              <b>
                Exercise 12.
              </b>
              {" "}
              What constraints does the composition
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f \circ f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              impose on the signature of {" "}
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
              The output of {" "}
              <Math>
                $f$
              </Math>
              {" "} is fed back into {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                ,
              </NoBreak>
              {" "} so its output
              units must match its input units, i.e.,
              a signature of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f : [\tA] \ra [\tA]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is necessary and sufficient.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={13}>
          <ExerciseStatement id="_140_h.a.i_">
            <OuterP>
              <b>
                Exercise 13.
              </b>
              {" "}
              What constraints does the composition
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f \circ g \circ f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              impose on the signatures of {" "}
              <Math>
                $f$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $g$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Signatures of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gathered&#125;
              f : [\tA] \ra [\tB] \\
              \up&#123;1.6&#125;g : [\tB] \ra [\tA]
              \end&#123;gathered&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              are necessary and sufficient, as {" "}
              <Math>
                $g$
              </Math>
              {" "} ferries
              outputs of {" "}
              <Math>
                $f$
              </Math>
              {" "} to inputs of {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              style="margin-top:-1em"
              src="/build-img/svgo-svg/KJbsrhymZLsTZLsTkuWLTFqc.svg"
              intrinsicWidth={600}
              intrinsicHeight={145}
            />
          </Solution>
        </Exercise>
        <Exercise number={14}>
          <ExerciseStatement id="_141_h.a.i_">
            <OuterP>
              <b>
                Exercise 14.
              </b>
              {" "}
              What constraints does the composition
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f^&#123;-1&#125; \circ g \circ f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              impose on the signatures of {" "}
              <Math>
                $f$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $g$
                </Math>
                ,
              </NoBreak>
              {" "}
              assuming that {" "}
              <Math>
                $f$
              </Math>
              {" "} is a function for which
              an inverse exists? (Cf. {" "}
              <InChapterLink
                href="#_136_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 9
              </InChapterLink>
              &#8288;.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              This pattern requires {" "}
              <Math>
                $f$
              </Math>
              {" "} and {" "}
              <Math>
                $g$
              </Math>
              {" "} of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gathered&#125;
              f : [\tA] \ra [\tB] \\
              \up&#123;1.6&#125;g : [\tB] \ra [\tB]
              \end&#123;gathered&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              since outputs of {" "}
              <Math>
                $f$
              </Math>
              {" "} become inputs
              of {" "}
              <Math>
                $g$
              </Math>
              {" "} and outputs of {" "}
              <Math>
                $g$
              </Math>
              {" "} become inputs
              of 
              {" "}
              <NoBreak>
                <Math>
                  $f^&#123;-1&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} where {" "}
              <Math>
                $f^&#123;-1&#125; : [\B] \ra [\A]$
              </Math>
              {" "} if {" "}
              <NoBreak>
                <Math>
                  $f : [\A] \ra [\B]$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              style="margin-top:-1em"
              src="/build-img/svgo-svg/y-Ijti0Amp5Bmp5BD4snWLKi.svg"
              intrinsicWidth={600}
              intrinsicHeight={145}
            />
          </Solution>
        </Exercise>
        <Exercise number={15}>
          <ExerciseStatement id="_142_h.a.i_">
            <OuterP>
              <b>
                Exercise 15.
              </b>
              {" "}
              Give a dimensional analysis of the (real,
              “late afternoon”) product rule {" "}
              <NoBreak>
                (cf
                <Math>
                  $.$
                </Math>
              </NoBreak>
              {" "} {" "}
              <OutChapterLink
                href="/article/chapter7#_115_h.a.i_"
                class="out-chapter-link"
              >
                Chapter 4, Exercise 9
              </OutChapterLink>
              ):
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                \Large (fg)' = f'g + fg'
                $$
              </MathBlock>
            </Boxed>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Products of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gathered&#125;
              fg  \\
              f'g\up&#123;1.9&#125; \\
              fg'\up&#123;1.9&#125;
              \end&#123;gathered&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              require {" "}
              <Math>
                $f$
              </Math>
              {" "} and {" "}
              <Math>
                $g$
              </Math>
              {" "} to have the same input units, but no more,
              per the multiplication rule of {" "}
              <InChapterLink
                class="in-chapter-link"
                href="#_119_h.a.i_"
              >
                Table 1.1
              </InChapterLink>
              &#8288;,
              and per the fact that
              {" "}
              <Math>
                $h'$
              </Math>
              {" "} has the same input units as {" "}
              <Math>
                $h$
              </Math>
              {" "}
              for any function {" "}
              <NoBreak>
                <Math>
                  $h : \rr \ra \rr$
                </Math>
                .
              </NoBreak>
              {" "} 
              Therefore, signatures of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gathered&#125;
              f : [\tA] \ra [\tB] \\
              g : [\tA] \ra [\tC] \up&#123;1.6&#125;
              \end&#123;gathered&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              are at least necessary on either side of the equation.
              Evaluating in order:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gathered&#125;
              fg : [\tA] \ra [\tB\tC]                    \\
              \up&#123;1.6&#125;(fg)' : [\tA] \ra [\tB\tC/\tA]     \\
              \up&#123;1.6&#125;f' : [\tA] \ra [\tB/\tA]           \\
              \up&#123;1.6&#125;g' : [\tA] \ra [\tC/\tA]           \\
              \up&#123;1.6&#125;f'g : [\tA] \ra [\tB\tC/\tA]       \\
              \up&#123;1.6&#125;fg' : [\tA] \ra [\tB\tC/\tA]       \\
              \up&#123;1.6&#125;f'g + fg' : [\tA] \ra [\tB\tC/\tA]
              \end&#123;gathered&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              Thus both sides impose the same signature constraints and
              yield {" "}
              <NoBreak>
                <Math>
                  $[\A] \ra [\tB\tC/\tA]$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={16}>
          <ExerciseStatement id="_143_h.a.i_">
            <OuterP>
              <b>
                Exercise 16.
              </b>
              {" "}
              Use dimensional analysis to
              conjecture a formula for
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \large\left(&#123;1\over f&#125;\right)'
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for {" "}
              <Math>
                $f : \rr \ra \rr$
              </Math>
              {" "} differentiable. 
              (Build your formula out of {" "}
              <Math>
                $f$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $f'$
                </Math>
                .)
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              For a generic signature {" "}
              <NoBreak>
                <Math>
                  $f : [\tA] \ra [\tB]$
                </Math>
                ,
              </NoBreak>
              {" "} we have
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \left(&#123;1\over f&#125;\right)' : [\tA] \ra \left[&#123;1\over\tA\tB&#125;\right].
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              Since {" "}
              <Math>
                $f'$
              </Math>
              {" "} has output units {" "}
              <NoBreak>
                <Math>
                  $\tB/\tA$
                </Math>
                ,
              </NoBreak>
              {" "} dividing it by {" "}
              <Math>
                $f^2$
              </Math>
              {" "}
              gives the desired signature:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;f'\over f^2&#125; : [\tA] \ra \left[&#123;\tB/\tA\over\tB^2&#125;\right]
              = [\tA] \ra \left[&#123;1\over\tA\tB&#125;\right].
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              This makes {" "}
              <Math>
                $f'/f^2$
              </Math>
              {" "} a plausible conjecture.
            </OuterP>
            <OuterP class="indent-10">
              However, we know from Exercise X that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \left(&#123;1\over f&#125;\right)'
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              should have opposite sign to {" "}
              <NoBreak>
                <Math>
                  $f'$
                </Math>
                ,
              </NoBreak>
              {" "} whereas
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;f'\over f^2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              does {" "}
              <i>
                not
              </i>
              {" "} have opposite sign, since {" "}
              <Math>
                $f^2$
              </Math>
              {" "} is
              nonnegative. (Nb: When {" "}
              <Math>
                $f = 0$
              </Math>
              {" "} neither {" "}
              <Math>
                $1/f$
              </Math>
              {" "} nor
              {" "}
              <Math>
                $(1/f)'$
              </Math>
              {" "} 
              nor {" "}
              <Math>
                $f'/f^2$
              </Math>
              {" "}
              are defined, so those points are not our
              concern.)
            </OuterP>
            <OuterP class="indent-10">
              Our conjecture is “consistently wrong”—it has the wrong sign.
              Negation leaves its signature unchanged (&#8288;
              <InChapterLink
                href="#_121_h.a.i_"
                class="in-chapter-link"
              >
                Table 1.2
              </InChapterLink>
              &#8288;), giving
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                \left(&#123;1\over f&#125;\right)' = -&#123;f'\over f^2&#125;
                $$
              </MathBlock>
            </Boxed>
            <OuterP>
              as an “educated guess” for a formula for {" "}
              <NoBreak>
                <Math>
                  $(&#123;1\over f&#125;)'$
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
                The formula is correct! It is called the {" "}
                <i>
                  reciprocal rule
                </i>
                .
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={17}>
          <ExerciseStatement id="_144_h.a.i_">
            <OuterP>
              <b>
                Exercise 17.
              </b>
              {" "}
              Use dimensional analysis to conjecture a
              formula for the derivative of the inverse,
              i.e., a formula of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f^&#123;-1&#125;)' = \ldots
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              similar to the sum rule, product rule, etc.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              If
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f : [\tA] \ra [\tB]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is a generic invertible function, then
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f^&#123;-1&#125; : [\tB] \ra [\tA]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              since an input of {" "}
              <Math>
                $f^&#123;-1&#125;$
              </Math>
              {" "} is an output of {" "}
              <Math>
                $f$
              </Math>
              {" "}
              and vice-versa.
              Thus
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f^&#123;-1&#125;)' : [\tB] \ra \left[&#123;\A\over \B&#125;\right]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              Taking the reciprocal of {" "}
              <Math>
                $f'$
              </Math>
              {" "} gives
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over f'&#125; : [\A] \ra \left[&#123;\A \over \B&#125;\right]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              with the right output units, but the wrong input units (A instead of B);
              however we can “slot in” the correct input units 
              to {" "}
              <Math>
                $f'$
              </Math>
              {" "} by pre-composing with {" "}
              <NoBreak>
                <Math>
                  $f^&#123;-1&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} i.e.,
              observe that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f' \circ f^&#123;-1&#125; : [\B] \ra \left[&#123;\B\over \A&#125;\right]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...giving us...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over f' \circ f^&#123;-1&#125;&#125; : [\B] \ra \left[&#123;\A\over \B&#125;\right]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...the desired signature! Thus, a possibility is:
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                (f^&#123;-1&#125;)' = &#123;1\over f' \circ f^&#123;-1&#125;&#125;
                $$
              </MathBlock>
            </Boxed>
            <Pause />
            <StarDivider style="margin-top:-1.3em" />
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                The formula is (correct, and) known as the {" "}
                <i>
                  inverse rule
                </i>
                .
                It holds wherever {" "}
                <NoBreak>
                  <Math>
                    $f'(f^&#123;-1&#125;(x)) \ne 0$
                  </Math>
                  ,
                </NoBreak>
                {" "} for invertible,
                differentiable {" "}
                <NoBreak>
                  <Math>
                    $f$
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
                At a specific input:
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  (f^&#123;-1&#125;)'(x) = &#123;1\over f'(f^&#123;-1&#125;(x))&#125;
                  $$
                </MathBlock>
              </Boxed>
            </SolutionNote>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};