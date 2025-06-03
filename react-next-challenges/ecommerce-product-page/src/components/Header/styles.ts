import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7.5rem;
  border-bottom: 1px solid ${(props) => props.theme["Grayish-blue"]};
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  gap: 3.4375rem;
  height: 100%;

  a {
    align-self: center;
  }

  ul {
    display: flex;
    gap: 2.1875rem;

    li {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme["Dark-grayish-blue"]};

      &:hover {
        border-bottom: 2px solid ${(props) => props.theme.Orange};

        color: ${(props) => props.theme["Very-dark-blue"]};
      }
    }

    a {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 799px) {
    display: none;
  }
`;

export const HeaderProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2.8125rem;

  button {
    background: none;
    border: none;
    outline: 0;
    position: relative;

    span {
      font-size: 0.6875rem;
      position: absolute;
      top: -0.25rem;
      left: 0.75rem;
      width: 1.125rem;
      height: 0.875rem;
      background: ${(props) => props.theme.Orange};
      color: ${(props) => props.theme.White};
      border-radius: 100%;
    }
  }

  div {
    border: 2px solid transparent;
    border-radius: 100%;
    img {
      max-width: 2.8125rem;
      border-radius: 100%;
      aspect-ratio: 1;
    }

    &:hover {
      border: 2px solid ${(props) => props.theme["Orange"]};
      border-radius: 100%;
      transition: all 0.2s;
    }
  }

  @media (max-width: 450px) {
    gap: 0.8125rem;
  }
`;
