import React from "react";
import "./About.css";
import rocket from "../../pics/rocket.png";
import market from "../../pics/market.png";

const About = () => {
  return (
    <div className="app_about">
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
            awdawdada awdawd daw dawd awda dawd awdafse fhfht f awda dawd
            awdafse fhfht f awda dawd awdafse fhfht f awda dawd awdafse{" "}
          </div>
          {/* <img src={rocket} alt="Rocket Icon" /> */}
        </div>
        <div className="app_about_content_div">
          <div className="app_about_content_div_title">Preformance</div>
          <div className="app_about_content_div_text">
            awda dawd awdafse fhfht f awda dawd awdafse fhfht f awda dawd
            awdafse fhfht f awda dawd awdafse fhfht f awda dawd awdafse fhfht f
          </div>
          {/* <img src={market} alt="marketing icon" /> */}
        </div>
        <div className="app_about_content_div">
          <div className="app_about_content_div_title">Experience</div>
          <div className="app_about_content_div_text">
            awdd grdgdrgh adawdfg awda dawd awdafse fhfht f awda dawd awdafse
            fhfht f awda dawd awdafse fhfht f awda dawd awdafse fhfht f
          </div>
          {/* <img src={rocket} alt="Png File - Free Rocket Icon@pngkey.com" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
