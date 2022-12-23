import styled from "styled-components";
import * as Accordion from "@radix-ui/react-accordion";

export const Trigger = styled(Accordion.Trigger)`
  transition: transform 300ms;

  background: none;
  border: none;
  width: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.0625rem;
    color: ${(props) => props.theme["Dark-grayish-blue"]};

    &:hover {
      color: ${(props) => props.theme["Soft-red"]};
    }

    @media (max-width: 430px) {
      font-size: 1rem;
    }
  }

  svg {
    color: ${(props) => props.theme["Soft-red"]};
  }

  &[data-state="open"] > span {
    color: ${(props) => props.theme.Black};
    font-weight: bolder;
  }

  &[data-state="open"] > svg {
    transform: rotate(180deg);
  }
`;

export const Content = styled(Accordion.Content)`
  margin: 0.625rem 0;

  color: ${(props) => props.theme["Dark-grayish-blue"]};
  font-size: 0.875rem;
  line-height: 1.3rem;
`;

export const Item = styled(Accordion.Item)`
  border-bottom: 2px solid ${(props) => props.theme["Light-grayish-blue"]};

  & + & {
    margin-top: 1.5625rem;
  }

  @media (max-width: 430px) {
    margin: 0 1.25rem;
  }
`;
