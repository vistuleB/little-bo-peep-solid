
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
import { SectionDivider, StarDivider } from "~/components/SectionDivider";
import VerticalChunk from "~/components/VerticalChunk";
import useSetRoute from "~/hooks/useSetRoute";

const Split1 = () => {
  return (
    <>
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
              line={2.0}
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
    </>
    
  )
}

export default Split1