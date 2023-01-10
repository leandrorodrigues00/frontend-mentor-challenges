import styled from "styled-components";

export const DestinationContainer = styled.div`
  padding-top: 13.25rem;
  padding-left: 10.4063rem;
  padding-right: 10.1875rem;

  @media (max-width: 570px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export const DetailsDestinationContainer = styled.div`
  width: 100%;

  h1 {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 2.125rem;
    letter-spacing: 0.2953rem;
    text-transform: uppercase;

    strong {
      letter-spacing: 0.2953rem;
      font-weight: bolder;
      opacity: 0.25;
    }
  }

  ul {
    display: flex;
    justify-content: flex-end;
    gap: 2.25rem;

    margin-right: 8.9688rem;
    margin-top: 4rem;

    li {
      button {
        cursor: pointer;
        background: none;
        border: none;

        font-size: ${({ theme }) => theme.fontSizes.md};
        text-transform: uppercase;
        line-height: 1.1875rem;
        letter-spacing: 0.1688rem;

        color: #5d6175;
      }

      &.active {
        border-bottom: 3px solid white;

        button {
          color: white;
        }
      }
    }
  }

  @media (max-width: 1315px) {
    ul {
      justify-content: center;
      margin-right: 0;
      margin-bottom: 1.875rem;
    }
  }
`;
