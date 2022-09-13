import React from "react";
import illustrationDashboard from "../../images/illustration-dashboard.png";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import styles from "./Main.module.css";

const Main = () => {
  const [message, setMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isValid, setIsValid] = React.useState(true);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validate = regex.test(message);

    if (!validate) {
      setErrorMessage("Please provide a valid email address");
      setIsValid(false);
    } else {
      setErrorMessage("");
      setIsValid(true);
    }
  }
  return (
    <main>
      <div className={styles.title}>
        <h1>
          We are launching <span>soon!</span>
        </h1>
        <p>Subscribe and get notified</p>
      </div>

      <div className={styles.subscribe}>
        <form className={styles.NotifyMe} onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Your email address..."
            error={errorMessage}
            onChange={handleChange}
            isValid={isValid}
          />

          <Button text="Notify Me" />
        </form>
      </div>

      <div className={styles.imgWrapper}>
        <img src={illustrationDashboard} alt="illustration Dashboard" />
      </div>
    </main>
  );
};

export default Main;
