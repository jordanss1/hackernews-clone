import React, { useContext } from "react";
import SearchContext from "../contexts/SearchContext";
import "../styling/header.css";

const SearchBar = () => {
  const {
    searchTerm,
    setSearchTerm,
    handleSearchSubmit,
    setArticles,
    axiosSearchApi,
  } = useContext(SearchContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSearchSubmit(searchTerm, setArticles, axiosSearchApi);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="input-group">
        <input
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
          type="text"
          className="form-control me-1"
          placeholder="Search articles..."
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
        <button
          onClick={handleFormSubmit}
          className="ui icon button searchButton d-flex align-items-center justify-content-center"
        >
          <i className="search icon fs-6"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
