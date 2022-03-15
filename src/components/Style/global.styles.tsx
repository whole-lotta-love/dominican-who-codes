import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle<any>`
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
    font-size: 16px;
    line-height: 0.8;
    background-color: ${(props) => props.theme.bg};
  }
`;
