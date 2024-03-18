import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="app_about" id="about">
      <div className="app_about_intro"></div>
      <div className="app_about_content">
        <div className="app_about_content_div">
          <div className="app_about_content_div_title">Origin</div>
          <div className="app_about_content_div_text">
            For more than sixty years, we have delivered unrivaled experiences
            throughout the world. All the while, evolving our services and
            continually refining each element of the Celestial experience.
          </div>
        </div>
        <div className="app_about_content_div">
          <div className="app_about_content_div_title">Preformance</div>
          <div className="app_about_content_div_text">
            Our ships are simply the beginning. The perfect vessel for the
            perfect experience. Expertly engineered and designed, our selection
            of custom-made spacecrafts brings all corners of the galaxy within
            reach.
          </div>
        </div>
        <div className="app_about_content_div">
          <div className="app_about_content_div_title">Experience</div>
          <div className="app_about_content_div_text">
            Luxury is more than an idea, it’s a feeling, and an experience.
            <br /> All our ships are all-inclusive and feature 24-hour butler
            service to every suite to ensure your stay with us will be
            unforgettable.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
