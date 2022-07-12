import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  html {
    background-color: transparent;
    box-sizing: border-box;
    font-size: 62.5%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
 
  body {
    font-family: 'Anek Latin', sans-serif;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  #root {
    height: 100%;
  }
  *, *:before, *:after {
    box-sizing: border-box;
    font-family: 'Anek Latin', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
