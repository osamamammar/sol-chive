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
import { useSelector, useDispatch } from "react-redux";
import { MainContainer } from "./SearchResultPage.styles";

const SearchResultPage = () => {
  const getAnonymousUserSolutions = useSelector(
    (state) => state.getAnonymousUserSolutions
  );
  const { loading, data, error } = getAnonymousUserSolutions;
  return (
    <>
      <SearchHeader></SearchHeader>
      <MainContainer>
        <ProfileInfoCard></ProfileInfoCard>
        <SolutionCardsContainer>
          <FilterCards title={"Solutions"} cards={data}></FilterCards>
          <SolutionCard data={data}></SolutionCard>
        </SolutionCardsContainer>
      </MainContainer>
      <Footer></Footer>
    </>
  );
};

export default SearchResultPage;
