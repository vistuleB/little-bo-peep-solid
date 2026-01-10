import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { CentralDisplay, CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { Math, MathBlock }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageLeft }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { SolutionNote, NoBreak, InTextWarning, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter1__() {
  return (
    <Article
      prevPage="/"
      nextPage=""
      pageNecessaryMargin={1450}
      maxElementWidth={700}
      id="_3_hgi_"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            <span class="t-3003-c">
              the jerk
              <span class="t-3003">
                ./src/content/ch4.wly:682:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=exercises">
            <span class="t-3003-c">
              exercises
              <span class="t-3003">
                ./src/content/ch4^exercises/__parent.wly:1:1
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 1:">
        <span class="t-3003-c">
          Derivatives
          <span class="t-3003">
            ./src/content/ch4__parent.wly:2:11
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
              The jerk.
              <span class="t-3003">
                ./src/content/ch4.wly:682:6
              </span>
            </span>
          </b>
          {" "}
          The rate of change of acceleration has a
          name as well, being known as the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            jerk
            <span class="t-3003">
              ./src/content/ch4.wly:686:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            in physics. The units of jerk (or “the”
            <span class="t-3003">
              ./src/content/ch4.wly:688:5
            </span>
          </span>
          {" "}
          {" "}
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
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;m&#125; \over \,\te&#123;s&#125;\!&#123;\,&#125;^3&#125;
          $$
          <span class="t-3003">
            ./src/content/ch4.wly:696:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            or
            <span class="t-3003">
              ./src/content/ch4.wly:700:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            meters per second, per second, per second
            <span class="t-3003">
              ./src/content/ch4.wly:702:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            which is mildly amusing. Basically, the
            <span class="t-3003">
              ./src/content/ch4.wly:704:5
            </span>
          </span>
          {" "}
          {" "}
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
          .
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            The term “jerk” is at least half-way well-chosen,
            <span class="t-3003">
              ./src/content/ch4.wly:709:5
            </span>
          </span>
          {" "}
          {" "}
          too, considering that
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            jerk
            <span class="t-3003">
              ./src/content/ch4.wly:712:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            implies a change in acceleration insofar as the
            <span class="t-3003">
              ./src/content/ch4.wly:714:5
            </span>
          </span>
          {" "}
          {" "}
          everyday meaning of the word is concerned—think
          of experiencing a
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            constant acceleration
            <span class="t-3003">
              ./src/content/ch4.wly:718:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            in a train or subway car, etc—the
            <span class="t-3003">
              ./src/content/ch4.wly:720:5
            </span>
          </span>
          {" "}
          {" "}
          “constant” qualifier, if you think about it, implies
          a non-jerky experience!
        </OuterP>
        <Pause />
        <OuterP>
          <b>
            <span class="t-3003-c">
              Postscript: Sums, Products, Quotients,
              <span class="t-3003">
                ./src/content/ch4.wly:773:6
              </span>
            </span>
            {" "}
            {" "}
            and Differences of Functions.
          </b>
          {" "}
          Coming briefly back to Chapter 3-related
          matters, if
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f, g : \rr \ra \rr
          $$
          <span class="t-3003">
            ./src/content/ch4.wly:778:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            then
            <span class="t-3003">
              ./src/content/ch4.wly:782:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f \circ g = (x \ra f(g(x)))
          $$
          <span class="t-3003">
            ./src/content/ch4.wly:784:5
          </span>
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          f + g = (x \ra f(x) + g(x))
          $$
          <span class="t-3003">
            ./src/content/ch4.wly:787:5
          </span>
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          fg = (x \ra f(x)g
          (x))
          $$
          <span class="t-3003">
            ./src/content/ch4.wly:790:5
          </span>
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          &#123;f/g&#125; = (x \ra &#123;f(x)/g(x)&#125;)
          $$
          <span class="t-3003">
            ./src/content/ch4.wly:794:5
          </span>
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          f - g = (x \ra f(x) - g(x))
          $$
          <span class="t-3003">
            ./src/content/ch4.wly:797:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            with each equation being a {" "}
            <span class="t-3003">
              ./src/content/ch4.wly:801:5
            </span>
          </span>
          <i>
            definition
          </i>
          .
          The notation
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f \circ g
          $$
          <span class="t-3003">
            ./src/content/ch4.wly:804:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            goes back to Exercise {" "}
            <span class="t-3003">
              ./src/content/ch4.wly:808:5
            </span>
          </span>
          <InTextWarning>
            undefined handle at ch4.wly:808:5: _factory_roof_functions_1_
          </InTextWarning>
          {" "} of Chapter {" "}
          <InTextWarning>
            undefined handle at ch4.wly:808:5: functions
          </InTextWarning>
          , with
          the little circle {" "}
          <NoBreak>
            “
            <span class="t-3003-c">
              <Math>
                $\circ$
              </Math>
              <span class="t-3003">
                ./src/content/ch4.wly:809:24
              </span>
            </span>
            ”
          </NoBreak>
          {" "} being known as
          the {" "}
          <i>
            composition operator
          </i>
          , while the sum
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f + g
          $$
          <span class="t-3003">
            ./src/content/ch4.wly:812:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and product
            <span class="t-3003">
              ./src/content/ch4.wly:816:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          fg
          $$
          <span class="t-3003">
            ./src/content/ch4.wly:818:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            of functions already appear in Exercise {" "}
            <span class="t-3003">
              ./src/content/ch4.wly:822:5
            </span>
          </span>
          <InTextWarning>
            undefined handle at ch4.wly:822:5: _function_operations_Q_and_A_
          </InTextWarning>
          {" "}
          of Chapter {" "}
          <InTextWarning>
            undefined handle at ch4.wly:823:5: functions
          </InTextWarning>
          , also. (On the other hand, the
          quotient (i.e. {" "}
          <NoBreak>
            <span class="t-3003-c">
              <Math>
                $f/g$
              </Math>
              <span class="t-3003">
                ./src/content/ch4.wly:824:20
              </span>
            </span>
            )
          </NoBreak>
          {" "} and difference (i.e.,
          {" "}
          <NoBreak>
            <span class="t-3003-c">
              <Math>
                $f - g$
              </Math>
              <span class="t-3003">
                ./src/content/ch4.wly:825:5
              </span>
            </span>
            )
          </NoBreak>
          {" "} of functions are defined above for
          the first time, even if the definitions might
          {" "}
          <i>
            seem
          </i>
          {" "} familiar!)
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
      <Exercises>
        <Exercise
          work="ing"
          number={1}
        >
          <ExerciseStatement id="_2_hgi_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                Exercise {" "}
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:4:5
                </span>
              </span>
              <InTextWarning>
                undefined handle at ch4^exercises/_f_equals_f_5_.wly:4:5: _four_particles_
              </InTextWarning>
              {" "} exhibits a function {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $f$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:4:53
                  </span>
                </span>
                —in
              </NoBreak>
              {" "} fact,
              four different functions {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $f$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:5:30
                  </span>
                </span>
                —such
              </NoBreak>
              {" "} that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f' \ne f
              $$
              <span class="t-3003">
                ./src/content/ch4^exercises/_f_equals_f_5_.wly:7:5
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:11:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f'' \ne f
              $$
              <span class="t-3003">
                ./src/content/ch4^exercises/_f_equals_f_5_.wly:13:5
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:17:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f''' \ne f
              $$
              <span class="t-3003">
                ./src/content/ch4^exercises/_f_equals_f_5_.wly:19:5
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                but
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:23:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f^&#123;(4)&#125; = f
              $$
              <span class="t-3003">
                ./src/content/ch4^exercises/_f_equals_f_5_.wly:25:5
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                surprise, surprise! Can you do the same with
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:29:5
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <NoBreak>
                “
                <span class="t-3003-c">
                  <Math>
                    $5$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:30:6
                  </span>
                </span>
                ”
              </NoBreak>
              {" "} instead of {" "}
              <NoBreak>
                “
                <span class="t-3003-c">
                  <Math>
                    $4$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:30:23
                  </span>
                </span>
                ”?
              </NoBreak>
              {" "} I.e., find a function
              {" "}
              <span class="t-3003-c">
                <Math>
                  $f$
                </Math>
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:31:5
                </span>
              </span>
              {" "} such that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f^&#123;(n)&#125; \ne f
              $$
              <span class="t-3003">
                ./src/content/ch4^exercises/_f_equals_f_5_.wly:33:5
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for {" "}
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:37:5
                </span>
              </span>
              <span class="t-3003-c">
                <Math>
                  $n = 1, 2, 3, 4$
                </Math>
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:37:9
                </span>
              </span>
              {" "} but
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f^&#123;(5)&#125; = f
              $$
              <span class="t-3003">
                ./src/content/ch4^exercises/_f_equals_f_5_.wly:39:5
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...?
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:43:5
                </span>
              </span>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                We can naïvely try to imitiate how the
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:47:9
                </span>
              </span>
              {" "}
              {" "}
              curves of Exercise {" "}
              <InTextWarning>
                undefined handle at ch4^exercises/_f_equals_f_5_.wly:48:9: _illustrate_the_difference_quotient_
              </InTextWarning>
              {" "} are generated by
              placing five equally spaced particles
              around the unit circle (“the” unit circle
              is the one centered at {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $(0, 0)$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:51:32
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} by
              convention), instead of 4:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/826P.svg"
              local_url="./images/svg_ch4_5_euler_position_vectors.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The idea would be that the
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:57:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                velocity vector
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:59:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of the red particle is the
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:61:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                position vector
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:63:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                of the blue particle,
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:65:9
                </span>
              </span>
              {" "}
              {" "}
              likewise for the blue and yellow particles,
              and so on. (Position vectors shown above.)
              For example, at the instant above, the
              velocity vectors would be as follows:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/uq4U.svg"
              local_url="./images/svg_ch4_5_euler_velocity_vectors.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The velocity vectors are
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:74:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplay>
              <span class="t-3003-c">
                NOT
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:76:11
                </span>
              </span>
            </CentralDisplay>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                tangent to the unit circle, and so the
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:78:9
                </span>
              </span>
              {" "}
              {" "}
              particles will leave the circle!
              (But that's OK.) In one-tenth a unit
              of time, for example, the particles would
              travel approximately one-tenth their
              velocity vectors, that would bring them
              to approximately these new positions:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/ZQgt.svg"
              local_url="./images/svg_ch4_5_euler_after_1_10th.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                In the next one-tenth unit of time we
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:89:9
                </span>
              </span>
              {" "}
              {" "}
              can apply a similar approximation again,
              advancing the particles by {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $&#123;1\over 10&#125;$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:91:36
                  </span>
                </span>
                th
              </NoBreak>
              {" "}
              of [the current approximation to] their
              velocity vectors. Skipping the construction
              lines:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/0xaW.svg"
              local_url="./images/svg_ch4_5_euler_after_2_10th.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Applying the same process for {" "}
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:99:9
                </span>
              </span>
              <span class="t-3003-c">
                <Math>
                  $8$
                </Math>
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:99:39
                </span>
              </span>
              {" "} more
              steps:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/hg3g.svg"
              local_url="./images/svg_ch4_5_euler_after_10_10th.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                To be clear, in the above figure, the
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:105:9
                </span>
              </span>
              {" "}
              {" "}
              position of the red particle at, say, the
              fifth step...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/GKbB.svg"
              local_url="./images/svg_ch4_5_euler_after_5_10th.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...is obtained by starting from the red
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:112:9
                </span>
              </span>
              {" "}
              {" "}
              particle's position at the fourth step...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/jG_S.svg"
              local_url="./images/svg_ch4_5_euler_after_4_10th.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and adding one-tenth of the approximation
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:118:9
                </span>
              </span>
              {" "}
              {" "}
              that we have to the red particle's velocity
              vector at that moment, that approximation
              being namely the blue particle's position
              vector at the fourth step {" "}
              <NoBreak>
                (
                <span class="t-3003-c">
                  <Math>
                    $t = &#123;4\over 10&#125;$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:122:36
                  </span>
                </span>
                )...
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Js6D.svg"
              local_url="./images/svg_ch4_5_euler_after_4_10th_b.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and we do the same for each particle,
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:127:9
                </span>
              </span>
              {" "}
              {" "}
              to advance to the next step.
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                If we stop {" "}
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:130:9
                </span>
              </span>
              <span class="t-3003-c">
                <Math>
                  $10$
                </Math>
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:130:20
                </span>
              </span>
              {" "} times as often,
              advancing the clock by {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $&#123;1\over 100&#125;$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:131:32
                  </span>
                </span>
                th
              </NoBreak>
              {" "} of
              a unit of time at each step, the same figure
              becomes just a blur (still going from
              {" "}
              <span class="t-3003-c">
                <Math>
                  $t = 0$
                </Math>
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:134:9
                </span>
              </span>
              {" "} to {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $t = 1$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:134:20
                  </span>
                </span>
                ):
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/8BpD.svg"
              local_url="./images/svg_ch4_5_euler_after_100_100th_blur.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                To visualize such a fine-grained
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:139:9
                </span>
              </span>
              {" "}
              {" "}
              approximation we need to revert to drawing
              the particles as points. In the following
              figure the colored paths are points that
              come from a {" "}
              <NoBreak>
                “
                <span class="t-3003-c">
                  <Math>
                    $&#123;1\over 100&#125;$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:143:22
                  </span>
                </span>
                th”
              </NoBreak>
              {" "} approximation,
              while the orange dots are the old positions
              obtained from a {" "}
              <NoBreak>
                “
                <span class="t-3003-c">
                  <Math>
                    $&#123;1\over 10&#125;$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:145:26
                  </span>
                </span>
                th”
              </NoBreak>
              {" "}
              approximation:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/uXS-.svg"
              local_url="./images/svg_ch4_5_euler_after_100_100th_points.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Zooming in a bit (or else we still can't
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:151:9
                </span>
              </span>
              {" "}
              {" "}
              see anything):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/IUP8.svg"
              local_url="./images/svg_ch4_5_euler_after_100_100th_zoomed.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                In any case, even the {" "}
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:157:9
                </span>
              </span>
              <NoBreak>
                “
                <span class="t-3003-c">
                  <Math>
                    $&#123;1\over 100&#125;$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:157:32
                  </span>
                </span>
                th”
              </NoBreak>
              {" "}
              approximation is just an approximation,
              but the point is that such approximations
              do converge to a set of “true” particle
              paths, as pictured in {" "}
              <NoBreak>
                Fig
                <span class="t-3003-c">
                  <Math>
                    $.$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:161:34
                  </span>
                </span>
              </NoBreak>
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
                local_url="./images/svg_ch4_5_euler_spiral_figure.svg"
              >
                <p>
                  <span style="font-size:1.4em;left:50%;transform:translate(-50%);position:absolute;white-space:nowrap;">
                    Fig. 1
                  </span>
                </p>
              </ImageLeft>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                In any case [take two] the point is that
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:177:9
                </span>
              </span>
              {" "}
              {" "}
              whether or not you are one of the wizards,
              you can
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                guess
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:181:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                the existence of these five paths—sort
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:183:9
                </span>
              </span>
              {" "}
              {" "}
              of “feel” that they exist! (This is a
              moral consolation prize, at least.)
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                We can also convert the paths into a
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:187:9
                </span>
              </span>
              {" "}
              {" "}
              function
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f
              $$
              <span class="t-3003">
                ./src/content/ch4^exercises/_f_equals_f_5_.wly:190:9
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                that satisfies the problem requirements.
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:194:9
                </span>
              </span>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                For example let {" "}
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:196:9
                </span>
              </span>
              <span class="t-3003-c">
                <Math>
                  $f$
                </Math>
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:196:25
                </span>
              </span>
              {" "} be the function that,
              given a time {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $t$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:197:22
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} outputs the {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $x$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:197:39
                  </span>
                </span>
                -coordinate
              </NoBreak>
              {" "}
              of the red particle at {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $t$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:198:32
                  </span>
                </span>
                ;
              </NoBreak>
              {" "} then, to spell
              it all out, since
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                the rate of change of the
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:201:11
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $x$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:202:9
                  </span>
                </span>
                <span class="t-3003-c">
                  -coordinate
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:202:12
                  </span>
                </span>
              </NoBreak>
              <span class="t-3003-c">
                {" "} of the red particle is the
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:202:12
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $x$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:203:9
                  </span>
                </span>
                <span class="t-3003-c">
                  -coordinate
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:203:12
                  </span>
                </span>
              </NoBreak>
              <span class="t-3003-c">
                {" "} of the blue particle
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:203:12
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                <Math>
                  <span class="t-3003-c">
                    $f'$
                    <span class="t-3003">
                      ./src/content/ch4^exercises/_f_equals_f_5_.wly:205:10
                    </span>
                  </span>
                </Math>
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:205:9
                </span>
              </span>
              {" "} is the {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $x$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:205:21
                  </span>
                </span>
                -coordinate
              </NoBreak>
              {" "} of the blue
              particle; and since
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                the rate of change of the
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:208:11
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $x$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:209:9
                  </span>
                </span>
                <span class="t-3003-c">
                  -coordinate
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:209:12
                  </span>
                </span>
              </NoBreak>
              <span class="t-3003-c">
                {" "} of the blue particle is the
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:209:12
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $x$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:210:9
                  </span>
                </span>
                <span class="t-3003-c">
                  -coordinate
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:210:12
                  </span>
                </span>
              </NoBreak>
              <span class="t-3003-c">
                {" "} of the yellow particle
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:210:12
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                <Math>
                  <span class="t-3003-c">
                    $f''$
                    <span class="t-3003">
                      ./src/content/ch4^exercises/_f_equals_f_5_.wly:212:10
                    </span>
                  </span>
                </Math>
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:212:9
                </span>
              </span>
              {" "} is the {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $x$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:212:22
                  </span>
                </span>
                -coordinate
              </NoBreak>
              {" "} of the
              yellow particle; and since
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                the rate of change of the
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:215:11
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $x$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:216:9
                  </span>
                </span>
                <span class="t-3003-c">
                  -coordinate
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:216:12
                  </span>
                </span>
              </NoBreak>
              <span class="t-3003-c">
                {" "} of the yellow particle is the
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:216:12
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $x$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:217:9
                  </span>
                </span>
                <span class="t-3003-c">
                  -coordinate
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:217:12
                  </span>
                </span>
              </NoBreak>
              <span class="t-3003-c">
                {" "} of the green particle
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:217:12
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                <Math>
                  <span class="t-3003-c">
                    $f'''$
                    <span class="t-3003">
                      ./src/content/ch4^exercises/_f_equals_f_5_.wly:219:10
                    </span>
                  </span>
                </Math>
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:219:9
                </span>
              </span>
              {" "} is the {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $x$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:219:23
                  </span>
                </span>
                -coordinate
              </NoBreak>
              {" "} of the
              green particle; and since
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                the rate of change of the
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:222:11
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $x$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:223:9
                  </span>
                </span>
                <span class="t-3003-c">
                  -coordinate
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:223:12
                  </span>
                </span>
              </NoBreak>
              <span class="t-3003-c">
                {" "} of the green particle
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:223:12
                </span>
              </span>
              {" "}
              {" "}
              is the {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $x$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:224:16
                  </span>
                </span>
                <span class="t-3003-c">
                  -coordinate
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:224:19
                  </span>
                </span>
              </NoBreak>
              <span class="t-3003-c">
                {" "} of the purple
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:224:19
                </span>
              </span>
              {" "}
              {" "}
              particle
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                <Math>
                  <span class="t-3003-c">
                    $f''''$
                    <span class="t-3003">
                      ./src/content/ch4^exercises/_f_equals_f_5_.wly:227:10
                    </span>
                  </span>
                </Math>
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:227:9
                </span>
              </span>
              {" "} is the {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $x$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:227:24
                  </span>
                </span>
                -coordinate
              </NoBreak>
              {" "} of the
              purple particle; and since
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                the rate of change of the
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:230:11
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $x$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:231:9
                  </span>
                </span>
                <span class="t-3003-c">
                  -coordinate
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:231:12
                  </span>
                </span>
              </NoBreak>
              <span class="t-3003-c">
                {" "} of the purple particle is the
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:231:12
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $x$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:232:9
                  </span>
                </span>
                <span class="t-3003-c">
                  -coordinate
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:232:12
                  </span>
                </span>
              </NoBreak>
              <span class="t-3003-c">
                {" "} of the red particle
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:232:12
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                <Math>
                  <span class="t-3003-c">
                    $f''''' = f^&#123;(5)&#125;$
                    <span class="t-3003">
                      ./src/content/ch4^exercises/_f_equals_f_5_.wly:234:10
                    </span>
                  </span>
                </Math>
                <span class="t-3003">
                  ./src/content/ch4^exercises/_f_equals_f_5_.wly:234:9
                </span>
              </span>
              {" "} equals {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $f$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:234:35
                  </span>
                </span>
                .
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
                  If you graph the {" "}
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:237:13
                  </span>
                </span>
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $x$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch4^exercises/_f_equals_f_5_.wly:237:30
                    </span>
                  </span>
                  -coordinates
                </NoBreak>
                {" "} of the
                5 particles over time, each in their
                color, you get a graph like so, in which
                blue is the derivative of red, yellow is
                the derivative of blue, etc; the function
                {" "}
                <span class="t-3003-c">
                  <Math>
                    $f$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:242:13
                  </span>
                </span>
                {" "} can be taken to be any one of these
                curves:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svg/U6Hi.svg"
                local_url="./images/svg_ch4_5_euler_final_graph.svg"
              />
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
                  There is nothing special about
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:249:13
                  </span>
                </span>
                {" "}
                {" "}
                {" "}{" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $x$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch4^exercises/_f_equals_f_5_.wly:250:13
                    </span>
                  </span>
                  -coordinates
                </NoBreak>
                {" "} vis-à-vis {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $y$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch4^exercises/_f_equals_f_5_.wly:250:39
                    </span>
                  </span>
                  -coordinates.
                </NoBreak>
                {" "}
                You can also define {" "}
                <span class="t-3003-c">
                  <Math>
                    $f(t)$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:251:33
                  </span>
                </span>
                {" "} to be, e.g.,
                the {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $y$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch4^exercises/_f_equals_f_5_.wly:252:17
                    </span>
                  </span>
                  -coordinate
                </NoBreak>
                {" "} of the red particle
                at time {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $t$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch4^exercises/_f_equals_f_5_.wly:253:21
                    </span>
                  </span>
                  .
                </NoBreak>
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote id="_1_hgi_">
              <OuterP>
                <i>
                  Note 3.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  It is worth noting that, in fact, the
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:257:13
                  </span>
                </span>
                {" "}
                {" "}
                {" "}{" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $x$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch4^exercises/_f_equals_f_5_.wly:258:13
                    </span>
                  </span>
                  -
                </NoBreak>
                {" "} and {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $y$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch4^exercises/_f_equals_f_5_.wly:258:22
                    </span>
                  </span>
                  -coordinates
                </NoBreak>
                {" "} live separate
                lives. The rate of change of each
                {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $x$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch4^exercises/_f_equals_f_5_.wly:260:13
                    </span>
                  </span>
                  -coordinate
                </NoBreak>
                {" "} is some other {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $x$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch4^exercises/_f_equals_f_5_.wly:260:42
                    </span>
                  </span>
                  -coordinate,
                </NoBreak>
                {" "}
                and the rate of change of each {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $y$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch4^exercises/_f_equals_f_5_.wly:261:44
                    </span>
                  </span>
                  -coordinate
                </NoBreak>
                {" "}
                is some other {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $y$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch4^exercises/_f_equals_f_5_.wly:262:27
                    </span>
                  </span>
                  -coordinate—you
                </NoBreak>
                {" "} could
                scramble a {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $y$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch4^exercises/_f_equals_f_5_.wly:263:24
                    </span>
                  </span>
                  -coordinate,
                </NoBreak>
                {" "} and the {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $x$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch4^exercises/_f_equals_f_5_.wly:263:48
                    </span>
                  </span>
                  -coordinates
                </NoBreak>
                {" "}
                would never know!
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 4.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  Adding to this observation, we don't
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:267:13
                  </span>
                </span>
                {" "}
                {" "}
                {" "}{" "}
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
              <Image
                src="/build-img/svgo-svg/cejz.svg"
                local_url="./images/svg_ch4_5_euler_one_dimensional.svg"
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...(the initial positions really don't
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:280:13
                  </span>
                </span>
                {" "}
                {" "}
                matter much, as long as you don't give
                all the particles the {" "}
                <i>
                  same
                </i>
                {" "} initial
                position, or else you won't have {" "}
                <span class="t-3003-c">
                  <Math>
                    $f \ne f'$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:283:46
                  </span>
                </span>
                {" "}
                etc) and stipulate the same rules, namely
                that the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  velocity
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:287:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  (now {" "}
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:289:13
                  </span>
                </span>
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $1$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch4^exercises/_f_equals_f_5_.wly:289:18
                    </span>
                  </span>
                  -dimensional)
                </NoBreak>
                {" "} of the red particle
                be the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  position
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:292:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  (now {" "}
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:294:13
                  </span>
                </span>
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $1$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch4^exercises/_f_equals_f_5_.wly:294:18
                    </span>
                  </span>
                  -dimensional)
                </NoBreak>
                {" "} of the blue particle
                and so on—you can “release” the particles
                from their initial configuration and
                simulate—or compute by a formula, if you have
                the know-how—their motion like above. The
                five position
                functions obtained are each a solution
                {" "}
                <span class="t-3003-c">
                  <Math>
                    $f$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:304:13
                  </span>
                </span>
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
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  In fact, our symmetric two-dimensional
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:309:13
                  </span>
                </span>
                {" "}
                {" "}
                solution is an instance in which you can say
                that
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  the whole is simpler than the parts
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:313:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  in that you would never spot the symmetry
                  <span class="t-3003">
                    ./src/content/ch4^exercises/_f_equals_f_5_.wly:323:13
                  </span>
                </span>
                {" "}
                {" "}
                at play, or have a chance of eyeballing
                the long-term evolution of the system, if
                you were shown just the {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $x$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch4^exercises/_f_equals_f_5_.wly:326:37
                    </span>
                  </span>
                  -coordinates,
                </NoBreak>
                {" "}
                or just the {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $y$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch4^exercises/_f_equals_f_5_.wly:327:25
                    </span>
                  </span>
                  -coordinates,
                </NoBreak>
                {" "} on their own.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};