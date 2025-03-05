import TOC from "~/components/TOC";
import ArticleTitle from "~/components/ArticleTitle";
import useSetRoute from "~/hooks/useSetRoute";

export default function Home() {
  useSetRoute();
  
  return (
    <>
      <ArticleTitle label="" />
      <TOC />
    </>
  );
}
