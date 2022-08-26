import React, { useEffect } from "react";
import NewsApi from "../api";

const NewsFeed = () => {
  useEffect(() => {
    NewsApi.get("/everything"),
      {
        params: {
          domains: "http://hackernews.com",
        },
      }.then(({ articles }) => console.log(articles));
  }, []);

  return <div>NewsFeed</div>;
};

export default NewsFeed;
