import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import InChapterLink  from "~/components/InChapterLink";
import { Math }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter7__() {
  return (
    <Article
      prevPage="/article/chapter6"
      nextPage=""
      pageNecessaryMargin={950}
      maxElementWidth={1000}
      id="_149_hgi_"
    >
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            ch7
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 7:">
        The Derivative of {" "}
        <Math>
          $x^2$
        </Math>
      </ArticleTitle>
      <Section id="section-1">
        <OuterP>
          <b>
            Ch7.
          </b>
          {" "} This is a stub.
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
    </>}
  </>;
};