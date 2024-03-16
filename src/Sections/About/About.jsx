import React from "react";
import "./About.css";
import rocket from "../../pics/rocket.png";
import market from "../../pics/market.png";

const About = () => {
  return (
    <div className="app_about" id="about">
      <div className="app_about_intro">
        <div className="app_about_title title">Celestial Inn</div>
        <div className="app_about_text text">
          Who we are, what we do, and why we do it.
        </div>
      </div>
      <div className="app_about_content">
        <div className="app_about_content_div">
          <div className="app_about_content_div_title">Origin</div>
          <div className="app_about_content_div_text">
            For more than sixty years, we have delivered unrivaled experiences
            throughout the world. All the while, evolving our services and
            continually refining each element of the Celestial experience.
          </div>
          {/* <img src={rocket} alt="Rocket Icon" /> */}
        </div>
        <div className="app_about_content_div">
          <div className="app_about_content_div_title">Preformance</div>
          <div className="app_about_content_div_text">
            Our ships are simply the beginning. The perfect vessel for the
            perfect experience. Expertly engineered and designed, our selection
            of industry-leading spacecraft brings all corners of the solar
            system within reach.
          </div>
          {/* <img src={market} alt="marketing icon" /> */}
        </div>
        <div className="app_about_content_div">
          <div className="app_about_content_div_title">Experience</div>
          <div className="app_about_content_div_text">
            Luxury is more than an idea, it’s a feeling.
            <br /> All our ships are all-inclusive and feature 24-hour butler
            service to every suite to ensure your stay with us will be
            unforgettable.
          </div>
          {/* <img src={rocket} alt="Png File - Free Rocket Icon@pngkey.com" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
