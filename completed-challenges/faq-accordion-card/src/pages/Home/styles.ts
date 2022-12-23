import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  justify-content: space-between;
  max-width: 61.5rem;
  width: 100%;
  min-height: 31.875rem;
  background: ${(props) => props.theme.White};

  margin-top: 8.125rem;
  margin-left: auto;
  margin-right: auto;

  border-radius: 1.875rem;

  @media (max-width: 930px) {
    flex-direction: column;
    align-items: center;

    max-width: 42.5rem;
  }
`;
