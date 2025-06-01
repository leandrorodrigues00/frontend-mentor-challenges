import styled from "styled-components";

export const LayoutContainer = styled.div`
  background: ${(props) => props.theme["white"]};

  display: flex;

  @media (max-width: 1320px) {
    flex-direction: column;
    height: 100vh;
    background: linear-gradient(45deg, hsl(249, 99%, 64%), transparent);
    padding-bottom: 0.625rem;
  }
`;
