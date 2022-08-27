import React, { useContext, useState } from "react";
import SearchContext from "../contexts/SearchContext";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  return (
    <div>
      <div className="input-group">
        <input
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
          type="text"
          className="form-control"
          placeholder="Search articles..."
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  );
};

export default SearchBar;
