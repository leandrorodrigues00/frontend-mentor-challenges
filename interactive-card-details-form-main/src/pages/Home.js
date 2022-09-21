import React from "react";
import Input from "../components/form/Input/Index";
import Button from "../components/form/Button/Index";

import bgImage from "../images/bg-main-desktop.png";
import cardFront from "../images/bg-card-front.png";
import cardBack from "../images/bg-card-back.png";

import teste from "../images/card-logo.svg";

import styles from "./Home.module.css";
import ThankYouCard from "./ThankYouCard";

const Home = () => {
  const [cardNumber, setCardNumber] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const [emptyText, setEmptyText] = React.useState("");
  const [errorEmpty, setErrorEmpty] = React.useState("");

  const [validateMonth, setValidateMonth] = React.useState("");
  const [errorMonth, setErrorMonth] = React.useState("");

  const [validateYear, setValidateYear] = React.useState("");
  const [errorYear, setErrorYear] = React.useState("");

  const [validateCvc, setValidateCvc] = React.useState("");
  const [errorCvc, setErrorCvc] = React.useState("");

  const [isActive, setIsActive] = React.useState(false);
  const [count, setCount] = React.useState(0);

  async function handleSubmit(event) {
    const regexMonth = /^(0?[1-9]|1[012])$/;
    const validadeMonth = regexMonth.test(validateMonth);

    const regexYear = /^[0-9]{2}$/;
    const validadeYear = regexYear.test(validateYear);

    const regexCvc = /^[0-9]{3}$/;
    const validadeCvc = regexCvc.test(validateCvc);

    event.preventDefault();

    let cardNumberTest = cardNumber.replace(/\s/g, "");

    if (cardNumberTest.toString().length > 16)
      return setErrorMessage("Max 16 numbers");

    if (!Number(cardNumberTest)) {
      setErrorMessage("Wrong format, numbers only");
    } else {
      setErrorMessage("");
      setCount(count + 1);
    }

    if (emptyText === "") {
      setErrorEmpty("Can't be blank");
    } else {
      setErrorEmpty("");
      setCount(count + 1);
    }

    if (!validadeMonth) {
      setErrorMonth("Incorrect Month");
    } else {
      setErrorMonth("");
      setCount(count + 1);
    }

    if (!validadeYear) {
      setErrorYear("Incorrect Year");
    } else {
      setErrorYear("");
      setCount(count + 1);
    }

    if (!validadeCvc) {
      setErrorCvc("Incorrect CVC, 3 digits");
    } else {
      setErrorCvc("");
      setCount(count + 1);
    }

    if (count === 5) {
      setIsActive(!isActive);
    }
  }

  return (
    <>
      <aside>
        <img className={styles.bgImage} src={bgImage} alt="background purple" />

        <div className={styles.cardWrapper}>
          <img className={styles.cardImage} src={cardFront} alt="Card front" />
          <img className={styles.cardLogo} src={teste} alt="Card logo" />
          <label className={styles.labelNumberCard} htmlFor="numberCard">
            {cardNumber ? cardNumber : "0000 0000 0000 0000"}
          </label>
          <div className={styles.labelNameDateCard}>
            <label htmlFor="name">{emptyText ? emptyText : "John Doe"}</label>
            <label htmlFor="expDate">
              {validateMonth ? validateMonth : "00"} /{" "}
              {validateYear ? validateYear : "00"}
            </label>
          </div>
        </div>

        <div className={styles.cardBack}>
          <img src={cardBack} alt="Card back" />
          <label className={styles.labelCvc} htmlFor="cvc">
            {validateCvc ? validateCvc : "0 0 0"}
          </label>
        </div>
      </aside>
      <main className={isActive ? styles.off : ""}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Cardholder Name</label>
          <Input
            id="name"
            placeholder="e.g. John Doe"
            onChange={({ target }) => {
              setEmptyText(target.value);
            }}
            error={errorEmpty}
          />
          <label htmlFor="numberCard">Card Number</label>
          <Input
            id="numberCard"
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={({ target }) => {
              setCardNumber(target.value);
              const formartedNumber = target.value.replace(
                /\B(?=(\d{4})+(?!\d))/g,
                " "
              );
              setCardNumber(formartedNumber);
            }}
            error={errorMessage}
          />

          <label htmlFor="expDate">Exp. Date(MM/YY)</label>
          <div className={styles.inputDateWrapper}>
            <div>
              <Input
                id="expDate"
                placeholder="MM"
                width={"70px"}
                type="number"
                onChange={({ target }) => {
                  setValidateMonth(target.value);
                }}
                error={errorMonth}
              />
            </div>
            <div>
              <Input
                placeholder="YY"
                width={"70px"}
                type="number"
                onChange={({ target }) => {
                  setValidateYear(target.value);
                }}
                error={errorYear}
              />
            </div>

            <div className={styles.cvcWrapper}>
              <label htmlFor="cvc">CVC</label>
              <Input
                id="cvc"
                placeholder="e.g. 123"
                width={"255px"}
                onChange={({ target }) => {
                  setValidateCvc(target.value);
                }}
                error={errorCvc}
              />
            </div>
          </div>
          <Button type="submit" text={"Confirm"} />
        </form>
      </main>
      <ThankYouCard isActive={isActive} />
    </>
  );
};

export default Home;
