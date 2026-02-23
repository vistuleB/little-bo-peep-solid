import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { Item, List }  from "~/components/List";
import { Math, MathBlock }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageLeft, ImageRight }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { SolutionNote, InTextWarning, NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter1__() {
  return (
    <Article
      prevPage="/"
      nextPage=""
      pageNecessaryMargin={950}
      maxElementWidth={1000}
      id="_3_hgi_"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            <span class="t-3003-c">
              note on calculators
              <span class="t-3003">
                ./src/content/ch5.wly:1747:6
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
                ./src/content/ch5.wly:1747:6
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
            ./src/content/ch5.wly:1752:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a number close to {" "}
            <span class="t-3003">
              ./src/content/ch5.wly:1756:5
            </span>
          </span>
          <NoBreak>
            <span class="t-3003-c">
              <Math>
                $1$
              </Math>
              <span class="t-3003">
                ./src/content/ch5.wly:1756:26
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
                ./src/content/ch5.wly:1757:23
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
              ./src/content/ch5.wly:1759:8
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
      <Exercises id="_2_hgi_">
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
                Let
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:5:5
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f(x) = A\cos(Bx + C) + D
              $$
              <span class="t-3003">
                ./src/content/ch5^exercises/_ABCD_roles_.wly:7:5
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and imagine that each of the constants
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:11:5
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $A$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:12:5
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $B$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:12:10
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} {" "}
              <span class="t-3003-c">
                <Math>
                  $C$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:12:15
                </span>
              </span>
              {" "} and {" "}
              <span class="t-3003-c">
                <Math>
                  $D$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:12:23
                </span>
              </span>
              {" "} is connected to a dial,
              and we originally set {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $A$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:13:27
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $B$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:13:32
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} {" "}
              <span class="t-3003-c">
                <Math>
                  $C$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:13:37
                </span>
              </span>
              {" "} and {" "}
              <span class="t-3003-c">
                <Math>
                  $D$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:13:45
                </span>
              </span>
              {" "}
              to {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $1$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:14:8
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
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:14:13
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} {" "}
              <span class="t-3003-c">
                <Math>
                  $0$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:14:18
                </span>
              </span>
              {" "} and {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $0$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:14:26
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} respectively.
              Then, in the following order, we...
            </OuterP>
            <Pause />
            <List
              type="decimal"
              style="padding-left:25%;"
            >
              <Item>
                <p>
                  <span class="t-3003-c">
                    ...increase {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:21:9
                    </span>
                  </span>
                  <span class="t-3003-c">
                    <Math>
                      $C$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:21:21
                    </span>
                  </span>
                  <span class="t-3003-c">
                    {" "} from {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:21:24
                    </span>
                  </span>
                  <span class="t-3003-c">
                    <Math>
                      $0$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:21:30
                    </span>
                  </span>
                  <span class="t-3003-c">
                    {" "} to {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:21:33
                    </span>
                  </span>
                  <NoBreak>
                    <span class="t-3003-c">
                      <Math>
                        $1&#123;&#125;.33$
                      </Math>
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:21:37
                      </span>
                    </span>
                    <span class="t-3003-c">
                      ;
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:21:45
                      </span>
                    </span>
                  </NoBreak>
                  <span class="t-3003-c">
                    {" "} and
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:21:45
                    </span>
                  </span>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    ...increase {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:23:9
                    </span>
                  </span>
                  <span class="t-3003-c">
                    <Math>
                      $B$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:23:21
                    </span>
                  </span>
                  <span class="t-3003-c">
                    {" "} from {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:23:24
                    </span>
                  </span>
                  <span class="t-3003-c">
                    <Math>
                      $1$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:23:30
                    </span>
                  </span>
                  <span class="t-3003-c">
                    {" "} to {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:23:33
                    </span>
                  </span>
                  <NoBreak>
                    <span class="t-3003-c">
                      <Math>
                        $2.33$
                      </Math>
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:23:37
                      </span>
                    </span>
                    <span class="t-3003-c">
                      ;
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:23:43
                      </span>
                    </span>
                  </NoBreak>
                  <span class="t-3003-c">
                    {" "} and
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:23:43
                    </span>
                  </span>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    ...increase {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:25:9
                    </span>
                  </span>
                  <span class="t-3003-c">
                    <Math>
                      $A$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:25:21
                    </span>
                  </span>
                  <span class="t-3003-c">
                    {" "} from {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:25:24
                    </span>
                  </span>
                  <span class="t-3003-c">
                    <Math>
                      $1$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:25:30
                    </span>
                  </span>
                  <span class="t-3003-c">
                    {" "} to {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:25:33
                    </span>
                  </span>
                  <NoBreak>
                    <span class="t-3003-c">
                      <Math>
                        $3.33$
                      </Math>
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:25:37
                      </span>
                    </span>
                    <span class="t-3003-c">
                      ;
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:25:43
                      </span>
                    </span>
                  </NoBreak>
                  <span class="t-3003-c">
                    {" "} and
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:25:43
                    </span>
                  </span>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    ...increase {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:27:9
                    </span>
                  </span>
                  <span class="t-3003-c">
                    <Math>
                      $D$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:27:21
                    </span>
                  </span>
                  <span class="t-3003-c">
                    {" "} from {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:27:24
                    </span>
                  </span>
                  <span class="t-3003-c">
                    <Math>
                      $0$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:27:30
                    </span>
                  </span>
                  <span class="t-3003-c">
                    {" "} to {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:27:33
                    </span>
                  </span>
                  <NoBreak>
                    <span class="t-3003-c">
                      <Math>
                        $4.33$
                      </Math>
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:27:37
                      </span>
                    </span>
                    <span class="t-3003-c">
                      .
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:27:43
                      </span>
                    </span>
                  </NoBreak>
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                How does the graph of {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:29:5
                </span>
              </span>
              <span class="t-3003-c">
                <Math>
                  $f$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:29:27
                </span>
              </span>
              {" "} react to each
              of these changes, as they occur in sequence?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Solution 1.
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:44:10
                  </span>
                </span>
              </i>
              {" "} Reasoning by the analogy of
              a particle going around a circle at uniform
              speed (cf. Exercise {" "}
              <InTextWarning>
                undefined handle at ch5^exercises/_ABCD_roles_.wly:46:9: _circular_motion_from_x_coordinate_
              </InTextWarning>
              ):
            </OuterP>
            <Pause />
            <List style="padding-left:33px;padding-right:2em;">
              <Item>
                <p>
                  <span class="t-3003-c">
                    step 1: advances the initial position of
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:51:13
                    </span>
                  </span>
                  {" "}
                  {" "}
                  particle {" "}
                  <span class="t-3003-c">
                    <Math>
                      $C$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:52:22
                    </span>
                  </span>
                  <span class="t-3003-c">
                    {" "} radians forward, so the
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:52:25
                    </span>
                  </span>
                  {" "}
                  {" "}
                  graph shifts {" "}
                  <i>
                    <span class="t-3003-c">
                      left
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:53:27
                      </span>
                    </span>
                  </i>
                  <span class="t-3003-c">
                    {" "} by {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:53:32
                    </span>
                  </span>
                  <span class="t-3003-c">
                    <Math>
                      $C = 1.33$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:53:36
                    </span>
                  </span>
                  <span class="t-3003-c">
                    {" "} units (so that
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:53:46
                    </span>
                  </span>
                  {" "}
                  {" "}
                  the value {" "}
                  <span class="t-3003-c">
                    <Math>
                      $y = \sin(C)$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:54:23
                    </span>
                  </span>
                  <span class="t-3003-c">
                    {" "} finds itself at
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:54:36
                    </span>
                  </span>
                  {" "}
                  {" "}
                  {" "}{" "}
                  <NoBreak>
                    <span class="t-3003-c">
                      <Math>
                        $x = 0$
                      </Math>
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:55:13
                      </span>
                    </span>
                    <span class="t-3003-c">
                      ,
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:55:20
                      </span>
                    </span>
                  </NoBreak>
                  <span class="t-3003-c">
                    {" "} that's how you can verify if you
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:55:20
                    </span>
                  </span>
                  {" "}
                  {" "}
                  got leftward or rightward shift correctly);
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    step 2: speeds up the angular velocity of
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:58:13
                    </span>
                  </span>
                  {" "}
                  {" "}
                  the particle from {" "}
                  <span class="t-3003-c">
                    <Math>
                      $1$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:59:31
                    </span>
                  </span>
                  <span class="t-3003-c">
                    {" "} radian per unit time
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:59:34
                    </span>
                  </span>
                  {" "}
                  {" "}
                  to {" "}
                  <span class="t-3003-c">
                    <Math>
                      $B = 2.33$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:60:16
                    </span>
                  </span>
                  <span class="t-3003-c">
                    {" "} radians per unit time; this
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:60:26
                    </span>
                  </span>
                  {" "}
                  {" "}
                  can simply be thought of as a “speeding up
                  of time”, and compresses the graph horizontally
                  about the {" "}
                  <span class="t-3003-c">
                    <Math>
                      $y$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:63:23
                    </span>
                  </span>
                  <span class="t-3003-c">
                    {" "} axis by a factor {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:63:26
                    </span>
                  </span>
                  <NoBreak>
                    <span class="t-3003-c">
                      <Math>
                        $2.33$
                      </Math>
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:63:44
                      </span>
                    </span>
                    <span class="t-3003-c">
                      ;
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:63:50
                      </span>
                    </span>
                  </NoBreak>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    step 3: increases the radius of the circle
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:66:13
                    </span>
                  </span>
                  {" "}
                  {" "}
                  from {" "}
                  <span class="t-3003-c">
                    <Math>
                      $1$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:67:18
                    </span>
                  </span>
                  <span class="t-3003-c">
                    {" "} to {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:67:21
                    </span>
                  </span>
                  <NoBreak>
                    <span class="t-3003-c">
                      <Math>
                        $A = 3.33$
                      </Math>
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:67:25
                      </span>
                    </span>
                    <span class="t-3003-c">
                      ,
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:67:35
                      </span>
                    </span>
                  </NoBreak>
                  <span class="t-3003-c">
                    {" "} which results in
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:67:35
                    </span>
                  </span>
                  {" "}
                  {" "}
                  a vertical dilation of the graph by a
                  factor {" "}
                  <NoBreak>
                    <span class="t-3003-c">
                      <Math>
                        $3.33$
                      </Math>
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:69:20
                      </span>
                    </span>
                    <span class="t-3003-c">
                      ;
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:69:26
                      </span>
                    </span>
                  </NoBreak>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    step 4: moves the coordinate (say,
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:71:13
                    </span>
                  </span>
                  {" "}
                  {" "}
                  {" "}{" "}
                  <NoBreak>
                    <span class="t-3003-c">
                      <Math>
                        $y$
                      </Math>
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:72:13
                      </span>
                    </span>
                    <span class="t-3003-c">
                      -coordinate,
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:72:16
                      </span>
                    </span>
                  </NoBreak>
                  <span class="t-3003-c">
                    {" "} if we are thinking of {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:72:16
                    </span>
                  </span>
                  <span class="t-3003-c">
                    <Math>
                      $f$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:72:51
                    </span>
                  </span>
                  {" "}{" "}
                  {" "}
                  {" "}
                  <span class="t-3003-c">
                    as reading off the {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:73:13
                    </span>
                  </span>
                  <NoBreak>
                    <span class="t-3003-c">
                      <Math>
                        $y$
                      </Math>
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:73:32
                      </span>
                    </span>
                    <span class="t-3003-c">
                      -coordainte
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:73:35
                      </span>
                    </span>
                  </NoBreak>
                  <span class="t-3003-c">
                    {" "} of the
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:73:35
                    </span>
                  </span>
                  {" "}
                  {" "}
                  particle) from {" "}
                  <span class="t-3003-c">
                    <Math>
                      $y = 0$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:74:28
                    </span>
                  </span>
                  <span class="t-3003-c">
                    {" "} to {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:74:35
                    </span>
                  </span>
                  <NoBreak>
                    <span class="t-3003-c">
                      <Math>
                        $y = D = 4.33$
                      </Math>
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:74:39
                      </span>
                    </span>
                    <span class="t-3003-c">
                      ,
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:74:53
                      </span>
                    </span>
                  </NoBreak>
                  <span class="t-3003-c">
                    {" "} resulting
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:74:53
                    </span>
                  </span>
                  {" "}
                  {" "}
                  in a vertical translation upwards of the
                  graph by {" "}
                  <span class="t-3003-c">
                    <Math>
                      $4.33$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:76:22
                    </span>
                  </span>
                  <span class="t-3003-c">
                    {" "} units!
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:76:28
                    </span>
                  </span>
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  Solution 2.
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:80:10
                  </span>
                </span>
              </i>
              {" "} One can understand
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f = x \ra A\sin(Bx + C) + D
              $$
              <span class="t-3003">
                ./src/content/ch5^exercises/_ABCD_roles_.wly:82:9
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as a 5-fold composition (with functions
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:86:9
                </span>
              </span>
              {" "}
              {" "}
              boxes going right to left):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/r-G7.svg"
              local_url="./images/e5_ABCD_roles_general_comp.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                In the initial setting of the variables
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:92:9
                </span>
              </span>
              {" "}
              {" "}
              with {" "}
              <span class="t-3003-c">
                <Math>
                  $A = B = 1$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:93:14
                </span>
              </span>
              {" "} and {" "}
              <span class="t-3003-c">
                <Math>
                  $C = D = 0$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:93:30
                </span>
              </span>
              {" "}
              the four boxes on the periphery are the
              identity*:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/sweo.svg"
              local_url="./images/e5_ABCD_roles_identity_comp.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (*When we say “the identity” we mean
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:100:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                the identity function
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:102:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which is the function {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:104:9
                </span>
              </span>
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $x \ra x$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:104:31
                  </span>
                </span>
                .)
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                As we dial {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:106:9
                </span>
              </span>
              <span class="t-3003-c">
                <Math>
                  $C$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:106:20
                </span>
              </span>
              {" "} up from {" "}
              <span class="t-3003-c">
                <Math>
                  $0$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:106:32
                </span>
              </span>
              {" "} to {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $1.33$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:106:39
                  </span>
                </span>
                ,
              </NoBreak>
              {" "}
              the box to the right of sin is
              “brought online”:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/2ziI.svg"
              local_url="./images/e5_ABCD_roles_identity_comp_C.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The effect of adding such a box to the
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:114:9
                </span>
              </span>
              {" "}
              {" "}
              right of sin is to translate the
              graph of sin to the left by {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $C$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:116:37
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} as discussed
              in Exercise {" "}
              <InTextWarning>
                undefined handle at ch5^exercises/_ABCD_roles_.wly:117:9: _four_compositions_graphed_
              </InTextWarning>
              .
              The second step in which {" "}
              <span class="t-3003-c">
                <Math>
                  $B$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:118:34
                </span>
              </span>
              {" "} is increased from
              {" "}
              <span class="t-3003-c">
                <Math>
                  $1$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:119:9
                </span>
              </span>
              {" "} to {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $2.33$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:119:16
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} brings the rightmost box online:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Ao9J.svg"
              local_url="./images/e5_ABCD_roles_identity_comp_B.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Because this box is to the right of all
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:124:9
                </span>
              </span>
              {" "}
              {" "}
              we have so far (which is {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $x \ra \sin(x + C)$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:125:34
                  </span>
                </span>
                ),
              </NoBreak>
              {" "}
              it compresses the [current] graph horizontally by
              a factor {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $B$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:127:18
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} also as discussed in Exercise {" "}
              <InTextWarning>
                undefined handle at ch5^exercises/_ABCD_roles_.wly:127:21: _four_compositions_graphed_
              </InTextWarning>
              ;
              step 3 brings the box immediately to the
              left of sin online...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/DvlU.svg"
              local_url="./images/e5_ABCD_roles_identity_comp_A.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...which scales the graph-so-far vertically by a
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:134:9
                </span>
              </span>
              {" "}
              {" "}
              factor {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $A$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:135:16
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} as discussed in Exercise {" "}
              <InTextWarning>
                undefined handle at ch5^exercises/_ABCD_roles_.wly:135:19: _four_compositions_graphed_
              </InTextWarning>
              ,
              and finally step 4 brings the leftmost box online...
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/mE-x.svg"
              local_url="./images/e5_ABCD_roles_identity_comp_D.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...that vertically translates the entire graph,
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:141:9
                </span>
              </span>
              {" "}
              {" "}
              as it stands, by {" "}
              <span class="t-3003-c">
                <Math>
                  $D$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:142:26
                </span>
              </span>
              {" "} units up, as again discussed
              in Exercise {" "}
              <InTextWarning>
                undefined handle at ch5^exercises/_ABCD_roles_.wly:143:9: _four_compositions_graphed_
              </InTextWarning>
              .
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                To recapitulate, starting from {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:145:9
                </span>
              </span>
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $y = \sin(x)$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:145:40
                  </span>
                </span>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <List style="padding-left:33px;padding-right:2em;">
              <Item>
                <p>
                  <span class="t-3003-c">
                    step 1: translates the graph left by {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:150:13
                    </span>
                  </span>
                  <span class="t-3003-c">
                    <Math>
                      $1.33\,\,(= C)$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:150:50
                    </span>
                  </span>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    step 2: compresses the resulting graph horizontally by {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:152:13
                    </span>
                  </span>
                  <span class="t-3003-c">
                    <Math>
                      $2.33\,\,(= B)$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:152:68
                    </span>
                  </span>
                  <span class="t-3003-c">
                    {" "} about the {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:152:83
                    </span>
                  </span>
                  <span class="t-3003-c">
                    <Math>
                      $y$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:152:94
                    </span>
                  </span>
                  <span class="t-3003-c">
                    {" "} axis
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:152:97
                    </span>
                  </span>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    step 3: dilates the resulting graph vertically by {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:154:13
                    </span>
                  </span>
                  <span class="t-3003-c">
                    <Math>
                      $3.33\,\,(= A)$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:154:63
                    </span>
                  </span>
                  <span class="t-3003-c">
                    {" "} about the {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:154:78
                    </span>
                  </span>
                  <span class="t-3003-c">
                    <Math>
                      $x$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:154:89
                    </span>
                  </span>
                  <span class="t-3003-c">
                    {" "} axis
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:154:92
                    </span>
                  </span>
                </p>
              </Item>
              <Item>
                <p>
                  <span class="t-3003-c">
                    step 4: translates the resulting graph up by {" "}
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:156:13
                    </span>
                  </span>
                  <span class="t-3003-c">
                    <Math>
                      $4.33\,\,(= D)$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:156:58
                    </span>
                  </span>
                </p>
              </Item>
            </List>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...and that's the end.
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:158:9
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
                  Concerning the second solution, for simplicity of analysis it's important
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:162:13
                  </span>
                </span>
                {" "}
                {" "}
                to bring the pre- and post-processing
                functions online “from the inside out”,
                gluing new boxes on to what's already there:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/EsiI.svg"
                local_url="./images/e5_ABCD_roles_identity_comp_inside_out.svg"
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  Otherwise, to give an example of what may
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:170:13
                  </span>
                </span>
                {" "}
                {" "}
                go wrong, say that we first bring the rightmost
                box online:
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/cm5u.svg"
                local_url="./images/e5_ABCD_roles_identity_comp_rightmost.svg"
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  At this stage we have
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:177:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x \ra \sin(Bx)
                $$
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:179:13
                </span>
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  which is a copy of {" "}
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:183:13
                  </span>
                </span>
                <span class="t-3003-c">
                  <Math>
                    $\sin(x)$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:183:32
                  </span>
                </span>
                {" "} horizontally
                compressed by {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $B = 2.33$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:184:27
                    </span>
                  </span>
                  .
                </NoBreak>
                {" "} Then if we bring
                {" "}
                <span class="t-3003-c">
                  <Math>
                    $x \ra x + C$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:185:13
                  </span>
                </span>
                {" "} online...
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/2e-D.svg"
                local_url="./images/e5_ABCD_roles_identity_comp_middle.svg"
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...at this stage {" "}
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:190:13
                  </span>
                </span>
                <span class="t-3003-c">
                  <Math>
                    $x \ra x + C$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:190:30
                  </span>
                </span>
                {" "} is
                NEITHER A PRE-PROCESSING NOR A POST-PROCESSING FUNCTION; 
                the effect of adding this function is
                NOT a translation of the graph by {" "}
                <span class="t-3003-c">
                  <Math>
                    $C$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:194:47
                  </span>
                </span>
                {" "} units in any
                direction!; instead, the effect of inserting this
                intermediate function into the chain is
                that the graph is translated left by
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                C/B
                $$
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:199:13
                </span>
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  units, as we can verify by rewriting
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:203:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x \ra \sin(Bx + C)
                $$
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:205:13
                </span>
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  (the function above), as
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:209:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x \ra \sin(B(x + C/B))
                $$
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:211:13
                </span>
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...which corresponds to this modified assemblage
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:215:13
                  </span>
                </span>
                {" "}
                {" "}
                of boxes...
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/kh5Y.svg"
                local_url="./images/e5_ABCD_roles_identity_comp_rearranged.svg"
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...and in which you can see that, after we
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:221:13
                  </span>
                </span>
                {" "}
                {" "}
                dial up {" "}
                <span class="t-3003-c">
                  <Math>
                    $B$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:222:21
                  </span>
                </span>
                {" "} (introducing the {" "}
                <NoBreak>
                  “
                  <span class="t-3003-c">
                    <Math>
                      $x \ra Bx$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:222:43
                    </span>
                  </span>
                  ”
                </NoBreak>
                {" "} box),
                the effect of dialing up {" "}
                <span class="t-3003-c">
                  <Math>
                    $C$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:223:38
                  </span>
                </span>
                {" "} is to translate
                the graph left by {" "}
                <span class="t-3003-c">
                  <Math>
                    $C/B$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:224:31
                  </span>
                </span>
                {" "} units. 
                (The point is, if you
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  translate-and-then-compress
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:227:15
                  </span>
                </span>
                <ImageRight
                  src="/tmp-images/e5_ABCD_roles_compress_and_then_translate_cloud.svg"
                  local_url="./public/tmp-images/e5_ABCD_roles_compress_and_then_translate_cloud.svg"
                />
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  or if you
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:232:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  compress-and-then-translate
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:234:15
                  </span>
                </span>
                <ImageRight
                  src="/tmp-images/e5_ABCD_roles_translate_and_then_compress_cloud.svg"
                  local_url="./public/tmp-images/e5_ABCD_roles_translate_and_then_compress_cloud.svg"
                />
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  the two amounts of translation required are
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:239:13
                  </span>
                </span>
                {" "}
                {" "}
                not the same, to achieve the same end result—if
                the translation comes second, it needs to
                be compressed, because everything else has
                already been compressed!) (And by the 
                way things blow up even worse if you attempt
                to dial {" "}
                <span class="t-3003-c">
                  <Math>
                    $D$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:245:21
                  </span>
                </span>
                {" "} up before dialing {" "}
                <span class="t-3003-c">
                  <Math>
                    $A$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:245:43
                  </span>
                </span>
                {" "} up, because if
                you attempt the same distributivity trick on the
                left-hand side to invert the order of the two boxes
                there...
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/te-X.svg"
                local_url="./images/e5_ABCD_roles_identity_comp_rearranged_zz.svg"
              >
                <ImageLeft
                  src="/tmp-images/e5_ABCD_roles_Au_cloud.svg"
                  offset_x="2em"
                  local_url="./public/tmp-images/e5_ABCD_roles_Au_cloud.svg"
                />
              </Image>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...you find that after {" "}
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:257:13
                  </span>
                </span>
                <span class="t-3003-c">
                  <Math>
                    $D$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:257:36
                  </span>
                </span>
                {" "} has been dialed up,
                and it comes time to change {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $A$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:258:41
                    </span>
                  </span>
                  ,
                </NoBreak>
                {" "} there are TWO
                boxes left that depend on {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $A$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:259:39
                    </span>
                  </span>
                  !—so
                </NoBreak>
                {" "} long story
                short, it becomes very difficult/annoying to
                analyze the effect that changing {" "}
                <span class="t-3003-c">
                  <Math>
                    $A$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:261:46
                  </span>
                </span>
                {" "} has on the
                graph, if we do it after {" "}
                <span class="t-3003-c">
                  <Math>
                    $D$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:262:38
                  </span>
                </span>
                {" "} is nonzero.)
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
                  The problem uses ‘sin’ as an example but the
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:266:13
                  </span>
                </span>
                {" "}
                {" "}
                same reasoning (with boxes) applies to any
                function. Namely, the graph
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                y = A\cdot f(Bx + C) + D
                $$
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:270:13
                </span>
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  is the graph {" "}
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:274:13
                  </span>
                </span>
                <span class="t-3003-c">
                  <Math>
                    $y = f(x)$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:274:26
                  </span>
                </span>
                {" "} translates left by
                {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $C$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:275:13
                    </span>
                  </span>
                  ,
                </NoBreak>
                {" "} compressed (horizontally) by {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $B$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:275:47
                    </span>
                  </span>
                  ,
                </NoBreak>
                {" "}
                scaled (vertically) by {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $A$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:276:36
                    </span>
                  </span>
                  ,
                </NoBreak>
                {" "} etc. (Well, “etc.”:
                translated vertically by {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $D$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:277:38
                    </span>
                  </span>
                  .)
                </NoBreak>
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 3.
                </i>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  A function that can be written as
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:284:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x \ra A\sin(Bx + C) + D
                $$
                <span class="t-3003">
                  ./src/content/ch5^exercises/_ABCD_roles_.wly:286:13
                </span>
              </MathBlock>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  for some values of {" "}
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:290:13
                  </span>
                </span>
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $A$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:290:32
                    </span>
                  </span>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $B$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:290:37
                    </span>
                  </span>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $C$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:290:42
                    </span>
                  </span>
                  ,
                </NoBreak>
                {" "} {" "}
                <span class="t-3003-c">
                  <Math>
                    $D \in \rr$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:290:47
                  </span>
                </span>
                {" "}
                is called a
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  sinusoid
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:293:15
                  </span>
                </span>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  (if we switch ‘sin’ to ‘cos’ it gives the same
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:295:13
                  </span>
                </span>
                {" "}
                {" "}
                class of functions: {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $\sin(Bx + C) = \cos(Bx + C - \eta)$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_ABCD_roles_.wly:296:33
                    </span>
                  </span>
                  ).
                </NoBreak>
              </OuterP>
              <OuterP class="indent-10">
                <span class="t-3003-c">
                  Moreover:
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_ABCD_roles_.wly:298:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <List style="padding-left:33px;padding-right:2em;">
                <Item>
                  <p>
                    <NoBreak>
                      <span class="t-3003-c">
                        <Math>
                          $C$
                        </Math>
                        <span class="t-3003">
                          ./src/content/ch5^exercises/_ABCD_roles_.wly:303:17
                        </span>
                      </span>
                      <span class="t-3003-c">
                        :
                        <span class="t-3003">
                          ./src/content/ch5^exercises/_ABCD_roles_.wly:303:20
                        </span>
                      </span>
                    </NoBreak>
                    <span class="t-3003-c">
                      {" "} may be referred to as the {" "}
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:303:20
                      </span>
                    </span>
                    <i>
                      <span class="t-3003-c">
                        phase
                        <span class="t-3003">
                          ./src/content/ch5^exercises/_ABCD_roles_.wly:303:49
                        </span>
                      </span>
                    </i>
                    {" "}{" "}
                    {" "}
                    {" "}
                    <span class="t-3003-c">
                      of the sinuoid (but which is only uniquely determined
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:304:17
                      </span>
                    </span>
                    {" "}
                    {" "}
                    if you have decided whether your sinusoid is
                    written in terms of ‘cos’ or ‘sin’, and even
                    then only determined up to {" "}
                    <NoBreak>
                      <span class="t-3003-c">
                        <Math>
                          $360^\circ = 4\eta$
                        </Math>
                        <span class="t-3003">
                          ./src/content/ch5^exercises/_ABCD_roles_.wly:307:44
                        </span>
                      </span>
                      <span class="t-3003-c">
                        ,
                        <span class="t-3003">
                          ./src/content/ch5^exercises/_ABCD_roles_.wly:307:63
                        </span>
                      </span>
                    </NoBreak>
                    {" "}{" "}
                    {" "}
                    {" "}
                    <span class="t-3003-c">
                      or, even worse,
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:308:17
                      </span>
                    </span>
                    {" "}
                    {" "}
                    up to {" "}
                    <span class="t-3003-c">
                      <Math>
                        $180^\circ = 2\eta$
                      </Math>
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:309:23
                      </span>
                    </span>
                    <span class="t-3003-c">
                      {" "} if negative values of {" "}
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:309:42
                      </span>
                    </span>
                    <span class="t-3003-c">
                      <Math>
                        $A$
                      </Math>
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:309:65
                      </span>
                    </span>
                    {" "}{" "}
                    {" "}
                    {" "}
                    <span class="t-3003-c">
                      are allowed)
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:310:17
                      </span>
                    </span>
                  </p>
                </Item>
                <Item>
                  <p>
                    <NoBreak>
                      <span class="t-3003-c">
                        <Math>
                          $A$
                        </Math>
                        <span class="t-3003">
                          ./src/content/ch5^exercises/_ABCD_roles_.wly:312:17
                        </span>
                      </span>
                      <span class="t-3003-c">
                        :
                        <span class="t-3003">
                          ./src/content/ch5^exercises/_ABCD_roles_.wly:312:20
                        </span>
                      </span>
                    </NoBreak>
                    <span class="t-3003-c">
                      {" "} may be referred to as the {" "}
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:312:20
                      </span>
                    </span>
                    <i>
                      <span class="t-3003-c">
                        amplitude
                        <span class="t-3003">
                          ./src/content/ch5^exercises/_ABCD_roles_.wly:312:49
                        </span>
                      </span>
                    </i>
                    <span class="t-3003-c">
                      {" "} of the
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:312:59
                      </span>
                    </span>
                    {" "}
                    {" "}
                    sinusoid
                  </p>
                </Item>
                <Item>
                  <p>
                    <NoBreak>
                      <span class="t-3003-c">
                        <Math>
                          $B$
                        </Math>
                        <span class="t-3003">
                          ./src/content/ch5^exercises/_ABCD_roles_.wly:315:17
                        </span>
                      </span>
                      <span class="t-3003-c">
                        :
                        <span class="t-3003">
                          ./src/content/ch5^exercises/_ABCD_roles_.wly:315:20
                        </span>
                      </span>
                    </NoBreak>
                    <span class="t-3003-c">
                      {" "} may be referred to as the {" "}
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:315:20
                      </span>
                    </span>
                    <i>
                      <span class="t-3003-c">
                        angular speed
                        <span class="t-3003">
                          ./src/content/ch5^exercises/_ABCD_roles_.wly:315:49
                        </span>
                      </span>
                    </i>
                    <span class="t-3003-c">
                      {" "} or
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:315:63
                      </span>
                    </span>
                    {" "}
                    {" "}
                    {" "}{" "}
                    <i>
                      <span class="t-3003-c">
                        angular frequency
                        <span class="t-3003">
                          ./src/content/ch5^exercises/_ABCD_roles_.wly:316:18
                        </span>
                      </span>
                    </i>
                    <span class="t-3003-c">
                      {" "} of the sinusoid
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:316:36
                      </span>
                    </span>
                  </p>
                </Item>
                <Item>
                  <p>
                    <NoBreak>
                      <span class="t-3003-c">
                        <Math>
                          $D$
                        </Math>
                        <span class="t-3003">
                          ./src/content/ch5^exercises/_ABCD_roles_.wly:318:17
                        </span>
                      </span>
                      <span class="t-3003-c">
                        :
                        <span class="t-3003">
                          ./src/content/ch5^exercises/_ABCD_roles_.wly:318:20
                        </span>
                      </span>
                    </NoBreak>
                    <span class="t-3003-c">
                      {" "} may be referred to as the {" "}
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:318:20
                      </span>
                    </span>
                    <i>
                      <span class="t-3003-c">
                        vertical shift
                        <span class="t-3003">
                          ./src/content/ch5^exercises/_ABCD_roles_.wly:318:49
                        </span>
                      </span>
                    </i>
                    {" "}{" "}
                    {" "}
                    {" "}
                    <span class="t-3003-c">
                      (mathematics) or as the {" "}
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:319:17
                      </span>
                    </span>
                    <i>
                      <span class="t-3003-c">
                        DC bias
                        <span class="t-3003">
                          ./src/content/ch5^exercises/_ABCD_roles_.wly:319:42
                        </span>
                      </span>
                    </i>
                    <span class="t-3003-c">
                      {" "} or {" "}
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:319:50
                      </span>
                    </span>
                    <i>
                      <span class="t-3003-c">
                        DC offset
                        <span class="t-3003">
                          ./src/content/ch5^exercises/_ABCD_roles_.wly:319:55
                        </span>
                      </span>
                    </i>
                    <span class="t-3003-c">
                      {" "} (engineering)
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:319:65
                      </span>
                    </span>
                    {" "}
                    {" "}
                    or as the {" "}
                    <i>
                      <span class="t-3003-c">
                        equilibrium position
                        <span class="t-3003">
                          ./src/content/ch5^exercises/_ABCD_roles_.wly:320:28
                        </span>
                      </span>
                    </i>
                    <span class="t-3003-c">
                      {" "} (physics) of
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_ABCD_roles_.wly:320:49
                      </span>
                    </span>
                    {" "}
                    {" "}
                    the sinusoid
                  </p>
                </Item>
              </List>
            </SolutionNote>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};