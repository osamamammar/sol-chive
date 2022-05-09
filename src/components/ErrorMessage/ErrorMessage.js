import React from "react";
import { DivWrapper, TextError } from "./ErrorMessage.styles";

const ErrorMessage = ({ children, position, marginBlockStart }) => {
  return (
    <DivWrapper position={position} marginBlockStart={marginBlockStart}>
      <TextError>{children}</TextError>
    </DivWrapper>
  );
};

export default ErrorMessage;
