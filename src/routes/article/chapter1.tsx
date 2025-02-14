import Chapter from "~/components/Chapter";
import { Section, Note, SolutionNote, Example, NoBreak, CustomBlock, Pause, WriterlyBlankLine } from "~/components/Wrappers";
import { CentralDisplay, CentralDisplayItalic } from "~/components/Delimiters";
import { Math, MathBlock } from "~/components/Math";
import { ImageRight, ImageLeft } from "~/components/SideImage";
import Image from "~/components/Image";
import InlineImage from "~/components/InlineImage";
import { Exercise, Exercises } from "~/components/Exercises";
import Solution from "~/components/Solution";
import Table from "~/components/Table";
import Grid from "~/components/Grid";
import { List, Item } from "~/components/List";
import { SectionDivider, StarDivider } from "~/components/SectionDivider";
import VerticalChunk from "~/components/VerticalChunk";

const Article = () => {
  return (
    <Chapter
      number={1}
      title="Derivatives">
      <Section>
        <VerticalChunk>
          <b>
            Definitions.
          </b>
          {" "}
          The{" "}
          <i>
            derivative
          </i>
          {" "}of a function
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$f : \rr \ra \rr $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is a (new) function
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$f' : \rr \ra \rr$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          that gives the slope of{" "}
          <Math>
            $f$
          </Math>
          {" "}at each point. 
          In other words
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$f'(a)$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is the slope of the graph{" "}
          <Math>
            $y = f(x)$
          </Math>
          {" "}at
          {" "}
          <NoBreak>
            <Math>
              $x = a$
            </Math>
            .
          </NoBreak>
          {" "}And—surprise!—each pair of graphs
          above is a pair of the form{" "}
          <Math>
            $y = f(x)$
          </Math>
          {" "}{" "}
          <NoBreak>
            [
            <Math>
              $=$
            </Math>
          </NoBreak>
          {" "}
          “before”],{" "}
          <Math>
            $y = f'(x)$
          </Math>
          {" "}{" "}
          <NoBreak>
            [
            <Math>
              $=$
            </Math>
          </NoBreak>
          {" "}“after”]. (Meaning,
          the “after” graph records the slope of the 
          “before” graph.) E.g.:
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch4_ch_explanation1.svg" />
        <Pause />
        <VerticalChunk>
          Note that{" "}
          <Math>
            $f'\!$
          </Math>
          {" "}(read{" "}
          <NoBreak>
            “
            <Math>
              $f$
            </Math>
          </NoBreak>
          {" "}prime”) remains 
          undefined where{" "}
          <Math>
            $y = f(x)$
          </Math>
          {" "}has a sharp “corner” 
          and no well-defined slope. By opposition, if 
          there is a well-defined tangent line to 
          {" "}
          <Math>
            $y = f(x)$
          </Math>
          {" "}at{" "}
          <Math>
            $x = a$
          </Math>
          {" "}the slope of this
          tangent line supplies the value of{" "}
          <NoBreak>
            <Math>
              $f'(a)$
            </Math>
            :
          </NoBreak>
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_ch4_ch_explanation2.svg">
          <ImageRight
            src="/images/svg_ch4_ch_explanation2_cloud.svg"
            offset_x="-13em"
            offset_y="-17em" />
        </Image>
      </Section>
    </Chapter>
  );
};

export default Article;