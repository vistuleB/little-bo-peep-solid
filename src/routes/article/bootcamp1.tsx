import Bootcamp from "~/components/Bootcamp";
import { Section, Note, SolutionNote, Example, NoBreak, Pause, WriterlyBlankLine } from "~/components/Wrappers";
import { CentralDisplay, CentralDisplayItalic } from "~/components/Delimiters";
import TextParent from "~/components/TextParent";
import { Math, MathBlock } from "~/components/Math";
import { ImageRight, ImageLeft } from "~/components/SideImage";
import Image from "~/components/Image";
import InlineImage from "~/components/InlineImage";
import { Exercise, Exercises, ExerciseStatement } from "~/components/Exercises";
import InChapterLink from "~/components/InChapterLink";
import Solution from "~/components/Solution";
import Table from "~/components/Table";
import Grid from "~/components/Grid";
import { List, Item } from "~/components/List";
import { SectionDivider } from "~/components/SectionDivider";
import { StarDivider } from "~/components/StarDivider";
import VerticalChunk from "~/components/VerticalChunk";
import SectionsBreadcrumbs, { BreadcrumbItem } from "~/components/SectionsBreadcrumbs";
import useSetRoute from "~/hooks/useSetRoute";
import useShowMore from "~/hooks/useShowMore";
import useBreadcrumbs from "~/hooks/useBreadcrumbs";

const Article = () => {
  useSetRoute();
  useBreadcrumbs();
  return (<>
      <Bootcamp
        number={1}
        title="Sets">
        <SectionsBreadcrumbs>
          <BreadcrumbItem
            class="breadcrumb"
            id="breadcrumb-0">
            <InChapterLink href="?id=section-1">
              notation
            </InChapterLink>
          </BreadcrumbItem>
          <BreadcrumbItem
            class="breadcrumb"
            id="breadcrumb-1">
            <InChapterLink href="?id=section-2">
              what it does
            </InChapterLink>
          </BreadcrumbItem>
          <BreadcrumbItem
            class="breadcrumb"
            id="breadcrumb-2">
            <InChapterLink href="?id=section-3">
              set equality
            </InChapterLink>
          </BreadcrumbItem>
          <BreadcrumbItem
            class="breadcrumb"
            id="breadcrumb-3">
            <InChapterLink href="?id=section-4">
              second notation for the empty set
            </InChapterLink>
          </BreadcrumbItem>
          <BreadcrumbItem
            class="breadcrumb"
            id="breadcrumb-4">
            <InChapterLink href="?id=section-5">
              sets within sets
            </InChapterLink>
          </BreadcrumbItem>
          <BreadcrumbItem
            class="breadcrumb"
            id="breadcrumb-5">
            <InChapterLink href="?id=section-6">
              set union and set intersection
            </InChapterLink>
          </BreadcrumbItem>
          <BreadcrumbItem
            class="breadcrumb"
            id="breadcrumb-6">
            <InChapterLink href="?id=section-7">
              sets encountered in calculus
            </InChapterLink>
          </BreadcrumbItem>
          <BreadcrumbItem
            class="breadcrumb"
            id="breadcrumb-7">
            <InChapterLink href="?id=section-8">
              sets not encountered in calculus
            </InChapterLink>
          </BreadcrumbItem>
        </SectionsBreadcrumbs>
        <a
          class="next_page"
          href="/" />
        <a
          class="prev_page"
          href="/article/bootcamp2" />
        <Section id="section-1">
          <VerticalChunk>
            <b>
              Notation.
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
            {" "}and ending{" "}
            <NoBreak>
              “
              <Math>
                $\&#125;$
              </Math>
              ”
            </NoBreak>
            {" "}of a collection of
            elements, otherwise known as a{" "}
            <i>
              set
            </i>
            .
            For example, this is a set containing the
            numbers{" "}
            <NoBreak>
              <Math>
                $1$
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <Math>
              $2$
            </Math>
            {" "}and{" "}
            <Math>
              $3$
            </Math>
            {" "}(and nothing else):
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$\Large\&#123;1, 2, 3\&#125;$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            Also,
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$\Large\&#123;1\&#125;$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            is a set containing just the number{" "}
            <NoBreak>
              <Math>
                $1$
              </Math>
              ,
            </NoBreak>
            {" "}while
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$\Large\&#123;1, 3\&#125;$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            is a set containing just the numbers{" "}
            <Math>
              $1$
            </Math>
            {" "}
            and{" "}
            <NoBreak>
              <Math>
                $3$
              </Math>
              ,
            </NoBreak>
            {" "}etc. Even,
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$\Large\&#123;\&#125;$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            is an{" "}
            <i>
              empty
            </i>
            {" "}set, a set with no elements!
          </VerticalChunk>
        </Section>
        <Rest />
      </Bootcamp>
  </>);
};

