import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
      
        background: linear-gradient(
         
    ${(props) => props.theme["bg-Soft-violet"]} 10%,
    ${(props) => props.theme["bg-Soft-blue"]} 100%
  ) fixed;

    }

    body, input, textarea, button {
        font-family: 'Kumbh Sans', sans-serif;
        font-size: 0.75rem;
        padding:  0 0.625rem 1.25rem;
    } 

    button {
    cursor: pointer;
     }
    img{
        display: block;
    }
`;
