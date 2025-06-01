import styled from "styled-components";
import bgImage from "../../assets/images/bg-main-desktop.png";
import mobileBg from "../../assets/images/bg-main-mobile.jpg";

export const AsideContainer = styled.aside`
  background: url(${bgImage});
  height: 100vh;
  max-width: 30.3125rem;
  width: 100%;
  background-size: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1320px) {
    background: url(${mobileBg}) center center no-repeat;
    background-size: cover;
    height: 20rem;
    max-width: inherit;
    margin-bottom: 6.25rem;
    box-shadow: 0 -3px 3px 13px #3e52a333;
  }
`;

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 33.125rem;
  max-height: 100%;

  @media (max-width: 1320px) {
    display: none;
  }
`;

export const CardFrontImg = styled.img`
  position: absolute;
  top: -6.2%;
  left: 33%;

  width: 100%;
  max-width: 27.9375rem;
`;

export const CardBackImg = styled.img`
  position: absolute;
  top: 47%;
  left: 53.5%;

  width: 100%;
  max-width: 27.9375rem;
`;

export const LogoFrontCard = styled.img`
  position: absolute;
  top: -1%;
  left: 39%;
  z-index: 2;
  width: 100%;
  max-width: 5.25rem;
`;

export const NumbersFrontCard = styled.label`
  position: absolute;
  top: 19.5%;
  left: 39%;
  z-index: 2;
  width: 100%;
  font-size: 1.8125rem;
  letter-spacing: 0.1875rem;
  color: ${(props) => props.theme["white"]};
`;

export const NomeFrontCard = styled.label`
  position: absolute;
  top: 30.5%;
  left: 39%;
  z-index: 2;

  letter-spacing: 0.125rem;
  font-size: 0.9375rem;
  color: ${(props) => props.theme["white"]};
`;

export const DateFrontCard = styled.label`
  position: absolute;
  top: 30.5%;
  left: 107%;
  z-index: 2;

  letter-spacing: 0.125rem;
  font-size: 0.9375rem;

  color: ${(props) => props.theme["white"]};
`;

export const CvvCardBack = styled.label`
  position: absolute;
  top: 67.8%;
  left: 127%;
  z-index: 2;
  letter-spacing: 0.125rem;
  font-size: 0.9375rem;

  color: ${(props) => props.theme["white"]};
`;
