import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
     * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        background: ${(props) => props.theme.baseBackground};
        color: ${(props) => props.theme.baseText};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem Nanito, sans-serif;
    }
`;
