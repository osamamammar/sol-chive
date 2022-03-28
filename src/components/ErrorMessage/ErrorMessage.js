import React from "react";
import { DivWrapper, TextError } from "./ErrorMessage.styles";

const ErrorMessage = ({ children }) => {
  return (
    <DivWrapper>
      <TextError>{children}</TextError>
    </DivWrapper>
  );
};

export default ErrorMessage;
