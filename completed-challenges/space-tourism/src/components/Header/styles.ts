import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-height: 6rem;
  height: 100%;

  position: fixed;
  right: 0px;
  padding-left: 3.4375rem;

  margin-top: 2.5rem;

  @media (max-width: 1080px) {
    margin-top: 0;
  }

  @media (max-width: 540px) {
    nav {
      display: none;
    }

    div {
      display: flex;
    }
  }
`;

export const NavContainer = styled.nav`
  position: relative;
  max-width: 51.875rem;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);

  ul {
    display: flex;
    gap: 3rem;
    height: 100%;
    justify-content: center;

    li {
      line-height: 1.1875rem;
      letter-spacing: 0.1688rem;
      text-transform: uppercase;
      font-size: 1rem;
      height: 100%;
      display: flex;
      align-items: center;

      &:hover {
        border-bottom: 3px solid rgba(255, 255, 255, 0.5);
        mix-blend-mode: normal;
      }

      &.active {
        border-bottom: 3px solid white;
      }
    }

    li span {
      font-weight: bolder;
    }
  }

  &:before {
    content: "";
    width: 29.5625rem;
    height: 1px;

    position: absolute;
    top: 50%;
    left: -50%;

    background: #ffffff;
    opacity: 0.25;

    @media (max-width: 1350px) {
      display: none;
    }
  }

  @media (max-width: 1315px) {
    margin-right: 21px;
  }

  @media (max-width: 1080px) {
    max-width: 28.125rem;

    ul {
      gap: 2.3125rem;

      li span {
        display: none;
      }
    }
  }
`;

export const MenuMobile = styled.div`
  width: 24px;
  height: 21px;
  background: none;
  border: none;

  margin-right: 24px;

  cursor: pointer;

  display: none;

  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    width: 24px;
    height: 3px;
    background: ${({ theme }) => theme.colors["light-blue"]};
  }
`;

export const MenuMobileContent = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 15.875rem;
  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(40.7742px);

  padding: 2.1875rem 2rem;
  box-shadow: -4px 0px 30px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;

  ul {
    margin-top: 4.0625rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    li {
      font-family: "Barlow Condensed";
      font-size: 1rem;
      line-height: 1.1875rem;
      letter-spacing: 0.1688rem;

      span {
        margin-right: 0.6875rem;
      }

      a {
        display: block;
        padding: 3px;
      }
    }
  }
`;

export const MenuCloseButton = styled(Dialog.Close)`
  background: none;
  border: none;
  align-self: flex-end;
  cursor: pointer;

  &:hover {
    svg {
      color: red;
    }
  }
`;
