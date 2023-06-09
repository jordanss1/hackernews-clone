import { useState, useEffect, createContext } from "react";
import { handleSearchSubmit } from "../api";
import { ArticleType } from "../types";

export type HandleButtonPressType = (buttonType: "prev" | "next") => void;

export type ArticlesStateType = {
  articles: ArticleType[] | null;
  error: Error | null;
};

export const SearchState = () => {
  const [fullArticles, setFullArticles] = useState<ArticlesStateType | null>(
    null
  );
  const [topArticles, setTopArticles] = useState<ArticlesStateType | null>(
    null
  );
  const [sliceArray, setSliceArray] = useState<number[]>([0, 10]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let id: NodeJS.Timeout;

    if (!fullArticles) {
      setLoading(true);

      id = setTimeout(() => {
        handleSearchSubmit(
          "cyber attacks",
          setLoading,
          setFullArticles,
          setTopArticles,
          true
        );
      }, 3500);
    }

    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    setSliceArray([0, 10]);
  }, [fullArticles]);

  const handleButtonPress: HandleButtonPressType = (buttonType) => {
    window.scrollTo({ top: 0 });

    setSliceArray((prev) =>
      prev.map((num) => (buttonType === "prev" ? num - 10 : num + 10))
    );
  };

  return {
    handleButtonPress,
    sliceArray,
    loading,
    setLoading,
    fullArticles,
    setFullArticles,
    topArticles,
    setTopArticles,
    searchTerm,
    setSearchTerm,
    handleSearchSubmit,
  };
};

type SearchStateType = ReturnType<typeof SearchState>;

const SearchContext = createContext<SearchStateType>({
  handleButtonPress: () => {},
  sliceArray: [0, 10],
  loading: true,
  setLoading: () => {},
  fullArticles: null,
  setFullArticles: () => {},
  topArticles: null,
  setTopArticles: () => {},
  searchTerm: "",
  setSearchTerm: () => {},
  handleSearchSubmit: () => {},
});

export default SearchContext;
