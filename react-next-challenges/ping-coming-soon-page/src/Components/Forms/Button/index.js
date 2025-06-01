import React from "react";
import styles from "./Button.module.css";

const Button = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

export default Button;
