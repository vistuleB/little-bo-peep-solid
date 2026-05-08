import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import InChapterLink  from "~/components/InChapterLink";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { StarDivider }  from "~/components/StarDivider";
import { Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __AppendixB__() {
  return (
    <Article
      prevPage="/article/appendix1"
      nextPage=""
      pageNecessaryMargin={800}
      maxElementWidth={500}
      id="_279_hgi_"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            classical circle theorems
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Appendix B:">
        Classical Circle Theorems
      </ArticleTitle>
      <Section id="section-1">
        <OuterP>
          <b>
            Classical Circle Theorems
          </b>
        </OuterP>
        <Pause />
        <StarDivider />
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