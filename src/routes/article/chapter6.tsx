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
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageRight, ImageLeft }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { StarDivider }  from "~/components/StarDivider";
import { SolutionNote, Example, NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter6__() {
  return (
    <Article
      prevPage="/article/chapter5"
      nextPage=""
      pageNecessaryMargin={1500}
      maxElementWidth={1000}
      id="_175_h.a.i_"
      path="/article/chapter6"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            the topic
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            notation: function signatures
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=section-3">
            dimensionless units
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            restrictions imposed on signatures by function
            operations
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-4">
          <InChapterLink href="?id=section-5">
            the unary function operations
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-5">
          <InChapterLink href="?id=section-6">
            differentiation
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-6">
          <InChapterLink href="?id=section-7">
            operators
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-7">
          <InChapterLink href="?id=section-8">
            the sum rule
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-8">
          <InChapterLink href="?id=section-9">
            the “early afteroon product rule”
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-9">
          <InChapterLink href="?id=section-10">
            the chain rule
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-10">
          <InChapterLink href="?id=section-11">
            epilogue: the dimensionless plane
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-11">
          <InChapterLink href="?id=exercises">
            exercises
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 6:">
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
          If {" "}
          <Math>
            $f$
          </Math>
          {" "} is a function from {" "}
          <Math>
            $\rr$
          </Math>
          {" "} to {" "}
          <Math>
            $\rr$
          </Math>
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
          {" "} takes inputs in units A and returns
          outputs in units B. The ordered pair {" "}
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
          id="_152_h.a.i_"
          intrinsicWidth={700}
          intrinsicHeight={883}
        />
        <Pause />
        <StarDivider style="margin-top:-0.3em" />
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
          Two unary function operations are {" "}
          <i>
            negation
          </i>
          {" "} and {" "}
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
            ”,
          </NoBreak>
          {" "} and defined here:
        </OuterP>
        <Pause />
        <Image
          src="/tmp-images/c6_flowers_here_two_more_v3.svg"
          id="_153_h.a.i_"
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
            href="/article/chapter4#_63_h.a.i_"
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
          Conversely, multiply the derivative's output units by its
          input units to recover the original output units.
        </OuterP>
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
            href="#_153_h.a.i_"
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
          {" "}
          To “check the units”, both sides must impose the same signature
          constraints and yield the same final signature.
        </OuterP>
        <OuterP class="indent-10">
          On the left, {" "}
          <Math>
            $f + g$
          </Math>
          {" "} requires {" "}
          <Math>
            $f$
          </Math>
          {" "} and {" "}
          <Math>
            $g$
          </Math>
          {" "} to have the same
          input and output units; differentiation adds no constraints.
          On the right, if {" "}
          <Math>
            $f : [\A] \ra [\B]$
          </Math>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $g : [\C] \ra [\D]$
            </Math>
            ,
          </NoBreak>
          {" "}
          adding {" "}
          <Math>
            $f'$
          </Math>
          {" "} and {" "}
          <Math>
            $g'$
          </Math>
          {" "} requires
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \A = \C, \qquad \B/\A = \D/\C,
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          hence {" "}
          <Math>
            $\B = \D$
          </Math>
          {" "} as well: the same constraints!
          With {" "}
          <NoBreak>
            <Math>
              $f, g : [\A] \ra [\B]$
            </Math>
            ,
          </NoBreak>
          {" "} we have
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;aligned&#125;
          (f + g)' &amp;: [\A] \ra [\tB/\tA] \\
          f' + g' &amp;: [\A] \ra [\tB/\tA] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          The sum rule “checks out” insofar as units are concerned:
          nothing untoward has been found!
        </OuterP>
        <Pause />
        <Example id="_154_h.a.i_">
          <OuterP>
            <b>
              Example 2.
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
            \begin&#123;aligned&#125;
            (x_1 + x_2)' &amp;: [\te&#123;s&#125;] \ra [\te&#123;m&#125;/\te&#123;s&#125;] \\
            x_1' + x_2' &amp;: [\te&#123;s&#125;] \ra [\te&#123;m&#125;/\te&#123;s&#125;] \up&#123;1.35&#125;
            \end&#123;aligned&#125;
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            Here the sum rule says that
          </OuterP>
          <Pause />
          <CentralDisplayItalic>
            the velocity of a sum of two points
            is the sum of their velocities
          </CentralDisplayItalic>
        </Example>
        <Pause />
        <Example id="_155_h.a.i_">
          <OuterP>
            <b>
              Example 3.
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
            src="/build-img/svgo-svg/aASR.svg"
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
        <Pause />
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
        <Boxed id="_156_h.a.i_">
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
          of a single day,
          as we know from his notes,
          whence this equation's moniker.
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
        <Example id="_157_h.a.i_">
          <OuterP>
            <b>
              Example 4.
            </b>
            {" "}
            With {" "}
            <Math>
              $x_1, x_2 : [\te&#123;s&#125;] \ra [\te&#123;m&#125;]$
            </Math>
            {" "} as in
            {" "}
            <InChapterLink
              href="#_154_h.a.i_"
              class="in-chapter-link"
            >
              Example 2
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
                href="#_157_h.a.i_"
                class="in-chapter-link"
              >
                Example 4
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
          Can we use dimensional analysis to {" "}
          <i>
            guess
          </i>
          {" "} a formula for
          {" "}
          <NoBreak>
            <Math>
              $(f \circ g)'$
            </Math>
            ?
          </NoBreak>
          {" "} Our “lego pieces” are {" "}
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
          <NoBreak>
            <Math>
              $f'$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $g'$
            </Math>
            .
          </NoBreak>
          {" "}
          With the composition's input and output units matched (Table 1.1),
          their signatures are
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
          Our target is {" "}
          <NoBreak>
            <Math>
              $(f\circ g)' : [\tA] \ra [\tC/\tA]$
            </Math>
            .
          </NoBreak>
          {" "}
          Since
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          [\tC/\tA] = \left[&#123;\tC\over \tB&#125;\right]\cdot\left[&#123;\tB\over\tA&#125;\right],
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
            .
          </NoBreak>
          {" "} But their input units differ!
          Feeding {" "}
          <Math>
            $g$
          </Math>
          {" "} into {" "}
          <Math>
            $f'$
          </Math>
          {" "} fixes that: try
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (f'\circ g)g'.
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          The signatures are
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;aligned&#125;
          f'\circ g &amp;: [\tA] \ra [\tC/\tB] \\
          g' &amp;: [\tA] \ra [\tB/\tA] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          Both accept A, and their output units multiply to {" "}
          <NoBreak>
            <Math>
              $\tC/\tA$
            </Math>
            .
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
          a formula known as the eponymous {" "}
          <i>
            chain rule
          </i>
          <NoBreak>
            <Math>
              $\rt&#123;0.1&#125;$
            </Math>
            !!
          </NoBreak>
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 5.
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
            f : [\te&#123;m&#125;] \ra [\te&#123;\$&#125;] \\
            g : [\te&#123;s&#125;] \ra [\te&#123;m&#125;] \up&#123;1.35&#125;
            \end&#123;gathered&#125;
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            At {" "}
            <Math>
              $t_0$
            </Math>
            {" "} seconds, the fundraising rate {" "}
            <Math>
              $(f\circ g)'(t_0)$
            </Math>
            {" "} is in dollars per second.
            To obtain it, multiply the dollars-per-meter rate at the rat's
            position, {" "}
            <NoBreak>
              <Math>
                $f'(g(t_0))$
              </Math>
              ,
            </NoBreak>
            {" "} by its meters-per-second velocity, {" "}
            <NoBreak>
              <Math>
                $g'(t_0)$
              </Math>
              :
            </NoBreak>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (f\circ g)'(t_0) = f'(g(t_0))g'(t_0).
            $$
          </MathBlock>
          <Pause />
          <Image
            width="530px"
            src="/build-img/svgo-svg/un6E.svg"
            intrinsicWidth={680}
            intrinsicHeight={145}
          />
          <Pause />
          <OuterP>
            <i>
              Note.
            </i>
            {" "} This equation only requires {" "}
            <Math>
              $g$
            </Math>
            {" "} to be differentiable
            at {" "}
            <Math>
              $t_0$
            </Math>
            {" "} and {" "}
            <Math>
              $f$
            </Math>
            {" "} to be differentiable at {" "}
            <NoBreak>
              <Math>
                $g(t_0)$
              </Math>
              ,
            </NoBreak>
            {" "}
            similarly to the {" "}
            <InChapterLink
              class="in-chapter-link"
              href="#_156_h.a.i_"
            >
              postscript
            </InChapterLink>
            {" "} following {" "}
            <InChapterLink
              href="#_155_h.a.i_"
              class="in-chapter-link"
            >
              Example 3
            </InChapterLink>
            &#8288;,
            relative to the sum rule.
          </OuterP>
        </Example>
        <Pause />
        <Example id="_158_h.a.i_">
          <OuterP>
            <b>
              Example 6.
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
            <ImageRight
              src="/build-img/svgo-svg/e_hV.svg"
              atLeastAsWide={true}
              intrinsicWidth={800}
              intrinsicHeight={200}
            />
          </MathBlock>
        </Example>
        <Pause />
        <Example id="_159_h.a.i_">
          <OuterP>
            <b>
              Example 7.
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
              href="#_158_h.a.i_"
              class="in-chapter-link"
            >
              Example 6
            </InChapterLink>
            &#8288;,
            which
            looks visually compatible with the graph
            of {" "}
            <Math>
              $x \ra \cos(\cos(x))$
            </Math>
            {" "} [nb: it should be the slope]:
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
                href="#_159_h.a.i_"
                class="in-chapter-link"
              >
                Example 7
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
            ;
          </NoBreak>
          {" "} the time is {" "}
          <Math>
            $3$
          </Math>
          {" "} seconds!
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 9 && <>
      <Pause />
      <Exercises
        at_end_of_page={true}
        mode="dual"
        show_curlicue={true}
        id="_174_h.a.i_"
      >
        <Exercise number={1}>
          <ExerciseStatement id="_160_h.a.i_">
            <OuterP>
              <b>
                Exercise 1.
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
              A signature of the form
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
            <OuterP class="indent-10">
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
              units must match its input units.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={2}>
          <ExerciseStatement id="_161_h.a.i_">
            <OuterP>
              <b>
                Exercise 2.
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
              The composition requires {" "}
              <Math>
                $f$
              </Math>
              {" "} and {" "}
              <Math>
                $g$
              </Math>
              {" "} of the
              form
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
              for some units A and B, as the output of {" "}
              <Math>
                $f$
              </Math>
              {" "}
              is passed to {" "}
              <Math>
                $g$
              </Math>
              {" "} and the output of {" "}
              <Math>
                $g$
              </Math>
              {" "} is passed to {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={3}>
          <ExerciseStatement id="_162_h.a.i_">
            <OuterP>
              <b>
                Exercise 3.
              </b>
              {" "}
              What constraints does the assemblage
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f \circ &#123;f\over f\circ f&#125;
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
              To start with, the presence of {" "}
              <Math>
                $f \circ f$
              </Math>
              {" "} as a sub-expression
              imposes a restricted signature of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f : [\tA] \ra [\tA]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              on {" "}
              <Math>
                $f$
              </Math>
              {" "} by {" "}
              <InChapterLink
                href="#_160_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 1
              </InChapterLink>
              &#8288;.
              But then
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;f\over f\circ f&#125; : [\tA] \ra [1]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because the output units at top and bottom of the fraction are
              both A, which cancels. (Or
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Udaw.svg"
              intrinsicWidth={500}
              intrinsicHeight={120}
            />
            <Pause />
            <OuterP>
              where {" "}
              <NoBreak>
                <Math>
                  $\tA/\tA = 1$
                </Math>
                .)
              </NoBreak>
              {" "} As
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;f\over f\circ f&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is fed back to {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                ,
              </NoBreak>
              {" "} this forces...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              [\tA] = [1]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <NoBreak>
                ...
                <Math>
                  $f$
                </Math>
              </NoBreak>
              {" "} to accept dimensionless inputs, and...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f : [1] \ra [1]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...since {" "}
              <NoBreak>
                <Math>
                  $f : [\tA] \ra [\tA]$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={4}>
          <ExerciseStatement id="_163_h.a.i_">
            <OuterP>
              <b>
                Exercise 4.
              </b>
              {" "}
              What are the signatures of 
              {" "}
              <NoBreak>
                <Math>
                  $1/z$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $z^2$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $-z$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $z + z$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $z/z$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $z - z$
                </Math>
                ,
              </NoBreak>
              {" "}
              and {" "}
              <Math>
                $z \circ z$
              </Math>
              {" "}
              if {" "}
              <NoBreak>
                <Math>
                  $z  : [\lbs] \ra [\pounds]$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Applying the rules of {" "}
              <InChapterLink
                href="#_152_h.a.i_"
                class="in-chapter-link"
              >
                Table 1.1
              </InChapterLink>
              {" "} with {" "}
              <Math>
                $f = g = z$
              </Math>
              {" "}
              and of {" "}
              <InChapterLink
                href="#_153_h.a.i_"
                class="in-chapter-link"
              >
                Table 1.2
              </InChapterLink>
              {" "} with {" "}
              <NoBreak>
                <Math>
                  $f = z$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                (1/z) : [\lbs] \ra [1/\pounds]
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                z^2 : [\lbs] \ra [\rt&#123;0.1&#125;\te&#123;£&#125;^2\rt&#123;0.1&#125;]
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                (-z) : [\lbs] \ra [\pounds]
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                (z + z) : [\lbs] \ra [\pounds]
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                (z/z) : [\lbs] \ra [\rt&#123;0.1&#125;1\rt&#123;0.1&#125;]
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                (z - z) : [\lbs] \ra [\pounds]
                $$
              </MathBlock>
            </Boxed>
            <OuterP>
              On the other hand,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              z \circ z
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is not a well-formed composition, and does not have
              a well-defined signature, since the output units of
              {" "}
              <Math>
                $z$
              </Math>
              {" "} do not match the input units of {" "}
              <NoBreak>
                <Math>
                  $z$
                </Math>
                !
              </NoBreak>
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                Since
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                -z = (-1)z,
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                z + z = 2z,
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                z - z = 0z
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                three of the cases considered are just special
                cases of multiplying the function by a 
                constant. (Which does not change the signature, as long
                as the constant is dimensionless.)
              </OuterP>
              <OuterP class="indent-10">
                [Nb: The multiplication of a function by a constant
                is formally treated in {" "}
                <OutChapterLink
                  href="/article/chapter4#_69_h.a.i_"
                  class="out-chapter-link"
                >
                  Exercise 12 of Chapter 4
                </OutChapterLink>
                .]
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                It is indeed true that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                z - z = 0
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                identically, but this is zero {" "}
                <i>
                  pounds
                </i>
                , you see?
                [British.]
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={5}>
          <ExerciseStatement id="_164_h.a.i_">
            <OuterP>
              <b>
                Exercise 5.
              </b>
              {" "}
              Is it possible to form a function of signature
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              [\lbs] \ra [\m/\s]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              from functions {" "}
              <NoBreak>
                <Math>
                  $\alpha : [\pounds] \ra [\lbs/\s]$
                </Math>
                ,
              </NoBreak>
              {" "}
              {" "}
              <NoBreak>
                <Math>
                  $\beta : [\m/\s] \ra [\m^2/\s]$
                </Math>
                ,
              </NoBreak>
              {" "} and 
              {" "}
              <NoBreak>
                <Math>
                  $\gamma : [\lbs] \ra [\s]$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              No. These functions do not mix via composition,
              nor addition or multiplication etc, because none of
              the input units are the same, nor even do any of the
              output units (or powers thereof) coincide with any
              of the other input units—these functions are all like
              oil and water to one another, despite superficial
              similarities in the units!
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={6}>
          <ExerciseStatement id="_165_h.a.i_">
            <OuterP>
              <b>
                Exercise 6.
              </b>
              {" "}
              If {" "}
              <Math>
                $v$
              </Math>
              {" "} and {" "}
              <Math>
                $c$
              </Math>
              {" "} are both speeds, what
              is the dimension of
              the expression below?
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;1 - &#123;v^2\over c^2&#125;&#125;
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
              is “speed over speed” is dimensionless,
              and since the sums, differences, squares,
              and square roots, etc, of dimensionless
              quantities is dimensionless, the entire
              expression is dimensionless.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Vocabulary.
              </i>
              {" "}
              When {" "}
              <Math>
                $c$
              </Math>
              {" "} is the speed of light
              the reciprocal of this expression, often
              written {" "}
              <NoBreak>
                ‘
                <Math>
                  $\gamma$
                </Math>
                ’,
              </NoBreak>
              {" "} is known as the
              {" "}
              <i>
                Lorentz factor
              </i>
              {" "} in physics. It is also dimensionless:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \gamma = &#123;1\over \sqrt&#123;1 - &#123;v^2\over c^2&#125;&#125;&#125;.
              $$
            </MathBlock>
          </Solution>
        </Exercise>
        <Exercise number={7}>
          <ExerciseStatement id="_166_h.a.i_">
            <OuterP>
              <b>
                Exercise 7.
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
              For example, the Lorentz factor reciprocal
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;1 - &#123;v^2\over c^2&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (cf. {" "}
              <InChapterLink
                href="#_165_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 6
              </InChapterLink>
              &#8288;)
              would become
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;1 - v^2&#125;
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
              but then the entire square root is a speed instead of
              being dimensionless, as the Lorentz factor (or its
              reciprocal) should be!
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={8}>
          <ExerciseStatement id="_167_h.a.i_">
            <OuterP>
              <b>
                Exercise 8.
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
                href="/article/chapter4#_77_h.a.i_"
                class="out-chapter-link"
              >
                Chapter 4, Exercise 19
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
                href="#_152_h.a.i_"
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
        <Exercise number={9}>
          <ExerciseStatement id="_168_h.a.i_">
            <OuterP>
              <b>
                Exercise 9.
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
              (The “building blocks” that appear in the formula
              should be {" "}
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
                href="#_153_h.a.i_"
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
                The formula is correct. As it takes its place in the
                mathematical pantheon, what name should it have?
                Just as we have the {" "}
                <i>
                  sum rule
                </i>
                {" "} and {" "}
                <i>
                  product rule
                </i>
                , this
                is the {" "}
                <i>
                  reciprocal rule
                </i>
                . (!)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={10}>
          <ExerciseStatement id="_169_h.a.i_">
            <OuterP>
              <b>
                Exercise 10.
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
                ,
              </NoBreak>
              {" "} putting “radians” is a
              matter of “author's choice” semantic emphasis), {" "}
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
        <Exercise number={11}>
          <ExerciseStatement id="_170_h.a.i_">
            <OuterP>
              <b>
                Exercise 11.
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
              It is time, since velocity has dimensions
              “distance over time”, which cancels the “distance”
              dimension on top:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\te&#123;DISTANCE&#125;\over\te&#123;SPEED&#125;&#125; = &#123;\te&#123;DISTANCE&#125;\over \left(&#123;\te&#123;DISTANCE&#125; \over &#123;\te&#123;TIME&#125;&#125;&#125;\right)&#125; = &#123;\te&#123;DISTANCE&#125;&#125;\cdot &#123;\te&#123;TIME&#125;\over \te&#123;DISTANCE&#125;&#125; = \te&#123;TIME&#125;.
              $$
            </MathBlock>
          </Solution>
        </Exercise>
        <Exercise number={12}>
          <ExerciseStatement id="_171_h.a.i_">
            <OuterP>
              <b>
                Exercise 12.
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
                href="#_170_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 11
              </InChapterLink>
              &#8288;.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={13}>
          <ExerciseStatement id="_172_h.a.i_">
            <OuterP>
              <b>
                Exercise 13.
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
              This means that {" "}
              <Math>
                $f$
              </Math>
              {" "} has the kind of graph
              below, in which distinct {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                's
              </NoBreak>
              {" "} are mapped to
              distinct {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                's:
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/bzLT.svg"
              intrinsicWidth={450}
              intrinsicHeight={295}
            />
            <Pause />
            <OuterP>
              ...and which means that we can invert the flow
              of the function, treating {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                's
              </NoBreak>
              {" "} as inputs, and recovering a
              unique {" "}
              <Math>
                $x$
              </Math>
              {" "} for each {" "}
              <Math>
                $y$
              </Math>
              {" "} that is an output of {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                —this
              </NoBreak>
              {" "}
              “inverse flow” function is what we write as {" "}
              <NoBreak>
                “
                <Math>
                  $f^&#123;-1&#125;$
                </Math>
                ”:
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/4pb6.svg"
              intrinsicWidth={640}
              intrinsicHeight={290}
            />
            <Pause />
            <OuterP>
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
                It is valid for all invertible, differentiable
                {" "}
                <NoBreak>
                  <Math>
                    $f : \rr \ra \rr$
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
        <Exercise number={14}>
          <ExerciseStatement id="_173_h.a.i_">
            <OuterP>
              <b>
                Exercise 14.
              </b>
              {" "}
              Let {" "}
              <Math>
                $f$
              </Math>
              {" "} be an invertible function with inverse {" "}
              <Math>
                $f^&#123;-1&#125;$
              </Math>
              {" "} (cf. {" "}
              <InChapterLink
                href="#_172_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 13
              </InChapterLink>
              &#8288;).
              What is the most general signature of {" "}
              <Math>
                $f$
              </Math>
              {" "} and {" "}
              <Math>
                $g$
              </Math>
              {" "} for which the composition
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f^&#123;-1&#125; \circ g \circ f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is well-formed?
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
              src="/build-img/svgo-svg/y-Ij.svg"
              intrinsicWidth={600}
              intrinsicHeight={145}
            />
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};