import React from "react";
import { DivWrapper, LoaderSpinner } from "./Loader.styles";

const Loader = ({ height }) => {
  return (
    <DivWrapper height={height}>
      <LoaderSpinner></LoaderSpinner>
    </DivWrapper>
  );
};

export default Loader;
