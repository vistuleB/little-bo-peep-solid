import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Boxed  from "~/components/Boxed";
import { CodexSuggestion }  from "~/components/CodexSuggestions";
import { CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { MathBlock, Math }  from "~/components/Math";
import MathJaxSvgExportTooltip  from "~/components/MathJaxSvgExportTooltip";
import OutChapterLink  from "~/components/OutChapterLink";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
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
      id="_147_h.a.i_"
      path="/article/chapter8"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            <span class="t-3003-c">
              the topic
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:2:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            <span class="t-3003-c">
              notation: function signatures
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:22:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=section-3">
            <span class="t-3003-c">
              dimensionless units
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:54:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            <span class="t-3003-c">
              restrictions imposed on signatures by function
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:109:6
              </span>
            </span>
            {" "}
            {" "}
            operations
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-4">
          <InChapterLink href="?id=section-5">
            <span class="t-3003-c">
              the unary function operations
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:200:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-5">
          <InChapterLink href="?id=section-6">
            <span class="t-3003-c">
              differentiation
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:227:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-6">
          <InChapterLink href="?id=section-7">
            <span class="t-3003-c">
              operators
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:260:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-7">
          <InChapterLink href="?id=section-8">
            <span class="t-3003-c">
              the sum rule
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:305:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-8">
          <InChapterLink href="?id=section-9">
            <span class="t-3003-c">
              the “early afteroon product rule”
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:614:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-9">
          <InChapterLink href="?id=section-10">
            <span class="t-3003-c">
              the chain rule
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:776:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-10">
          <InChapterLink href="?id=section-11">
            <span class="t-3003-c">
              epilogue: the dimensionless plane
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:945:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-11">
          <InChapterLink href="?id=exercises">
            <span class="t-3003-c">
              exercises
              <span class="t-3003">
                ./src/content/ch6/ch6^exercises/__parent.wly:1:1
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 8:">
        <span class="t-3003-c">
          Dimensional Analysis
          <span class="t-3003">
            ./src/content/ch6/__parent.wly:2:11
          </span>
        </span>
      </ArticleTitle>
      <Section id="section-1">
        <OuterP>
          <b>
            <span class="t-3003-c">
              The topic.
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:2:6
              </span>
            </span>
          </b>
          {" "}
          A
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            dimension
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:5:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a category of units such as “time”, as
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:7:5
            </span>
          </span>
          {" "}
          {" "}
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
          <span class="t-3003-c">
            dimensional analysis
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:12:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is that of analyzing the units within a mathematical {" "}
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:14:5
            </span>
          </span>
          {" "}
          {" "}
          expression to uncover contradictions (pointing
          to upstream errors) and/or conversely to offer
          validation.
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-2">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Notation: function signatures.
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:22:6
              </span>
            </span>
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
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            to indicate that {" "}
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:31:5
            </span>
          </span>
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
          <span class="t-3003-c">
            signature
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:35:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            of {" "}
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:37:5
            </span>
          </span>
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
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              If
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:42:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            z : [\lbs] \ra [\pounds]
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              then its inputs denote pounds, the measure of weight,
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:48:9
              </span>
            </span>
            {" "}
            {" "}
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
            <span class="t-3003-c">
              Dimensionless units.
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:54:6
              </span>
            </span>
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
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            takes a ratio of arc length to radius—the radian—and returns
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:62:5
            </span>
          </span>
          {" "}
          {" "}
          a ratio of adjacent length to hypotenuse*. Both are “length over length”.
          The outputs of sin, tan, etc., are dimensionless for the same reason.
          <ImageLeft
            src="/build-img/svgo-svg/aIgf.svg"
            local_url="./images/c6_radian_dimensionless_ratio_cloud_v2.svg"
            intrinsicWidth={600}
            intrinsicHeight={500}
          />
        </OuterP>
        <Pause />
        <OuterP>
          <i>
            <span class="t-3003-c">
              *Note.
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:71:6
              </span>
            </span>
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
            <span class="t-3003-c">
              **Second Note.
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:81:6
              </span>
            </span>
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
          local_url="./images/c6_true_counterclockwiseness_1.svg"
          intrinsicWidth={400}
          intrinsicHeight={275}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            What we mean is that if it was our custom to draw the
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:89:5
            </span>
          </span>
          {" "}
          {" "}
          {" "}{" "}
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
          local_url="./images/c6_true_counterclockwiseness_2.svg"
          intrinsicWidth={400}
          intrinsicHeight={275}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (This actually happens inside of SVG, the
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:97:5
            </span>
          </span>
          {" "}
          {" "}
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
            local_url="./images/c6_SVG_cloud.svg"
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
            <span class="t-3003-c">
              Restrictions imposed on signatures by function
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:109:6
              </span>
            </span>
            {" "}
            {" "}
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
          local_url="./images/c6_equal_inputs_v2.svg"
          intrinsicWidth={300}
          intrinsicHeight={50}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            For the sum to make sense, {" "}
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:122:5
            </span>
          </span>
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
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            We cannot add apples to oranges at the output end, either.
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:132:5
            </span>
          </span>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            By contrast, when multiplying two functions we can
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:134:5
            </span>
          </span>
          {" "}
          {" "}
          stomach the output units to be different since
          composite units such as “kilowatt-hour”, “worker-years”, etc,
          exist, and likewise when dividing. 
          The table gives the required component signatures and the
          resultant signature for each of the five main function operations:
        </OuterP>
        <Pause />
        <Image
          src="/tmp-images/c6_flowers_here_bob_v2.svg"
          id="_117_h.a.i_"
          local_url="./public/tmp-images/c6_flowers_here_bob_v2.svg"
          intrinsicWidth={700}
          intrinsicHeight={883}
        />
        <CodexSuggestion>
          <Example id="_118_h.a.i_">
            <OuterP>
              <b>
                Example 2.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                If
                <span class="t-3003">
                  ./src/content/ch6/ch6.wly:150:13
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;aligned&#125;
              p &amp;: [\te&#123;days&#125;] \ra [\te&#123;dollars&#125;/\te&#123;kg&#125;] \\
              m &amp;: [\te&#123;days&#125;] \ra [\te&#123;kg&#125;]\up&#123;1.35&#125;
              \end&#123;aligned&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                then
                <span class="t-3003">
                  ./src/content/ch6/ch6.wly:159:13
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              pm : [\te&#123;days&#125;] \ra [(\te&#123;dollars&#125;/\te&#123;kg&#125;)\te&#123;kg&#125; = \te&#123;dollars&#125;]
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                using {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6.wly:165:13
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\A = \te&#123;days&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $\B = \te&#123;dollars&#125;/\te&#123;kg&#125;$
                </Math>
                ,
              </NoBreak>
              {" "}
              {" "}
              <Math>
                $\C = \te&#123;kg&#125;$
              </Math>
              {" "} in the “multiplication” cell of Table {" "}
              <InChapterLink
                href="#_117_h.a.i_"
                class="in-chapter-link"
              >
                Table 1.1
              </InChapterLink>
              &#8288;.
            </OuterP>
          </Example>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <span class="t-3003-c">
              Note that {" "}
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:170:9
              </span>
            </span>
            <InChapterLink
              href="#_118_h.a.i_"
              class="in-chapter-link"
            >
              Example 2
            </InChapterLink>
            <span class="t-3003-c">
              {" "} reflects a physical reality: if
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:170:9
              </span>
            </span>
          </p>
          <Pause />
          <MathBlock>
            $$
            p(t)
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <p>
            <span class="t-3003-c">
              is the dollar-per-kilogram price of apples on day {" "}
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:176:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $t$
              </Math>
              <span class="t-3003-c">
                ,
                <span class="t-3003">
                  ./src/content/ch6/ch6.wly:176:62
                </span>
              </span>
            </NoBreak>
            <span class="t-3003-c">
              {" "} and
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:176:62
              </span>
            </span>
          </p>
          <Pause />
          <MathBlock>
            $$
            m(t)
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <p>
            <span class="t-3003-c">
              is the number of kilograms of apples to buy on that day, then
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:182:9
              </span>
            </span>
          </p>
          <Pause />
          <MathBlock>
            $$
            pm = (t \ra p(t)m(t))
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <p>
            <span class="t-3003-c">
              becomes the day-to-total-dollars-spent-on-apples-on-that-day function,
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:188:9
              </span>
            </span>
            {" "}
            {" "}
            i.e., a function from “day” to “dollars”.
          </p>
        </CodexSuggestion>
        <Pause />
        <StarDivider style="margin-top:-0.3em" />
      </Section>
    </>}
    {visibleRestSections() > 2 && <>
      <Pause />
      <Section id="section-5">
        <OuterP>
          <b>
            <span class="t-3003-c">
              The unary function operations.
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:200:6
              </span>
            </span>
          </b>
          {" "}
          We will add two more not-yet-much-discussed
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            unary
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:203:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            function operations to our list of officially
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:205:5
            </span>
          </span>
          {" "}
          {" "}
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
          {" "} respectively—note that
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
          id="_119_h.a.i_"
          local_url="./public/tmp-images/c6_flowers_here_two_more_v3.svg"
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
            <span class="t-3003-c">
              Differentiation.
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:227:6
              </span>
            </span>
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
            href="/article/chapter4#_64_h.a.i_"
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
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            if and only if
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:236:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f' : [\tA] \ra [\tB/\tA]
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for any units A, B.
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:240:5
            </span>
          </span>
          {" "}
          {" "}
          Conversely, multiply the derivative's output units by its
          input units to recover the original output units.
        </OuterP>
        <CodexSuggestion>
          <Example id="_120_h.a.i_">
            <OuterP>
              <b>
                Example 3.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                If {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6.wly:249:13
                </span>
              </span>
              <Math>
                $x : [\s] \ra [\m]$
              </Math>
              {" "} is differentiable, then
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x' : [\s] \ra [\m/\s].
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                If {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6.wly:255:13
                </span>
              </span>
              <Math>
                $x(t)$
              </Math>
              {" "} is a particle's position in meters at time {" "}
              <Math>
                $t$
              </Math>
              {" "}
              in seconds, then {" "}
              <Math>
                $x'(t)$
              </Math>
              {" "} is its velocity in meters per second
              at that time.
            </OuterP>
          </Example>
        </CodexSuggestion>
      </Section>
    </>}
    {visibleRestSections() > 4 && <>
      <Pause />
      <Section id="section-7">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Operators.
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:260:6
              </span>
            </span>
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
          <span class="t-3003-c">
            operator
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:267:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            to denote a function that takes other functions as inputs,
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:269:5
            </span>
          </span>
          {" "}
          {" "}
          we therefore speak of the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            differentiation operator
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:272:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            depicted here as an eye-of-Godzilla flying saucer:
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:274:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/Pl1U.svg"
          local_url="./images/c6_differentiation_operator_intro_v2.svg"
          intrinsicWidth={520}
          intrinsicHeight={220}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            The unary operations in {" "}
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:279:5
            </span>
          </span>
          <InChapterLink
            class="in-chapter-link"
            href="#_119_h.a.i_"
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
          local_url="./images/c6_addition_operator_standalone_v2.svg"
          intrinsicWidth={600}
          intrinsicHeight={235}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            The two inputs to this operator are the functions {" "}
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:287:5
            </span>
          </span>
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
          <span class="t-3003-c">
            Operators that take two inputs are called
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:291:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            binary
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:293:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            operators, as with the operations in Table 1.1.
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:295:5
            </span>
          </span>
          {" "}
          {" "}
          This figure summarizes how the operators act on signatures:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/VuM1.svg"
          local_url="./images/c6_operators_acting_on_signatures_v2.svg"
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
            <span class="t-3003-c">
              The sum rule.
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:305:6
              </span>
            </span>
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
            <MathJaxSvgExportTooltip />
          </MathBlock>
        </Boxed>
        <OuterP>
          <span class="t-3003-c">
            for all differentiable functions {" "}
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:313:5
            </span>
          </span>
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
          <span class="t-3003-c">
            To “check the units”, both sides must impose the same signature
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:353:5
            </span>
          </span>
          {" "}
          {" "}
          constraints and yield the same final signature.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            On the left-hand side,
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:356:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f + g
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            imposes signatures of the form
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:362:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;aligned&#125;
          f : [\A] &amp;\ra [\B] \\
          g : [\A] &amp;\ra [\B] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            as listed in {" "}
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:371:5
            </span>
          </span>
          <InChapterLink
            href="#_117_h.a.i_"
            class="in-chapter-link"
          >
            Table 1.1
          </InChapterLink>
          &#8288;,
          while the subsequent taking of a derivative doesn't
          impose any new constraints.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            On the right-hand side,
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:407:5
            </span>
          </span>
          {" "}
          {" "}
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
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for some arbitrary units {" "}
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:417:5
            </span>
          </span>
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
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and the fact that we are taking the sum
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:426:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f' + g'
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            implies
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:432:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \A\,\,\, = \,\,\,\C
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:437:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \left[&#123;\B\over\A&#125;\right]\! =\! \left[&#123;\D\over\C&#125;\right]
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            by Table 1.1 again, which, together, imply
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:445:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;aligned&#125;
          \,\A &amp;= \C, \\
          \B &amp;= \D \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...and we recover the same constraints on {" "}
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:454:5
            </span>
          </span>
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
          <span class="t-3003-c">
            Assuming now that {" "}
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:507:5
            </span>
          </span>
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
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            as required by either side of the equation, we have
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:517:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;aligned&#125;
          (f + g)' &amp;: [\A] \ra [\tB/\tA] \\
          f' + g' &amp;: [\A] \ra [\tB/\tA] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            For the second line, {" "}
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:526:5
            </span>
          </span>
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
          {" "} and adding them preserves that signature.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            So the sum rule “checks out” insofar
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:529:5
            </span>
          </span>
          {" "}
          {" "}
          as units are concerned: nothing untoward has been found!
        </OuterP>
        <Pause />
        <Example id="_121_h.a.i_">
          <OuterP>
            <b>
              Example 4.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              Let {" "}
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:535:9
              </span>
            </span>
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
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              Here the sum rule says that
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:546:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <CentralDisplayItalic>
            <span class="t-3003-c">
              the velocity of a sum of two points
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:548:11
              </span>
            </span>
            {" "}
            {" "}
            is the sum of their velocities
          </CentralDisplayItalic>
        </Example>
        <Pause />
        <Example id="_122_h.a.i_">
          <OuterP>
            <b>
              Example 5.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              If
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:554:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            x_1, x_2 : \rr \ra \rr
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              are given by
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:560:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            x_1(t) = |t| = -x_2(t)
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              for all {" "}
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:566:9
              </span>
            </span>
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
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              in the case of {" "}
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:572:9
              </span>
            </span>
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
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              is defined
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:572:52
              </span>
            </span>
            {" "}
            {" "}
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
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              is not. One can best see this {" "}
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:573:39
              </span>
            </span>
            {" "}
            {" "}
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
            local_url="./images/c6_all_those_x1x2_graphs.svg"
            intrinsicWidth={442}
            intrinsicHeight={945}
          />
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              Thus
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:580:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x_1 + x_2)' \ne x_1' + x_2'
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              but the “reason”, precisely, is that {" "}
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:586:9
              </span>
            </span>
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
            <span class="t-3003-c">
              Postscript.
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:596:6
              </span>
            </span>
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
        <Boxed id="_123_h.a.i_">
          <MathBlock>
            $$
            (f + g)'(x_0) = f'(x_0) + g'(x_0)
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
        </Boxed>
        <OuterP>
          <span class="t-3003-c">
            at all points {" "}
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:606:5
            </span>
          </span>
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
            <span class="t-3003-c">
              The “early afteroon product rule”.
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:614:6
              </span>
            </span>
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
            <MathJaxSvgExportTooltip />
          </MathBlock>
        </Boxed>
        <OuterP>
          <span class="t-3003-c">
            which is incorrect, though Leibniz also had the
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:624:5
            </span>
          </span>
          {" "}
          {" "}
          distinction of making and correcting this
          guess 
          in the span 
          of a single day,
          as we know from his notes,
          whence this equation's moniker.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            Both sides require the same input units for {" "}
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:633:5
            </span>
          </span>
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
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            So far so good! But
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:642:5
            </span>
          </span>
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
            local_url="./images/c6_fg_prime_signature_cloud_v2.svg"
            intrinsicWidth={400}
            intrinsicHeight={300}
          />
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            whereas
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:651:5
            </span>
          </span>
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
            local_url="./images/c6_f_prime_g_prime_signature_cloud_v2.svg"
            intrinsicWidth={450}
            intrinsicHeight={300}
          />
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            The rule cannot be correct: the two sides produce different
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:660:5
            </span>
          </span>
          {" "}
          {" "}
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
        <Example id="_124_h.a.i_">
          <OuterP>
            <b>
              Example 6.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              With {" "}
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:666:9
              </span>
            </span>
            <Math>
              $x_1, x_2 : [\te&#123;s&#125;] \ra [\te&#123;m&#125;]$
            </Math>
            {" "} as in
            {" "}
            <InChapterLink
              href="#_121_h.a.i_"
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
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              whereas
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:673:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            x_1'x_2' : [\te&#123;s&#125;] \ra [\te&#123;m&#125;^2/\te&#123;s&#125;^2]
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              so there is no way these two quantities could
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:679:9
              </span>
            </span>
            {" "}
            {" "}
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
              local_url="./images/c6_x1x2_3600_cloud.svg"
              intrinsicWidth={800}
              intrinsicHeight={550}
            />
          </OuterP>
          <Pause />
          <OuterP>
            <i>
              <span class="t-3003-c">
                Note on {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6.wly:698:10
                </span>
              </span>
              <InChapterLink
                href="#_124_h.a.i_"
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
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              is still wrong. Dimensional analysis can debunk an equation;
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:705:9
              </span>
            </span>
            {" "}
            {" "}
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
            <span class="t-3003-c">
              The chain rule.
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:776:6
              </span>
            </span>
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
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Our target is {" "}
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:792:5
            </span>
          </span>
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
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            we might multiply {" "}
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:799:5
            </span>
          </span>
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
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            The signatures are
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:806:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;aligned&#125;
          f'\circ g &amp;: [\tA] \ra [\tC/\tB] \\
          g' &amp;: [\tA] \ra [\tB/\tA] \up&#123;1.35&#125;
          \end&#123;aligned&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Both accept A, and their output units multiply to {" "}
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:815:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $\tC/\tA$
            </Math>
            .
          </NoBreak>
          <ImageRight
            src="/build-img/svgo-svg/zysM.svg"
            offsetX="0em"
            local_url="./images/c6_chain_rule_units_cloud.svg"
            intrinsicWidth={500}
            intrinsicHeight={300}
          />
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            It turns out that this is the correct formula:
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:821:5
            </span>
          </span>
        </OuterP>
        <Boxed>
          <MathBlock>
            $$
            (f \circ g)' = (f'\circ g)g'
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
        </Boxed>
        <OuterP>
          <span class="t-3003-c">
            ...for all differentiable functions {" "}
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:828:5
            </span>
          </span>
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
              Example 7.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              Say that a cute
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:832:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <Image
            src="/build-img/svgo-svg/kL1E.svg"
            local_url="./images/c6_solo_RAT.svg"
            intrinsicWidth={180}
            intrinsicHeight="164.25"
          />
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              is running a fundraising race. Let {" "}
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:837:9
              </span>
            </span>
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
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              At {" "}
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:848:9
              </span>
            </span>
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
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <Image
            width="530px"
            src="/build-img/svgo-svg/un6E.svg"
            local_url="./images/c6_explained_rat_equation.svg"
            intrinsicWidth={680}
            intrinsicHeight={145}
          />
          <Pause />
          <OuterP>
            <i>
              <span class="t-3003-c">
                Note.
                <span class="t-3003">
                  ./src/content/ch6/ch6.wly:862:10
                </span>
              </span>
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
              href="#_123_h.a.i_"
            >
              postscript
            </InChapterLink>
            {" "} following {" "}
            <InChapterLink
              href="#_122_h.a.i_"
              class="in-chapter-link"
            >
              Example 5
            </InChapterLink>
            &#8288;,
            relative to the sum rule.
          </OuterP>
        </Example>
        <Pause />
        <Example id="_125_h.a.i_">
          <OuterP>
            <b>
              Example 8.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              We have
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:880:9
              </span>
            </span>
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
              local_url="./images/c6_chain_rule_reminder_cloud.svg"
              intrinsicWidth={400}
              intrinsicHeight={300}
            />
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              by {" "}
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:889:9
              </span>
            </span>
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
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              or, evaluated at {" "}
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:896:9
              </span>
            </span>
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
              local_url="./images/c6_cancelling_signs_cloud.svg"
              intrinsicWidth={800}
              intrinsicHeight={200}
            />
            <MathJaxSvgExportTooltip />
          </MathBlock>
        </Example>
        <Pause />
        <Example id="_126_h.a.i_">
          <OuterP>
            <b>
              Example 9.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              We have
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:907:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (\cos \circ \cos)'(2.5) = \sin(\cos(2.5))\cdot \sin(2.5) = -0.429\ldots
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              by {" "}
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:913:9
              </span>
            </span>
            <InChapterLink
              href="#_125_h.a.i_"
              class="in-chapter-link"
            >
              Example 8
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
            local_url="./images/c6_sin_of_sin_graph.svg"
            intrinsicWidth="892.21315"
            intrinsicHeight="163.02727"
          />
          <Pause />
          <StarDivider />
          <Pause />
          <OuterP>
            <i>
              <span class="t-3003-c">
                Note on {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6.wly:926:10
                </span>
              </span>
              <InChapterLink
                href="#_126_h.a.i_"
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
            local_url="./images/c6_windshield_wiper.svg"
            intrinsicWidth={400}
            intrinsicHeight={300}
          />
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              Since {" "}
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:934:9
              </span>
            </span>
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
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              producing the compressed sinusoid-like wave above.
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:941:9
              </span>
            </span>
          </OuterP>
        </Example>
      </Section>
    </>}
    {visibleRestSections() > 8 && <>
      <Pause />
      <Section id="section-11">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Epilogue: the dimensionless plane.
              <span class="t-3003">
                ./src/content/ch6/ch6.wly:945:6
              </span>
            </span>
          </b>
          {" "}
          Imagine that we define the radian value of an
          angle as
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            length subtended by the angle on the unit circle
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:949:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            as opposed to
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:951:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            arc length over radius
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:953:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            where the latter is the more traditional definition.
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:955:5
            </span>
          </span>
          {" "}
          {" "}
          In the latter definition, 
          the dimensions of the radian are
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;length&#125;\over\te&#123;length&#125;&#125; = \te&#123;dimensionless&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            whereas under the first definition it sounds like
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:964:5
            </span>
          </span>
          {" "}
          {" "}
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
          <span class="t-3003-c">
            Relatedly, you may have seen axes labelled “time/s” instead
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:974:5
            </span>
          </span>
          {" "}
          {" "}
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
          local_url="./images/c6_dimensionless_plane_1_v1.svg"
          intrinsicWidth={600}
          intrinsicHeight={465}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Dividing time by the unit “s” takes out the units, leaving a pure
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:981:5
            </span>
          </span>
          {" "}
          {" "}
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
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            The coordinate is the pure number {" "}
            <span class="t-3003">
              ./src/content/ch6/ch6.wly:989:5
            </span>
          </span>
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
        id="_146_h.a.i_"
      >
        <Exercise number={1}>
          <ExerciseStatement id="_127_h.a.i_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                If the expression
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_omega_.wly:4:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \cos(\omega t)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is to be dimensionally consistent,
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_omega_.wly:10:5
                </span>
              </span>
              {" "}
              {" "}
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
              <span class="t-3003-c">
                Since
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_omega_.wly:16:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos : [1] \ra [1]
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                or
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_omega_.wly:22:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos : [\rad] \ra [1]
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                rephrased (we have {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_omega_.wly:28:9
                </span>
              </span>
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
              <span class="t-3003-c">
                radians per second
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_omega_.wly:30:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                or
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_omega_.wly:32:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                per second
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_omega_.wly:34:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (equiv.) in order to cancel out the seconds in {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_omega_.wly:36:9
                </span>
              </span>
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
              local_url="./images/e6_bottom_radian_cloud.svg"
              intrinsicWidth={400}
              intrinsicHeight={150}
            />
          </Solution>
        </Exercise>
        <Exercise number={2}>
          <ExerciseStatement id="_128_h.a.i_">
            <OuterP>
              <b>
                Exercise 2.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                If {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensionality_t_over_v_.wly:4:5
                </span>
              </span>
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
              <span class="t-3003-c">
                Since velocity has dimensions
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensionality_t_over_v_.wly:9:9
                </span>
              </span>
              {" "}
              {" "}
              “distance over time”, which cancels the “distance”
              dimension on top, it is “time”:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\te&#123;DISTANCE&#125;\over\te&#123;SPEED&#125;&#125; = &#123;\te&#123;DISTANCE&#125;\over \left(&#123;\te&#123;DISTANCE&#125; \over &#123;\te&#123;TIME&#125;&#125;&#125;\right)&#125; = &#123;\te&#123;DISTANCE&#125;&#125;\cdot &#123;\te&#123;TIME&#125;\over \te&#123;DISTANCE&#125;&#125; = \te&#123;TIME&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
          </Solution>
        </Exercise>
        <Exercise number={3}>
          <ExerciseStatement id="_129_h.a.i_">
            <OuterP>
              <b>
                Exercise 3.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                If {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_lorentz_factor_dimensionality_.wly:4:5
                </span>
              </span>
              <Math>
                $v$
              </Math>
              {" "} is a speed and {" "}
              <Math>
                $c$
              </Math>
              {" "} is the speed of light, what
              is the dimension of the expression below?
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over \sqrt&#123;1 - &#123;v^2\over c^2&#125;&#125;&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (Known as the {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_lorentz_factor_dimensionality_.wly:9:5
                </span>
              </span>
              <i>
                Lorentz factor
              </i>
              .)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Since
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_lorentz_factor_dimensionality_.wly:14:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;v \over c&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is “speed over speed”, it is dimensionless,
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_lorentz_factor_dimensionality_.wly:20:9
                </span>
              </span>
              {" "}
              {" "}
              and since the sums, differences, squares,
              square roots, and reciprocals of dimensionless
              quantities are dimensionless, the entire
              expression is dimensionless.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={4}>
          <ExerciseStatement id="_130_h.a.i_">
            <OuterP>
              <b>
                Exercise 4.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                If units of time and space are chosen
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_physicist_choose_to_write_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
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
              <span class="t-3003-c">
                Besides wanting to “remind the general
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_physicist_choose_to_write_.wly:38:9
                </span>
              </span>
              {" "}
              {" "}
              formula”, one reason is
              to keep expressions dimensionally consistent.
              For example, the Lorentz factor
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over \sqrt&#123;1 - &#123;v^2\over c^2&#125;&#125;&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (cf. {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_physicist_choose_to_write_.wly:47:9
                </span>
              </span>
              <InChapterLink
                href="#_129_h.a.i_"
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
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                if {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_physicist_choose_to_write_.wly:54:9
                </span>
              </span>
              {" "}
              {" "}
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
          <ExerciseStatement id="_131_h.a.i_">
            <OuterP>
              <b>
                Exercise 5.
              </b>
            </OuterP>
            <CodexSuggestion>
              <p>
                <span class="t-3003-c">
                  Given a differentiable function {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_construct_dimensionless_output_.wly:5:9
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $f : [\s] \ra [\s]$
                  </Math>
                  <span class="t-3003-c">
                    ,
                    <span class="t-3003">
                      ./src/content/ch6/ch6^exercises/_construct_dimensionless_output_.wly:5:60
                    </span>
                  </span>
                </NoBreak>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  can you construct a function of signature {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_construct_dimensionless_output_.wly:6:9
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $[\s] \ra [1]$
                  </Math>
                  <span class="t-3003-c">
                    ?
                    <span class="t-3003">
                      ./src/content/ch6/ch6^exercises/_construct_dimensionless_output_.wly:6:65
                    </span>
                  </span>
                </NoBreak>
              </p>
            </CodexSuggestion>
          </ExerciseStatement>
          <Solution>
            <CodexSuggestion>
              <p>
                <span class="t-3003-c">
                  The derivative {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_construct_dimensionless_output_.wly:10:13
                  </span>
                </span>
                <Math>
                  $f'$
                </Math>
                <span class="t-3003-c">
                  {" "} has the required signature.
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_construct_dimensionless_output_.wly:10:32
                  </span>
                </span>
              </p>
              <p class="indent-10">
                <span class="t-3003-c">
                  Alternatively, {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_construct_dimensionless_output_.wly:12:13
                  </span>
                </span>
                <Math>
                  $f/f$
                </Math>
                <span class="t-3003-c">
                  {" "} has this signature wherever {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_construct_dimensionless_output_.wly:12:33
                  </span>
                </span>
                <Math>
                  $f$
                </Math>
                <span class="t-3003-c">
                  {" "} is nonzero.
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_construct_dimensionless_output_.wly:12:65
                  </span>
                </span>
              </p>
            </CodexSuggestion>
          </Solution>
        </Exercise>
        <Exercise number={6}>
          <ExerciseStatement id="_132_h.a.i_">
            <OuterP>
              <b>
                Exercise 6.
              </b>
            </OuterP>
            <CodexSuggestion>
              <p>
                <span class="t-3003-c">
                  Can you construct a function of signature {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_construct_signature_square_.wly:5:9
                  </span>
                </span>
                <Math>
                  $[\s] \ra [\te&#123;kg&#125;]$
                </Math>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  from functions
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_construct_signature_square_.wly:6:9
                  </span>
                </span>
              </p>
              <Pause />
              <MathBlock>
                $$
                f : [\s] \ra [\m], \qquad g : [\m^2] \ra [\te&#123;kg&#125;]?
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </CodexSuggestion>
          </ExerciseStatement>
          <Solution>
            <CodexSuggestion>
              <p>
                <span class="t-3003-c">
                  Yes: {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_construct_signature_square_.wly:14:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $g \circ f^2$
                  </Math>
                  <span class="t-3003-c">
                    ,
                    <span class="t-3003">
                      ./src/content/ch6/ch6^exercises/_construct_signature_square_.wly:14:31
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} since {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_construct_signature_square_.wly:14:31
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $f^2 : [\s] \ra [\m^2]$
                  </Math>
                  <span class="t-3003-c">
                    .
                    <span class="t-3003">
                      ./src/content/ch6/ch6^exercises/_construct_signature_square_.wly:14:62
                    </span>
                  </span>
                </NoBreak>
              </p>
            </CodexSuggestion>
          </Solution>
        </Exercise>
        <Exercise number={7}>
          <ExerciseStatement id="_133_h.a.i_">
            <OuterP>
              <b>
                Exercise 7.
              </b>
            </OuterP>
            <CodexSuggestion>
              <p>
                <span class="t-3003-c">
                  Can you construct a function of signature {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_construct_signature_impossible_.wly:5:9
                  </span>
                </span>
                <Math>
                  $[\s] \ra [\te&#123;kg&#125;]$
                </Math>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  from functions
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_construct_signature_impossible_.wly:6:9
                  </span>
                </span>
              </p>
              <Pause />
              <MathBlock>
                $$
                f : [\s] \ra [\m], \qquad g : [\te&#123;kg&#125;^2] \ra [\te&#123;kg&#125;]?
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </CodexSuggestion>
          </ExerciseStatement>
          <Solution>
            <CodexSuggestion>
              <p>
                <span class="t-3003-c">
                  Impossible using the given function operations.
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_construct_signature_impossible_.wly:14:13
                  </span>
                </span>
              </p>
            </CodexSuggestion>
          </Solution>
        </Exercise>
        <Exercise number={8}>
          <ExerciseStatement id="_134_h.a.i_">
            <OuterP>
              <b>
                Exercise 8.
              </b>
            </OuterP>
            <CodexSuggestion>
              <p>
                <span class="t-3003-c">
                  Can you construct a function of signature {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_construct_signature_reciprocal_.wly:5:9
                  </span>
                </span>
                <Math>
                  $[\s] \ra [\te&#123;kg&#125;]$
                </Math>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  from functions
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_construct_signature_reciprocal_.wly:6:9
                  </span>
                </span>
              </p>
              <Pause />
              <MathBlock>
                $$
                f : [\s] \ra [\m], \qquad g : [\m^&#123;-1&#125;] \ra [\te&#123;kg&#125;]?
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </CodexSuggestion>
          </ExerciseStatement>
          <Solution>
            <CodexSuggestion>
              <p>
                <span class="t-3003-c">
                  Yes: {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_construct_signature_reciprocal_.wly:14:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $g \circ (1/f)$
                  </Math>
                  <span class="t-3003-c">
                    ,
                    <span class="t-3003">
                      ./src/content/ch6/ch6^exercises/_construct_signature_reciprocal_.wly:14:33
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} wherever defined, since
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_construct_signature_reciprocal_.wly:14:33
                  </span>
                </span>
                {" "}
                {" "}
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $1/f : [\s] \ra [\m^&#123;-1&#125;]$
                  </Math>
                  <span class="t-3003-c">
                    .
                    <span class="t-3003">
                      ./src/content/ch6/ch6^exercises/_construct_signature_reciprocal_.wly:15:39
                    </span>
                  </span>
                </NoBreak>
              </p>
            </CodexSuggestion>
          </Solution>
        </Exercise>
        <Exercise number={9}>
          <ExerciseStatement id="_135_h.a.i_">
            <OuterP>
              <b>
                Exercise 9.
              </b>
            </OuterP>
            <CodexSuggestion>
              <p>
                <span class="t-3003-c">
                  Let
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:6:9
                  </span>
                </span>
              </p>
              <Pause />
              <MathBlock>
                $$
                f^&#123;-1&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <p>
                <span class="t-3003-c">
                  stand for the “inverse” of a function {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:12:9
                  </span>
                </span>
                <Math>
                  $f$
                </Math>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  for which such an inverse exists. {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:13:9
                  </span>
                </span>
                {" "}
                {" "}
                This means that {" "}
                <Math>
                  $f$
                </Math>
                <span class="t-3003-c">
                  {" "} has the kind of graph
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:14:28
                  </span>
                </span>
                {" "}
                {" "}
                below, in which distinct {" "}
                <NoBreak>
                  <Math>
                    $x$
                  </Math>
                  <span class="t-3003-c">
                    's
                    <span class="t-3003">
                      ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:15:37
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} are mapped to
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:15:37
                  </span>
                </span>
                {" "}
                {" "}
                distinct {" "}
                <NoBreak>
                  <Math>
                    $y$
                  </Math>
                  <span class="t-3003-c">
                    's:
                    <span class="t-3003">
                      ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:16:21
                    </span>
                  </span>
                </NoBreak>
              </p>
              <Pause />
              <Image
                src="/build-img/svgo-svg/bzLT.svg"
                local_url="./images/e6_f_inverse_distinct.svg"
                intrinsicWidth={450}
                intrinsicHeight={295}
              />
              <Pause />
              <p>
                <span class="t-3003-c">
                  This means that we can invert the flow
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:21:9
                  </span>
                </span>
                {" "}
                {" "}
                of the function, treating {" "}
                <NoBreak>
                  <Math>
                    $y$
                  </Math>
                  <span class="t-3003-c">
                    's
                    <span class="t-3003">
                      ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:22:38
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} as inputs, and recovering a
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:22:38
                  </span>
                </span>
                {" "}
                {" "}
                unique {" "}
                <Math>
                  $x$
                </Math>
                <span class="t-3003-c">
                  {" "} for each {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:23:19
                  </span>
                </span>
                <Math>
                  $y$
                </Math>
                <span class="t-3003-c">
                  {" "} that is an output of {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:23:32
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $f$
                  </Math>
                  <span class="t-3003-c">
                    —this
                    <span class="t-3003">
                      ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:23:57
                    </span>
                  </span>
                </NoBreak>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  “inverse flow” function is what we write as {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:24:9
                  </span>
                </span>
                <NoBreak>
                  <span class="t-3003-c">
                    “
                    <span class="t-3003">
                      ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:24:9
                    </span>
                  </span>
                  <Math>
                    $f^&#123;-1&#125;$
                  </Math>
                  <span class="t-3003-c">
                    ”:
                    <span class="t-3003">
                      ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:24:62
                    </span>
                  </span>
                </NoBreak>
              </p>
              <Pause />
              <Image
                src="/build-img/svgo-svg/4pb6.svg"
                local_url="./images/e6_f_inverse_reversed.svg"
                intrinsicWidth={640}
                intrinsicHeight={290}
              />
              <Pause />
              <p>
                <span class="t-3003-c">
                  The picture above shows {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:30:9
                  </span>
                </span>
                <Math>
                  $f^&#123;-1&#125;$
                </Math>
                <span class="t-3003-c">
                  {" "} with inputs on the vertical axis
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:30:41
                  </span>
                </span>
                {" "}
                {" "}
                and outputs on the horizontal axis. What would its “ordinary” graph
                look like, with inputs on the horizontal axis and outputs on the vertical axis?
              </p>
            </CodexSuggestion>
          </ExerciseStatement>
          <Solution>
            <CodexSuggestion>
              <p>
                <span class="t-3003-c">
                  Each point {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:37:13
                  </span>
                </span>
                <Math>
                  $(x,y)$
                </Math>
                <span class="t-3003-c">
                  {" "} on the graph of {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:37:31
                  </span>
                </span>
                <Math>
                  $f$
                </Math>
                <span class="t-3003-c">
                  {" "} becomes a point {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:37:51
                  </span>
                </span>
                <Math>
                  $(y,x)$
                </Math>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  on the ordinary graph of {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:38:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $f^&#123;-1&#125;$
                  </Math>
                  <span class="t-3003-c">
                    .
                    <span class="t-3003">
                      ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:38:46
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} The two graphs are reflections
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:38:46
                  </span>
                </span>
                {" "}
                {" "}
                of each other across the line {" "}
                <NoBreak>
                  <Math>
                    $y=x$
                  </Math>
                  <span class="t-3003-c">
                    :
                    <span class="t-3003">
                      ./src/content/ch6/ch6^exercises/_inverse_graph_introduction_.wly:39:48
                    </span>
                  </span>
                </NoBreak>
              </p>
              <Pause />
              <Image
                src="/build-img/svgo-svg/wzGl.svg"
                local_url="./images/e6_f_inverse_upright.svg"
                intrinsicWidth={440}
                intrinsicHeight={350}
              />
            </CodexSuggestion>
          </Solution>
        </Exercise>
        <Exercise number={10}>
          <ExerciseStatement id="_136_h.a.i_">
            <OuterP>
              <b>
                Exercise 10.
              </b>
            </OuterP>
            <CodexSuggestion>
              <p>
                <span class="t-3003-c">
                  If {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_signatures_.wly:6:9
                  </span>
                </span>
                <Math>
                  $f : [\A] \ra [\B]$
                </Math>
                <span class="t-3003-c">
                  {" "} is invertible (cf. {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_signatures_.wly:6:31
                  </span>
                </span>
                <InChapterLink
                  href="#_135_h.a.i_"
                  class="in-chapter-link"
                >
                  Exercise 9
                </InChapterLink>
                <span class="t-3003-c">
                  &#8288;),
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_signatures_.wly:6:31
                  </span>
                </span>
                {" "}
                {" "}
                what are the signatures of
              </p>
              <Pause />
              <MathBlock>
                $$
                f^&#123;-1&#125;,\qquad f^&#123;-1&#125;\circ f,\qquad f\circ f^&#123;-1&#125;,\qquad (f^&#123;-1&#125;)'?
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <p>
                <span class="t-3003-c">
                  (Assume the inverse is differentiable for the last part.)
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_signatures_.wly:13:9
                  </span>
                </span>
              </p>
            </CodexSuggestion>
          </ExerciseStatement>
          <Solution>
            <CodexSuggestion>
              <p>
                <span class="t-3003-c">
                  The inverse swaps the input and output units. Thus:
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_signatures_.wly:18:13
                  </span>
                </span>
              </p>
              <Pause />
              <MathBlock>
                $$
                \begin&#123;aligned&#125;
                f^&#123;-1&#125; &amp;: [\B] \ra [\A] \\
                f^&#123;-1&#125;\circ f &amp;: [\A] \ra [\A]\up&#123;1.35&#125; \\
                f\circ f^&#123;-1&#125; &amp;: [\B] \ra [\B]\up&#123;1.35&#125; \\
                (f^&#123;-1&#125;)' &amp;: [\B] \ra [\A/\B]\up&#123;1.35&#125;
                \end&#123;aligned&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </CodexSuggestion>
          </Solution>
        </Exercise>
        <Exercise number={11}>
          <ExerciseStatement id="_137_h.a.i_">
            <OuterP>
              <b>
                Exercise 11.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                If {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensionality_xv_over_c^2_.wly:4:5
                </span>
              </span>
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
              <span class="t-3003-c">
                The factor
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensionality_xv_over_c^2_.wly:10:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;v\over c&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is dimensionless since {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensionality_xv_over_c^2_.wly:16:9
                </span>
              </span>
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
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                has the same dimensions as
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensionality_xv_over_c^2_.wly:27:9
                </span>
              </span>
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
                local_url="./images/e6_v_over_c_cancellation_cloud.svg"
                intrinsicWidth={200}
                intrinsicHeight={100}
              />
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which has dimensions of time by
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensionality_xv_over_c^2_.wly:38:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <InChapterLink
                href="#_128_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 2
              </InChapterLink>
              &#8288;.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={12}>
          <ExerciseStatement id="_138_h.a.i_">
            <OuterP>
              <b>
                Exercise 12.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                What are the signatures of {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_z_combinations_.wly:3:5
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
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
              <span class="t-3003-c">
                Applying the rules of {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_z_combinations_.wly:11:9
                </span>
              </span>
              <InChapterLink
                href="#_117_h.a.i_"
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
                href="#_119_h.a.i_"
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
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                z^2 : [\lbs] \ra [\rt&#123;0.1&#125;\te&#123;£&#125;^2\rt&#123;0.1&#125;]
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                (-z) : [\lbs] \ra [\pounds]
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                (z + z) : [\lbs] \ra [\pounds]
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                (z/z) : [\lbs] \ra [\rt&#123;0.1&#125;1\rt&#123;0.1&#125;]
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                (z - z) : [\lbs] \ra [\pounds]
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </Boxed>
            <OuterP>
              <span class="t-3003-c">
                On the other hand,
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_z_combinations_.wly:45:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              z \circ z
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is not a well-formed composition, and does not have
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_z_combinations_.wly:51:9
                </span>
              </span>
              {" "}
              {" "}
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
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  Since
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_dimensional_z_combinations_.wly:61:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                -z = (-1)z,
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                z + z = 2z,
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                z - z = 0z
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  three of the cases considered are just special
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_dimensional_z_combinations_.wly:76:13
                  </span>
                </span>
                {" "}
                {" "}
                cases of multiplying the function by a 
                constant. (Which does not change the signature, as long
                as the constant is dimensionless.)
              </OuterP>
              <OuterP class="indent-10">
                <span class="t-3003-c">
                  [Nb: The multiplication of a function by a constant
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_dimensional_z_combinations_.wly:81:13
                  </span>
                </span>
                {" "}
                {" "}
                is formally treated in {" "}
                <OutChapterLink
                  href="/article/chapter7#_111_h.a.i_"
                  class="out-chapter-link"
                >
                  Exercise 7 of Chapter 4
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
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  It is indeed true that
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_dimensional_z_combinations_.wly:91:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                z - z = 0
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  identically, but this is zero {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_dimensional_z_combinations_.wly:97:13
                  </span>
                </span>
                <i>
                  pounds
                </i>
                , you see?
                [British.]
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={13}>
          <ExerciseStatement id="_139_h.a.i_">
            <OuterP>
              <b>
                Exercise 13.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                What constraints does the composition
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_f_f_.wly:4:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f \circ f
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                impose on the signature of {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_f_f_.wly:8:5
                </span>
              </span>
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
              <span class="t-3003-c">
                A signature of the form
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_f_f_.wly:12:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f : [\tA] \ra [\tA]
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is necessary and sufficient.
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_f_f_.wly:16:9
                </span>
              </span>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                The output of {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_f_f_.wly:18:9
                </span>
              </span>
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
        <Exercise number={14}>
          <ExerciseStatement id="_140_h.a.i_">
            <OuterP>
              <b>
                Exercise 14.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                What constraints does the composition
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_f_g_f_.wly:4:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f \circ g \circ f
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                impose on the signatures of {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_f_g_f_.wly:8:5
                </span>
              </span>
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
              <span class="t-3003-c">
                The composition requires {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_f_g_f_.wly:12:9
                </span>
              </span>
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
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for some units A and B, as the output of {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_f_g_f_.wly:22:9
                </span>
              </span>
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
        <Exercise number={15}>
          <ExerciseStatement id="_141_h.a.i_">
            <OuterP>
              <b>
                Exercise 15.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                What constraints does the assemblage
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_big_composition_.wly:10:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f \circ &#123;f\over f\circ f&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                impose on the signature of {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_big_composition_.wly:14:5
                </span>
              </span>
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
              <span class="t-3003-c">
                The presence of {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_big_composition_.wly:18:9
                </span>
              </span>
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
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                on {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_big_composition_.wly:26:9
                </span>
              </span>
              <Math>
                $f$
              </Math>
              {" "} by {" "}
              <InChapterLink
                href="#_139_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 13
              </InChapterLink>
              &#8288;.
              But then
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;f\over f\circ f&#125; : [\tA] \ra [1]
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                because the output units at top and bottom of the fraction are
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_big_composition_.wly:33:9
                </span>
              </span>
              {" "}
              {" "}
              both A, which cancels. (Or
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Udaw.svg"
              local_url="./images/e6_some_quotient.svg"
              intrinsicWidth={500}
              intrinsicHeight={120}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                where {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_big_composition_.wly:39:9
                </span>
              </span>
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
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is fed back to {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_big_composition_.wly:45:9
                </span>
              </span>
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
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <NoBreak>
                <span class="t-3003-c">
                  ...
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_dimensional_big_composition_.wly:51:9
                  </span>
                </span>
                <Math>
                  $f$
                </Math>
              </NoBreak>
              {" "} to accept dimensionless inputs, and finally
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f : [1] \ra [1]
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                since {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_big_composition_.wly:55:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $f : [\tA] \ra [\tA]$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={16}>
          <ExerciseStatement id="_142_h.a.i_">
            <OuterP>
              <b>
                Exercise 16.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Give a dimensional analysis of the (real,
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_analysis_of_product_rule_.wly:3:5
                </span>
              </span>
              {" "}
              {" "}
              “late afternoon”) product rule {" "}
              <NoBreak>
                (cf
                <Math>
                  $.$
                </Math>
              </NoBreak>
              {" "} {" "}
              <OutChapterLink
                href="/article/chapter7#_113_h.a.i_"
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
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </Boxed>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Products of the form
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_analysis_of_product_rule_.wly:12:9
                </span>
              </span>
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
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                require {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_analysis_of_product_rule_.wly:22:9
                </span>
              </span>
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
                href="#_117_h.a.i_"
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
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                are at least necessary on either side of the equation.
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_analysis_of_product_rule_.wly:36:9
                </span>
              </span>
              {" "}
              {" "}
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
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Thus both sides impose the same signature constraints and
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_analysis_of_product_rule_.wly:61:9
                </span>
              </span>
              {" "}
              {" "}
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
        <Exercise number={17}>
          <ExerciseStatement id="_143_h.a.i_">
            <OuterP>
              <b>
                Exercise 17.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Use dimensional analysis to
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_reciprocal_rule_.wly:3:5
                </span>
              </span>
              {" "}
              {" "}
              conjecture a formula for
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \large\left(&#123;1\over f&#125;\right)'
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_reciprocal_rule_.wly:10:5
                </span>
              </span>
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
              <span class="t-3003-c">
                For a generic signature {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_reciprocal_rule_.wly:15:9
                </span>
              </span>
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
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Since {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_reciprocal_rule_.wly:21:9
                </span>
              </span>
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
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                This makes {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_reciprocal_rule_.wly:29:9
                </span>
              </span>
              <Math>
                $f'/f^2$
              </Math>
              {" "} a plausible conjecture.
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                However, we know from Exercise X that
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_reciprocal_rule_.wly:31:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \left(&#123;1\over f&#125;\right)'
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                should have opposite sign to {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_reciprocal_rule_.wly:37:9
                </span>
              </span>
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
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                does {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_reciprocal_rule_.wly:43:9
                </span>
              </span>
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
              <span class="t-3003-c">
                Our conjecture is “consistently wrong”—it has the wrong sign.
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_reciprocal_rule_.wly:56:9
                </span>
              </span>
              {" "}
              {" "}
              Negation leaves its signature unchanged (&#8288;
              <InChapterLink
                href="#_119_h.a.i_"
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
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </Boxed>
            <OuterP>
              <span class="t-3003-c">
                as an “educated guess” for a formula for {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_reciprocal_rule_.wly:64:9
                </span>
              </span>
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
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  The formula is correct! It is called the {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_dimensional_reciprocal_rule_.wly:67:13
                  </span>
                </span>
                <i>
                  reciprocal rule
                </i>
                .
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={18}>
          <ExerciseStatement id="_144_h.a.i_">
            <OuterP>
              <b>
                Exercise 18.
              </b>
            </OuterP>
            <CodexSuggestion>
              <p>
                <span class="t-3003-c">
                  Use dimensional analysis to conjecture a
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_rule_conjecture_.wly:6:9
                  </span>
                </span>
                {" "}
                {" "}
                formula for the derivative of the inverse,
                i.e., a formula of the form
              </p>
              <Pause />
              <MathBlock>
                $$
                (f^&#123;-1&#125;)' = \ldots
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <p>
                <span class="t-3003-c">
                  similar to the sum rule, product rule, etc.
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_rule_conjecture_.wly:14:9
                  </span>
                </span>
              </p>
            </CodexSuggestion>
          </ExerciseStatement>
          <Solution>
            <CodexSuggestion>
              <p>
                <span class="t-3003-c">
                  If
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_rule_conjecture_.wly:21:13
                  </span>
                </span>
              </p>
              <Pause />
              <MathBlock>
                $$
                f : [\tA] \ra [\tB]
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <p>
                <span class="t-3003-c">
                  is a generic invertible function, then
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_rule_conjecture_.wly:27:13
                  </span>
                </span>
              </p>
              <Pause />
              <MathBlock>
                $$
                f^&#123;-1&#125; : [\tB] \ra [\tA]
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <p>
                <span class="t-3003-c">
                  since an input of {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_rule_conjecture_.wly:33:13
                  </span>
                </span>
                <Math>
                  $f^&#123;-1&#125;$
                </Math>
                <span class="t-3003-c">
                  {" "} is an output of {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_rule_conjecture_.wly:33:39
                  </span>
                </span>
                <Math>
                  $f$
                </Math>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  and vice-versa.
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_rule_conjecture_.wly:34:13
                  </span>
                </span>
                {" "}
                {" "}
                Thus
              </p>
              <Pause />
              <MathBlock>
                $$
                (f^&#123;-1&#125;)' : [\tB] \ra \left[&#123;\A\over \B&#125;\right]
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <p>
                <span class="t-3003-c">
                  Taking the reciprocal of {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_rule_conjecture_.wly:42:13
                  </span>
                </span>
                <Math>
                  $f'$
                </Math>
                <span class="t-3003-c">
                  {" "} gives
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_rule_conjecture_.wly:42:42
                  </span>
                </span>
              </p>
              <Pause />
              <MathBlock>
                $$
                &#123;1\over f'&#125; : [\A] \ra \left[&#123;\A \over \B&#125;\right]
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <p>
                <span class="t-3003-c">
                  with the right output units, but the wrong input units (A instead of B);
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_rule_conjecture_.wly:49:13
                  </span>
                </span>
                {" "}
                {" "}
                however we can “slot in” the correct input units 
                to {" "}
                <Math>
                  $f'$
                </Math>
                <span class="t-3003-c">
                  {" "} by pre-composing with {" "}
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_rule_conjecture_.wly:51:20
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $f^&#123;-1&#125;$
                  </Math>
                  <span class="t-3003-c">
                    ,
                    <span class="t-3003">
                      ./src/content/ch6/ch6^exercises/_inverse_rule_conjecture_.wly:51:51
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} i.e.,
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_rule_conjecture_.wly:51:51
                  </span>
                </span>
                {" "}
                {" "}
                observe that
              </p>
              <Pause />
              <MathBlock>
                $$
                f' \circ f^&#123;-1&#125; : [\B] \ra \left[&#123;\B\over \A&#125;\right]
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <p>
                <span class="t-3003-c">
                  ...giving us...
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_rule_conjecture_.wly:58:13
                  </span>
                </span>
              </p>
              <Pause />
              <MathBlock>
                $$
                &#123;1\over f' \circ f^&#123;-1&#125;&#125; : [\B] \ra \left[&#123;\A\over \B&#125;\right]
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <p>
                <span class="t-3003-c">
                  ...the desired signature! Thus, a possibility is:
                  <span class="t-3003">
                    ./src/content/ch6/ch6^exercises/_inverse_rule_conjecture_.wly:64:13
                  </span>
                </span>
              </p>
              <Boxed>
                <MathBlock>
                  $$
                  (f^&#123;-1&#125;)' = &#123;1\over f' \circ f^&#123;-1&#125;&#125;
                  $$
                  <MathJaxSvgExportTooltip />
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
                  {" "}{" "}
                  {" "}
                  {" "}
                  <span class="t-3003-c">
                    The formula is (correct, and) known as the {" "}
                    <span class="t-3003">
                      ./src/content/ch6/ch6^exercises/_inverse_rule_conjecture_.wly:76:17
                    </span>
                  </span>
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
                  {" "}{" "}
                  {" "}
                  {" "}
                  <span class="t-3003-c">
                    At a specific input:
                    <span class="t-3003">
                      ./src/content/ch6/ch6^exercises/_inverse_rule_conjecture_.wly:83:17
                    </span>
                  </span>
                </OuterP>
                <Boxed>
                  <MathBlock>
                    $$
                    (f^&#123;-1&#125;)'(x) = &#123;1\over f'(f^&#123;-1&#125;(x))&#125;
                    $$
                    <MathJaxSvgExportTooltip />
                  </MathBlock>
                </Boxed>
              </SolutionNote>
            </CodexSuggestion>
          </Solution>
        </Exercise>
        <Exercise number={19}>
          <ExerciseStatement id="_145_h.a.i_">
            <OuterP>
              <b>
                Exercise 19.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Let {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_f^-1_g_f_.wly:11:5
                </span>
              </span>
              <Math>
                $f$
              </Math>
              {" "} be an invertible function with inverse {" "}
              <Math>
                $f^&#123;-1&#125;$
              </Math>
              {" "} (cf. {" "}
              <InChapterLink
                href="#_135_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 9
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
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is well-formed?
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_f^-1_g_f_.wly:16:5
                </span>
              </span>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                This pattern requires {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_f^-1_g_f_.wly:27:9
                </span>
              </span>
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
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                since outputs of {" "}
                <span class="t-3003">
                  ./src/content/ch6/ch6^exercises/_dimensional_f^-1_g_f_.wly:36:9
                </span>
              </span>
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
              local_url="./images/e6_f_inverse_g_f_composition.svg"
              intrinsicWidth={600}
              intrinsicHeight={145}
            />
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};