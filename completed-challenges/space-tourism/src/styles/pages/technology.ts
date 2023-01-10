import styled from "styled-components";

export const TechnologyContainer = styled.div`
  padding-top: 13.25rem;
  padding-left: 165px;

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

  @media (max-width: 1140px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const TechDescriptionContainer = styled.div`
  display: flex;
  align-items: center;

  max-height: 515px;
  height: 100%;

  ul {
    margin-right: 80px;
    li {
      display: flex;
      align-items: center;
      justify-content: center;

      & + li {
        margin-top: 2rem;
      }

      button {
        width: 80px;
        height: 80px;
        border-radius: 100%;

        border: none;

        cursor: pointer;
        background-color: transparent;
        border: 1px solid white;

        font-family: "Bellefair";
        font-size: ${({ theme }) => theme.fontSizes.xl};
        letter-spacing: 0.125rem;

        &:hover {
          border: 2px solid white;
        }
      }

      &.active {
        button {
          background-color: white;
          color: #0b0d17;
        }
      }
    }

    @media (max-width: 1140px) {
      display: flex;
      gap: 16px;
      margin-right: 0;

      li {
        & + li {
          margin-top: 0;
        }
      }
    }
  }

  @media (max-width: 1140px) {
    flex-direction: column;
    margin-top: 3.5rem;
  }
`;
