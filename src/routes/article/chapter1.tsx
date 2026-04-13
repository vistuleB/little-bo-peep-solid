import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Boxed  from "~/components/Boxed";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { Math, MathBlock }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageLeft }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter1__() {
  return (
    <Article
      prevPage="/"
      nextPage=""
      pageNecessaryMargin={1500}
      maxElementWidth={1000}
      id="_5_hgi_"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            <span class="t-3003-c">
              note on calculators
              <span class="t-3003">
                ./src/content/ch5.wly:1720:6
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
                ./src/content/ch5.wly:1720:6
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
              ./src/content/ch5.wly:1729:5
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
      <Rest />
    </Article>
  );
}

const Rest = () => {
  const showMore = useShowMore();
  return <>
    {showMore() && <>
      <Pause />
      <Exercises id="_4_hgi_">
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
                In the figure below, where can
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_1_.wly:5:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large ab\cos\theta_&#123;ab&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                be found, if at all? (Note that {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_1_.wly:11:5
                </span>
              </span>
              <NoBreak>
                “
                <Math>
                  $\theta_&#123;ab&#125;$
                </Math>
                ”
              </NoBreak>
              {" "} is
              just a name.)
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/oty_.svg"
              local_url="./images/e5_cosine_rule_geometric_1_statement.svg"
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                It appears two places; it is the area of this
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_1_.wly:19:9
                </span>
              </span>
              {" "}
              {" "}
              rectangle here on the left:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/QsAd.svg"
              local_url="./images/e5_cosine_rule_geometric_1_sol1.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                It is also
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_1_.wly:26:9
                </span>
              </span>
              {" "}
              {" "}
              the area of this rectangle here on the right:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/FZ9q.svg"
              local_url="./images/e5_cosine_rule_geometric_1_sol2.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                In more detail, here is how {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_1_.wly:33:9
                </span>
              </span>
              <NoBreak>
                “
                <Math>
                  $b\cdot\cos\theta_&#123;ab&#125;$
                </Math>
                ”
              </NoBreak>
              {" "} 
              and {" "}
              <NoBreak>
                “
                <Math>
                  $a\cdot\cos\theta_&#123;ab&#125;$
                </Math>
                ”
              </NoBreak>
              {" "} 
              show up as the widths of the two rectangles, respectively, 
              zooming in:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/PJpl.svg"
              local_url="./images/e5_cosine_rule_geometric_1_sol3.svg"
            />
            <Pause />
            <Image
              src="/build-img/svgo-svg/9Sks.svg"
              local_url="./images/e5_cosine_rule_geometric_1_sol4.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                This means that the rectangles have area
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_1_.wly:46:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large a(b\cdot \cos\theta_&#123;ab&#125;) = b(a\cdot \cos\theta_&#123;ab&#125;) = ab\cos\theta_&#123;ab&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                while forming the product in two different ways,
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_1_.wly:52:9
                </span>
              </span>
              {" "}
              {" "}
              but arriving at the same end result.
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
                Keeping the diagram of {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_2_.wly:5:5
                </span>
              </span>
              <NoBreak>
                <InChapterLink
                  href="/article/chapter1#_1_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 1
                </InChapterLink>
                ,
              </NoBreak>
              {" "}
              find a formula for {" "}
              <Math>
                $c$
              </Math>
              {" "} in terms of {" "}
              <NoBreak>
                <Math>
                  $a$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $b$
              </Math>
              {" "}  
              and {" "}
              <NoBreak>
                <Math>
                  $\theta_&#123;ab&#125;$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                By {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_2_.wly:11:9
                </span>
              </span>
              <NoBreak>
                <InChapterLink
                  href="/article/chapter1#_1_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 1
                </InChapterLink>
                ,
              </NoBreak>
              {" "}
              these rectangles have the same area:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svg/q6NB.svg"
              local_url="./images/_e5_cosine_rule_geometric_2_sol1.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                But by a similar argument,
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_2_.wly:18:9
                </span>
              </span>
              {" "}
              {" "}
              these rectangles 
              can also be shown to have
              have the same area:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Sie8.svg"
              local_url="./images/_e5_cosine_rule_geometric_2_sol2_v2.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                This gives...
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_2_.wly:27:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svg/Prt-.svg"
              local_url="./images/_e5_cosine_rule_geometric_2_sol3.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...thiiiis...
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_2_.wly:32:9
                </span>
              </span>
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                c = \sqrt&#123;a^2 + b^2 - 2ab\cos\theta_&#123;ab&#125;&#125;
                $$
              </MathBlock>
            </Boxed>
            <OuterP>
              <span class="t-3003-c">
                ...formula!
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_2_.wly:39:9
                </span>
              </span>
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
                Find various &amp; varied expressions for the
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_3_.wly:5:5
                </span>
              </span>
              {" "}
              {" "}
              areas A, B, C, D below that allow you to find
              a formula for {" "}
              <Math>
                $c$
              </Math>
              {" "} in terms of all variables that do not
              contain {" "}
              <NoBreak>
                “
                <Math>
                  $c$
                </Math>
                ”
              </NoBreak>
              {" "} in their name:
            </OuterP>
            <Pause />
            <Image
              src="/tmp-images/_e5_cosine_rule_geometric_3_statement.svg"
              local_url="./public/tmp-images/_e5_cosine_rule_geometric_3_statement.svg"
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Since
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_3_.wly:15:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(2\eta - x) = -\cos x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for all {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_3_.wly:21:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $x \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(2\eta - \theta_&#123;ab&#125;) = -\cos \theta_&#123;ab&#125;
              $$
              <ImageLeft
                src="/tmp-images/_e5_cosine_rule_geometric_3_cloud.svg"
                offset_x="2em"
                compensate_offset_x_for_large_text_columns={true}
                local_url="./public/tmp-images/_e5_cosine_rule_geometric_3_cloud.svg"
              />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                in particular, we have these orange
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_3_.wly:31:9
                </span>
              </span>
              {" "}
              {" "}
              measurements &amp; accompanying purple areas (A &amp; B):
            </OuterP>
            <Pause />
            <Image
              src="/tmp-images/_e5_cosine_rule_geometric_3_sol1.svg"
              local_url="./public/tmp-images/_e5_cosine_rule_geometric_3_sol1.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Secondly we have these measurements and areas, giving us two
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_3_.wly:37:9
                </span>
              </span>
              {" "}
              {" "}
              more different ways of writing A and B, as well:
            </OuterP>
            <Pause />
            <Image
              src="/tmp-images/_e5_cosine_rule_geometric_3_sol2.svg"
              local_url="./public/tmp-images/_e5_cosine_rule_geometric_3_sol2.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Thus
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_3_.wly:43:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gathered&#125;
              \te&#123;A&#125; = \te&#123;D&#125; = bc\cos\theta_&#123;bc&#125; = b^2 - ab\cos\theta_&#123;ab&#125;, \\
              \up&#123;1.4&#125;\te&#123;B&#125; = \te&#123;C&#125; = ac\cos\theta_&#123;ac&#125; = a^2 - ab\cos\theta_&#123;ab&#125;\,
              \end&#123;gathered&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                summarizing the two figures, and
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_3_.wly:52:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large
              c = \sqrt&#123;c^2&#125; = \sqrt&#123;\te&#123;C&#125; + \te&#123;D&#125;&#125; = \sqrt&#123;\te&#123;B&#125; + \te&#123;A&#125;&#125; = \sqrt&#123;b^2 - ab\cos\theta_&#123;ab&#125; + a^2 - ab\cos\theta_&#123;ab&#125;&#125; = \sqrt&#123;a^2 + b^2 - 2ab\cos\theta_&#123;ab&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                where we use {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_3_.wly:59:9
                </span>
              </span>
              <NoBreak>
                <Math>
                  $\te&#123;C&#125; = \te&#123;B&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\te&#123;D&#125; = \te&#123;A&#125;$
              </Math>
              {" "} in the third
              equality, or
            </OuterP>
            <Boxed>
              <MathBlock>
                $$
                \Large c = \sqrt&#123;a^2 + b^2 - 2ab\cos\theta_&#123;ab&#125;&#125;
                $$
              </MathBlock>
            </Boxed>
            <OuterP>
              <span class="t-3003-c">
                in conclusion, which is the same formula as obtained in {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_3_.wly:68:9
                </span>
              </span>
              <NoBreak>
                <InChapterLink
                  href="/article/chapter1#_2_hgi_"
                  class="handle-in-chapter-link"
                >
                  Exercise 2
                </InChapterLink>
                !
              </NoBreak>
              {" "}{" "}
            </OuterP>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};