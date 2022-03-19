import { createGlobalStyle } from 'styled-components';

export interface Theme {
  bg0: string;
  bg1: string;
  fg0: string;
  solid: string;
  main: string;
}

export default createGlobalStyle<{ theme: Theme }>`
  @font-face {
    font-family: 'mononoki regular';
    src: url('static/fonts/Mononoki Regular.ttf') format('truetype');
    font-display: fallback;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-family: 'mononoki regular';
    font-size: 18px;
    line-height: 0.8;
    background-color: ${(props) => props.theme.bg0};
    color: ${(props) => props.theme.fg0};
  }
`;
