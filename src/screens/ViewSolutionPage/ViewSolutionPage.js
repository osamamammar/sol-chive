import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  ErrorMessage,
  Footer,
  Loader,
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
    if (solutionId) {
      dispatch(getOneSolutionDetailsForAnonymousActions({ solutionId }));
    }
  }, [dispatch, solutionId]);

  return (
    <>
      <SearchHeader></SearchHeader>
      <MainContainer>
        {loading ? (
          <Loader></Loader>
        ) : error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : data ? (
          <>
            <ProblemDetails data={data}></ProblemDetails>
            <ViewSolutionForm data={data}></ViewSolutionForm>
          </>
        ) : null}
      </MainContainer>
      <Footer />
    </>
  );
};

export default ViewSolutionPage;
