import React from "react";
import {
  Footer,
  ProblemDetails,
  ProfileHeader,
  ViewSolutionForm,
} from "../../components";
import { MainContainer } from "./ViewSolutionPage.styles";

const ViewSolutionPage = () => {
  return (
    <>
      <ProfileHeader />
      <MainContainer>
        <ProblemDetails></ProblemDetails>
        <ViewSolutionForm></ViewSolutionForm>
      </MainContainer>
      <Footer />
    </>
  );
};

export default ViewSolutionPage;
