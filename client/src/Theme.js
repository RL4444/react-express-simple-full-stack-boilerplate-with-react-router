import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
    colors: {
        // add color scheme here
    },
    fonts: {
        // add fonts here
    },
};

export const GlobalStyle = createGlobalStyle`
    p, h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
        /* because who the hell likes Times New Roman? */
        font-family: sans-serif;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-rendering: optimizeLegibility;
    }
    
    body {
        background: tomato;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    #root {
        min-height: 100vh;
        width: 100%;
        /* removed scroll bars */
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
        /* for centering display purposes only - you should probably remove this*/
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
