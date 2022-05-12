import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  ErrorMessage,
  FilterCards,
  Footer,
  HomeEmpty,
  Loader,
  Pagination,
  ProfileHeader,
  ProfileInfoCard,
  SolutionCard,
  SolutionCardsContainer,
} from "../../components";
import {
  getAllSolutionsForAuthUserActions,
  getAuthUserProfileCardActions,
} from "../../redux";
import { MainContainer } from "../SearchResultPage/SearchResultPage.styles";

const ProfilePage = () => {
  const location = useLocation();
  const page = new URLSearchParams(location.search).get("page") || 1;
  const sortbydate =
    new URLSearchParams(location.search).get("sortbydate") || "";
  const source = new URLSearchParams(location.search).get("source") || "";
  const tag = new URLSearchParams(location.search).get("tag") || "";
  const perfectsolution =
    new URLSearchParams(location.search).get("perfectsolution") || "";

  const { loading, data, error } = useSelector(
    (state) => state.getAllSolutionsForAuthUser
  );
  const {
    loading: InfoCardLoading,
    data: InfoCardData,
    error: InfoCardError,
  } = useSelector((state) => state.getAuthUserProfileCard);

  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([
      dispatch(
        getAllSolutionsForAuthUserActions({
          page,
          sortbydate,
          source,
          tag,
          perfectsolution,
        })
      ),
      dispatch(getAuthUserProfileCardActions()),
    ]);
  }, [dispatch, page, sortbydate, source, tag, perfectsolution]);

  return (
    <>
      <ProfileHeader></ProfileHeader>
      {loading || InfoCardLoading ? (
        <Loader height={"108px"}></Loader>
      ) : (error && !error.code === 404) || InfoCardError ? (
        <MainContainer>
          <ErrorMessage>
            {(error && error.message) || InfoCardError}
          </ErrorMessage>
        </MainContainer>
      ) : (
        data &&
        InfoCardData && (
          <MainContainer>
            <ProfileInfoCard
              buttonDisplay="true"
              data={InfoCardData}
            ></ProfileInfoCard>
            <SolutionCardsContainer marginBlockStart={`marginBlockStart`}>
              <FilterCards
                title={"Library"}
                data={data}
                email={InfoCardData && InfoCardData.email}
              ></FilterCards>
              <SolutionCard
                data={data}
                pathName={location.pathname}
              ></SolutionCard>
              <Pagination
                totalPages={data.totalPages}
                currentPage={data.pageNumber}
              ></Pagination>
            </SolutionCardsContainer>
          </MainContainer>
        )
      )}
      {error && error.code === 404 && (
        <MainContainer>
          <HomeEmpty></HomeEmpty>
        </MainContainer>
      )}
      <Footer></Footer>
    </>
  );
};

export default ProfilePage;
