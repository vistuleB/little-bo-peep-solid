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
      number={1}
      next-page="/article/chapter2"
      prev-page="/"
      title="A Few Refreshers"
      page-necessary-margin={610}
      max-element-width={500}
      id="_1_2534">
      <SectionsBreadcrumbs>
        <BreadcrumbItem
          class="breadcrumb"
          id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            square roots
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitleNewStyle>
        A Few Refreshers
      </ArticleTitleNewStyle>
      <Pause />
      <Section
        test="test"
        id="section-1">
        <VerticalChunk>
          <b>
            Square Roots.
          </b>
          {" "}
          You might remember that “minus times minus
          is plus” and that “plus times plus is plus”.
          (Why? The enemy of my enemy is my friend.)
          So any nonzero number multiplied by itself
          is positive. For example,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          (-2) \times (-2) = 4
          $$
        </MathBlock>
        <Pause />
        <CentralDisplay>
          and
        </CentralDisplay>
        <Pause />
        <MathBlock>
          $$
          2 \times 2 = 4
          $$
        </MathBlock>
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