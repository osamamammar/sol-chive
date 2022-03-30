import styled from "styled-components";
import { fadeIn } from "../../animations";

export const DivWrapper = styled.div`
  position: relative;
  animation: ${fadeIn} 1s;
  > img {
    position: fixed;
    cursor: pointer;
    inset-block-end: 78px;
    inset-inline-end: 40px;
  }
`;
