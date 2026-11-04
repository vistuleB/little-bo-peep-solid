import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Boxed  from "~/components/Boxed";
import CodexSuggestions,  { CodexSuggestion }  from "~/components/CodexSuggestions";
import { CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { MathBlock, Math }  from "~/components/Math";
import MathJaxSvgExportTooltip  from "~/components/MathJaxSvgExportTooltip";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageRight, ImageLeft }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { StarDivider }  from "~/components/StarDivider";
import TextParent  from "~/components/TextParent";
import { SolutionNote, NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter7__() {
  return (
    <Article
      prevPage="/article/chapter6"
      nextPage="/article/chapter8"
      pageNecessaryMargin={1450}
      maxElementWidth={1000}
      id="_116_h.a.i_"
      path="/article/chapter7"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            <span class="t-3003-c">
              finite changes and products
              <span class="t-3003">
                ./src/content/ch5a_product/product.wly:6:10
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=exercises">
            <span class="t-3003-c">
              exercises
              <span class="t-3003">
                ./src/content/ch5a_product/product^exercises/__parent.wly:1:1
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 7:">
        <span class="t-3003-c">
          The Product Rule
          <span class="t-3003">
            ./src/content/ch5a_product/__parent.wly:2:11
          </span>
        </span>
      </ArticleTitle>
      <Section id="section-1">
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Finite changes and products.
                <span class="t-3003">
                  ./src/content/ch5a_product/product.wly:6:10
                </span>
              </span>
            </b>
          </p>
          <p class="indent-10">
            <span class="t-3003-c">
              Proposed chapter: use the existing finite-change and difference-quotient exercises to prepare the rats construction. The main question is how to account for a change in a product when both factors change. The intermediate state obtained by changing one factor at a time need never actually occur, yet it gives an exact decomposition.
              <span class="t-3003">
                ./src/content/ch5a_product/product.wly:8:9
              </span>
            </span>
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <span class="t-3003-c">
              The exercises below have been moved unchanged from Chapter 4. A possible development is concrete change, elapsed time, secant slope, shrinking interval, then scaling and sum rules, followed by the product rule. Promote selected explanations to main text later. Keep this short: the purpose of the move is also to give Chapter 4 a visible finish line.
              <span class="t-3003">
                ./src/content/ch5a_product/product.wly:12:9
              </span>
            </span>
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            <span class="t-3003-c">
              Preserve the rats and their diagrams. Possible extensions: let B cross first and compare the exact decompositions; try three factors before the indexed generalization. Do not add a large differentiation drill set just to fill the chapter.
              <span class="t-3003">
                ./src/content/ch5a_product/product.wly:16:9
              </span>
            </span>
          </p>
        </CodexSuggestion>
      </Section>
      <Rest />
    </Article>
  );
}

const Rest = () => {
  const visibleRestSections = useShowMore(1);
  return <>
    {visibleRestSections() > 0 && <>
      <Pause />
      <Exercises
        at_end_of_page={true}
        mode="dual"
        show_curlicue={true}
        id="_115_h.a.i_"
      >
        <Exercise number={1}>
          <ExerciseStatement id="_104_h.a.i_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                If {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_verbal_to_arithmetic_A_change_.wly:4:5
                </span>
              </span>
              <Math>
                $A$
              </Math>
              {" "} is a function of time, meaning
              that we can write
              {" "}
              <NoBreak>
                “
                <Math>
                  $A(0.2)$
                </Math>
                ”
              </NoBreak>
              {" "}
              to denote “the value of {" "}
              <Math>
                $A$
              </Math>
              {" "} at time {" "}
              <NoBreak>
                <Math>
                  $t = 0.2$
                </Math>
                ”,
              </NoBreak>
              {" "} etc,
              then how to write
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                the change in {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_verbal_to_arithmetic_A_change_.wly:10:7
                </span>
              </span>
              <Math>
                $A$
              </Math>
              <span class="t-3003-c">
                {" "} between {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_verbal_to_arithmetic_A_change_.wly:10:24
                </span>
              </span>
              <Math>
                $t = 11.199$
              </Math>
              <span class="t-3003-c">
                {" "} and
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_verbal_to_arithmetic_A_change_.wly:10:45
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <Math>
                $t = 11.2$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                mathematically?
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_verbal_to_arithmetic_A_change_.wly:13:5
                </span>
              </span>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                This is
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_verbal_to_arithmetic_A_change_.wly:18:9
                </span>
              </span>
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                A(11.2) - A(11.199)
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </Boxed>
            <OuterP>
              <span class="t-3003-c">
                or, literally, “the value of {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_verbal_to_arithmetic_A_change_.wly:25:9
                </span>
              </span>
              <Math>
                $A$
              </Math>
              {" "} at {" "}
              <Math>
                $t = 11.2$
              </Math>
              {" "} minus the value
              of {" "}
              <Math>
                $A$
              </Math>
              {" "} at {" "}
              <NoBreak>
                <Math>
                  $t = 11.199$
                </Math>
                ”.
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={2}>
          <ExerciseStatement id="_105_h.a.i_">
            <OuterP>
              <b>
                Exercise 2.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                By what should the change mentioned in {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_verbal_to_arithmetic_A_change_pt2_.wly:4:5
                </span>
              </span>
              <InChapterLink
                href="#_104_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 1
              </InChapterLink>
              {" "}
              be divided to obtain a difference quotient (cf. {" "}
              <InChapterLink
                href="#_107_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 3
              </InChapterLink>
              &#8288;)?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                One should divide by
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_verbal_to_arithmetic_A_change_pt2_.wly:9:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0.001
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                since {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_verbal_to_arithmetic_A_change_pt2_.wly:15:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $11.2 = 11.199 + 0.001$
                </Math>
                .
              </NoBreak>
              {" "} The fraction
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;A(11.2) - A(11.199) \over 0.001&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is a difference quotient of the form
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_verbal_to_arithmetic_A_change_pt2_.wly:21:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;f(x + h) - f(x) \over h&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                with {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_verbal_to_arithmetic_A_change_pt2_.wly:27:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $f = A$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $x = 11.199$
                </Math>
                ,
              </NoBreak>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $h = 0.001$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <StarDivider />
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
                  Very—
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_verbal_to_arithmetic_A_change_pt2_.wly:33:13
                  </span>
                </span>
                <i>
                  very
                </i>
                —anecdotally, one can observe that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;A(11.199) - A(11.2) \over -0.001&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  is also a difference quotient, equal to the one
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_verbal_to_arithmetic_A_change_pt2_.wly:39:13
                  </span>
                </span>
                {" "}
                {" "}
                above in value if not in syntax; in this case
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x = 11.2
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  and
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_verbal_to_arithmetic_A_change_pt2_.wly:44:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                h = -0.001
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  compared to
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_verbal_to_arithmetic_A_change_pt2_.wly:48:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x = 11.199
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  and
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_verbal_to_arithmetic_A_change_pt2_.wly:52:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                h = 0.001
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  above; so this diagram can illustrate a difference quotient in either of two ways, shown below:
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_verbal_to_arithmetic_A_change_pt2_.wly:56:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/F0SL.svg"
                local_url="./images/_e5_verbal_to_arithmetic_note1.svg"
                intrinsicWidth={456}
                intrinsicHeight={420}
              />
              <Pause />
              <Image
                src="/build-img/svgo-svg/cWTG.svg"
                local_url="./images/svg_ch4_newton_quotient_finished.svg"
                intrinsicWidth={456}
                intrinsicHeight={420}
              />
              <Pause />
              <Image
                src="/build-img/svgo-svg/oADf.svg"
                local_url="./images/_e5_verbal_to_arithmetic_note3.svg"
                intrinsicWidth={456}
                intrinsicHeight={420}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  In the last diagram {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_verbal_to_arithmetic_A_change_pt2_.wly:74:13
                  </span>
                </span>
                <Math>
                  $x$
                </Math>
                {" "} and {" "}
                <Math>
                  $x + h$
                </Math>
                {" "}
                are interchanged, and {" "}
                <Math>
                  $h$
                </Math>
                {" "} has changed signs,
                but the difference quotient gives
                the same slope of the same secant!
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={3}>
          <ExerciseStatement id="_107_h.a.i_">
            <OuterP>
              <b>
                Exercise 3.
              </b>
            </OuterP>
            <CodexSuggestions>
              <p>
                <span class="t-3003-c">
                  Moved here with the change-in-A and change-in-f exercises from Chapter 4. A possible order is concrete change, elapsed time, secant slope, then shrinking interval. Revisit the quotient’s units in dimensional analysis, perhaps as an exercise rather than another main-text explanation.
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_illustrate_the_difference_quotient_v2_.wly:6:9
                  </span>
                </span>
              </p>
            </CodexSuggestions>
            <OuterP>
              <span class="t-3003-c">
                The fraction
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_illustrate_the_difference_quotient_v2_.wly:8:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;f(x+h) - f(x) \over h&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                where {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_illustrate_the_difference_quotient_v2_.wly:14:5
                </span>
              </span>
              <Math>
                $f : \rr \ra \rr$
              </Math>
              {" "} is called a {" "}
              <i>
                difference
                quotient
              </i>
              . Add the numerator and denominator to the diagram below to explain the quotient’s geometric meaning.
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/1hYI.svg"
              style="margin-top:0.4em"
              local_url="./images/svg_ch4_newton_quotient_unfinished.svg"
              intrinsicWidth={456}
              intrinsicHeight={420}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The teacher would like to see:
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_illustrate_the_difference_quotient_v2_.wly:23:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/cWTG.svg"
              local_url="./images/svg_ch4_newton_quotient_finished.svg"
              intrinsicWidth={456}
              intrinsicHeight={420}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Thus
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_illustrate_the_difference_quotient_v2_.wly:28:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;f(x + h) - f(x)\over h&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                has the form {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_illustrate_the_difference_quotient_v2_.wly:34:9
                </span>
              </span>
              <i>
                rise over run
              </i>
              : the slope of the pale brown line through
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x, f(x))
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_illustrate_the_difference_quotient_v2_.wly:40:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x + h, f(x + h)).
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Vocabulary.
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_illustrate_the_difference_quotient_v2_.wly:60:10
                  </span>
                </span>
              </i>
              {" "}
              The pale brown line is sometimes known as
              the {" "}
              <i>
                secant
              </i>
              {" "} [through {" "}
              <NoBreak>
                <Math>
                  $(x, f(x))$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $(x+h, f(x+h))$
                </Math>
                ].
              </NoBreak>
              {" "}
              “Secant” is a general term for “line passing
              through two specified points on another
              curve”.
            </OuterP>
            <Pause />
            <SolutionNote id="_106_h.a.i_">
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  If we let {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_illustrate_the_difference_quotient_v2_.wly:69:13
                  </span>
                </span>
                <Math>
                  $h$
                </Math>
                {" "} drop to {" "}
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  ,
                </NoBreak>
                {" "} and if {" "}
                <Math>
                  $f$
                </Math>
                {" "} is
                differentiable at {" "}
                <NoBreak>
                  <Math>
                    $x$
                  </Math>
                  ,
                </NoBreak>
                {" "} the
                difference-quotient-a.k.a.-slope-of-the-secant
                approaches
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                f'(x)
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  because the secant approaches the tangent, and its slope approaches the tangent’s slope, {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_illustrate_the_difference_quotient_v2_.wly:78:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $f'(x)$
                  </Math>
                  .
                </NoBreak>
                {" "} 
                (But you
                cannot directly set {" "}
                <NoBreak>
                  <Math>
                    $h = 0$
                  </Math>
                  ,
                </NoBreak>
                {" "} because
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;f(x+0)-f(x)\over 0&#125; = &#123;0 \over 0&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  is undefined.)
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_illustrate_the_difference_quotient_v2_.wly:86:13
                  </span>
                </span>
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={4}>
          <ExerciseStatement id="_108_h.a.i_">
            <OuterP>
              <b>
                Exercise 4.
              </b>
            </OuterP>
            <CodexSuggestion>
              <p>
                <b>
                  <span class="t-3003-c">
                    Draft: a small slope hiding in a reciprocal.
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:6:10
                    </span>
                  </span>
                </b>
                <span class="t-3003-c">
                  {" "} Let
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:6:55
                  </span>
                </span>
              </p>
              <Pause />
              <MathBlock>
                $$
                F(x)=&#123;1\over 10+\sin x&#125;.
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <p>
                <span class="t-3003-c">
                  a. Sketch or plot {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:12:9
                  </span>
                </span>
                <Math>
                  $F$
                </Math>
                <span class="t-3003-c">
                  {" "} near {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:12:30
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $x=0$
                  </Math>
                  <span class="t-3003-c">
                    .
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:12:41
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} What is {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:12:41
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $F(0)$
                  </Math>
                  <span class="t-3003-c">
                    ?
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:12:57
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} Is the function increasing or decreasing there? Zoom in vertically until its change is visible.
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:12:57
                  </span>
                </span>
              </p>
              <p class="indent-10">
                <span class="t-3003-c">
                  b. Calculate the secant slopes
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:14:9
                  </span>
                </span>
              </p>
              <Pause />
              <MathBlock>
                $$
                &#123;F(h)-F(0)\over h&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <p>
                <span class="t-3003-c">
                  for {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:20:9
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $h=0.1,-0.1,0.01,-0.01,0.001,-0.001$
                  </Math>
                  <span class="t-3003-c">
                    .
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:20:49
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} Use radians. What value do the slopes seem to approach?
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:20:49
                  </span>
                </span>
              </p>
              <p class="indent-10">
                <span class="t-3003-c">
                  c. Put the two fractions in {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:22:9
                  </span>
                </span>
                <Math>
                  $F(h)-F(0)$
                </Math>
                <span class="t-3003-c">
                  {" "} over a common denominator. Use the resulting difference quotient to find {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:22:48
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $F'(0)$
                  </Math>
                  <span class="t-3003-c">
                    ,
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:22:129
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} without a rule for differentiating reciprocals or compositions.
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:22:129
                  </span>
                </span>
              </p>
              <p class="indent-10">
                <span class="t-3003-c">
                  d. Now look near {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:24:9
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $x=2\eta$
                  </Math>
                  <span class="t-3003-c">
                    ,
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:24:35
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} another point where {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:24:35
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $\sin x=0$
                  </Math>
                  <span class="t-3003-c">
                    .
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:24:67
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} Predict the sign of the derivative, check it with a few secant slopes, and adapt your calculation to find its value. Compare the two graphs using the same scales.
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:24:67
                  </span>
                </span>
              </p>
            </CodexSuggestion>
          </ExerciseStatement>
          <Solution>
            <CodexSuggestion>
              <p>
                <span class="t-3003-c">
                  At {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:29:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $x=0$
                  </Math>
                  <span class="t-3003-c">
                    ,
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:29:21
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:29:21
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $F(0)=1/10$
                  </Math>
                  <span class="t-3003-c">
                    .
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:29:34
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} As the sine increases through zero, the denominator increases and its reciprocal decreases.
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:29:34
                  </span>
                </span>
              </p>
              <p class="indent-10">
                <span class="t-3003-c">
                  The secant slopes are approximately:
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:31:13
                  </span>
                </span>
              </p>
              <Pause />
              <MathBlock>
                $$
                \begin&#123;array&#125;&#123;r|r&#125;
                h &amp; (F(h)-F(0))/h\\ \hline
                0.1 &amp; -0.009884660\up&#123;1.3&#125;\\
                -0.1 &amp; -0.010084014\\
                0.01 &amp; -0.009989844\\
                -0.01 &amp; -0.010009843\\
                0.001 &amp; -0.009998998\\
                -0.001 &amp; -0.010000998
                \end&#123;array&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <p>
                <span class="t-3003-c">
                  The algebra explains the apparent limit of {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:45:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $-0.01$
                  </Math>
                  <span class="t-3003-c">
                    :
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:45:63
                    </span>
                  </span>
                </NoBreak>
              </p>
              <Pause />
              <MathBlock>
                $$
                \begin&#123;aligned&#125;
                &#123;F(h)-F(0)\over h&#125;
                &amp;= &#123;1\over h&#125;\left(&#123;1\over 10+\sin h&#125;-&#123;1\over 10&#125;\right)\\
                &amp;= -&#123;\sin h\over h&#125;\,&#123;1\over 10(10+\sin h)&#125;.\up&#123;1.6&#125;
                \end&#123;aligned&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <p>
                <span class="t-3003-c">
                  As {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:55:13
                  </span>
                </span>
                <Math>
                  $h$
                </Math>
                <span class="t-3003-c">
                  {" "} tends to zero, {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:55:19
                  </span>
                </span>
                <Math>
                  $\sin h/h$
                </Math>
                <span class="t-3003-c">
                  {" "} tends to {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:55:45
                  </span>
                </span>
                <Math>
                  $1$
                </Math>
                <span class="t-3003-c">
                  {" "} (the derivative of sine at zero), while {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:55:58
                  </span>
                </span>
                <Math>
                  $10(10+\sin h)$
                </Math>
                <span class="t-3003-c">
                  {" "} tends to {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:55:114
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $100$
                  </Math>
                  <span class="t-3003-c">
                    .
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:55:129
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} Hence {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:55:129
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $F'(0)=-1/100$
                  </Math>
                  <span class="t-3003-c">
                    .
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:55:151
                    </span>
                  </span>
                </NoBreak>
              </p>
              <p class="indent-10">
                <span class="t-3003-c">
                  At {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:57:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $a=2\eta$
                  </Math>
                  <span class="t-3003-c">
                    ,
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:57:25
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} the same subtraction gives
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:57:25
                  </span>
                </span>
              </p>
              <Pause />
              <MathBlock>
                $$
                &#123;F(a+h)-F(a)\over h&#125;
                =-&#123;\sin(a+h)-\sin a\over h&#125;\,&#123;1\over 10(10+\sin(a+h))&#125;.
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <p>
                <span class="t-3003-c">
                  Here {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:64:13
                  </span>
                </span>
                <Math>
                  $\sin a=0$
                </Math>
                <span class="t-3003-c">
                  {" "} again, but the sine has derivative {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:64:28
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $-1$
                  </Math>
                  <span class="t-3003-c">
                    ,
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:64:68
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} so {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:64:68
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $F'(2\eta)=1/100$
                  </Math>
                  <span class="t-3003-c">
                    .
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:64:90
                    </span>
                  </span>
                </NoBreak>
                <span class="t-3003-c">
                  {" "} The two reciprocal graphs pass through the same height with opposite slopes.
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:64:90
                  </span>
                </span>
              </p>
              <Pause />
              <Image
                src="/build-img/svgo-svg/StUA.svg"
                width="840px"
                local_url="./images/product_reciprocal_sine_secants.svg"
                intrinsicWidth={840}
                intrinsicHeight={390}
              />
            </CodexSuggestion>
            <CodexSuggestion>
              <p>
                <b>
                  <span class="t-3003-c">
                    Editorial note.
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:72:14
                    </span>
                  </span>
                </b>
                <span class="t-3003-c">
                  {" "} We want an exercise that explores this derivative visually, numerically, and algebraically through the difference quotient. The interest is the small change near a zero of sine: subtracting reciprocals reverses the sign and introduces two denominators approaching 10, explaining the factor {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:72:30
                  </span>
                </span>
                <Math>
                  $1/100$
                </Math>
                <span class="t-3003-c">
                  {" "} without quoting a differentiation rule. The graphs above are a first draft; consider giving the student a broad plot before the magnified views, or movable secants. Keep equal scales for the comparison and make the vertical magnification explicit. A later variation could replace 10 by a positive constant greater than 1 and ask how the slope changes, but do not turn this into a general reciprocal-rule derivation unless it earns its place. Cosine near {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:72:328
                  </span>
                </span>
                <Math>
                  $x=\eta$
                </Math>
                <span class="t-3003-c">
                  {" "} is an alternative if the surrounding sequence makes it more convenient.
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_reciprocal_sine_difference_quotient_.wly:72:791
                  </span>
                </span>
              </p>
            </CodexSuggestion>
          </Solution>
        </Exercise>
        <Exercise
          work="ing"
          number={5}
        >
          <ExerciseStatement id="_109_h.a.i_">
            <OuterP>
              <b>
                Exercise 5.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Keeping {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_change_in_f_.wly:5:5
                </span>
              </span>
              <Math>
                $A$
              </Math>
              {" "} as in {" "}
              <InChapterLink
                href="#_104_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 1
              </InChapterLink>
              &#8288;,
              and assuming that {" "}
              <Math>
                $A$
              </Math>
              {" "} is differentiable at the point {" "}
              <NoBreak>
                <Math>
                  $t_0 \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} 
              how is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123; (\te&#123;change in &#125; A\te&#123; between &#125; t = t_0 \te&#123; and &#125; t = t_0 + r) \over r&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                written in “pure math”,
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_change_in_f_.wly:13:5
                </span>
              </span>
              {" "}
              {" "}
              and what does this fraction approach as {" "}
              <Math>
                $r$
              </Math>
              {" "} approaches {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The “pure math” version is
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_change_in_f_.wly:18:9
                </span>
              </span>
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                &#123;A(t_0 + r) - A(t_0)\over r&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </Boxed>
            <OuterP>
              <span class="t-3003-c">
                which approaches
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_change_in_f_.wly:25:9
                </span>
              </span>
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                A'(t_0)
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </Boxed>
            <OuterP>
              <span class="t-3003-c">
                as {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_change_in_f_.wly:32:9
                </span>
              </span>
              <Math>
                $r$
              </Math>
              {" "} approaches {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "} per {" "}
              <InChapterLink
                href="#_106_h.a.i_"
                class="in-chapter-link"
              >
                Note 1 of Exercise 3
              </InChapterLink>
              &#8288;. (This is a
              difference quotient, notwitstanding the renaming of {" "}
              <NoBreak>
                “
                <Math>
                  $h$
                </Math>
                ”
              </NoBreak>
              {" "} to {" "}
              <NoBreak>
                “
                <Math>
                  $r$
                </Math>
                ”,
              </NoBreak>
              {" "}
              which makes no difference*.) (*No pun intended.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise
          ref="rence"
          number={6}
        >
          <ExerciseStatement id="_110_h.a.i_">
            <OuterP>
              <b>
                Exercise 6.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                If you scale the graph of a function {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_first_law_of_differentiation_.wly:5:5
                </span>
              </span>
              <Math>
                $f$
              </Math>
              {" "}
              vertically by a factor {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                —i.e.,
              </NoBreak>
              {" "} multiply
              each output by {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                —is
              </NoBreak>
              {" "} the derivative
              also scaled by {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Yes. For a joke way
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_first_law_of_differentiation_.wly:12:9
                </span>
              </span>
              {" "}
              {" "}
              of seeing it, here is a graph of a
              putative function {" "}
              <Math>
                $f$
              </Math>
              {" "} before and after
              scaling:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/lJqH.svg"
              local_url="./images/svg_ch4_scaling_figure.svg"
              intrinsicWidth={670}
              intrinsicHeight={280}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The second graph truly is the first
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_first_law_of_differentiation_.wly:20:9
                </span>
              </span>
              {" "}
              {" "}
              graph vertically scaled by a factor {" "}
              <Math>
                $2$
              </Math>
              {" "}
              because the scale on the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis has
              been doubled. This means that the ratio
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\te&#123;rise&#125;\over \te&#123;run&#125;&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                has doubled in the second graph, because
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_first_law_of_differentiation_.wly:29:9
                </span>
              </span>
              {" "}
              {" "}
              “rise” has doubled (each {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinate
              </NoBreak>
              {" "}
              is twice as large), whereas “run” stays
              the same. (So the slope of the tangent has
              doubled, so the derivative is doubled.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise
          ref="rence"
          number={7}
        >
          <ExerciseStatement id="_111_h.a.i_">
            <OuterP>
              <b>
                Exercise 7.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                The solution to the previous exercise
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_define_product_of_constant_and_function_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              erroneously assumes that the product of a
              constant and a function has been defined. It
              has not! Keeping in mind that the {" "}
              <i>
                sum
              </i>
              {" "}
              of two functions {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $g: \rr \ra \rr$
              </Math>
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
                is defined by the equation
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_define_product_of_constant_and_function_.wly:14:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f + g = (x \ra f(x) + g(x))
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                while their composition is defined by
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_define_product_of_constant_and_function_.wly:20:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f \circ g = (x \ra f(g(x)))
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                what is the corresponding definition for
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_define_product_of_constant_and_function_.wly:26:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              cf
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                where {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_define_product_of_constant_and_function_.wly:32:5
                </span>
              </span>
              <Math>
                $c \in \rr$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $f : \rr \ra \rr$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The “logical” definition is:
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_define_product_of_constant_and_function_.wly:36:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              cf = (x \ra cf(x))
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                where the product {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_define_product_of_constant_and_function_.wly:42:9
                </span>
              </span>
              <NoBreak>
                “
                <Math>
                  $cf(x)$
                </Math>
                ”
              </NoBreak>
              {" "} is ordinary multiplication of the real numbers {" "}
              <Math>
                $c$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $f(x)$
                </Math>
                !
              </NoBreak>
              {" "} (In this way, the product of
              a function by a real number “bootstraps”
              off of the ordinary product of real numbers—as in the definition...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              fg = (x \ra f(x)g(x))
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of the product of two functions from {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_define_product_of_constant_and_function_.wly:50:9
                </span>
              </span>
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
              or with the case of function addition, that
              relies on real number addition.) BUT. There
              is a MORE CLEVER way of doing the definition.
              Which is to define
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              cf = (x \ra c)f
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                where the right-hand-side is {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_define_product_of_constant_and_function_.wly:60:9
                </span>
              </span>
              <i>
                one function
                times another
              </i>
              , i.e., {" "}
              <i>
                a product of functions
              </i>
              ,
              which is something that has ITSELF ALREADY BEEN
              DEFINED. (!) (To wit, the definition of
              function multiplication is that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              fg = (x \ra f(x)g(x))
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of course.) (Wait we just mentioned that
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_define_product_of_constant_and_function_.wly:70:9
                </span>
              </span>
              {" "}
              {" "}
              already.) Mathematicians LOVE to bootstrap off
              an intermediate step, instead of going back to
              the beginning, so the second way is clearly the
              superior definition!!
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={8}>
          <ExerciseStatement id="_112_h.a.i_">
            <OuterP>
              <b>
                Exercise 8.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                What English-language aphorism might summarize the identity
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_sum_rule_summary_.wly:4:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f + g)' = f' + g'
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (true for differentiable functions {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_sum_rule_summary_.wly:9:5
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
                  $g$
                </Math>
                )?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                One can say
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_sum_rule_summary_.wly:13:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                the derivative of the sum is the sum of the
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_sum_rule_summary_.wly:15:11
                </span>
              </span>
              {" "}
              {" "}
              derivatives
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                or
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_sum_rule_summary_.wly:18:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                the rate of change of the sum is the sum of
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_sum_rule_summary_.wly:20:11
                </span>
              </span>
              {" "}
              {" "}
              the rates of change
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                or (we made this one up)
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_sum_rule_summary_.wly:23:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                the rate of change of the aggregate is the sum
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_sum_rule_summary_.wly:25:11
                </span>
              </span>
              {" "}
              {" "}
              of the rates of change of the components
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (etc).
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_sum_rule_summary_.wly:28:9
                </span>
              </span>
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
                  This identity is known as the {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_sum_rule_summary_.wly:32:13
                  </span>
                </span>
                <i>
                  sum rule
                </i>
                .
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={9}>
          <ExerciseStatement id="_113_h.a.i_">
            <OuterP>
              <b>
                Exercise 9.
              </b>
            </OuterP>
            <CodexSuggestions>
              <p>
                <span class="t-3003-c">
                  The rats construction now follows the difference-quotient exercises in this chapter. Preserve the metaphor and diagrams. A possible short follow-up asks what changes if B crosses first; the intermediate decomposition changes but the derivative formula agrees. Before the general indexed product exercise, consider a three-factor case.
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:6:9
                  </span>
                </span>
              </p>
            </CodexSuggestions>
            <OuterP>
              <span class="t-3003-c">
                In this exercise we consider two points
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:8:5
                </span>
              </span>
              {" "}
              {" "}
              in time {" "}
              <Math>
                $t_0$
              </Math>
              {" "} and {" "}
              <Math>
                $t_0 + \Delta&#123;&#125;t$
              </Math>
              {" "} (here
              {" "}
              <NoBreak>
                “
                <Math>
                  $\Delta&#123;&#125;t$
                </Math>
                ”,
              </NoBreak>
              {" "} read “delta {" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                ”,
              </NoBreak>
              {" "} is a
              standard notation for a small amount of
              time):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/rzVH.svg"
              local_url="./images/svg_ch4_RATS_timeline.svg"
              intrinsicWidth={450}
              intrinsicHeight={60}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                We also consider quantities {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:17:5
                </span>
              </span>
              <Math>
                $A$
              </Math>
              {" "} and {" "}
              <Math>
                $B$
              </Math>
              {" "}
              that are changing with time; {" "}
              <Math>
                $A$
              </Math>
              {" "} and {" "}
              <Math>
                $B$
              </Math>
              {" "}
              have some value at {" "}
              <NoBreak>
                <Math>
                  $t_0$
                </Math>
                ,
              </NoBreak>
              {" "} and, say, grow
              to be larger at {" "}
              <NoBreak>
                <Math>
                  $t_0 + \Delta&#123;&#125;t$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Axof.svg"
              local_url="./images/svg_ch4_RATS_timeline_with_A_B.svg"
              intrinsicWidth={450}
              intrinsicHeight={200}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                We are interested in the change in the product
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:25:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large AB
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                over this time.
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:31:5
                </span>
              </span>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                To introduce an unsolicited metaphor,
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:33:5
                </span>
              </span>
              {" "}
              {" "}
              imagine {" "}
              <Math>
                $A$
              </Math>
              {" "} and {" "}
              <Math>
                $B$
              </Math>
              {" "} as
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/zn1D.svg"
              local_url="./images/svg_ch4_RATS_rats.svg"
              intrinsicWidth={180}
              intrinsicHeight="164.25"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                that are crossing a hallway,
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:39:5
                </span>
              </span>
              {" "}
              {" "}
              and the hallway is surveyed by
              a cat. One side of the hallway is time
              {" "}
              <NoBreak>
                <Math>
                  $t_0$
                </Math>
                ,
              </NoBreak>
              {" "} the other side of the hallway is
              time {" "}
              <NoBreak>
                <Math>
                  $t_0 + \Delta&#123;&#125;t$
                </Math>
                .
              </NoBreak>
              {" "} So great is 
              their terror
              that {" "}
              <Math>
                $A$
              </Math>
              {" "} and {" "}
              <Math>
                $B$
              </Math>
              {" "} have decided to
              cross the hallway one at a time—first
              {" "}
              <Math>
                $A$
              </Math>
              {" "} will go, then {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                .
              </NoBreak>
              {" "} In so, 
              three moments of interest
              can be separated
              (“moments” that exist inside the
              metaphorical timeline of the story, not
              on the {" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                -number
              </NoBreak>
              {" "} line, to be clear):
              <ImageLeft
                offsetX=" 0.5em"
                offsetY="-0.5em"
                src="/build-img/svgo-svg/zR89.svg"
                local_url="./images/svg_ch4_RATS_corridor_cloud.svg"
                intrinsicWidth={750}
                intrinsicHeight="552.632"
              />
            </OuterP>
            <TextParent>
              <ol style="margin:0 1.5em 0.5em 2em;list-style:auto;list-style-position:outside;">
                <li style="margin-top:0.5em">
                  <span class="t-3003-c">
                    when {" "}
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:65:17
                    </span>
                  </span>
                  <Math>
                    $A$
                  </Math>
                  <span class="t-3003-c">
                    {" "} and {" "}
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:65:25
                    </span>
                  </span>
                  <Math>
                    $B$
                  </Math>
                  <span class="t-3003-c">
                    {" "} are both still at {" "}
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:65:33
                    </span>
                  </span>
                  <Math>
                    $t_0$
                  </Math>
                </li>
                <li style="margin-top:0.5em">
                  <span class="t-3003-c">
                    when {" "}
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:69:17
                    </span>
                  </span>
                  <Math>
                    $A$
                  </Math>
                  <span class="t-3003-c">
                    {" "} has made it to {" "}
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:69:25
                    </span>
                  </span>
                  <NoBreak>
                    <Math>
                      $t_0 + \Delta&#123;&#125;t$
                    </Math>
                    <span class="t-3003-c">
                      ,
                      <span class="t-3003">
                        ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:69:58
                      </span>
                    </span>
                  </NoBreak>
                  {" "}{" "}
                  {" "}
                  {" "}
                  <span class="t-3003-c">
                    and {" "}
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:70:17
                    </span>
                  </span>
                  <Math>
                    $B$
                  </Math>
                  <span class="t-3003-c">
                    {" "} is still at {" "}
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:70:24
                    </span>
                  </span>
                  <Math>
                    $t_0$
                  </Math>
                </li>
                <li style="margin-top:0.5em">
                  <del>
                    <span class="t-3003-c">
                      when {" "}
                      <span class="t-3003">
                        ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:75:21
                      </span>
                    </span>
                    <i>
                      <span class="t-3003-c">
                        B
                        <span class="t-3003">
                          ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:75:27
                        </span>
                      </span>
                    </i>
                    <span class="t-3003-c">
                      's tail is sticking out of the
                      <span class="t-3003">
                        ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:75:29
                      </span>
                    </span>
                    {" "}
                    {" "}
                    cat's mouth, and
                  </del>
                  <span class="t-3003-c">
                    {" "} when {" "}
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:77:18
                    </span>
                  </span>
                  <Math>
                    $A$
                  </Math>
                  <span class="t-3003-c">
                    {" "} and {" "}
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:77:27
                    </span>
                  </span>
                  <Math>
                    $B$
                  </Math>
                  <span class="t-3003-c">
                    {" "} have both made it
                    <span class="t-3003">
                      ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:77:35
                    </span>
                  </span>
                  {" "}
                  {" "}
                  to {" "}
                  <Math>
                    $t_0 + \Delta&#123;&#125;t$
                  </Math>
                </li>
              </ol>
            </TextParent>
            <OuterP>
              <span class="t-3003-c">
                Correspondingly, the product
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:80:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large AB
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                changes in two increments: first as {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:86:5
                </span>
              </span>
              <Math>
                $A$
              </Math>
              {" "}
              makes it to the other side of the hallway,
              and {" "}
              <Math>
                $A$
              </Math>
              {" "} grows bigger; then as {" "}
              <Math>
                $B$
              </Math>
              {" "} joins
              him/her, and {" "}
              <Math>
                $B$
              </Math>
              {" "} grows bigger. In an
              equation:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/S2-s.svg"
              local_url="./images/svg_ch4_RATS_equation.svg"
              intrinsicWidth={700}
              intrinsicHeight={128}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                If we divide the above equation by {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:95:5
                </span>
              </span>
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "}
              and let {" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "} drop to {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "} what does
              each term become?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Dividing by {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:101:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\Delta&#123;&#125;t$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Im2x.svg"
              local_url="./images/svg_ch4_RATS_equation_over_Dt.svg"
              intrinsicWidth={700}
              intrinsicHeight={170}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The first term on the left-hand side comes
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:106:9
                </span>
              </span>
              {" "}
              {" "}
              out to
              <ImageRight
                src="/build-img/svgo-svg/xIsR.svg"
                local_url="./images/svg_ch4_RATS_first_term_lhs_cloud.svg"
                intrinsicWidth={900}
                intrinsicHeight={300}
              />
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;(AB)(t_0 + \Delta t) - (AB)(t_0)\over \Delta t&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                when written out, which approaches
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:116:9
                </span>
              </span>
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                (AB)'(t_0)
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </Boxed>
            <OuterP>
              <span class="t-3003-c">
                as {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:123:9
                </span>
              </span>
              <Math>
                $\Delta t$
              </Math>
              {" "} approaches {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "} 
              because it has the
              form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;f(t_0 + \Delta&#123;&#125;t) - f(t_0)\over \Delta&#123;&#125;t&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of a difference quotient, with {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:131:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $f = AB$
                </Math>
                .
              </NoBreak>
              {" "} (Cf. {" "}
              <InChapterLink
                href="#_106_h.a.i_"
                class="in-chapter-link"
              >
                Note 1 of Exercise 3
              </InChapterLink>
              &#8288;.)
              (Nb: We assume differentiability, otherwise
              there is no conclusion to draw.)
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                [Nb: {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:136:9
                </span>
              </span>
              <Math>
                $AB : \rr \ra \rr$
              </Math>
              {" "} is the function
              given by
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (AB)(t) = A(t)B(t)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as per the definition of function multiplication. !!]
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:143:9
                </span>
              </span>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                The first term on the right becomes
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:145:9
                </span>
              </span>
              <ImageRight
                src="/build-img/svgo-svg/5bqq.svg"
                local_url="./images/svg_ch4_RATS_first_term_cloud.svg"
                intrinsicWidth={900}
                intrinsicHeight={300}
              />
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;A(t_0 + \Delta&#123;&#125;t)B(t_0) - A(t_0)B(t_0) \over \Delta&#123;&#125;t&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                when written out, or
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:154:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              B(t_0)\cdot&#123;A(t_0 + \Delta&#123;&#125;t) - A(t_0) \over \Delta&#123;&#125;t&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by factoring {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:160:9
                </span>
              </span>
              <NoBreak>
                “
                <Math>
                  $B(t_0)$
                </Math>
                ”
              </NoBreak>
              {" "} from the numerator; but
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;A(t_0 + \Delta&#123;&#125;t) - A(t_0) \over \Delta&#123;&#125;t&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                approaches
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:166:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A'(t_0)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:172:9
                </span>
              </span>
              <Math>
                $\Delta t$
              </Math>
              {" "} approaches {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "} being a difference 
              quotient 
              (cf. {" "}
              <InChapterLink
                href="#_106_h.a.i_"
                class="in-chapter-link"
              >
                Note 1 of Exercise 3
              </InChapterLink>
              &#8288;),
              so the whole term approaches
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                B(t_0)A'(t_0)
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </Boxed>
            <OuterP>
              <span class="t-3003-c">
                as {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:183:9
                </span>
              </span>
              <Math>
                $\Delta t$
              </Math>
              {" "} approaches {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Lastly the second term on the right-hand side
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:185:9
                </span>
              </span>
              {" "}
              {" "}
              comes out to
              <ImageRight
                src="/build-img/svgo-svg/9OXS.svg"
                local_url="./images/svg_ch4_RATS_second_term_cloud.svg"
                intrinsicWidth={900}
                intrinsicHeight={300}
              />
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;A(t_0 + \Delta&#123;&#125;t)B(t_0+\Delta&#123;&#125;t) - A(t_0+ \Delta&#123;&#125;t)B(t_0) \over \Delta&#123;&#125;t&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                when written out, or
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:195:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A(t_0 + \Delta&#123;&#125;t)\cdot&#123;B(t_0+\Delta&#123;&#125;t) - B(t_0) \over \Delta&#123;&#125;t&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by factoring out {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:202:9
                </span>
              </span>
              <NoBreak>
                “
                <Math>
                  $A(t_0 + \Delta&#123;&#125;t)$
                </Math>
                ”
              </NoBreak>
              {" "}
              from the numerator; here, on the one hand,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;B(t_0+\Delta&#123;&#125;t) - B(t_0) \over \Delta&#123;&#125;t&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                approaches
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:209:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              B'(t_0)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:215:9
                </span>
              </span>
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "} approaches {" "}
              <Math>
                $0$
              </Math>
              {" "} by the 
              afore-mentioned property of 
              difference quotients,
              while, on the other hand,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A(t_0 + \Delta&#123;&#125;t)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                approaches
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:225:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A(t_0)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                because, technically, the differentiability {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:231:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $A$
                </Math>
                —that
              </NoBreak>
              {" "}
              we are post-hoc-ad-hoc-cum-hoc assuming—implies the
              {" "}
              <i>
                continuity
              </i>
              {" "} of {" "}
              <Math>
                $A$
              </Math>
              {" "} (anyway, nevermind);
              so as the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                product-of-two-things-each-approaching-a-certain-value-approaches-the-product-of-the-two-approached-values
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:236:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                the whole term approaches
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:238:9
                </span>
              </span>
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                A(t_0)B'(t_0)
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </Boxed>
            <OuterP>
              <span class="t-3003-c">
                as {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:245:9
                </span>
              </span>
              <Math>
                $\Delta t$
              </Math>
              {" "} approaches {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                .
              </NoBreak>
              {" "} {" "}
              <Math>
                $\ra$
              </Math>
              {" "} ~ The End ~
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
                  We deduce
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:249:13
                  </span>
                </span>
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  (AB)'(t_0) = B(t_0)A'(t_0) + A(t_0)B'(t_0)
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </Boxed>
              <OuterP>
                <span class="t-3003-c">
                  since, as the three terms inch closer and closer to
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:256:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (AB)'(t_0),\,\,B(t_0)A'(t_0)\,\,\,\te&#123; and &#125;\,\,\,A(t_0)B'(t_0)
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  respectively as {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:262:13
                  </span>
                </span>
                <Math>
                  $\Delta t$
                </Math>
                {" "} approaches {" "}
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  ,
                </NoBreak>
                {" "} it
                would be impossible for the equation boxed in red
                to {" "}
                <i>
                  not
                </i>
                {" "} hold—if this equation
                didn't hold, then
                at some point, “something would have to break”
                in the original equation...
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/Im2x.svg"
                local_url="./images/svg_ch4_RATS_equation_over_Dt.svg"
                intrinsicWidth={700}
                intrinsicHeight={170}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...as {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:272:13
                  </span>
                </span>
                <Math>
                  $\Delta t$
                </Math>
                {" "} goes to {" "}
                <NoBreak>
                  <Math>
                    $0$
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
                  Keeping things alphabetical, this is usually written
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:275:13
                  </span>
                </span>
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  (AB)'(t_0) = A'(t_0)B(t_0) + A(t_0)B'(t_0)
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </Boxed>
              <OuterP>
                <span class="t-3003-c">
                  with {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:282:13
                  </span>
                </span>
                <NoBreak>
                  “
                  <Math>
                    $A'(t_0)B(t_0)$
                  </Math>
                  ”
                </NoBreak>
                {" "} in the middle, valid
                when {" "}
                <Math>
                  $A$
                </Math>
                {" "} and {" "}
                <Math>
                  $B$
                </Math>
                {" "} (and therefore, one can show by
                this computation, {" "}
                <NoBreak>
                  <Math>
                    $AB$
                  </Math>
                  )
                </NoBreak>
                {" "} are differentiable at {" "}
                <NoBreak>
                  <Math>
                    $t_0 \in \rr$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                or
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  (AB)' = A'B + AB'
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </Boxed>
              <OuterP>
                <span class="t-3003-c">
                  more shortly, for {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:292:13
                  </span>
                </span>
                <Math>
                  $A, B : \rr \ra \rr$
                </Math>
                {" "} differentiable, or
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  (fg)' = f'g + fg'
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </Boxed>
              <OuterP>
                <span class="t-3003-c">
                  if we replace {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:299:13
                  </span>
                </span>
                <NoBreak>
                  “
                  <Math>
                    $A$
                  </Math>
                  ”
                </NoBreak>
                {" "} and {" "}
                <NoBreak>
                  “
                  <Math>
                    $B$
                  </Math>
                  ”
                </NoBreak>
                {" "} by the more familiar {" "}
                <NoBreak>
                  “
                  <Math>
                    $f$
                  </Math>
                  ”
                </NoBreak>
                {" "} and {" "}
                <NoBreak>
                  “
                  <Math>
                    $g$
                  </Math>
                  ”.
                </NoBreak>
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 3.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  This result is known as the {" "}
                  <span class="t-3003">
                    ./src/content/ch5a_product/product^exercises/_product_rule_v_physical_.wly:303:13
                  </span>
                </span>
                <i>
                  product rule
                </i>
                .
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={10}>
          <ExerciseStatement id="_114_h.a.i_">
            <OuterP>
              <b>
                Exercise 10.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                What does...
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_big_A_product_approach_as_h_goes_to_0_.wly:4:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A_1(t_0 + h) \,\times\, \dots \,\times\, A_&#123;i-1&#125;(t_0 + h) \,\times\, &#123;A_i(t_0 + h) - A_i(t_0)\over h&#125; \,\times\, A_&#123;i + 1&#125;(t_0) \,\times\, \cdots  \,\times\, A_n(t_0)
              $$
              <ImageRight
                src="/build-img/svgo-svg/6ZYS.svg"
                offsetX="2rem"
                atLeastAsWide={true}
                local_url="./images/svg_ch4_big_product_parchment_cloud.svg"
                intrinsicWidth={700}
                intrinsicHeight={500}
              />
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...approach as {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_big_A_product_approach_as_h_goes_to_0_.wly:14:5
                </span>
              </span>
              <Math>
                $h$
              </Math>
              {" "} goes to {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "} if {" "}
              <Math>
                $A_1, \dots, A_n$
              </Math>
              {" "}
              {" "}
              <Math>
                $: \rr \ra \rr$
              </Math>
              {" "} are differentiable at the point {" "}
              <NoBreak>
                <Math>
                  $t_0$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Start with the fraction in the middle:
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_big_A_product_approach_as_h_goes_to_0_.wly:19:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/c9db.svg"
              local_url="./images/svg_ch4_big_product_fraction_outline.svg"
              intrinsicWidth={800}
              intrinsicHeight={120}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                This is seen to be a Newton quotient
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_big_A_product_approach_as_h_goes_to_0_.wly:24:9
                </span>
              </span>
              {" "}
              {" "}
              (cf. {" "}
              <InChapterLink
                href="#_107_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 3
              </InChapterLink>
              &#8288;)
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f(x + h) - f(x)\over h
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                with {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_big_A_product_approach_as_h_goes_to_0_.wly:31:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $f = A_i$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $x = t_0$
                </Math>
                ,
              </NoBreak>
              {" "} per which
              (&#8288;
              <InChapterLink
                href="#_107_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 3
              </InChapterLink>
              {" "} Note 3), the fraction approaches
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A_i'(t_0)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_big_A_product_approach_as_h_goes_to_0_.wly:38:9
                </span>
              </span>
              <Math>
                $h$
              </Math>
              {" "} approaches {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "} since {" "}
              <Math>
                $A_i$
              </Math>
              {" "} is differentiable at {" "}
              <NoBreak>
                <Math>
                  $t_0$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Next down in order of interesting-ness we presumably
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_big_A_product_approach_as_h_goes_to_0_.wly:40:9
                </span>
              </span>
              {" "}
              {" "}
              have the terms {" "}
              <Math>
                $A_1(t_0 + h)$
              </Math>
              {" "} through {" "}
              <Math>
                $A_&#123;i-1&#125;(t_0 + h)$
              </Math>
              {" "}
              at the beginning of the product...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/B9Zl.svg"
              local_url="./images/svg_ch4_big_product_prefix_outline.svg"
              intrinsicWidth={800}
              intrinsicHeight={100}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...; here the
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_big_A_product_approach_as_h_goes_to_0_.wly:47:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                differentiability
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_big_A_product_approach_as_h_goes_to_0_.wly:49:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_big_A_product_approach_as_h_goes_to_0_.wly:51:9
                </span>
              </span>
              <Math>
                $A_1$
              </Math>
              {" "} at {" "}
              <Math>
                $t_0$
              </Math>
              {" "} implies the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                continuity
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_big_A_product_approach_as_h_goes_to_0_.wly:53:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_big_A_product_approach_as_h_goes_to_0_.wly:55:9
                </span>
              </span>
              <Math>
                $A_1$
              </Math>
              {" "} at {" "}
              <NoBreak>
                <Math>
                  $t_0$
                </Math>
                ,
              </NoBreak>
              {" "} which implies that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A_1(t_0 + h)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                approaches
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_big_A_product_approach_as_h_goes_to_0_.wly:61:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A_1(t_0)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_big_A_product_approach_as_h_goes_to_0_.wly:67:9
                </span>
              </span>
              <Math>
                $h$
              </Math>
              {" "} approaches {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                .
              </NoBreak>
              {" "} (These various
              technicalities concerning a generic function
              {" "}
              <Math>
                $f : \rr \ra \rr$
              </Math>
              {" "} are mentioned in the solution
              to Exercise 17.) Similarly for {" "}
              <NoBreak>
                <Math>
                  $A_2(t_0 + h)$
                </Math>
                ,
              </NoBreak>
              {" "}
              etc, up to {" "}
              <NoBreak>
                <Math>
                  $A_&#123;i-1&#125;(t_0 + h)$
                </Math>
                ,
              </NoBreak>
              {" "} so
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A_1(t_0 + h) \,\times\, \dots \,\times\, A_&#123;i-1&#125;(t_0 + h)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                approaches
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_big_A_product_approach_as_h_goes_to_0_.wly:77:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A_1(t_0) \,\times\, \dots \,\times\, A_&#123;i-1&#125;(t_0)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_big_A_product_approach_as_h_goes_to_0_.wly:83:9
                </span>
              </span>
              <Math>
                $h$
              </Math>
              {" "} approaches {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                .
              </NoBreak>
              {" "} (If some quantities are
              each approaching a different value, then the
              product-of-the-quantities will approach the
              product-of-the-values—something not mentioned
              in the solution to Exercise 17, but that might
              have been.)
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Lastly, the tail of the product contains no {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_big_A_product_approach_as_h_goes_to_0_.wly:90:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $h$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/TQjR.svg"
              local_url="./images/svg_ch4_big_product_suffix_outline.svg"
              intrinsicWidth={800}
              intrinsicHeight={100}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Because {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_big_A_product_approach_as_h_goes_to_0_.wly:95:9
                </span>
              </span>
              <Math>
                $h$
              </Math>
              {" "} does not appear here, the tail end
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                stays put
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_big_A_product_approach_as_h_goes_to_0_.wly:97:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                where it is, irrespective of the value of {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_big_A_product_approach_as_h_goes_to_0_.wly:99:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $h$
                </Math>
                .
              </NoBreak>
              {" "}
              So that was easy! Altogether, the answer is
              therefore:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/hUGM.svg"
              local_url="./images/svg_ch4_big_product_final_answer.svg"
              intrinsicWidth={700}
              intrinsicHeight={150}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...with a lone {" "}
                <span class="t-3003">
                  ./src/content/ch5a_product/product^exercises/_big_A_product_approach_as_h_goes_to_0_.wly:106:9
                </span>
              </span>
              <NoBreak>
                “
                <Math>
                  $A_i'$
                </Math>
                ”
              </NoBreak>
              {" "} in the middle.
            </OuterP>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};