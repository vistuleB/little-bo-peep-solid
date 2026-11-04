import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Grid  from "~/components/Grid";
import InChapterLink  from "~/components/InChapterLink";
import { Item, List }  from "~/components/List";
import { Math, MathBlock }  from "~/components/Math";
import MathJaxSvgExportTooltip  from "~/components/MathJaxSvgExportTooltip";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageLeft, ImageRight }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { StarDivider }  from "~/components/StarDivider";
import { Example, NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter1__() {
  return (
    <Article
      prevPage="/"
      nextPage="/article/chapter2"
      pageNecessaryMargin={800}
      maxElementWidth={500}
      id="_26_h.a.i_"
      path="/article/chapter1"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=first-section">
            <span class="t-3003-c">
              square roots
              <span class="t-3003">
                ./src/content/ch1/ch1.wly:5:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            <span class="t-3003-c">
              fractions and division
              <span class="t-3003">
                ./src/content/ch1/ch1.wly:167:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=section-3">
            <span class="t-3003-c">
              distributivity
              <span class="t-3003">
                ./src/content/ch1/ch1.wly:260:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            <span class="t-3003-c">
              epilogue
              <span class="t-3003">
                ./src/content/ch1/ch1.wly:515:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-4">
          <InChapterLink href="?id=section-5">
            <span class="t-3003-c">
              vocabulary
              <span class="t-3003">
                ./src/content/ch1/ch1.wly:555:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-5">
          <InChapterLink href="?id=exercises">
            <span class="t-3003-c">
              exercises
              <span class="t-3003">
                ./src/content/ch1/ch1^exercises/__parent.wly:1:1
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 1:">
        <span class="t-3003-c">
          A Few Refreshers
          <span class="t-3003">
            ./src/content/ch1/__parent.wly:2:11
          </span>
        </span>
      </ArticleTitle>
      <Section id="first-section">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Square roots.
              <span class="t-3003">
                ./src/content/ch1/ch1.wly:5:6
              </span>
            </span>
          </b>
          {" "}
          Because “minus times minus is plus”
          (the enemy of my enemy is my friend)
          and “plus times plus is plus”,
          any nonzero number multiplied by itself
          is positive. For example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (-2) \times (-2) = 4
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is positive, {" "}
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:17:5
            </span>
          </span>
          {" "}
          {" "}
          while
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          2 \times 2 = 4
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is positive as well. {" "}
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:23:5
            </span>
          </span>
          {" "}
          {" "}
          But {" "}
          <Math>
            $\sqrt&#123;4&#125;$
          </Math>
          {" "}
          is, by definition, the unique {" "}
          <i>
            nonnegative
          </i>
          {" "}
          solution to {" "}
          <NoBreak>
            <Math>
              $x^2 = 4$
            </Math>
            .
          </NoBreak>
          {" "}
          Hence,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sqrt&#123;(-2)^2&#125; = 2
          $$
          <ImageRight
            src="/build-img/svgo-svg/ypXE.svg"
            offsetX="-2em"
            atLeastAsWide={true}
            local_url="./images/c1_sqrt_-2^2_cloud.svg"
            intrinsicWidth={360}
            intrinsicHeight={160}
          />
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and, in particular, it is {" "}
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:37:5
            </span>
          </span>
          <i>
            not
          </i>
          {" "} true that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sqrt&#123;x^&#123;2&#125;&#125; \rt&#123;0.1&#125; = \rt&#123;0.1&#125; x
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for every real number {" "}
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:43:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $x$
            </Math>
            .
          </NoBreak>
          {" "} Instead,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sqrt&#123;x^&#123;2&#125;&#125; \rt&#123;0.1&#125; = \rt&#123;0.1&#125; |x|
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for every real number {" "}
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:49:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $x$
            </Math>
            ,
          </NoBreak>
          {" "} where {" "}
          <Math>
            $|x|$
          </Math>
          {" "}
          denotes the absolute value of {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            (NB: If you want to indicate both
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:66:5
            </span>
          </span>
          {" "}
          {" "}
          solutions of {" "}
          <NoBreak>
            <Math>
              $x^2 = 4$
            </Math>
            ,
          </NoBreak>
          {" "} you
          can use the notation {" "}
          <NoBreak>
            “
            <Math>
              $\pm \sqrt&#123;4&#125;$
            </Math>
            ”.
          </NoBreak>
          {" "}
          This is what happens, for example, in the
          maybe-well-known formula
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x = &#123;-b \pm \sqrt&#123;b^2 - 4ac&#125; \over 2a&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for the solutions to {" "}
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:76:5
            </span>
          </span>
          <Math>
            $x$
          </Math>
          {" "} to {" "}
          <NoBreak>
            <Math>
              $ax^2 + bx + c = 0$
            </Math>
            .)
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            Next, we will ponder
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:87:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sqrt&#123;0.5&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            which is, by definition, the unique
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:93:5
            </span>
          </span>
          {" "}
          {" "}
          nonnegative solution {" "}
          <Math>
            $x$
          </Math>
          {" "} to
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^2 = 0.5.
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            As beginners, there's nothing wrong with
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:100:5
            </span>
          </span>
          {" "}
          {" "}
          trying to solve this equation by trial and
          error. With {" "}
          <NoBreak>
            <Math>
              $x = &#123;1\over 4&#125;$
            </Math>
            ,
          </NoBreak>
          {" "} for example,
          we find
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^2 = &#123;1\over 4&#125;\times&#123;1\over 4&#125; = &#123;1\over 16&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            so {" "}
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:109:5
            </span>
          </span>
          <Math>
            $x = &#123;1\over 4&#125;$
          </Math>
          {" "} is not a solution,
          being apparently too small.
          Increasing {" "}
          <Math>
            $x$
          </Math>
          {" "} to {" "}
          <NoBreak>
            <Math>
              $&#123;1\over 2&#125;$
            </Math>
            ,
          </NoBreak>
          {" "} we
          find
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^2 = &#123;1\over 2&#125;\times&#123;1\over 2&#125; = &#123;1\over 4&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            which is better, since {" "}
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:118:5
            </span>
          </span>
          <Math>
            $1/4$
          </Math>
          {" "} is closer to {" "}
          <NoBreak>
            <Math>
              $1/2$
            </Math>
            ,
          </NoBreak>
          {" "}
          but still too small. Increasing {" "}
          <Math>
            $x$
          </Math>
          {" "} by {" "}
          <Math>
            $1/4$
          </Math>
          {" "}
          again to {" "}
          <NoBreak>
            <Math>
              $&#123;3\over 4&#125;$
            </Math>
            ,
          </NoBreak>
          {" "} we find
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^2 = &#123;3\over 4&#125;\times&#123;3\over 4&#125; = &#123;9\over 16&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            which—surprise!—is pretty close to
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:126:5
            </span>
          </span>
          {" "}
          {" "}
          {" "}{" "}
          <NoBreak>
            <Math>
              $1/2$
            </Math>
            ,
          </NoBreak>
          {" "} as {" "}
          <NoBreak>
            <Math>
              $1/2 = 8/16$
            </Math>
            .
          </NoBreak>
          {" "} And since {" "}
          <NoBreak>
            <Math>
              $9/16 &gt; 0.5$
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <Math>
            $\sqrt&#123;0.5&#125;$
          </Math>
          {" "} must be a little {" "}
          <i>
            less
          </i>
          {" "} than
          {" "}
          <NoBreak>
            <Math>
              $&#123;3\over 4&#125; = 0.75$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            In last resort, and in reasonably good
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:131:5
            </span>
          </span>
          {" "}
          {" "}
          agreement with our observations, a calculator
          reveals that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sqrt&#123;0.5&#125; = 0.7071067...
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            where the decimals trail off with no pattern.
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:139:5
            </span>
          </span>
          {" "}
          {" "}
          (This number is irrational.) Even so, the fact
          that {" "}
          <Math>
            $\sqrt&#123;0.5&#125;$
          </Math>
          {" "} is {" "}
          <i>
            greater
          </i>
          {" "} than {" "}
          <Math>
            $0.5$
          </Math>
          {" "} is
          often perceived as counterintuitive.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            You can think of it this way: multiplying a
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:144:5
            </span>
          </span>
          {" "}
          {" "}
          value by {" "}
          <NoBreak>
            <Math>
              $0.7071$
            </Math>
            ,
          </NoBreak>
          {" "} or approximately {" "}
          <NoBreak>
            <Math>
              $\sqrt&#123;0.5&#125;$
            </Math>
            ,
          </NoBreak>
          {" "}
          is like taking {" "}
          <Math>
            $70.71\%$
          </Math>
          {" "} of that value—for
          example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          605 \cdot 0.7071 = 427.7955
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is {" "}
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:153:5
            </span>
          </span>
          <Math>
            $70.71\%$
          </Math>
          {" "} of {" "}
          <NoBreak>
            <Math>
              $605$
            </Math>
            —so
          </NoBreak>
          {" "} if we
          multiply {" "}
          <i>
            twice
          </i>
          {" "} by {" "}
          <Math>
            $0.7071$
          </Math>
          {" "} we obtain
          {" "}
          <NoBreak>
            “
            <Math>
              $70.71\%$
            </Math>
          </NoBreak>
          {" "} of {" "}
          <NoBreak>
            <Math>
              $70.71\%$
            </Math>
            ”
          </NoBreak>
          {" "} and it just so happens
          that {" "}
          <NoBreak>
            “
            <Math>
              $70.71\%$
            </Math>
          </NoBreak>
          {" "} of {" "}
          <NoBreak>
            <Math>
              $70.71\%$
            </Math>
            ”
          </NoBreak>
          {" "} is close to
          {" "}
          <NoBreak>
            <Math>
              $50\%$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            The point is: if {" "}
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:159:5
            </span>
          </span>
          <NoBreak>
            “
            <Math>
              $X\%$
            </Math>
          </NoBreak>
          {" "} of {" "}
          <NoBreak>
            <Math>
              $X\%$
            </Math>
            ”
          </NoBreak>
          {" "} equals {" "}
          <NoBreak>
            <Math>
              $50\%$
            </Math>
            ,
          </NoBreak>
          {" "}
          then, of course, {" "}
          <NoBreak>
            <Math>
              $\rt&#123;0.03&#125;X &gt; 50$
            </Math>
            —that
          </NoBreak>
          {" "} much
          seems logical—and, with a little thought, the
          same phenomenon explains why {" "}
          <NoBreak>
            <Math>
              $\sqrt&#123;0.5&#125; &gt; 0.5$
            </Math>
            !
          </NoBreak>
        </OuterP>
      </Section>
      <Rest />
    </Article>
  );
}

const Rest = () => {
  const visibleRestSections = useShowMore(5);
  return <>
    {visibleRestSections() > 0 && <>
      <Pause />
      <Section id="section-2">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Fractions and Division.
              <span class="t-3003">
                ./src/content/ch1/ch1.wly:167:6
              </span>
            </span>
          </b>
          {" "}
          An elementary fraction, or division, such as
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;50 \over 2&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            can be thought of in a few ways:
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:174:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <List
          marker="decimal"
          style="gap:2px;"
        >
          <Item>
            <p>
              <span class="t-3003-c">
                Fifty halves (i.e., {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1.wly:180:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $50 \times &#123;1\over 2&#125;$
                </Math>
                <span class="t-3003-c">
                  ).
                  <span class="t-3003">
                    ./src/content/ch1/ch1.wly:180:51
                  </span>
                </span>
              </NoBreak>
            </p>
          </Item>
          <Item>
            <p>
              <span class="t-3003-c">
                The size obtained when something of size
                <span class="t-3003">
                  ./src/content/ch1/ch1.wly:182:9
                </span>
              </span>
              {" "}
              {" "}
              fifty is divided into two equal parts
              (answer: {" "}
              <NoBreak>
                <Math>
                  $25$
                </Math>
                <span class="t-3003-c">
                  ).
                  <span class="t-3003">
                    ./src/content/ch1/ch1.wly:184:22
                  </span>
                </span>
              </NoBreak>
            </p>
          </Item>
          <Item>
            <p>
              <span class="t-3003-c">
                The number of times {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1.wly:186:9
                </span>
              </span>
              <Math>
                $2$
              </Math>
              <span class="t-3003-c">
                {" "} goes into {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1.wly:186:32
                </span>
              </span>
              <Math>
                $50$
              </Math>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                (answer: {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1.wly:187:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $25$
                </Math>
                <span class="t-3003-c">
                  ,
                  <span class="t-3003">
                    ./src/content/ch1/ch1.wly:187:22
                  </span>
                </span>
              </NoBreak>
              <span class="t-3003-c">
                {" "} because it takes twenty-five
                <span class="t-3003">
                  ./src/content/ch1/ch1.wly:187:22
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                <span class="t-3003-c">
                  's
                  <span class="t-3003">
                    ./src/content/ch1/ch1.wly:188:12
                  </span>
                </span>
              </NoBreak>
              <span class="t-3003-c">
                {" "} to make {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1.wly:188:12
                </span>
              </span>
              <NoBreak>
                <Math>
                  $50$
                </Math>
                <span class="t-3003-c">
                  ).
                  <span class="t-3003">
                    ./src/content/ch1/ch1.wly:188:27
                  </span>
                </span>
              </NoBreak>
            </p>
          </Item>
        </List>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            But {" "}
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:190:5
            </span>
          </span>
          <Math>
            $50/2$
          </Math>
          {" "} is a ratio of integers, 
          and for a ratio of
          decimals, such as
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \,&#123;1 \over 0.01&#125;,
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            our possible points of view are going to be
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:199:5
            </span>
          </span>
          {" "}
          {" "}
          more restricted. Thankfully, though, we can
          still characterize this fraction as the
          answer to the question “how many times does
          {" "}
          <Math>
            $0.01$
          </Math>
          {" "} go into {" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            ?”,
          </NoBreak>
          {" "} as in the third option
          above—from which,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;1 \over 0.01&#125; \,=\,100
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            because {" "}
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:210:5
            </span>
          </span>
          <Math>
            $0.01$
          </Math>
          {" "} goes {" "}
          <Math>
            $100$
          </Math>
          {" "} times into {" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            .
          </NoBreak>
          {" "} For
          that matter,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123; 1 \over 0.001&#125; = 1000,\qquad&#123;1 \over 0.0001&#125; = 10000,\quad\,\,\,\,\textrm&#123;(etc)&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            by the same reasoning, which explains why
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:217:5
            </span>
          </span>
          {" "}
          {" "}
          dividing by smaller and smaller numbers produces
          larger and larger results. (Also, why dividing by {" "}
          <Math>
            $0$
          </Math>
          {" "} is undefined.)
        </OuterP>
        <Pause />
        <OuterP>
          <b>
            <span class="t-3003-c">
              Note.
              <span class="t-3003">
                ./src/content/ch1/ch1.wly:230:6
              </span>
            </span>
          </b>
          {" "} In general, the ratio of two decimal
          numbers can be turned into a ratio of integers
          by multiplying top and bottom by a
          suitable power of {" "}
          <NoBreak>
            <Math>
              $10$
            </Math>
            .
          </NoBreak>
          {" "} E.g.:
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;1.42 \over 0.8&#125; = &#123;100 \cdot 1.42 \over 100 \cdot 0.8&#125; = &#123;142 \over 80&#125; = &#123;71 \over 40&#125;.
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            This example was chosen randomly, and, if you
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:239:5
            </span>
          </span>
          {" "}
          {" "}
          allow, we would like to see how large {" "}
          <Math>
            $71/40$
          </Math>
          {" "}
          really is
          (one second!):
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;align*&#125;
          &#123;71 \over 40&#125; \,&amp;=\, &#123;40 + 30 + 1 \over 40&#125; \,=\, &#123;40 \over 40&#125; + &#123;30 \over 40&#125; + &#123;1 \over 40&#125;\\
          \,&amp;=\, 1 + &#123;3 \over 4&#125; + &#123;1 \over 4&#125;\!\cdot \!&#123;1 \over 10&#125;\up&#123;1.5&#125;\\
          \,&amp;=\, 1 + 0.75 + 0.025 = 1.775\up&#123;1.5&#125;
          \end&#123;align*&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...so we find that {" "}
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:252:5
            </span>
          </span>
          <Math>
            $71$
          </Math>
          {" "} is exactly
          {" "}
          <Math>
            $77.5\%$
          </Math>
          {" "} greater than {" "}
          <NoBreak>
            <Math>
              $40$
            </Math>
            .
          </NoBreak>
          {" "}
          (Check yourself: {" "}
          <Math>
            $70$
          </Math>
          {" "} is {" "}
          <Math>
            $75\%$
          </Math>
          {" "} greater than {" "}
          <NoBreak>
            <Math>
              $40$
            </Math>
            .)
          </NoBreak>
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 1 && <>
      <Pause />
      <Section id="section-3">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Distributivity.
              <span class="t-3003">
                ./src/content/ch1/ch1.wly:260:6
              </span>
            </span>
          </b>
          {" "}
          A number that
          multiplies a sum can be brought “inside” the
          sum. For example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          5(10 + 2) \,=\, 5\!\cdot\!10 \,+\, 5\!\cdot\!2
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (five times twelve equals fifty plus ten), or
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:269:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          a(b + c) = ab + ac
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            more generally. This property is known as the
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:275:5
            </span>
          </span>
          {" "}
          {" "}
          {" "}{" "}
          <i>
            distributivity of multiplication over addition
          </i>
          ,
          or {" "}
          <i>
            distributivity
          </i>
          {" "} for short.
        </OuterP>
        <OuterP class="indent-10">
          <NoBreak>
            <span class="t-3003-c">
              (‘
              <span class="t-3003">
                ./src/content/ch1/ch1.wly:279:5
              </span>
            </span>
            <Math>
              $\cdot$
            </Math>
            ’
          </NoBreak>
          {" "} means
          “times”, i.e., the same as {" "}
          <NoBreak>
            ‘
            <Math>
              $\times$
            </Math>
            ’.
          </NoBreak>
          {" "} Moreover,
          when we write
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          5\!\cdot\!10 \,+\, 5\!\cdot\!2
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            we mean
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:287:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (5\!\cdot\!10) + (5\!\cdot\!2)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            as opposed to
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:293:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          ((5\!\cdot\!10) + 5)\!\cdot\! 2,
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            because multiplication takes precedence over
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:299:5
            </span>
          </span>
          {" "}
          {" "}
          addition, absent parentheses.)
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            A little more generally, one has such identities
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:302:5
            </span>
          </span>
          {" "}
          {" "}
          as
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (a + b)(C + D) \,=\, aC + bC + aD + bD
          $$
          <ImageLeft
            src="/build-img/svgo-svg/-TtU.svg"
            offsetX="-1em"
            atLeastAsWide={true}
            local_url="./images/c1_abCD_cloud.svg"
            intrinsicWidth={350}
            intrinsicHeight={250}
          />
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            that come from multiplying every term of the first
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:313:5
            </span>
          </span>
          {" "}
          {" "}
          parenthesis with every term of the second
          parenthesis. Indeed,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (a + b)(C + D) = (a + b)C + (a + b)D
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            by one application of distributivity, while
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:322:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (a + b)C = aC + bC
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          (a + b)D = aD + bD
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            by distributivity again.
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:332:5
            </span>
          </span>
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
            \begin&#123;aligned&#125;
            (10 + 2)(10 + 4) \,&amp;=\, 10\!\cdot\!10 \,+\, 10\!\cdot\!4 \,+\, 2\!\cdot\!10 \,+\, 2\!\cdot\!4 \\
            \,&amp;=\, 100 \,+\, 40 \,+\, 20 \,+\, 8 \up&#123;1.1&#125;\\
            \,&amp;=\, 168 \up&#123;1.1&#125;
            \end&#123;aligned&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              so {" "}
              <span class="t-3003">
                ./src/content/ch1/ch1.wly:344:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $12 \times 14 = 168$
              </Math>
              .
            </NoBreak>
          </OuterP>
        </Example>
        <Pause />
        <Example id="_22_h.a.i_">
          <OuterP>
            <b>
              Example 2.
            </b>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \begin&#123;align*&#125;
            (10 + 3)(10 + 3) \,&amp;=\, 10\!\cdot\!10 \,+\, 10\!\cdot\!3 \,+\, 3\!\cdot\!10 \,+\, 3\!\cdot\!3\\
            \,&amp;=\, 100 \,+\, 30 \,+\, 30 \,+\, 9 \up&#123;1.1&#125;\\
            \,&amp;=\, 169 \up&#123;1.1&#125;
            \end&#123;align*&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              so {" "}
              <span class="t-3003">
                ./src/content/ch1/ch1.wly:357:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $13 \times 13 = 169$
              </Math>
              .
            </NoBreak>
          </OuterP>
        </Example>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (The fact that {" "}
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:359:5
            </span>
          </span>
          <Math>
            $13 \times 13$
          </Math>
          {" "} is exactly one
          greater than {" "}
          <Math>
            $12 \times 14$
          </Math>
          {" "} is a bit curious
          indeed.)
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            If we start from the identity
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:363:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (a + b)(C + D) \,=\, aC + bC + aD + bD
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and set {" "}
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:369:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $C = a$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $D = b$
            </Math>
            ,
          </NoBreak>
          {" "} we find
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (a + b)(a + b) \,=\, aa + ba + ab + bb
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            or, equivalently,
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:375:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (a + b)^2 = a^2 + 2ab + b^2
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            since {" "}
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:381:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $(a + b)(a + b) = (a + b)^2$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $aa = a^2$
          </Math>
          {" "}
          and {" "}
          <NoBreak>
            <Math>
              $bb = b^2$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            (This is the {" "}
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:384:5
            </span>
          </span>
          <i>
            binomial expansion
            of degree two
          </i>
          , but such terminology is not very
          important at this stage.)
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 3.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              By the last formula,
              <span class="t-3003">
                ./src/content/ch1/ch1.wly:390:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \begin&#123;align*&#125;
            \up&#123;1&#125; (10 + 3)^2 \,&amp;=\, 10\!\cdot\!10 \,+\, 2\!\cdot\!3\!\cdot\!10 \,+\, 3\!\cdot\!3 \\
            \up&#123;1&#125; \,&amp;=\, 100 + 60 + 9 \up&#123;1.1&#125;\\
            \up&#123;1&#125; \,&amp;=\, 169 \up&#123;1.1&#125;
            \end&#123;align*&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              obtaining the same result as {" "}
              <span class="t-3003">
                ./src/content/ch1/ch1.wly:401:9
              </span>
            </span>
            <InChapterLink
              href="#_22_h.a.i_"
              class="in-chapter-link"
            >
              Example 2
            </InChapterLink>
            &#8288;.
          </OuterP>
        </Example>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            On the other hand, setting {" "}
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:403:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $C = a$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $D = -b$
          </Math>
          {" "} in
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (a + b)(C + D) = aC + aD + bC + bD
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            gives
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:409:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (a + b)(a + (-b)) = aa + a(-b) + ba + b(-b)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            or
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:415:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (a + b)(a - b) = aa - ab + ba - bb
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            or
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:421:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (a + b)(a - b) = a^2 - b^2
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            since {" "}
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:427:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $- ab + ba = 0$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $aa = a^2$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $bb = b^2$
            </Math>
            .
          </NoBreak>
          {" "} Note that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          a^2 - b^2
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:433:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            a difference of squares
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:435:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            whence {" "}
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:437:5
            </span>
          </span>
          <i>
            a difference of squares can always be
            factored
          </i>
          . (Factored as {" "}
          <NoBreak>
            <Math>
              $(a + b)(a - b)$
            </Math>
            ,
          </NoBreak>
          {" "} that
          is.) (NB: “Factored” means “written as a product”.)
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 4.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              Since
              <span class="t-3003">
                ./src/content/ch1/ch1.wly:443:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            19 = 100 - 81 = 10^2 - 9^2
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              is a difference of squares, {" "}
              <span class="t-3003">
                ./src/content/ch1/ch1.wly:449:9
              </span>
            </span>
            <Math>
              $19$
            </Math>
            {" "} can be
            factored. (On the other hand {" "}
            <Math>
              $19$
            </Math>
            {" "} is a prime
            number, but nevermind.)
          </OuterP>
        </Example>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 5.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              The expression
              <span class="t-3003">
                ./src/content/ch1/ch1.wly:455:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            1 - x^2
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              can be factored, because
              <span class="t-3003">
                ./src/content/ch1/ch1.wly:461:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            1 = 1^2
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              implies that
              <span class="t-3003">
                ./src/content/ch1/ch1.wly:467:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            1 - x^2
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              is “a difference of squares”. And
              <span class="t-3003">
                ./src/content/ch1/ch1.wly:473:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            1 - x^2 = (1 - x)(1 + x)
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              as per {" "}
              <span class="t-3003">
                ./src/content/ch1/ch1.wly:479:9
              </span>
            </span>
            <NoBreak>
              “
              <Math>
                $\rt&#123;0.04&#125;a^2 - b^2 = (a - b)(a + b)$
              </Math>
              ”.
            </NoBreak>
          </OuterP>
        </Example>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Multiplying a difference by {" "}
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:481:5
            </span>
          </span>
          <Math>
            $-1$
          </Math>
          {" "} {" "}
          <i>
            reverses
          </i>
          {" "} the
          difference. That is,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (-1)(a - b) \,=\, b - a
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            or, for short,
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:488:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          -(a - b) \,=\, b - a
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            because
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:494:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;align*&#125;
          (-1)(a - b) \,&amp;=\, (-1)(a + (-b)) \\
          \,&amp;=\, (-1)a + (-1)(-b) \up&#123;1.1&#125; \\
          \,&amp;=\, -a + b \up&#123;1.1&#125;
          \end&#123;align*&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            by distributivity (used in the second step).
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:504:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 6.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              We have {" "}
              <span class="t-3003">
                ./src/content/ch1/ch1.wly:508:9
              </span>
            </span>
            <NoBreak>
              <Math>
                $-(10 - 3) = 3 - 10$
              </Math>
              .
            </NoBreak>
            {" "}
            (Because {" "}
            <NoBreak>
              <Math>
                $-7 = -7$
              </Math>
              ,
            </NoBreak>
            {" "} as it would be, haha.)
          </OuterP>
        </Example>
        <Pause />
        <StarDivider />
      </Section>
    </>}
    {visibleRestSections() > 2 && <>
      <Pause />
      <Section id="section-4">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Epilogue.
              <span class="t-3003">
                ./src/content/ch1/ch1.wly:515:6
              </span>
            </span>
          </b>
          {" "} Do you remember the near miss between
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          12\cdot 14 \,=\, 168
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:521:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          13 \cdot 13 \,=\, 13^2 \,=\, 169
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...? Well if you observe, additionally, that
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:527:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;align*&#125;
          11\,\cdot\,13 &amp;= 12^2 - 1\\
          10\,\cdot\,12 &amp;= 11^2 - 1 \up&#123;1.1&#125;\\
          9\,\cdot\,11 &amp;= 10^2 - 1 \up&#123;1.1&#125;
          \end&#123;align*&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (etc) you might become suspicious of a pattern!
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:537:5
            </span>
          </span>
          {" "}
          {" "}
          But the mystery is rather thin: we have
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (n - 1)(n + 1) \,=\, n^2 - 1
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for {" "}
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:544:5
            </span>
          </span>
          <i>
            every
          </i>
          {" "} real number {" "}
          <Math>
            $n$
          </Math>
          {" "} because of the
          formula
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (a - b)(a + b) \,=\, a^2 - b^2
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for a difference of squares!
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:551:5
            </span>
          </span>
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 3 && <>
      <Pause />
      <Section id="section-5">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Vocabulary.
              <span class="t-3003">
                ./src/content/ch1/ch1.wly:555:6
              </span>
            </span>
          </b>
          {" "}
          A pair of algebraic expressions of the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          a + b,\, a - b
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is called a {" "}
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:562:5
            </span>
          </span>
          <i>
            conjugate pair
          </i>
          . For example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          n + 1,\, n - 1
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a conjugate pair, as is
            <span class="t-3003">
              ./src/content/ch1/ch1.wly:568:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sqrt&#123;3&#125; + \sqrt&#123;2&#125;,\,\, \sqrt&#123;3&#125; - \sqrt&#123;2&#125;.
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
      </Section>
    </>}
    {visibleRestSections() > 4 && <>
      <Pause />
      <Exercises
        at_end_of_page={true}
        mode="dual"
        show_curlicue={true}
        id="_25_h.a.i_"
      >
        <Exercise number={1}>
          <ExerciseStatement id="_23_h.a.i_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                True or false (and, if possible, explain):
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:3:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <Grid
              cols={3}
              style="font-family:'Baskerville Regular';"
            >
              <Item>
                <span class="t-3003-c">
                  a. {" "}
                  <span class="t-3003">
                    ./src/content/ch1/ch1^exercises/_true_false_.wly:9:9
                  </span>
                </span>
                <Math>
                  $0.9^2 &lt; 0.9$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  b. {" "}
                  <span class="t-3003">
                    ./src/content/ch1/ch1^exercises/_true_false_.wly:11:9
                  </span>
                </span>
                <Math>
                  $\sqrt&#123;0.01&#125; = 0.1$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  c. {" "}
                  <span class="t-3003">
                    ./src/content/ch1/ch1^exercises/_true_false_.wly:13:9
                  </span>
                </span>
                <Math>
                  $\sqrt[2]&#123;\up&#123;0.8&#125;\sqrt[3]&#123;2&#125;&#125; = \sqrt[3]&#123;\up&#123;0.8&#125;\sqrt[2]&#123;2&#125;&#125;$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  d. {" "}
                  <span class="t-3003">
                    ./src/content/ch1/ch1^exercises/_true_false_.wly:15:9
                  </span>
                </span>
                <Math>
                  $&#123;\sqrt&#123;2&#125; \over \up&#123;0.55&#125;2&#125; = \sqrt&#123;0.5&#125;$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  e. {" "}
                  <span class="t-3003">
                    ./src/content/ch1/ch1^exercises/_true_false_.wly:17:9
                  </span>
                </span>
                <Math>
                  $&#123;1 \over \sqrt&#123;2&#125;&#125; = \sqrt&#123;0.5&#125;$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  f. {" "}
                  <span class="t-3003">
                    ./src/content/ch1/ch1^exercises/_true_false_.wly:19:9
                  </span>
                </span>
                <Math>
                  $2^&#123;30&#125; &gt; 1000^3$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  g. {" "}
                  <span class="t-3003">
                    ./src/content/ch1/ch1^exercises/_true_false_.wly:21:9
                  </span>
                </span>
                <Math>
                  $&#123;1 \over 0.95&#125; &gt; 1.05$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  h. {" "}
                  <span class="t-3003">
                    ./src/content/ch1/ch1^exercises/_true_false_.wly:23:9
                  </span>
                </span>
                <Math>
                  $(-1)^&#123;101&#125; = -1$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  i. {" "}
                  <span class="t-3003">
                    ./src/content/ch1/ch1^exercises/_true_false_.wly:25:9
                  </span>
                </span>
                <Math>
                  $&#123;100 \over \up&#123;0.5&#125;99&#125; &lt; &#123;101 \over \up&#123;0.5&#125;100&#125;$
                </Math>
              </Item>
            </Grid>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                a. True:
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:29:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0.9^2 = &#123;9 \over 10&#125;\cdot&#123;9 \over 10&#125; = &#123;81 \over 100&#125; = 0.81
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:35:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $0.81 &lt; 0.9$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                b. True:
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:39:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0.1^2 = &#123;1 \over 10&#125; \cdot &#123;1 \over 10&#125; = &#123;1 \over 100&#125; = 0.01,
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:45:9
                </span>
              </span>
              <Math>
                $0.1$
              </Math>
              {" "} is nonnegative, so {" "}
              <NoBreak>
                <Math>
                  $\sqrt&#123;0.01&#125; = 0.1$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                c. True:
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:49:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <Math>
                $\sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;$
              </Math>
              {" "}
              and {" "}
              <Math>
                $\sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;$
              </Math>
              {" "} are
              both equal to {" "}
              <NoBreak>
                <Math>
                  $\sqrt[6]&#123;\up&#123;0.6&#125;2&#125;$
                </Math>
                .
              </NoBreak>
              {" "} Indeed,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &amp;\,\, (\sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;\rt&#123;0.1&#125;)^6 \\
              =&amp;\,\, \up&#123;1.4&#125; \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;\qquad\\
              =&amp;\,\, \up&#123;1.4&#125; (\gbk\sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;\rt&#123;0.11&#125;) \times (\gbk\sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;\rt&#123;0.11&#125;) \times (\gbk\sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;\rt&#123;0.11&#125;) \\
              =&amp; \,\, \up&#123;1.4&#125; (\sqrt[3]&#123;\up&#123;0.64&#125;2&#125;\rt&#123;0.1&#125;) \times (\sqrt[3]&#123;\up&#123;0.64&#125;2&#125;\rt&#123;0.1&#125;) \times (\sqrt[3]&#123;\up&#123;0.64&#125;2&#125;\rt&#123;0.1&#125;)\\
              =&amp; \,\, \up&#123;1.4&#125; 2
              \end&#123;align*&#125;
              $$
              <ImageLeft
                src="/build-img/svgo-svg/rgbH.svg"
                offsetY="23.5%"
                atLeastAsWide={true}
                local_url="./images/true_false_sixth_root_of_two_cloud1.svg"
                intrinsicWidth={346}
                intrinsicHeight={142}
              />
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:68:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
                  &amp;\,\, (\sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;\rt&#123;0.1&#125;)^6 \\
                 =&amp;\,\, \up&#123;1.4&#125; \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;\\
                 =&amp;\,\, \up&#123;1.4&#125; (\gbk\sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;\rt&#123;0.11&#125;) \times (\gbk\sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;\rt&#123;0.11&#125;)\\
                 =&amp;\,\, \up&#123;1.4&#125; \sqrt[2]&#123;\up&#123;0.65&#125;2&#125; \times \sqrt[2]&#123;\up&#123;0.65&#125;2&#125;\\
                 =&amp;\,\, \up&#123;1.4&#125; 2
              \end&#123;align*&#125;
              $$
              <ImageLeft
                src="/build-img/svgo-svg/Trg3.svg"
                offsetY="23.5%"
                atLeastAsWide={true}
                local_url="./images/true_false_sixth_root_of_two_cloud2.svg"
                intrinsicWidth={444}
                intrinsicHeight={126}
              />
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Technically, however, a number {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:84:9
                </span>
              </span>
              <Math>
                $x$
              </Math>
              {" "} such that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x^6 = 2
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is not necessarily {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:90:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\sqrt[6]&#123;\up&#123;0.6&#125;2&#125;$
                </Math>
                ,
              </NoBreak>
              {" "}
              because {" "}
              <Math>
                $x = -\sqrt[6]&#123;\up&#123;0.6&#125;2&#125;$
              </Math>
              {" "} satisfies
              this equation as well!
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Finally,
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:94:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <Math>
                $\sqrt[2]&#123;\up&#123;0.76&#125;\sqrt[3]&#123;2&#125;&#125;$
              </Math>
              {" "} and
              {" "}
              <Math>
                $\sqrt[3]&#123;\up&#123;0.76&#125;\sqrt[2]&#123;2&#125;&#125;$
              </Math>
              {" "} are both
              {" "}
              <i>
                nonnegative
              </i>
              {" "} (taken as obvious),
              so they are the {" "}
              <i>
                unique
                nonnegative
              </i>
              {" "} solution to {" "}
              <NoBreak>
                <Math>
                  $x^6 = 2$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                d. True: In general,
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:103:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\sqrt&#123;x&#125; \over \sqrt&#123;y&#125;&#125; = \sqrt&#123;\up&#123;0.7&#125;x \over y&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for all {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:109:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x \geq 0$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $y &gt; 0$
              </Math>
              {" "} (you need each
              root to be defined), so
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\sqrt&#123;2&#125; \over 2&#125; = &#123;\sqrt&#123;2&#125; \over \sqrt&#123;4&#125;&#125; = \sqrt&#123;\up&#123;0.8&#125;2 \over 4&#125; = \sqrt&#123;0.5&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...ta-daa!
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:116:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Note 1.
                  <span class="t-3003">
                    ./src/content/ch1/ch1^exercises/_true_false_.wly:120:10
                  </span>
                </span>
              </i>
              {" "} Or by “direct verification”:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \left(&#123;\sqrt&#123;2&#125; \over 2&#125;\right)^&#123;\!2&#125; = &#123;\sqrt&#123;2&#125; \over 2&#125;\cdot&#123;\sqrt&#123;2&#125; \over 2&#125;
              = &#123;\sqrt&#123;2&#125;\cdot\sqrt&#123;2&#125; \over 4&#125; = &#123;2 \over 4&#125; = 0.5.
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (Since {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:127:9
                </span>
              </span>
              <Math>
                $&#123;\sqrt&#123;2&#125; \over 2&#125;$
              </Math>
              {" "} is nonnegative,
              this establishes that {" "}
              <NoBreak>
                <Math>
                  $&#123;\sqrt&#123;2&#125; \over 2&#125; =
                  \sqrt&#123;0.5&#125;$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                e. True: Using the
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:133:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <NoBreak>
                “
                <Math>
                  $&#123;\sqrt&#123;x&#125; \over \sqrt&#123;y&#125;&#125; =
                  \sqrt&#123;\up&#123;0.7&#125;x \over y&#125;$
                </Math>
                ”
              </NoBreak>
              {" "} identity:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over \sqrt&#123;2&#125;&#125; = &#123;\sqrt&#123;1&#125; \over \sqrt&#123;2&#125;&#125; = \sqrt&#123;\up&#123;0.8&#125;1 \over 2&#125; = \sqrt&#123;0.5&#125;.
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Or by direct verification:
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:141:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \left(&#123;1 \over \sqrt&#123;2&#125;&#125;\right)^&#123;\!2&#125; = &#123;1 \over \sqrt&#123;2&#125;&#125;\cdot&#123;1 \over \sqrt&#123;2&#125;&#125;
              = &#123;1 \over \sqrt&#123;2&#125;\cdot\sqrt&#123;2&#125;&#125; = &#123;1 \over 2&#125; = 0.5.
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (And {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:148:9
                </span>
              </span>
              <Math>
                $1 \over \sqrt&#123;2&#125;$
              </Math>
              {" "} is nonnegative.)
              Or by reducing to part d:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over \sqrt&#123;2&#125;&#125; = &#123;\sqrt&#123;2&#125; \over \sqrt&#123;2&#125; \cdot \sqrt&#123;2&#125;&#125; = &#123;\sqrt&#123;2&#125; \over 2&#125;.
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                f. True:
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:157:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              2^&#123;30&#125; = 2^&#123;10&#125; \times 2^&#123;10&#125; \times 2^&#123;10&#125; = (2^&#123;10&#125;)^3
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:163:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (2^&#123;10&#125;)^3 = (1024)^3 &gt; 1000^3.
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Note 2.
                  <span class="t-3003">
                    ./src/content/ch1/ch1^exercises/_true_false_.wly:171:10
                  </span>
                </span>
              </i>
              {" "}
              The first ten or so powers of {" "}
              <Math>
                $2$
              </Math>
              {" "} are worth
              knowing by heart (here's {" "}
              <i>
                eleven
              </i>
              {" "} powers, mind
              you):
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;array&#125;&#123;c|c&#125;
              \,\,\,\,n\,\,\,\, &amp; 2^n\dn&#123;0.3&#125; \\ \hline
              0 &amp; 1 \up&#123;1.1&#125;\\
              1 &amp; 2 \\
              2 &amp; 4 \\
              3 &amp; 8 \\
              4 &amp; 16 \\
              5 &amp; 32 \\
              6 &amp; 64 \\
              7 &amp; 128 \\
              8 &amp; 256 \\
              9 &amp; 512 \\
              10 &amp; 1024
              \end&#123;array&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                In particular,
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:193:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              2^&#123;10&#125; \approx 10^3
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is useful! For
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:199:9
                </span>
              </span>
              {" "}
              {" "}
              example, if a 1-millimeter-thick napkin is
              folded {" "}
              <Math>
                $50$
              </Math>
              {" "} times, doubling the thickness
              each time, its thickness becomes
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              2^&#123;50&#125;\fw\te&#123;mm&#125; = (2^&#123;10&#125;)^5\fw\te&#123;mm&#125; \approx (10^3)^5\fw\te&#123;mm&#125; = 10^&#123;15&#125;\fw\te&#123;mm&#125;.
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                As
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:208:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              1\fw\te&#123;mm&#125; = 10^&#123;-6&#125;\fw\te&#123;km&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                this is
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:214:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              10^&#123;15&#125;\fw&#123;&#125;(10^&#123;-6&#125;\fw\te&#123;km&#125;) = 10^&#123;15-6&#125;\fw\te&#123;km&#125; = 10^&#123;9&#125;\fw\te&#123;km&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                or {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:225:9
                </span>
              </span>
              <i>
                one billion
              </i>
              {" "} kilometers. By
              comparison, the distance from the Earth to
              the Sun is a mere {" "}
              <Math>
                $150$
              </Math>
              {" "} million kilometers.
            </OuterP>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                g. True: Multiplying both sides by a positive
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:231:9
                </span>
              </span>
              {" "}
              {" "}
              number preserves the inequality:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &amp; &#123;1 \over 0.95&#125; &gt; 1.05\\
              \iff &amp; 1 &gt; 1.05 \cdot 0.95\up&#123;1.4&#125;\\
              \iff &amp; 1 &gt; (1 + 0.05)(1 - 0.05)\up&#123;1.4&#125;\\
              \iff &amp; 1 &gt; 1 - 0.05^2\up&#123;1.4&#125;
              \end&#123;align*&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (using the fact that {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:243:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $(1+x)(1-x) = 1-x^2$
                </Math>
                ,
              </NoBreak>
              {" "} of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \te&#123;“&#125;\,(a+b)(a-b) = a^2-b^2\,\te&#123;”&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                fame), and since the {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:249:9
                </span>
              </span>
              <i>
                last
              </i>
              {" "} inequality is true,
              the {" "}
              <i>
                first
              </i>
              {" "} inequality is true! (Recall that
              {" "}
              <NoBreak>
                “
                <Math>
                  $\!\iff\!$
                </Math>
                ”
              </NoBreak>
              {" "} means “if and only if”.)
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Note 3.
                  <span class="t-3003">
                    ./src/content/ch1/ch1^exercises/_true_false_.wly:255:10
                  </span>
                </span>
              </i>
              {" "}
              More generally, even though
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 1 - \epsilon&#125; &gt; 1 + \epsilon
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for any small {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:262:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\epsilon &gt; 0$
                </Math>
                ,
              </NoBreak>
              {" "} the number
              {" "}
              <Math>
                $1 + \epsilon$
              </Math>
              {" "} remains a good approximation to
              {" "}
              <NoBreak>
                <Math>
                  $&#123;1 \over 1 - \epsilon&#125;$
                </Math>
                .
              </NoBreak>
              {" "} For example,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              1.01
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is a good approximation to
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:270:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 0.99&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                while
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:276:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              1.001
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is a good approximation to
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:282:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 0.999&#125;,
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                etc.
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:288:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                h. True: Here are the first few powers of {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:292:9
                </span>
              </span>
              <Math>
                $-1$
              </Math>
              {" "}
              (each multiplication by {" "}
              <Math>
                $-1$
              </Math>
              {" "} changes the sign):
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;array&#125;&#123;r@&#123;\;&#125;r@&#123;\;&#125;r&#125;
              (-1)^1 = &amp; (-1) = &amp; -1\\[0.4em]
              (-1)^2 = &amp; (-1)\times(-1) = &amp; 1\\[0.4em]
              (-1)^3 = &amp; (-1)\times(-1)\times(-1) = &amp; -1\\[0.4em]
              (-1)^4 = &amp; (-1)\times(-1)\times(-1)\times(-1) = &amp; 1\\[0.4em]
              (-1)^5 = &amp; (-1)\times(-1)\times(-1)\times(-1)\times(-1) = &amp; -1
              \end&#123;array&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (Etc.) Even powers of {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:305:9
                </span>
              </span>
              <Math>
                $(-1)$
              </Math>
              {" "} equal {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ;
              </NoBreak>
              {" "}
              odd powers equal {" "}
              <NoBreak>
                <Math>
                  $-1$
                </Math>
                .
              </NoBreak>
              {" "} As {" "}
              <Math>
                $101$
              </Math>
              {" "} is odd, {" "}
              <Math>
                $(-1)^&#123;101&#125;$
              </Math>
              {" "}
              is {" "}
              <NoBreak>
                <Math>
                  $-1$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                i. False:
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:311:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;100 \over 99&#125; = &#123;99 + 1 \over 99&#125; = 1 + &#123;1 \over 99&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:317:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;101 \over 100&#125; = &#123;100 + 1 \over 100&#125; = 1 + &#123;1 \over 100&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                so the smaller of the two fractions is {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:323:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $&#123;101
                  \over 100&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} since {" "}
              <NoBreak>
                <Math>
                  $&#123;1 \over 100&#125; &lt; &#123;1 \over
                  99&#125;$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Note 4.
                  <span class="t-3003">
                    ./src/content/ch1/ch1^exercises/_true_false_.wly:329:10
                  </span>
                </span>
              </i>
              {" "}
              The difference
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 99&#125; - &#123;1 \over 100&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is interesting in its own right, being
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:336:9
                </span>
              </span>
              {" "}
              {" "}
              connected to a famous infinite sum. To
              visualize this sum, picture a hare poised at
              {" "}
              <Math>
                $x = 0$
              </Math>
              {" "} on the number line. This hare runs
              forward by one unit and backwards by half a
              unit, stopping at
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              1 - &#123;1\over 2&#125;.
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The hare then runs forward by
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:347:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <i>
                half
              </i>
              {" "} a unit and back by a {" "}
              <i>
                third
              </i>
              {" "} of a unit,
              stopping at
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &amp;\, \left(1 - &#123;1 \over 2&#125;\right) \\
              + \,&amp;\, \left(&#123;1 \over 2&#125; - &#123;1 \over 3&#125;\right)\dn&#123;1&#125;\\
              \hline
              = \,&amp;\, \left(1 - &#123;1 \over 3&#125;\right)\up&#123;1.5&#125;.
              \end&#123;align*&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Keeping with this pattern,
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:360:9
                </span>
              </span>
              {" "}
              {" "}
              the hare then stops at
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &amp;\, \left(1 - &#123;1 \over 2&#125;\right)\\
              + \,&amp;\, \left(&#123;1 \over 2&#125; - &#123;1 \over 3&#125;\right)\\
              + \,&amp;\, \left(&#123;1 \over 3&#125; - &#123;1 \over 4&#125;\right)\dn&#123;1&#125;\\
              \hline
              = \,&amp;\, \left(1 - &#123;1 \over 4&#125;\right)\up&#123;1.5&#125;
              \end&#123;align*&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and then at
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:373:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &amp;\, \left(1 - &#123;1 \over 2&#125;\right)\\
              + \,&amp;\, \left(&#123;1 \over 2&#125; - &#123;1 \over 3&#125;\right)\\
              + \,&amp;\, \left(&#123;1 \over 3&#125; - &#123;1 \over 4&#125;\right)\\
              + \,&amp;\, \left(&#123;1 \over 4&#125; - &#123;1 \over 5&#125;\right)\dn&#123;1&#125;\\
              \hline
              = \,&amp;\, \left(1 - &#123;1 \over 5&#125;\right)\up&#123;1.5&#125;
              \end&#123;align*&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and so on.
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:386:9
                </span>
              </span>
              {" "}
              {" "}
              The hare’s successive stopping positions approach {" "}
              <Math>
                $1$
              </Math>
              {" "}
              from the left, suggesting that the
              {" "}
              <i>
                infinite
              </i>
              {" "} sum
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &amp;\, \left(1 - &#123;1 \over 2&#125;\right)\\
              \up&#123;1.5&#125;+ \,&amp;\, \left(&#123;1 \over 2&#125; - &#123;1 \over 3&#125;\right)\\
              \up&#123;1.5&#125;+ \,&amp;\, \left(&#123;1 \over 3&#125; - &#123;1 \over 4&#125;\right)\\
              \up&#123;1.5&#125;+ \,&amp;\, \left(&#123;1 \over 4&#125; - &#123;1 \over 5&#125;\right)\\
              \up&#123;1.5&#125;+ \,&amp;\, \left(&#123;1 \over 5&#125; - &#123;1 \over 6&#125;\right)\\
              \up&#123;1.5&#125;+ \,&amp;\, \left(&#123;1 \over 6&#125; - &#123;1 \over 7&#125;\right)\\
              \up&#123;1.5&#125;+ \,&amp;\hfill\,\dots\dn&#123;1&#125;\hfill
              \end&#123;align*&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is “equal” (in some sense) to {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:403:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $1$
                </Math>
                :
              </NoBreak>
              {" "} we can write
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &amp;\, \left(1 - &#123;1 \over 2&#125;\right)\\
              \up&#123;1.5&#125;+ \,&amp;\, \left(&#123;1 \over 2&#125; - &#123;1 \over 3&#125;\right)\\
              \up&#123;1.5&#125;+ \,&amp;\, \left(&#123;1 \over 3&#125; - &#123;1 \over 4&#125;\right)\\
              \up&#123;1.5&#125;+ \,&amp;\, \left(&#123;1 \over 4&#125; - &#123;1 \over 5&#125;\right)\\
              \up&#123;1.5&#125;+ \,&amp;\, \left(&#123;1 \over 5&#125; - &#123;1 \over 6&#125;\right)\\
              \up&#123;1.5&#125;+ \,&amp;\, \left(&#123;1 \over 6&#125; - &#123;1 \over 7&#125;\right)\\
              \up&#123;1.5&#125;+ \,&amp;\hfill\,\dots\dn&#123;1&#125;\hfill\\ \hline
              \up&#123;1.5&#125;= \,&amp;\, 1
              \end&#123;align*&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                But how much, exactly, is the {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:418:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $n$
                </Math>
                -th
              </NoBreak>
              {" "} term
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over n&#125; - &#123;1 \over n+1&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of the sum? (For {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:424:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $n = 99$
                </Math>
                ,
              </NoBreak>
              {" "} this is our original
              difference.) Well...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &#123;1 \over n&#125; - &#123;1 \over n+1&#125; &amp;= &#123;1 \over n&#125;\cdot&#123;n+1 \over n+1&#125;\, - \,
              &#123;1 \over n+1&#125;\cdot&#123;n \over n&#125;\up&#123;1.5&#125;\\
              &amp;= &#123;n+1 \over n(n+1)&#125; - &#123;n \over n(n+1)&#125;\up&#123;1.5&#125;\\
              &amp;= &#123;1 \over n(n+1)&#125;\up&#123;1.5&#125;
              \end&#123;align*&#125;
              $$
              <ImageRight
                src="/build-img/svgo-svg/omps.svg"
                offsetY="-0.5em"
                atLeastAsWide={true}
                local_url="./images/svg_ch1_ex_24.svg"
                intrinsicWidth="497.212"
                intrinsicHeight="317.105"
              />
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...it's that much. (For example,
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:440:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 1&#125; - &#123;1 \over 2&#125; = &#123;1 \over 1 \cdot 2&#125; = &#123;1 \over 2&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:446:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 2&#125; - &#123;1 \over 3&#125; = &#123;1 \over 2 \cdot 3&#125; = &#123;1 \over 6&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and so on.) So
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:452:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &amp;\, \left(1 - &#123;1 \over 2&#125;\right)\\
              \up&#123;1.5&#125;+ \,&amp;\, \left(&#123;1 \over 2&#125; - &#123;1 \over 3&#125;\right)\\
              \up&#123;1.5&#125;+ \,&amp;\, \left(&#123;1 \over 3&#125; - &#123;1 \over 4&#125;\right)\\
              \up&#123;1.5&#125;+ \,&amp;\, \left(&#123;1 \over 4&#125; - &#123;1 \over 5&#125;\right)\\
              \up&#123;1.5&#125;+ \,&amp;\, \left(&#123;1 \over 5&#125; - &#123;1 \over 6&#125;\right)\\
              \up&#123;1.5&#125;+ \,&amp;\, \left(&#123;1 \over 6&#125; - &#123;1 \over 7&#125;\right)\\
              \up&#123;1.5&#125;+ \,&amp;\hfill\,\dots\dn&#123;1&#125;\hfill\\ \hline
              \up&#123;1.5&#125;= \,&amp;\, 1
              \end&#123;align*&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                can be written
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:467:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &amp;\, &#123;1 \over 1 \cdot 2&#125;\\
              \up&#123;1.5&#125;+ \,&amp;\, &#123;1 \over 2 \cdot 3&#125;\\
              \up&#123;1.5&#125;+ \,&amp;\, &#123;1 \over 3 \cdot 4&#125;\\
              \up&#123;1.5&#125;+ \,&amp;\, &#123;1 \over 4 \cdot 5&#125;\\
              \up&#123;1.5&#125;+ \,&amp;\, &#123;1 \over 5 \cdot 6&#125;\\
              \up&#123;1.5&#125;+ \,&amp;\, &#123;1 \over 6 \cdot 7&#125;\\
              \up&#123;1.5&#125;+ \,&amp;\hfill\,\dots\dn&#123;1&#125;\hfill\\ \hline
              \up&#123;1.5&#125;= \,&amp;\, 1
              \end&#123;align*&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (or
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:482:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 2&#125; + &#123;1 \over 6&#125; + &#123;1 \over 12&#125; + &#123;1 \over 20&#125; + &#123;1 \over 30&#125; + \dots \,=\, 1
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                equivalently), which is not obvious at first
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:488:9
                </span>
              </span>
              {" "}
              {" "}
              glance, and kind of interesting!
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Note 5.
                  <span class="t-3003">
                    ./src/content/ch1/ch1^exercises/_true_false_.wly:493:10
                  </span>
                </span>
              </i>
              {" "} The fact that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over n&#125; - &#123;1 \over n+1&#125; = &#123;1 \over n(n+1)&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                means that
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:499:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <Math>
                $&#123;1 \over n&#125; - &#123;1 \over n+1&#125;$
              </Math>
              {" "} is roughly
              {" "}
              <Math>
                $&#123;1 \over n^2&#125;$
              </Math>
              {" "} for large {" "}
              <NoBreak>
                <Math>
                  $n$
                </Math>
                ,
              </NoBreak>
              {" "} which is
              sometimes handy to know. For example,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 10&#125; - &#123;1 \over 11&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is approximately {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:508:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $1/10^2 = 0.01$
                </Math>
                ,
              </NoBreak>
              {" "} while
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 100&#125; - &#123;1 \over 101&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is approximately {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_.wly:514:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $1/100^2 = 0.01^2 = 0.0001$
                </Math>
                ,
              </NoBreak>
              {" "}
              etc.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={2}>
          <ExerciseStatement id="_24_h.a.i_">
            <OuterP>
              <b>
                Exercise 2.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                The fact that
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_follow_up.wly:4:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over n&#125; - &#123;1 \over n+1&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_follow_up.wly:10:5
                </span>
              </span>
              <i>
                roughly
              </i>
              {" "} {" "}
              <Math>
                $1/n^2$
              </Math>
              {" "} for large {" "}
              <Math>
                $n$
              </Math>
              {" "} is discussed in the solution to part i of {" "}
              <InChapterLink
                href="#_23_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 1
              </InChapterLink>
              &#8288;. But how
              far off is this exactly? (I.e., what is the
              difference between {" "}
              <Math>
                $&#123;1 \over n&#125; - &#123;1 \over n+1&#125;$
              </Math>
              {" "}
              and {" "}
              <NoBreak>
                <Math>
                  $&#123;1 \over n^2&#125;$
                </Math>
                ?)
              </NoBreak>
              {" "} And {" "}
              <i>
                roughly
              </i>
              {" "} how much is
              this far-offness, for large {" "}
              <NoBreak>
                <Math>
                  $n$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Since
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_follow_up.wly:17:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over n&#125; - &#123;1 \over n+1&#125; = &#123;1 \over n(n+1)&#125;
              $$
              <ImageRight
                src="/build-img/svgo-svg/Xx87.svg"
                offsetX="-1em"
                atLeastAsWide={true}
                local_url="./images/svg_ch1_ex_25.svg"
                intrinsicWidth="362.474"
                intrinsicHeight="177.616"
              />
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is smaller than
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_follow_up.wly:27:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over n^2&#125;
              $$
              <ImageRight
                src="/build-img/svgo-svg/jBCw.svg"
                offsetX="-1em"
                atLeastAsWide={true}
                local_url="./images/svg_ch1_ex_26.svg"
                intrinsicWidth="362.474"
                intrinsicHeight="177.616"
              />
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                we compute
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_follow_up.wly:37:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over n^2&#125; - &#123;1 \over n(n+1)&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                to avoid a minus sign in the result.
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_follow_up.wly:43:9
                </span>
              </span>
              {" "}
              {" "}
              The difference is:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &#123;1 \over n^2&#125; - &#123;1 \over n(n+1)&#125; &amp;= &#123;1 \over n^2&#125; \cdot &#123;n+1 \over n+1&#125; - &#123;1 \over n(n+1)&#125; \cdot
              &#123;n \over n&#125;\\
              &amp;= &#123;n+1 \over n^2(n+1)&#125; - &#123;n \over n^2(n+1)&#125;\up&#123;1.5&#125;\\
              &amp;= &#123;1 \over n^2(n+1)&#125;\up&#123;1.5&#125;
              \end&#123;align*&#125;
              $$
              <ImageRight
                src="/build-img/svgo-svg/4oJD.svg"
                offsetY="-0.5em"
                atLeastAsWide={true}
                local_url="./images/svg_ch1_ex_27.svg"
                intrinsicWidth="606.819"
                intrinsicHeight="317.105"
              />
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which, for large {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_follow_up.wly:59:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $n$
                </Math>
                ,
              </NoBreak>
              {" "} is roughly
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over n^3&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                since {" "}
                <span class="t-3003">
                  ./src/content/ch1/ch1^exercises/_true_false_follow_up.wly:65:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $n^2(n+1) \approx n^3$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};