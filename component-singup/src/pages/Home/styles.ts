import styled from "styled-components";

export const HomeContainer = styled.main`
  min-height: calc(100vh - 10rem);
  margin: 5rem auto;
  max-width: 69.5625rem;
  padding: 0 0.625rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 655px) {
    flex-direction: column;
  }
`;

export const TextContainer = styled.article`
  color: ${(props) => props.theme["white"]};

  h1 {
    line-height: 1.1;
  }

  p {
    margin-top: 2.1875rem;
    max-width: 31.25rem;
  }

  @media (max-width: 655px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const FormContainer = styled.div`
  max-width: 33.75rem;

  @media (max-width: 655px) {
    margin-top: 2.1875rem;
  }
`;

export const Form = styled.form`
  background-color: ${(props) => props.theme["white"]};
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 6px rgb(0 0 0 / 20%);

  text-align: end;

  p {
    margin-top: 1.25rem;
    font-size: 0.75rem;
    text-align: center;
    color: ${(props) => props.theme["gray-700"]};
  }

  a {
    color: ${(props) => props.theme["red-100"]};
    margin-left: 0.3125rem;
    font-weight: bolder;
  }
`;

export const ButtonTry = styled.button`
  padding: 1.25rem;
  width: 100%;
  border-radius: 8px;
  border: 0;
  color: ${(props) => props.theme["white"]};
  background: ${(props) => props.theme["purple-500"]};
  box-shadow: 0 6px rgb(0 0 0 / 20%);
  margin-bottom: 1.4375rem;
  font-size: 0.9375rem;
  letter-spacing: 0.1px;

  span {
    font-weight: bolder;
  }
`;
