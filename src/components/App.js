import React, { useContext } from "react";
import Header from "./Header";
import NewsFeed from "./NewsFeed";
import SearchContext from "../contexts/SearchContext";
import "../styling/mainPage.css";

const App = () => {
  const { articles, topArticles } = useContext(SearchContext);

  const backgroundColor = [
    { backgroundColor: "#395697" },
    { backgroundColor: "white" },
  ];

  return (
    <div className="container-fluid gx-0">
      <Header headerName="The Hacker News" />
      <div className="divider mb-3"></div>
      <div className="grid-contain d-grid">
        <div>
          <NewsFeed
            posts={articles}
            position="center"
            width1="w-50"
            bg={backgroundColor[1]}
          />
        </div>
        <div className="pe-0 pe-sm-5 grid-item-2">
          <h2 className="ui dividing header text-center text-sm-start">
            Top Headlines
          </h2>
          <NewsFeed
            posts={topArticles}
            position="center"
            width1="w-100"
            bg={backgroundColor[0]}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
