import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  ErrorMessage,
  FilterCards,
  Footer,
  Loader,
  OrSeperator,
  Pagination,
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
  const { email } = useParams();

  const location = useLocation();
  const page = new URLSearchParams(location.search).get("page") || 1;
  const sortbydate =
    new URLSearchParams(location.search).get("sortbydate") || "";
  const source = new URLSearchParams(location.search).get("source") || "";
  const tag = new URLSearchParams(location.search).get("tag") || "";
  const perfectsolution =
    new URLSearchParams(location.search).get("perfectsolution") || "";

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
      dispatch(
        getAnonymousUserSolutionsActions({
          email,
          page,
          sortbydate,
          source,
          tag,
          perfectsolution,
        })
      ),
      dispatch(getUserProfileCardActions({ email })),
    ]);
  }, [dispatch, email, page, sortbydate, source, tag, perfectsolution]);

  return (
    <>
      <SearchHeader></SearchHeader>
      {loading || InfoCardLoading ? (
        <Loader></Loader>
      ) : error || InfoCardError ? (
        <NoResultsContainer>
          <DivWrapper>
            <ErrorMessage>{error || InfoCardError}</ErrorMessage>
            <SectionContainer>
              <OrSeperator></OrSeperator>
              <SearchForm></SearchForm>
            </SectionContainer>
          </DivWrapper>
        </NoResultsContainer>
      ) : (
        data &&
        InfoCardData && (
          <MainContainer>
            <ProfileInfoCard data={InfoCardData}></ProfileInfoCard>
            <SolutionCardsContainer marginBlockStart>
              <FilterCards
                title="Solutions"
                currentPage={data.pageNumber}
                data={data}
              ></FilterCards>
              <SolutionCard data={data}></SolutionCard>
              <Pagination
                totalPages={data.totalPages}
                currentPage={data.pageNumber}
              ></Pagination>
            </SolutionCardsContainer>
          </MainContainer>
        )
      )}

      <Footer></Footer>
    </>
  );
};

export default SearchResultPage;
