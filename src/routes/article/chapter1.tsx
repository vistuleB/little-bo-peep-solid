import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { Math, MathBlock }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import Solution  from "~/components/Solution";
import { StarDivider }  from "~/components/StarDivider";
import { SolutionNote, InTextWarning, NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter1__() {
  return (
    <Article
      prevPage="/"
      nextPage=""
      pageNecessaryMargin={950}
      maxElementWidth={1000}
      id="_4_hgi_"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            <span class="t-3003-c">
              note on calculators
              <span class="t-3003">
                ./src/content/ch5.wly:1719:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
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
              Note on calculators.
              <span class="t-3003">
                ./src/content/ch5.wly:1719:6
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
          <span class="t-3003">
            ./src/content/ch5.wly:1724:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a number close to {" "}
            <span class="t-3003">
              ./src/content/ch5.wly:1728:5
            </span>
          </span>
          <NoBreak>
            <span class="t-3003-c">
              <Math>
                $1$
              </Math>
              <span class="t-3003">
                ./src/content/ch5.wly:1728:26
              </span>
            </span>
            ,
          </NoBreak>
          {" "} instead of being
          a number close to {" "}
          <NoBreak>
            <span class="t-3003-c">
              <Math>
                $0$
              </Math>
              <span class="t-3003">
                ./src/content/ch5.wly:1729:23
              </span>
            </span>
            ,
          </NoBreak>
          {" "} it means that your
          calculator is in “degree mode”—it has treated
          as {" "}
          <span class="t-3003-c">
            <Math>
              $1.57$
            </Math>
            <span class="t-3003">
              ./src/content/ch5.wly:1731:8
            </span>
          </span>
          {" "} as a number of degrees, instead of
          as a number of radians! (Be sure, in any
          case, that you're in the mode that you want.)
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
      <Exercises id="_3_hgi_">
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
                If {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:5:5
                </span>
              </span>
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $0$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:5:8
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $1$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:5:13
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} and a value {" "}
              <span class="t-3003-c">
                <Math>
                  $A &gt; 1$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:5:30
                </span>
              </span>
              {" "} are marked
              on a line...
            </OuterP>
            <Pause />
            <Image
              style="margin-top:0.8em;margin-bottom:0.8em;"
              src="/build-img/svgo-svg/j4h0.svg"
              local_url="./images/e5_line_with_0_1_and_A.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...how can we find the placement of...
                <span class="t-3003">
                  ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:12:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              1 / A
              $$
              <span class="t-3003">
                ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:14:5
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...on the same line by a purely geometric construction?
                <span class="t-3003">
                  ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:18:5
                </span>
              </span>
              {" "}
              {" "}
              What about if {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $0 &lt; A &lt; 1$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:19:19
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $-1 &lt; A &lt; 0$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:19:32
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} etc?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The basic idea of the solution is to find
                <span class="t-3003">
                  ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:23:9
                </span>
              </span>
              {" "}
              {" "}
              an angle {" "}
              <span class="t-3003-c">
                <Math>
                  $\theta$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:24:18
                </span>
              </span>
              {" "} such that {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $A = \sec(\theta)$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:24:37
                  </span>
                </span>
                ,
              </NoBreak>
              {" "}
              if {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $|A| &gt; 1$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:25:12
                  </span>
                </span>
                ,
              </NoBreak>
              {" "}
              or symmetrically, such that {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $A = \cos(\theta)$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:26:37
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} if {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $|A| &lt; 1$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:26:60
                  </span>
                </span>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/kxTm.svg"
              local_url="./images/e5_line_with_0_1_and_A_and_secant.svg"
            />
            <Pause />
            <Image
              src="/build-img/svgo-svg/ryx0.svg"
              local_url="./images/e5_line_with_0_1_and_A_and_cos.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (Cf. Exercise {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:36:9
                </span>
              </span>
              <InTextWarning>
                undefined handle at ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:36:9: _secant_cosecant_intersections_
              </InTextWarning>
              .)
              We now proceed with
              step-by-step
              compass-and-ruler 
              instructions for the two cases:
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                ~ ~ case {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:42:11
                </span>
              </span>
              <span class="t-3003-c">
                <Math>
                  $|A| &gt; 1$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:42:20
                </span>
              </span>
              <span class="t-3003-c">
                {" "} ~ ~
                <span class="t-3003">
                  ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:42:29
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Step 1.
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:44:10
                  </span>
                </span>
              </i>
              {" "} Find the midpoint between {" "}
              <span class="t-3003-c">
                <Math>
                  $0$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:44:45
                </span>
              </span>
              {" "} and {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $A$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:44:53
                  </span>
                </span>
                ;
              </NoBreak>
              {" "} for
              this, the procedure is to use two circles of equal radius:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/JM7s.svg"
              local_url="./images/e5_line_with_0_1_and_A_Agt1_step1.svg"
            />
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Step 2.
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:50:10
                  </span>
                </span>
              </i>
              {" "} Draw a semicircle of radius {" "}
              <span class="t-3003-c">
                <Math>
                  $A/2$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:50:47
                </span>
              </span>
              {" "} whose
              center is that midpoint:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/eQmC.svg"
              local_url="./images/e5_line_with_0_1_and_A_Agt1_step2.svg"
            />
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Step 3.
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:56:10
                  </span>
                </span>
              </i>
              {" "} Draw a circle of radius {" "}
              <span class="t-3003-c">
                <Math>
                  $1$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:56:43
                </span>
              </span>
              {" "} whose center
              is {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $(0, 0)$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:57:12
                  </span>
                </span>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/emr1.svg"
              local_url="./images/e5_line_with_0_1_and_A_Agt1_step3.svg"
            />
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Step 4.
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:62:10
                  </span>
                </span>
              </i>
              {" "} Draw a line through the intersections
              of the two circles to find the position of {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $1/A$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:63:52
                  </span>
                </span>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/XE7K.svg"
              local_url="./images/e5_line_with_0_1_and_A_Agt1_step4.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (The reason that the whole procedure works is that
                <span class="t-3003">
                  ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:68:9
                </span>
              </span>
              {" "}
              {" "}
              this triangle...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/KO2V.svg"
              local_url="./images/e5_line_with_0_1_and_A_Agt1_step4_with_triangle.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...is actually right-angled at its upper corner
                <span class="t-3003">
                  ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:74:9
                </span>
              </span>
              {" "}
              {" "}
              by 
              the Peloponnesian Theorem.
              This implies that the line from {" "}
              <span class="t-3003-c">
                <Math>
                  $(A, 0)$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:77:41
                </span>
              </span>
              {" "} to that
              corner is tangent to the circle of radius {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $1$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:78:51
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} which is
              what we want/need.)
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                ~ ~ case {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:81:11
                </span>
              </span>
              <span class="t-3003-c">
                <Math>
                  $|A| &lt; 1$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:81:20
                </span>
              </span>
              <span class="t-3003-c">
                {" "} ~ ~
                <span class="t-3003">
                  ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:81:29
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Step 1.
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:83:10
                  </span>
                </span>
              </i>
              {" "} 
              With {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $|A| &lt; 1$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:84:14
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} start by
              marking points at equal distance to {" "}
              <span class="t-3003-c">
                <Math>
                  $A$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:85:45
                </span>
              </span>
              {" "} 
              by drawing a circle 
              centered at {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $A$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:87:21
                  </span>
                </span>
                ,
              </NoBreak>
              {" "}
              of any radius:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/RGWo.svg"
              local_url="./images/e5_line_with_0_1_and_A_Alt1_step1_v3.svg"
            />
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Step 2.
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:93:10
                  </span>
                </span>
              </i>
              {" "} Use these points to draw a perpendicular 
              through {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $A$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:94:17
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} similarly to the first step of
              the case {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $|A| &gt; 1$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:95:18
                  </span>
                </span>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/4MXO.svg"
              local_url="./images/e5_line_with_0_1_and_A_Alt1_step2_v3.svg"
            />
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Step 3.
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:108:10
                  </span>
                </span>
              </i>
              {" "} 
              Draw a circle of radius {" "}
              <span class="t-3003-c">
                <Math>
                  $1$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:109:33
                </span>
              </span>
              {" "} centered at
              {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $(0, 0)$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:110:9
                  </span>
                </span>
                ,
              </NoBreak>
              {" "}
              and draw a line through {" "}
              <span class="t-3003-c">
                <Math>
                  $(0, 0)$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:111:33
                </span>
              </span>
              {" "} and the
              upper intersection of the circle with the perpendicular:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/FPj6.svg"
              local_url="./images/e5_line_with_0_1_and_A_Alt1_step4_v3.svg"
            />
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Step 4.
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:117:10
                  </span>
                </span>
              </i>
              {" "} 
              Construct a perpendicular to this line
              at the point of intersection by repeating the
              process of the first two steps; 
              the intersection of that line with the
              main axis is {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $1/A$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_geometric_construction_of_1_over_A_new_ver_.wly:125:22
                  </span>
                </span>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/hKBQ.svg"
              local_url="./images/e5_line_with_0_1_and_A_Alt1_step5_v3_smaller.svg"
            />
            <Pause />
            <StarDivider />
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
                Given a number line with {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:5:5
                </span>
              </span>
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $0$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:5:30
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} {" "}
              <span class="t-3003-c">
                <Math>
                  $1$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:5:35
                </span>
              </span>
              {" "}
              and a value {" "}
              <span class="t-3003-c">
                <Math>
                  $A &gt; 0$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:6:17
                </span>
              </span>
              {" "} indicated,
              how can we construct the values {" "}
              <span class="t-3003-c">
                <Math>
                  $A^2$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:7:37
                </span>
              </span>
              {" "} and {" "}
              <span class="t-3003-c">
                <Math>
                  $A^3$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:7:47
                </span>
              </span>
              {" "}
              as lengths, using only ruler and compass?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Solution 1.
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:12:10
                  </span>
                </span>
              </i>
              {" "} If {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $A &gt; 1$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:12:26
                  </span>
                </span>
                ,
              </NoBreak>
              {" "}
              start by constructing a perpendicular to the {" "}
              <span class="t-3003-c">
                <Math>
                  $x$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:15:54
                </span>
              </span>
              {" "} axis
              (“the number line” = “the {" "}
              <span class="t-3003-c">
                <Math>
                  $x$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:16:35
                </span>
              </span>
              {" "} axis”) through {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $1$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:16:54
                  </span>
                </span>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/tmp-images/e5_x_square_x_cube_construction_1.svg"
              local_url="./public/tmp-images/e5_x_square_x_cube_construction_1.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Take the intersection of this line with a
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:21:9
                </span>
              </span>
              {" "}
              {" "}
              circle of center {" "}
              <span class="t-3003-c">
                <Math>
                  $(0, 0)$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:22:26
                </span>
              </span>
              {" "} of radius {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $A$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:22:45
                  </span>
                </span>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/tmp-images/e5_x_square_x_cube_construction_2_38deg.svg"
              local_url="./public/tmp-images/e5_x_square_x_cube_construction_2_38deg.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                This gives us an angle {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:27:9
                </span>
              </span>
              <span class="t-3003-c">
                <Math>
                  $\theta$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:27:32
                </span>
              </span>
              {" "} such that {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $\sec\theta = A$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:27:51
                  </span>
                </span>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/tmp-images/e5_x_square_x_cube_construction_3.svg"
              local_url="./public/tmp-images/e5_x_square_x_cube_construction_3.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Now it suffices to apply one of the “powers of
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:32:9
                </span>
              </span>
              {" "}
              {" "}
              secant” constructions to obtain powers of {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $A$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:33:51
                  </span>
                </span>
                ,
              </NoBreak>
              {" "}
              for example either of:
            </OuterP>
            <Pause />
            <Image
              src="/tmp-images/e5_x_square_x_cube_construction_4.svg"
              local_url="./public/tmp-images/e5_x_square_x_cube_construction_4.svg"
            />
            <Pause />
            <Image
              src="/tmp-images/e5_x_square_x_cube_construction_5.svg"
              style="margin-bottom:0.5em;"
              local_url="./public/tmp-images/e5_x_square_x_cube_construction_5.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (Either of these constructiongs requires constructing
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:43:9
                </span>
              </span>
              {" "}
              {" "}
              perpendiculars, but we know how to do that.)
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                If {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:46:9
                </span>
              </span>
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $A &lt; 1$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:46:12
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} on the other hand,
              do the same initial steps but with {" "}
              <NoBreak>
                ‘
                <span class="t-3003-c">
                  <Math>
                    $1$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:47:45
                  </span>
                </span>
                ’
              </NoBreak>
              {" "} and {" "}
              <NoBreak>
                ‘
                <span class="t-3003-c">
                  <Math>
                    $A$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:47:55
                  </span>
                </span>
                ’
              </NoBreak>
              {" "}
              reversed, resulting in an angle {" "}
              <span class="t-3003-c">
                <Math>
                  $\theta$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:48:41
                </span>
              </span>
              {" "} for
              which {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $A = \cos\theta$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:49:15
                  </span>
                </span>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/tmp-images/e5_x_square_x_cube_construction_7.svg"
              local_url="./public/tmp-images/e5_x_square_x_cube_construction_7.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                We can then do a “powers of cosine” construction,
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:54:9
                </span>
              </span>
              {" "}
              {" "}
              that is symmetric to powers of secant, to
              find powers of {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $A$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:56:24
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} for example:
            </OuterP>
            <Pause />
            <Image
              src="/tmp-images/e5_x_square_x_cube_construction_8.svg"
              local_url="./public/tmp-images/e5_x_square_x_cube_construction_8.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Though in this case, it bears discussing how we
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:61:9
                </span>
              </span>
              {" "}
              {" "}
              construct, say, this perpendicular:
            </OuterP>
            <Pause />
            <Image
              src="/tmp-images/e5_x_square_x_cube_construction_9.svg"
              local_url="./public/tmp-images/e5_x_square_x_cube_construction_9.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...because this perpendicular must
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:67:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                arrive
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:69:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                perpendicularly at a given line, not
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:71:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                depart
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:73:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                perpendicularly from a given line. {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:75:9
                </span>
              </span>
              {" "}
              {" "}
              (In the order in which the construction unfolds,
              this perpendicular “originates” from its upper end,
              which is a situation that we have not encountered
              yet.)
              In this case, the procedure is to draw a circle,
              in orange below, whose center is the 
              starting point
              of the
              perpendicular, and that crosses the line-to-which-we-must-be-perpendicular
              in two places:
            </OuterP>
            <Pause />
            <Image
              src="/tmp-images/e5_x_square_x_cube_construction_10.svg"
              local_url="./public/tmp-images/e5_x_square_x_cube_construction_10.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Then use those crossings as the
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:90:9
                </span>
              </span>
              {" "}
              {" "}
              centers of two more circles of equal radius...
            </OuterP>
            <Pause />
            <Image
              src="/tmp-images/e5_x_square_x_cube_construction_11.svg"
              local_url="./public/tmp-images/e5_x_square_x_cube_construction_11.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...whose intersection gives us a second point
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:96:9
                </span>
              </span>
              {" "}
              {" "}
              (even two more points, if we use a radius
              different from the first orange circle), and the means to draw
              the perpendicular itself.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Solution 2.
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:103:10
                  </span>
                </span>
              </i>
              {" "} Regardless of whether {" "}
              <span class="t-3003-c">
                <Math>
                  $A &lt; 1$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:103:45
                </span>
              </span>
              {" "} or {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $A &gt; 1$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:103:56
                  </span>
                </span>
                ,
              </NoBreak>
              {" "}
              draw a perpendicular to the number line through {" "}
              <span class="t-3003-c">
                <Math>
                  $x = 1$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:104:57
                </span>
              </span>
              {" "}
              and use a compass to report {" "}
              <span class="t-3003-c">
                <Math>
                  $A$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:105:37
                </span>
              </span>
              {" "} onto this line
              (here with {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $A &lt; 1$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:106:20
                  </span>
                </span>
                ):
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/tmp-images/e5_x_square_x_cube_construction_13.svg"
              local_url="./public/tmp-images/e5_x_square_x_cube_construction_13.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                This defines a an angle {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:111:9
                </span>
              </span>
              <span class="t-3003-c">
                <Math>
                  $\theta$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:111:33
                </span>
              </span>
              {" "} such that {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $A = \tan\theta$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:111:52
                  </span>
                </span>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/tmp-images/e5_x_square_x_cube_construction_14.svg"
              local_url="./public/tmp-images/e5_x_square_x_cube_construction_14.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Then we can use any construction for powers of
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:116:9
                </span>
              </span>
              {" "}
              {" "}
              tan, for example this spiral construction:
            </OuterP>
            <Pause />
            <Image
              src="/tmp-images/e5_x_square_x_cube_construction_15.svg"
              local_url="./public/tmp-images/e5_x_square_x_cube_construction_15.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (Again, constructing the spiral means constructing
                <span class="t-3003">
                  ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:122:9
                </span>
              </span>
              {" "}
              {" "}
              a sequence of perpendiculars, but we can do that!)
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
                  If {" "}
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:127:13
                  </span>
                </span>
                <span class="t-3003-c">
                  <Math>
                    $A &lt; 1$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:127:16
                  </span>
                </span>
                {" "} there is a clever construction,
                variant of solution 1, that one can use to
                construct powers of {" "}
                <span class="t-3003-c">
                  <Math>
                    $A$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:129:33
                  </span>
                </span>
                {" "} using only one compass
                stroke and one ruler stroke per power of {" "}
                <span class="t-3003-c">
                  <Math>
                    $A$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:130:54
                  </span>
                </span>
                {" "}
                (after setting up the angle {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $\theta$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:131:41
                    </span>
                  </span>
                  ):
                </NoBreak>
              </OuterP>
              <Pause />
              <Image
                src="/tmp-images/e5_x_square_x_cube_construction_16.svg"
                local_url="./public/tmp-images/e5_x_square_x_cube_construction_16.svg"
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  Curiously, there is no similar {" "}
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:138:13
                  </span>
                </span>
                {" "}
                {" "}
                construction for {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $A &gt; 1$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:140:30
                    </span>
                  </span>
                  ,
                </NoBreak>
                {" "} all of
                which require three-compass-and-one-ruler-stroke constructions
                of perpendiculars to keep “reaching” the next
                power of {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $A$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_x_square_x_cube_construction_.wly:143:22
                    </span>
                  </span>
                  !
                </NoBreak>
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};