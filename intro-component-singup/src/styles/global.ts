import { createGlobalStyle } from "styled-components";

import bgImg from "../assets/bg-intro-desktop.png";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
 
  body{ 
    background-image: url(${bgImg});
    background-color: ${(props) => props.theme["red-100"]}
  }

  a{
    text-decoration: none;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  @media (max-width: 655px) {
    html{
      font-size: 14px;
    } 
    h1{
      font-size: 13px;
    }
    }
  

`;
