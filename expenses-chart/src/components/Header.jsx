import logo from "../assets/logo.svg";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.Content}>
        <p>My balance</p>
        <strong>$921.48</strong>
      </div>
      <img src={logo} />
    </header>
  );
}
