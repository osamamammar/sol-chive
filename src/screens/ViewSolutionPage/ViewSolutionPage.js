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
import {
  getOneSolutionDetailsForAnonymousActions,
  getOneSolutionDetailsForAuthActions,
} from "../../redux";
import { checkAuth, cookieData } from "../../utils";

const ViewSolutionPage = () => {
  const { solutionId } = useParams();
  const Auth = checkAuth(cookieData);

  const getOneSolutionDetailsForAnonymous = useSelector(
    (state) => state.getOneSolutionDetailsForAnonymous
  );
  const { loading, data, error } = getOneSolutionDetailsForAnonymous;

  const {
    loading: loadingForAuth,
    data: dataForAuth,
    error: errorForAuth,
  } = useSelector((state) => state.getOneSolutionDetailsForAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (solutionId && !Auth) {
      dispatch(getOneSolutionDetailsForAnonymousActions({ solutionId }));
    } else {
      dispatch(getOneSolutionDetailsForAuthActions({ solutionId }));
    }
  }, [dispatch, solutionId, Auth]);

  return (
    <>
      {Auth === "true" ? (
        <ProfileHeader></ProfileHeader>
      ) : (
        <SearchHeader></SearchHeader>
      )}

      <MainContainer>
        {loading || loadingForAuth ? (
          <Loader></Loader>
        ) : error || errorForAuth ? (
          <ErrorMessage>{error || errorForAuth}</ErrorMessage>
        ) : data || dataForAuth ? (
          <>
            <ProblemDetails data={data || dataForAuth}></ProblemDetails>
            <ViewSolutionForm data={data || dataForAuth}></ViewSolutionForm>
          </>
        ) : null}
      </MainContainer>
      <Footer />
    </>
  );
};

export default ViewSolutionPage;
