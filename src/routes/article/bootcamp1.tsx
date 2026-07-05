import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Grid  from "~/components/Grid";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { Item }  from "~/components/List";
import { MathBlock, Math }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageLeft, ImageRight }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import TextParent  from "~/components/TextParent";
import { NoBreak, InTextWarning, Pause }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Bootcamp1__() {
  return (
    <Article
      prevPage=""
      nextPage="/"
      pageNecessaryMargin={270}
      maxElementWidth={1200}
      id="_5_h.a.i_"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=exercises">
            <span class="t-3003-c">
              exercises
              <span class="t-3003">
                ./src/content/playground/playground.wly:8:5
              </span>
            </span>
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Bootcamp 1:">
        <span class="t-3003-c">
          Components Playground
          <span class="t-3003">
            ./src/content/playground/playground.wly:2:11
          </span>
        </span>
      </ArticleTitle>
      <Pause />
      <Exercises id="_4_h.a.i_">
        <Exercise number={1}>
          <ExerciseStatement id="_1_h.a.i_">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              <ExerciseStatement>
                <span class="t-3003-c">
                  What is the Grid component ?
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:16:17
                  </span>
                </span>
              </ExerciseStatement>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    Grid
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:18:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} used for putting items in a controlled grid layout, a more friendly alternative to Table component that needs all special html tags tr, colgroup ...etc
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    Case 1:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:22:19
                    </span>
                  </span>
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
                <span class="t-3003-c">
                  Item 1
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:29:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 2
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:31:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 3
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:33:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 4
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:35:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 5
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:37:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 6
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:39:21
                  </span>
                </span>
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    Case 2:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:43:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} 3 cols, place-items="center" (default)
            </OuterP>
            <Pause />
            <Grid cols={3}>
              <Item>
                <span class="t-3003-c">
                  Short
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:48:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Medium text
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:50:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  A longer piece of text
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:52:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 4
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:54:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 5
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:56:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 6
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:58:21
                  </span>
                </span>
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    Case 3:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:62:19
                    </span>
                  </span>
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
                <span class="t-3003-c">
                  Short
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:68:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Medium text
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:70:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  A longer piece of text
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:72:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 4
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:74:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 5
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:76:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 6
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:78:21
                  </span>
                </span>
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    Case 4:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:82:19
                    </span>
                  </span>
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
                <span class="t-3003-c">
                  1st
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:89:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  2nd
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:91:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  3rd
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:93:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  4th
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:95:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  5th
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:97:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  6th
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:99:21
                  </span>
                </span>
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    Case 5:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:103:19
                    </span>
                  </span>
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
                <span class="t-3003-c">
                  1st
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:109:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  2nd
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:111:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  3rd
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:113:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  4th
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:115:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  5th
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:117:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  6th
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:119:21
                  </span>
                </span>
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    Case 6:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:123:19
                    </span>
                  </span>
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
                <span class="t-3003-c">
                  Item 1
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:130:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 2
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:132:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 3
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:134:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 4
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:136:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 5
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:138:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 6
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:140:21
                  </span>
                </span>
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    Case 7:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:144:19
                    </span>
                  </span>
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
                <span class="t-3003-c">
                  Item 1
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:151:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 2
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:153:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 3
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:155:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 4
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:157:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 5
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:159:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 6
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:161:21
                  </span>
                </span>
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    Case 8:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:165:19
                    </span>
                  </span>
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
                <span class="t-3003-c">
                  Item 1
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:172:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 2
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:174:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 3
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:176:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 4
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:178:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 5
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:180:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 6
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:182:21
                  </span>
                </span>
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    Case 9:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:186:19
                    </span>
                  </span>
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
                <span class="t-3003-c">
                  Item 1
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:194:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 2
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:196:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 3
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:198:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 4
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:200:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 5
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:202:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 6
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:204:21
                  </span>
                </span>
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    Case 10:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:208:19
                    </span>
                  </span>
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
                <span class="t-3003-c">
                  Item 1
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:216:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 2
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:218:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 3
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:220:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 4
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:222:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 5
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:224:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 6
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:226:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 7
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:228:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 8
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:230:21
                  </span>
                </span>
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    Case 11:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:234:19
                    </span>
                  </span>
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
                <span class="t-3003-c">
                  Item 1
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:240:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 2
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:242:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 3
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:244:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 4
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:246:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 5
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:248:21
                  </span>
                </span>
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    Case 12:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:252:19
                    </span>
                  </span>
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
                <span class="t-3003-c">
                  1st
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:261:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  2nd
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:263:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  3rd
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:265:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  4th
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:267:21
                  </span>
                </span>
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    Case 13:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:271:19
                    </span>
                  </span>
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
                <span class="t-3003-c">
                  Item 1
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:278:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 2
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:280:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 3
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:282:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 4
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:284:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 5
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:286:21
                  </span>
                </span>
              </Item>
              <Item>
                <span class="t-3003-c">
                  Item 6
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:288:21
                  </span>
                </span>
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    Case 14:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:292:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} 3 cols, 2 on mobile, mobile-cutoff=520, center-on-overflow=true (from {" "}
              <InTextWarning>
                undefined handle at playground/playground.wly:292:17: _true_false_
              </InTextWarning>
              )
            </OuterP>
            <Pause />
            <Grid
              cols={3}
              mobileCols={2}
              mobileCutoff={520}
              centerOnOverflow={true}
            >
              <Item>
                <span class="t-3003-c">
                  a. {" "}
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:300:21
                  </span>
                </span>
                <Math>
                  $0.9^2 &lt; 0.9$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  b. {" "}
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:302:21
                  </span>
                </span>
                <Math>
                  $\sqrt&#123;0.01&#125; = 0.1$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  c. {" "}
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:304:21
                  </span>
                </span>
                <Math>
                  $\sqrt[2]&#123;\up&#123;0.8&#125;\sqrt[3]&#123;2&#125;&#125; = \sqrt[3]&#123;\up&#123;0.8&#125;\sqrt[2]&#123;2&#125;&#125;$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  d. {" "}
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:306:21
                  </span>
                </span>
                <Math>
                  $&#123;\sqrt&#123;2&#125; \over \up&#123;0.55&#125;2&#125; = \sqrt&#123;0.5&#125;$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  e. {" "}
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:308:21
                  </span>
                </span>
                <Math>
                  $&#123;1 \over \sqrt&#123;2&#125;&#125; = \sqrt&#123;0.5&#125;$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  f. {" "}
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:310:21
                  </span>
                </span>
                <Math>
                  $2^&#123;30&#125; &gt; 1000^3$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  g. {" "}
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:312:21
                  </span>
                </span>
                <Math>
                  $&#123;1 \over 0.95&#125; &gt; 1.05$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  h. {" "}
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:314:21
                  </span>
                </span>
                <Math>
                  $(-1)^&#123;101&#125; = -1$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  i. {" "}
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:316:21
                  </span>
                </span>
                <Math>
                  $&#123;100 \over \up&#123;0.5&#125;99&#125; &lt; &#123;101 \over \up&#123;0.5&#125;100&#125;$
                </Math>
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    Case 15:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:320:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} 3 cols, place-items=end (from {" "}
              <InTextWarning>
                undefined handle at playground/playground.wly:320:17: _true_false_
              </InTextWarning>
              )
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
                  <span class="t-3003-c">
                    Case 16:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:358:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} 2 cols, 1 on mobile, place-items=start, with-padding=false, column-first=true (from {" "}
              <InTextWarning>
                undefined handle at playground/playground.wly:358:17: _evaluate_lambda_functions_
              </InTextWarning>
              )
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
                <span class="t-3003-c">
                  i. {" "}
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:367:21
                  </span>
                </span>
                <Math>
                  $(\lambda u.u^3)(0.5)$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  ii. {" "}
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:369:21
                  </span>
                </span>
                <Math>
                  $(u \ra u^2)(x + 1)$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  iii. {" "}
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:371:21
                  </span>
                </span>
                <Math>
                  $(\lambda t.t - 1)(100) \cdot (\lambda t.t + 1)(100)$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  iv. {" "}
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:373:21
                  </span>
                </span>
                <Math>
                  $(u \ra u^2)(a + b)$
                </Math>
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    Case 17:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:377:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} same as Case 16, 4 items only (from {" "}
              <InTextWarning>
                undefined handle at playground/playground.wly:377:17: _evaluate_lambda_functions_
              </InTextWarning>
              )
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
                <span class="t-3003-c">
                  i. {" "}
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:386:21
                  </span>
                </span>
                <Math>
                  $0.5^3 = 0.125$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  ii. {" "}
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:388:21
                  </span>
                </span>
                <Math>
                  $(x + 1)^2 = x^2 + 2x + 1$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  iii. {" "}
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:390:21
                  </span>
                </span>
                <Math>
                  $(100 - 1) \cdot (100 + 1) = 9999$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  iv. {" "}
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:392:21
                  </span>
                </span>
                <Math>
                  $(a + b)^2 = a^2 + 2ab + b^2$
                </Math>
              </Item>
            </Grid>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    Case 18:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:396:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} 2 cols, 1 on mobile, center-on-overflow=true, place-items=start, with-padding=false, column-first=true (from {" "}
              <InTextWarning>
                undefined handle at playground/playground.wly:396:17: _true_or_false_composition_questions_
              </InTextWarning>
              )
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
                <span class="t-3003-c">
                  i. {" "}
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:406:21
                  </span>
                </span>
                <Math>
                  $f \circ g = (x \ra f(g(x)))$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  ii. {" "}
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:408:21
                  </span>
                </span>
                <Math>
                  $g \circ f = (x \ra f(g(x)))$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  iii. {" "}
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:410:21
                  </span>
                </span>
                <Math>
                  $f \circ g = (x \ra g(f(x)))$
                </Math>
              </Item>
              <Item>
                <span class="t-3003-c">
                  iv. {" "}
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:412:21
                  </span>
                </span>
                <Math>
                  $g \circ f = (x \ra g(f(x)))$
                </Math>
              </Item>
            </Grid>
          </Solution>
        </Exercise>
        <Exercise number={2}>
          <ExerciseStatement id="_2_h.a.i_">
            <OuterP>
              <b>
                Exercise 2.
              </b>
              <ExerciseStatement>
                <span class="t-3003-c">
                  What is the MathBlock component ?
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:418:17
                  </span>
                </span>
              </ExerciseStatement>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    MathBlock
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:421:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} renders a centered display equation, written with the `
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              ...
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ` delimiters (as opposed to inline {" "}
                <span class="t-3003">
                  ./src/content/playground/playground.wly:421:95
                </span>
              </span>
              <NoBreak>
                `
                <Math>
                  $...$
                </Math>
                `
              </NoBreak>
              {" "} math). It is responsive and has four behaviors worth understanding:
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    1. Centered &amp; lazy.
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:425:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} The block is horizontally centered in the column. MathJax only typesets it once it scrolls near the viewport, then it fades in (opacity transition).
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    2. Auto scale-to-fit.
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:429:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} On mount and on every window resize, it measures the equation's natural width. If that width is wider than the available column {" "}
              <NoBreak>
                (
                <Math>
                  $innerWidth - 40px$
                </Math>
                ),
              </NoBreak>
              {" "} it automatically shrinks the whole block to fit the screen — so wide equations never overflow horizontally on narrow/mobile screens.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    3. Click to toggle.
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:433:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} Clicking the block toggles between the fitted (scaled-down) size and its full natural size. Click a shrunk equation to see it at 100% (it may then overflow), and click again to re-fit it.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    4. Resize recompute.
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:437:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} Whenever the window width changes, the fit decision is recomputed, so the same block looks right on desktop, tablet, and phone. {" "}
              <i>
                Try resizing your browser while watching the cases below.
              </i>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    Case 1:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:441:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} short equation — narrower than the column, so it stays at natural size on every screen and clicking has no visible effect.
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              2 \times 2 = 4
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    Case 2:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:449:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} moderately wide equation — fits on desktop, but auto-shrinks once the window gets narrow enough. Resize to watch it shrink, or click to toggle full size.
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;x^2 + 2x + 1&#125; \rt&#123;0.1&#125; = \rt&#123;0.1&#125; \sqrt&#123;(x + 1)^2&#125; \rt&#123;0.1&#125; = \rt&#123;0.1&#125; |x + 1|
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    Case 3:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:457:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} very wide equation — overflows the column on almost any screen, so it renders scaled-down by default. Click it to see the full-size version.
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (a + b + c + d + e)^2 = a^2 + b^2 + c^2 + d^2 + e^2 + 2ab + 2ac + 2ad + 2ae + 2bc + 2bd + 2be + 2cd + 2ce + 2de
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    Case 4:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:465:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} tall equation (stacked fraction) — height, not width, is the constraint here; it stays centered and fades in like the others.
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = &#123;-b \pm \sqrt&#123;\up&#123;0.6&#125; b^2 - 4ac&#125; \over \up&#123;0.6&#125; 2a&#125;
              $$
            </MathBlock>
          </Solution>
        </Exercise>
        <Exercise number={3}>
          <ExerciseStatement id="_3_h.a.i_">
            <OuterP>
              <b>
                Exercise 3.
              </b>
              <ExerciseStatement>
                <span class="t-3003-c">
                  What is the SideImage component ?
                  <span class="t-3003">
                    ./src/content/playground/playground.wly:475:17
                  </span>
                </span>
              </ExerciseStatement>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    Book-context fixtures.
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:478:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} These are the active clouds from ch1, ch2, bt1, and bt2. Each fixture keeps the same attached element used in the book, with one surrounding element above and beneath.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    ch1.1:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:482:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `svg
              <i>
                ch1
              </i>
              ch
              <i>
                minus
              </i>
              two
              <i>
                squared
              </i>
              cloud.svg`
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              2 \times 2 = 4
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                Hence,
                <span class="t-3003">
                  ./src/content/playground/playground.wly:488:17
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;(-2)^2&#125; = 2
              $$
              <ImageRight
                src="/build-img/svgo-svg/Z39o.svg"
                offsetX="5em"
                atLeastAsWide={false}
                local_url="./images/svg_ch1_ch_minus_two_squared_cloud.svg"
              />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and, in particular, it is {" "}
                <span class="t-3003">
                  ./src/content/playground/playground.wly:499:17
                </span>
              </span>
              <i>
                not
              </i>
              {" "} true that
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    ch1.2:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:503:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `c1
              <i>
                abCD
              </i>
              cloud.svg`
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                A little more generally, one has such identities
                <span class="t-3003">
                  ./src/content/playground/playground.wly:505:17
                </span>
              </span>
              {" "}
              {" "}
              as
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (a + b)(C + D) \,=\, aC + bC + aD + bD
              $$
              <ImageLeft
                src="/build-img/svgo-svg/-TtU.svg"
                offsetX="-1em"
                atLeastAsWide={true}
                local_url="./images/c1_abCD_cloud.svg"
              />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                that come from multiplying every term of the first
                <span class="t-3003">
                  ./src/content/playground/playground.wly:516:17
                </span>
              </span>
              {" "}
              {" "}
              parenthesis with every term of the second parenthesis.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    ch1.3:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:521:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `svg
              <i>
                ch1
              </i>
              ex_25.svg`
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Since
                <span class="t-3003">
                  ./src/content/playground/playground.wly:523:17
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over n&#125; - &#123;1 \over n+1&#125; = &#123;1 \over n(n+1)&#125;
              $$
              <ImageRight
                offsetX="5rem"
                src="/build-img/svgo-svg/Xx87.svg"
                atLeastAsWide={true}
                local_url="./images/svg_ch1_ex_25.svg"
              />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (as previously computed) is smaller than
                <span class="t-3003">
                  ./src/content/playground/playground.wly:533:17
                </span>
              </span>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    ch1.4:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:537:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `svg
              <i>
                ch1
              </i>
              ex_26.svg`
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over n&#125; - &#123;1 \over n+1&#125; = &#123;1 \over n(n+1)&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (as previously computed) is smaller than
                <span class="t-3003">
                  ./src/content/playground/playground.wly:543:17
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over n^2&#125;
              $$
              <ImageRight
                offsetX="10rem"
                src="/build-img/svgo-svg/jBCw.svg"
                atLeastAsWide={true}
                local_url="./images/svg_ch1_ex_26.svg"
              />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                we will compute the difference
                <span class="t-3003">
                  ./src/content/playground/playground.wly:553:17
                </span>
              </span>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    ch1.5:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:557:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `svg
              <i>
                ch1
              </i>
              ex_27.svg`
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over n(n+1)&#125; - &#123;1 \over n^2&#125;
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &#123;1 \over n^2&#125; - &#123;1 \over n(n+1)&#125; &amp;= &#123;1 \over n^2&#125; \cdot &#123;n+1 \over n+1&#125; - &#123;1 \over n(n+1)&#125; \cdot &#123;n \over n&#125;\\
              &amp;= &#123;n+1 \over n^2(n+1)&#125; - &#123;n \over n^2(n+1)&#125;\up&#123;1.5&#125;\\
              &amp;= &#123;1 \over n^2(n+1)&#125;\up&#123;1.5&#125;
              \end&#123;align*&#125;
              $$
              <ImageRight
                src="/build-img/svgo-svg/4oJD.svg"
                offsetY="-0.5em"
                atLeastAsWide={true}
                local_url="./images/svg_ch1_ex_27.svg"
              />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which, for large {" "}
                <span class="t-3003">
                  ./src/content/playground/playground.wly:575:17
                </span>
              </span>
              <NoBreak>
                <Math>
                  $n$
                </Math>
                ,
              </NoBreak>
              {" "} is roughly
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    ch1.6:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:579:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `true
              <i>
                false
              </i>
              sixth
              <i>
                root
              </i>
              of
              <i>
                two
              </i>
              cloud1.svg`
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                To convince yourself, note that
                <span class="t-3003">
                  ./src/content/playground/playground.wly:581:17
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &amp;\,\, (\sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;\rt&#123;0.1&#125;)^6 \\
              =&amp;\,\, \up&#123;1.4&#125; (\gbk\sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;\rt&#123;0.11&#125;)^3 \\
              =&amp; \,\, \up&#123;1.4&#125; 2
              \end&#123;align*&#125;
              $$
              <ImageLeft
                src="/build-img/svgo-svg/rgbH.svg"
                offsetY="23.5%"
                atLeastAsWide={true}
                local_url="./images/true_false_sixth_root_of_two_cloud1.svg"
              />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
                  &amp;\,\, (\sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;\rt&#123;0.1&#125;)^6 \\
                 =&amp;\,\, \up&#123;1.4&#125; 2
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    ch1.7:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:604:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `true
              <i>
                false
              </i>
              sixth
              <i>
                root
              </i>
              of
              <i>
                two
              </i>
              cloud2.svg`
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &amp;\,\, (\sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;\rt&#123;0.1&#125;)^6 \\
              =&amp;\,\, 2
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
                  &amp;\,\, (\sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;\rt&#123;0.1&#125;)^6 \\
                 =&amp;\,\, \up&#123;1.4&#125; 2
              \end&#123;align&#125;
              $$
              <ImageLeft
                src="/build-img/svgo-svg/Trg3.svg"
                offsetY="23.5%"
                atLeastAsWide={true}
                local_url="./images/true_false_sixth_root_of_two_cloud2.svg"
              />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              x^6 = 2
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    ch1.8:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:630:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `svg
              <i>
                ch1
              </i>
              ex_24.svg`
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 99&#125; - &#123;1 \over 100&#125;
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &#123;1 \over n&#125; - &#123;1 \over n+1&#125; &amp;= &#123;1 \over n&#125;\cdot&#123;n+1 \over n+1&#125;\, - \,
              &#123;1 \over n+1&#125;\cdot&#123;n \over n&#125;\up&#123;1.5&#125;\\
              &amp;= &#123;1 \over n(n+1)&#125;\up&#123;1.5&#125;
              \end&#123;align&#125;
              $$
              <ImageRight
                src="/build-img/svgo-svg/omps.svg"
                offsetY="-0.5em"
                atLeastAsWide={true}
                local_url="./images/svg_ch1_ex_24.svg"
              />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                ...it's that much. (For example,
                <span class="t-3003">
                  ./src/content/playground/playground.wly:648:17
                </span>
              </span>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    ch2.1:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:652:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `c2
              <i>
                slope
              </i>
              formula_cloud.svg`
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                are the horizontal and the vertical change,
                <span class="t-3003">
                  ./src/content/playground/playground.wly:654:17
                </span>
              </span>
              {" "}
              {" "}
              respectively, from {" "}
              <Math>
                $A$
              </Math>
              {" "} to {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "} so
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \te&#123;slope&#125; = &#123;y_2 - y_1 \over x_2 - x_1&#125;
              $$
              <ImageRight
                src="/build-img/svgo-svg/EgBm.svg"
                offsetY="-0.7em"
                offsetX="3em"
                atLeastAsWide={true}
                local_url="./images/c2_slope_formula_cloud.svg"
              />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                A line that passes through two points gives the next example.
                <span class="t-3003">
                  ./src/content/playground/playground.wly:666:17
                </span>
              </span>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    ch2.2:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:670:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `c2
              <i>
                swap
              </i>
              cloud.svg`
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                We should verify that the slope formula gives the same answer if the points swap places.
                <span class="t-3003">
                  ./src/content/playground/playground.wly:672:17
                </span>
              </span>
              <ImageRight
                src="/build-img/svgo-svg/9GPK.svg"
                line={3}
                offsetX="-0.5em"
                local_url="./images/c2_swap_cloud.svg"
              />
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;y_2 - y_1 \over x_2 - x_1&#125;\qquad\,\,\,\,\,\te&#123;and&#125;\,\,\,\,\,\qquad&#123;y_1 - y_2 \over x_1 - x_2&#125;
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              &#123;y_2 - y_1 \over x_2 - x_1&#125; = &#123;-(y_2 - y_1) \over -(x_2 - x_1)&#125; = &#123;y_1 - y_2 \over x_1 - x_2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    ch2.3:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:685:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `tmp-images/c2
              <i>
                a
              </i>
              b
              <i>
                fraction
              </i>
              cloud.svg`
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;y_2 - y_1 \over x_2 - x_1&#125;\qquad\,\,\,\,\,\te&#123;and&#125;\,\,\,\,\,\qquad&#123;y_1 - y_2 \over x_1 - x_2&#125;
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              &#123;y_2 - y_1 \over x_2 - x_1&#125; = &#123;-(y_2 - y_1) \over -(x_2 - x_1)&#125; = &#123;y_1 - y_2 \over x_1 - x_2&#125;
              $$
              <ImageLeft
                src="/tmp-images/c2_a_b_fraction_cloud.svg"
                offsetX="2.5em"
                offsetY={0}
                atLeastAsWide={true}
                local_url="./public/tmp-images/c2_a_b_fraction_cloud.svg"
              />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                which verifies this hypothesis.
                <span class="t-3003">
                  ./src/content/playground/playground.wly:696:17
                </span>
              </span>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    ch2.4:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:700:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `svg
              <i>
                ch2
              </i>
              ch
              <i>
                vertical
              </i>
              line_equation.svg`
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                A vertical line is described by an equation of the form
                <span class="t-3003">
                  ./src/content/playground/playground.wly:702:17
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = c
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (see Fig. 1) where {" "}
                <span class="t-3003">
                  ./src/content/playground/playground.wly:706:17
                </span>
              </span>
              <Math>
                $c \in \rr$
              </Math>
              {" "} is a constant,
              similarly to the more familiar equation
              <ImageLeft
                src="/build-img/svgo-svg/3IFS.svg"
                offsetY="-6em"
                offsetX="1em"
                local_url="./images/svg_ch2_ch_vertical_line_equation.svg"
              />
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = b
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    ch2.5:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:718:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `svg
              <i>
                3
              </i>
              plus
              <i>
                minus
              </i>
              one
              <i>
                times
              </i>
              x_cloud.svg`
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x + y = 3
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              y = 3 - x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and thus describes a line of {" "}
                <span class="t-3003">
                  ./src/content/playground/playground.wly:724:17
                </span>
              </span>
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -intercept
              </NoBreak>
              {" "} {" "}
              <Math>
                $3$
              </Math>
              {" "}
              and slope {" "}
              <NoBreak>
                <Math>
                  $-1$
                </Math>
                .
              </NoBreak>
              <ImageRight
                src="/build-img/svgo-svg/h7oS.svg"
                line={1}
                local_url="./images/svg_3_plus_minus_one_times_x_cloud.svg"
              />
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \te&#123;slope has units&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    ch2.6:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:737:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `c2
              <i>
                units
              </i>
              cloud.svg`
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                The amount of time required for the balloon to go up by {" "}
                <span class="t-3003">
                  ./src/content/playground/playground.wly:739:17
                </span>
              </span>
              <NoBreak>
                <Math>
                  $4$
                </Math>
                m
              </NoBreak>
              {" "} is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \frac&#123;4\te&#123;m&#125;&#125;&#123;0.75\te&#123;m&#125;/\te&#123;s&#125;&#125;\! = 5.3333...\te&#123;s&#125;
              $$
              <ImageRight
                src="/build-img/svgo-svg/mtGc.svg"
                atLeastAsWide={true}
                local_url="./images/c2_units_cloud.svg"
              />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \te&#123;amount of time&#125; \,\,=\,\, \frac&#123;\!\rt&#123;0.15&#125;\te&#123;amount of change&#125;\!\rt&#123;0.1&#125;&#125;&#123;\te&#123;rate of change&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    ch2.7:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:754:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `c2
              <i>
                slope
              </i>
              two
              <i>
                and
              </i>
              minus
              <i>
                one
              </i>
              half
              <i>
                cloud
              </i>
              right.svg`
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                This is true, as illustrated by the following pair of lines:
                <span class="t-3003">
                  ./src/content/playground/playground.wly:756:17
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/t-Sk.svg"
              class="relative w-fit"
              local_url="./images/c2_slope_two_and_minus_one_half.svg"
            >
              <ImageRight
                src="/build-img/svgo-svg/Y5Cw.svg"
                offsetY="20%"
                offsetX="-5%"
                local_url="./images/c2_slope_two_and_minus_one_half_cloud_right.svg"
              />
            </Image>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                In more detail, the two triangles are related by a {" "}
                <span class="t-3003">
                  ./src/content/playground/playground.wly:767:17
                </span>
              </span>
              <Math>
                $90^\circ$
              </Math>
              {" "} rotation.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    ch2.8:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:771:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `c2
              <i>
                slope
              </i>
              two
              <i>
                and
              </i>
              minus
              <i>
                one
              </i>
              half
              <i>
                cloud
              </i>
              left.svg`
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                This is true, as illustrated by the following pair of lines:
                <span class="t-3003">
                  ./src/content/playground/playground.wly:773:17
                </span>
              </span>
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/t-Sk.svg"
              class="relative w-fit"
              local_url="./images/c2_slope_two_and_minus_one_half.svg"
            >
              <ImageLeft
                src="/build-img/svgo-svg/P0MQ.svg"
                offsetX="-25%"
                offsetY="47%"
                local_url="./images/c2_slope_two_and_minus_one_half_cloud_left.svg"
              />
            </Image>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                In more detail, the two triangles are related by a {" "}
                <span class="t-3003">
                  ./src/content/playground/playground.wly:784:17
                </span>
              </span>
              <Math>
                $90^\circ$
              </Math>
              {" "} rotation.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    ch2.9:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:788:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `svg
              <i>
                ch2
              </i>
              ex
              <i>
                x0
              </i>
              y0
              <i>
                line
              </i>
              equation_cloud.svg`
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                A point {" "}
                <span class="t-3003">
                  ./src/content/playground/playground.wly:790:17
                </span>
              </span>
              <Math>
                $(x,y) \ne (x_0,y_0)$
              </Math>
              {" "} is on the line of slope {" "}
              <Math>
                $p$
              </Math>
              {" "} if and only if
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              p = &#123;y - y_0 \over x - x_0&#125;
              $$
              <ImageLeft
                src="/build-img/svgo-svg/eaW7.svg"
                offsetX="10rem"
                offsetY="0%"
                atLeastAsWide={true}
                local_url="./images/svg_ch2_ex_x0_y0_line_equation_cloud.svg"
              />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                because
                <span class="t-3003">
                  ./src/content/playground/playground.wly:799:17
                </span>
              </span>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    ch2.10:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:803:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `svg
              <i>
                slope
              </i>
              times
              <i>
                run
              </i>
              equals
              <i>
                rise
              </i>
              cloud.svg`
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                This can be a final answer, and has the form
                <span class="t-3003">
                  ./src/content/playground/playground.wly:805:17
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \te&#123;“&#125;\te&#123;slope&#125; \times \te&#123;run&#125; = \te&#123;rise&#125;\te&#123;”&#125;
              $$
              <ImageRight
                src="/build-img/svgo-svg/8ZCw.svg"
                offsetX="2.5rem"
                offsetY="0%"
                atLeastAsWide={true}
                local_url="./images/svg_slope_times_run_equals_rise_cloud.svg"
              />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              y - y_0 = p(x - x_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    bt1.1:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:820:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `svg
              <i>
                bt1
              </i>
              bt
              <i>
                empty
              </i>
              set_cloud.svg`
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Mind you, concerning this example, that
                <span class="t-3003">
                  ./src/content/playground/playground.wly:822:17
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \&#123;\&#123;\&#125; \&#125; \ne \&#123;\&#125;
              $$
              <ImageRight
                src="/build-img/svgo-svg/dcQB.svg"
                offsetX="3em"
                atLeastAsWide={true}
                local_url="./images/svg_bt1_bt_empty_set_cloud.svg"
              />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                because a box containing an empty box is not the
                <span class="t-3003">
                  ./src/content/playground/playground.wly:832:17
                </span>
              </span>
              {" "}
              {" "}
              same thing as an empty box!
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    bt2.1:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:837:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `svg
              <i>
                bt2
              </i>
              bt
              <i>
                alert
              </i>
              cloud.svg`
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 10^1 = 1 \times 10 = 10
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large 10^0 = 1 = 1
              $$
              <ImageLeft
                src="/build-img/svgo-svg/DSem.svg"
                offsetY="-0.2em"
                offsetX="4em"
                atLeastAsWide={true}
                local_url="./images/svg_bt2_bt_alert_cloud.svg"
              />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                (where, in the last line, {" "}
                <span class="t-3003">
                  ./src/content/playground/playground.wly:852:17
                </span>
              </span>
              <Math>
                $1$
              </Math>
              {" "} is multiplied by {" "}
              <Math>
                $10$
              </Math>
              {" "} {" "}
              <i>
                zero times
              </i>
              ,
              as per the exponent, which is zero) by the first definition, while
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    bt2.2:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:857:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `svg
              <i>
                bt2
              </i>
              bt
              <i>
                10
              </i>
              to
              <i>
                the
              </i>
              minus
              <i>
                0
              </i>
              cloud.svg`
            </OuterP>
            <Pause />
            <TextParent>
              <MathBlock>
                $$
                \Large 10^&#123;-n&#125; = &#123;1 \over 10^&#123;\hspace&#123;0.2ex&#125;n&#125;&#125;\tag&#123;A&#125;
                $$
              </MathBlock>
            </TextParent>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                for every positive integer {" "}
                <span class="t-3003">
                  ./src/content/playground/playground.wly:861:17
                </span>
              </span>
              <NoBreak>
                <Math>
                  $n$
                </Math>
                ,
              </NoBreak>
              {" "} which gives an alternate means of computing {" "}
              <NoBreak>
                <Math>
                  $10^&#123;-n&#125;$
                </Math>
                .
              </NoBreak>
              {" "}
              Moreover, (
              <InTextWarning>
                undefined handle at playground/playground.wly:862:17: _10_to_the_minus_n_
              </InTextWarning>
              ) actually holds for
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                every
                <span class="t-3003">
                  ./src/content/playground/playground.wly:864:19
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                integer {" "}
                <span class="t-3003">
                  ./src/content/playground/playground.wly:866:17
                </span>
              </span>
              <NoBreak>
                <Math>
                  $n$
                </Math>
                ,
              </NoBreak>
              {" "} which is mildly important. In more
              detail, (
              <InTextWarning>
                undefined handle at playground/playground.wly:867:17: _10_to_the_minus_n_
              </InTextWarning>
              ) holds for {" "}
              <Math>
                $n = 0$
              </Math>
              {" "} by inspection, and (
              <InTextWarning>
                undefined handle at playground/playground.wly:867:66: _10_to_the_minus_n_
              </InTextWarning>
              )
              is equivalent to the identity
              <ImageLeft
                src="/build-img/svgo-svg/rdZz.svg"
                line={2}
                local_url="./images/svg_bt2_bt_10_to_the_minus_0_cloud.svg"
              />
            </OuterP>
            <Pause />
            <TextParent>
              <MathBlock>
                $$
                \Large 10^&#123;-n&#125;10^n = 1 \tag&#123;AA&#125;
                $$
              </MathBlock>
            </TextParent>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    bt2.3:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:878:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `svg
              <i>
                bt2
              </i>
              bt
              <i>
                ten
              </i>
              to
              <i>
                the
              </i>
              3
              <i>
                times
              </i>
              ten
              <i>
                to
              </i>
              the
              <i>
                6
              </i>
              cloud.svg`
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                by counting zeroes, or, equivalently, because
                <span class="t-3003">
                  ./src/content/playground/playground.wly:880:17
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 10^3 \times 10^3 = 10^6
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                by additivity of exponents. Similarly, note that
                <span class="t-3003">
                  ./src/content/playground/playground.wly:884:17
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                one billion is a thousand million
                <span class="t-3003">
                  ./src/content/playground/playground.wly:886:19
                </span>
              </span>
              <ImageLeft
                src="/build-img/svgo-svg/55Oe.svg"
                local_url="./images/svg_bt2_bt_ten_to_the_3_times_ten_to_the_6_cloud.svg"
              />
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/playground/playground.wly:891:17
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                one trillion is a thousand billion
                <span class="t-3003">
                  ./src/content/playground/playground.wly:891:23
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    bt2.4:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:895:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `svg
              <i>
                bt2
              </i>
              bt
              <i>
                ten
              </i>
              to
              <i>
                the
              </i>
              3
              <i>
                times
              </i>
              ten
              <i>
                to
              </i>
              the
              <i>
                9
              </i>
              cloud.svg`
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                one billion is a thousand million
                <span class="t-3003">
                  ./src/content/playground/playground.wly:897:19
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/playground/playground.wly:899:17
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                one trillion is a thousand billion
                <span class="t-3003">
                  ./src/content/playground/playground.wly:899:23
                </span>
              </span>
              <ImageLeft
                src="/build-img/svgo-svg/tAeJ.svg"
                local_url="./images/svg_bt2_bt_ten_to_the_3_times_ten_to_the_9_cloud.svg"
              />
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and also
                <span class="t-3003">
                  ./src/content/playground/playground.wly:904:17
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                one trillion is a million million
                <span class="t-3003">
                  ./src/content/playground/playground.wly:904:28
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    bt2.5:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:908:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `svg
              <i>
                bt2
              </i>
              bt
              <i>
                ten
              </i>
              to
              <i>
                the
              </i>
              6
              <i>
                times
              </i>
              ten
              <i>
                to
              </i>
              the
              <i>
                6
              </i>
              cloud.svg`
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                and
                <span class="t-3003">
                  ./src/content/playground/playground.wly:910:17
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                one trillion is a thousand billion
                <span class="t-3003">
                  ./src/content/playground/playground.wly:910:23
                </span>
              </span>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and also
                <span class="t-3003">
                  ./src/content/playground/playground.wly:912:17
                </span>
              </span>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <span class="t-3003-c">
                one trillion is a million million
                <span class="t-3003">
                  ./src/content/playground/playground.wly:912:28
                </span>
              </span>
              <ImageRight
                src="/build-img/svgo-svg/xlFe.svg"
                local_url="./images/svg_bt2_bt_ten_to_the_6_times_ten_to_the_6_cloud.svg"
              />
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                as can be seen by replacing “billion” with “thousand million”.
                <span class="t-3003">
                  ./src/content/playground/playground.wly:917:17
                </span>
              </span>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    bt2.6:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:921:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `svg
              <i>
                bt2
              </i>
              bt
              <i>
                ten
              </i>
              to
              <i>
                the
              </i>
              minus
              <i>
                5
              </i>
              cloud.svg`
            </OuterP>
            <OuterP class="indent-10">
              <span class="t-3003-c">
                Since
                <span class="t-3003">
                  ./src/content/playground/playground.wly:923:17
                </span>
              </span>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 0.00001 = 10^&#123;-5&#125;
              $$
              <ImageRight
                src="/build-img/svgo-svg/nMNN.svg"
                offsetX="0em"
                atLeastAsWide={true}
                local_url="./images/svg_bt2_bt_ten_to_the_minus_5_cloud.svg"
              />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                the logarithm base {" "}
                <span class="t-3003">
                  ./src/content/playground/playground.wly:933:17
                </span>
              </span>
              <Math>
                $10$
              </Math>
              {" "} of {" "}
              <Math>
                $0.00001$
              </Math>
              {" "} is {" "}
              <NoBreak>
                <Math>
                  $-5$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    bt2.7:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:937:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} `svg
              <i>
                bt2
              </i>
              ex
              <i>
                equation
              </i>
              addition_cloud.svg`
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large -a -2b - c = 0
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large -b -2c -3 = 0
              $$
              <ImageRight
                src="/build-img/svgo-svg/bESG.svg"
                offsetY="-0.5em"
                offsetX="0.5em"
                atLeastAsWide={true}
                local_url="./images/svg_bt2_ex_equation_addition_cloud.svg"
              />
            </MathBlock>
            <Pause />
            <OuterP>
              <span class="t-3003-c">
                and adding this last equation to the first
                <span class="t-3003">
                  ./src/content/playground/playground.wly:952:17
                </span>
              </span>
              {" "}
              {" "}
              equation above, we find
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                <b>
                  <span class="t-3003-c">
                    Large image stress fixture:
                    <span class="t-3003">
                      ./src/content/playground/playground.wly:957:19
                    </span>
                  </span>
                </b>
              </i>
              {" "} 1000px-wide image with six book clouds.
            </OuterP>
            <Pause />
            <Image
              src="/build-img/svgo-svg/S-T0.svg"
              width="1000px"
              local_url="./images/test_native_1000.svg"
            >
              <ImageLeft
                src="/build-img/svgo-svg/-TtU.svg"
                offsetY="0%"
                offsetX="2em"
                local_url="./images/c1_abCD_cloud.svg"
              />
              <ImageLeft
                src="/build-img/svgo-svg/3IFS.svg"
                offsetY="50%"
                offsetX="2em"
                local_url="./images/svg_ch2_ch_vertical_line_equation.svg"
              />
              <ImageLeft
                src="/build-img/svgo-svg/DSem.svg"
                offsetY="100%"
                offsetX="2em"
                local_url="./images/svg_bt2_bt_alert_cloud.svg"
              />
              <ImageRight
                src="/build-img/svgo-svg/Z39o.svg"
                offsetY="0%"
                offsetX="2em"
                local_url="./images/svg_ch1_ch_minus_two_squared_cloud.svg"
              />
              <ImageRight
                src="/build-img/svgo-svg/EgBm.svg"
                offsetY="50%"
                offsetX="2em"
                local_url="./images/c2_slope_formula_cloud.svg"
              />
              <ImageRight
                src="/build-img/svgo-svg/dcQB.svg"
                offsetY="100%"
                offsetX="2em"
                local_url="./images/svg_bt1_bt_empty_set_cloud.svg"
              />
            </Image>
          </Solution>
        </Exercise>
      </Exercises>
      <Pause />
      <OuterP>
        <i>
          <b>
            <span class="t-3003-c">
              Case 1:
              <span class="t-3003">
                ./src/content/playground/playground.wly:995:7
              </span>
            </span>
          </b>
        </i>
        {" "} set width=1000px, native 350px
      </OuterP>
      <Pause />
      <Image
        src="/build-img/svgo-svg/6BLF.svg"
        width="1000px"
        local_url="./images/test_native_350.svg"
      />
      <Pause />
      <OuterP>
        <i>
          <b>
            <span class="t-3003-c">
              Case 2:
              <span class="t-3003">
                ./src/content/playground/playground.wly:1003:7
              </span>
            </span>
          </b>
        </i>
        {" "} set width=1000px, native 1000px
      </OuterP>
      <Pause />
      <Image
        src="/build-img/svgo-svg/S-T0.svg"
        width="1000px"
        local_url="./images/test_native_1000.svg"
      />
      <Pause />
      <OuterP>
        <i>
          <b>
            <span class="t-3003-c">
              Case 3:
              <span class="t-3003">
                ./src/content/playground/playground.wly:1011:7
              </span>
            </span>
          </b>
        </i>
        {" "} set width=350px, native 1000px
      </OuterP>
      <Pause />
      <Image
        src="/build-img/svgo-svg/S-T0.svg"
        width="350px"
        local_url="./images/test_native_1000.svg"
      />
      <Pause />
      <OuterP>
        <i>
          <b>
            <span class="t-3003-c">
              Case 4:
              <span class="t-3003">
                ./src/content/playground/playground.wly:1019:7
              </span>
            </span>
          </b>
        </i>
        {" "} set width=350px, native 350px
      </OuterP>
      <Pause />
      <Image
        src="/build-img/svgo-svg/6BLF.svg"
        width="350px"
        local_url="./images/test_native_350.svg"
      />
      <Rest />
    </Article>
  );
}

const Rest = () => {
  const visibleRestSections = useShowMore(0);
  return <>
  </>;
};