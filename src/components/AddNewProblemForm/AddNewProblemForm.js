import React from "react";
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
          placeholder="Problem link"
          required
        />
      </DivWrapper>

      <DivWrapper>
        <label htmlFor="tags">
          Tags <span>(optional)</span>
        </label>
        <input type="text" name="tags" id="tags" placeholder="Enter tags" />
      </DivWrapper>

      <DivWrapper>
        <label htmlFor="yourSolution">Your Solution</label>
        <textarea
          type=""
          placeholder="
          /**
          Enter your code here
          **/"
          name="yourSolution"
          id="yourSolution"
          rows={30}
          required
        />
      </DivWrapper>

      <DivWrapper>
        <label htmlFor="perfectSolution">
          Perfect Solution <span>(optional)</span>
        </label>
        <textarea
          type="text"
          placeholder="   
          /**
          Enter your code here
          **/"
          name="perfectSolution"
          id="perfectSolution"
          rows={30}
        />
      </DivWrapper>

      <button type="submit" className="btn">
        Submit <img src="" alt="" />
      </button>
    </FormContainer>
  );
};

export default AddNewProblemForm;
