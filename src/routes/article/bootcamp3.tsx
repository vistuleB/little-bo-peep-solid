import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Grid  from "~/components/Grid";
import InChapterLink  from "~/components/InChapterLink";
import { List, Item }  from "~/components/List";
import { Math }  from "~/components/Math";
import NewImage  from "~/components/NewImage";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import Solution  from "~/components/Solution";
import { Pause }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Bootcamp3__() {
  return (
    <Article
      prevPage=""
      nextPage="/article/bootcamp2"
      pageNecessaryMargin={270}
      maxElementWidth={1200}
      id="_25_h.a.i_"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=exercises">
            exercises
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Bootcamp 3:">
        Components Playground
      </ArticleTitle>
      <Pause />
      <Exercises
        at_end_of_page={true}
        mode="dual"
        show_curlicue={true}
        id="_24_h.a.i_"
      >
        <Exercise number={1}>
          <ExerciseStatement id="_21_h.a.i_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              <ExerciseStatement>
                What is the Grid component ?
              </ExerciseStatement>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <i>
                <b>
                  Grid
                </b>
              </i>
              {" "} used for putting items in a controlled grid layout, a more friendly alternative to Table component that needs all special html tags tr, colgroup ...etc
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  Case 1:
                </b>
              </i>
              {" "} 3 cols, 2 on mobile, place-items="start"
            </OuterP>
            <Pause />
            <Grid
              cols={3}
              mobileCols={2}
              placeItems="start"
            >
              <Item>
                Item 1
              </Item>
              <Item>
                Item 2
              </Item>
              <Item>
                Item 3
              </Item>
              <Item>
                Item 4
              </Item>
              <Item>
                Item 5
              </Item>
              <Item>
                Item 6
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  Case 2:
                </b>
              </i>
              {" "} 3 cols, place-items="center" (default)
            </OuterP>
            <Pause />
            <Grid cols={3}>
              <Item>
                Short
              </Item>
              <Item>
                Medium text
              </Item>
              <Item>
                A longer piece of text
              </Item>
              <Item>
                Item 4
              </Item>
              <Item>
                Item 5
              </Item>
              <Item>
                Item 6
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  Case 3:
                </b>
              </i>
              {" "} 3 cols, place-items="end"
            </OuterP>
            <Pause />
            <Grid
              cols={3}
              placeItems="end"
            >
              <Item>
                Short
              </Item>
              <Item>
                Medium text
              </Item>
              <Item>
                A longer piece of text
              </Item>
              <Item>
                Item 4
              </Item>
              <Item>
                Item 5
              </Item>
              <Item>
                Item 6
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  Case 4:
                </b>
              </i>
              {" "} 2 cols, column-first=true (fills top-to-bottom)
            </OuterP>
            <Pause />
            <Grid
              cols={2}
              columnFirst={true}
              placeItems="start"
            >
              <Item>
                1st
              </Item>
              <Item>
                2nd
              </Item>
              <Item>
                3rd
              </Item>
              <Item>
                4th
              </Item>
              <Item>
                5th
              </Item>
              <Item>
                6th
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  Case 5:
                </b>
              </i>
              {" "} 2 cols, column-first=false (default, fills left-to-right)
            </OuterP>
            <Pause />
            <Grid
              cols={2}
              placeItems="start"
            >
              <Item>
                1st
              </Item>
              <Item>
                2nd
              </Item>
              <Item>
                3rd
              </Item>
              <Item>
                4th
              </Item>
              <Item>
                5th
              </Item>
              <Item>
                6th
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  Case 6:
                </b>
              </i>
              {" "} with-padding=false
            </OuterP>
            <Pause />
            <Grid
              cols={3}
              withPadding={false}
              placeItems="start"
            >
              <Item>
                Item 1
              </Item>
              <Item>
                Item 2
              </Item>
              <Item>
                Item 3
              </Item>
              <Item>
                Item 4
              </Item>
              <Item>
                Item 5
              </Item>
              <Item>
                Item 6
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  Case 7:
                </b>
              </i>
              {" "} custom gap="2rem"
            </OuterP>
            <Pause />
            <Grid
              cols={3}
              gap="2rem"
              placeItems="start"
            >
              <Item>
                Item 1
              </Item>
              <Item>
                Item 2
              </Item>
              <Item>
                Item 3
              </Item>
              <Item>
                Item 4
              </Item>
              <Item>
                Item 5
              </Item>
              <Item>
                Item 6
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  Case 8:
                </b>
              </i>
              {" "} custom gap="0.25rem"
            </OuterP>
            <Pause />
            <Grid
              cols={3}
              gap="0.25rem"
              placeItems="start"
            >
              <Item>
                Item 1
              </Item>
              <Item>
                Item 2
              </Item>
              <Item>
                Item 3
              </Item>
              <Item>
                Item 4
              </Item>
              <Item>
                Item 5
              </Item>
              <Item>
                Item 6
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  Case 9:
                </b>
              </i>
              {" "} margin-top=40, margin-bottom=40
            </OuterP>
            <Pause />
            <Grid
              cols={3}
              marginTop={40}
              marginBottom={40}
              placeItems="start"
            >
              <Item>
                Item 1
              </Item>
              <Item>
                Item 2
              </Item>
              <Item>
                Item 3
              </Item>
              <Item>
                Item 4
              </Item>
              <Item>
                Item 5
              </Item>
              <Item>
                Item 6
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  Case 10:
                </b>
              </i>
              {" "} custom mobile-cutoff=800 (switches to mobile layout at 800px)
            </OuterP>
            <Pause />
            <Grid
              cols={4}
              mobileCols={2}
              mobileCutoff={800}
              placeItems="start"
            >
              <Item>
                Item 1
              </Item>
              <Item>
                Item 2
              </Item>
              <Item>
                Item 3
              </Item>
              <Item>
                Item 4
              </Item>
              <Item>
                Item 5
              </Item>
              <Item>
                Item 6
              </Item>
              <Item>
                Item 7
              </Item>
              <Item>
                Item 8
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  Case 11:
                </b>
              </i>
              {" "} overflow row (5 items in 3 cols)
            </OuterP>
            <Pause />
            <Grid
              cols={3}
              placeItems="start"
            >
              <Item>
                Item 1
              </Item>
              <Item>
                Item 2
              </Item>
              <Item>
                Item 3
              </Item>
              <Item>
                Item 4
              </Item>
              <Item>
                Item 5
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  Case 12:
                </b>
              </i>
              {" "} column-first + mobile-cols (2 cols desktop, 1 on mobile)
            </OuterP>
            <Pause />
            <Grid
              cols={2}
              mobileCols={1}
              columnFirst={true}
              placeItems="start"
              withPadding={false}
            >
              <Item>
                1st
              </Item>
              <Item>
                2nd
              </Item>
              <Item>
                3rd
              </Item>
              <Item>
                4th
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  Case 13:
                </b>
              </i>
              {" "} custom style (light pink background)
            </OuterP>
            <Pause />
            <Grid
              cols={3}
              placeItems="start"
              style="background-color:#ffe4e6"
            >
              <Item>
                Item 1
              </Item>
              <Item>
                Item 2
              </Item>
              <Item>
                Item 3
              </Item>
              <Item>
                Item 4
              </Item>
              <Item>
                Item 5
              </Item>
              <Item>
                Item 6
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  Case 14:
                </b>
              </i>
              {" "} 3 cols, 2 on mobile, mobile-cutoff=520, center-on-overflow=true (from {" "}
              <a
                href="/article/chapter1#_27_h.a.i_"
                class="out-chapter-link"
              >
                1
              </a>
              &#8288;)
            </OuterP>
            <Pause />
            <Grid
              cols={3}
              mobileCols={2}
              mobileCutoff={520}
              centerOnOverflow={true}
            >
              <Item>
                a. {" "}
                <Math>
                  $0.9^2 &lt; 0.9$
                </Math>
              </Item>
              <Item>
                b. {" "}
                <Math>
                  $\sqrt&#123;0.01&#125; = 0.1$
                </Math>
              </Item>
              <Item>
                c. {" "}
                <Math>
                  $\sqrt[2]&#123;\up&#123;0.8&#125;\sqrt[3]&#123;2&#125;&#125; = \sqrt[3]&#123;\up&#123;0.8&#125;\sqrt[2]&#123;2&#125;&#125;$
                </Math>
              </Item>
              <Item>
                d. {" "}
                <Math>
                  $&#123;\sqrt&#123;2&#125; \over \up&#123;0.55&#125;2&#125; = \sqrt&#123;0.5&#125;$
                </Math>
              </Item>
              <Item>
                e. {" "}
                <Math>
                  $&#123;1 \over \sqrt&#123;2&#125;&#125; = \sqrt&#123;0.5&#125;$
                </Math>
              </Item>
              <Item>
                f. {" "}
                <Math>
                  $2^&#123;30&#125; &gt; 1000^3$
                </Math>
              </Item>
              <Item>
                g. {" "}
                <Math>
                  $&#123;1 \over 0.95&#125; &gt; 1.05$
                </Math>
              </Item>
              <Item>
                h. {" "}
                <Math>
                  $(-1)^&#123;101&#125; = -1$
                </Math>
              </Item>
              <Item>
                i. {" "}
                <Math>
                  $&#123;100 \over \up&#123;0.5&#125;99&#125; &lt; &#123;101 \over \up&#123;0.5&#125;100&#125;$
                </Math>
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  Case 15:
                </b>
              </i>
              {" "} 3 cols, place-items=end (from {" "}
              <a
                href="/article/chapter1#_27_h.a.i_"
                class="out-chapter-link"
              >
                1
              </a>
              &#8288;)
            </OuterP>
            <Pause />
            <Grid
              cols={3}
              placeItems="end"
            >
              <Item>
                <Math>
                  $(-1)^1 =$
                </Math>
              </Item>
              <Item>
                <Math>
                  $(-1) =$
                </Math>
              </Item>
              <Item>
                <Math>
                  $-1$
                </Math>
              </Item>
              <Item>
                <Math>
                  $(-1)^2 =$
                </Math>
              </Item>
              <Item>
                <Math>
                  $(-1)\times (-1) =$
                </Math>
              </Item>
              <Item>
                <Math>
                  $1$
                </Math>
              </Item>
              <Item>
                <Math>
                  $(-1)^3 =$
                </Math>
              </Item>
              <Item>
                <Math>
                  $(-1)\times(-1)\times (-1) =$
                </Math>
              </Item>
              <Item>
                <Math>
                  $-1$
                </Math>
              </Item>
              <Item>
                <Math>
                  $(-1)^4 =$
                </Math>
              </Item>
              <Item>
                <Math>
                  $(-1)\times(-1)\times(-1)\times(-1) =$
                </Math>
              </Item>
              <Item>
                <Math>
                  $1$
                </Math>
              </Item>
              <Item>
                <Math>
                  $(-1)^5 =$
                </Math>
              </Item>
              <Item>
                <Math>
                  $\,\,\,(-1)\times(-1)\times(-1)\times(-1)\times(-1) =$
                </Math>
              </Item>
              <Item>
                <Math>
                  $-1$
                </Math>
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  Case 16:
                </b>
              </i>
              {" "} 2 cols, 1 on mobile, place-items=start, with-padding=false, column-first=true (from {" "}
              <a
                href="/article/chapter3#_41_h.a.i_"
                class="out-chapter-link"
              >
                3
              </a>
              &#8288;)
            </OuterP>
            <Pause />
            <Grid
              cols={2}
              mobileCols={1}
              placeItems="start"
              withPadding={false}
              columnFirst={true}
            >
              <Item>
                i. {" "}
                <Math>
                  $(\lambda u.u^3)(0.5)$
                </Math>
              </Item>
              <Item>
                ii. {" "}
                <Math>
                  $(u \ra u^2)(x + 1)$
                </Math>
              </Item>
              <Item>
                iii. {" "}
                <Math>
                  $(\lambda t.t - 1)(100) \cdot (\lambda t.t + 1)(100)$
                </Math>
              </Item>
              <Item>
                iv. {" "}
                <Math>
                  $(u \ra u^2)(a + b)$
                </Math>
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  Case 17:
                </b>
              </i>
              {" "} same as Case 16, 4 items only (from {" "}
              <a
                href="/article/chapter3#_41_h.a.i_"
                class="out-chapter-link"
              >
                3
              </a>
              &#8288;)
            </OuterP>
            <Pause />
            <Grid
              cols={2}
              mobileCols={1}
              placeItems="start"
              withPadding={false}
              columnFirst={true}
            >
              <Item>
                i. {" "}
                <Math>
                  $0.5^3 = 0.125$
                </Math>
              </Item>
              <Item>
                ii. {" "}
                <Math>
                  $(x + 1)^2 = x^2 + 2x + 1$
                </Math>
              </Item>
              <Item>
                iii. {" "}
                <Math>
                  $(100 - 1) \cdot (100 + 1) = 9999$
                </Math>
              </Item>
              <Item>
                iv. {" "}
                <Math>
                  $(a + b)^2 = a^2 + 2ab + b^2$
                </Math>
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  Case 18:
                </b>
              </i>
              {" "} 2 cols, 1 on mobile, center-on-overflow=true, place-items=start, with-padding=false, column-first=true (from {" "}
              <a
                href="/article/appendixA#_165_h.a.i_"
                class="out-chapter-link"
              >
                1
              </a>
              &#8288;)
            </OuterP>
            <Pause />
            <Grid
              cols={2}
              mobileCols={1}
              centerOnOverflow={true}
              placeItems="start"
              withPadding={false}
              columnFirst={true}
            >
              <Item>
                i. {" "}
                <Math>
                  $f \circ g = (x \ra f(g(x)))$
                </Math>
              </Item>
              <Item>
                ii. {" "}
                <Math>
                  $g \circ f = (x \ra f(g(x)))$
                </Math>
              </Item>
              <Item>
                iii. {" "}
                <Math>
                  $f \circ g = (x \ra g(f(x)))$
                </Math>
              </Item>
              <Item>
                iv. {" "}
                <Math>
                  $g \circ f = (x \ra g(f(x)))$
                </Math>
              </Item>
            </Grid>
          </Solution>
        </Exercise>
        <Exercise number={2}>
          <ExerciseStatement id="_22_h.a.i_">
            <OuterP>
              <b>
                Exercise 2.
              </b>
              <ExerciseStatement>
                What is the Image component ?
              </ExerciseStatement>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <i>
                <b>
                  Image
                </b>
              </i>
              {" "} renders an image centered in the main text column. On load it should be {" "}
              <i>
                constrained
              </i>
              {" "} (fits the screen width, padded), and its {" "}
              <i>
                scale
              </i>
              {" "} (current width ÷ original width) must be known {" "}
              <i>
                immediately on load
              </i>
              .
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  Debug colors
                </b>
              </i>
              {" "} (background shows through the alpha test images):
            </OuterP>
            <Pause />
            <List>
              <Item>
                <Item>
                  dark red = constrained &amp;&amp; scale &lt; 1
                </Item>
                <Item>
                  light red = constrained &amp;&amp; scale == 1
                </Item>
                <Item>
                  light blue = not constrained &amp;&amp; scale == 1
                </Item>
                <Item>
                  green = not constrained &amp;&amp; scale &lt; 1 (should be impossible)
                </Item>
              </Item>
            </List>
            <Pause />
            <OuterP>
              <i>
                <b>
                  Case 1:
                </b>
              </i>
              {" "} set width=1000px, native 350px
            </OuterP>
            <NewImage
              src="/images/test_native_350.svg"
              width="1000px"
            />
            <Pause />
            <OuterP>
              <i>
                <b>
                  Case 2:
                </b>
              </i>
              {" "} set width=1000px, native 1000px
            </OuterP>
            <NewImage
              src="/images/test_native_1000.svg"
              width="1000px"
            />
            <Pause />
            <OuterP>
              <i>
                <b>
                  Case 3:
                </b>
              </i>
              {" "} set width=350px, native 1000px
            </OuterP>
            <NewImage
              src="/images/test_native_1000.svg"
              width="350px"
            />
            <Pause />
            <OuterP>
              <i>
                <b>
                  Case 4:
                </b>
              </i>
              {" "} set width=350px, native 350px
            </OuterP>
            <NewImage
              src="/images/test_native_350.svg"
              width="350px"
            />
          </Solution>
        </Exercise>
        <Exercise number={3}>
          <ExerciseStatement id="_23_h.a.i_">
            <OuterP>
              <b>
                Exercise 3.
              </b>
              <ExerciseStatement>
                What is the Table component ?
              </ExerciseStatement>
            </OuterP>
          </ExerciseStatement>
        </Exercise>
      </Exercises>
      <Rest />
    </Article>
  );
}

const Rest = () => {
  const showMore = useShowMore();
  return <>
    {showMore() && <>
    </>}
  </>;
};