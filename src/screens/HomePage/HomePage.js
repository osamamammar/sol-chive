import React from "react";
import { cards } from "../../json";
import {
  FilterCards,
  Footer,
  HomeEmpty,
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
            homePage={true}
            cards={cards}
          ></FilterCards>
          <SolutionCard solutions={cards}></SolutionCard>
        </SolutionCardsContainer>
        {cards && cards.length === 0 && <HomeEmpty></HomeEmpty>}
      </MainContainer>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
