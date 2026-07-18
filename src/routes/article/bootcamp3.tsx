import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { Math, MathBlock }  from "~/components/Math";
import OutChapterLink  from "~/components/OutChapterLink";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageLeft, ImageRight }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import TextParent  from "~/components/TextParent";
import { NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Bootcamp3__() {
  return (
    <Article
      prevPage=""
      nextPage="/article/bootcamp2"
      pageNecessaryMargin={270}
      maxElementWidth={1200}
      id="_23_h.a.i_"
      path="/article/bootcamp3"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            a first section
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=exercises">
            exercises
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Bootcamp 3:">
        Components Playground
      </ArticleTitle>
      <Section id="section-1">
        <OuterP>
          <b>
            A First Section.
          </b>
          {" "}
          A very long equation:
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx
          $$
          <ImageRight
            atLeastAsWide={false}
            src="/build-img/svgo-svg/ypXE.svg"
            intrinsicWidth={360}
            intrinsicHeight={160}
          />
        </MathBlock>
        <Pause />
        <OuterP>
          ...with some text beneath.
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;gathered&#125;
          \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx\\
          \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx\\
          \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx\\
          \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx\\
          \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx\\
          \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx
          \end&#123;gathered&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          Hello.
        </OuterP>
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
      <Exercises>
        <Exercise number={1}>
          <ExerciseStatement id="_21_h.a.i_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              {" "}
              Test for solution containing bunch of math.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <MathBlock>
              $$
              \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx
              $$
              <ImageRight
                atLeastAsWide={false}
                src="/build-img/svgo-svg/ypXE.svg"
                intrinsicWidth={360}
                intrinsicHeight={160}
              />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx
              $$
            </MathBlock>
            <Pause />
            <MathBlock constrained={false}>
              $$
              \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx
              $$
            </MathBlock>
            <Pause />
            <MathBlock constrained={false}>
              $$
              \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx
              $$
            </MathBlock>
            <Pause />
            <MathBlock constrained={false}>
              $$
              \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx
              $$
            </MathBlock>
            <Pause />
            <MathBlock constrained={false}>
              $$
              \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx + \int (a^2 + b^2 + c^2)dx
              $$
            </MathBlock>
          </Solution>
        </Exercise>
        <Exercise number={2}>
          <ExerciseStatement id="_22_h.a.i_">
            <OuterP>
              <b>
                Exercise 2.
              </b>
              <ExerciseStatement>
                What is the SideImage component ?
              </ExerciseStatement>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <i>
                <b>
                  Book-context fixtures.
                </b>
              </i>
              {" "} These are the
              active clouds from ch1, ch2, bt1, and bt2.
              Each source excerpt keeps the actual attached
              paragraph/equation/image and its adjacent
              source blocks.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                *ch1.1: `svg
              </i>
              ch1
              <i>
                ch
              </i>
              minus
              <i>
                two
              </i>
              squared
              <i>
                cloud.svg`*
              </i>
            </OuterP>
            <OuterP class="indent-10">
              while, of course,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              2 \times 2 = 4
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is positive as well. But {" "}
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
              {" "} Hence,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;(-2)^2&#125; = 2
              $$
              <ImageRight
                src="/build-img/svgo-svg/ypXE.svg"
                atLeastAsWide={false}
                offsetX="5em"
                intrinsicWidth={360}
                intrinsicHeight={160}
              />
            </MathBlock>
            <Pause />
            <OuterP>
              and, in particular, it is {" "}
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
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                *ch1.2: `c1
              </i>
              abCD
              <i>
                cloud.svg`*
              </i>
            </OuterP>
            <OuterP class="indent-10">
              A little more generally, one has such identities
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
                intrinsicWidth={350}
                intrinsicHeight={250}
              />
            </MathBlock>
            <Pause />
            <OuterP>
              that come from multiplying every term of the first
              parenthesis with every term of the second
              parenthesis. Indeed,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (a + b)(C + D) = (a + b)C + (a + b)D
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                *ch1.3-4: `svg
              </i>
              ch1
              <i>
                ex
              </i>
              25.svg`, `svg
              <i>
                ch1
              </i>
              ex
              <i>
                26.svg`*
              </i>
            </OuterP>
            <OuterP class="indent-10">
              Since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over n&#125; - &#123;1 \over n+1&#125; = &#123;1 \over n(n+1)&#125;
              $$
              <ImageRight
                src="/build-img/svgo-svg/Xx87.svg"
                offsetX="-4rem"
                atLeastAsWide={true}
                intrinsicWidth="362.474"
                intrinsicHeight="177.616"
              />
            </MathBlock>
            <Pause />
            <OuterP>
              (as previously computed) is smaller than
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over n^2&#125;
              $$
              <ImageRight
                offsetX="-4rem"
                src="/build-img/svgo-svg/jBCw.svg"
                atLeastAsWide={true}
                intrinsicWidth="362.474"
                intrinsicHeight="177.616"
              />
            </MathBlock>
            <Pause />
            <OuterP>
              we will compute the difference
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over n^2&#125; - &#123;1 \over n(n+1)&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                *ch1.5: `svg
              </i>
              ch1
              <i>
                ex
              </i>
              27.svg`*_
            </OuterP>
            <OuterP class="indent-10">
              to avoid a minus sign in the result.
              (Computing the second difference and having
              a minus sign does not constitute a mistake,
              however.) Having said this, the difference is:
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
                intrinsicWidth="606.819"
                intrinsicHeight="317.105"
              />
            </MathBlock>
            <Pause />
            <OuterP>
              which, for large {" "}
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
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                *ch1.6-7: `true
              </i>
              false
              <i>
                sixth
              </i>
              root
              <i>
                of
              </i>
              two
              <i>
                cloud1.svg`, `true
              </i>
              false
              <i>
                sixth
              </i>
              root
              <i>
                of
              </i>
              two
              <i>
                cloud2.svg`*
              </i>
            </OuterP>
            <OuterP class="indent-10">
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
              {" "} To
              convince yourself, note that
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
                intrinsicWidth={346}
                intrinsicHeight={142}
              />
            </MathBlock>
            <Pause />
            <OuterP>
              and
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
                intrinsicWidth={444}
                intrinsicHeight={126}
              />
            </MathBlock>
            <Pause />
            <OuterP>
              so {" "}
              <NoBreak>
                <Math>
                  $(\sqrt[2]&#123;\up&#123;0.76&#125;\sqrt[3]&#123;2&#125;&#125;\rt&#123;0.1&#125;)^6 =
                  (\sqrt[3]&#123;\up&#123;0.76&#125;\sqrt[2]&#123;2&#125;&#125;\rt&#123;0.1&#125;)^6 = 2$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              Technically, however, a number {" "}
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
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                *ch1.8: `svg
              </i>
              ch1
              <i>
                ex
              </i>
              24.svg`*_
            </OuterP>
            <OuterP class="indent-10">
              of the sum? (By the way, this {" "}
              <NoBreak>
                <Math>
                  $n$
                </Math>
                -th
              </NoBreak>
              {" "} term
              is the difference
              {" "}
              <Math>
                $&#123;1 \over 99&#125; - &#123;1 \over 100&#125;$
              </Math>
              {" "} for {" "}
              <NoBreak>
                <Math>
                  $n = 99$
                </Math>
                ,
              </NoBreak>
              {" "}
              which is how we came to be reminded of this
              infinite sum in the first place.) Well...
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
                intrinsicWidth="497.212"
                intrinsicHeight="317.105"
              />
            </MathBlock>
            <Pause />
            <OuterP>
              ...it's that much. (For example,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 1&#125; - &#123;1 \over 2&#125; = &#123;1 \over 1 \cdot 2&#125; = &#123;1 \over 2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                *ch2.1: `c2
              </i>
              slope
              <i>
                formula
              </i>
              cloud.svg`*_
            </OuterP>
            <OuterP class="indent-10">
              are the horizontal and the vertical change,
              respectively, from {" "}
              <Math>
                $A$
              </Math>
              {" "} to {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "} so
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \te&#123;slope&#125; = &#123;y_2 - y_1 \over x_2 - x_1&#125;
              $$
              <ImageRight
                src="/build-img/svgo-svg/EgBm.svg"
                offsetY="-0.7em"
                offsetX="3em"
                atLeastAsWide={true}
                intrinsicWidth={600}
                intrinsicHeight={400}
              />
            </MathBlock>
            <Pause />
            <OuterP>
              more succinctly. We call this equation the {" "}
              <i>
                slope formula
              </i>
              .
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                *ch2.2-3: `c2
              </i>
              swap
              <i>
                cloud.svg`, `tmp-images/c2
              </i>
              a
              <i>
                b
              </i>
              fraction
              <i>
                cloud.svg`*
              </i>
            </OuterP>
            <OuterP class="indent-10">
              In fact, we {" "}
              <i>
                should
              </i>
              {" "} be able to algebraically
              verify that the slope formula gives the same
              answer if {" "}
              <Math>
                $(x_1, y_1)$
              </Math>
              {" "} and {" "}
              <Math>
                $(x_2, y_2)$
              </Math>
              {" "} swap
              places, or, namely, to show that the fractions
              <ImageRight
                src="/build-img/svgo-svg/9GPK.svg"
                line={3}
                offsetX="-0.5em"
                intrinsicWidth={400}
                intrinsicHeight={200}
              />
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;y_2 - y_1 \over x_2 - x_1&#125;\qquad\,\,\,\,\,\te&#123;and&#125;\,\,\,\,\,\qquad&#123;y_1 - y_2 \over x_1 - x_2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              are somehow equal. But, indeed,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;y_2 - y_1 \over x_2 - x_1&#125; = &#123;-(y_2 - y_1) \over -(x_2 - x_1)&#125; = &#123;y_1 - y_2 \over x_1 - x_2&#125;
              $$
              <ImageLeft
                src="/build-img/svgo-svg/kzAf.svg"
                offsetX="2.5em"
                offsetY={0}
                atLeastAsWide={true}
                intrinsicWidth={400}
                intrinsicHeight={500}
              />
            </MathBlock>
            <Pause />
            <OuterP>
              which verifies this hypothesis. In particular,
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                *ch2.4: `svg
              </i>
              ch2
              <i>
                ch
              </i>
              vertical
              <i>
                line
              </i>
              equation.svg`*_
            </OuterP>
            <OuterP class="indent-10">
              what would {" "}
              <Math>
                $a$
              </Math>
              {" "} be equal to? Instead, a vertical
              line is described by an equation of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = c
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (see Fig. 1) where {" "}
              <Math>
                $c \in \rr$
              </Math>
              {" "} is a constant,
              similarly to the more familiar equation
              <ImageLeft
                src="/build-img/svgo-svg/3IFS.svg"
                offsetY="-6em"
                offsetX="1em"
                intrinsicWidth={200}
                intrinsicHeight="335.103"
              />
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = b
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for a horizontal line, where {" "}
              <Math>
                $b \in \rr$
              </Math>
              {" "} is a
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                *ch2.5: `svg
              </i>
              3
              <i>
                plus
              </i>
              minus
              <i>
                one
              </i>
              times
              <i>
                x
              </i>
              cloud.svg`*_
            </OuterP>
            <OuterP class="indent-10">
              One should also bear in mind that an equation can
              define a line without having either of the forms
              {" "}
              <NoBreak>
                “
                <Math>
                  $y = ax + b$
                </Math>
                ”
              </NoBreak>
              {" "} or {" "}
              <NoBreak>
                “
                <Math>
                  $x = c$
                </Math>
                ”.
              </NoBreak>
              {" "} For example,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x + y = 3
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is equivalent to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = 3 - x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and thus describes a line of {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -intercept
              </NoBreak>
              {" "} {" "}
              <Math>
                $3$
              </Math>
              {" "}
              and slope {" "}
              <NoBreak>
                <Math>
                  $-1$
                </Math>
                .
              </NoBreak>
              <ImageRight
                src="/build-img/svgo-svg/h7oS.svg"
                line={1}
                intrinsicWidth={300}
                intrinsicHeight={150}
              />
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                *ch2.6: `c2
              </i>
              units
              <i>
                cloud.svg`*
              </i>
            </OuterP>
            <OuterP class="indent-10">
              The amount of time required
              for the balloon to go up by (say) {" "}
              <NoBreak>
                <Math>
                  $4$
                </Math>
                m
              </NoBreak>
              {" "} is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \frac&#123;4\te&#123;m&#125;&#125;&#123;0.75\te&#123;m&#125;/\te&#123;s&#125;&#125;\! = 5.3333...\te&#123;s&#125;
              $$
              <ImageRight
                src="/build-img/svgo-svg/mtGc.svg"
                atLeastAsWide={true}
                intrinsicWidth={930}
                intrinsicHeight={250}
              />
            </MathBlock>
            <Pause />
            <OuterP>
              following the template
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \rt&#123;0.1&#125;
              \te&#123;amount of time&#125; \,\,=\,\, \frac&#123;\!\rt&#123;0.15&#125;\te&#123;amount of change&#125;\!\rt&#123;0.1&#125;&#125;&#123;\te&#123;rate of change&#125;&#125;
              \rt&#123;0.1&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                *ch2.7-8: `c2
              </i>
              slope
              <i>
                two
              </i>
              and
              <i>
                minus
              </i>
              one
              <i>
                half
              </i>
              cloud
              <i>
                right.svg`, `c2
              </i>
              slope
              <i>
                two
              </i>
              and
              <i>
                minus
              </i>
              one
              <i>
                half
              </i>
              cloud
              <i>
                left.svg`*
              </i>
            </OuterP>
            <OuterP class="indent-10">
              This is true, as illustrated by the following
              pair of lines:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/t-Sk.svg"
              class="relative w-fit"
              intrinsicWidth={400}
              intrinsicHeight={400}
            >
              <ImageRight
                src="/build-img/svgo-svg/Y5Cw.svg"
                offsetY="20%"
                offsetX="-5%"
                intrinsicWidth={340}
                intrinsicHeight="154.789"
              />
              <ImageLeft
                src="/build-img/svgo-svg/P0MQ.svg"
                offsetX="-25%"
                offsetY="47%"
                intrinsicWidth={340}
                intrinsicHeight={180}
              />
            </Image>
            <Pause />
            <OuterP>
              In more detail, the two triangles are related
              by a {" "}
              <Math>
                $90^\circ$
              </Math>
              {" "} rotation and so, likewise,
              are the lines defined by their hypotenuses!
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                *ch2.9: `svg
              </i>
              ch2
              <i>
                ex
              </i>
              x0
              <i>
                y0
              </i>
              line
              <i>
                equation
              </i>
              cloud.svg`*_
            </OuterP>
            <OuterP class="indent-10">
              A point {" "}
              <Math>
                $(x,y) \ne (x_0,y_0)$
              </Math>
              {" "} is on the
              line of slope {" "}
              <Math>
                $p$
              </Math>
              {" "} if and only if
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              p = &#123;y - y_0 \over x - x_0&#125;
              $$
              <ImageLeft
                src="/build-img/svgo-svg/eaW7.svg"
                offsetX="0rem"
                atLeastAsWide={true}
                intrinsicWidth={700}
                intrinsicHeight={800}
              />
            </MathBlock>
            <Pause />
            <OuterP>
              because
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \,\,&#123;y - y_0 \over x - x_0&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                *ch2.10: `svg
              </i>
              slope
              <i>
                times
              </i>
              run
              <i>
                equals
              </i>
              rise
              <i>
                cloud.svg`*
              </i>
            </OuterP>
            <OuterP class="indent-10">
              which is satisfied by the point {" "}
              <Math>
                $(x,y) = (x_0,y_0)$
              </Math>
              {" "}
              as well as by every other point on the line.
              This can be a final answer, and, pleasingly,
              has the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \te&#123;“&#125;\te&#123;slope&#125; \times \te&#123;run&#125; = \te&#123;rise&#125;\te&#123;”&#125;
              $$
              <ImageRight
                src="/build-img/svgo-svg/8ZCw.svg"
                offsetX="2.5rem"
                offsetY="0%"
                atLeastAsWide={true}
                intrinsicWidth={400}
                intrinsicHeight="123.091"
              />
            </MathBlock>
            <Pause />
            <OuterP>
              which can also make it easy to remember!
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              The answer we gave is more often written
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y - y_0 = p(x - x_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                *bt1.1: `svg
              </i>
              bt1
              <i>
                bt
              </i>
              empty
              <i>
                set
              </i>
              cloud.svg`*_
            </OuterP>
            <OuterP class="indent-10">
              Mind you, concerning this example, that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \&#123;\&#123;\&#125; \&#125; \ne \&#123;\&#125;
              $$
              <ImageRight
                src="/build-img/svgo-svg/dcQB.svg"
                offsetX="3em"
                atLeastAsWide={true}
                intrinsicWidth={300}
                intrinsicHeight={150}
              />
            </MathBlock>
            <Pause />
            <OuterP>
              because a box containing an empty box is not the
              same thing as an empty box! Specifically,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \&#123; \&#123;\&#125; \&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                *bt2.1: `svg
              </i>
              bt2
              <i>
                bt
              </i>
              alert
              <i>
                cloud.svg`*
              </i>
            </OuterP>
            <OuterP class="indent-10">
              For example,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 10^4 = 1 \times 10 \times 10 \times 10 \times 10 = 10000
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large 10^3 = 1 \times 10 \times 10 \times 10 = 1000
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large 10^2 = 1 \times 10 \times 10 = 100
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large 10^1 = 1 \times 10 = 10
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large 10^0 = 1 = 1
              $$
              <ImageLeft
                src="/build-img/svgo-svg/DSem.svg"
                offsetY="-0.2em"
                offsetX="4em"
                atLeastAsWide={true}
                intrinsicWidth={200}
                intrinsicHeight={110}
              />
            </MathBlock>
            <Pause />
            <OuterP>
              (where, in the last line, {" "}
              <Math>
                $1$
              </Math>
              {" "} is multiplied by {" "}
              <Math>
                $10$
              </Math>
              {" "} {" "}
              <i>
                zero times
              </i>
              ,
              as per the exponent, which is zero) by the first definition, while
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 10^&#123;-1&#125; = 1\,/\,10 = 0.1
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large 10^&#123;-2&#125; = (1\,/\, 10)\,/\,10 = 0.01
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large 10^&#123;-3&#125; = ((1\,/\, 10)\,/\,10)\,/\,10 = 0.001
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large 10^&#123;-4&#125; = (((1\,/\, 10)\,/\,10)\,/\, 10)\,/\, 10 = 0.0001
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by the second definition.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                *bt2.2: `svg
              </i>
              bt2
              <i>
                bt
              </i>
              10
              <i>
                to
              </i>
              the
              <i>
                minus
              </i>
              0
              <i>
                cloud.svg`*
              </i>
            </OuterP>
            <OuterP class="indent-10">
              As {" "}
              <Math>
                $n$
              </Math>
              {" "} successive divisions
              by {" "}
              <Math>
                $10$
              </Math>
              {" "} is the same as one division by {" "}
              <NoBreak>
                <Math>
                  $10^n$
                </Math>
                ,
              </NoBreak>
              {" "} one also has
            </OuterP>
            <Pause />
            <TextParent>
              <MathBlock>
                $$
                \Large 10^&#123;-n&#125; = &#123;1 \over 10^&#123;\hspace&#123;0.2ex&#125;n&#125;&#125;\tag&#123;A&#125;
                $$
              </MathBlock>
            </TextParent>
            <Pause />
            <OuterP>
              for every positive integer {" "}
              <NoBreak>
                <Math>
                  $n$
                </Math>
                ,
              </NoBreak>
              {" "} which gives an alternate means of computing {" "}
              <NoBreak>
                <Math>
                  $10^&#123;-n&#125;$
                </Math>
                .
              </NoBreak>
              {" "}
              Moreover, (
              <OutChapterLink
                href="/article/bootcamp2#_2_h.a.i_"
                class="out-chapter-link"
              >
                A
              </OutChapterLink>
              ) actually holds for
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              every
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              integer {" "}
              <NoBreak>
                <Math>
                  $n$
                </Math>
                ,
              </NoBreak>
              {" "} which is mildly important. In more
              detail, (
              <OutChapterLink
                href="/article/bootcamp2#_2_h.a.i_"
                class="out-chapter-link"
              >
                A
              </OutChapterLink>
              ) holds for {" "}
              <Math>
                $n = 0$
              </Math>
              {" "} by inspection, and (
              <OutChapterLink
                href="/article/bootcamp2#_2_h.a.i_"
                class="out-chapter-link"
              >
                A
              </OutChapterLink>
              )
              is equivalent to the identity
              <ImageLeft
                src="/build-img/svgo-svg/rdZz.svg"
                line={2}
                intrinsicWidth={530}
                intrinsicHeight={380}
              />
            </OuterP>
            <Pause />
            <TextParent>
              <MathBlock>
                $$
                \Large 10^&#123;-n&#125;10^n = 1 \tag&#123;AA&#125;
                $$
              </MathBlock>
            </TextParent>
            <Pause />
            <OuterP>
              which holds for {" "}
              <Math>
                $n$
              </Math>
              {" "} if and only if it holds for
              {" "}
              <NoBreak>
                <Math>
                  $-n$
                </Math>
                .
              </NoBreak>
              {" "} (By which we mean: replacing {" "}
              <NoBreak>
                “
                <Math>
                  $n$
                </Math>
                ”
              </NoBreak>
              {" "} by {" "}
              <NoBreak>
                “
                <Math>
                  $-n$
                </Math>
                ”
              </NoBreak>
              {" "}
              in (
              <OutChapterLink
                href="/article/bootcamp2#_3_h.a.i_"
                class="out-chapter-link"
              >
                AA
              </OutChapterLink>
              ) lands you right back on (
              <OutChapterLink
                href="/article/bootcamp2#_3_h.a.i_"
                class="out-chapter-link"
              >
                AA
              </OutChapterLink>
              ), due to the fact
              that {" "}
              <NoBreak>
                <Math>
                  $-&#123;(-n)&#125; = n$
                </Math>
                .)
              </NoBreak>
              {" "} (So, namely, if (
              <OutChapterLink
                href="/article/bootcamp2#_3_h.a.i_"
                class="out-chapter-link"
              >
                AA
              </OutChapterLink>
              ) holds for all
              positive values of {" "}
              <NoBreak>
                <Math>
                  $\hspace&#123;0.05em&#125;n$
                </Math>
                ,
              </NoBreak>
              {" "} then it holds
              for all negative values of {" "}
              <NoBreak>
                <Math>
                  $n$
                </Math>
                ,
              </NoBreak>
              {" "} as well.)
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                *bt2.3-5: `svg
              </i>
              bt2
              <i>
                bt
              </i>
              ten
              <i>
                to
              </i>
              the
              <i>
                3
              </i>
              times
              <i>
                ten
              </i>
              to
              <i>
                the
              </i>
              6
              <i>
                cloud.svg`, `svg
              </i>
              bt2
              <i>
                bt
              </i>
              ten
              <i>
                to
              </i>
              the
              <i>
                3
              </i>
              times
              <i>
                ten
              </i>
              to
              <i>
                the
              </i>
              9
              <i>
                cloud.svg`, `svg
              </i>
              bt2
              <i>
                bt
              </i>
              ten
              <i>
                to
              </i>
              the
              <i>
                6
              </i>
              times
              <i>
                ten
              </i>
              to
              <i>
                the
              </i>
              6
              <i>
                cloud.svg`*
              </i>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              one million is a thousand thousand
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              because
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 1000 \times 1000 = 1000\hspace&#123;0.3ex&#125;000
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by counting zeroes, or, equivalently, because
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 10^3 \times 10^3 = 10^6
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by additivity of exponents. Similarly, note that
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              one billion is a thousand million
              <ImageLeft
                src="/build-img/svgo-svg/55Oe.svg"
                intrinsicWidth={250}
                intrinsicHeight={100}
              />
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              one trillion is a thousand billion
              <ImageLeft
                src="/build-img/svgo-svg/tAeJ.svg"
                intrinsicWidth={250}
                intrinsicHeight={100}
              />
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              and also (while we're at it)
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              one trillion is a million million
              <ImageRight
                src="/build-img/svgo-svg/xlFe.svg"
                intrinsicWidth={300}
                intrinsicHeight={100}
              />
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              as can be seen, for example, by replacing “billion”
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                *bt2.6: `svg
              </i>
              bt2
              <i>
                bt
              </i>
              ten
              <i>
                to
              </i>
              the
              <i>
                minus
              </i>
              5
              <i>
                cloud.svg`*
              </i>
            </OuterP>
            <OuterP class="indent-10">
              Since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 0.00001 = 10^&#123;-5&#125;
              $$
              <ImageRight
                src="/build-img/svgo-svg/nMNN.svg"
                offsetX="0em"
                atLeastAsWide={true}
                intrinsicWidth={250}
                intrinsicHeight={150}
              />
            </MathBlock>
            <Pause />
            <OuterP>
              the logarithm base {" "}
              <Math>
                $10$
              </Math>
              {" "} of {" "}
              <Math>
                $0.00001$
              </Math>
              {" "} is {" "}
              <NoBreak>
                <Math>
                  $-5$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                *bt2.7: `svg
              </i>
              bt2
              <i>
                ex
              </i>
              equation
              <i>
                addition
              </i>
              cloud.svg`*_
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large a + b - c - 3 = 0
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large -a -2b - c = 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...are satisfied! Adding the second and
              third equation together, we find
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large -b -2c -3 = 0
              $$
              <ImageRight
                src="/build-img/svgo-svg/bESG.svg"
                offsetY="-0.5em"
                offsetX="0.5em"
                atLeastAsWide={true}
                intrinsicWidth={440}
                intrinsicHeight={250}
              />
            </MathBlock>
            <Pause />
            <OuterP>
              and adding this last equation to the first
              equation above, we find
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large -c -2 = 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                <b>
                  Large image stress fixture:
                </b>
              </i>
              {" "} 1000px-wide image with six test clouds.
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/S-T0.svg"
              width="1000px"
              intrinsicWidth={1000}
              intrinsicHeight={250}
            >
              <ImageLeft
                src="/build-img/svgo-svg/0439.svg"
                offsetY="-50%"
                offsetX="2em"
                intrinsicWidth={200}
                intrinsicHeight={100}
              />
              <ImageLeft
                src="/build-img/svgo-svg/mJ_i.svg"
                offsetY="0%"
                offsetX="2em"
                intrinsicWidth={200}
                intrinsicHeight={100}
              />
              <ImageLeft
                src="/build-img/svgo-svg/GyQV.svg"
                offsetY="50%"
                offsetX="2em"
                intrinsicWidth={200}
                intrinsicHeight={100}
              />
              <ImageRight
                src="/build-img/svgo-svg/enf-.svg"
                offsetY="-50%"
                offsetX="2em"
                intrinsicWidth={200}
                intrinsicHeight={100}
              />
              <ImageRight
                src="/build-img/svgo-svg/J4JH.svg"
                offsetY="0%"
                offsetX="2em"
                intrinsicWidth={200}
                intrinsicHeight={100}
              />
              <ImageRight
                src="/build-img/svgo-svg/SN5W.svg"
                offsetY="50%"
                offsetX="2em"
                intrinsicWidth={200}
                intrinsicHeight={100}
              />
            </Image>
          </Solution>
        </Exercise>
      </Exercises>
      <Pause />
      <OuterP>
        <i>
          <b>
            Case 1:
          </b>
        </i>
        {" "} set width=1500px, native 350px
      </OuterP>
      <Pause />
      <Image
        src="/build-img/svgo-svg/6BLF.svg"
        width="1500px"
        intrinsicWidth={350}
        intrinsicHeight={250}
      />
      <Pause />
      <OuterP>
        <i>
          <b>
            Case 2:
          </b>
        </i>
        {" "} set width=1000px, native 1000px
      </OuterP>
      <Pause />
      <Image
        src="/build-img/svgo-svg/S-T0.svg"
        width="1000px"
        intrinsicWidth={1000}
        intrinsicHeight={250}
      />
      <Pause />
      <OuterP>
        <i>
          <b>
            Case 3:
          </b>
        </i>
        {" "} set width=350px, native 1000px
      </OuterP>
      <Pause />
      <Image
        src="/build-img/svgo-svg/S-T0.svg"
        width="350px"
        intrinsicWidth={1000}
        intrinsicHeight={250}
      />
      <Pause />
      <OuterP>
        <i>
          <b>
            Case 4:
          </b>
        </i>
        {" "} set width=350px, native 350px
      </OuterP>
      <Pause />
      <Image
        src="/build-img/svgo-svg/6BLF.svg"
        width="350px"
        intrinsicWidth={350}
        intrinsicHeight={250}
      />
      <Pause />
      <OuterP>
        <i>
          <b>
            Case 5:
          </b>
        </i>
        {" "} no width attribute, native 1000px
      </OuterP>
      <Pause />
      <Image
        src="/build-img/svgo-svg/S-T0.svg"
        intrinsicWidth={1000}
        intrinsicHeight={250}
      />
      <Pause />
      <OuterP>
        <i>
          <b>
            Case 6:
          </b>
        </i>
        {" "} no width attribute, native 350px
      </OuterP>
      <Pause />
      <Image
        src="/build-img/svgo-svg/6BLF.svg"
        intrinsicWidth={350}
        intrinsicHeight={250}
      />
    </>}
  </>;
};