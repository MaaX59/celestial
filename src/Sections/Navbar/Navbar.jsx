import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="app_navbar">
      <span>Celestial Inn</span>
      <div className="app_navbar-links">
        <ul>
          <li>
            <a href="#destinations">Destinations</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#shop">Shop</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
