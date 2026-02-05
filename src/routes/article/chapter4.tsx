import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Boxed  from "~/components/Boxed";
import { CentralDisplay, CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import InlineImage  from "~/components/InlineImage";
import { Item, List }  from "~/components/List";
import { Math, MathBlock }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageLeft, ImageRight }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { StarDivider }  from "~/components/StarDivider";
import TextParent  from "~/components/TextParent";
import { SolutionNote, NoBreak, Example, Section, Pause }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter4__() {
  return (
    <Article
      prevPage="/article/chapter3"
      nextPage="/article/chapter5"
      pageNecessaryMargin={1450}
      maxElementWidth={700}
      id="_83_hgi_"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            definitions
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            vocabulary
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=section-3">
            sketching a derivative
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            derivative of a constant function
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-4">
          <InChapterLink href="?id=section-5">
            derivative of an affine function
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-5">
          <InChapterLink href="?id=section-6">
            units of the derivative
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-6">
          <InChapterLink href="?id=section-7">
            the second derivative
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-7">
          <InChapterLink href="?id=section-8">
            geometric interpretation of the second derivative
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-8">
          <InChapterLink href="?id=section-9">
            vocabulary #1
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-9">
          <InChapterLink href="?id=section-10">
            the second derivative of position
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-10">
          <InChapterLink href="?id=section-11">
            the jerk
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-11">
          <InChapterLink href="?id=exercises">
            exercises
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 4:">
        Derivatives
      </ArticleTitle>
      <Pause />
      <Image
        src="/build-img/svgo-svg/myNp.svg"
        id="_55_hgi_"
      />
      <Pause />
      <Image src="/build-img/svgo-svg/dO9o.svg" />
      <Pause />
      <Image src="/build-img/svgo-svg/V6Pe.svg" />
      <Pause />
      <Image src="/build-img/svgo-svg/tzk1.svg" />
      <Pause />
      <Image src="/build-img/svgo-svg/an0s.svg" />
      <div style="height:1.4em" />
      <Section id="section-1">
        <OuterP>
          <b>
            Definitions.
          </b>
          {" "}
          The {" "}
          <i>
            derivative
          </i>
          {" "} of a function
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          f : \rr \ra \rr
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          is a (new) function
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          f' : \rr \ra \rr
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          that gives the slope of {" "}
          <Math>
            $f$
          </Math>
          {" "} at each point.
          In other words,
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          f'(a)
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          is the slope of the graph {" "}
          <Math>
            $y = f(x)$
          </Math>
          {" "} at
          {" "}
          <Math>
            $x = a$
          </Math>
          ⁠
          . And—surprise!—each pair of graphs
          above is a pair of the form {" "}
          <Math>
            $y = f(x)$
          </Math>
          {" "} [
          ⁠
          <Math>
            $=$
          </Math>
          {" "}
          “before”], {" "}
          <Math>
            $y = f'(x)$
          </Math>
          {" "} [
          ⁠
          <Math>
            $=$
          </Math>
          {" "} “after”].
          (Meaning, the “after” graph records the slope
          of the “before” graph.) 
          E.g.:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/G9zf.svg" />
        <Pause />
        <OuterP>
          Note that {" "}
          <Math>
            $f'\!$
          </Math>
          {" "} (read “
          ⁠
          <Math>
            $f$
          </Math>
          {" "} prime”) remains
          undefined where {" "}
          <Math>
            $y = f(x)$
          </Math>
          {" "} has a sharp “corner”
          and no well-defined slope. By opposition, if
          there is a well-defined tangent line to
          {" "}
          <Math>
            $y = f(x)$
          </Math>
          {" "} at {" "}
          <Math>
            $x = a$
          </Math>
          {" "} the slope of this
          tangent line supplies the value of {" "}
          <Math>
            $f'(a)$
          </Math>
          ⁠
          :
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/Tf6r.svg" />
        <Pause />
        <OuterP>
          In fact, we can
          succinctly describe the derivative by...
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          f'(a) = \te&#123;[slope of tangent line to $y = f(x)$ at $x = a$]&#125;
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          ...with the understanding that {" "}
          <Math>
            $f'(a)$
          </Math>
          {" "} is
          undefined if a tangent line does not exist
          or if the tangent is vertical.
          Also note that
          the endpoint of a curve does not count
          as having a tangent, and leaves a missing
          value for the derivative:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/5-sP.svg" />
        <Pause />
        <OuterP>
          (In other words, what one might describe as
          “half-tangents” do not actually count as tangents.)
        </OuterP>
      </Section>
      <Rest />
    </Article>
  );
}

