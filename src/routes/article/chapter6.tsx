import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Boxed  from "~/components/Boxed";
import { CentralDisplayItalic }  from "~/components/Delimiters";
import InChapterLink  from "~/components/InChapterLink";
import { Math, MathBlock }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter6__() {
  return (
    <Article
      prevPage="/article/chapter5"
      nextPage="/article/chapter7"
      ref="rence"
      pageNecessaryMargin={950}
      maxElementWidth={1000}
      id="_148_hgi_"
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
            fun fact. (“fun.”)
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            function operations and signatures
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-4">
          <InChapterLink href="?id=section-5">
            notation
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-5">
          <InChapterLink href="?id=section-6">
            compatible signatures for function operations
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-6">
          <InChapterLink href="?id=section-7">
            function operation and units
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-7">
          <InChapterLink href="?id=section-8">
            the constraints imposed by function operations
            on units
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-8">
          <InChapterLink href="?id=section-9">
            the chain rule
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
          In some real-world
          scenarios the inputs and outputs of a function
          come with certain units attached. In this case,
          we write
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large f : [\te&#123;A&#125;] \ra [\te&#123;B&#125;]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          to indicate that the 
          units of inputs to {" "}
          <Math>
            $f$
          </Math>
          {" "} are A while the units
          of numbers output by {" "}
          <Math>
            $f$
          </Math>
          {" "} are B. 
          For example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large h : [\te&#123;kg&#125;] \ra [^\circ\te&#123;F&#125;]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          would indicate that {" "}
          <Math>
            $h$
          </Math>
          {" "} 
          is a function whose inputs denote kilograms and whose
          outputs denote degrees fahrenheit.
          We refer 
          to the ordered pair {" "}
          <Math>
            $(\te&#123;A&#125;, \te&#123;B&#125;)$
          </Math>
          {" "} as the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          signature
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          of the function. Thus a
          function signature has
          two parts: the units of the input, and the units
          of the output!
        </OuterP>
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
          {" "} There is a special unit
          that we denote
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
          \Large \cos : [1] \ra [1]
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
        </OuterP>
        <Pause />
        <OuterP>
          <i>
            *Note.
          </i>
          {" "} To be precise, these “lengths” are actually
          coordinate changes that may be negative—except for the
          hypotenuse, which is always positive—so they
          are “signed lengths”, or {" "}
          <i>
            displacements
          </i>
          , more accurately. 
          Also the radian carries a sign—the radian says “rotate by
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
          for clockwise**”!
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
          {" "} will rotate an object by {" "}
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
          !)
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-3">
        <OuterP>
          <b>
            Fun fact. (“Fun.”)
          </b>
          {" "} 
          Imagine that we define the radian value of an
          angle between {" "}
          <Math>
            $0^\circ$
          </Math>
          {" "} and {" "}
          <Math>
            $360^\circ$
          </Math>
          {" "} as
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
          which is the more “traditional” definition. In 
          the second 
          case, the dimensions of the
          radian are
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
          {" "} in that plane is a dimensionless
          quantity, not the usual “physical” notion of length!
          So both cases assign radians to be a dimensionless 
          unit! Whoo-hoo!
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
            ”:
          </NoBreak>
        </OuterP>
        <Pause />
        <OuterP>
          The idea behind this notation is that the plane
          itself is a pristine dimensionless object, so by doing
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large &#123;\te&#123;time&#125;\over\te&#123;s&#125;&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          where “time” is a time measurements in seconds,
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
        <OuterP>
          ...is really a
          {" "}
          <NoBreak>
            “
            <Math>
              $3$
            </Math>
          </NoBreak>
          {" "} without any units”
          because the
          entire plane is dimensionless, but if we follow
          the semantics of the axis label, we find...
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large 3 = &#123;\te&#123;time&#125;\over \te&#123;s&#125;&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          ...which implies...
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large 3\te&#123;s&#125; = \te&#123;time&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          ...or “time equals {" "}
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
          {" "} the pure number!
        </OuterP>
        <OuterP class="indent-10">
          (Nb: We will not be so artful in our labeling of axes,
          preferring the usual “time {" "}
          <NoBreak>
            <Math>
              $[s]$
            </Math>
            ”
          </NoBreak>
          {" "} notation.)
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-4">
        <OuterP>
          <b>
            Function operations and signatures.
          </b>
          {" "}
          When we take the sum...
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large f + g
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          ...of two functions, the same input, when evaluating the
          sum, is fed to both functions:
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large (f + g)(x) = f(x) + g(x).
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          This means that in order for the sum to be make sense at
          all, the functions must take inputs with the same
          units; in addition, because apples should not be added
          to oranges, the two functions must output values with the
          same units as well; in other words, if {" "}
          <Math>
            $f$
          </Math>
          {" "} and {" "}
          <Math>
            $g$
          </Math>
          {" "} have
          signatures...
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large
          \begin&#123;gathered&#125;
          f : [\te&#123;A&#125;] \ra [\te&#123;B&#125;] \\
          g : [\te&#123;C&#125;] \ra [\te&#123;D&#125;] \up&#123;1.35&#125;
          \end&#123;gathered&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          ...then taking the sum...
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large f + g
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          ...implies the constraints...
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large
          \begin&#123;aligned&#125;
          \te&#123;A&#125; &amp;= \te&#123;C&#125; \\
          \te&#123;B&#125; &amp;= \te&#123;D&#125; \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          ...on the units in order for the sum to be “well-formed”, not
          nonsensical!; i.e., the most general signature under which
          a sum of {" "}
          <Math>
            $f$
          </Math>
          {" "} and {" "}
          <Math>
            $g$
          </Math>
          {" "} makes sense is...
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large
          \begin&#123;aligned&#125;
          f : [\te&#123;A&#125;] \ra [\te&#123;B&#125;]&amp; \\
          g : [\te&#123;A&#125;] \ra [\te&#123;B&#125;]&amp; \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          ...with the {" "}
          <i>
            same
          </i>
          {" "} input units, and the {" "}
          <i>
            same
          </i>
          {" "} output
          units!
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-5">
        <OuterP>
          <b>
            Notation.
          </b>
          {" "}
          We write
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large f : [\te&#123;A&#125;] \ra [\te&#123;B&#125;]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          to indicate that {" "}
          <Math>
            $f$
          </Math>
          {" "} is a function {" "}
          <Math>
            $f : \rr \ra \rr$
          </Math>
          {" "}
          that takes inputs with units A
          and produces outputs with units B. 
          For example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large h : [\te&#123;kg&#125;] \ra [^\circ\te&#123;F&#125;]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          indicates that {" "}
          <Math>
            $h$
          </Math>
          {" "} 
          is a function whose inputs denote kilograms and whose
          outputs denote degrees fahrenheit, etc.
          (These are purely “physical” concepts, not
          mathematical, but we're cool with that.)
        </OuterP>
        <Pause />
        <OuterP>
          <b>
            Vocabulary.
          </b>
          {" "} The input and output units of a function,
          when present as above, are referred to as the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          signature
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          of the function.
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-6">
        <OuterP>
          <b>
            Compatible signatures for function operations.
          </b>
          {" "} 
          Taking the sum or product of functions etc
          presupposes some “compatibility” between their
          signatures—for
        </OuterP>
      </Section>
      <Pause />
      <Section
        work="ing"
        id="section-7"
      >
        <OuterP>
          <b>
            Function operation and units.
          </b>
          {" "} Taking the sum or
          product, etc, of two functions imposes certain
          constraints on their signatures in order for the operation
          to not be physically meaningless, in ways that are
          worth being aware of. The following table shows the
          most general pattern of signature possible when taking
          the sum, product, quotient, or composition of two functions:
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large f + g
          $$
        </MathBlock>
      </Section>
      <Pause />
      <Section
        work="ing"
        id="section-8"
      >
        <OuterP>
          <b>
            The constraints imposed by function operations
            on units.
          </b>
          {" "}
          When we add two functions the
          same input shows up as an input to both functions:
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large (f + g)(x) = f(x) + g(x)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          What this means is that if units are present 
          {" "}
          <Math>
            $f$
          </Math>
          {" "} and {" "}
          <Math>
            $g$
          </Math>
          {" "} must both take the {" "}
          <i>
            same kind
          </i>
          {" "} of input, units-wise,
          in order for the function addition to
          make any sense; if we write
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large f : [\te&#123;A&#125;] \ra [\te&#123;B&#125;]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          to indicate that {" "}
          <Math>
            $f$
          </Math>
          {" "} takes inputs with units A
          and produces outputs with units B, and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large g : [\te&#123;C&#125;] \ra [\te&#123;D&#125;]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          likewise for {" "}
          <Math>
            $g$
          </Math>
          {" "} for some units C and D, then the sum
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large f + g
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          cannot/must not/should not take place unless
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \te&#123;A&#125; = \te&#123;C&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          because the same input {" "}
          <Math>
            $x$
          </Math>
          {" "} must have units A
          when it is fed to {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            ,
          </NoBreak>
          {" "} and units C when it is fed
          to {" "}
          <NoBreak>
            <Math>
              $g$
            </Math>
            !
          </NoBreak>
          {" "} In addition, we must have
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \te&#123;B&#125; = \te&#123;D&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          also in this case, by the old addage that apples should
          not be added to oranges. (Specifically, note 
          that {" "}
          <Math>
            $f(x)$
          </Math>
          {" "} has units B, that
          {" "}
          <Math>
            $g(x)$
          </Math>
          {" "} has units D, and that {" "}
          <Math>
            $f(x)$
          </Math>
          {" "} is added to {" "}
          <NoBreak>
            <Math>
              $g(x)$
            </Math>
            .)
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          By contrast,
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          apples can be multiplied by oranges
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          as testified by units such as
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          meters squared
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          or
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          kilowatt-hours
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          or
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          worker years
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          or even
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          meters per second
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          that is “meters times per seconds” (or “meters times seconds inverse {" "}
          <NoBreak>
            (
            <Math>
              $\te&#123;s&#125;^&#123;-1&#125;$
            </Math>
            )”),
          </NoBreak>
          {" "}
          so to form the product of two functions
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large fg
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          with signatures
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;gathered&#125;
          \,\Large f : [\te&#123;A&#125;] \ra [\te&#123;B&#125;], \\
          \Large g : [\te&#123;C&#125;] \ra [\te&#123;D&#125;] \up&#123;1.35&#125;
          \end&#123;gathered&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          the constraint
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \te&#123;A&#125; = \te&#123;C&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          must still be obeyed (because
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large (fg)(x) = f(x)g(x)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and {" "}
          <NoBreak>
            ‘
            <Math>
              $x$
            </Math>
            ’
          </NoBreak>
          {" "} again appears as an input to both {" "}
          <Math>
            $f$
          </Math>
          {" "} and
          {" "}
          <NoBreak>
            <Math>
              $g$
            </Math>
            ),
          </NoBreak>
          {" "} but, by  the constraint
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \te&#123;B&#125; = \te&#123;D&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          can be dropped, because any kind of unit can be
          multiplied by any other kind of unit! So in this case
          the “general form” of {" "}
          <Math>
            $f$
          </Math>
          {" "} and {" "}
          <Math>
            $g$
          </Math>
          {" "} would be
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;gathered&#125;
          \,\Large f : [\te&#123;A&#125;] \ra [\te&#123;B&#125;], \\
          \,\Large g : [\te&#123;A&#125;] \ra [\te&#123;C&#125;]\, \up&#123;1.35&#125;
          \end&#123;gathered&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for some units A, B, C, while in the case of function
          addition the “general form” would be
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;gathered&#125;
          \,\Large f : [\te&#123;A&#125;] \ra [\te&#123;B&#125;], \\
          \,\Large g : [\te&#123;A&#125;] \ra [\te&#123;B&#125;]\, \up&#123;1.35&#125;
          \end&#123;gathered&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          with only two degrees of freedom in the units, A and B.
        </OuterP>
      </Section>
      <Pause />
      <Section
        work="ing"
        id="section-9"
      >
        <OuterP>
          <b>
            The chain rule.
          </b>
          {" "} 
          Starting slow, we invite you to verify the following
          multiplication:
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          2.22 \times 10.1 = 22.422.
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          Here is a multiplication only
          of units:
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \,\left[&#123;\te&#123;m&#125;\over \te&#123;s&#125;&#125;\right]\times\left[&#123;\te&#123;\$&#125;\over \te&#123;m&#125;&#125;\right] = \left[&#123;\te&#123;\$&#125;\over \te&#123;m&#125;&#125;\right].
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          We can combine the two:
        </OuterP>
        <Boxed>
          <MathBlock>
            $$
            2.22[\te&#123;m&#125;/\te&#123;s&#125;] \times 10.1[\te&#123;\$&#125;/\te&#123;m&#125;] = 22.422[\te&#123;\$&#125;/\te&#123;s&#125;]
            $$
          </MathBlock>
        </Boxed>
        <OuterP>
          The multiplication of
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          meters per second
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <NoBreak>
            (“[m
            <Math>
              $/$
            </Math>
            s]”)
          </NoBreak>
          {" "} by
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          dollars per meter
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <NoBreak>
            (“[$
            <Math>
              $/$
            </Math>
            m]”)
          </NoBreak>
          {" "} gives
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          dollars per second
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <NoBreak>
            (“[$
            <Math>
              $/$
            </Math>
            s]”)
          </NoBreak>
          {" "} yay!
        </OuterP>
      </Section>
    </>}
  </>;
};