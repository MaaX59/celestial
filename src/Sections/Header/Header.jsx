import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="app_header">
      <div className="app_header-presentation">
        <div className="app_header-presentation-movie"></div>
        <div className="app_header-presentation-text">
          Your Home <br /> Among The Stars
        </div>
      </div>
      <div className="app_header_options">
        <div className="app_header_options-single"></div>
        <div className="app_header_options-single"></div>
        <div className="app_header_options-single"></div>
      </div>
    </div>
  );
};

export default Header;
