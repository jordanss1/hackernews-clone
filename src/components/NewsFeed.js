import React from "react";
import "../styling/mainPage.css";

const NewsFeed = ({ styleObj, posts }) => {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  const renderedArticles = posts.map((article) => {
    return (
      <article className="mb-4" key={article.url}>
        <div className="d-flex w-100 justify-content-center">
          <div
            style={styleObj.bg}
            className={`ui card ${styleObj.mobileWidth} ${styleObj.width1}`}
          >
            <div className="content" style={styleObj.bg}>
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

  return <div className={styleObj.divClass}>{renderedArticles}</div>;
};

export default NewsFeed;
