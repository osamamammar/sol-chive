import React from "react";
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
  return (
    <>
      <ProfileHeader></ProfileHeader>
      <MainContainer>
        <ProfileInfoCard buttonDisplay="true"></ProfileInfoCard>
        <SolutionCardsContainer>
          <FilterCards title={"Library"}></FilterCards>
          <SolutionCard></SolutionCard>
        </SolutionCardsContainer>
      </MainContainer>

      <Footer></Footer>
    </>
  );
};

export default ProfilePage;
