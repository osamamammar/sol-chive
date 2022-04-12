import React, { useEffect, useState } from "react";
import { DivWrapper } from "../AddNewProblemForm/AddNewProblrm.styles";

const YourAndPerfectSolutionForm = ({ data }) => {
  const [yourSolution, setYourSolution] = useState(data && data.my_solution);
  const [perfectSolution, setPerfectSolution] = useState(
    data && data.perfect_solution
  );

  return (
    <>
      <DivWrapper>
        <label htmlFor="yourSolution">Your Solution</label>
        <textarea
          readOnly={true}
          className="yourSolution"
          placeholder="
            /**
            Enter your code here
            **/"
          name="yourSolution"
          id="yourSolution"
          rows={30}
          required
          value={yourSolution}
          onChange={(e) => setYourSolution(e.target.value)}
        ></textarea>
      </DivWrapper>

      <DivWrapper>
        <label htmlFor="perfectSolution">
          Perfect Solution <span>(optional)</span>
        </label>
        <textarea
          readOnly={true}
          className="perfectSolution"
          placeholder="   
            /**
            Enter your code here
            **/"
          name="perfectSolution"
          id="perfectSolution"
          rows={30}
          value={perfectSolution || "please login to see the perfect solution"}
          onChange={(e) => setPerfectSolution(e.target.value)}
        ></textarea>
      </DivWrapper>
    </>
  );
};

export default YourAndPerfectSolutionForm;
