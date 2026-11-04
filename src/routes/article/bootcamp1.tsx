import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { CentralDisplayItalic }  from "~/components/Delimiters";
import InChapterLink  from "~/components/InChapterLink";
import { MathBlock, Math }  from "~/components/Math";
import MathJaxSvgExportTooltip  from "~/components/MathJaxSvgExportTooltip";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageRight }  from "~/components/SideImage";
import { Pause, NoBreak, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Bootcamp1__() {
  return (
    <Article
      prevPage="/article/bootcamp2"
      nextPage="/"
      pageNecessaryMargin={160}
      maxElementWidth={800}
      id="_1_h.a.i_"
      path="/article/bootcamp1"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            <span class="t-3003-c">
              notation
              <span class="t-3003">
                ./src/content/bt1/bt1.wly:4:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            <span class="t-3003-c">
              what it does
              <span class="t-3003">
                ./src/content/bt1/bt1.wly:31:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=section-3">
            <span class="t-3003-c">
              set equality
              <span class="t-3003">
                ./src/content/bt1/bt1.wly:100:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            <span class="t-3003-c">
              second notation for the empty set
              <span class="t-3003">
                ./src/content/bt1/bt1.wly:162:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-4">
          <InChapterLink href="?id=section-5">
            <span class="t-3003-c">
              sets within sets
              <span class="t-3003">
                ./src/content/bt1/bt1.wly:175:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-5">
          <InChapterLink href="?id=section-6">
            <span class="t-3003-c">
              set union and set intersection
              <span class="t-3003">
                ./src/content/bt1/bt1.wly:231:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-6">
          <InChapterLink href="?id=section-7">
            <span class="t-3003-c">
              sets encountered in calculus
              <span class="t-3003">
                ./src/content/bt1/bt1.wly:302:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-7">
          <InChapterLink href="?id=section-8">
            <span class="t-3003-c">
              sets not encountered in calculus
              <span class="t-3003">
                ./src/content/bt1/bt1.wly:361:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Bootcamp 1:">
        <span class="t-3003-c">
          Sets
          <span class="t-3003">
            ./src/content/bt1/__parent.wly:2:11
          </span>
        </span>
      </ArticleTitle>
      <Section id="section-1">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Notation.
              <span class="t-3003">
                ./src/content/bt1/bt1.wly:4:6
              </span>
            </span>
          </b>
          {" "}
          Curly braces typically denote the beginning
          {" "}
          <NoBreak>
            “
            <Math>
              $\&#123;$
            </Math>
            ”
          </NoBreak>
          {" "} and ending {" "}
          <NoBreak>
            “
            <Math>
              $\&#125;$
            </Math>
            ”
          </NoBreak>
          {" "} of a collection of
          elements, otherwise known as a {" "}
          <i>
            set
          </i>
          .
          For example, this is a set containing the
          numbers {" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $2$
          </Math>
          {" "} and {" "}
          <Math>
            $3$
          </Math>
          {" "} (and nothing else):
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large\&#123;1, 2, 3\&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Or
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:13:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large\&#123;1\&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a set containing just the number {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:17:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $1$
            </Math>
            ,
          </NoBreak>
          {" "}
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large\&#123;1, 3\&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a set containing just the numbers {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:22:5
            </span>
          </span>
          <Math>
            $1$
          </Math>
          {" "}
          and {" "}
          <NoBreak>
            <Math>
              $3$
            </Math>
            ,
          </NoBreak>
          {" "} even
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large\&#123;\&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is an {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:27:5
            </span>
          </span>
          <i>
            empty
          </i>
          {" "} set, a set with no elements!
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-2">
        <OuterP>
          <b>
            <span class="t-3003-c">
              What it does.
              <span class="t-3003">
                ./src/content/bt1/bt1.wly:31:6
              </span>
            </span>
          </b>
          {" "}
          The “API” (a computer science notion,
          roughly meaning
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            the interface offered to the outside world
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:35:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for example, the buttons and clock
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:37:5
            </span>
          </span>
          {" "}
          {" "}
          display and door handle of a microwave oven)
          of a set offers just one operation:
          a set can answer questions of the form
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            do you contain ... ?
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:42:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            For example, you could ask a set
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:44:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            do you contain 3?
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:46:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            to which {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:48:5
            </span>
          </span>
          <Math>
            $\&#123;1, 2, 3\&#125;$
          </Math>
          {" "} would answer “yes”, but
          {" "}
          <Math>
            $\&#123; 1\&#125;$
          </Math>
          {" "} would answer “no”, or
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            do you contain 5?
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:51:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            to which {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:53:5
            </span>
          </span>
          <Math>
            $\&#123;1\&#125;$
          </Math>
          {" "} and {" "}
          <Math>
            $\&#123;1, 2, 3\&#125;$
          </Math>
          {" "} would
          both answer “no”.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            The expression
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:58:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large x \in A
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            means
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:62:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <Math>
            $A$
          </Math>
          <span class="t-3003-c">
            {" "} contains {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:64:10
            </span>
          </span>
          <Math>
            $x$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            or
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:66:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <Math>
            $A$
          </Math>
          <span class="t-3003-c">
            {" "} answers “yes” to the
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:68:10
            </span>
          </span>
          {" "}
          {" "}
          question “do you contain {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            <span class="t-3003-c">
              ?”.
              <span class="t-3003">
                ./src/content/bt1/bt1.wly:69:33
              </span>
            </span>
          </NoBreak>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            [One can also say
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:71:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <Math>
            $x$
          </Math>
          <span class="t-3003-c">
            {" "} in {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:73:10
            </span>
          </span>
          <Math>
            $A$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            or
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:75:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <Math>
            $x$
          </Math>
          <span class="t-3003-c">
            {" "} is in {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:77:10
            </span>
          </span>
          <Math>
            $A$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            or
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:79:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <Math>
            $x$
          </Math>
          <span class="t-3003-c">
            {" "} is an element of {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:81:10
            </span>
          </span>
          <Math>
            $A$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            depending on one's mood and/or tastes.]
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:83:5
            </span>
          </span>
          {" "}
          {" "}
          As in all of mathematics, such a statement is either true or false.
          For example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large 1 \in \&#123;1, 2\&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is true, because {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:89:5
            </span>
          </span>
          <Math>
            $1$
          </Math>
          {" "} {" "}
          <i>
            is
          </i>
          {" "} an element of the set
          {" "}
          <NoBreak>
            <Math>
              $\&#123;1, 2\&#125;$
            </Math>
            ,
          </NoBreak>
          {" "} whereas
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large 3 \in \&#123;1, 2\&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is false, because {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:94:5
            </span>
          </span>
          <Math>
            $3$
          </Math>
          {" "} {" "}
          <i>
            is not
          </i>
          {" "}
          an element of the set {" "}
          <NoBreak>
            <Math>
              $\&#123;1, 2\&#125;$
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
  const visibleRestSections = useShowMore(6);
  return <>
    {visibleRestSections() > 0 && <>
      <Section id="section-3">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Set Equality.
              <span class="t-3003">
                ./src/content/bt1/bt1.wly:100:6
              </span>
            </span>
          </b>
          {" "}
          Two sets are equal if and only if they
          answer the same to
          all “do you contain ...?” questions.
          For example, while
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large\&#123;2, 1\&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            might look different from
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:108:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large\&#123;1, 2\&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            these sets are one and the same,
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:112:5
            </span>
          </span>
          {" "}
          {" "}
          because they both answer “yes” to
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            do you contain 1?
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:115:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            do you contain 2?
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:116:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and answer “no” to all else. For that matter,
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:118:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large\&#123;1, 1, 2\&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            might also look different from
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:122:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large\&#123;1, 2\&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            but since both sets answer “yes” to
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:126:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            do you contain 1?
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:128:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            do you contain 2?
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:129:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and answer “no” to all else,
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:131:5
            </span>
          </span>
          {" "}
          {" "}
          they are by definition the same.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            (These examples demonstrate that human notation
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:134:5
            </span>
          </span>
          {" "}
          {" "}
          is redundant: there are several ways to
          write the same set. They also demonstrate
          that sets do not keep track of the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            order
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:139:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            nor of the
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:141:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            multiplicity
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:143:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            of their elements. Such notions are simply not part
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:145:5
            </span>
          </span>
          {" "}
          {" "}
          of the “API” of a set.)
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            Any two empty sets are equal because both
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:148:5
            </span>
          </span>
          {" "}
          {" "}
          answer “no” to everything. So there is
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            one
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:151:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and only one empty set. Therefore, mathematicians
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:153:5
            </span>
          </span>
          {" "}
          {" "}
          speak of
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            the
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:156:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            empty set—the one and only!
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:158:5
            </span>
          </span>
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 1 && <>
      <Pause />
      <Section id="section-4">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Second notation for the empty set.
              <span class="t-3003">
                ./src/content/bt1/bt1.wly:162:6
              </span>
            </span>
          </b>
          {" "}
          While the empty set can be written
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123;\&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            another notation is
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:167:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \varnothing
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            read “the empty set”.
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:171:5
            </span>
          </span>
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 2 && <>
      <Pause />
      <Section id="section-5">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Sets within sets.
              <span class="t-3003">
                ./src/content/bt1/bt1.wly:175:6
              </span>
            </span>
          </b>
          {" "}
          Sets can be nested much like Russian dolls.
          The result might even look a little like a Russian doll (no?):
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123;\&#123;\&#123;\&#123;\&#125;\&#125;\&#125;\&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            The above is “a set containing a set containing
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:183:5
            </span>
          </span>
          {" "}
          {" "}
          a set containing the empty set”.
          Eschewing complete adherence to the Russian doll
          aesthetic, we could also write
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123;\&#123;\&#123;\varnothing\&#125;\&#125;\&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for the same thing, given that {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:192:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $\varnothing = \&#123;\&#125;$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            Mind you,
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:194:5
            </span>
          </span>
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
            local_url="./images/svg_bt1_bt_empty_set_cloud.svg"
            intrinsicWidth={300}
            intrinsicHeight={150}
          />
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            because a box containing an empty box is not the
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:204:5
            </span>
          </span>
          {" "}
          {" "}
          same as an empty box! Specifically,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123; \&#123;\&#125; \&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            answers “yes” to the question “do you contain
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:211:5
            </span>
          </span>
          {" "}
          {" "}
          {" "}{" "}
          <NoBreak>
            <Math>
              $\&#123;\&#125;$
            </Math>
            ?”
          </NoBreak>
          {" "} (a.k.a., “do you contain {" "}
          <NoBreak>
            <Math>
              $\varnothing$
            </Math>
            ?”)
          </NoBreak>
          {" "} whereas
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123;\&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            answers “no” to the same question. (Indeed, while
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:218:5
            </span>
          </span>
          {" "}
          {" "}
          the empty set {" "}
          <i>
            contains
          </i>
          {" "} nothing, it {" "}
          <i>
            is
          </i>
          {" "} something.)
          Similarly,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123;\&#123;\&#123;\&#125;\&#125; \&#125; \ne \&#123;\&#123;\&#125;\&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            etc, etc: adding a new outer layer changes the
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:226:5
            </span>
          </span>
          {" "}
          {" "}
          whole set each time.
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 3 && <>
      <Pause />
      <Section id="section-6">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Set union and set intersection.
              <span class="t-3003">
                ./src/content/bt1/bt1.wly:231:6
              </span>
            </span>
          </b>
          {" "}
          The {" "}
          <i>
            union
          </i>
          {" "} of two sets {" "}
          <Math>
            $A$
          </Math>
          {" "} and {" "}
          <Math>
            $B$
          </Math>
          {" "} is
          written
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large A \cup B
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and is the set of elements either in {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:233:32
            </span>
          </span>
          <Math>
            $A$
          </Math>
          {" "} or in {" "}
          <NoBreak>
            <Math>
              $B$
            </Math>
            .
          </NoBreak>
          {" "} For
          example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123;1, 2\&#125; \cup \&#123;2, 5\&#125; = \&#123;1, 2, 5\&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            as {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:240:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $1$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $2$
          </Math>
          {" "} and {" "}
          <Math>
            $5$
          </Math>
          {" "} are the only elements in {" "}
          <Math>
            $\&#123;1, 2\&#125;$
          </Math>
          {" "} or in {" "}
          <NoBreak>
            <Math>
              $\&#123;2, 5\&#125;$
            </Math>
            .
          </NoBreak>
          {" "}
          The {" "}
          <i>
            intersection
          </i>
          {" "} of two sets {" "}
          <Math>
            $A$
          </Math>
          {" "} and
          {" "}
          <Math>
            $B$
          </Math>
          {" "} is written
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large A \cap B
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and is the set of elements both
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:248:5
            </span>
          </span>
          {" "}
          {" "}
          in {" "}
          <Math>
            $A$
          </Math>
          {" "} and in {" "}
          <NoBreak>
            <Math>
              $B$
            </Math>
            .
          </NoBreak>
          {" "} For example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123;1, 2\&#125; \cap \&#123;2, 5\&#125; = \&#123;2\&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            as {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:255:5
            </span>
          </span>
          <Math>
            $2$
          </Math>
          {" "} is the only element that is both in {" "}
          <Math>
            $\&#123;1, 2\&#125;$
          </Math>
          {" "}
          and in {" "}
          <NoBreak>
            <Math>
              $\&#123;2, 5\&#125;$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            Note that
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:258:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large x \in (A \cup B)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            if and only if
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:264:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large x \in A
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <i>
            <span class="t-3003-c">
              or
              <span class="t-3003">
                ./src/content/bt1/bt1.wly:270:6
              </span>
            </span>
          </i>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large x \in B
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            because that's how we defined “union”. (Replace
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:276:5
            </span>
          </span>
          {" "}
          {" "}
          “or” by “and” to get a definition of intersection.)
          A logician would define union by an abstruse expression like
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large x \in (A \cup B) \iff (x \in A) \vee (x \in B)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            read
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:284:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            an element {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:286:7
            </span>
          </span>
          <Math>
            $x$
          </Math>
          <span class="t-3003-c">
            {" "} is in the thing I call {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:286:21
            </span>
          </span>
          <NoBreak>
            <span class="t-3003-c">
              “
              <span class="t-3003">
                ./src/content/bt1/bt1.wly:286:21
              </span>
            </span>
            <Math>
              $A \cup B$
            </Math>
            <span class="t-3003-c">
              ”
              <span class="t-3003">
                ./src/content/bt1/bt1.wly:286:56
              </span>
            </span>
          </NoBreak>
          {" "}{" "}
          {" "}
          {" "}
          <span class="t-3003-c">
            if and only if {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:287:5
            </span>
          </span>
          <Math>
            $x$
          </Math>
          <span class="t-3003-c">
            {" "} is in {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:287:23
            </span>
          </span>
          <Math>
            $A$
          </Math>
          <span class="t-3003-c">
            {" "} or {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:287:33
            </span>
          </span>
          <Math>
            $x$
          </Math>
          <span class="t-3003-c">
            {" "} is in {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:287:40
            </span>
          </span>
          <Math>
            $B$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            as {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:289:5
            </span>
          </span>
          <NoBreak>
            “
            <Math>
              $\!\!\iff\!\!$
            </Math>
            ”
          </NoBreak>
          {" "} means “if and only if” and
          {" "}
          <NoBreak>
            “
            <Math>
              $\vee$
            </Math>
            ”
          </NoBreak>
          {" "} means “or”. (You can figure out the
          corresponding definition of intersection
          if we tell you that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \wedge
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            means “and”.)
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:298:5
            </span>
          </span>
        </OuterP>
      </Section>
    </>}
    {visibleRestSections() > 4 && <>
      <Pause />
      <Section id="section-7">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Sets encountered in calculus.
              <span class="t-3003">
                ./src/content/bt1/bt1.wly:302:6
              </span>
            </span>
          </b>
          {" "}
          In calculus, you will see sets such as {" "}
          <i>
            the real
            numbers
          </i>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large\rr
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            which is an infinite set containing all “ordinary”
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:310:5
            </span>
          </span>
          {" "}
          {" "}
          decimal numbers, or such as {" "}
          <i>
            the integers
          </i>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large\zz
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            which contains all “whole” numbers, including the
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:315:5
            </span>
          </span>
          {" "}
          {" "}
          negative ones. You might also encounter
          {" "}
          <i>
            the natural numbers
          </i>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large\nn
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            which contains exactly the positive integers (i.e., {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:321:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $\nn = \&#123;1, 2, 3, \ldots \&#125;$
            </Math>
            ).
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            You will also encounter {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:323:5
            </span>
          </span>
          <i>
            intervals
          </i>
          . For example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large [a, b]
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:329:5
            </span>
          </span>
          <i>
            closed interval
          </i>
          , consisting of all (real)
          numbers greater than or equal to {" "}
          <NoBreak>
            <Math>
              $a$
            </Math>
            ,
          </NoBreak>
          {" "} and less than
          or equal to {" "}
          <NoBreak>
            <Math>
              $b$
            </Math>
            .
          </NoBreak>
          {" "} Or
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large [a, b)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:337:5
            </span>
          </span>
          <i>
            half-open
          </i>
          {" "} interval, consisting of all real
          numbers greater than or equal to {" "}
          <NoBreak>
            <Math>
              $a$
            </Math>
            ,
          </NoBreak>
          {" "} and less than
          {" "}
          <NoBreak>
            <Math>
              $b$
            </Math>
            .
          </NoBreak>
          {" "} Etc.
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            Note that
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:341:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large (-\infty, \infty) = \rr
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            since
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:347:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large (-\infty, \infty)
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (an {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:353:5
            </span>
          </span>
          <i>
            open
          </i>
          {" "} interval) means
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            the set of real numbers with no bound below,
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:355:7
            </span>
          </span>
          {" "}
          {" "}
          and no bound above.
        </CentralDisplayItalic>
      </Section>
    </>}
    {visibleRestSections() > 5 && <>
      <Pause />
      <Section id="section-8">
        <OuterP>
          <b>
            <span class="t-3003-c">
              Sets not encountered in calculus.
              <span class="t-3003">
                ./src/content/bt1/bt1.wly:361:6
              </span>
            </span>
          </b>
          {" "}
          If you take a more advanced course, you might
          encounter the {" "}
          <i>
            set of extended real numbers
          </i>
          ,
          written
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large\overline&#123;\rr&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            consisting of the numbers in {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:370:5
            </span>
          </span>
          <Math>
            $\rr$
          </Math>
          {" "} plus
          the formal symbols {" "}
          <NoBreak>
            “
            <Math>
              $-\infty$
            </Math>
            ”,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            “
            <Math>
              $\infty$
            </Math>
            ”:
          </NoBreak>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large\overline&#123;\rr&#125; = \rr \cup \&#123;-\infty, \infty\&#125;
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (I.e., ...well, you get it!)
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:377:5
            </span>
          </span>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            You can view {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:379:5
            </span>
          </span>
          <Math>
            $\overline&#123;\rr&#125;$
          </Math>
          {" "} as a “closed interval”
          version of {" "}
          <NoBreak>
            <Math>
              $\rr$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large [-\infty, \infty]
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            with the two infinite endpoints {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:386:5
            </span>
          </span>
          <i>
            included
          </i>
          .
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            Does all this have any “real meaning”? Good question!
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:388:5
            </span>
          </span>
          {" "}
          {" "}
          The answer is: {" "}
          <i>
            not until you give it one
          </i>
          .
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            E.g., the value of something like
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:391:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large 0.5+ \infty
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            must be {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:397:5
            </span>
          </span>
          <i>
            defined
          </i>
          . (It is defined to be {" "}
          <NoBreak>
            <Math>
              $\infty$
            </Math>
            ,
          </NoBreak>
          {" "} in
          case you're curious. In fact, {" "}
          <Math>
            $a + \infty = \infty$
          </Math>
          {" "}
          for any {" "}
          <NoBreak>
            <Math>
              $a \ne -\infty$
            </Math>
            .)
          </NoBreak>
          {" "} And some things remain
          explicitly {" "}
          <i>
            undefined
          </i>
          . For example, the expression
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large (-\infty) + \infty
          $$
          <MathJaxSvgExportTooltip />
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            has an {" "}
            <span class="t-3003">
              ./src/content/bt1/bt1.wly:406:5
            </span>
          </span>
          <i>
            undefined
          </i>
          {" "} value—the same way, say, that
          division by {" "}
          <Math>
            $0$
          </Math>
          {" "} is undefined in {" "}
          <NoBreak>
            <Math>
              $\rr$
            </Math>
            .
          </NoBreak>
          {" "}
          (Well, anyway, end of lesson.)
        </OuterP>
      </Section>
    </>}
  </>;
};