import styled from "styled-components";

export const SuccessContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ThanksCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 23.75rem;
  width: 100%;
  padding: 0 0.625rem;

  button {
    width: 100%;
  }

  button:hover {
    cursor: pointer;
  }
`;

export const ThanksTextContainer = styled.div`
  text-align: center;
  margin: 2.5rem 0;
  h1 {
    letter-spacing: 2px;
    font-weight: normal;
  }

  p {
    margin-top: 0.9375rem;
    color: ${(props) => props.theme["gray-600"]};
  }

  @media (max-width: 1320px) {
    p {
      margin-top: 0.9375rem;
      color: ${(props) => props.theme["cyan-100"]};
    }
  }
`;
