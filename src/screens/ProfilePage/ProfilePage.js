import React from "react";
import {
  FilterCards,
  Footer,
  ProfileHeader,
  ProfileInfoCard,
  SolutionCard,
  SolutionCardsContainer,
} from "../../components";
import { cards } from "../../json";
import { MainContainer } from "../SearchResultPage/SearchResultPage.styles";

const ProfilePage = () => {
  return (
    <>
      <ProfileHeader></ProfileHeader>
      <MainContainer>
        <ProfileInfoCard buttonDisplay="true"></ProfileInfoCard>
        <SolutionCardsContainer>
          <FilterCards title={"Library"}></FilterCards>
          <SolutionCard solutions={cards}></SolutionCard>
        </SolutionCardsContainer>
      </MainContainer>

      <Footer></Footer>
    </>
  );
};

export default ProfilePage;
