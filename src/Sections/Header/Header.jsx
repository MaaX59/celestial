import React from "react";
import "./Header.css";

import image1 from "../../pics/ship4.jpg";
import image2 from "../../pics/ship2.jpg";
import image3 from "../../pics/city.jpg";

const Header = () => {
  return (
    <div className="app_header">
      <div className="app_header-presentation">
        <video autoPlay loop muted id="video">
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-background-1610-large.mp4"
            type="video/mp4"
          />
        </video>

        <div className="app_header-presentation-text">
          Your New Home <br /> Among The Stars
        </div>
      </div>
      <div className="app_header_options">
        <div className="app_header_options-single">
          <img src={image1} alt="spaceship" />
          <span>Travel</span>
        </div>
        <div className="app_header_options-single">
          <img src={image2} alt="starship" />
          <span>Experiance</span>
        </div>
        <div className="app_header_options-single">
          <img src={image3} alt="city in space" />
          <span>Relocate</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
