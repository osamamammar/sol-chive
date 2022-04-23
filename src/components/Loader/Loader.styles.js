import styled from "styled-components";
import { Spin } from "../../animations";

export const DivWrapper = styled.div`
  min-height: calc(100vh - 104px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoaderSpinner = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid var(--color-yellow);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${Spin} 0.8s linear infinite;
`;
