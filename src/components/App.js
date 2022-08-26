import React, { useState, useEffect } from "react";
import Header from "./Header";
import NewsFeed from "./NewsFeed";
import NewsApi from "../api";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("apple");

  const handleSearchSubmit = () => {
    NewsApi.get("/v2/everything", {
      params: {
        id: "hacker-news",
        q: searchTerm,
        pageSize: 10,
      },
    }).then(({ data }) => {
      setArticles(data.articles/*.articles*/);
    });
  };

  useEffect(() => {
    if (searchTerm && !articles.length) {
      handleSearchSubmit();
    } else {
      const intervalId = setInterval(() => {
        handleSearchSubmit();
      }, 1000);
      return () => clearInterval(intervalId);
    }
    return;
  }, [searchTerm]);

  return (
    <div>
      <Header
        headerName="The Hacker News"
        termState={{ searchTerm, setSearchTerm }}
      />
      <NewsFeed articles={articles} />
    </div>
  );
};

export default App;
