import React, { useState, useEffect, createContext } from "react";
import { handleSearchSubmit, axiosTopHeadlines } from "../api";

const SearchContext = createContext();

const art1 = [
  {
    author: "Stack Overflow",
    publishedAt: "2023-05-18T01:21:17Z",
    source: { Id: null, Name: "Stackoverflow.com" },
    title: "Opening modalwith multiple select Options",
    url: "https://stackoverflow.com/questions/76276563/opening-modalwith-multiple-select-options",
  },
  {
    author: "Stack Overflow",
    publishedAt: "2023-05-18T01:21:17Z",
    source: { Id: null, Name: "Stackoverflow.com" },
    title: "Opening modalwith multiple select Options",
    url: "https://stackoverflow.com/questions/76276563/opening-modalwith-multiple-select-options",
  },
  {
    author: "Stack Overflow",
    publishedAt: "2023-05-18T01:21:17Z",
    source: { Id: null, Name: "Stackoverflow.com" },
    title: "Opening modalwith multiple select Options",
    url: "https://stackoverflow.com/questions/76276563/opening-modalwith-multiple-select-options",
  },
];

export const SearchStore = ({ children }) => {
  const [fullArticles, setFullArticles] = useState(null);
  const [topArticles, setTopArticles] = useState(null);
  const [sliceArray, setSliceArray] = useState([0, 10]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let id;

    if (!fullArticles) {
      id = setTimeout(() => {
        handleSearchSubmit("cyber attacks", setFullArticles, setLoading);

        axiosTopHeadlines.get("").then(({ data }) => {
          setTopArticles(data.articles);
        });
      }, 3500);
    }

    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    setSliceArray([0, 10]);
  }, [fullArticles]);

  const handleButtonPress = (buttonType) => {
    window.scrollTo({ top: 0 });

    setSliceArray((prev) =>
      prev.map((num) => (buttonType === "prev" ? num - 10 : num + 10))
    );
  };

  const articles = fullArticles?.slice(...sliceArray);

  const fullProviders = {
    handleButtonPress,
    sliceArray,
    loading,
    setLoading,
    articles,
    fullArticles,
    setFullArticles,
    topArticles,
    setTopArticles,
    searchTerm,
    setSearchTerm,
    handleSearchSubmit,
  };

  return (
    <SearchContext.Provider value={fullProviders}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
