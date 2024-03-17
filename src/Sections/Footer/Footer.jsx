import React from "react";
import "./Footer.css";
import {
  TiSocialFacebookCircular,
  TiSocialGooglePlusCircular,
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
  TiSocialPinterestCircular,
} from "react-icons/ti";

const Footer = () => {
  return (
    <div className="app_footer">
      <hr />
      <div className="app_footer_logos">
        <TiSocialPinterestCircular size={40} />
        <TiSocialFacebookCircular size={40} />
        <TiSocialGooglePlusCircular size={40} />
        <TiSocialTwitterCircular size={40} />
        <TiSocialLinkedinCircular size={40} />
      </div>
      <div className="app_footer_rights">Copyright. All rights reserved.</div>
    </div>
  );
};

export default Footer;
