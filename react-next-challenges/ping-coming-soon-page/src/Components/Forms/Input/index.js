import React from "react";
import styles from "./Input.module.css";

const Input = ({ type, placeholder, error, isValid, onChange }) => {
  return (
    <>
      <input
        className={isValid ? styles.input : `${styles.border} ${styles.input}`}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
};

export default Input;
