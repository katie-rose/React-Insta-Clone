import React from "react";
import LogoText from "../../img/logo.png";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="search-header">
      <img src={`${LogoText}`} alt="Instagram" className="logo-text" />
      <div>
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          onKeyDown={props.searchPosts}
        />
      </div>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;