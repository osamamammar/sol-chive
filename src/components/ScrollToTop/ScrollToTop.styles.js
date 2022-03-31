import styled from "styled-components";
import { fadeInAndTranslate } from "../../animations";

export const BtnGoToTop = styled.button`
  animation: ${fadeInAndTranslate} 1s;
  transition: all 0.5s ease-in-out;
  background-color: transparent;
  border: none;
  position: fixed;
  cursor: pointer;
  z-index: 100;
  inset-block-end: 78px;
  inset-inline-end: 40px;
`;
