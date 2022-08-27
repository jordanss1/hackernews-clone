import React from "react";
import SearchBar from "./SearchBar";
import "../styling/header.css";

const Header = ({ headerName }) => {
  return (
    <div className="container-fluid px-0">
      <header>
        <div className="top-header"></div>
        <div className="bottom-header px-3">
          <div className="row justify-content-around align-content-center">
            <div className="col-12 col-sm-4 pb-2 pb-sm-0">
              <h1 className="heading text-center">{headerName}</h1>
            </div>
            <div className="col-12 col-sm-4 search-div align-self-center pb-2 pb-sm-0">
              <SearchBar />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
