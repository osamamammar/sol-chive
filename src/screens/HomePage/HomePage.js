import React from "react";
import {
  FilterCards,
  Footer,
  ProfileHeader,
  SolutionCard,
  SolutionCardsContainer,
} from "../../components";
import { MainContainer } from "./HomePage.styles";

const HomePage = () => {
  return (
    <>
      <ProfileHeader></ProfileHeader>
      <MainContainer>
        <SolutionCardsContainer>
          <FilterCards
            title={"Library"}
            addNewBtn={true}
            HomePage={true}
          ></FilterCards>
          <SolutionCard></SolutionCard>
        </SolutionCardsContainer>
      </MainContainer>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
