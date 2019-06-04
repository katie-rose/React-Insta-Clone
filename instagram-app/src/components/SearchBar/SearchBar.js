import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return(
  <div className="Search-Header">
     <div className="Search-Bar">
      <div><i className="fab fa-instagram fa-lg"></i> Instagram</div>
      <div className="SearchInput"> <input type="text" placeholder="Search" value={props.searchValue} onChange={props.searchHandler} /></div>
      <div><i className="fas fa-compass icon fa-lg"></i><i className="far fa-heart icon fa-lg"></i><i onClick={props.logOutHandler} className="fas fa-user-alt fa-lg"></i></div>
    </div>
  </div>
  );
}

export default SearchBar;