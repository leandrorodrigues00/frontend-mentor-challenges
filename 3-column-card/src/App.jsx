import "./global.css";

import styles from "./App.module.css";
import sedansIcon from "./assets/icon-sedans.svg";
import suvsIcon from "./assets/icon-suvs.svg";

import luxuryIcon from "./assets/icon-luxury.svg";
import { Button } from "./components/Button";

function App() {
  return (
    <main className={styles.wrapper}>
      <article className={`${styles.card} ${styles.radiusRight}`}>
        <img className={styles.carIcon} src={sedansIcon} alt="icon sedan" />
        <h1>Sedans</h1>
        <p>
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <Button />
      </article>

      <article className={`${styles.card} ${styles.cyan700}`}>
        <img src={suvsIcon} alt="icon suvs" />
        <h1>SUVs</h1>
        <p>
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
        <Button />
      </article>

      <article
        className={`${styles.card} ${styles.cyan900} ${styles.radiusLeft}`}
      >
        <img src={luxuryIcon} alt="icon luxury car" />
        <h1>Luxury</h1>
        <p>
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
        <Button />
      </article>
    </main>
  );
}

export default App;
