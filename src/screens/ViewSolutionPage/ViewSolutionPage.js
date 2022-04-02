import React from "react";
import { Footer, ProblemDetails, ProfileHeader } from "../../components";
import { MainContainer } from "./ViewSolutionPage.styles";

const ViewSolutionPage = () => {
  return (
    <>
      <ProfileHeader />
      <MainContainer>
        <ProblemDetails></ProblemDetails>
      </MainContainer>
      <Footer />
    </>
  );
};

export default ViewSolutionPage;
