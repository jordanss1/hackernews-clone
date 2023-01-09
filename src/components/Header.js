import React from "react";
import SearchBar from "./SearchBar";
import "../styling/header.css";

const Header = ({ headerName }) => {
  return (
    <header className="container-fluid px-0">
      <div className="top-header d-flex justify-content-center">
        <div className="top-container d-flex align-items-center justify-content-between ms-4">
          <div>
            <p>#1 Trusted Cybersecurity News Platform</p>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-evenly me-1">
            <p className="mb-0 me-4">Followed by 3.45+ million</p>
            <a href="https://twitter.com/thehackersnews">
              <i className="twitter icon me-4 mb-2"></i>
            </a>
            <i className="linkedin icon me-4 mb-2"></i>
            <i className="facebook f icon me-4 mb-2"></i>
          </div>
        </div>
      </div>
      <div className="bottom-header px-3">
        <div className="row justify-content-around align-content-center">
          <div className=" heading-container col-12 col-sm-4 pb-2 pb-sm-0">
            <h1 className="heading text-start ps-3">{headerName}</h1>
          </div>
          <div className="col-12 col-sm-4 search-div align-self-center pb-2 pb-sm-0">
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
