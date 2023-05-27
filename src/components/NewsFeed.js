import React, { useContext } from "react";
import SearchContext from "../contexts/SearchContext";
import "../styling/mainPage.css";
import images from "../images";

const NewsFeed = () => {
  const { articles } = useContext(SearchContext);

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  const renderedArticles = articles.slice(0, 10).map((article, i) => {
    const image = images[i];
    console.log(article.publishedAt);

    return (
      <article
        className="article-grid mb-4 d-grid"
        onClick={() => handleClick(article.url)}
        key={article.url}
      >
        <img src={image} className="news-image" />
        <div className="article-info d-grid">
          <h2>{article.title}</h2>
          <aside>
            <div className="d-flex aside-heading">
              <div className="d-flex me-4">
                <i className="calendar alternate outline icon calender-i"></i>
                <h3>{article.publishedAt.slice(0, 10)}</h3>
              </div>
              <h3>{article.source.Name}</h3>
            </div>
            <div className="aside-content mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </aside>
        </div>
      </article>
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

export default NewsFeed;
