import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.625rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 23.75rem;

  @media (max-width: 1320px) {
    border: 1px solid hsl(278, 94%, 30%);
    border-radius: 5px;
    padding: 0.625rem;
  }
`;

export const DateCvcContainer = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const DateInputContainer = styled.div`
  display: flex;
  gap: 0.625rem;
  max-width: 10.625rem;
`;
