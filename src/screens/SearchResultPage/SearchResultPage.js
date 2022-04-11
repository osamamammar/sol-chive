import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import { useSelector, useDispatch } from "react-redux";
import {
  MainContainer,
  NoResultsContainer,
  SectionContainer,
} from "./SearchResultPage.styles";
import { getAnonymousUserSolutionsActions } from "../../apis";

const SearchResultPage = () => {
  const location = useLocation();
  const email = new URLSearchParams(location.search).get("email") || "";

  const getAnonymousUserSolutions = useSelector(
    (state) => state.getAnonymousUserSolutions
  );
  const { loading, data, error } = getAnonymousUserSolutions;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data && !loading && !error) {
      dispatch(getAnonymousUserSolutionsActions({ email }));
    }
  }, [dispatch, data, loading, error, email]);

  return (
    <>
      <SearchHeader></SearchHeader>
      {error && !loading ? (
        <>
          <NoResultsContainer>
            <ErrorMessage>{error}</ErrorMessage>
            <SectionContainer>
              <OrSeperator></OrSeperator>
              <SearchForm dispatch={dispatch}></SearchForm>
            </SectionContainer>
          </NoResultsContainer>
        </>
      ) : data ? (
        <MainContainer>
          <ProfileInfoCard></ProfileInfoCard>
          <SolutionCardsContainer>
            <FilterCards title={"Solutions"} data={data}></FilterCards>
            <SolutionCard data={data} loading={loading}></SolutionCard>
          </SolutionCardsContainer>
        </MainContainer>
      ) : (
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
      )}

      <Footer></Footer>
    </>
  );
};

export default SearchResultPage;
