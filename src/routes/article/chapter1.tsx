import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Boxed  from "~/components/Boxed";
import { CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { Item, List }  from "~/components/List";
import { MathBlock, Math }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageRight, ImageLeft }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { SolutionNote, NoBreak, Pause, InTextWarning, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter1__() {
  return (
    <Article
      prevPage="/"
      nextPage=""
      pageNecessaryMargin={1500}
      maxElementWidth={1000}
      id="_7_hgi_"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            <span class="t-3003-c">
              cos and sin. (“cosine” and “sine”.)
              <span class="t-3003">
                ./src/content/ch5.wly:5:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            <span class="t-3003-c">
              note on calculators
              <span class="t-3003">
                ./src/content/ch5.wly:1721:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=exercises">
            <span class="t-3003-c">
              exercises
              <span class="t-3003">
                ./src/content/ch5^exercises/__parent.wly:1:1
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 1:">
        <span class="t-3003-c">
          The Trigonometric Functions
          <span class="t-3003">
            ./src/content/ch5__parent.wly:2:11
          </span>
        </span>
      </ArticleTitle>
      <Section
        work="ing"
        id="section-1"
      >
        <OuterP>
          <b>
            <span class="t-3003-c">
              Cos and Sin. (“Cosine” and “sine”.)
              <span class="t-3003">
                ./src/content/ch5.wly:5:6
              </span>
            </span>
          </b>
          {" "} We've
          already encountered the ‘cos’ function in 
          Exercise {" "}
          <InTextWarning>
            undefined handle at ch5.wly:7:5: _cosine_of_1000x_
          </InTextWarning>
          {" "} of Chapter {" "}
          <InTextWarning>
            undefined handle at ch5.wly:7:5: functions
          </InTextWarning>
          ,
          e.g.. It is the one that has this graph:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/hiZe.svg"
          local_url="./images/svg_ch5_ch_cosine.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            It has a close cousin named ‘sin’. While {" "}
            <span class="t-3003">
              ./src/content/ch5.wly:13:5
            </span>
          </span>
          <Math>
            $\cos(x)$
          </Math>
          {" "}
          “tops off” at {" "}
          <NoBreak>
            <Math>
              $x = 0$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $\sin(x)$
          </Math>
          {" "} goes diagonally through
          the point {" "}
          <NoBreak>
            <Math>
              $(0, 0)$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/fuoV.svg"
          local_url="./images/svg_ch5_ch_cosine_and_sine.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            As far as standard definitions go, {" "}
            <span class="t-3003">
              ./src/content/ch5.wly:20:5
            </span>
          </span>
          <Math>
            $\cos(x)$
          </Math>
          {" "}
          is the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <NoBreak>
            <Math>
              $x$
            </Math>
            <span class="t-3003-c">
              -coordinate
              <span class="t-3003">
                ./src/content/ch5.wly:23:10
              </span>
            </span>
          </NoBreak>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and {" "}
            <span class="t-3003">
              ./src/content/ch5.wly:25:5
            </span>
          </span>
          <Math>
            $\sin(x)$
          </Math>
          {" "} is the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <NoBreak>
            <Math>
              $y$
            </Math>
            <span class="t-3003-c">
              -coordinate
              <span class="t-3003">
                ./src/content/ch5.wly:27:10
              </span>
            </span>
          </NoBreak>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            of a point {" "}
            <span class="t-3003">
              ./src/content/ch5.wly:29:5
            </span>
          </span>
          <Math>
            $x$
          </Math>
          {" "} units counterclockwise from
          {" "}
          <Math>
            $(1, 0)$
          </Math>
          {" "} on the unit circle. (Nb: “a”
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            unit circle
            <span class="t-3003">
              ./src/content/ch5.wly:32:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a circle of radius {" "}
            <span class="t-3003">
              ./src/content/ch5.wly:34:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $1$
            </Math>
            ,
          </NoBreak>
          {" "} while “the” unit
          circle is the circle of radius {" "}
          <Math>
            $1$
          </Math>
          {" "} centered
          at {" "}
          <NoBreak>
            <Math>
              $(0, 0)$
            </Math>
            .)
          </NoBreak>
          {" "} For example, 
          one can see from the graphs 
          that {" "}
          <NoBreak>
            <Math>
              $\cos(&#123;1\over 2&#125;) \approx 0.9$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $\sin(&#123;1\over 2&#125;) \approx 0.5$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/aPyP.svg"
          local_url="./images/svg_ch5_ch_cosine_and_sine_@0.5_v2.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Per the definitions, the point half a
            <span class="t-3003">
              ./src/content/ch5.wly:44:5
            </span>
          </span>
          {" "}
          {" "}
          unit counterclockwise from {" "}
          <Math>
            $(1, 0)$
          </Math>
          {" "} on the unit
          circle has coordinates {" "}
          <Math>
            $\approx 0.9$
          </Math>
          {" "} in {" "}
          <Math>
            $x$
          </Math>
          {" "}
          and {" "}
          <Math>
            $\approx 0.5$
          </Math>
          {" "} in {" "}
          <Math>
            $y$
          </Math>
          {" "} (or actually 
          {" "}
          <Math>
            $0.87758...$
          </Math>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $0.47942...$
            </Math>
            ,
          </NoBreak>
          {" "} 
          it turns out, as we can know by
          a calculator equipped with ‘sin’ and ‘cos’):
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/SPMY.svg"
          local_url="./images/svg_ch5_ch_unit_circle_@0.5_smaller_v2.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            As a second example, the graphs indicate that
            <span class="t-3003">
              ./src/content/ch5.wly:56:5
            </span>
          </span>
          {" "}
          {" "}
          {" "}{" "}
          <NoBreak>
            <Math>
              $\sin(-3) \approx -0.2$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $\cos(-3) \approx -0.99$
          </Math>
          {" "}
          (or something very close to {" "}
          <NoBreak>
            <Math>
              $-1$
            </Math>
            ,
          </NoBreak>
          {" "} in any case):
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/T8lW.svg"
          local_url="./images/svg_ch5_ch_cosine_and_sine_@-3_v2.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Indeed, going {" "}
            <span class="t-3003">
              ./src/content/ch5.wly:63:5
            </span>
          </span>
          <Math>
            $-3$
          </Math>
          {" "} units counterclockwise—which
          means, going {" "}
          <Math>
            $3$
          </Math>
          {" "} units clockwise—on the unit
          circle, starting from {" "}
          <NoBreak>
            <Math>
              $(1, 0)$
            </Math>
            ,
          </NoBreak>
          {" "} brings us to a point
          with {" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -
          </NoBreak>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinates
          </NoBreak>
          {" "} of {" "}
          <Math>
            $\approx -0.2$
          </Math>
          {" "}
          and {" "}
          <Math>
            $\approx -0.99$
          </Math>
          {" "} respectively (or {" "}
          <Math>
            $-0.1411...$
          </Math>
          {" "}
          and {" "}
          <NoBreak>
            <Math>
              $-0.989992...$
            </Math>
            ,
          </NoBreak>
          {" "} to be exact, it turns out):
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/9Ygl.svg"
          local_url="./images/svg_ch5_ch_unit_circle_@-3_smaller.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            For a last example,
            <span class="t-3003">
              ./src/content/ch5.wly:73:5
            </span>
          </span>
          {" "}
          {" "}
          note that there appears
          to be a value of {" "}
          <Math>
            $x$
          </Math>
          {" "} near {" "}
          <NoBreak>
            <Math>
              $-1.6$
            </Math>
            ,
          </NoBreak>
          {" "} where {" "}
          <NoBreak>
            <Math>
              $\cos(x) = 0$
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <NoBreak>
            <Math>
              $\sin(x) = -1$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/BfG4.svg"
          local_url="./images/svg_ch5_ch_cosine_and_sine_@minus_eta_v2.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Some thought reveals that {" "}
            <span class="t-3003">
              ./src/content/ch5.wly:81:5
            </span>
          </span>
          {" "}
          {" "}
          such a value {" "}
          <Math>
            $x$
          </Math>
          {" "} does exist, and more precisely equals 
          {" "}
          <i>
            minus one-quarter the circumference
            of a unit circle
          </i>
          , because {" "}
          <Math>
            $(0, -1)$
          </Math>
          {" "} is
          one-quarter of the unit circle clockwise from {" "}
          <NoBreak>
            <Math>
              $(1, 0)$
            </Math>
            .
          </NoBreak>
          {" "}
          Note that one-quarter the circumference of a unit
          circle was estimated to be
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \approx &#123;11\over 7&#125; = 1.\overline&#123;571428&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            in Exercise {" "}
            <span class="t-3003">
              ./src/content/ch5.wly:93:5
            </span>
          </span>
          <InTextWarning>
            undefined handle at ch5.wly:93:5: _eta_approximation_from_cosine_graph_
          </InTextWarning>
          {" "} 
          of Chapter {" "}
          <InTextWarning>
            undefined handle at ch5.wly:94:5: functions
          </InTextWarning>
          {" "} (by direct inspection
          of the graph {" "}
          <NoBreak>
            <Math>
              $y = \cos(x)$
            </Math>
            ,
          </NoBreak>
          {" "} for that matter,
          which may or may not be cheating), which agrees
          with the visual estimate {" "}
          <NoBreak>
            <Math>
              $x \approx -1.6$
            </Math>
            .
          </NoBreak>
          {" "} (But
          that value would be namely {" "}
          <NoBreak>
            <Math>
              $x = -1.57...$
            </Math>
            ,
          </NoBreak>
          {" "} not
          {" "}
          <NoBreak>
            <Math>
              $x = -1.6$
            </Math>
            .)
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            In another possible definition,
            <span class="t-3003">
              ./src/content/ch5.wly:103:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(x)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is defined as the {" "}
            <span class="t-3003">
              ./src/content/ch5.wly:109:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinate
          </NoBreak>
          {" "} of a point that
          is {" "}
          <Math>
            $x$
          </Math>
          {" "} units counterclockwise from {" "}
          <Math>
            $(0, -1)$
          </Math>
          {" "} on
          the unit circle. In this case, {" "}
          <Math>
            $\sin(x)$
          </Math>
          {" "} and
          {" "}
          <Math>
            $\cos(x)$
          </Math>
          {" "} are both defined by {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinates:
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/h28T.svg"
          local_url="./images/svg_ch5_ch_unit_circle_with_new_definition.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            In more detail, if you tilt your head  sideways,
            <span class="t-3003">
              ./src/content/ch5.wly:117:5
            </span>
          </span>
          {" "}
          {" "}
          you will see that the {" "}
          <Math>
            $x$
          </Math>
          {" "} axis looks, from the
          vantage point of {" "}
          <NoBreak>
            <Math>
              $(0, -1)$
            </Math>
            ,
          </NoBreak>
          {" "} the same as the {" "}
          <Math>
            $y$
          </Math>
          {" "}
          axis looks from the vantage point of {" "}
          <NoBreak>
            <Math>
              $(1, 0)$
            </Math>
            .
          </NoBreak>
          {" "}
          So the old and new definitions of {" "}
          <Math>
            $\sin(x)$
          </Math>
          {" "} are
          equivalent! (👍👍)
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            In particular, {" "}
            <span class="t-3003">
              ./src/content/ch5.wly:124:5
            </span>
          </span>
          <Math>
            $\sin(x)$
          </Math>
          {" "} and {" "}
          <Math>
            $\cos(x)$
          </Math>
          {" "} can also
          be understood as the {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinates
          </NoBreak>
          {" "} of two
          particles on the unit circle such that the ‘sin’
          particle is one-quarter-turn behind the {" "}
          <NoBreak>
            ‘
            <Math>
              $\cos$
            </Math>
            ’
          </NoBreak>
          {" "}
          particle:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/5m2X.svg"
          local_url="./images/svg_ch5_ch_unit_circle_with_sin_and_cos_particles.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...to be contrasted with our first definition,
            <span class="t-3003">
              ./src/content/ch5.wly:133:5
            </span>
          </span>
          {" "}
          {" "}
          employing a single point projected onto
          two different axes:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/7839.svg"
          local_url="./images/svg_ch5_ch_unit_circle_with_sincos_particle.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            The second definition (former diagram) explains
            <span class="t-3003">
              ./src/content/ch5.wly:140:5
            </span>
          </span>
          {" "}
          {" "}
          why values of {" "}
          <Math>
            $\sin$
          </Math>
          {" "} lag a fixed amount behind
          values of {" "}
          <NoBreak>
            <Math>
              $\cos$
            </Math>
            .
          </NoBreak>
          {" "} (“Lagging” when you read the
          graphs from left to right.) It's because the ‘sin’
          particle follows in the trail blazed by the ‘cos’
          particle!
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
      <Section
        work="ing"
        id="section-2"
      >
        <OuterP>
          <b>
            <span class="t-3003-c">
              Note on calculators.
              <span class="t-3003">
                ./src/content/ch5.wly:1721:6
              </span>
            </span>
          </b>
          {" "}
          Your calculator has “degree mode” and
          “radian mode”. If your calculator tells
          you that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(1.57)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a number close to {" "}
            <span class="t-3003">
              ./src/content/ch5.wly:1730:5
            </span>
          </span>
          <NoBreak>
            <Math>
              $1$
            </Math>
            ,
          </NoBreak>
          {" "} instead of being
          a number close to {" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            ,
          </NoBreak>
          {" "} it means that your
          calculator is in “degree mode”—it has treated
          as {" "}
          <Math>
            $1.57$
          </Math>
          {" "} as a number of degrees, instead of
          as a number of radians! (Be sure, in any
          case, that you're in the mode that you want.)
        </OuterP>
      </Section>
      <Pause />
      <Exercises id="_6_hgi_">
        <Exercise
          work="ing"
          number={1}
        >
          <ExerciseStatement id="_1_hgi_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                What are the orthogonal (= perpendicular) {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_project_i_and_j_.wly:5:5
                </span>
              </span>
              {" "}
              {" "}
              projections of the
              vectors {" "}
              <NoBreak>
                <Math>
                  $(1, 0)$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $(0, 1)$
              </Math>
              {" "} 
              onto a {" "}
              <NoBreak>
                <Math>
                  $(-1, 1)$
                </Math>
                -ruler
              </NoBreak>
              {" "}
              placed at angle {" "}
              <Math>
                $\theta$
              </Math>
              {" "} in the unit circle?
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/QGG0.svg"
              local_url="./images/e5_project_i_and_j_statement.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (I.e., find the {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_project_i_and_j_.wly:14:5
                </span>
              </span>
              {" "}
              {" "}
              ruler-readings
              marked ‘1’ and ‘2’ above
              as a function of the angle {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                .)
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Solution 1.
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_project_i_and_j_.wly:21:10
                  </span>
                </span>
              </i>
              {" "} If we rotate the diagram by {" "}
              <Math>
                $-\theta$
              </Math>
              {" "}
              to align the ruler with the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis the new angles
              of the vectors are {" "}
              <Math>
                $-\theta$
              </Math>
              {" "} and {" "}
              <Math>
                $\eta - \theta$
              </Math>
              {" "}
              (changed from {" "}
              <Math>
                $0$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $\eta$
                </Math>
                ,
              </NoBreak>
              {" "} respectively):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/DHtw.svg"
              local_url="./images/e5_project_i_and_j_sol1.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The ruler-readings are therefore
                <span class="t-3003">
                  ./src/content/ch5^exercises/_project_i_and_j_.wly:29:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(-\theta) = \cos(\theta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/ch5^exercises/_project_i_and_j_.wly:33:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(\eta - \theta) = \sin(\theta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                respectively (in order ‘1’, ‘2’), making use of
                <span class="t-3003">
                  ./src/content/ch5^exercises/_project_i_and_j_.wly:38:9
                </span>
              </span>
              {" "}
              {" "}
              basic identities. (See the section “Identities with {" "}
              <NoBreak>
                <Math>
                  $\eta$
                </Math>
                ”
              </NoBreak>
              {" "}
              in this chapter.)
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Solution 2.
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_project_i_and_j_.wly:44:10
                  </span>
                </span>
              </i>
              {" "} 
              Recalling first...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/h28T.svg"
              local_url="./images/svg_ch5_ch_unit_circle_with_new_definition.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...this figure from the chapter, we note that
                <span class="t-3003">
                  ./src/content/ch5^exercises/_project_i_and_j_.wly:50:9
                </span>
              </span>
              {" "}
              {" "}
              there is an alternate
              set of definitions for sin and cos that is 
              based on clockwise instead of counterclockwise rotation:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/9QAk.svg"
              local_url="./images/e5_project_i_and_j_sol2.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Now comparing this set of definitions to
                <span class="t-3003">
                  ./src/content/ch5^exercises/_project_i_and_j_.wly:58:9
                </span>
              </span>
              {" "}
              {" "}
              this figure...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/__cS.svg"
              local_url="./images/e5_project_i_and_j_sol3.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...in which, by contrast to usual, angles are measured
                <span class="t-3003">
                  ./src/content/ch5^exercises/_project_i_and_j_.wly:64:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                positively clockwise
                <span class="t-3003">
                  ./src/content/ch5^exercises/_project_i_and_j_.wly:66:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (that's why it's {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_project_i_and_j_.wly:68:9
                </span>
              </span>
              <NoBreak>
                “
                <Math>
                  $\theta$
                </Math>
                ”
              </NoBreak>
              {" "} not {" "}
              <NoBreak>
                “
                <Math>
                  $-\theta$
                </Math>
                ”)
              </NoBreak>
              {" "} 
              it becomes trivial to see that the two ruler-readings
              are just {" "}
              <Math>
                $\cos(\theta)$
              </Math>
              {" "} (‘1’) and {" "}
              <Math>
                $\sin(\theta)$
              </Math>
              {" "} (‘2’).
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Solution 3.
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_project_i_and_j_.wly:74:10
                  </span>
                </span>
              </i>
              {" "} 
              More generally, when a unit
              vector is projected onto a “unit ruler”,
              we can switch the ruler {" "}
              <i>
                &amp;
              </i>
              {" "} vector positions
              without affecting the ruler-reading:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/5XuI.svg"
              local_url="./images/e5_project_i_and_j_sol4.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (Because what counts is the angle between the
                <span class="t-3003">
                  ./src/content/ch5^exercises/_project_i_and_j_.wly:83:9
                </span>
              </span>
              {" "}
              {" "}
              “forward end” of the ruler and the forward end of
              the vector, measured as an angle between {" "}
              <Math>
                $0^\circ$
              </Math>
              {" "}
              and {" "}
              <NoBreak>
                <Math>
                  $180^\circ$
                </Math>
                ,
              </NoBreak>
              {" "} and this angle remains the same.)
              If we apply this to the problem statement
              the unique ruler is replaced by a unique vector
              while the two vectors are each replaced by a ruler:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Xur8.svg"
              local_url="./images/e5_project_i_and_j_sol5_v2.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and in the new configuration, at bottom right, it is {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_project_i_and_j_.wly:97:9
                </span>
              </span>
              {" "}
              {" "}
              trivial to see 
              that the answers are {" "}
              <Math>
                $\cos(\theta)$
              </Math>
              {" "} (‘1’),
              {" "}
              <Math>
                $\sin(\theta)$
              </Math>
              {" "} (‘2’)!
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise
          work="ing"
          number={2}
        >
          <ExerciseStatement id="_2_hgi_">
            <OuterP>
              <b>
                Exercise 2.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Show that
                <span class="t-3003">
                  ./src/content/ch5^exercises/_unit_dot_product_geometric_interpretation_.wly:5:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(\alpha - \beta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                equals
                <span class="t-3003">
                  ./src/content/ch5^exercises/_unit_dot_product_geometric_interpretation_.wly:9:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos\alpha\cos\beta + \sin\alpha\sin\beta
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for all {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_unit_dot_product_geometric_interpretation_.wly:13:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\alpha$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\beta \in \rr$
              </Math>
              {" "}
              via a geometric argument.
              (I.e., AVOID using the angle-sum formula.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                We know (or should know, or are about to
                <span class="t-3003">
                  ./src/content/ch5^exercises/_unit_dot_product_geometric_interpretation_.wly:19:9
                </span>
              </span>
              {" "}
              {" "}
              know) (or are about to {" "}
              <i>
                believe
              </i>
              ) that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(\alpha - \beta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is the projection of a unit vector of angle
                <span class="t-3003">
                  ./src/content/ch5^exercises/_unit_dot_product_geometric_interpretation_.wly:26:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <Math>
                $\alpha$
              </Math>
              {" "} onto a ruler of angle {" "}
              <NoBreak>
                <Math>
                  $\beta$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/k70-.svg"
              local_url="./images/e5_unit_dot_product_sol1_v2.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                In what follows we will write {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_unit_dot_product_geometric_interpretation_.wly:32:9
                </span>
              </span>
              <NoBreak>
                ‘
                <Math>
                  $\vecb&#123;i&#125;$
                </Math>
                ’
              </NoBreak>
              {" "}
              and {" "}
              <NoBreak>
                ‘
                <Math>
                  $\vecb&#123;j&#125;$
                </Math>
                ’,
              </NoBreak>
              {" "} respectively, for the vectors
              {" "}
              <Math>
                $(1, 0)$
              </Math>
              {" "} and {" "}
              <Math>
                $(0, 1)$
              </Math>
              {" "} (in the manner of physicists):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/EWAA.svg"
              local_url="./images/e5_unit_dot_product_sol2.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                As established in {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_unit_dot_product_geometric_interpretation_.wly:39:9
                </span>
              </span>
              <InChapterLink
                href="/article/chapter1#_1_hgi_"
                class="handle-in-chapter-link"
              >
                Exercise 1
              </InChapterLink>
              {" "}
              {" "}
              <Math>
                $\vecb&#123;i&#125;$
              </Math>
              {" "} and {" "}
              <Math>
                $\vecb&#123;j&#125;$
              </Math>
              {" "} project to {" "}
              <NoBreak>
                <Math>
                  $\cos\beta$
                </Math>
                ,
              </NoBreak>
              {" "}
              {" "}
              <Math>
                $\sin\beta$
              </Math>
              {" "} respectively on the ruler:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/rAlI.svg"
              local_url="./images/e5_unit_dot_product_sol3_v2.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                On the other hand, the vector {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_unit_dot_product_geometric_interpretation_.wly:46:9
                </span>
              </span>
              <Math>
                $(\cos\alpha, \sin\alpha)$
              </Math>
              {" "}
              is the sum of a scaled copy of {" "}
              <Math>
                $\vecb&#123;i&#125;$
              </Math>
              {" "} and
              scaled copy of {" "}
              <NoBreak>
                <Math>
                  $\vecb&#123;j&#125;$
                </Math>
                ,
              </NoBreak>
              {" "}  specifically the sum of
              {" "}
              <Math>
                $\vecb&#123;i&#125;\cdot\cos(\alpha)$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $\vecb&#123;j&#125;\cdot\sin(\alpha)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/q8lI.svg"
              local_url="./images/e5_unit_dot_product_sol5_v2.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The scaled copy of {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_unit_dot_product_geometric_interpretation_.wly:54:9
                </span>
              </span>
              <Math>
                $\vecb&#123;i&#125;$
              </Math>
              {" "} projects to
              {" "}
              <Math>
                $\cos(\alpha)\cdot\cos(\beta)$
              </Math>
              {" "} on the ruler, 
              by scaling the projection of {" "}
              <NoBreak>
                <Math>
                  $\vecb&#123;i&#125;$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/vjt3.svg"
              local_url="./images/e5_unit_dot_product_sol6_v2.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Similarly, the scaled copy of {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_unit_dot_product_geometric_interpretation_.wly:61:9
                </span>
              </span>
              <Math>
                $\vecb&#123;j&#125;$
              </Math>
              {" "} projects
              to {" "}
              <NoBreak>
                <Math>
                  $\sin(\alpha)\cdot\sin(\beta)$
                </Math>
                ,
              </NoBreak>
              {" "} by scaling the
              projection of {" "}
              <NoBreak>
                <Math>
                  $\vecb&#123;j&#125;$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/KjPQ.svg"
              local_url="./images/e5_unit_dot_product_sol7_v2.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Moreover, the sum-of-projections is the
                <span class="t-3003">
                  ./src/content/ch5^exercises/_unit_dot_product_geometric_interpretation_.wly:68:9
                </span>
              </span>
              {" "}
              {" "}
              projection-of-the-sum:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/cfa7.svg"
              local_url="./images/e5_unit_dot_product_sol8_v2.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                This gives us
                <span class="t-3003">
                  ./src/content/ch5^exercises/_unit_dot_product_geometric_interpretation_.wly:74:9
                </span>
              </span>
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                \cos(\alpha-\beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta
                $$
              </MathBlock>
            </Boxed>
            <OuterP>
              <span class="t-3003-c">
                since both sides compute the projection of
                <span class="t-3003">
                  ./src/content/ch5^exercises/_unit_dot_product_geometric_interpretation_.wly:81:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <Math>
                $(\cos \alpha, \sin \alpha)$
              </Math>
              {" "} onto the ruler of angle {" "}
              <NoBreak>
                <Math>
                  $\beta$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise
          work="ing"
          number={3}
        >
          <ExerciseStatement id="_3_hgi_">
            <OuterP>
              <b>
                Exercise 3.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Which function is most plausibly associated to
                <span class="t-3003">
                  ./src/content/ch5^exercises/_four_graphs_.wly:5:5
                </span>
              </span>
              {" "}
              {" "}
              which graph?
            </OuterP>
            <Pause />
            <table
              class="slice"
              style="border-collapse:collapse;font-size:100%;text-align:center;margin:auto;margin-top:1em;margin-bottom:1.5em;"
            >
              <colgroup>
                <col width={200} />
                <col width={200} />
              </colgroup>
              <tbody>
                <tr style="border-bottom:1px solid black;">
                  <td style="padding:0.5em 0;border-right:1px solid black">
                    <Math>
                      $x \ra \sin x \cdot \cos x$
                    </Math>
                  </td>
                  <td style="padding:0.5em 0;">
                    <Math>
                      $x \ra \cos^2 x$
                    </Math>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0.5em 0;border-right:1px solid black">
                    <Math>
                      $x \ra \sin^2 x$
                    </Math>
                  </td>
                  <td style="padding:0.5em 0;">
                    <Math>
                      $x \ra \sin x + \cos x$
                    </Math>
                  </td>
                </tr>
              </tbody>
            </table>
            <Pause />
            <Image
              src="/build-img/svgo-svg/huBu.svg"
              local_url="./images/svg_ch5_ex_four_graphs.svg"
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Since
                <span class="t-3003">
                  ./src/content/ch5^exercises/_four_graphs_.wly:40:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra \sin^2 x
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              x \ra \cos^2 x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                are nonnegative [the square of a number
                <span class="t-3003">
                  ./src/content/ch5^exercises/_four_graphs_.wly:47:9
                </span>
              </span>
              {" "}
              {" "}
              is nonnegative]
              these functions must either be
              the top right or bottom left graphs, as the
              other two graphs weave in and out of negative territory;
              given additionally that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \,\cos(0) = 1,
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \sin(0) = 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                we can further deduce that
                <span class="t-3003">
                  ./src/content/ch5^exercises/_four_graphs_.wly:59:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra \sin^2 x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                can only be the top right graph, and
                <span class="t-3003">
                  ./src/content/ch5^exercises/_four_graphs_.wly:63:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra \cos^2 x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                can only be the bottom left graph; moreover, since
                <span class="t-3003">
                  ./src/content/ch5^exercises/_four_graphs_.wly:67:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              |\sin x \cdot \cos x| \leq 1
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for all {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_four_graphs_.wly:71:9
                </span>
              </span>
              <Math>
                $x \in \rr$
              </Math>
              {" "} (as the product of
              two numbers that are between {" "}
              <Math>
                $-1$
              </Math>
              {" "} and {" "}
              <Math>
                $1$
              </Math>
              {" "} is
              itself between {" "}
              <Math>
                $-1$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ),
              </NoBreak>
              {" "} whereas the
              top left graph is at times greater than {" "}
              <Math>
                $1$
              </Math>
              {" "}
              and at times less than {" "}
              <NoBreak>
                <Math>
                  $-1$
                </Math>
                ,
              </NoBreak>
              {" "}
              the last standing possibility is...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Ninz.svg"
              local_url="./images/svg_ch5_ex_four_graphs_labeled.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...this one!
                <span class="t-3003">
                  ./src/content/ch5^exercises/_four_graphs_.wly:82:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  These are in fact the actual graphs of
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_four_graphs_.wly:85:13
                  </span>
                </span>
                {" "}
                {" "}
                the stated functions, not just “plausible” graphs.
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  It is
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_four_graphs_.wly:89:13
                  </span>
                </span>
                {" "}
                {" "}
                indeed quite striking that all of these
                functions seem to be {" "}
                <i>
                  sinusoids
                </i>
                , given the
                appearance of their graphs. (A “sinusoid” is 
                formally defined as a function of the form
                {" "}
                <Math>
                  $x \ra A\cdot \sin(Bx + C) + D$
                </Math>
                {" "} for some 
                constants {" "}
                <NoBreak>
                  <Math>
                    $A$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $B$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $C$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $D \in \rr$
                  </Math>
                  .)
                </NoBreak>
                {" "}
                There is {" "}
                <i>
                  a priori
                </i>
                {" "} no good reason for this.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise
          work="ing"
          number={4}
        >
          <ExerciseStatement id="_4_hgi_">
            <OuterP>
              <b>
                Exercise 4.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Based on the graphs of {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:5:5
                </span>
              </span>
              <NoBreak>
                <InChapterLink
                  href="/article/chapter1#_3_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 3
                </InChapterLink>
                ,
              </NoBreak>
              {" "}
              or some other logic,
              does it seem more likely that 
              {" "}
              <NoBreak>
                <Math>
                  $x \ra \cos^2 x$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $x \ra \sin^2 x$
              </Math>
              {" "} and {" "}
              <Math>
                $x \ra \cos x\sin x$
              </Math>
              {" "} 
              are more closely related to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(x/2)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and/or {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:13:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\cos(x/2)$
                </Math>
                ,
              </NoBreak>
              {" "}
              or to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(2x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and/or {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:18:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\cos(2x)$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                One can see from the graphs of {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:22:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\cos^2$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\sin^2$
              </Math>
              {" "}
              and {" "}
              <Math>
                $\sin\cdot\cos$
              </Math>
              {" "} that these functions cycle “twice as
              fast” as sine or cosine, just like {" "}
              <Math>
                $x \ra \sin(2x)$
              </Math>
              {" "}
              and {" "}
              <Math>
                $x\ra \cos(2x)$
              </Math>
              {" "} cycle twice as fast. The answer is
              therefore: the latter. (I.e., {" "}
              <NoBreak>
                “
                <Math>
                  $\sin(2x)$
                </Math>
              </NoBreak>
              {" "} and/or {" "}
              <NoBreak>
                <Math>
                  $\cos(2x)$
                </Math>
                ”.)
              </NoBreak>
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  More mathematically, say that {" "}
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:32:13
                  </span>
                </span>
                <Math>
                  $f : \rr \ra \rr$
                </Math>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  has period {" "}
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:34:15
                  </span>
                </span>
                <Math>
                  $T$
                </Math>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  or
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:36:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  is periodic mod {" "}
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:38:15
                  </span>
                </span>
                <Math>
                  $T$
                </Math>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  for some number {" "}
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:40:13
                  </span>
                </span>
                <Math>
                  $T \in \rr$
                </Math>
                {" "} if
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                f(x + T) = f(x)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  for all {" "}
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:46:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $x \in \dom f$
                  </Math>
                  .
                </NoBreak>
                {" "} Then {" "}
                <NoBreak>
                  <Math>
                    $\sin$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $\cos$
                </Math>
                {" "} are
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  periodic mod {" "}
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:48:15
                  </span>
                </span>
                <Math>
                  $4\eta$
                </Math>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  while {" "}
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:50:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $\sin^2$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $\cos^2$
                </Math>
                {" "} and {" "}
                <Math>
                  $\sin\cos$
                </Math>
                {" "} are not
                only periodic mod {" "}
                <Math>
                  $4\eta$
                </Math>
                {" "} but accomplish the further
                feat of being
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  periodic mod {" "}
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:54:15
                  </span>
                </span>
                <Math>
                  $2\eta$
                </Math>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  since, for example,
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:56:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \sin(x + 2\eta)\cos(x + 2\eta) = (-\sin(x))(-\cos(x)) = \sin x\cos x
                $$
                <ImageLeft
                  src="/tmp-images/e5_more_closely_related_to_sin2x_or_left_2eta_cloud.svg"
                  compensate_offset_x_for_large_text_columns={true}
                  local_url="./public/tmp-images/e5_more_closely_related_to_sin2x_or_left_2eta_cloud.svg"
                />
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  for all {" "}
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_more_closely_related_to_sin2x_or_.wly:66:13
                  </span>
                </span>
                <NoBreak>
                  <Math>
                    $x \in \rr$
                  </Math>
                  ,
                </NoBreak>
                {" "} which establishes the periodicity of {" "}
                <Math>
                  $\sin\cdot\cos$
                </Math>
                {" "} mod
                {" "}
                <NoBreak>
                  <Math>
                    $2\eta$
                  </Math>
                  ,
                </NoBreak>
                {" "} etc.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise
          work="ing"
          number={5}
        >
          <ExerciseStatement id="_5_hgi_">
            <OuterP>
              <b>
                Exercise 5.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                For each of {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:5:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\cos^2$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $\sin^2$
                </Math>
                ,
              </NoBreak>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $\sin\cdot\cos$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <List type="decimal">
              <Item>
                <p>
                  <span class="t-3003-c">
                    Choose either {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_more_closely_related_followup_.wly:10:9
                    </span>
                  </span>
                  <Math>
                    $\cos(2x)$
                  </Math>
                  <span class="t-3003-c">
                    {" "} or {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_more_closely_related_followup_.wly:10:33
                    </span>
                  </span>
                  <Math>
                    $\sin(2x)$
                  </Math>
                  <span class="t-3003-c">
                    {" "} as a
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_more_closely_related_followup_.wly:10:47
                    </span>
                  </span>
                  {" "}
                  {" "}
                  “most closely related starting point”, according
                  to your sense of which of {" "}
                  <Math>
                    $\cos(2x)$
                  </Math>
                  <span class="t-3003-c">
                    {" "} or {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_more_closely_related_followup_.wly:12:45
                    </span>
                  </span>
                  <Math>
                    $\sin(2x)$
                  </Math>
                  {" "}{" "}
                  {" "}
                  {" "}
                  <span class="t-3003-c">
                    is more closely related to the given function.
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_more_closely_related_followup_.wly:13:9
                    </span>
                  </span>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    Conjecture a sequence of geometric transformations
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_more_closely_related_followup_.wly:15:9
                    </span>
                  </span>
                  {" "}
                  {" "}
                  of the plane that takes either {" "}
                  <Math>
                    $\cos(2x)$
                  </Math>
                  <span class="t-3003-c">
                    {" "} or {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_more_closely_related_followup_.wly:16:50
                    </span>
                  </span>
                  <NoBreak>
                    <Math>
                      $\sin(2x)$
                    </Math>
                    <span class="t-3003-c">
                      ,
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_more_closely_related_followup_.wly:16:64
                      </span>
                    </span>
                  </NoBreak>
                  {" "}{" "}
                  {" "}
                  {" "}
                  <span class="t-3003-c">
                    depending on which you chose,
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_more_closely_related_followup_.wly:17:9
                    </span>
                  </span>
                  {" "}
                  {" "}
                  onto the graph of the given function (be it {" "}
                  <NoBreak>
                    <Math>
                      $\cos\sin$
                    </Math>
                    <span class="t-3003-c">
                      ,
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_more_closely_related_followup_.wly:19:63
                      </span>
                    </span>
                  </NoBreak>
                  {" "}
                  {" "}
                  <NoBreak>
                    <Math>
                      $\cos^2$
                    </Math>
                    <span class="t-3003-c">
                      ,
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_more_closely_related_followup_.wly:20:17
                      </span>
                    </span>
                  </NoBreak>
                  <span class="t-3003-c">
                    {" "} or {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_more_closely_related_followup_.wly:20:17
                    </span>
                  </span>
                  <NoBreak>
                    <Math>
                      $\sin^2$
                    </Math>
                    <span class="t-3003-c">
                      ).
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_more_closely_related_followup_.wly:20:30
                      </span>
                    </span>
                  </NoBreak>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    Prove your conjecture by algebra.
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_more_closely_related_followup_.wly:22:9
                    </span>
                  </span>
                </p>
              </Item>
            </List>
            <Pause />
            <Image
              src="/tmp-images/e5_more_closely_related_followup_reference_graphs.svg"
              local_url="./public/tmp-images/e5_more_closely_related_followup_reference_graphs.svg"
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                For {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:29:9
                </span>
              </span>
              <Math>
                $\cos^2$
              </Math>
              {" "} we take
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(2x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as our starting point, since the graph of {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:35:9
                </span>
              </span>
              <Math>
                $\cos(2x)$
              </Math>
              {" "}
              seems more closely related to the graph of {" "}
              <Math>
                $\cos^2(x)$
              </Math>
              {" "}
              than {" "}
              <Math>
                $\sin(2x)$
              </Math>
              {" "} is, by virtue of alignment of the bumps:
            </OuterP>
            <Pause />
            <Image
              src="/tmp-images/e5_more_closely_related_followup_sol1.svg"
              local_url="./public/tmp-images/e5_more_closely_related_followup_sol1.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Our conjecture, per appearance of the graphs, is that
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:42:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <Math>
                $\cos^2$
              </Math>
              {" "} is the graph of {" "}
              <NoBreak>
                <Math>
                  $\cos(2x)$
                </Math>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                translated up by {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:45:11
                </span>
              </span>
              <NoBreak>
                <Math>
                  $1$
                </Math>
                <span class="t-3003-c">
                  ,
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_more_closely_related_followup_.wly:45:31
                  </span>
                </span>
              </NoBreak>
              <span class="t-3003-c">
                {" "} vertically
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:45:31
                </span>
              </span>
              {" "}
              {" "}
              scaled by {" "}
              <Math>
                $1/2$
              </Math>
              <ImageRight
                src="/tmp-images/e5_more_closely_related_followup_cloud1.svg"
                local_url="./public/tmp-images/e5_more_closely_related_followup_cloud1.svg"
              />
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...or is the graph of {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:51:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\cos(2x)$
                </Math>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                vertically scaled by {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:53:11
                </span>
              </span>
              <NoBreak>
                <Math>
                  $1/2$
                </Math>
                <span class="t-3003-c">
                  ,
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_more_closely_related_followup_.wly:53:37
                  </span>
                </span>
              </NoBreak>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                translated up by {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:54:9
                </span>
              </span>
              <Math>
                $1/2$
              </Math>
              <ImageLeft
                src="/tmp-images/e5_more_closely_related_followup_cloud2.svg"
                local_url="./public/tmp-images/e5_more_closely_related_followup_cloud2.svg"
              />
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...equivalently; for the proof,
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:59:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(A + B) = \cos A\cos B - \sin A\sin B
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                implies
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:67:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(2x) = \cos^2 x - \sin^2 x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by putting {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:73:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $A = B = x$
                </Math>
                ,
              </NoBreak>
              {" "} from which
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;aligned&#125;
              \phantom&#123;=&#125;&amp;\,\,(\cos(2x) + 1)\cdot &#123;1\over 2&#125; \\
              =&amp;\,\,\up&#123;1.4&#125;(\cos^2 x - \sin^2 x + 1)\cdot &#123;1\over 2&#125; \\
              =&amp;\,\,\up&#123;1.4&#125;(\cos^2 x + \cos^2 x)\cdot &#123;1\over 2&#125; \\
              =&amp;\,\,\up&#123;1.4&#125;\cos^2 x
              \end&#123;aligned&#125;
              $$
              <ImageLeft
                src="/tmp-images/e5_more_closely_related_followup_cloud4.svg"
                offset_y="1.3em"
                compensate_offset_x_for_large_text_columns={true}
                local_url="./public/tmp-images/e5_more_closely_related_followup_cloud4.svg"
              />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which completes the proof, since
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:88:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (\cos(2x) + 1)\cdot &#123;1\over 2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:90:9
                </span>
              </span>
              <Math>
                $\cos(2x)$
              </Math>
              {" "} translated up by {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} scaled
              vertically by {" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 2&#125;$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                For {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:93:9
                </span>
              </span>
              <Math>
                $\sin^2$
              </Math>
              {" "} we can similarly conjecture that
              {" "}
              <Math>
                $\sin^2$
              </Math>
              {" "} is the graph of {" "}
              <NoBreak>
                <Math>
                  $\cos(2x)$
                </Math>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                vertically scaled by {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:96:11
                </span>
              </span>
              <NoBreak>
                <Math>
                  $-1/2$
                </Math>
                <span class="t-3003-c">
                  ,
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_more_closely_related_followup_.wly:96:38
                  </span>
                </span>
              </NoBreak>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                translated up by {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:97:9
                </span>
              </span>
              <Math>
                $1/2$
              </Math>
              <ImageLeft
                src="/tmp-images/e5_more_closely_related_followup_cloud3.svg"
                local_url="./public/tmp-images/e5_more_closely_related_followup_cloud3.svg"
              />
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and, indeed,
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:102:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;aligned&#125;
              \phantom&#123;=&#125;&amp;\,\,-&#123;1\over 2&#125;\cos(2x) + &#123;1\over 2&#125;\\
              =&amp;\,\,\up&#123;1.4&#125;-&#123;1\over 2&#125;(\cos^2 x - \sin^2 x) + &#123;1\over 2&#125;\\
              =&amp;\,\,\up&#123;1.4&#125;&#123;1\over 2&#125;\sin^2 x + &#123;1\over 2&#125;(1 - \cos^2 x)\\
              =&amp;\,\,\up&#123;1.4&#125;&#123;1\over 2&#125;\sin^2 x + &#123;1\over 2&#125;\sin^2 x\\
              =&amp;\,\,\up&#123;1.4&#125;\sin^2 x
              \end&#123;aligned&#125;
              $$
              <ImageLeft
                src="/tmp-images/e5_more_closely_related_followup_cloud5.svg"
                offset_y="0.2em"
                compensate_offset_x_for_large_text_columns={true}
                local_url="./public/tmp-images/e5_more_closely_related_followup_cloud5.svg"
              />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as conjectured.
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:118:9
                </span>
              </span>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                For {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:120:9
                </span>
              </span>
              <Math>
                $\sin\cdot\cos$
              </Math>
              {" "} it seems that {" "}
              <Math>
                $\sin(2x)$
              </Math>
              {" "} is
              more closely related:
            </OuterP>
            <Pause />
            <Image
              src="/tmp-images/e5_more_closely_related_followup_sol3.svg"
              local_url="./public/tmp-images/e5_more_closely_related_followup_sol3.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Indeed, it seems that {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:126:9
                </span>
              </span>
              <Math>
                $\sin\cdot\cos$
              </Math>
              {" "} is just {" "}
              <Math>
                $y = \sin(2x)$
              </Math>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                vertically scaled by {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:128:11
                </span>
              </span>
              <Math>
                $1/2$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which, indeed {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:130:9
                </span>
              </span>
              <NoBreak>
                (
                <Math>
                  $\times 2$
                </Math>
                ),
              </NoBreak>
              {" "} can be verified from the fact that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(A + B) = \cos A\sin B + \sin A\cos B
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                implies
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:136:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(2x) = 2\sin x\cos x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by setting {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:142:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $A = B = x$
                </Math>
                ,
              </NoBreak>
              {" "} which implies
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over 2&#125;\sin(2x) = \sin x\cos x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                matching the conjecture.
                <span class="t-3003">
                  ./src/content/ch5^exercises/_more_closely_related_followup_.wly:148:9
                </span>
              </span>
            </OuterP>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};