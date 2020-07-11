import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    background: #F9F4ED;
  }

  body, input, button {
    font-family: 'bitter', serif;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, p, strong {
    font-family: 'Dosis', sans-serif;
    color: #444;
  }
`;
