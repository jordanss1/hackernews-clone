import React, { useState, useEffect, useContext } from "react";
import SearchContext from "../../contexts/SearchContext";

const NavBar = ({ handleClick }) => {
  const {
    loading,
    setLoading,
    handleSearchSubmit,
    axiosSearchApi,
    setArticles,
  } = useContext(SearchContext);

  const [searched, setSearched] = useState(false);

  const startSearch = (query) => {
    handleSearchSubmit(query, setArticles, axiosSearchApi);
    setSearched(true);
    setLoading(true);
  };

  useEffect(() => {
    let id;

    if (searched && loading) {
      id = setTimeout(() => {
        setSearched(false);
        setLoading(false);
      }, 1500);
    }

    return () => clearTimeout(id);
  }, [searched]);

  return (
    <nav className="container-fluid">
      <div className="menu ps-4">
        <ul className="d-flex align-items-center h-100">
          <li>
            <i className="d-none home icon home-icon"></i>Home
          </li>
          <li
            onClick={!loading ? () => startSearch("data breaches") : () => {}}
            className="d-breaches"
          >
            Data Breaches
          </li>
          <li
            onClick={!loading ? () => startSearch("cyber attacks") : () => {}}
            className="cyber-attacks"
          >
            Cyber Attacks
          </li>
          <li className="d-none newsletter">
            <i className="envelope icon"></i>
            Newsletter
          </li>
          <li
            onClick={!loading ? () => startSearch("vulnerabilites") : () => {}}
            className="vulnerable"
          >
            Vulnerabilities
          </li>
          <li
            onClick={!loading ? () => startSearch("malware") : () => {}}
            className="malware"
          >
            Malware
          </li>
          <li>
            <i className="d-none shopping cart icon cart-icon"></i>Store
          </li>
          <li className="contact">Contact</li>
        </ul>
      </div>
      <div className="icons-menu d-flex align-items-center justify-content-end justify-content-evenly mb-2 pe-5">
        <i onClick={() => handleClick()} className="search icon ps-4"></i>
        <i className="bars icon ps-5"></i>
      </div>
    </nav>
  );
};

export default NavBar;
