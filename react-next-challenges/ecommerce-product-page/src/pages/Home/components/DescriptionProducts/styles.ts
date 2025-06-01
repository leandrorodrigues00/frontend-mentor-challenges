import styled from "styled-components";

export const DescriptionProductContainer = styled.div`
  max-width: 28.125rem;
  padding-top: 3.75rem;

  > div {
    > span {
      text-transform: uppercase;
      font-size: 0.875rem;
      letter-spacing: 0.0625rem;
      color: ${(props) => props.theme.Orange};
    }

    h1 {
      font-size: 2.5rem;
      line-height: 100%;
      margin-top: 1.125rem;
      margin-bottom: 2.8125rem;

      @media (max-width: 900px) {
        margin-bottom: 1.8125rem;
      }
    }

    p {
      color: ${(props) => props.theme["Dark-grayish-blue"]};
      line-height: 160%;
      margin-bottom: 2.5rem;

      @media (max-width: 900px) {
        margin-bottom: 0.9375rem;
      }
    }
  }

  @media (max-width: 1030px) {
    margin-left: 1.25rem;
    padding-top: 0;
  }
`;

export const PriceContainer = styled.div`
  span {
    display: flex;
    align-items: center;
    font-size: 1.75rem;
    font-weight: bolder;

    strong {
      font-size: 1rem;
      padding: 0.1875rem;
      margin-left: 1.25rem;

      background: ${(props) => props.theme["Pale-orange"]};
      color: ${(props) => props.theme.Orange};

      border-radius: 6px;
    }
  }
  del {
    display: block;
    margin-top: 5px;
    margin-bottom: 2.5rem;

    color: ${(props) => props.theme["Grayish-blue"]};

    @media (max-width: 1030px) {
      margin-bottom: 0;
    }
  }

  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.625rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.9375rem;
  > div {
    background: ${(props) => props.theme["Light-grayish-blue"]};
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.9375rem;
    font-weight: bolder;
    border-radius: 10px;

    > button {
      background: none;
      border: none;
      padding: 0.5rem;
      margin: -0.5rem;

      &:hover {
        opacity: 0.1;
      }
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 16.875rem;
    height: 3.4375rem;

    border: none;
    background: ${(props) => props.theme.Orange};
    color: ${(props) => props.theme.White};

    border-radius: 10px;

    &:not(:disabled):hover {
      opacity: 0.5;
      transition: all 0.2s;
    }

    &:disabled {
      cursor: not-allowed;
    }

    svg {
      margin-right: 0.9375rem;
    }

    @media (max-width: 900px) {
      width: 100%;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
