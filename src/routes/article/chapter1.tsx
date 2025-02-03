import Chapter from "~/components/Chapter";
import { Section, Example, NoBreak, CustomBlock, Pause, WriterlyBlankLine } from "~/components/Wrappers";
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
      title="A Few Refreshers">
      <Section>
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
          $$(-2) \times (-2) = 4$$
        </MathBlock>
        <Pause />
        <CentralDisplay>
          and
        </CentralDisplay>
        <Pause />
        <MathBlock>
          $$2 \times 2 = 4$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          are both positive. But{" "}
          <Math>
            $\sqrt&#123;4&#125;$
          </Math>
          {" "}is, by 
          definition, the unique{" "}
          <i>
            nonnegative
          </i>
          {" "}
          solution to{" "}
          <NoBreak>
            <Math>
              $x^2 = 4$
            </Math>
            .
          </NoBreak>
          {" "}Hence, and whether 
          you like it or not,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$\sqrt&#123;(-2)^2&#125; = 2$$
          <ImageRight
            use_squiggle_on_mobile={false}
            padding="40px"
            offset_x="-3rem"
            offset_y="-1rem"
            src="/images/svg_cloud_minus_two_squared.svg" />
        </MathBlock>
        <Pause />
        <VerticalChunk>
          and, in particular, it is{" "}
          <i>
            not
          </i>
          {" "}true that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$\sqrt&#123;x^&#123;2&#125;&#125; \rt&#123;0.1&#125; = \rt&#123;0.1&#125; x$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          for every real number{" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            .
          </NoBreak>
          {" "}Instead we have
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$\sqrt&#123;x^&#123;2&#125;&#125; \rt&#123;0.1&#125; = \rt&#123;0.1&#125; |x|$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          for every real number{" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            ,
          </NoBreak>
          {" "}where{" "}
          <Math>
            $|x|$
          </Math>
          {" "}
          denotes the absolute value of{" "}
          <Math>
            $x$
          </Math>
          .
        </VerticalChunk>
        <VerticalChunk indent={true}>
          (Nb: If ever you want to indicate both 
          solutions of the equation{" "}
          <Math>
            $x^2 = 4$
          </Math>
          {" "}you
          can always use the notation “
          <NoBreak>
            <Math>
              $\pm \sqrt&#123;4&#125;$
            </Math>
            ”.
          </NoBreak>
          {" "}
          This is what happens, for example, in the 
          maybe-well-known formula
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$x = &#123;-b \pm \sqrt&#123;b^2 - 4ac&#125; \over 2a&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          for the solutions to the quadratic equation
          {" "}
          <Math>
            $ax^2 + bx + c = 0$
          </Math>
          .)
        </VerticalChunk>
        <VerticalChunk indent={true}>
          Now we can ponder, say,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$\sqrt&#123;0.5&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          whose value is—by definition—the unique
          nonnegative solution to
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$x^2 = 0.5.$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          As beginners, there's nothing wrong with 
          trying to solve this equation by trial and
          error. With{" "}
          <NoBreak>
            <Math>
              $x = &#123;1\over 4&#125;$
            </Math>
            ,
          </NoBreak>
          {" "}for example,
          we find
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$x^2 = &#123;1\over 4&#125;\times&#123;1\over 4&#125; = &#123;1\over 16&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          so{" "}
          <Math>
            $x = &#123;1\over 4&#125;$
          </Math>
          {" "}is not a solution of 
          the equation, being apparently too small. 
          Increasing{" "}
          <Math>
            $x$
          </Math>
          {" "}to{" "}
          <NoBreak>
            <Math>
              $x = &#123;1\over 2&#125;$
            </Math>
            ,
          </NoBreak>
          {" "}say, we 
          find
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$x^2 = &#123;1\over 2&#125;\times&#123;1\over 2&#125; = &#123;1\over 4&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          which is better, since{" "}
          <Math>
            $1/4$
          </Math>
          {" "}is closer to{" "}
          <NoBreak>
            <Math>
              $1/2$
            </Math>
            ,
          </NoBreak>
          {" "}
          but still too small. Increasing{" "}
          <Math>
            $x$
          </Math>
          {" "}by{" "}
          <Math>
            $1/4$
          </Math>
          {" "}
          again, say, to{" "}
          <NoBreak>
            <Math>
              $x = &#123;3\over 4&#125;$
            </Math>
            ,
          </NoBreak>
          {" "}we find
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$x^2 = &#123;3\over 4&#125;\times&#123;3\over 4&#125; = &#123;9\over 16&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          which—surprise!—is actually pretty close to 
          {" "}
          <NoBreak>
            <Math>
              $1/2$
            </Math>
            ,
          </NoBreak>
          {" "}as{" "}
          <NoBreak>
            <Math>
              $1/2 = 8/16$
            </Math>
            .
          </NoBreak>
          {" "}And since{" "}
          <NoBreak>
            <Math>
              $9/16 &gt; 0.5$
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <Math>
            $\sqrt&#123;0.5&#125;$
          </Math>
          {" "}must be a little{" "}
          <i>
            less
          </i>
          {" "}than 
          {" "}
          <Math>
            $&#123;3\over 4&#125; = 0.75$
          </Math>
          .
        </VerticalChunk>
        <VerticalChunk indent={true}>
          In last resort, and in reasonably good 
          agreement with our observations, a calculator 
          reveals that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$\sqrt&#123;0.5&#125; = 0.7071067...$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          where the decimals trail off with no pattern. 
          (This number is irrational.) Even so, the fact 
          that{" "}
          <Math>
            $\sqrt&#123;0.5&#125;$
          </Math>
          {" "}is{" "}
          <i>
            greater
          </i>
          {" "}than{" "}
          <Math>
            $0.5$
          </Math>
          {" "}is 
          often perceived as counterintuitive.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          You can think of it this way: multiplying a 
          value by{" "}
          <NoBreak>
            <Math>
              $0.7071$
            </Math>
            ,
          </NoBreak>
          {" "}or approximately{" "}
          <NoBreak>
            <Math>
              $\sqrt&#123;0.5&#125;$
            </Math>
            ,
          </NoBreak>
          {" "}
          is like taking{" "}
          <Math>
            $70.71\%$
          </Math>
          {" "}of that value—for 
          example, say,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$605 \cdot 0.7071 = 427.7955$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is{" "}
          <Math>
            $70.71\%$
          </Math>
          {" "}of{" "}
          <NoBreak>
            <Math>
              $605$
            </Math>
            ,
          </NoBreak>
          {" "}and so on—so if we 
          multiply{" "}
          <i>
            twice
          </i>
          {" "}by{" "}
          <Math>
            $0.7071$
          </Math>
          {" "}we obtain 
          “
          <Math>
            $70.71\%$
          </Math>
          {" "}of{" "}
          <NoBreak>
            <Math>
              $70.71\%$
            </Math>
            ”
          </NoBreak>
          {" "}and it just so happens 
          that “
          <Math>
            $70.71\%$
          </Math>
          {" "}of{" "}
          <NoBreak>
            <Math>
              $70.71\%$
            </Math>
            ”
          </NoBreak>
          {" "}is close to 
          {" "}
          <Math>
            $50\%$
          </Math>
          .
        </VerticalChunk>
        <VerticalChunk indent={true}>
          The point is: if “
          <Math>
            $X\%$
          </Math>
          {" "}of{" "}
          <NoBreak>
            <Math>
              $X\%$
            </Math>
            ”
          </NoBreak>
          {" "}equals{" "}
          <NoBreak>
            <Math>
              $50\%$
            </Math>
            ,
          </NoBreak>
          {" "}
          then, of course,{" "}
          <NoBreak>
            <Math>
              $\rt&#123;0.03&#125;X &gt; 50$
            </Math>
            —that
          </NoBreak>
          {" "}much 
          seems logical—and, with a little thought, the
          same phenomenon explains why{" "}
          <Math>
            $\sqrt&#123;0.5&#125; &gt; 0.5$
          </Math>
          .
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Fractions and Division.
          </b>
          {" "}
          An elementary fraction, or division, such as
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$&#123;50 \over 2&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          can be thought of in a few different ways:
        </VerticalChunk>
        <Pause />
        <List>
          <Item>
            Fifty halves (i.e.,{" "}
            <Math>
              $50 \times &#123;1\over 2&#125;$
            </Math>
            ).
          </Item>
          <Item>
            The size obtained when something of size 
            fifty is divided into two equal parts 
            (answer:{" "}
            <Math>
              $25$
            </Math>
            ).
          </Item>
          <Item>
            The number of times that{" "}
            <Math>
              $2$
            </Math>
            {" "}goes into{" "}
            <Math>
              $50$
            </Math>
            {" "}
            (answer:{" "}
            <NoBreak>
              <Math>
                $25$
              </Math>
              ,
            </NoBreak>
            {" "}because it takes twenty-five
            {" "}
            <NoBreak>
              <Math>
                $2$
              </Math>
              's
            </NoBreak>
            {" "}to make up{" "}
            <Math>
              $50$
            </Math>
            ).
          </Item>
        </List>
        <Pause />
        <VerticalChunk>
          But{" "}
          <Math>
            $50/2$
          </Math>
          {" "}is a ratio of integers, which makes 
          things particularly nice! For a ratio of 
          decimals, such as, say,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$&#123;1 \over 0.01&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          our possible points of view are going to be
          more restricted. Thankfully, however, we can 
          still characterize this fraction as the 
          answer to the question “how many times does 
          {" "}
          <Math>
            $0.01$
          </Math>
          {" "}go into{" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            ?”
          </NoBreak>
          {" "}as in the third option 
          above. And, indeed,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$&#123;1 \over 0.01&#125; \,=\,100$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          because{" "}
          <Math>
            $0.01$
          </Math>
          {" "}goes{" "}
          <Math>
            $100$
          </Math>
          {" "}times into{" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            .
          </NoBreak>
          {" "}For 
          that matter,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$&#123; 1 \over 0.001&#125; = 1000,\qquad&#123;1 \over 0.0001&#125; = 10000,\quad\,\,\,\,\textrm&#123;(etc)&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          by the same reasoning, which explains why 
          dividing by smaller and smaller numbers produces 
          larger and larger results (and, by extension, 
          why dividing by{" "}
          <Math>
            $0$
          </Math>
          {" "}is undefined).
        </VerticalChunk>
        <Pause />
        <VerticalChunk>
          <b>
            Note.
          </b>
          {" "}In general, the ratio of two decimal 
          numbers can be turned into a ratio of integers 
          by multiplying the ratio top and bottom by a 
          suitable power of{" "}
          <NoBreak>
            <Math>
              $10$
            </Math>
            .
          </NoBreak>
          {" "}E.g.:
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$&#123;1.42 \over 0.8&#125; = &#123;100 \cdot 1.42 \over 100 \cdot 0.8&#125; = &#123;142 \over 80&#125; = &#123;71 \over 40&#125;.$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          This example was chosen randomly, and, if you
          allow, we would like to see how large{" "}
          <Math>
            $71/40$
          </Math>
          {" "}
          really is (one second!):
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$\begin&#123;align&#125;
          &#123;71 \over 40&#125; \,&=\, &#123;40 + 30 + 1 \over 40&#125; \,=\, &#123;40 \over 40&#125; + &#123;30 \over 40&#125; + &#123;1 \over 40&#125;\\
          \,&=\, 1 + &#123;3 \over 4&#125; + &#123;1 \over 4&#125;\!\cdot \!&#123;1 \over 10&#125;\up&#123;1.5&#125;\\
          \,&=\, 1 + 0.75 + 0.025 = 1.775\up&#123;1.5&#125;
          \end&#123;align&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          ...so we find, among others, that{" "}
          <Math>
            $71$
          </Math>
          {" "}is exactly
          {" "}
          <Math>
            $77.5\%$
          </Math>
          {" "}greater than{" "}
          <NoBreak>
            <Math>
              $40$
            </Math>
            .
          </NoBreak>
          {" "}(Interesting, no?)
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Distributivity.
          </b>
          {" "}
          As you might already know, a number that 
          multiplies a sum can be brought “inside” the 
          sum. For example,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$5(10 + 2) \,=\, 5\!\cdot\!10 \,+\, 5\!\cdot\!2$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          (five times twelve equals fifty plus ten), or
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$a(b + c) = ab + ac$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          more generally. This property is known as the
          {" "}
          <i>
            distributivity of multiplication over addition
          </i>
          ,
          or{" "}
          <i>
            distributivity
          </i>
          {" "}for short.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          (We might finally clarify that ‘
          <NoBreak>
            <Math>
              $\cdot$
            </Math>
            ’
          </NoBreak>
          {" "}means
          “times”, i.e., the same as ‘
          <NoBreak>
            <Math>
              $\times$
            </Math>
            ’.
          </NoBreak>
          {" "}Moreover,
          when we write
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$5\!\cdot\!10 \,+\, 5\!\cdot\!2$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          we really mean
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$(5\!\cdot\!10) + (5\!\cdot\!2)$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          as opposed to something else, such as
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$((5\!\cdot\!10) + 5)\!\cdot\! 2,$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          because multiplication takes precedence over 
          addition, by default.)
        </VerticalChunk>
        <VerticalChunk indent={true}>
          A little more generally, one has such identities 
          as
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$(a + b)(C + D) \,=\, aC + bC + aD + bD$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          that come from multiplying every term of the first 
          parenthesis with every term of the second 
          parenthesis. Indeed,
          <ImageLeft
            offset_y="-10px"
            line={1.5}
            src="/images/325.svg" />
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$(a + b)(C + D) = (a + b)C + (a + b)D$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          by one application of distributivity, while
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$(a + b)C = aC + bC$$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$(a + b)D = aD + bD$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          by distributivity again.
        </VerticalChunk>
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 1.
            </b>
            {" "}
            One has
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$\begin&#123;align&#125;
            (10 + 2)(10 + 4) \,&=\, 10\!\cdot\!10 \,+\, 10\!\cdot\!4 \,+\, 2\!\cdot\!10 \,+\, 2\!\cdot\!4\\
            \,&=\, 100 \,+\, 40 \,+\, 20 \,+\, 8\\
            \,&=\, 168
            \end&#123;align&#125;$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            so{" "}
            <Math>
              $12 \times 14 = 168$
            </Math>
            .
          </VerticalChunk>
        </Example>
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 2.
            </b>
            {" "}
            One has
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$\begin&#123;align&#125;
            (10 + 3)(10 + 3) \,&=\, 10\!\cdot\!10 \,+\, 10\!\cdot\!3 \,+\, 3\!\cdot\!10 \,+\, 3\!\cdot\!3\\
            \,&=\, 100 \,+\, 30 \,+\, 30 \,+\, 9\\
            \,&=\, 169
            \end&#123;align&#125;$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            so{" "}
            <Math>
              $13 \times 13 = 169$
            </Math>
            .
          </VerticalChunk>
        </Example>
        <Pause />
        <VerticalChunk>
          (The fact that{" "}
          <Math>
            $13 \times 13$
          </Math>
          {" "}is exactly one 
          greater than{" "}
          <Math>
            $12 \times 14$
          </Math>
          {" "}is a bit curious 
          indeed.)
        </VerticalChunk>
        <VerticalChunk indent={true}>
          If we start from the afore-mentioned identity
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$(a + b)(C + D) \,=\, aC + bC + aD + bD$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          and set{" "}
          <NoBreak>
            <Math>
              $C = a$
            </Math>
            ,
          </NoBreak>
          {" "}{" "}
          <NoBreak>
            <Math>
              $D = b$
            </Math>
            ,
          </NoBreak>
          {" "}we find
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$(a + b)(a + b) \,=\, aa + ba + ab + bb$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          or, equivalently,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$(a + b)^2 = a^2 + 2ab + b^2$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          since{" "}
          <NoBreak>
            <Math>
              $(a + b)(a + b) = (a + b)^2$
            </Math>
            ,
          </NoBreak>
          {" "}{" "}
          <Math>
            $aa = a^2$
          </Math>
          {" "}
          and{" "}
          <NoBreak>
            <Math>
              $bb = b^2$
            </Math>
            .
          </NoBreak>
          {" "}(This is the{" "}
          <i>
            binomial expansion 
            of degree two
          </i>
          , but such terminology is not very 
          important at this stage.)
        </VerticalChunk>
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 3.
            </b>
            {" "}
            By the last formula (or “binomial expansion
            of degree two”),
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$\begin&#123;align&#125;
            \up&#123;1&#125; (10 + 3)^2 \,&=\, 10\!\cdot\!10 \,+\, 2\!\cdot\!3\!\cdot\!10 \,+\, 3\!\cdot\!3 \\
            \up&#123;1&#125; \,&=\, 100 + 60 + 9 \\
            \up&#123;1&#125; \,&=\, 169
            \end&#123;align&#125;$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            which agrees with Example 2.
          </VerticalChunk>
        </Example>
        <Pause />
        <VerticalChunk>
          On the other hand, setting{" "}
          <NoBreak>
            <Math>
              $C = a$
            </Math>
            ,
          </NoBreak>
          {" "}{" "}
          <Math>
            $D = -b$
          </Math>
          {" "}in
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$(a + b)(C + D) = aC + aD + bC + bD$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          gives
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$(a + b)(a + (-b)) = aa + a(-b) + ba + b(-b)$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          or, less pedantically,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$(a + b)(a - b) = aa - ab + ba - bb$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          or
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$(a + b)(a - b) = a^2 - b^2$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          since{" "}
          <NoBreak>
            <Math>
              $- ab + ba = 0$
            </Math>
            ,
          </NoBreak>
          {" "}{" "}
          <NoBreak>
            <Math>
              $aa = a^2$
            </Math>
            ,
          </NoBreak>
          {" "}{" "}
          <NoBreak>
            <Math>
              $bb = b^2$
            </Math>
            .
          </NoBreak>
          {" "}Note that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$a^2 - b^2$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is
        </VerticalChunk>
        <Pause />
        <CentralDisplayItalic>
          a difference of squares
        </CentralDisplayItalic>
        <Pause />
        <VerticalChunk>
          whence{" "}
          <i>
            a difference of squares can always be 
            factored
          </i>
          . (Factored as{" "}
          <NoBreak>
            <Math>
              $(a + b)(a - b)$
            </Math>
            ,
          </NoBreak>
          {" "}that
          is.) (PS: “Factored” means “written as a product”.)
        </VerticalChunk>
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
            $$19 = 100 - 81 = 10^2 - 9^2$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            is a difference of squares,{" "}
            <Math>
              $19$
            </Math>
            {" "}can be 
            factored. (On the other hand{" "}
            <Math>
              $19$
            </Math>
            {" "}is a prime 
            number, but nevermind.)
          </VerticalChunk>
        </Example>
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 5.
            </b>
            {" "}
            The algebraic expression
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$1 - x^2$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            can be factored, because
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$1 = 1^2$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            implies that
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$1 - x^2$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            truly is “a difference of squares”. And, indeed,
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$1 - x^2 = (1 - x)(1 + x)$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            as per “
            <Math>
              $\rt&#123;0.04&#125;a^2 - b^2 = (a - b)(a + b)$
            </Math>
            ”.
          </VerticalChunk>
        </Example>
        <Pause />
        <VerticalChunk>
          In relation to distributivity, we should also 
          mention the simple but important fact that 
          multiplying a difference by{" "}
          <Math>
            $-1$
          </Math>
          {" "}{" "}
          <i>
            reverses
          </i>
          {" "}the 
          difference. That is,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$(-1)(a - b) \,=\, b - a$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          or, for short,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$-(a - b) \,=\, b - a$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          because, indeed,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$\begin&#123;align&#125;
          (-1)(a - b) \,&=\, (-1)(a + (-b)) \\
          \,&=\, (-1)a + (-1)(-b) \\
          \,&=\, -a + b
          \end&#123;align&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          by distributivity (used in the second step).
        </VerticalChunk>
        <Pause />
        <Example>
          <VerticalChunk>
            <b>
              Example 6.
            </b>
            {" "}
            We have{" "}
            <NoBreak>
              <Math>
                $-(10 - 3) = 3 - 10$
              </Math>
              .
            </NoBreak>
            {" "}
            (Because{" "}
            <NoBreak>
              <Math>
                $-7 = -7$
              </Math>
              ,
            </NoBreak>
            {" "}as it would be, haha.)
          </VerticalChunk>
        </Example>
      </Section>
      <Pause />
      <Section divider={false}>
        <VerticalChunk>
          <b>
            Epilogue.
          </b>
          {" "}Do you remember the near miss between
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$12\cdot 14 \,=\, 168$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          and
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$13 \cdot 13 \,=\, 13^2 \,=\, 169$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          ...? Well if you observe, additionally, that
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$\begin&#123;align&#125;
          11\,\cdot\,13 &= 12^2 - 1\\
          10\,\cdot\,12 &= 11^2 - 1\\
          9\,\cdot\,11 &= 10^2 - 1
          \end&#123;align&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          (etc) you might become suspicious of a pattern! 
          But the mystery is rather thin: we have
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$(n - 1)(n + 1) \,=\, n^2 - 1$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          for{" "}
          <i>
            every
          </i>
          {" "}real number{" "}
          <Math>
            $n$
          </Math>
          {" "}because of the 
          formula
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$(a - b)(a + b) \,=\, a^2 - b^2$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          for a difference of squares!
        </VerticalChunk>
      </Section>
      <Pause />
      <Section>
        <VerticalChunk>
          <b>
            Vocabulary.
          </b>
          {" "}
          A pair of algebraic expressions of the form
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$a + b,\, a - b$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is called a{" "}
          <i>
            conjugate pair
          </i>
          . For example,
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$n + 1,\, n - 1$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          is a conjugate pair, as is
        </VerticalChunk>
        <Pause />
        <MathBlock>
          $$\sqrt&#123;3&#125; + \sqrt&#123;2&#125;,\,\, \sqrt&#123;3&#125; - \sqrt&#123;2&#125;$$
        </MathBlock>
        <Pause />
        <VerticalChunk>
          and so on. (Generally speaking, conjugate pairs
          are good things to multiply together.)
        </VerticalChunk>
      </Section>
      <Pause />
      <Exercises labels={["0", "1"]}>
        <Exercise exercise_number={0}>
          <VerticalChunk>
            <b>
              Exercise 1.
            </b>
            {" "}
            True or false (and, if possible, explain):
          </VerticalChunk>
          <Pause />
          <Grid
            center_on_overflow={true}
            sm_cutoff={520}
            sm_cols={2}
            cols={3}>
            <Item>
              a.{" "}
              <Math>
                $ 0.9^2 &lt; 0.9 $
              </Math>
              {" "}{" "}
            </Item>
            <Item>
              b.{" "}
              <Math>
                $ \sqrt&#123;0.01&#125; = 0.1 $
              </Math>
              {" "}{" "}
            </Item>
            <Item>
              c.{" "}
              <Math>
                $ \sqrt[2]&#123;\up&#123;0.8&#125;\sqrt[3]&#123;2&#125;&#125; = \sqrt[3]&#123;\up&#123;0.8&#125;\sqrt[2]&#123;2&#125;&#125; $
              </Math>
              {" "}{" "}
            </Item>
            <Item>
              d.{" "}
              <Math>
                $&#123;\sqrt&#123;2&#125; \over \up&#123;0.55&#125;2&#125; = \sqrt&#123;0.5&#125;$
              </Math>
              {" "}{" "}
            </Item>
            <Item>
              e.{" "}
              <Math>
                $ &#123;1 \over \sqrt&#123;2&#125;&#125; = \sqrt&#123;0.5&#125; $
              </Math>
              {" "}{" "}
            </Item>
            <Item>
              f.{" "}
              <Math>
                $ 2^&#123;30&#125; &gt; 1000^3 $
              </Math>
              {" "}{" "}
            </Item>
            <Item>
              g.{" "}
              <Math>
                $ &#123;1 \over 0.95&#125; &gt; 1.05 $
              </Math>
              {" "}{" "}
            </Item>
            <Item>
              h.{" "}
              <Math>
                $ (-1)^&#123;101&#125; = -1 $
              </Math>
              {" "}{" "}
            </Item>
            <Item>
              i.{" "}
              <Math>
                $ &#123;100 \over \up&#123;0.5&#125;99&#125; &lt; &#123;101 \over \up&#123;0.5&#125;100&#125; $
              </Math>
              {" "}{" "}
            </Item>
          </Grid>
          <Pause />
          <Solution solution_number={0}>
            <VerticalChunk>
              Part by part:
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              a. (True) We have
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$0.9^2 = &#123;9 \over 10&#125;\cdot&#123;9 \over 10&#125; = &#123;81 \over 100&#125; = 0.81$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and{" "}
              <Math>
                $0.81 &lt; 0.9$
              </Math>
              .
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              b. (True) We have
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$0.1^2 = &#123;1 \over 10&#125; \cdot &#123;1 \over 10&#125; = &#123;1 \over 100&#125; = 0.01,$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and{" "}
              <Math>
                $0.1$
              </Math>
              {" "}is nonnegative, so{" "}
              <Math>
                $\sqrt&#123;0.01&#125; = 0.1$
              </Math>
              .
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              c. (True) In fact, 
              {" "}
              <Math>
                $\sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;$
              </Math>
              {" "}
              and{" "}
              <Math>
                $\sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;$
              </Math>
              {" "}are 
              both equal to{" "}
              <NoBreak>
                <Math>
                  $\sqrt[6]&#123;\up&#123;0.6&#125;2&#125;$
                </Math>
                .
              </NoBreak>
              {" "}To 
              convince yourself, note that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\begin&#123;align&#125;
              &\,\, (\sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;\rt&#123;0.1&#125;)^6 \\
              =&\,\, \up&#123;1.3&#125;
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;\qquad\\
              =&\,\, \up&#123;1.3&#125;
              (\gbk\sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;\rt&#123;0.11&#125;) \times
              (\gbk\sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;\rt&#123;0.11&#125;) \times
              (\gbk\sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;\rt&#123;0.11&#125;) \\
              =& \,\, \up&#123;1.3&#125; (\sqrt[3]&#123;\up&#123;0.64&#125;2&#125;\rt&#123;0.1&#125;) \times (\sqrt[3]&#123;\up&#123;0.64&#125;2&#125;\rt&#123;0.1&#125;) \times
              (\sqrt[3]&#123;\up&#123;0.64&#125;2&#125;\rt&#123;0.1&#125;)\\
              =& \,\, \up&#123;1.4&#125; 2
              \end&#123;align&#125;$$
              <ImageLeft
                offset_y="0.8rem"
                src="/images/17.svg" />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\begin&#123;align&#125;
              &\,\, (\sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;\rt&#123;0.1&#125;)^6 \\
              =&\,\, \up&#123;1.3&#125;
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;\\
              =& \,\, \up&#123;1.3&#125;
              (\gbk\sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;\rt&#123;0.11&#125;) \times
              (\gbk\sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;\rt&#123;0.11&#125;)\\
              =&\,\, \up&#123;1.3&#125;
              \sqrt[2]&#123;\up&#123;0.65&#125;2&#125; \times \sqrt[2]&#123;\up&#123;0.65&#125;2&#125;\\
              =&\,\, \up&#123;1.4&#125; 2
              \end&#123;align&#125;$$
              <ImageLeft src="/images/18.svg" />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              so{" "}
              <Math>
                $(\sqrt[2]&#123;\up&#123;0.76&#125;\sqrt[3]&#123;2&#125;&#125;\rt&#123;0.1&#125;)^6 = 
                (\sqrt[3]&#123;\up&#123;0.76&#125;\sqrt[2]&#123;2&#125;&#125;\rt&#123;0.1&#125;)^6 = 2$
              </Math>
              .
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Technically, however, a number{" "}
              <Math>
                $x$
              </Math>
              {" "}such that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$x^6 = 2$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is not necessarily{" "}
              <NoBreak>
                <Math>
                  $\sqrt[6]&#123;\up&#123;0.6&#125;2&#125;$
                </Math>
                ,
              </NoBreak>
              {" "}
              because{" "}
              <Math>
                $x = -\sqrt[6]&#123;\up&#123;0.6&#125;2&#125;$
              </Math>
              {" "}satisfies 
              this equation as well!
            </VerticalChunk>
            <VerticalChunk indent={true}>
              The last step, therefore, is to note that
              {" "}
              <Math>
                $\sqrt[2]&#123;\up&#123;0.76&#125;\sqrt[3]&#123;2&#125;&#125;$
              </Math>
              {" "}and
              {" "}
              <Math>
                $\sqrt[3]&#123;\up&#123;0.76&#125;\sqrt[2]&#123;2&#125;&#125;$
              </Math>
              {" "}are both 
              {" "}
              <i>
                nonnegative
              </i>
              {" "}numbers (taken as obvious),
              and which implies that they are the{" "}
              <i>
                unique
                nonnegative
              </i>
              {" "}solution to{" "}
              <Math>
                $x^6 = 2$
              </Math>
              .
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              d. (True) In general,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;\sqrt&#123;x&#125; \over \sqrt&#123;y&#125;&#125; = \sqrt&#123;\up&#123;0.7&#125;x \over y&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for all{" "}
              <NoBreak>
                <Math>
                  $x \geq 0$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $y &gt; 0$
              </Math>
              {" "}(you need each 
              root to be defined), so
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;\sqrt&#123;2&#125; \over 2&#125; = &#123;\sqrt&#123;2&#125; \over \sqrt&#123;4&#125;&#125; = \sqrt&#123;\up&#123;0.8&#125;2 \over 4&#125; = \sqrt&#123;0.5&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...ta-daa!
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}One can also proceed by “direct
              verification”:
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\left(&#123;\sqrt&#123;2&#125; \over 2&#125;\right)^&#123;\!2&#125; = &#123;\sqrt&#123;2&#125; \over 2&#125;\cdot&#123;\sqrt&#123;2&#125; \over 2&#125;
              = &#123;\sqrt&#123;2&#125;\cdot\sqrt&#123;2&#125; \over 4&#125; = &#123;2 \over 4&#125; = 0.5.$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              (This, together with the fact that 
              {" "}
              <Math>
                $&#123;\sqrt&#123;2&#125; \over 2&#125;$
              </Math>
              {" "}is not negative, 
              establishes that{" "}
              <Math>
                $&#123;\sqrt&#123;2&#125; \over 2&#125; = 
                \sqrt&#123;0.5&#125;$
              </Math>
              .)
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              e. (True) Using the 
              “
              <NoBreak>
                <Math>
                  $&#123;\sqrt&#123;x&#125; \over \sqrt&#123;y&#125;&#125; = 
                  \sqrt&#123;\up&#123;0.7&#125;x \over y&#125;$
                </Math>
                ”
              </NoBreak>
              {" "}identity:
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over \sqrt&#123;2&#125;&#125; = &#123;\sqrt&#123;1&#125; \over \sqrt&#123;2&#125;&#125; = \sqrt&#123;\up&#123;0.8&#125;1 \over 2&#125; = \sqrt&#123;0.5&#125;.$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              Or by direct verification:
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\left(&#123;1 \over \sqrt&#123;2&#125;&#125;\right)^&#123;\!2&#125; = &#123;1 \over \sqrt&#123;2&#125;&#125;\cdot&#123;1 \over \sqrt&#123;2&#125;&#125;
              = &#123;1 \over \sqrt&#123;2&#125;\cdot\sqrt&#123;2&#125;&#125; = &#123;1 \over 2&#125; = 0.5.$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              (And{" "}
              <Math>
                $1 \over \sqrt&#123;2&#125;$
              </Math>
              {" "}is nonnegative.)
              Or by reducing to part d:
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over \sqrt&#123;2&#125;&#125; = &#123;\sqrt&#123;2&#125; \over \sqrt&#123;2&#125; \cdot \sqrt&#123;2&#125;&#125; = &#123;\sqrt&#123;2&#125; \over 2&#125;.$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              (The point being: we already know that 
              {" "}
              <Math>
                $&#123;\sqrt&#123;2&#125; \over 2&#125; = \sqrt&#123;0.5&#125;$
              </Math>
              {" "}by part d.)
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              f. (True) We have
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$2^&#123;30&#125; = 2^&#123;10&#125; \times 2^&#123;10&#125; \times 2^&#123;10&#125; = (2^&#123;10&#125;)^3$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$(2^&#123;10&#125;)^3 = (1024)^3 &gt; 1000^3.$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              <i>
                Note 2.
              </i>
              {" "}
              The first ten or so powers of{" "}
              <Math>
                $2$
              </Math>
              {" "}are worth
              knowing by heart (here's{" "}
              <i>
                eleven
              </i>
              {" "}powers, mind
              you):
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\begin&#123;array&#125;&#123;c|c&#125;
              \,\,\,\,n\,\,\,\, & 2^n\dn&#123;0.3&#125; \\ \hline
              0 & 1 \up&#123;1.1&#125;\\
              1 & 2 \\
              2 & 4 \\
              3 & 8 \\
              4 & 16 \\
              5 & 32 \\
              6 & 64 \\
              7 & 128 \\
              8 & 256 \\
              9 & 512 \\
              10 & 1024
              \end&#123;array&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              Among which, the fact that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$2^&#123;10&#125; \approx 10^3$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              can be particularly useful to know! For 
              example, if a 1-millimeter-thick napkin is 
              folded{" "}
              <Math>
                $50$
              </Math>
              {" "}times over, doubling the width 
              each time, one obtains something of 
              thickness
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$2^&#123;50&#125;\fw\te&#123;mm&#125; = (2^&#123;10&#125;)^5\fw\te&#123;mm&#125; \approx (10^3)^5\fw\te&#123;mm&#125; = 10^&#123;15&#125;\fw\te&#123;mm&#125;.$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              As
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$1\fw\te&#123;mm&#125; = 10^&#123;-6&#125;\fw\te&#123;km&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              this is
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$10^&#123;9&#125;\fw\te&#123;km&#125;$$
              <ImageRight
                use_squiggle_on_mobile={false}
                offset_y="-1rem"
                offset_x="-4rem"
                src="/images/svg_ch1_ex_104.svg" />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              or{" "}
              <i>
                one billion
              </i>
              {" "}kilometers. By 
              comparison, the distance from the Earth to
              the Sun is a mere{" "}
              <Math>
                $150$
              </Math>
              {" "}million kilometers.
              (The point being: that we could go from the 
              relatively mysterious
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\te&#123;“&#125;2^&#123;50&#125;\fw\te&#123;mm&#125;\te&#123;”&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              to the relatively less mysterious
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\te&#123;“&#125;\fw10^&#123;15&#125;\te&#123;mm&#125;\te&#123;”&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by the approximation{" "}
              <Math>
                $2^&#123;10&#125; \approx 10^3$
              </Math>
              .)
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              g. (True) As an inequality can be multiplied 
              on both sides by a positive number while 
              preserving the inequality, one has
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\begin&#123;align&#125;
              & &#123;1 \over 0.95&#125; &gt; 1.05\\
              \iff & 1 &gt; 1.05 \cdot 0.95\up&#123;1.4&#125;\\
              \iff & 1 &gt; (1 + 0.05)(1 - 0.05)\up&#123;1.4&#125;\\
              \iff & 1 &gt; 1 - 0.05^2\up&#123;1.4&#125;
              \end&#123;align&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              (using the fact that{" "}
              <NoBreak>
                <Math>
                  $(1+x)(1-x) = 1-x^2$
                </Math>
                ,
              </NoBreak>
              {" "}of
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\te&#123;“&#125;\,(a+b)(a-b) = a^2-b^2\,\te&#123;”&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              fame), and since the{" "}
              <i>
                last
              </i>
              {" "}inequality is true,
              the{" "}
              <i>
                first
              </i>
              {" "}inequality is true! (Recall that
              “
              <NoBreak>
                <Math>
                  $\!\iff\!$
                </Math>
                ”
              </NoBreak>
              {" "}means “if and only if”.)
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 3.
              </i>
              {" "}
              More generally, even though
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over 1 - \epsilon&#125; &gt; 1 + \epsilon$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for any small{" "}
              <NoBreak>
                <Math>
                  $\epsilon &gt; 0$
                </Math>
                ,
              </NoBreak>
              {" "}the number 
              {" "}
              <Math>
                $1 + \epsilon$
              </Math>
              {" "}remains a good approximation to 
              {" "}
              <NoBreak>
                <Math>
                  $&#123;1 \over 1 - \epsilon&#125;$
                </Math>
                .
              </NoBreak>
              {" "}For example,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over 0.99&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is a good approximation to
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over 0.99&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              while
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over 0.999&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is a good approximation to
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over 0.999&#125;,$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              etc.
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              h. (True) Here are the first few powers of{" "}
              <Math>
                $-1$
              </Math>
              {" "}
              (note how each additional multiplication by{" "}
              <Math>
                $-1$
              </Math>
              {" "}
              simply changes the sign of the previous result):
            </VerticalChunk>
            <Pause />
            <Grid
              place_items="end"
              cols={3}>
              <Item>
                {" "}{" "}
                <Math>
                  $ (-1)^1 = $
                </Math>
                {" "}{" "}
              </Item>
              <Item>
                {" "}{" "}
                <Math>
                  $ (-1) = $
                </Math>
                {" "}{" "}
              </Item>
              <Item>
                {" "}{" "}
                <Math>
                  $ -1 $
                </Math>
                {" "}{" "}
              </Item>
              <Item>
                {" "}{" "}
                <Math>
                  $ (-1)^2 = $
                </Math>
                {" "}{" "}
              </Item>
              <Item>
                {" "}{" "}
                <Math>
                  $ (-1)\times (-1) = $
                </Math>
                {" "}{" "}
              </Item>
              <Item>
                {" "}{" "}
                <Math>
                  $ 1 $
                </Math>
                {" "}{" "}
              </Item>
              <Item>
                {" "}{" "}
                <Math>
                  $ (-1)^3 = $
                </Math>
                {" "}{" "}
              </Item>
              <Item>
                {" "}{" "}
                <Math>
                  $ (-1)\times(-1)\times (-1) = $
                </Math>
                {" "}{" "}
              </Item>
              <Item>
                {" "}{" "}
                <Math>
                  $ -1 $
                </Math>
                {" "}{" "}
              </Item>
              <Item>
                {" "}{" "}
                <Math>
                  $ (-1)^4 = $
                </Math>
                {" "}{" "}
              </Item>
              <Item>
                {" "}{" "}
                <Math>
                  $ (-1)\times(-1)\times(-1)\times(-1) = $
                </Math>
                {" "}{" "}
              </Item>
              <Item>
                {" "}{" "}
                <Math>
                  $ 1 $
                </Math>
                {" "}{" "}
              </Item>
              <Item>
                {" "}{" "}
                <Math>
                  $ (-1)^5 = $
                </Math>
                {" "}{" "}
              </Item>
              <Item>
                {" "}{" "}
                <Math>
                  $ \,\,\,(-1)\times(-1)\times(-1)\times(-1)\times(-1) = $
                </Math>
                {" "}{" "}
              </Item>
              <Item>
                {" "}{" "}
                <Math>
                  $ -1 $
                </Math>
                {" "}{" "}
              </Item>
            </Grid>
            <Pause />
            <VerticalChunk>
              (Etc.) Obviously, even powers of{" "}
              <Math>
                $(-1)$
              </Math>
              {" "}are 
              equal to{" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "}while odd powers of{" "}
              <Math>
                $(-1)$
              </Math>
              {" "}are
              equal to{" "}
              <NoBreak>
                <Math>
                  $-1$
                </Math>
                .
              </NoBreak>
              {" "}As{" "}
              <Math>
                $101$
              </Math>
              {" "}is odd,{" "}
              <Math>
                $(-1)^&#123;101&#125;$
              </Math>
              {" "}
              is{" "}
              <Math>
                $-1$
              </Math>
              .
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              i. (False) We have
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;100 \over 99&#125; = &#123;99 + 1 \over 99&#125; = 1 + &#123;1 \over 99&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;101 \over 100&#125; = &#123;100 + 1 \over 100&#125; = 1 + &#123;1 \over 100&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              so the smaller of the two fractions is{" "}
              <NoBreak>
                <Math>
                  $&#123;101 
                  \over 100&#125;$
                </Math>
                ,
              </NoBreak>
              {" "}since{" "}
              <Math>
                $&#123;1 \over 100&#125; &lt; &#123;1 \over 
                99&#125;$
              </Math>
              .
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 4.
              </i>
              {" "}
              The difference
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over 99&#125; - &#123;1 \over 100&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is interesting in its own right, being 
              connected to a famous infinite sum. To 
              visualize this sum, picture a hare poised at 
              {" "}
              <Math>
                $x = 0$
              </Math>
              {" "}on the number line. This hare runs
              forward by one unit and backwards by half a
              unit, stopping at the number
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$1 - &#123;1\over 2&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              by virtue of this back-and-forth movement. 
              The hare then proceeds to run forward by 
              {" "}
              <i>
                half
              </i>
              {" "}a unit and back by a{" "}
              <i>
                third
              </i>
              {" "}of a unit,
              stopping at
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\begin&#123;align&#125;
              &\, \left(1 - &#123;1 \over 2&#125;\right) \\
              + \,&\, \left(&#123;1 \over 2&#125; - &#123;1 \over 3&#125;\right)_&#123;\color&#123;white&#125; a_&#123;a_a&#125;\!\!\!\!\!\!\!\!\!\!&#125; \\
              \hline
              = \,&\, \left(1 - &#123;1 \over 3&#125;\right)^&#123;\color&#123;white&#125; a^&#123;a^a&#125;&#125;
              \end&#123;align&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              for another break. Keeping with this pattern,
              the hare then stops at
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\begin&#123;align&#125;
              &\, \left(1 - &#123;1 \over 2&#125;\right)\\
              + \,&\, \left(&#123;1 \over 2&#125; - &#123;1 \over 3&#125;\right)\\
              + \,&\, \left(&#123;1 \over 3&#125; - &#123;1 \over 4&#125;\right)_&#123;\color&#123;white&#125; a_&#123;a_a&#125;\!\!\!\!\!\!\!\!\!\!&#125;\\
              \hline
              = \,&\, \left(1 - &#123;1 \over 4&#125;\right)^&#123;\color&#123;white&#125; a^&#123;a^a&#125;&#125;
              \end&#123;align&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and then at
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\begin&#123;align&#125;
              &\, \left(1 - &#123;1 \over 2&#125;\right)\\
              + \,&\, \left(&#123;1 \over 2&#125; - &#123;1 \over 3&#125;\right)\\
              + \,&\, \left(&#123;1 \over 3&#125; - &#123;1 \over 4&#125;\right)\\
              + \,&\, \left(&#123;1 \over 4&#125; - &#123;1 \over 5&#125;\right)_&#123;\color&#123;white&#125; a_&#123;a_a&#125;\!\!\!\!\!\!\!\!\!\!&#125;\\
              \hline
              = \,&\, \left(1 - &#123;1 \over 5&#125;\right)^&#123;\color&#123;white&#125; a^&#123;a^a&#125;&#125;
              \end&#123;align&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and so on.
              Clearly, the successive positions at which 
              the hare stops are approaching the number{" "}
              <Math>
                $1$
              </Math>
              {" "}
              from the left, pointing to the fact that the 
              {" "}
              <i>
                infinite
              </i>
              {" "}sum
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\begin&#123;align&#125;
              &\, \left(1 - &#123;1 \over 2&#125;\right)\\
              + \,&\, \left(&#123;1 \over 2&#125; - &#123;1 \over 3&#125;\right)\\
              + \,&\, \left(&#123;1 \over 3&#125; - &#123;1 \over 4&#125;\right)\\
              + \,&\, \left(&#123;1 \over 4&#125; - &#123;1 \over 5&#125;\right)\\
              + \,&\, \left(&#123;1 \over 5&#125; - &#123;1 \over 6&#125;\right)\\
              + \,&\, \left(&#123;1 \over 6&#125; - &#123;1 \over 7&#125;\right)\\
              + \,&\, \,\,\,\,\,\,\,\,\dots\up&#123;1.3&#125;
              \end&#123;align&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is “equal” (in some sense) to{" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                .
              </NoBreak>
              {" "}But how 
              much, exactly, is the{" "}
              <NoBreak>
                <Math>
                  $n$
                </Math>
                -th
              </NoBreak>
              {" "}term
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over n&#125; - &#123;1 \over n+1&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              of the sum? (By the way, this{" "}
              <NoBreak>
                <Math>
                  $n$
                </Math>
                -th
              </NoBreak>
              {" "}term 
              is the difference
              {" "}
              <Math>
                $&#123;1 \over 99&#125; - &#123;1 \over 100&#125;$
              </Math>
              {" "}for{" "}
              <NoBreak>
                <Math>
                  $n = 99$
                </Math>
                ,
              </NoBreak>
              {" "}
              which is how we came to be reminded of this 
              infinite sum in the first place.) Well...
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\begin&#123;align&#125;
              &#123;1 \over n&#125; - &#123;1 \over n+1&#125; &= &#123;1 \over n&#125;\cdot&#123;n+1 \over n+1&#125;\, - \,
              &#123;1 \over n+1&#125;\cdot&#123;n \over n&#125;\up&#123;1.5&#125;\\
              &= &#123;n+1 \over n(n+1)&#125; - &#123;n \over n(n+1)&#125;\up&#123;1.5&#125;\\
              &= &#123;1 \over n(n+1)&#125;\up&#123;1.5&#125;
              \end&#123;align&#125;$$
              <ImageRight
                y="12%"
                offset_y="3.5rem"
                src="/images/svg_ch1_ex_24.svg" />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...it's that much. (For example,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over 1&#125; - &#123;1 \over 2&#125; = &#123;1 \over 1 \cdot 2&#125; = &#123;1 \over 2&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over 2&#125; - &#123;1 \over 3&#125; = &#123;1 \over 2 \cdot 3&#125; = &#123;1 \over 6&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and so on.) So the infinite sum
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\begin&#123;align&#125;
              &\, \left(1 - &#123;1 \over 2&#125;\right)\\
              + \,&\, \left(&#123;1 \over 2&#125; - &#123;1 \over 3&#125;\right)\\
              + \,&\, \left(&#123;1 \over 3&#125; - &#123;1 \over 4&#125;\right)\\
              + \,&\, \left(&#123;1 \over 4&#125; - &#123;1 \over 5&#125;\right)\\
              + \,&\, \left(&#123;1 \over 5&#125; - &#123;1 \over 6&#125;\right)\\
              + \,&\, \left(&#123;1 \over 6&#125; - &#123;1 \over 7&#125;\right)\\
              + \,&\, \,\,\,\,\,\,\,\,\dots\up&#123;1.3&#125;\dn&#123;1&#125;\\ \hline
              = \,&\, 1\up&#123;1.5&#125;
              \end&#123;align&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              can also be written
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over 1 \cdot 2&#125; + &#123;1 \over 2 \cdot 3&#125; + &#123;1 \over 3 \cdot 4&#125; + &#123;1 \over 4 \cdot 5&#125; + &#123;1 \over
              5 \cdot 6&#125; + \dots \,=\, 1$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              (or
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over 2&#125; + &#123;1 \over 6&#125; + &#123;1 \over 12&#125; + &#123;1 \over 20&#125; + &#123;1 \over 30&#125; + \dots \,=\, 1$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              equivalently) which is not obvious at first 
              glance, and kind of interesting!
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Note 5.
              </i>
              {" "}The fact that
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over n&#125; - &#123;1 \over n+1&#125; = &#123;1 \over n(n+1)&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              means, in particular, that 
              {" "}
              <Math>
                $&#123;1 \over n&#125; - &#123;1 \over n+1&#125;$
              </Math>
              {" "}is roughly 
              {" "}
              <Math>
                $&#123;1 \over n^2&#125;$
              </Math>
              {" "}for large{" "}
              <NoBreak>
                <Math>
                  $n$
                </Math>
                ,
              </NoBreak>
              {" "}which is 
              sometimes handy to know. For example,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over 10&#125; - &#123;1 \over 11&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is approximately{" "}
              <NoBreak>
                <Math>
                  $1/10^2 = 0.01$
                </Math>
                ,
              </NoBreak>
              {" "}while
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over 100&#125; - &#123;1 \over 101&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is approximately{" "}
              <NoBreak>
                <Math>
                  $1/100^2 = 0.01^2 = 0.0001$
                </Math>
                ,
              </NoBreak>
              {" "}
              etc.
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={1}>
          <VerticalChunk>
            <b>
              Exercise 2.
            </b>
            {" "}
            In the solution to Exercise 1, we observed how 
            the difference
          </VerticalChunk>
          <Pause />
          <MathBlock>
            $$&#123;1 \over n&#125; - &#123;1 \over n+1&#125;$$
          </MathBlock>
          <Pause />
          <VerticalChunk>
            is{" "}
            <i>
              roughly
            </i>
            {" "}{" "}
            <Math>
              $1/n^2$
            </Math>
            {" "}for large{" "}
            <NoBreak>
              <Math>
                $n$
              </Math>
              .
            </NoBreak>
            {" "}But how 
            far off is this exactly? (I.e., what is the
            difference between{" "}
            <Math>
              $&#123;1 \over n&#125; - &#123;1 \over n+1&#125;$
            </Math>
            {" "}
            and{" "}
            <NoBreak>
              <Math>
                $&#123;1 \over n^2&#125;$
              </Math>
              ?)
            </NoBreak>
            {" "}And{" "}
            <i>
              roughly
            </i>
            {" "}how much is
            this far-offness, for large{" "}
            <Math>
              $n$
            </Math>
            ?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={1}>
            <VerticalChunk>
              Since
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over n&#125; - &#123;1 \over n+1&#125; = &#123;1 \over n(n+1)&#125;$$
              <ImageRight
                use_squiggle_on_mobile={false}
                src="/images/svg_ch1_ex_25.svg"
                offset_y="1.2rem"
                offset_x="-6rem" />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              (as previously computed) is smaller than
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over n^2&#125;$$
              <ImageRight
                use_squiggle_on_mobile={false}
                src="/images/ch1_ex_26.svg"
                offset_y="1.2rem"
                offset_x="-6rem" />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              we will compute the difference
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over n^2&#125; - &#123;1 \over n(n+1)&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              as opposed to the “other difference
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over n(n+1)&#125; - &#123;1 \over n^2&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              to avoid a minus sign in the result. 
              (Computing the second difference and having 
              a minus sign does not constitute a mistake, 
              however.) Having said this, the difference is:
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$\begin&#123;align&#125;
              &#123;1 \over n^2&#125; - &#123;1 \over n(n+1)&#125; &= &#123;1 \over n^2&#125; \cdot &#123;n+1 \over n+1&#125; - &#123;1 \over n(n+1)&#125; \cdot
              &#123;n \over n&#125;\\
              &= &#123;n+1 \over n^2(n+1)&#125; - &#123;n \over n^2(n+1)&#125;\up&#123;1.5&#125;\\
              &= &#123;1 \over n^2(n+1)&#125;\up&#123;1.5&#125;
              \end&#123;align&#125;$$
              <ImageRight
                clickable_on_desktop={true}
                y="12%"
                offset_y="2rem"
                src="/images/svg_ch1_ex_27.svg" />
            </MathBlock>
            <Pause />
            <VerticalChunk>
              which, for large{" "}
              <NoBreak>
                <Math>
                  $n$
                </Math>
                ,
              </NoBreak>
              {" "}is roughly
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over n^3&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              since{" "}
              <Math>
                $n^2(n+1) \approx n^3$
              </Math>
              {" "}for large{" "}
              <Math>
                $n$
              </Math>
              .
            </VerticalChunk>
            <Pause />
            <VerticalChunk>
              <i>
                Example 1.
              </i>
              {" "}Above, we estimated
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over 10&#125; - &#123;1 \over 11&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              to be roughly{" "}
              <NoBreak>
                <Math>
                  $1/100 = 0.01$
                </Math>
                ,
              </NoBreak>
              {" "}but{" "}
              <Math>
                $1/100$
              </Math>
              {" "}is 
              bigger than the actual value of
              {" "}
              <Math>
                $&#123;1 \over 10\cdot 11&#125; = &#123;1 \over 110&#125;$
              </Math>
              {" "}by
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over 10^2\cdot 11&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              or close to{" "}
              <NoBreak>
                <Math>
                  $1/10^3 = 0.001$
                </Math>
                .
              </NoBreak>
              {" "}
              (So
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over 10&#125; - &#123;1 \over 11&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is about{" "}
              <NoBreak>
                <Math>
                  $0.01$
                </Math>
                ,
              </NoBreak>
              {" "}while making an error of about
              {" "}
              <NoBreak>
                <Math>
                  $0.001$
                </Math>
                .)
              </NoBreak>
              {" "}(In fact,
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$&#123;1 \over 10^2\cdot 11&#125;$$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              is{" "}
              <i>
                less
              </i>
              {" "}than{" "}
              <NoBreak>
                <Math>
                  $1/10^3$
                </Math>
                ,
              </NoBreak>
              {" "}so the error is{" "}
              <i>
                less
              </i>
              {" "}
              than{" "}
              <Math>
                $0.001$
              </Math>
              .)
            </VerticalChunk>
          </Solution>
        </Exercise>
      </Exercises>
    </Chapter>
  );
};

export default Article;