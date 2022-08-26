import React from "react";

const SearchBar = (termState) => {
  const { searchTerm, setSearchTerm } = termState;

  return (
    <div>
      <div class="input-group">
        <input
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  );
};

export default SearchBar;
