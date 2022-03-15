import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
  --color-primary:  #242423;
  --color-secondary: #333533;
  --color-safe: #f5cb5c;
  --color-danger: #ff7a7a;
  --color-backgroundColor-error:background-color: rgba(255, 122, 122, 0.1);
  --color-placeholder:#cfdbd5;
  --color-text-light: #fff;
  --color-text-notActive: #616161;
}

html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

#root {
  isolation: isolate;
}

`;

export default GlobalStyles;
