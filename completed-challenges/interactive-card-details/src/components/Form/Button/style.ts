import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 0.75rem;
  border-radius: 0.875rem;

  color: ${(props) => props.theme["white"]};
  background: ${(props) => props.theme["violet-900"]};
`;
