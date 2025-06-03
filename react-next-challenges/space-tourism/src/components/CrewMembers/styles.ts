import styled from "styled-components";

export const CrewMembersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 9.625rem;

  @media (max-width: 970px) {
    flex-direction: column;
    margin-top: 5.625rem;
  }
`;

export const CrewMembersDetail = styled.div`
  text-align: left;
  max-width: 38.375rem;

  margin-bottom: 7.5rem;

  strong {
    font-family: "Bellefair";
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    text-transform: uppercase;
    color: #909196;
  }

  h1 {
    font-family: "Bellefair";
    font-weight: 400;
    font-size: 3rem;
    line-height: 4rem;

    margin-top: 0.9375rem;
    margin-bottom: 1.6875rem;

    @media (max-width: 970px) {
      font-size: 2rem;
    }
  }

  p {
    font-family: "Barlow";
    font-size: 1.125rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.colors["light-blue"]};
    max-width: 27.75rem;
  }

  @media (max-width: 970px) {
    text-align: center;
    margin-right: auto;
    margin-left: auto;

    p {
      max-width: inherit;
    }
  }
`;

export const CrewImageContainer = styled.div`
  border-bottom: 1px solid white;
  img {
    margin-top: -9.375rem;

    @media (max-width: 970px) {
      margin-top: -1.375rem;

      width: 368px;
      height: 492px;

      margin-right: auto;
      margin-left: auto;
    }
  }
`;
