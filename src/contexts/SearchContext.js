import React, { useState, useEffect, createContext } from "react";
import { axiosSearchApi, handleSearchSubmit, axiosTopHeadlines } from "../api";

const SearchContext = createContext();

export const SearchStore = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [topArticles, setTopArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("apple");

  const fullProviders = {
    articles,
    setArticles,
    topArticles,
    setTopArticles,
    searchTerm,
    setSearchTerm,
    handleSearchSubmit,
    axiosSearchApi,
  };

  useEffect(() => {
    if (searchTerm && !articles.length) {
      handleSearchSubmit(searchTerm, setArticles, axiosSearchApi);
    }
  }, [articles]);

  useEffect(() => {
    axiosTopHeadlines.get("").then(({ data }) => setTopArticles(data.articles));
  }, []);

  return (
    <SearchContext.Provider value={fullProviders}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
