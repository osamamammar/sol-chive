import React from "react";
import {
  FilterCards,
  Footer,
  ProfileInfoCard,
  SearchHeader,
  SolutionCard,
  SolutionCardsContainer,
} from "../../components";
import { cards } from "../../json";

import { MainContainer } from "./SearchResultPage.styles";

const SearchResultPage = () => {
  return (
    <>
      <SearchHeader></SearchHeader>
      <MainContainer>
        <ProfileInfoCard></ProfileInfoCard>
        <SolutionCardsContainer>
          <FilterCards title={"Solutions"} cards={cards}></FilterCards>
          <SolutionCard solutions={cards}></SolutionCard>
        </SolutionCardsContainer>
      </MainContainer>
      <Footer></Footer>
    </>
  );
};

export default SearchResultPage;
