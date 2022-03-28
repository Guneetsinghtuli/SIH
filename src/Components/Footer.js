import React from "react";
import './css/Footer.css'

const Footer = () => {
  return (
    <div className="outer-footer">
      <div className="team">
        <h2>Developer Team</h2>
        <p>Aadya Gaur</p>
        <p>Sakshi</p>
        <p>Akansha Agarwal</p>
        <p>Ruchir Bajaj</p>
        <p>Aman Kumar</p>
        <p>Guneet Singh</p>
      </div>
      <div className="love">Made with <span>❤️</span> By Binary Bombers</div>
      <div className="logo">
        <img alt="logo" src={require("../images/logo.jpg")} />
      </div>
    </div>
  );
};

export default Footer;
