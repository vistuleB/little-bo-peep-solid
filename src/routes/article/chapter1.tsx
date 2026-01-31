import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { Math, MathBlock }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { Example, NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter1__() {
  return (
    <Article
      prevPage="/"
      nextPage=""
      pageNecessaryMargin={950}
      maxElementWidth={1000}
      id="_2_hgi_"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            <span class="t-3003-c">
              the missing arrows
              <span class="t-3003">
                ./src/content/ch5.wly:1546:6
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            <span class="t-3003-c">
              note on calculators
              <span class="t-3003">
                ./src/content/ch5.wly:1793:6
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
              The missing arrows.
              <span class="t-3003">
                ./src/content/ch5.wly:1546:6
              </span>
            </span>
          </b>
          {" "}
          ‘sin’ and ‘cos’ only constitute two out
          of six ratios that exist among the sides
          of a right triangle. The four “missing ratios”
          are hereby drawn:
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/sa0S.svg"
          local_url="./images/svg_ch5_ch_missing_arrows_veiled.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            In fact, there is a dedicated, named function
            <span class="t-3003">
              ./src/content/ch5.wly:1555:5
            </span>
          </span>
          {" "}
          {" "}
          that computes each of the six ratios. We shall
          now reveal the names of the four missing
          functions (!!):
        </OuterP>
        <Pause />
        <Image
          src="/build-img/svgo-svg/wra-.svg"
          local_url="./images/svg_ch5_ch_missing_arrows_unveiled.svg"
        />
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            Here
            <span class="t-3003">
              ./src/content/ch5.wly:1563:5
            </span>
          </span>
          {" "}
          {" "}
          “sec” is short for {" "}
          <i>
            secant
          </i>
          ,
          “tan” is short for {" "}
          <i>
            tangent
          </i>
          ,
          “cot” is short for {" "}
          <i>
            cotangent
          </i>
          , and
          “csc” is short for {" "}
          <i>
            cosecant
          </i>
          .
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            To be clear, multiplying by
            <span class="t-3003">
              ./src/content/ch5.wly:1569:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sec(\theta)
          $$
          <span class="t-3003">
            ./src/content/ch5.wly:1571:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            takes you from ‘adjacent’ to ‘hypotenuse’, multiplying by
            <span class="t-3003">
              ./src/content/ch5.wly:1575:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \csc(\theta)
          $$
          <span class="t-3003">
            ./src/content/ch5.wly:1577:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            takes you from ‘opposite’ to ‘hypotenuse’, multiplying by
            <span class="t-3003">
              ./src/content/ch5.wly:1581:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \tan(\theta)
          $$
          <span class="t-3003">
            ./src/content/ch5.wly:1583:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            takes you from ‘adjacent’ to ‘opposite’,
            <span class="t-3003">
              ./src/content/ch5.wly:1587:5
            </span>
          </span>
          {" "}
          {" "}
          and multiplying by
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cot(\theta)
          $$
          <span class="t-3003">
            ./src/content/ch5.wly:1590:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            takes you from ‘opposite’ to ‘adjacent’. (!)
            <span class="t-3003">
              ./src/content/ch5.wly:1594:5
            </span>
          </span>
        </OuterP>
        <OuterP class="indent-10">
          <span class="t-3003-c">
            You may observe that
            <span class="t-3003">
              ./src/content/ch5.wly:1596:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sec = &#123;1\over \cos&#125;
          $$
          <span class="t-3003">
            ./src/content/ch5.wly:1598:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            and that
            <span class="t-3003">
              ./src/content/ch5.wly:1601:5
            </span>
          </span>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \csc = &#123;1\over \sin&#125;
          $$
          <span class="t-3003">
            ./src/content/ch5.wly:1602:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            as multiplying by ‘cos’ undoes the work
            <span class="t-3003">
              ./src/content/ch5.wly:1606:5
            </span>
          </span>
          {" "}
          {" "}
          of multiplying by ‘sec’, and likewise for
          ‘sin’ and ‘csc’; also,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \,\tan = &#123;1\over \cot&#125;,
          $$
          <span class="t-3003">
            ./src/content/ch5.wly:1610:5
          </span>
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \cot = &#123;1\over \tan&#125;
          $$
          <span class="t-3003">
            ./src/content/ch5.wly:1613:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            modulo the fact that {" "}
            <span class="t-3003">
              ./src/content/ch5.wly:1617:5
            </span>
          </span>
          <NoBreak>
            <span class="t-3003-c">
              <Math>
                $&#123;1\over \infty&#125; \ne 0$
              </Math>
              <span class="t-3003">
                ./src/content/ch5.wly:1617:26
              </span>
            </span>
            .
          </NoBreak>
          {" "}
          (Or, more exactly, 
          modulo
          the fact that what people think of as {" "}
          <NoBreak>
            “
            <span class="t-3003-c">
              <Math>
                $\pm\infty$
              </Math>
              <span class="t-3003">
                ./src/content/ch5.wly:1625:44
              </span>
            </span>
            ”
          </NoBreak>
          {" "}
          is, in fact, an {" "}
          <i>
            undefined
          </i>
          {" "} value of the function.)
          And
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \tan \,=\, \sec \cdot \sin \,\,=\,\, &#123;\sin\!\!\!\!\phantom&#123;1&#125;\over \cos&#125;
          $$
          <span class="t-3003">
            ./src/content/ch5.wly:1629:5
          </span>
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \cot \,=\, \csc \cdot \cos \,\,=\,\, &#123;\cos\!\!\!\!\phantom&#123;1&#125;\over \sin&#125;
          $$
          <span class="t-3003">
            ./src/content/ch5.wly:1632:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            since one way to reach ‘opposite’ from
            <span class="t-3003">
              ./src/content/ch5.wly:1636:5
            </span>
          </span>
          {" "}
          {" "}
          ‘adjacent’ is to go via ‘hypotenuse’, and
          vice-versa for reaching ‘adjacent’ from
          ‘opposite’. (In fact, the next-to-last
          identity played a role in our proof of the
          Gregorinovich sandwich.) (Indeed,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(\theta) &lt; \theta &lt; \tan(\theta)\rt&#123;0.1&#125;
          $$
          <span class="t-3003">
            ./src/content/ch5.wly:1643:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is another way of writing the Grigorinovich
            <span class="t-3003">
              ./src/content/ch5.wly:1647:5
            </span>
          </span>
          {" "}
          {" "}
          sandwich.)
        </OuterP>
        <Pause />
        <Example
          work="ing"
          id="_1_hgi_"
        >
          <OuterP>
            <b>
              Example 1.
            </b>
            {" "}{" "}
            {" "}
            {" "}
            <span class="t-3003-c">
              If the Earth [is modeled as] a sphere
              <span class="t-3003">
                ./src/content/ch5.wly:1654:9
              </span>
            </span>
            {" "}
            {" "}
            of radius {" "}
            <span class="t-3003-c">
              <Math>
                $1$
              </Math>
              <span class="t-3003">
                ./src/content/ch5.wly:1655:19
              </span>
            </span>
            {" "} then, as stands to reason, the circle
            of latitude {" "}
            <span class="t-3003-c">
              <Math>
                $\theta$
              </Math>
              <span class="t-3003">
                ./src/content/ch5.wly:1656:21
              </span>
            </span>
            {" "} has radius {" "}
            <NoBreak>
              <span class="t-3003-c">
                <Math>
                  $\cos(\theta)$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5.wly:1656:41
                </span>
              </span>
              :
            </NoBreak>
          </OuterP>
          <Pause />
          <Image
            width="400px"
            src="/build-img/svgo-svg/_wct.svg"
            local_url="./images/country_sphere_35_m45.svg"
          />
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              [Example {" "}
              <span class="t-3003">
                ./src/content/ch5.wly:1662:9
              </span>
            </span>
            <InChapterLink
              href="/article/chapter1#_1_hgi_"
              class="handle-in-chapter-link"
            >
              1
            </InChapterLink>
            {" "} continued.] In particular, this means that 
            in any cylindrical
            projection** of the Earth, such as the
            “Lambert projection” depicted below
            (that just sends each latitude out to
            its own height), the radius of a latitude is dilated
            by [a factor of] {" "}
            <NoBreak>
              <span class="t-3003-c">
                <Math>
                  $\sec(\theta)$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5.wly:1668:26
                </span>
              </span>
              :
            </NoBreak>
          </OuterP>
          <Pause />
          <Image
            width="400px"
            src="/build-img/svgo-svg/ZWuF.svg"
            style="margin-bottom:-1em"
            local_url="./images/country_sphere_35_m45_sec_v3.svg"
          />
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              ...because...
              <span class="t-3003">
                ./src/content/ch5.wly:1675:9
              </span>
            </span>
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \Huge \sec(\theta)\cdot\cos(\theta) = 1
            $$
            <span class="t-3003">
              ./src/content/ch5.wly:1677:9
            </span>
          </MathBlock>
          <Pause />
          <OuterP>
            <span class="t-3003-c">
              ...which means that {" "}
              <span class="t-3003">
                ./src/content/ch5.wly:1681:9
              </span>
            </span>
            <NoBreak>
              “
              <span class="t-3003-c">
                <Math>
                  $\sec(\theta)$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5.wly:1681:30
                </span>
              </span>
              ”
            </NoBreak>
            {" "}
            is the correct multiplicative factor
            to take the Earth-radius to the
            cylinder-radius. 
            (Or just
            think of the fact that {" "}
            <NoBreak>
              <span class="t-3003-c">
                <Math>
                  $1/\cos(\theta) = \sec(\theta)$
                </Math>
                <span class="t-3003">
                  ./src/content/ch5.wly:1686:32
                </span>
              </span>
              ,
            </NoBreak>
            {" "}
            dividing one radius by the other.)
          </OuterP>
        </Example>
        <Pause />
        <OuterP>
          <b>
            <span class="t-3003-c">
              Vocabulary.
              <span class="t-3003">
                ./src/content/ch5.wly:1689:6
              </span>
            </span>
          </b>
          {" "} A (so-called
          {" "}
          <i>
            normal
          </i>
          ) {" "}
          <i>
            cylindrical projection
          </i>
          {" "}
          is a projection that maps the Earth to
          a vertical cylinder abutting the Earth at the
          equator while sending each latitude of the
          Earth to a circle on the cylinder, etc;
          besides the Lambert projection depicted
          above, 
          two more examples are the
          {" "}
          <i>
            central cylindrical projection
          </i>
          {" "} and the
          {" "}
          <i>
            plate carée
          </i>
          :
        </OuterP>
        <Pause />
        <Image
          width="850px"
          src="/tmp-images/plate_caree_central_combination.svg"
          local_url="./public/tmp-images/plate_caree_central_combination.svg"
        />
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
                ./src/content/ch5.wly:1793:6
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
            ./src/content/ch5.wly:1798:5
          </span>
        </MathBlock>
        <Pause />
        <OuterP>
          <span class="t-3003-c">
            is a number close to {" "}
            <span class="t-3003">
              ./src/content/ch5.wly:1802:5
            </span>
          </span>
          <NoBreak>
            <span class="t-3003-c">
              <Math>
                $1$
              </Math>
              <span class="t-3003">
                ./src/content/ch5.wly:1802:26
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
                ./src/content/ch5.wly:1803:23
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
              ./src/content/ch5.wly:1805:8
            </span>
          </span>
          {" "} as a number of degrees, instead of
          as a number of radians! (Be sure, in any
          case, that you're in the mode that you want.)
        </OuterP>
      </Section>
    </>}
  </>;
};