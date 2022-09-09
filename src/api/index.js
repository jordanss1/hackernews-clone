import axios from "axios";

export const axiosSearchApi = axios.create({
  baseURL: "https://newsapi.org/v2/everything",
  params: {
    pageSize: 20,
    sortBy: "publishedAt",
    language: "en",
  },
  headers: {
    Authorization: "d87d0bba1b9649deac46db73244aa480",
  },
});

export const axiosTopHeadlines = axios.create({
  baseURL: "https://newsapi.org/v2/top-headlines",
  params: {
    sources: "hacker-news",
  },
  headers: {
    Authorization: "d87d0bba1b9649deac46db73244aa480",
  },
});

export const handleSearchSubmit = (searchTerm, setArticles, axiosApi) => {
  axiosApi
    .get("", {
      params: {
        q: searchTerm,
      },
    })
    .then(({ data }) => {
      setArticles(data.articles);
    });
};
