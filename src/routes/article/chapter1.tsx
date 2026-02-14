import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Boxed  from "~/components/Boxed";
import { CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { MathBlock, Math }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import Solution  from "~/components/Solution";
import { StarDivider }  from "~/components/StarDivider";
import { TildeDivider }  from "~/components/TildeDivider";
import { SolutionNote, Example, NoBreak, Pause, Section }  from "~/components/Wrappers";
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
              inputs as radians
              <span class="t-3003">
                ./src/content/ch5.wly:547:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            <span class="t-3003-c">
              note on calculators
              <span class="t-3003">
                ./src/content/ch5.wly:1758:6
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
              Inputs as radians.
              <span class="t-3003">
                ./src/content/ch5.wly:547:6
              </span>
            </span>
          </b>
          {" "}
          The
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <span class="t-3003-c">
            radian measure
            <span class="t-3003">
              ./src/content/ch5.wly:550:7
            </span>
          </span>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            of an angle {" "}
            <span class="t-3003">
              ./src/content/ch5.wly:552:5
            </span>
          </span>
          {" "}
          {" "}
          is the length of a circular arc subtended
          by the angle, divided by the radius of
          that arc:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/dau_.svg"
          local_url="./images/svg_ch5_ch_radian_definition.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            By this definition, the radian measure of an
            <span class="t-3003">
              ./src/content/ch5.wly:560:5
            </span>
          </span>
          {" "}
          {" "}
          angle coincides with the length of a subtended arc
          of radius {" "}
          <NoBreak>
            <span class="t-3003-c">
              <Math>
                $1$
              </Math>
              <span class="t-3003">
                ./src/content/ch5.wly:562:15
              </span>
            </span>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/byWA.svg"
          local_url="./images/svg_ch5_ch_radian_definition_radius_1.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            In particular, the radian measure
            <span class="t-3003">
              ./src/content/ch5.wly:567:5
            </span>
          </span>
          {" "}
          {" "}
          of {" "}
          <span class="t-3003-c">
            <Math>
              $90^\circ$
            </Math>
            <span class="t-3003">
              ./src/content/ch5.wly:568:8
            </span>
          </span>
          {" "} is {" "}
          <NoBreak>
            <span class="t-3003-c">
              <Math>
                $\eta$
              </Math>
              <span class="t-3003">
                ./src/content/ch5.wly:568:22
              </span>
            </span>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/uhJc.svg"
          local_url="./images/svg_ch5_ch_radian_definition_90_degrees_is.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            To imprint this fact in our memories:
            <span class="t-3003">
              ./src/content/ch5.wly:573:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/GrNS.svg"
          local_url="./images/svg_ch5_ch_radian_definition_90_imprint.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            (We will often leave out the “rad”—in fact,
            <span class="t-3003">
              ./src/content/ch5.wly:578:5
            </span>
          </span>
          {" "}
          {" "}
          if you don't see a degree symbol {" "}
          <NoBreak>
            “
            <span class="t-3003-c">
              <Math>
                $^\circ$
              </Math>
              <span class="t-3003">
                ./src/content/ch5.wly:579:39
              </span>
            </span>
            ”
          </NoBreak>
          {" "}
          next to an angle measure, that means the angle
          measure is a radian.) From there, other radian
          measures can be proportionally deduced; for
          example, {" "}
          <span class="t-3003-c">
            <Math>
              $45^\circ$
            </Math>
            <span class="t-3003">
              ./src/content/ch5.wly:583:14
            </span>
          </span>
          {" "} is {" "}
          <span class="t-3003-c">
            <Math>
              $\eta/2$
            </Math>
            <span class="t-3003">
              ./src/content/ch5.wly:583:28
            </span>
          </span>
          {" "} radians:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/PhlK.svg"
          local_url="./images/svg_ch5_ch_radian_definition_45_imprint.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            aaaand... and so on.
            <span class="t-3003">
              ./src/content/ch5.wly:588:5
            </span>
          </span>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            As a consequence of the definition, a
            <span class="t-3003">
              ./src/content/ch5.wly:590:5
            </span>
          </span>
          {" "}
          {" "}
          displacement of {" "}
          <span class="t-3003-c">
            <Math>
              $x$
            </Math>
            <span class="t-3003">
              ./src/content/ch5.wly:591:21
            </span>
          </span>
          {" "} units on the unit circle
          subtends an angle—or technically: {" "}
          <i>
            rotation
          </i>
          ,
          because there is a “positive” direction—and
          you can also say {" "}
          <i>
            signed angle
          </i>
          {" "} instead of
          {" "}
          <i>
            rotation
          </i>
          , by the way—whose (signed) radian
          measure is {" "}
          <NoBreak>
            <span class="t-3003-c">
              <Math>
                $x$
              </Math>
              <span class="t-3003">
                ./src/content/ch5.wly:596:16
              </span>
            </span>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/KPHA.svg"
          local_url="./images/svg_ch5_ch_x_displacement_and_x_radians.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            In particular,
            <span class="t-3003">
              ./src/content/ch5.wly:601:5
            </span>
          </span>
          {" "}
          {" "}
          instead of positing the definitions of
          sin and cos like this...
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/n-qa.svg"
          local_url="./images/svg_ch5_ch_x_displacement_and_x_radians_displacement_definition.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...with the input appearing as a
            <span class="t-3003">
              ./src/content/ch5.wly:608:5
            </span>
          </span>
          {" "}
          {" "}
          displacement, we can posit the definitions
          like this...
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/kCui.svg"
          local_url="./images/svg_ch_ch_x_displacement_and_x_radians_radian_definition.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            ...with the input appearing as a radian.
            <span class="t-3003">
              ./src/content/ch5.wly:615:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 1.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              We can conceptualize {" "}
              <span class="t-3003">
                ./src/content/ch5.wly:618:9
              </span>
            </span>
            <span class="t-3003-c">
              <Math>
                $\cos(\eta/2)$
              </Math>
              <span class="t-3003">
                ./src/content/ch5.wly:618:30
              </span>
            </span>
            {" "}
            and {" "}
            <span class="t-3003-c">
              <Math>
                $\sin(\eta/2)$
              </Math>
              <span class="t-3003">
                ./src/content/ch5.wly:619:13
              </span>
            </span>
            {" "} like this...
          </OuterP>
          <Pause />
          <Image
            src="/build-img/svgo-svg/tIP3.svg"
            local_url="./images/svg_ch5_ch_etaOver2_example_displacement_version.svg"
          />
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              ...with the input {" "}
              <span class="t-3003">
                ./src/content/ch5.wly:624:9
              </span>
            </span>
            <span class="t-3003-c">
              <Math>
                $\eta/2$
              </Math>
              <span class="t-3003">
                ./src/content/ch5.wly:624:27
              </span>
            </span>
            {" "} being a displacement
            along the periphery of the unit circle,
            or like this...
          </OuterP>
          <Pause />
          <Image
            src="/build-img/svgo-svg/jn-F.svg"
            local_url="./images/svg_ch5_ch_etaOver2_example_angle_version.svg"
          />
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              ...with the input {" "}
              <span class="t-3003">
                ./src/content/ch5.wly:631:9
              </span>
            </span>
            <span class="t-3003-c">
              <Math>
                $\eta/2$
              </Math>
              <span class="t-3003">
                ./src/content/ch5.wly:631:27
              </span>
            </span>
            {" "} being the radian measure
            of an angle opening counterclockwise from the positive {" "}
            <span class="t-3003-c">
              <Math>
                $x$
              </Math>
              <span class="t-3003">
                ./src/content/ch5.wly:632:64
              </span>
            </span>
            {" "} axis.
          </OuterP>
        </Example>
        <Pause />
        <OuterP>
          <i>
            <span class="t-3003-c">
              Sidenote.
              <span class="t-3003">
                ./src/content/ch5.wly:636:6
              </span>
            </span>
          </i>
          {" "}
          Another thing to know about radians 
          is that the length of a circular
          arc subtended by an angle is its radian
          measure times the radius:
        </OuterP>
        <Pause />
        <Image
          src="/tmp-images/svg_ch5_ch_radian_definition_consequence.svg"
          local_url="./public/tmp-images/svg_ch5_ch_radian_definition_consequence.svg"
        />
        <Pause />
        <TildeDivider style="margin-top:-1em" />
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
                ./src/content/ch5.wly:1758:6
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
            ./src/content/ch5.wly:1763:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a number close to {" "}
            <span class="t-3003">
              ./src/content/ch5.wly:1767:5
            </span>
          </span>
          <NoBreak>
            <span class="t-3003-c">
              <Math>
                $1$
              </Math>
              <span class="t-3003">
                ./src/content/ch5.wly:1767:26
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
                ./src/content/ch5.wly:1768:23
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
              ./src/content/ch5.wly:1770:8
            </span>
          </span>
          {" "} as a number of degrees, instead of
          as a number of radians! (Be sure, in any
          case, that you're in the mode that you want.)
        </OuterP>
      </Section>
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
                If aliens descended on Earth, captured everyone,
                <span class="t-3003">
                  ./src/content/ch5^exercises/_powers_of_secant_.wly:5:5
                </span>
              </span>
              {" "}
              {" "}
              took you aside and told you that the fate of
              humanity rested on your ability to “illustrate
              powers of secant”, without further instructions,
              what would you do?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Presumably the aliens are asking
                <span class="t-3003">
                  ./src/content/ch5^exercises/_powers_of_secant_.wly:13:9
                </span>
              </span>
              {" "}
              {" "}
              for an illustration of the sequence
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sec \theta, \,\sec^2(\theta), \,\sec^3(\theta), \,\sec^4(\theta), \dots
              $$
              <span class="t-3003">
                ./src/content/ch5^exercises/_powers_of_secant_.wly:16:9
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for some fixed {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_powers_of_secant_.wly:20:9
                </span>
              </span>
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $\theta$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_powers_of_secant_.wly:20:24
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} based on a geometric
              interpretation of {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $\sec$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_powers_of_secant_.wly:21:27
                  </span>
                </span>
                .
              </NoBreak>
              {" "} (Actually...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              1, \,\sec \theta, \,\sec^2(\theta), \,\sec^3(\theta),  \,\sec^4(\theta), \dots,
              $$
              <span class="t-3003">
                ./src/content/ch5^exercises/_powers_of_secant_.wly:23:9
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...we should start the sequence at {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_powers_of_secant_.wly:33:9
                </span>
              </span>
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $1$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_powers_of_secant_.wly:33:44
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} since
              {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $1 = \sec^0(\theta)$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_powers_of_secant_.wly:34:9
                  </span>
                </span>
                .)
              </NoBreak>
              {" "} Here is a possibility:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/zo9k.svg"
              local_url="./images/svg_ch5_ex_sec_powers_bounce.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Starting with a length of {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_powers_of_secant_.wly:39:9
                </span>
              </span>
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $1$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_powers_of_secant_.wly:39:35
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} bottom left,
              successive multiplications by {" "}
              <span class="t-3003-c">
                <Math>
                  $\sec(\theta)$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_powers_of_secant_.wly:40:39
                </span>
              </span>
              {" "}
              are performed by “dropping a height up” onto
              the opposite side of the angle {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $\theta$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_powers_of_secant_.wly:42:40
                  </span>
                </span>
                ,
              </NoBreak>
              {" "}
              bouncing back and forth between the two sides.
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                If we are willing to reproduce the angle
                <span class="t-3003">
                  ./src/content/ch5^exercises/_powers_of_secant_.wly:45:9
                </span>
              </span>
              {" "}
              {" "}
              {" "}{" "}
              <span class="t-3003-c">
                <Math>
                  $\theta$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_powers_of_secant_.wly:46:9
                </span>
              </span>
              {" "} several times over,
              another possibility is to draw a “snail stack”
              of right triangles sharing a common vertex:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svg/4t03.svg"
              local_url="./images/svg_ch5_ex_sec_powers_snail.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Or if we move the angle {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_powers_of_secant_.wly:53:9
                </span>
              </span>
              <span class="t-3003-c">
                <Math>
                  $\theta$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_powers_of_secant_.wly:53:33
                </span>
              </span>
              {" "} around from
              one end of the previously obtained segment to
              another, another somewhat exotic possibility is
              this one:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/bwJb.svg"
              local_url="./images/svg_ch5_ex_sec_powers_inverted_towers.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                We can also take a page from the bridge in {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_powers_of_secant_.wly:61:9
                </span>
              </span>
              {" "}
              {" "}
              Shadow of the Colossus:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/Qzlj.svg"
              local_url="./images/svg_ch5_ex_sec_powers_circles.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (In which we are effectively using a circular arc
                <span class="t-3003">
                  ./src/content/ch5^exercises/_powers_of_secant_.wly:67:9
                </span>
              </span>
              {" "}
              {" "}
              to each time realign the last obtained segment with
              horizontal.)
            </OuterP>
            <Pause />
            <Image
              src="/tmp-images/svg_ch5_ex_sec_powers_experimental_2.svg"
              local_url="./public/tmp-images/svg_ch5_ex_sec_powers_experimental_2.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                In any case, with so many nice drawings,
                <span class="t-3003">
                  ./src/content/ch5^exercises/_powers_of_secant_.wly:74:9
                </span>
              </span>
              {" "}
              {" "}
              you are bound to save humanity!
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
                  One can note that the third diagram makes a cameo
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_powers_of_secant_.wly:79:13
                  </span>
                </span>
                {" "}
                {" "}
                appearance within the second diagram (modulo scale):
              </OuterP>
              <Pause />
              <Image
                src="/build-img/svgo-svg/eiL2.svg"
                local_url="./images/svg_ch5_ex_sec_powers_bounce_cameo.svg"
              />
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
                A point {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:5:5
                </span>
              </span>
              <span class="t-3003-c">
                <Math>
                  $P \in \rr^3$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:5:13
                </span>
              </span>
              {" "} at distance {" "}
              <span class="t-3003-c">
                <Math>
                  $R$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:5:39
                </span>
              </span>
              {" "} from the
              origin forms an angle {" "}
              <span class="t-3003-c">
                <Math>
                  $\phi$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:6:27
                </span>
              </span>
              {" "} with the positive
              {" "}
              <span class="t-3003-c">
                <Math>
                  $z$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:7:5
                </span>
              </span>
              {" "} axis, while {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $P$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:7:21
                  </span>
                </span>
                's
              </NoBreak>
              {" "} projection onto the {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $xy$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:7:47
                  </span>
                </span>
                -plane
              </NoBreak>
              {" "}
              is at a counterclockwise angle {" "}
              <span class="t-3003-c">
                <Math>
                  $\theta$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:8:36
                </span>
              </span>
              {" "} from the
              positive {" "}
              <span class="t-3003-c">
                <Math>
                  $x$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:9:14
                </span>
              </span>
              {" "} axis:
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svg/FZVx.svg"
              local_url="./images/svg_ch5_ex_spherical_coordinates_statement.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                What are {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:14:5
                </span>
              </span>
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $x$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:14:14
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} {" "}
              <span class="t-3003-c">
                <Math>
                  $y$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:14:19
                </span>
              </span>
              {" "} and {" "}
              <span class="t-3003-c">
                <Math>
                  $z$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:14:27
                </span>
              </span>
              {" "} in terms of {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $R$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:14:43
                  </span>
                </span>
                ,
              </NoBreak>
              {" "}
              {" "}
              <span class="t-3003-c">
                <Math>
                  $\phi$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:15:5
                </span>
              </span>
              {" "} and {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $\theta$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:15:16
                  </span>
                </span>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <span class="t-3003-c">
                Since {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:19:9
                </span>
              </span>
              <span class="t-3003-c">
                <Math>
                  $\phi$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:19:15
                </span>
              </span>
              {" "} is an ordinary geometric angle
              between two lines, (as opposed to: an oriented
              angle, a.k.a., “signed angle”), we have
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0 \leq \phi \leq 2\eta
              $$
              <span class="t-3003">
                ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:23:9
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (or
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:27:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0 \leq \phi \leq 180^\circ
              $$
              <span class="t-3003">
                ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:29:9
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                equivalently—and recall that
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:33:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              180^\circ = 2\eta
              $$
              <span class="t-3003">
                ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:35:9
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                <span class="t-3003-c">
                  as real numbers
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:39:10
                  </span>
                </span>
              </i>
              , so there is absolutely no fudging
              going on if we write it the second way), and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(\phi) \geq 0
              $$
              <span class="t-3003">
                ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:42:9
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:46:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              R\sin(\phi) \geq 0
              $$
              <span class="t-3003">
                ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:48:9
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and from which {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:52:9
                </span>
              </span>
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $R\sin(\phi)$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:52:24
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} as it appears in the 
              following diagram, is the actual {" "}
              <i>
                length
              </i>
              {" "} of
              {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $P$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:54:9
                  </span>
                </span>
                's
              </NoBreak>
              {" "} projection onto the {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $xy$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:54:35
                  </span>
                </span>
                -plane:
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/giDO.svg"
              local_url="./images/svg_ch5_ex_spherical_coordinates_Rsin_phi.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...whereas {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:59:9
                </span>
              </span>
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $R\cos(\phi)$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:59:20
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} as it appears above, is a
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                signed length
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:61:11
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (or “coordinate”) (or “real number”, haha) as
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:63:9
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(\phi)
              $$
              <span class="t-3003">
                ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:65:9
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                is negative for {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:69:9
                </span>
              </span>
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $\eta &lt; \phi \leq 2\eta$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:69:25
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} positive
              for {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $0 \leq \phi &lt; \eta$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:70:13
                  </span>
                </span>
                !
              </NoBreak>
              {" "} But in any case that is what
              we want, since {" "}
              <span class="t-3003-c">
                <Math>
                  $z$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:71:24
                </span>
              </span>
              {" "} switches from positive to negative
              at {" "}
              <span class="t-3003-c">
                <Math>
                  $\phi = \eta$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:72:12
                </span>
              </span>
              {" "} just like {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $\cos(\phi)$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:72:36
                  </span>
                </span>
                ,
              </NoBreak>
              {" "}
              giving us
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              z = R\cos(\phi)
              $$
              <span class="t-3003">
                ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:75:9
              </span>
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and “one coordinate down”.
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:79:9
                </span>
              </span>
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                For {" "}
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:81:9
                </span>
              </span>
              <span class="t-3003-c">
                <Math>
                  $x$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:81:13
                </span>
              </span>
              {" "} and {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $y$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:81:21
                  </span>
                </span>
                ,
              </NoBreak>
              {" "} then, we are left in a “classical”
              situation of converting polar coordinates to Cartesian
              coordinates in the {" "}
              <NoBreak>
                <span class="t-3003-c">
                  <Math>
                    $xy$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:83:28
                  </span>
                </span>
                -plane;
              </NoBreak>
              {" "} only  the {" "}
              <NoBreak>
                “
                <span class="t-3003-c">
                  <Math>
                    $r$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:83:51
                  </span>
                </span>
                ”
              </NoBreak>
              {" "} of
              polar coordinates is now {" "}
              <NoBreak>
                “
                <span class="t-3003-c">
                  <Math>
                    $R\sin(\phi)$
                  </Math>
                  <span class="t-3003">
                    ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:84:35
                  </span>
                </span>
                ”
              </NoBreak>
              {" "} (but
              which is nonnegative, happily, as noted):
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/10Fl.svg"
              local_url="./images/svg_ch5_ex_spherical_coordinates_xy_plane.svg"
            />
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Thus:
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:90:9
                </span>
              </span>
            </OuterP>
            <Boxed style="margin-bottom:-5px;">
              <MathBlock>
                $$
                x = R\sin(\phi)\cos(\theta)
                $$
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:95:13
                </span>
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                y = R\sin(\phi)\sin(\theta)
                $$
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:99:13
                </span>
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                z = R\cos(\phi)
                $$
                <span class="t-3003">
                  ./src/content/ch5^exercises/_spherical_to_cartesian_coordinates_1_.wly:103:13
                </span>
              </MathBlock>
            </Boxed>
            <Pause />
            <StarDivider />
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};