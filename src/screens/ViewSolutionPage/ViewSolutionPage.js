import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Footer,
  ProblemDetails,
  ProfileHeader,
  ViewSolutionForm,
} from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { MainContainer } from "./ViewSolutionPage.styles";

const ViewSolutionPage = () => {
  const { solution_id } = useParams();

  // const getOneSolutionDetailsForAnonymousUser = useSelector(
  //   (state) => state.getOneSolutionDetailsForAnonymousUser
  // );
  // const { loading, data, error } = getOneSolutionDetailsForAnonymousUser;
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getOneSolutionDetailsForAnonymousUserActions({ solution_id }));
  // }, [dispatch, solution_id]);

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
