import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { CodexSuggestion }  from "~/components/CodexSuggestions";
import { Math }  from "~/components/Math";
import { Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter9__() {
  return (
    <Article
      prevPage="/article/chapter8"
      nextPage="/article/chapter10"
      pageNecessaryMargin={160}
      maxElementWidth={850}
      id="_147_h.a.i_"
      path="/article/chapter9"
    >
      <ArticleTitle banner="Chapter 9:">
        <span class="t-3003-c">
          Derivative(s) of {" "}
          <span class="t-3003">
            ./src/content/ch6a_square/__parent.wly:2:11
          </span>
        </span>
        <Math>
          $x^2$
        </Math>
      </ArticleTitle>
      <Section id="section-1">
        <CodexSuggestion>
          <p>
            <b>
              <span class="t-3003-c">
                Placeholder.
                <span class="t-3003">
                  ./src/content/ch6a_square/placeholder.wly:6:10
                </span>
              </span>
            </b>
          </p>
        </CodexSuggestion>
      </Section>
      <Rest />
    </Article>
  );
}

const Rest = () => {
  const visibleRestSections = useShowMore(0);
  return <>
  </>;
};