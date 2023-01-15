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
    const letters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    if (!articles.length && !loading) {
      handleSearchSubmit(
        letters[Math.floor(Math.random() * 25)],
        setArticles,
        axiosSearchApi
      );
      axiosTopHeadlines.get("").then(({ data }) => {
        console.log(data);
        setTopArticles(data.articles);
      });
    }
  }, [loading]);

  return (
    <SearchContext.Provider value={fullProviders}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
