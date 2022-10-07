import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";

import { useState } from "react";

import markPhoto from "./assets/images/avatar-mark-webber.webp";
import angelaPhoto from "./assets/images/avatar-angela-gray.webp";
import jacobPhoto from "./assets/images/avatar-jacob-thompson.webp";
import rizkyPhoto from "./assets/images/avatar-rizky-hasanuddin.webp";
import kimberlyPhoto from "./assets/images/avatar-kimberly-smith.webp";
import nathanPhoto from "./assets/images/avatar-nathan-peterson.webp";
import chessImg from "./assets/images/image-chess.webp";

import AnnaPhoto from "./assets/images/avatar-anna-kim.webp";

function App() {
  const [numberUnreadNotifications, setNumberUnreadNotifications] = useState(3);
  let hasBeenRead = true;

  if (numberUnreadNotifications) hasBeenRead = false;

  return (
    <main className={styles.container}>
      <Header
        numberUnreadNotifications={numberUnreadNotifications}
        setNumberUnreadNotifications={setNumberUnreadNotifications}
      />

      <div
        className={
          hasBeenRead ? `${styles.card} ${styles.messageAuthor}` : styles.card
        }
      >
        <img src={markPhoto} />
        <div className={styles.content}>
          <p>
            <a href="#" className={styles.name}>
              Mark Webber
            </a>{" "}
            reacted to your recent post{" "}
            <a href="#" className={styles.post}>
              My first tournament today!
            </a>
          </p>
          <time>1m ago</time>
        </div>
      </div>

      <div
        className={
          hasBeenRead ? `${styles.card} ${styles.messageAuthor}` : styles.card
        }
      >
        <img src={angelaPhoto} />
        <div className={styles.content}>
          <p>
            <a href="#" className={styles.name}>
              Angela Gray
            </a>{" "}
            followed you{" "}
          </p>
          <time>5m ago</time>
        </div>
      </div>

      <div
        className={
          hasBeenRead ? `${styles.card} ${styles.messageAuthor}` : styles.card
        }
      >
        <img src={jacobPhoto} />
        <div className={styles.content}>
          <p>
            <a href="#" className={styles.name}>
              Jacob Thompson
            </a>{" "}
            has joined your group{" "}
            <a href="#" className={styles.club}>
              Chess Club
            </a>
          </p>
          <time>1 day ago</time>
        </div>
      </div>

      <div className={`${styles.card} ${styles.messageAuthor}`}>
        <img src={rizkyPhoto} />
        <div className={styles.content}>
          <p>
            <a href="#" className={styles.name}>
              Rizky Hasanuddin
            </a>{" "}
            sent you a private message
          </p>
          <time>5 days ago</time>
        </div>
      </div>

      <div className={styles.messageContainer}>
        <p>
          Hello, thanks for setting up the Chess Club. I've been a member for a
          few weeks now and I'm already having lots of fun and improving my
          game.
        </p>
      </div>

      <div className={`${styles.card} ${styles.messageAuthor}`}>
        <img src={kimberlyPhoto} />
        <div className={styles.content}>
          <p>
            <a href="#" className={styles.name}>
              Kimberly Smith
            </a>{" "}
            commented on your picture{" "}
          </p>
          <time>1 week ago</time>
        </div>
        <img className={styles.pictureComment} src={chessImg} />
      </div>

      <div className={`${styles.card} ${styles.messageAuthor}`}>
        <img src={nathanPhoto} />
        <div className={styles.content}>
          <p>
            <a href="#" className={styles.name}>
              Mark Webber
            </a>{" "}
            reacted to your recent post{" "}
            <a href="#" className={styles.post}>
              5 end-game strategies to increase your win rate
            </a>
          </p>
          <time>2 weeks ago</time>
        </div>
      </div>

      <div className={`${styles.card} ${styles.messageAuthor}`}>
        <img src={AnnaPhoto} />
        <div className={styles.content}>
          <p>
            <a href="#" className={styles.name}>
              Anna Kim
            </a>{" "}
            left the group{" "}
            <a href="#" className={styles.club}>
              Chess Club
            </a>
          </p>
          <time>2 weeks ago</time>
        </div>
      </div>
    </main>
  );
}

export default App;
