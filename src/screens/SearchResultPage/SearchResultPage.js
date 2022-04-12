import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  ErrorMessage,
  FilterCards,
  Footer,
  OrSeperator,
  ProfileInfoCard,
  SearchForm,
  SearchHeader,
  SolutionCard,
  SolutionCardsContainer,
} from "../../components";
import {
  MainContainer,
  NoResultsContainer,
  SectionContainer,
} from "./SearchResultPage.styles";
import {
  getAnonymousUserSolutionsActions,
  getUserProfileActions,
} from "../../redux";

const SearchResultPage = () => {
  const location = useLocation();
  const email = new URLSearchParams(location.search).get("email") || "";

  const getAnonymousUserSolutions = useSelector(
    (state) => state.getAnonymousUserSolutions
  );
  const { loading, data, error } = getAnonymousUserSolutions;

  const getUserProfile = useSelector((state) => state.getUserProfile);
  const {
    loading: InfoCardLoading,
    data: InfoCardData,
    error: InfoCardError,
  } = getUserProfile;

  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([
      dispatch(getAnonymousUserSolutionsActions({ email })),
      dispatch(getUserProfileActions({ email })),
    ]);
  }, [dispatch, email]);

  return (
    <>
      <SearchHeader></SearchHeader>
      {error || InfoCardError ? (
        <>
          <NoResultsContainer>
            <ErrorMessage>{error || InfoCardError}</ErrorMessage>
            <SectionContainer>
              <OrSeperator></OrSeperator>
              <SearchForm></SearchForm>
            </SectionContainer>
          </NoResultsContainer>
        </>
      ) : data && InfoCardData ? (
        <MainContainer>
          <ProfileInfoCard data={InfoCardData}></ProfileInfoCard>
          <SolutionCardsContainer>
            <FilterCards title={"Solutions"} data={data}></FilterCards>
            <SolutionCard data={data}></SolutionCard>
          </SolutionCardsContainer>
        </MainContainer>
      ) : loading || InfoCardLoading ? (
        <div
          style={{
            minHeight: "calc(100vh - 104px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <p>Looooooding.........</p>
        </div>
      ) : null}

      <Footer></Footer>
    </>
  );
};

export default SearchResultPage;
