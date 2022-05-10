import React from "react";
import { addNew } from "../../assets";
import { StyledLink } from "./AddNewBtn.styles";

const AddNewBtn = () => {
  return (
    <StyledLink to={"/add-new-problem"} className="btn">
      Add new
      <img src={addNew} alt="add-new" width={10.78} height={14.4} />
    </StyledLink>
  );
};

export default AddNewBtn;
