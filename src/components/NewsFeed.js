import React, { useContext } from "react";
import SearchContext from "../contexts/SearchContext";

const NewsFeed = () => {
  const { articles } = useContext(SearchContext);

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  const renderedArticles = articles.map((article) => {
    return (
      <article className="d-flex  w-100 mb-4" key={article.url}>
        <div className="d-flex w-100 justify-content-center">
          <div className="ui card w-50">
            <div className="content">
              <div
                className="header w-75"
                style={{ cursor: "pointer" }}
                onClick={() => handleClick(article.url)}
              >
                {article.title}
              </div>
              <div className="d-flex flex-row">
                <div className="meta mx-2">{article.author}</div>
                <div className="meta ms-4">{article.publishedAt}</div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  });

  return <div>{renderedArticles}</div>;
};

export default NewsFeed;
