import React, { useContext } from "react";
import SearchContext from "../../contexts/SearchContext";
import ArticlesNewsFeedItem from "./ArticlesNewsFeedItem";
import "../../styling/mainPage.css";
import images from "../../images";
import ArticlesNewsFeedButtons from "./ArticlesNewsFeedButtons";

const ArticlesNewsFeed = () => {
  const { articles } = useContext(SearchContext);

  return (
    <div className="newsfeed-div">
      <div>
        {articles?.map((article, i) => {
          const image = images[i];

          return (
            <ArticlesNewsFeedItem key={i} article={article} image={image} />
          );
        })}
      </div>
      <ArticlesNewsFeedButtons />
    </div>
  );
};

export default ArticlesNewsFeed;
