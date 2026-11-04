import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Boxed  from "~/components/Boxed";
import { CentralDisplay, CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import InlineImage  from "~/components/InlineImage";
import { Item, List }  from "~/components/List";
import { Math, MathBlock }  from "~/components/Math";
import MathJaxSvgExportTooltip  from "~/components/MathJaxSvgExportTooltip";
import OutChapterLink  from "~/components/OutChapterLink";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageRight, ImageLeft }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { StarDivider }  from "~/components/StarDivider";
import { Example, Section, SolutionNote, NoBreak, Pause }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter13__() {
  return (
    <Article
      prevPage="/article/chapter12"
      nextPage=""
      pageNecessaryMargin={1500}
      maxElementWidth={1000}
      id="_196_h.a.i_"
      path="/article/chapter13"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            <span class="t-3003-c">
              polar coordinates
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:4:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            <span class="t-3003-c">
              change-of-coordinate formulas
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:95:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=section-3">
            <span class="t-3003-c">
              a famous diagram
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:172:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            <span class="t-3003-c">
              the angle-sum formulas
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:217:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-4">
          <InChapterLink href="?id=section-5">
            <span class="t-3003-c">
              the abercrombie inequality
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:291:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-5">
          <InChapterLink href="?id=section-6">
            <span class="t-3003-c">
              the gregorinovich sandwich
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:409:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-6">
          <InChapterLink href="?id=section-7">
            <span class="t-3003-c">
              cartographic projections
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:532:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-7">
          <InChapterLink href="?id=exercises">
            <span class="t-3003-c">
              exercises
              <span class="t-3003">
                ./src/content/ch9a_trig2/trig2^exercises/__parent.wly:1:1
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 13:">
        <span class="t-3003-c">
          Trigonometry II
          <span class="t-3003">
            ./src/content/ch9a_trig2/__parent.wly:2:11
          </span>
        </span>
      </ArticleTitle>
      <Pause />
      <Exercises id="_194_h.a.i_">
        <Exercise number={1}>
          <ExerciseStatement id="_152_h.a.i_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Guesstimate a function with this graph:
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_linear_.wly:4:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/L2CX.svg"
              local_url="./images/e5_cosine_10x_plus_x_over_4.svg"
              intrinsicWidth="754.5"
              intrinsicHeight="329.5"
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                It appears that the function is “a line plus
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_linear_.wly:13:9
                </span>
              </span>
              {" "}
              {" "}
              something”, as in this diagram:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/tYzo.svg"
              local_url="./images/svg_ch5_ex_cosine_10x_plus_x_over_4_equation.svg"
              intrinsicWidth={1850}
              intrinsicHeight={270}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (Or in the technical sense of taking the sum
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_linear_.wly:19:9
                </span>
              </span>
              {" "}
              {" "}
              of two functions, to be more exact—that is what
              the sum of two functions looks like, pictorialized!)
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                The line appears to be
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_linear_.wly:23:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = &#123;1\over 4&#125;x
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                making it a true {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_linear_.wly:27:9
                </span>
              </span>
              <a href="&gt;&gt;linear_vs_affine#decoy:0">
                <i>
                  linear
                </i>
              </a>
              {" "} function (as opposed
              to {" "}
              <a href="&gt;&gt;linear_vs_affine#decoy:0">
                <i>
                  affine
                </i>
              </a>
              &#8288;, cf. {" "}
              <a href="&gt;&gt;linear_vs_affine#decoy:0">
                Chapter 
                3
              </a>
              &#8288;).
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                As for the “something”—the bumpy one—it appears
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_linear_.wly:30:9
                </span>
              </span>
              {" "}
              {" "}
              to just be a “sped up cosine”, and note that
              the graph goes through approximately {" "}
              <Math>
                $10$
              </Math>
              {" "}
              cycles between {" "}
              <Math>
                $x = 0$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $x = 6.28 \approx 4\eta$
                </Math>
                ,
              </NoBreak>
              {" "}
              as we can count on the graph of the original
              function:
              <ImageLeft
                line={-2}
                src="/build-img/svgo-svg/9sIf.svg"
                local_url="./images/svg_ch5_ex_cosine_10x_plus_x_over_4_4eta_cloud.svg"
                intrinsicWidth={400}
                intrinsicHeight={150}
              />
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/tW8i.svg"
              local_url="./images/e5_cosine_10x_plus_x_over_4_bump_count.svg"
              intrinsicWidth="754.5"
              intrinsicHeight="329.5"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                As cos goes through {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_linear_.wly:47:9
                </span>
              </span>
              <i>
                one
              </i>
              {" "} cycle from {" "}
              <Math>
                $x = 0$
              </Math>
              {" "} to
              {" "}
              <NoBreak>
                <Math>
                  $x = 4\eta$
                </Math>
                ,
              </NoBreak>
              {" "} the “bumpy function” is therefore
              (roughly, from what we can see) a {" "}
              <NoBreak>
                “
                <Math>
                  $10$
                </Math>
                &#x200b;
              </NoBreak>
              <NoBreak>
                <Math>
                  $\times$
                </Math>
                ”
              </NoBreak>
              {" "}
              sped-up version of cosine, i.e.,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = \cos(10x)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                from which the guesstimate for the initial function
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_linear_.wly:54:9
                </span>
              </span>
              {" "}
              {" "}
              would be
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = \cos(10x) + &#123;1\over 4&#125; x
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                adding our two separate guesstimates together.
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_linear_.wly:59:9
                </span>
              </span>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={2}>
          <ExerciseStatement id="_153_h.a.i_">
            <OuterP>
              <b>
                Exercise 2.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Guesstimate a function with this graph (we can
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              tell you that the large-scale curve is a
              parabola):
            </OuterP>
            <Pause />
            <Image
              style="margin-top:0.8em;margin-bottom:1em;"
              src="/build-img/svgo-svg/yMU3.svg"
              local_url="./images/svg_ch5_ex_cosine_minus_cos_20x_plus_quadratic.svg"
              intrinsicWidth="1139.5"
              intrinsicHeight="406.5"
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Having intimated that the answer is the sum of
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:14:9
                </span>
              </span>
              {" "}
              {" "}
              a parabola and of some cosine deviant, let us
              focus on the parabolic portion first, that would
              namely be roughly this purple curve:
            </OuterP>
            <Pause />
            <Image
              style="margin-top:0.8em;margin-bottom:1em;"
              src="/build-img/svgo-svg/7pg9.svg"
              local_url="./images/svg_ch5_ex_cosine_minus_cos_20x_plus_quadratic_with_parabola.svg"
              intrinsicWidth="1139.5"
              intrinsicHeight="406.5"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                [Nb:
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:23:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                parabolic
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:25:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is a synonym of
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:27:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                quadratic
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:29:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                or
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:31:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                degree {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:33:11
                </span>
              </span>
              <Math>
                $\mathit&#123;2&#125;$
              </Math>
              <span class="t-3003-c">
                {" "} polynomial
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:33:30
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                i.e., a function of the form
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:35:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra a_2x^2 + a_1x + a_0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for constants {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:39:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $a_2$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $a_1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $a_0 \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} cf. {" "}
              <OutChapterLink
                href="/article/chapter3#_57_h.a.i_"
                class="out-chapter-link"
              >
                Chapter 3
              </OutChapterLink>
              .]
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                As the parabola is symmetric about the {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:41:9
                </span>
              </span>
              <Math>
                $y$
              </Math>
              {" "} axis it will
              be of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = Ax^2 + C
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for some constants {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:46:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $C \in \rr$
                </Math>
                .
              </NoBreak>
              {" "}
              (And specifically
              without a
              {" "}
              <NoBreak>
                “
                <Math>
                  $Bx$
                </Math>
                ”
              </NoBreak>
              {" "}
              term, that would break symmetry.)
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                The value
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:52:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              C
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is easy because it is the value of the parabola at
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:56:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <NoBreak>
                <Math>
                  $x = 0$
                </Math>
                ,
              </NoBreak>
              {" "} which in this case appears to be {" "}
              <NoBreak>
                <Math>
                  $y = -3$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              style="margin-top:0.8em;margin-bottom:1em;"
              src="/build-img/svgo-svg/Wk9W.svg"
              local_url="./images/svg_ch5_ex_cosine_minus_cos_20x_plus_quadratic_C_estimate.svg"
              intrinsicWidth="1139.5"
              intrinsicHeight="406.5"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...so...
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:63:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              C = -3
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (we say). For {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:68:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "}
              note that the parabola appears to have value {" "}
              <Math>
                $y \approx 3$
              </Math>
              {" "}
              at {" "}
              <NoBreak>
                <Math>
                  $x = \pm 12$
                </Math>
                ,
              </NoBreak>
              {" "} resulting in an increase of {" "}
              <Math>
                $\approx 6$
              </Math>
              {" "}
              between {" "}
              <Math>
                $x = 0$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $x = \pm 12$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              style="margin-top:0.8em;margin-bottom:1em;"
              src="/build-img/svgo-svg/XW1g.svg"
              local_url="./images/svg_ch5_ex_cosine_minus_cos_20x_plus_quadratic_A_estimate.svg"
              intrinsicWidth="1139.5"
              intrinsicHeight="406.5"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                That increase being entirely due to the term
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:77:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <NoBreak>
                <Math>
                  $Ax^2$
                </Math>
                ,
              </NoBreak>
              {" "} we get
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A \cdot 12^2 \approx 6
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (in more detail,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:82:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A\cdot 12^2 - A\cdot 0^2 \approx 6
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                but {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:86:9
                </span>
              </span>
              <Math>
                $A\cdot 0^2$
              </Math>
              {" "} goes away), meaning
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A \approx &#123;6\over 12^2&#125; = &#123;1\over 24&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                meaning that the quadratic portion of the function is
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:90:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;x^2\over 24&#125; - 3
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                per this estimate.
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:94:9
                </span>
              </span>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                The other portion of the answer—what is left
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:96:9
                </span>
              </span>
              {" "}
              {" "}
              after the parabola is subtracted—is a cosine-like
              function (or {" "}
              <i>
                sinusoid
              </i>
              ) whose amplitude (the
              height of a bump) is roughly {" "}
              <NoBreak>
                <Math>
                  $0.5$
                </Math>
                ,
              </NoBreak>
              {" "} which is half the
              amplitude of
              sine/cosine:
            </OuterP>
            <Pause />
            <Image
              style="margin-top:0.8em;margin-bottom:1em;"
              src="/build-img/svgo-svg/MP5H.svg"
              local_url="./images/svg_ch5_ex_cosine_minus_cos_20x_plus_quadratic_with_inset.svg"
              intrinsicWidth="1139.5"
              intrinsicHeight="406.5"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Moreover at {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:107:9
                </span>
              </span>
              <Math>
                $x = 0$
              </Math>
              {" "} we find
              more or less exactly
              the {" "}
              <i>
                bottom
              </i>
              {" "} of a
              bump,
              so altogether
              we can use a function of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -0.5\cos(Bx)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                to model this sinusoid,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:116:9
                </span>
              </span>
              {" "}
              {" "}
              where the multiplication by {" "}
              <Math>
                $0.5$
              </Math>
              {" "} gives us
              the desired amplitude and where the {" "}
              <NoBreak>
                ‘
                <Math>
                  $-$
                </Math>
                ’
              </NoBreak>
              {" "} gives
              us an anti-bump (“trough”?) instead of a bump at {" "}
              <NoBreak>
                <Math>
                  $x = 0$
                </Math>
                ;
              </NoBreak>
              {" "}
              on the other hand the value {" "}
              <Math>
                $B$
              </Math>
              {" "} will control the amount of
              horizontal compression inside the curve; specifically,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              B = 1
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                will give a curve that goes through one full cycle
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:125:9
                </span>
              </span>
              {" "}
              {" "}
              per interval of length {" "}
              <NoBreak>
                <Math>
                  $4\eta$
                </Math>
                ,
              </NoBreak>
              {" "}
              while, in general, an arbitrary value of {" "}
              <Math>
                $B$
              </Math>
              {" "} will give a
              curve that goes {" "}
              <Math>
                $B$
              </Math>
              {" "} full cycles
              per interval of length {" "}
              <Math>
                $4\eta$
              </Math>
              {" "} (the larger {" "}
              <Math>
                $B$
              </Math>
              {" "} is,
              the more “frenzied” the curve);
              in our case, it seems that {" "}
              <NoBreak>
                <Math>
                  $B \approx 20$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              style="margin-top:0.8em;margin-bottom:1em;"
              src="/build-img/svgo-svg/FLx-.svg"
              local_url="./images/svg_ch5_ex_cosine_minus_cos_20x_plus_quadratic_B_estimate.svg"
              intrinsicWidth="1139.5"
              intrinsicHeight="406.5"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                So an estimate for the
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:137:9
                </span>
              </span>
              {" "}
              {" "}
              second function
              would be...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -0.5\cos(20x)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...giving us...
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:143:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -0.5\cos(20x) + &#123;x^2\over 24&#125; - 3
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...for our final answer, after adding the parabola back.
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_parabolic_.wly:147:9
                </span>
              </span>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={3}>
          <ExerciseStatement id="_154_h.a.i_">
            <OuterP>
              <b>
                Exercise 3.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Guesstimate a function with this graph:
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:4:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/dt9I.svg"
              local_url="./images/svg_ch5_ex_big_wave.svg"
              intrinsicWidth="1139.5"
              intrinsicHeight="406.5"
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                First we estimate a function for the large-scale
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:11:9
                </span>
              </span>
              {" "}
              {" "}
              curve in purple:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/3ZYf.svg"
              local_url="./images/svg_ch5_ex_big_wave_purple.svg"
              intrinsicWidth="1139.5"
              intrinsicHeight="406.5"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                It appears to be a linear function (line through
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:17:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "} sloping down) plus a sinusoid. To
              estimate the slope of the linear function we can
              take two points in like relation to the sinusoid,
              draw a line between them and estimate the slope:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/r7Qe.svg"
              local_url="./images/svg_ch5_ex_big_wave_purple_blue_with_1_4.svg"
              intrinsicWidth="1139.5"
              intrinsicHeight="406.5"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                This makes the linear function portion of the purple
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:26:9
                </span>
              </span>
              {" "}
              {" "}
              curve
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = -&#123;1\over 4&#125;x
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                or thereabouts.
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:33:9
                </span>
              </span>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                To model the sinusoid portion of the large-scale
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:35:9
                </span>
              </span>
              {" "}
              {" "}
              purple curve we need more measurements, such as
              the total height of the sinusoid from top of
              bump to bottom of trough; we can add a third “bottom
              of trough” dot, in same relation to the top of
              bumps (but we won't actually draw this dot or else
              we won't be able to see where we're measuring):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/CZVO.svg"
              local_url="./images/svg_ch5_ex_big_wave_purple_blue_with_height.svg"
              intrinsicWidth="1139.5"
              intrinsicHeight="406.5"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                So it appears that the sinusoid has a total height
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:46:9
                </span>
              </span>
              {" "}
              {" "}
              of {" "}
              <Math>
                $\approx 4$
              </Math>
              {" "} from top of bump to bottom of trough.
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                (And in case you're confused by what we're trying
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:49:9
                </span>
              </span>
              {" "}
              {" "}
              to do,
              let us re-explain that we are trying
              to measure the vertical width of this blue band...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/9l0x.svg"
              local_url="./images/svg_ch5_ex_big_wave_purple_blue_with_band.svg"
              intrinsicWidth="1139.5"
              intrinsicHeight="406.5"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...that, indeed, seems near {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:57:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $4$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                What this means is that if we remove the linear
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:59:9
                </span>
              </span>
              {" "}
              {" "}
              portion
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = -&#123;1\over 4&#125;x
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                from the purple curve, what we will find is a
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:66:9
                </span>
              </span>
              {" "}
              {" "}
              sinusoid whose individual bumps have height {" "}
              <NoBreak>
                <Math>
                  $\approx 2$
                </Math>
                ;
              </NoBreak>
              {" "}
              something like this (we switch the color to aquamarine, so
              that “purple curve” retains its unique meaning):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/I-bw.svg"
              local_url="./images/svg_ch5_ex_big_wave_purple_sinusoid_only.svg"
              intrinsicWidth="1139.5"
              intrinsicHeight="406.5"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                This graph has the form
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:74:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = -2\sin(Bx)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for some value of {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:78:9
                </span>
              </span>
              <Math>
                $B \in \rr$
              </Math>
              {" "} that, chosen correctly,
              will give us the desired “wavelength”. (Note that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = -\sin(x)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                has graph...
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:83:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              style="margin-top:0.8em;margin-bottom:1em;"
              src="/build-img/svgo-svg/eM2n.svg"
              local_url="./images/svg_ch5_ex_big_wave_minus_sin_x.svg"
              intrinsicWidth="1139.5"
              intrinsicHeight="406.5"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and that
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:89:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = -2\sin(x)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                has graph...
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:93:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/YfcA.svg"
              local_url="./images/svg_ch5_ex_big_wave_minus_2sin_x.svg"
              intrinsicWidth="1139.5"
              intrinsicHeight="406.5"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and, from there, all that remains is to
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:98:9
                </span>
              </span>
              {" "}
              {" "}
              “slow down” the oscillation to match the
              aquamarine graph—the “slowing down” is what
              {" "}
              <Math>
                $B$
              </Math>
              {" "} is for.)
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                To find {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:103:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "} we measure the cycle length (it is, admittedly, hard to
              accurately determine the position of the top
              of each large-scale bump, but we do our best by
              basing ourselves off of what appear to be identical
              patterns in the small-scale oscillations at
              the top of each large-scale bump):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/So_Y.svg"
              local_url="./images/svg_ch5_ex_big_wave_purple_blue_period_measurement.svg"
              intrinsicWidth="1139.5"
              intrinsicHeight="406.5"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                As
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:113:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              12.6 \approx 12.56 = 2\times 6.28 \approx 2\cdot 4\eta
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                the period of the large-scale sinusoid is near
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:119:9
                </span>
              </span>
              {" "}
              {" "}
              twice the period of sin or cos; i.e., we need to
              “slow down”
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -2\sin(x)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by a factor {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:127:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $2$
                </Math>
                ,
              </NoBreak>
              {" "} i.e., put
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              B = 0.5
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                i.e., use
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:133:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = -2\sin(0.5x)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for the large-scale sinusoid. (Aquamarine graph.)
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:139:9
                </span>
              </span>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                (So far we have
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:141:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -&#123;1\over 4&#125;x - 2\sin(0.5x)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for our approximation to the purple curve, putting
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:147:9
                </span>
              </span>
              {" "}
              {" "}
              the linear and sinusoidal parts together. Now we
              move on from the purple curve.)
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                It remains to add in the small-scale oscillation
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:151:9
                </span>
              </span>
              {" "}
              {" "}
              from the original curve; we can do the tedious
              part first, and count the number cycles in an
              interval of length {" "}
              <NoBreak>
                <Math>
                  $4\eta \approx 6.28$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/yXJ4.svg"
              local_url="./images/svg_ch5_ex_big_wave_purple_small_scale_bump_count.svg"
              intrinsicWidth="1139.5"
              intrinsicHeight="406.5"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                So the small-scale oscillation is running
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:159:9
                </span>
              </span>
              {" "}
              {" "}
              at {" "}
              <Math>
                $\approx 19$
              </Math>
              {" "} times the frequency of an ordinary
              sine or cosine, and we can model the small-scale
              oscillation by
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra -0.5\sin(19x)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                since, like the large-scale oscillation from the
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:168:9
                </span>
              </span>
              {" "}
              {" "}
              purple curve, it shares the same phase as {" "}
              <NoBreak>
                <Math>
                  $-\sin(x)$
                </Math>
                ,
              </NoBreak>
              {" "}
              and since, like the small-scale oscillation from
              {" "}
              <InChapterLink
                href="#_153_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 2
              </InChapterLink>
              &#8288;, it has
              an amplitude of {" "}
              <NoBreak>
                <Math>
                  $\approx 0.5$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Altogether, we get
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:174:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = -&#123;1\over 4&#125;x - 2\sin(0.5x) - 0.5\sin(19x)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as our “guesstimate”, while adding the linear
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_guesstimate_sinusoid_.wly:180:9
                </span>
              </span>
              {" "}
              {" "}
              function, the large-scale sinusoid, and the small-scale
              sinusoid together!
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={4}>
          <ExerciseStatement id="_155_h.a.i_">
            <OuterP>
              <b>
                Exercise 4.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                A point {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_spherical_to_cartesian_coordinates_1_.wly:4:5
                </span>
              </span>
              <Math>
                $P \in \rr^3$
              </Math>
              {" "} at distance {" "}
              <Math>
                $R$
              </Math>
              {" "} from the
              origin forms an angle {" "}
              <Math>
                $\phi$
              </Math>
              {" "} with the positive
              {" "}
              <Math>
                $z$
              </Math>
              {" "} axis, while {" "}
              <NoBreak>
                <Math>
                  $P$
                </Math>
                's
              </NoBreak>
              {" "} projection onto the {" "}
              <NoBreak>
                <Math>
                  $xy$
                </Math>
                -plane
              </NoBreak>
              {" "}
              is at a counterclockwise angle {" "}
              <Math>
                $\theta$
              </Math>
              {" "} from the
              positive {" "}
              <Math>
                $x$
              </Math>
              {" "} axis:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/FZVx.svg"
              local_url="./images/svg_ch5_ex_spherical_coordinates_statement.svg"
              intrinsicWidth={410}
              intrinsicHeight={460}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                What are {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_spherical_to_cartesian_coordinates_1_.wly:13:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $y$
              </Math>
              {" "} and {" "}
              <Math>
                $z$
              </Math>
              {" "} in terms of {" "}
              <NoBreak>
                <Math>
                  $R$
                </Math>
                ,
              </NoBreak>
              {" "}
              {" "}
              <Math>
                $\phi$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Since {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_spherical_to_cartesian_coordinates_1_.wly:18:9
                </span>
              </span>
              <Math>
                $\phi$
              </Math>
              {" "} is an ordinary geometric angle
              between two lines, (as opposed to: an oriented
              angle, a.k.a., “signed angle”), we have
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0 \leq \phi \leq 2\eta
              $$
              <ImageRight
                src="/build-img/svgo-svg/DuQk.svg"
                offsetX="4em"
                atLeastAsWide={true}
                local_url="./images/e5_sperical_coordinates_180_cloud.svg"
                intrinsicWidth={500}
                intrinsicHeight={150}
              />
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                from which
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_spherical_to_cartesian_coordinates_1_.wly:44:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(\phi) \geq 0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and from which {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_spherical_to_cartesian_coordinates_1_.wly:56:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $R\sin(\phi)$
                </Math>
                ,
              </NoBreak>
              {" "} as it appears in the 
              following diagram, is the actual {" "}
              <i>
                length
              </i>
              {" "} of
              {" "}
              <NoBreak>
                <Math>
                  $P$
                </Math>
                's
              </NoBreak>
              {" "} projection onto the {" "}
              <NoBreak>
                <Math>
                  $xy$
                </Math>
                -plane:
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/giDO.svg"
              local_url="./images/svg_ch5_ex_spherical_coordinates_Rsin_phi.svg"
              intrinsicWidth={410}
              intrinsicHeight={480}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...whereas {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_spherical_to_cartesian_coordinates_1_.wly:63:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $R\cos(\phi)$
                </Math>
                ,
              </NoBreak>
              {" "} as it appears above, is a
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                signed length
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_spherical_to_cartesian_coordinates_1_.wly:65:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_spherical_to_cartesian_coordinates_1_.wly:68:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(\phi)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is negative for {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_spherical_to_cartesian_coordinates_1_.wly:74:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\eta &lt; \phi \leq 2\eta$
                </Math>
                ,
              </NoBreak>
              {" "} positive
              for {" "}
              <NoBreak>
                <Math>
                  $0 \leq \phi &lt; \eta$
                </Math>
                !
              </NoBreak>
              {" "} But in any case that is what
              we want, since {" "}
              <Math>
                $z$
              </Math>
              {" "} switches from positive to negative
              at {" "}
              <Math>
                $\phi = \eta$
              </Math>
              {" "} just like {" "}
              <NoBreak>
                <Math>
                  $\cos(\phi)$
                </Math>
                ,
              </NoBreak>
              {" "}
              giving us
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              z = R\cos(\phi)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and “one coordinate down”.
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_spherical_to_cartesian_coordinates_1_.wly:84:9
                </span>
              </span>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                For {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_spherical_to_cartesian_coordinates_1_.wly:86:9
                </span>
              </span>
              <Math>
                $x$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                ,
              </NoBreak>
              {" "} then, we are left in a “classical”
              situation of converting polar coordinates to Cartesian
              coordinates in the {" "}
              <NoBreak>
                <Math>
                  $xy$
                </Math>
                -plane;
              </NoBreak>
              {" "} only  the {" "}
              <NoBreak>
                “
                <Math>
                  $r$
                </Math>
                ”
              </NoBreak>
              {" "} of
              polar coordinates is now {" "}
              <NoBreak>
                “
                <Math>
                  $R\sin(\phi)$
                </Math>
                ”
              </NoBreak>
              {" "} (but
              which is nonnegative, happily, as noted):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/10Fl.svg"
              local_url="./images/svg_ch5_ex_spherical_coordinates_xy_plane.svg"
              intrinsicWidth={380}
              intrinsicHeight={330}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Or:
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_spherical_to_cartesian_coordinates_1_.wly:95:9
                </span>
              </span>
            </OuterP>
            <Boxed style="margin-bottom:-5px;">
              <MathBlock>
                $$
                x = R\sin(\phi)\cos(\theta)
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                y = R\sin(\phi)\sin(\theta)
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                z = R\cos(\phi)
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </Boxed>
            <Pause />
            <StarDivider />
          </Solution>
        </Exercise>
        <Exercise number={5}>
          <ExerciseStatement id="_156_h.a.i_">
            <OuterP>
              <b>
                Exercise 5.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                If, {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_spherical_to_cartesian_coordinates_2_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              in {" "}
              <InChapterLink
                href="#_155_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 4
              </InChapterLink>
              &#8288;,
              we modify the definition of the angle {" "}
              <Math>
                $\phi$
              </Math>
              {" "}
              to be {" "}
              <NoBreak>
                <Math>
                  $P$
                </Math>
                's
              </NoBreak>
              {" "} elevation above the {" "}
              <NoBreak>
                <Math>
                  $xy$
                </Math>
                -plane,
              </NoBreak>
              {" "}
              {" "}
              <NoBreak>
                <Math>
                  $\phi \in [-\eta, \eta]$
                </Math>
                ,
              </NoBreak>
              {" "}
              as illustrated below, 
              how are the corresponding change-of-coordinate 
              formulas affected?
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/haQ7.svg"
              local_url="./images/svg_ch5_ex_spherical_coordinates_otherway_statement.svg"
              intrinsicWidth={410}
              intrinsicHeight={460}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Since
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_spherical_to_cartesian_coordinates_2_.wly:18:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \phi \in [-\eta, \eta]
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                one has
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_spherical_to_cartesian_coordinates_2_.wly:22:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(\phi) \geq 0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_spherical_to_cartesian_coordinates_2_.wly:26:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              R\cos(\phi) \geq 0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                from which {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_spherical_to_cartesian_coordinates_2_.wly:30:9
                </span>
              </span>
              <Math>
                $R\cos(\phi)$
              </Math>
              {" "} becomes the 
              length of
              {" "}
              <NoBreak>
                <Math>
                  $P$
                </Math>
                's
              </NoBreak>
              {" "} projection onto the {" "}
              <NoBreak>
                <Math>
                  $xy$
                </Math>
                -plane,
              </NoBreak>
              {" "}
              similarly to {" "}
              <Math>
                $R\sin(\phi)$
              </Math>
              {" "} being that
              length in {" "}
              <InChapterLink
                href="#_155_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 4
              </InChapterLink>
              &#8288;,
              while on the other the other hand,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              R\sin(\phi)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is a signed quantity equal to {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_spherical_to_cartesian_coordinates_2_.wly:39:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $z$
                </Math>
                ,
              </NoBreak>
              {" "} similarly
              to {" "}
              <Math>
                $R\cos(\phi)$
              </Math>
              {" "} in {" "}
              <InChapterLink
                href="#_155_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 4
              </InChapterLink>
              &#8288;:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/3aFp.svg"
              local_url="./images/svg_ch5_ex_spherical_coordinates_otherway_Rcos_phi.svg"
              intrinsicWidth={410}
              intrinsicHeight={460}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The coordinate transformations are
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_spherical_to_cartesian_coordinates_2_.wly:45:9
                </span>
              </span>
              {" "}
              {" "}
              thus obtained by interchanging {" "}
              <NoBreak>
                “
                <Math>
                  $\sin(\phi)$
                </Math>
                ”
              </NoBreak>
              {" "} and
              {" "}
              <NoBreak>
                “
                <Math>
                  $\cos(\phi)$
                </Math>
                ”
              </NoBreak>
              {" "} in the formulas of {" "}
              <InChapterLink
                href="#_155_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 4
              </InChapterLink>
              &#8288;,
              giving us:
            </OuterP>
            <Boxed style="margin-bottom:0em;">
              <MathBlock>
                $$
                x = R\cos(\phi)\cos(\theta)
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                y = R\cos(\phi)\sin(\theta)
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                z = R\sin(\phi)
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </Boxed>
            <Pause />
            <StarDivider />
          </Solution>
        </Exercise>
        <Exercise number={6}>
          <ExerciseStatement id="_157_h.a.i_">
            <OuterP>
              <b>
                Exercise 6.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Compute the vertical distance from {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_top_and_side_.wly:4:5
                </span>
              </span>
              <Math>
                $A$
              </Math>
              {" "} to {" "}
              <Math>
                $A'$
              </Math>
              {" "}
              from these blueprints for a shed with
              an angled inside wall (all distances in inches):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/shI1.svg"
              local_url="./images/svg_ch5_ex_floorplan.svg"
              intrinsicWidth={860}
              intrinsicHeight={475}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                We will compute the two green lengths, then the
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_top_and_side_.wly:13:9
                </span>
              </span>
              {" "}
              {" "}
              red length, then the blue length, then add 130:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/nm64.svg"
              local_url="./images/svg_ch5_ex_floorplan_soln1.svg"
              intrinsicWidth={860}
              intrinsicHeight={475}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Proceeding, the longer and smaller green lengths
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_top_and_side_.wly:19:9
                </span>
              </span>
              {" "}
              {" "}
              are {" "}
              <Math>
                $112\rt&#123;0.1&#125; \cdot \sin(25.5^\circ\hlfbk)$
              </Math>
              {" "}
              and {" "}
              <Math>
                $8\rt&#123;0.1&#125; \cdot \cos(25.5^\circ\hlfbk)$
              </Math>
              {" "} inches,
              respectively:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/xKw8.svg"
              local_url="./images/svg_ch5_ex_floorplan_soln2.svg"
              intrinsicWidth={860}
              intrinsicHeight={400}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The red length is therefore
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_top_and_side_.wly:27:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &amp;\,\,268 - 8 - 112\cdot\sin(25.5^\circ\hlfbk) - 8\cdot\cos(25.5^\circ\hlfbk) \\
              \up&#123;1.6&#125; =&amp;\,\,260 - 112\cdot\sin(25.5^\circ\hlfbk) - 8\cdot\cos(25.5^\circ\hlfbk)
              \end&#123;align*&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (inches) while the blue length is
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_top_and_side_.wly:36:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \tan(22^\circ\hlfbk)\cdot[260 - 112\cdot\sin(25.5^\circ\hlfbk) - 8\cdot\cos(25.5^\circ\hlfbk)]
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (inches) and the final answer is
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_top_and_side_.wly:42:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              130 + \tan(22^\circ\hlfbk)\cdot[260 - 112\cdot\sin(25.5^\circ\hlfbk) - 8\cdot\cos(25.5^\circ\hlfbk)]
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                inches, which comes out to
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_top_and_side_.wly:48:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              212.65
              $$
              <ImageLeft
                src="/build-img/svgo-svg/O1mN.svg"
                offsetX="10em"
                atLeastAsWide={true}
                local_url="./images/svg_ch5_ex_floorplan_computation_cloud.svg"
                intrinsicWidth={800}
                intrinsicHeight={520}
              />
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                minus some. (Approximating to {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_top_and_side_.wly:58:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $1/100$
                </Math>
                -th
              </NoBreak>
              {" "} of an inch
              should be good enough for a construction site.)
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
                  Note that...
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_blueprints_top_and_side_.wly:63:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \cos(25.5^\circ) = 0.90258\dots
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \sin(25.5^\circ) = 0.43051\dots
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \tan(22^\circ) = 0.40402\dots
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...and if you are not finding these values, then make sure
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_blueprints_top_and_side_.wly:73:13
                  </span>
                </span>
                {" "}
                {" "}
                that your calculator is in “degree mode”.
                (Otherwise you have to manually
                convert the arguments to radians.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={7}>
          <ExerciseStatement id="_158_h.a.i_">
            <OuterP>
              <b>
                Exercise 7.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Given the following sketch, to what angle
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_open_thin_door_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              can the door be opened before it hits against
              the roof? (Hint: You will need to Google “how
              to use arctan”, or “how to convert from Cartesian
              to polar coordinates”.)
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/fgGT.svg"
              local_url="./images/svg_ch5_ex_opening_door.svg"
              intrinsicWidth={500}
              intrinsicHeight={410}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                And:
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_open_thin_door_.wly:13:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <List style="padding-left:2.2em;gap:0.2em;">
              <Item>
                <p>
                  <span class="t-3003-c">
                    all distances are in inches
                    <span class="t-3003">
                      ./src/content/ch9a_trig2/trig2^exercises/_blueprints_open_thin_door_.wly:18:9
                    </span>
                  </span>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    assume half an inch from the edge of the door
                    <span class="t-3003">
                      ./src/content/ch9a_trig2/trig2^exercises/_blueprints_open_thin_door_.wly:20:9
                    </span>
                  </span>
                  {" "}
                  {" "}
                  to the center of its hinge
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    assume the door has negligible thicknesss
                    <span class="t-3003">
                      ./src/content/ch9a_trig2/trig2^exercises/_blueprints_open_thin_door_.wly:23:9
                    </span>
                  </span>
                </p>
              </Item>
            </List>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The “key intermediate length” to compute is
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_open_thin_door_.wly:27:9
                </span>
              </span>
              {" "}
              {" "}
              the distance 
              from the hinge-edge of the door to
              the ceiling near the top of the door:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Tsmn.svg"
              local_url="./images/svg_ch5_ex_opening_door_soln0.svg"
              intrinsicWidth={1200}
              intrinsicHeight={410}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                For this we need the lengths marked ‘2’ and
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_open_thin_door_.wly:38:9
                </span>
              </span>
              {" "}
              {" "}
              ‘4’ below, each of which requires a separate
              mini-computation, including deducing the width 
              of the door (length ‘3’) in order to deduce the length marked ‘4’
              (we will also reuse length ‘3’ below|):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/odA8.svg"
              local_url="./images/svg_ch5_ex_opening_door_soln1.svg"
              intrinsicWidth={1200}
              intrinsicHeight={410}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (Nb: One can also compute the length marked ‘2’ as
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_open_thin_door_.wly:47:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;42\over \tan(23^\circ)&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                since {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_open_thin_door_.wly:51:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\cot = 1/\tan$
                </Math>
                ,
              </NoBreak>
              {" "} or
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              42\cdot \tan(67^\circ)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                since {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_open_thin_door_.wly:55:9
                </span>
              </span>
              <Math>
                $67^\circ = 90^\circ - 23^\circ$
              </Math>
              {" "} is the complement
              of {" "}
              <NoBreak>
                <Math>
                  $23^\circ$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Next, as
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_open_thin_door_.wly:58:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0.5
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is the distance from the side of the door to its
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_open_thin_door_.wly:64:9
                </span>
              </span>
              {" "}
              {" "}
              hinge, the door swings at a radius of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              38.5
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and the distance between the hinge's center
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_open_thin_door_.wly:71:9
                </span>
              </span>
              {" "}
              {" "}
              and the ceiling, measured horizontally at the top
              of the door, is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              30.945 - 0.5 = 30.445...
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by subtracting from the length marked ‘5’.
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_open_thin_door_.wly:79:9
                </span>
              </span>
              {" "}
              {" "}
              We can draw this overhead sketch
              (not to scale, and keeping to {" "}
              <Math>
                $3$
              </Math>
              {" "} digits of accuracy):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/OO4Q.svg"
              local_url="./images/svg_ch5_ex_opening_door_overhead.svg"
              intrinsicWidth={530}
              intrinsicHeight={460}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Here
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_open_thin_door_.wly:86:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \arctan
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is a function that you can find notated as
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_open_thin_door_.wly:92:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \te&#123;“&#125;\tan^&#123;-1&#125;\te&#123;”&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                on your calculator (a questionable choice of notation,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_open_thin_door_.wly:98:9
                </span>
              </span>
              {" "}
              {" "}
              because it is {" "}
              <i>
                not
              </i>
              {" "} the same as {" "}
              <NoBreak>
                <Math>
                  $1/\tan = \cot$
                </Math>
                ),
              </NoBreak>
              {" "} and
              sometimes known as
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                tangent inverse
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_open_thin_door_.wly:102:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by the gallery, converts a fraction of the form
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_open_thin_door_.wly:104:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\te&#123;opposite&#125;\over\te&#123;adjacent&#125;&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                into the corresponding angle whose tangent equals that
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_open_thin_door_.wly:110:9
                </span>
              </span>
              {" "}
              {" "}
              fraction.
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                The final answer is...
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_open_thin_door_.wly:113:9
                </span>
              </span>
            </OuterP>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                <MathBlock>
                  $$
                  90^\circ + 52.26^\circ = 142.26^\circ
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </div>
            </center>
            <OuterP>
              <span class="t-3003-c">
                ...because {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_blueprints_open_thin_door_.wly:124:9
                </span>
              </span>
              <Math>
                $\alpha$
              </Math>
              {" "} only constitutes the amount of rotation
              past {" "}
              <NoBreak>
                <Math>
                  $90^\circ$
                </Math>
                ,
              </NoBreak>
              {" "} per the drawing.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={8}>
          <ExerciseStatement id="_159_h.a.i_">
            <OuterP>
              <b>
                Exercise 8.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                In the figure below, where can
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_1_.wly:4:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large ab\cos\theta_&#123;ab&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                be found, if at all? (Note that {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_1_.wly:10:5
                </span>
              </span>
              <NoBreak>
                “
                <Math>
                  $\theta_&#123;ab&#125;$
                </Math>
                ”
              </NoBreak>
              {" "} is
              just a name.)
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/oty_.svg"
              local_url="./images/e5_cosine_rule_geometric_1_statement.svg"
              intrinsicWidth={600}
              intrinsicHeight={575}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                It is the area of both these rectangles:
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_1_.wly:18:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/XjcR.svg"
              local_url="./images/e5_cosine_rule_geometric_1_sol1_v2.svg"
              intrinsicWidth={600}
              intrinsicHeight={610}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Here is how {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_1_.wly:23:9
                </span>
              </span>
              <NoBreak>
                “
                <Math>
                  $b\cdot\cos\theta_&#123;ab&#125;$
                </Math>
                ”
              </NoBreak>
              {" "} 
              and {" "}
              <NoBreak>
                “
                <Math>
                  $a\cdot\cos\theta_&#123;ab&#125;$
                </Math>
                ”
              </NoBreak>
              {" "} show up as the widths of
              the two rectangles, respectively, zooming in:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/n3ZM.svg"
              local_url="./images/e5_cosine_rule_geometric_1_sol34_combined.svg"
              intrinsicWidth={750}
              intrinsicHeight={350}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Thus the rectangles respectively have areas...
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_1_.wly:32:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large a(b\cdot \cos\theta_&#123;ab&#125;) = ab\cos\theta_&#123;ab&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and...
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_1_.wly:37:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large b(a\cdot \cos\theta_&#123;ab&#125;) = ab\cos\theta_&#123;ab&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...as claimed!
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_1_.wly:42:9
                </span>
              </span>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={9}>
          <ExerciseStatement id="_160_h.a.i_">
            <OuterP>
              <b>
                Exercise 9.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Keeping the diagram of {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_2_.wly:4:5
                </span>
              </span>
              <InChapterLink
                href="#_159_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 8
              </InChapterLink>
              &#8288;,
              find a formula for {" "}
              <Math>
                $c$
              </Math>
              {" "} in terms of {" "}
              <NoBreak>
                <Math>
                  $a$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $b$
              </Math>
              {" "}  
              and {" "}
              <NoBreak>
                <Math>
                  $\theta_&#123;ab&#125;$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                By {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_2_.wly:10:9
                </span>
              </span>
              <InChapterLink
                href="#_159_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 8
              </InChapterLink>
              &#8288;,
              these rectangles have the same area:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/q6NB.svg"
              local_url="./images/_e5_cosine_rule_geometric_2_sol1.svg"
              intrinsicWidth={600}
              intrinsicHeight={575}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                But by a similar argument,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_2_.wly:17:9
                </span>
              </span>
              {" "}
              {" "}
              these rectangles 
              can also be shown to have
              have the same area:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Sie8.svg"
              local_url="./images/_e5_cosine_rule_geometric_2_sol2_v2.svg"
              intrinsicWidth={700}
              intrinsicHeight={335}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                This gives...
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_2_.wly:26:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Prt-.svg"
              local_url="./images/_e5_cosine_rule_geometric_2_sol3.svg"
              intrinsicWidth={3100}
              intrinsicHeight={180}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...thiiiis...
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_2_.wly:31:9
                </span>
              </span>
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                c = \sqrt&#123;a^2 + b^2 - 2ab\cos\theta_&#123;ab&#125;&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </Boxed>
            <OuterP>
              <span class="t-3003-c">
                ...formula!
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_2_.wly:38:9
                </span>
              </span>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={10}>
          <ExerciseStatement id="_161_h.a.i_">
            <OuterP>
              <b>
                Exercise 10.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Find expressions for areas A—F and use these to
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_3_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              give a formula for {" "}
              <Math>
                $c$
              </Math>
              {" "} in terms of {" "}
              <NoBreak>
                <Math>
                  $a$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $b$
              </Math>
              {" "} and
              {" "}
              <NoBreak>
                <Math>
                  $\theta_&#123;ab&#125;$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/cigo.svg"
              local_url="./images/_e5_cosine_rule_geometric_3_statement_v2.svg"
              intrinsicWidth={1080}
              intrinsicHeight={595}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Keeping in mind that
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_3_.wly:18:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(2\eta - x) = -\cos x
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for all {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_3_.wly:24:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x\in \rr$
                </Math>
                ,
              </NoBreak>
              {" "}
              and that, in particular,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(2\eta - \theta_&#123;ab&#125;) = -\cos\theta_&#123;ab&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is a positive number in this diagram since
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_3_.wly:31:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <Math>
                $0 &lt; 2\eta - \theta_&#123;ab&#125; &lt; \eta$
              </Math>
              {" "} is an acute angle, 
              the areas are:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/H_Um.svg"
              local_url="./images/_e5_cosine_rule_geometric_3_sol1_v2.svg"
              intrinsicWidth={1080}
              intrinsicHeight={606}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Then
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_3_.wly:44:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large c = \sqrt&#123;c^2&#125; = \sqrt&#123;\te&#123;D&#125; + \te&#123;C&#125;&#125; = \sqrt&#123;\te&#123;E&#125; + \te&#123;F&#125;&#125; = \sqrt&#123;(a^2 + \te&#123;B&#125;) + (b^2 + \te&#123;A&#125;)&#125; = \sqrt&#123;a^2 + b^2 - 2ab\cos\theta_&#123;ab&#125;&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                where we use the fact that
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_3_.wly:50:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gathered&#125;
              \te&#123;D&#125; = \te&#123;E&#125;\, \\
              \up&#123;1.4&#125;\te&#123;C&#125; = \te&#123;F&#125;\,
              \end&#123;gathered&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                in the third equality, and the fact that
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_3_.wly:59:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gathered&#125;
              \te&#123;E&#125; = a^2 + \te&#123;B&#125;\, \\
              \up&#123;1.4&#125;\te&#123;F&#125; = b^2 + \te&#123;A&#125;\,
              \end&#123;gathered&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                in the fourth equality, and the fact that
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_3_.wly:68:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \te&#123;A&#125; = \te&#123;B&#125; = -ab\cos\theta_&#123;ab&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                in the last equality.
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_3_.wly:74:9
                </span>
              </span>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                So we obtain the same formula as in {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_3_.wly:76:9
                </span>
              </span>
              <InChapterLink
                href="#_160_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 9
              </InChapterLink>
              &#8288;!
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={11}>
          <ExerciseStatement id="_162_h.a.i_">
            <OuterP>
              <b>
                Exercise 11.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Find expressions for areas A—F and use these to
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_4_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              give a formula for {" "}
              <Math>
                $c$
              </Math>
              {" "} in terms of {" "}
              <NoBreak>
                <Math>
                  $a$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $b$
              </Math>
              {" "} and
              {" "}
              <NoBreak>
                <Math>
                  $\theta_&#123;ab&#125;$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/hnrJ.svg"
              local_url="./images/_e5_cosine_rule_geometric_4_statement_v2.svg"
              intrinsicWidth={1080}
              intrinsicHeight={670}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                We can calculate each area as a plain “width {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_4_.wly:13:9
                </span>
              </span>
              <Math>
                $\times$
              </Math>
              {" "} height”
              while keeping in mind that {" "}
              <Math>
                $\cos\theta_&#123;ac&#125; &lt; 0$
              </Math>
              {" "} (or more exactly
              that {" "}
              <NoBreak>
                <Math>
                  $\cos(2\eta - \theta_&#123;ac&#125;) = -\cos\theta_&#123;ac&#125;$
                </Math>
                ),
              </NoBreak>
              {" "}
              similarly to exercises {" "}
              <InChapterLink
                href="#_159_h.a.i_"
                class="in-chapter-link"
              >
                8
              </InChapterLink>
              &#8288;,
              {" "}
              <InChapterLink
                href="#_160_h.a.i_"
                class="in-chapter-link"
              >
                9
              </InChapterLink>
              &#8288;, and {" "}
              <InChapterLink
                href="#_161_h.a.i_"
                class="in-chapter-link"
              >
                10
              </InChapterLink>
              &#8288;:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/VpDU.svg"
              local_url="./images/_e5_cosine_rule_geometric_4_sol1.svg"
              intrinsicWidth={1080}
              intrinsicHeight={670}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                From which...
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_4_.wly:32:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large c = \sqrt&#123;c^2&#125; = \sqrt&#123;B - D&#125; = \sqrt&#123;E - C&#125; = \sqrt&#123;(b^2 - A) - (F - a^2)&#125; = \sqrt&#123;(b^2 - ab\cos\theta_&#123;ab&#125;) - (ab\cos\theta_&#123;ab&#125; - a^2)&#125; = \sqrt&#123;a^2 + b^2 - 2ab\cos\theta_&#123;ab&#125;&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...where we use the fact that
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_4_.wly:38:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gathered&#125;
              \te&#123;B&#125; = \te&#123;E&#125;\\
              \up&#123;1.4&#125;\te&#123;D&#125; = \te&#123;C&#125;
              \end&#123;gathered&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                in the third equality, and the fact that
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_4_.wly:47:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gathered&#125;
              \te&#123;E&#125; = b^2 - A\\
              \up&#123;1.4&#125;\te&#123;C&#125; = F - a^2
              \end&#123;gathered&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                in the fourth equality. The answer is therefore...
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_4_.wly:56:9
                </span>
              </span>
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                \Large c = \sqrt&#123;a^2 + b^2 - 2ab\cos\theta_&#123;ab&#125;&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </Boxed>
            <OuterP>
              <span class="t-3003-c">
                ...as in exercises {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_geometric_4_.wly:64:9
                </span>
              </span>
              <InChapterLink
                href="#_160_h.a.i_"
                class="in-chapter-link"
              >
                9
              </InChapterLink>
              {" "} and {" "}
              <InChapterLink
                href="#_161_h.a.i_"
                class="in-chapter-link"
              >
                10
              </InChapterLink>
              &#8288;.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={12}>
          <ExerciseStatement id="_163_h.a.i_">
            <OuterP>
              <b>
                Exercise 12.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Keeping a triangle with sides {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_via_jacks_rule_.wly:4:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $a$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $b$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $c$
              </Math>
              {" "}
              with opposing angles
              {" "}
              <NoBreak>
                <Math>
                  $\theta_&#123;bc&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $\theta_&#123;ac&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\theta_&#123;ab&#125;$
              </Math>
              {" "}
              respectively, prove {" "}
              <i>
                Jack's rule
              </i>
              , which is the triplet of equations...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gathered&#125;
              a\cos\theta_&#123;ac&#125; + b\cos\theta_&#123;bc&#125; = c \\
              b\cos\theta_&#123;ab&#125; + c\cos\theta_&#123;ac&#125; = a \up&#123;1.4&#125;\\
              a\cos\theta_&#123;ab&#125; + c\cos\theta_&#123;bc&#125; = b \up&#123;1.4&#125;
              \end&#123;gathered&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and then prove the {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_via_jacks_rule_.wly:17:5
                </span>
              </span>
              <i>
                cosine rule
              </i>
              , which is the equation...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              c^2 = a^2 + b^2  - 2ab\cos\theta_&#123;ab&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...by manipulating the equations {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_via_jacks_rule_.wly:23:5
                </span>
              </span>
              <NoBreak>
                in
                <Math>
                  $\rt&#123;0.1&#125;$
                </Math>
              </NoBreak>
              {" "} Jack's rule.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Because the equations {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_via_jacks_rule_.wly:27:9
                </span>
              </span>
              <NoBreak>
                in
                <Math>
                  $\rt&#123;0.1&#125;$
                </Math>
              </NoBreak>
              {" "} Jack's rule are
              symmetric it suffices to prove the first equation.
              We need to consider two cases according to
              whether 
              side {" "}
              <Math>
                $c$
              </Math>
              {" "} is adjacent to {" "}
              <Math>
                $0$
              </Math>
              {" "} or {" "}
              <Math>
                $1$
              </Math>
              {" "}
              obtuse angles 
              (the two sub-cases in which there is {" "}
              <Math>
                $1$
              </Math>
              {" "} obtuse
              angle are symmetric to one another, we consider only one):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/YaSq.svg"
              local_url="./images/_e5_cosine_rule_via_jacks_two_cases.svg"
              intrinsicWidth={600}
              intrinsicHeight={231}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                In Case 1 we obviously have
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_via_jacks_rule_.wly:39:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              c = a\cos\theta_&#123;ac&#125; + b\cos\theta_&#123;bc&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <NoBreak>
                <span class="t-3003-c">
                  verifying
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_via_jacks_rule_.wly:45:9
                  </span>
                </span>
                <Math>
                  $\rt&#123;0.1&#125;$
                </Math>
              </NoBreak>
              {" "} Jack's rule,
              whereas, in Case 2, note that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -a\cos\theta_&#123;ab&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is positive—it's a {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_via_jacks_rule_.wly:52:9
                </span>
              </span>
              <i>
                length
              </i>
              {" "} as the diagram
              indicates—so
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              c = b\cos\theta_&#123;bc&#125; - (-a\cos\theta_&#123;ac&#125;) = b\cos\theta_&#123;bc&#125; + a\cos\theta_&#123;ac&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                again {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_via_jacks_rule_.wly:59:9
                </span>
              </span>
              <NoBreak>
                verifying
                <Math>
                  $\rt&#123;0.1&#125;$
                </Math>
              </NoBreak>
              {" "} Jack's rule, 
              and which completes the proof thereof. {" "}
              <InlineImage
                src="/build-img/svgo-svg/0pnk.svg"
                style="transform:translate(0,-3px)"
                intrinsicWidth={50}
                intrinsicHeight={20}
              />
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Next, multiply each equation {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_via_jacks_rule_.wly:65:9
                </span>
              </span>
              <NoBreak>
                in
                <Math>
                  $\rt&#123;0.1&#125;$
                </Math>
              </NoBreak>
              {" "} Jack's rule
              by its own right-hand side, obtaining...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gathered&#125;
              ac\cos\theta_&#123;ac&#125; + bc\cos\theta_&#123;bc&#125; = c^2 \\
              ab\cos\theta_&#123;ab&#125; + ac\cos\theta_&#123;ac&#125; = a^2 \up&#123;1.4&#125;\\
              ab\cos\theta_&#123;ab&#125; + bc\cos\theta_&#123;bc&#125; = b^2 \up&#123;1.4&#125;
              \end&#123;gathered&#125;
              $$
              <ImageRight
                src="/build-img/svgo-svg/3Vd8.svg"
                offsetX="0.5em"
                atLeastAsWide={true}
                local_url="./images/_e5_cosine_rule_via_jacks_multiplying_cloud_.svg"
                intrinsicWidth={500}
                intrinsicHeight={200}
              />
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...but then if we subtract the last two equations from
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_via_jacks_rule_.wly:87:9
                </span>
              </span>
              {" "}
              {" "}
              the first we obtain...
              <ImageLeft
                src="/build-img/svgo-svg/739B.svg"
                offsetX="0.5em"
                local_url="./images/_e5_cosine_rule_via_jacks_equation_adding_cloud.svg"
                intrinsicWidth={500}
                intrinsicHeight={200}
              />
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -2ab\cos\theta_&#123;ab&#125; = c^2 - a^2 - b^2
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...which is the cosine rule, rearranged!
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_via_jacks_rule_.wly:98:9
                </span>
              </span>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={13}>
          <ExerciseStatement id="_164_h.a.i_">
            <OuterP>
              <b>
                Exercise 13.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Let points {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:4:5
                </span>
              </span>
              <Math>
                $P_1$
              </Math>
              {" "} and {" "}
              <Math>
                $P_2$
              </Math>
              {" "} have polar coordinates
              {" "}
              <Math>
                $(r_1, \theta_1)$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $(r_2, \theta_2)$
                </Math>
                ,
              </NoBreak>
              {" "} respectively:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/E-Fq.svg"
              local_url="./images/e5_polar_P1P2.svg"
              intrinsicWidth={450}
              intrinsicHeight={300}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                What is the distance from {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:10:5
                </span>
              </span>
              <Math>
                $P_1$
              </Math>
              {" "} to {" "}
              <Math>
                $P_2$
              </Math>
              {" "}
              as a function of {" "}
              <NoBreak>
                <Math>
                  $r_1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $r_2$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\theta_1$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $\theta_2$
                </Math>
                ?
              </NoBreak>
              {" "}
              (Keep an eye out for algebraic simplifications and,
              in particular, for the fact that the distance should
              depend only on
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \theta_1 - \theta_2
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                or, even, only on
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:18:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              |\theta_1 - \theta_2|
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as opposed to depending on the individual values of
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:22:5
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <Math>
                $\theta_1$
              </Math>
              {" "} and {" "}
              <Math>
                $\theta_2$
              </Math>
              {" "} separately, since we can rotate
              the entire diagram while keeping the distance from
              {" "}
              <Math>
                $P_1$
              </Math>
              {" "} to {" "}
              <Math>
                $P_2$
              </Math>
              {" "} constant.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                First note that
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:30:9
                </span>
              </span>
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                \cos(A - B) = \cos A\cos B + \sin A\sin B
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </Boxed>
            <OuterP>
              <span class="t-3003-c">
                for all {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:37:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $A, B \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(A + B) = \cos A\cos B - \sin A\sin B
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for all {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:43:9
                </span>
              </span>
              <Math>
                $A, B \in \rr$
              </Math>
              {" "} implies
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;aligned&#125;
              \cos(A - B)\,&amp;=\,\,\up&#123;1.3&#125; \cos(A + (-B))\\
                          &amp;=\,\,\up&#123;1.4&#125; \cos(A)\cos(-B) - \sin(A)\sin(-B) \\
                          &amp;=\,\,\up&#123;1.4&#125; \cos A\cos B + \sin A\sin B
              \end&#123;aligned&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:53:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\cos(-x) = \cos(x)$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $\sin(-x) = -\sin(x)$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                (There is a similar formula
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:55:9
                </span>
              </span>
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                \sin(A - B) = -\cos A\sin B + \sin A\cos B
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </Boxed>
            <OuterP>
              <span class="t-3003-c">
                for the sine of a difference, but that one is hardly
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:62:9
                </span>
              </span>
              {" "}
              {" "}
              as important or useful, you should forget it even though
              we just boxed it.)
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                We now apply the Cartesian formula
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:66:9
                </span>
              </span>
              {" "}
              {" "}
              for distance
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;(x_1 - x_2)^2 + (y_1 - y_2)^2&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                that will be good to slightly rewrite as
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:73:9
                </span>
              </span>
              <ImageLeft
                src="/build-img/svgo-svg/Y5Rf.svg"
                local_url="./images/e5_polar_P1P2_a_minus_b_squared_left_cloud.svg"
                intrinsicWidth={400}
                intrinsicHeight={100}
              />
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;x_1^2 + x_2^2 + y_1^2 + y_2^2 - 2(x_1x_2 + y_1y_2)&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                to be applied with {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:86:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $(x_1, y_1) = P_1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $(x_2, y_2) = P_2$
                </Math>
                ,
              </NoBreak>
              {" "} i.e., with
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;aligned&#125;
              (x_1, y_1) = (r_1\cos\theta_1, r_1\sin\theta_1) \\
              (x_2, y_2) = (r_2\cos\theta_2, r_2\sin\theta_2)\up&#123;1.4&#125;
              \end&#123;aligned&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by definition of polar coordinates,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:95:9
                </span>
              </span>
              {" "}
              {" "}
              from which
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;aligned&#125;
              \,&amp;x_1^2 + y_1^2 = r_1^2\cos^2\theta_1 + r_1^2\sin^2\theta_1 = r_1^2(\cos^2\theta_1 + \sin^2\theta_1) = r_1^2,\up&#123;1.3&#125; \\
              &amp;x_2^2 + y_2^2 = r_2^2\cos^2\theta_2 + r_2^2\sin^2\theta_2 = r_2^2(\cos^2\theta_2 + \sin^2\theta_2) = r_2^2\up&#123;1.4&#125;
              \end&#123;aligned&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:105:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x_1^2 + x_2^2 + y_1^2 + y_2^2 = r_1^2 + r_2^2
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (in fact, we know that
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:111:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x_1^2 + y_1^2 = r_1^2
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:117:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x_2^2 + y_2^2 = r_2^2
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                just by common lore of polar coordinates,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:126:9
                </span>
              </span>
              {" "}
              {" "}
              but anyway), while
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;aligned&#125;
              \,x_1x_2 =\, r_1\cos\theta_1\cdot r_2\cos\theta_2 = r_1r_2\cos\theta_1\cos\theta_2,\up&#123;0.9&#125; \\
              y_1y_2 =\, r_1\sin\theta_1\cdot r_2\sin\theta_2 = r_1r_2\sin\theta_1\sin\theta_2\up&#123;1.5&#125;\,\,
              \end&#123;aligned&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                from which
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:136:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x_1x_2 + y_1y_2 = r_1r_2(\cos\theta_1\cos\theta_2 + \sin\theta_1\sin\theta_2)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                but
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:142:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos\theta_1\cos\theta_2 + \sin\theta_1\sin\theta_2 = \cos(\theta_1 - \theta_2)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by the first remark, so
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:148:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x_1y_1 + x_2y_2 = r_1r_2\cos(\theta_1 - \theta_2)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and, altogether, the distance...
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:158:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;x_1^2 + x_2^2 + y_1^2 + y_2^2 - 2(x_1x_2 + y_1y_2)&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...becomes...
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:164:9
                </span>
              </span>
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                \sqrt&#123;r_1^2 + r_2^2 - 2r_2r_2\cos(\theta_1 - \theta_2)&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </Boxed>
            <OuterP>
              <span class="t-3003-c">
                ...that, as can be seen, depends only on
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:178:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \theta_1 - \theta_2
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                or, even, only on
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:182:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              |\theta_1 - \theta_2|
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                since {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:186:9
                </span>
              </span>
              <Math>
                $\cos(x) = \cos(-x) = \cos(|x|)$
              </Math>
              {" "} for all {" "}
              <NoBreak>
                <Math>
                  $x\in\rr$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                A SECOND SOLUTION—first solution is over—starts
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:191:9
                </span>
              </span>
              {" "}
              {" "}
              by rotating {" "}
              <NoBreak>
                <Math>
                  $P_1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $P_2$
              </Math>
              {" "} by
              {" "}
              <Math>
                $-\theta_2$
              </Math>
              {" "} radians about the origin, to new
              points {" "}
              <Math>
                $P_1'$
              </Math>
              {" "} and {" "}
              <Math>
                $P_2'$
              </Math>
              {" "} such that {" "}
              <Math>
                $P_2'$
              </Math>
              {" "} is aligned
              with the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis and {" "}
              <Math>
                $P_1'$
              </Math>
              {" "} has argument {" "}
              <NoBreak>
                <Math>
                  $\theta_1 - \theta_2$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/RLiz.svg"
              local_url="./images/e5_polar_P1P2_rotated.svg"
              intrinsicWidth={450}
              intrinsicHeight={230}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Since the rotation does not affect distances,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:200:9
                </span>
              </span>
              {" "}
              {" "}
              the answer becomes the previous formula
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;x_1^2 + y_1^2 + x_2^2 + y_2^2 - 2(x_1y_1 + x_2y_2)&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                applied with
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:207:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gather&#125;
              (x_1, y_1) \,=\, \,P_1' \,=\, (r_1\cos(\theta_1 - \theta_2),\, r_1\sin(\theta_1 - \theta_2)),\\
              (x_2, y_2) \,=\, P_2' \,=\, (r_2, 0)\up&#123;1.8&#125;
              \end&#123;gather&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which gives
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:216:9
                </span>
              </span>
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                \sqrt&#123;r_1^2 + r_2^2 - 2r_1r_2\cos(\theta_1 - \theta_2)&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </Boxed>
            <OuterP>
              <span class="t-3003-c">
                again, since, namely,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:223:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gathered&#125;
              x_1^2 + y_1^2 = r_1^2 \\
              x_2^2 + y_2^2 = \up&#123;1.5&#125;r_2^2 \\
              x_1y_1 = \up&#123;1.5&#125; r_1\cos(\theta_1 - \theta_2)\cdot r_2 \\
              x_2y_2 = \up&#123;1.5&#125; r_1\cos(\theta_1 - \theta_2)\cdot 0 = 0
              \end&#123;gathered&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                in this case, and this time we don't need to apply a fancy
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:234:9
                </span>
              </span>
              {" "}
              {" "}
              algebraic observation, or anything!
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
                  As a result, the {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:240:13
                  </span>
                </span>
                <i>
                  distance squared
                </i>
                {" "} between {" "}
                <Math>
                  $P_1$
                </Math>
                {" "} and {" "}
                <Math>
                  $P_2$
                </Math>
                {" "}
                is (peel off the square root):
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  r_1^2 + r_2^2 - 2r_2r_2\cos(\theta_1 - \theta_2)
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </Boxed>
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
                  The distance squared reduces to
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:252:13
                  </span>
                </span>
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  r_1^2 + r_2^2
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </Boxed>
              <OuterP>
                <span class="t-3003-c">
                  and the ordinary distance reduces to
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:259:13
                  </span>
                </span>
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  \sqrt&#123;r_1^2 + r_2^2&#125;
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </Boxed>
              <OuterP>
                <span class="t-3003-c">
                  if {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:266:13
                  </span>
                </span>
                <Math>
                  $P_1$
                </Math>
                {" "} and {" "}
                <Math>
                  $P_2$
                </Math>
                {" "} are at right angle, since
                {" "}
                <Math>
                  $\cos|\theta_1 - \theta_2| = \cos\eta = 0$
                </Math>
                {" "} in that
                case. This accords with the Pythagorean theorem, and
                constitutes an extra check on our computations!
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
                  Comparing the two solutions actually shows that
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:273:13
                  </span>
                </span>
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  \cos(\theta_1 - \theta_2) = \cos\theta_1\cos\theta_2 + \sin\theta_1\sin\theta_2
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </Boxed>
              <OuterP>
                <span class="t-3003-c">
                  in and of itself. This is a “second proof” of the
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:280:13
                  </span>
                </span>
                {" "}
                {" "}
                angle-sum formula for cos.
              </OuterP>
              <OuterP class="indent-10">
                <span class="t-3003-c">
                  (*Some would say {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_polar_distance_.wly:283:13
                  </span>
                </span>
                <i>
                  first
                </i>
                {" "} proof, as our
                original proof with the “famous diagram” put some restrictions
                on the range of the angles, such as 
                {" "}
                <NoBreak>
                  <Math>
                    $0 \leq \theta_1, \theta_2 \leq \eta$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                specifically.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={14}>
          <ExerciseStatement id="_165_h.a.i_">
            <OuterP>
              <b>
                Exercise 14.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                What is the dotted line distance as a function
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              of {" "}
              <NoBreak>
                <Math>
                  $a$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $b$
                </Math>
                ,
              </NoBreak>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ?
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/1jJD.svg"
              local_url="./images/e5_cosine_rule_statement.svg"
              intrinsicWidth={400}
              intrinsicHeight={175}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Recalling the “polar distance” formula
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_.wly:12:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;r_1^2 + r_2^2 - 2r_1r_2\cos(\theta_1 - \theta_2)&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_.wly:18:9
                </span>
              </span>
              <InChapterLink
                href="#_164_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 13
              </InChapterLink>
              &#8288;,
              the answer is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;a^2 + b^2 - 2ab\cos\theta&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by putting {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_.wly:25:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $r_1 = a$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $r_2 = b$
              </Math>
              {" "} and {" "}
              <Math>
                $\theta_1 - \theta_2 = \theta$
              </Math>
              {" "}
              in that formula.
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
                  This result is known as the {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_.wly:30:13
                  </span>
                </span>
                <i>
                  cosine rule
                </i>
                .
                Like the “polar distance” formula from {" "}
                <InChapterLink
                  href="#_164_h.a.i_"
                  class="in-chapter-link"
                >
                  Exercise 13
                </InChapterLink>
                &#8288;,
                to which it is equivalent, it is a generalization
                of the Pythagorean theorem. This becomes clearer if we write....
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  c^2 = a^2 + b^2 - 2ab\cdot\cos\theta
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </Boxed>
              <OuterP>
                <span class="t-3003-c">
                  ....with {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_cosine_rule_.wly:40:13
                  </span>
                </span>
                <NoBreak>
                  ‘
                  <Math>
                    $c$
                  </Math>
                  ’
                </NoBreak>
                {" "} the length of the dotted segment.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={15}>
          <ExerciseStatement id="_166_h.a.i_">
            <OuterP>
              <b>
                Exercise 15.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                How to express the two sides marked ‘?’ as functions
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sine_rule_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              of {" "}
              <NoBreak>
                <Math>
                  $\alpha$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $\beta$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\gamma$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $a$
                </Math>
                ?
              </NoBreak>
              {" "} (NB: You can 
              trust the drawing's suggestion that {" "}
              <NoBreak>
                <Math>
                  $\beta &gt; \eta$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $\gamma &lt; \eta$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $\alpha &lt; \eta$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/FCDD.svg"
              local_url="./images/e5_sine_rule_statement.svg"
              intrinsicWidth={420}
              intrinsicHeight={182}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The bottom length of ‘?’ is
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sine_rule_.wly:13:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              a\cdot\sin\gamma\cdot\csc\alpha
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                or, equivalently,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sine_rule_.wly:19:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              a\cdot &#123;\sin \gamma\over \sin\alpha&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by swinging from the side of length {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sine_rule_.wly:26:9
                </span>
              </span>
              <Math>
                $a$
              </Math>
              {" "} to a
              “middle height”, to the bottom length (this is
              entirely the same as 
              the solution technique of
              {" "}
              <OutChapterLink
                href="/article/chapter6#_88_h.a.i_"
                class="out-chapter-link"
              >
                Exercise 3
              </OutChapterLink>
              ):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/kTuA.svg"
              local_url="./images/e5_sine_rule_sol1.svg"
              intrinsicWidth={420}
              intrinsicHeight={187}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The top length of ‘?’, on the other hand,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sine_rule_.wly:36:9
                </span>
              </span>
              {" "}
              {" "}
              is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              a\cdot\sin\beta\cdot\csc\alpha
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                or, equivalently,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sine_rule_.wly:43:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              a\cdot&#123;\sin\beta\over \sin\alpha&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                per a similar approach, while also using the fact that
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sine_rule_.wly:49:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <Math>
                $\sin(2\eta - x) = \sin(x)$
              </Math>
              {" "} for all {" "}
              <NoBreak>
                <Math>
                  $x \in \rr$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/EPyX.svg"
              local_url="./images/e5_sine_rule_sol2_new_ver.svg"
              intrinsicWidth={420}
              intrinsicHeight={240}
            >
              <ImageRight
                src="/build-img/svgo-svg/k0X9.svg"
                offsetX="-30%"
                offsetY="38%"
                local_url="./images/e5_sine_rule_sin_2b_cloud.svg"
                intrinsicWidth={200}
                intrinsicHeight={100}
              />
            </Image>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                That's it!
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sine_rule_.wly:60:9
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
                  One more generally has...
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_sine_rule_.wly:64:13
                  </span>
                </span>
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  \begin&#123;gather*&#125;
                  &#123;b\over a&#125; = &#123;\sin \beta\over \sin\alpha&#125;           \qquad &#123;a\over b&#125; = &#123;\sin \alpha\over \sin\beta&#125; \\
                  &#123;c\over a&#125; = &#123;\sin \gamma\over \sin\alpha&#125; \up&#123;2.2&#125; \qquad &#123;a\over c&#125; = &#123;\sin \alpha\over \sin\gamma&#125;\\
                  &#123;c\over b&#125; = &#123;\sin \gamma\over \sin\beta&#125;  \up&#123;2.2&#125; \qquad &#123;b\over c&#125; = &#123;\sin \beta\over \sin\gamma&#125; \\
                  \end&#123;gather*&#125;
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </Boxed>
              <OuterP>
                <span class="t-3003-c">
                  ...(it's {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_sine_rule_.wly:83:13
                  </span>
                </span>
                <Math>
                  $6$
                </Math>
                {" "} times the same equation, no use
                looking at all of them) for a general triangle
                of sidelengths {" "}
                <NoBreak>
                  <Math>
                    $a$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $b$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $c$
                </Math>
                {" "} as labeled here...
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/VvH9.svg"
                local_url="./images/e5_sine_rule_generic.svg"
                intrinsicWidth={340}
                intrinsicHeight={214}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...though we can condense these equations to...
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_sine_rule_.wly:90:13
                  </span>
                </span>
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  \begin&#123;gather*&#125;
                  &#123;a\over \sin\alpha&#125; = &#123;b\over \sin\beta&#125;            \\
                  &#123;a\over \sin\alpha&#125; = &#123;c\over \sin\gamma&#125;  \up&#123;2.2&#125; \\
                  &#123;b\over \sin\beta&#125; = &#123;c\over \sin\gamma&#125;  \up&#123;2.2&#125;
                  \end&#123;gather*&#125;
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </Boxed>
              <OuterP>
                <span class="t-3003-c">
                  ...or even to a single line...
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_sine_rule_.wly:101:13
                  </span>
                </span>
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  &#123;a\over \sin\alpha&#125; = &#123;b\over \sin\beta&#125; = &#123;c\over \sin\gamma&#125;
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </Boxed>
              <OuterP>
                <span class="t-3003-c">
                  ...through cross-multiplication/division!
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_sine_rule_.wly:108:13
                  </span>
                </span>
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
                  This result (e.g., the last boxed equation above)
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_sine_rule_.wly:112:13
                  </span>
                </span>
                {" "}
                {" "}
                is known as the {" "}
                <i>
                  sine rule
                </i>
                .
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
                  Amusingly (but not that we really care) the
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_sine_rule_.wly:117:13
                  </span>
                </span>
                {" "}
                {" "}
                same equations hold if we change the definitions
                of {" "}
                <NoBreak>
                  <Math>
                    $\alpha$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $\beta$
                  </Math>
                  ,
                </NoBreak>
                {" "} and {" "}
                <Math>
                  $\gamma$
                </Math>
                {" "} to be the
                exterior angles of the triangle:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/CquJ.svg"
                local_url="./images/e5_sine_rule_generic_exterior.svg"
                intrinsicWidth={340}
                intrinsicHeight={285}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...then each of {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_sine_rule_.wly:125:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $\sin \alpha$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                {" "}
                <NoBreak>
                  <Math>
                    $\sin \beta$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $\sin \gamma$
                </Math>
                {" "} changes sign 
                {" "}
                <i>
                  and only sign
                </i>
                {" "} 
                (
                <del>
                  sine?
                </del>
                {" "} sign), leaving the original equations intact.
                <ImageRight
                  line="1.0"
                  src="/build-img/svgo-svg/NoGZ.svg"
                  local_url="./images/e5_sine_rule_sin_360_m_x_cloud.svg"
                  intrinsicWidth={500}
                  intrinsicHeight={100}
                />
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise
          work="ing"
          number={16}
        >
          <ExerciseStatement id="_167_h.a.i_">
            <OuterP>
              <b>
                Exercise 16.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                What are the orthogonal (= perpendicular) {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_.wly:5:5
                </span>
              </span>
              {" "}
              {" "}
              projections of the
              vectors {" "}
              <NoBreak>
                <Math>
                  $(1, 0)$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $(0, 1)$
              </Math>
              {" "} 
              onto a {" "}
              <NoBreak>
                <Math>
                  $(-1, 1)$
                </Math>
                -ruler
              </NoBreak>
              {" "}
              placed at angle {" "}
              <Math>
                $\theta$
              </Math>
              {" "} in the unit circle?
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/QGG0.svg"
              local_url="./images/e5_project_i_and_j_statement.svg"
              intrinsicWidth={450}
              intrinsicHeight={360}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (I.e., find the ruler-readings
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_.wly:14:5
                </span>
              </span>
              {" "}
              {" "}
              marked ‘1’ and ‘2’ above
              as a function of the angle {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                .)
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Solution 1.
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_.wly:20:10
                  </span>
                </span>
              </i>
              {" "} If we rotate the diagram by {" "}
              <Math>
                $-\theta$
              </Math>
              {" "}
              to align the ruler with the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis the new angles
              of the vectors are {" "}
              <Math>
                $-\theta$
              </Math>
              {" "} and {" "}
              <Math>
                $\eta - \theta$
              </Math>
              {" "}
              (changed from {" "}
              <Math>
                $0$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $\eta$
                </Math>
                ,
              </NoBreak>
              {" "} respectively):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/DHtw.svg"
              local_url="./images/e5_project_i_and_j_sol1.svg"
              intrinsicWidth={450}
              intrinsicHeight={360}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The ruler-readings are therefore
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_.wly:28:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(-\theta) = \cos(\theta)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_.wly:32:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(\eta - \theta) = \sin(\theta)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                respectively (in order ‘1’, ‘2’), making use of
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_.wly:37:9
                </span>
              </span>
              {" "}
              {" "}
              basic identities. (See the section “Identities with {" "}
              <NoBreak>
                <Math>
                  $\eta$
                </Math>
                ”
              </NoBreak>
              {" "}
              in {" "}
              <OutChapterLink
                href="/article/chapter6#_103_h.a.i_"
                class="out-chapter-link"
              >
                Chapter 6
              </OutChapterLink>
              .)
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Solution 2.
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_.wly:43:10
                  </span>
                </span>
              </i>
              {" "} 
              Recalling first...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/h28T.svg"
              local_url="./images/svg_ch5_ch_unit_circle_with_new_definition.svg"
              intrinsicWidth={720}
              intrinsicHeight={455}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...this figure from {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_.wly:49:9
                </span>
              </span>
              <OutChapterLink
                href="/article/chapter6#_103_h.a.i_"
                class="out-chapter-link"
              >
                Chapter 6
              </OutChapterLink>
              , we note that
              there is an alternate
              set of definitions for sin and cos that is 
              based on clockwise instead of counterclockwise rotation:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/9QAk.svg"
              local_url="./images/e5_project_i_and_j_sol2.svg"
              intrinsicWidth={720}
              intrinsicHeight={455}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Now comparing these definitions to
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_.wly:57:9
                </span>
              </span>
              {" "}
              {" "}
              this figure...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/__cS.svg"
              local_url="./images/e5_project_i_and_j_sol3.svg"
              intrinsicWidth={450}
              intrinsicHeight={395}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...in which, by contrast to usual, angles are measured
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_.wly:63:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                positively clockwise
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_.wly:65:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (that's why it's {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_.wly:67:9
                </span>
              </span>
              <NoBreak>
                “
                <Math>
                  $\theta$
                </Math>
                ”
              </NoBreak>
              {" "} not {" "}
              <NoBreak>
                “
                <Math>
                  $-\theta$
                </Math>
                ”)
              </NoBreak>
              {" "} 
              we see that the two ruler-readings are {" "}
              <Math>
                $\cos(\theta)$
              </Math>
              {" "} (‘1’) and {" "}
              <Math>
                $\sin(\theta)$
              </Math>
              {" "} (‘2’).
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Solution 3.
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_.wly:72:10
                  </span>
                </span>
              </i>
              {" "} 
              More generally, when a unit
              vector is projected onto a “unit ruler”,
              we can switch the ruler {" "}
              <i>
                &amp;
              </i>
              {" "} vector positions
              without affecting the ruler-reading:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/5XuI.svg"
              local_url="./images/e5_project_i_and_j_sol4.svg"
              intrinsicWidth={900}
              intrinsicHeight={395}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (Because what counts is the angle between the
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_.wly:81:9
                </span>
              </span>
              {" "}
              {" "}
              “forward end” of the ruler and the forward end of
              the vector, measured as an angle between {" "}
              <Math>
                $0^\circ$
              </Math>
              {" "}
              and {" "}
              <NoBreak>
                <Math>
                  $180^\circ$
                </Math>
                ,
              </NoBreak>
              {" "} and this angle remains the same.)
              If we apply this to the problem statement
              the unique ruler is replaced by a unique vector
              while the two vectors are each replaced by a ruler:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Xur8.svg"
              local_url="./images/e5_project_i_and_j_sol5_v2.svg"
              intrinsicWidth={900}
              intrinsicHeight={360}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and in the new configuration, at bottom right, {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_.wly:92:9
                </span>
              </span>
              {" "}
              {" "}
              one can see by the original definitions of sin
              and cos that the projections are
              are {" "}
              <Math>
                $\cos(\theta)$
              </Math>
              {" "} (‘1’), {" "}
              <Math>
                $\sin(\theta)$
              </Math>
              {" "} (‘2’).
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
                  The original definitions of sin and cos involve
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_.wly:99:13
                  </span>
                </span>
                {" "}
                {" "}
                a single point rotating around the unit circle projected
                onto two fixed rulers, resulting in two
                functions:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/HbFF.svg"
                style="margin:0.3em 0"
                local_url="./images/e5_project_i_and_j_note1_v2.svg"
                intrinsicWidth={1300}
                intrinsicHeight={560}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  By the result of this exercise, sin and cos can also be
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_.wly:111:13
                  </span>
                </span>
                {" "}
                {" "}
                conceptualized in a dual fashion, via fixed points projected
                onto a rotating ruler:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/R1PW.svg"
                style="margin:0.3em 0"
                local_url="./images/e5_project_i_and_j_note2_v2.svg"
                intrinsicWidth={1300}
                intrinsicHeight={560}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  (E.g.,
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_.wly:119:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  the positive part of the ruler goes
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_.wly:121:15
                  </span>
                </span>
                {" "}
                {" "}
                to meet the point
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  if you think about how the sine function starts out, instead
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_.wly:124:13
                  </span>
                </span>
                {" "}
                {" "}
                the point being the one to travel towards the positive part
                of the ruler [onto which it is projected].)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise
          work="ing"
          number={17}
        >
          <ExerciseStatement id="_168_h.a.i_">
            <OuterP>
              <b>
                Exercise 17.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Show that
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_unit_dot_product_geometric_interpretation_.wly:5:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(\alpha - \beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for all {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_unit_dot_product_geometric_interpretation_.wly:9:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\alpha$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\beta \in \rr$
              </Math>
              {" "}
              via a geometric argument.
              (I.e., AVOID using the angle-sum formula.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                We know (or should know, or are about to
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_unit_dot_product_geometric_interpretation_.wly:15:9
                </span>
              </span>
              {" "}
              {" "}
              know) (or are about to {" "}
              <i>
                believe
              </i>
              ) that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(\alpha - \beta)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is the projection of a unit vector of angle
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_unit_dot_product_geometric_interpretation_.wly:22:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <Math>
                $\alpha$
              </Math>
              {" "} onto a ruler of angle {" "}
              <NoBreak>
                <Math>
                  $\beta$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/k70-.svg"
              local_url="./images/e5_unit_dot_product_sol1_v2.svg"
              intrinsicWidth={500}
              intrinsicHeight={395}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                In what follows we will write {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_unit_dot_product_geometric_interpretation_.wly:28:9
                </span>
              </span>
              <NoBreak>
                ‘
                <Math>
                  $\vecb&#123;i&#125;$
                </Math>
                ’
              </NoBreak>
              {" "}
              and {" "}
              <NoBreak>
                ‘
                <Math>
                  $\vecb&#123;j&#125;$
                </Math>
                ’,
              </NoBreak>
              {" "} respectively, for the vectors
              {" "}
              <Math>
                $(1, 0)$
              </Math>
              {" "} and {" "}
              <Math>
                $(0, 1)$
              </Math>
              {" "} (in the manner of physicists):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/EWAA.svg"
              local_url="./images/e5_unit_dot_product_sol2.svg"
              intrinsicWidth={500}
              intrinsicHeight={370}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                As established in {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_unit_dot_product_geometric_interpretation_.wly:35:9
                </span>
              </span>
              <InChapterLink
                href="#_167_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 16
              </InChapterLink>
              {" "}
              {" "}
              <Math>
                $\vecb&#123;i&#125;$
              </Math>
              {" "} and {" "}
              <Math>
                $\vecb&#123;j&#125;$
              </Math>
              {" "} project to {" "}
              <NoBreak>
                <Math>
                  $\cos\beta$
                </Math>
                ,
              </NoBreak>
              {" "}
              {" "}
              <Math>
                $\sin\beta$
              </Math>
              {" "} respectively on the ruler:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/rAlI.svg"
              local_url="./images/e5_unit_dot_product_sol3_v2.svg"
              intrinsicWidth={500}
              intrinsicHeight={370}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                On the other hand, the vector {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_unit_dot_product_geometric_interpretation_.wly:42:9
                </span>
              </span>
              <Math>
                $(\cos\alpha, \sin\alpha)$
              </Math>
              {" "}
              is the sum of a scaled copy of {" "}
              <Math>
                $\vecb&#123;i&#125;$
              </Math>
              {" "} and
              scaled copy of {" "}
              <NoBreak>
                <Math>
                  $\vecb&#123;j&#125;$
                </Math>
                ,
              </NoBreak>
              {" "}  specifically the sum of
              {" "}
              <Math>
                $\vecb&#123;i&#125;\cdot\cos(\alpha)$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $\vecb&#123;j&#125;\cdot\sin(\alpha)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/q8lI.svg"
              local_url="./images/e5_unit_dot_product_sol5_v2.svg"
              intrinsicWidth={500}
              intrinsicHeight={370}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The scaled copy of {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_unit_dot_product_geometric_interpretation_.wly:50:9
                </span>
              </span>
              <Math>
                $\vecb&#123;i&#125;$
              </Math>
              {" "} projects to
              {" "}
              <Math>
                $\cos(\alpha)\cdot\cos(\beta)$
              </Math>
              {" "} on the ruler, 
              by scaling the projection of {" "}
              <NoBreak>
                <Math>
                  $\vecb&#123;i&#125;$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/vjt3.svg"
              local_url="./images/e5_unit_dot_product_sol6_v2.svg"
              intrinsicWidth={500}
              intrinsicHeight={370}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Similarly, the scaled copy of {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_unit_dot_product_geometric_interpretation_.wly:57:9
                </span>
              </span>
              <Math>
                $\vecb&#123;j&#125;$
              </Math>
              {" "} projects
              to {" "}
              <NoBreak>
                <Math>
                  $\sin(\alpha)\cdot\sin(\beta)$
                </Math>
                ,
              </NoBreak>
              {" "} by scaling the
              projection of {" "}
              <NoBreak>
                <Math>
                  $\vecb&#123;j&#125;$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/KjPQ.svg"
              local_url="./images/e5_unit_dot_product_sol7_v2.svg"
              intrinsicWidth={500}
              intrinsicHeight={370}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Moreover, the sum-of-projections is the
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_unit_dot_product_geometric_interpretation_.wly:64:9
                </span>
              </span>
              {" "}
              {" "}
              projection-of-the-sum:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/cfa7.svg"
              local_url="./images/e5_unit_dot_product_sol8_v2.svg"
              intrinsicWidth={500}
              intrinsicHeight={615}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                This gives us
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_unit_dot_product_geometric_interpretation_.wly:70:9
                </span>
              </span>
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                \cos(\alpha-\beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </Boxed>
            <OuterP>
              <span class="t-3003-c">
                since both sides compute the projection of
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_unit_dot_product_geometric_interpretation_.wly:77:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <Math>
                $(\cos \alpha, \sin \alpha)$
              </Math>
              {" "} onto the ruler of angle {" "}
              <NoBreak>
                <Math>
                  $\beta$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise
          work="ing"
          number={18}
        >
          <ExerciseStatement id="_169_h.a.i_">
            <OuterP>
              <b>
                Exercise 18.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                A unit vector
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_and_k_.wly:5:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x_1, y_1, z_1) \in \rr^3
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                [meaning: {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_and_k_.wly:11:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x_1^2 + y_1^2 + z_1^2 = 1$
                </Math>
                ]
              </NoBreak>
              {" "} is projected onto a ruler
              whose {" "}
              <NoBreak>
                ‘
                <Math>
                  $0$
                </Math>
                ’
              </NoBreak>
              {" "} is at {" "}
              <Math>
                $(0, 0, 0)$
              </Math>
              {" "} and whose {" "}
              <NoBreak>
                ‘
                <Math>
                  $1$
                </Math>
                ’
              </NoBreak>
              {" "} is at
              {" "}
              <NoBreak>
                <Math>
                  $(x_2, y_2, z_2)$
                </Math>
                ,
              </NoBreak>
              {" "} another point on the unit sphere:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/jyl2.svg"
              local_url="./images/e5_ruler_sphere_1_v2.svg"
              intrinsicWidth={605}
              intrinsicHeight={690}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Find the value of the projection—the place we land on the
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_and_k_.wly:18:5
                </span>
              </span>
              {" "}
              {" "}
              ruler, at {" "}
              <NoBreak>
                <Math>
                  $90^\circ$
                </Math>
                —as
              </NoBreak>
              {" "} a
              function of {" "}
              <NoBreak>
                <Math>
                  $x_1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $y_1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $z_1$
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
                  $y_2$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $z_2$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Putting
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_and_k_.wly:24:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gathered&#125;
              \vi = (1,\, 0,\, 0),         \\
              \vj = (0,\, 1,\, 0),\up&#123;1.2&#125; \\
              \vk = (0,\, 0,\, 1)\,\up&#123;1.2&#125;
              \end&#123;gathered&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                we have
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_and_k_.wly:34:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gathered&#125;
              x_1\cdot\vi = (x_1, \,0,   \,0),         \\
              y_1\cdot\vj = (0,   \,y_1, \,0)\up&#123;1.2&#125;, \\
              z_1\cdot\vk = (0,   \,0,   \,z_1)\up&#123;1.2&#125;\, 
              \end&#123;gathered&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                giving
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_and_k_.wly:44:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x_1, y_1, z_1) = x_1\!\cdot\vi + y_1\!\cdot\vj + z_1\!\cdot\vk
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                because vectors are added component-wise. {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_and_k_.wly:50:9
                </span>
              </span>
              {" "}
              {" "}
              This sum can be illustrated:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/w_-r.svg"
              local_url="./images/e5_ruler_sphere_decomp.svg"
              intrinsicWidth={605}
              intrinsicHeight={690}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                As discussed in Note 1 of Exercise 11 we can
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_and_k_.wly:56:9
                </span>
              </span>
              {" "}
              {" "}
              translate vectors to anywhere in space while
              preserving their 
              projection onto the ruler. 
              In particular, keeping the same positioning in space of the
              vectors as above shows that the projection of
              {" "}
              <Math>
                $(x_1, y_1, z_1)$
              </Math>
              {" "} is the sum of the three separate projections 
              of {" "}
              <NoBreak>
                <Math>
                  $x_1\vi$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $y_1\rt&#123;0.1&#125;\vj$
                </Math>
                ,
              </NoBreak>
              {" "}  {" "}
              <NoBreak>
                <Math>
                  $z_1\vk$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/vsD9.svg"
              local_url="./images/e5_ruler_sphere_decomp3.svg"
              intrinsicWidth={800}
              intrinsicHeight={700}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                However, the projection of {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_and_k_.wly:68:9
                </span>
              </span>
              <Math>
                $z_1\vk$
              </Math>
              {" "} is just 
              {" "}
              <Math>
                $z_1$
              </Math>
              {" "} times the projection of {" "}
              <NoBreak>
                <Math>
                  $\vk$
                </Math>
                ,
              </NoBreak>
              {" "} as illustrated
              below, so it suffices to find the projection of {" "}
              <Math>
                $\vk$
              </Math>
              {" "}
              to find the projection of {" "}
              <NoBreak>
                <Math>
                  $z_1\vk$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/-iIq.svg"
              local_url="./images/e5_ruler_sphere_z_scale.svg"
              intrinsicWidth={605}
              intrinsicHeight={690}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The projection of {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_and_k_.wly:79:9
                </span>
              </span>
              <Math>
                $\vk$
              </Math>
              {" "} 
              is the same as the projection of {" "}
              <Math>
                $(x_2, y_2, z_2)$
              </Math>
              {" "} onto
              a ruler with ‘0’ at the origin and ‘1’ at {" "}
              <NoBreak>
                <Math>
                  $\vk$
                </Math>
                ,
              </NoBreak>
              {" "}
              because when one unit vector is projected onto another
              the situation is symmetric, and we can always switch 
              the role
              of which vector is the ruler, and which is being
              projected (cf. Solution 3 of Exercise 0):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/k0fx.svg"
              local_url="./images/e5_ruler_sphere_z_switched_combined.svg"
              intrinsicWidth={1200}
              intrinsicHeight={700}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                But the {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_and_k_.wly:91:9
                </span>
              </span>
              {" "}
              {" "}
              projection 
              of {" "}
              <Math>
                $(x_2, y_2, z_2)$
              </Math>
              {" "} onto 
              the vertical ruler
              equals simply
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              z_2
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by the fact that {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_and_k_.wly:102:9
                </span>
              </span>
              {" "}
              {" "}
              we are projecting onto the {" "}
              <Math>
                $z$
              </Math>
              {" "} axis,
              so the projection of {" "}
              <Math>
                $\vk$
              </Math>
              {" "} onto {" "}
              <Math>
                $(x_2, y_2, z_2)$
              </Math>
              {" "}
              is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              z_2
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as well,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_and_k_.wly:111:9
                </span>
              </span>
              {" "}
              {" "}
              and the projection of {" "}
              <Math>
                $z_1\vk$
              </Math>
              {" "} onto {" "}
              <Math>
                $(x_2, y_2, z_2)$
              </Math>
              {" "} is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              z_1z_2
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by scaling.
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_and_k_.wly:118:9
                </span>
              </span>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Likewise,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_and_k_.wly:120:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y_1y_2
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                will be the projection of {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_and_k_.wly:126:9
                </span>
              </span>
              <Math>
                $y_1\rt&#123;0.1&#125;\vj$
              </Math>
              {" "} onto {" "}
              <NoBreak>
                <Math>
                  $(x_2, y_2, z_2)$
                </Math>
                ,
              </NoBreak>
              {" "}
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x_1x_2
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                will be the projection of {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_and_k_.wly:133:9
                </span>
              </span>
              <Math>
                $x_1\vi$
              </Math>
              {" "} onto {" "}
              <NoBreak>
                <Math>
                  $(x_2, y_2, z_2)$
                </Math>
                ,
              </NoBreak>
              {" "} so
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                x_1x_2 + y_1y_2 + z_1z_2
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </Boxed>
            <OuterP>
              <span class="t-3003-c">
                is the projection of {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_project_i_and_j_and_k_.wly:140:9
                </span>
              </span>
              <Math>
                $(x_1, y_1, z_1)$
              </Math>
              {" "} onto {" "}
              <NoBreak>
                <Math>
                  $(x_2, y_2, z_2)$
                </Math>
                ,
              </NoBreak>
              {" "}
              summing the projections of {" "}
              <NoBreak>
                <Math>
                  $x_1\vi$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $y_1\vj$
                </Math>
                ,
              </NoBreak>
              {" "} and {" "}
              <Math>
                $z_1\vk$
              </Math>
              {" "}
              together.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={19}>
          <ExerciseStatement id="_170_h.a.i_">
            <OuterP>
              <b>
                Exercise 19.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                For each of {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:4:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\cos^2$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $\sin^2$
                </Math>
                ,
              </NoBreak>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $\sin\cdot\cos$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <List marker="decimal">
              <Item>
                <p>
                  <span class="t-3003-c">
                    Choose either {" "}
                    <span class="t-3003">
                      ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:9:9
                    </span>
                  </span>
                  <Math>
                    $\cos(2x)$
                  </Math>
                  <span class="t-3003-c">
                    {" "} or {" "}
                    <span class="t-3003">
                      ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:9:33
                    </span>
                  </span>
                  <Math>
                    $\sin(2x)$
                  </Math>
                  <span class="t-3003-c">
                    {" "} as a
                    <span class="t-3003">
                      ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:9:47
                    </span>
                  </span>
                  {" "}
                  {" "}
                  “most closely related starting point”, according
                  to your sense of which of {" "}
                  <Math>
                    $\cos(2x)$
                  </Math>
                  <span class="t-3003-c">
                    {" "} or {" "}
                    <span class="t-3003">
                      ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:11:45
                    </span>
                  </span>
                  <Math>
                    $\sin(2x)$
                  </Math>
                  {" "}{" "}
                  {" "}
                  {" "}
                  <span class="t-3003-c">
                    is more closely related to the given function.
                    <span class="t-3003">
                      ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:12:9
                    </span>
                  </span>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    Conjecture a sequence of geometric transformations
                    <span class="t-3003">
                      ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:14:9
                    </span>
                  </span>
                  {" "}
                  {" "}
                  of the plane that takes either {" "}
                  <Math>
                    $\cos(2x)$
                  </Math>
                  <span class="t-3003-c">
                    {" "} or {" "}
                    <span class="t-3003">
                      ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:15:50
                    </span>
                  </span>
                  <NoBreak>
                    <Math>
                      $\sin(2x)$
                    </Math>
                    <span class="t-3003-c">
                      ,
                      <span class="t-3003">
                        ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:15:64
                      </span>
                    </span>
                  </NoBreak>
                  {" "}{" "}
                  {" "}
                  {" "}
                  <span class="t-3003-c">
                    depending on which you chose,
                    <span class="t-3003">
                      ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:16:9
                    </span>
                  </span>
                  {" "}
                  {" "}
                  onto the graph of the given function (be it {" "}
                  <NoBreak>
                    <Math>
                      $\cos\sin$
                    </Math>
                    <span class="t-3003-c">
                      ,
                      <span class="t-3003">
                        ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:18:63
                      </span>
                    </span>
                  </NoBreak>
                  {" "}
                  {" "}
                  <NoBreak>
                    <Math>
                      $\cos^2$
                    </Math>
                    <span class="t-3003-c">
                      ,
                      <span class="t-3003">
                        ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:19:17
                      </span>
                    </span>
                  </NoBreak>
                  <span class="t-3003-c">
                    {" "} or {" "}
                    <span class="t-3003">
                      ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:19:17
                    </span>
                  </span>
                  <NoBreak>
                    <Math>
                      $\sin^2$
                    </Math>
                    <span class="t-3003-c">
                      ).
                      <span class="t-3003">
                        ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:19:30
                      </span>
                    </span>
                  </NoBreak>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    Prove your conjecture by algebra.
                    <span class="t-3003">
                      ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:21:9
                    </span>
                  </span>
                </p>
              </Item>
            </List>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                For {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:25:9
                </span>
              </span>
              <Math>
                $\cos^2$
              </Math>
              {" "} we take
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(2x)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as our starting point, since the graph of {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:31:9
                </span>
              </span>
              <Math>
                $\cos(2x)$
              </Math>
              {" "}
              seems more closely related to the graph of {" "}
              <Math>
                $\cos^2(x)$
              </Math>
              {" "}
              than {" "}
              <Math>
                $\sin(2x)$
              </Math>
              {" "} is, because the bumps align:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/yO5U.svg"
              local_url="./images/e5_more_closely_related_followup_sol1.svg"
              intrinsicWidth={600}
              intrinsicHeight={280}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Our conjecture, per appearance of the graphs, is that
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:38:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <Math>
                $\cos^2$
              </Math>
              {" "} is the graph of {" "}
              <NoBreak>
                <Math>
                  $\cos(2x)$
                </Math>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                translated up by {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:41:11
                </span>
              </span>
              <NoBreak>
                <Math>
                  $1$
                </Math>
                <span class="t-3003-c">
                  ,
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:41:31
                  </span>
                </span>
              </NoBreak>
              <span class="t-3003-c">
                {" "} vertically
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:41:31
                </span>
              </span>
              {" "}
              {" "}
              scaled by {" "}
              <Math>
                $1/2$
              </Math>
              <ImageRight
                src="/build-img/svgo-svg/EWxG.svg"
                local_url="./images/e5_more_closely_related_followup_cloud1.svg"
                intrinsicWidth={1500}
                intrinsicHeight={300}
              />
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...or is the graph of {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:47:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\cos(2x)$
                </Math>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                vertically scaled by {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:49:11
                </span>
              </span>
              <NoBreak>
                <Math>
                  $1/2$
                </Math>
                <span class="t-3003-c">
                  ,
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:49:37
                  </span>
                </span>
              </NoBreak>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                translated up by {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:50:9
                </span>
              </span>
              <Math>
                $1/2$
              </Math>
              <ImageLeft
                src="/build-img/svgo-svg/Hkfc.svg"
                local_url="./images/e5_more_closely_related_followup_cloud2.svg"
                intrinsicWidth={1500}
                intrinsicHeight={300}
              />
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...equivalently; for the proof, the sum-formula
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:55:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(A + B) = \cos A\cos B - \sin A\sin B
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                implies
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:63:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(2x) = \cos^2 x - \sin^2 x
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                from which
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:70:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;aligned&#125;
              \phantom&#123;=&#125;&amp;\,\,(\cos(2x) + 1)\cdot &#123;1\over 2&#125; \\
              =&amp;\,\,\up&#123;1.4&#125;(\cos^2 x - \sin^2 x + 1)\cdot &#123;1\over 2&#125; \\
              =&amp;\,\,\up&#123;1.4&#125;(\cos^2 x + \cos^2 x)\cdot &#123;1\over 2&#125; \\
              =&amp;\,\,\up&#123;1.4&#125;\cos^2 x
              \end&#123;aligned&#125;
              $$
              <ImageLeft
                src="/build-img/svgo-svg/ZFCF.svg"
                offsetY="1.3em"
                atLeastAsWide={true}
                local_url="./images/e5_more_closely_related_followup_cloud4.svg"
                intrinsicWidth={500}
                intrinsicHeight={200}
              />
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which completes the proof, since
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:85:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (\cos(2x) + 1)\cdot &#123;1\over 2&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:87:9
                </span>
              </span>
              <Math>
                $\cos(2x)$
              </Math>
              {" "} translated up by {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} scaled
              vertically by {" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 2&#125;$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                For {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:90:9
                </span>
              </span>
              <Math>
                $\sin^2$
              </Math>
              {" "} we can similarly conjecture that
              {" "}
              <Math>
                $\sin^2$
              </Math>
              {" "} is the graph of {" "}
              <Math>
                $\cos(2x)$
              </Math>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                vertically scaled by {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:93:11
                </span>
              </span>
              <NoBreak>
                <Math>
                  $-1/2$
                </Math>
                <span class="t-3003-c">
                  ,
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:93:38
                  </span>
                </span>
              </NoBreak>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                translated up by {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:94:9
                </span>
              </span>
              <Math>
                $1/2$
              </Math>
              <ImageLeft
                src="/build-img/svgo-svg/mQFa.svg"
                local_url="./images/e5_more_closely_related_followup_cloud3.svg"
                intrinsicWidth={1500}
                intrinsicHeight={300}
              />
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and, indeed,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:99:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;aligned&#125;
              \phantom&#123;=&#125;&amp;\,\,-&#123;1\over 2&#125;\cos(2x) + &#123;1\over 2&#125;\\
              =&amp;\,\,\up&#123;1.4&#125;-&#123;1\over 2&#125;(\cos^2 x - \sin^2 x) + &#123;1\over 2&#125;\\
              =&amp;\,\,\up&#123;1.4&#125;&#123;1\over 2&#125;\sin^2 x + &#123;1\over 2&#125;(1 - \cos^2 x)\\
              =&amp;\,\,\up&#123;1.4&#125;&#123;1\over 2&#125;\sin^2 x + &#123;1\over 2&#125;\sin^2 x\\
              =&amp;\,\,\up&#123;1.4&#125;\sin^2 x
              \end&#123;aligned&#125;
              $$
              <ImageLeft
                src="/build-img/svgo-svg/Xb68.svg"
                offsetY="0.2em"
                atLeastAsWide={true}
                local_url="./images/e5_more_closely_related_followup_cloud5.svg"
                intrinsicWidth={500}
                intrinsicHeight={200}
              />
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which completes a proof.
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:115:9
                </span>
              </span>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                For {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:117:9
                </span>
              </span>
              <Math>
                $\sin\cdot\cos$
              </Math>
              {" "} it seems that {" "}
              <Math>
                $\sin(2x)$
              </Math>
              {" "} is
              more closely related:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/ADAv.svg"
              local_url="./images/e5_more_closely_related_followup_sol3.svg"
              intrinsicWidth={600}
              intrinsicHeight={280}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                In fact, it seems that {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:123:9
                </span>
              </span>
              <Math>
                $\sin\cdot\cos$
              </Math>
              {" "} is just {" "}
              <Math>
                $y = \sin(2x)$
              </Math>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                vertically scaled by {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:125:11
                </span>
              </span>
              <Math>
                $1/2$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which, indeed {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:127:9
                </span>
              </span>
              <NoBreak>
                (
                <Math>
                  $\times 2$
                </Math>
                ),
              </NoBreak>
              {" "} can be verified from the fact that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(A + B) = \cos A\sin B + \sin A\cos B
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                implies
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:133:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(2x) = 2\sin x\cos x
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by setting {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:139:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $A = B = x$
                </Math>
                ,
              </NoBreak>
              {" "} which implies
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over 2&#125;\sin(2x) = \sin x\cos x
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as per the conjecture!
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:145:9
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
                  Here is a “pretty” rearrangement of the formulas
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:149:13
                  </span>
                </span>
                {" "}
                {" "}
                discovered above:
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  \begin&#123;gathered&#125;
                  \cos^2(x) = &#123;1\over 2&#125; + &#123;1\over 2&#125;\cos(2x) \\
                  \up&#123;2.1&#125;\sin^2(x) = &#123;1\over 2&#125; - &#123;1\over 2&#125;\cos(2x) \\
                  \up&#123;2.1&#125;\sin(x)\cos(x) = &#123;1\over 2&#125;\sin(2x)
                  \end&#123;gathered&#125;
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </Boxed>
              <OuterP>
                <span class="t-3003-c">
                  Another pretty arrangement:
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_more_closely_related_followup_.wly:162:13
                  </span>
                </span>
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  \begin&#123;gathered&#125;
                  \cos^2(x) = &#123;1 + \cos(2x) \over 2&#125;\\
                  \up&#123;2.1&#125;\sin^2(x) = &#123;1 - \cos(2x) \over 2&#125; \\
                  \up&#123;2.1&#125;\sin(x)\cos(x) = &#123;\sin(2x) \over 2 &#125;
                  \end&#123;gathered&#125;
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </Boxed>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={20}>
          <ExerciseStatement id="_171_h.a.i_">
            <OuterP>
              <b>
                Exercise 20.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                A geometric interpretation of
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <Math>
                $\cos x + \sin x$
              </Math>
              {" "} is given in {" "}
              <OutChapterLink
                href="/article/chapter6#_101_h.a.i_"
                class="out-chapter-link"
              >
                Exercise 16
              </OutChapterLink>
              {" "}
              that, to recap, involves “raining down at {" "}
              <NoBreak>
                <Math>
                  $-45^\circ$
                </Math>
                ”
              </NoBreak>
              {" "}
              onto the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis, as illustrated here:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/77pT.svg"
              local_url="./images/e5_cosx_plus_sinx_as_geometric_cos_1_v2.svg"
              intrinsicWidth={700}
              intrinsicHeight={360}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Using this geometric insight, how can we express
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:12:5
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <Math>
                $x \ra \cos x + \sin x$
              </Math>
              {" "} as a function of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra A\cdot\cos(Bx + C) + D
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for some constants {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:19:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $C$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $D$
                </Math>
                ?
              </NoBreak>
              {" "} (Deduce the answer
              using geometry, and, if you have the heart, verify using
              algebra.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Imagine a large ruler living below the {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:25:9
                </span>
              </span>
              <Math>
                $x$
              </Math>
              {" "} axis,
              off of which we read the values of {" "}
              <NoBreak>
                <Math>
                  $\cos x + \sin x$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/US0B.svg"
              local_url="./images/e5_cosx_plus_sinx_as_geometric_cos_2.svg"
              intrinsicWidth={700}
              intrinsicHeight={360}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (This ruler contains just the same numbers as the {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:31:9
                </span>
              </span>
              <Math>
                $x$
              </Math>
              {" "}
              axis in the same place, but need only go from {" "}
              <Math>
                $-\sqrt&#123;2&#125;$
              </Math>
              {" "}
              to {" "}
              <NoBreak>
                <Math>
                  $\sqrt&#123;2&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} those being the minimum and maximum values
              of {" "}
              <NoBreak>
                <Math>
                  $\theta \ra \cos\theta + \sin\theta$
                </Math>
                ,
              </NoBreak>
              {" "} as covered in {" "}
              <OutChapterLink
                href="/article/chapter6#_101_h.a.i_"
                class="out-chapter-link"
              >
                Exercise 16
              </OutChapterLink>
              .)
              Alternately, we could read values off of a ruler placed
              at {" "}
              <Math>
                $45^\circ$
              </Math>
              {" "} through the circle...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/DXtE.svg"
              local_url="./images/e5_cosx_plus_sinx_as_geometric_cos_3.svg"
              intrinsicWidth={700}
              intrinsicHeight={360}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and then multiply by {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:41:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\sqrt&#123;2&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} to recover the
              original “scale” of the horizontal ruler. However, the
              value on the diagonal ruler is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(x - \eta/2)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as one can see by rotating the entire diagram {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:49:9
                </span>
              </span>
              <Math>
                $45^\circ$
              </Math>
              {" "}
              clockwise until that ruler aligns with the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis;
              therefore,
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                \cos x + \sin x = \sqrt&#123;2&#125;\cdot\cos(x - \eta/2)
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </Boxed>
            <OuterP>
              <span class="t-3003-c">
                ...where you can think of the left-hand side of the
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:58:9
                </span>
              </span>
              {" "}
              {" "}
              equation as the value on the original “big” horizontal
              ruler (from {" "}
              <Math>
                $-\sqrt&#123;2&#125;$
              </Math>
              {" "} to {" "}
              <NoBreak>
                <Math>
                  $\sqrt&#123;2&#125;$
                </Math>
                ),
              </NoBreak>
              {" "} and the value on
              the right-hand side as the coordinate read off of the “small
              diagonal ruler” re-normalized by the factor {" "}
              <NoBreak>
                <Math>
                  $\sqrt&#123;2&#125;$
                </Math>
                .
              </NoBreak>
              {" "}
              Concretely,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gathered&#125;
              A = \sqrt&#123;2&#125;,\\
              B = \up&#123;1.3&#125;1,\\
              C = \up&#123;1.3&#125;-\eta/2,\\
              D = \up&#123;1.3&#125;0,
              \end&#123;gathered&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as those parameters appear in the problem statement.
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:74:9
                </span>
              </span>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Now for the ALGEBRAIC VERIFICATION {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:76:9
                </span>
              </span>
              {" "}
              {" "}
              that can accompany this geometric observation, we
              use the angle-sum formula
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(A + B) = \cos A\cos B - \sin A\sin B
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for cosine, giving us...
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:83:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;aligned&#125;
              &amp;\,\, \sqrt&#123;2&#125;\cdot \cos(x - \eta/2) \\
              \up&#123;1.6&#125; =&amp;\,\, \sqrt&#123;2&#125;\cdot(\cos(x)\cos(-\eta/2) - \sin(x)\sin(-\eta/2)) \\
              \up&#123;1.6&#125; =&amp;\,\, \sqrt&#123;2&#125;\cdot(\cos(x)\sqrt&#123;0.5&#125; - \sin(x)(-\sqrt&#123;0.5&#125;)) \\
              \up&#123;1.6&#125; =&amp;\,\, \sqrt&#123;2&#125;\cdot\sqrt&#123;0.5&#125;\cdot(\cos x + \sin x) \\
              \up&#123;1.6&#125; =&amp;\,\, \sqrt&#123;2 \cdot 0.5&#125;\cdot(\cos x + \sin x) \\
              \up&#123;1.6&#125; =&amp;\,\, \sqrt&#123;1&#125;\cdot(\cos x + \sin x) \\
              \up&#123;1.6&#125; =&amp;\,\, \cos x + \sin x
              \end&#123;aligned&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...victory!!
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:96:9
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
                  The fact that
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:100:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \sqrt&#123;2&#125;\cdot \sqrt&#123;0.5&#125; = 1
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  can also be seen from the fact that
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:104:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \sqrt&#123;0.5&#125; = &#123;1\over \sqrt&#123;2&#125;&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  previously discussed.
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:108:13
                  </span>
                </span>
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
                  If we admit
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:112:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \cos(A - B) = \cos A\cos B + \sin A\sin B
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  (replace {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:118:13
                  </span>
                </span>
                <Math>
                  $B$
                </Math>
                {" "} by {" "}
                <Math>
                  $-B$
                </Math>
                {" "} in the angle-sum formula
                for cosine, and use the fact that {" "}
                <NoBreak>
                  <Math>
                    $\cos(-B) = \cos B$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                {" "}
                <Math>
                  $\sin(-B) = -\sin B$
                </Math>
                {" "} for all {" "}
                <NoBreak>
                  <Math>
                    $B\in \rr$
                  </Math>
                  )
                </NoBreak>
                {" "} into the
                “roster of known formulas”, the algebraic proof
                becomes...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \begin&#123;aligned&#125;
                &amp;\,\, \sqrt&#123;2&#125;\cdot \cos(x - \eta/2) \\
                \up&#123;1.6&#125; =&amp;\,\, \sqrt&#123;2&#125;\cdot(\cos(x)\cos(\eta/2) + \sin(x)\sin(\eta/2)) \\
                \up&#123;1.6&#125; =&amp;\,\, \sqrt&#123;2&#125;\cdot(\cos(x)\sqrt&#123;0.5&#125; + \sin(x)\sqrt&#123;0.5&#125;) \\
                \up&#123;1.6&#125; =&amp;\,\, \sqrt&#123;2&#125;\cdot\sqrt&#123;0.5&#125;\cdot(\cos x + \sin x) \\
                \up&#123;1.6&#125; =&amp;\,\, \cos x + \sin x
                \end&#123;aligned&#125;
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...a bit simpler, with fewer {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:134:13
                  </span>
                </span>
                <NoBreak>
                  ‘
                  <Math>
                    $-$
                  </Math>
                  ’
                </NoBreak>
                {" "} signs in particular.
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
                  Note that the graph...
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:138:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                y = \sqrt&#123;2&#125;\cos(x - \eta/2)
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...as it is the graph of the composition...
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:144:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/4t6F.svg"
                local_url="./images/e5_cosx_plus_sinx_as_geometric_cos_composition.svg"
                intrinsicWidth={395}
                intrinsicHeight={95}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...(cf. {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:149:13
                  </span>
                </span>
                <OutChapterLink
                  href="/article/chapter6#_95_h.a.i_"
                  class="out-chapter-link"
                >
                  Exercise 10
                </OutChapterLink>
                ) 
                can be obtained from...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                y = \cos x
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...by...
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:156:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  1. translating horizontally by {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:158:15
                  </span>
                </span>
                <Math>
                  $\eta/2$
                </Math>
                <span class="t-3003-c">
                  {" "} to the right
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:158:54
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  2. dilating vertically by {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:160:15
                  </span>
                </span>
                <Math>
                  $\sqrt&#123;2&#125;$
                </Math>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...and, on the other hand, if we take a look at the
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:162:13
                  </span>
                </span>
                {" "}
                {" "}
                previously “annotated” graph of {" "}
                <Math>
                  $x \ra \cos x + \sin x$
                </Math>
                {" "}
                (cf. {" "}
                <OutChapterLink
                  href="/article/chapter6#_101_h.a.i_"
                  class="out-chapter-link"
                >
                  Exercise 16
                </OutChapterLink>
                )...
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/8ykE.svg"
                local_url="./images/e5_cosx_plus_sinx_with_max_min_info_radian_version_without_arrows.svg"
                intrinsicWidth={600}
                intrinsicHeight={170}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...it certainly {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_cosx_plus_sinx_as_sinusoid_.wly:169:13
                  </span>
                </span>
                <i>
                  looks like
                </i>
                {" "} this curve could be obtained by
                translating the graph {" "}
                <Math>
                  $y = \cos x$
                </Math>
                {" "} horizontally by
                {" "}
                <Math>
                  $\eta/2$
                </Math>
                {" "} and then scaling vertically by {" "}
                <NoBreak>
                  <Math>
                    $\sqrt&#123;2&#125;$
                  </Math>
                  .
                </NoBreak>
                {" "} 
                And it {" "}
                <i>
                  looks
                </i>
                {" "} so because it {" "}
                <i>
                  is
                </i>
                {" "} so!
                (We know that, now, because we have proved that {" "}
                <Math>
                  $\cos x + \sin x = \sqrt&#123;2&#125;\cos(x - \eta/2)$
                </Math>
                {" "}
                for all {" "}
                <NoBreak>
                  <Math>
                    $x \in \rr$
                  </Math>
                  .)
                </NoBreak>
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={21}>
          <ExerciseStatement id="_172_h.a.i_">
            <OuterP>
              <b>
                Exercise 21.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Show that for all {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_Acosx_plus_Bsinx_polar_conversion_.wly:4:5
                </span>
              </span>
              <Math>
                $A, B \in \rr$
              </Math>
              {" "} there exists
              {" "}
              <NoBreak>
                <Math>
                  $W$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\psi \in \rr$
              </Math>
              {" "} such that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A\cos x + B\sin x = W\cdot\cos(x - \psi)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for all {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_Acosx_plus_Bsinx_polar_conversion_.wly:11:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x \in \rr$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Starting from the desired endpoint, note that
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_Acosx_plus_Bsinx_polar_conversion_.wly:15:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(x - \psi) = \cos x\cos\psi + \sin x \sin \psi
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by the “angle-difference formula” (cf. {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_Acosx_plus_Bsinx_polar_conversion_.wly:21:9
                </span>
              </span>
              <InChapterLink
                href="#_168_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 17
              </InChapterLink>
              &#8288;) so
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              W\cdot\cos(x - \psi)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                equals
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_Acosx_plus_Bsinx_polar_conversion_.wly:27:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (W\cos\psi)\cdot\cos x + (W\sin\psi)\cdot\sin x
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                where we suggestively group the terms to underscore
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_Acosx_plus_Bsinx_polar_conversion_.wly:33:9
                </span>
              </span>
              {" "}
              {" "}
              that all we need to do in order to “win” is to satisfy 
              the equations
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;aligned&#125;
              A &amp;=         W\cos\psi,\\
              B &amp;= \up&#123;1.5&#125;W\rt&#123;0.1&#125;\sin\psi\,
              \end&#123;aligned&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and this can be done simply by setting {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_Acosx_plus_Bsinx_polar_conversion_.wly:44:9
                </span>
              </span>
              <Math>
                $(W, \psi)$
              </Math>
              {" "} to
              be the polar coordinates of the cartesian point {" "}
              <NoBreak>
                <Math>
                  $(A, B) \in \rr^2$
                </Math>
                !
              </NoBreak>
              {" "}
              I.e., put
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              W = \sqrt&#123;A^2 + B^2&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and...
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_Acosx_plus_Bsinx_polar_conversion_.wly:52:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \psi = \begin&#123;cases&#125;
              \arctan(B/A)&amp;\te&#123;if &#125;\, A \ne 0, \,\te&#123;else&#125; \\
              \up&#123;1.2&#125;\te&#123;arccot&#125;(A/B) &amp;\te&#123;if &#125;\, B \ne 0, \,\te&#123;else&#125; \\
              \up&#123;1.2&#125;\rm&#123;anything&#125; &amp;\te&#123;if &#125;\, A = 0, B = 0
              \end&#123;cases&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...where we copy-paste a formula from the chapter. {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_Acosx_plus_Bsinx_polar_conversion_.wly:62:9
                </span>
              </span>
              {" "}
              {" "}
              (Or just {" "}
              <span class="code-cartouche">
                psi = atan2(B, A)
              </span>
              {" "} if we were writing python.*) (*Indeed,
              {" "}
              <NoBreak>
                “
                <Math>
                  $\psi$
                </Math>
                ”
              </NoBreak>
              {" "} is “psi”.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={22}>
          <ExerciseStatement id="_173_h.a.i_">
            <OuterP>
              <b>
                Exercise 22.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Relate {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_relate_general_Acosx_plus_Bsinx_polar_conversion_to_cosx_plus_sinx_.wly:4:5
                </span>
              </span>
              <InChapterLink
                href="#_171_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 20
              </InChapterLink>
              {" "} to {" "}
              <InChapterLink
                href="#_172_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 21
              </InChapterLink>
              &#8288;.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              {" "}{" "}
              <InChapterLink
                href="#_171_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 20
              </InChapterLink>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                establishes that
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_relate_general_Acosx_plus_Bsinx_polar_conversion_to_cosx_plus_sinx_.wly:23:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos x + \sin x = \sqrt&#123;2&#125;\cos(x - \eta/2)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                but this is the special case
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_relate_general_Acosx_plus_Bsinx_polar_conversion_to_cosx_plus_sinx_.wly:29:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A = B = 1
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_relate_general_Acosx_plus_Bsinx_polar_conversion_to_cosx_plus_sinx_.wly:33:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <InChapterLink
                href="#_172_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 21
              </InChapterLink>
              {" "} since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos x + \sin x = 1\cdot \cos x + 1\cdot \sin x
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and since
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_relate_general_Acosx_plus_Bsinx_polar_conversion_to_cosx_plus_sinx_.wly:40:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (\sqrt&#123;2&#125;, \eta/2)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                are the (“the”) polar coordinates of the point {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_relate_general_Acosx_plus_Bsinx_polar_conversion_to_cosx_plus_sinx_.wly:46:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $(1, 1) \in \rr^2$
                </Math>
                !
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={23}>
          <ExerciseStatement id="_174_h.a.i_">
            <OuterP>
              <b>
                Exercise 23.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Illustrate the “Gregorinovich sandwich”
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_draw_the_sandwich_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              with a picture that actually looks like
              a sandwich.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The sandwich, which states that
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_draw_the_sandwich_.wly:10:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin\theta &lt; \theta &lt; \tan\theta
              $$
              <ImageRight
                src="/build-img/svgo-svg/172j.svg"
                offsetX="4em"
                atLeastAsWide={true}
                local_url="./images/e5_greg_sandwich_tant_cloud.svg"
                intrinsicWidth={400}
                intrinsicHeight={150}
              />
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_draw_the_sandwich_.wly:20:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $0 &lt; \theta &lt; \eta$
                </Math>
                ,
              </NoBreak>
              {" "} is hereby illustrated, using
              the fact that 
              {" "}
              <Math>
                $\theta$
              </Math>
              {" "} 
              equals subtended
              arc length on the unit circle:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/vI4f.svg"
              local_url="./images/e5_greg_sandwich.svg"
              intrinsicWidth={470}
              intrinsicHeight={400}
            />
            <Pause />
            <StarDivider />
          </Solution>
        </Exercise>
        <Exercise number={24}>
          <ExerciseStatement id="_175_h.a.i_">
            <OuterP>
              <b>
                Exercise 24.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Argue that, in the following figure, the
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_rotate_central_90_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              angle marked ‘?’ equals {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ,
              </NoBreak>
              {" "} the angle at
              the center of the circle:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/XRFw.svg"
              local_url="./images/svg_ch5_ex_tangent_angle_v2.svg"
              intrinsicWidth={400}
              intrinsicHeight={265}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The ending and starting half-lines of the
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_rotate_central_90_.wly:13:9
                </span>
              </span>
              {" "}
              {" "}
              angle marked ‘?’ are both {" "}
              <Math>
                $90^\circ$
              </Math>
              {" "} counterclockwise
              from the ending and starting half-lines,
              respectively, of the central angle:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/wC_h.svg"
              local_url="./images/svg_ch5_ex_tangent_angle_explanation_v2.svg"
              intrinsicWidth={400}
              intrinsicHeight={275}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The angle marked ‘?’ is therefore obtained
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_rotate_central_90_.wly:21:9
                </span>
              </span>
              {" "}
              {" "}
              by a {" "}
              <Math>
                $90^\circ$
              </Math>
              {" "} rotation (and then translation)
              of the central angle, and therefore equals the central angle {" "}
              <NoBreak>
                <Math>
                  $\theta$
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
                  This holds no matter which quadrant we
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_rotate_central_90_.wly:27:13
                  </span>
                </span>
                {" "}
                {" "}
                push {" "}
                <Math>
                  $\theta$
                </Math>
                {" "} to:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/Wi-I.svg"
                local_url="./images/svg_ch5_ex_tangent_angle_explanation_other_quadrants_machine_version.svg"
                intrinsicWidth={720}
                intrinsicHeight={285}
              />
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
                  Here is an attempt at verbalization:
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_rotate_central_90_.wly:35:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  the counterclockwise angle from the positive
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_rotate_central_90_.wly:37:15
                  </span>
                </span>
                {" "}
                {" "}
                {" "}{" "}
                <Math>
                  $x$
                </Math>
                <span class="t-3003-c">
                  {" "} axis to
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_rotate_central_90_.wly:38:16
                  </span>
                </span>
                {" "}
                {" "}
                the radial vector [of angle {" "}
                <NoBreak>
                  <Math>
                    $\theta$
                  </Math>
                  <span class="t-3003-c">
                    ]
                    <span class="t-3003">
                      ./src/content/ch9a_trig2/trig2^exercises/_rotate_central_90_.wly:39:49
                    </span>
                  </span>
                </NoBreak>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  equals the counterclockwise angle from the positive
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_rotate_central_90_.wly:40:13
                  </span>
                </span>
                {" "}
                {" "}
                {" "}{" "}
                <Math>
                  $y$
                </Math>
                <span class="t-3003-c">
                  {" "} axis to the counterclockwise tangent [of angle {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_rotate_central_90_.wly:41:16
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $\theta$
                  </Math>
                  <span class="t-3003-c">
                    ]
                    <span class="t-3003">
                      ./src/content/ch9a_trig2/trig2^exercises/_rotate_central_90_.wly:41:72
                    </span>
                  </span>
                </NoBreak>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  With the various terms illustrated here:
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_rotate_central_90_.wly:43:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/hFz7.svg"
                local_url="./images/svg_ch5_ex_tangent_angle_verbalization_explanation.svg"
                intrinsicWidth={510}
                intrinsicHeight={290}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...but if it was such a great verbalization we
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_rotate_central_90_.wly:48:13
                  </span>
                </span>
                {" "}
                {" "}
                wouldn't need to illustrate it, ergo, we failed!
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={25}>
          <ExerciseStatement id="_176_h.a.i_">
            <OuterP>
              <b>
                Exercise 25.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                By what factor are areas stretched
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_archimedean_projection_new_ver_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              as a function of the latitude {" "}
              <Math>
                $\theta$
              </Math>
              {" "} in the
              Lambert projection of a sphere onto a cylinder?
              (Cf. {" "}
              <InChapterLink
                href="#_195_h.a.i_"
                class="in-chapter-link"
              >
                Example 3
              </InChapterLink>
              &#8288;.)
              For reference, a profile view of the Lambert projection
              is also given below.
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/dKeI.svg"
              local_url="./images/svg_ch5_ex_horizontal_projection_sphere_statement.svg"
              intrinsicWidth={450}
              intrinsicHeight={380}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Areas are scaled by a factor of
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_archimedean_projection_new_ver_.wly:16:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sec(\theta) \cdot \cos(\theta) = 1
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                because latitudes are stretched by a factor of
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_archimedean_projection_new_ver_.wly:20:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sec(\theta)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as covered in {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_archimedean_projection_new_ver_.wly:31:9
                </span>
              </span>
              <InChapterLink
                href="#_195_h.a.i_"
                class="in-chapter-link"
              >
                Example 3
              </InChapterLink>
              &#8288;,
              whereas longitudes (the other
              ones, perpendicular to latitudes) are locally stretched
              by a factor of...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(\theta)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...as depicted in this...
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_archimedean_projection_new_ver_.wly:40:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/BvFn.svg"
              local_url="./images/svg_ch5_ex_horizontal_projection_sphere_cos_explanation.svg"
              intrinsicWidth={560}
              intrinsicHeight={370}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...sketch, and because the
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_archimedean_projection_new_ver_.wly:45:9
                </span>
              </span>
              {" "}
              {" "}
              overall scaling in area is the latitudinal
              scaling factor times the longitudinal
              scaling factor. (Area = width {" "}
              <Math>
                $\times$
              </Math>
              {" "} height,
              so you take the factor by which “width” scales,
              times the factor by which “height” scales—presuming
              your old “width” and “height” are still at right
              angle to one another after the projection, which
              is the case here: longitudes and latitudes, that
              are perpendicular on the sphere, project to
              lines and circles, respectively, that are
              perpendicular on the cylinder.)
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
                  As a consequence, {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_archimedean_projection_new_ver_.wly:59:13
                  </span>
                </span>
                {" "}
                {" "}
                the area of a shape on the sphere is equal to
                the area of the projection of that shape onto
                the cylinder, for any shape.
                We will refer to this (strange?) fact as the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  Archimedean property
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_archimedean_projection_new_ver_.wly:65:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  of the sphere.
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_archimedean_projection_new_ver_.wly:67:13
                  </span>
                </span>
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
                  For example, the following two orange areas, one
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_archimedean_projection_new_ver_.wly:93:13
                  </span>
                </span>
                {" "}
                {" "}
                on the sphere and one on the cylinder, are
                equal, by the Archimedean property (this is a Lambert
                projection):
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/pG5W.svg"
                local_url="./images/svg_ch5_ex_horizontal_projection_sphere_orange_1.svg"
                intrinsicWidth={450}
                intrinsicHeight={440}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  For a second, more exotic example,
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_archimedean_projection_new_ver_.wly:101:13
                  </span>
                </span>
                {" "}
                {" "}
                the 8 “tube sections” 
                of each circle
                in this diagram...
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/7Dao.svg"
                local_url="./images/svg_ch5_ex_horizontal_projection_sphere_orange_9.svg"
                intrinsicWidth={450}
                intrinsicHeight={440}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...have equal areas on the cylinder,
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_archimedean_projection_new_ver_.wly:109:13
                  </span>
                </span>
                {" "}
                {" "}
                even though dissimilar in shape,
                since those sections
                have equal area to one another on the sphere.
                (For each circle separately,
                we mean.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={26}>
          <ExerciseStatement id="_177_h.a.i_">
            <OuterP>
              <b>
                Exercise 26.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Rank the {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_rank_the_7_slices_.wly:4:5
                </span>
              </span>
              <Math>
                $7$
              </Math>
              {" "} slices of this
              sphere with unit radius from the greatest to
              smallest area slice:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/MAo2.svg"
              local_url="./images/svg_ch5_ex_pez_sphere_statement.svg"
              intrinsicWidth={500}
              intrinsicHeight={340}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The three slices of height {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_rank_the_7_slices_.wly:13:9
                </span>
              </span>
              <Math>
                $1/3$
              </Math>
              {" "} have the same
              area, as do the four slices of height {" "}
              <NoBreak>
                <Math>
                  $1/4$
                </Math>
                .
              </NoBreak>
              {" "} But
              naturally, the slices of height {" "}
              <Math>
                $1/3$
              </Math>
              {" "} have larger
              area than the slices of height {" "}
              <NoBreak>
                <Math>
                  $1/4$
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
                  This holds because each slice has the same area
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_rank_the_7_slices_.wly:20:13
                  </span>
                </span>
                {" "}
                {" "}
                as the horizontal projection of that slice onto a cylinder
                hugging the sphere, by {" "}
                <InChapterLink
                  href="#_176_h.a.i_"
                  class="in-chapter-link"
                >
                  Exercise 25
                </InChapterLink>
                &#8288;, and because
                the area of a cylinder slice only depends on its
                height.
                <ImageRight
                  src="/build-img/svgo-svg/xEpL.svg"
                  local_url="./images/svg_ch5_ex_pez_sphere_cloud.svg"
                  intrinsicWidth={900}
                  intrinsicHeight={420}
                />
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={27}>
          <ExerciseStatement id="_178_h.a.i_">
            <OuterP>
              <b>
                Exercise 27.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Give a formula for the area of a sphere of
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sphere_area_formula_from_archimedean_property_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              radius {" "}
              <NoBreak>
                <Math>
                  $r$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The area of a sphere of radius {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sphere_area_formula_from_archimedean_property_.wly:9:9
                </span>
              </span>
              <Math>
                $r$
              </Math>
              {" "} is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              4\eta\rt&#123;0.05&#125;r\cdot 2r = 8\eta\rt&#123;0.05&#125;r^2
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                because it is the same as the area of a cylinder
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sphere_area_formula_from_archimedean_property_.wly:13:9
                </span>
              </span>
              {" "}
              {" "}
              of radius {" "}
              <Math>
                $r$
              </Math>
              {" "} and and height {" "}
              <NoBreak>
                <Math>
                  $2r$
                </Math>
                ,
              </NoBreak>
              {" "} by {" "}
              <InChapterLink
                href="#_176_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 25
              </InChapterLink>
              &#8288;:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/ivEh.svg"
              local_url="./images/svg_ch5_ex_sphere_area.svg"
              intrinsicWidth={500}
              intrinsicHeight={260}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (Namely,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sphere_area_formula_from_archimedean_property_.wly:19:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              4\eta\rt&#123;0.05&#125;r\cdot 2r
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is the product “circumference {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sphere_area_formula_from_archimedean_property_.wly:23:9
                </span>
              </span>
              <Math>
                $\times$
              </Math>
              {" "} height”
              that gives the area of the cylinder.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={28}>
          <ExerciseStatement id="_179_h.a.i_">
            <OuterP>
              <b>
                Exercise 28.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Give a formula for the volume of a sphere of
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sphere_volume_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              radius {" "}
              <Math>
                $r$
              </Math>
              {" "} using the fact that the volume of
              a cone is “one third base times height”.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                We can view the sphere as made up of many cones:
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sphere_volume_.wly:10:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/TNdV.svg"
              local_url="./images/svg_ch5_ex_sphere_volume_idea.svg"
              intrinsicWidth={240}
              intrinsicHeight={240}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                When we add up the volume
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sphere_volume_.wly:15:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over 3&#125;\times \rm&#123;base&#125; \times \rm&#123;height&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                over all these cones, each height is nearly {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sphere_volume_.wly:21:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $r$
                </Math>
                ,
              </NoBreak>
              {" "}
              so what we really need is the sum of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over 3&#125;\times \rm&#123;base&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                over all the cones, which comes out to
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sphere_volume_.wly:28:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over 3&#125;\times (&#123;\rm sphere\,\,area&#125;)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                because the sum of all the areas of the bases
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sphere_volume_.wly:34:9
                </span>
              </span>
              {" "}
              {" "}
              is the sphere area. (Everything speaking
              approximately, for many fine cones, in the
              limit of our imagination as they become
              infinitely fine.) (*Where each ‘base’ stands
              for the shaved-off, “flattened” version of the
              base.) So multiplying the height {" "}
              <Math>
                $r$
              </Math>
              {" "} back in,
              we find
            </OuterP>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                <MathBlock>
                  $$
                  V = &#123;1\over 3&#125;\times (&#123;\rm sphere\,\,area&#125;) \times r = &#123;8\over 3&#125;\eta\rt&#123;.1&#125;r^3
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </div>
            </center>
            <OuterP>
              <span class="t-3003-c">
                for the volume {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sphere_volume_.wly:52:9
                </span>
              </span>
              <Math>
                $V$
              </Math>
              {" "} of the sphere, using the fact that
              the sphere area {" "}
              <Math>
                $A$
              </Math>
              {" "} is
            </OuterP>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                <MathBlock>
                  $$
                  A = 8\eta\rt&#123;.05&#125;r^2
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </div>
            </center>
            <OuterP>
              <span class="t-3003-c">
                by {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sphere_volume_.wly:64:9
                </span>
              </span>
              <InChapterLink
                href="#_178_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 27
              </InChapterLink>
              &#8288;.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={29}>
          <ExerciseStatement id="_180_h.a.i_">
            <OuterP>
              <b>
                Exercise 29.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                If a
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:4:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                vector
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:6:7
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:8:5
                </span>
              </span>
              <i>
                a pair of numbers
              </i>
              {" "} (in 2D), suggest a
              definition for the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                sum
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:11:7
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of two vectors. (The most logical definition wins.)
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:13:5
                </span>
              </span>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The standard definition is that the sum
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:17:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \vec&#123;u&#125; + \vec&#123;v&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of a vector
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:23:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \vec&#123;u&#125; = (u_x, u_y)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and of a vector
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:29:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \vec&#123;v&#125; = (v_x, v_y)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is the vector
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:35:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (u_x + v_x, u_y + v_y)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                whose first coordinate is the sum of the first
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:41:9
                </span>
              </span>
              {" "}
              {" "}
              coordinates of {" "}
              <Math>
                $\vec&#123;u&#125;$
              </Math>
              {" "} and {" "}
              <Math>
                $\vec&#123;v&#125;$
              </Math>
              {" "} and whose
              second coordinate is the sum of the second coordinates
              of {" "}
              <Math>
                $\vec&#123;u&#125;$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $\vec&#123;v&#125;$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Example 1.
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:48:10
                  </span>
                </span>
              </i>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \vec&#123;u&#125; = (100, 100)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:52:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \vec&#123;v&#125; = (1, -1)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                then
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:56:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \,\vec&#123;u&#125; + \vec&#123;v&#125; = (101, 99)
              $$
              <ImageRight
                src="/build-img/svgo-svg/rUfo.svg"
                offsetX="1em"
                atLeastAsWide={true}
                local_url="./images/svg_ch5_ex_vector_sum_101_cloud.svg"
                intrinsicWidth={240}
                intrinsicHeight={200}
              />
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                because
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:66:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              100 + 1 = 101
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                on the one hand, and
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:72:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              100 - 1 = 99
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                on the other hand.
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:78:9
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
                  The little arrow {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:82:13
                  </span>
                </span>
                <NoBreak>
                  “
                  <Math>
                    $\vec&#123;\phantom&#123;x&#125;&#125;$
                  </Math>
                  ”
                </NoBreak>
                {" "}
                denotes vectors. (Feel free
                to choose your own notation.)
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
                  If we represent the vectors {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:88:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $\vec&#123;u&#125;$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $\vec&#123;v&#125;$
                </Math>
                {" "}
                by arrows whose components are displacements {" "}
                <NoBreak>
                  <Math>
                    $u_x$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                {" "}
                <NoBreak>
                  <Math>
                    $u_y$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $v_x$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $v_y$
                </Math>
                {" "} in {" "}
                <NoBreak>
                  <Math>
                    $x$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $y$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $x$
                </Math>
                {" "} and {" "}
                <Math>
                  $y$
                </Math>
                {" "} again
                respectively...
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/Sx1Y.svg"
                local_url="./images/svg_ch5_ex_vector_sum_vectors.svg"
                intrinsicWidth={450}
                intrinsicHeight={240}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...then..
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:96:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                u_x + v_x
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  may be geometrically realized as the concatenation
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:102:13
                  </span>
                </span>
                {" "}
                {" "}
                of the {" "}
                <Math>
                  $u_x$
                </Math>
                {" "} and {" "}
                <NoBreak>
                  <Math>
                    $v_x$
                  </Math>
                  ...
                </NoBreak>
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/JkS_.svg"
                local_url="./images/svg_ch5_ex_vector_sum_ux_plus_vx.svg"
                intrinsicWidth={450}
                intrinsicHeight={135}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...component displacements, while...
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:108:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                u_y + v_y
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...may be geometrically realized as the concatenation
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:114:13
                  </span>
                </span>
                {" "}
                {" "}
                of the {" "}
                <Math>
                  $u_y$
                </Math>
                {" "} and {" "}
                <NoBreak>
                  <Math>
                    $v_y$
                  </Math>
                  ...
                </NoBreak>
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/efoR.svg"
                local_url="./images/svg_ch5_ex_vector_sum_uy_plus_vy.svg"
                intrinsicWidth={450}
                intrinsicHeight={150}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...component displacements; moreover, both
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:120:13
                  </span>
                </span>
                {" "}
                {" "}
                concatenations may be simultaneously obtained by
                concatenating the original {" "}
                <Math>
                  $\vec&#123;u&#125;$
                </Math>
                {" "} and {" "}
                <Math>
                  $\vec&#123;v&#125;$
                </Math>
                {" "}
                arrows...
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/Qnaf.svg"
                local_url="./images/svg_ch5_ex_vector_sum_u_concat_v.svg"
                intrinsicWidth={450}
                intrinsicHeight={305}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...which actually implies that {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:128:13
                  </span>
                </span>
                <Math>
                  $\vec&#123;u&#125; + \vec&#123;v&#125;$
                </Math>
                {" "}
                is the vector going from the head of {" "}
                <Math>
                  $\vec&#123;u&#125;$
                </Math>
                {" "} to
                the tail of {" "}
                <Math>
                  $\vec&#123;v&#125;$
                </Math>
                {" "} in the afore-mentioned
                concatenation, because of how we defined
                {" "}
                <NoBreak>
                  <Math>
                    $\vec&#123;u&#125; + \vec&#123;v&#125;$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/7Z4q.svg"
                local_url="./images/svg_ch5_ex_vector_sum_u_plus_v.svg"
                intrinsicWidth={450}
                intrinsicHeight={305}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  This makes a mess, but the point is that this
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:137:13
                  </span>
                </span>
                {" "}
                {" "}
                gives us a
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  geometric interpretation
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:140:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  or
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:142:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  geometric representation
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:144:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  or
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:146:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  geometric method of evaluation
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:148:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  for the sum of two vectors: concatenate the arrows
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:150:13
                  </span>
                </span>
                {" "}
                {" "}
                of the vectors you're summing, and take the final
                displacement from the head of the first arrow to the
                tail of the last arrow.
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
                  The solution to Exercise 7 can be cast in terms of
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_vector_addition_definition_.wly:157:13
                  </span>
                </span>
                {" "}
                {" "}
                vector addition, with, specifically, the position
                vector of the point being equal to the sum of the
                position vector of the circle's center with the “radial
                vector” from the center to the point:
              </OuterP>
              <Pause />
              <Image
                style="margin-top:1em;margin-bottom:0.8em;"
                src="/build-img/svgo-svg/Mzki.svg"
                local_url="./images/svg_ch5_ex_vector_sum_previous_example.svg"
                intrinsicWidth={500}
                intrinsicHeight={260}
              />
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={30}>
          <ExerciseStatement id="_181_h.a.i_">
            <OuterP>
              <b>
                Exercise 30.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                What are the maximum and minimum values
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_isosets_of_xy_v5_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \theta \ra \cos\theta\sin\theta
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and for which {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_isosets_of_xy_v5_.wly:11:5
                </span>
              </span>
              <Math>
                $\theta$
              </Math>
              {" "} are they attained?
              (Reason geometrically or algebraically, not by calculus.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Solution 1.
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_isosets_of_xy_v5_.wly:16:10
                  </span>
                </span>
              </i>
              {" "} For a geometric solution we remind ourselves that if we plot all the solutions of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              xy = 1
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                we find the curve
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_isosets_of_xy_v5_.wly:22:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = &#123;1\over x&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (equivalent!) whose general aspect is...
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_isosets_of_xy_v5_.wly:28:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/HPwG.svg"
              width="470px"
              local_url="./images/_e5_max_cosx_sinx_one_over_x_graph.svg"
              intrinsicWidth={615}
              intrinsicHeight={568}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...like so; a little more generally,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_isosets_of_xy_v5_.wly:34:9
                </span>
              </span>
              {" "}
              {" "}
              “isosets” of the two-variable function...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x, y) \ra xy
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...have this general aspect...
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_isosets_of_xy_v5_.wly:41:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/ME1k.svg"
              style="margin-bottom:0.5em;"
              local_url="./images/svg_ch5_ex_max_xy_xy_isosets.svg"
              intrinsicWidth={488}
              intrinsicHeight={495}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...where you see the curve {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_isosets_of_xy_v5_.wly:47:9
                </span>
              </span>
              <NoBreak>
                “
                <Math>
                  $xy = 1$
                </Math>
                ”
              </NoBreak>
              {" "} among a
              mix of other such curves, of the form {" "}
              <NoBreak>
                <Math>
                  $xy = C$
                </Math>
                ;
              </NoBreak>
              {" "}
              what will give us a maybe even better level of
              insight is the following “heatmap” of {" "}
              <NoBreak>
                <Math>
                  $(x, y) \ra xy$
                </Math>
                ,
              </NoBreak>
              {" "}
              where the curves above show up as boundaries between
              the regions of different color:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/FGx3.svg"
              style="margin-bottom:0.5em;"
              local_url="./images/svg_ch5_ex_max_xy_rainbow.svg"
              intrinsicWidth={420}
              intrinsicHeight={540}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The geometric insight that is of interest to
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_isosets_of_xy_v5_.wly:66:9
                </span>
              </span>
              {" "}
              {" "}
              is that,
              at any given
              distance from the origin, the lines
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = y
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_isosets_of_xy_v5_.wly:76:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = -y
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                hold the largest and smallest values, respectively,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_isosets_of_xy_v5_.wly:83:9
                </span>
              </span>
              {" "}
              {" "}
              of {" "}
              <NoBreak>
                <Math>
                  $xy$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/YYAQ.svg"
              local_url="./images/svg_ch5_ex_max_xy_fixed_distance_v2.svg"
              intrinsicWidth={430}
              intrinsicHeight={540}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                In other words,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_isosets_of_xy_v5_.wly:89:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(\theta)\cdot\sin(\theta),
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as a value of the form {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_isosets_of_xy_v5_.wly:93:9
                </span>
              </span>
              <NoBreak>
                “
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} times {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinate”
              </NoBreak>
              {" "}
              of a point confined to the unit circle,
              will reach its maximum when
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (\cos \theta, \sin \theta) = \pm(\sqrt&#123;0.5&#125;, \sqrt&#123;0.5&#125;)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                where it attains value
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_isosets_of_xy_v5_.wly:101:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;0.5&#125; \cdot \sqrt&#123;0.5&#125; = &#123;1\over 2&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and will reach its minimum when
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_isosets_of_xy_v5_.wly:108:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (\cos \theta, \sin \theta) = \pm(-\sqrt&#123;0.5&#125;, \sqrt&#123;0.5&#125;)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                where it attains value
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_isosets_of_xy_v5_.wly:114:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (-\sqrt&#123;0.5&#125;) \cdot \sqrt&#123;0.5&#125; = -&#123;1\over 2&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                while, to answer the last part of the question,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_isosets_of_xy_v5_.wly:121:9
                </span>
              </span>
              {" "}
              {" "}
              the set of {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                's
              </NoBreak>
              {" "} for which the 
              maximum and minimum are reached will be...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \&#123;0.5\eta + 2\eta k: k \in \zz\&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and...
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_isosets_of_xy_v5_.wly:129:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \&#123;1.5\eta + 2\eta k: k \in \zz\&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...respectively, as illustrated...
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_isosets_of_xy_v5_.wly:135:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/FyVW.svg"
              local_url="./images/svg_ch5_ex_max_xy_angles_v2.svg"
              intrinsicWidth={650}
              intrinsicHeight={525}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...here.
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_isosets_of_xy_v5_.wly:140:9
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
                  Here are annotated graphs of {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_isosets_of_xy_v5_.wly:146:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $x \ra \cos x\sin x$
                  </Math>
                  ,
                </NoBreak>
                {" "} in 
                radians and in degrees, proudly displaying the newly
                discovered max &amp; min:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/7Hpe.svg"
                style="margin-bottom:-0.5em"
                local_url="./images/svg_ch5_ex_max_xy_graph_v2.svg"
                intrinsicWidth={700}
                intrinsicHeight={180}
              />
              <Pause />
              <Image
                src="/build-img/svgo-svg/H0zm.svg"
                local_url="./images/svg_ch5_ex_max_xy_graph_degrees.svg"
                intrinsicWidth={700}
                intrinsicHeight={180}
              />
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={31}>
          <ExerciseStatement id="_182_h.a.i_">
            <OuterP>
              <b>
                Exercise 31.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                What is the angle marked ‘?’, as a function
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_complement_calculation_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              of {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ?
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Vd8x.svg"
              local_url="./images/svg_ch5_ex_angle_sum_180.svg"
              intrinsicWidth={300}
              intrinsicHeight={110}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Since the angles of a triangle add to
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_complement_calculation_.wly:12:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <NoBreak>
                <Math>
                  $180^\circ = 2\eta$
                </Math>
                ,
              </NoBreak>
              {" "} we need to solve
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \theta + \eta + \te&#123;?&#125; = 2\eta
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for ‘?’, giving us
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_complement_calculation_.wly:19:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \te&#123;?&#125; = 2\eta - \eta - \theta
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                or an answer of...
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_complement_calculation_.wly:26:9
                </span>
              </span>
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                \eta - \theta
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
            </Boxed>
            <OuterP>
              <span class="t-3003-c">
                ...!!
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_complement_calculation_.wly:33:9
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
                  Two angles that sum to {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_complement_calculation_.wly:45:13
                  </span>
                </span>
                <Math>
                  $\eta$
                </Math>
                {" "} are
                called {" "}
                <i>
                  complementary
                </i>
                , with each angle being
                the {" "}
                <i>
                  complement
                </i>
                {" "} of the other.
                The two
                non-right angles of a right triangle are,
                therefore, complementary!
                (Not
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  complimentary
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_complement_calculation_.wly:53:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  which would indicate that the angles are
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_complement_calculation_.wly:55:13
                  </span>
                </span>
                {" "}
                {" "}
                given to you for free—everything in math is
                free, not just those angles!)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={32}>
          <ExerciseStatement id="_183_h.a.i_">
            <OuterP>
              <b>
                Exercise 32.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                What is the angle marked ‘?’, as a function of
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_complement_of_complement_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ?
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/MXN9.svg"
              local_url="./images/svg_ch5_ex_angle_sum_180_followup.svg"
              intrinsicWidth={300}
              intrinsicHeight={110}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                It is {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_complement_of_complement_.wly:12:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ,
              </NoBreak>
              {" "} as well. One method uses the fact that “the complement
              of my complement is myself”:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/SIuZ.svg"
              local_url="./images/svg_ch5_ex_angle_sum_180_followup_explanation.svg"
              intrinsicWidth={380}
              intrinsicHeight={210}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Another method uses the fact that,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_complement_of_complement_.wly:18:9
                </span>
              </span>
              {" "}
              {" "}
              together with the angle immediately to its left
              (which happens to be {" "}
              <NoBreak>
                <Math>
                  $\eta - \theta$
                </Math>
                ,
              </NoBreak>
              {" "} because
              it is the complement of {" "}
              <Math>
                $\theta$
              </Math>
              {" "} via the smallest
              right triangle present), the sought-for angle
              makes up {" "}
              <NoBreak>
                <Math>
                  $90^\circ$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/lswQ.svg"
              local_url="./images/svg_ch5_ex_angle_sum_180_followup_explanation_2.svg"
              intrinsicWidth={380}
              intrinsicHeight={130}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (In one case we use the fact that the
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_complement_of_complement_.wly:28:9
                </span>
              </span>
              {" "}
              {" "}
              medium-sized triangle is a right triangle,
              in another case that the smallest-size
              triangle is a right triangle—and in both cases
              that the original, largest triangle is a
              right triangle.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={33}>
          <ExerciseStatement id="_184_h.a.i_">
            <OuterP>
              <b>
                Exercise 33.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Express {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_ratio_A_over_B_tan^2_.wly:4:5
                </span>
              </span>
              <Math>
                $A/B$
              </Math>
              {" "} as a function of {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/WqQR.svg"
              local_url="./images/svg_ch5_ex_tan_sq_AB_ratio.svg"
              intrinsicWidth={300}
              intrinsicHeight={150}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                We shall use the height {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_ratio_A_over_B_tan^2_.wly:11:9
                </span>
              </span>
              <Math>
                $C$
              </Math>
              {" "} of the triangle
              as a stopover between {" "}
              <Math>
                $A$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/1KiR.svg"
              local_url="./images/svg_ch5_ex_tan_sq_AB_ratio_height_C.svg"
              intrinsicWidth={360}
              intrinsicHeight={153}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                On the one hand, {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_ratio_A_over_B_tan^2_.wly:17:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $C/B = \tan(\theta)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/DU_p.svg"
              local_url="./images/svg_ch5_ex_tan_sq_AB_ratio_left_part.svg"
              intrinsicWidth={360}
              intrinsicHeight={228}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                On the other hand, {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_ratio_A_over_B_tan^2_.wly:22:9
                </span>
              </span>
              <Math>
                $A/C = \tan(\theta)$
              </Math>
              {" "}
              also, by the result of Exercise 19 (whereby
              {" "}
              <Math>
                $\theta$
              </Math>
              {" "} reappears as the top left angle of
              the middle-sized right triangle):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/OHG8.svg"
              local_url="./images/svg_ch5_ex_tan_sq_AB_ratio_right_part.svg"
              intrinsicWidth={430}
              intrinsicHeight={222}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The answer is therefore:
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_ratio_A_over_B_tan^2_.wly:30:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \tan(\theta)\cdot\tan(\theta) = \tan^2(\theta).
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (As per the fact that {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_ratio_A_over_B_tan^2_.wly:36:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $(A/B) = (C/B)\cdot(A/C)$
                </Math>
                .)
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={34}>
          <ExerciseStatement id="_185_h.a.i_">
            <OuterP>
              <b>
                Exercise 34.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Express {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_ratio_A_over_B_1_plus_tan^2_.wly:4:5
                </span>
              </span>
              <Math>
                $A/B$
              </Math>
              {" "} as a function of {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/8gZl.svg"
              local_url="./images/svg_ch5_ex_tan_sq_AB_ratio_big_A.svg"
              intrinsicWidth={300}
              intrinsicHeight={185}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Here are two solutions:
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_ratio_A_over_B_1_plus_tan^2_.wly:11:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Solution 1.
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_ratio_A_over_B_1_plus_tan^2_.wly:15:10
                  </span>
                </span>
              </i>
              {" "} We use the small leg {" "}
              <Math>
                $D$
              </Math>
              {" "}
              of the triangle as a stopover between {" "}
              <Math>
                $A$
              </Math>
              {" "} and
              {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/0rFq.svg"
              local_url="./images/svg_ch5_ex_tan_sq_AB_ratio_big_A_with_D.svg"
              intrinsicWidth={360}
              intrinsicHeight={190}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                On the one hand, {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_ratio_A_over_B_1_plus_tan^2_.wly:22:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $D/B = \sec(\theta)\,\, (= 1/\cos(\theta))$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/xVQI.svg"
              local_url="./images/svg_ch5_ex_tan_sq_AB_ratio_big_A_left_part.svg"
              intrinsicWidth={360}
              intrinsicHeight={238}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                On the other hand, {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_ratio_A_over_B_1_plus_tan^2_.wly:27:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $A/D = \sec(\theta)$
                </Math>
                ,
              </NoBreak>
              {" "} also (!?):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/4_JC.svg"
              local_url="./images/svg_ch5_ex_tan_sq_AB_ratio_big_A_right_part_shrunk.svg"
              intrinsicWidth={450}
              intrinsicHeight={236}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Thus:
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_ratio_A_over_B_1_plus_tan^2_.wly:32:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;A\over B&#125; = &#123;D\over B&#125;\times &#123;A\over D&#125; = \sec(\theta)\cdot \sec(\theta) = \sec^2(\theta).
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <StarDivider style="margin-top:0.5em;" />
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Solution 2.
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_ratio_A_over_B_1_plus_tan^2_.wly:41:10
                  </span>
                </span>
              </i>
              {" "}
              We decompose {" "}
              <Math>
                $A$
              </Math>
              {" "} as {" "}
              <Math>
                $B + A'$
              </Math>
              {" "}
              where {" "}
              <Math>
                $A' = B - A$
              </Math>
              {" "} is the “old {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ”
              </NoBreak>
              {" "} from
              Exercise 22:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/YcZS.svg"
              local_url="./images/svg_ch5_ex_tan_sq_AB_ratio_big_A_with_Aprime.svg"
              intrinsicWidth={360}
              intrinsicHeight={191}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                We find:
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_ratio_A_over_B_1_plus_tan^2_.wly:49:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;A\over B&#125; = &#123;&#123;B + A'&#125;\over B&#125; = &#123;B\over B&#125; + &#123;A'\over B&#125; = 1 + \tan^2(\theta)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...since
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_ratio_A_over_B_1_plus_tan^2_.wly:55:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;A'\over B&#125; = \tan^2(\theta)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by Exercise 22. (The End.)
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_ratio_A_over_B_1_plus_tan^2_.wly:61:9
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
                  Since both solutions answer the same question, we deduce that
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_ratio_A_over_B_1_plus_tan^2_.wly:65:13
                  </span>
                </span>
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  \sec^2(\theta) = 1 + \tan^2(\theta)
                  $$
                  <MathJaxSvgExportTooltip />
                </MathBlock>
              </Boxed>
              <OuterP>
                <span class="t-3003-c">
                  for all {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_ratio_A_over_B_1_plus_tan^2_.wly:72:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $0 &lt; \theta &lt; \eta$
                  </Math>
                  ,
                </NoBreak>
                {" "} which is
                the range of {" "}
                <Math>
                  $\theta$
                </Math>
                {" "} covered by these
                diagrams. (The same identity holds more
                generally than just those {" "}
                <NoBreak>
                  <Math>
                    $\theta$
                  </Math>
                  's,
                </NoBreak>
                {" "}
                however.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={35}>
          <ExerciseStatement id="_186_h.a.i_">
            <OuterP>
              <b>
                Exercise 35.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                An access staircase goes up the side of a
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              hemispheric gas tank. It keeps a constant angle
              of {" "}
              <Math>
                $45^\circ$
              </Math>
              {" "} to vertical at its inside edge 
              until it reaches {" "}
              <Math>
                $45^\circ$
              </Math>
              {" "} up the tank, at which
              point it makes a beeline for the top:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/wF1d.svg"
              local_url="./images/svg_ch5_ex_gas_sphere.svg"
              intrinsicWidth={620}
              intrinsicHeight={425}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                How long, roughly, is the inside handrail
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank.wly:13:5
                </span>
              </span>
              {" "}
              {" "}
              of the staircase as a function of the radius
              of the tank?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Putting {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank.wly:19:9
                </span>
              </span>
              <Math>
                $r$
              </Math>
              {" "} for the radius, the answer is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \approx r(1 + \eta/2)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                where
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank.wly:25:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              r\cdot 1=r
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                accounts for the first (lower) portion of the
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank.wly:31:9
                </span>
              </span>
              {" "}
              {" "}
              handrail, and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              r\cdot(\eta/2)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                accounts for the upper portion of the handrail.
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank.wly:38:9
                </span>
              </span>
              {" "}
              {" "}
              (Ignoring that the handrail doesn't quite
              follow through to the tippy-top of the gas tank,
              per the picture.)
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                To reason about the lower portion of the handrail
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank.wly:43:9
                </span>
              </span>
              {" "}
              {" "}
              imagine a butterly that follows up the
              handrail by flying straight up and
              straight over, then straight up and straight
              over again, etc, like so:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/EiSR.svg"
              local_url="./images/svg_ch5_ex_gas_sphere_butterfly.svg"
              intrinsicWidth={460}
              intrinsicHeight={415}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The total length of the handrail is the sum of
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank.wly:52:9
                </span>
              </span>
              {" "}
              {" "}
              all the diagonal segments (in dotted white) above.
              Because the diagonal segment has length
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;2&#125;h
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for a leg in which the butterly goes up by {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank.wly:60:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $h$
                </Math>
                ,
              </NoBreak>
              {" "} the
              total length of the diagonal segments is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;2&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                times the total amount that the butterfly goes up
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank.wly:67:9
                </span>
              </span>
              {" "}
              {" "}
              for the first half of the handrail. But this
              amount—call it {" "}
              <NoBreak>
                <Math>
                  $H$
                </Math>
                —is
              </NoBreak>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              r\cdot\sin(45^\circ) = r\cdot &#123;1\over \sqrt&#123;2&#125;&#125; = &#123;r\over \sqrt&#123;2&#125;&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as illustrated here:
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank.wly:75:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/VrOC.svg"
              local_url="./images/svg_ch5_ex_gas_sphere_profile.svg"
              intrinsicWidth={900}
              intrinsicHeight={400}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                And therefore the sum of the white diagonal segments
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank.wly:80:9
                </span>
              </span>
              {" "}
              {" "}
              is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;2&#125;\cdot H = \sqrt&#123;2&#125;\cdot &#123;r\over \sqrt&#123;2&#125;&#125; = r
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...just {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank.wly:87:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $r$
                </Math>
                ,
              </NoBreak>
              {" "} as we said.
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                On the other hand, the upper portion of the handrail
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank.wly:89:9
                </span>
              </span>
              {" "}
              {" "}
              has length
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              r\cdot(\eta/2)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (modulo the kerfuffle at the top) because, in a circle of radius {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank.wly:96:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $r$
                </Math>
                ,
              </NoBreak>
              {" "} an angle of {" "}
              <Math>
                $\alpha$
              </Math>
              {" "}
              radians subtends an arc of length {" "}
              <NoBreak>
                <Math>
                  $r\alpha$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/E5ov.svg"
              local_url="./images/svg_ch5_ex_gas_sphere_profile_2.svg"
              intrinsicWidth={900}
              intrinsicHeight={400}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and hence the {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank.wly:102:9
                </span>
              </span>
              <i>
                total
              </i>
              {" "} length of the handrail
              is...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \approx r + r\cdot\eta/2 = r(1 + \eta/2)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...as claimed.
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank.wly:109:9
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
                  Another way to think about the length of the lower
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_gas_tank.wly:113:13
                  </span>
                </span>
                {" "}
                {" "}
                portion of the handrail is via the green triangle 
                depicted below, that drops down  onto the handrail
                like a curtain, starting at the top of the lower
                portion of the handrail:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/tyZN.svg"
                local_url="./images/svg_ch5_ex_gas_sphere_green_2_1_45.svg"
                intrinsicWidth={620}
                intrinsicHeight={435}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  If we “unroll” the triangle onto a vertical plane
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_gas_tank.wly:122:13
                  </span>
                </span>
                {" "}
                {" "}
                while keeping its left edge vertical we find a 
                triangle with a straight lower edge at {" "}
                <Math>
                  $45^\circ$
                </Math>
                {" "}
                to horizontal, because that is the property of the
                handrail to maintain this angle everywhere:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/-SnV.svg"
                local_url="./images/svg_ch5_ex_gas_sphere_triangle_out_flat.svg"
                intrinsicWidth={350}
                intrinsicHeight={280}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  Hence the length of the lower half of the handrail
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_gas_tank.wly:131:13
                  </span>
                </span>
                {" "}
                {" "}
                is
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \large \sqrt&#123;2&#125;H
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  with {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_gas_tank.wly:138:13
                  </span>
                </span>
                <Math>
                  $H = r/\sqrt&#123;2&#125;$
                </Math>
                {" "} as previously defined.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={36}>
          <ExerciseStatement id="_187_h.a.i_">
            <OuterP>
              <b>
                Exercise 36.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Give a decimal approximation to
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank_decimal_approximation_.wly:3:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              r(1 + \eta/2)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank_decimal_approximation_.wly:7:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $r = 100$
                </Math>
                m,
              </NoBreak>
              {" "} accurate within {" "}
              <NoBreak>
                <Math>
                  $\pm 5\%$
                </Math>
                .
              </NoBreak>
              {" "} (No calculators.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Since
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank_decimal_approximation_.wly:11:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \eta \approx &#123;11\over 7&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                within 1/1000th, we have
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank_decimal_approximation_.wly:17:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
                 r(1 + \eta/2)\,\, \approx&amp;\,\,\,\dn&#123;1.3&#125;\up&#123;0.0&#125; r\left(1 + &#123;11\over 14&#125;\right)\\
                                         =&amp;\,\,\,\dn&#123;1.3&#125;\up&#123;1.3&#125; r\left(&#123;14 + 11\over 14&#125;\right)\\
                                         =&amp;\,\,\,\dn&#123;1.3&#125;\up&#123;1.3&#125; r\cdot &#123;25\over 14&#125;\\
                                         =&amp;\,\,\,\dn&#123;1.3&#125;\up&#123;1.3&#125; r\cdot &#123;28 - 3\over 14&#125;\\
                                         =&amp;\,\,\,\dn&#123;1.3&#125;\up&#123;1.3&#125; r\left(2 - &#123;3\over 14&#125;\right)\\
                                   \approx&amp;\,\,\,\dn&#123;1.3&#125;\up&#123;1.3&#125; r\left(2 - &#123;3\over 15&#125;\right)\\
                                         =&amp;\,\,\,\dn&#123;1.3&#125;\up&#123;1.3&#125; r\left(2 - &#123;1\over 5&#125;\right)\\
                                         =&amp;\,\,\,\dn&#123;1.3&#125;\up&#123;1.3&#125; r(2 - 0.2)\\
                                         =&amp;\,\,\,\dn&#123;0.0&#125;\up&#123;1.3&#125; 1.8r
              \end&#123;align*&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                leading to an approximation of
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank_decimal_approximation_.wly:33:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \approx 180\te&#123;m&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank_decimal_approximation_.wly:38:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $r = 100$
                </Math>
                m.
              </NoBreak>
              {" "}
              For a coarser approach, one can even use
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \eta \approx &#123;10.5\over 7&#125; = 1.5
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which gives
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank_decimal_approximation_.wly:43:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              1 + \eta/2 \approx 1.75
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and a final approximation of
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank_decimal_approximation_.wly:47:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \approx 175\te&#123;m&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_gas_tank_decimal_approximation_.wly:51:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $r = 100$
                </Math>
                m.
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
                  The two approximations given produce
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_gas_tank_decimal_approximation_.wly:55:13
                  </span>
                </span>
                {" "}
                {" "}
                {" "}{" "}
                <NoBreak>
                  1
                  <Math>
                    $\%$
                  </Math>
                </NoBreak>
                {" "} and {" "}
                <NoBreak>
                  2
                  <Math>
                    $\%$
                  </Math>
                </NoBreak>
                {" "} of error, respectively, 
                or {" "}
                <Math>
                  $\approx 0.8\%$
                </Math>
                {" "} and {" "}
                <NoBreak>
                  <Math>
                    $\approx 1.9\%$
                  </Math>
                  ,
                </NoBreak>
                {" "} 
                more exactly, respectively. (For the
                second approximation,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                1.5
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  is nearly {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_gas_tank_decimal_approximation_.wly:65:13
                  </span>
                </span>
                <NoBreak>
                  5
                  <Math>
                    $\%$
                  </Math>
                </NoBreak>
                {" "} less than {" "}
                <Math>
                  $\eta/2$
                </Math>
                {" "} right
                off the bat, but the fraction represented
                by this error is diluted by the fact that
                we add 1.)
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
                  The true value is {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_gas_tank_decimal_approximation_.wly:72:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $178.5$
                  </Math>
                  m,
                </NoBreak>
                {" "} as
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \eta/2 = 0.785\dots
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  and some, as
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_gas_tank_decimal_approximation_.wly:78:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \eta = 1.570\dots
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  and some. (Note that half of {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_gas_tank_decimal_approximation_.wly:84:13
                  </span>
                </span>
                <Math>
                  $0.07$
                </Math>
                {" "} is {" "}
                <NoBreak>
                  <Math>
                    $0.035$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                and that {" "}
                <NoBreak>
                  <Math>
                    $0.75 + 0.035 = 0.785$
                  </Math>
                  .)
                </NoBreak>
                {" "} (PS: In fact,
                doing the division
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                1.57/2
                $$
                <MathJaxSvgExportTooltip />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  “by head” constitutes another perfectly valid
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_gas_tank_decimal_approximation_.wly:92:13
                  </span>
                </span>
                {" "}
                {" "}
                method of approximation, if you can remember
                that {" "}
                <NoBreak>
                  <Math>
                    $\eta = 1.570\dots$
                  </Math>
                  .)
                </NoBreak>
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={37}>
          <ExerciseStatement id="_188_h.a.i_">
            <OuterP>
              <b>
                Exercise 37.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                A ship travels from the South pole of a watery
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_a_ship_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              copy of the Earth to the North pole while maintaining
              a constant compass bearing of {" "}
              <Math>
                $5^\circ$
              </Math>
              {" "} North of East.
              (See Fig.) What is the length of the curve traced by the
              ship?
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/NUnQ.svg"
              local_url="./images/svg_ch5_ex_spiral_sphere.svg"
              intrinsicWidth={620}
              intrinsicHeight={400}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Imagine that a butterfly that only flies by
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_a_ship_.wly:14:9
                </span>
              </span>
              {" "}
              {" "}
              small steps East and North, alternately, follows 
              with the boat:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/tjm5.svg"
              local_url="./images/svg_ch5_ex_butterfly_fig.svg"
              intrinsicWidth={500}
              intrinsicHeight={270}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (We replace
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_a_ship_.wly:21:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Huge 5^\circ
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_a_ship_.wly:27:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Huge \alpha
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                radians for more generality, that will make the
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_a_ship_.wly:33:9
                </span>
              </span>
              {" "}
              {" "}
              problem no more nor less easy.) The total of all the
              small northward legs that the butterfly travels is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              20004\,\te&#123;km&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                or one-half the so-called {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_a_ship_.wly:41:9
                </span>
              </span>
              <i>
                meridional circumference
              </i>
              {" "}
              of the Earth. But the total distance traveled
              by the ship is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Huge \csc(\alpha)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                times the sum of all the butterly's northward legs:
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_a_ship_.wly:49:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/u2Fw.svg"
              local_url="./images/svg_ch5_ex_butterfly_fig_with_csc.svg"
              intrinsicWidth={500}
              intrinsicHeight={270}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The total distance traveled by the ship
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_a_ship_.wly:54:9
                </span>
              </span>
              {" "}
              {" "}
              is therefore
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 20004\,\te&#123;km&#125;\cdot \csc \alpha = &#123;20004\,\te&#123;km&#125; \over \sin \alpha&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                that comes out to
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_a_ship_.wly:61:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \sim 229520\,\te&#123;km&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                with {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_a_ship_.wly:67:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\alpha = 5^\circ$
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
                  In reality the butterly's triangle is
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_a_ship_.wly:71:13
                  </span>
                </span>
                {" "}
                {" "}
                drawn on a spherical shell and it is
                only because the triangle is very small
                compared to the radius of the shell that
                it resembles an ordinary triangle, without
                quite being an ordinary triangle. But what
                is important is that the {" "}
                <i>
                  ratios
                </i>
                {" "} of the
                lengths of the butterly triangle approach
                those of an ordinary right triangle of
                angle {" "}
                <Math>
                  $\alpha$
                </Math>
                {" "} as we make the butterfly's
                triangle sufficiently small. 
                (Which is believable.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={38}>
          <ExerciseStatement id="_189_h.a.i_">
            <OuterP>
              <b>
                Exercise 38.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                In the drawing below, at what coordinates,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_secant_cosecant_intersections_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              expressed as a function of {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ,
              </NoBreak>
              {" "}
              does the tangent to the circle
              intersect the {" "}
              <Math>
                $x$
              </Math>
              {" "} and {" "}
              <Math>
                $y$
              </Math>
              {" "} axes?
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/AdMn.svg"
              local_url="./images/svg_ch5_ex_theta_tangent.svg"
              intrinsicWidth={550}
              intrinsicHeight={340}
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Start by assuming
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_secant_cosecant_intersections_.wly:14:9
                </span>
              </span>
              {" "}
              {" "}
              that {" "}
              <Math>
                $\theta$
              </Math>
              {" "} lies in
              the first quadrant, in
              which case both coordinates are nonnegative, and, more specifically, 
              are equal to the two 
              purple lengths below:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/nF2I.svg"
              local_url="./images/svg_ch5_ex_theta_tangent_Q1.svg"
              intrinsicWidth={400}
              intrinsicHeight={190}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Regarding this diagram, note that:
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_secant_cosecant_intersections_.wly:24:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <List style="gap:1em">
              <Item>
                <p>
                  <span class="t-3003-c">
                    we have already “used up” the fact that
                    <span class="t-3003">
                      ./src/content/ch9a_trig2/trig2^exercises/_secant_cosecant_intersections_.wly:29:13
                    </span>
                  </span>
                  {" "}
                  {" "}
                  the radius of the circle is {" "}
                  <Math>
                    $1$
                  </Math>
                  <span class="t-3003-c">
                    {" "} by
                    <span class="t-3003">
                      ./src/content/ch9a_trig2/trig2^exercises/_secant_cosecant_intersections_.wly:30:44
                    </span>
                  </span>
                  {" "}
                  {" "}
                  making the dropped height (which used to
                  be a radius) length {" "}
                  <NoBreak>
                    <Math>
                      $1$
                    </Math>
                    <span class="t-3003-c">
                      ;
                      <span class="t-3003">
                        ./src/content/ch9a_trig2/trig2^exercises/_secant_cosecant_intersections_.wly:32:36
                      </span>
                    </span>
                  </NoBreak>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    we use a “the complement of my complement
                    <span class="t-3003">
                      ./src/content/ch9a_trig2/trig2^exercises/_secant_cosecant_intersections_.wly:34:13
                    </span>
                  </span>
                  {" "}
                  {" "}
                  is myself”-type argument to deduce that the
                  upper left angle is {" "}
                  <NoBreak>
                    <Math>
                      $\theta$
                    </Math>
                    <span class="t-3003-c">
                      ,
                      <span class="t-3003">
                        ./src/content/ch9a_trig2/trig2^exercises/_secant_cosecant_intersections_.wly:36:41
                      </span>
                    </span>
                  </NoBreak>
                  <span class="t-3003-c">
                    {" "} as well
                    <span class="t-3003">
                      ./src/content/ch9a_trig2/trig2^exercises/_secant_cosecant_intersections_.wly:36:41
                    </span>
                  </span>
                  {" "}
                  {" "}
                  (cf. {" "}
                  <InChapterLink
                    href="#_182_h.a.i_"
                    class="in-chapter-link"
                  >
                    Exercise 31
                  </InChapterLink>
                  <span class="t-3003-c">
                    &#8288;,
                    <span class="t-3003">
                      ./src/content/ch9a_trig2/trig2^exercises/_secant_cosecant_intersections_.wly:37:13
                    </span>
                  </span>
                  {" "}
                  {" "}
                  {" "}{" "}
                  <InChapterLink
                    href="#_183_h.a.i_"
                    class="in-chapter-link"
                  >
                    Exercise 32
                  </InChapterLink>
                  <span class="t-3003-c">
                    &#8288;).
                    <span class="t-3003">
                      ./src/content/ch9a_trig2/trig2^exercises/_secant_cosecant_intersections_.wly:38:13
                    </span>
                  </span>
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Because {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_secant_cosecant_intersections_.wly:40:9
                </span>
              </span>
              <Math>
                $1 \cdot \sec(\theta) = \sec(\theta)$
              </Math>
              {" "} the
              bottom length is {" "}
              <Math>
                $\sec(\theta)$
              </Math>
              {" "} while the vertical
              length is {" "}
              <NoBreak>
                <Math>
                  $1\cdot \csc(\theta) = \csc(\theta)$
                </Math>
                ,
              </NoBreak>
              {" "} similarly:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/wgBS.svg"
              local_url="./images/svg_ch5_ex_theta_tangent_Q1_first_solve.svg"
              intrinsicWidth={400}
              intrinsicHeight={190}
            />
            <Pause />
            <Image
              src="/build-img/svgo-svg/D8sZ.svg"
              local_url="./images/svg_ch5_ex_theta_tangent_Q1_second_solve.svg"
              intrinsicWidth={400}
              intrinsicHeight={200}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...i.e., in the first quadrant, at least, the
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_secant_cosecant_intersections_.wly:50:9
                </span>
              </span>
              {" "}
              {" "}
              coordinates are {" "}
              <Math>
                $\sec(\theta)$
              </Math>
              {" "} and $\csc( theta):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/i6Bn.svg"
              local_url="./images/svg_ch5_ex_theta_tangent_Q1_with_answer.svg"
              intrinsicWidth={550}
              intrinsicHeight={340}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                For the other quadrants we can reason by
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_secant_cosecant_intersections_.wly:56:9
                </span>
              </span>
              {" "}
              {" "}
              symmetry with the first quadrant:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/TRpy.svg"
              local_url="./images/svg_ch5_ex_theta_tangent_all_quadrants.svg"
              intrinsicWidth={660}
              intrinsicHeight={530}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                In more detail, the product of the two coordinates
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_secant_cosecant_intersections_.wly:62:9
                </span>
              </span>
              {" "}
              {" "}
              marked by purple arrows is the same in all four
              quadrants, because “minus times minus is plus”; but
              in first quadrant, the product is {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} because
              we know the product takes the form {" "}
              <Math>
                $\cos\theta\cdot\sec\theta$
              </Math>
              {" "}
              in that quadrant;
              therefore the product is {" "}
              <Math>
                $1$
              </Math>
              {" "} in {" "}
              <i>
                all
              </i>
              {" "} quadrants; but
              the coordinate marked by the inside purple arrow is
              {" "}
              <Math>
                $\cos\theta$
              </Math>
              {" "} in all quadrants; therefore, lastly,
              the coordinate marked by the {" "}
              <i>
                outside
              </i>
              {" "} purple arrow
              is {" "}
              <Math>
                $\sec\theta$
              </Math>
              {" "} in all quadrants, since {" "}
              <Math>
                $\sec\theta$
              </Math>
              {" "}
              is the unique number whose product with {" "}
              <Math>
                $\cos\theta$
              </Math>
              {" "}
              is {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ;
              </NoBreak>
              {" "} similarly the inside orange arrow marks coordinate
              {" "}
              <Math>
                $\sin\theta$
              </Math>
              {" "} is all quadrants, so the outside orange
              arrow (by similar reasoning) has coordinate {" "}
              <Math>
                $\csc\theta$
              </Math>
              {" "}
              in all quadrants, QED. (I.e., the grand conclusion is that the
              two coordinates are
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Huge \sec\theta
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for the {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_secant_cosecant_intersections_.wly:84:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -axis
              </NoBreak>
              {" "} intersection, and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Huge \csc\theta
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for the {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_secant_cosecant_intersections_.wly:90:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -axis
              </NoBreak>
              {" "} intersection, no matter the quadrant.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={39}>
          <ExerciseStatement id="_190_h.a.i_">
            <OuterP>
              <b>
                Exercise 39.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Stipulating
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_tan_cot_on_unit_circle_.wly:4:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \,\tan\theta = &#123;\sin\theta\over\cos\theta&#125;,
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \cot\theta = &#123;\cos\theta\over\sin\theta&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as definitions of {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_tan_cot_on_unit_circle_.wly:13:5
                </span>
              </span>
              {" "}
              {" "}
              tan {" "}
              <i>
                &amp;
              </i>
              {" "} cot,
              where can we find {" "}
              <Math>
                $\tan(\theta)$
              </Math>
              {" "}
              {" "}
              <i>
                &amp;
              </i>
              {" "} {" "}
              <Math>
                $\cot(\theta)$
              </Math>
              {" "} as geometric quantities related to the unit circle,
              in all quadrants?
              (I.e., find “unit circle interpretations”
              of 
              tan {" "}
              <i>
                &amp;
              </i>
              {" "} cot.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Note that
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_tan_cot_on_unit_circle_.wly:24:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\sin\theta\over\cos\theta&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                can be understood as {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_tan_cot_on_unit_circle_.wly:30:9
                </span>
              </span>
              {" "}
              {" "}
              a fraction of the form “rise over run”,
              i.e., the slope of the line from {" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "} to {" "}
              <NoBreak>
                <Math>
                  $(\cos\theta, \sin\theta)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/d3kY.svg"
              local_url="./images/e5_tan_cot_unit_circle_1.svg"
              intrinsicWidth={660}
              intrinsicHeight={360}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                However, one way to “materialize” a slope {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_tan_cot_on_unit_circle_.wly:37:9
                </span>
              </span>
              {" "}
              {" "}
              as a displacement
              is to scale the triangle “rise over run” until
              the “run” becomes {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} 
              whereby the rise becomes equal to the slope,
              leading to this
              construction of {" "}
              <NoBreak>
                <Math>
                  $\tan\theta$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/wJEo.svg"
              style="margin-bottom:-0.5em"
              local_url="./images/e5_tan_cot_unit_circle_2.svg"
              intrinsicWidth={980}
              intrinsicHeight={450}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                This also works if {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_tan_cot_on_unit_circle_.wly:49:9
                </span>
              </span>
              <Math>
                $\theta$
              </Math>
              {" "} is in other
              quadrants, with a negative scaling factor if
              necessary:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/VCX7.svg"
              style="margin-bottom:-0.5em"
              local_url="./images/e5_tan_cot_unit_circle_3.svg"
              intrinsicWidth={980}
              intrinsicHeight={384}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Symmetrically, the ratio
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_tan_cot_on_unit_circle_.wly:57:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cot\theta = &#123;\cos\theta \over \sin\theta&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                has the form “run over rise”, and can
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_tan_cot_on_unit_circle_.wly:63:9
                </span>
              </span>
              {" "}
              {" "}
              be evaluated by scaling the same triangle
              until “rise” becomes {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} in which case the
              corresponding (scaled) “run” becomes the value
              of {" "}
              <NoBreak>
                <Math>
                  $\cot\theta$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/qnKn.svg"
              local_url="./images/e5_tan_cot_unit_circle_4.svg"
              intrinsicWidth={660}
              intrinsicHeight={440}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Overall,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_tan_cot_on_unit_circle_.wly:72:9
                </span>
              </span>
              {" "}
              {" "}
              to give self-contained verbalizations of these
              constructions, we have...
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <Math>
                $\tan\theta$
              </Math>
              <span class="t-3003-c">
                {" "} is the {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_tan_cot_on_unit_circle_.wly:80:23
                </span>
              </span>
              <NoBreak>
                <Math>
                  $y$
                </Math>
                <span class="t-3003-c">
                  -coordinate
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_tan_cot_on_unit_circle_.wly:80:34
                  </span>
                </span>
              </NoBreak>
              <span class="t-3003-c">
                {" "} of the
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_tan_cot_on_unit_circle_.wly:80:34
                </span>
              </span>
              {" "}
              {" "}
              intersection of {" "}
              <Math>
                $x = 1$
              </Math>
              <span class="t-3003-c">
                {" "} with the line through
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_tan_cot_on_unit_circle_.wly:81:32
                </span>
              </span>
              {" "}
              {" "}
              the origin and {" "}
              <Math>
                $(\cos\theta, \sin\theta)$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...for {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_tan_cot_on_unit_circle_.wly:84:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\tan\theta$
                </Math>
                ,
              </NoBreak>
              {" "} and...
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <Math>
                $\cot\theta$
              </Math>
              <span class="t-3003-c">
                {" "} is the {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_tan_cot_on_unit_circle_.wly:90:23
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x$
                </Math>
                <span class="t-3003-c">
                  -coordinate
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_tan_cot_on_unit_circle_.wly:90:34
                  </span>
                </span>
              </NoBreak>
              <span class="t-3003-c">
                {" "} of the
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_tan_cot_on_unit_circle_.wly:90:34
                </span>
              </span>
              {" "}
              {" "}
              intersection of {" "}
              <Math>
                $y = 1$
              </Math>
              <span class="t-3003-c">
                {" "} with the line through the origin
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_tan_cot_on_unit_circle_.wly:91:32
                </span>
              </span>
              {" "}
              {" "}
              and {" "}
              <Math>
                $(\cos\theta, \sin\theta)$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...for {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_tan_cot_on_unit_circle_.wly:94:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\cot\theta$
                </Math>
                !
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={40}>
          <ExerciseStatement id="_191_h.a.i_">
            <OuterP>
              <b>
                Exercise 40.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                If {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:4:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} and a value {" "}
              <Math>
                $A &gt; 1$
              </Math>
              {" "} are marked
              on a line...
            </OuterP>
            <Pause />
            <Image
              style="margin-top:0.8em;margin-bottom:0.8em;"
              src="/build-img/svgo-svg/j4h0.svg"
              local_url="./images/e5_line_with_0_1_and_A.svg"
              intrinsicWidth={450}
              intrinsicHeight={40}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...how can we find the placement of...
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:11:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              1 / A
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...on the same line by a purely geometric construction?
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:17:5
                </span>
              </span>
              {" "}
              {" "}
              What about if {" "}
              <NoBreak>
                <Math>
                  $0 &lt; A &lt; 1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $-1 &lt; A &lt; 0$
                </Math>
                ,
              </NoBreak>
              {" "} etc?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Solution 1.
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:22:10
                  </span>
                </span>
              </i>
              {" "}
              The idea is to find
              an angle {" "}
              <Math>
                $\theta$
              </Math>
              {" "} such that {" "}
              <NoBreak>
                <Math>
                  $A = \sec(\theta)$
                </Math>
                ,
              </NoBreak>
              {" "}
              if {" "}
              <NoBreak>
                <Math>
                  $|A| &gt; 1$
                </Math>
                ,
              </NoBreak>
              {" "}
              or symmetrically, such that {" "}
              <NoBreak>
                <Math>
                  $A = \cos(\theta)$
                </Math>
                ,
              </NoBreak>
              {" "} if {" "}
              <NoBreak>
                <Math>
                  $|A| &lt; 1$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/kxTm.svg"
              local_url="./images/e5_line_with_0_1_and_A_and_secant.svg"
              intrinsicWidth={485}
              intrinsicHeight={225}
            />
            <Pause />
            <Image
              src="/build-img/svgo-svg/ryx0.svg"
              local_url="./images/e5_line_with_0_1_and_A_and_cos.svg"
              intrinsicWidth={485}
              intrinsicHeight={225}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (Cf. {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:34:9
                </span>
              </span>
              <InChapterLink
                href="#_189_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 38
              </InChapterLink>
              &#8288;.)
              We now proceed with
              step-by-step
              compass-and-ruler 
              instructions for the two cases:
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                ~ ~ case {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:40:11
                </span>
              </span>
              <Math>
                $|A| &gt; 1$
              </Math>
              <span class="t-3003-c">
                {" "} ~ ~
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:40:29
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Step 1.
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:42:10
                  </span>
                </span>
              </i>
              {" "} Find the midpoint between {" "}
              <Math>
                $0$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ;
              </NoBreak>
              {" "} for
              this, the procedure is to use two circles of equal radius:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/JM7s.svg"
              local_url="./images/e5_line_with_0_1_and_A_Agt1_step1.svg"
              intrinsicWidth={485}
              intrinsicHeight={540}
            />
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Step 2.
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:48:10
                  </span>
                </span>
              </i>
              {" "} Draw a semicircle of radius {" "}
              <Math>
                $A/2$
              </Math>
              {" "} whose
              center is that midpoint:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/eQmC.svg"
              local_url="./images/e5_line_with_0_1_and_A_Agt1_step2.svg"
              intrinsicWidth={485}
              intrinsicHeight={330}
            />
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Step 3.
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:54:10
                  </span>
                </span>
              </i>
              {" "} Draw a circle of radius {" "}
              <Math>
                $1$
              </Math>
              {" "} whose center
              is {" "}
              <NoBreak>
                <Math>
                  $(0, 0)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/emr1.svg"
              local_url="./images/e5_line_with_0_1_and_A_Agt1_step3.svg"
              intrinsicWidth={485}
              intrinsicHeight={330}
            />
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Step 4.
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:60:10
                  </span>
                </span>
              </i>
              {" "} Draw a line through the intersections
              of the two circles to find the position of {" "}
              <NoBreak>
                <Math>
                  $1/A$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/XE7K.svg"
              local_url="./images/e5_line_with_0_1_and_A_Agt1_step4.svg"
              intrinsicWidth={485}
              intrinsicHeight={330}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (The procedure works because
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:66:9
                </span>
              </span>
              {" "}
              {" "}
              this triangle...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/KO2V.svg"
              local_url="./images/e5_line_with_0_1_and_A_Agt1_step4_with_triangle.svg"
              intrinsicWidth={485}
              intrinsicHeight={330}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...is actually right-angled at its upper corner
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:72:9
                </span>
              </span>
              {" "}
              {" "}
              by 
              the Peloponnesian circle theorem.
              This implies that the line from {" "}
              <Math>
                $(A, 0)$
              </Math>
              {" "} to that
              corner is tangent to the circle of radius {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} which is
              what we want/need.)
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gathered&#125;
              x = 1 \\
              y = 1
              \end&#123;gathered&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                ~ ~ case {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:86:11
                </span>
              </span>
              <Math>
                $|A| &lt; 1$
              </Math>
              <span class="t-3003-c">
                {" "} ~ ~
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:86:29
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Step 1.
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:88:10
                  </span>
                </span>
              </i>
              {" "} 
              With {" "}
              <NoBreak>
                <Math>
                  $|A| &lt; 1$
                </Math>
                ,
              </NoBreak>
              {" "} start by
              marking points at equal distance to {" "}
              <Math>
                $A$
              </Math>
              {" "} 
              by drawing a circle 
              centered at {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "}
              of any radius:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/RGWo.svg"
              local_url="./images/e5_line_with_0_1_and_A_Alt1_step1_v3.svg"
              intrinsicWidth={485}
              intrinsicHeight={121}
            />
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Step 2.
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:98:10
                  </span>
                </span>
              </i>
              {" "} Use these points to draw a perpendicular 
              through {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} similarly to the first step of
              the case {" "}
              <NoBreak>
                <Math>
                  $|A| &gt; 1$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/4MXO.svg"
              local_url="./images/e5_line_with_0_1_and_A_Alt1_step2_v3.svg"
              intrinsicWidth={485}
              intrinsicHeight={190}
            />
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Step 3.
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:105:10
                  </span>
                </span>
              </i>
              {" "} 
              Draw a circle of radius {" "}
              <Math>
                $1$
              </Math>
              {" "} centered at {" "}
              <NoBreak>
                <Math>
                  $(0, 0)$
                </Math>
                ,
              </NoBreak>
              {" "}
              and draw a line through {" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "} and the upper
              intersection of the circle with the perpendicular:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/FPj6.svg"
              local_url="./images/e5_line_with_0_1_and_A_Alt1_step4_v3.svg"
              intrinsicWidth={485}
              intrinsicHeight={210}
            />
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Step 4.
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:113:10
                  </span>
                </span>
              </i>
              {" "} 
              Construct a perpendicular to this line
              at the point of intersection by repeating the
              process of the first two steps; 
              the intersection of that line with the
              main axis is {" "}
              <NoBreak>
                <Math>
                  $1/A$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/hKBQ.svg"
              local_url="./images/e5_line_with_0_1_and_A_Alt1_step5_v3_smaller.svg"
              intrinsicWidth={485}
              intrinsicHeight={245}
            />
            <Pause />
            <StarDivider />
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Solution 2.
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:125:10
                  </span>
                </span>
              </i>
              {" "} Note that for an angle
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \theta
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                the values
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:131:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \tan\theta
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:131:34
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cot\theta
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                can be
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:131:53
                </span>
              </span>
              {" "}
              {" "}
              found here and here, by {" "}
              <InChapterLink
                href="#_190_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 39
              </InChapterLink>
              {" "}
              (this figure is just a recap of {" "}
              <InChapterLink
                href="#_190_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 39
              </InChapterLink>
              &#8288;):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/SB49.svg"
              local_url="./images/e5_line_with_0_1_and_A_tancot_without_A.svg"
              intrinsicWidth={640}
              intrinsicHeight={229}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                However,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:138:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \,\cot\theta = 1/\tan\theta,
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                so if {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:144:9
                </span>
              </span>
              <Math>
                $\tan\theta = A$
              </Math>
              {" "} then {" "}
              <NoBreak>
                <Math>
                  $\cot\theta = 1/A$
                </Math>
                ,
              </NoBreak>
              {" "} which
              suggests this geometric construction
              of {" "}
              <NoBreak>
                <Math>
                  $1/A$
                </Math>
                ,
              </NoBreak>
              {" "} shown here for {" "}
              <Math>
                $0 &lt; A &lt; 1$
              </Math>
              {" "} (though it works for all {" "}
              <NoBreak>
                <Math>
                  $A \in \rr$
                </Math>
                ):
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/vM7r.svg"
              local_url="./images/e5_line_with_0_1_and_A_tancot_idea.svg"
              intrinsicWidth={640}
              intrinsicHeight={229}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Or, symmetrically, we can treat {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:151:9
                </span>
              </span>
              <Math>
                $A$
              </Math>
              {" "} as {" "}
              <NoBreak>
                <Math>
                  $\cot\theta$
                </Math>
                ,
              </NoBreak>
              {" "} from
              which {" "}
              <Math>
                $\tan\theta$
              </Math>
              {" "} becomes {" "}
              <NoBreak>
                <Math>
                  $1/A$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/5-80.svg"
              local_url="./images/e5_line_with_0_1_and_A_tancot_idea_symmetric.svg"
              intrinsicWidth={640}
              intrinsicHeight={520}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The second diagram
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:188:9
                </span>
              </span>
              {" "}
              {" "}
              can also
              be understood in terms of “materializing” the slope
              of a line of slope {" "}
              <Math>
                $1/A$
              </Math>
              {" "} by scaling a “rise over run”
              triangle until the run hits {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/xbp-.svg"
              local_url="./images/e5_line_with_0_1_and_A_tancot_idea_symmetric_slope_explained.svg"
              intrinsicWidth={640}
              intrinsicHeight={610}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...like so; {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:197:9
                </span>
              </span>
              {" "}
              {" "}
              and symmetrically, the first diagram can 
              be understood in terms of scaling a “rise over run”
              triangle until the {" "}
              <i>
                rise
              </i>
              {" "} hits {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/YikH.svg"
              local_url="./images/e5_line_with_0_1_and_A_tancot_idea_slope_explained.svg"
              intrinsicWidth={750}
              intrinsicHeight={460}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...like so, since {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:206:9
                </span>
              </span>
              <NoBreak>
                “
                <Math>
                  $\te&#123;run&#125; = &#123;\te&#123;rise&#125;\over \te&#123;slope&#125;&#125;$
                </Math>
                ”
              </NoBreak>
              {" "}
              implies {" "}
              <NoBreak>
                “
                <Math>
                  $\te&#123;run&#125; = &#123;1\over \te&#123;slope&#125;&#125;$
                </Math>
                ”
              </NoBreak>
              {" "} by the
              time ‘rise’ hits {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} implying {" "}
              <NoBreak>
                “
                <Math>
                  $\te&#123;run&#125; = &#123;1\over A&#125;$
                </Math>
                ”,
              </NoBreak>
              {" "} since the 
              slope is {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Complete compass-and-ruler constructions can
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:211:9
                </span>
              </span>
              {" "}
              {" "}
              easily be reconstituted from the above diagrams,
              and we hereby declare the second solution finished!!
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={41}>
          <ExerciseStatement id="_192_h.a.i_">
            <OuterP>
              <b>
                Exercise 41.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Given a number line with {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_x_square_x_cube_construction_.wly:4:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $1$
              </Math>
              {" "}
              and a value {" "}
              <Math>
                $A &gt; 0$
              </Math>
              {" "} indicated,
              how can we construct the values {" "}
              <Math>
                $A^2$
              </Math>
              {" "} and {" "}
              <Math>
                $A^3$
              </Math>
              {" "}
              as lengths, using only ruler and compass?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Solution 1.
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_x_square_x_cube_construction_.wly:11:10
                  </span>
                </span>
              </i>
              {" "} If {" "}
              <NoBreak>
                <Math>
                  $A &gt; 1$
                </Math>
                ,
              </NoBreak>
              {" "}
              start by constructing a perpendicular to the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis
              (“the number line” = “the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis”) through {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/MGoY.svg"
              local_url="./images/e5_x_square_x_cube_construction_1.svg"
              intrinsicWidth={485}
              intrinsicHeight={290}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Take the intersection of this line with a
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_x_square_x_cube_construction_.wly:18:9
                </span>
              </span>
              {" "}
              {" "}
              circle of center {" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "} of radius {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/RxWQ.svg"
              local_url="./images/e5_x_square_x_cube_construction_2_38deg.svg"
              intrinsicWidth={485}
              intrinsicHeight={205}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                This gives us an angle {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_x_square_x_cube_construction_.wly:24:9
                </span>
              </span>
              <Math>
                $\theta$
              </Math>
              {" "} such that {" "}
              <NoBreak>
                <Math>
                  $\sec\theta = A$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/g3LH.svg"
              local_url="./images/e5_x_square_x_cube_construction_3.svg"
              intrinsicWidth={485}
              intrinsicHeight={205}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Now apply one of the “powers of
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_x_square_x_cube_construction_.wly:29:9
                </span>
              </span>
              {" "}
              {" "}
              secant” constructions to obtain powers of {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "}
              for example either of:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/K2J8.svg"
              local_url="./images/e5_x_square_x_cube_construction_4.svg"
              intrinsicWidth={485}
              intrinsicHeight={400}
            />
            <Pause />
            <Image
              src="/build-img/svgo-svg/Ubox.svg"
              style="margin-bottom:0.5em;"
              local_url="./images/e5_x_square_x_cube_construction_5.svg"
              intrinsicWidth={485}
              intrinsicHeight={390}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (Either of these constructiongs requires constructing
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_x_square_x_cube_construction_.wly:40:9
                </span>
              </span>
              {" "}
              {" "}
              perpendiculars, but we know how to do that.)
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                If {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_x_square_x_cube_construction_.wly:43:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $A &lt; 1$
                </Math>
                ,
              </NoBreak>
              {" "} on the other hand,
              do the same initial steps but with {" "}
              <NoBreak>
                ‘
                <Math>
                  $1$
                </Math>
                ’
              </NoBreak>
              {" "} and {" "}
              <NoBreak>
                ‘
                <Math>
                  $A$
                </Math>
                ’
              </NoBreak>
              {" "}
              reversed, resulting in an angle {" "}
              <Math>
                $\theta$
              </Math>
              {" "} for
              which {" "}
              <NoBreak>
                <Math>
                  $A = \cos\theta$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/9g0C.svg"
              local_url="./images/e5_x_square_x_cube_construction_7.svg"
              intrinsicWidth={485}
              intrinsicHeight={180}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                We can then do a “powers of cosine” construction,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_x_square_x_cube_construction_.wly:51:9
                </span>
              </span>
              {" "}
              {" "}
              that is symmetric to powers of secant, to
              find powers of {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} for example:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/6l6A.svg"
              local_url="./images/e5_x_square_x_cube_construction_8.svg"
              intrinsicWidth={485}
              intrinsicHeight={243}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Though in this case, it bears discussing how we
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_x_square_x_cube_construction_.wly:58:9
                </span>
              </span>
              {" "}
              {" "}
              construct, say, this perpendicular:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/1-DQ.svg"
              local_url="./images/e5_x_square_x_cube_construction_9.svg"
              intrinsicWidth={485}
              intrinsicHeight={243}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...because this perpendicular must
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_x_square_x_cube_construction_.wly:64:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                arrive
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_x_square_x_cube_construction_.wly:66:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                perpendicularly at a given line, not
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_x_square_x_cube_construction_.wly:68:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                depart
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_x_square_x_cube_construction_.wly:70:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                perpendicularly from a given line. {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_x_square_x_cube_construction_.wly:72:9
                </span>
              </span>
              {" "}
              {" "}
              (In the order in which the construction unfolds,
              this perpendicular “originates” from its upper end,
              a situation we have not encountered yet.)
              In this case, the procedure is to draw a circle,
              in orange below, whose center is the 
              starting point
              of the
              perpendicular, and that crosses the line-to-which-we-must-be-perpendicular
              in two places:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/FFkM.svg"
              local_url="./images/e5_x_square_x_cube_construction_10.svg"
              intrinsicWidth={485}
              intrinsicHeight={162}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Then use those crossings as the
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_x_square_x_cube_construction_.wly:86:9
                </span>
              </span>
              {" "}
              {" "}
              centers of two more circles of equal radius...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/9C_S.svg"
              local_url="./images/e5_x_square_x_cube_construction_11.svg"
              intrinsicWidth={485}
              intrinsicHeight={193}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...whose intersection gives us a second point
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_x_square_x_cube_construction_.wly:92:9
                </span>
              </span>
              {" "}
              {" "}
              (even two more points, if we use a radius
              different from the first orange circle), and the means to draw
              the perpendicular itself.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Solution 2.
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_x_square_x_cube_construction_.wly:99:10
                  </span>
                </span>
              </i>
              {" "} Regardless of whether {" "}
              <Math>
                $A &lt; 1$
              </Math>
              {" "} or {" "}
              <NoBreak>
                <Math>
                  $A &gt; 1$
                </Math>
                ,
              </NoBreak>
              {" "}
              draw a perpendicular to the number line through {" "}
              <Math>
                $x = 1$
              </Math>
              {" "}
              and use a compass to report {" "}
              <Math>
                $A$
              </Math>
              {" "} onto this line
              (here with {" "}
              <NoBreak>
                <Math>
                  $A &lt; 1$
                </Math>
                ):
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/shlb.svg"
              local_url="./images/e5_x_square_x_cube_construction_13.svg"
              intrinsicWidth={485}
              intrinsicHeight={230}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                This defines a an angle {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_x_square_x_cube_construction_.wly:107:9
                </span>
              </span>
              <Math>
                $\theta$
              </Math>
              {" "} such that {" "}
              <NoBreak>
                <Math>
                  $A = \tan\theta$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/wSrB.svg"
              local_url="./images/e5_x_square_x_cube_construction_14.svg"
              intrinsicWidth={485}
              intrinsicHeight={205}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Then we can use any construction for powers of
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_x_square_x_cube_construction_.wly:112:9
                </span>
              </span>
              {" "}
              {" "}
              tan, for example this spiral construction:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/PFh1.svg"
              local_url="./images/e5_x_square_x_cube_construction_15.svg"
              intrinsicWidth={485}
              intrinsicHeight={275}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (Again, constructing the spiral means constructing
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_x_square_x_cube_construction_.wly:118:9
                </span>
              </span>
              {" "}
              {" "}
              a sequence of perpendiculars, but we can do that!)
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
                  If {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_x_square_x_cube_construction_.wly:123:13
                  </span>
                </span>
                <Math>
                  $A &lt; 1$
                </Math>
                {" "} there is a clever construction,
                variant of solution 1, that one can use to
                construct powers of {" "}
                <Math>
                  $A$
                </Math>
                {" "} using only one compass
                stroke and one ruler stroke per power of {" "}
                <Math>
                  $A$
                </Math>
                {" "}
                (after setting up the angle {" "}
                <NoBreak>
                  <Math>
                    $\theta$
                  </Math>
                  ):
                </NoBreak>
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/XL-k.svg"
                local_url="./images/e5_x_square_x_cube_construction_16_v6.svg"
                intrinsicWidth={485}
                intrinsicHeight={252}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  (No such thing exists for {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_x_square_x_cube_construction_.wly:132:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $A &gt; 1$
                  </Math>
                  .)
                </NoBreak>
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={42}>
          <ExerciseStatement id="_193_h.a.i_">
            <OuterP>
              <b>
                Exercise 42.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Given two lengths {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:4:5
                </span>
              </span>
              <Math>
                $A$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "} how can
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;AB&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                be constructed using
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:8:5
                </span>
              </span>
              {" "}
              {" "}
              only ruler and compass?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                A preliminary “arithmetic” observation is that
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:13:9
                </span>
              </span>
              {" "}
              {" "}
              there is a common multiplicative
              factor
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \gamma
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                separating {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:15:26
                </span>
              </span>
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} from {" "}
              <NoBreak>
                <Math>
                  $\sqrt&#123;AB&#125;$
                </Math>
                ,
              </NoBreak>
              {" "}
              from {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/3JBw.svg"
              local_url="./images/e5_sqrt_AB_construction_1_v2.svg"
              intrinsicWidth={450}
              intrinsicHeight={105}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The proof is that
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:21:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\sqrt&#123;AB&#125;\over A&#125; = &#123;B\over\sqrt&#123;AB&#125;&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is equivalent to
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:27:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (\sqrt&#123;AB&#125;)^2 = AB
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which is true
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:33:9
                </span>
              </span>
              {" "}
              {" "}
              by definition of {" "}
              <NoBreak>
                <Math>
                  $\sqrt&#123;AB&#125;$
                </Math>
                —or
              </NoBreak>
              {" "} a second proof
              (we can't help ourselves) is that...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\sqrt&#123;AB&#125;\over A&#125; = &#123;\sqrt&#123;A&#125;\cdot\sqrt&#123;B&#125;\over A&#125; = &#123;\sqrt&#123;B&#125;\over \sqrt&#123;A&#125;&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...while...
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:41:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;B\over \sqrt&#123;AB&#125;&#125; = &#123;B \over \sqrt&#123;A&#125;\cdot\sqrt&#123;B&#125;&#125; = &#123;\sqrt&#123;B&#125;\over \sqrt&#123;A&#125;&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...is equal, and we can explicitly see that {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:47:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\gamma = \sqrt&#123;B&#125;/\sqrt&#123;A&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} as
              well, from the second proof. (Indeed, if you multiply
              twice by {" "}
              <Math>
                $\sqrt&#123;B&#125;/\sqrt&#123;A&#125;$
              </Math>
              {" "} you're going to remove one
              factor of {" "}
              <Math>
                $A$
              </Math>
              {" "} while introducing one factor of {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                This observation in hand, we can give two solutions:
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:53:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Solution 1.
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:57:10
                  </span>
                </span>
              </i>
              {" "} Assume wlog (= “without loss of generality”)
              that {" "}
              <NoBreak>
                <Math>
                  $B &gt; A$
                </Math>
                .
              </NoBreak>
              {" "} We report the lengths {" "}
              <Math>
                $A$
              </Math>
              {" "} and {" "}
              <Math>
                $B$
              </Math>
              {" "} onto a
              common number line such that the left end of each length
              is identified with {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/83jd.svg"
              local_url="./images/e5_sqrt_AB_construction_2.svg"
              intrinsicWidth={450}
              intrinsicHeight={213}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                We construct {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:66:9
                </span>
              </span>
              <Math>
                $B/2$
              </Math>
              {" "} by intersecting two sufficiently
              large circles of centers {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "} of equal radius:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/aEvK.svg"
              local_url="./images/e5_sqrt_AB_construction_3_v2.svg"
              intrinsicWidth={450}
              intrinsicHeight={485}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                We draw a half-circle of radius {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:72:9
                </span>
              </span>
              <Math>
                $B/2$
              </Math>
              {" "} and of center {" "}
              <NoBreak>
                <Math>
                  $B/2$
                </Math>
                ,
              </NoBreak>
              {" "}
              and a perpendicular emanating from {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} and...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/7wy4.svg"
              local_url="./images/e5_sqrt_AB_construction_5.svg"
              intrinsicWidth={450}
              intrinsicHeight={200}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...the red triangle above is a right triangle by the
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:84:9
                </span>
              </span>
              {" "}
              {" "}
              Peloponnesian circle theorem, so we have effectively 
              succeeded in constructing this diagram,
              for some angle {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Usrx.svg"
              local_url="./images/e5_sqrt_AB_construction_6.svg"
              intrinsicWidth={450}
              intrinsicHeight={215}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                As seen in {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:93:9
                </span>
              </span>
              <InChapterLink
                href="#_185_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 34
              </InChapterLink>
              &#8288;,
              however, we have
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;B\over A&#125; = \sec^2\theta
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                in this case, implying that
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:100:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sec\theta = &#123;\sqrt&#123;B&#125;\over\sqrt&#123;A&#125;&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is the factor {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:106:9
                </span>
              </span>
              <Math>
                $\gamma$
              </Math>
              {" "} mentioned in the
              preliminary arithmetic observation, and that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A\sec\theta = A\gamma = \sqrt&#123;AB&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which places {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:114:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\sqrt&#123;AB&#125;$
                </Math>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/S9xt.svg"
              local_url="./images/e5_sqrt_AB_construction_7.svg"
              intrinsicWidth={450}
              intrinsicHeight={190}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...here, in our construction from a few lines
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:119:9
                </span>
              </span>
              {" "}
              {" "}
              above.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Solution 2.
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:124:10
                  </span>
                </span>
              </i>
              {" "}
              Place {" "}
              <Math>
                $A$
              </Math>
              {" "} and {" "}
              <Math>
                $B$
              </Math>
              {" "} end-to-end:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/-HLJ.svg"
              local_url="./images/e5_sqrt_AB_solution2_0.svg"
              intrinsicWidth={470}
              intrinsicHeight={129}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Find the middle of the combined segment and
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:132:9
                </span>
              </span>
              {" "}
              {" "}
              use it to
              draw a semicircle whose diameter is the
              combined segment:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/OwXA.svg"
              local_url="./images/e5_sqrt_AB_solution2_1.svg"
              intrinsicWidth={450}
              intrinsicHeight={380}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Draw a perpendicular
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:140:9
                </span>
              </span>
              {" "}
              {" "}
              to the segment at the point where {" "}
              <Math>
                $A$
              </Math>
              {" "} and {" "}
              <Math>
                $B$
              </Math>
              {" "}
              meet, which defines again a right triangle by the
              Peloponnesian circle theorem:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/-W11.svg"
              local_url="./images/e5_sqrt_AB_solution2_2.svg"
              intrinsicWidth={450}
              intrinsicHeight={225}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Because {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:148:9
                </span>
              </span>
              {" "}
              {" "}
              of the right angle,
              the angle {" "}
              <Math>
                $\theta$
              </Math>
              {" "} at lower left—if we label it
              such—is also repeated middle top right (this is
              the content of {" "}
              <InChapterLink
                href="#_183_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 32
              </InChapterLink>
              &#8288;):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/UWy5.svg"
              local_url="./images/e5_sqrt_AB_solution2_3.svg"
              intrinsicWidth={450}
              intrinsicHeight={225}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The ratio that takes {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:157:9
                </span>
              </span>
              <Math>
                $A$
              </Math>
              {" "} to the middle height
              and that takes the middle height to {" "}
              <Math>
                $B$
              </Math>
              {" "} are therefore
              both {" "}
              <NoBreak>
                <Math>
                  $\tan(\theta)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/KocC.svg"
              local_url="./images/e5_sqrt_AB_solution2_4.svg"
              intrinsicWidth={450}
              intrinsicHeight={225}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                This implies that
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:164:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \tan(\theta)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is the factor {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:170:9
                </span>
              </span>
              <Math>
                $\gamma$
              </Math>
              {" "} such that {" "}
              <Math>
                $A\gamma^2 = B$
              </Math>
              {" "}
              mentioned at the outset, and that said “middle
              height” is {" "}
              <NoBreak>
                <Math>
                  $\sqrt&#123;AB&#125;$
                </Math>
                !
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Vocabulary.
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:176:10
                  </span>
                </span>
              </i>
              {" "} The square-root-of-the-product
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;xy&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is called the
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:182:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                geometric mean
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:182:25
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:182:41
                </span>
              </span>
              <Math>
                $x$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                ,
              </NoBreak>
              {" "}
              {" "}
              <NoBreak>
                <Math>
                  $x \geq 0$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $y \geq 0$
                </Math>
                ,
              </NoBreak>
              {" "} as opposed to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;x + y\over 2&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which is called the
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:189:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                arithmetic mean
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:191:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (or just “mean”) of {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:193:9
                </span>
              </span>
              <Math>
                $x$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $x \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $y \in \rr$
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
                  Legend has it that a
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:197:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  geometric progression
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:199:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  is so-called because each term {" "}
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:201:13
                  </span>
                </span>
                {" "}
                {" "}
                in the sequence
                that is not the first or the last is the
                geometric mean of the two terms on either side,
                and that similarly an
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  arithmetic progression
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:207:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  is so-called because each term
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trig2^exercises/_sqrt_xy_construction_.wly:209:13
                  </span>
                </span>
                {" "}
                {" "}
                in the sequence
                that is not the first or the last is the
                arithematic mean of the two terms on either side.
                (Cf. {" "}
                <OutChapterLink
                  href="/article/chapter5#_75_h.a.i_"
                  class="out-chapter-link"
                >
                  Note 1
                </OutChapterLink>
                {" "} in {" "}
                <OutChapterLink
                  href="/article/chapter5#_76_h.a.i_"
                  class="out-chapter-link"
                >
                  Exercise 1 of Chapter 4
                </OutChapterLink>
                .)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
      </Exercises>
      <Section id="section-1">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Polar coordinates.
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:4:6
              </span>
            </span>
          </b>
          {" "}
          The so-called
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            polar coordinates
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:7:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            of a point {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:9:5
            </span>
          </span>
          <Math>
            $P$
          </Math>
          {" "} in the plane are a pair of
          numbers
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (r, \theta)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            with {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:16:5
            </span>
          </span>
          <Math>
            $r \geq 0$
          </Math>
          {" "} such that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          P = (r\cos(\theta), r\sin(\theta)).
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            That is:
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:22:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <List style="padding-left:1.8em;">
          <Item>
            <p>
              <Math>
                $r$
              </Math>
              <span class="t-3003-c">
                {" "} is the distance from {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trigonometry.wly:27:12
                </span>
              </span>
              <Math>
                $P$
              </Math>
              <span class="t-3003-c">
                {" "} to the origin;
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trigonometry.wly:27:37
                </span>
              </span>
            </p>
          </Item>
          <Item>
            <p>
              <Math>
                $\theta$
              </Math>
              <span class="t-3003-c">
                {" "} is “the” counterclockwise angle
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trigonometry.wly:29:17
                </span>
              </span>
              {" "}
              {" "}
              from the positive {" "}
              <Math>
                $x$
              </Math>
              <span class="t-3003-c">
                {" "} axis to the segment
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trigonometry.wly:30:30
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <NoBreak>
                <Math>
                  $OP$
                </Math>
                <span class="t-3003-c">
                  ,
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trigonometry.wly:31:13
                  </span>
                </span>
              </NoBreak>
              <span class="t-3003-c">
                {" "} where {" "}
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trigonometry.wly:31:13
                </span>
              </span>
              <Math>
                $O$
              </Math>
              <span class="t-3003-c">
                {" "} is the origin;
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trigonometry.wly:31:24
                </span>
              </span>
            </p>
          </Item>
        </List>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...even though {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:33:5
            </span>
          </span>
          <Math>
            $\theta$
          </Math>
          {" "} is not unique,
          because any multiple of {" "}
          <Math>
            $4\eta$
          </Math>
          {" "} may be
          added to {" "}
          <Math>
            $\theta$
          </Math>
          {" "} without altering the
          values of {" "}
          <Math>
            $\sin(\theta)$
          </Math>
          {" "} or {" "}
          <NoBreak>
            <Math>
              $\cos(\theta)$
            </Math>
            ;
          </NoBreak>
          {" "}
          slightly worse even: if {" "}
          <NoBreak>
            <Math>
              $r = 0$
            </Math>
            ,
          </NoBreak>
          {" "} then
          {" "}
          <Math>
            $\theta$
          </Math>
          {" "} may be anything. (Because in that
          case
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          P = (0, 0)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and any value of {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:45:5
            </span>
          </span>
          <Math>
            $\theta$
          </Math>
          {" "} will satisfy
          the equation
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          P = (0\cdot \cos\theta, 0\cdot \sin\theta)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            namely.)
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:52:5
            </span>
          </span>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            NONETHELESS—even though the polar coordinates
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:54:5
            </span>
          </span>
          {" "}
          {" "}
          of a point are not (not ever!) uniquely
          determined, we say “the” polar coordinates of
          a point, out of expediency!
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
              The pairs
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:61:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (\sqrt&#123;2&#125;,\, -3.5\eta)
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <MathBlock>
            $$
            (\sqrt&#123;2&#125;,\, 0.5\eta)
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <MathBlock>
            $$
            (\sqrt&#123;2&#125;,\, 4.5\eta)
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              count among the polar coordinates of the point
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:73:9
              </span>
            </span>
            {" "}
            {" "}
            {" "}{" "}
            <NoBreak>
              <Math>
                $(1, 1) \in \rr^2$
              </Math>
              .
            </NoBreak>
          </OuterP>
        </Example>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 2.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              The pairs
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:78:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (\sqrt&#123;2&#125;,\, -2.5\eta)
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <MathBlock>
            $$
            (\sqrt&#123;2&#125;,\, 1.5\eta)
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <MathBlock>
            $$
            (\sqrt&#123;2&#125;,\, 101.5\eta)
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              count among the polar coordinates of the point
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:90:9
              </span>
            </span>
            {" "}
            {" "}
            {" "}{" "}
            <NoBreak>
              <Math>
                $(-1, 1) \in \rr^2$
              </Math>
              .
            </NoBreak>
          </OuterP>
        </Example>
      </Section>
      <Rest />
    </Article>
  );
}

const Rest = () => {
  const visibleRestSections = useShowMore(6);
  return <>
    {visibleRestSections() > 0 && <>
      <Pause />
      <Section id="section-2">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Change-of-coordinate formulas.
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:95:6
              </span>
            </span>
          </b>
          {" "}
          Definitionally, the equations
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \displaylines&#123;x = r \cos(\theta)\\
          \up&#123;1.3&#125;y = r \sin(\theta)&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            give the change-of-coordinate formulas
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:103:5
            </span>
          </span>
          {" "}
          {" "}
          from a polar coordinate {" "}
          <Math>
            $(r, \theta)$
          </Math>
          {" "}
          to a cartesian coordinate {" "}
          <NoBreak>
            <Math>
              $(x, y)$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            Conversely, to recover the polar
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:107:5
            </span>
          </span>
          {" "}
          {" "}
          coordinates {" "}
          <Math>
            $(r, \theta)$
          </Math>
          {" "} from the cartesian
          coordinates {" "}
          <NoBreak>
            <Math>
              $(x, y)$
            </Math>
            ,
          </NoBreak>
          {" "} one has at least
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          r = \sqrt&#123;x^2 + y^2&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            by the Pythagorean theorem, but the
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:115:5
            </span>
          </span>
          {" "}
          {" "}
          formula for {" "}
          <Math>
            $\theta$
          </Math>
          {" "} is not so cheerful—out
          of completeness, we can jot it down
          anyway, for your entertainment:
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \theta = \begin&#123;cases&#125;
          \arctan(y/x) &amp; \te&#123;if &#125;\, x &gt; 0 \\
          \up&#123;1.2&#125;-\arctan(y/x) &amp; \te&#123;if &#125;\, x &lt; 0 \\
          \up&#123;1.2&#125;\eta &amp; \te&#123;if &#125;\, x = 0, y &gt; 0 \\
          \up&#123;1.2&#125;-\eta &amp; \te&#123;if &#125;\, x = 0, y &lt; 0 \\
          \up&#123;1.2&#125;\rm&#123;?&#125; &amp; \te&#123;if &#125;\, x = 0, y = 0
          \end&#123;cases&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...where “arctan” is
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:130:5
            </span>
          </span>
          {" "}
          {" "}
          some-function-or-other-to-be-discussed-later.
        </OuterP>
        <Pause />
        <OuterP>
          <i>
            <span class="t-3003-c">
              Note.
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:135:6
              </span>
            </span>
          </i>
          {" "}
          Popular programming languages such as
          python offer a function named {" "}
          <span class="code-cartouche">
            atan2
          </span>
          {" "} that will compute the {" "}
          <i>
            argument
          </i>
          {" "} (see
          Vocabulary below) {" "}
          <Math>
            $\theta$
          </Math>
          {" "} of a given pair
          {" "}
          <Math>
            $(x, y)$
          </Math>
          {" "} out of the box, without you having to
          worry about which of {" "}
          <Math>
            $x$
          </Math>
          {" "} or {" "}
          <Math>
            $y$
          </Math>
          {" "} is {" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            ,
          </NoBreak>
          {" "} etc.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            But the call goes {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:146:5
            </span>
          </span>
          <span class="code-cartouche">
            atan2(y, x)
          </span>
          {" "} not {" "}
          <span class="code-cartouche">
            atan2(x, y)
          </span>
          {" "} by some bizareness. (Well, actually a
          throwback to the fact that in this expression...
        </OuterP>
        <Pause />
        <CentralDisplay>
          <NoBreak>
            <span class="t-3003-c">
              “
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:157:7
              </span>
            </span>
            <Math>
              $\arctan(y/x)$
            </Math>
            <span class="t-3003-c">
              ”
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:157:22
              </span>
            </span>
          </NoBreak>
        </CentralDisplay>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...you hit {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:159:5
            </span>
          </span>
          <NoBreak>
            “
            <Math>
              $y$
            </Math>
            ”
          </NoBreak>
          {" "} before {" "}
          <NoBreak>
            “
            <Math>
              $x$
            </Math>
            ”.)
          </NoBreak>
        </OuterP>
        <Pause />
        <OuterP>
          <i>
            <span class="t-3003-c">
              Vocabulary.
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:163:6
              </span>
            </span>
          </i>
          {" "}
          The first coordinate of a polar
          coordinate—colloquially, {" "}
          <NoBreak>
            “
            <Math>
              $r$
            </Math>
            ”—is
          </NoBreak>
          {" "} called the
          {" "}
          <i>
            radius
          </i>
          {" "} or the {" "}
          <i>
            norm
          </i>
          . The second coordinate
          of a polar coordinate—colloquially, {" "}
          <NoBreak>
            “
            <Math>
              $\theta$
            </Math>
            ”—is
          </NoBreak>
          {" "}
          called the {" "}
          <i>
            angle
          </i>
          {" "} or the {" "}
          <i>
            argument
          </i>
          .
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 1 && <>
      <Pause />
      <Section id="section-3">
        <OuterP>
          <b>
            <span class="t-3003-c">
              A famous diagram.
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:172:6
              </span>
            </span>
          </b>
          {" "}
          There is a somewhat infamous diagram similar
          to the diagrams of Examples {" "}
          <OutChapterLink
            href="/article/chapter6#_84_h.a.i_"
            class="out-chapter-link"
          >
            2
          </OutChapterLink>
          {" "} and {" "}
          <OutChapterLink
            href="/article/chapter6#_85_h.a.i_"
            class="out-chapter-link"
          >
            3
          </OutChapterLink>
          {" "} of {" "}
          <OutChapterLink
            href="/article/chapter6#_103_h.a.i_"
            class="out-chapter-link"
          >
            Chapter 6
          </OutChapterLink>
          ; to draw the
          diagram, start with a “snail shell” stack of
          two right triangles:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/-N5q.svg"
          local_url="./images/svg_ch5_ch_snail_stack_1.svg"
          intrinsicWidth={400}
          intrinsicHeight={240}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Rotate a copy of the smaller
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:181:5
            </span>
          </span>
          {" "}
          {" "}
          triangle by {" "}
          <Math>
            $90^\circ$
          </Math>
          {" "} towards the bigger one;
          we end up with two pairs of parallel sides:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/-oWb.svg"
          local_url="./images/svg_ch5_ch_snail_stack_2.svg"
          intrinsicWidth={440}
          intrinsicHeight={275}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Therefore, if we snap a scaled copy of the
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:188:5
            </span>
          </span>
          {" "}
          {" "}
          smaller triangle onto the remaining non-hypotenuse
          side of the bigger triangle, we get a single
          straight side (you can also think in terms of
          angles that add up to {" "}
          <NoBreak>
            <Math>
              $180^\circ$
            </Math>
            ):
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/ADw8.svg"
          local_url="./images/svg_ch5_ch_snail_stack_3.svg"
          intrinsicWidth={440}
          intrinsicHeight={240}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            We finish by setting the
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:197:5
            </span>
          </span>
          {" "}
          {" "}
          hypotenuse of the original big triangle to
          have length {" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/1jEs.svg"
          local_url="./images/svg_ch5_ch_snail_stack_4.svg"
          intrinsicWidth={440}
          intrinsicHeight={240}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            The sum of {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:204:5
            </span>
          </span>
          <Math>
            $\theta_1$
          </Math>
          {" "} and {" "}
          <Math>
            $\theta_2$
          </Math>
          {" "} can exceed {" "}
          <NoBreak>
            <Math>
              $\eta$
            </Math>
            ...
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/G2n-.svg"
          local_url="./images/svg_ch5_ch_snail_stack_greater_eta.svg"
          intrinsicWidth={440}
          intrinsicHeight={245}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...but, by construction, {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:209:5
            </span>
          </span>
          <Math>
            $\theta_1$
          </Math>
          {" "} and
          {" "}
          <Math>
            $\theta_2$
          </Math>
          {" "} are individually in the range from
          {" "}
          <Math>
            $0$
          </Math>
          {" "} to {" "}
          <NoBreak>
            <Math>
              $\eta$
            </Math>
            .
          </NoBreak>
          {" "} (Being “proper angles” of right
          triangles.) (You can now contemplate what the
          “utility” of the diagram might be!)
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 2 && <>
      <Pause />
      <Section id="section-4">
        <OuterP>
          <b>
            <span class="t-3003-c">
              The angle-sum formulas.
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:217:6
              </span>
            </span>
          </b>
          {" "}
          In the “famous diagram” there
          are four ways to
          reach an outer edge using ‘cos’
          and ‘sin’ arrows while starting from the
          edge of length {" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            ,
          </NoBreak>
          {" "} reaching each of the
          four other outer edges precisely once:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/pFL0.svg"
          local_url="./images/svg_ch5_ch_angle_sum_1.svg"
          intrinsicWidth={440}
          intrinsicHeight={345}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (Note by the way that {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:228:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $0 \leq \theta_1 \leq \eta$
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <Math>
            $0 \leq \theta_2 \leq \eta$
          </Math>
          {" "} because of
          the way the figure is constructed, which
          implies that {" "}
          <NoBreak>
            <Math>
              $\sin(\theta_1\!\rt&#123;0.1&#125;)$
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <NoBreak>
            <Math>
              $\cos(\theta_1\!\rt&#123;0.1&#125;)$
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <Math>
            $\sin(\theta_2\!\rt&#123;0.1&#125;)$
          </Math>
          {" "} and {" "}
          <Math>
            $\cos(\theta_2\!\rt&#123;0.1&#125;)$
          </Math>
          {" "}
          are all nonnegative, and that all their
          products are nonnegative, as well.)
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            On the other hand, if we inscribe the
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:237:5
            </span>
          </span>
          {" "}
          {" "}
          figure in the unit circle with the joint angle
          {" "}
          <Math>
            $\theta_1 + \theta_2$
          </Math>
          {" "} at the center, we find that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \,\sin(\theta_1 + \theta_2)\,
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:245:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \,\cos(\theta_1 + \theta_2)\,
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            make an appearance as coordinates, and
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:251:5
            </span>
          </span>
          {" "}
          {" "}
          that these coordinates can be expressed as
          sums or differences of the four outer edges:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/C7FC.svg"
          local_url="./images/svg_ch5_ch_angle_sum_2.svg"
          intrinsicWidth={540}
          intrinsicHeight={420}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (Or with {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:258:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $\theta_1 + \theta_2 &gt; \eta$
            </Math>
            ...
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/cixf.svg"
          local_url="./images/svg_ch5_ch_angle_sum_3.svg"
          intrinsicWidth={540}
          intrinsicHeight={420}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...works as well!)
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:263:5
            </span>
          </span>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            In other words, we find...
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:265:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/FJxQ.svg"
          local_url="./images/svg_ch5_ch_angle_sum_formulas_flowers.svg"
          intrinsicWidth={540}
          intrinsicHeight={333}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...for {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:270:5
            </span>
          </span>
          <Math>
            $\theta_1$
          </Math>
          {" "} and {" "}
          <Math>
            $\theta_2$
          </Math>
          {" "} as may
          appear in such a figure, i.e., for
          {" "}
          <NoBreak>
            <Math>
              $0 \leq \theta_1, \theta_2 \leq \eta$
            </Math>
            .
          </NoBreak>
          {" "} In
          fact, these two formulas hold for {" "}
          <i>
            all
          </i>
          {" "}
          {" "}
          <NoBreak>
            <Math>
              $\theta_1$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $\theta_2 \in \rr$
            </Math>
            .
          </NoBreak>
          {" "} They are
          known as the {" "}
          <i>
            angle-sum formulas
          </i>
          . Also
          note the “pattern” of the angle-sum formulas:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/3BtA.svg"
          local_url="./images/svg_ch5_ch_angle_sum_formulas_by_heart.svg"
          intrinsicWidth={540}
          intrinsicHeight={333}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            These patterns alone are
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:281:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            enough
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:283:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            to reconstruct the formulas from scratch!
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:285:5
            </span>
          </span>
          {" "}
          {" "}
          (Well, a lot of students remember the formulas
          that way, at least.)
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 3 && <>
      <Pause />
      <Section id="section-5">
        <OuterP>
          <b>
            <span class="t-3003-c">
              The Abercrombie inequality.
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:291:6
              </span>
            </span>
          </b>
          {" "}
          Take an ordinary angle of aperture less than
          {" "}
          <Math>
            $180^\circ\hlfbk$
          </Math>
          {" "} with a circular arc drawn
          inside and a line segment spanning the two
          sides of the angle, clearing the arc:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/dXdk.svg"
          local_url="./images/svg_ch5_ch_abercrombie_statement.svg"
          intrinsicWidth={440}
          intrinsicHeight={130}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            The eponymous
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:300:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            Abercrombie inequality
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:302:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            states that
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:304:5
            </span>
          </span>
          {" "}
          {" "}
          the length of the arc is less than or equal to the length of the segment, i.e., that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          A\leq S
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            where {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:311:5
            </span>
          </span>
          <Math>
            $A$
          </Math>
          {" "} is the length of the arc and {" "}
          <Math>
            $S$
          </Math>
          {" "} is
          the length of the segment, as in the figure.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            The proof is that, if this were not the case,
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:317:5
            </span>
          </span>
          {" "}
          {" "}
          the length {" "}
          <Math>
            $S$
          </Math>
          {" "} of the segment would lie to left of the
          length {" "}
          <Math>
            $A$
          </Math>
          {" "} of the arc on the number line...
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/KxqB.svg"
          local_url="./images/svg_ch5_ch_abercrombie_to_the_left.svg"
          intrinsicWidth={460}
          intrinsicHeight={59}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...and in the space between {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:324:5
            </span>
          </span>
          <Math>
            $S$
          </Math>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $A$
            </Math>
            ,
          </NoBreak>
          {" "} we could then
          find the length {" "}
          <Math>
            $P$
          </Math>
          {" "} of a polygonal line
          approximating the arc...
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/0Mwx.svg"
          local_url="./images/svg_ch5_ch_abercrombie_with_P.svg"
          intrinsicWidth={460}
          intrinsicHeight={288}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...because such polygonal lines can
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:331:5
            </span>
          </span>
          {" "}
          {" "}
          approximate the arc arbitrarily closely, i.e.,
          have lengths that come arbitrarily close to
          {" "}
          <NoBreak>
            “
            <Math>
              $A$
            </Math>
            ”
          </NoBreak>
          {" "} on the number line from the left.
          (This constitutes our “axiomatic” belief
          about the  nature of curved length.) But this
          will be a contradiction, because we claim
          that each segment of the polygonal line has
          length less than its corresponding “shadow”
          on the segment of length {" "}
          <NoBreak>
            <Math>
              $S$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/Vx2_.svg"
          local_url="./images/svg_ch5_ch_abercrombie_shadows.svg"
          intrinsicWidth={460}
          intrinsicHeight={155}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            This follows from the diagram:
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:345:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/onjp.svg"
          local_url="./images/svg_ch5_ch_abercrombie_s1s2p1p2.svg"
          intrinsicWidth={460}
          intrinsicHeight={210}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            The point is that
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:350:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \overline&#123;s_1s_2&#125;\, &gt; \,\overline&#123;p_1p_2&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            because {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:356:5
            </span>
          </span>
          <Math>
            $s_1$
          </Math>
          {" "} and {" "}
          <Math>
            $s_2$
          </Math>
          {" "} are separated by a
          pair of parallel lines that are at distance
          {" "}
          <Math>
            $\overline&#123;p_1p_2&#125;$
          </Math>
          {" "} from one another, and
          because at least one of {" "}
          <NoBreak>
            <Math>
              $s_1$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $s_2$
          </Math>
          {" "} is
          not on either of the parallel lines (or else
          we would have {" "}
          <NoBreak>
            <Math>
              $s_1 = p_1$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $s_2 = p_2$
            </Math>
            ,
          </NoBreak>
          {" "} and
          the segment {" "}
          <Math>
            $s_1s_2$
          </Math>
          {" "} would not clear the arc).
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            Therefore, each segment of {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:364:5
            </span>
          </span>
          <Math>
            $P$
          </Math>
          {" "} has length
          less than its corresponding “shadow segment”
          on the crossover segment of length {" "}
          <NoBreak>
            <Math>
              $S$
            </Math>
            ,
          </NoBreak>
          {" "} from
          which {" "}
          <NoBreak>
            <Math>
              $S &gt; P$
            </Math>
            ,
          </NoBreak>
          {" "} from which this arrangement
          of values...
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/2Fam.svg"
          local_url="./images/svg_ch5_ch_abercrombie_to_the_left_second.svg"
          intrinsicWidth={460}
          intrinsicHeight={60}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...on the number line is {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:373:5
            </span>
          </span>
          {" "}
          {" "}
          false—we have achieved a so-called {" "}
          <i>
            contradiction
          </i>
          —from
          which this original arrangement of values...
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/dTqx.svg"
          local_url="./images/svg_ch5_ch_abercrombie_to_the_left_third.svg"
          intrinsicWidth={460}
          intrinsicHeight={60}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...on the number line is an impossibility,
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:380:5
            </span>
          </span>
          {" "}
          {" "}
          i.e., it must be that {" "}
          <NoBreak>
            <Math>
              $S \geq A$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            One can polish a few more details by noting that:
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:383:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <List
          marker="lower-roman-paren"
          markerFontFamily="Baskerville Bold"
          style="gap:1em;"
        >
          <Item>
            <p>
              <span class="t-3003-c">
                the segment can be tangent to the
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trigonometry.wly:390:9
                </span>
              </span>
              {" "}
              {" "}
              arc at one point, the proof will still go
              through (so the segment does not need to
              {" "}
              <i>
                <span class="t-3003-c">
                  strictly
                  <span class="t-3003">
                    ./src/content/ch9a_trig2/trigonometry.wly:393:10
                  </span>
                </span>
              </i>
              <span class="t-3003-c">
                {" "} clear the arc);
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trigonometry.wly:393:19
                </span>
              </span>
            </p>
          </Item>
          <Item>
            <p>
              <span class="t-3003-c">
                as long as the angle is nonzero,
                <span class="t-3003">
                  ./src/content/ch9a_trig2/trigonometry.wly:395:9
                </span>
              </span>
              {" "}
              {" "}
              and the arc has nonzero radius, the
              length of the segment will be STRICTLY
              GREATER than the length of the arc,
              not just greater-or-equal-to
            </p>
          </Item>
        </List>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (Point {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:401:5
            </span>
          </span>
          <b>
            (ii)
          </b>
          {" "} can be seen by
          comparing the segment to a two-segment
          assemblage that is shorter than the segment
          itself, but still-as-long-as-the-arc, by virtue
          of the original inequality.)
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 4 && <>
      <Pause />
      <Section id="section-6">
        <OuterP>
          <b>
            <span class="t-3003-c">
              The Gregorinovich sandwich.
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:409:6
              </span>
            </span>
          </b>
          {" "}
          The “Gregorinovich sandwich”—sometimes
          Gr
          <i>
            i
          </i>
          gorinovich—states that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(\theta) \,&lt;\, \theta \,&lt;\, &#123;\sin(\theta)\over\cos(\theta)&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for all {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:417:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $0 &lt; \theta &lt; \eta$
            </Math>
            .
          </NoBreak>
          {" "}
          The Gregorinovich sandwich is so-called because
          it “sandwiches” {" "}
          <Math>
            $\theta$
          </Math>
          {" "}
          between
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(\theta)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            below, and
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:424:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\sin(\theta)\over\cos(\theta)&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            above. (Indeed,
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:428:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\sin(\theta)\over\cos(\theta)&#125; &gt; \sin(\theta)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            in the range {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:432:5
            </span>
          </span>
          <Math>
            $0 &lt; \theta &lt; \eta$
          </Math>
          {" "}
          because dividing by
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(\theta)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            makes you
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:437:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplay>
          <span class="t-3003-c">
            BIGGER
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:438:7
            </span>
          </span>
        </CentralDisplay>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            when {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:439:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $0 &lt; \cos(\theta) &lt; 1$
            </Math>
            ,
          </NoBreak>
          {" "} which is the case
          for {" "}
          <NoBreak>
            <Math>
              $0 &lt; \theta &lt; \eta$
            </Math>
            —in
          </NoBreak>
          {" "} fact, dividing by
          {" "}
          <Math>
            $\cos(\theta)$
          </Math>
          {" "} will make you
        </OuterP>
        <Pause />
        <CentralDisplay>
          <span class="t-3003-c">
            DRAMATICALLY BIGGER
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:442:7
            </span>
          </span>
        </CentralDisplay>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            when {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:443:5
            </span>
          </span>
          <Math>
            $\cos(\theta)$
          </Math>
          {" "} is close to {" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            ,
          </NoBreak>
          {" "} which is the
          case when {" "}
          <Math>
            $\theta$
          </Math>
          {" "} is close to {" "}
          <NoBreak>
            <Math>
              $\eta$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $0 &lt; \theta &lt; \eta$
            </Math>
            .)
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            The first inequality
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:446:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(\theta) \rt&#123;0.1&#125;&lt;\rt&#123;0.1&#125; \theta
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            follows by this illustration (using {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:452:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $0 &lt; \theta &lt; \eta$
            </Math>
            ):
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/wtkr.svg"
          local_url="./images/svg_ch5_ch_fisher_first_ineq.svg"
          intrinsicWidth={440}
          intrinsicHeight={420}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Namely, per the one slightly pedantic logic,
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:457:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \theta &gt; L
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            on the one hand, where {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:463:5
            </span>
          </span>
          <Math>
            $L$
          </Math>
          {" "} is the length of
          the dotted chord, and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          L &gt; \sin(\theta)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            on the other hand. Together, this implies
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:470:5
            </span>
          </span>
          {" "}
          {" "}
          {" "}{" "}
          <NoBreak>
            <Math>
              $\theta \rt&#123;0.1&#125;&gt;\rt&#123;0.1&#125; \sin(\theta)$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            For the second inequality, note that
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:473:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\sin(\theta)\over \cos(\theta)&#125; = &#123;1\over \cos(\theta)&#125;\cdot \sin(\theta)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is the length that {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:479:5
            </span>
          </span>
          <Math>
            $\theta$
          </Math>
          {" "} projects onto
          the line {" "}
          <NoBreak>
            <Math>
              $x = 1$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/HxgB.svg"
          local_url="./images/svg_ch5_ch_fisher_second_ineq.svg"
          intrinsicWidth={440}
          intrinsicHeight={420}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Specifically,
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:485:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;1\over \cos(\theta)&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            turns the bottom segment of length {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:491:5
            </span>
          </span>
          <Math>
            $1$
          </Math>
          {" "}
          into the pink hypotenuse, because just as ‘cos’
          is the hypotenuse-to-adjacent multiplicative
          factor, so is {" "}
          <NoBreak>
            ‘
            <Math>
              $1/\!\cos$
            </Math>
            ’
          </NoBreak>
          {" "} the adjacent-to-hypotenuse
          multiplicative factor (don't be confused by the
          presence of two possible triangles to which
          this can be applied); then,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(\theta)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            brings one over to the right-hand segment
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:503:5
            </span>
          </span>
          {" "}
          {" "}
          from the pink hypotenuse, being the
          hypotenuse-to-opposite multiplicative
          factor.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            The fact that
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:508:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\theta&#125; \rt&#123;0.1&#125;&lt;\rt&#123;0.1&#125; &#123;\sin(\theta)\over \cos(\theta)&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            then follows from the “polished” version
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:514:5
            </span>
          </span>
          {" "}
          {" "}
          of the Abercrombie inequality. (The version
          that allows the segment to be tangent to the
          arc, and that claims a strict inequality.)
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            (In fact, the identity {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:519:5
            </span>
          </span>
          <Math>
            $\tan = \sec \cdot \sin$
          </Math>
          {" "}
          played a role in our proof of the
          Gregorinovich sandwich.) (Indeed,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(\theta) &lt; \theta &lt; \tan(\theta)\rt&#123;0.1&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is another way of writing the Grigorinovich
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:527:5
            </span>
          </span>
          {" "}
          {" "}
          sandwich.)
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 5 && <>
      <Pause />
      <Section id="section-7">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Cartographic projections.
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:532:6
              </span>
            </span>
          </b>
        </OuterP>
        <Pause />
        <Example id="_195_h.a.i_">
          <OuterP>
            <b>
              Example 3.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              If the Earth [is modeled as] a sphere
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:537:9
              </span>
            </span>
            {" "}
            {" "}
            of radius {" "}
            <Math>
              $1$
            </Math>
            {" "} then, as stands to reason, the circle
            of latitude {" "}
            <Math>
              $\theta$
            </Math>
            {" "} has radius {" "}
            <NoBreak>
              <Math>
                $\cos(\theta)$
              </Math>
              :
            </NoBreak>
          </OuterP>
          <Pause />
          <Image
            width="480px"
            src="/build-img/svgo-svg/_wct.svg"
            local_url="./images/country_sphere_35_m45.svg"
            intrinsicWidth={760}
            intrinsicHeight="596.22009"
          />
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              [&#8288;
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:545:9
              </span>
            </span>
            <InChapterLink
              href="#_195_h.a.i_"
              class="in-chapter-link"
            >
              Example 3
            </InChapterLink>
            {" "} continued.] In particular, this means that 
            in any cylindrical
            projection** of the Earth, such as the
            “Lambert projection” depicted below
            (that just sends each latitude out to
            its own height), the radius of a latitude is dilated
            by [a factor of] {" "}
            <NoBreak>
              <Math>
                $\sec(\theta)$
              </Math>
              :
            </NoBreak>
          </OuterP>
          <Pause />
          <Image
            width="480px"
            src="/build-img/svgo-svg/ZWuF.svg"
            style="margin-bottom:-1em"
            local_url="./images/country_sphere_35_m45_sec_v3.svg"
            intrinsicWidth="762.5"
            intrinsicHeight="805.41925"
          />
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              ...because...
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:558:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Huge \sec(\theta)\cdot\cos(\theta) = 1
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              ...which means that {" "}
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:564:9
              </span>
            </span>
            <NoBreak>
              “
              <Math>
                $\sec(\theta)$
              </Math>
              ”
            </NoBreak>
            {" "}
            is the correct multiplicative factor
            to take the Earth-radius to the
            cylinder-radius. 
            (Or just
            think of the fact that {" "}
            <NoBreak>
              <Math>
                $1/\cos(\theta) = \sec(\theta)$
              </Math>
              ,
            </NoBreak>
            {" "}
            dividing one radius by the other.)
          </OuterP>
        </Example>
        <Pause />
        <OuterP>
          <b>
            <span class="t-3003-c">
              **Vocabulary.
              <span class="t-3003">
                ./src/content/ch9a_trig2/trigonometry.wly:572:6
              </span>
            </span>
          </b>
          {" "} A (so-called
          {" "}
          <i>
            normal
          </i>
          ) {" "}
          <i>
            cylindrical projection
          </i>
          {" "}
          is a projection that maps the Earth to
          a vertical cylinder abutting the Earth at the
          equator while sending each latitude of the
          Earth to a circle on the cylinder, etc;
          besides the Lambert projection depicted
          above, two more examples are the {" "}
          <i>
            central
            cylindrical projection
          </i>
          {" "} and the
          {" "}
          <i>
            plate carée
          </i>
          :
        </OuterP>
        <Pause />
        <Image
          width="1300px"
          src="/build-img/svgo-svg/sA2I.svg"
          local_url="./images/plate_caree_central_lambert_combination_with_use_saved.svg"
          intrinsicWidth={1960}
          intrinsicHeight={1300}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (In the plate carée, at right, {" "}
            <span class="t-3003">
              ./src/content/ch9a_trig2/trigonometry.wly:587:5
            </span>
          </span>
          {" "}
          {" "}
          longitudes are “unrolled” onto the cylinder,
          which preserves north-south distances.)
        </OuterP>
      </Section>
    </>}
  </>;
};