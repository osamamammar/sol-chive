import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  ErrorMessage,
  FilterCards,
  Footer,
  Loader,
  OrSeperator,
  ProfileInfoCard,
  SearchForm,
  SearchHeader,
  SolutionCard,
  SolutionCardsContainer,
} from "../../components";
import {
  DivWrapper,
  MainContainer,
  NoResultsContainer,
  SectionContainer,
} from "./SearchResultPage.styles";
import {
  getAnonymousUserSolutionsActions,
  getUserProfileCardActions,
} from "../../redux";

const SearchResultPage = () => {
  const location = useLocation();
  const email = new URLSearchParams(location.search).get("email") || "";

  const getAnonymousUserSolutions = useSelector(
    (state) => state.getAnonymousUserSolutions
  );
  const { loading, data, error } = getAnonymousUserSolutions;

  const getUserProfileCard = useSelector((state) => state.getUserProfileCard);
  const {
    loading: InfoCardLoading,
    data: InfoCardData,
    error: InfoCardError,
  } = getUserProfileCard;

  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([
      dispatch(getAnonymousUserSolutionsActions({ email })),
      dispatch(getUserProfileCardActions({ email })),
    ]);
  }, [dispatch, email]);

  return (
    <>
      <SearchHeader></SearchHeader>
      { loading || InfoCardLoading ? (
        <Loader></Loader>
        ):error || InfoCardError ? (
          <NoResultsContainer>
            <DivWrapper>
              <ErrorMessage>{error || InfoCardError}</ErrorMessage>
              <SectionContainer>
                <OrSeperator></OrSeperator>
                <SearchForm></SearchForm>
              </SectionContainer>
            </DivWrapper>
          </NoResultsContainer>
      ) : data && InfoCardData && (
        <MainContainer>
          <ProfileInfoCard data={InfoCardData}></ProfileInfoCard>
          <SolutionCardsContainer marginBlockStart>
            <FilterCards title={"Solutions"} data={data}></FilterCards>
            <SolutionCard data={data}></SolutionCard>
          </SolutionCardsContainer>
        </MainContainer>
      ) 
      }

      <Footer></Footer>
    </>
  );
};

export default SearchResultPage;
