import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  color: ${(props) => props.theme["white"]};
  background: ${(props) => props.theme["green-300"]};
  border: 0;
  border-radius: 8px;
  padding: 0.875rem 0;
  margin-top: 1.25rem;
  letter-spacing: 1px;
  font-weight: 500;
  box-shadow: 1px 2px 1px 1px hsl(154deg 59% 40%);

  &:hover {
    cursor: pointer;
  }
`;
