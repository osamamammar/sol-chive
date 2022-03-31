import React from "react";
import AddNewBtn from "../AddNewBtn/AddNewBtn";
import { DivWrapper } from "./HomeEmpty.styles";

const HomeEmpty = () => {
  return (
    <DivWrapper>
      <p>
        No problems added yet… to add new one, click
        <AddNewBtn />
      </p>
    </DivWrapper>
  );
};

export default HomeEmpty;
