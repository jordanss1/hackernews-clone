import axios from "axios";

export const axiosSearchApi = axios.create({
  baseURL: "https://newsapi.org/v2/everything",
  params: {
    domains: "thehackernews.com",
    pageSize: 10,
    sortBy: "publishedAt",
    language: "en",
  },
  headers: {
    Authorization: "518bbdcd0563416688b803efc38f98b4",
  },
});

// export const axiosTopHeadlines = axios.create({
//   baseURL: "https://newsapi.org/v2/top-headlines",
//     params: {
//       id: "hacker-news",
//       sortBy: "publishedAt",
//       language: "en",
//     },
//   headers: {
//     Authorization: "518bbdcd0563416688b803efc38f98b4",
//   },
// });

export const handleSearchSubmit = (searchTerm, setArticles, axiosApi) => {
  axiosApi
    .get("", {
      params: {
        q: searchTerm,
      },
    })
    .then(({ data }) => {
      setArticles((prev) => [...prev, data.articles]);
    });
};
