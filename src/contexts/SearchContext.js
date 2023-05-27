import React, { useState, useEffect, createContext } from "react";
import { axiosSearchApi, handleSearchSubmit, axiosTopHeadlines } from "../api";

const SearchContext = createContext();

export const SearchStore = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [topArticles, setTopArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const fullProviders = {
    loading,
    setLoading,
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
    let id;

    if (!articles.length) {
      id = setTimeout(() => {
        handleSearchSubmit(
          "vulnerabilites",
          setArticles,
          axiosSearchApi,
          setLoading
        );

        axiosTopHeadlines.get("").then(({ data }) => {
          setTopArticles(data.articles);
        });
      }, 3500);
    }

    return () => clearTimeout(id);
  }, []);

  return (
    <SearchContext.Provider value={fullProviders}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
