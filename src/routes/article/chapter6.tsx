import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Boxed  from "~/components/Boxed";
import { CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { MathBlock, Math }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageRight, ImageLeft }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { StarDivider }  from "~/components/StarDivider";
import { Example, NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter6__() {
  return (
    <Article
      prevPage="/article/chapter5"
      nextPage="/article/appendixA"
      pageNecessaryMargin={1500}
      maxElementWidth={1000}
      id="_161_h.a.i_"
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
      <Section
        and="sth_else"
        id="section-1"
      >
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
          fahrenheit. We refer to the ordered pair {" "}
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
            z : [\te&#123;m&#125;/\te&#123;s&#125;^2] \ra [\rt&#123;0.1&#125;\te&#123;£&#125;\rt&#123;0.1&#125;]
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
            is a function
            whose inputs denote meters per seconds squared
            (a measure of acceleration)
            and whose outputs denote British pounds.
          </OuterP>
        </Example>
      </Section>
      <Rest />
    </Article>
  );
}

const Rest = () => {
  const showMore = useShowMore();
  return <>
    {showMore() && <>
      <Pause />
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
          \Large[1]
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
          \cos : [1] \ra [1]
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
          <ImageLeft src="/build-img/svgo-svg/0z4q.svg" />
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
        <Image src="/build-img/svgo-svg/edTN.svg" />
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
        <Image src="/build-img/svgo-svg/0QSx.svg" />
        <Pause />
        <OuterP>
          (This actually happens inside of SVG, the web-based
          standard for so-called “vector graphics”, in which the {" "}
          <Math>
            $y$
          </Math>
          {" "}
          axis points downwards; in an SVG file, {" "}
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
          <ImageRight src="/build-img/svgo-svg/BYVX.svg" />
        </OuterP>
      </Section>
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
          src="/build-img/svgo-svg/hJfJ.svg"
          style="margin-bottom:-1.3em"
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
          stomach 
          the output units to be different since
          composite units such as “kilowatt-hour”, “worker-years”, etc,
          exist,
          and likewise when dividing. We have:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/qdyx.svg"
          id="_153_h.a.i_"
        />
        <Pause />
        <OuterP>
          ...summarizing the constraints that appear at the
          input (“component signatures”) and output (“resultant
          signature”) ends, for the five main function operations.
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-4">
        <OuterP>
          <b>
            The unary function operations.
          </b>
          {" "}
          We will add two more not-yet-discussed—or {" "}
          <i>
            hardly
          </i>
          * discussed—
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
          , defined by formulas here:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/lyKL.svg"
          id="_154_h.a.i_"
        />
        <Pause />
        <OuterP>
          [*See {" "}
          <a
            class="out-chapter-link"
            href="/article/chapter5#_90_h.a.i_"
          >
            Chapter 5
          </a>
          &#8288;.]
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-5">
        <OuterP>
          <b>
            Differentiation.
          </b>
          {" "}
          As reviewed in {" "}
          <a
            class="out-chapter-link"
            href="/article/chapter4#section-6"
          >
            Chapter 4
          </a>
          {" "}
          (see also {" "}
          <a
            href="/article/chapter4#_63_h.a.i_"
            class="out-chapter-link"
          >
            Exercise 6 of Chapter 4
          </a>
          &#8288;),
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
          By the same token, the “if and only if”-ness
          implies that
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
              $g$
            </Math>
            ”
          </NoBreak>
          {" "} of
          {" "}
          <a
            href="/article/chapter4#_63_h.a.i_"
            class="out-chapter-link"
          >
            Exercise 6 of Chapter 4
          </a>
          &#8288;, that one needs to
          multiply the output units of {" "}
          <Math>
            $g''$
          </Math>
          {" "} by the
          units of input units of {" "}
          <Math>
            $g''$
          </Math>
          {" "} in order to recover the output
          units of {" "}
          <NoBreak>
            <Math>
              $g'$
            </Math>
            ,
          </NoBreak>
          {" "} etc.)
        </OuterP>
      </Section>
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
        <Image src="/build-img/svgo-svg/vx7K.svg" />
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
        <Image src="/build-img/svgo-svg/119H.svg" />
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
        <Image src="/build-img/svgo-svg/Zh1r.svg" />
        <Pause />
        <OuterP>
          In this fashion, the complete list of all
          operators that we have dealt with so far, similarly
          presented by order of appearance in this chapter, would be
          the following:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/Mq0V.svg" />
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
          (Or, as computer scientists would say, we have
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
        <Image src="/build-img/svgo-svg/VuM1.svg" />
        <Pause />
        <StarDivider style="margin-top:-0.3em" />
      </Section>
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
            class="in-chapter-link"
            href="#_153_h.a.i_"
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
          <Image src="/build-img/svgo-svg/aASR.svg" />
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
            offset_x="5em"
            compensate_offset_x_for_large_text_columns={true}
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
            offset_x="5em"
            compensate_offset_x_for_large_text_columns={true}
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
              offset_x="1em"
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
          dimensional analysis, i.e., from the fact that the
          formula should be dimensionally consistent.
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
        <Image src="/build-img/svgo-svg/YZvS.svg" />
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
            offset_x="3.1em"
            compensate_offset_x_for_large_text_columns={true}
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
          <Image src="/build-img/svgo-svg/kL1E.svg" />
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
              offset_x="2em"
              compensate_offset_x_for_large_text_columns={true}
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
              offset_x="2em"
              compensate_offset_x_for_large_text_columns={true}
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
            (\cos \circ \cos)'(x) = \sin(\cos x)\sin(x)
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
            {" "} and cancelling the minus signs.
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
            which looks visually compatible with the graph of
            {" "}
            <Math>
              $\cos(\cos x)$
            </Math>
            {" "}
            since
            {" "}
            <Math>
              $(\cos \circ \cos)'(2.5)$
            </Math>
            {" "} is supposed to be the slope
            of {" "}
            <Math>
              $y = \cos(\cos x)$
            </Math>
            {" "} at {" "}
            <Math>
              $x = 2.5$
            </Math>
            {" "} (after all):
          </OuterP>
          <Pause />
          <Image src="/build-img/svgo-svg/0dwB.svg" />
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
            . Because
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            -1 \leq \cos(x) \leq 1
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            the values of {" "}
            <Math>
              $\cos(\cos(x))$
            </Math>
            {" "} remain stuck between
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
            <Math>
              $\cos(0) = 1$
            </Math>
            {" "}
            which produces the graph above, that one can actually
            think of as the {" "}
            <NoBreak>
              <Math>
                $x$
              </Math>
              -coordinate
            </NoBreak>
            {" "} of a certain horizontal
            windshield-wiper whose angle at time {" "}
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
          <Image src="/build-img/svgo-svg/khDb.svg" />
        </Example>
      </Section>
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
        <Image src="/build-img/svgo-svg/_SJ0.svg" />
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
      <Pause />
      <Exercises
        at_end_of_page={true}
        mode="dual"
        show_curlicue={true}
      >
        <Exercise number={1}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 1.
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
              <a
                href="/article/chapter4#_77_h.a.i_"
                class="out-chapter-link"
              >
                Chapter 4, Exercise 19
              </a>
              &#8288;):
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
              Hello.
            </OuterP>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};