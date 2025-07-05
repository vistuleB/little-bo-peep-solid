import TOC  from "~/components/TOC";
import TOCItem  from "~/components/TOCItem";
import TOCTitle  from "~/components/TOCTitle";

export default function __Home__() {
  return (
    <TOC
      prevPage="/article/bootcamp1"
      nextPage="">
      <div id="bootcamp">
        <TOCTitle label="Bootcamps" />
        <ul>
          <TOCItem
            article_type={1}
            href="bootcamp1">
            Powers of 10
          </TOCItem>
        </ul>
      </div>
    </TOC>
  );
};
