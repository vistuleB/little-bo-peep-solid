import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Boxed  from "~/components/Boxed";
import { CentralDisplayItalic }  from "~/components/Delimiters";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { Math, MathBlock }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { StarDivider }  from "~/components/StarDivider";
import { Example, NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter6__() {
  return (
    <Article
      prevPage="/article/chapter5"
      nextPage=""
      ref="rence"
      pageNecessaryMargin={950}
      maxElementWidth={1000}
      id="_150_hgi_"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            what is it?
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            terminology: “dimension” vs. “dimensional”
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=section-3">
            function signatures
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            dimensionless units
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-4">
          <InChapterLink href="?id=section-5">
            radians {" "}
            <i>
              &amp;
            </i>
            {" "} the dimensionless plane
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-5">
          <InChapterLink href="?id=section-6">
            function operations and signatures
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-6">
          <InChapterLink href="?id=section-7">
            differentiation
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-7">
          <InChapterLink href="?id=section-8">
            what is dimensional analysis?
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-8">
          <InChapterLink href="?id=section-9">
            dimensional analysis of the sum rule
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-9">
          <InChapterLink href="?id=section-10">
            dimensional analysis of the “early afteroon product rule”
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-10">
          <InChapterLink href="?id=section-11">
            dimensional analysis of the “late afternoon” (true) product rule
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-11">
          <InChapterLink href="?id=section-12">
            dimensional analysis and the chain rule
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 6:">
        Dimensional Analysis
      </ArticleTitle>
      <Section id="section-1">
        <OuterP>
          <b>
            What is it?
          </b>
          {" "}
          “Dimensional analysis” is the art of
          “checking the units” on an equation or formula
          for signs of malady or inconsistency. Or,
          conversely, by virtue of knowing that some
          maladies and inconsistencies must be avoided,
          of artfully guessing formulas ahead of time,
          by considering just the units!
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
      <Section
        only="this"
        id="section-2"
      >
        <OuterP>
          <b>
            Terminology: “dimension” vs. “dimensional”.
          </b>
          {" "}
          As explained in the {" "}
          <a href="/article/chapter2#_30_hgi_">
            Epilogue to Chapter 2
          </a>
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-3">
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
          We refer to the ordered pair of units
          {" "}
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
          of the function.
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-4">
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
      <Section id="section-5">
        <OuterP>
          <b>
            Radians {" "}
            <i>
              &amp;
            </i>
            {" "} the dimensionless plane.
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
      </Section>
      <Pause />
      <Section
        only="this"
        id="section-6"
      >
        <OuterP>
          <b>
            Function operations and signatures.
          </b>
          {" "} 
          Take {" "}
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
          {" "} with generic signatures {" "}
          <NoBreak>
            <Math>
              $\uA \ra \uB$
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <NoBreak>
            <Math>
              $\uC \ra \uD$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large
          \begin&#123;aligned&#125;
          f : [\te&#123;A&#125;] &amp;\ra [\te&#123;B&#125;] \\
          g : [\te&#123;C&#125;] &amp;\ra [\te&#123;D&#125;] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          If we try to form the sum
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large f + g
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          of {" "}
          <Math>
            $f$
          </Math>
          {" "} and {" "}
          <Math>
            $g$
          </Math>
          {" "} we find that the same input shows up as an
          input to both {" "}
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
          {" "} by the definition of function addition...
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large (f + g)(x) = f(x) + g(x)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          ...so taking the sum implies that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \tA = \tC
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          [a.K.a.] “units of input for {" "}
          <Math>
            $f$
          </Math>
          {" "} equals units of input for {" "}
          <NoBreak>
            <Math>
              $g$
            </Math>
            ”
          </NoBreak>
          {" "}
          or else {" "}
          <Math>
            $f + g$
          </Math>
          {" "} doesn't really make any sense;
          also,
          following the adage that oranges must not be added to apples,
          we need
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \tB = \tD
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          [a.k.a., “units of output for {" "}
          <Math>
            $f$
          </Math>
          {" "} equals units of output for {" "}
          <NoBreak>
            <Math>
              $g$
            </Math>
            ”]
          </NoBreak>
          {" "}
          or else {" "}
          <NoBreak>
            “
            <Math>
              $f(x)$
            </Math>
            ”
          </NoBreak>
          {" "} would become the proverbial orange (apple?)
          and {" "}
          <NoBreak>
            “
            <Math>
              $g(x)$
            </Math>
            ”
          </NoBreak>
          {" "} the proverbial apple (orange?); thus, altogether,
          we need
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
          in order for the sum to make physical sense,
          i.e., 
          the pair of signatures must be of the form
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
          for some units A, B;
          also note that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large f + g : \uA \ra \uB
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          in this case, i.e., 
          the signatures of {" "}
          <Math>
            $f$
          </Math>
          {" "} and {" "}
          <Math>
            $g$
          </Math>
          {" "} 
          “propagate to” or “infect” 
          (OK, we could just have said “determine”, but it's less dramatic)
          the signature of {" "}
          <NoBreak>
            <Math>
              $f + g$
            </Math>
            !
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          A little bit differently, however,
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          apples can be multiplied by oranges
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          or at least in the abstract, such as when we
          speak of “meters squared”, “meters per second”,
          “kilowatt-hours”, “worker years”, etc. This means
          that the product of two functions can be taken
          even if the output units are different. Specifically, if
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large
          \begin&#123;aligned&#125;
          f : [\te&#123;A&#125;] &amp;\ra [\te&#123;B&#125;] \\
          g : [\te&#123;A&#125;] &amp;\ra [\te&#123;C&#125;] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for arbitrary units A, B, C, then
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large fg
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is a well-formed product, and, more specifically,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large fg : \uA \ra [\text&#123;BC&#125;]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          since in the formula {" "}
          <NoBreak>
            “
            <Math>
              $(fg)(x) = f(x)g(x)$
            </Math>
            ”
          </NoBreak>
          {" "} for
          evaluating {" "}
          <Math>
            $fg$
          </Math>
          {" "} we see
          that (#1) 
          all that we need from {" "}
          <NoBreak>
            “
            <Math>
              $x$
            </Math>
            ”
          </NoBreak>
          {" "} in order to evaluate
          {" "}
          <NoBreak>
            “
            <Math>
              $f(x)g(x)$
            </Math>
            ”
          </NoBreak>
          {" "} is to have units A, and
          (#2) the units of {" "}
          <NoBreak>
            “
            <Math>
              $f(x)g(x)$
            </Math>
            ”
          </NoBreak>
          {" "} are {" "}
          <NoBreak>
            <Math>
              $\tB\cdot\tC = \tB\tC$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          As well, differences, 
          quotients, and compositions of functions...
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large f - g
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \Large f/g
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \Large f \circ g
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          ...only make sense when certain constraints on the
          signatures of {" "}
          <Math>
            $f$
          </Math>
          {" "} and {" "}
          <Math>
            $g$
          </Math>
          {" "} are presupposed, deduced by similar
          (or sometimes identical!) reasoning;  
          summarizing the situation, we have...
        </OuterP>
        <Pause />
        <OuterP>
          ...the above table, that you should be able to verify
          for yourself.
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-7">
        <OuterP>
          <b>
            Differentiation.
          </b>
          {" "}
          The
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          differentiation operator
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          that we draw as this giant flying-saucer-type obect...
        </OuterP>
        <Pause />
        <OuterP>
          ...is the function that takes functions from {" "}
          <Math>
            $\rr$
          </Math>
          {" "} to
          {" "}
          <Math>
            $\rr$
          </Math>
          {" "} as inputs and that outputs their derivatives—it is 
          a {" "}
          <Math>
            $\rt&#123;0.2&#125;$
          </Math>
          <i>
            function on functions
          </i>
          , whence also the
          “operator” terminology, as mathematicians use that term
          as a catch-all for functions whose inputs are themselves
          functions.
        </OuterP>
        <OuterP class="indent-10">
          This is one way to visualize the differentiation
          operator:
        </OuterP>
        <Pause />
        <OuterP>
          This is another (cf. top of Chapter 4):
        </OuterP>
        <Pause />
        <OuterP>
          Or, with units:
        </OuterP>
        <Pause />
        <OuterP>
          ...(those are
          apples and oranges), or the same concept...
        </OuterP>
        <Pause />
        <OuterP>
          ...using function signatures, namely, we
          are illustrating the fact that
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          differentiating divides the units of the
          output by the units of the input
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          as discussed in Chapter 4, or the fact that
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          the differentiation operator alters the
          signature by dividing the units of the output
          by the units of the input
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          ...sounds more fancy!
        </OuterP>
        <Pause />
        <OuterP>
          <i>
            On the topic of operators.
          </i>
          {" "} Hello...
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-8">
        <OuterP>
          <b>
            What is dimensional analysis?
          </b>
          {" "} Said topic of
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          dimensional analysis
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          is nothing more than “checking that the units
          work out” in an equation, i.e., that both sides
          of an equation carry the same units. It is a means of quickly catching mistakes
          but also, sometimes, of guessing a formula by virtue of knowing
          that the units must work out to such-and-such.
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-9">
        <OuterP>
          <b>
            Dimensional analysis of the sum rule.
          </b>
          {" "}
          One can check that the units check out
          (worst sentence ever) in an equation such as
        </OuterP>
        <Boxed>
          <MathBlock>
            $$
            \Large (f + g)' = f' + g'
            $$
          </MathBlock>
        </Boxed>
        <OuterP>
          for differentiable functions {" "}
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
          {" "}
          the {" "}
          <i>
            sum rule
          </i>
          . 
          {" "}
          <a
            href="/article/chapter4#_67_hgi_"
            class="handle-out-chapter-link"
          >
            (Exercise 13
          </a>
          &#8288;, {" "}
          <a
            href="/article/chapter4#_86_hgi_"
            class="handle-out-chapter-link"
          >
            Chapter 4
          </a>
          &#8288;.)
        </OuterP>
        <OuterP class="indent-10">
          First we check that
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          the same constraints 
          on the signatures of {" "}
          <Math>
            $f$
          </Math>
          {" "} and {" "}
          <Math>
            $g$
          </Math>
          {" "} are imposed
          by either side of the equation
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          and then we check that, 
          for {" "}
          <Math>
            $f$
          </Math>
          {" "} and {" "}
          <Math>
            $g$
          </Math>
          {" "} meeting those constraints, 
          the two sides of the equation come out to the
          same units.
        </OuterP>
        <OuterP class="indent-10">
          On the left-hand side,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large f + g
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          imposes signatures of the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large
          \begin&#123;aligned&#125;
          f : [\te&#123;A&#125;] &amp;\ra [\te&#123;B&#125;] \\
          g : [\te&#123;A&#125;] &amp;\ra [\te&#123;B&#125;] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          as listed in Table 1.1,
          while the subsequent taking of a derivative doesn't
          impose any new constraints (you can take a
          derivative no matter the signature), 
          so we find that
          {" "}
          <Math>
            $f$
          </Math>
          {" "} and {" "}
          <Math>
            $g$
          </Math>
          {" "} must have the same input and output
          units, as the sole constraints coming from the left-hand
          side.
        </OuterP>
        <OuterP class="indent-10">
          To analyze 
          the right-hand side,
          start by adopting the agnostic viewpoint that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large
          \begin&#123;aligned&#125;
          f : [\te&#123;A&#125;] &amp;\ra [\te&#123;B&#125;] \\
          g : [\te&#123;C&#125;] &amp;\ra [\te&#123;D&#125;] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for some arbitrary units A, B, C, D; then
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large
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
          \Large f' + g'
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          implies
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large
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
          \Large
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
          exist in the left-hand side, i.e., that the input units
          of {" "}
          <Math>
            $f$
          </Math>
          {" "} equal the input units of {" "}
          <NoBreak>
            <Math>
              $g$
            </Math>
            ,
          </NoBreak>
          {" "} etc!
        </OuterP>
        <OuterP class="indent-10">
          To continue with our program, assume now that {" "}
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
          \Large
          \begin&#123;aligned&#125;
          f : [\te&#123;A&#125;] &amp;\ra [\te&#123;B&#125;] \\
          g : [\te&#123;A&#125;] &amp;\ra [\te&#123;B&#125;] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          as “required” by either side of the sum rule; then
          we deduce, one by one in order, that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large
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
          by the usual rules according to which
          signatures respond to sums and derivatives,
          but in particular
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large (f + g)'
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is found to have the same signature as
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large f' + g'
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          which means that {" "}
          <i>
            the sum rule just possibly
            could be correct
          </i>
          —specifically, our
          “dimensional x-ray” of the sum rule fails 
          to uncover anything untoward!
        </OuterP>
        <Pause />
        <Example id="_148_hgi_">
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
            \Large x_1, x_2 : \rr \ra \rr
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            are two differentiable functions that give 
            position-as-a-function-of-time-where-time-is-in-seconds-and-position-is-in-meters,
            i.e., two differentiable functions such that
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large x_1,\rt&#123;0.2&#125; x_2 : [\te&#123;s&#125;] \ra [\te&#123;m&#125;]
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
            \Large
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
            and, in this case, the sum rule
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large (x_1 + x_2)' = x_1' + x_2'
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            could be verbalized by saying that
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
            since in the case the “rate of change” is a velocity, etc.
          </OuterP>
        </Example>
        <Pause />
        <Example>
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
            \Large x_1, x_2 : \rr \ra \rr
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            are given by
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large x_1(t) = |t| = -x_2(t)
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
            \Large x_2(t) = -|t|
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
            \Large (x_1 + x_2)'
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
            \Large x_1' + x_2'
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            is not. You can best see this 
            directly from the graphs:
          </OuterP>
          <Pause />
          <OuterP>
            Thus
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large (x_1 + x_2)' \ne x_1' + x_2'
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
      </Section>
      <Pause />
      <Section id="section-10">
        <OuterP>
          <b>
            Dimensional analysis of the “early afteroon product rule”.
          </b>
          {" "}
          Gottfried Liebniz, co-inventor of calculus,
          initially guessed that
        </OuterP>
        <Boxed>
          <MathBlock>
            $$
            \Large(fg)' = f'g'
            $$
          </MathBlock>
        </Boxed>
        <OuterP>
          for differentiable functions {" "}
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
          {" "} an equation that
          is dubbed “the early afternoon product rule” since
          Leibniz 
          made and rectified his mistake in the span
          of one day,
          as known from his notes.
        </OuterP>
        <OuterP class="indent-10">
          On the left-hand side,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large fg
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
          {" "} to have signatures of the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large
          \begin&#123;aligned&#125;
          f : [\te&#123;A&#125;] &amp;\ra [\te&#123;B&#125;] \\
          g : [\te&#123;A&#125;] &amp;\ra [\te&#123;C&#125;] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for some units A, B, C, which is also 
          the most general type of signature that is compatible with the right-hand side—so far so good!
        </OuterP>
        <OuterP class="indent-10">
          However,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large (fg)' : [\tA] \ra [\tB\tC/\tA]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          whereas
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large f'g' : [\tA] \ra [\tB\tC/\tA^2]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          as is easy to check, and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large [\tA] \ra [\tB\tC/\tA^2] \ne [\tA] \ra [\tB\tC/\tA]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          so “the early afternoon product rule” is most definitely junk, as
          “the units don't work out”, or “it has the wrong
          dimensionality”. (I.e., the signature of {" "}
          <Math>
            $f'g'$
          </Math>
          {" "} doesn't
          match the signature of {" "}
          <NoBreak>
            <Math>
              $(fg)'$
            </Math>
            .)
          </NoBreak>
          {" "} This is one example of
          how
          dimensional analysis can be used to quickly
          rule out a misbegotten conjecture!
        </OuterP>
        <Pause />
        <Example id="_149_hgi_">
          <OuterP>
            <b>
              Example 3.
            </b>
            {" "}
            As in {" "}
            <InChapterLink
              href="/article/chapter6#_148_hgi_"
              class="handle-in-chapter-link"
            >
              Example 1
            </InChapterLink>
            &#8288;, 
            let
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large x_1,\rt&#123;0.1&#125; x_2 : \rr \ra \rr
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            have signature
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \,\Large x_1,\rt&#123;0.1&#125; x_2 : [\te&#123;s&#125;] \ra [\te&#123;m&#125;]
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
            \Large x_1x_2 : [\te&#123;s&#125;] \ra [\te&#123;m&#125;^2]
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            gives meters-squared-as-a-function-of-time-in-seconds,
            and
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large (x_1x_2)' : [\te&#123;s&#125;] \ra [\te&#123;m&#125;^2/\te&#123;s&#125;]
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            is a
          </OuterP>
          <Pause />
          <CentralDisplayItalic>
            rate of change of area [as a function of time]
          </CentralDisplayItalic>
          <Pause />
          <OuterP>
            or
          </OuterP>
          <Pause />
          <CentralDisplayItalic>
            function from seconds to meters squared per second
          </CentralDisplayItalic>
          <Pause />
          <OuterP>
            more exactly (where {" "}
            <i>
              meters squared per second
            </i>
            {" "} are not to be confused with {" "}
            <i>
              meters per seconds squared
            </i>
            ,
            that is acceleration!!), 
            whereas
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large x_1'x_2' : [\te&#123;s&#125;] \ra [\te&#123;m&#125;^2/\te&#123;s&#125;^2]
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            has the dimensions of a
          </OuterP>
          <Pause />
          <CentralDisplayItalic>
            product of velocities
          </CentralDisplayItalic>
          <Pause />
          <OuterP>
            (which it is: {" "}
            <Math>
              $x_1'$
            </Math>
            {" "} is a velocity,
            and {" "}
            <Math>
              $x_2'$
            </Math>
            {" "} is a velocity), or of
          </OuterP>
          <Pause />
          <CentralDisplayItalic>
            the rate of change of a rate of
            change in area
          </CentralDisplayItalic>
          <Pause />
          <OuterP>
            (which it is not), or of
          </OuterP>
          <Pause />
          <CentralDisplayItalic>
            a length times an acceleration
          </CentralDisplayItalic>
          <Pause />
          <OuterP>
            (which it is not), but which
            concretely demonstrates
            the difference between the signatures of {" "}
            <Math>
              $(fg)'$
            </Math>
            {" "} and of {" "}
            <NoBreak>
              <Math>
                $f'g'$
              </Math>
              ,
            </NoBreak>
            {" "} in
            general.
          </OuterP>
          <Pause />
          <StarDivider />
          <Pause />
          <OuterP>
            It might be observed that
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large x_1'x_2'
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            has the same dimensions (signature) as
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large (x_1x_2)''
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            in {" "}
            <InChapterLink
              href="/article/chapter6#_149_hgi_"
              class="handle-in-chapter-link"
            >
              Example 3
            </InChapterLink>
            &#8288;—one might conjecture that
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large (x_1x_2)'' = x_1'x_2'
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            from this observation, and one would be wrong—which is to
            show that dimensional analysis is quick to debunk an incorrect
            equation but, in the contravening case, 
            cannot be trusted as a proof!—however,
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large x_1'x_2'
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            <i>
              does show up as a term
            </i>
            {" "} in the “true” formula for {" "}
            <NoBreak>
              <Math>
                $(x_1x_2)''$
              </Math>
              ,
            </NoBreak>
            {" "}
            so,
            in some sense,
            dimensional analysis is not entirely wrong,
            even in this case!
          </OuterP>
          <Pause />
          <StarDivider />
        </Example>
      </Section>
      <Pause />
      <Section id="section-11">
        <OuterP>
          <b>
            Dimensional analysis of the “late afternoon” (true) product rule.
          </b>
          {" "}
          The real product rule, valid for differentiable functions {" "}
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
          {" "} is
        </OuterP>
        <Boxed>
          <MathBlock>
            $$
            \Large (fg)' = f'g + fg'
            $$
          </MathBlock>
        </Boxed>
        <OuterP>
          as covered in {" "}
          <a
            href="/article/chapter4#_74_hgi_"
            class="handle-out-chapter-link"
          >
            Exercise 19 of Chapter 4
          </a>
          &#8288;.
          To start the dimensional analysis, we can
          easily see that both sides of the equation
          have sound units
          if and only if 
          {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $g$
          </Math>
          {" "} have signatures
          of the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large
          \begin&#123;aligned&#125;
          f : [\te&#123;A&#125;] &amp;\ra [\te&#123;B&#125;] \\
          g : [\te&#123;A&#125;] &amp;\ra [\te&#123;C&#125;] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          in which case
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large (fg)' : [\tA] \ra [\tB\tC/\tA]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          while
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large
          \begin&#123;gathered&#125;
          f'g :  [\te&#123;A&#125;] \ra [\tB\tC/\tA] \\
          fg' :  [\te&#123;A&#125;] \ra [\tB\tC/\tA] \up&#123;1.35&#125;
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
          \Large f'g + fg' :  [\te&#123;A&#125;] \ra [\tB\tC/\tA] \up&#123;1.35&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          so {" "}
          <Math>
            $f'g + fg'$
          </Math>
          {" "} has the
          same signature as {" "}
          <NoBreak>
            <Math>
              $(fg)'$
            </Math>
            ,
          </NoBreak>
          {" "} i.e., dimensional
          analysis gives its {" "}
          <i>
            imprimatur
          </i>
          {" "} to this formula!
          (Which is, indeed, the correct one.)
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-12">
        <OuterP>
          <b>
            Dimensional analysis and the chain rule.
          </b>
          {" "}
          Being bold, we can try to use dimensional
          analysis to guess a formula for
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large (f \circ g)'
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          where {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $g$
          </Math>
          {" "} are differentiable functions.
        </OuterP>
        <OuterP class="indent-10">
          To be clear, such a formula should use only the
          “atomic components”
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large f,\,g,\,f',\,g'
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          on its right-hand side. These are the “lego pieces”
          from which we seek to reconstitute {" "}
          <NoBreak>
            <Math>
              $(f \circ g)'$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          (Actually, this is kind of fun to do on one's own,
          so we leave some vertical space as a “spoiler alert”, for
          those who would wish to try.)
        </OuterP>
        <Pause />
        <OuterP>
          Starting off,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large (f\circ g)'
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
          \Large
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
          \Large
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
        <OuterP>
          From these pieces we seek to assemble a function
          of signature
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large [\tA] \ra [\tC/\tA]
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
          \Large [\tC/\tA] = [\tC/\tB]\cdot[\tB/\tA]
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
          \Large (f'\circ g)g'
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          which makes sense since on the one hand
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large (f'\circ g)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is a well-formed composition of signature
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large [\tA] \ra [\tC/\tB]
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
          \Large [\tA] \ra [\tB/\tA]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          so that the product of the two has signature
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large [\tA] \ra [\tC/\tA]
          $$
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
            \Large (f \circ g)' = (f'\circ g)g'
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
              Example 4.
            </b>
            {" "}
            Say that a
          </OuterP>
          <Pause />
          <Image src="/tmp-images/c6_solo_RAT.svg" />
          <Pause />
          <OuterP>
            is running a fundraising race where one function
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large f : \rr \ra \rr
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            gives money-raised-in-dollars-as-a-function-of-position-reached-in-meters,
            whereas another function
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large g : \rr \ra \rr
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            gives position-reached-in-meters-as-function-of-time-elapsed-in-seconds,
            referring 
            to the time elapsed since
            the start of the race.
            Then
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large
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
            \Large f\circ g : [\te&#123;s&#125;] \ra [\te&#123;\$&#125;]
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            gives money-raised-dollars-as-a-function-of-time-elapsed-in-seconds.
            Perforce,
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large (f\circ g)': [\te&#123;s&#125;] \ra [\te&#123;\$&#125;/\te&#123;s&#125;]
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            gives the fundraising-rate-in-dollars-per-second-as-a-function-of-time-elapsed-in-seconds.
          </OuterP>
          <OuterP class="indent-10">
            Also note that
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large f' : [\te&#123;m&#125;] \ra [\te&#123;\$&#125;/\te&#123;m&#125;]
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            gives the
            fundraising-rate-in-dollars-per-meters-as-a-function-of-position-in-meters.
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
            \Large f'(g(t_0))
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
            \Large 
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
            {" "} Per:
          </OuterP>
          <Pause />
          <OuterP>
            Also since
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large f'(g(t_0)) = (f'\circ g)(t_0)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            we can write the same equation as
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large (f \circ g)'(t_0) = (f'\circ g)(t_0)g'(t_0)
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
              \Large (f \circ g)' = (f'\circ g)g'
              $$
            </MathBlock>
          </Boxed>
          <OuterP>
            which is indeed the chain rule as we have encountered
            it before. But to recapitulate this example we have
            three different units, and three rates of change:
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large \left[&#123;\te&#123;\$&#125;\over \te&#123;s&#125;&#125;\right]\qquad\left[&#123;\te&#123;\$&#125;\over \te&#123;m&#125;&#125;\right]\qquad\left[&#123;\te&#123;m&#125;\over \te&#123;s&#125;&#125;\right]
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            ...and we can obtain the former rate of change by multiplying
            together the latter two rates of change, we just have to
            be careful to evaluate {" "}
            <Math>
              $f'$
            </Math>
            {" "} at the right “place”—we don't
            want to feed an amount of seconds into {" "}
            <Math>
              $f'$
            </Math>
            {" "} when it is
            expecting an amount of meters!
          </OuterP>
          <Pause />
          <StarDivider />
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
              \Large (f \circ g)'(x) = f'(g(x))g'(x)
              $$
            </MathBlock>
          </Boxed>
          <OuterP>
            which is the previous boxed equation evaluated at an input
            {" "}
            <NoBreak>
              <Math>
                $x$
              </Math>
              ,
            </NoBreak>
            {" "} while using {" "}
            <NoBreak>
              <Math>
                $(f' \circ g)(x) = f'(g(x))$
              </Math>
              .
            </NoBreak>
          </OuterP>
        </Example>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 5.
            </b>
            {" "}
            By {" "}
            <InChapterLink href="#section-12">
              the chain rule
            </InChapterLink>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (\sin \circ \sin)' = (\cos \circ \sin)\cos
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            since {" "}
            <NoBreak>
              <Math>
                $\sin' = \cos$
              </Math>
              ,
            </NoBreak>
            {" "} or
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (\sin \circ \sin)'(x) = (\cos \circ \sin)(x)\cos(x)
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
            {" "} an equation that can also be written
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (\sin \circ \sin)'(x) = \cos(\sin(x))\cos(x)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            matching the form of the boxed equation above—to be quite 
            specific, 
            e.g.,
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (\sin \circ \sin)'(12.2)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            which is the slope of
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            y = \sin(\sin(x))
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            at {" "}
            <Math>
              $x = 12.2$
            </Math>
            {" "} is
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \cos(\sin(12.2))\cos(12.2) = 0.874365...
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            as a graph of {" "}
            <Math>
              $\sin(\sin(x))$
            </Math>
            {" "} will sorta-kinda attest:
          </OuterP>
          <OuterP class="indent-10">
            (Because
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            -1 \leq \sin(x) \leq 1
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            the values of {" "}
            <Math>
              $\sin(\sin(x))$
            </Math>
            {" "} are stuck between
            sine of {" "}
            <Math>
              $-1$
            </Math>
            {" "} radian at the low end and sine of {" "}
            <Math>
              $+1$
            </Math>
            {" "} radian
            at the high end, which produces the graph above.)
          </OuterP>
        </Example>
      </Section>
    </>}
  </>;
};