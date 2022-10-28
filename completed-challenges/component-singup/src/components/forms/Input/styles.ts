import styled from "styled-components";
import errorImg from "../../../assets/icon-error.svg";

interface inputVariants {
  hasErrors: boolean;
}

export const InputContainer = styled.input<inputVariants>`
  width: 100%;
  padding: 0.9375rem 1.875rem;
  border-radius: 5px;
  border: 1px solid
    ${(props) =>
      props.hasErrors ? props.theme["red-100"] : props.theme["gray-700"]};
  font-weight: 500;

  &:focus {
    outline: ${(props) =>
      props.hasErrors ? `none` : `1px solid ${props.theme["gray-900"]}`};
  }

  & + input {
    margin-top: 1.25rem;
  }

  &::placeholder {
    background: ${(props) =>
      props.hasErrors ? `url(${errorImg}) no-repeat right` : ""};

    color: ${(props) => (props.hasErrors ? props.theme["red-100"] : "")};
  }
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme["red-100"]};

  display: inline-block;
  font-size: 12px;

  margin-top: 5px;
  margin-bottom: 12px;

  font-weight: 500;
`;