const Rest = () => {
  const showMore = useShowMore();
  return(<>
    { showMore() && <>
      <Pause />
      <Section id="section-2">
        <VerticalChunk>
          <b>
            What it does.
          </b>
          {" "}
          The “API” (a computer science notion,
          roughly meaning
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          the interface offered to the outside world
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          as in, for example, the buttons and clock
          display and door handle of a microwave oven)
          of a set consists of just one functionality:
          a set can answer questions of the form
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          do you contain ... ?
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          and nothing else.
          For example, you could ask a set
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          do you contain 3?
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          to which{" "}
          <Math>
            $\&#123;1, 3\&#125;$
          </Math>
          {" "}would answer “yes”, but
          {" "}
          <Math>
            $\&#123; 1\&#125;$
          </Math>
          {" "}would answer “no”, or
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          do you contain 2?
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          to which{" "}
          <Math>
            $\&#123;1\&#125;$
          </Math>
          {" "}and{" "}
          <Math>
            $\&#123;1, 3\&#125;$
          </Math>
          {" "}would
          both answer “no”, but{" "}
          <Math>
            $\&#123;1, 2, 3\&#125;$
          </Math>
          {" "}would
          answer “yes”.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          Notation-wise, the expression
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$\Large x \in A$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          means
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          <Math>
            $A$
          </Math>
          {" "}contains{" "}
          <Math>
            $x$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          or
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          <Math>
            $A$
          </Math>
          {" "}answers “yes” to the
          question “do you contain{" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            ?”
          </NoBreak>
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          equivalently. [One can also say
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          <Math>
            $x$
          </Math>
          {" "}in{" "}
          <Math>
            $A$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          or
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          <Math>
            $x$
          </Math>
          {" "}is in{" "}
          <Math>
            $A$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          or
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          <Math>
            $x$
          </Math>
          {" "}is an element of{" "}
          <Math>
            $A$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          depending on one's mood and/or tastes.]
          As in all of mathematics, any such statement
          evaluates to either “true” or “false”.
          For example,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$\Large 1 \in \&#123;1, 2\&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is true, because{" "}
          <Math>
            $1$
          </Math>
          {" "}{" "}
          <i>
            is
          </i>
          {" "}an element of the set
          {" "}
          <NoBreak>
            <Math>
              $\&#123;1, 2\&#125;$
            </Math>
            ,
          </NoBreak>
          {" "}whereas
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$\Large 3 \in \&#123;1, 2\&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is false, because{" "}
          <Math>
            $3$
          </Math>
          {" "}{" "}
          <i>
            is not
          </i>
          {" "}
          an element of the set{" "}
          <NoBreak>
            <Math>
              $\&#123;1, 2\&#125;$
            </Math>
            .
          </NoBreak>
        </VerticalChunk>
      </Section>
      <Pause />
      <Section id="section-3">
        <VerticalChunk>
          <b>
            Set Equality.
          </b>
          {" "}
          Two sets are deemed to be
          equal if and only if they
          answer the same to
          all “do you contain ...?” questions.
          For example, while
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large\&#123;2, 1\&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          might look superficially different from
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large\&#123;1, 2\&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          these sets are actually one and the same,
          because they both answer “yes” to
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          do you contain 1?
        </CentralDisplayItalic>
        <Pause />
        <CentralDisplayItalic>
          do you contain 2?
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          and answer “no” to all else. For that matter,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large\&#123;1, 1, 2\&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          might also look superficially different from
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large\&#123;1, 2\&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          but since both sets answer “yes” to
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          do you contain 1?
        </CentralDisplayItalic>
        <Pause />
        <CentralDisplayItalic>
          do you contain 2?
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          and answer “no” to all else,
          they are by definition the same.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          (These examples demonstrate that human notation
          is redundant: there are several different ways of
          writing down the same set. They also demonstrate
          that sets do not keep track of the
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          order
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          nor of the
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          multiplicity
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          of their elements. Such notions are simply not part
          of the “API” of a set.)
        </VerticalChunk>
        <VerticalChunk indent={true}>
          Moreover, any empty set is equal to any other
          empty set. Equality follows because both sets
          answer all questions the same way: they both
          answer “no” to everything. So there is
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          one
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          and only one empty set. Therefore, mathematicians
          speak of
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          the
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          empty set—the one and only!
        </VerticalChunk>
      </Section>
      <Pause />
      <Section id="section-4">
        <VerticalChunk>
          <b>
            Second notation for the empty set.
          </b>
          {" "}
          While the empty set can be written
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123;\&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          another available notation is
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large \phi
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          which is the Greek letter phi, read “fee”. (Or
          “fie”? Hum.) (Or you can just say “the empty set”,
          and keep it safe.)
        </VerticalChunk>
      </Section>
      <Pause />
      <Section id="section-5">
        <VerticalChunk>
          <b>
            Sets within sets.
          </b>
          {" "}
          Sets can be nested much like Russian dolls. In
          fact, the result of doing this might even look
          like a little bit like a Russian doll (no?):
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123;\&#123;\&#123;\&#123;\&#125;\&#125;\&#125;\&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          The above is “a set containing a set containing
          a set containing a set containing the empty set”.
          Eschewing complete adherence to the Russian doll
          aesthetic, we could also write
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123;\&#123;\&#123;\phi\&#125;\&#125;\&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          for the same thing, given that{" "}
          <NoBreak>
            <Math>
              $\phi = \&#123;\&#125;$
            </Math>
            .
          </NoBreak>
        </VerticalChunk>
        <VerticalChunk indent={true}>
          Mind you, concerning this example, that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123;\&#123;\&#125; \&#125; \ne \&#123;\&#125;
          $$
          <ImageRight
            offset_x="3em"
            src="/images/svg_bt1_bt_empty_set_cloud.svg"
            compensate_offset_x_for_large_text_columns={true} />
        </MathBlock>
        <Pause />
        <VerticalChunk>
          because a box containing an empty box is not the
          same thing as an empty box! Specifically,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123; \&#123;\&#125; \&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          answers “yes” to the question “do you contain
          {" "}
          <NoBreak>
            <Math>
              $\&#123;\&#125;$
            </Math>
            ?”
          </NoBreak>
          {" "}(a.k.a., “do you contain{" "}
          <NoBreak>
            <Math>
              $\phi$
            </Math>
            ?”)
          </NoBreak>
          {" "}whereas
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123;\&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          answers “no” to the same question. (Indeed, while
          the empty set{" "}
          <i>
            contains
          </i>
          {" "}nothing, it{" "}
          <i>
            is
          </i>
          {" "}something.)
          Similarly,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123;\&#123;\&#123;\&#125;\&#125; \&#125; \ne \&#123;\&#123;\&#125;\&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          etc, etc: adding a new outer layer changes the
          whole set each time.
        </VerticalChunk>
      </Section>
      <Pause />
      <Section id="section-6">
        <VerticalChunk>
          <b>
            Set union and set intersection.
          </b>
          {" "}
          The so-called{" "}
          <i>
            union
          </i>
          {" "}of two sets{" "}
          <Math>
            $A$
          </Math>
          {" "}and{" "}
          <Math>
            $B$
          </Math>
          {" "}is
          written
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$\Large A \cup B$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          and consists of the set
          of all things that are either in{" "}
          <Math>
            $A$
          </Math>
          {" "}or in{" "}
          <NoBreak>
            <Math>
              $B$
            </Math>
            .
          </NoBreak>
          {" "}For
          example,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123;1, 2\&#125; \cup \&#123;2, 5\&#125; = \&#123;1, 2, 5\&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          as{" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            ,
          </NoBreak>
          {" "}{" "}
          <Math>
            $2$
          </Math>
          {" "}and{" "}
          <Math>
            $5$
          </Math>
          {" "}are the only elements to find
          themselves either in{" "}
          <Math>
            $\&#123;1, 2\&#125;$
          </Math>
          {" "}or in{" "}
          <NoBreak>
            <Math>
              $\&#123;2, 5\&#125;$
            </Math>
            .
          </NoBreak>
          {" "}
          The so-called{" "}
          <i>
            intersection
          </i>
          {" "}of two sets{" "}
          <Math>
            $A$
          </Math>
          {" "}and
          {" "}
          <Math>
            $B$
          </Math>
          {" "}is written
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large A \cap B
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          and consists of the set of all things that are both
          in{" "}
          <Math>
            $A$
          </Math>
          {" "}and in{" "}
          <NoBreak>
            <Math>
              $B$
            </Math>
            .
          </NoBreak>
          {" "}For example,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123;1, 2\&#125; \cap \&#123;2, 5\&#125; = \&#123;2\&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          as{" "}
          <Math>
            $2$
          </Math>
          {" "}is the only element that is both in{" "}
          <Math>
            $\&#123;1, 2\&#125;$
          </Math>
          {" "}
          and in{" "}
          <NoBreak>
            <Math>
              $\&#123;2, 5\&#125;$
            </Math>
            .
          </NoBreak>
        </VerticalChunk>
        <VerticalChunk indent={true}>
          Note that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large x \in (A \cup B)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          if and only if
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large x \in A
          $$
        </MathBlock>
        <i>
          or
        </i>
        <Pause />
        <MathBlock>
          $$
          \Large x \in B
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          because that's how we defined “union”. (Replace
          “or” by “and” to get a definition of intersection.)
          In fact, a logician would define the union of two
          sets by an abstruse expression of the type
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large x \in (A \cup B) \iff (x \in A) \vee (x \in B)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          read
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          an element{" "}
          <Math>
            $x$
          </Math>
          {" "}is in the thing I call{" "}
          <NoBreak>
            “
            <Math>
              $A \cup B$
            </Math>
            ”
          </NoBreak>
          {" "}
          if and only if{" "}
          <Math>
            $x$
          </Math>
          {" "}is in{" "}
          <Math>
            $A$
          </Math>
          {" "}or{" "}
          <Math>
            $x$
          </Math>
          {" "}is in{" "}
          <Math>
            $B$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          as{" "}
          <NoBreak>
            “
            <Math>
              $\!\!\iff\!\!$
            </Math>
            ”
          </NoBreak>
          {" "}means “if and only if” and
          {" "}
          <NoBreak>
            “
            <Math>
              $\vee$
            </Math>
            ”
          </NoBreak>
          {" "}means “or”. (You can figure out the
          similar definition for the intersection of two sets
          if we tell you that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large \wedge
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          means “and”.)
        </VerticalChunk>
      </Section>
      <Pause />
      <Section id="section-7">
        <VerticalChunk>
          <b>
            Sets encountered in calculus.
          </b>
          {" "}
          In calculus, you will see sets such as{" "}
          <i>
            the real
            numbers
          </i>
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large\rr
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          which is an infinite set containing all “ordinary”
          decimal numbers, or such as{" "}
          <i>
            the integers
          </i>
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large\zz
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          which contains all “whole” numbers, including the
          negative ones. You might also encounter
          {" "}
          <i>
            the natural numbers
          </i>
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large\nn
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          which contains only those integers that are greater
          than{" "}
          <Math>
            $0$
          </Math>
          {" "}(i.e.,{" "}
          <NoBreak>
            <Math>
              $\nn = \&#123;1, 2, 3, \ldots \&#125;$
            </Math>
            ).
          </NoBreak>
        </VerticalChunk>
        <VerticalChunk indent={true}>
          Secondly—and this pretty much wraps it up for those
          sets  that are commonly seen in calculus—you will
          encounter{" "}
          <i>
            intervals
          </i>
          . For example,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large [a, b]
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is a{" "}
          <i>
            closed interval
          </i>
          , consisting of all (real)
          numbers greater than or equal to{" "}
          <NoBreak>
            <Math>
              $a$
            </Math>
            ,
          </NoBreak>
          {" "}and less than
          or equal to{" "}
          <NoBreak>
            <Math>
              $b$
            </Math>
            .
          </NoBreak>
          {" "}Or
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large [a, b)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is a{" "}
          <i>
            half-open
          </i>
          {" "}interval, consisting of all real
          numbers greater than or equal to{" "}
          <NoBreak>
            <Math>
              $a$
            </Math>
            ,
          </NoBreak>
          {" "}and less than
          {" "}
          <NoBreak>
            <Math>
              $b$
            </Math>
            .
          </NoBreak>
          {" "}Etc.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          Note that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large (-\infty, \infty) = \rr
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          since
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large (-\infty, \infty)
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          (which is an{" "}
          <i>
            open
          </i>
          {" "}interval, by the way) means
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          the set of real numbers with no bound below,
          and no bound above
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          which is all of{" "}
          <NoBreak>
            <Math>
              $\rr$
            </Math>
            .
          </NoBreak>
        </VerticalChunk>
      </Section>
      <Pause />
      <Section id="section-8">
        <VerticalChunk>
          <b>
            Sets not encountered in calculus.
          </b>
          {" "}
          If you take a more advanced course, you might
          encounter the so-called{" "}
          <i>
            set of extended real numbers
          </i>
          ,
          written
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large\overline&#123;\rr&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          and which consists of all the numbers in{" "}
          <NoBreak>
            <Math>
              $\rr$
            </Math>
            ,
          </NoBreak>
          {" "}plus
          the formal symbols{" "}
          <NoBreak>
            “
            <Math>
              $-\infty$
            </Math>
            ”,
          </NoBreak>
          {" "}{" "}
          <NoBreak>
            “
            <Math>
              $\infty$
            </Math>
            ”
          </NoBreak>
          {" "}as well:
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large\overline&#123;\rr&#125; = \rr \cup \&#123;-\infty, \infty\&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          (I.e., ...well, you get it!)
        </VerticalChunk>
        <VerticalChunk indent={true}>
          You can view{" "}
          <Math>
            $\overline&#123;\rr&#125;$
          </Math>
          {" "}as a kind “closed interval”
          version of{" "}
          <NoBreak>
            <Math>
              $\rr$
            </Math>
            ,
          </NoBreak>
          {" "}that is, think of{" "}
          <Math>
            $\overline&#123;\rr&#125;$
          </Math>
          {" "}
          as being the closed interval
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large [-\infty, \infty]
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          with the two infinite endpoints{" "}
          <i>
            included
          </i>
          .
        </VerticalChunk>
        <VerticalChunk indent={true}>
          Does all this have any “real meaning”? Good question!
          The answer is:{" "}
          <i>
            not until you give it one
          </i>
          .
        </VerticalChunk>
        <VerticalChunk indent={true}>
          E.g. (to give you a brief flavor, before we move on
          forever from the topic), the value of something like
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large 0.5+ \infty
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          must be{" "}
          <i>
            defined
          </i>
          . (It is defined to be{" "}
          <NoBreak>
            <Math>
              $\infty$
            </Math>
            ,
          </NoBreak>
          {" "}in
          case you're curious. In fact, one has{" "}
          <Math>
            $a + \infty = \infty$
          </Math>
          {" "}
          for any{" "}
          <NoBreak>
            <Math>
              $a \ne -\infty$
            </Math>
            .)
          </NoBreak>
          {" "}And some things remain
          explicitly{" "}
          <i>
            undefined
          </i>
          . For example, the expression
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large (-\infty) + \infty
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          has an{" "}
          <i>
            undefined
          </i>
          {" "}value—the same way, say, that
          division by{" "}
          <Math>
            $0$
          </Math>
          {" "}is undefined in{" "}
          <NoBreak>
            <Math>
              $\rr$
            </Math>
            .
          </NoBreak>
          {" "}
          (Well, anyway, end of lesson.)
        </VerticalChunk>
      </Section>
</> }
</>);
};

export default Article;