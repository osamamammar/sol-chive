import React from "react";
import { addNew } from "../../assets";
import { StyledLink } from "./AddNewBtn.styles";

const AddNewBtn = () => {
  return (
    <StyledLink to={"/add-new"} className="btn">
      Add new
      <img src={addNew} alt="add-new" />
    </StyledLink>
  );
};

export default AddNewBtn;
