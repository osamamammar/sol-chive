import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { checkAuth, cookieData } from "../../utils";
import { DivWrapper } from "../AddNewProblemForm/AddNewProblrm.styles";

const YourAndPerfectSolutionForm = ({ data }) => {
  const Auth = checkAuth(cookieData);
  const location = useLocation();

  const [yourSolution, setYourSolution] = useState("");
  const [perfectSolution, setPerfectSolution] = useState("");

  useEffect(() => {
    if (data) {
      setYourSolution(data && data.my_solution);
      setPerfectSolution(data && data.perfect_solution);
    }
  }, [data]);

  return (
    <>
      <DivWrapper>
        <label htmlFor="yourSolution">Your Solution</label>
        <textarea
          readOnly={location.pathname === "/edit-problem" ? false : true}
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
          readOnly={location.pathname === "/edit-problem" ? false : true}
          className="perfectSolution"
          placeholder="   
            /**
            Enter your code here
            **/"
          name="perfectSolution"
          id="perfectSolution"
          rows={30}
          value={
            Auth ? perfectSolution : "please login to see the perfect solution"
          }
          onChange={(e) => setPerfectSolution(e.target.value)}
        ></textarea>
      </DivWrapper>
    </>
  );
};

export default YourAndPerfectSolutionForm;
