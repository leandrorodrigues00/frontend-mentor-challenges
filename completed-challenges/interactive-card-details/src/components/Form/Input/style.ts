import styled from "styled-components";

export const InputWrapper = styled.div`
  margin-bottom: 1.5625rem;
`;

export const InputStyles = styled.input`
  padding: 0.75rem;
  border-radius: 0.875rem;
  border: 1px solid ${(props) => props.theme["gray-500"]};
  width: 100%;

  &:focus {
    outline: 1px solid;
  }
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme["red-100"]};
  margin-top: 0.25rem;
  font-size: 0.8125rem;

  @media (max-width: 1320px) {
    color: ${(props) => props.theme["cyan-100"]};
  }
`;

export const TitleCard = styled.label`
  display: block;
  font-size: 0.9375rem;

  margin-bottom: 0.5rem;

  text-transform: uppercase;
  letter-spacing: 0.0625rem;
`;
