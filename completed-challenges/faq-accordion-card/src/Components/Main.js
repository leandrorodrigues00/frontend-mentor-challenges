import React from "react";
import AccordionComponent from "./AccordionComponent";
import styles from "./Main.module.css";

import mobileBackground from "../images/bg-pattern-mobile.svg";

import womanImg from "../images/illustration-woman-online-desktop.svg";
import boxImg from "../images/illustration-box-desktop.svg";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img
          className={styles.womanImg}
          src={womanImg}
          alt="Imagem de mulher"
        />
        <img
          className={styles.mobileBackground}
          src={mobileBackground}
          alt="fundo mobile"
        />
      </div>

      <div className={styles.boxImgContainer}>
        <img className={styles.boxImg} src={boxImg} alt="Imagem de dado" />
      </div>

      <div className={styles.content}>
        <h1>FAQ</h1>
        <AccordionComponent />
      </div>
    </div>
  );
};

export default Main;
