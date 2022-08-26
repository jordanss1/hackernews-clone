import React, { useState, useEffect } from "react";

const NewsFeed = (articles) => {
  const renderedArticles = articles.articles.map((article) => {
    return <div>{article.author}</div>;
  });

  return <div>{renderedArticles}</div>;
};

export default NewsFeed;
