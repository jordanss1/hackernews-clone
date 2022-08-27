import React, { useContext } from "react";
import SearchContext from "../contexts/SearchContext";

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
          className="form-control"
          placeholder="Search articles..."
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
      </div>
    </form>
  );
};

export default SearchBar;
