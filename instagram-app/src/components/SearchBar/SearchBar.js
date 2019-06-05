import React from "react";
import LogoText from "../../img/logo.png";
import "./SearchBar.css";

const SearchBar = () => {
return (
    <header className="Search-Header">
      <img src={`${LogoText}`} alt="Instagram" className="logoText" />
      <input type="text" placeholder="Search" className="search" />
    </header>
  );
};


export default SearchBar;