import React from "react";

const NavBar = () => {
  return (
    <nav className="px-5 container-fluid">
      <div className="menu ps-4">
        <ul className="d-flex align-items-center h-100">
          <li>Home</li>
          <li className="d-breaches">Data Breaches</li>
          <li>Cyber Attacks</li>
          <li className="d-none newsletter">Newsletter</li>
          <li className="vulnerable">Vulnerabilities</li>
          <li className="malware">Malware</li>
          <li>Store</li>
          <li className="contact">Contact</li>
        </ul>
      </div>
      <div className="icons-menu d-flex align-items-center justify-content-end justify-content-evenly mb-2 pe-5">
        <i className="search icon ps-4"></i>
        <i className="bars icon ps-5"></i>
      </div>
    </nav>
  );
};

export default NavBar;
