import styled from "styled-components";
import bgDesktop from "../../../../assets/bg-pattern-desktop.svg";
import bgMobile from "../../../../assets/bg-pattern-mobile.svg";

export const ImageAccordionContainer = styled.section`
  max-width: 24.375rem;
  width: 100%;

  background: url(${bgDesktop}) right bottom;
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 71%;
  background-size: 238%;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  picture {
    img {
      margin-left: -5.8125rem;

      @media (max-width: 930px) {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 1rem;
        left: 0;
        right: 0;
        text-align: center;
        width: 18.75rem;
      }
    }
  }

  > img {
    &:nth-child(2) {
      position: absolute;
      margin-left: -24.6875rem;
      margin-top: 6.25rem;
      transition: transform 200ms ease-in-out,
        -webkit-transform 200ms ease-in-out;

      &:hover {
        transform: translateX(-2.3125rem);
      }

      @media (max-width: 930px) {
        display: none;
      }
    }
  }

  @media (max-width: 930px) {
    background: url(${bgMobile}) center bottom;
    background-repeat: no-repeat;
    background-position-x: 41%;
    background-position-y: 20%;
    background-size: 90%;

    height: 10rem;
  }
`;
