import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme["White"]};
    }

    body, input, textarea, button {
        font-family: 'Kumbh Sans', sans-serif;
    }

    ul {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }

  img{
    display: block;
  }

`;

// - Mobile: 375px
// - Desktop: 1440px
