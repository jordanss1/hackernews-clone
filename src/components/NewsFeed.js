import React from "react";
import "../styling/mainPage.css";

const NewsFeed = ({ posts, position, width1, bg }) => {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  const renderedArticles = posts.map((article) => {
    return (
      <article className="mb-4" key={article.url}>
        <div className={`d-flex w-100 justify-content-${position}`}>
          <div style={bg} className={`ui card mobile-width ${width1}`}>
            <div className="content" style={bg}>
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
