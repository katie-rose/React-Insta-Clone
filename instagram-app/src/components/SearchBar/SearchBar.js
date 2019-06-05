import React from "react";
import LogoText from "../../img/logo.png";
import "./SearchBar.css";

const SearchBar = () => {
return (
    <header className="search-header">
      <img src={`${LogoText}`} alt="Instagram" className="logo-text" />
      <input type="text" placeholder="Search" className="search-bar" />
    </header>
  );
};


export default SearchBar;