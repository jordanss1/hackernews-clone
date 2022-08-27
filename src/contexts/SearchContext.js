import React, { useState, useEffect, createContext } from "react";
import { axiosSearchApi, handleSearchSubmit } from "../api";

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
  };

  useEffect(() => {
    if (searchTerm && !articles.length) {
      handleSearchSubmit(searchTerm, setArticles, axiosSearchApi);
    } else {
      const intervalId = setInterval(() => {
        handleSearchSubmit(searchTerm, setArticles, axiosSearchApi);
      }, 1000);
      return () => clearInterval(intervalId);
    }
    return;
  }, [searchTerm]);

  return (
    <SearchContext.Provider value={fullProviders}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
