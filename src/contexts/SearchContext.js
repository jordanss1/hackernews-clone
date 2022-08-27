import React, { useState, useEffect, createContext } from "react";
import NewsApi from "../api";

const SearchContext = createContext();

export const SearchStore = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("apple");

  const handleSearchSubmit = () => {
    NewsApi.get("/v2/everything", {
      params: {
        domains: "thehackernews.com",
        q: searchTerm,
        pageSize: 10,
        sortBy: "publishedAt",
        language: "en",
      },
    }).then(({ data }) => {
      setArticles(data.articles);
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
    <SearchContext.Provider
      value={{ articles, setArticles, searchTerm, setSearchTerm }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
