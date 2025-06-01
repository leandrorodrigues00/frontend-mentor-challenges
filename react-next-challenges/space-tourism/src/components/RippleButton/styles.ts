import Link from "next/link";
import styled, { keyframes } from "styled-components";

const growAndFade = keyframes`
    0%{
      opacity: .25;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(2);
    } 

`;

const growAndFadeSmallScreen = keyframes`
    0%{
      opacity: .25;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1.4);
    } 

`;

export const Circles = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 17.125rem;
  height: 17.125rem;

  border-radius: 100%;
  position: relative;

  font-family: "Bellefair";
  font-size: ${({ theme }) => theme.fontSizes.xl};
  letter-spacing: 0.125rem;

  color: ${({ theme }) => theme.colors.Black};
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.White};

  > div {
    animation: ${growAndFade} 5s infinite ease-out;

    background-color: dodgerblue;
    border-radius: 100%;

    height: 100%;
    width: 100%;
    opacity: 0;
    position: absolute;
    outline: none;

    &:nth-child(1) {
      animation-delay: 0.2s;
      z-index: -1;
    }
    &:nth-child(2) {
      animation-delay: 1s;
      z-index: -1;
    }
    &:nth-child(3) {
      z-index: -1;

      animation-delay: 1.5s;
    }

    @media (max-width: 1080px) {
      animation: ${growAndFadeSmallScreen} 3s infinite ease-out;
    }
  }

  @media (max-width: 680px) {
    width: 12.5rem;
    height: 12.5rem;
    font-size: 1.5625rem;
  }
`;
