import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
              <div>Bengaluru, India</div>
            </div>
            <div>
              <i class="fi fi-rr-caret-down absolute-center"></i>
            </div>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <i class="fi fi-rr-search absolute-center search-icon"></i>
            <input
              placeholder="Search for restaurant, cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <span className="header-username first">Log in</span>
          <span className="header-username second">Sign up</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
