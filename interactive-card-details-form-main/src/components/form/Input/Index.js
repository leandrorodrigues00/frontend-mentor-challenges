import React from "react";
import styles from "./Input.module.css";

const Input = ({ type, placeholder, error, onChange, width }) => {
  return (
    <>
      <input
        className={error ? `${styles.border} ${styles.input}` : styles.input}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        style={{ width: `${width}` }}
      />
      {error && <p className={styles.error}> {error}</p>}
    </>
  );
};

export default Input;
