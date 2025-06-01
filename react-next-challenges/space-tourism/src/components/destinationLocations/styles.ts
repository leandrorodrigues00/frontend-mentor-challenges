import styled, { keyframes } from "styled-components";

const planetSpinner = keyframes`
   0% {
      transform: rotate(0deg);
  } 

  100% {
      transform: rotate(360deg);
  }

`;

export const DestinationLocationsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div {
    img {
      animation: ${planetSpinner} infinite 60s ease-out;

      @media (max-width: 1315px) {
        width: 300px;
        height: 300px;
      }

      @media (max-width: 570px) {
        width: 170px;
        height: 170px;
      }
    }
  }

  @media (max-width: 1315px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DestinationDetails = styled.section`
  max-width: 27.8125rem;
  width: 100%;
  margin-top: 2.3125rem;

  h1 {
    font-family: "Bellefair";
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    line-height: 7.1875rem;

    margin-bottom: 0.875rem;
  }

  > p {
    font-family: "Barlow";
    font-size: 1.125rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.colors["light-blue"]};

    margin-bottom: 3.375rem;
  }

  > div {
    display: flex;
    gap: 4.9375rem;
    padding-top: 1.75rem;
    border-top: 1px solid #383b4b;

    span {
      font-size: ${({ theme }) => theme.fontSizes.sm};
      line-height: 1.0625rem;
      letter-spacing: 0.1477rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors["light-blue"]};

      display: inline-block;
      margin-bottom: 0.75rem;
    }

    p {
      font-family: "Bellefair";
      font-size: ${({ theme }) => theme.fontSizes.lg};
      line-height: 2rem;
      text-transform: uppercase;
    }

    @media (max-width: 1315px) {
      justify-content: space-evenly;
    }
  }

  @media (max-width: 1315px) {
    text-align: center;

    h1 {
      font-size: 5rem;
    }
  }
`;
