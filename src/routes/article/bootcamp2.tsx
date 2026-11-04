import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
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
import Table  from "~/components/Table";
import TextParent  from "~/components/TextParent";
import { SolutionNote, Example, NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Bootcamp2__() {
  return (
    <Article
      prevPage="/article/bootcamp3"
      nextPage="/article/bootcamp1"
      pageNecessaryMargin={270}
      maxElementWidth={1200}
      id="_20_h.a.i_"
      path="/article/bootcamp2"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            <span class="t-3003-c">
              terminology
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:4:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            <span class="t-3003-c">
              integer powers of 10
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:17:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=section-3">
            <span class="t-3003-c">
              other bases
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:121:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            <span class="t-3003-c">
              additivity of exponents
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:173:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-4">
          <InChapterLink href="?id=section-5">
            <span class="t-3003-c">
              the third law of exponents
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:201:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-5">
          <InChapterLink href="?id=section-6">
            <span class="t-3003-c">
              famous powers of 10
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:248:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-6">
          <InChapterLink href="?id=section-7">
            <span class="t-3003-c">
              negative exponent prefixes
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:412:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-7">
          <InChapterLink href="?id=section-8">
            <span class="t-3003-c">
              positive exponent prefixes
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:642:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-8">
          <InChapterLink href="?id=section-9">
            <span class="t-3003-c">
              logarithms base 10
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:747:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-9">
          <InChapterLink href="?id=exercises">
            <span class="t-3003-c">
              exercises
              <span class="t-3003">
                ./src/content/bt2/bt2^exercises/__parent.wly:1:1
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Bootcamp 2:">
        <span class="t-3003-c">
          Powers of 10
          <span class="t-3003">
            ./src/content/bt2/__parent.wly:2:11
          </span>
        </span>
      </ArticleTitle>
      <Section id="section-1">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Terminology.
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:4:6
              </span>
            </span>
          </b>
          {" "}
          The expression below is called a {" "}
          <i>
            power
          </i>
          ;
          the number at the bottom of the power is called
          the {" "}
          <i>
            base
          </i>
          ; the number at the top
          is called the {" "}
          <i>
            exponent
          </i>
          :
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/anTr.svg"
          local_url="./images/svg_base_exponent.svg"
          intrinsicWidth={500}
          intrinsicHeight={125}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            The expression is read {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:13:5
            </span>
          </span>
          <Math>
            $\mathit&#123;10&#125;$
          </Math>
          {" "} {" "}
          <i>
            to the power
          </i>
          {" "} {" "}
          <NoBreak>
            <Math>
              $\mathit&#123;3&#125;$
            </Math>
            ,
          </NoBreak>
          {" "} and taking a power is called {" "}
          <i>
            exponentiation
          </i>
          .
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-2">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Integer powers of 10.
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:17:6
              </span>
            </span>
          </b>
          {" "}
          We define
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large 10^&#123;\hspace&#123;0.2ex&#125;n&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            as follows, if {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:22:5
            </span>
          </span>
          <Math>
            $n$
          </Math>
          {" "} is a nonnegative integer: start
          from {" "}
          <Math>
            $1$
          </Math>
          {" "} and multiply by {" "}
          <Math>
            $10$
          </Math>
          {" "} {" "}
          <Math>
            $n$
          </Math>
          {" "} times. We also define
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large 10^&#123;-n&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            as follows, if {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:27:5
            </span>
          </span>
          <Math>
            $n$
          </Math>
          {" "} is a positive integer: start from {" "}
          <Math>
            $1$
          </Math>
          {" "} and divide
          by {" "}
          <Math>
            $10$
          </Math>
          {" "} {" "}
          <Math>
            $n$
          </Math>
          {" "} times.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            For example,
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:30:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large 10^4 = 1 \times 10 \times 10 \times 10 \times 10 = 10000
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \Large 10^3 = 1 \times 10 \times 10 \times 10 = 1000
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \Large 10^2 = 1 \times 10 \times 10 = 100
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \Large 10^1 = 1 \times 10 = 10
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \Large 10^0 = 1 = 1
          $$
          <ImageLeft
            src="/build-img/svgo-svg/DSem.svg"
            offsetY="-0.2em"
            offsetX=" 4em"
            atLeastAsWide={true}
            local_url="./images/svg_bt2_bt_alert_cloud.svg"
            intrinsicWidth={200}
            intrinsicHeight={110}
          />
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (where, in the last line, {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:53:5
            </span>
          </span>
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
          ) by the first definition, while
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large 10^&#123;-1&#125; = 1\,/\,10 = 0.1
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \Large 10^&#123;-2&#125; = (1\,/\, 10)\,/\,10 = 0.01
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \Large 10^&#123;-3&#125; = ((1\,/\, 10)\,/\,10)\,/\,10 = 0.001
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \Large 10^&#123;-4&#125; = (((1\,/\, 10)\,/\,10)\,/\, 10)\,/\, 10 = 0.0001
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            by the second definition.
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:66:5
            </span>
          </span>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            As {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:68:5
            </span>
          </span>
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
          <MathBlock id="_2_h.a.i_">
            $$
            \Large 10^&#123;-n&#125; = &#123;1 \over 10^&#123;\hspace&#123;0.2ex&#125;n&#125;&#125;\tag&#123;A&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
        </TextParent>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for every positive integer {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:75:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $n$
            </Math>
            ,
          </NoBreak>
          {" "} giving another way to compute {" "}
          <NoBreak>
            <Math>
              $10^&#123;-n&#125;$
            </Math>
            .
          </NoBreak>
          {" "}
          Moreover, (&#8288;
          <InChapterLink
            href="#_2_h.a.i_"
            class="in-chapter-link"
          >
            A
          </InChapterLink>
          &#8288;) holds for
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            every
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:78:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            integer {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:80:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $n$
            </Math>
            ,
          </NoBreak>
          {" "} which is mildly important. In more
          detail, (&#8288;
          <InChapterLink
            href="#_2_h.a.i_"
            class="in-chapter-link"
          >
            A
          </InChapterLink>
          &#8288;) holds for {" "}
          <Math>
            $n = 0$
          </Math>
          {" "} by inspection, and (&#8288;
          <InChapterLink
            href="#_2_h.a.i_"
            class="in-chapter-link"
          >
            A
          </InChapterLink>
          &#8288;)
          is equivalent to the identity
          <ImageLeft
            src="/build-img/svgo-svg/rdZz.svg"
            line={2}
            local_url="./images/svg_bt2_bt_10_to_the_minus_0_cloud.svg"
            intrinsicWidth={530}
            intrinsicHeight={380}
          />
        </OuterP>
        <Pause />
        <TextParent>
          <MathBlock id="_3_h.a.i_">
            $$
            \Large 10^&#123;-n&#125;10^n = 1 \tag&#123;AA&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
        </TextParent>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            which holds for {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:92:5
            </span>
          </span>
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
          {" "} (Replacing {" "}
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
          in (&#8288;
          <InChapterLink
            href="#_3_h.a.i_"
            class="in-chapter-link"
          >
            AA
          </InChapterLink>
          &#8288;) lands you right back on (&#8288;
          <InChapterLink
            href="#_3_h.a.i_"
            class="in-chapter-link"
          >
            AA
          </InChapterLink>
          &#8288;), because {" "}
          <NoBreak>
            <Math>
              $-&#123;(-n)&#125; = n$
            </Math>
            .)
          </NoBreak>
          {" "} (So if (&#8288;
          <InChapterLink
            href="#_3_h.a.i_"
            class="in-chapter-link"
          >
            AA
          </InChapterLink>
          &#8288;) holds for all
          positive {" "}
          <NoBreak>
            <Math>
              $n$
            </Math>
            ,
          </NoBreak>
          {" "} it holds for all negative {" "}
          <Math>
            $n$
          </Math>
          {" "} too.)
        </OuterP>
        <Pause />
        <OuterP>
          <b>
            <span class="t-3003-c">
              Vocabulary.
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:99:6
              </span>
            </span>
          </b>
          {" "}
          Numbers {" "}
          <Math>
            $a$
          </Math>
          {" "} and {" "}
          <Math>
            $b$
          </Math>
          {" "} such that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large ab = 1
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            are {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:104:5
            </span>
          </span>
          <i>
            reciprocal
          </i>
          . If {" "}
          <Math>
            $a$
          </Math>
          {" "} and {" "}
          <Math>
            $b$
          </Math>
          {" "} are reciprocal,
          then...
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large ab = 1 \qquad a = &#123;1 \over b&#125; \qquad b = &#123;1 \over a&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...and any one of these equations implies the other two.
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:109:5
            </span>
          </span>
          {" "}
          {" "}
          Thus, either of (&#8288;
          <InChapterLink
            href="#_2_h.a.i_"
            class="in-chapter-link"
          >
            A
          </InChapterLink>
          &#8288;) and (&#8288;
          <InChapterLink
            href="#_3_h.a.i_"
            class="in-chapter-link"
          >
            AA
          </InChapterLink>
          &#8288;)
          expresses the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            reciprocality
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:113:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            of {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:115:5
            </span>
          </span>
          <Math>
            $10^n$
          </Math>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $10^&#123;-n&#125;$
            </Math>
            .
          </NoBreak>
        </OuterP>
      </Section>
      <Pause />
      <Rest />
    </Article>
  );
}

const Rest = () => {
  const visibleRestSections = useShowMore(8);
  return <>
    {visibleRestSections() > 0 && <>
      <Section id="section-3">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Other bases.
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:121:6
              </span>
            </span>
          </b>
          {" "}
          Integer powers of other nonzero bases are defined
          similarly, e.g.,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large 2^&#123;-2&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is defined as {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:127:5
            </span>
          </span>
          <Math>
            $1$
          </Math>
          {" "} divided by {" "}
          <Math>
            $2$
          </Math>
          {" "} twice, etc.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            However, a small quirk occurs for base {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:129:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $0$
            </Math>
            :
          </NoBreak>
          {" "} as one
          cannot divide by {" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            ,
          </NoBreak>
          {" "} negative powers of {" "}
          <Math>
            $0$
          </Math>
          {" "} remain
          undefined. E.g.,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large 0^&#123;-2&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            would be {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:135:5
            </span>
          </span>
          <NoBreak>
            “
            <Math>
              $1$
            </Math>
          </NoBreak>
          {" "} divided by {" "}
          <Math>
            $0$
          </Math>
          {" "} twice”, but this
          is undefined.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            Also (in case you're wondering) {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:138:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $0^0 = 1$
            </Math>
            .
          </NoBreak>
          {" "}
          You can see this by writing down the first few powers
          of {" "}
          <Math>
            $0$
          </Math>
          {" "} in descending order:
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large 0^3 = 1 \times 0 \times 0 \times 0 = 0
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \Large 0^2 = 1 \times 0 \times 0 = 0
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \Large 0^1 = 1 \times 0 = 0
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \Large 0^0 = 1 = 1
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            In other words, every positive power of {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:153:5
            </span>
          </span>
          <Math>
            $0$
          </Math>
          {" "} is zero,
          but when it comes to {" "}
          <NoBreak>
            <Math>
              $0^0$
            </Math>
            ,
          </NoBreak>
          {" "} the {" "}
          <NoBreak>
            ‘
            <Math>
              $0\hspace&#123;0.12ex&#125;$
            </Math>
            ’
          </NoBreak>
          {" "}
          in the exponent “wins out” over the {" "}
          <NoBreak>
            ‘
            <Math>
              $0\hspace&#123;0.12ex&#125;$
            </Math>
            ’
          </NoBreak>
          {" "}
          in the base, making the result {" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            Mathematicians sometimes call a power with exponent {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:158:5
            </span>
          </span>
          <Math>
            $0$
          </Math>
          {" "} an
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            empty product
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:160:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and they will repeatedly admonish that
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:162:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            an empty product is {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:164:7
            </span>
          </span>
          <Math>
            $\mathit&#123;1&#125;$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            in the sense that “all products start at
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:166:5
            </span>
          </span>
          {" "}
          {" "}
          {" "}{" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            ”,
          </NoBreak>
          {" "} and that if you start at {" "}
          <Math>
            $1$
          </Math>
          {" "} and don't
          multiply anything in, you stay at {" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            .
          </NoBreak>
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 1 && <>
      <Pause />
      <Section id="section-4">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Additivity of exponents.
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:173:6
              </span>
            </span>
          </b>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large 10^&#123;13&#125; \times 10^&#123;14&#125; = 10^&#123;\hspace&#123;0.1ex&#125;27&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            because {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:177:5
            </span>
          </span>
          <Math>
            $13$
          </Math>
          {" "} multiplications by {" "}
          <Math>
            $10$
          </Math>
          {" "} followed
          by {" "}
          <Math>
            $14$
          </Math>
          {" "} multiplications by {" "}
          <Math>
            $10$
          </Math>
          {" "} makes {" "}
          <Math>
            $13 + 14 = 27$
          </Math>
          {" "}
          multiplications by {" "}
          <NoBreak>
            <Math>
              $10$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            More generally,
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:181:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large 10^&#123;\hspace&#123;0.1ex&#125;n&#125; \times 10^&#123;\hspace&#123;0.1ex&#125;m&#125; = 10^&#123;\hspace&#123;0.1ex&#125;n + m&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for all {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:185:5
            </span>
          </span>
          <Math>
            $n$
          </Math>
          {" "} and {" "}
          <Math>
            $m$
          </Math>
          {" "} (and other bases than {" "}
          <NoBreak>
            <Math>
              $10$
            </Math>
            ),
          </NoBreak>
          {" "}
          which is known as
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            additivity of exponents
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:188:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            sometimes paraphrased as
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:190:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            the product of the powers is the power of the sum
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:192:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            where {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:194:5
            </span>
          </span>
          <i>
            the product of the powers
          </i>
          {" "} refers to
          {" "}
          <NoBreak>
            “
            <Math>
              $10^n \times 10^m$
            </Math>
            ”
          </NoBreak>
          {" "} and {" "}
          <i>
            the power of the sum
          </i>
          {" "}
          refers to {" "}
          <NoBreak>
            “
            <Math>
              $10^&#123;n+m&#125;$
            </Math>
            ”.
          </NoBreak>
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 2 && <>
      <Pause />
      <Section id="section-5">
        <OuterP>
          <b>
            <span class="t-3003-c">
              The third law of exponents.
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:201:6
              </span>
            </span>
          </b>
          {" "}
          Also,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large (10^&#123;13&#125;)^&#123;14&#125; = 10^&#123;13\cdot 14&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            because multiplying {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:206:5
            </span>
          </span>
          <Math>
            $14$
          </Math>
          {" "} times by {" "}
          <Math>
            $10^&#123;13&#125;$
          </Math>
          {" "} is like
          multiplying {" "}
          <Math>
            $13\cdot 14$
          </Math>
          {" "} times by {" "}
          <NoBreak>
            <Math>
              $10$
            </Math>
            .
          </NoBreak>
          {" "} More
          generally,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large (10^n)^m = 10^&#123;nm&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for all {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:212:5
            </span>
          </span>
          <Math>
            $n$
          </Math>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $m$
            </Math>
            .
          </NoBreak>
          {" "} This is known as “the third law
          of exponents”.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            If one writes
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:215:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large a^&#123;b^&#123;c&#125;&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <NoBreak>
            <span class="t-3003-c">
              [“
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:219:5
              </span>
            </span>
            <Math>
              $a$
            </Math>
          </NoBreak>
          {" "} to the power {" "}
          <Math>
            $b$
          </Math>
          {" "} to the power {" "}
          <NoBreak>
            <Math>
              $c$
            </Math>
            ”]
          </NoBreak>
          {" "}
          there is a seeming ambiguity: does it mean
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large a^&#123;\left(b^&#123;c&#125;\right)&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <NoBreak>
            <span class="t-3003-c">
              [“
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:224:5
              </span>
            </span>
            <Math>
              $a$
            </Math>
          </NoBreak>
          {" "} to the power {" "}
          <NoBreak>
            [
            <Math>
              $b$
            </Math>
          </NoBreak>
          {" "} to the power {" "}
          <NoBreak>
            <Math>
              $c$
            </Math>
            ]”]
          </NoBreak>
          {" "}
          or does it mean
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large (a^&#123;b&#125;)^&#123;c&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <NoBreak>
            <span class="t-3003-c">
              [“[
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:229:5
              </span>
            </span>
            <Math>
              $a$
            </Math>
          </NoBreak>
          {" "} to the power {" "}
          <NoBreak>
            <Math>
              $b$
            </Math>
            ]
          </NoBreak>
          {" "} to the power {" "}
          <NoBreak>
            <Math>
              $c$
            </Math>
            ”]...?
          </NoBreak>
          {" "}
          Well, because the second way can be written
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large a^&#123;bc&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            by the third law of exponents, the second way already has
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:234:5
            </span>
          </span>
          {" "}
          {" "}
          “its own” notation, and therefore the convention is that...
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large a^&#123;b^c&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...absolutely always means...
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:239:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large a^&#123;\left(b^c\right)&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...!
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:243:5
            </span>
          </span>
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 3 && <>
      <Pause />
      <Section id="section-6">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Famous powers of 10.
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:248:6
              </span>
            </span>
          </b>
          {" "}
          Many human languages have special names for
          various integer powers of {" "}
          <NoBreak>
            <Math>
              $10$
            </Math>
            ,
          </NoBreak>
          {" "} because many of our ancestors chose to count in base
          {" "}
          <NoBreak>
            <Math>
              $10$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            In English, e.g., these are some of the “famous”
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:253:5
            </span>
          </span>
          {" "}
          {" "}
          powers of {" "}
          <NoBreak>
            <Math>
              $10$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Table class="first-line">
          <colgroup>
            <col width="60px" />
            <col width="200px" />
            <col width="140px" />
          </colgroup>
          <tbody>
            <tr>
              <td class="align-center">
                <Math>
                  $n$
                </Math>
              </td>
              <td class="align-center">
                <Math>
                  $\,\,10^n$
                </Math>
              </td>
              <td class="align-center">
                <span class="t-3003-c">
                  name
                  <span class="t-3003">
                    ./src/content/bt2/bt2.wly:281:21
                  </span>
                </span>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $0$
                </Math>
              </td>
              <td class="align-center">
                <Math>
                  $1$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    one
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:294:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $1$
                </Math>
              </td>
              <td class="align-center">
                <Math>
                  $10$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    ten
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:308:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $2$
                </Math>
              </td>
              <td class="align-center">
                <Math>
                  $100$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    hundred
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:321:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $3$
                </Math>
              </td>
              <td class="align-center">
                <Math>
                  $1000$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    thousand
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:334:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $6$
                </Math>
              </td>
              <td class="align-center">
                <Math>
                  $1\,000\,000$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    million
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:347:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $9$
                </Math>
              </td>
              <td class="align-center">
                <Math>
                  $1\,000\,000\,000$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    billion
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:360:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $12$
                </Math>
              </td>
              <td class="align-center">
                <Math>
                  $1\,000\,000\,000\,000$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    trillion
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:373:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
          </tbody>
        </Table>
        <Pause />
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            one million is a thousand thousand
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:377:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            because
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:378:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large 1000 \times 1000 = 1000\hspace&#123;0.3ex&#125;000
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            by counting zeroes, or, equivalently, because
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:382:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large 10^3 \times 10^3 = 10^6
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            by additivity of exponents. Similarly,
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:386:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            one billion is a thousand million
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:388:7
            </span>
          </span>
          <ImageLeft
            src="/build-img/svgo-svg/55Oe.svg"
            local_url="./images/svg_bt2_bt_ten_to_the_3_times_ten_to_the_6_cloud.svg"
            intrinsicWidth={250}
            intrinsicHeight={100}
          />
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:393:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            one trillion is a thousand billion
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:393:11
            </span>
          </span>
          <ImageLeft
            src="/build-img/svgo-svg/tAeJ.svg"
            local_url="./images/svg_bt2_bt_ten_to_the_3_times_ten_to_the_9_cloud.svg"
            intrinsicWidth={250}
            intrinsicHeight={100}
          />
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and also (while we're at it)
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:398:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            one trillion is a million million
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:400:7
            </span>
          </span>
          <ImageRight
            src="/build-img/svgo-svg/xlFe.svg"
            local_url="./images/svg_bt2_bt_ten_to_the_6_times_ten_to_the_6_cloud.svg"
            intrinsicWidth={300}
            intrinsicHeight={100}
          />
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            as seen by replacing “billion”
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:405:5
            </span>
          </span>
          {" "}
          {" "}
          with “thousand million” in the previous sentence and
          then replacing “thousand thousand” with “million”
          in {" "}
          <i>
            that
          </i>
          {" "} sentence.
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 4 && <>
      <Pause />
      <Section id="section-7">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Negative exponent prefixes.
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:412:6
              </span>
            </span>
          </b>
          {" "}
          For negative exponents we simply say “one tenth”
          instead of “ten”, etc. Specifically, the table looks
          like so:
        </OuterP>
        <Pause />
        <Table class="first-line">
          <colgroup>
            <col width="60px" />
            <col width="200px" />
            <col width="140px" />
          </colgroup>
          <tbody>
            <tr>
              <td class="align-center">
                <Math>
                  $n$
                </Math>
              </td>
              <td class="align-center">
                <Math>
                  $\,\,10^n$
                </Math>
              </td>
              <td class="align-center">
                <span class="t-3003-c">
                  name
                  <span class="t-3003">
                    ./src/content/bt2/bt2.wly:439:21
                  </span>
                </span>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $-1$
                </Math>
              </td>
              <td class="align-center">
                <Math>
                  $0.1$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    one tenth
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:452:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $-2$
                </Math>
              </td>
              <td class="align-center">
                <Math>
                  $0.01$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    one hundredth
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:465:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $-3$
                </Math>
              </td>
              <td class="align-center">
                <Math>
                  $0.001$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    one thousandth
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:478:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $-6$
                </Math>
              </td>
              <td class="align-center">
                <Math>
                  $0.000001$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    one millionth
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:491:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $-9$
                </Math>
              </td>
              <td class="align-center">
                <Math>
                  $0.000000001$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    one billionth
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:504:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
          </tbody>
        </Table>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Notice how the standard decimal expansion
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:508:5
            </span>
          </span>
          {" "}
          {" "}
          for {" "}
          <Math>
            $10^&#123;-1&#125;$
          </Math>
          {" "} contains exactly one {" "}
          <NoBreak>
            <Math>
              $&#123;0&#125;$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/VZCO.svg"
          local_url="./images/svg_one_blue_one_image_equation.svg"
          intrinsicWidth={100}
          intrinsicHeight={55}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Likewise, the standard decimal expansion for {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:514:5
            </span>
          </span>
          <Math>
            $10^&#123;-2&#125;$
          </Math>
          {" "}
          contains exactly two {" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            's...
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/A20h.svg"
          local_url="./images/svg_two_blue_one_image_equation.svg"
          intrinsicWidth={100}
          intrinsicHeight={55}
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...and so on, a trick for checking one's work.
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:520:5
            </span>
          </span>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            However, there also exist negative exponent
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:522:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            prefixes
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:524:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            that people use to qualify other measures. For
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:526:5
            </span>
          </span>
          {" "}
          {" "}
          example, a
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            millimeter
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:529:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:531:5
            </span>
          </span>
          <Math>
            $10^&#123;-3&#125;$
          </Math>
          {" "} meters, i.e., one thousandth of
          a meter, because “milli” is the prefix
          for {" "}
          <NoBreak>
            <Math>
              $10^&#123;-3&#125;$
            </Math>
            .
          </NoBreak>
          {" "} Here is a list of the most common
          such prefixes:
        </OuterP>
        <Pause />
        <Table class="first-line">
          <colgroup>
            <col width="120px" />
            <col width="120px" />
          </colgroup>
          <tbody>
            <tr>
              <td class="align-center">
                <span class="t-3003-c">
                  power
                  <span class="t-3003">
                    ./src/content/bt2/bt2.wly:548:21
                  </span>
                </span>
              </td>
              <td class="align-center">
                <span class="t-3003-c">
                  prefix
                  <span class="t-3003">
                    ./src/content/bt2/bt2.wly:552:21
                  </span>
                </span>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $10^&#123;-1&#125;$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    deci
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:561:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $10^&#123;-2&#125;$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    centi
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:570:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $10^&#123;-3&#125;$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    milli
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:579:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $10^&#123;-6&#125;$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    micro
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:588:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $10^&#123;-9&#125;$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    nano
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:597:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $10^&#123;-12&#125;$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    pico
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:606:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $10^&#123;-15&#125;$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    femto
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:616:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
          </tbody>
        </Table>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (Funny how the prefixes switch from
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:620:5
            </span>
          </span>
          {" "}
          {" "}
          ending in ‘i’ to ending in ‘o’ after
          {" "}
          <NoBreak>
            <Math>
              $10^&#123;-3&#125;$
            </Math>
            .)
          </NoBreak>
          {" "} (Well, anyway.)
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            To give an idea of scale,
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:624:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            micrometers
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:626:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            are smaller than the smallest animal
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:628:5
            </span>
          </span>
          {" "}
          {" "}
          cells (human red blood cells, which
          are among the smallest animal cells,
          have a diameter of
          {" "}
          <NoBreak>
            <Math>
              $7$
            </Math>
            ~
          </NoBreak>
          <Math>
            $9$
          </Math>
          {" "} {" "}
          <NoBreak>
            <Math>
              $\mu\textrm&#123;m&#125;$
            </Math>
            )
          </NoBreak>
          {" "} (nb: {" "}
          <NoBreak>
            “
            <Math>
              $\mu$
            </Math>
            ”
          </NoBreak>
          {" "}
          stands for “micro” and {" "}
          <NoBreak>
            “
            <Math>
              $\mu$
            </Math>
            m”
          </NoBreak>
          {" "} stands
          for “micrometer”). Next down,
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            nanometers
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:636:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            are smaller than the diameter of DNA, about {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:638:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $2.5$
            </Math>
            nm
          </NoBreak>
          {" "} (“nm” = “nanometer”).
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 5 && <>
      <Pause />
      <Section id="section-8">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Positive exponent prefixes.
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:642:6
              </span>
            </span>
          </b>
          {" "}
          There exists a similar set of prefixes
          for positive powers of {" "}
          <NoBreak>
            <Math>
              $10$
            </Math>
            .
          </NoBreak>
          {" "} Going up
          to {" "}
          <NoBreak>
            <Math>
              $10^&#123;15&#125;$
            </Math>
            ,
          </NoBreak>
          {" "} these are:
        </OuterP>
        <Pause />
        <Table
          class="first-line"
          marginTop="1em"
          marginBottom="1em"
        >
          <colgroup>
            <col width="120px" />
            <col width="120px" />
          </colgroup>
          <tbody>
            <tr>
              <td class="align-center">
                <span class="t-3003-c">
                  power
                  <span class="t-3003">
                    ./src/content/bt2/bt2.wly:661:21
                  </span>
                </span>
              </td>
              <td class="align-center">
                <span class="t-3003-c">
                  prefix
                  <span class="t-3003">
                    ./src/content/bt2/bt2.wly:665:21
                  </span>
                </span>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $10^1$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    deca
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:674:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $10^&#123;2&#125;$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    hecto
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:683:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $10^&#123;3&#125;$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    kilo
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:692:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $10^&#123;6&#125;$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    mega
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:701:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $10^&#123;9&#125;$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    giga
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:710:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $10^&#123;12&#125;$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    tera
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:719:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
            <tr>
              <td class="align-center">
                <Math>
                  $10^&#123;15&#125;$
                </Math>
              </td>
              <td class="align-center">
                <i>
                  <span class="t-3003-c">
                    peta
                    <span class="t-3003">
                      ./src/content/bt2/bt2.wly:728:22
                    </span>
                  </span>
                </i>
              </td>
            </tr>
          </tbody>
        </Table>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            For example, a
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:730:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            kilometer
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:732:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a thousand meters
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:734:5
            </span>
          </span>
          {" "}
          {" "}
          {" "}{" "}
          <NoBreak>
            [b/
            <Math>
              $\!\hspace&#123;0.1ex&#125;\rm&#123;c&#125;$
            </Math>
          </NoBreak>
          {" "} “kilo” = thousand],
          while a
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            terabyte
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:738:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a trillion bytes {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:740:5
            </span>
          </span>
          <NoBreak>
            [b/
            <Math>
              $\!\hspace&#123;0.1ex&#125;\rm&#123;c&#125;$
            </Math>
          </NoBreak>
          {" "} “tera” = trillion].
          (A
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            byte
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:741:10
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a unit of computer memory
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:741:16
            </span>
          </span>
          {" "}
          {" "}
          equal to {" "}
          <Math>
            $8$
          </Math>
          {" "} {" "}
          <i>
            bits
          </i>
          , with a {" "}
          <i>
            bit
          </i>
          {" "}
          being a single 0/1 value.)
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 6 && <>
      <Pause />
      <Section id="section-9">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Logarithms base 10.
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:747:6
              </span>
            </span>
          </b>
          {" "}
          Every positive number can be uniquely
          written as “ten to the power something”.
          This “something” is called
          the {" "}
          <i>
            logarithm base {" "}
            <Math>
              $\mathit&#123;10&#125;$
            </Math>
          </i>
          {" "} of that
          number.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            For example,
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:754:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large 100
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:758:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            ten to the power {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:760:7
            </span>
          </span>
          <Math>
            $\mathit&#123;2&#125;$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            so
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:762:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large 2
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is the logarithm base {" "}
            <span class="t-3003">
              ./src/content/bt2/bt2.wly:766:5
            </span>
          </span>
          <Math>
            $10$
          </Math>
          {" "} of {" "}
          <NoBreak>
            <Math>
              $100$
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
              It so happens that
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:770:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large 99 = 10^&#123;1.99563519...&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              under an extended definition of exponentiation that allows us to
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:774:9
              </span>
            </span>
            {" "}
            {" "}
            compute {" "}
            <Math>
              $10^x$
            </Math>
            {" "} for every {" "}
            <NoBreak>
              <Math>
                $x \in \rr$
              </Math>
              .
            </NoBreak>
            {" "}
            So
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large 1.99563519...
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              is the logarithm base {" "}
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:780:9
              </span>
            </span>
            <Math>
              $10$
            </Math>
            {" "} of {" "}
            <NoBreak>
              <Math>
                $99$
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
              It so happens that
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:784:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large 98 = 10^&#123;1.99122607...&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              under the same extended definition, so
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:788:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large 1.99122607...
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              is the logarithm base {" "}
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:792:9
              </span>
            </span>
            <Math>
              $10$
            </Math>
            {" "} of {" "}
            <NoBreak>
              <Math>
                $98$
              </Math>
              .
            </NoBreak>
          </OuterP>
        </Example>
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
              Since
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:796:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large 0.1 = 10^&#123;-1&#125;
            $$
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              the logarithm base {" "}
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:800:9
              </span>
            </span>
            <Math>
              $10$
            </Math>
            {" "} of {" "}
            <Math>
              $0.1$
            </Math>
            {" "} is {" "}
            <NoBreak>
              <Math>
                $-1$
              </Math>
              .
            </NoBreak>
          </OuterP>
        </Example>
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
                ./src/content/bt2/bt2.wly:804:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Large 0.00001 = 10^&#123;-5&#125;
            $$
            <ImageRight
              src="/build-img/svgo-svg/nMNN.svg"
              offsetX=" 0em"
              atLeastAsWide={true}
              local_url="./images/svg_bt2_bt_ten_to_the_minus_5_cloud.svg"
              intrinsicWidth={250}
              intrinsicHeight={150}
            />
            <MathJaxSvgExportTooltip />
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              the logarithm base {" "}
              <span class="t-3003">
                ./src/content/bt2/bt2.wly:813:9
              </span>
            </span>
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
        </Example>
      </Section>
    </>}
    {visibleRestSections() > 7 && <>
      <Pause />
      <Exercises
        at_end_of_page={true}
        mode="dual"
        show_curlicue={true}
        id="_19_h.a.i_"
      >
        <Exercise number={1}>
          <ExerciseStatement id="_4_h.a.i_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Compute {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_by_hand_1_.wly:4:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $2^&#123;-2&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $2^&#123;-3&#125;$
              </Math>
              {" "} and {" "}
              <Math>
                $2^&#123;-4&#125;$
              </Math>
              {" "} by hand.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Since {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_by_hand_1_.wly:7:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $2^&#123;-1&#125; = 1/2 = 0.5$
                </Math>
                ,
              </NoBreak>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 2^&#123;-2&#125; = &#123;2^&#123;-1&#125;\over 2&#125; = &#123;0.5 \over 2&#125; = 0.25
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large 2^&#123;-3&#125; = &#123;2^&#123;-2&#125;\over 2&#125; = &#123;0.25 \over 2&#125; = 0.125
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large 2^&#123;-4&#125; = &#123;2^&#123;-3&#125;\over 2&#125; = &#123;0.125 \over 2&#125; = 0.0625
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
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
                  For the last computation, {" "}
                  <span class="t-3003">
                    ./src/content/bt2/bt2^exercises/_by_hand_1_.wly:20:13
                  </span>
                </span>
                <Math>
                  $0.125$
                </Math>
                {" "} can be viewed
                as twelve hundredths plus {" "}
                <Math>
                  $5$
                </Math>
                {" "} thousandths:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/KJqj.svg"
                local_url="./images/svg_0.125_twelve_5.svg"
                intrinsicWidth={400}
                intrinsicHeight={80}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  Half of twelve hundredths is six hundredths, and
                  <span class="t-3003">
                    ./src/content/bt2/bt2^exercises/_by_hand_1_.wly:26:13
                  </span>
                </span>
                {" "}
                {" "}
                half of {" "}
                <Math>
                  $5$
                </Math>
                {" "} thousandths is {" "}
                <Math>
                  $2.5$
                </Math>
                {" "} thousandths:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/SBDm.svg"
                local_url="./images/svg_06_and_0025.svg"
                intrinsicWidth={450}
                intrinsicHeight={150}
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...so {" "}
                  <span class="t-3003">
                    ./src/content/bt2/bt2^exercises/_by_hand_1_.wly:32:13
                  </span>
                </span>
                <Math>
                  $0.125/2$
                </Math>
                {" "} is {" "}
                <NoBreak>
                  <Math>
                    $0.06 + 0.0025 = 0.0625$
                  </Math>
                  .
                </NoBreak>
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={2}>
          <ExerciseStatement id="_5_h.a.i_">
            <OuterP>
              <b>
                Exercise 2.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Compute {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_by_hand_2_.wly:4:5
                </span>
              </span>
              <Math>
                $100/16$
              </Math>
              {" "} by hand.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <MathBlock>
              $$
              \Large &#123;1 \over 16&#125; = &#123;1 \over 2\cdot 2\cdot 2\cdot 2&#125; = 2^&#123;-4&#125; = 0.0625
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                so
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_by_hand_2_.wly:11:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;100 \over 16&#125; = 100 \cdot &#123;1 \over 16&#125; = 100\cdot 0.0625 = 6.25
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and that's all there is to it! (Or divide {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_by_hand_2_.wly:15:9
                </span>
              </span>
              <Math>
                $100$
              </Math>
              {" "} by {" "}
              <Math>
                $2$
              </Math>
              {" "} four times to get {" "}
              <NoBreak>
                <Math>
                  $6.25$
                </Math>
                .)
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={3}>
          <ExerciseStatement id="_6_h.a.i_">
            <OuterP>
              <b>
                Exercise 3.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                If “万” is Chinese for {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_ten_thousand_.wly:4:5
                </span>
              </span>
              <i>
                ten thousand
              </i>
              , what is “万万” in English?
              What about “万万万”?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                “万万” is “ten thousand ten thousand”, or
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_ten_thousand_.wly:9:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 10^4 \times 10^4 = 10^8
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                or {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_ten_thousand_.wly:13:9
                </span>
              </span>
              <i>
                one hundred million
              </i>
              {" "} since {" "}
              <Math>
                $10^8 = 10^2 \times 10^6$
              </Math>
              {" "} is a hundred times a
              million. Similarly, “万万万” is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 10^4 \times 10^4 \times 10^4 = 10^&#123;12&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which is just one trillion.
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_ten_thousand_.wly:18:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Notes.
                  <span class="t-3003">
                    ./src/content/bt2/bt2^exercises/_ten_thousand_.wly:22:10
                  </span>
                </span>
              </i>
              {" "}
              Rearranging
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                ten thousand ten thousand
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_ten_thousand_.wly:25:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                to
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_ten_thousand_.wly:27:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                ten ten thousand thousand
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_ten_thousand_.wly:29:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                gives “hundred million”
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_ten_thousand_.wly:31:9
                </span>
              </span>
              {" "}
              {" "}
              without exponents, since ten
              times ten is a hundred and since a thousand
              times a thousand is a million.
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                (Similarly,
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_ten_thousand_.wly:36:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                ten thousand ten thousand ten thousand
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_ten_thousand_.wly:38:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                becomes
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_ten_thousand_.wly:40:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                ten ten ten thousand thousand thousand
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_ten_thousand_.wly:42:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                after rearrangement, which equals one trillion because “ten ten ten” is
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_ten_thousand_.wly:44:9
                </span>
              </span>
              {" "}
              {" "}
              a thousand.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={4}>
          <ExerciseStatement id="_7_h.a.i_">
            <OuterP>
              <b>
                Exercise 4.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                How many millimeters in a kilometer?
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_kilometers_per_millimeter_.wly:4:5
                </span>
              </span>
              {" "}
              {" "}
              How many kilometers in a millimeter?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                There are {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_kilometers_per_millimeter_.wly:9:9
                </span>
              </span>
              <Math>
                $10^3$
              </Math>
              {" "} millimeters in a meter
              (
              <i>
                milli
              </i>
              {" "} = thousandth) and {" "}
              <Math>
                $10^3$
              </Math>
              {" "} meters
              in a kilometer, so there are
              {" "}
              <Math>
                $10^3 \times 10^3 = 10^6$
              </Math>
              {" "}
              millimeters in a kilometer.
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                So there are {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_kilometers_per_millimeter_.wly:15:9
                </span>
              </span>
              <Math>
                $1/10^6 = 10^&#123;-6&#125;$
              </Math>
              {" "} kilometers in
              a millimeter.
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                (Or reason in reverse:
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_kilometers_per_millimeter_.wly:18:9
                </span>
              </span>
              {" "}
              {" "}
              There are {" "}
              <Math>
                $10^&#123;-3&#125;$
              </Math>
              {" "} kilometers in a meter,
              and {" "}
              <Math>
                $10^&#123;-3&#125;$
              </Math>
              {" "} meters in a millimeter,
              so {" "}
              <Math>
                $10^&#123;-3&#125; \times 10^&#123;-3&#125; = 10^&#123;-6&#125;$
              </Math>
              {" "}
              kilometers in a millimeter.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={5}>
          <ExerciseStatement id="_8_h.a.i_">
            <OuterP>
              <b>
                Exercise 5.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                How many kilometers is {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_kilometers_per_10^2_millimeters_.wly:4:5
                </span>
              </span>
              <Math>
                $10^&#123;24&#125;$
              </Math>
              {" "} millimeters?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <MathBlock>
              $$
              \Large 1\textrm&#123;mm&#125; = 10^&#123;-6&#125;\textrm&#123;km&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by the previous problem, so
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_kilometers_per_10^2_millimeters_.wly:11:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 10^&#123;24&#125; \textrm&#123;mm&#125; = 10^&#123;24&#125;\cdot 10^&#123;-6&#125;\textrm&#123;km&#125; = 10^&#123;18&#125;\textrm&#123;km&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by direct substitution. (You can do that with
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_kilometers_per_10^2_millimeters_.wly:15:9
                </span>
              </span>
              {" "}
              {" "}
              units.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={6}>
          <ExerciseStatement id="_9_h.a.i_">
            <OuterP>
              <b>
                Exercise 6.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                If the US yearly budget is {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_US_year_budget_percentage_.wly:4:5
                </span>
              </span>
              <Math>
                $4$
              </Math>
              {" "} trillion
              dollars, what percentage of the budget is
              one hundred billion $?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                One hundred billion is {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_US_year_budget_percentage_.wly:10:9
                </span>
              </span>
              <Math>
                $10\%$
              </Math>
              {" "} of one trillion [cf.:
              {" "}
              <NoBreak>
                <Math>
                  $10^2 \times 10^9 = &#123;1 \over 10&#125;\times 10^&#123;12&#125;$
                </Math>
                ]
              </NoBreak>
              {" "}
              and one trillion is a quarter of {" "}
              <Math>
                $4$
              </Math>
              {" "}
              trillion, so the answer is {" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 4&#125;\cdot 10\% = 2.5\%$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Postscript
                  <span class="t-3003">
                    ./src/content/bt2/bt2^exercises/_US_year_budget_percentage_.wly:17:10
                  </span>
                </span>
              </i>
              :
              There is no such thing as “the U.S. budget”. A
              monetarily sovereign nation {" "}
              <i>
                spends
              </i>
              {" "} its currency
              into existence. (And taxes it out of existence.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={7}>
          <ExerciseStatement id="_10_h.a.i_">
            <OuterP>
              <b>
                Exercise 7.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                What is the logarithm base {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_logarithm_base_10_of_10^12_.wly:4:5
                </span>
              </span>
              <Math>
                $10$
              </Math>
              {" "} of one trillion?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <NoBreak>
                <Math>
                  $12$
                </Math>
                <span class="t-3003-c">
                  ,
                  <span class="t-3003">
                    ./src/content/bt2/bt2^exercises/_logarithm_base_10_of_10^12_.wly:8:13
                  </span>
                </span>
              </NoBreak>
              {" "} because one trillion is {" "}
              <NoBreak>
                <Math>
                  $10^&#123;12&#125;$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={8}>
          <ExerciseStatement id="_11_h.a.i_">
            <OuterP>
              <b>
                Exercise 8.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                What is the logarithm base {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_logarithm_base_10_of_1_.wly:4:5
                </span>
              </span>
              <Math>
                $10$
              </Math>
              {" "} of {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <NoBreak>
                <Math>
                  $0$
                </Math>
                <span class="t-3003-c">
                  ,
                  <span class="t-3003">
                    ./src/content/bt2/bt2^exercises/_logarithm_base_10_of_1_.wly:8:12
                  </span>
                </span>
              </NoBreak>
              {" "} because {" "}
              <NoBreak>
                <Math>
                  $1 = 10^0$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={9}>
          <ExerciseStatement id="_12_h.a.i_">
            <OuterP>
              <b>
                Exercise 9.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                What is the logarithm base {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_logarithm_base_10_of_product_.wly:4:5
                </span>
              </span>
              <Math>
                $10$
              </Math>
              {" "} of: {" "}
              <i>
                a trillion times a billion times a million times a thousand
              </i>
              ?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Since
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_logarithm_base_10_of_product_.wly:8:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 10^&#123;12&#125;\times 10^&#123;9&#125;\times 10^&#123;6&#125;\times 10^3 = 10^&#123;12+9+6+3&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                the answer is {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_logarithm_base_10_of_product_.wly:12:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $12+9+6+3$
                </Math>
                ,
              </NoBreak>
              {" "} or {" "}
              <NoBreak>
                <Math>
                  $30$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={10}>
          <ExerciseStatement id="_13_h.a.i_">
            <OuterP>
              <b>
                Exercise 10.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Evaluate:
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_fraction_of_multiple_of_powers_.wly:4:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;10^6 \cdot 10^&#123;-12&#125; \cdot 10^&#123;10&#125; \over 10^&#123;-4&#125;\cdot 10^&#123;-4&#125;&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
          </ExerciseStatement>
          <Solution>
            <MathBlock>
              $$
              \Large &#123;10^6 \cdot 10^&#123;-12&#125; \cdot 10^&#123;10&#125; \over 10^&#123;-4&#125;\cdot 10^&#123;-4&#125;&#125; = &#123;10^&#123;6-12+10&#125; \over 10^&#123;-4 -4&#125;&#125; = &#123;10^4 \over 10^&#123;-8&#125;&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_fraction_of_multiple_of_powers_.wly:13:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;10^4 \over 10^&#123;-8&#125;&#125; = 10^4 \cdot &#123;1 \over 10^&#123;-8&#125;&#125; = 10^4\cdot 10^&#123;-(-8)&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_fraction_of_multiple_of_powers_.wly:17:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 10^4\cdot 10^&#123;-(-8)&#125; = 10^4\cdot 10^8 = 10^&#123;4 + 8&#125; = 10^&#123;12&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
          </Solution>
        </Exercise>
        <Exercise number={11}>
          <ExerciseStatement id="_14_h.a.i_">
            <OuterP>
              <b>
                Exercise 11.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                How many {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_millibits_per_gigabyte_.wly:4:5
                </span>
              </span>
              <i>
                millibits
              </i>
              {" "} in a {" "}
              <i>
                gigabyte
              </i>
              ?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Presumably, there are {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_millibits_per_gigabyte_.wly:8:9
                </span>
              </span>
              <Math>
                $1000$
              </Math>
              {" "} “millibits”
              (whatever those are, we can go along with
              the joke here) in one bit. Since there are
              eight bits in a byte, and a billion bytes
              in a gigabyte, there would be
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 1000 \times 8 \times 10^9 = 8 \times 10^&#123;12&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                or {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_millibits_per_gigabyte_.wly:16:9
                </span>
              </span>
              <Math>
                $8$
              </Math>
              {" "} trillion “millibits” per gigabyte.
              (But there is no such thing
              as a “millibit”; a bit is a {" "}
              <i>
                discrete
              </i>
              —i.e.,
              indivisible—unit of computer memory.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={12}>
          <ExerciseStatement id="_15_h.a.i_">
            <OuterP>
              <b>
                Exercise 12.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                It so happens that
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_6.25_written_other_way.wly:4:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 6.25
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (i.e., the value of {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_6.25_written_other_way.wly:8:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $100/16$
                </Math>
                )
              </NoBreak>
              {" "} is also
              famous for being equal to {" "}
              <NoBreak>
                <Math>
                  $2.5^2$
                </Math>
                .
              </NoBreak>
              {" "} (You can
              verify that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 25^2 = 625
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and, by shifting two decimal places, one
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_6.25_written_other_way.wly:14:5
                </span>
              </span>
              {" "}
              {" "}
              finds {" "}
              <NoBreak>
                <Math>
                  $2.5^2 = 6.25$
                </Math>
                .)
              </NoBreak>
              {" "} Can you explain why
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;100 \over 16&#125; = 2.5^2
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                using algebra?
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_6.25_written_other_way.wly:19:5
                </span>
              </span>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <MathBlock>
              $$
              \Large &#123;100 \over 16&#125; = &#123;10^2 \over 4^2&#125; = \left(\!&#123;10\over 4&#125;\!\right)^&#123;\!\!2&#125; = \left(\!&#123;5\over 2&#125;\!\right)^&#123;\!\!2&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_6.25_written_other_way.wly:26:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $5/2 = 2.5$
                </Math>
                .
              </NoBreak>
              {" "} (Ta-daa!)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={13}>
          <ExerciseStatement id="_16_h.a.i_">
            <OuterP>
              <b>
                Exercise 13.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Prove that
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_10^n_over_10^m_.wly:4:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;10^n \over \up&#123;1&#125;10^m&#125; = 10^&#123;n-m&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for all integers {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_10^n_over_10^m_.wly:8:5
                </span>
              </span>
              <Math>
                $n$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $m$
                </Math>
                .
              </NoBreak>
              {" "} (You can take for granted any
              identity stated in this {" "}
              <del>
                chapter
              </del>
              {" "} bootcamp.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Here is the “proof” that your professor is
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_10^n_over_10^m_.wly:16:9
                </span>
              </span>
              {" "}
              {" "}
              hoping for:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/FF0n.svg"
              local_url="./images/svg_start_end_proof.svg"
              intrinsicWidth={450}
              intrinsicHeight={245}
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The second equality uses the identity
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_10^n_over_10^m_.wly:22:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;1 \over 10^m&#125; = 10^&#123;-m&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                stated earlier as (&#8288;
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_10^n_over_10^m_.wly:26:9
                </span>
              </span>
              <InChapterLink
                href="#_2_h.a.i_"
                class="in-chapter-link"
              >
                A
              </InChapterLink>
              &#8288;),
              while the third equality uses additivity of exponents,
              also stated earlier. (So: We are only using “known”
              facts, alongside some ordinary arithmetic.)
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Notes.
                  <span class="t-3003">
                    ./src/content/bt2/bt2^exercises/_10^n_over_10^m_.wly:33:10
                  </span>
                </span>
              </i>
              {" "}
              The identity proved in this exercise,
              when generalized to any base,
              is one of the “laws of exponents”, whose complete list
              (even more-than-complete, other sources list fewer laws)
              is as follows (minus fine print):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/5e0k.svg"
              local_url="./images/svg_laws_exp.svg"
              intrinsicWidth="672.44"
              intrinsicHeight="613.41"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The first law is “additivity of exponents”
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_10^n_over_10^m_.wly:43:9
                </span>
              </span>
              {" "}
              {" "}
              while the second law
              is the generalization of this exercise's result.
              (For the next-to-last law, {" "}
              <i>
                by definition
              </i>
              ,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \left(&#123;a\over b&#125;\right)^&#123;\!-1&#125; = &#123;1 \over \left( &#123;a \over b&#125;\right)&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and it so happens that
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_10^n_over_10^m_.wly:50:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;1 \over \left( &#123;a \over b&#125;\right)&#125; = &#123;b \over a&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for all {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_10^n_over_10^m_.wly:54:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $a, b \ne 0$
                </Math>
                ,
              </NoBreak>
              {" "} by some principle of elementary arithmetic.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={14}>
          <ExerciseStatement id="_17_h.a.i_">
            <OuterP>
              <b>
                Exercise 14.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Rewrite each of these expressions...
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_MLT_rewrite_.wly:4:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;L \over T&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;M (L/T) \over T&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large \left.&#123;ML \over T^2 &#125; \right/ \left(&#123;L^2&#125; &#123;(L/T) \over L&#125;\right)
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...in the form...
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_MLT_rewrite_.wly:14:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large M^aL^bT^c
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...for some integer exponents {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_MLT_rewrite_.wly:18:5
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
              <NoBreak>
                <Math>
                  $c$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                (#1)
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_MLT_rewrite_.wly:22:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;L \over T&#125; = LT^&#123;-1&#125; = M^0L^1T^&#123;-1&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                since
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_MLT_rewrite_.wly:26:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;L \over T&#125; = L\cdot &#123;1\over T&#125; = LT^&#123;-1&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and (#2)
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_MLT_rewrite_.wly:30:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;M (L/T) \over T&#125; = MLT^&#123;-2&#125; = M^1L^1T^&#123;-2&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                since
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_MLT_rewrite_.wly:34:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;L/T \over T&#125; = &#123;L\over T&#125;\cdot&#123;1 \over T&#125; = &#123;L \over T^2&#125; = LT^&#123;-2&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and (#3)
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_MLT_rewrite_.wly:38:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \left.&#123;ML \over T^2 &#125; \right/ \left(&#123;L^2&#125; &#123;(L/T) \over L&#125;\right) = ML^&#123;-1&#125;T^&#123;-1&#125; = M^1L^&#123;-1&#125;T^&#123;-1&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                since
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_MLT_rewrite_.wly:42:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large L^2&#123;L/T\over L&#125; = L^2&#123;1/T \over 1&#125; = &#123;L^2\over T&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_MLT_rewrite_.wly:46:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \left.&#123;ML \over T^2 &#125; \right/ &#123;L^2\over T&#125; = &#123;ML\over T^2&#125;\cdot &#123;T\over L^2&#125; = &#123;M \over TL&#125; = MT^&#123;-1&#125;L^&#123;-1&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                given that {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_MLT_rewrite_.wly:50:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $&#123;1\over T&#125; = T^&#123;-1&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $&#123;1\over L&#125;=L^&#123;-1&#125;$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={15}>
          <ExerciseStatement id="_18_h.a.i_">
            <OuterP>
              <b>
                Exercise 15.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Find integers {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_solve_for_exponents_.wly:4:5
                </span>
              </span>
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
              {" "} and {" "}
              <Math>
                $c$
              </Math>
              {" "} such that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large v^aF^b\mu^c\rho = 1
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                where {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_solve_for_exponents_.wly:8:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $v$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $F$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\mu$
              </Math>
              {" "} and {" "}
              <Math>
                $\rho$
              </Math>
              {" "} are defined below.
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large v = &#123;L \over T&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large F = &#123;ML \over T^2&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large \mu = &#123;M \over TL &#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large \rho = &#123;M \over L^3&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                First, rewrite {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_solve_for_exponents_.wly:24:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $v$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $F$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $\mu$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\rho$
              </Math>
              {" "}
              in the canonical form {" "}
              <Math>
                $M^xL^yT^z$
              </Math>
              {" "}
              for integers {" "}
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
                $z$
              </Math>
              {" "} (as in {" "}
              <InChapterLink
                href="#_17_h.a.i_"
                class="in-chapter-link"
              >
                Exercise 14
              </InChapterLink>
              &#8288;):
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large v = LT^&#123;-1&#125; \vphantom&#123;\rho = ML^&#123;-3&#125;&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large F = MLT^&#123;-2&#125; \vphantom&#123;\rho = ML^&#123;-3&#125;&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large \mu = MT^&#123;-1&#125;L^&#123;-1&#125; \vphantom&#123;\rho = ML^&#123;-3&#125;&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large \rho = ML^&#123;-3&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (Ok.) Nextly, we compute {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_solve_for_exponents_.wly:40:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $v^a$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $F^b$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\mu^c$
              </Math>
              {" "}
              by applying the fourth law of exponents (note e.g.
              that {" "}
              <NoBreak>
                <Math>
                  $(T^&#123;-1&#125;)^a = T^&#123;(-1)a&#125; = T^&#123;-a&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} etc):
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large v^a = L^aT^&#123;-a&#125; \vphantom&#123;\rho = ML^&#123;-3&#125;&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large F^b = M^&#123;b&#125;L^bT^&#123;-2b&#125; \vphantom&#123;\rho = ML^&#123;-3&#125;&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large \mu^c = M^cT^&#123;-c&#125;L^&#123;-c&#125; \vphantom&#123;\rho = ML^&#123;-3&#125;&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large \rho = ML^&#123;-3&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Then {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_solve_for_exponents_.wly:55:9
                </span>
              </span>
              <Math>
                $v^aF^b\mu^c\rho$
              </Math>
              {" "} becomes
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large M^&#123;b+c+1&#125;L^&#123;a+b-c-3&#125;T^&#123;-a-2b-c&#125;
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by multiplying everything together and using
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_solve_for_exponents_.wly:59:9
                </span>
              </span>
              {" "}
              {" "}
              additivity of exponents. (E.g., {" "}
              <NoBreak>
                <Math>
                  $M^bM^cM = M^&#123;b+c+1&#125;$
                </Math>
                ,
              </NoBreak>
              {" "}
              and so on.) This expression equals
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 1
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                independently of the values of {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_solve_for_exponents_.wly:65:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $M$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $L$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $T$
              </Math>
              {" "}
              if and only if...
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                the three exponents are zero
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_solve_for_exponents_.wly:68:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...(!!!) which means that we need to find values
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_solve_for_exponents_.wly:70:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
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
              {" "} and {" "}
              <Math>
                $c$
              </Math>
              {" "} such that these three equations...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large b + c + 1 = 0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large a + b - c - 3 = 0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large -a -2b - c = 0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...are satisfied! Adding the second and third equations gives
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_solve_for_exponents_.wly:81:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large -b -2c -3 = 0
              $$
              <ImageRight
                src="/build-img/svgo-svg/bESG.svg"
                offsetY="-0.5em"
                offsetX=" 0.5em"
                atLeastAsWide={true}
                local_url="./images/svg_bt2_ex_equation_addition_cloud.svg"
                intrinsicWidth={440}
                intrinsicHeight={250}
              />
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and adding this last equation to the first
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_solve_for_exponents_.wly:89:9
                </span>
              </span>
              {" "}
              {" "}
              equation above, we find
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large -c -2 = 0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which implies that {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_solve_for_exponents_.wly:94:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $-c = 2$
                </Math>
                ,
              </NoBreak>
              {" "} i.e., that {" "}
              <NoBreak>
                <Math>
                  $c = -2$
                </Math>
                .
              </NoBreak>
              {" "}
              Plugging {" "}
              <Math>
                $c = -2$
              </Math>
              {" "} into the first of our three
              equations, we find
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large b + (-2) + 1 = 0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                or
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_solve_for_exponents_.wly:100:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large b - 1 = 0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which implies that {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_solve_for_exponents_.wly:104:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $b = 1$
                </Math>
                .
              </NoBreak>
              {" "} Lastly, plugging
              {" "}
              <NoBreak>
                <Math>
                  $b = 1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $c = -2$
              </Math>
              {" "} in our second equation above
              gives us
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large a + 1 - (-2) - 3 = 0
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which implies that {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_solve_for_exponents_.wly:110:9
                </span>
              </span>
              <Math>
                $a = 0$
              </Math>
              {" "} since {" "}
              <NoBreak>
                <Math>
                  $1-(-2)-3 = 0$
                </Math>
                .
              </NoBreak>
              {" "}
              (These values also satisfy the third equation, {" "}
              <NoBreak>
                <Math>
                  $-a-2b-c=0$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                In summary, the solution is {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_solve_for_exponents_.wly:113:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $a = 0$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $b = 1$
                </Math>
                ,
              </NoBreak>
              {" "}
              {" "}
              <NoBreak>
                <Math>
                  $c = -2$
                </Math>
                ;
              </NoBreak>
              {" "} we have discovered that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large v^0 F^1 \mu^&#123;-2&#125; \rho = 1
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                under the given definitions of {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_solve_for_exponents_.wly:118:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $v$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $F$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\mu$
              </Math>
              {" "}
              and {" "}
              <NoBreak>
                <Math>
                  $\rho$
                </Math>
                ,
              </NoBreak>
              {" "} or simply
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large F\mu^&#123;-2&#125;\rho = 1
              $$
              <MathJaxSvgExportTooltip />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (since {" "}
                <span class="t-3003">
                  ./src/content/bt2/bt2^exercises/_solve_for_exponents_.wly:123:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $v^0 = 1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $F^1 = F$
                </Math>
                ).
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};