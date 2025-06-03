import styled from "styled-components";

export const TechContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  img {
    border-radius: 10px 0 0 10px;
  }

  @media (max-width: 1140px) {
    flex-direction: column-reverse;
    margin-top: 3rem;
  }
`;

export const TechDescriptionContainer = styled.div`
  max-width: 29.375rem;
  width: 100%;
  span {
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 1.1875rem;
    letter-spacing: 0.1688rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors["light-blue"]};
  }

  h1 {
    font-family: "Bellefair";

    font-size: 3rem;
    line-height: 4rem;

    margin-top: 0.6875rem;
    margin-bottom: 1.0625rem;
  }

  p {
    font-family: "Barlow";
    font-size: 1.125rem;
    line-height: 2rem;

    color: ${({ theme }) => theme.colors["light-blue"]};
  }

  @media (max-width: 1140px) {
    margin-top: 3.5rem;
    text-align: center;
  }
`;
