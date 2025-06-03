import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    body, input, textarea, button {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: ${({ theme }) => theme.fontSizes.lg};
        color: ${({ theme }) => theme.colors.White};
    };

    img{
        max-width: 100%;
       display: block;
    };

    a{
        text-decoration: none;
        color: inherit;
    };

    ul{
        list-style-type: none;
    }


    html {
        @media (max-width: 1080px) {
      font-size: 87.5%;
    }
    }

`;
