import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { FaLinkedinIn,FaTwitter,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div style={{ marginTop: 35 }} className="footer_contanier">
      <h1 style={{ color: "white", fontSize: 20, paddingTop: 20 }}>
        WRISTFLEX
      </h1>

      <div className="social_media_links">
        <Link to="https/twitter.com" >
          <FaLinkedinIn className="link_styles"/>
        </Link>
        <Link to="https/twitter.com">
          <FaTwitter className="link_styles" />
        </Link>
        <Link to="https/twitter.com">
          <FaInstagram className="link_styles"/>
        </Link>
        <Link to="https/twitter.com">
          <FaLinkedinIn className="link_styles"/>
        </Link>
      </div>
      <p className="footer-text-ending">
        © 2022 WRISTFLEX | All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
