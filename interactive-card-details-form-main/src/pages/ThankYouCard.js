import React from "react";
import styles from "./ThankYouCard.module.css";
import complete from "../images/icon-complete.svg";
import Button from "../components/form/Button/Index";

const ThankYouCard = ({ isActive }) => {
  return (
    <div
      className={
        isActive ? styles.cardWrapper : `${styles.cardWrapper} ${styles.none}`
      }
    >
      <img className={styles.imgThanks} src={complete} alt="Card Thank You" />
      <h1>THANK YOU!</h1>
      <p>We've added your card details </p>
      <Button type="submit" text={"Continue"} />
    </div>
  );
};

export default ThankYouCard;
