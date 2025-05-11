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
import useSetRoute from "~/hooks/useSetRoute";
import useShowMore from "~/hooks/useShowMore";

const Article = () => {
  useSetRoute();
  return (<>
      <Bootcamp
        number={1}
        title="Sets">
        <a
          class="next_page"
          href="/" />
        <a
          class="prev_page"
          href="/article/bootcamp2" />
        <bb test="test">
          testother shitt
          <a href="link2">
            Exercise _1_._2_
          </a>
          enddd{" "}
        </bb>
        <Rest />
      </Bootcamp>
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