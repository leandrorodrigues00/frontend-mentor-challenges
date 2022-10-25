import styled from "styled-components";

export const InputContainer = styled.input`
  width: 100%;
  padding: 0.9375rem 1.875rem;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme["gray-700"]};
  font-weight: 500;

  &:focus {
    outline: 1px solid ${(props) => props.theme["gray-900"]};
  }

  & + input {
    margin-top: 1.25rem;
  }
`;
