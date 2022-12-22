import styled from "styled-components";

export const HomeContainer = styled.main`
  margin-top: 5.625rem;
  padding: 0 3.125rem;

  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    margin-top: 1.125rem;
  }

  @media (max-width: 590px) {
    width: inherit;
    padding: 0 0.625rem;
    margin-top: -1px;
  }
`;
