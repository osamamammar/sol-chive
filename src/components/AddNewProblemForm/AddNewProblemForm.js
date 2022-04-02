import React from "react";
import { btnSubmit } from "../../assets";
import CTABtn from "../CTABtn/CTABtn";
import YourPerfectSolutionForm from "../YourAndPerfectSolutionForm/YourAndPerfectSolutionForm";
import { DivWrapper, FormContainer } from "./AddNewProblrm.styles";

const AddNewProblemForm = () => {
  return (
    <FormContainer>
      <DivWrapper>
        <label htmlFor="problemTitle">Problem Title</label>
        <input
          type="text"
          name="problemTitle"
          id="problemTitle"
          placeholder="Problem title"
          required
        />
      </DivWrapper>

      <DivWrapper>
        <label htmlFor="problemLink">Problem Link</label>
        <input
          type="url"
          name="problemLink"
          id="problemLink"
          placeholder="https://example.com"
          required
        />
      </DivWrapper>

      <DivWrapper>
        <label htmlFor="tags">
          Tags <span>(optional)</span>
        </label>
        <input type="text" name="tags" id="tags" placeholder="Enter tags" />
      </DivWrapper>
      <YourPerfectSolutionForm></YourPerfectSolutionForm>

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

export default AddNewProblemForm;
