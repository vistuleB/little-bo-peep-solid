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
      id="_176_h.a.i_"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            function signatures
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            dimensionless units
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=section-3">
            restrictions imposed on signatures by function
            operations
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            the unary function operations
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-4">
          <InChapterLink href="?id=section-5">
            differentiation
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-5">
          <InChapterLink href="?id=section-6">
            operators
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-6">
          <InChapterLink href="?id=section-7">
            the sum rule
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-7">
          <InChapterLink href="?id=section-8">
            the “early afteroon product rule”
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-8">
          <InChapterLink href="?id=section-9">
            the chain rule
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-9">
          <InChapterLink href="?id=section-10">
            epilogue: the dimensionless plane
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-10">
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
            Function signatures.
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
          f : [\te&#123;A&#125;] \ra [\te&#123;B&#125;]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          to indicate that inputs passed to {" "}
          <Math>
            $f$
          </Math>
          {" "} have semantics
          of units A while outputs returned by {" "}
          <Math>
            $f$
          </Math>
          {" "} have semantics
          of units B. 
          For example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          h : [\te&#123;kg&#125;] \ra [^\circ\te&#123;F&#125;]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          indicates that {" "}
          <Math>
            $h$
          </Math>
          {" "} is a function for which the inputs
          denote kilograms and for which the outputs denote degrees
          fahrenheit. We refer to 
          the ordered pair {" "}
          <Math>
            $(\te&#123;A&#125;, \te&#123;B&#125;)$
          </Math>
          {" "} 
          as the
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
        <Example id="_152_h.a.i_">
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
            then
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            z : \rr \ra \rr
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            is a function whose inputs denote pounds, the measure
            of weight, 
            and whose outputs denote {" "}
            <i>
              British
            </i>
            {" "} pounds, the measure
            of wealth. The
          </OuterP>
          <Pause />
          <CentralDisplayItalic>
            signature
          </CentralDisplayItalic>
          <Pause />
          <OuterP>
            of {" "}
            <Math>
              $z$
            </Math>
            {" "} is the ordered pair {" "}
            <NoBreak>
              <Math>
                $(\lbs, \pounds)$
              </Math>
              .
            </NoBreak>
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
      <Section id="section-2">
        <OuterP>
          <b>
            Dimensionless units.
          </b>
          {" "}
          There is a special unit that we denote
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large [1]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          that stands for a “dimensionless unit” or “dimensionless
          ratio” that, conceptually, arises when a quantity
          is divided by a like-dimensioned quantity. For example,
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          radians
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          are defined as “length over length” in the {" "}
          <NoBreak>
            <Math>
              $xy$
            </Math>
            -plane—specifically,
          </NoBreak>
          {" "}
          arc length divided by radius—and are one example
          of quantities that carry units of {" "}
          <NoBreak>
            “
            <Math>
              $[1]$
            </Math>
            ”.
          </NoBreak>
          {" "}
          The outputs of sin, cos, etc, are other examples
          of dimensionless quantities,
          being ratios of the form
          “opposite over adjacent”, etc.
          Thus
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \large \cos : [1] \ra [1]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          where the first {" "}
          <NoBreak>
            ‘
            <Math>
              $[1]$
            </Math>
            ’
          </NoBreak>
          {" "} 
          stands for a ratio of a curved length
          divided by a straight length—the radian—and the second
          {" "}
          <NoBreak>
            ‘
            <Math>
              $[1]$
            </Math>
            ’
          </NoBreak>
          {" "} stands for a ratio
          of one straight length by another*—the afore-mentioned
          “opposite over adjacent”. (Or “adjacent over hypotenuse”,
          in the case of cosine!)
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
      <Section id="section-3">
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
          This means that for the sum to make sense, {" "}
          <Math>
            $f$
          </Math>
          {" "} and
          {" "}
          <Math>
            $g$
          </Math>
          {" "} need to have the same units of input, i.e.,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;aligned&#125;
          f : [\te&#123;A&#125;] &amp;\ra [\te&#123;B&#125;] \\
          g : [\te&#123;A&#125;] &amp;\ra [\te&#123;C&#125;] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          would be the most general signature 
          that one could hope for, in order for the sum to not
          be nonsencial; but this is not stringent enough yet,
          since we actually need
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;aligned&#125;
          f : [\te&#123;A&#125;] &amp;\ra [\te&#123;B&#125;] \\
          g : [\te&#123;A&#125;] &amp;\ra [\te&#123;B&#125;] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          in order not to add apples to oranges, 
          at the output end, either, i.e., to avoid
          {" "}
          <NoBreak>
            “
            <Math>
              $f(x) =$
            </Math>
          </NoBreak>
          {" "} apples”, {" "}
          <NoBreak>
            “
            <Math>
              $g(x) =$
            </Math>
          </NoBreak>
          {" "} oranges”.
        </OuterP>
        <OuterP class="indent-10">
          By contrast, when multiplying two functions we can
          stomach the output units to be different since
          composite units such as “kilowatt-hour”, “worker-years”, etc,
          exist, and likewise when dividing. 
          The following table summarizes the constraints
          that appear at the
          input (“component signatures”) and output (“resultant
          signature”) ends, for the five main function operations:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/5nYo.svg"
          id="_153_h.a.i_"
          intrinsicWidth={700}
          intrinsicHeight={883}
        />
        <Pause />
        <StarDivider style="margin-top:-0.3em" />
      </Section>
    </>}
    {visibleRestSections() > 2 && <>
      <Pause />
      <Section id="section-4">
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
            “
          </NoBreak>
          {" "} and {" "}
          <NoBreak>
            “
            <Math>
              $1/f$
            </Math>
            ”,
          </NoBreak>
          {" "}
          and defined by formulas here:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/cZb4.svg"
          id="_154_h.a.i_"
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
        id="section-5"
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
            Chapter 4
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
          By the same token,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f' : [\tC] \ra [\tD]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          if and only if
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f : [\tC] \ra [\tC\tD]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for any units C, D. 
          (Think of the fact, as in part {" "}
          <NoBreak>
            “
            <Math>
              $h$
            </Math>
            ”
          </NoBreak>
          {" "} of
          {" "}
          <OutChapterLink
            href="/article/chapter4#_63_h.a.i_"
            class="out-chapter-link"
          >
            Exercise 6 of Chapter 4
          </OutChapterLink>
          , that one needs to
          multiply the output units of {" "}
          <Math>
            $h''$
          </Math>
          {" "} by the
          units of input units of {" "}
          <Math>
            $h''$
          </Math>
          {" "} in order to recover the output
          units of {" "}
          <NoBreak>
            <Math>
              $h'$
            </Math>
            ,
          </NoBreak>
          {" "} etc.)
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 4 && <>
      <Pause />
      <Section id="section-6">
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
          Though similarly, the
          unary function
          operations from {" "}
          <InChapterLink
            class="in-chapter-link"
            href="#_154_h.a.i_"
          >
            Table 1.2
          </InChapterLink>
          {" "} 
          can be viewed as operators, taking one function
          as input and producing one function as output:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/2YHQ.svg"
          intrinsicWidth={520}
          intrinsicHeight={500}
        />
        <Pause />
        <OuterP>
          The other function operations from Table 1.1
          are also operators, albeit
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          binary
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          operators since they take two instead of one
          functions as input. For example, function addition
          can be depicted as a two-input-tube-flying-saucer:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/A7d4.svg"
          intrinsicWidth={600}
          intrinsicHeight={235}
        />
        <Pause />
        <OuterP>
          In this fashion, the complete list of all
          operators that we have dealt with so far, similarly
          presented by order of appearance in this chapter, would be
          the following:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/Mq0V.svg"
          intrinsicWidth={600}
          intrinsicHeight={585}
        />
        <Pause />
        <OuterP>
          (We recycle {" "}
          <NoBreak>
            ‘
            <Math>
              $-$
            </Math>
            ’
          </NoBreak>
          {" "} for two
          different operators—a unary one and a binary one.)
          (Or as programmers would say, we have
          {" "}
          <i>
            overloaded
          </i>
          {" "} {" "}
          <NoBreak>
            ‘
            <Math>
              $-$
            </Math>
            ’.)
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          The following figure summarizes the interaction
          between the various operators and function signatures,
          in a similar vein of diagram:
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
      <Section id="section-7">
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
          We can apply
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          dimensional analysis
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          to the sum rule, which is to say that we would
          like to “check the units” on the rule, which is to
          say that for two functions with signatures for which
          the left-hand side makes sense, the right-hand side should
          also make sense and vice-versa,
          and the right-hand side should also yield the same
          final signature as the left-hand side.
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
          f : [\te&#123;A&#125;] &amp;\ra [\te&#123;B&#125;] \\
          g : [\te&#123;A&#125;] &amp;\ra [\te&#123;B&#125;] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          as listed in {" "}
          <InChapterLink
            href="/article/chapter6#_153_h.a.i_"
            class="in-chapter-link"
          >
            Table 1.1
          </InChapterLink>
          &#8288;,
          while the subsequent taking of a derivative doesn't
          impose any new constraints.
        </OuterP>
        <OuterP class="indent-10">
          On
          the right-hand side,
          we start by adopting the agnostic point of view that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;aligned&#125;
          f : [\te&#123;A&#125;] &amp;\ra [\te&#123;B&#125;] \\
          g : [\te&#123;C&#125;] &amp;\ra [\te&#123;D&#125;] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for some arbitrary units A, B, C, D; then,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;aligned&#125;
          f' : [\te&#123;A&#125;] &amp;\ra [\te&#123;B&#125;/\tA] \\
          g' : [\te&#123;C&#125;] &amp;\ra [\te&#123;D&#125;/\tC] \up&#123;1.35&#125;
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
          \begin&#123;aligned&#125;
          \tA &amp;= \tC \\
          \tB/\tA &amp;= \tD/\tC \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          [a.k.a., “the input units of {" "}
          <Math>
            $f'$
          </Math>
          {" "} equal the input units
          of {" "}
          <Math>
            $g'$
          </Math>
          {" "} and the output units of {" "}
          <Math>
            $f'$
          </Math>
          {" "} equal the output
          units of {" "}
          <NoBreak>
            <Math>
              $g'$
            </Math>
            ”]
          </NoBreak>
          {" "}
          by Table 1.1 again, which, together, imply
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;aligned&#125;
          \tA &amp;= \tC \\
          \tB &amp;= \tD \up&#123;1.35&#125;
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
          f : [\te&#123;A&#125;] &amp;\ra [\te&#123;B&#125;] \\
          g : [\te&#123;A&#125;] &amp;\ra [\te&#123;B&#125;] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          as required by either side of the equation,
          we have
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;gathered&#125;
          f + g : [\te&#123;A&#125;] \ra [\te&#123;B&#125;] \\
          (f + g)' : [\te&#123;A&#125;] \ra [\tB/\tA] \up&#123;1.35&#125; \\
          f' :  [\te&#123;A&#125;] \ra [\tB/\tA] \up&#123;1.35&#125; \\
          g' :  [\te&#123;A&#125;] \ra [\tB/\tA] \up&#123;1.35&#125; \\
          f' + g' :  [\te&#123;A&#125;] \ra [\tB/\tA] \up&#123;1.35&#125;
          \end&#123;gathered&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          by the rules according to which signatures 
          respond to the sum and differentiation operators,
          but in particular
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (f + g)'
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is found to have the same signature as
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f' + g'
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          which indicates that the sum “checks out” insofar
          as units are concerned: nothing untoward has been found!
        </OuterP>
        <Pause />
        <Example id="_155_h.a.i_">
          <OuterP>
            <b>
              Example 2.
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
            are two differentiable functions that give 
            position measured in meters as a function of time 
            measured in seconds,
            i.e., two differentiable functions of the form
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            x_1,\rt&#123;0.2&#125; x_2 : [\te&#123;s&#125;] \ra [\te&#123;m&#125;]
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            where ‘s’ is seconds and ‘m’ is meters as usual,
            then
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \begin&#123;gathered&#125;
            \,x_1 + x_2   : [\te&#123;s&#125;] \ra [\te&#123;m&#125;] \\
            \,(x_1 + x_2)' : [\te&#123;s&#125;] \ra [\te&#123;m&#125;/\te&#123;s&#125;]\up&#123;1.35&#125; \\
            \,x_1'      : [\te&#123;s&#125;] \ra [\te&#123;m&#125;/\te&#123;s&#125;] \up&#123;1.35&#125; \\
            \,x_2'      : [\te&#123;s&#125;] \ra [\te&#123;m&#125;/\te&#123;s&#125;] \up&#123;1.35&#125; \\
            \,x_1' + x_2' : [\te&#123;s&#125;] \ra [\te&#123;m&#125;/\te&#123;s&#125;] \up&#123;1.35&#125;
            \end&#123;gathered&#125;
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            and, in particular,
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x_1 + x_2)'
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            has the same signature as
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            x_1' + x_2'
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            as in the general analysis of the sum rule with arbitrary
            units A and B from above.
          </OuterP>
          <Pause />
          <OuterP>
            <i>
              Note on {" "}
              <InChapterLink
                href="/article/chapter6#_155_h.a.i_"
                class="in-chapter-link"
              >
                Example 2
              </InChapterLink>
              &#8288;.
            </i>
            {" "}
            In the case of {" "}
            <InChapterLink
              href="/article/chapter6#_155_h.a.i_"
              class="in-chapter-link"
            >
              Example 2
            </InChapterLink>
            &#8288;, the sum rule,
            which now reads
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \,(x_1 + x_2)' = x_1' + x_2',
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            can be verbalized by saying that
          </OuterP>
          <Pause />
          <CentralDisplayItalic>
            the rate of change of a sum of two 
            coordinates is the sum of their rates of change
          </CentralDisplayItalic>
          <Pause />
          <OuterP>
            or
          </OuterP>
          <Pause />
          <CentralDisplayItalic>
            the velocity of a sum of two points
            is the sum of their velocities
          </CentralDisplayItalic>
          <Pause />
          <OuterP>
            since in this case the “rate of change” is a velocity.
          </OuterP>
        </Example>
        <Pause />
        <Example id="_156_h.a.i_">
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
        <Boxed id="_157_h.a.i_">
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
      <Section id="section-8">
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
          For a dimensional analysis of this equation, 
          note that, on the left-hand side,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          fg
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          restricts {" "}
          <Math>
            $f$
          </Math>
          {" "} and {" "}
          <Math>
            $g$
          </Math>
          {" "} to signatures of the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;aligned&#125;
          f : [\te&#123;A&#125;] &amp;\ra [\te&#123;B&#125;] \\
          g : [\te&#123;A&#125;] &amp;\ra [\te&#123;C&#125;] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for some units A, B, C, per Table 1.1., which is also 
          the most general type of signature that is compatible with the right-hand side.
          This is “so far so good”!
        </OuterP>
        <OuterP class="indent-10">
          However,
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
          as is easy to check, and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          [\tA] \ra [\tB\tC/\tA^2] \ne [\tA] \ra [\tB\tC/\tA]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          so the rule
          cannot be correct: different units are produced
          by either side of the equation, for the same
          functions {" "}
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
        <Example id="_158_h.a.i_">
          <OuterP>
            <b>
              Example 4.
            </b>
            {" "}
            As in {" "}
            <InChapterLink
              href="/article/chapter6#_155_h.a.i_"
              class="in-chapter-link"
            >
              Example 2
            </InChapterLink>
            {" "}
            let
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            x_1,\rt&#123;0.1&#125; x_2 : \rr \ra \rr
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            have signature
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \,x_1,\rt&#123;0.1&#125; x_2 : [\te&#123;s&#125;] \ra [\te&#123;m&#125;]
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            so that {" "}
            <NoBreak>
              <Math>
                $x_1$
              </Math>
              ,
            </NoBreak>
            {" "} {" "}
            <Math>
              $x_2$
            </Math>
            {" "}
            give position measured in meters as a function of time measured in seconds.
            Then
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            x_1x_2 : [\te&#123;s&#125;] \ra [\te&#123;m&#125;^2]
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            and
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
                href="/article/chapter6#_158_h.a.i_"
                class="in-chapter-link"
              >
                Example 4
              </InChapterLink>
              &#8288;.
            </i>
            {" "}
            It might be observed that
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            x_1'x_2'
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            has the same dimensions (signature) as
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x_1x_2)''
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            in {" "}
            <InChapterLink
              href="/article/chapter6#_158_h.a.i_"
              class="in-chapter-link"
            >
              Example 4
            </InChapterLink>
            &#8288;—one might conjecture that
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x_1x_2)'' = x_1'x_2'
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            from this observation, and one would be wrong—which is to
            show that dimensional analysis is quick to debunk an incorrect
            equation but, in the contravening case, 
            cannot be trusted as a proof—nonetheless,
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            x_1'x_2'
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            <i>
              does show up as a term
            </i>
            {" "} in the “true”
            formula for {" "}
            <NoBreak>
              <Math>
                $(x_1x_2)''$
              </Math>
              ,
            </NoBreak>
            {" "} so, in some sense,
            dimensional analysis is not {" "}
            <i>
              entirely
            </i>
            {" "} wrong,
            even here!
          </OuterP>
        </Example>
      </Section>
    </>}
    {visibleRestSections() > 7 && <>
      <Pause />
      <Section id="section-9">
        <OuterP>
          <b>
            The chain rule.
          </b>
          {" "}
          We would we like a formula for
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
          To begin with,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (f\circ g)'
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          requires {" "}
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
          \begin&#123;aligned&#125;
          f &amp;: [\tB] \ra [\tC] \\
          g &amp;: [\tA] \ra [\tB] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (cf. Table 1.1)
          for some units A, B, C, 
          so these are the “initial constraints” on {" "}
          <Math>
            $f$
          </Math>
          {" "} and
          {" "}
          <NoBreak>
            <Math>
              $g$
            </Math>
            .
          </NoBreak>
          {" "} The “lego pieces” then
          have the following signatures:
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
          Or in more amusing pictorial form (where we
          schizophrenically put input tubes on the left, again):
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/YZvS.svg"
          intrinsicWidth={520}
          intrinsicHeight={175}
        />
        <Pause />
        <OuterP>
          From these pieces we seek to assemble a function
          of signature
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          [\tA] \ra [\tC/\tA]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          which is not a signature of any of the lego pieces;
          but since
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
          (a product of functions),
          which makes sense since on the one hand
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (f'\circ g)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is a well-formed composition of signature
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          [\tA] \ra [\tC/\tB]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          whereas {" "}
          <Math>
            $g'$
          </Math>
          {" "} has signature
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          [\tA] \ra [\tB/\tA]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          so that the product of the two has signature
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          [\tA] \ra [\tC/\tA]
          $$
          <ImageRight
            src="/build-img/svgo-svg/zysM.svg"
            offsetX="0em"
            atLeastAsWide={true}
            intrinsicWidth={500}
            intrinsicHeight={300}
          />
        </MathBlock>
        <Pause />
        <OuterP>
          as desired! It turns out that this is the
          correct formula, i.e., 
          we truly do have..
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
            is running a fundraising race where one function
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            f : \rr \ra \rr
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            gives the amount of money raised in dollars as a function
            of the position 
            meters, whereas 
            another function
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            g : \rr \ra \rr
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            gives the rat's position in meters
            as a function of time elapsed since the
            start of the race, measured in seconds.
            I.e.,
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
            and
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            f\circ g : [\te&#123;s&#125;] \ra [\te&#123;\$&#125;]
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            gives the money raised, in dollars, as a
            function of time elapsed, in seconds.
            Perforce,
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (f\circ g)': [\te&#123;s&#125;] \ra [\te&#123;\$&#125;/\te&#123;s&#125;]
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            gives the fundraising rate, in dollars per second,
            as a function of time, in seconds.
          </OuterP>
          <OuterP class="indent-10">
            Also note that
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            f' : [\te&#123;m&#125;] \ra [\te&#123;\$&#125;/\te&#123;m&#125;]
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            gives the
            fundraising rate in dollars per meter as a function
            of the position, in meters.
          </OuterP>
          <OuterP class="indent-10">
            Then, at {" "}
            <Math>
              $t_0$
            </Math>
            {" "} seconds after the start of the race,
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
            fundraising, as we have fed the rat's position {" "}
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
            {" "} That is:
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
            Also since
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            f'(g(t_0)) = (f'\circ g)(t_0)
            $$
            <ImageRight
              src="/build-img/svgo-svg/g4I6.svg"
              offsetX="-1em"
              atLeastAsWide={true}
              intrinsicWidth={250}
              intrinsicHeight={100}
            />
          </MathBlock>
          <Pause />
          <OuterP>
            we can write the same equation as
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (f \circ g)'(t_0) = (f'\circ g)(t_0)g'(t_0)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            or, abstracting the input {" "}
            <Math>
              $t_0$
            </Math>
            {" "} away, as
          </OuterP>
          <Boxed>
            <MathBlock>
              $$
              (f \circ g)' = (f'\circ g)g'
              $$
            </MathBlock>
          </Boxed>
          <OuterP>
            which is the chain rule as originally stated
            above.
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
            as previously seen with {" "}
            <NoBreak>
              “
              <Math>
                $t_0$
              </Math>
              ”
            </NoBreak>
            {" "} in place of {" "}
            <NoBreak>
              “
              <Math>
                $x$
              </Math>
              ”.
            </NoBreak>
            {" "} 
            In this case the assumption
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
            can be replaced by the more granular
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
              href="#_157_h.a.i_"
            >
              postscript
            </InChapterLink>
            {" "} following {" "}
            <InChapterLink
              href="/article/chapter6#_156_h.a.i_"
              class="in-chapter-link"
            >
              Example 3
            </InChapterLink>
            &#8288;,
            relative to the sum rule.
          </OuterP>
        </Example>
        <Pause />
        <Example id="_159_h.a.i_">
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
              href="#section-9"
            >
              the chain rule
            </InChapterLink>
            &#8288;,
            since {" "}
            <NoBreak>
              <Math>
                $\cos' = -\sin$
              </Math>
              ,
            </NoBreak>
            {" "} or
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (\cos \circ \cos)'(x) = ((-\sin) \circ \cos)(x)\cdot(-\sin)(x)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            evaluating at an input {" "}
            <NoBreak>
              <Math>
                $x$
              </Math>
              ,
            </NoBreak>
            {" "} 
            or
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (\cos \circ \cos)'(x) = \sin(\cos(x))\sin(x)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            when evaluating the {" "}
            <NoBreak>
              ‘
              <Math>
                $\circ$
              </Math>
              ’
            </NoBreak>
            {" "} and cancelling the minus signs,
            or
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (\cos \circ \cos)' = (\sin \circ \cos)\sin
            $$
            <ImageRight
              src="/build-img/svgo-svg/e_hV.svg"
              atLeastAsWide={true}
              intrinsicWidth={800}
              intrinsicHeight={200}
            />
          </MathBlock>
          <Pause />
          <OuterP>
            cancelling signs from the outset.
          </OuterP>
        </Example>
        <Pause />
        <Example id="_160_h.a.i_">
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
              href="/article/chapter6#_159_h.a.i_"
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
                href="/article/chapter6#_160_h.a.i_"
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
            Specifically, since
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            -1 \leq \cos(t) \leq 1
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            the angle of the wiper remains stuck between 
            {" "}
            <Math>
              $-1\Rad \cong -57.29^\circ$
            </Math>
            {" "}
            at one end at
            {" "}
            <Math>
              $+1\Rad \cong 57.29^\circ$
            </Math>
            {" "}
            at the
            other end, with the values of {" "}
            <Math>
              $\cos(\cos(x))$
            </Math>
            {" "}
            remaining stuck between
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \cos(\pm 1) = \cos(\pm 57.29\ldots^\circ) \approx 0.54
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            and {" "}
            <NoBreak>
              <Math>
                $\cos(0) = 1$
              </Math>
              ,
            </NoBreak>
            {" "} producing the compressed
            sinusoid-like wave seen in {" "}
            <InChapterLink
              href="/article/chapter6#_160_h.a.i_"
              class="in-chapter-link"
            >
              Example 7
            </InChapterLink>
            &#8288;.
          </OuterP>
        </Example>
      </Section>
    </>}
    {visibleRestSections() > 8 && <>
      <Pause />
      <Section id="section-10">
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
          Relatedly to this idea of the original “vanilla”
          {" "}
          <NoBreak>
            <Math>
              $xy$
            </Math>
            -plane
          </NoBreak>
          {" "} having dimensionless axes, you may
          have seen people label axes this way, writing
          “time/s” instead of “time {" "}
          <NoBreak>
            <Math>
              $[\te&#123;s&#125;]$
            </Math>
            ”,
          </NoBreak>
          {" "} e.g.:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/oqAL.svg"
          style="margin-top:-1.4em"
          intrinsicWidth={600}
          intrinsicHeight={465}
        />
        <Pause />
        <OuterP>
          The idea behind this notation is that the plane
          itself is a dimensionless object, so by doing
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;time&#125;\over\te&#123;s&#125;&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          where “time” is a time measurement in seconds,
          we have “taken the units out of the measurement”
          and obtained a “pure number” that “fits” inside
          the plane; (!); for example, this {" "}
          <NoBreak>
            ‘
            <Math>
              $3$
            </Math>
            ’
          </NoBreak>
          {" "} here...
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/_SJ0.svg"
          intrinsicWidth={600}
          intrinsicHeight={440}
        />
        <Pause />
        <OuterP>
          ...is really a {" "}
          <Math>
            $3$
          </Math>
          {" "} without any units—the “pure” {" "}
          <NoBreak>
            <Math>
              $3$
            </Math>
            —because
          </NoBreak>
          {" "}
          the entire plane is dimensionless, but
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          3 = &#123;\te&#123;time&#125;\over \te&#123;s&#125;&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          with no (i.e., dimensionless) units
          on the left implies
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          3\te&#123;s&#125; = \te&#123;time&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          or “time equals {" "}
          <Math>
            $3$
          </Math>
          {" "} seconds”, i.e., that vertical
          slice of the plane corresponds to the moment when
          the “time” variable—which {" "}
          <i>
            does
          </i>
          {" "} have units—equals
          {" "}
          <Math>
            $3$
          </Math>
          {" "} {" "}
          <i>
            seconds
          </i>
          , not just {" "}
          <NoBreak>
            ‘
            <Math>
              $3$
            </Math>
            ’,
          </NoBreak>
          {" "} the pure number!!
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 9 && <>
      <Pause />
      <Exercises
        at_end_of_page={true}
        mode="dual"
        show_curlicue={true}
        id="_175_h.a.i_"
      >
        <Exercise number={1}>
          <ExerciseStatement id="_161_h.a.i_">
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
              is necessary and sufficient: since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f\circ f)(x) = f(f(x))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              we need a function that can evaluate its own output,
              i.e., for which the input and output units match.
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                More formally, the general composition
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                f \circ g
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                requires signatures of the form
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \begin&#123;gathered&#125;
                f : [\B] \ra [\C] \\
                \up&#123;1.6&#125;g : [\A] \ra [\B]
                \end&#123;gathered&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for some units A, B, C. (Cf. {" "}
                <InChapterLink
                  href="/article/chapter6#_153_h.a.i_"
                  class="in-chapter-link"
                >
                  Table 1.1
                </InChapterLink>
                &#8288;.) If {" "}
                <Math>
                  $g = f$
                </Math>
                {" "}
                this implies {" "}
                <Math>
                  $\A = \B$
                </Math>
                {" "} because both are the inputs
                of {" "}
                <NoBreak>
                  <Math>
                    $f = g$
                  </Math>
                  ,
                </NoBreak>
                {" "} as well as {" "}
                <Math>
                  $\B = \C$
                </Math>
                {" "} because both are the outputs
                of {" "}
                <NoBreak>
                  <Math>
                    $f = g$
                  </Math>
                  ,
                </NoBreak>
                {" "} collapsing A, B, C to a single unit {" "}
                <NoBreak>
                  <Math>
                    $\A = \B = \C = \A$
                  </Math>
                  .
                </NoBreak>
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={2}>
          <ExerciseStatement id="_162_h.a.i_">
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
              {" "} of the form
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
              for some units A and B
              since the output of {" "}
              <Math>
                $f$
              </Math>
              {" "} is forwarded to {" "}
              <NoBreak>
                <Math>
                  $g$
                </Math>
                ,
              </NoBreak>
              {" "} whose
              output of {" "}
              <Math>
                $g$
              </Math>
              {" "} if forwarded back to {" "}
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
          <ExerciseStatement id="_163_h.a.i_">
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
                href="/article/chapter6#_161_h.a.i_"
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
          <ExerciseStatement id="_164_h.a.i_">
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
                href="/article/chapter6#_153_h.a.i_"
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
                href="/article/chapter6#_154_h.a.i_"
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
          <ExerciseStatement id="_165_h.a.i_">
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
          <ExerciseStatement id="_166_h.a.i_">
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
              &#123;v\over c&#125;
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
          <ExerciseStatement id="_167_h.a.i_">
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
                href="/article/chapter6#_166_h.a.i_"
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
              being dimensionless, 
              is it should be—failures on all sides!
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={8}>
          <ExerciseStatement id="_168_h.a.i_">
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
                href="#_153_h.a.i_"
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
              Then, evaluating further, one finds
            </OuterP>
            <OuterP class="indent-10">
              But then one finds, in order, that
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
              so these signatures are also sufficient to
              evaluate either side of the equation to the end, and,
              moreover,
              {" "}
              <Math>
                $(fg)'$
              </Math>
              {" "}
              and
              {" "}
              <Math>
                $f'g + g'f$
              </Math>
              {" "}
              are found to have the same signature, concluding the 
              dimensional analysis. (= Both sides impose the same
              signature constraints, and evaluate to the same final
              signature.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={9}>
          <ExerciseStatement id="_169_h.a.i_">
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
              The expression
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \left(&#123;1\over f&#125;\right)'
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              does not on its own impose any restrictions on
              the signature of {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                ,
              </NoBreak>
              {" "} so we can consider
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f : [\tA] \ra [\tB]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              of generic signature. Then
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over f&#125; : [\tA] \ra \left[&#123;1\over\tB&#125;\right]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as in the second half of {" "}
              <InChapterLink
                href="/article/chapter6#_154_h.a.i_"
                class="in-chapter-link"
              >
                Table 1.2
              </InChapterLink>
              &#8288;,
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \left(&#123;1\over f&#125;\right)' : [\tA] \ra \left[&#123;1\over\tA\tB&#125;\right]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              per the usual effect of differentiation on units.
            </OuterP>
            <OuterP class="indent-10">
              In order to achieve the signature
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              [\tA] \ra \left[&#123;1\over\tA\tB&#125;\right]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              using
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f : [\tA] \ra [\tB]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f' : [\tA] \ra \left[&#123;\tB\over \tA&#125;\right]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as building blocks we can start with {" "}
              <Math>
                $f'$
              </Math>
              {" "} and divide
              by {" "}
              <NoBreak>
                <Math>
                  $f^2$
                </Math>
                .
              </NoBreak>
              {" "} 
              (In fact, this is the only combination that works, modulo
              multiplication by a dimensionless constant.)
              Specifically, since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f : [\tA] \ra [\tB]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              we have
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f^2 : [\tA] \ra [\tB^2]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over f^2&#125; : [\tA] \ra \left[&#123;1\over\tB^2&#125;\right]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              multiplying {" "}
              <Math>
                $f'$
              </Math>
              {" "} by {" "}
              <Math>
                $&#123;1\over f^2&#125;$
              </Math>
              {" "} gives us a function
              of signature
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              [\tA] \ra \left[&#123;\tB\over \,\tA^&#123;\vphantom&#123;2&#125;&#125;&#125;\cdot&#123;1\over\tB^2&#125;\right]\,\, = \,\,[\tA] \ra \left[&#123;1\over\tA\tB&#125;\right]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as desired, which makes
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                &#123;f'\over f^2&#125;
                $$
              </MathBlock>
            </Boxed>
            <OuterP>
              a plausible conjecture.
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
              Since our conjecture is at least “consistently
              wrong”—by which we mean that our formula {" "}
              <i>
                always
              </i>
              {" "} has the wrong sign—a plausible fix
              is just to negate the expression (and indeed
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              negation
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              is one of the things we can do to a function
              without changing its signature, per {" "}
              <InChapterLink
                href="/article/chapter6#_154_h.a.i_"
                class="in-chapter-link"
              >
                Table 1.2
              </InChapterLink>
              &#8288;), giving
              us
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
          </Solution>
        </Exercise>
        <Exercise number={10}>
          <ExerciseStatement id="_170_h.a.i_">
            <OuterP>
              <b>
                Exercise 10.
              </b>
              {" "}
              The formula given at the end of the solution
              to {" "}
              <InChapterLink
                href="/article/chapter6#_169_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 9
              </InChapterLink>
              {" "} happens to be the true,
              “correct” formula for {" "}
              <NoBreak>
                <Math>
                  $(&#123;1\over f&#125;)'$
                </Math>
                ,
              </NoBreak>
              {" "} for a differentiable
              function {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                .
              </NoBreak>
              {" "} What {" "}
              <i>
                name
              </i>
              {" "} do
              we expect this formula to have, as it takes its place
              in the mathematical pantheon?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Just as
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f + g)' = f' + g'
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              (fg)' = f'g + fg'
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              are known as the {" "}
              <i>
                sum rule
              </i>
              {" "} and {" "}
              <i>
                product rule
              </i>
              ,
              so is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \left(&#123;1\over f&#125;\right)' = -&#123;f'\over f^2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              also a “rule”, the {" "}
              <i>
                reciprocal rule
              </i>
              . (!)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={11}>
          <ExerciseStatement id="_171_h.a.i_">
            <OuterP>
              <b>
                Exercise 11.
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
        <Exercise number={12}>
          <ExerciseStatement id="_172_h.a.i_">
            <OuterP>
              <b>
                Exercise 12.
              </b>
              {" "}
              If {" "}
              <Math>
                $x$
              </Math>
              {" "} is a spatial displacement and {" "}
              <Math>
                $v$
              </Math>
              {" "} is speed, what is
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
              It is time, since speed has the form
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
        <Exercise number={13}>
          <ExerciseStatement id="_173_h.a.i_">
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
              (In another view...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/wL23.svg"
              intrinsicWidth={470}
              intrinsicHeight={180}
            />
            <Pause />
            <OuterP>
              <NoBreak>
                ...
                <Math>
                  $f^&#123;-1&#125;$
                </Math>
              </NoBreak>
              {" "} is the box that undoes the work
              of {" "}
              <Math>
                $f$
              </Math>
              {" "} and vice-versa, in another view...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gathered&#125;
              (f^&#123;-1&#125; \circ f\rt&#123;0.05&#125;) = (x \ra x)\\
              \up&#123;1.6&#125;(f \circ f^&#123;-1&#125;) = (x \ra x)
              \end&#123;gathered&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <NoBreak>
                ...
                <Math>
                  $f^&#123;-1&#125;$
                </Math>
              </NoBreak>
              {" "} is the function that composes with
              {" "}
              <Math>
                $f$
              </Math>
              {" "} 
              to produce the {" "}
              <i>
                identity function
              </i>
              {" "} {" "}
              <Math>
                $x \ra x$
              </Math>
              {" "} and vice-versa,
              and in another view...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/wzGl.svg"
              intrinsicWidth={440}
              intrinsicHeight={350}
            />
            <Pause />
            <OuterP>
              <NoBreak>
                ...
                <Math>
                  $f^&#123;-1&#125;$
                </Math>
              </NoBreak>
              {" "} is the function whose graph is the
              mirror image of {" "}
              <Math>
                $y = f(x)$
              </Math>
              {" "} about the line {" "}
              <NoBreak>
                <Math>
                  $x = y$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
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
              and we seek to build a function of signature {" "}
              <Math>
                $[\B] \ra [\A/\B]$
              </Math>
              {" "}
              from these...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f : [\A] \ra [\B]\\
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              f' : [\A] \ra \left[&#123;\B \over \A&#125;\right]\\
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              f^&#123;-1&#125; : [\B] \ra [\A]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...ingredients; note that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over f'&#125; : [\A] \ra \left[&#123;\A \over \B&#125;\right]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              gives us
              the output units A/B at least, but the input 
              units are wrong; (should be “B”);
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
                The formula can be stated also in terms of what 
                it implies for a specific input (maybe we should put {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $y$
                  </Math>
                  ’
                </NoBreak>
                {" "}
                here for the input, but anyway):
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
          <ExerciseStatement id="_174_h.a.i_">
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
                href="/article/chapter6#_173_h.a.i_"
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