import Chapter from "~/components/Chapter";
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

const Article = () => {
  return (
    <Chapter
      number={1}
      title="The Trigonometric Functions">
      <Exercises labels={["0", "1"]}>
        <Exercise exercise_number={1}>
          <VerticalChunk>
            <b>
              Exercise 1.
            </b>
            {" "}
            Given the graphs{" "}
            <Math>
              $y = \cos(x)\sin(x)$
            </Math>
            {" "}and 
            {" "}
            <NoBreak>
              <Math>
                $y = \cos^2(x)$
              </Math>
              ...
            </NoBreak>
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch5_ex_sinxcosx_and_cos2_comparison.svg" />
          <Pause />
          <VerticalChunk>
            ...it{" "}
            <i>
              appears
            </i>
            {" "}that one graph is a
            translate of the other; if this were 
            really so, what would the exact amounts
            of translation be? (Vertical{" "}
            <i>
              &
            </i>
            {" "}horizontal.)
            What algebraic identity would this imply? How to
            prove this identity?
          </VerticalChunk>
          <Pause />
          <Solution solution_number={1}>
            <VerticalChunk>
              We know from Exercise 21 that the 
              bump immediately to the 
              right of{" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "}on the graph{" "}
              <Math>
                $y = \cos(x)\sin(x)$
              </Math>
              {" "}
              has coordinates{" "}
              <NoBreak>
                <Math>
                  $(\eta/2, 0.5)$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_sinxcosx_and_cos2_comparison_sinxcosx_max.svg" />
            <Pause />
            <VerticalChunk>
              It might therefore be
              that a translation
              of{" "}
              <Math>
                $-\eta/2$
              </Math>
              {" "}
              units horizontally and
              {" "}
              <Math>
                $
                &#123;1\over 2&#125;
                $
              </Math>
              {" "}
              units vertically maps the graph{" "}
              <Math>
                $y = \sin(x)\cos(x)$
              </Math>
              {" "}onto
              the graph{" "}
              <NoBreak>
                <Math>
                  $y = \cos^2(x)$
                </Math>
                :
              </NoBreak>
            </VerticalChunk>
            <Pause />
            <Image src="/images/svg_ch5_ex_sinxcosx_and_cos2_comparison_zoomed_in.svg" />
            <Pause />
            <VerticalChunk>
              If true, this would indicate that
            </VerticalChunk>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="border:1px solid red;padding:1em 1em;width:fit-content;">
                <MathBlock>
                  $$
                  \cos^2(x) = &#123;1\over 2&#125; + \cos(x + \eta/2)\sin(x + \eta/2)
                  $$
                </MathBlock>
              </div>
            </center>
            <VerticalChunk>
              since replacing
              {" "}
              <NoBreak>
                “
                <Math>
                  $x$
                </Math>
                ”
              </NoBreak>
              {" "}by{" "}
              <NoBreak>
                “
                <Math>
                  $x + \eta/2$
                </Math>
                ”
              </NoBreak>
              {" "}in{" "}
              <Math>
                $\sin(x)\cos(x)$
              </Math>
              {" "}effects
              horizontal translation of the graph by{" "}
              <NoBreak>
                <Math>
                  $-\eta/2$
                </Math>
                ,
              </NoBreak>
              {" "}while adding
              {" "}
              <Math>
                $
                &#123;1\over 2&#125;
                $
              </Math>
              {" "}
              to the result effects a vertical translation by{" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 2&#125;$
                </Math>
                .
              </NoBreak>
            </VerticalChunk>
            <VerticalChunk indent={true}>
              To prove formula we use the angle-sum formulas;
              specifically...
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \cos(A + B) = \cos(A)\cos(B) - \sin(A)\sin(B)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \sin(A + B) = \cos(A)\sin(B) + \sin(A)\cos(B)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...(in case you had forgotten those); since
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \,\cos(\eta/2) = \sin(\eta/2) = \sqrt&#123;0.5&#125;,
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              we find:
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              \cos(x + \eta/2) &= \cos(x)\cos(\eta/2) - \sin(x)\sin(\eta/2) \\
              &= \up&#123;1.6&#125;\sqrt&#123;0.5&#125;\cdot(\cos(x) - \sin(x))
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              and:
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              \sin(x + \eta/2) &= \cos(x)\sin(\eta/2) + \sin(x)\cos(\eta/2) \\
              &= \up&#123;1.6&#125;\sqrt&#123;0.5&#125;\cdot(\cos(x) + \sin(x))
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...from which the product...
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \cos(x + \eta/2)\sin(x + \eta/2)
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...becomes...
            </VerticalChunk>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &\sqrt&#123;0.5&#125;\cdot\sqrt&#123;0.5&#125;\cdot(\cos^2(x) - \sin^2(x)) \\
              \up&#123;1.6&#125; =\,\,&&#123;1\over 2&#125;\cdot(\cos^2(x) - \sin^2(x)) \\
              \up&#123;1.6&#125; =\,\,&&#123;1\over 2&#125;\cdot(\cos^2(x) - (1 - \cos^2(x))) \\
              \up&#123;1.6&#125; =\,\,&&#123;1\over 2&#125;\cdot(2\cos^2(x) - 1) \\
              \up&#123;1.6&#125; =\,\,&\cos^2(x) - &#123;1\over 2&#125; \\
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <VerticalChunk>
              ...by the difference-of-squares formula and
              the pythagorean identity (often used together),
              and adding{" "}
              <Math>
                $&#123;1\over 2&#125;$
              </Math>
              {" "}gives{" "}
              <NoBreak>
                <Math>
                  $\cos^2(x)$
                </Math>
                ,
              </NoBreak>
              {" "}Q.E.D.!
              (So{" "}
              <Math>
                $y = \cos^2(x)$
              </Math>
              {" "}truly is the translate of 
              {" "}
              <NoBreak>
                <Math>
                  $y = \cos(x)\sin(x)$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <i>
                &
              </i>
              {" "}vice-versa.)
            </VerticalChunk>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 1.
                </i>
                {" "}
                We can turn the identity around, mapping
                {" "}
                <Math>
                  $y = \cos^2(x)$
                </Math>
                {" "}onto{" "}
                <Math>
                  $y = \sin(x)\cos(x)$
                </Math>
                {" "}via a
                translation, instead of the other way around; this gives:
              </VerticalChunk>
              <center style="margin-top:1em;margin-bottom:1em;">
                <div style="border:1px solid red;padding:1em 1em;width:fit-content;">
                  <MathBlock>
                    $$
                    \,- &#123;1\over 2&#125; + \cos^2(x - \eta/2) = \cos(x)\sin(x).
                    $$
                  </MathBlock>
                </div>
              </center>
              <VerticalChunk>
                In more detail: replacing
                {" "}
                <NoBreak>
                  “
                  <Math>
                    $x$
                  </Math>
                  ”
                </NoBreak>
                {" "}by{" "}
                <NoBreak>
                  “
                  <Math>
                    $x - \eta/2$
                  </Math>
                  ”
                </NoBreak>
                {" "}in{" "}
                <Math>
                  $\cos^2(x)$
                </Math>
                {" "}effects
                horizontal translation by{" "}
                <NoBreak>
                  <Math>
                    $+\eta/2$
                  </Math>
                  ,
                </NoBreak>
                {" "}and adding
                {" "}
                <Math>
                  $-&#123;1\over 2&#125;$
                </Math>
                {" "}
                to the result effects a vertical translation by{" "}
                <NoBreak>
                  <Math>
                    $-&#123;1\over 2&#125;$
                  </Math>
                  .
                </NoBreak>
                {" "}
                (I.e., we are using the
                inverse amounts of translation that we used to map
                {" "}
                <Math>
                  $y = \cos(x)\sin(x)$
                </Math>
                {" "}onto{" "}
                <NoBreak>
                  <Math>
                    $y = \cos^2(x)$
                  </Math>
                  .)
                </NoBreak>
              </VerticalChunk>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <VerticalChunk>
                <i>
                  Note 2.
                </i>
                {" "}
                The identity from the previous note can also
                be proved via the angle-sum formulas; since{" "}
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \cos(A + B) = \cos(A)\cos(B) - \sin(A)\sin(B)
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                and
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \sin(-\eta/2) = -\sqrt&#123;0.5&#125;
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                we have
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \begin&#123;align*&#125;
                \cos(x - \eta/2) &= \cos(x)\cos(-\eta/2) - \sin(x)\sin(-\eta/2) \\
                \up&#123;1.6&#125; &=\,\, \cos(x)\sqrt&#123;0.5&#125; - \sin(x)(-\sqrt&#123;0.5&#125;) \\
                \up&#123;1.6&#125; &=\,\, \sqrt&#123;0.5&#125;\cdot(\cos(x) + \sin(x)) \\
                \end&#123;align*&#125;
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                from which
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \cos^2(x - \eta/2)
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                becomes
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \begin&#123;align*&#125;
                &\left(\sqrt&#123;0.5&#125;\cdot(\cos x + \sin x)\right)^2 \\
                \up&#123;1.6&#125; =\,\,&&#123;1\over 2&#125;\cdot(\cos^2 x + 2\cos x\sin x +  \sin^2 x) \\
                \up&#123;1.6&#125; =\,\,&&#123;1\over 2&#125;\cdot(1 + 2\cos x\sin x) \\
                \up&#123;1.6&#125; =\,\,&&#123;1\over 2&#125; + \cos(x)\sin(x) \\
                \end&#123;align*&#125;
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                using the pythagorean identity in the third equality, 
                and
              </VerticalChunk>
              <Pause />
              <MathBlock>
                $$
                \begin&#123;align*&#125;
                & -&#123;1\over 2&#125; + \cos^2(x - \eta/2) \\
                \up&#123;1.7&#125; =\,\,&-&#123;1\over 2&#125; + \left(&#123;1\over 2&#125; + \cos(x)\sin(x)\right) \\
                \up&#123;1.7&#125; =\,\,&\cos(x)\sin(x)
                \end&#123;align*&#125;
                $$
              </MathBlock>
              <Pause />
              <VerticalChunk>
                as claimed.
              </VerticalChunk>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise exercise_number={2}>
          <VerticalChunk>
            <b>
              Exercise 2.
            </b>
            {" "}
            It also seems that 
            {" "}
            <Math>
              $y = \cos^2(x)$
            </Math>
            {" "}is some
            combination of a scaling and translation of 
            {" "}
            <NoBreak>
              <Math>
                $y = \cos(x)$
              </Math>
              :
            </NoBreak>
          </VerticalChunk>
          <Pause />
          <Image src="/images/svg_ch5_ex_sinxcosx_and_cos2_comparison.svg" />
          <Pause />
          <VerticalChunk>
            Conjecture the exact amounts of scaling and
            translation, and prove that
          </VerticalChunk>
        </Exercise>
      </Exercises>
    </Chapter>
  );
};

export default Article;