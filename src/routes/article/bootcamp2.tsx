import Bootcamp from "~/components/Bootcamp";
import { Section, Note, SolutionNote, Example, NoBreak, CustomBlock, Pause, WriterlyBlankLine } from "~/components/Wrappers";
import { CentralDisplay, CentralDisplayItalic } from "~/components/Delimiters";
import TextParent from "~/components/TextParent";
import { Math, MathBlock } from "~/components/Math";
import { ImageRight, ImageLeft } from "~/components/SideImage";
import Image from "~/components/Image";
import InlineImage from "~/components/InlineImage";
import { Exercise, Exercises } from "~/components/Exercises";
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
        number={2}
        title="Powers of 10">
        <a
          class="next_page"
          href="/article/bootcamp1" />
        <Section>
          <VerticalChunk>
            <b>
              Terminology.
            </b>
            {" "}
            The expression below is called a{" "}
            <i>
              power
            </i>
            ; 
            the number at the bottom of the power is called
            the{" "}
            <i>
              base
            </i>
            {" "}(of the power); the number at the top
            is called the{" "}
            <i>
              exponent
            </i>
            :
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_base_exponent.svg" />
          <Pause />
          <VerticalChunk>
            The whole expression is read{" "}
            <Math>
              $\mathit&#123;10&#125;$
            </Math>
            {" "}{" "}
            <i>
              to the power
            </i>
            {" "}{" "}
            <NoBreak>
              <Math>
                $\mathit&#123;3&#125;$
              </Math>
              ,
            </NoBreak>
            {" "}and the
            general process of taking a power is called{" "}
            <i>
              exponentiation
            </i>
            .
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
      <Section>
        <VerticalChunk>
          <b>
            Integer powers of 10.
          </b>
          {" "}
          We define
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large 10^&#123;\hspace&#123;0.2ex&#125;n&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          as follows, if{" "}
          <Math>
            $n$
          </Math>
          {" "}is a nonnegative integer: start
          from{" "}
          <Math>
            $1$
          </Math>
          {" "}and multiply by{" "}
          <Math>
            $10$
          </Math>
          {" "}{" "}
          <Math>
            $n$
          </Math>
          {" "}times. We also define
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large 10^&#123;-n&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          as follows, if{" "}
          <Math>
            $n$
          </Math>
          {" "}is a positive integer: start from{" "}
          <Math>
            $1$
          </Math>
          {" "}and divide
          by{" "}
          <Math>
            $10$
          </Math>
          {" "}{" "}
          <Math>
            $n$
          </Math>
          {" "}times.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          For example,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large 10^4 = 1 \times 10 \times 10 \times 10 \times 10 = 10000
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \Large 10^3 = 1 \times 10 \times 10 \times 10 = 1000
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \Large 10^2 = 1 \times 10 \times 10 = 100
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \Large 10^1 = 1 \times 10 = 10
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \Large 10^0 = 1 = 1
          $$
          <ImageLeft
            offset_x="4em"
            offset_y="-0.2em"
            src="/images/svg_bt2_bt_alert_cloud.svg"
            compensate_offset_x_for_large_text_columns={true} />
        </MathBlock>
        <Pause />
        <VerticalChunk>
          (where, in the last line,{" "}
          <Math>
            $1$
          </Math>
          {" "}is multiplied by{" "}
          <Math>
            $10$
          </Math>
          {" "}{" "}
          <i>
            zero times
          </i>
          ,
          as per the exponent, which is zero) by the first definition, while
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large 10^&#123;-1&#125; = 1\,/\,10 = 0.1
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \Large 10^&#123;-2&#125; = (1\,/\, 10)\,/\,10 = 0.01
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \Large 10^&#123;-3&#125; = ((1\,/\, 10)\,/\,10)\,/\,10 = 0.001
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \Large 10^&#123;-4&#125; = (((1\,/\, 10)\,/\,10)\,/\, 10)\,/\, 10 = 0.0001
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          by the second definition.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          As{" "}
          <Math>
            $n$
          </Math>
          {" "}successive divisions
          by{" "}
          <Math>
            $10$
          </Math>
          {" "}is the same as one division by{" "}
          <NoBreak>
            <Math>
              $10^n$
            </Math>
            ,
          </NoBreak>
          {" "}one also has
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large 10^&#123;-n&#125; = &#123;1 \over 10^&#123;\hspace&#123;0.2ex&#125;n&#125;&#125;\tag&#123;A&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          for every positive integer{" "}
          <NoBreak>
            <Math>
              $n$
            </Math>
            ,
          </NoBreak>
          {" "}which gives an alternate means of computing{" "}
          <NoBreak>
            <Math>
              $10^&#123;-n&#125;$
            </Math>
            .
          </NoBreak>
          {" "}
          Moreover, (A) actually holds for
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          every
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          integer{" "}
          <NoBreak>
            <Math>
              $n$
            </Math>
            ,
          </NoBreak>
          {" "}which is mildly important. In more
          detail, (A) holds for{" "}
          <Math>
            $n = 0$
          </Math>
          {" "}by inspection, and (A) 
          is equivalent to the identity
          <ImageLeft
            line={2}
            src="/images/svg_bt2_bt_10_to_the_minus_0_cloud.svg" />
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large 10^&#123;-n&#125;10^n = 1 \tag&#123;AA&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          which holds for{" "}
          <Math>
            $n$
          </Math>
          {" "}if and only if it holds for
          {" "}
          <NoBreak>
            <Math>
              $-n$
            </Math>
            .
          </NoBreak>
          {" "}(By which we mean: replacing{" "}
          <NoBreak>
            “
            <Math>
              $n$
            </Math>
            ”
          </NoBreak>
          {" "}by{" "}
          <NoBreak>
            “
            <Math>
              $-n$
            </Math>
            ”
          </NoBreak>
          {" "}
          in (AA) lands you right back on (AA), due to the fact
          that{" "}
          <NoBreak>
            <Math>
              $-&#123;(-n)&#125; = n$
            </Math>
            .)
          </NoBreak>
          {" "}(So, namely, if (AA) holds for all
          positive values of{" "}
          <NoBreak>
            <Math>
              $\hspace&#123;0.05em&#125;n$
            </Math>
            ,
          </NoBreak>
          {" "}then it holds
          for all negative values of{" "}
          <NoBreak>
            <Math>
              $n$
            </Math>
            ,
          </NoBreak>
          {" "}as well.)
        </VerticalChunk>
        <Pause />
        <VerticalChunk>
          <b>
            Vocabulary.
          </b>
          {" "}
          Numbers{" "}
          <Math>
            $a$
          </Math>
          {" "}and{" "}
          <Math>
            $b$
          </Math>
          {" "}such that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large ab = 1
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          are{" "}
          <i>
            reciprocal
          </i>
          . If{" "}
          <Math>
            $a$
          </Math>
          {" "}and{" "}
          <Math>
            $b$
          </Math>
          {" "}are reciprocal, 
          then these equations are satisfied...
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large ab = 1 \qquad a = &#123;1 \over b&#125; \qquad b = &#123;1 \over a&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          ...and any one of these equations implies the other two.
          Thus, either of (A) and (AA) expresses the
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          reciprocality
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          of{" "}
          <Math>
            $10^n$
          </Math>
          {" "}and{" "}
          <NoBreak>
            <Math>
              $10^&#123;-n&#125;$
            </Math>
            .
          </NoBreak>
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Other bases.
          </b>
          {" "}
          Integer powers of other nonzero bases are defined
          similarly, e.g.,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large 2^&#123;-2&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is defined as{" "}
          <Math>
            $1$
          </Math>
          {" "}divided by{" "}
          <Math>
            $2$
          </Math>
          {" "}twice, etc.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          However, a small quirk occurs for base{" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            :
          </NoBreak>
          {" "}as one
          cannot divide by{" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            ,
          </NoBreak>
          {" "}negative powers of{" "}
          <Math>
            $0$
          </Math>
          {" "}remain
          undefined. E.g.,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large 0^&#123;-2&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          would be{" "}
          <NoBreak>
            “
            <Math>
              $1$
            </Math>
          </NoBreak>
          {" "}divided by{" "}
          <Math>
            $0$
          </Math>
          {" "}twice”, but this
          is undefined. Hence{" "}
          <NoBreak>
            <Math>
              $0^&#123;-1&#125;$
            </Math>
            ,
          </NoBreak>
          {" "}{" "}
          <NoBreak>
            <Math>
              $0^&#123;-2&#125;$
            </Math>
            ,
          </NoBreak>
          {" "}etc, remain
          undefined.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          Also (in case you're wondering){" "}
          <NoBreak>
            <Math>
              $0^0 = 1$
            </Math>
            .
          </NoBreak>
          {" "}
          You can see this by writing down the first few powers
          of{" "}
          <Math>
            $0$
          </Math>
          {" "}in descending order:
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large 0^3 = 1 \times 0 \times 0 \times 0 = 0
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \Large 0^2 = 1 \times 0 \times 0 = 0
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \Large 0^1 = 1 \times 0 = 0
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \Large 0^0 = 1 = 1
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          In other words, every positive power of{" "}
          <Math>
            $0$
          </Math>
          {" "}is zero, 
          but when it comes to{" "}
          <NoBreak>
            <Math>
              $0^0$
            </Math>
            ,
          </NoBreak>
          {" "}the{" "}
          <NoBreak>
            ‘
            <Math>
              $0\hspace&#123;0.12ex&#125;$
            </Math>
            ’
          </NoBreak>
          {" "}
          in the exponent “wins out” over the{" "}
          <NoBreak>
            ‘
            <Math>
              $0\hspace&#123;0.12ex&#125;$
            </Math>
            ’
          </NoBreak>
          {" "}
          in the base, making the result{" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            .
          </NoBreak>
        </VerticalChunk>
        <VerticalChunk indent={true}>
          Note that mathematicians sometimes refer 
          to a power with an exponent of{" "}
          <Math>
            $0$
          </Math>
          {" "}as an
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          empty product
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          and they will repeatedly admonish that
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          an empty product is{" "}
          <Math>
            $\mathit&#123;1&#125;$
          </Math>
          {" "}{" "}
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          in the sense that “all products start at 
          {" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            ”,
          </NoBreak>
          {" "}and that if you start at{" "}
          <Math>
            $1$
          </Math>
          {" "}and don't
          multiply anything in, you stay at{" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            .
          </NoBreak>
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Additivity of exponents.
          </b>
          {" "}
          If you think about it,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large 10^&#123;13&#125; \times 10^&#123;14&#125; = 10^&#123;\hspace&#123;0.1ex&#125;27&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          because{" "}
          <Math>
            $13$
          </Math>
          {" "}multiplications by{" "}
          <Math>
            $10$
          </Math>
          {" "}followed
          by{" "}
          <Math>
            $14$
          </Math>
          {" "}multiplications by{" "}
          <Math>
            $10$
          </Math>
          {" "}makes{" "}
          <Math>
            $13 + 14 = 27$
          </Math>
          {" "}
          multiplications by{" "}
          <NoBreak>
            <Math>
              $10$
            </Math>
            .
          </NoBreak>
        </VerticalChunk>
        <VerticalChunk indent={true}>
          More generally,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large 10^&#123;\hspace&#123;0.1ex&#125;n&#125; \times 10^&#123;\hspace&#123;0.1ex&#125;m&#125; = 10^&#123;\hspace&#123;0.1ex&#125;n + m&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          for all{" "}
          <Math>
            $n$
          </Math>
          {" "}and{" "}
          <Math>
            $m$
          </Math>
          {" "}(and other bases than{" "}
          <NoBreak>
            <Math>
              $10$
            </Math>
            ),
          </NoBreak>
          {" "}
          which is known as
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          additivity of exponents
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          and which is sometimes paraphrased by saying
          that
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          the product of the powers is the power of the sum
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          where{" "}
          <i>
            the product of the powers
          </i>
          {" "}refers to
          {" "}
          <NoBreak>
            “
            <Math>
              $10^n \times 10^m$
            </Math>
            ”
          </NoBreak>
          {" "}and{" "}
          <i>
            the power of the sum
          </i>
          {" "}
          refers to{" "}
          <NoBreak>
            “
            <Math>
              $10^&#123;n+m&#125;$
            </Math>
            ”.
          </NoBreak>
          {" "}(Or for some other base.)
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            The third law of exponents.
          </b>
          {" "}
          Also, if you think about it,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large (10^&#123;13&#125;)^&#123;14&#125; = 10^&#123;13\cdot 14&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          because multiplying{" "}
          <Math>
            $14$
          </Math>
          {" "}times by{" "}
          <Math>
            $10^&#123;13&#125;$
          </Math>
          {" "}is like
          multiplying{" "}
          <Math>
            $13\cdot 14$
          </Math>
          {" "}times by{" "}
          <NoBreak>
            <Math>
              $10$
            </Math>
            .
          </NoBreak>
          {" "}More
          generally,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large (10^n)^m = 10^&#123;nm&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          for all{" "}
          <Math>
            $n$
          </Math>
          {" "}and{" "}
          <NoBreak>
            <Math>
              $m$
            </Math>
            .
          </NoBreak>
          {" "}This is known as “the third law 
          of exponents”.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          On this subject, note that if one writes
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large a^&#123;b^&#123;c&#125;&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          <NoBreak>
            [“
            <Math>
              $a$
            </Math>
          </NoBreak>
          {" "}to the power{" "}
          <Math>
            $b$
          </Math>
          {" "}to the power{" "}
          <NoBreak>
            <Math>
              $c$
            </Math>
            ”]
          </NoBreak>
          {" "}
          there is a seeming ambiguity: does it mean
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large a^&#123;\left(b^&#123;c&#125;\right)&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          <NoBreak>
            [“
            <Math>
              $a$
            </Math>
          </NoBreak>
          {" "}to the power{" "}
          <NoBreak>
            [
            <Math>
              $b$
            </Math>
          </NoBreak>
          {" "}to the power{" "}
          <NoBreak>
            <Math>
              $c$
            </Math>
            ]”]
          </NoBreak>
          {" "}
          or does it mean
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large (a^&#123;b&#125;)^&#123;c&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          <NoBreak>
            [“[
            <Math>
              $a$
            </Math>
          </NoBreak>
          {" "}to the power{" "}
          <NoBreak>
            <Math>
              $b$
            </Math>
            ]
          </NoBreak>
          {" "}to the power{" "}
          <NoBreak>
            <Math>
              $c$
            </Math>
            ”]...?
          </NoBreak>
          {" "}
          Well, because the second way can be written
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large a^&#123;bc&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          by the third law of exponents, the second way already has  
          “its own” notation, and therefore the convention is that...{" "}
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large a^&#123;b^c&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          ...absolutely always means...{" "}
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large a^&#123;\left(b^c\right)&#125;
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          ...!
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Famous powers of 10.
          </b>
          {" "}
          Many human languages have special names for
          various integer powers of{" "}
          <NoBreak>
            <Math>
              $10$
            </Math>
            ,
          </NoBreak>
          {" "}due to the fact
          that many of our ancestors chose to count in base
          {" "}
          <NoBreak>
            <Math>
              $10$
            </Math>
            .
          </NoBreak>
        </VerticalChunk>
        <VerticalChunk indent={true}>
          In English, e.g., these are some of the “famous”
          powers of{" "}
          <NoBreak>
            <Math>
              $10$
            </Math>
            :
          </NoBreak>
        </VerticalChunk>
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
                name
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
                  one
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
                  ten
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
                  hundred
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
                  thousand
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
                  million
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
                  billion
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
                  trillion
                </i>
              </td>
            </tr>
          </tbody>
        </Table>
        <Pause />
        <VerticalChunk>
          One can note that
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          one million is a thousand thousand
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          because
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large 1000 \times 1000 = 1000\hspace&#123;0.3ex&#125;000
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          by counting zeroes, or, equivalently, because
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large 10^3 \times 10^3 = 10^6
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          by additivity of exponents. Similarly, note that
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          one billion is a thousand million
          <ImageLeft src="/images/svg_bt2_bt_ten_to_the_3_times_ten_to_the_6_cloud.svg" />
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          and
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          one trillion is a thousand billion
          <ImageLeft src="/images/svg_bt2_bt_ten_to_the_3_times_ten_to_the_9_cloud.svg" />
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          and also (while we're at it)
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          one trillion is a million million
          <ImageRight src="/images/svg_bt2_bt_ten_to_the_6_times_ten_to_the_6_cloud.svg" />
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          as can be seen, for example, by replacing “billion”
          with “thousand million” in the previous sentence and
          then further replacing “thousand thousand” with “million”
          in{" "}
          <i>
            that
          </i>
          {" "}sentence.
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Negative exponent prefixes.
          </b>
          {" "}
          For negative exponents we simply say “one tenth”
          instead of “ten”, etc. Specifically, the table looks
          like so:
        </VerticalChunk>
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
                name
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
                  one tenth
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
                  one hundredth
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
                  one thousandth
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
                  one millionth
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
                  one trillionth
                </i>
              </td>
            </tr>
          </tbody>
        </Table>
        <Pause />
        <VerticalChunk>
          In passing, note how the standard decimal expansion
          for{" "}
          <Math>
            $10^&#123;-1&#125;$
          </Math>
          {" "}contains exactly one{" "}
          <NoBreak>
            <Math>
              $&#123;0&#125;$
            </Math>
            :
          </NoBreak>
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_one_blue_one_image_equation.svg" />
        <Pause />
        <VerticalChunk>
          Likewise, the standard decimal expansion for{" "}
          <Math>
            $10^&#123;-2&#125;$
          </Math>
          {" "}
          contains exactly two{" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            's...
          </NoBreak>
        </VerticalChunk>
        <Pause />
        <Image src="/images/svg_two_blue_one_image_equation.svg" />
        <Pause />
        <VerticalChunk>
          ...and so on, which is a possible trick to check 
          one's work and avoid mistakes.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          However, there also exist negative exponent
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          prefixes
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          that people use to qualify other measures. For
          example, a
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          millimeter
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          is{" "}
          <Math>
            $10^&#123;-3&#125;$
          </Math>
          {" "}meters, i.e., one thousandth of
          a meter, because “milli” happens to be the prefix
          for{" "}
          <NoBreak>
            <Math>
              $10^&#123;-3&#125;$
            </Math>
            .
          </NoBreak>
          {" "}Here is a list of the most common
          such prefixes:
        </VerticalChunk>
        <Pause />
        <Table class="first-line">
          <colgroup>
            <col width="120px" />
            <col width="120px" />
          </colgroup>
          <tbody>
            <tr>
              <td class="align-center">
                power
              </td>
              <td class="align-center">
                prefix
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
                  deci
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
                  centi
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
                  milli
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
                  micro
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
                  nano
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
                  pico
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
                  femto
                </i>
              </td>
            </tr>
          </tbody>
        </Table>
        <Pause />
        <VerticalChunk>
          (Funny how the prefixes switch from 
          ending in ‘i’ to ending in ‘o’ after 
          {" "}
          <NoBreak>
            <Math>
              $10^&#123;-3&#125;$
            </Math>
            .)
          </NoBreak>
          {" "}(Well, anyway.)
        </VerticalChunk>
        <VerticalChunk indent={true}>
          To give an idea of scale,
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          micrometers
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          are smaller than the smallest animal
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
          {" "}{" "}
          <Math>
            $9$
          </Math>
          {" "}{" "}
          <NoBreak>
            <Math>
              $\mu\textrm&#123;m&#125;$
            </Math>
            )
          </NoBreak>
          {" "}(nb:{" "}
          <NoBreak>
            “
            <Math>
              $\mu$
            </Math>
            ”
          </NoBreak>
          {" "}
          stands for “micro” and{" "}
          <NoBreak>
            “
            <Math>
              $\mu$
            </Math>
            m”
          </NoBreak>
          {" "}stands
          for “micrometer”). Next down,
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          nanometers
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          happen to be smaller than the diameter
          of DNA, with DNA having a diameter of
          about{" "}
          <NoBreak>
            <Math>
              $2.5$
            </Math>
            nm
          </NoBreak>
          {" "}(“nm” = “nanometer”).
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Positive exponent prefixes.
          </b>
          {" "}
          There exists a similar set of prefixes
          for positve powers of{" "}
          <NoBreak>
            <Math>
              $10$
            </Math>
            .
          </NoBreak>
          {" "}Going up
          to{" "}
          <NoBreak>
            <Math>
              $10^&#123;15&#125;$
            </Math>
            ,
          </NoBreak>
          {" "}these are:
        </VerticalChunk>
        <Pause />
        <Table
          margin-bottom="1em"
          margin-top="1em"
          class="first-line">
          <colgroup>
            <col width="120px" />
            <col width="120px" />
          </colgroup>
          <tbody>
            <tr>
              <td class="align-center">
                power
              </td>
              <td class="align-center">
                prefix
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
                  deca
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
                  hecto
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
                  kilo
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
                  mega
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
                  giga
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
                  tera
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
                  peta
                </i>
              </td>
            </tr>
          </tbody>
        </Table>
        <Pause />
        <VerticalChunk>
          For example, a
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          kilometer
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          is a thousand meters
          {" "}
          <NoBreak>
            [b/
            <Math>
              $\!\hspace&#123;0.1ex&#125;\rm&#123;c&#125;$
            </Math>
          </NoBreak>
          {" "}“kilo” = thousand], 
          while a
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          terabyte
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          is a trillion bytes{" "}
          <NoBreak>
            [b/
            <Math>
              $\!\hspace&#123;0.1ex&#125;\rm&#123;c&#125;$
            </Math>
          </NoBreak>
          {" "}“tera” = trillion].
          (In case you don't know, by the way, 
          a
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          byte
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          is a unit of computer memory
          that is equal to{" "}
          <Math>
            $8$
          </Math>
          {" "}{" "}
          <i>
            bits
          </i>
          , with a{" "}
          <i>
            bit
          </i>
          {" "}
          being a single 0/1 value.)
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Logarithms base 10.
          </b>
          {" "}
          Every positive number can be uniquely 
          written as “ten to the power something”.
          This “something” will heretofore be called
          the{" "}
          <i>
            logarithm base{" "}
            <Math>
              $\mathit&#123;10&#125;$
            </Math>
            {" "}{" "}
          </i>
          {" "}of that 
          (positive) number.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          For example,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large 100
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          can be uniquely written as “ten to the power
          something”. To wit,{" "}
          <Math>
            $100$
          </Math>
          {" "}is, of course,
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          ten to the power{" "}
          <Math>
            $\mathit&#123;2&#125;$
          </Math>
          {" "}{" "}
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          and this means that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$
          \Large 2
          $$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is the logarithm base{" "}
          <Math>
            $10$
          </Math>
          {" "}of{" "}
          <NoBreak>
            <Math>
              $100$
            </Math>
            .
          </NoBreak>
        </VerticalChunk>
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 1.
            </b>
            {" "}
            It so happens that
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$
            \Large 99 = 10^&#123;1.99563519...&#125;
            $$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            under an extended definition of exponentiation that allows us to 
            compute{" "}
            <Math>
              $10^x$
            </Math>
            {" "}for every{" "}
            <NoBreak>
              <Math>
                $x \in \rr$
              </Math>
              .
            </NoBreak>
            {" "}
            So{" "}
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$
            \Large 1.99563519...
            $$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            is the logarithm base{" "}
            <Math>
              $10$
            </Math>
            {" "}of{" "}
            <NoBreak>
              <Math>
                $99$
              </Math>
              .
            </NoBreak>
          </VerticalChunk>
        </Example>
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 2.
            </b>
            {" "}
            It so happens that
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$
            \Large 98 = 10^&#123;1.99122607...&#125;
            $$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            under the same extended definition, so{" "}
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$
            \Large 1.99122607...
            $$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            is the logarithm base{" "}
            <Math>
              $10$
            </Math>
            {" "}of{" "}
            <NoBreak>
              <Math>
                $98$
              </Math>
              .
            </NoBreak>
          </VerticalChunk>
        </Example>
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 3.
            </b>
            {" "}
            Since
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$
            \Large 0.1 = 10^&#123;-1&#125;
            $$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            the logarithm base{" "}
            <Math>
              $10$
            </Math>
            {" "}of{" "}
            <Math>
              $0.1$
            </Math>
            {" "}is{" "}
            <NoBreak>
              <Math>
                $-1$
              </Math>
              .
            </NoBreak>
          </VerticalChunk>
        </Example>
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 4.
            </b>
            {" "}
            Since
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$
            \Large 0.00001 = 10^&#123;-5&#125;
            $$
            <ImageRight
              offset_x="0em"
              src="/images/svg_bt2_bt_ten_to_the_minus_5_cloud.svg"
              compensate_offset_x_for_large_text_columns={true} />
          </MathBlock>
          <Pause />
          <VerticalChunk>
            the logarithm base{" "}
            <Math>
              $10$
            </Math>
            {" "}of{" "}
            <Math>
              $0.00001$
            </Math>
            {" "}is{" "}
            <NoBreak>
              <Math>
                $-5$
              </Math>
              .
            </NoBreak>
          </VerticalChunk>
        </Example>
      </Section>
      <Pause />
      <Exercises>
        <Exercise exercise_number={1}>
          <VerticalChunk>
            <b id="_13088285755">
              Exercise 1.
            </b>
            {" "}
            Compute{" "}
            <NoBreak>
              <Math>
                $2^&#123;-2&#125;$
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <Math>
              $2^&#123;-3&#125;$
            </Math>
            {" "}and{" "}
            <Math>
              $2^&#123;-4&#125;$
            </Math>
            {" "}by hand.
          </VerticalChunk>
          <Pause />
          <Solution solution_number={1}>
            <VerticalChunk>
              Since{" "}
              <NoBreak>
                <Math>
                  $2^&#123;-1&#125; = 1/2 = 0.5$
                </Math>
                ,
              </NoBreak>
              {" "}one has
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large 2^&#123;-2&#125; = &#123;2^&#123;-1&#125;\over 2&#125; = &#123;0.5 \over 2&#125; = 0.25
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large 2^&#123;-3&#125; = &#123;2^&#123;-2&#125;\over 2&#125; = &#123;0.25 \over 2&#125; = 0.125
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large 2^&#123;-4&#125; = &#123;2^&#123;-3&#125;\over 2&#125; = &#123;0.125 \over 2&#125; = 0.0625
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              respectively.
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                For the last computation,{" "}
                <Math>
                  $0.125$
                </Math>
                {" "}can be viewed 
                as twelve hundredths plus{" "}
                <Math>
                  $5$
                </Math>
                {" "}thousandths:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_0.125_twelve_5.svg" />
              <Pause />
              <VerticalChunk>
                Half of twelve hundredths is six hundredths, and 
                half of{" "}
                <Math>
                  $5$
                </Math>
                {" "}thousandths is{" "}
                <Math>
                  $2.5$
                </Math>
                {" "}thousandths:
              </VerticalChunk>
              <Pause />
              <Image src="/images/svg_06_and_0025.svg" />
              <Pause />
              <VerticalChunk>
                ...so{" "}
                <Math>
                  $0.125/2$
                </Math>
                {" "}is{" "}
                <NoBreak>
                  <Math>
                    $0.06 + 0.0025 = 0.0625$
                  </Math>
                  .
                </NoBreak>
              </VerticalChunk>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={2}>
          <VerticalChunk>
            <b id="_97748627302">
              Exercise 2.
            </b>
            {" "}
            Compute{" "}
            <Math>
              $100/16$
            </Math>
            {" "}by hand.
          </VerticalChunk>
          <Pause />
          <Solution solution_number={2}>
            <VerticalChunk>
              We have
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;1 \over 16&#125; = &#123;1 \over 2\cdot 2\cdot 2\cdot 2&#125; = 2^&#123;-4&#125; = 0.0625
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              so
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;100 \over 16&#125; = 100 \cdot &#123;1 \over 16&#125; = 100\cdot 0.0625 = 6.25
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and that's all there is to it! (Or you could repeatedly divide{" "}
              <Math>
                $100$
              </Math>
              {" "}by{" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                ,
              </NoBreak>
              {" "}
              until you reach{" "}
              <NoBreak>
                <Math>
                  $6.25$
                </Math>
                ,
              </NoBreak>
              {" "}after the fourth division.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={3}>
          <VerticalChunk>
            <b id="_71708795760">
              Exercise 3.
            </b>
            {" "}
            If “万” is Chinese for{" "}
            <i>
              ten thousand
            </i>
            , what is “万万” in English?
            What about “万万万”?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={3}>
            <VerticalChunk>
              “万万” is “ten thousand ten thousand”, or
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large 10^4 \times 10^4 = 10^8
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              or{" "}
              <i>
                one hundred million
              </i>
              {" "}since{" "}
              <Math>
                $10^8 = 10^2 \times 10^6$
              </Math>
              {" "}is a hundred times a 
              million. Similarly, “万万万” is{" "}
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large 10^4 \times 10^4 \times 10^4 = 10^&#123;12&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              which is just one trillion.
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Notes.
              </i>
              {" "}
              Rearranging
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              ten thousand ten thousand
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              to
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              ten ten thousand thousand
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              directly leads us to “hundred million” 
              without having to use exponents, since ten
              times ten is a hundred and since a thousand 
              times a thousand is a million.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              (Similarly,
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              ten thousand ten thousand ten thousand
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              becomes
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              ten ten ten thousand thousand thousand
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              after rearrangement, which can be seen to
              equal one trillion because “ten ten ten” is
              a thousand.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={4}>
          <VerticalChunk>
            <b id="_89059256221">
              Exercise 4.
            </b>
            {" "}
            How many millimeters in a kilometer? 
            How many kilometers in a millimeter?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={4}>
            <VerticalChunk>
              There are{" "}
              <Math>
                $10^3$
              </Math>
              {" "}millimeters in a meter 
              (
              <i>
                milli
              </i>
              {" "}= thousandth) and{" "}
              <Math>
                $10^3$
              </Math>
              {" "}meters
              in a kilometer, so there are 
              {" "}
              <Math>
                $10^3 \times 10^3 = 10^6$
              </Math>
              {" "}
              millimeters in a kilometer.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              From there, it automatically follows that
              there are{" "}
              <Math>
                $1/10^6 = 10^&#123;-6&#125;$
              </Math>
              {" "}kilometers in
              a millimeter.
            </VerticalChunk>
            <VerticalChunk indent={true}>
              (Or you can run the reverse reasoning: 
              There are{" "}
              <Math>
                $10^&#123;-3&#125;$
              </Math>
              {" "}kilometers in a meter, 
              and{" "}
              <Math>
                $10^&#123;-3&#125;$
              </Math>
              {" "}meters in a millimeter, 
              so{" "}
              <Math>
                $10^&#123;-3&#125; \times 10^&#123;-3&#125; = 10^&#123;-6&#125;$
              </Math>
              {" "}
              kilometers in a millimeter.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={5}>
          <VerticalChunk>
            <b id="_96779481861">
              Exercise 5.
            </b>
            {" "}
            How many kilometers is{" "}
            <Math>
              $10^&#123;24&#125;$
            </Math>
            {" "}millimeters?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={5}>
            <VerticalChunk>
              We have
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large 1\textrm&#123;mm&#125; = 10^&#123;-6&#125;\textrm&#123;km&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by the previous problem, so{" "}
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large 10^&#123;24&#125; \textrm&#123;mm&#125; = 10^&#123;24&#125;\cdot 10^&#123;-6&#125;\textrm&#123;km&#125; = 10^&#123;18&#125;\textrm&#123;km&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by direct substitution. (You can do that with
              units.) The answer is therefore:{" "}
              <NoBreak>
                <Math>
                  $10^&#123;18&#125;$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={6}>
          <VerticalChunk>
            <b id="_10819654949">
              Exercise 6.
            </b>
            {" "}
            If the US yearly budget is{" "}
            <Math>
              $4$
            </Math>
            {" "}trillion
            dollars, what percentage of the budget is
            one hundred billion $?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={6}>
            <VerticalChunk>
              One hundred billion is{" "}
              <Math>
                $10\%$
              </Math>
              {" "}of one trillion [cf.: 
              {" "}
              <NoBreak>
                <Math>
                  $10^2 \times 10^9 = &#123;1 \over 10&#125;\times 10^&#123;12&#125;$
                </Math>
                ]
              </NoBreak>
              {" "}
              and one trillion is a quarter of{" "}
              <Math>
                $4$
              </Math>
              {" "}
              trillion, so the answer is{" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 4&#125;\cdot 10\% = 2.5\%$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Postscript
              </i>
              :
              There is no such thing as “the U.S. budget”. A
              monetarily sovereign nation{" "}
              <i>
                spends
              </i>
              {" "}its currency
              into existence. (And taxes it out of existence.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={7}>
          <VerticalChunk>
            <b id="_14769865504">
              Exercise 7.
            </b>
            {" "}
            What is the logarithm base{" "}
            <Math>
              $10$
            </Math>
            {" "}of one trillion?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={7}>
            <VerticalChunk>
              <NoBreak>
                <Math>
                  $12$
                </Math>
                ,
              </NoBreak>
              {" "}because one trillion is{" "}
              <NoBreak>
                <Math>
                  $10^&#123;12&#125;$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={8}>
          <VerticalChunk>
            <b id="_3039944628">
              Exercise 8.
            </b>
            {" "}
            What is the logarithm base{" "}
            <Math>
              $10$
            </Math>
            {" "}of{" "}
            <NoBreak>
              <Math>
                $1$
              </Math>
              ?
            </NoBreak>
          </VerticalChunk>
          <Pause />
          <Solution solution_number={8}>
            <VerticalChunk>
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "}because{" "}
              <NoBreak>
                <Math>
                  $1 = 10^0$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={9}>
          <VerticalChunk>
            <b id="_811910029935">
              Exercise 9.
            </b>
            {" "}
            What is the logarithm base{" "}
            <Math>
              $10$
            </Math>
            {" "}of:{" "}
            <i>
              a trillion times a billion times a million times a thousand
            </i>
            ?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={9}>
            <VerticalChunk>
              Since{" "}
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large 10^&#123;12&#125;\times 10^&#123;9&#125;\times 10^&#123;6&#125;\times 10^3 = 10^&#123;12+9+6+3&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              the answer is{" "}
              <NoBreak>
                <Math>
                  $12+9+6+3$
                </Math>
                ,
              </NoBreak>
              {" "}or{" "}
              <NoBreak>
                <Math>
                  $30$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={10}>
          <VerticalChunk>
            <b id="_432110158302">
              Exercise 10.
            </b>
            {" "}
            Evaluate:
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$
            \Large &#123;10^6 \cdot 10^&#123;-12&#125; \cdot 10^&#123;10&#125; \over 10^&#123;-4&#125;\cdot 10^&#123;-4&#125;&#125; 
            $$
          </MathBlock>
          <Pause />
          <Solution solution_number={10}>
            <VerticalChunk>
              We have
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;10^6 \cdot 10^&#123;-12&#125; \cdot 10^&#123;10&#125; \over 10^&#123;-4&#125;\cdot 10^&#123;-4&#125;&#125; = &#123;10^&#123;6-12+10&#125; \over 10^&#123;-4 -4&#125;&#125; = &#123;10^4 \over 10^&#123;-8&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;10^4 \over 10^&#123;-8&#125;&#125; = 10^4 \cdot &#123;1 \over 10^&#123;-8&#125;&#125; = 10^4\cdot 10^&#123;-(-8)&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large 10^4\cdot 10^&#123;-(-8)&#125; = 10^4\cdot 10^8 = 10^&#123;4 + 8&#125; = 10^&#123;12&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              so the answer is{" "}
              <NoBreak>
                <Math>
                  $10^&#123;12&#125;$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={11}>
          <VerticalChunk>
            <b id="_283310388056">
              Exercise 11.
            </b>
            {" "}
            How many{" "}
            <i>
              millibits
            </i>
            {" "}in a{" "}
            <i>
              gigabyte
            </i>
            ?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={11}>
            <VerticalChunk>
              Presumably, there are{" "}
              <Math>
                $1000$
              </Math>
              {" "}“millibits”
              (whatever those are, we can go along with
              the joke here) in one bit. Since there are
              eight bits in a byte, and a million bytes 
              in a gigabyte, this means that there would
              be
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large 1000 \times 8 \times 10^6 = 8 \times 10^9
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              or{" "}
              <Math>
                $8$
              </Math>
              {" "}billion “millibits” per gigabyte.
              (But to reiterate, there is no such thing 
              as a “millibit”; a bit is a{" "}
              <i>
                discrete
              </i>
              —i.e., 
              indivisible—unit of computer memory.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={12}>
          <VerticalChunk>
            <b id="_97471059720">
              Exercise 12.
            </b>
            {" "}
            It so happens that{" "}
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$
            \Large 6.25
            $$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            (i.e., the value of{" "}
            <NoBreak>
              <Math>
                $100/16$
              </Math>
              )
            </NoBreak>
            {" "}is also
            famous for being equal to{" "}
            <NoBreak>
              <Math>
                $2.5^2$
              </Math>
              .
            </NoBreak>
            {" "}(You can 
            verify that
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$
            \Large 25^2 = 625
            $$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            and, by shifting two decimal places, one
            finds{" "}
            <NoBreak>
              <Math>
                $2.5^2 = 6.25$
              </Math>
              .)
            </NoBreak>
            {" "}Can you elucidate
            why it would be that
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$
            \Large &#123;100 \over 16&#125; = 2.5^2
            $$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            by using some kind of algebra?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={12}>
            <VerticalChunk>
              One has
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;100 \over 16&#125; = &#123;10^2 \over 4^2&#125; = \left(\!&#123;10\over 4&#125;\!\right)^&#123;\!\!2&#125; = \left(\!&#123;5\over 2&#125;\!\right)^&#123;\!\!2&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and{" "}
              <NoBreak>
                <Math>
                  $5/2 = 2.5$
                </Math>
                .
              </NoBreak>
              {" "}(Ta-daa!)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={13}>
          <VerticalChunk>
            <b id="_4842108710">
              Exercise 13.
            </b>
            {" "}
            Prove that
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$
            \Large &#123;10^n \over \vphantom&#123;10^&#123;A^n&#125;&#125;10^m&#125; = 10^&#123;n-m&#125;
            $$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            for all integers{" "}
            <Math>
              $n$
            </Math>
            {" "}and{" "}
            <NoBreak>
              <Math>
                $m$
              </Math>
              .
            </NoBreak>
            {" "}(You can
            take for granted any identity that is stated
            in this{" "}
            <del>
              chapter
            </del>
            &ensp;bootcamp.)
          </VerticalChunk>
          <Pause />
          <Solution solution_number={13}>
            <VerticalChunk>
              Here is the “proof” that your professor is 
              hoping for:
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_start_end_proof.svg" />
            <Pause />
            <VerticalChunk>
              The point is that the second equality uses the identity
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;1 \over 10^m&#125; = 10^&#123;-m&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              stated earlier in the chapter as (A), while the third equality uses
              additivity of exponents, also stated earlier. (So: We are only using “known”
              facts, alongside some ordinary arithmetic.)
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Notes.
              </i>
              {" "}
              The identity proved in this exercise, 
              when generalized to any base, 
              is one of the “laws of exponents”, whose complete list 
              (even more-than-complete, other sources list fewer laws)
              is as follows (minus fine print):
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_laws_exp.svg" />
            <Pause />
            <VerticalChunk>
              The first law can be recognized as “additivity of exponents”
              while the second law 
              is the above-mentioned generalization of this exercise's result.
              (Nb: Concerning the next-to-last law, note that,{" "}
              <i>
                by definition
              </i>
              ,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large \left(&#123;a\over b&#125;\right)^&#123;\!-1&#125; = &#123;1 \over \left( &#123;a \over b&#125;\right)&#125; 
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and it so happens that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;1 \over \left( &#123;a \over b&#125;\right)&#125; = &#123;b \over a&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for all{" "}
              <NoBreak>
                <Math>
                  $a, b \ne 0$
                </Math>
                ,
              </NoBreak>
              {" "}by some principle of elementary arithmetic.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={14}>
          <VerticalChunk>
            <b id="_889111423964">
              Exercise 14.
            </b>
            {" "}
            Rewrite each of these expressions...{" "}
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$
            \Large &#123;L \over T&#125;
            $$
          </MathBlock>
          <Pause />
          <MathBlock>
            $$
            \Large &#123;M (L/T) \over T&#125;
            $$
          </MathBlock>
          <Pause />
          <MathBlock>
            $$
            \Large \left.&#123;ML \over T^2 &#125; \right/ \left(&#123;L^2&#125; &#123;(L/T) \over L&#125;\right) 
            $$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            ...in the form...
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$
            \Large M^aL^bT^c
            $$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            ...for some integer exponents{" "}
            <NoBreak>
              <Math>
                $a$
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <NoBreak>
              <Math>
                $b$
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <NoBreak>
              <Math>
                $c$
              </Math>
              .
            </NoBreak>
          </VerticalChunk>
          <Pause />
          <Solution solution_number={14}>
            <VerticalChunk>
              We have (#1)
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;L \over T&#125; = LT^&#123;-1&#125; = M^0L^1T^&#123;-1&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              since
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;L \over T&#125; = L\cdot &#123;1\over T&#125; = LT^&#123;-1&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and (#2)
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;M (L/T) \over T&#125; = MLT^&#123;-2&#125; = M^1L^1T^&#123;-2&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              since
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;L/T \over T&#125; = &#123;L\over T&#125;\cdot&#123;1 \over T&#125; = &#123;L \over T^2&#125; = LT^&#123;-2&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and (#3)
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large \left.&#123;ML \over T^2 &#125; \right/ \left(&#123;L^2&#125; &#123;(L/T) \over L&#125;\right) = ML^&#123;-1&#125;T^&#123;-1&#125; = M^1L^&#123;-1&#125;T^&#123;-1&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              since
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large L^2&#123;L/T\over L&#125; = L^2&#123;1/T \over 1&#125; = &#123;L^2\over T&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large \left.&#123;ML \over T^2 &#125; \right/ &#123;L^2\over T&#125; = &#123;ML\over T^2&#125;\cdot &#123;T\over L^2&#125; = &#123;M \over TL&#125; = MT^&#123;-1&#125;L^&#123;-1&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              given that{" "}
              <NoBreak>
                <Math>
                  $&#123;1\over T&#125; = T^&#123;-1&#125;$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $&#123;1\over L&#125;=L^&#123;-1&#125;$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={15}>
          <VerticalChunk>
            <b id="_805011928207">
              Exercise 15.
            </b>
            {" "}
            Find integers{" "}
            <NoBreak>
              <Math>
                $a$
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <Math>
              $b$
            </Math>
            {" "}and{" "}
            <Math>
              $c$
            </Math>
            {" "}such that
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$
            \Large v^aF^b\mu^c\rho = 1
            $$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            where{" "}
            <NoBreak>
              <Math>
                $v$
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <NoBreak>
              <Math>
                $F$
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <Math>
              $\mu$
            </Math>
            {" "}and{" "}
            <Math>
              $\rho$
            </Math>
            {" "}are defined as below.
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$
            \Large v = &#123;L \over T&#125;
            $$
          </MathBlock>
          <Pause />
          <MathBlock>
            $$
            \Large F = &#123;ML \over T^2&#125;
            $$
          </MathBlock>
          <Pause />
          <MathBlock>
            $$
            \Large \mu = &#123;M \over TL &#125;
            $$
          </MathBlock>
          <Pause />
          <MathBlock>
            $$
            \Large \rho = &#123;M \over L^3&#125;
            $$
          </MathBlock>
          <Pause />
          <Solution solution_number={15}>
            <VerticalChunk>
              Firstly we can rewrite{" "}
              <NoBreak>
                <Math>
                  $v$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $F$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $\mu$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $\rho$
              </Math>
              {" "}
              in the canonical form{" "}
              <Math>
                $M^xL^yT^z$
              </Math>
              {" "}
              for integers{" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $z$
              </Math>
              {" "}(as in the previous
              exercise):
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large v = LT^&#123;-1&#125; \vphantom&#123;\rho = ML^&#123;-3&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large F = MLT^&#123;-2&#125; \vphantom&#123;\rho = ML^&#123;-3&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large \mu = MT^&#123;-1&#125;L^&#123;-1&#125; \vphantom&#123;\rho = ML^&#123;-3&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large \rho = ML^&#123;-3&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              (Ok.) Nextly, we compute{" "}
              <NoBreak>
                <Math>
                  $v^a$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $F^b$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $\mu^c$
              </Math>
              {" "}
              by applying the fourth law of exponents (note e.g.
              that{" "}
              <NoBreak>
                <Math>
                  $(T^&#123;-1&#125;)^a = T^&#123;(-1)a&#125; = T^&#123;-a&#125;$
                </Math>
                ,
              </NoBreak>
              {" "}etc):
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large v^a = L^aT^&#123;-a&#125; \vphantom&#123;\rho = ML^&#123;-3&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large F^b = M^&#123;b&#125;L^bT^&#123;-2b&#125; \vphantom&#123;\rho = ML^&#123;-3&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large \mu^c = M^cT^&#123;-c&#125;L^&#123;-c&#125; \vphantom&#123;\rho = ML^&#123;-3&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large \rho = ML^&#123;-3&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              (In the last line we just restated{" "}
              <NoBreak>
                <Math>
                  $\rho$
                </Math>
                .)
              </NoBreak>
              {" "}
              Then{" "}
              <Math>
                $v^aF^b\mu^c\rho$
              </Math>
              {" "}becomes
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large M^&#123;b+c+1&#125;L^&#123;a+b-c-3&#125;T^&#123;-a-2b-c&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by multiplying everything together and using
              additivity of exponents. (E.g.,{" "}
              <NoBreak>
                <Math>
                  $M^bM^cM = M^&#123;b+c+1&#125;$
                </Math>
                ,
              </NoBreak>
              {" "}
              and so on.) This expression equals{" "}
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large 1
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              independently of the values of{" "}
              <NoBreak>
                <Math>
                  $M$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $L$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $T$
              </Math>
              {" "}
              if and only if...
            </VerticalChunk>
            <Pause />
            <CentralDisplayItalic>
              the three exponents are zero
            </CentralDisplayItalic>
            <Pause />
            <VerticalChunk>
              ...(!!!) which means that we need to find values
              {" "}
              <NoBreak>
                <Math>
                  $a$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $b$
              </Math>
              {" "}and{" "}
              <Math>
                $c$
              </Math>
              {" "}such that these three equations...
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large b + c + 1 = 0
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large a + b - c - 3 = 0
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large -a -2b - c = 0
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...are satisfied! Adding the second and 
              third equation together, we find{" "}
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large -b -2c -3 = 0
              $$
              <ImageRight
                offset_x="0.5em"
                offset_y="-0.5em"
                src="/images/svg_bt2_ex_equation_addition_cloud.svg"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and adding this last equation to the first
              equation above, we find{" "}
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large -c -2 = 0
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              which implies that{" "}
              <NoBreak>
                <Math>
                  $-c = 2$
                </Math>
                ,
              </NoBreak>
              {" "}i.e., that{" "}
              <NoBreak>
                <Math>
                  $c = -2$
                </Math>
                .
              </NoBreak>
              {" "}
              Plugging{" "}
              <Math>
                $c = -2$
              </Math>
              {" "}into the first of our three
              equations, we find
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large b + (-2) + 1 = 0
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              or
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large b - 1 = 0
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              which implies that{" "}
              <NoBreak>
                <Math>
                  $b = 1$
                </Math>
                .
              </NoBreak>
              {" "}Lastly, plugging
              {" "}
              <NoBreak>
                <Math>
                  $b = 1$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $c = -2$
              </Math>
              {" "}in our second equation above
              gives us{" "}
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large a + 1 - (-2) - 3 = 0
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              which implies that{" "}
              <Math>
                $a = 0$
              </Math>
              {" "}since{" "}
              <NoBreak>
                <Math>
                  $1-(-2)-3 = 0$
                </Math>
                .
              </NoBreak>
              {" "}
              (One can finally check that 
              setting{" "}
              <NoBreak>
                <Math>
                  $a=0$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $b = 1$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $c=-2$
              </Math>
              {" "}satisfies that
              third equation,{" "}
              <NoBreak>
                <Math>
                  $-a-2b-c=0$
                </Math>
                ,
              </NoBreak>
              {" "}which it does.)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              In summary, the solution is{" "}
              <NoBreak>
                <Math>
                  $a = 0$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
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
              {" "}we have discovered that{" "}
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large v^0 F^1 \mu^&#123;-2&#125; \rho = 1
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              under the given definitions of{" "}
              <NoBreak>
                <Math>
                  $v$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $F$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $\mu$
              </Math>
              {" "}
              and{" "}
              <NoBreak>
                <Math>
                  $\rho$
                </Math>
                ,
              </NoBreak>
              {" "}or which is to say, we have discovered
              that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \Large F\mu^&#123;-2&#125;\rho = 1
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              (since{" "}
              <NoBreak>
                <Math>
                  $v^0 = 1$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $F^1 = F$
                </Math>
                ).
              </NoBreak>
            </VerticalChunk>
          </Solution>
        </Exercise>
      </Exercises>
</> }
</>);
};

export default Article;