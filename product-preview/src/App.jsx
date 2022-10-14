import "./global.css";
import styles from "./App.module.css";

import desktop from "./assets/images/image-product-desktop.jpg";
import mobile from "./assets/images/image-product-mobile.jpg";

import carIcon from "./assets/images/icon-cart.svg";
function App() {
  return (
    <main className={styles.mainWrap}>
      <div>
        <picture>
          <source
            srcSet={mobile}
            media="(max-width: 625px)"
            alt="image of the Gabrielle perfume"
          />
          <img
            className={styles.img}
            src={desktop}
            type="image/jpg"
            alt="image of the Gabrielle perfume"
          />
        </picture>
      </div>

      <div className={styles.content}>
        <header className={styles.headerContent}>Perfume</header>
        <h1 className={styles.titleContent}>
          <a href="#"> Gabrielle Essence Eau De Parfum</a>
        </h1>
        <p className={styles.descriptionContent}>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>

        <div className={styles.priceContent}>
          <span className={styles.price}>$149.99</span>
          <span className={styles.oldPrice}>
            <del>$169.99</del>
          </span>
        </div>

        <button className={styles.button}>
          <img className={styles.icon} src={carIcon} alt="" />
          Add to cart
        </button>
      </div>
    </main>
  );
}

export default App;
