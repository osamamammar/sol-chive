import React from "react";
import {
  FilterCards,
  Footer,
  ProfileInfoCard,
  SearchHeader,
  SolutionCard,
  SolutionCardsContainer,
} from "../../components";

import { MainContainer } from "./SearchResultPage.styles";

const SearchResultPage = () => {
  return (
    <>
      <SearchHeader></SearchHeader>
      <MainContainer>
        <ProfileInfoCard></ProfileInfoCard>
        <SolutionCardsContainer>
          <FilterCards></FilterCards>
          <SolutionCard></SolutionCard>
        </SolutionCardsContainer>
      </MainContainer>
      <Footer></Footer>
    </>
  );
};

export default SearchResultPage;
