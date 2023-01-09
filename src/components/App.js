import React, { useContext } from "react";
import Header from "./Header";
import NewsFeed from "./NewsFeed";
import Welcome from "./Welcome";
import SearchContext from "../contexts/SearchContext";
import "../styling/mainPage.css";
import { style1, style2 } from "../styling/styleObjects";

const App = () => {
  const { articles, topArticles } = useContext(SearchContext);

  return (
    <div className="container-fluid gx-0">
      <Welcome />
      <Header headerName="The Hacker News" />
      <div className="divider mb-3"></div>
      <main className="grid-contain d-grid">
        <section className="d-flex justify-content-center">
          <NewsFeed posts={articles} styleObj={style1} />
        </section>
        <section className="pe-0 pe-sm-5 grid-item-2">
          <h2 className="ui dividing header text-center text-sm-start pt-3 pt-sm-0">
            Top Headlines
          </h2>
          <NewsFeed posts={topArticles} styleObj={style2} />
        </section>
      </main>
    </div>
  );
};

export default App;
