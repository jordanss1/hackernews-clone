import React, { useState, useEffect, createContext } from "react";
import { axiosSearchApi, handleSearchSubmit, axiosTopHeadlines } from "../api";

const SearchContext = createContext();

export const SearchStore = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [topArticles, setTopArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
    if (!articles.length) {
      handleSearchSubmit("apple", setArticles, axiosSearchApi);
    }
    axiosTopHeadlines.get("").then(({ data }) => setTopArticles(data.articles));
  }, []);

  return (
    <SearchContext.Provider value={fullProviders}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
