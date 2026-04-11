import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Boxed  from "~/components/Boxed";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { Math, MathBlock }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
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
      id="_4_hgi_"
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
              src="/build-img/svgo-svg/q6NB.svg"
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
              src="/build-img/svgo-svg/Prt-.svg"
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
      </Exercises>
    </>}
  </>;
};