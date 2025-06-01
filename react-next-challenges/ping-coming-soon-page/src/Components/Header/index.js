import React from "react";

import Logo from "../../images/logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo do site" />
    </header>
  );
};

export default Header;
