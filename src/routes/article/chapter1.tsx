import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Boxed  from "~/components/Boxed";
import { CentralDisplayItalic, CentralDisplay }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { Math, MathBlock }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import Solution  from "~/components/Solution";
import { SolutionNote, NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter1__() {
  return (
    <Article
      prevPage="/"
      nextPage=""
      pageNecessaryMargin={950}
      maxElementWidth={1000}
      id="_5_hgi_"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            <span class="t-3003-c">
              parenthetization and powers
              <span class="t-3003">
                ./src/content/ch5.wly:394:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            <span class="t-3003-c">
              note on calculators
              <span class="t-3003">
                ./src/content/ch5.wly:1757:6
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
              Parenthetization and powers.
              <span class="t-3003">
                ./src/content/ch5.wly:394:6
              </span>
            </span>
          </b>
          {" "} 
          It is allowed to write
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;“&#125;\cos x\rt&#123;0.2&#125;\te&#123;”&#125;
          $$
          <span class="t-3003">
            ./src/content/ch5.wly:396:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for
            <span class="t-3003">
              ./src/content/ch5.wly:399:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;“&#125;\cos(x)\rt&#123;0.1&#125;\te&#123;”&#125;
          $$
          <span class="t-3003">
            ./src/content/ch5.wly:400:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            when the input is just one symbol. Also,
            <span class="t-3003">
              ./src/content/ch5.wly:403:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos^2(x)
          $$
          <span class="t-3003">
            ./src/content/ch5.wly:404:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (or
            <span class="t-3003">
              ./src/content/ch5.wly:407:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos^2 x
          $$
          <span class="t-3003">
            ./src/content/ch5.wly:408:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            similarly to the just-introduced convention)
            <span class="t-3003">
              ./src/content/ch5.wly:411:5
            </span>
          </span>
          {" "}
          {" "}
          means
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (\cos(x))^2 = (\cos x)^2
          $$
          <span class="t-3003">
            ./src/content/ch5.wly:413:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            which is a special case of the fact that
            <span class="t-3003">
              ./src/content/ch5.wly:416:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f^2(x) = (f(x))^2
          $$
          <span class="t-3003">
            ./src/content/ch5.wly:417:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for any function {" "}
            <span class="t-3003">
              ./src/content/ch5.wly:420:5
            </span>
          </span>
          <NoBreak>
            <span class="t-3003-c">
              <Math>
                $f$
              </Math>
              <span class="t-3003">
                ./src/content/ch5.wly:420:22
              </span>
            </span>
            ,
          </NoBreak>
          {" "}
          which is itself a special case of the fact that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (fg)(x) = f(x)g(x)
          $$
          <span class="t-3003">
            ./src/content/ch5.wly:422:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            for all functions {" "}
            <span class="t-3003">
              ./src/content/ch5.wly:425:5
            </span>
          </span>
          <span class="t-3003-c">
            <Math>
              $f$
            </Math>
            <span class="t-3003">
              ./src/content/ch5.wly:425:23
            </span>
          </span>
          {" "} and {" "}
          <NoBreak>
            <span class="t-3003-c">
              <Math>
                $g$
              </Math>
              <span class="t-3003">
                ./src/content/ch5.wly:425:31
              </span>
            </span>
            .
          </NoBreak>
          {" "}
          (The definition of function multiplication!)
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
                ./src/content/ch5.wly:1757:6
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
            ./src/content/ch5.wly:1762:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a number close to {" "}
            <span class="t-3003">
              ./src/content/ch5.wly:1766:5
            </span>
          </span>
          <NoBreak>
            <span class="t-3003-c">
              <Math>
                $1$
              </Math>
              <span class="t-3003">
                ./src/content/ch5.wly:1766:26
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
                ./src/content/ch5.wly:1767:23
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
              ./src/content/ch5.wly:1769:8
            </span>
          </span>
          {" "} as a number of degrees, instead of
          as a number of radians! (Be sure, in any
          case, that you're in the mode that you want.)
        </OuterP>
      </Section>
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
                    <span class="t-3003-c">
                      <Math>
                        $x \ra \sin x \cdot \cos x$
                      </Math>
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_four_graphs_.wly:21:21
                      </span>
                    </span>
                  </td>
                  <td style="padding:0.5em 0;">
                    <span class="t-3003-c">
                      <Math>
                        $x \ra \cos^2 x$
                      </Math>
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_four_graphs_.wly:25:21
                      </span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0.5em 0;border-right:1px solid black">
                    <span class="t-3003-c">
                      <Math>
                        $x \ra \sin^2 x$
                      </Math>
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_four_graphs_.wly:30:21
                      </span>
                    </span>
                  </td>
                  <td style="padding:0.5em 0;">
                    <span class="t-3003-c">
                      <Math>
                        $x \ra \sin x + \cos x$
                      </Math>
                      <span class="t-3003">
                        ./src/content/ch5^exercises/_four_graphs_.wly:34:21
                      </span>
                    </span>
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
              <span class="t-3003">
                ./src/content/ch5^exercises/_four_graphs_.wly:41:9
              </span>
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              x \ra \cos^2 x
              $$
              <span class="t-3003">
                ./src/content/ch5^exercises/_four_graphs_.wly:44:9
              </span>
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
              <span class="t-3003">
                ./src/content/ch5^exercises/_four_graphs_.wly:53:9
              </span>
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \sin(0) = 0
              $$
              <span class="t-3003">
                ./src/content/ch5^exercises/_four_graphs_.wly:56:9
              </span>
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
              <span class="t-3003">
                ./src/content/ch5^exercises/_four_graphs_.wly:60:9
              </span>
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
              <span class="t-3003">
                ./src/content/ch5^exercises/_four_graphs_.wly:64:9
              </span>
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
              -1 \leq \sin x \cdot \cos x \leq 1
              $$
              <span class="t-3003">
                ./src/content/ch5^exercises/_four_graphs_.wly:68:9
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for all {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_four_graphs_.wly:71:9
                </span>
              </span>
              <span class="t-3003-c">
                <Math>
                  $x \in \rr$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_four_graphs_.wly:71:17
                </span>
              </span>
              {" "} (as the product of
              two numbers that are between {" "}
              <span class="t-3003-c">
                <Math>
                  $-1$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_four_graphs_.wly:72:38
                </span>
              </span>
              {" "} and {" "}
              <span class="t-3003-c">
                <Math>
                  $1$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_four_graphs_.wly:72:47
                </span>
              </span>
              {" "} is
              itself between {" "}
              <span class="t-3003-c">
                <Math>
                  $-1$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_four_graphs_.wly:73:24
                </span>
              </span>
              {" "} and {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $1$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_four_graphs_.wly:73:33
                  </span>
                </span>
                ),
              </NoBreak>
              {" "} whereas the
              top left graph is at times greater than {" "}
              <span class="t-3003-c">
                <Math>
                  $1$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_four_graphs_.wly:74:49
                </span>
              </span>
              {" "}
              and at times less than {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $-1$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_four_graphs_.wly:75:32
                  </span>
                </span>
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
                  ...and it is
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
                appearance of their graphs! (A “sinusoid” is 
                formally defined as a function of the form
                {" "}
                <span class="t-3003-c">
                  <Math>
                    $x \ra A\cdot \sin(Bx + C) + D$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_four_graphs_.wly:94:13
                  </span>
                </span>
                {" "} for some 
                constants {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $A$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_four_graphs_.wly:95:23
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
                      ./src/content/ch5^exercises/_four_graphs_.wly:95:28
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
                      ./src/content/ch5^exercises/_four_graphs_.wly:95:33
                    </span>
                  </span>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $D \in \rr$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_four_graphs_.wly:95:38
                    </span>
                  </span>
                  .)
                </NoBreak>
              </OuterP>
            </SolutionNote>
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
                The graph {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:5:5
                </span>
              </span>
              <span class="t-3003-c">
                <Math>
                  $y = \cos x + \sin x$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:5:15
                </span>
              </span>
              {" "} from {" "}
              <InChapterLink
                href="/article/chapter1#_1_hgi_"
                class="handle-in-chapter-link"
              >
                Exercise 1
              </InChapterLink>
              {" "} has a maximum value greater than {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $1$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:6:54
                  </span>
                </span>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/TH1y.svg"
              local_url="./images/svg_ch5_ex_maximum_of_sin_plus_cos.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                What is this maximum value, and for which
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:11:5
                </span>
              </span>
              {" "}
              {" "}
              value(s) of {" "}
              <span class="t-3003-c">
                <Math>
                  $x$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:12:17
                </span>
              </span>
              {" "} is it achieved?
              (Reason geometrically, NOT by calculus.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Note that if we move {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:17:9
                </span>
              </span>
              {" "}
              {" "}
              diagonally along a line of angle {" "}
              <span class="t-3003-c">
                <Math>
                  $-45^\circ$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:18:42
                </span>
              </span>
              {" "} 
              from a point {" "}
              <span class="t-3003-c">
                <Math>
                  $(x_1, y_1)$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:19:22
                </span>
              </span>
              {" "}
              to a point {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $(x_2, y_2)$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:20:20
                  </span>
                </span>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/tmp-images/e5_max_cosx_plus_sinx_x1_y1_x2_y2.svg"
              local_url="./public/tmp-images/e5_max_cosx_plus_sinx_x1_y1_x2_y2.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...then...
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:26:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x_1 + y_1 = x_2 + y_2
              $$
              <span class="t-3003">
                ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:28:9
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...because whatever has been gained in the {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:32:9
                </span>
              </span>
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $x$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:32:52
                  </span>
                </span>
                -coordinate
              </NoBreak>
              {" "}
              has been lost in the {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $y$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:33:30
                  </span>
                </span>
                -coordinate,
              </NoBreak>
              {" "} and vice-versa. In
              particular,
            </OuterP>
            <Pause />
            <CentralDisplay>
              <span class="t-3003-c">
                ALL
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:36:11
                </span>
              </span>
            </CentralDisplay>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                points on any line of angle {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:38:9
                </span>
              </span>
              <span class="t-3003-c">
                <Math>
                  $-45^\circ$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:38:37
                </span>
              </span>
              {" "} have the
              same coordinate sum as one another—such a line is indeed
              the graph of the solution to an equation of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x + y = c
              $$
              <span class="t-3003">
                ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:42:9
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (to be read “the coordinate sum is such-and-such {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:46:9
                </span>
              </span>
              <NoBreak>
                [
                <span class="t-3003-c">
                  <Math>
                    $c$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:46:59
                  </span>
                </span>
                ]”)
              </NoBreak>
              {" "}
              because if we solve the latter equation for {" "}
              <span class="t-3003-c">
                <Math>
                  $y$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:47:53
                </span>
              </span>
              {" "} we find
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = c - x
              $$
              <span class="t-3003">
                ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:49:9
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...a line of slope {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:53:9
                </span>
              </span>
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $-1$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:53:28
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} i.e., a line of angle {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $-45^\circ$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:53:56
                  </span>
                </span>
                !
              </NoBreak>
              {" "}
              (Yes, well, anyway.) In particular, if we draw a “heatmap” of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x + y
              $$
              <span class="t-3003">
                ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:56:9
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                over all points {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:60:9
                </span>
              </span>
              <span class="t-3003-c">
                <Math>
                  $(x, y) \in \rr^2$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:60:25
                </span>
              </span>
              {" "} we find a pattern of diagonal bands of 
              slope {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $-1$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:61:15
                  </span>
                </span>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/tmp-images/svg_ch5_ex_x_plus_y_rainbow_v2.svg"
              local_url="./public/tmp-images/svg_ch5_ex_x_plus_y_rainbow_v2.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                If we are confined to some region of the plane
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:95:9
                </span>
              </span>
              {" "}
              {" "}
              and we need to find a point that maximizes the
              coordinate sum we must go as far up and to the
              right as possible, towards brown—whereas
              to minimize the sum we must go as far down and
              to the left as possible, towards purple!
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Having said this,
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:102:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos x + \sin x
              $$
              <span class="t-3003">
                ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:104:9
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                can be interpreted as the sum of the {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:108:9
                </span>
              </span>
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $x$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:108:46
                  </span>
                </span>
                -
              </NoBreak>
              {" "} and
              {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $y$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:109:9
                  </span>
                </span>
                -coordinates
              </NoBreak>
              {" "} of the point
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (\cos x, \sin x)
              $$
              <span class="t-3003">
                ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:111:9
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                that is a point on the unit circle. In other words,
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:115:9
                </span>
              </span>
              {" "}
              {" "}
              the unit circle is “the region of the plane” (cf.
              previous paragraph) to which we are confined—we
              must choose a value of {" "}
              <span class="t-3003-c">
                <Math>
                  $x$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:118:32
                </span>
              </span>
              {" "} that puts us as far
              “up and to the right” as possible on the circle.
              That value is... {" "}
              <span class="t-3003-c">
                <Math>
                  $x = \eta/2$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:120:26
                </span>
              </span>
              {" "} (!!!!):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/-wma.svg"
              local_url="./images/svg_ch5_ex_x_plus_y_eta_over_2.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...or with any multiple of {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:125:9
                </span>
              </span>
              <span class="t-3003-c">
                <Math>
                  $4\eta$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:125:36
                </span>
              </span>
              {" "} added; the {" "}
              <i>
                value
              </i>
              {" "}
              attained at the maximum is...
            </OuterP>
            <Boxed style="padding-bottom:0.9em">
              <MathBlock>
                $$
                \cos(\eta/2) + \sin(\eta/2) = 2\cdot&#123;1\over \sqrt&#123;2&#125;&#125; = \sqrt&#123;2&#125;
                $$
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:130:13
                </span>
              </MathBlock>
            </Boxed>
            <OuterP>
              <span class="t-3003-c">
                ...since {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:134:9
                </span>
              </span>
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $\cos(\eta/2) = \sin(\eta/2) = \sqrt&#123;0.5&#125; = &#123;1\over \sqrt&#123;2&#125;&#125;$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_max_sinx_+_cosx_new_ver_.wly:134:18
                  </span>
                </span>
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
                Argue that, in the following figure, the
                <span class="t-3003">
                  ./src/content/ch5^exercises/_rotate_central_90_.wly:5:5
                </span>
              </span>
              {" "}
              {" "}
              angle marked ‘?’ equals {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $\theta$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_rotate_central_90_.wly:6:29
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} the angle at
              the center of the circle:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/XRFw.svg"
              local_url="./images/svg_ch5_ex_tangent_angle_v2.svg"
            />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                The ending and starting half-lines of the
                <span class="t-3003">
                  ./src/content/ch5^exercises/_rotate_central_90_.wly:14:9
                </span>
              </span>
              {" "}
              {" "}
              angle marked ‘?’ are both {" "}
              <span class="t-3003-c">
                <Math>
                  $90^\circ$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_rotate_central_90_.wly:15:35
                </span>
              </span>
              {" "} counterclockwise
              from the ending and starting half-lines,
              respectively, of the central angle:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/wC_h.svg"
              local_url="./images/svg_ch5_ex_tangent_angle_explanation_v2.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                The angle marked ‘?’ is therefore obtained
                <span class="t-3003">
                  ./src/content/ch5^exercises/_rotate_central_90_.wly:22:9
                </span>
              </span>
              {" "}
              {" "}
              by a {" "}
              <span class="t-3003-c">
                <Math>
                  $90^\circ$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_rotate_central_90_.wly:23:14
                </span>
              </span>
              {" "} rotation (and then translation)
              of the central angle, and is, therefore, equal
              to the central angle {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $\theta$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_rotate_central_90_.wly:25:30
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
                  This holds no matter which quadrant we
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_rotate_central_90_.wly:29:13
                  </span>
                </span>
                {" "}
                {" "}
                push {" "}
                <span class="t-3003-c">
                  <Math>
                    $\theta$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_rotate_central_90_.wly:30:18
                  </span>
                </span>
                {" "} to:
              </OuterP>
              <Pause />
              <Image
                src="/tmp-images/svg_ch5_ex_tangent_angle_explanation_other_quadrants_machine_version.svg"
                local_url="./public/tmp-images/svg_ch5_ex_tangent_angle_explanation_other_quadrants_machine_version.svg"
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
                  Here is an attempt at verbalization:
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_rotate_central_90_.wly:37:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <span class="t-3003-c">
                  the counterclockwise angle from the positive
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_rotate_central_90_.wly:39:15
                  </span>
                </span>
                {" "}
                {" "}
                {" "}{" "}
                <span class="t-3003-c">
                  <Math>
                    $x$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_rotate_central_90_.wly:40:13
                  </span>
                </span>
                <span class="t-3003-c">
                  {" "} axis to
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_rotate_central_90_.wly:40:16
                  </span>
                </span>
                {" "}
                {" "}
                the radial vector [of angle {" "}
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $\theta$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_rotate_central_90_.wly:41:41
                    </span>
                  </span>
                  <span class="t-3003-c">
                    ]
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_rotate_central_90_.wly:41:49
                    </span>
                  </span>
                </NoBreak>
                {" "}{" "}
                {" "}
                {" "}
                <span class="t-3003-c">
                  equals the counterclockwise angle from the positive
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_rotate_central_90_.wly:42:13
                  </span>
                </span>
                {" "}
                {" "}
                {" "}{" "}
                <span class="t-3003-c">
                  <Math>
                    $y$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_rotate_central_90_.wly:43:13
                  </span>
                </span>
                <span class="t-3003-c">
                  {" "} axis to the counterclockwise tangent [of angle {" "}
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_rotate_central_90_.wly:43:16
                  </span>
                </span>
                <NoBreak>
                  <span class="t-3003-c">
                    <Math>
                      $\theta$
                    </Math>
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_rotate_central_90_.wly:43:64
                    </span>
                  </span>
                  <span class="t-3003-c">
                    ]
                    <span class="t-3003">
                      ./src/content/ch5^exercises/_rotate_central_90_.wly:43:72
                    </span>
                  </span>
                </NoBreak>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  With the various terms illustrated here:
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_rotate_central_90_.wly:45:13
                  </span>
                </span>
              </OuterP>
              <Pause />
              <Image
                src="/tmp-images/svg_ch5_ex_tangent_angle_verbalization_explanation.svg"
                local_url="./public/tmp-images/svg_ch5_ex_tangent_angle_verbalization_explanation.svg"
              />
              <Pause />
              <OuterP>
                <span class="t-3003-c">
                  ...but if it was such a great verbalization we
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_rotate_central_90_.wly:50:13
                  </span>
                </span>
                {" "}
                {" "}
                wouldn't need to illustrate it, ergo, we failed!
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};