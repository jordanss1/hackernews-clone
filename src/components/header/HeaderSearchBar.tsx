import { FormEvent, ReactElement, useContext } from "react";
import SearchContext from "../../contexts/SearchContext";
import "../../styling/header.css";

const HeaderSearchBar = ({ display }: { display: boolean }): ReactElement => {
  const {
    searchTerm,
    setSearchTerm,
    handleSearchSubmit,
    setFullArticles,
    setLoading,
  } = useContext(SearchContext);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleSearchSubmit(searchTerm, setFullArticles, setLoading);
  };

  return (
    <form
      className={`${
        display ? "form-displayed" : ""
      } d-flex justify-content-center align-items-center`}
      onSubmit={handleFormSubmit}
    >
      <div className={`${display ? "input-group-displayed" : ""} input-group`}>
        <input
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
          type="text"
          className={`${display ? "input-displayed" : ""} form-control me-1`}
          placeholder="Search Here..."
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
      </div>
    </form>
  );
};

export default HeaderSearchBar;
