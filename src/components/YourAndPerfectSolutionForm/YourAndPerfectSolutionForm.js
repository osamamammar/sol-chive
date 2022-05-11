import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { checkAuth } from "../../utils";
import { DivWrapper } from "../AddNewProblemForm/AddNewProblrm.styles";

const YourAndPerfectSolutionForm = ({ data, childToParent }) => {
  const Auth = checkAuth("isLoggedIn");
  const location = useLocation();
  const [yourSolution, setYourSolution] = useState("");
  const [perfectSolution, setPerfectSolution] = useState("");

  useEffect(() => {
    if (
      (location.pathname === "/edit-problem" ||
        location.pathname.indexOf("/solution") === 0) &&
      data
    ) {
      setYourSolution(data && data.my_solution);
      setPerfectSolution(data && data.perfect_solution);
    }
  }, [data, location]);

  useEffect(() => {
    if (childToParent) {
      childToParent({ yourSolution, perfectSolution });
    }
  }, [yourSolution, perfectSolution, childToParent]);

  return (
    <>
      <DivWrapper>
        <label htmlFor="yourSolution">Your Solution</label>
        <textarea
          readOnly={
            Auth && location.pathname.indexOf("/solution") ? false : true
          }
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
      {Auth && (
        <DivWrapper>
          <label htmlFor="perfectSolution">
            Perfect Solution <span>(optional)</span>
          </label>
          <textarea
            readOnly={
              Auth && location.pathname.indexOf("/solution") ? false : true
            }
            className="perfectSolution"
            placeholder="   
            /**
            Enter your code here
            **/"
            name="perfectSolution"
            id="perfectSolution"
            rows={30}
            value={perfectSolution || ""}
            onChange={(e) => setPerfectSolution(e.target.value)}
          ></textarea>
        </DivWrapper>
      )}
    </>
  );
};

export default YourAndPerfectSolutionForm;
