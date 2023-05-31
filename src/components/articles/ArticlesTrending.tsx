import { ReactElement, useContext } from "react";
import SearchContext from "../../contexts/SearchContext";
import images from "../../images";

const ArticlesTrending = ({ is1000 }: { is1000: boolean }): ReactElement => {
  const { topArticles } = useContext(SearchContext);

  const handleClick = (link: string): void => {
    window.open(link, "_blank");
  };

  const articles = is1000 ? topArticles?.slice(0, 4) : topArticles;

  const renderedArticles = articles?.map((article, i) => {
    const image = images[i];

    return (
      <article
        key={i}
        onClick={() => handleClick(article.url)}
        className="mb-3"
      >
        <img className="top-image me-3" src={image} />
        <div className="top-title">{article.title}</div>
      </article>
    );
  });

  return (
    <section className="pe-0 d-flex trending-container justify-content-center align-items-center">
      <div className="trending-stories">
        <h2 className="text-start pb-2 pt-sm-0 trending-header">
          Trending News Stories
        </h2>
        <div className="trending-articles">{renderedArticles}</div>
      </div>
    </section>
  );
};

export default ArticlesTrending;
