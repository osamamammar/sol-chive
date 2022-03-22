import React from "react";
import {
  Footer,
  ProfileInfoCard,
  SearchHeader,
  SolutionCards,
} from "../../components";
import { MainContainer } from "./SearchResultPage.styles";

const SearchResultPage = () => {
  return (
    <>
      <SearchHeader></SearchHeader>
      <MainContainer>
        <ProfileInfoCard></ProfileInfoCard>
        <SolutionCards></SolutionCards>
      </MainContainer>
      <Footer></Footer>
    </>
  );
};

export default SearchResultPage;
