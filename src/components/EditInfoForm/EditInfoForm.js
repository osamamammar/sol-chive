import React from "react";
import { btnSubmit } from "../../assets";
import {
  DivWrapper,
  FormContainer,
} from "../AddNewProblemForm/AddNewProblrm.styles";
import CTABtn from "../CTABtn/CTABtn";

const EditInfoForm = () => {
  return (
    <FormContainer>
      <DivWrapper>
        <label htmlFor="name">Display Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          required
        />
      </DivWrapper>

      <DivWrapper>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          required
        />
      </DivWrapper>

      <DivWrapper>
        <label htmlFor="about">About</label>
        <textarea
          className="about"
          placeholder="Enter short bio about yourself"
          name="about"
          id="about"
          rows={10}
        />
      </DivWrapper>

      <CTABtn
        type={"submit"}
        alt={"submit"}
        imgIcon={btnSubmit}
        className={"btn"}
        width={"13.17"}
        height={"9.52"}
      >
        Submit
      </CTABtn>
    </FormContainer>
  );
};

export default EditInfoForm;
