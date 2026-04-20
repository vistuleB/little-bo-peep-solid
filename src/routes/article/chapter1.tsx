import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Boxed  from "~/components/Boxed";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import InlineImage  from "~/components/InlineImage";
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
      id="_7_hgi_"
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
                It appears two places; it is the area of {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_1_.wly:19:9
                </span>
              </span>
              {" "}
              {" "}
              both of these rectangles:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/QsAd.svg"
              local_url="./images/e5_cosine_rule_geometric_1_sol1.svg"
            />
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
                  ./src/content/ch5^exercises/_cosine_rule_geometric_1_.wly:34:9
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
                Thus the rectangles respectively have areas...
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_1_.wly:48:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large a(b\cdot \cos\theta_&#123;ab&#125;) = ab\cos\theta_&#123;ab&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and...
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_1_.wly:56:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large b(a\cdot \cos\theta_&#123;ab&#125;) = ab\cos\theta_&#123;ab&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...as claimed!
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_1_.wly:61:9
                </span>
              </span>
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
              <InChapterLink
                href="/article/chapter1#_1_hgi_"
                class="handle-in-chapter-link"
              >
                Exercise 1
              </InChapterLink>
              &#8288;,
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
              <InChapterLink
                href="/article/chapter1#_1_hgi_"
                class="handle-in-chapter-link"
              >
                Exercise 1
              </InChapterLink>
              &#8288;,
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
                Find expressions for the
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
              {" "} in terms of 
              all variables that do not contain {" "}
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
              src="/build-img/svgo-svg/1BmZ.svg"
              local_url="./images/_e5_cosine_rule_geometric_3_statement.svg"
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
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                in particular, we have these orange
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_3_.wly:27:9
                </span>
              </span>
              {" "}
              {" "}
              measurements &amp; accompanying purple areas (A &amp; B):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/HsYC.svg"
              local_url="./images/_e5_cosine_rule_geometric_3_sol1.svg"
            >
              <ImageLeft
                src="/build-img/svgo-svg/MAh-.svg"
                offset_y="44%"
                local_url="./images/_e5_cosine_rule_geometric_3_cloud.svg"
              />
            </Image>
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
              src="/build-img/svgo-svg/pgYq.svg"
              local_url="./images/_e5_cosine_rule_geometric_3_sol2.svg"
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
              <InChapterLink
                href="/article/chapter1#_2_hgi_"
                class="handle-in-chapter-link"
              >
                Exercise 2
              </InChapterLink>
              &#8288;!
            </OuterP>
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
                Find expressions for
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_4_.wly:5:5
                </span>
              </span>
              {" "}
              {" "}
              areas A—F
              and use these to give a formula for {" "}
              <Math>
                $c$
              </Math>
              {" "} in terms of
              {" "}
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
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $\theta_&#123;ab&#125;$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/hnrJ.svg"
              local_url="./images/_e5_cosine_rule_geometric_4_statement_v2.svg"
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                We can calculate each area as a plain “width {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_4_.wly:15:9
                </span>
              </span>
              <Math>
                $\times$
              </Math>
              {" "} height”
              while keeping in mind that {" "}
              <Math>
                $\cos\theta_&#123;ac&#125; &lt; 0$
              </Math>
              {" "} (or more exactly
              that {" "}
              <NoBreak>
                <Math>
                  $\cos(2\eta - \theta_&#123;ac&#125;) = -\cos\theta_&#123;ac&#125;$
                </Math>
                ),
              </NoBreak>
              {" "}
              similarly to exercises {" "}
              <InChapterLink
                href="/article/chapter1#_1_hgi_"
                class="handle-in-chapter-link"
              >
                1
              </InChapterLink>
              &#8288;,
              {" "}
              <InChapterLink
                href="/article/chapter1#_2_hgi_"
                class="handle-in-chapter-link"
              >
                2
              </InChapterLink>
              &#8288;, and {" "}
              <InChapterLink
                href="/article/chapter1#_3_hgi_"
                class="handle-in-chapter-link"
              >
                3
              </InChapterLink>
              &#8288;:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/VpDU.svg"
              local_url="./images/_e5_cosine_rule_geometric_4_sol1.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                I.e.,
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_4_.wly:24:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gathered&#125;
              \te&#123;A&#125; = \te&#123;F&#125; = ab\cos\theta_&#123;ab&#125;\\
              \up&#123;1.4&#125;\te&#123;B&#125; = \te&#123;E&#125; = bc\cos\theta_&#123;bc&#125;\\
              \up&#123;1.4&#125;\te&#123;C&#125; = \te&#123;D&#125; = -ac\cos\theta_&#123;ac&#125;
              \end&#123;gathered&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                from which...
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_4_.wly:34:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large c = \sqrt&#123;c^2&#125; = \sqrt&#123;B - D&#125; = \sqrt&#123;E - C&#125; = \sqrt&#123;(b^2 - A) - (F - a^2)&#125; = \sqrt&#123;(b^2 - ab\cos\theta_&#123;ab&#125;) - (ab\cos\theta_&#123;ab&#125; - a^2)&#125; = \sqrt&#123;a^2 + b^2 - 2ab\cos\theta_&#123;ab&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...where we use
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_4_.wly:40:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gathered&#125;
              \te&#123;B&#125; = \te&#123;E&#125;\\
              \up&#123;1.4&#125;\te&#123;D&#125; = \te&#123;C&#125;
              \end&#123;gathered&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                in the third equality, and
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_4_.wly:49:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gathered&#125;
              \te&#123;E&#125; = b^2 - A\\
              \up&#123;1.4&#125;\te&#123;D&#125; = F - a^2
              \end&#123;gathered&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                in the fourth equality. The answer is therefore...
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_4_.wly:58:9
                </span>
              </span>
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
                ...as in exercises {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_geometric_4_.wly:66:9
                </span>
              </span>
              <InChapterLink
                href="/article/chapter1#_2_hgi_"
                class="handle-in-chapter-link"
              >
                2
              </InChapterLink>
              {" "} and {" "}
              <InChapterLink
                href="/article/chapter1#_3_hgi_"
                class="handle-in-chapter-link"
              >
                3
              </InChapterLink>
              &#8288;.
            </OuterP>
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
                Keeping a triangle with sides {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_via_jacks_rule_.wly:5:5
                </span>
              </span>
              <NoBreak>
                <Math>
                  $a$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $b$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $c$
              </Math>
              {" "}
              with opposing angles
              {" "}
              <NoBreak>
                <Math>
                  $\theta_&#123;bc&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $\theta_&#123;ac&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\theta_&#123;ab&#125;$
              </Math>
              {" "}
              respectively, prove {" "}
              <i>
                Jack's rule
              </i>
              , which is the triplet of equations...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gathered&#125;
              a\cos\theta_&#123;ac&#125; + b\cos\theta_&#123;bc&#125; = c \\
              b\cos\theta_&#123;ab&#125; + c\cos\theta_&#123;ac&#125; = a \up&#123;1.4&#125;\\
              a\cos\theta_&#123;ab&#125; + c\cos\theta_&#123;bc&#125; = b \up&#123;1.4&#125;
              \end&#123;gathered&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and then prove the {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_via_jacks_rule_.wly:27:5
                </span>
              </span>
              <i>
                cosine rule
              </i>
              , which is the equation...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              c^2 = a^2 + b^2  - 2ab\cos\theta_&#123;ab&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...by manipulating the equations in Jack's rule.
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_via_jacks_rule_.wly:33:5
                </span>
              </span>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Because the equations in Jack's rule are
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_via_jacks_rule_.wly:37:9
                </span>
              </span>
              {" "}
              {" "}
              symmetric it suffices to prove the first equation.
              We need to consider two cases according to
              whether 
              side {" "}
              <Math>
                $c$
              </Math>
              {" "} is adjacent to {" "}
              <Math>
                $0$
              </Math>
              {" "} or {" "}
              <Math>
                $1$
              </Math>
              {" "}
              obtuse angles 
              (the two sub-cases in which there is {" "}
              <Math>
                $1$
              </Math>
              {" "} obtuse
              angle are symmetric to one another, we consider only one):
            </OuterP>
            <Pause />
            <Image
              src="/tmp-images/_e5_cosine_rule_via_jacks_two_cases.svg"
              local_url="./public/tmp-images/_e5_cosine_rule_via_jacks_two_cases.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                In Case 1 we obviously have
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_via_jacks_rule_.wly:49:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              c = a\cos\theta_&#123;ac&#125; + b\cos\theta_&#123;bc&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                verifying Jack's rule,
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_via_jacks_rule_.wly:55:9
                </span>
              </span>
              {" "}
              {" "}
              whereas, in Case 2, note that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -a\cos\theta_&#123;ab&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is positive—it's a {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_via_jacks_rule_.wly:62:9
                </span>
              </span>
              <i>
                length
              </i>
              {" "} as the diagram
              indicates—so
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              c = b\cos\theta_&#123;bc&#125; - (-a\cos\theta_&#123;ac&#125;) = b\cos\theta_&#123;bc&#125; + a\cos\theta_&#123;ac&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                again verifying Jack's rule, {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_via_jacks_rule_.wly:69:9
                </span>
              </span>
              {" "}
              {" "}
              and which completes the proof thereof. {" "}
              <InlineImage
                src="/tmp-images/_e5_cosine_rule_via_jacks_JACK_logo_.svg"
                style="transform:translate(0,-3px)"
              />
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Next, for the algebraic manipulation of the equations,
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_via_jacks_rule_.wly:75:9
                </span>
              </span>
              {" "}
              {" "}
              start by multiplying each equation in Jack's rule
              by its own right-hand side, obtaining...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;gathered&#125;
              ac\cos\theta_&#123;ac&#125; + bc\cos\theta_&#123;bc&#125; = c^2 \\
              ab\cos\theta_&#123;ab&#125; + ac\cos\theta_&#123;ac&#125; = a^2 \up&#123;1.4&#125;\\
              ab\cos\theta_&#123;ab&#125; + bc\cos\theta_&#123;bc&#125; = b^2 \up&#123;1.4&#125;
              \end&#123;gathered&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...but then if we subtract the last two equations from
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_via_jacks_rule_.wly:87:9
                </span>
              </span>
              {" "}
              {" "}
              the first we obtain...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -2ab\cos\theta_&#123;ab&#125; = c^2 - a^2 - b^2
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...which is the cosine rule, rearranged!
                <span class="t-3003">
                  ./src/content/ch5^exercises/_cosine_rule_via_jacks_rule_.wly:94:9
                </span>
              </span>
            </OuterP>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};