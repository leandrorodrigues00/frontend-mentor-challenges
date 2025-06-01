import React from "react";
import Styles from "./Footer.module.css";

import Facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import Instagram from "../../images/instagram.svg";

const Footer = () => {
  return (
    <footer>
      <div className={Styles.footerWrapper}>
        <a href="https://pt-br.facebook.com/">
          <img src={Facebook} alt="" />
        </a>
        <a href="https://twitter.com/">
          <img src={twitter} alt="" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={Instagram} alt="" />
        </a>
      </div>
      <p>&copy; Copyright Ping. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
