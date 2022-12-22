import styled from "styled-components";
import * as Popover from "@radix-ui/react-popover";

export const Content = styled(Popover.Content)`
  width: 22.5rem;
  height: 15.9375rem;
  margin-top: 1.25rem;
  margin-right: 0.625rem;

  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

  background-color: ${(props) => props.theme.White};
  border-radius: 10px;

  header {
    border-bottom: 1px solid ${(props) => props.theme["Grayish-blue"]};
    padding: 1.5625rem;
    span {
      font-weight: bolder;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1rem;
    margin: 0 1.5625rem;

    width: 100%;
    max-width: 19.375rem;
    height: 3.4375rem;

    border-radius: 10px;

    border: none;
    background: ${(props) => props.theme.Orange};
    color: ${(props) => props.theme.White};

    &:hover {
      opacity: 0.5;
      transition: all 0.2s;
    }
  }

  &[data-state="open"] {
    animation: fadeIn 300ms ease-out;
  }

  &[data-state="closed"] {
    animation: fadeOut 300ms ease-in;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-29px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-29px);
    }
  }
`;

export const CartPopoverItem = styled.div`
  display: flex;
  align-items: center;

  padding: 1.5625rem;

  img {
    max-width: 3.125rem;
    border-radius: 8px;
  }

  p {
    color: ${(props) => props.theme["Dark-grayish-blue"]};
    margin-left: 0.9375rem;
    line-height: 160%;

    strong {
      color: ${(props) => props.theme.Black};
    }
  }

  svg {
    cursor: pointer;

    &:hover {
      color: red;
    }
  }
`;

export const EmptyCartPopover = styled.p`
  font-size: 1.125rem;
  font-weight: bolder;
  color: ${(props) => props.theme["Dark-grayish-blue"]};

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4.375rem;
`;
