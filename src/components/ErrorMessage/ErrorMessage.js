import React from "react";
import { DivWrapper, TextError } from "./ErrorMessage.styles";

const ErrorMessage = ({
  children,
  position,
  marginBlockStart,
  marginBlockEnd,
  width,
  insetBlockStart,
}) => {
  return (
    <DivWrapper
      position={position}
      marginBlockStart={marginBlockStart}
      marginBlockEnd={marginBlockEnd}
      width={width}
      insetBlockStart={insetBlockStart}
    >
      <TextError>{children}</TextError>
    </DivWrapper>
  );
};

export default ErrorMessage;
