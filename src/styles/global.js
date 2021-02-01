import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    body {
        background : ${({ theme }) => theme.body};
        color : ${({ theme }) => theme.text};
        transition: all .5s linear;
    }
    .btn-primary {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.body};
        padding:0.5rem 1.5rem;
        font-size:1rem;
        border-radius : 1rem;
        cursor:pointer;
        outline: none;
        transition: all .5s linear;
    }

`;

export const lightTheme = {
  body: "#fff",
  text: "#121212",
  primary: "#6200ee",
};
export const darkTheme = {
  body: "#121212",
  text: "#fff",
  primary: "#bb86fc",
};
