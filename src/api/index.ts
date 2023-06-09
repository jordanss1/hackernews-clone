import axios from "axios";
import { ArticlesStateType } from "../contexts/SearchState";

type HandleSearchSubmitType = (
  searchTerm: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setArticles: React.Dispatch<React.SetStateAction<ArticlesStateType | null>>,
  setTopArticles?: React.Dispatch<
    React.SetStateAction<ArticlesStateType | null>
  >,
  initialRender?: boolean
) => void;

type MainArticlesSearchType = (
  searchTerm: string,
  setArticles: React.Dispatch<React.SetStateAction<ArticlesStateType | null>>
) => Promise<void>;

type TopArticlesSearchType = (
  setTopArticles: React.Dispatch<React.SetStateAction<ArticlesStateType | null>>
) => Promise<void>;

export const axiosSearchApi = axios.create({
  baseURL: "https://newsapi.org/v2/everything",
  params: {
    pageSize: 40,
    sortBy: "publishedAt",
    language: "en",
  },
  headers: {
    Authorization: process.env.REACT_APP_ID as string,
  },
});

export const axiosTopHeadlines = axios.create({
  baseURL: "https://newsapi.org/v2/top-headlines",
  params: {
    category: "technology",
    country: "us",
    pageSize: 10,
  },
  headers: {
    Authorization: process.env.REACT_APP_ID as string,
  },
});

export const mainArticlesSearch: MainArticlesSearchType = async (
  searchTerm,
  setArticles
) => {
  await axiosSearchApi
    .get("", {
      params: {
        q: searchTerm,
      },
    })
    .then(({ data }) => {
      setArticles({ articles: data.articles, error: null });
    })
    .catch((err) => {
      if (err instanceof Error) {
        setArticles({ articles: null, error: err });
        console.error(err.message);
      }
    });
};

const topArticleSearch: TopArticlesSearchType = async (setTopArticles) => {
  await axiosTopHeadlines
    .get("")
    .then(({ data }) => {
      setTopArticles({ articles: data.articles, error: null });
    })
    .catch((err) => {
      if (err instanceof Error) {
        setTopArticles({ articles: null, error: err });
        console.error(err.message);
      }
    });
};

export const handleSearchSubmit: HandleSearchSubmitType = async (
  searchTerm,
  setLoading,
  setArticles,
  setTopArticles,
  initialRender
) => {
  if (initialRender && setTopArticles) {
    await mainArticlesSearch(searchTerm, setArticles);
    await topArticleSearch(setTopArticles);
    setLoading(false);
  } else {
    setLoading(true);
    await mainArticlesSearch(searchTerm, setArticles);
    setLoading(false);
  }
};
