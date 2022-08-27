import React, { useState, useEffect } from "react";
import { SearchStore } from "../contexts/SearchContext";
import Header from "./Header";
import NewsFeed from "./NewsFeed";
import NewsApi from "../api";

const App = () => {
  return (
    <SearchStore>
      <div className="container-fluid gx-0">
        <Header headerName="The Hacker News" />
        <div className="divider mb-3"></div>
        <div className="d-grid gap-5 row">
          <div className="col-7">
            <NewsFeed />
          </div>
        </div>
      </div>
    </SearchStore>
  );
};

export default App;
