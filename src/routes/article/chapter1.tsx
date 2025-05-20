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
        number={1}
        title="A Few Refreshers"
        id="_448516053">
        <a
          class="next_page"
          href="/article/chapter2" />
        <a
          class="prev_page"
          href="/" />
        <Section test="test">
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