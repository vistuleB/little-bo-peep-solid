import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { Exercises, ExerciseStatement, Exercise }  from "~/components/Exercises";
import Grid  from "~/components/Grid";
import InChapterLink  from "~/components/InChapterLink";
import { Item }  from "~/components/List";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import Solution  from "~/components/Solution";
import { Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Bootcamp3__() {
  return (
    <Article
      prevPage=""
      nextPage="/article/bootcamp2"
      pageNecessaryMargin={270}
      maxElementWidth={1200}
      id="_149_hgi_"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=grid">
            grid
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Bootcamp 3:">
        Components Playground
      </ArticleTitle>
      <OuterP>
        <i>
          <b>
            Standalone exercise
          </b>
        </i>
      </OuterP>
      <Exercise>
        <ExerciseStatement>
          <OuterP>
            <b>
              Exercise
            </b>
            <ExerciseStatement>
              Does this standalone exercise work?
            </ExerciseStatement>
          </OuterP>
        </ExerciseStatement>
      </Exercise>
      <Section id="grid">
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
        <Exercises
          at_end_of_page={true}
          id="_148_hgi_"
        >
          <Exercise number={1}>
            <ExerciseStatement>
              <OuterP>
                <b>
                  Exercise 1.
                </b>
                <ExerciseStatement>
                  What is the purpose of life 1?
                </ExerciseStatement>
              </OuterP>
            </ExerciseStatement>
            <Solution>
              <OuterP>
                REPEAAAT
              </OuterP>
            </Solution>
          </Exercise>
          <Exercise number={2}>
            <ExerciseStatement>
              <OuterP>
                <b>
                  Exercise 2.
                </b>
                <ExerciseStatement>
                  What is the purpose of life 2?
                </ExerciseStatement>
              </OuterP>
            </ExerciseStatement>
          </Exercise>
        </Exercises>
      </Section>
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