import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
  --color-primary:  #242423;
  --color-gray: #333533;
  --color-gray-dark:#1c1c1c;
  --color-yellow: #f5cb5c;
  --color-yellow-dark: #d1aa40;
  --color-danger: #ff7a7a;
  --color-bg-error:rgba(255, 122, 122, 0.1);
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

body, h1, h2, h3, h4, h5, h6, p, ol, ul, label {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-family: "Roboto", sans-serif;
  color: var(--color-text-light);
  word-break: break-word;
}

body{
  background-color: var(--color-primary);
}

ol, ul {
  list-style: none;
}

a{
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

.main-btn,
.btn,
.red-btn{
  color: var(--color-primary);
  border: none;
  cursor: pointer;
  transition: ease-in-out 0.2s all;
}
.main-btn,.btn{
  background-color: var(--color-yellow);
}
.red-btn{
  background-color: var(--color-danger);
}
.main-btn {
  padding-inline: 30px;
  padding-block: 4px;
  border-radius: 8px;
  font-size: 20px;
}

.btn:hover,.main-btn:hover {
  background-color: var(--color-yellow-dark);
}
.red-btn:hover{
  background-color:#d06565;
}

.visually-hidden:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

#root {
  isolation: isolate;
}

`;

export default GlobalStyles;
