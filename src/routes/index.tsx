import TOC from "~/components/TOC";
import TOCTitle from "~/components/TOCTitle";
import TOCItem from "~/components/TOCItem";
import { Spacer } from "~/components/Spacer";

export default function Home() {
  return (
    <TOC next-page="/article/chapter1">
      <div id="chapter">
        <TOCTitle label="Chapters" />
        <ul>
          <TOCItem
            article_type={1}
            label="A Few Refreshers"
            on_mobile="A Few Refreshers"
            href="chapter1" />
          <TOCItem
            article_type={2}
            label="Slopes"
            on_mobile="Slopes"
            href="chapter2" />
        </ul>
      </div>
    </TOC>
  );
};
