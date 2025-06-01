import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const CrewContainer = styled.div`
  padding-top: 13.25rem;
  padding-left: 10.3125rem;
  padding-right: 8.5625rem;

  @media (max-width: 970px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const CrewDetailsContainer = styled.div`
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
`;

export const RadioRoot = styled(RadioGroup.Root)`
  display: flex;
  gap: 1.5rem;
  max-width: 8.25rem;
  width: 100%;

  margin-top: -5.125rem;

  @media (max-width: 970px) {
    margin-top: -39.125rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CrewMember = styled(RadioGroup.Item)`
  width: 0.9375rem;
  height: 0.9375rem;
  border-radius: 100%;
  background-color: #c6c6c6;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #85868b;
  }
`;

export const RadioIndicator = styled(RadioGroup.Indicator)`
  &::after {
    content: "";
    display: block;
    width: 0.9375rem;
    height: 0.9375rem;
    border-radius: 50%;
    background-color: white;
  }
`;
