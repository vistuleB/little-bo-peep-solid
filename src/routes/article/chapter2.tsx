import Chapter from "~/components/Chapter";
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
import ArticleTitleNewStyle from "~/components/ArticleTitleNewStyle";

const Article = () => {
  useSetRoute();
  useBreadcrumbs();
  return (<>
    <Chapter
      number={2}
      prev-page="/article/chapter1"
      title="Slopes"
      page-necessary-margin={1040}
      max-element-width={900}>
      <SectionsBreadcrumbs>
        <BreadcrumbItem
          class="breadcrumb"
          id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            definition
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitleNewStyle>
        Slopes
      </ArticleTitleNewStyle>
      <Pause />
      <Section
        test="test"
        id="section-1">
        <VerticalChunk>
          <b>
            Definition.
          </b>
          {" "}The{" "}
          <i>
            slope
          </i>
          {" "}of a line is a
          mathematical measure of how “steep” a line is.
          Here are a few examples (for an explanation of
          the values, see below):
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch2_ch_collection_of_examples.svg" />
        <Pause />
        <VerticalChunk>
          To explain, the slope of a line is...
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          the number of units the line goes up with each
          unit to the right
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          ...assuming that numbers on the{" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -axis
          </NoBreak>
          {" "}increase
          going up and that numbers on the{" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -axis
          </NoBreak>
          {" "}increase
          going right, as is usually the case. One can also
          describe slope as...
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          the amount of vertical change per unit of
          horizontal change
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          ...more elegant!
        </VerticalChunk>
        <VerticalChunk indent={true}>
          For example, the line below has slope 1, because
          it goes up by{" "}
          <Math>
            $1$
          </Math>
          {" "}unit for each unit to the right:
        </VerticalChunk>
        <Pause />
        <Image src="/images/slope_1_example.svg" />
        <Pause />
        <VerticalChunk>
          On the other hand, the line below has slope
          {" "}
          <NoBreak>
            <Math>
              $-0.5$
            </Math>
            ,
          </NoBreak>
          {" "}because it goes up by{" "}
          <i>
            minus
          </i>
          {" "}{" "}
          <Math>
            $0.5$
          </Math>
          {" "}units
          with each unit to the right:
        </VerticalChunk>
        <Pause />
        <Image src="/images/slope_0.5_example.svg" />
        <Pause />
        <VerticalChunk>
          (Etc.)
        </VerticalChunk>
      </Section>
      <Rest />
    </Chapter>
  </>);
};

const Rest = () => {
  const showMore = useShowMore();
  return(<>
    { showMore() && <>
</> }
</>);
};

export default Article;