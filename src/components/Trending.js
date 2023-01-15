import React, { useContext } from "react";
import SearchContext from "../contexts/SearchContext";

const Trending = () => {
  const { topArticles } = useContext(SearchContext);

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  const renderedArticles = topArticles.map((article) => {
    return (
      <article onClick={() => handleClick(article.url)} className="d-flex mb-3">
        <img className="top-image me-3" src="news.jpg" />
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
        <div className="articles">{renderedArticles}</div>
      </div>
    </section>
  );
};

export default Trending;
