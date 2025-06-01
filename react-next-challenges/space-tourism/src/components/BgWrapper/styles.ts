import styled from "styled-components";

export const BgWrapperContainer = styled.div`
  > div {
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: -9999;
    object-fit: cover;

    overflow: auto;

    @media (max-width: 768px) {
      img:nth-child(3) {
        display: none;
      }
    }

    @media (max-width: 375px) {
      img:nth-child(2) {
        display: none;
      }
    }
  }
`;
