import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Boxed  from "~/components/Boxed";
import CodexSuggestions,  { CodexSuggestion }  from "~/components/CodexSuggestions";
import { CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { MathBlock, Math }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
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
      id="_118_h.a.i_"
      path="/article/chapter7"
    >
      <ArticleTitle banner="Chapter 7:">
        The Product Rule
      </ArticleTitle>
      <Section id="section-1">
        <CodexSuggestion>
          <p>
            <b>
              Finite changes and products.
            </b>
          </p>
          <p class="indent-10">
            Proposed chapter: use the existing finite-change and difference-quotient exercises to prepare the rats construction. The main question is how to account for a change in a product when both factors change. The intermediate state obtained by changing one factor at a time need never actually occur, yet it gives an exact decomposition.
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            The exercises below have been moved unchanged from Chapter 4. A possible development is concrete change, elapsed time, secant slope, shrinking interval, then scaling and sum rules, followed by the product rule. Promote selected explanations to main text later. Keep this short: the purpose of the move is also to give Chapter 4 a visible finish line.
          </p>
        </CodexSuggestion>
        <CodexSuggestion>
          <p>
            Preserve the rats and their diagrams. Possible extensions: let B cross first and compare the exact decompositions; try three factors before the indexed generalization. Do not add a large differentiation drill set just to fill the chapter.
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
        id="_117_h.a.i_"
      >
        <Exercise number={1}>
          <ExerciseStatement id="_106_h.a.i_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              {" "}
              If {" "}
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
              the change in {" "}
              <Math>
                $A$
              </Math>
              {" "} between {" "}
              <Math>
                $t = 11.199$
              </Math>
              {" "} and
              {" "}
              <Math>
                $t = 11.2$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              mathematically?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              This is
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                A(11.2) - A(11.199)
                $$
              </MathBlock>
            </Boxed>
            <OuterP>
              or, literally, “the value of {" "}
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
          <ExerciseStatement id="_107_h.a.i_">
            <OuterP>
              <b>
                Exercise 2.
              </b>
              {" "}
              By what should the change mentioned in {" "}
              <InChapterLink
                href="#_106_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 1
              </InChapterLink>
              {" "}
              be divided to obtain a difference quotient (cf. {" "}
              <InChapterLink
                href="#_109_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 3
              </InChapterLink>
              &#8288;)?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              One should divide by
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0.001
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              since {" "}
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
            </MathBlock>
            <Pause />
            <OuterP>
              is a difference quotient of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;f(x + h) - f(x) \over h&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              with {" "}
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
                {" "}
                Very—
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
              </MathBlock>
              <Pause />
              <OuterP>
                is also a difference quotient, equal to the one
                above in value if not in syntax; in this case
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x = 11.2
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                h = -0.001
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                compared to
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x = 11.199
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                h = 0.001
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                above; so this diagram can illustrate a difference quotient in either of two ways, shown below:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/F0SL.svg"
                intrinsicWidth={456}
                intrinsicHeight={420}
              />
              <Pause />
              <Image
                src="/build-img/svgo-svg/cWTG.svg"
                intrinsicWidth={456}
                intrinsicHeight={420}
              />
              <Pause />
              <Image
                src="/build-img/svgo-svg/oADf.svg"
                intrinsicWidth={456}
                intrinsicHeight={420}
              />
              <Pause />
              <OuterP>
                In the last diagram {" "}
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
          <ExerciseStatement id="_109_h.a.i_">
            <OuterP>
              <b>
                Exercise 3.
              </b>
            </OuterP>
            <CodexSuggestions>
              <p>
                Moved here with the change-in-A and change-in-f exercises from Chapter 4. A possible order is concrete change, elapsed time, secant slope, then shrinking interval. Revisit the quotient’s units in dimensional analysis, perhaps as an exercise rather than another main-text explanation.
              </p>
            </CodexSuggestions>
            <OuterP>
              The fraction
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;f(x+h) - f(x) \over h&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              where {" "}
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
              intrinsicWidth={456}
              intrinsicHeight={420}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The teacher would like to see:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/cWTG.svg"
              intrinsicWidth={456}
              intrinsicHeight={420}
            />
            <Pause />
            <OuterP>
              Thus
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;f(x + h) - f(x)\over h&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              has the form {" "}
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
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x + h, f(x + h)).
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                Vocabulary.
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
            <SolutionNote id="_108_h.a.i_">
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                If we let {" "}
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
              </MathBlock>
              <Pause />
              <OuterP>
                because the secant approaches the tangent, and its slope approaches the tangent’s slope, {" "}
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
              </MathBlock>
              <Pause />
              <OuterP>
                is undefined.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={4}>
          <ExerciseStatement id="_110_h.a.i_">
            <OuterP>
              <b>
                Exercise 4.
              </b>
            </OuterP>
            <CodexSuggestion>
              <p>
                <b>
                  Draft: a small slope hiding in a reciprocal.
                </b>
                {" "} Let
              </p>
              <Pause />
              <MathBlock>
                $$
                F(x)=&#123;1\over 10+\sin x&#125;.
                $$
              </MathBlock>
              <Pause />
              <p>
                a. Sketch or plot {" "}
                <Math>
                  $F$
                </Math>
                {" "} near {" "}
                <NoBreak>
                  <Math>
                    $x=0$
                  </Math>
                  .
                </NoBreak>
                {" "} What is {" "}
                <NoBreak>
                  <Math>
                    $F(0)$
                  </Math>
                  ?
                </NoBreak>
                {" "} Is the function increasing or decreasing there? Zoom in vertically until its change is visible.
              </p>
              <p class="indent-10">
                b. Calculate the secant slopes
              </p>
              <Pause />
              <MathBlock>
                $$
                &#123;F(h)-F(0)\over h&#125;
                $$
              </MathBlock>
              <Pause />
              <p>
                for {" "}
                <NoBreak>
                  <Math>
                    $h=0.1,-0.1,0.01,-0.01,0.001,-0.001$
                  </Math>
                  .
                </NoBreak>
                {" "} Use radians. What value do the slopes seem to approach?
              </p>
              <p class="indent-10">
                c. Put the two fractions in {" "}
                <Math>
                  $F(h)-F(0)$
                </Math>
                {" "} over a common denominator. Use the resulting difference quotient to find {" "}
                <NoBreak>
                  <Math>
                    $F'(0)$
                  </Math>
                  ,
                </NoBreak>
                {" "} without a rule for differentiating reciprocals or compositions.
              </p>
              <p class="indent-10">
                d. Now look near {" "}
                <NoBreak>
                  <Math>
                    $x=2\eta$
                  </Math>
                  ,
                </NoBreak>
                {" "} another point where {" "}
                <NoBreak>
                  <Math>
                    $\sin x=0$
                  </Math>
                  .
                </NoBreak>
                {" "} Predict the sign of the derivative, check it with a few secant slopes, and adapt your calculation to find its value. Compare the two graphs using the same scales.
              </p>
            </CodexSuggestion>
          </ExerciseStatement>
          <Solution>
            <CodexSuggestion>
              <p>
                At {" "}
                <NoBreak>
                  <Math>
                    $x=0$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $F(0)=1/10$
                  </Math>
                  .
                </NoBreak>
                {" "} As the sine increases through zero, the denominator increases and its reciprocal decreases.
              </p>
              <p class="indent-10">
                The secant slopes are approximately:
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
              </MathBlock>
              <Pause />
              <p>
                The algebra explains the apparent limit of {" "}
                <NoBreak>
                  <Math>
                    $-0.01$
                  </Math>
                  :
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
              </MathBlock>
              <Pause />
              <p>
                As {" "}
                <Math>
                  $h$
                </Math>
                {" "} tends to zero, {" "}
                <Math>
                  $\sin h/h$
                </Math>
                {" "} tends to {" "}
                <Math>
                  $1$
                </Math>
                {" "} (the derivative of sine at zero), while {" "}
                <Math>
                  $10(10+\sin h)$
                </Math>
                {" "} tends to {" "}
                <NoBreak>
                  <Math>
                    $100$
                  </Math>
                  .
                </NoBreak>
                {" "} Hence {" "}
                <NoBreak>
                  <Math>
                    $F'(0)=-1/100$
                  </Math>
                  .
                </NoBreak>
              </p>
              <p class="indent-10">
                At {" "}
                <NoBreak>
                  <Math>
                    $a=2\eta$
                  </Math>
                  ,
                </NoBreak>
                {" "} the same subtraction gives
              </p>
              <Pause />
              <MathBlock>
                $$
                &#123;F(a+h)-F(a)\over h&#125;
                =-&#123;\sin(a+h)-\sin a\over h&#125;\,&#123;1\over 10(10+\sin(a+h))&#125;.
                $$
              </MathBlock>
              <Pause />
              <p>
                Here {" "}
                <Math>
                  $\sin a=0$
                </Math>
                {" "} again, but the sine has derivative {" "}
                <NoBreak>
                  <Math>
                    $-1$
                  </Math>
                  ,
                </NoBreak>
                {" "} so {" "}
                <NoBreak>
                  <Math>
                    $F'(2\eta)=1/100$
                  </Math>
                  .
                </NoBreak>
                {" "} The two reciprocal graphs pass through the same height with opposite slopes.
              </p>
              <Pause />
              <Image
                src="/build-img/svgo-svg/StUAXgSDnMgBnMgBcZqk9XqQ.svg"
                width="840px"
                intrinsicWidth={840}
                intrinsicHeight={390}
              />
            </CodexSuggestion>
            <CodexSuggestion>
              <p>
                <b>
                  Editorial note.
                </b>
                {" "} We want an exercise that explores this derivative visually, numerically, and algebraically through the difference quotient. The interest is the small change near a zero of sine: subtracting reciprocals reverses the sign and introduces two denominators approaching 10, explaining the factor {" "}
                <Math>
                  $1/100$
                </Math>
                {" "} without quoting a differentiation rule. The graphs above are a first draft; consider giving the student a broad plot before the magnified views, or movable secants. Keep equal scales for the comparison and make the vertical magnification explicit. A later variation could replace 10 by a positive constant greater than 1 and ask how the slope changes, but do not turn this into a general reciprocal-rule derivation unless it earns its place. Cosine near {" "}
                <Math>
                  $x=\eta$
                </Math>
                {" "} is an alternative if the surrounding sequence makes it more convenient.
              </p>
            </CodexSuggestion>
          </Solution>
        </Exercise>
        <Exercise
          work="ing"
          number={5}
        >
          <ExerciseStatement id="_111_h.a.i_">
            <OuterP>
              <b>
                Exercise 5.
              </b>
              {" "}
              Keeping {" "}
              <Math>
                $A$
              </Math>
              {" "} as in {" "}
              <InChapterLink
                href="#_106_h.a.i_"
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
            </MathBlock>
            <Pause />
            <OuterP>
              written in “pure math”,
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
              The “pure math” version is
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                &#123;A(t_0 + r) - A(t_0)\over r&#125;
                $$
              </MathBlock>
            </Boxed>
            <OuterP>
              which approaches
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                A'(t_0)
                $$
              </MathBlock>
            </Boxed>
            <OuterP>
              as {" "}
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
                href="#_108_h.a.i_"
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
          <ExerciseStatement id="_112_h.a.i_">
            <OuterP>
              <b>
                Exercise 6.
              </b>
              {" "}
              If you scale the graph of a function {" "}
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
              Yes. For a joke way
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
              intrinsicWidth={670}
              intrinsicHeight={280}
            />
            <Pause />
            <OuterP>
              The second graph truly is the first
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
            </MathBlock>
            <Pause />
            <OuterP>
              has doubled in the second graph, because
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
          <ExerciseStatement id="_113_h.a.i_">
            <OuterP>
              <b>
                Exercise 7.
              </b>
              {" "}
              The solution to the previous exercise
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
            </MathBlock>
            <Pause />
            <OuterP>
              is defined by the equation
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f + g = (x \ra f(x) + g(x))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              while their composition is defined by
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f \circ g = (x \ra f(g(x)))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              what is the corresponding definition for
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              cf
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              where {" "}
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
              The “logical” definition is:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              cf = (x \ra cf(x))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              where the product {" "}
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
            </MathBlock>
            <Pause />
            <OuterP>
              of the product of two functions from {" "}
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
            </MathBlock>
            <Pause />
            <OuterP>
              where the right-hand-side is {" "}
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
            </MathBlock>
            <Pause />
            <OuterP>
              of course.) (Wait we just mentioned that
              already.) Mathematicians LOVE to bootstrap off
              an intermediate step, instead of going back to
              the beginning, so the second way is clearly the
              superior definition!!
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={8}>
          <ExerciseStatement id="_114_h.a.i_">
            <OuterP>
              <b>
                Exercise 8.
              </b>
              {" "}
              What English-language aphorism might summarize the identity
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f + g)' = f' + g'
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (true for differentiable functions {" "}
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
              One can say
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the derivative of the sum is the sum of the
              derivatives
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              or
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the sum is the sum of
              the rates of change
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              or (we made this one up)
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the aggregate is the sum
              of the rates of change of the components
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              (etc).
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                This identity is known as the {" "}
                <i>
                  sum rule
                </i>
                .
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={9}>
          <ExerciseStatement id="_115_h.a.i_">
            <OuterP>
              <b>
                Exercise 9.
              </b>
            </OuterP>
            <CodexSuggestions>
              <p>
                The rats construction now follows the difference-quotient exercises in this chapter. Preserve the metaphor and diagrams. A possible short follow-up asks what changes if B crosses first; the intermediate decomposition changes but the derivative formula agrees. Before the general indexed product exercise, consider a three-factor case.
              </p>
            </CodexSuggestions>
            <OuterP>
              In this exercise we consider two points
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
              intrinsicWidth={450}
              intrinsicHeight={60}
            />
            <Pause />
            <OuterP>
              We also consider quantities {" "}
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
              intrinsicWidth={450}
              intrinsicHeight={200}
            />
            <Pause />
            <OuterP>
              We are interested in the change in the product
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large AB
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              over this time.
            </OuterP>
            <OuterP class="indent-10">
              To introduce an unsolicited metaphor,
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
              intrinsicWidth={180}
              intrinsicHeight="164.25"
            />
            <Pause />
            <OuterP>
              that are crossing a hallway,
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
                intrinsicWidth={750}
                intrinsicHeight="552.632"
              />
            </OuterP>
            <TextParent>
              <ol style="margin:0 1.5em 0.5em 2em;list-style:auto;list-style-position:outside;">
                <li style="margin-top:0.5em">
                  when {" "}
                  <Math>
                    $A$
                  </Math>
                  {" "} and {" "}
                  <Math>
                    $B$
                  </Math>
                  {" "} are both still at {" "}
                  <Math>
                    $t_0$
                  </Math>
                </li>
                <li style="margin-top:0.5em">
                  when {" "}
                  <Math>
                    $A$
                  </Math>
                  {" "} has made it to {" "}
                  <NoBreak>
                    <Math>
                      $t_0 + \Delta&#123;&#125;t$
                    </Math>
                    ,
                  </NoBreak>
                  {" "}
                  and {" "}
                  <Math>
                    $B$
                  </Math>
                  {" "} is still at {" "}
                  <Math>
                    $t_0$
                  </Math>
                </li>
                <li style="margin-top:0.5em">
                  <del>
                    when {" "}
                    <i>
                      B
                    </i>
                    's tail is sticking out of the
                    cat's mouth, and
                  </del>
                  {" "} when {" "}
                  <Math>
                    $A$
                  </Math>
                  {" "} and {" "}
                  <Math>
                    $B$
                  </Math>
                  {" "} have both made it
                  to {" "}
                  <Math>
                    $t_0 + \Delta&#123;&#125;t$
                  </Math>
                </li>
              </ol>
            </TextParent>
            <OuterP>
              Correspondingly, the product
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large AB
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              changes in two increments: first as {" "}
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
              intrinsicWidth={700}
              intrinsicHeight={128}
            />
            <Pause />
            <OuterP>
              If we divide the above equation by {" "}
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
              Dividing by {" "}
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
              intrinsicWidth={700}
              intrinsicHeight={170}
            />
            <Pause />
            <OuterP>
              The first term on the left-hand side comes
              out to
              <ImageRight
                src="/build-img/svgo-svg/xIsR.svg"
                intrinsicWidth={900}
                intrinsicHeight={300}
              />
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;(AB)(t_0 + \Delta t) - (AB)(t_0)\over \Delta t&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              when written out, which approaches
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                (AB)'(t_0)
                $$
              </MathBlock>
            </Boxed>
            <OuterP>
              as {" "}
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
            </MathBlock>
            <Pause />
            <OuterP>
              of a difference quotient, with {" "}
              <NoBreak>
                <Math>
                  $f = AB$
                </Math>
                .
              </NoBreak>
              {" "} (Cf. {" "}
              <InChapterLink
                href="#_108_h.a.i_"
                class="in-chapter-link"
              >
                Note 1 of Exercise 3
              </InChapterLink>
              &#8288;.)
              (Nb: We assume differentiability, otherwise
              there is no conclusion to draw.)
            </OuterP>
            <OuterP class="indent-10">
              [Nb: {" "}
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
            </MathBlock>
            <Pause />
            <OuterP>
              as per the definition of function multiplication. !!]
            </OuterP>
            <OuterP class="indent-10">
              The first term on the right becomes
              <ImageRight
                src="/build-img/svgo-svg/5bqq.svg"
                intrinsicWidth={900}
                intrinsicHeight={300}
              />
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;A(t_0 + \Delta&#123;&#125;t)B(t_0) - A(t_0)B(t_0) \over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              when written out, or
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              B(t_0)\cdot&#123;A(t_0 + \Delta&#123;&#125;t) - A(t_0) \over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by factoring {" "}
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
            </MathBlock>
            <Pause />
            <OuterP>
              approaches
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A'(t_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as {" "}
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
                href="#_108_h.a.i_"
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
              </MathBlock>
            </Boxed>
            <OuterP>
              as {" "}
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
              Lastly the second term on the right-hand side
              comes out to
              <ImageRight
                src="/build-img/svgo-svg/9OXS.svg"
                intrinsicWidth={900}
                intrinsicHeight={300}
              />
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;A(t_0 + \Delta&#123;&#125;t)B(t_0+\Delta&#123;&#125;t) - A(t_0+ \Delta&#123;&#125;t)B(t_0) \over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              when written out, or
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A(t_0 + \Delta&#123;&#125;t)\cdot&#123;B(t_0+\Delta&#123;&#125;t) - B(t_0) \over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by factoring out {" "}
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
            </MathBlock>
            <Pause />
            <OuterP>
              approaches
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              B'(t_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as {" "}
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
            </MathBlock>
            <Pause />
            <OuterP>
              approaches
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A(t_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because, technically, the differentiability {" "}
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
              product-of-two-things-each-approaching-a-certain-value-approaches-the-product-of-the-two-approached-values
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              the whole term approaches
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                A(t_0)B'(t_0)
                $$
              </MathBlock>
            </Boxed>
            <OuterP>
              as {" "}
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
                {" "}
                We deduce
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  (AB)'(t_0) = B(t_0)A'(t_0) + A(t_0)B'(t_0)
                  $$
                </MathBlock>
              </Boxed>
              <OuterP>
                since, as the three terms inch closer and closer to
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (AB)'(t_0),\,\,B(t_0)A'(t_0)\,\,\,\te&#123; and &#125;\,\,\,A(t_0)B'(t_0)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                respectively as {" "}
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
                intrinsicWidth={700}
                intrinsicHeight={170}
              />
              <Pause />
              <OuterP>
                ...as {" "}
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
                {" "}
                Keeping things alphabetical, this is usually written
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  (AB)'(t_0) = A'(t_0)B(t_0) + A(t_0)B'(t_0)
                  $$
                </MathBlock>
              </Boxed>
              <OuterP>
                with {" "}
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
                </MathBlock>
              </Boxed>
              <OuterP>
                more shortly, for {" "}
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
                </MathBlock>
              </Boxed>
              <OuterP>
                if we replace {" "}
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
                {" "}
                This result is known as the {" "}
                <i>
                  product rule
                </i>
                .
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={10}>
          <ExerciseStatement id="_116_h.a.i_">
            <OuterP>
              <b>
                Exercise 10.
              </b>
              {" "}
              What does...
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
                intrinsicWidth={700}
                intrinsicHeight={500}
              />
            </MathBlock>
            <Pause />
            <OuterP>
              ...approach as {" "}
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
              Start with the fraction in the middle:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/c9db.svg"
              intrinsicWidth={800}
              intrinsicHeight={120}
            />
            <Pause />
            <OuterP>
              This is seen to be a Newton quotient
              (cf. {" "}
              <InChapterLink
                href="#_109_h.a.i_"
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
            </MathBlock>
            <Pause />
            <OuterP>
              with {" "}
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
                href="#_109_h.a.i_"
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
            </MathBlock>
            <Pause />
            <OuterP>
              as {" "}
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
              Next down in order of interesting-ness we presumably
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
              intrinsicWidth={800}
              intrinsicHeight={100}
            />
            <Pause />
            <OuterP>
              ...; here the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              differentiability
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of {" "}
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
              continuity
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of {" "}
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
            </MathBlock>
            <Pause />
            <OuterP>
              approaches
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A_1(t_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as {" "}
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
            </MathBlock>
            <Pause />
            <OuterP>
              approaches
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A_1(t_0) \,\times\, \dots \,\times\, A_&#123;i-1&#125;(t_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as {" "}
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
              Lastly, the tail of the product contains no {" "}
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
              intrinsicWidth={800}
              intrinsicHeight={100}
            />
            <Pause />
            <OuterP>
              Because {" "}
              <Math>
                $h$
              </Math>
              {" "} does not appear here, the tail end
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              stays put
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              where it is, irrespective of the value of {" "}
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
              intrinsicWidth={700}
              intrinsicHeight={150}
            />
            <Pause />
            <OuterP>
              ...with a lone {" "}
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