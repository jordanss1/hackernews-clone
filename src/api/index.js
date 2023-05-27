import axios from "axios";

export const axiosSearchApi = axios.create({
  baseURL: "https://newsapi.org/v2/everything",
  params: {
    pageSize: 40,
    sortBy: "publishedAt",
    language: "en",
  },
  headers: {
    Authorization: process.env.REACT_APP_ID,
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
    Authorization: process.env.REACT_APP_ID,
  },
});

export const handleSearchSubmit = async (
  searchTerm,
  setArticles,
  axiosApi,
  setLoading
) => {
  setLoading(true);
  await axiosApi
    .get("", {
      params: {
        q: searchTerm,
      },
    })
    .then(({ data }) => {
      setArticles(data.articles);
    })
    .catch((err) => console.log(err.message));
  setLoading(false);
};
