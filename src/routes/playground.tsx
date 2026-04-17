import Article from "~/components/Article";
import ArticleTitle from "~/components/ArticleTitle";
import Grid from "~/components/Grid";
import { Item } from "~/components/List";
import OuterP from "~/components/OuterP";
import { Pause, Section } from "~/components/Wrappers";

export default function Playground() {
  return (
    <Article prevPage="/" nextPage="/">
      <ArticleTitle banner="">Components Playground</ArticleTitle>
      <Section id="grid">
        <OuterP>
          <b>Grid</b> component
        </OuterP>

        <Pause />
        <OuterP>
          <b>Case 1:</b> 3 cols, 2 on mobile, placeItems="start"
        </OuterP>
        <Pause />
        <Grid cols={3} mobileCols={2} placeItems="start">
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
          <Item>Item 4</Item>
          <Item>Item 5</Item>
          <Item>Item 6</Item>
        </Grid>

        <Pause />
        <OuterP>
          <b>Case 2:</b> 3 cols, placeItems="center" (default)
        </OuterP>
        <Pause />
        <Grid cols={3}>
          <Item>Short</Item>
          <Item>Medium text</Item>
          <Item>A longer piece of text</Item>
          <Item>Item 4</Item>
          <Item>Item 5</Item>
          <Item>Item 6</Item>
        </Grid>

        <Pause />
        <OuterP>
          <b>Case 3:</b> 3 cols, placeItems="end"
        </OuterP>
        <Pause />
        <Grid cols={3} placeItems="end">
          <Item>Short</Item>
          <Item>Medium text</Item>
          <Item>A longer piece of text</Item>
          <Item>Item 4</Item>
          <Item>Item 5</Item>
          <Item>Item 6</Item>
        </Grid>

        <Pause />
        <OuterP>
          <b>Case 4:</b> 2 cols, columnFirst=true (fills top-to-bottom)
        </OuterP>
        <Pause />
        <Grid cols={2} columnFirst={true} placeItems="start">
          <Item>1st</Item>
          <Item>2nd</Item>
          <Item>3rd</Item>
          <Item>4th</Item>
          <Item>5th</Item>
          <Item>6th</Item>
        </Grid>

        <Pause />
        <OuterP>
          <b>Case 5:</b> 2 cols, columnFirst=false (default, fills
          left-to-right)
        </OuterP>
        <Pause />
        <Grid cols={2} placeItems="start">
          <Item>1st</Item>
          <Item>2nd</Item>
          <Item>3rd</Item>
          <Item>4th</Item>
          <Item>5th</Item>
          <Item>6th</Item>
        </Grid>

        <Pause />
        <OuterP>
          <b>Case 6:</b> withPadding=false
        </OuterP>
        <Pause />
        <Grid cols={3} withPadding={false} placeItems="start">
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
          <Item>Item 4</Item>
          <Item>Item 5</Item>
          <Item>Item 6</Item>
        </Grid>

        <Pause />
        <OuterP>
          <b>Case 7:</b> custom gap="2rem"
        </OuterP>
        <Pause />
        <Grid cols={3} gap="2rem" placeItems="start">
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
          <Item>Item 4</Item>
          <Item>Item 5</Item>
          <Item>Item 6</Item>
        </Grid>

        <Pause />
        <OuterP>
          <b>Case 8:</b> custom gap="0.25rem"
        </OuterP>
        <Pause />
        <Grid cols={3} gap="0.25rem" placeItems="start">
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
          <Item>Item 4</Item>
          <Item>Item 5</Item>
          <Item>Item 6</Item>
        </Grid>

        <Pause />
        <OuterP>
          <b>Case 9:</b> marginTop=40, marginBottom=40
        </OuterP>
        <Pause />
        <Grid cols={3} marginTop={40} marginBottom={40} placeItems="start">
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
          <Item>Item 4</Item>
          <Item>Item 5</Item>
          <Item>Item 6</Item>
        </Grid>

        <Pause />
        <OuterP>
          <b>Case 10:</b> custom mobileCutoff=800 (switches to mobile layout at
          800px)
        </OuterP>
        <Pause />
        <Grid cols={4} mobileCols={2} mobileCutoff={800} placeItems="start">
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
          <Item>Item 4</Item>
          <Item>Item 5</Item>
          <Item>Item 6</Item>
          <Item>Item 7</Item>
          <Item>Item 8</Item>
        </Grid>

        <Pause />
        <OuterP>
          <b>Case 11:</b> overflow row (5 items in 3 cols)
        </OuterP>
        <Pause />
        <Grid cols={3} placeItems="start">
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
          <Item>Item 4</Item>
          <Item>Item 5</Item>
        </Grid>

        <Pause />
        <OuterP>
          <b>Case 12:</b> columnFirst + mobileCols (2 cols desktop, 1 on mobile)
        </OuterP>
        <Pause />
        <Grid
          cols={2}
          mobileCols={1}
          columnFirst={true}
          placeItems="start"
          withPadding={false}>
          <Item>1st</Item>
          <Item>2nd</Item>
          <Item>3rd</Item>
          <Item>4th</Item>
        </Grid>

        <Pause />
        <OuterP>
          <b>Case 13:</b> custom style (light pink background)
        </OuterP>
        <Pause />
        <Grid
          cols={3}
          placeItems="start"
          style={{ "background-color": "#ffe4e6" }}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
          <Item>Item 4</Item>
          <Item>Item 5</Item>
          <Item>Item 6</Item>
        </Grid>
      </Section>
    </Article>
  );
}
