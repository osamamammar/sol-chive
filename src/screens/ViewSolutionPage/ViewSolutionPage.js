import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  Alert,
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
import { checkAuth } from "../../utils";

const ViewSolutionPage = () => {
  const { solutionId } = useParams();
  const location = useLocation();
  const Auth = checkAuth("isLoggedIn");
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
    if (solutionId && Auth) {
      dispatch(getOneSolutionDetailsForAuthActions({ solutionId }));
    } else {
      dispatch(getOneSolutionDetailsForAnonymousActions({ solutionId }));
    }
  }, [dispatch, solutionId, Auth]);

  return (
    <>
      {Auth ? <ProfileHeader></ProfileHeader> : <SearchHeader></SearchHeader>}

      <MainContainer>
        {loading || loadingForAuth ? (
          <Loader></Loader>
        ) : error || errorForAuth ? (
          <ErrorMessage>{error || errorForAuth}</ErrorMessage>
        ) : data || dataForAuth ? (
          <>
            {location.state && location.state.success && (
              <Alert delay="2000">{location.state?.success}</Alert>
            )}
            <ProblemDetails
              data={data || dataForAuth}
              solutionId={solutionId}
            ></ProblemDetails>
            <ViewSolutionForm data={data || dataForAuth}></ViewSolutionForm>
          </>
        ) : null}
      </MainContainer>
      <Footer />
    </>
  );
};

export default ViewSolutionPage;
