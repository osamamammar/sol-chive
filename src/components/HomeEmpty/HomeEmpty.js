import React from "react";
import { Link } from "react-router-dom";
import { DivWrapper } from "./HomeEmpty.styles";

const HomeEmpty = () => {
  return (
    <DivWrapper>
      <p>
        No problems added yet … to add new one, click <Link to={"/"}> fff</Link>{" "}
      </p>
    </DivWrapper>
  );
};

export default HomeEmpty;
