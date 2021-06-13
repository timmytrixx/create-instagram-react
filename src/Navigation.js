import React from 'react';
import Menu from './Menu';
import logo from "./images/instagram-logo.png";
import searchIcon from "./images/search-icon.png";

function Navigation () {
    return (
    <div className="navigation">
      <div className="container">
        <img className="logo" src={logo} alt="instagram logo" />
        <div className="search">
          <img className="searchIcon" src={searchIcon} alt="search icon" />
          <span className="searchText">Search</span>
        </div>
        <Menu />
      </div>
    </div>
    );
}

export default Navigation;