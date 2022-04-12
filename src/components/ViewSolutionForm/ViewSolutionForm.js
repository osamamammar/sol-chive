import React from "react";
import YourAndPerfectSolutionForm from "../YourAndPerfectSolutionForm/YourAndPerfectSolutionForm";
import { FormContainer } from "./ViewSolutionForm.styles";

const ViewSolutionForm = ({ data }) => {
  return (
    <FormContainer>
      <YourAndPerfectSolutionForm data={data}></YourAndPerfectSolutionForm>
    </FormContainer>
  );
};

export default ViewSolutionForm;
