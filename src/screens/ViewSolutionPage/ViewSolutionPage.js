import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Footer,
  ProblemDetails,
  ProfileHeader,
  SearchHeader,
  ViewSolutionForm,
} from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { MainContainer } from "./ViewSolutionPage.styles";
import { getOneSolutionDetailsForAnonymousActions } from "../../redux";

const ViewSolutionPage = () => {
  const { solutionId } = useParams();

  const getOneSolutionDetailsForAnonymous = useSelector(
    (state) => state.getOneSolutionDetailsForAnonymous
  );
  const { loading, data, error } = getOneSolutionDetailsForAnonymous;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneSolutionDetailsForAnonymousActions({ solutionId }));
  }, [dispatch, solutionId]);

  return (
    <>
      {data ? (
        <>
          <SearchHeader></SearchHeader>
          <MainContainer>
            <ProblemDetails data={data}></ProblemDetails>
            <ViewSolutionForm></ViewSolutionForm>
          </MainContainer>
          <Footer />
        </>
      ) : (
        <>
          <ProfileHeader />
          <MainContainer>
            <ProblemDetails></ProblemDetails>
            <ViewSolutionForm></ViewSolutionForm>
          </MainContainer>
          <Footer />
        </>
      )}
    </>
  );
};

export default ViewSolutionPage;
