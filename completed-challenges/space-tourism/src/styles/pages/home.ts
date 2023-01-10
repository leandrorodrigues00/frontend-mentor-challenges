import styled from "styled-components";

export const HomeContainer = styled.main`
  padding-top: 24.1875rem;
  display: flex;
  justify-content: space-between;
  margin: 0 10.3125rem;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;

    padding-top: 12.625rem;
    gap: 9.75rem;
  }

  @media (max-width: 660px) {
    gap: 5rem;
    margin: 0 10px;
  }
`;

export const DetailsHomeContainer = styled.section`
  max-width: 28.125rem;
  width: 100%;

  span {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 2.125rem;
    letter-spacing: 0.2953rem;
    color: ${({ theme }) => theme.colors["light-blue"]};
  }
  h1 {
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
    line-height: 10.75rem;

    margin: 1.5rem 0;
  }

  p {
    font-family: "Barlow";
    font-size: 1.125rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.colors["light-blue"]};
  }

  @media (max-width: 1080px) {
    text-align: center;

    h1 {
      font-size: 9.375rem;
    }
  }

  @media (max-width: 660px) {
    span {
      font-size: 16px;
    }
    h1 {
      font-size: 80px;
      line-height: normal;
    }

    p {
      font-size: 15px;
    }
  }
`;
