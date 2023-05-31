import React from "react";
import ArticlesNewsFeed from "./ArticlesNewsFeed";
import ArticlesTrending from "./ArticlesTrending";

const Articles = ({ is1000 }) => {
  return (
    <section className="d-grid grid-container">
      <ArticlesNewsFeed />
      <ArticlesTrending is1000={is1000} />
    </section>
  );
};

export default Articles;