const Rest = () => {
  const showMore = useShowMore();
  return <>
    {showMore() && <>
      <Pause />
      <Section id="section-2">
        <OuterP>
          <b>
            Vocabulary.
          </b>
          {" "}
          A function {" "}
          <Math>
            $f : \rr \ra \rr$
          </Math>
          {" "} is
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          differentiable
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          if {" "}
          <Math>
            $\dom\,f' = \dom\,f$
          </Math>
          ⁠
          . Also, if {" "}
          <Math>
            $a, b \in \rr$
          </Math>
          ⁠
          ,
          {" "}
          <Math>
            $a &lt; b$
          </Math>
          ⁠
          , {" "}
          <Math>
            $f$
          </Math>
          {" "} is
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          differentiable on {" "}
          <Math>
            $[a,b]$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          if {" "}
          <Math>
            $[a,b] \subseteq \dom \,f'$
          </Math>
          ⁠
          . Lastly, {" "}
          <Math>
            $f$
          </Math>
          {" "} is
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          differentiable at {" "}
          <Math>
            $a$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          if {" "}
          <Math>
            $a \in \dom\,f'$
          </Math>
          ⁠
          .
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-3">
        <OuterP>
          <b>
            Sketching a Derivative.
          </b>
          {" "}
          Say that you would like to sketch the derivative
          of the “before” function from the last “before”/“after” pair above:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/JpFf.svg" />
        <Pause />
        <OuterP>
          One method is simply to eyeball the slope at
          a few points along the curve, plot these
          values and interpolate:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/0-BA.svg" />
        <Pause />
        <Image src="/build-img/svgo-svg/azPc.svg" />
        <Pause />
        <Image src="/build-img/svgo-svg/wTBE.svg">
          <ImageRight
            src="/build-img/svgo-svg/WzTO.svg"
            offset_y="5%"
            offset_x="-25%"
          />
        </Image>
        <Pause />
        <OuterP>
          ...voilà!
        </OuterP>
        <OuterP class="indent-10">
          An alternate approach is to start by
          determining intervals on which the derivative
          is positive and negative, and then to
          interpolate via the largest (respectively,
          smallest) value of the derivative in each
          interval:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/eRkQ.svg" />
        <Pause />
        <Image src="/build-img/svgo-svg/Biz-.svg" />
        <Pause />
        <OuterP>
          The result (at bottom right)
          is a charming “robosketch” of the true
          derivative!
          (Well, charming in our opinion, at least.)
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-4">
        <OuterP>
          <b>
            Derivative of a constant function.
          </b>
          {" "}
          A constant function is a function of the form
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          x \ra B
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          for some {" "}
          <Math>
            $B \in \rr$
          </Math>
          {" "} independent of {" "}
          <Math>
            $x$
          </Math>
          ⁠
          .
          The graph of the constant function is the line
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          y = B
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          of slope {" "}
          <Math>
            $0$
          </Math>
          ⁠
          . So
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          (x \ra B)' = (x \ra 0)
          $$
        </MathBlock>
        <Pause />
        ⁠
        <ImageLeft
          src="/build-img/svgo-svg/tkpb.svg"
          offset_x="8em"
        />
        <OuterP>
          because at each {" "}
          <Math>
            $x$
          </Math>
          ⁠
          -value you find a slope of
          {" "}
          <Math>
            $0$
          </Math>
          ⁠
          , when you look up (down?) at the graph.
        </OuterP>
        <OuterP class="indent-10">
          If we refer to
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          x \ra 0
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          as the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          zero function
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          we can summarize the situation by saying that
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          ~ the derivative of a constant function
          is the zero function ~
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          or, more shortly,
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          ~ the derivative of a constant is zero ~
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          (the way people usually state it).
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-5">
        <OuterP>
          <b>
            Derivative of an affine function.
          </b>
          {" "}
          An affine function is a function of the form
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          x \ra Ax + B
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          for constants {" "}
          <Math>
            $A$
          </Math>
          ⁠
          , {" "}
          <Math>
            $B \in \rr$
          </Math>
          ⁠
          .
          The graph of {" "}
          <Math>
            $x \ra Ax + B$
          </Math>
          {" "} is a line of
          slope {" "}
          <Math>
            $A$
          </Math>
          ⁠
          , so
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          (x \ra Ax + B)' = (x \ra A)
          $$
        </MathBlock>
        <Pause />
        ⁠
        <ImageLeft
          src="/build-img/svgo-svg/2UFf.svg"
          offset_x="7em"
        />
        <OuterP>
          because the slope of a line of slope {" "}
          <Math>
            $A$
          </Math>
          {" "} is
          {" "}
          <Math>
            $A$
          </Math>
          ⁠
          , no matter where you place yourself on the
          line. In particular, {" "}
          <Math>
            $B$
          </Math>
          {" "} plays no role in the
          derivative! (
          ⁠
          <Math>
            $\rt&#123;0.2&#125;$
          </Math>
          ⁠
          Just like in the case of a
          constant function, the derivative leaves no
          trace of {" "}
          <Math>
            $B$
          </Math>
          ⁠
          's value—and for the same reason
          that {" "}
          <Math>
            $B$
          </Math>
          {" "} effects a vertical translation, which
          does not change the slope of anything.)
        </OuterP>
        <OuterP class="indent-10">
          In words:
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          ~ the derivative of the affine function
          {" "}
          <Math>
            $y = ax + b$
          </Math>
          {" "} is the constant function {" "}
          <Math>
            $y = a$
          </Math>
          {" "} ~
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          Or, flexing our linguistic prowess a tad more:
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          ~ the derivative of an affine function is
          the coefficient of its linear term ~
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          (The “linear term” of {" "}
          <Math>
            $y = ax + b$
          </Math>
          {" "} is {" "}
          <Math>
            $ax$
          </Math>
          ⁠
          ,
          of coefficient {" "}
          <Math>
            $a$
          </Math>
          ⁠
          .)
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 1.
            </b>
            {" "}
            One has
          </OuterP>
          ⁠
          <Pause />
          <MathBlock>
            $$
            (x \ra 3x + 1)' = (x \ra 3)
            $$
          </MathBlock>
          <Pause />
          ⁠
          <OuterP>
            as per
          </OuterP>
          ⁠
          <Pause />
          <MathBlock>
            $$
            (x \ra Ax + B)' = (x \ra A)
            $$
          </MathBlock>
          <Pause />
          ⁠
          <OuterP>
            with {" "}
            <Math>
              $A = 3$
            </Math>
            ⁠
            , {" "}
            <Math>
              $B = 1$
            </Math>
            ⁠
            .
          </OuterP>
        </Example>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 2.
            </b>
            {" "}
            One has
          </OuterP>
          ⁠
          <Pause />
          <MathBlock>
            $$
            (x \ra 12 - x)' = (x \ra -1)
            $$
          </MathBlock>
          <Pause />
          ⁠
          <OuterP>
            as per
          </OuterP>
          ⁠
          <Pause />
          <MathBlock>
            $$
            (x \ra Ax + B)' = (x \ra A)
            $$
          </MathBlock>
          <Pause />
          ⁠
          <OuterP>
            with {" "}
            <Math>
              $A = -1$
            </Math>
            ⁠
            , {" "}
            <Math>
              $B = 12$
            </Math>
            ⁠
            .
          </OuterP>
        </Example>
      </Section>
      <Pause />
      <Section id="section-6">
        <OuterP>
          <b>
            Units of the Derivative.
          </b>
          {" "}
          If units are present, we have
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          \te&#123;$y$ axis units for $f'$&#125; \,= &#123;\te&#123;$y$ axis units for $\f$&#125; \over \te&#123;$x$ axis units for $\f$&#125;&#125;
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          because a value output by {" "}
          <Math>
            $\f'$
          </Math>
          {" "} is the
          {" "}
          <i>
            slope
          </i>
          {" "} of a tangent line attached to the
          graph {" "}
          <Math>
            $y = f(x)$
          </Math>
          ⁠
          , and
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          \te&#123;$x$ axis units for $f'$&#125;\, = \rt&#123;0.02&#125;\,\te&#123;$x$ axis units for $f$&#125;
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          because an input for {" "}
          <Math>
            $\f'$
          </Math>
          {" "} is, originally,
          an input for {" "}
          <Math>
            $\f$
          </Math>
          ⁠
          .
        </OuterP>
        <OuterP class="indent-10">
          For example, if the “before” graph has units
          of...
        </OuterP>
        <Pause />
        <List style="padding-left:2.5rem;padding-right:2rem;">
          <Item>
            <p>
              seconds on the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis, meters on the
              {" "}
              <Math>
                $y$
              </Math>
              {" "} axis
            </p>
          </Item>
        </List>
        <Pause />
        <OuterP>
          ...then the “after” graph will have units of...
          <ImageRight
            src="/build-img/svgo-svg/whL5.svg"
            offset_y="-0.6em"
          />
        </OuterP>
        <Pause />
        <List style="padding-left:2.5rem;padding-right:2rem;">
          <Item>
            <p>
              seconds on the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis, meters per
              second on the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis
            </p>
          </Item>
        </List>
        <Pause />
        <OuterP>
          ...while if the “before” graph has units of...
        </OuterP>
        <Pause />
        <List style="padding-left:2.5rem;padding-right:2rem;">
          <Item>
            <p>
              apples on the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis, oranges on the
              {" "}
              <Math>
                $y$
              </Math>
              {" "} axis
            </p>
          </Item>
        </List>
        <Pause />
        <OuterP>
          ...then the “after” graph will have units of...
          <ImageLeft
            src="/build-img/svgo-svg/ekk4.svg"
            offset_y="0.6em"
          />
        </OuterP>
        <Pause />
        <List style="padding-left:2.5rem;padding-right:2rem;">
          <Item>
            <p>
              apples on the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis, oranges per apple
              on the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis
            </p>
          </Item>
        </List>
        <Pause />
        <OuterP>
          ...and so on.
        </OuterP>
        <OuterP class="indent-10">
          Units might additionally prompt us to refer
          to {" "}
          <Math>
            $f'$
          </Math>
          {" "} as the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          rate of change
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          of {" "}
          <Math>
            $f$
          </Math>
          ⁠
          , or, depending, as the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          instantaneous
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          rate of change of {" "}
          <Math>
            $f$
          </Math>
          ⁠
          . The latter bit of
          emphasis has to do with the fact that, in a
          general graph, the slope of the tangent
          keeps changing from point to point.
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-7">
        <OuterP>
          <b>
            The second derivative.
          </b>
          {" "}
          The {" "}
          <i>
            second derivative
          </i>
          {" "} of {" "}
          <Math>
            $f$
          </Math>
          {" "} is the derivative
          of the derivative of {" "}
          <Math>
            $f$
          </Math>
          ⁠
          . It is written “
          ⁠
          <Math>
            $f''$
          </Math>
          ⁠
          ”:
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          \,\,\,f'' = (f')'.
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          Likewise, we have, e.g.,
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          \begin&#123;align&#125;
          \up&#123;0.95&#125;f''' &amp;= (f'')'\\
          \up&#123;1.25&#125;f'''' &amp;= (f''')'\\
          \up&#123;1.25&#125;f''''\psa' &amp;= (f'''')'\\
          \end&#123;align&#125;
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          these being, namely, the {" "}
          <i>
            third
          </i>
          ⁠
          , {" "}
          <i>
            fourth
          </i>
          {" "}
          and {" "}
          <i>
            fifth
          </i>
          {" "} derivatives of {" "}
          <Math>
            $f$
          </Math>
          ⁠
          . One can also
          write
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          f^&#123;(n)&#125;
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          for the {" "}
          <Math>
            $n$
          </Math>
          ⁠
          -th derivative of {" "}
          <Math>
            $f$
          </Math>
          ⁠
          , so that, for
          example,
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          f^&#123;(7)&#125;
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          means the same as
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          f'''''''
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          but with the advantage that you don't have to
          squint and start re-counting the apostrophes
          several times over.
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 3.
            </b>
            {" "}
            We have
          </OuterP>
          ⁠
          <Pause />
          <MathBlock>
            $$
            (x \ra 3x + 1)'' = (x \ra 0)
            $$
          </MathBlock>
          <Pause />
          ⁠
          <ImageRight
            src="/build-img/svgo-svg/ORL8.svg"
            offset_x="6em"
            offset_y="0.1em"
          />
        </Example>
        <Pause />
        <OuterP>
          because, firstly,
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          (x \ra 3x + 1)' = (x \ra 3)
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          and, secondly,
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          (x \ra 3)' = (x \ra 0)
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          so that, from start to finish,
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          (x \ra 3x + 1)'' =  ((x \ra 3x + 1)')' = (x \ra 3)' = (x \ra 0)
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          where we unpeel the onion starting from the
          inside. (Physically difficult.)
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 4.
            </b>
            {" "}
            More generally,
          </OuterP>
          ⁠
          <Pause />
          <MathBlock>
            $$
            \,\,\,(x \ra ax + b)'' = (x \ra 0)
            $$
          </MathBlock>
          <Pause />
          ⁠
          <OuterP>
            for all {" "}
            <Math>
              $a, b \in \rr$
            </Math>
            ⁠
            , by a similar computation;
            a.k.a.:
          </OuterP>
          <Pause />
          <CentralDisplayItalic>
            ~ the second derivative of an affine function is zero ~
          </CentralDisplayItalic>
        </Example>
        <Pause />
        <StarDivider style="margin-top:-0.5em;margin-bottom:0em" />
      </Section>
      <Pause />
      <Section id="section-8">
        <OuterP>
          <b>
            Geometric interpretation of the second derivative.
          </b>
          {" "}
          The sign of the second derivative—whether
          it is positive or negative—indicates whether
          a graph is “bending upwards” or “bending
          downwards”. Upward-bending graphs have a positive
          second derivative, whereas downward-bending graphs
          have a negative second derivative:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/gmq7.svg" />
        <Pause />
        <OuterP>
          Reason like this: the second derivative is {" "}
          <del>
            “the rate of change of the rate of change”.
          </del>
          {" "} Sorry: “the rate of change of the slope”.
          (Same difference.) Ergo, if the second derivative
          is positive, the slope is increasing; if the
          second derivative is negative, the slope is
          decreasing. Moreover, an
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          increasing
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          slope gives curves a “bending upwards” shape, while a
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          decreasing
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          slope gives curves a “bending downward” shape!
        </OuterP>
        <OuterP class="indent-10">
          To emphasize, if the second derivative is some
        </OuterP>
        <Pause />
        <CentralDisplay>
          LARGE POSITIVE NUMBER
        </CentralDisplay>
        <Pause />
        <OuterP>
          then the slope is increasing at that rate,
          which could result in a sharp bend upwards
          in the graph (unless you are near vertical
          already—you can't see the difference between
          slope {" "}
          <Math>
            $100$
          </Math>
          {" "} and slope {" "}
          <Math>
            $1000$
          </Math>
          {" "} very well, at most
          scales—nor between {" "}
          <Math>
            $-1000$
          </Math>
          {" "} and {" "}
          <Math>
            $-100$
          </Math>
          ⁠
          , for that
          matter).
        </OuterP>
        <OuterP class="indent-10">
          Likewise, if the second derivative is some
        </OuterP>
        <Pause />
        <CentralDisplay>
          LARGE NEGATIVE NUMBER
        </CentralDisplay>
        <Pause />
        <OuterP>
          then the slope is decreasing at [the absolute
          value of] that rate, which could result in
          a sharp bend downwards in the graph (unless
          you are near vertical already, once again,
          because verticality can disguise the presence
          of a significant change in slope, once again).
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-9">
        <OuterP>
          <b>
            Vocabulary #1.
          </b>
          {" "}
          Curves with increasing (technically:
          {" "}
          <i>
            nondecreasing
          </i>
          ⁠
          ) slope are called {" "}
          <i>
            convex
          </i>
          ⁠
          ,
          while curves with decreasing (technically:
          {" "}
          <i>
            nonincreasing
          </i>
          ⁠
          ) slope are called {" "}
          <i>
            concave
          </i>
          ⁠
          .
          Viz:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/at2Y.svg" />
        <Pause />
        <OuterP>
          <b>
            Vocabulary #2.
          </b>
          {" "}
          An {" "}
          <i>
            inflection point
          </i>
          {" "} is a point at the
          interface between convex and concave sections
          of a graph:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/tv8l.svg" />
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 5.
            </b>
            {" "}
            The fact that
          </OuterP>
          ⁠
          <Pause />
          <MathBlock>
            $$
            (x \ra 3x + 1)'' = (x \ra 0)
            $$
          </MathBlock>
          <Pause />
          ⁠
          <OuterP>
            indicates that the graph
          </OuterP>
          ⁠
          <Pause />
          <MathBlock>
            $$
            y = 3x + 1
            $$
          </MathBlock>
          <Pause />
          ⁠
          <OuterP>
            is neither “bending upwards” nor “bending
            downwards”—
            ⁠
            <Math>
              $0$
            </Math>
            {" "} is neither positive, nor negative.
          </OuterP>
        </Example>
      </Section>
      <Pause />
      <Section id="section-10">
        <OuterP>
          <b>
            The second derivative of position.
          </b>
          {" "}
          A graph of the form...
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/UjMy.svg" />
        <Pause />
        <OuterP>
          ...describes {" "}
          <i>
            position as a function of time
          </i>
          {" "}
          (look at the units); the derivative...
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/wwWE.svg" />
        <Pause />
        <OuterP>
          ...describes {" "}
          <i>
            velocity as a function of time
          </i>
          ⁠
          ;
          finally, the second derivative...
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/cBcm.svg">
          <ImageLeft src="/build-img/svgo-svg/zAav.svg" />
        </Image>
        <Pause />
        <OuterP>
          ...describes
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          the rate of change of velocity
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          also known as the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          acceleration
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          as a function of time.
        </OuterP>
        <OuterP class="indent-10">
          Note that the units on the {" "}
          <Math>
            $y$
          </Math>
          {" "} axis of the
          second derivative are given by
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;$y$ axis units for $f'$&#125; \over \te&#123;$x$ axis units for $f'$&#125;&#125; =
          &#123;\te&#123;m&#125;/\te&#123;s&#125; \over \te&#123;s&#125;&#125; =
          &#123;\te&#123;m&#125; \over \rt&#123;0.1&#125;\te&#123;s&#125;\!&#123;\,&#125;^2&#125;
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          because {" "}
          <Math>
            $f'' = (f')'$
          </Math>
          ⁠
          . The point is, a tangent
          to the graph {" "}
          <Math>
            $y = f'(t)$
          </Math>
          {" "} has a “rise” measured
          in meters per second and a “run” measured in
          seconds:
        </OuterP>
        <Pause />
        <Image src="/build-img/svgo-svg/YS5-.svg" />
        <Pause />
        <OuterP>
          The ratio “rise over run” has the form
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;m&#125;/\te&#123;s&#125; \over \te&#123;s&#125;&#125;
          = &#123;\te&#123;m&#125; \over \te&#123;s&#125;&#125; \times &#123;1 \over \te&#123;s&#125;&#125;
          = &#123;\te&#123;m&#125; \over \te&#123;s&#125;\!&#123;\,&#125;^2&#125;
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          which produces the above-mentioned units of
          the second derivative. Also note that a ratio of
          the form
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;difference in velocity&#125; \over \te&#123;amount of time&#125;&#125;
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          is, indeed, an acceleration, in that acceleration
          is defined as “the increase in velocity per unit
          time”.
        </OuterP>
        <OuterP class="indent-10">
          To summarize:
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          ~ velocity is the derivative of position ~
        </CentralDisplayItalic>
        <Pause />
        <CentralDisplayItalic>
          ~ acceleration is the derivative of velocity ~
        </CentralDisplayItalic>
        <Pause />
        <StarDivider />
        <Pause />
        <OuterP>
          <b>
            Note.
          </b>
          {" "}
          The exotic units
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;m&#125; \over \,\te&#123;s&#125;\!&#123;\,&#125;^2&#125;
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          can be read
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          meters per second squared
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          which sounds pretty cryptic, unfortunately, or
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          meters per second per second
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          which is better, or (slight difference!)
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          meters per second, per second
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          which is even better because it “shows” acceleration
          to be a number of m
          ⁠
          <Math>
            $/$
          </Math>
          ⁠
          s per second.
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 6.
            </b>
            {" "}
            Over a period of {" "}
            <Math>
              $10$
            </Math>
            ⁠
            s, an object that is
            accelerating at a constant rate of
          </OuterP>
          ⁠
          <Pause />
          <MathBlock>
            $$
            2&#123;\te&#123;m&#125;/\te&#123;s&#125;\!&#123;\,&#125;^2&#125;
            $$
          </MathBlock>
          <Pause />
          ⁠
          <OuterP>
            increases its velocity by
          </OuterP>
          ⁠
          <Pause />
          <MathBlock>
            $$
            (2&#123;\te&#123;m&#125;/\te&#123;s&#125;\!&#123;\,&#125;^2&#125;) \times\, (10\te&#123;s&#125;) = 20&#123;\te&#123;m&#125;/\te&#123;s&#125;&#125;
            $$
          </MathBlock>
          <Pause />
          ⁠
          <ImageRight
            src="/build-img/svgo-svg/R0nW.svg"
            offset_x="5em"
          />
          <OuterP>
            according to the template
          </OuterP>
          ⁠
          <Pause />
          <MathBlock>
            $$
            (\te&#123;rate of change&#125;) \times \te&#123;(amount of time)&#125;\\
            = \te&#123;(amount of change)&#125;
            $$
          </MathBlock>
          <Pause />
          ⁠
          <OuterP>
            since acceleration is the rate of change of
            velocity.
          </OuterP>
        </Example>
      </Section>
      <Pause />
      <Section id="section-11">
        <OuterP>
          <b>
            The jerk.
          </b>
          {" "}
          The rate of change of acceleration has a
          name as well, being known as the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          jerk
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          in physics. The units of jerk (or “the”
          units of jerk, since any units of same {" "}
          <a
            href="chapter2#section-9"
            class="underline-on-hover"
          >
            <i>
              dimension
            </i>
          </a>
          {" "} would do as well) are
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;m&#125; \over \,\te&#123;s&#125;\!&#123;\,&#125;^3&#125;
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          or
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          meters per second, per second, per second
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          which is mildly amusing. Basically, the
          jerk specifies how many {" "}
          <i>
            meters per second,
            per second
          </i>
          {" "} (a measure of acceleration!)
          is being gained or lost {" "}
          <i>
            per second
          </i>
          ⁠
          .
        </OuterP>
        <OuterP class="indent-10">
          The term “jerk” is at least half-way well-chosen,
          too, considering that
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          jerk
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          implies a change in acceleration insofar as the
          everyday meaning of the word is concerned—think
          of experiencing a
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          constant acceleration
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          in a train or subway car, etc—the
          “constant” qualifier, if you think about it, implies
          a non-jerky experience!
        </OuterP>
        <Pause />
        <OuterP>
          <b>
            Postscript: Sums, Products, Quotients,
            and Differences of Functions.
          </b>
          {" "}
          Coming briefly back to Chapter 3-related
          matters, if
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          f, g : \rr \ra \rr
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          then
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          f \circ g = (x \ra f(g(x)))
          $$
        </MathBlock>
        <Pause />
        ⁠
        ⁠
        <Pause />
        <MathBlock>
          $$
          f + g = (x \ra f(x) + g(x))
          $$
        </MathBlock>
        <Pause />
        ⁠
        ⁠
        <Pause />
        <MathBlock>
          $$
          fg = (x \ra f(x)g
          (x))
          $$
        </MathBlock>
        <Pause />
        ⁠
        ⁠
        <Pause />
        <MathBlock>
          $$
          &#123;f/g&#125; = (x \ra &#123;f(x)/g(x)&#125;)
          $$
        </MathBlock>
        <Pause />
        ⁠
        ⁠
        <Pause />
        <MathBlock>
          $$
          f - g = (x \ra f(x) - g(x))
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          with each equation being a {" "}
          <i>
            definition
          </i>
          ⁠
          .
          The notation
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          f \circ g
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          goes back to {" "}
          <NoBreak>
            <a
              href="/article/chapter3#_35_hgi_"
              class="handle-out-chapter-link"
            >
              Exercise 5 of Chapter 3
            </a>
            ,
          </NoBreak>
          {" "} with
          the little circle “
          ⁠
          <Math>
            $\circ$
          </Math>
          ⁠
          ” being known as
          the {" "}
          <i>
            composition operator
          </i>
          ⁠
          , while the sum
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          f + g
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          and product
        </OuterP>
        ⁠
        <Pause />
        <MathBlock>
          $$
          fg
          $$
        </MathBlock>
        <Pause />
        ⁠
        <OuterP>
          of functions already appear in {" "}
          <NoBreak>
            <a
              href="/article/chapter3#_49_hgi_"
              class="handle-out-chapter-link"
            >
              Exercise 18 of Chapter 3
            </a>
            ,
          </NoBreak>
          {" "} also. (On the other hand, the
          quotient (i.e. {" "}
          <Math>
            $f/g$
          </Math>
          ⁠
          ) and difference (i.e.,
          {" "}
          <Math>
            $f - g$
          </Math>
          ⁠
          ) of functions are defined above for
          the first time, even if the definitions might
          {" "}
          <i>
            seem
          </i>
          {" "} familiar!)
        </OuterP>
      </Section>
      <Pause />
      <Exercises id="_82_hgi_">
        <Exercise number={1}>
          <ExerciseStatement id="_56_hgi_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              {" "}
              Sketch the derivative of a function with the
              following graph (what {" "}
              <i>
                looks
              </i>
              {" "} like a sharp
              corner {" "}
              <i>
                is
              </i>
              {" "} a sharp corner):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/Is8C.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              That would be:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/KPKF.svg" />
            <Pause />
            <OuterP>
              (The derivative is {" "}
              <Math>
                $1/2$
              </Math>
              {" "} when the slope is {" "}
              <Math>
                $1/2$
              </Math>
              ⁠
              ,
              is {" "}
              <Math>
                $-1/2$
              </Math>
              {" "} when the slope is {" "}
              <Math>
                $-1/2$
              </Math>
              ⁠
              , and is
              undefined at the corners.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={2}>
          <ExerciseStatement id="_57_hgi_">
            <OuterP>
              <b>
                Exercise 2.
              </b>
              {" "}
              Would the derivative of
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              y = &#123;1\over x&#125;
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              be a very large negative number, or a very
              large positive number, near {" "}
              <Math>
                $x = 0$
              </Math>
              ⁠
              ? Or would
              it depend on which side of 0 you are?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The graph of {" "}
              <Math>
                $y = &#123;1 \over x&#125;$
              </Math>
              {" "} looks like so:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/hWOn.svg" />
            <Pause />
            <OuterP>
              As one can see, the slope is very negative
              near {" "}
              <Math>
                $x = 0$
              </Math>
              ⁠
              , on either side. So the answer is:
              “very large negative”.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={3}>
          <ExerciseStatement id="_58_hgi_">
            <OuterP>
              <b>
                Exercise 3.
              </b>
              {" "}
              Sketch the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              second
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              derivative of the graph in {" "}
              <NoBreak>
                <InChapterLink
                  href="/article/chapter4#_56_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 1
                </InChapterLink>
                .
              </NoBreak>
              {" "}{" "}
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The second derivative is zero wherever the
              first derivative is flat, and is undefined
              wherever the first derivative is undefined;
              this gives the second derivative the following
              pockmarked appearance:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/oCwv.svg" />
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                Taking even further derivatives produces
                the same graph back, over and over again.
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                “first derivative” is a synonym of “derivative”.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={4}>
          <ExerciseStatement id="_59_hgi_">
            <OuterP>
              <b>
                Exercise 4.
              </b>
              {" "}
              If we pretend that the graph of {" "}
              <InChapterLink
                href="/article/chapter4#_56_hgi_"
                class="handle-in-chapter-link"
              >
                Exercise 1
              </InChapterLink>
              {" "}
              depicts the {" "}
              <del>
                distance that a car has traveled
                as a function of time,
              </del>
              {" "} position of a car as a function of
              time, with hours (hr) on the {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -axis
              and kilometers (km) on the {" "}
              <Math>
                $y$
              </Math>
              ⁠
              -axis, what
              do the units become on the axes of the first
              and second derivatives?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The units on the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis become kilometers,
              kilometers per hour, and kilometers per
              hours squared, including the first graph
              (each time
              another derivative is taken, divide the
              units of the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis by the units of the
              {" "}
              <Math>
                $x$
              </Math>
              {" "} axis):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/0dwd.svg" />
            <Pause />
            <Image src="/build-img/svgo-svg/b7Oc.svg" />
            <Pause />
            <Image src="/build-img/svgo-svg/OG7m.svg" />
            <Pause />
            <StarDivider />
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                The second and third functions are respectively
                the velocity and the acceleration of the car as
                a function of time.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={5}>
          <ExerciseStatement id="_60_hgi_">
            <OuterP>
              <b>
                Exercise 5.
              </b>
              {" "}
              Is the following equation correct, incorrect,
              or nonsensical?
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              (x \ra x + 1) \,+\, (u \ra 2u + 1) \,=\, (t \ra 3t + 2)
              $$
            </MathBlock>
            <Pause />
            ⁠
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The equation makes sense and is true.
              Syntactically,
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              (x \ra x + 1) \,+\, (u \ra 2u + 1)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              is a
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              sum of functions
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              because {" "}
              <Math>
                $x \ra x + 1$
              </Math>
              {" "} and {" "}
              <Math>
                $u \ra 2u + 1$
              </Math>
              {" "} are
              both functions. Now by definition, the sum
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              f + g
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              of functions {" "}
              <Math>
                $f$
              </Math>
              {" "} and {" "}
              <Math>
                $g$
              </Math>
              {" "} is the function
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              x \ra f(x) + g(x)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              that maps a number to the sum of the individual
              values of the functions. So—for example—
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &amp; \,\,\,((x \ra x + 1) \,+\, (u \ra 2u + 1))(5) \\
              =&amp; \,\,\,(x \ra x + 1)(5) + (u \ra 2u + 1)(5) \up&#123;1.5&#125; \\
              =&amp; \,\,\,(5 + 1) + (2\cdot 5 + 1) \up&#123;1.5&#125; \\
              =&amp; \,\,\,3\cdot 5 + 2 = 17 \up&#123;1.5&#125;
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              and—with a general input {" "}
              <Math>
                $t$
              </Math>
              ⁠
              —
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &amp; \,\,\,((x \ra x + 1) \,+\, (u \ra 2u + 1))(t) \\
              =&amp; \,\,\,(x \ra x + 1)(t) + (u \ra 2u + 1)(t) \up&#123;1.5&#125; \\
              =&amp; \,\,\,(t + 1) + (2t + 1) \up&#123;1.5&#125; \\
              =&amp; \,\,\,3t + 2 \up&#123;1.5&#125;
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              which implies that, indeed,
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              (x \ra x + 1) \,+\, (u \ra 2u + 1)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              is the function that maps each real number {" "}
              <Math>
                $t$
              </Math>
              {" "} to {" "}
              <Math>
                $3t + 2$
              </Math>
              ⁠
              ,
              i.e., is equal to the function {" "}
              <Math>
                $t \ra 3t + 2$
              </Math>
              ⁠
              . (!!)
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              One can also do the main computation with {" "}
              <Math>
                $x$
              </Math>
              {" "}
              in place of {" "}
              <Math>
                $t$
              </Math>
              ⁠
              :
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &amp; \,\,\,((x \ra x + 1) \,+\, (u \ra 2u + 1))(x) \\
              =&amp; \,\,\,(x \ra x + 1)(x) + (u \ra 2u + 1)(x) \up&#123;1.5&#125; \\
              =&amp; \,\,\,(x + 1) + (2x + 1) \up&#123;1.5&#125; \\
              =&amp; \,\,\,3x + 2 \up&#123;1.5&#125;
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              Here we have two different {" "}
              <Math>
                $x$
              </Math>
              ⁠
              's: the {" "}
              <Math>
                $x$
              </Math>
              {" "} that
              denotes the input, and the {" "}
              <Math>
                $x$
              </Math>
              {" "} that is used as
              a placeholder to describe how the first function
              acts.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={6}>
          <ExerciseStatement id="_61_hgi_">
            <OuterP>
              <b>
                Exercise 6.
              </b>
              {" "}
              Complete the missing units for each strip
              below, based on those units that are given:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/xp2w.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The pattern to respect is that, each time
              you take a derivative, the units on the {" "}
              <Math>
                $x$
              </Math>
              {" "}
              axis stay the same, while the units on the
              {" "}
              <Math>
                $y$
              </Math>
              {" "} axis become divided by those on the {" "}
              <Math>
                $x$
              </Math>
              {" "}
              axis. This gives the unique solutions:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/CZUY.svg" />
            <Pause />
            <OuterP>
              ...where we find units of
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              \Huge \te&#123;s&#125;^&#123;1\over 2&#125;
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              or {" "}
              <i>
                square root seconds
              </i>
              {" "} on the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis
              in the last strip,
              which is not at all clear what it means, or
              if such a thing exists.
              (But if there's a solution, it's that one, so we
              blindly write that down.)
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                A unit of “
                ⁠
                <Math>
                  $1$
                </Math>
                ⁠
                ” is a
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                dimensionless
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                unit. Dimensionless units arise when
                quantities are divided by like quantities.
                Think of dimensionless quantities as “pure
                fractions” or “pure ratios”. (Percentages
                are dimensionless—in fact the term
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                percentage
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                is synonymous with
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                dimensionless ratio
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                though if you spoke to people about
                “dimensionless ratios” they would look at
                you funny. Also percentages are a system of
                notation, whereby the symbol “%” means
                “divide the preceding number by 100 in
                order to discover the numerical value of
                the ratio I'm talking about”.) (To drive
                it home: In Chinese, 
                “
                ⁠
                <Math>
                  $23\%$
                </Math>
                ⁠
                ” and “
                ⁠
                <Math>
                  $23/100$
                </Math>
                ⁠
                ” are
                indistinguishable when read out loud; they
                are both  read “
                ⁠
                <Math>
                  $23$
                </Math>
                {" "} over {" "}
                <Math>
                  $100$
                </Math>
                ⁠
                ”; that is
                the simple {" "}
                <i>
                  &amp;
                </i>
                {" "} correct way!)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={7}>
          <ExerciseStatement id="_62_hgi_">
            <OuterP>
              <b>
                Exercise 7.
              </b>
              {" "}
              If the graph below has three “bumps” (two up,
              one down), then how many “bumps” does its derivative
              have?
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/aG77.svg"
              style="padding-bottom:1rem"
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The derivative has a bump wherever the slope
              has a local maximum or local minimum, which happens
              at four places, per appearances:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/yAV_.svg" />
            <Pause />
            <OuterP>
              The derivative will therefore have four
              bumps—at least, four {" "}
              <i>
                large scale
              </i>
              {" "} bumps—if you're 
              curious, it looks like this:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/dDBS.svg" />
            <Pause />
            <OuterP>
              But nothing prevents the graph from
              having small wobbles near the zones of maximum or
              minimum slope out of the range of our eyesight,
              meaning that each bump of the derivative contains
              micro-bumps, like small ripples atop a big wave!
              (Still, “four” is a good bet to achieve full marks.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={8}>
          <ExerciseStatement id="_63_hgi_">
            <OuterP>
              <b>
                Exercise 8.
              </b>
              {" "}
              Among the functions below, which is the
              zeroth, first, and second derivative?
              (I.e., which is {" "}
              <Math>
                $f$
              </Math>
              ⁠
              , {" "}
              <Math>
                $f'$
              </Math>
              ⁠
              , and {" "}
              <Math>
                $f''$
              </Math>
              ⁠
              ,
              assuming that relationship exists.)
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/-8uy.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The reodered sequence,
              from zeroth to second derivative,
              is:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/a02_.svg" />
            <Pause />
            <OuterP>
              Referring to this rearranged sequence,
              the first graph, for example,
              has a slope that starts at {" "}
              <Math>
                $\sim\!-1$
              </Math>
              {" "} and
              ends at {" "}
              <Math>
                $\sim\!1$
              </Math>
              ⁠
              , while those are the
              values at which 
              the second graph
              starts and ends:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/gqxn.svg" />
            <Pause />
            <OuterP>
              Likewise, the second graph has slope
              close to {" "}
              <Math>
                $0$
              </Math>
              {" "} at either end, and some
              slope near {" "}
              <Math>
                $1.5$
              </Math>
              {" "} or {" "}
              <Math>
                $2$
              </Math>
              {" "} towards the middle,
              matching the {" "}
              <i>
                values
              </i>
              {" "} of the third graph:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/4Efs.svg" />
            <Pause />
            <OuterP>
              ...and none of this coincidentally, since the
              third graph is the derivative of the second, is the
              derivative of the first!
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={9}>
          <ExerciseStatement id="_64_hgi_">
            <OuterP>
              <b>
                Exercise 9.
              </b>
              {" "}
              Where is the rate of change of the function
              below, on the part shown, greatest? And
              where is the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              rate of change of the rate of change
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              greatest?
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/GWW0.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The rate of change is the slope, which
              is greatest along the right-hand portion
              of the curve:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/Qi_q.svg" />
            <Pause />
            <OuterP>
              On the other hand,
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the rate of change
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              [a.k.a., second derivative] is the rate
              of change  of the slope, and that will
              be greatest at the first bend of the curve,
              where the slope is changing at the fastest
              rate:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/kw0r.svg" />
            <Pause />
            <StarDivider />
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                The first bend of the curve is the point of
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                maximum acceleration
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                if the graph denotes the position as a
                function of time of an object.
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                The last segment of the curve is the point of
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                maximum velocity
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                if the graph denotes the position as a
                function of time of an object.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={10}>
          <ExerciseStatement id="_65_hgi_">
            <OuterP>
              <b>
                Exercise 10.
              </b>
              {" "}
              If you scale the graph of a function {" "}
              <Math>
                $f$
              </Math>
              {" "}
              vertically by a factor {" "}
              <Math>
                $2$
              </Math>
              ⁠
              —i.e., multiply
              each output by {" "}
              <Math>
                $2$
              </Math>
              ⁠
              —is the derivative
              also scaled by {" "}
              <Math>
                $2$
              </Math>
              ⁠
              ?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Yes, this is the case. For a joke way
              of seeing it, here is a graph of a
              putative function {" "}
              <Math>
                $f$
              </Math>
              {" "} before and after
              scaling:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/lJqH.svg" />
            <Pause />
            <OuterP>
              The second graph truly is the first
              graph vertically scaled by a factor {" "}
              <Math>
                $2$
              </Math>
              {" "}
              because the scale on the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis has
              been doubled. This means that the ratio
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              &#123;\te&#123;rise&#125;\over \te&#123;run&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              has doubled in the second graph, because
              “rise” has doubled (each {" "}
              <Math>
                $y$
              </Math>
              ⁠
              -coordinate
              is twice as large!), whereas “run” stays
              the same. (So the slope of the tangent has
              doubled, so the derivative is doubled.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={11}>
          <ExerciseStatement id="_66_hgi_">
            <OuterP>
              <b>
                Exercise 11.
              </b>
              {" "}
              The solution to the previous exercise
              erroneously assumes that the product of a
              constant and a function has been defined. It
              has not! Keeping in mind that the {" "}
              <i>
                sum
              </i>
              {" "}
              of two functions {" "}
              <Math>
                $f$
              </Math>
              ⁠
              , {" "}
              <Math>
                $g: \rr \ra \rr$
              </Math>
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              f + g
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              is defined by the equation
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              f + g = (x \ra f(x) + g(x))
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              while their composition is defined by
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              f \circ g = (x \ra f(g(x)))
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              and so on, what is the similar, most logical
              definition for
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              cf
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              where {" "}
              <Math>
                $c \in \rr$
              </Math>
              {" "} and {" "}
              <Math>
                $f : \rr \ra \rr$
              </Math>
              ⁠
              ?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The “logical” definition is:
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              cf = (x \ra cf(x))
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              where the product “
              ⁠
              <Math>
                $cf(x)$
              </Math>
              ⁠
              ” is an ordinary
              multiplication between two real numbers,
              because {" "}
              <Math>
                $c$
              </Math>
              {" "} is a real number and {" "}
              <Math>
                $f(x)$
              </Math>
              {" "} is
              a real number! (In this way, the product of
              a function by a real number “bootstraps”
              off of the ordinary product of real numbers—this
              is already similar to what happens for the
              definition...
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              fg = (x \ra f(x)g(x))
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              of the product of two functions from {" "}
              <Math>
                $\rr$
              </Math>
              {" "} to {" "}
              <Math>
                $\rr$
              </Math>
              ⁠
              ,
              or with the case of function addition, that
              relies on real number addition.) BUT. There
              is a MORE CLEVER way of doing the definition.
              Which is to define
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              cf = (x \ra c)f
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              where the right-hand-side is {" "}
              <i>
                one function
                times another
              </i>
              ⁠
              , i.e., {" "}
              <i>
                a product of functions
              </i>
              ⁠
              ,
              which is something that has ITSELF ALREADY BEEN
              DEFINED. (!) (To wit, the definition of
              function multiplication is that
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              fg = (x \ra f(x)g(x))
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              of course.) (Wait we just mentioned that
              already.) Mathematicians LOVE to bootstrap off
              an intermediate step, instead of going back to
              the beginning, so the second way is clearly the
              superior definition!!
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={12}>
          <ExerciseStatement id="_67_hgi_">
            <OuterP>
              <b>
                Exercise 12.
              </b>
              {" "}
              In the following graph, which curve might
              be a derivative of which other curve?
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/_2ki.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              As it happens—and by the exact method
              that we used to generate these curves—the
              blue is the derivative of the red:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/W11G.svg" />
            <Pause />
            <OuterP>
              Likewise, the yellow is the derivative
              of the blue, the green is the derivative
              of the yellow, and the red is the derivative
              of the green, at which point it starts
              all over again! (For example, the {" "}
              <i>
                fifth
              </i>
              {" "} 
              derivative of the red curve is the blue,
              because the {" "}
              <i>
                fourth
              </i>
              {" "} derivative of the red
              curve is itself.)
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                After all, the slope of these curves
                keeps oscillating between two fixed
                values—the “most slanted up” and the
                “most slanted down”—so their derivatives
                were always going to have an oscillatory
                pattern, as well.
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                Because “most slanted up” occurs when
                the curve has not yet crested, but when
                the derivative {" "}
                <i>
                  is already
                </i>
                {" "} in the
                process of cresting (that's why it's
                “most slanted up”), the derivative is
                ahead of the original curve by half a
                bump, not the other way around:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/P9o9.svg" />
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 3.
                </i>
                {" "}
                When we examine the velocity of a
                particle moving in the plane, we examine
                the velocities of its shadow on the
                {" "}
                <Math>
                  $x$
                </Math>
                ⁠
                - and {" "}
                <Math>
                  $y$
                </Math>
                ⁠
                -axes:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/eSj9.svg" />
              <Pause />
              <OuterP>
                The velocities of the two shadows
                encode the overall “two-dimensional”
                velocity of the particle. (No need for
                quotes, really: the velocity {" "}
                <i>
                  is
                </i>
                {" "}
                two-dimensional.)
              </OuterP>
              <OuterP class="indent-10">
                Here's another point of view: just like
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                position
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                is encoded by a pair of numbers—sometimes
                known as the {" "}
                <i>
                  position vector
                </i>
                {" "} by
                the way, where “vector” is a term of art
                for “pair of numbers”—so the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                velocity
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                is encoded by a pair of numbers—equally
                known as the {" "}
                <i>
                  velocity vector
                </i>
                ⁠
                —which
                is no coincidence, because the first
                coordinate of the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                velocity vector
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                is the derivative of the first coordinate
                of the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                position vector
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                and likewise for the second coordinate—two
                coordinates, two rates of change!
              </OuterP>
              <OuterP class="indent-10">
                Geometrically, if we use the {" "}
                <Math>
                  $x$
                </Math>
                ⁠
                - and
                {" "}
                <Math>
                  $y$
                </Math>
                ⁠
                -components {" "}
                <Math>
                  $v_x$
                </Math>
                {" "} and {" "}
                <Math>
                  $v_y$
                </Math>
                {" "} of the
                velocity to draw an arrow emanating
                from a point on the curve, this arrow
                is tangent to the curve, and the
                <ImageRight src="/build-img/svgo-svg/52rF.svg" />
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                length
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                of the arrow is the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                speed
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                of the particle at that moment in time.
                More precisely, if you let the particle
                drift at the exact same {" "}
                <Math>
                  $x$
                </Math>
                ⁠
                - and
                {" "}
                <Math>
                  $y$
                </Math>
                ⁠
                -velocities {" "}
                <Math>
                  $v_x$
                </Math>
                {" "} and {" "}
                <Math>
                  $v_y$
                </Math>
                {" "} that you
                measured at the root of the arrow for
                one unit of time, the particle would
                cover exactly the length of the arrow
                in that one unit of time, no more no less,
                because the particle would cover {" "}
                <Math>
                  $v_x$
                </Math>
                {" "}
                units in {" "}
                <Math>
                  $x$
                </Math>
                {" "} and {" "}
                <Math>
                  $v_y$
                </Math>
                {" "} units in {" "}
                <Math>
                  $y$
                </Math>
                ⁠
                .
                And speed being
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                distance per unit time
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                the length of the arrow is, therefore,
                the speed!
              </OuterP>
              <OuterP class="indent-10">
                Now consider not one but four particles,
                going around a unit circle in clockwise
                fashion, 90° apart in phase, at unit
                speed (“unit speed” = speed 1, “unit
                circle” = radius 1) (ps: We center the
                circle at the origin):
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/zkYn.svg" />
              <Pause />
              <OuterP>
                The
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                position vectors
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                of the particles are as follows:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/g6Et.svg" />
              <Pause />
              <OuterP>
                (You can't really see it so well, but
                each arrow originates at {" "}
                <Math>
                  $(0, 0)$
                </Math>
                ⁠
                .) While
                the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                velocity vectors
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                are as follows:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/4R5D.svg" />
              <Pause />
              <OuterP>
                (Like the position vectors, the
                velocity vectors keep changing instant by
                instant—this is the subtlety of calculus!)
                The velocity vectors have length {" "}
                <Math>
                  $1$
                </Math>
                {" "} because
                the speed is {" "}
                <Math>
                  $1$
                </Math>
                ⁠
                , {" "}
                <i>
                  &amp;
                </i>
                {" "} are brushed
                in the direction of travel.
              </OuterP>
              <OuterP class="indent-10">
                (Nb: When we draw a vector as an arrow
                we mean that the first coordinate of the
                vector is equal to the horizontal
                displacement from the tail of the arrow
                to the head of the arrow, and likewise
                that the second coordinate is equal to the
                vertical displacement from the tail of the
                arrow to the head of the arrow.)
                <ImageRight src="/build-img/svgo-svg/BcYN.svg" />
              </OuterP>
              <OuterP class="indent-10">
                Due to the 90° rotations and uniform
                lengths of {" "}
                <Math>
                  $1$
                </Math>
                ⁠
                , one particle's velocity
                vector is another particle's position
                vector; as one example, the red particle's
                velocity vector is the blue particle's
                position vector:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/9nrU.svg" />
              <Pause />
              <OuterP>
                From the {" "}
                <Math>
                  $x$
                </Math>
                ⁠
                -coordinates, for example,
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                the velocity in {" "}
                <Math>
                  $x$
                </Math>
                {" "} of the red particle
                is the position in {" "}
                <Math>
                  $x$
                </Math>
                {" "} of the blue particle
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                at any given moment in time. This also
                means:
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                the rate of change of the {" "}
                <Math>
                  $x$
                </Math>
                ⁠
                -coordinated
                of the red particle is the {" "}
                <Math>
                  $x$
                </Math>
                ⁠
                -coordinate
                of the blue particle
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                ...because “velocity in {" "}
                <Math>
                  $x$
                </Math>
                ⁠
                ” is the same
                as “rate of change of the {" "}
                <Math>
                  $x$
                </Math>
                ⁠
                -coordinate”.
              </OuterP>
              <OuterP class="indent-10">
                Concretely, if you graph the
                {" "}
                <Math>
                  $x$
                </Math>
                ⁠
                -coordinates of the red and blue
                particles on the same graph, the rate of
                change of the red particle's {" "}
                <Math>
                  $x$
                </Math>
                ⁠
                -coordinate
                will equal the value of the blue particle's
                {" "}
                <Math>
                  $x$
                </Math>
                ⁠
                -coordinate. These are the reds and blue
                curves from the problem statement, if we
                start the blue particle at position
              </OuterP>
              ⁠
              <Pause />
              <MathBlock>
                $$
                (1, 0)
                $$
              </MathBlock>
              <Pause />
              ⁠
              <OuterP>
                at time {" "}
                <Math>
                  $t = 0$
                </Math>
                ⁠
                :
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/tBi5.svg" />
              <Pause />
              <OuterP>
                If we add the {" "}
                <Math>
                  $x$
                </Math>
                ⁠
                -coordinates of the green
                and yellow particles, we find the graph
                from the problem statement!
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 4.
                </i>
                {" "}
                If needed, here is an illustration of
                one {" "}
                <Math>
                  $360^\circ$
                </Math>
                {" "} rotation of the particles
                of Note 3,  with each curve being an
                {" "}
                <Math>
                  $x$
                </Math>
                ⁠
                -coordinate:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/E0qc.svg" />
              <Pause />
              <OuterP>
                (If this just looks like a mess, then nevermind.)
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 5.
                </i>
                {" "}
                To reiterate, take a look at this
                figure again:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/P9o9.svg" />
              <Pause />
              <OuterP>
                The derivative is
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                ahead
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                of the red particle, so that
                {" "}
                <Math>
                  $x$
                </Math>
                ⁠
                -coordinates you see {" "}
                <i>
                  now
                </i>
                {" "} on the
                blue particle will be seen {" "}
                <i>
                  a little later
                </i>
                {" "}
                on the red particle! (In particular, if you
                wanted to generate the same curves with a
                counterclockwise rotation, you could do that,
                but you would have to reverse the order of
                the particles around the circle to keep the
                blue particle ahead of the red particle,
                the yellow particle ahead of the blue
                particle, etc.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={13}>
          <ExerciseStatement id="_68_hgi_">
            <OuterP>
              <b>
                Exercise 13.
              </b>
              {" "}
              {" "}
              <InChapterLink
                href="/article/chapter4#_67_hgi_"
                class="handle-in-chapter-link"
              >
                Exercise 12
              </InChapterLink>
              {" "} exhibits a function {" "}
              <Math>
                $f$
              </Math>
              ⁠
              —in fact,
              four different functions {" "}
              <Math>
                $f$
              </Math>
              ⁠
              —such that
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              f' \ne f
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              and
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              f'' \ne f
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              and
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              f''' \ne f
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              but
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              f^&#123;(4)&#125; = f
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              surprise, surprise! Can you do the same with
              “
              ⁠
              <Math>
                $5$
              </Math>
              ⁠
              ” instead of “
              ⁠
              <Math>
                $4$
              </Math>
              ⁠
              ”? I.e., find a function
              {" "}
              <Math>
                $f$
              </Math>
              {" "} such that
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              f^&#123;(n)&#125; \ne f
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              for {" "}
              <Math>
                $n = 1, 2, 3, 4$
              </Math>
              {" "} but
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              f^&#123;(5)&#125; = f
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              ...?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              We can naïvely try to imitiate how the
              curves of {" "}
              <InChapterLink
                href="/article/chapter4#_71_hgi_"
                class="handle-in-chapter-link"
              >
                Exercise 15
              </InChapterLink>
              {" "} are generated by
              placing five equally spaced particles
              around the unit circle (“the” unit circle
              is the one centered at {" "}
              <Math>
                $(0, 0)$
              </Math>
              ⁠
              , by
              convention), instead of 4:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/826P.svg" />
            <Pause />
            <OuterP>
              The idea would be that the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              velocity vector
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of the red particle is the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              position vector
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of the blue particle,
              likewise for the blue and yellow particles,
              and so on. (Position vectors shown above.)
              For example, at the instant above, the
              velocity vectors would be as follows:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/uq4U.svg" />
            <Pause />
            <OuterP>
              The velocity vectors are
            </OuterP>
            <Pause />
            <CentralDisplay>
              NOT
            </CentralDisplay>
            <Pause />
            <OuterP>
              tangent to the unit circle, and so the
              particles will leave the circle!
              (But that's OK.) In one-tenth a unit
              of time, for example, the particles would
              travel approximately one-tenth their
              velocity vectors, that would bring them
              to approximately these new positions:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/ZQgt.svg" />
            <Pause />
            <OuterP>
              In the next one-tenth unit of time we
              can apply a similar approximation again,
              advancing the particles by {" "}
              <Math>
                $&#123;1\over 10&#125;$
              </Math>
              ⁠
              th
              of [the current approximation to] their
              velocity vectors. Skipping the construction
              lines:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/0xaW.svg" />
            <Pause />
            <OuterP>
              Applying the same process for {" "}
              <Math>
                $8$
              </Math>
              {" "} more
              steps:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/hg3g.svg" />
            <Pause />
            <OuterP>
              To be clear, in the above figure, the
              position of the red particle at, say, the
              fifth step...
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/GKbB.svg" />
            <Pause />
            <OuterP>
              ...is obtained by starting from the red
              particle's position at the fourth step...
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/jG_S.svg" />
            <Pause />
            <OuterP>
              ...and adding one-tenth of the approximation
              that we have to the red particle's velocity
              vector at that moment, that approximation
              being namely the blue particle's position
              vector at the fourth step (
              ⁠
              <Math>
                $t = &#123;4\over 10&#125;$
              </Math>
              ⁠
              )...
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/Js6D.svg" />
            <Pause />
            <OuterP>
              ...and we do the same for each particle,
              to advance to the next step.
            </OuterP>
            <OuterP class="indent-10">
              If we stop {" "}
              <Math>
                $10$
              </Math>
              {" "} times as often,
              advancing the clock by {" "}
              <Math>
                $&#123;1\over 100&#125;$
              </Math>
              ⁠
              th of
              a unit of time at each step, the same figure
              becomes just a blur (still going from
              {" "}
              <Math>
                $t = 0$
              </Math>
              {" "} to {" "}
              <Math>
                $t = 1$
              </Math>
              ⁠
              ):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/8BpD.svg" />
            <Pause />
            <OuterP>
              To visualize such a fine-grained
              approximation we need to revert to drawing
              the particles as points. In the following
              figure the colored paths are points that
              come from a “
              ⁠
              <Math>
                $&#123;1\over 100&#125;$
              </Math>
              ⁠
              th” approximation,
              while the orange dots are the old positions
              obtained from a “
              ⁠
              <Math>
                $&#123;1\over 10&#125;$
              </Math>
              ⁠
              th”
              approximation:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/uXS-.svg" />
            <Pause />
            <OuterP>
              Zooming in a bit (or else we still can't
              see anything):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/IUP8.svg" />
            <Pause />
            <OuterP>
              In any case, even the “
              ⁠
              <Math>
                $&#123;1\over 100&#125;$
              </Math>
              ⁠
              th”
              approximation is just an approximation,
              but the point is that such approximations
              do converge to a set of “true” particle
              paths, as pictured in Fig
              ⁠
              <Math>
                $.$
              </Math>
              {" "} 1, that can
              be computed by some wizards; as time can
              be played forward or backward, these paths
              form doubly-infinite spirals—in to infinity,
              out to infinity.
              <ImageLeft
                offset_x="1.5em"
                src="/build-img/svgo-svg/QRVl.svg"
                children_x="50%"
                children_y="105%"
              >
                <p>
                  <span style="font-size:1.4em;left:50%;transform:translate(-50%);position:absolute;white-space:nowrap;">
                    Fig. 1
                  </span>
                </p>
              </ImageLeft>
            </OuterP>
            <OuterP class="indent-10">
              In any case [take two] the point is that
              whether or not you are one of the wizards,
              you can
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              guess
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              the existence of these five paths—sort
              of “feel” that they exist! (This is a
              moral consolation prize, at least.)
            </OuterP>
            <OuterP class="indent-10">
              We can also convert the paths into a
              function
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              f
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              that satisfies the problem requirements.
            </OuterP>
            <OuterP class="indent-10">
              For example let {" "}
              <Math>
                $f$
              </Math>
              {" "} be the function that,
              given a time {" "}
              <Math>
                $t$
              </Math>
              ⁠
              , outputs the {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -coordinate
              of the red particle at {" "}
              <Math>
                $t$
              </Math>
              ⁠
              ; then, to spell
              it all out, since
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the
              {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -coordinate of the red particle is the
              {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -coordinate of the blue particle
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <Math>
                $f'$
              </Math>
              {" "} is the {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -coordinate of the blue
              particle; and since
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the
              {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -coordinate of the blue particle is the
              {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -coordinate of the yellow particle
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <Math>
                $f''$
              </Math>
              {" "} is the {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -coordinate of the
              yellow particle; and since
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the
              {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -coordinate of the yellow particle is the
              {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -coordinate of the green particle
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <Math>
                $f'''$
              </Math>
              {" "} is the {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -coordinate of the
              green particle; and since
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the
              {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -coordinate of the green particle
              is the {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -coordinate of the purple
              particle
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <Math>
                $f''''$
              </Math>
              {" "} is the {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -coordinate of the
              purple particle; and since
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the
              {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -coordinate of the purple particle is the
              {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -coordinate of the red particle
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <Math>
                $f''''' = f^&#123;(5)&#125;$
              </Math>
              {" "} equals {" "}
              <Math>
                $f$
              </Math>
              ⁠
              .
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                If you graph the {" "}
                <Math>
                  $x$
                </Math>
                ⁠
                -coordinates of the
                5 particles over time, each in their
                color, you get a graph like so, in which
                blue is the derivative of red, yellow is
                the derivative of blue, etc; the function
                {" "}
                <Math>
                  $f$
                </Math>
                {" "} can be taken to be any one of these
                curves:
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/U6Hi.svg" />
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                There is nothing special about
                {" "}
                <Math>
                  $x$
                </Math>
                ⁠
                -coordinates vis-à-vis {" "}
                <Math>
                  $y$
                </Math>
                ⁠
                -coordinates.
                You can also define {" "}
                <Math>
                  $f(t)$
                </Math>
                {" "} to be, e.g.,
                the {" "}
                <Math>
                  $y$
                </Math>
                ⁠
                -coordinate of the red particle
                at time {" "}
                <Math>
                  $t$
                </Math>
                ⁠
                .
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 3.
                </i>
                {" "}
                It is worth noting that, in fact, the
                {" "}
                <Math>
                  $x$
                </Math>
                ⁠
                - and {" "}
                <Math>
                  $y$
                </Math>
                ⁠
                -coordinates live separate
                lives. The rate of change of each
                {" "}
                <Math>
                  $x$
                </Math>
                ⁠
                -coordinate is some other {" "}
                <Math>
                  $x$
                </Math>
                ⁠
                -coordinate,
                and the rate of change of each {" "}
                <Math>
                  $y$
                </Math>
                ⁠
                -coordinate
                is some other {" "}
                <Math>
                  $y$
                </Math>
                ⁠
                -coordinate—you could
                scramble a {" "}
                <Math>
                  $y$
                </Math>
                ⁠
                -coordinate, and the {" "}
                <Math>
                  $x$
                </Math>
                ⁠
                -coordinates
                would never know!
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 4.
                </i>
                {" "}
                Adding to the previous observation, we don't
                {" "}
                <i>
                  need
                </i>
                {" "} to start the particles in
                a symmetric configuration. Symmetry only
                helps to picture how the positions of the
                particles will evolve without making any
                computations. We also don't {" "}
                <i>
                  need
                </i>
                {" "}
                to work in two dimensions. We can place
                the particles in a one-dimensional world,
                e.g., ...
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/cejz.svg" />
              <Pause />
              <OuterP>
                ...(the initial positions really don't
                matter much, as long as you don't give
                all the particles the {" "}
                <i>
                  same
                </i>
                {" "} initial
                position, or else you won't have {" "}
                <Math>
                  $f \ne f'$
                </Math>
                {" "}
                etc) and stipulate the same rules, namely
                that the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                velocity
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                (now {" "}
                <Math>
                  $1$
                </Math>
                ⁠
                -dimensional) of the red particle
                be the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                position
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                (now {" "}
                <Math>
                  $1$
                </Math>
                ⁠
                -dimensional) of the blue particle
                and so on—you can “release” the particles
                from their initial configuration and
                simulate—or compute by a formula, if you have
                the know-how—their motion like above. The
                five position
                functions obtained are each a solution
                {" "}
                <Math>
                  $f$
                </Math>
                {" "} to the problem. (But this solution will
                typically look more chaotic than the curves
                from Note 1.)
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 5.
                </i>
                {" "}
                In fact, our symmetric two-dimensional
                solution is an instance in which you can say
                that
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                the whole is simpler than the parts
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                in that you would never spot the symmetry
                at play, or have a chance of eyeballing
                the long-term evolution of the system, if
                you were shown just the {" "}
                <Math>
                  $x$
                </Math>
                ⁠
                -coordinates,
                or just the {" "}
                <Math>
                  $y$
                </Math>
                ⁠
                -coordinates, on their own.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={14}>
          <ExerciseStatement id="_69_hgi_">
            <OuterP>
              <b>
                Exercise 14.
              </b>
              {" "}
              If we seek a function {" "}
              <Math>
                $f : \rr \ra \rr$
              </Math>
              {" "}
              such that
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              f^&#123;(17)&#125; = f
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              and such that {" "}
              <Math>
                $f \ne 0$
              </Math>
              {" "} (or: {" "}
              <Math>
                $f \ne (x \ra 0)$
              </Math>
              ⁠
              ,
              pedantically) and such that {" "}
              <Math>
                $f$
              </Math>
              {" "} grows relatively
              slowly in either the positive or negative direction
              of the number line, insofar as such things are
              concerned, what would our options be?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Take {" "}
              <Math>
                $17$
              </Math>
              {" "} particles equally spaced out along
              the unit circle, such as these (shown here
              with position vectors):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/UDTy.svg" />
            <Pause />
            <OuterP>
              Set the velocity of particle
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              &#123;\Large 1&#125;
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              equal to the position of particle
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              &#123;\Large 5&#125;
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              and keep going by this pattern, making the
              velocity of each particle equal to the
              position of the particle that is {" "}
              <Math>
                $4$
              </Math>
              {" "} later;
              in the configuration above, the velocity
              vectors end up looking like so, for example:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/tkLL.svg">
              <ImageRight
                src="/build-img/svgo-svg/Bvhk.svg"
                offset_x="3rem"
              />
            </Image>
            <Pause />
            <OuterP>
              Maintaining this relationship at all
              points in time, and given that the velocity
              vectors point very slightly outward from
              the unit circle, and because all the
              symmetry and all the angles are maintained
              as we play time forward or backward, the
              particles spiral gently outward/inward from
              the circle for time forward/backward,
              respectively. Taking {" "}
              <Math>
                $f(t)$
              </Math>
              {" "} to be the {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -
              or {" "}
              <Math>
                $y$
              </Math>
              ⁠
              -coordinate of any one of the particles
              (e.g., particle {" "}
              <Math>
                $1$
              </Math>
              ⁠
              ) at time {" "}
              <Math>
                $t$
              </Math>
              {" "} gives an
              oscillating function whose {" "}
              <Math>
                $17$
              </Math>
              ⁠
              th derivative
              is itself (because the rate of change of
              the {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -coordinate of particle {" "}
              <Math>
                $1$
              </Math>
              {" "} is the
              {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -coordinate of particle {" "}
              <Math>
                $5$
              </Math>
              ⁠
              , etc, until
              we make it all the way back to particle {" "}
              <Math>
                $1$
              </Math>
              ⁠
              ),
              and that grows comparatively slowly over
              time. ~The End~
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              In case you're curious, the actual spiral paths
              of the particles look like so:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/kytU.svg" />
            <Pause />
            <OuterP>
              ...and if you take the {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -coordinates of
              the particles over time, with time {" "}
              <Math>
                $t = 0$
              </Math>
              {" "}
              corresponding to the original configuration
              depicted where particle 1 is at {" "}
              <Math>
                $(1, 0)$
              </Math>
              ⁠
              , you
              find {" "}
              <del>
                paths
              </del>
              {" "} functions that look like so:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/KuID.svg" />
            <Pause />
            <OuterP>
              For example, the derivative of curve {" "}
              <InlineImage
                class="ch4_17_pellets"
                src="/build-img/svgo-svg/i4u9.svg"
              />
              , highlighted below in red, is curve {" "}
              <InlineImage
                class="ch4_17_pellets"
                src="/build-img/svgo-svg/twzO.svg"
              />
              , highlighted in blue:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/SKRR.svg" />
            <Pause />
            <OuterP>
              ...and taking sixteen more derivatives
              starting from curve {" "}
              <InlineImage
                class="ch4_17_pellets"
                src="/build-img/svgo-svg/twzO.svg"
              />
              {" "} we would go through curves {" "}
              <InlineImage
                class="ch4_17_pellets"
                src="/build-img/svgo-svg/A7E1.svg"
              />
              , {" "}
              <InlineImage
                class="ch4_17_pellets"
                src="/build-img/svgo-svg/256c.svg"
              />
              , {" "}
              <InlineImage
                class="ch4_17_pellets"
                src="/build-img/svgo-svg/oMBk.svg"
              />
              , {" "}
              <InlineImage
                class="ch4_17_pellets"
                src="/build-img/svgo-svg/26-z.svg"
              />
              , ..., {" "}
              <InlineImage
                class="ch4_17_pellets"
                src="/build-img/svgo-svg/hEuY.svg"
              />
              {" "} before finally coming back to curve {" "}
              <InlineImage
                class="ch4_17_pellets"
                src="/build-img/svgo-svg/i4u9.svg"
                style="margin-right:0.1em"
              />
              !
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 2.
              </i>
              {" "}
              It can be interesting to examine what
              goes wrong if we attempt to make the
              velocity vectors even more tangent to the
              unit circle. For example, if we start the
              particles so that particle 5 is at
              {" "}
              <Math>
                $90^\circ$
              </Math>
              {" "} exactly from particle 1,
              particle 9 is at {" "}
              <Math>
                $90^\circ$
              </Math>
              {" "} exactly from
              particle 5, and so on, until we reach
              particle 14, the last particle in this
              order; then we have the following starting
              configuration:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/t94J.svg" />
            <Pause />
            <OuterP>
              To parse the above figure, understand
              that:
            </OuterP>
            <Pause />
            <List style="padding-left: 1.2em; gap: 0.4em;">
              <Item>
                <p>
                  the red arrows indicate which particle
                  takes its velocity from the position
                  of which other particle; for example,
                  particle 1 has velocity equal to the
                  position of particle 5
                </p>
              </Item>
              <Item>
                <p>
                  particles that occupy the same starting
                  position on the unit circle appear
                  stacked together, as a representation
                  device; for example, particle 2 has the
                  same starting position as particle 5
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              (Note that the red arrows have to form
              a cycle of length 17 in order for us to
              later extract a function {" "}
              <Math>
                $f$
              </Math>
              {" "} such that
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              f^&#123;(17)&#125; = f
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              but this is the case: the red arrows only
              “close the loop” after going through all
              17 particles!)
            </OuterP>
            <OuterP class="indent-10">
              In this starting configuration, all
              velocity vectors are exactly tangent to
              the unit circle
            </OuterP>
            <Pause />
            <CentralDisplay>
              EXCEPT
            </CentralDisplay>
            <Pause />
            <OuterP>
              for particle 14, whose velocity vector,
              being the position of particle 1, is straight
              out from the circle! So, as we “start time”,
              particle 14 will push out from the circle,
              that will in turn affect particle 10, and
              so on, until all particles end up being
              “peeled off” from the circle, in due time;
              if you are so curious, the particle
              trajectories end up like so (shown only for
              {" "}
              <Math>
                $t \geq 0$
              </Math>
              ⁠
              ):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/3j-T.svg" />
            <Pause />
            <OuterP>
              The particles shoot of to infinity in short
              order—the solution is much worse—for fun we
              have also highlighted two particle trajectories
              in this figure:
            </OuterP>
            <Pause />
            <List style="padding-left: 1.4em; gap: 0.4em;">
              <Item>
                <p>
                  in {" "}
                  <span style="border:1px solid blue">
                    blue
                  </span>
                  , particle 1, the last particle
                  to be (noticeably*) “peeled off” from
                  the circle (*all particles are
                  instantaneously peeled off from the
                  circle to {" "}
                  <i>
                    some
                  </i>
                  {" "} degree, as one
                  particle's slight deviation affects
                  the next, that affects the next, etc)
                </p>
              </Item>
              <Item>
                <p>
                  in {" "}
                  <span style="border:1px solid red">
                    red
                  </span>
                  , particle 14, the {" "}
                  <i>
                    first
                  </i>
                  {" "} particle
                  to leave the circle—but because its
                  velocity vector is given by particle 1,
                  which itself starts by going around in
                  a circle, it, too, starts out by going
                  around in a circle!
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              (The point is: if your velocity vector
              is tracing a circle centered at {" "}
              <Math>
                $(0, 0)$
              </Math>
              ⁠
              —at
              a uniform rate—then you, too, are going
              around in a circle—it's just that your
              circle could be centered anywhere, not
              necessarily at {" "}
              <Math>
                $(0, 0)$
              </Math>
              ⁠
              !)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={15}>
          <ExerciseStatement id="_71_hgi_">
            <OuterP>
              <b>
                Exercise 15.
              </b>
              {" "}
              Add elements to the drawing below until all
              parts of the fraction
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              &#123;f(x+h) - f(x) \over h&#125;
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              are found in the drawing. Can you thereby reveal
              the geometric meaning of the fraction?
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/1hYI.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Adding elements:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/cWTG.svg" />
            <Pause />
            <OuterP>
              In particular,
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              &#123;f(x + h) - f(x)\over h&#125;
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              is seen to have the form {" "}
              <i>
                rise over run
              </i>
              ⁠
              ,
              and is more precisely equal to the slope
              of the pale brown line going through the
              point
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              (x, f(x))
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              at one end, and
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              (x + h, f(x + h))
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              at the other end. 
              (This is also the case
              if {" "}
              <Math>
                $h$
              </Math>
              {" "} is negative, by the way.)
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Vocabulary #1.
              </i>
              {" "} A fraction of this form is called
              a {" "}
              <i>
                difference quotient
              </i>
              ⁠
              .
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Vocabulary #2.
              </i>
              {" "}
              The pale brown line is sometimes known as
              the {" "}
              <i>
                secant
              </i>
              {" "} [through {" "}
              <Math>
                $(x, f(x))$
              </Math>
              ⁠
              , {" "}
              <Math>
                $(x+h, f(x+h))$
              </Math>
              ⁠
              ].
              “Secant” is a general term for “line passing
              through two specified points on another
              curve”.
            </OuterP>
            <Pause />
            <SolutionNote id="_70_hgi_">
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                If we let {" "}
                <Math>
                  $h$
                </Math>
                {" "} drop to {" "}
                <Math>
                  $0$
                </Math>
                ⁠
                , and if {" "}
                <Math>
                  $f$
                </Math>
                {" "} is
                differentiable at {" "}
                <Math>
                  $x$
                </Math>
                ⁠
                , the
                difference-quotient-a.k.a.-slope-of-the-secant
                approaches
              </OuterP>
              ⁠
              <Pause />
              <MathBlock>
                $$
                f'(x)
                $$
              </MathBlock>
              <Pause />
              ⁠
              <OuterP>
                because the secant approaches the tangent,
                in that case, and the slope of the secant
                is also, perforce, approaching the slope
                of the tangent, which is {" "}
                <Math>
                  $f'(x)$
                </Math>
                ⁠
                . 
                (But you
                cannot directly set {" "}
                <Math>
                  $h = 0$
                </Math>
                ⁠
                , because
              </OuterP>
              ⁠
              <Pause />
              <MathBlock>
                $$
                &#123;f(x+0)-f(x)\over 0&#125; = &#123;0 \over 0&#125;
                $$
              </MathBlock>
              <Pause />
              ⁠
              <OuterP>
                is undefined.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={16}>
          <ExerciseStatement id="_72_hgi_">
            <OuterP>
              <b>
                Exercise 16.
              </b>
              {" "}
              The identity
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              (f + g)' = f' + g'
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              happens to be true for differentiable
              functions {" "}
              <Math>
                $f$
              </Math>
              ⁠
              , {" "}
              <Math>
                $g$
              </Math>
              ⁠
              . What English-language
              aphorism can summarize it? (This identity
              is known as the {" "}
              <i>
                sum rule
              </i>
              ⁠
              , by the way.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              One can say
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the derivative of the sum is the sum of the
              derivatives
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              or
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the sum is the sum of
              the rates of change
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              or (we made this one up)
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the aggregate is the sum
              of the rates of change of the components
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              (etc).
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={17}>
          <ExerciseStatement id="_73_hgi_">
            <OuterP>
              <b>
                Exercise 17.
              </b>
              {" "}
              In this exercise we consider two points
              in time {" "}
              <Math>
                $t_0$
              </Math>
              {" "} and {" "}
              <Math>
                $t_0 + \Delta&#123;&#125;t$
              </Math>
              {" "} (here
              “
              ⁠
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              ⁠
              ”, read “delta {" "}
              <Math>
                $t$
              </Math>
              ⁠
              ”, is a
              standard notation for a small amount of
              time):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/rzVH.svg" />
            <Pause />
            <OuterP>
              We also consider quantities {" "}
              <Math>
                $A$
              </Math>
              {" "} and {" "}
              <Math>
                $B$
              </Math>
              {" "}
              that are changing with time; {" "}
              <Math>
                $A$
              </Math>
              {" "} and {" "}
              <Math>
                $B$
              </Math>
              {" "}
              have some value at {" "}
              <Math>
                $t_0$
              </Math>
              ⁠
              , and, say, grow
              to be larger at {" "}
              <Math>
                $t_0 + \Delta&#123;&#125;t$
              </Math>
              ⁠
              :
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/Axof.svg" />
            <Pause />
            <OuterP>
              More specifically, we are interested in
              the change in the value of the product
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              \Large AB
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              over said course of time.
            </OuterP>
            <OuterP class="indent-10">
              To introduce an unsolicited metaphor,
              imagine {" "}
              <Math>
                $A$
              </Math>
              {" "} and {" "}
              <Math>
                $B$
              </Math>
              {" "} as
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/zn1D.svg" />
            <Pause />
            <OuterP>
              that are crossing a hallway surveyed by
              a cat. One side of the hallway is time
              {" "}
              <Math>
                $t_0$
              </Math>
              ⁠
              , the other side of the hallway is
              time {" "}
              <Math>
                $t_0 + \Delta&#123;&#125;t$
              </Math>
              ⁠
              . So great is their
              terror that {" "}
              <Math>
                $A$
              </Math>
              {" "} and {" "}
              <Math>
                $B$
              </Math>
              {" "} have decided to
              scurry across the hallway one at a time.
              First {" "}
              <Math>
                $A$
              </Math>
              {" "} will go, then {" "}
              <Math>
                $B$
              </Math>
              ⁠
              . In so, we
              can separate the following moments of
              interest (“moments” that exist inside the
              metaphorical timeline of the story, not
              on the {" "}
              <Math>
                $t$
              </Math>
              ⁠
              -number line, to be clear):
              <ImageLeft
                offset_x="0.5em"
                offset_y="-0.5em"
                src="/build-img/svgo-svg/zR89.svg"
              />
            </OuterP>
            <TextParent>
              <ol style="margin:0 1.5em 0.5em 2em;list-style:auto;list-style-position:outside;">
                <li style="margin-top:0.5em">
                  when {" "}
                  <Math>
                    $A$
                  </Math>
                  {" "} and {" "}
                  <Math>
                    $B$
                  </Math>
                  {" "} are both still at {" "}
                  <Math>
                    $t_0$
                  </Math>
                </li>
                <li style="margin-top:0.5em">
                  when {" "}
                  <Math>
                    $A$
                  </Math>
                  {" "} has made it to {" "}
                  <Math>
                    $t_0 + \Delta&#123;&#125;t$
                  </Math>
                  ⁠
                  ,
                  and {" "}
                  <Math>
                    $B$
                  </Math>
                  {" "} is still at {" "}
                  <Math>
                    $t_0$
                  </Math>
                </li>
                <li style="margin-top:0.5em">
                  <del>
                    when {" "}
                    <Math>
                      $B$
                    </Math>
                    ⁠
                    's tail is sticking out of the
                    cat's mouth, and
                  </del>
                  {" "} when {" "}
                  <Math>
                    $A$
                  </Math>
                  {" "} and {" "}
                  <Math>
                    $B$
                  </Math>
                  {" "} have both made it
                  to {" "}
                  <Math>
                    $t_0 + \Delta&#123;&#125;t$
                  </Math>
                </li>
              </ol>
            </TextParent>
            <OuterP>
              Correspondingly, the product
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              \Large AB
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              changes in two increments: first as {" "}
              <Math>
                $A$
              </Math>
              {" "}
              makes it to the other side of the hallway
              (and {" "}
              <Math>
                $A$
              </Math>
              {" "} grows bigger); then as {" "}
              <Math>
                $B$
              </Math>
              {" "} joins
              him/her (and {" "}
              <Math>
                $B$
              </Math>
              {" "} grows bigger). In an
              equation:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/S2-s.svg" />
            <Pause />
            <OuterP>
              If we divide the above equation by {" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "}
              and let {" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "} drop to {" "}
              <Math>
                $0$
              </Math>
              ⁠
              , what does
              each term become?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Dividing by {" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              ⁠
              :
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/Im2x.svg" />
            <Pause />
            <OuterP>
              As {" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "} approaches {" "}
              <Math>
                $0$
              </Math>
              ⁠
              , the term
              on the left-hand side approaches
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              (AB)'(t_0)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              where we view {" "}
              <Math>
                $A$
              </Math>
              {" "} and {" "}
              <Math>
                $B$
              </Math>
              {" "} as functions
              of time with, therefore, the product {" "}
              <Math>
                $AB$
              </Math>
              {" "}
              also becoming a function of time. (By
              definition, {" "}
              <Math>
                $AB$
              </Math>
              {" "} is the function
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              t \rightarrow A(t)B(t)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              where {" "}
              <Math>
                $A(t)$
              </Math>
              {" "} is the value of {" "}
              <Math>
                $A$
              </Math>
              {" "} at time
              {" "}
              <Math>
                $t$
              </Math>
              ⁠
              , {" "}
              <Math>
                $B(t)$
              </Math>
              {" "} is the value of {" "}
              <Math>
                $B$
              </Math>
              {" "} at time
              {" "}
              <Math>
                $t$
              </Math>
              ⁠
              .) Indeed, a ratio of the form
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              &#123;f(t_0 + \Delta&#123;&#125;t) - f(t_0)\over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              is a Newton quotient (cf. {" "}
              <NoBreak>
                <InChapterLink
                  href="/article/chapter4#_71_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 15
                </InChapterLink>
                ),
              </NoBreak>
              {" "}
              that approaches
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              f'(t_0)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              as {" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "} approaches {" "}
              <Math>
                $0$
              </Math>
              ⁠
              , assuming
              {" "}
              <Math>
                $f$
              </Math>
              {" "} is differentiable at {" "}
              <Math>
                $t_0$
              </Math>
              {" "} (cf.
              {" "}
              <InChapterLink
                href="/article/chapter4#_71_hgi_"
                class="handle-in-chapter-link"
              >
                Exercise 15
              </InChapterLink>
              {" "}
              {" "}
              <NoBreak>
                <InChapterLink
                  href="/article/chapter4#_70_hgi_"
                  class="handle-in-chapter-link"
                >
                  Note 1
                </InChapterLink>
                ),
              </NoBreak>
              {" "} and
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/MvBw.svg" />
            <Pause />
            <OuterP>
              has the form
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              &#123;f(t_0 + \Delta&#123;&#125;t) - f(t_0)\over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              for {" "}
              <Math>
                $f = AB$
              </Math>
              ⁠
              .
              <ImageLeft src="/build-img/svgo-svg/LuWh.svg" />
            </OuterP>
            <OuterP class="indent-10">
              The first term on the right-hand side, for
              its part, approaches
              <ImageRight src="/build-img/svgo-svg/5bqq.svg" />
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              B(t_0)A'(t_0)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              as {" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "} approaches {" "}
              <Math>
                $0$
              </Math>
              ⁠
              . Indeed,
              when you write it out, that term becomes
              the algebraic expression
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              &#123;A(t_0 + \Delta&#123;&#125;t)B(t_0) - A(t_0)B(t_0) \over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              where every term on top contains a
              “
              ⁠
              <Math>
                $B(t_0)$
              </Math>
              ⁠
              ”, that can therefore be factored
              out, giving us the equivalent expression
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              B(t_0)\cdot&#123;A(t_0 + \Delta&#123;&#125;t) - A(t_0) \over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              that, you will notice, has the form
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              B(t_0)\cdot&#123;f(t_0 + \Delta&#123;&#125;t) - f(t_0) \over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              for {" "}
              <Math>
                $f = A$
              </Math>
              ⁠
              , and thus approaches
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              B(t_0) \cdot A'(t_0)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              as {" "}
              <Math>
                $\Delta t$
              </Math>
              {" "} approaches {" "}
              <Math>
                $0$
              </Math>
              ⁠
              , by the property
              of the Newton quotient.
            </OuterP>
            <OuterP class="indent-10">
              Lastly the most interesting term is the
              second term on the right-hand side!
              Symmetrically to the first term on the
              right-hand side, the second term approaches
              <ImageRight src="/build-img/svgo-svg/9OXS.svg" />
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              A(t_0)B'(t_0)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              as {" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "} approaches {" "}
              <Math>
                $0$
              </Math>
              ⁠
              , but the
              reasons are slightly different! (Slightly.)
              Indeed, this term, written out, is
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              &#123;A(t_0 + \Delta&#123;&#125;t)B(t_0+\Delta&#123;&#125;t) - A(t_0+ \Delta&#123;&#125;t)B(t_0) \over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              which is equal to
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              A(t_0 + \Delta&#123;&#125;t)\cdot&#123;B(t_0+\Delta&#123;&#125;t) - B(t_0) \over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              by factoring out the common term {" "}
              <Math>
                $A(t_0 + \Delta&#123;&#125;t)$
              </Math>
              ⁠
              ;
              and
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              &#123;B(t_0+\Delta&#123;&#125;t) - B(t_0) \over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              approaches
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              B'(t_0)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              as {" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "} approaches {" "}
              <Math>
                $0$
              </Math>
              ⁠
              , like before
              (when we had {" "}
              <Math>
                $AB$
              </Math>
              {" "} or {" "}
              <Math>
                $A$
              </Math>
              {" "} instead of {" "}
              <Math>
                $B$
              </Math>
              ⁠
              )
              whereas
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              A(t_0 + \Delta&#123;&#125;t)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              —which is a bit different from before—approaches
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              A(t_0)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              as {" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "} approaches {" "}
              <Math>
                $0$
              </Math>
              ⁠
              —so that makes up
              {" "}
              <Math>
                $A(t_0)B'(t_0)$
              </Math>
              ⁠
              . (The
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              differentiability
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of {" "}
              <Math>
                $A$
              </Math>
              {" "} and {" "}
              <Math>
                $B$
              </Math>
              {" "} at {" "}
              <Math>
                $t_0$
              </Math>
              ⁠
              —that we are tacitly
              assuming—implies
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              continuity
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              as well, which implies that {" "}
              <Math>
                $A(t_0 + \Delta&#123;&#125;t)$
              </Math>
              {" "}
              approaches {" "}
              <Math>
                $A(t_0)$
              </Math>
              {" "} as {" "}
              <Math>
                $\Delta t$
              </Math>
              {" "} approaches {" "}
              <Math>
                $0$
              </Math>
              ⁠
              .)
            </OuterP>
            <OuterP class="indent-10">
              Summarizing, the three terms separately
              approach
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              (AB)'(t_0)
              $$
            </MathBlock>
            <Pause />
            ⁠
            ⁠
            <Pause />
            <MathBlock>
              $$
              B(t_0)A'(t_0)
              $$
            </MathBlock>
            <Pause />
            ⁠
            ⁠
            <Pause />
            <MathBlock>
              $$
              A(t_0)B'(t_0)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              as {" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "} approaches {" "}
              <Math>
                $0$
              </Math>
              {" "} and, in fact,
              because the equation holds no matter how
              close we make each term to its respective limit
              above, one can conclude that
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              (AB)'(t_0) = B(t_0)A'(t_0) + A(t_0)B'(t_0)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              for functions {" "}
              <Math>
                $A$
              </Math>
              ⁠
              , {" "}
              <Math>
                $B$
              </Math>
              {" "} differentiable at
              a point {" "}
              <Math>
                $t_0$
              </Math>
              ⁠
              .
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                This result is known as the {" "}
                <i>
                  product rule
                </i>
                ⁠
                .
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                Keeping things alphabetical everywhere, the
                same equation is more often written
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  (AB)'(t_0) = A'(t_0)B(t_0) + A(t_0)B'(t_0)
                  $$
                </MathBlock>
              </Boxed>
              <OuterP>
                with “
                ⁠
                <Math>
                  $A'(t_0)B(t_0)$
                </Math>
                ⁠
                ” in the middle. (But
                which is the same, of course, as {" "}
                <Math>
                  $B(t_0)A'(t_0)$
                </Math>
                ⁠
                .)
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 3.
                </i>
                {" "}
                By the rules for adding and multiplying
                functions the product rule
                can also be written
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  (AB)' = A'B + AB'
                  $$
                </MathBlock>
              </Boxed>
              <OuterP>
                more shortly, for
                {" "}
                <Math>
                  $A, B : \rr \ra \rr$
                </Math>
                {" "} differentiable, or
              </OuterP>
              <Boxed>
                <MathBlock>
                  $$
                  (fg)' = f'g + fg'
                  $$
                </MathBlock>
              </Boxed>
              <OuterP>
                if we replace “
                ⁠
                <Math>
                  $A$
                </Math>
                ⁠
                ” and “
                ⁠
                <Math>
                  $B$
                </Math>
                ⁠
                ” by the more familiar “
                ⁠
                <Math>
                  $f$
                </Math>
                ⁠
                ” and “
                ⁠
                <Math>
                  $g$
                </Math>
                ⁠
                ”.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={18}>
          <ExerciseStatement id="_74_hgi_">
            <OuterP>
              <b>
                Exercise 18.
              </b>
              {" "}
              What does...
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              A_1(t_0 + h) \,\times\, \dots \,\times\, A_&#123;i-1&#125;(t_0 + h) \,\times\, &#123;A_i(t_0 + h) - A_i(t_0)\over h&#125; \,\times\, A_&#123;i + 1&#125;(t_0) \,\times\, \cdots  \,\times\, A_n(t_0)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <ImageRight
              src="/build-img/svgo-svg/6ZYS.svg"
              offset_x="2rem"
            />
            <OuterP>
              ...approach as {" "}
              <Math>
                $h$
              </Math>
              {" "} goes to {" "}
              <Math>
                $0$
              </Math>
              ⁠
              , if {" "}
              <Math>
                $A_1, \dots, A_n$
              </Math>
              {" "}
              {" "}
              <Math>
                $: \rr \ra \rr$
              </Math>
              {" "} are differentiable at the point {" "}
              <Math>
                $t_0$
              </Math>
              ⁠
              ?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              We can start with the fraction in the
              middle of the product:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/c9db.svg" />
            <Pause />
            <OuterP>
              This is seen to be a Newton quotient
              (cf. {" "}
              <NoBreak>
                <InChapterLink
                  href="/article/chapter4#_71_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 15
                </InChapterLink>
                )
              </NoBreak>
              {" "}{" "}
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              f(x + h) - f(x)\over h
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              with {" "}
              <Math>
                $f = A_i$
              </Math>
              ⁠
              , {" "}
              <Math>
                $x = t_0$
              </Math>
              ⁠
              , per which
              (Exercise {" "}
              <InChapterLink
                href="/article/chapter4#_71_hgi_"
                class="handle-in-chapter-link"
              >
                15
              </InChapterLink>
              {" "} Note 3), the fraction approaches
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              A_i'(t_0)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              as {" "}
              <Math>
                $h$
              </Math>
              {" "} approaches {" "}
              <Math>
                $0$
              </Math>
              ⁠
              , given also the assumption
              that each of the functions {" "}
              <Math>
                $A_1$
              </Math>
              ⁠
              , ..., {" "}
              <Math>
                $A_n$
              </Math>
              {" "}
              (including {" "}
              <Math>
                $A_i$
              </Math>
              ⁠
              ) is differentiable at {" "}
              <Math>
                $t_0$
              </Math>
              ⁠
              .
            </OuterP>
            <OuterP class="indent-10">
              Next down in order of interesting-ness we presumably
              have the terms {" "}
              <Math>
                $A_1(t_0 + h)$
              </Math>
              {" "} through {" "}
              <Math>
                $A_&#123;i-1&#125;(t_0 + h)$
              </Math>
              {" "}
              at the beginning of the product...
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/B9Zl.svg" />
            <Pause />
            <OuterP>
              ...; here the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              differentiability
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of {" "}
              <Math>
                $A_1$
              </Math>
              {" "} at {" "}
              <Math>
                $t_0$
              </Math>
              {" "} implies the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              continuity
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of {" "}
              <Math>
                $A_1$
              </Math>
              {" "} at {" "}
              <Math>
                $t_0$
              </Math>
              ⁠
              , which implies that
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              A_1(t_0 + h)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              approaches
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              A_1(t_0)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              as {" "}
              <Math>
                $h$
              </Math>
              {" "} approaches {" "}
              <Math>
                $0$
              </Math>
              ⁠
              . (These various
              technicalities concerning a generic function
              {" "}
              <Math>
                $f : \rr \ra \rr$
              </Math>
              {" "} are mentioned in the solution
              to Exercise 17.) Similarly for {" "}
              <Math>
                $A_2(t_0 + h)$
              </Math>
              ⁠
              ,
              etc, up to {" "}
              <Math>
                $A_&#123;i-1&#125;(t_0 + h)$
              </Math>
              ⁠
              , so
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              A_1(t_0 + h) \,\times\, \dots \,\times\, A_&#123;i-1&#125;(t_0 + h)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              approaches
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              A_1(t_0) \,\times\, \dots \,\times\, A_&#123;i-1&#125;(t_0)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              as {" "}
              <Math>
                $h$
              </Math>
              {" "} approaches {" "}
              <Math>
                $0$
              </Math>
              ⁠
              . (If some quantities are
              each approaching a different value, then the
              product-of-the-quantities will approach the
              product-of-the-values—something not mentioned
              in the solution to Exercise 17, but that might
              have been.)
            </OuterP>
            <OuterP class="indent-10">
              Lastly one has the tail end of the product,
              where {" "}
              <Math>
                $h$
              </Math>
              {" "} does not even appear:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/TQjR.svg" />
            <Pause />
            <OuterP>
              Because {" "}
              <Math>
                $h$
              </Math>
              {" "} does not appear here, the tail end
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              stays put
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              where it is, irrespective of the value of {" "}
              <Math>
                $h$
              </Math>
              ⁠
              .
              So that was easy! Altogether, the answer is
              therefore:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/hUGM.svg" />
            <Pause />
            <OuterP>
              ...with a lone “
              ⁠
              <Math>
                $A_i'$
              </Math>
              ⁠
              ” in the middle.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={19}>
          <ExerciseStatement id="_75_hgi_">
            <OuterP>
              <b>
                Exercise 19.
              </b>
              {" "}
              Express the...
            </OuterP>
            <Pause />
            <List style="padding-left: 2.4em; gap: 0.1em;">
              <Item>
                <p>
                  associativity of function composition
                </p>
              </Item>
              <Item>
                <p>
                  associativity of function multiplication
                </p>
              </Item>
              <Item>
                <p>
                  associativity of function addition
                </p>
              </Item>
              <Item>
                <p>
                  commutativity of function multiplication
                </p>
              </Item>
              <Item>
                <p>
                  commutativity of function addition
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              ...as well as the...
            </OuterP>
            <Pause />
            <List style="padding-left: 2.4em; gap: 0.1em;">
              <Item>
                <p>
                  associativity of real number multiplication
                </p>
              </Item>
              <Item>
                <p>
                  associativity of real number addition
                </p>
              </Item>
              <Item>
                <p>
                  commutativity of real number multiplication
                </p>
              </Item>
              <Item>
                <p>
                  commutativity of real number addition
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              ...in the form of self-contained, formal statements.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              For the functions:
            </OuterP>
            <Pause />
            <List>
              <Item>
                <p>
                  <i>
                    the associativity of function multiplication is
                    the fact that {" "}
                    <Math>
                      $(f \circ g) \circ h = f \circ (g \circ h)$
                    </Math>
                    {" "}
                    for all functions {" "}
                    <Math>
                      $f$
                    </Math>
                    ⁠
                    , {" "}
                    <Math>
                      $g$
                    </Math>
                    ⁠
                    , {" "}
                    <Math>
                      $h$
                    </Math>
                    {" "} such that
                    {" "}
                    <Math>
                      $h : D \ra C$
                    </Math>
                    ⁠
                    , {" "}
                    <Math>
                      $g : C \ra B$
                    </Math>
                    ⁠
                    , {" "}
                    <Math>
                      $f : B \ra A$
                    </Math>
                    {" "}
                    [for arbitrary sets {" "}
                    <Math>
                      $A$
                    </Math>
                    ⁠
                    , {" "}
                    <Math>
                      $B$
                    </Math>
                    ⁠
                    , {" "}
                    <Math>
                      $C$
                    </Math>
                    ⁠
                    , {" "}
                    <Math>
                      $D$
                    </Math>
                    ⁠
                    ]
                  </i>
                </p>
              </Item>
              <Item>
                <ImageLeft
                  src="/build-img/svgo-svg/pcYW.svg"
                  offset_x="4em"
                />
              </Item>
              <Item>
                <p>
                  <i>
                    the associativity of function multiplication is
                    the fact that {" "}
                    <Math>
                      $f(gh) = (fg)h$
                    </Math>
                    {" "} for all {" "}
                    <Math>
                      $f, g, h : \rr \ra \rr$
                    </Math>
                  </i>
                </p>
              </Item>
              <Item>
                <p>
                  <i>
                    the associativity of function addition is
                    the fact that {" "}
                    <Math>
                      $f + (g + h) = (f + g) + h$
                    </Math>
                    {" "} for all {" "}
                    <Math>
                      $f, g, h : \rr \ra \rr$
                    </Math>
                  </i>
                </p>
              </Item>
              <Item>
                <p>
                  <i>
                    the commutativity of function multiplication is
                    the fact that {" "}
                    <Math>
                      $fg = gf$
                    </Math>
                    {" "} for all {" "}
                    <Math>
                      $f, g : \rr \ra \rr$
                    </Math>
                  </i>
                </p>
              </Item>
              <Item>
                <p>
                  <i>
                    the commutativity of function addition is
                    the fact that {" "}
                    <Math>
                      $f + g = g + f$
                    </Math>
                    {" "} for all {" "}
                    <Math>
                      $f, g : \rr \ra \rr$
                    </Math>
                  </i>
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              For the real numbers:
            </OuterP>
            <Pause />
            <List>
              <Item>
                <p>
                  <i>
                    the associativity of [real number] multiplication is
                    the fact that {" "}
                    <Math>
                      $a(bc) = (ab)c$
                    </Math>
                    {" "} for all {" "}
                    <Math>
                      $a, b, c \in \rr$
                    </Math>
                  </i>
                </p>
              </Item>
              <Item>
                <p>
                  <i>
                    the associativity of [real number] addition is
                    the fact that {" "}
                    <Math>
                      $a + (b + c) = (a + b) + c$
                    </Math>
                    {" "} for all {" "}
                    <Math>
                      $a, b, c \in \rr$
                    </Math>
                  </i>
                </p>
              </Item>
              <Item>
                <p>
                  <i>
                    the commutativity of [real number] multiplication is
                    the fact that {" "}
                    <Math>
                      $ab = ba$
                    </Math>
                    {" "} for all {" "}
                    <Math>
                      $a, b \in \rr$
                    </Math>
                  </i>
                </p>
              </Item>
              <Item>
                <p>
                  <i>
                    the commutativity of [real number] addition is
                    the fact that {" "}
                    <Math>
                      $a + b = b + a$
                    </Math>
                    {" "} for all {" "}
                    <Math>
                      $a, b \in \rr$
                    </Math>
                  </i>
                </p>
              </Item>
            </List>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                We never took the time to prove the associativity
                of function addition, but it is easy to prove!
                (For other proofs see Exercise 32, Exercise 33, as
                well as Exercise 9, Chapter 3.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={20}>
          <ExerciseStatement id="_76_hgi_">
            <OuterP>
              <b>
                Exercise 20.
              </b>
              {" "}
              Apply the definition
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              fg = (u \ra f(u)g(u))
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              of function multiplication
              in order to show that
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              (fg)h = f(gh)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              for all functions {" "}
              <Math>
                $f, g, h : \rr \ra \rr$
              </Math>
              ⁠
              ,
              or, namely, to show that
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              (
              ⁠
              <Math>
                $f$
              </Math>
              {" "} times {" "}
              <Math>
                $g$
              </Math>
              ⁠
              ) times {" "}
              <Math>
                $h$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              equals
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <Math>
                $f$
              </Math>
              {" "} times (
              ⁠
              <Math>
                $g$
              </Math>
              {" "} times {" "}
              <Math>
                $h$
              </Math>
              ⁠
              )
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              for all functions {" "}
              <Math>
                $f, g, h : \rr \ra \rr$
              </Math>
              ⁠
              .
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              It is necessary and sufficient to show that
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              ((fg)h)(u)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              is the same as
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              (f(gh))(u)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              for an arbitrary input {" "}
              <Math>
                $u \in \rr$
              </Math>
              ⁠
              , in order to
              show that
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              (fg)h
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              and
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              f(gh)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              are the same function. (Function equality is
              based on input-output behavior: two functions are
              equal if and only if every input is mapped to the
              same output under either function. See {" "}
              <NoBreak>
                <a
                  href="/article/chapter3#_39_hgi_"
                  class="handle-out-chapter-link"
                >
                  Note 6, Exercise 9, Chapter 3
                </a>
                .)
              </NoBreak>
              {" "}{" "}
            </OuterP>
            <OuterP class="indent-10">
              Starting up,
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              ((fg)h)(u) = (fg)(u) \cdot h(u)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              by the definition of function multiplication,
              and
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              (f(gh))(u) = f(u) \cdot (gh)(u)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              likewise. Moreover,
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              (fg)(u) = f(u) \cdot g(u)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              and
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              (gh)(u) = g(u) \cdot h(u)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              by the same definition again. Therefore,
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              ((fg)h)(u) = (f(u) \cdot g(u)) \cdot h(u)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              on the one hand, and
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              (f(gh))(u) = f(u) \cdot (g(u) \cdot h(u))
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              on the other hand. But
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              (f(u) \cdot g(u)) \cdot h(u) = f(u) \cdot (g(u) \cdot h(u))
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              by the associativity of ordinary real number
              multiplication. (Not function multiplication:
              {" "}
              <i>
                real number multiplication
              </i>
              ⁠
              .) So
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              ((fg)h)(u)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              equals
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              (f(gh))(u)
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              for arbitrary {" "}
              <Math>
                $u$
              </Math>
              ⁠
              , which completes the proof.
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                In words, we have just established the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                associativity of function multiplication
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                while we had previously established the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                associativity of function composition
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                (if you recall that one) in {" "}
                <NoBreak>
                  <a
                    href="/article/chapter3#_40_hgi_"
                    class="handle-out-chapter-link"
                  >
                    Exercise 9 of Chapter 3
                  </a>
                  .
                </NoBreak>
                {" "}{" "}
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                By this result, we can write
              </OuterP>
              ⁠
              <Pause />
              <MathBlock>
                $$
                fgh
                $$
              </MathBlock>
              <Pause />
              ⁠
              <OuterP>
                without any parentheses at all: it
                doesn't matter whether we think of this product
                as {" "}
                <Math>
                  $(fg)h$
                </Math>
                {" "} or {" "}
                <Math>
                  $f(gh)$
                </Math>
                ⁠
                , the result is the same.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={21}>
          <ExerciseStatement id="_78_hgi_">
            <OuterP>
              <b>
                Exercise 21.
              </b>
              {" "}
              Imagine a single particle in a one-dimensional
              world, whose velocity equals its position; at {" "}
              <Math>
                $t = 0$
              </Math>
              ⁠
              ,
              the particle is sitting at {" "}
              <Math>
                $x = 1$
              </Math>
              ⁠
              :
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/vEPq.svg" />
            <Pause />
            <OuterP>
              If we play time backward, will the particle
              ever reach {" "}
              <Math>
                $x = 0$
              </Math>
              ⁠
              ?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Going back in time,
              examine how long it would take
              the particle to cross each of the intervals defined by
              the following geometric progression* (*see {" "}
              <NoBreak>
                <InChapterLink
                  href="/article/chapter4#_77_hgi_"
                  class="handle-in-chapter-link"
                >
                  Note 1
                </InChapterLink>
                ):
              </NoBreak>
              {" "}{" "}
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/ESgD.svg" />
            <Pause />
            <OuterP>
              The interval from {" "}
              <Math>
                $0.5$
              </Math>
              {" "} to {" "}
              <Math>
                $1$
              </Math>
              {" "}
              takes {" "}
              <i>
                at least
              </i>
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              &#123;0.5 \over 1&#125; = 0.5
              $$
            </MathBlock>
            <Pause />
            ⁠
            <ImageLeft
              src="/build-img/svgo-svg/SiXb.svg"
              offset_x="10em"
            />
            <OuterP>
              time to cross, because the maximum speed of the particle
              inside of that interval is {" "}
              <Math>
                $1$
              </Math>
              ⁠
              .
              Similarly, the interval from
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              x = 0.25
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              to
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              x = 0.5
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              takes {" "}
              <i>
                at least
              </i>
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              &#123;0.25 \over 0.5&#125; = 0.5
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              time to cross, because the maximum speed of the particle
              inside of that interval is {" "}
              <Math>
                $0.5$
              </Math>
              ⁠
              .
              Again, the interval from
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              x = 0.125
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              to
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              x = 0.25
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              takes {" "}
              <i>
                at least
              </i>
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              &#123;0.125 \over 0.25&#125; = 0.5
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              time to cross, because the maximum speed of the particle
              inside of that interval is {" "}
              <Math>
                $0.25$
              </Math>
              ⁠
              —etc—each interval
              takes at least
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              0.5
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              units of time to cross, but there are infinitely
              many such intervals, so it takes infinitely much time to
              crawl back to {" "}
              <Math>
                $0$
              </Math>
              ⁠
              . (I.e., the particle never makes it to
              {" "}
              <Math>
                $x = 0$
              </Math>
              ⁠
              , no matter how far back in time we look.)
            </OuterP>
            <Pause />
            <SolutionNote id="_77_hgi_">
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                A so-called
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                geometric progression
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                is a sequence of numbers in which each number
                is a fixed multiple of the previous number.
                For example,
              </OuterP>
              ⁠
              <Pause />
              <MathBlock>
                $$
                100,\, 300,\, 900,\, 2700
                $$
              </MathBlock>
              <Pause />
              ⁠
              <OuterP>
                is a (finite) geometric progression, because each number
                is the previous number multiplied by {" "}
                <Math>
                  $3$
                </Math>
                ⁠
                ,
                and
              </OuterP>
              ⁠
              <Pause />
              <MathBlock>
                $$
                1,\, 0.5,\, 0.25,\, 0.125,\, 0.0625,\, \ldots
                $$
              </MathBlock>
              <Pause />
              ⁠
              <OuterP>
                is an (infinite) geometric progression, because each number
                is the previous multiplied by {" "}
                <Math>
                  $0.5$
                </Math>
                ⁠
                . A so-called
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                arithmetic progression
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                is a sequence of numbers in which each number
                adds a fixed quantity to the previous. For example,
              </OuterP>
              ⁠
              <Pause />
              <MathBlock>
                $$
                900, 1000, 1100, 1200, 1300, \dots
                $$
              </MathBlock>
              <Pause />
              ⁠
              <OuterP>
                is an infinite arithmetic progression in which each number
                adds {" "}
                <Math>
                  $100$
                </Math>
                {" "} to the previous, and
              </OuterP>
              ⁠
              <Pause />
              <MathBlock>
                $$
                -5.5, -6, -6.5, -7
                $$
              </MathBlock>
              <Pause />
              ⁠
              <OuterP>
                is a finite arithmetic progression in which each number
                adds {" "}
                <Math>
                  $-0.5$
                </Math>
                {" "} to the previous.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={22}>
          <ExerciseStatement id="_79_hgi_">
            <OuterP>
              <b>
                Exercise 22.
              </b>
              {" "}
              Take a system of two particles on the real
              line; at time {" "}
              <Math>
                $t = 0$
              </Math>
              ⁠
              , the first particle (yellow)
              is at {" "}
              <Math>
                $x = -1$
              </Math>
              ⁠
              , while the second one (blue)
              is at {" "}
              <Math>
                $x = 1$
              </Math>
              ⁠
              :
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/zLWR.svg" />
            <Pause />
            <OuterP>
              If the velocity of the yellow particle is set to
              track the position of the blue particle and vice-versa,
              give a qualitative sketch of the
              position-as-a-function-of-time (time on the {" "}
              <Math>
                $x$
              </Math>
              {" "}
              axis, position on the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis) of the two
              particles. What is the defining geometric relationship
              between the two graphs?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              At {" "}
              <Math>
                $t = 0$
              </Math>
              {" "} the blue particle has velocity {" "}
              <Math>
                $-1$
              </Math>
              ⁠
              ,
              which is the position of the yellow particle,
              and the yellow particle has velocity {" "}
              <Math>
                $1$
              </Math>
              ⁠
              , which
              is the position of the blue particle:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/RULR.svg" />
            <Pause />
            <OuterP>
              As we “release” time the two particles thus
              start moving inward towards {" "}
              <Math>
                $0$
              </Math>
              {" "} and then
              start slowing down, as the opposing particle
              inches closer to {" "}
              <Math>
                $0$
              </Math>
              ⁠
              . The result is two graphs that
              form a mirror-image radioactive decay:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/aATY.svg" />
            <Pause />
            <OuterP>
              The “defining geometric relationship” is that
              the slope of one graph equals the value of the
              other graph at any point in time. (One could 
              also name the fact that the graphs have value
              {" "}
              <Math>
                $\pm 1$
              </Math>
              {" "} at {" "}
              <Math>
                $t = 0$
              </Math>
              ⁠
              , otherwise the graphs are not
              uniquely determined, as they can be translated
              together left or right by any amount while
              maintaining the former condition about slope.)
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                Saying
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                a particle whose velocity is minus its
                position
                <br />
                and whose position is {" "}
                <Math>
                  $1$
                </Math>
                {" "} at time {" "}
                <Math>
                  $t = 0$
                </Math>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                is an alternate characterization of the blue particle
                that does not invoke the yellow particle, and
                likewise
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                a particle whose velocity is minus its
                position
                <br />
                and whose position is {" "}
                <Math>
                  $-1$
                </Math>
                {" "} at time {" "}
                <Math>
                  $t = 0$
                </Math>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                is an alternate characterization of the yellow particle
                that does not invoke the blue particle.
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                The graph of the blue particle is the mirror
                image through the {" "}
                <Math>
                  $y$
                </Math>
                {" "} axis of the graph of the 
                particle of {" "}
                <NoBreak>
                  <InChapterLink
                    href="/article/chapter4#_78_hgi_"
                    class="handle-in-chapter-link"
                  >
                    Exercise 21
                  </InChapterLink>
                  ,
                </NoBreak>
                {" "} whose
                velocity is equal to its position and whose
                position is {" "}
                <Math>
                  $1$
                </Math>
                {" "} at {" "}
                <Math>
                  $t = 0$
                </Math>
                ⁠
                :
              </OuterP>
              <Pause />
              <Image src="/build-img/svgo-svg/a0qL.svg" />
              <Pause />
              <OuterP>
                ...the detailed reasoning, as also indicated on the
                figure, being that a mirror symmetry through
                the {" "}
                <Math>
                  $y$
                </Math>
                {" "} axis flips the sign of the slope without
                affecting the value of {" "}
                <Math>
                  $y$
                </Math>
                ⁠
                , so that an equality of
                the form “
                ⁠
                <Math>
                  $y = \te&#123;slope&#125;$
                </Math>
                ⁠
                ” becomes “
                ⁠
                <Math>
                  $y = -\te&#123;slope&#125;$
                </Math>
                ⁠
                ”,
                and vice-versa.
              </OuterP>
              <OuterP class="indent-10">
                (I.e., the mirror image of the blue
                curve satisfies the constrains of the red curve, and
                vice-versa.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={23}>
          <ExerciseStatement id="_80_hgi_">
            <OuterP>
              <b>
                Exercise 23.
              </b>
              {" "}
              Four particles are placed
              at intervals of {" "}
              <Math>
                $90^\circ$
              </Math>
              {" "}
              around a circle of radius {" "}
              <Math>
                $1$
              </Math>
              {" "}
              centered at {" "}
              <Math>
                $(2, 4)$
              </Math>
              {" "} in the plane:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/Tb68.svg" />
            <Pause />
            <OuterP>
              The velocity of each particle is set to
              the position of the next particle clockwise
              around the circle, with this relationship
              maintained at all points in time.
              If the configuration above shows time
              {" "}
              <Math>
                $t = 0$
              </Math>
              ⁠
              , how will the positions of the
              particles evolve? Discuss both positive and
              negative values of {" "}
              <Math>
                $t$
              </Math>
              ⁠
              .
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              At {" "}
              <Math>
                $t = 0$
              </Math>
              {" "} the particles have position
              vectors that are up and the right,
              so the velocity vectors will be
              up and to the right, so the particles
              will move more up and to the right,
              and the velocity vectors will become
              more “up and to the right”, and so
              on—broadly speaking, for {" "}
              <Math>
                $t &gt; 0$
              </Math>
              {" "} there
              will ensue a kind of  four-particle
              explosion that goes up and to the right,
              off to {" "}
              <Math>
                $(+\infty, +\infty)$
              </Math>
              ⁠
              .
              <ImageRight
                src="/build-img/svgo-svg/7A0o.svg"
                offset_y="150px"
                offset_x="-0.5em"
              />
            </OuterP>
            <OuterP class="indent-10">
              For {" "}
              <Math>
                $t &lt; 0$
              </Math>
              {" "} motion will be
              down and to the left, at least initially—it
              is hard to forecast off the top of one's
              head (unless you have a sudden flash of insight)
              what will happen for larger negative
              values of {" "}
              <Math>
                $t$
              </Math>
              ⁠
              .
            </OuterP>
            <OuterP class="indent-10">
              HOWEVER.
            </OuterP>
            <OuterP class="indent-10">
              It is possible to say much more.
            </OuterP>
            <OuterP class="indent-10">
              To go deeper, we introduce eight new
              particles, comprising the original colors but
              in white and black flavors:
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                />
                , {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                />
                , {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                />
                , {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                />
                , {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                />
                , {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                />
                , {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/JFOc.svg"
                />
                , {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Okyf.svg"
                />
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              At {" "}
              <Math>
                $t = 0$
              </Math>
              {" "} the white particles are just a
              translate of the original particles, such
              that the circle on which they lie is
              centered at {" "}
              <Math>
                $(0, 0)$
              </Math>
              ⁠
              :
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/rYi5.svg" />
            <Pause />
            <OuterP>
              The black particles, for their part, are
              piled on top of one another at {" "}
              <Math>
                $(x, y) = (2, 4)$
              </Math>
              {" "} at {" "}
              <Math>
                $t = 0$
              </Math>
              ⁠
              ,
              that we draw as four quarter-pies
              of different colors, like a UNO card:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/qPL0.svg" />
            <Pause />
            <OuterP>
              Within each group we set the velocity of
              the purple particle to the position of the
              yellow particle,
              the velocity of the yellow particle to the
              position of the green particle, etc.
            </OuterP>
            <OuterP class="indent-10">
              In this case the white particles will
              rotate at unit speed around their circle of
              radius {" "}
              <Math>
                $1$
              </Math>
              {" "} centered at the origin, just like
              the particles discussed in the solution to
              {" "}
              <NoBreak>
                <InChapterLink
                  href="/article/chapter4#_67_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 12
                </InChapterLink>
                ,
              </NoBreak>
              {" "} that obey a similar set of
              constraints
              (albeit with a different set of colors).
            </OuterP>
            <OuterP class="indent-10">
              The black particles, for their part,
              behave as a single fused-together particle
              whose velocity is equal to its position,
              and will
              see their motion confined to an infinite
              half-line through
              {" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "} and {" "}
              <Math>
                $(2, 4)$
              </Math>
              ⁠
              , as their velocity—being
              equal to their position—stays parallel to the
              line between them and the origin, meaning
              they are “stuck” to that line.
            </OuterP>
            <OuterP class="indent-10">
              Also note that the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              speed
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of the black particles, being equal to the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              length of the velocity vector
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of said particles, is equal to the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              length of the position vector
              <ImageRight
                src="/build-img/svgo-svg/vnba.svg"
                offset_x="-4em"
              />
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of said particles, is equal to the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              distance to the origin
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of said particles,
              since the length of the position vector is
              the distance to the origin.
            </OuterP>
            <OuterP class="indent-10">
              This means that if we introduce gradations
              to the afore-mentioned half-line through {" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "}
              and {" "}
              <Math>
                $(2, 4)$
              </Math>
              ⁠
              ...
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/VxRW.svg" />
            <Pause />
            <OuterP>
              ...indicating the distance to the origin,
              the black particles behave like a
              one-dimensional system comprising a single
              particle on a half-line (or entire line,
              it doesn't hurt) whose velocity is equal to
              its position on this line:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/xj0g.svg" />
            <Pause />
            <OuterP>
              The behavior of such a particle is
              identical to the behavior of the red
              particle from {" "}
              <NoBreak>
                <InChapterLink
                  href="/article/chapter4#_78_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 21
                </InChapterLink>
                ,
              </NoBreak>
              {" "}
              except that the current
              “UNO particle” has a slight head-start over the
              red particle from {" "}
              <NoBreak>
                <InChapterLink
                  href="/article/chapter4#_78_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 21
                </InChapterLink>
                ,
              </NoBreak>
              {" "} being
              at position {" "}
              <Math>
                $x = 2\sqrt&#123;5&#125;$
              </Math>
              {" "}
              instead of at position {" "}
              <Math>
                $x = 1$
              </Math>
              {" "} at {" "}
              <Math>
                $t = 0$
              </Math>
              ⁠
              .
              (!!)
              <ImageLeft
                src="/build-img/svgo-svg/RFxt.svg"
                line={-1}
              />
            </OuterP>
            <OuterP class="indent-10">
              This describes an “understandable”
              behavior of the black and white particles.
            </OuterP>
            <OuterP class="indent-10">
              Next we write
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                />
                ⁠
                <Math>
                  $_x$
                </Math>
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              for the function that gives
              the {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -coordinate of the purple-white particle
              as a function of time (in more detail,
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                />
                ⁠
                <Math>
                  $_x : \rr \ra \rr$
                </Math>
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              to emphasize that WE ARE TALKING ABOUT A FUNCTION, e.g.,
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                />
                ⁠
                <Math>
                  $_x(2)$
                </Math>
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              is the {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -coordinate of
              the purple-white particle at
              {" "}
              <Math>
                $t = 2$
              </Math>
              ⁠
              , etc), and write
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                />
                ⁠
                <Math>
                  $_y$
                </Math>
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              for the function that gives
              the {" "}
              <Math>
                $y$
              </Math>
              ⁠
              -coordinate of the purple-white
              particle as a function of time, and so on
              for all the other particles.
            </OuterP>
            <OuterP class="indent-10">
              For example,
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                />
                ⁠
                <Math>
                  $_x\,\!\!\!' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                />
                ⁠
                <Math>
                  $_x$
                </Math>
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              because the rate of change of the
              {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -coordinate of the purple-white particle
              is the value of the {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -coordinate
              of the yellow-white particle; we also have
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                />
                ⁠
                <Math>
                  $_x\,\!\!\!' \,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                />
                ⁠
                <Math>
                  $_x\,\!\!\!' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                />
                ⁠
                <Math>
                  $_x +$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                />
                ⁠
                <Math>
                  $_x$
                </Math>
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              by adding two such equations together; this can also be
              written
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <Math>
                  $($
                </Math>
                ⁠
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                />
                ⁠
                <Math>
                  $_x \,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                />
                ⁠
                <Math>
                  $_x)' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                />
                ⁠
                <Math>
                  $_x +$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                />
                ⁠
                <Math>
                  $_x$
                </Math>
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              by the sum rule; but this gives us an idea!; we can
              try to {" "}
              <i>
                define
              </i>
              {" "} the original particles {" "}
              <NoBreak>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                />
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                />
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                />
                ,
              </NoBreak>
              {" "} {" "}
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/build-img/svgo-svg/k4Y8.svg"
              />
              {" "} by setting...
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                />
                ⁠
                <Math>
                  $_x =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                />
                ⁠
                <Math>
                  $_x \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                />
                ⁠
                <Math>
                  $_x$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                />
                ⁠
                <Math>
                  $_y =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                />
                ⁠
                <Math>
                  $_y \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                />
                ⁠
                <Math>
                  $_y$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                />
                ⁠
                <Math>
                  $_x =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                />
                ⁠
                <Math>
                  $_x \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                />
                ⁠
                <Math>
                  $_x$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                />
                ⁠
                <Math>
                  $_y =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                />
                ⁠
                <Math>
                  $_y \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                />
                ⁠
                <Math>
                  $_y$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                />
                ⁠
                <Math>
                  $_x =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                />
                ⁠
                <Math>
                  $_x \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/JFOc.svg"
                />
                ⁠
                <Math>
                  $_x$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                />
                ⁠
                <Math>
                  $_y =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                />
                ⁠
                <Math>
                  $_y \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/JFOc.svg"
                />
                ⁠
                <Math>
                  $_y$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                />
                ⁠
                <Math>
                  $_x =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                />
                ⁠
                <Math>
                  $_x \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Okyf.svg"
                />
                ⁠
                <Math>
                  $_x$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                />
                ⁠
                <Math>
                  $_y =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                />
                ⁠
                <Math>
                  $_y \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Okyf.svg"
                />
                ⁠
                <Math>
                  $_y$
                </Math>
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              ...and see if these definitions satisfy the constraints
              of the problem! (We momentarily have two different
              purple particles: the one from the problem statement,
              and the one that we have just defined; but that's ok,
              as long as we are aware of this small semantic
              transgression, it is not such a big deal,
              and we shall soon prove that these two
              particles are one and the same.)
              For starters...
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                />
                ⁠
                <Math>
                  $_x\,\!\!\!' = ($
                </Math>
                ⁠
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                />
                ⁠
                <Math>
                  $_x \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                />
                ⁠
                <Math>
                  $_x\!\rt&#123;0.05&#125;)' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                />
                ⁠
                <Math>
                  $_x \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                />
                ⁠
                <Math>
                  $_x =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                />
                ⁠
                <Math>
                  $_x$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                />
                ⁠
                <Math>
                  $_y\,\!\!\!' = ($
                </Math>
                ⁠
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                />
                ⁠
                <Math>
                  $_y \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                />
                ⁠
                <Math>
                  $_y\!\rt&#123;0.05&#125;)' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                />
                ⁠
                <Math>
                  $_y \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                />
                ⁠
                <Math>
                  $_y =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                />
                ⁠
                <Math>
                  $_y$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                />
                ⁠
                <Math>
                  $_x\,\!\!\!' = ($
                </Math>
                ⁠
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                />
                ⁠
                <Math>
                  $_x \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                />
                ⁠
                <Math>
                  $_x\!\rt&#123;0.05&#125;)' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                />
                ⁠
                <Math>
                  $_x \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/JFOc.svg"
                />
                ⁠
                <Math>
                  $_x =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                />
                ⁠
                <Math>
                  $_x$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                />
                ⁠
                <Math>
                  $_y\,\!\!\!' = ($
                </Math>
                ⁠
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                />
                ⁠
                <Math>
                  $_y \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                />
                ⁠
                <Math>
                  $_y\!\rt&#123;0.05&#125;)' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                />
                ⁠
                <Math>
                  $_y \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/JFOc.svg"
                />
                ⁠
                <Math>
                  $_y =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                />
                ⁠
                <Math>
                  $_y$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                />
                ⁠
                <Math>
                  $_x\,\!\!\!' = ($
                </Math>
                ⁠
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                />
                ⁠
                <Math>
                  $_x \,+$
                </Math>
                ⁠
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/JFOc.svg"
                />
                ⁠
                <Math>
                  $_x\!\rt&#123;0.05&#125;)' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                />
                ⁠
                <Math>
                  $_x \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Okyf.svg"
                />
                ⁠
                <Math>
                  $_x =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                />
                ⁠
                <Math>
                  $_x$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                />
                ⁠
                <Math>
                  $_y\,\!\!\!' = ($
                </Math>
                ⁠
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                />
                ⁠
                <Math>
                  $_y \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/JFOc.svg"
                />
                ⁠
                <Math>
                  $_y\!\rt&#123;0.05&#125;)' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                />
                ⁠
                <Math>
                  $_y \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Okyf.svg"
                />
                ⁠
                <Math>
                  $_y =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                />
                ⁠
                <Math>
                  $_y$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                />
                ⁠
                <Math>
                  $_x\,\!\!\!' = ($
                </Math>
                ⁠
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                />
                ⁠
                <Math>
                  $_x \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Okyf.svg"
                />
                ⁠
                <Math>
                  $_x\!\rt&#123;0.05&#125;)' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                />
                ⁠
                <Math>
                  $_x \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                />
                ⁠
                <Math>
                  $_x =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                />
                ⁠
                <Math>
                  $_x$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                />
                ⁠
                <Math>
                  $_y\,\!\!\!' = ($
                </Math>
                ⁠
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                />
                ⁠
                <Math>
                  $_y \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Okyf.svg"
                />
                ⁠
                <Math>
                  $_y\!\rt&#123;0.05&#125;)' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                />
                ⁠
                <Math>
                  $_y \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                />
                ⁠
                <Math>
                  $_y =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                />
                ⁠
                <Math>
                  $_y$
                </Math>
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              ...or...
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                />
                ⁠
                <Math>
                  $_x\,\!\!\!' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                />
                ⁠
                <Math>
                  $_x$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                />
                ⁠
                <Math>
                  $_y\,\!\!\!' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                />
                ⁠
                <Math>
                  $_y$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                />
                ⁠
                <Math>
                  $_x\,\!\!\!' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                />
                ⁠
                <Math>
                  $_x$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                />
                ⁠
                <Math>
                  $_y\,\!\!\!' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                />
                ⁠
                <Math>
                  $_y$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                />
                ⁠
                <Math>
                  $_x\,\!\!\!' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                />
                ⁠
                <Math>
                  $_x$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                />
                ⁠
                <Math>
                  $_y\,\!\!\!' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                />
                ⁠
                <Math>
                  $_y$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                />
                ⁠
                <Math>
                  $_x\,\!\!\!' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                />
                ⁠
                <Math>
                  $_x$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                />
                ⁠
                <Math>
                  $_y\,\!\!\!' =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                />
                ⁠
                <Math>
                  $_y$
                </Math>
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              ...cutting out the middle computation, so the constraints
              relating particle velocities to particle positions are
              satisfied (e.g., the velocity vector of the purple particle
              is the position vector of the yellow particle);
              for seconders, evaluating these definitions at {" "}
              <Math>
                $t = 0$
              </Math>
              {" "} gives...
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                />
                ⁠
                <Math>
                  $_x(0) =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                />
                ⁠
                <Math>
                  $_x(0) \,+$
                </Math>
                ⁠
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                />
                ⁠
                <Math>
                  $_x(0) = 2\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                />
                ⁠
                <Math>
                  $_x(0)$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                />
                ⁠
                <Math>
                  $_y(0) =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                />
                ⁠
                <Math>
                  $_y(0) \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/d2g_.svg"
                />
                ⁠
                <Math>
                  $_y(0) = 2\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                />
                ⁠
                <Math>
                  $_y(0)$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                />
                ⁠
                <Math>
                  $_x(0) =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                />
                ⁠
                <Math>
                  $_x(0) \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                />
                ⁠
                <Math>
                  $_x(0) = 2\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                />
                ⁠
                <Math>
                  $_x(0)$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                />
                ⁠
                <Math>
                  $_y(0) =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                />
                ⁠
                <Math>
                  $_y(0) \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/rDav.svg"
                />
                ⁠
                <Math>
                  $_y(0) = 2\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                />
                ⁠
                <Math>
                  $_y(0)$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                />
                ⁠
                <Math>
                  $_x(0) =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                />
                ⁠
                <Math>
                  $_x(0) \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/JFOc.svg"
                />
                ⁠
                <Math>
                  $_x(0) = 2\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                />
                ⁠
                <Math>
                  $_x(0)$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                />
                ⁠
                <Math>
                  $_y(0) =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                />
                ⁠
                <Math>
                  $_y(0) \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/JFOc.svg"
                />
                ⁠
                <Math>
                  $_y(0) = 2\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                />
                ⁠
                <Math>
                  $_y(0)$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                />
                ⁠
                <Math>
                  $_x(0) =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                />
                ⁠
                <Math>
                  $_x(0) \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Okyf.svg"
                />
                ⁠
                <Math>
                  $_x(0) = 2\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                />
                ⁠
                <Math>
                  $_x(0)$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                />
                ⁠
                <Math>
                  $_y(0) =$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                />
                ⁠
                <Math>
                  $_y(0) \,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Okyf.svg"
                />
                ⁠
                <Math>
                  $_y(0) = 2\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                />
                ⁠
                <Math>
                  $_y(0)$
                </Math>
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              ...or...
            </OuterP>
            <Pause />
            <CentralDisplay>
              <p>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                />
                ⁠
                <Math>
                  $_x(0) = 2\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                />
                ⁠
                <Math>
                  $_x(0)$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                />
                ⁠
                <Math>
                  $_y(0) = 2\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Fhlm.svg"
                />
                ⁠
                <Math>
                  $_y(0)$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                />
                ⁠
                <Math>
                  $_x(0) = 2\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                />
                ⁠
                <Math>
                  $_x(0)$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                />
                ⁠
                <Math>
                  $_y(0) = 2\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/jmDH.svg"
                />
                ⁠
                <Math>
                  $_y(0)$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                />
                ⁠
                <Math>
                  $_x(0) = 2\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                />
                ⁠
                <Math>
                  $_x(0)$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                />
                ⁠
                <Math>
                  $_y(0) = 2\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/ZI6P.svg"
                />
                ⁠
                <Math>
                  $_y(0)$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                />
                ⁠
                <Math>
                  $_x(0) = 2\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                />
                ⁠
                <Math>
                  $_x(0)$
                </Math>
              </p>
              <p class="indent-10">
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                />
                ⁠
                <Math>
                  $_y(0) = 2\,\,+$
                </Math>
                {" "} {" "}
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/YZSJ.svg"
                />
                ⁠
                <Math>
                  $_y(0)$
                </Math>
              </p>
            </CentralDisplay>
            <Pause />
            <OuterP>
              ...cutting out the middle computation, which is to
              say that the positions at time {" "}
              <Math>
                $t = 0$
              </Math>
              {" "} of our
              newly-defined particles {" "}
              <NoBreak>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                />
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                />
                ,
              </NoBreak>
              {" "} {" "}
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/build-img/svgo-svg/Ya08.svg"
              />
              {" "} and {" "}
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/build-img/svgo-svg/k4Y8.svg"
              />
              {" "} are the translate of the white particle
              positions at {" "}
              <Math>
                $t = 0$
              </Math>
              {" "} back up and to the right
              by the vector {" "}
              <Math>
                $(2, 4)$
              </Math>
              ⁠
              , which brings those
              positions back to the original positions of {" "}
              <NoBreak>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                />
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                />
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/Ya08.svg"
                />
                {" "} and {" "}
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/k4Y8.svg"
                />
              </NoBreak>
              {" "} as they appear in the problem statement! I.e.,
              our newly-defined particles {" "}
              <NoBreak>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                />
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                />
                ,
              </NoBreak>
              {" "} {" "}
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/build-img/svgo-svg/Ya08.svg"
              />
              {" "} and {" "}
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/build-img/svgo-svg/k4Y8.svg"
              />
              {" "} are in the desired place at {" "}
              <Math>
                $t = 0$
              </Math>
              ⁠
              !
            </OuterP>
            <OuterP class="indent-10">
              In other words, the proposed definitions of {" "}
              <NoBreak>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/9T47.svg"
                />
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <InlineImage
                  class="ch4_inline_blackwhite_particles"
                  src="/build-img/svgo-svg/6ZK8.svg"
                />
                ,
              </NoBreak>
              {" "} {" "}
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/build-img/svgo-svg/Ya08.svg"
              />
              {" "} and {" "}
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/build-img/svgo-svg/k4Y8.svg"
              />
              {" "} “work” in the sense of satisfying all the conditions
              of the problem statement, and are, indeed, the
              solution we seek.
            </OuterP>
            <OuterP class="indent-10">
              Qualitatively, this implies that the particles
              can be understood as four particles rotating at
              unit speed around a circle of radius {" "}
              <Math>
                $1$
              </Math>
              {" "} (the
              white particles) where the center of circle (the
              UNO particle) is moving at exponential rate along
              a half-line. In particular, the particles remain
              at constant distance from one another for all {" "}
              <Math>
                $t$
              </Math>
              ⁠
              ,
              whether that seems intuitive or not.
            </OuterP>
            <OuterP class="indent-10">
              Concretely,
              the particle trajectories
              end up like so, locally around {" "}
              <Math>
                $t = 0$
              </Math>
              ⁠
              :
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/KERt.svg" />
            <Pause />
            <OuterP>
              The above plot goes from {" "}
              <Math>
                $t = -5$
              </Math>
              {" "} to
              {" "}
              <Math>
                $t \approx 1$
              </Math>
              ⁠
              —winding further back in time would produce
              near-perfect counterclockwise circular motion,
              as the black particles rush up to {" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "}
              and come to a near-halt rather fast,
              leaving only the residual motion of the white
              particles!
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                When we said that, for {" "}
                <Math>
                  $t &gt; 0$
                </Math>
                ⁠
                , there ensues
              </OuterP>
              <Pause />
              <CentralDisplay>
                “a [kind of] four-particle explosion”
              </CentralDisplay>
              <Pause />
              <OuterP>
                in the first paragraph of the solution, the word
                “explosion” might be misleading, implying increased
                distances between the particles over time. This is
                not the case! (But we didn't know any better, back
                then.)
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                As half-mentioned in
                the solution to {" "}
                <NoBreak>
                  <InChapterLink
                    href="/article/chapter4#_67_hgi_"
                    class="handle-in-chapter-link"
                  >
                    Exercise 12
                  </InChapterLink>
                  ,
                </NoBreak>
                {" "}
                but might be worth emphasizing,
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                speed
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                is not the same thing as
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                velocity
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                because, specifically, speed is
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                distance per unit time
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                —a nonnegative number—whereas velocity is
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                displacement per unit time
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                —a vector-valued quantity. (Or {" "}
                <Math>
                  $\pm$
                </Math>
                ⁠
                -valued quantity
                in one dimension.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={24}>
          <ExerciseStatement id="_81_hgi_">
            <OuterP>
              <b>
                Exercise 24.
              </b>
              {" "}
              The function below is also the red
              curve from {" "}
              <NoBreak>
                <InChapterLink
                  href="/article/chapter4#_67_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 12
                </InChapterLink>
                ,
              </NoBreak>
              {" "} known as the
              {" "}
              <i>
                cosine function
              </i>
              {" "} (already encountered
              in {" "}
              <NoBreak>
                <a
                  href="/article/chapter3#_37_hgi_"
                  class="handle-out-chapter-link"
                >
                  Chapter 3, Exercise 7
                </a>
                ).
              </NoBreak>
              {" "}
              Knowing that this function is the {" "}
              <Math>
                $x$
              </Math>
              ⁠
              -coordinate of a
              point rotating at unit speed around a unit
              circle, what is an approximation to the
              circumference of a unit circle that one can
              deduce just by looking at the graph?
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/njEr.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Because the particle is going at unit speed the
              circumference of the unit circle is equal to the
              amount of time it takes the particle to complete one
              revolution of the circle. That is, for example, the
              length of this yellow interval:
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/KEtq.svg" />
            <Pause />
            <OuterP>
              From the graph, then, it seems as if the circumference
              of a unit circle is
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              \Large \approx 6.3
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              or thereabouts.
              However, this is not the “correct” answer—indeed, we can do
              a little better by noticing that the graph seems
              to go almost exactly through the point {" "}
              <Math>
                $(11, 0)$
              </Math>
              ⁠
              , a
              few units over to the right (!):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/htXO.svg" />
            <Pause />
            <OuterP>
              More particularly, this implies that
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              \Large 7
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              quarter-turns of the circle correspond to
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              \Large \approx 11
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              units of time, as each half-bump corresponds to a
              quarter-turn (if you think about it):
            </OuterP>
            <Pause />
            <Image src="/build-img/svgo-svg/9cV2.svg" />
            <Pause />
            <OuterP>
              So....
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              \Large &#123;11 \over 7&#125;
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              is an approximation to 
              the time it takes the particle to do one quarter-turn,
              i.e., an approximation to
              the quarter-circumference of the circle, and
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                \Large 4 \cdot &#123;11 \over 7&#125; = &#123;44 \over 7&#125; = 6.\overline&#123;285714&#125;
                $$
              </MathBlock>
            </Boxed>
            <OuterP>
              is an approximation to the full circumference of
              the unit circle,
              which is an approximation that
              ends up being about half-a-part-in-a-thousand too
              large (
              ⁠
              <Math>
                $0.040249943...\%$
              </Math>
              {" "}
              too large) (or just: “
              ⁠
              <Math>
                $0.00040249943...$
              </Math>
              {" "} too large”).
              (Whereas our initial approximation of
            </OuterP>
            ⁠
            <Pause />
            <MathBlock>
              $$
              \Large 6.3
              $$
            </MathBlock>
            <Pause />
            ⁠
            <OuterP>
              ends up being roughly half-a-part-in-one-hundred too large, {" "}
              <Math>
                $10$
              </Math>
              {" "} times worse!)
            </OuterP>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};