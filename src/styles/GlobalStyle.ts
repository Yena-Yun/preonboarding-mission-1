import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  h1, p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  input {
    border: none;
    outline: none;
  }
  
  button {
    border: none;
    background-color: none;
  }
`;

export default GlobalStyle;
