import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ErrorMessage,
  FilterCards,
  Footer,
  Loader,
  ProfileHeader,
  ProfileInfoCard,
  SolutionCard,
  SolutionCardsContainer,
} from "../../components";
import {
  getAllSolutionsForAuthUserActions,
  getUserProfileCardActions,
} from "../../redux";
import { MainContainer } from "../SearchResultPage/SearchResultPage.styles";

const ProfilePage = () => {
  const { loading, data, error } = useSelector(
    (state) => state.getAllSolutionsForAuthUser
  );
  const {
    loading: InfoCardLoading,
    data: InfoCardData,
    error: InfoCardError,
  } = useSelector((state) => state.getUserProfileCard);

  const dispatch = useDispatch();
  const email = "osamaammar29@gmail.com";
  useEffect(() => {
    if (!data) {
      dispatch(getAllSolutionsForAuthUserActions());
    } else if (!InfoCardData) {
      dispatch(getUserProfileCardActions({ email }));
    }
  }, [dispatch, data, InfoCardData]);

  return (
    <>
      <ProfileHeader></ProfileHeader>
      {loading || InfoCardLoading ? (
        <Loader></Loader>
      ) : error || InfoCardError ? (
        <MainContainer>
          <ErrorMessage>{error || InfoCardError}</ErrorMessage>
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
              <FilterCards title={"Library"} data={data}></FilterCards>
              <SolutionCard data={data}></SolutionCard>
            </SolutionCardsContainer>
          </MainContainer>
        )
      )}

      <Footer></Footer>
    </>
  );
};

export default ProfilePage;
