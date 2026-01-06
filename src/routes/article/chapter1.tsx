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
import { NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter1__() {
  return (
    <Article
      prevPage="/"
      nextPage=""
      pageNecessaryMargin={1450}
      maxElementWidth={700}
      id="_2_hgi_"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            <span class="t-3003-c">
              the jerk
              <span class="t-3003">
                ./src/content/chapter4.wly:687:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=exercises">
            <span class="t-3003-c">
              exercises
              <span class="t-3003">
                ./src/content/chapter4^exercises/__parent.wly:1:1
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 1:">
        <span class="t-3003-c">
          Derivatives
          <span class="t-3003">
            ./src/content/chapter4__parent.wly:2:11
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
              The Jerk.
              <span class="t-3003">
                ./src/content/chapter4.wly:687:6
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
              ./src/content/chapter4.wly:691:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            in physics. The units of jerk (or “the”
            <span class="t-3003">
              ./src/content/chapter4.wly:693:5
            </span>
          </span>
          {" "}
          {" "}
          units of jerk, since any units of same
          {" "}
          <i>
            dimension
          </i>
          {" "} would do as well) are
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;m&#125; \over \,\te&#123;s&#125;\!&#123;\,&#125;^3&#125;
          $$
          <span class="t-3003">
            ./src/content/chapter4.wly:697:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            or
            <span class="t-3003">
              ./src/content/chapter4.wly:701:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            meters per second, per second, per second
            <span class="t-3003">
              ./src/content/chapter4.wly:703:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            which is mildly amusing. Basically, the
            <span class="t-3003">
              ./src/content/chapter4.wly:705:5
            </span>
          </span>
          {" "}
          {" "}
          jerk specifies how many {" "}
          <i>
            meters per second,
            per second
          </i>
          {" "} 
          (a measure of acceleration!)
          is being gained or lost {" "}
          <i>
            per second
          </i>
          .
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            The term “jerk” is at least half-way well-chosen, too,
            <span class="t-3003">
              ./src/content/chapter4.wly:711:5
            </span>
          </span>
          {" "}
          {" "}
          considering that
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            jerk
            <span class="t-3003">
              ./src/content/chapter4.wly:714:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            implies a change in acceleration insofar as the
            <span class="t-3003">
              ./src/content/chapter4.wly:716:5
            </span>
          </span>
          {" "}
          {" "}
          everyday meaning of the word is concerned—think of a
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            constant acceleration
            <span class="t-3003">
              ./src/content/chapter4.wly:719:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            experience inside of a train or subway car—by merely
            <span class="t-3003">
              ./src/content/chapter4.wly:721:5
            </span>
          </span>
          {" "}
          {" "}
          saying “constant” we are implying a non-jerky
          experience.
        </OuterP>
        <Pause />
        <OuterP>
          <b>
            <span class="t-3003-c">
              Postscript: Sums, Products, Quotients,
              <span class="t-3003">
                ./src/content/chapter4.wly:774:6
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
            ./src/content/chapter4.wly:779:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            then
            <span class="t-3003">
              ./src/content/chapter4.wly:783:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f \circ g = (x \ra f(g(x)))
          $$
          <span class="t-3003">
            ./src/content/chapter4.wly:785:5
          </span>
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          f + g = (x \ra f(x) + g(x))
          $$
          <span class="t-3003">
            ./src/content/chapter4.wly:788:5
          </span>
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          fg = (x \ra f(x)g
          (x))
          $$
          <span class="t-3003">
            ./src/content/chapter4.wly:791:5
          </span>
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          &#123;f/g&#125; = (x \ra &#123;f(x)/g(x)&#125;)
          $$
          <span class="t-3003">
            ./src/content/chapter4.wly:795:5
          </span>
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          f - g = (x \ra f(x) - g(x))
          $$
          <span class="t-3003">
            ./src/content/chapter4.wly:798:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            with each equation being a {" "}
            <span class="t-3003">
              ./src/content/chapter4.wly:802:5
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
            ./src/content/chapter4.wly:805:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            goes back to Exercise {" "}
            <span class="t-3003">
              ./src/content/chapter4.wly:809:5
            </span>
          </span>
          <span style="color:red;background-color:yellow;">
            undefined handle at chapter4.wly:809:5: {" "}
            <i>
              factory
            </i>
            roof
            <i>
              functions
            </i>
            1_
          </span>
          {" "} of Chapter {" "}
          <span style="color:red;background-color:yellow;">
            undefined handle at chapter4.wly:809:5: functions
          </span>
          , with
          the little circle {" "}
          <NoBreak>
            “
            <span class="t-3003-c">
              <Math>
                $\circ$
              </Math>
              <span class="t-3003">
                ./src/content/chapter4.wly:810:24
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
            ./src/content/chapter4.wly:813:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and product
            <span class="t-3003">
              ./src/content/chapter4.wly:817:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          fg
          $$
          <span class="t-3003">
            ./src/content/chapter4.wly:819:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            of functions already appear in Exercise {" "}
            <span class="t-3003">
              ./src/content/chapter4.wly:823:5
            </span>
          </span>
          <span style="color:red;background-color:yellow;">
            undefined handle at chapter4.wly:823:5: {" "}
            <i>
              function
            </i>
            operations
            <i>
              Q
            </i>
            and
            <i>
              A
            </i>
          </span>
          {" "}
          of Chapter {" "}
          <span style="color:red;background-color:yellow;">
            undefined handle at chapter4.wly:824:5: functions
          </span>
          , also. (On the other hand, the
          quotient (i.e. {" "}
          <NoBreak>
            <span class="t-3003-c">
              <Math>
                $f/g$
              </Math>
              <span class="t-3003">
                ./src/content/chapter4.wly:825:20
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
                ./src/content/chapter4.wly:826:5
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
          <ExerciseStatement id="_1_hgi_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              {" "}{" "}
              {" "}
              {" "}
              <span class="t-3003-c">
                If the graph below has three “bumps” (two up,
                <span class="t-3003">
                  ./src/content/chapter4^exercises/_how_many_bumps_.wly:5:5
                </span>
              </span>
              {" "}
              {" "}
              one down), then how many “bumps” does its derivative
              have?
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/aG77.svg"
              style="padding-bottom:1rem"
              local_url="./images/how_many_bumps_statement.svg"
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The derivative has a “bump” wherever the slope
                <span class="t-3003">
                  ./src/content/chapter4^exercises/_how_many_bumps_.wly:15:9
                </span>
              </span>
              {" "}
              {" "}
              has a local maximum or local minimum, which happens
              at four places:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Lc65.svg"
              local_url="./images/how_many_bumps_statement_with_derivative.svg"
            />
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};