import axios from "axios";

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
  setLoading
) => {
  setLoading(true);
  await axiosSearchApi
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
