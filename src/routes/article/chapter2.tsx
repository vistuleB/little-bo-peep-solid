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
import useSetRoute from "~/hooks/useSetRoute";
import useShowMore from "~/hooks/useShowMore";

const Article = () => {
  useSetRoute();
  return (<>
      <Chapter
        number={2}
        title="Slopes">
        <a
          class="prev_page"
          href="/article/chapter1" />
        <Section
          test="test"
          id="_598719386">
          <VerticalChunk>
            In{" "}
            <a
              href="/article/chapter2?id=_598719386"
              class="e-link">
              Exercise f.f
            </a>
            {" "}of
            {" "}
            <a
              href="/article/chapter2?id=_598719386"
              class="c-link">
              Chapter f
            </a>
            .
            {" "}
            Exercises{" "}
            <a
              href="/article/chapter2?id=_598719386"
              class="e-link">
              f
            </a>
            {" "}and{" "}
            <a
              href="/article/chapter2?id=_598719386"
              class="e-link">
              f
            </a>
            {" "}of{" "}
            <a
              href="/article/chapter2?id=_598719386"
              class="c-link">
              Chapter f
            </a>
            .
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