import React from "react";
import "./Header.css";
import backgroundVideo from "../../video/stars-in-space-background.mp4";

const Header = () => {
  return (
    <div className="app_header">
      <div className="app_header-presentation">
        <video autoPlay muted loop id="video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        <div className="app_header-presentation-text">
          Your New Home <br /> Among The Stars
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
