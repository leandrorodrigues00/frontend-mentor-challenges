import styled from "styled-components";

export const FaqDescriptionContainer = styled.section`
  max-width: 24.875rem;
  width: 100%;

  margin-right: 4.9375rem;

  h1 {
    font-size: 2.4rem;
    margin-top: 4.375rem;
    margin-bottom: 3.125rem;

    @media (max-width: 930px) {
      text-align: center;
      margin-top: 0;
    }
  }

  @media (max-width: 930px) {
    margin-right: 0;

    padding-bottom: 3.125rem;
  }
`;
