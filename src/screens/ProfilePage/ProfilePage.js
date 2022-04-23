import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  FilterCards,
  Footer,
  ProfileHeader,
  ProfileInfoCard,
  SolutionCard,
  SolutionCardsContainer,
} from "../../components";
import { MainContainer } from "../SearchResultPage/SearchResultPage.styles";

const ProfilePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(get);
  }, [dispatch]);

  return (
    <>
      <ProfileHeader></ProfileHeader>
      <MainContainer>
        {/* <ProfileInfoCard buttonDisplay="true"></ProfileInfoCard>
        <SolutionCardsContainer>
          <FilterCards title={"Library"} cards={cards}></FilterCards>
          <SolutionCard data={""}></SolutionCard>
        </SolutionCardsContainer> */}
      </MainContainer>

      <Footer></Footer>
    </>
  );
};

export default ProfilePage;
