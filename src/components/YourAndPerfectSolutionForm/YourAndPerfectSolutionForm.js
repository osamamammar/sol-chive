import React from "react";
import { DivWrapper } from "../AddNewProblemForm/AddNewProblrm.styles";

const YourAndPerfectSolutionForm = () => {
  return (
    <>
      <DivWrapper>
        <label htmlFor="yourSolution">Your Solution</label>
        <textarea
          className="yourSolution"
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
          className="perfectSolution"
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
    </>
  );
};

export default YourAndPerfectSolutionForm;
