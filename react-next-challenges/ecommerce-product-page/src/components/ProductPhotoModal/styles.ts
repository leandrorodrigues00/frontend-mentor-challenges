import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;

  > ul {
    display: flex;
    justify-content: space-evenly;
    margin-top: 2.1875rem;

    img {
      max-width: 5.625rem;
      border-radius: 10px;
    }

    li {
      border: 2px solid transparent;
      &:hover {
        opacity: 0.1;
        transition: all 0.1s;
      }

      &.active {
        border: 2px solid ${(props) => props.theme.Orange};
        border-radius: 13px;
      }
    }
  }
`;

export const ProductImagemContainer = styled.div``;

export const BaseArrowButton = styled.button`
  border: none;
  background: ${(props) => props.theme.White};
  border-radius: 100%;
  width: 3.125rem;
  aspect-ratio: 1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &:not(:disabled):hover {
    color: ${(props) => props.theme.Orange};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const CloseButton = styled(Dialog.Close)`
  background: transparent;
  border: 0;
  margin-left: 28rem;
  margin-bottom: 0.9375rem;

  svg {
    color: ${(props) => props.theme.White};

    &:hover {
      color: ${(props) => props.theme.Orange};
    }
  }
`;
