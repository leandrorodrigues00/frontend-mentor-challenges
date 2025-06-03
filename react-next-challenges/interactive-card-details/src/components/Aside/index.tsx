import {
  AsideContainer,
  CardBackImg,
  CardContainer,
  CardFrontImg,
  CvvCardBack,
  DateFrontCard,
  LogoFrontCard,
  NomeFrontCard,
  NumbersFrontCard,
} from "./style";

import cardFront from "../../assets/images/bg-card-front.png";
import cardBack from "../../assets/images/bg-card-back.png";
import cardLogo from "../../assets/images/card-logo.svg";

import { CardContext } from "../../contexts/CardContext";
import { useContext } from "react";

export function Aside() {
  const { methods }: any = useContext(CardContext);

  const values = methods.getValues();

  return (
    <AsideContainer>
      <CardContainer>
        <LogoFrontCard src={cardLogo} alt="" />
        <NumbersFrontCard>
          {values.cardNumber
            ? values.cardNumber.toString().replace(/\d{4}(?=.)/g, "$& ")
            : "0000 0000 0000 0000"}
        </NumbersFrontCard>
        <NomeFrontCard>
          {values.cardHolderName ? values.cardHolderName : "JANE APPLESEED"}
        </NomeFrontCard>
        <DateFrontCard>
          {values.cardExpMonth ? values.cardExpMonth : "00"}/
          {values.cardExpYear ? values.cardExpYear : "00"}
        </DateFrontCard>
        <CardFrontImg src={cardFront} alt="" />

        <CardBackImg src={cardBack} alt="" />
        <CvvCardBack>{values.cardCvc ? values.cardCvc : "000"}</CvvCardBack>
      </CardContainer>
    </AsideContainer>
  );
}
