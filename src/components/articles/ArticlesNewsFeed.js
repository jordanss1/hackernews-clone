import React, { useContext } from "react";
import SearchContext from "../../contexts/SearchContext";
import ArticleNewsFeedItem from "./ArticleNewsFeedItem";
import "../../styling/mainPage.css";
import images from "../../images";

const ArticlesNewsFeed = () => {
  const { articles } = useContext(SearchContext);

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  const renderedArticles = articles.slice(0, 10).map((article, i) => {
    const image = images[i];

    return (
      <ArticleNewsFeedItem
        handleClick={handleClick}
        article={article}
        image={image}
      />
    );
  });

  return (
    <div className="newsfeed-div">
      {renderedArticles}
      <div className="d-flex py-4 justify-content-end">
        <button className="d-flex align-items-baseline next-button">
          <span className="px-1">Next Page</span>
          <i className="chevron right icon fw-bold" />
        </button>
      </div>
    </div>
  );
};

export default ArticlesNewsFeed;
