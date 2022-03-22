import React from "react";
import { Footer, ProfileInfoCard, SearchHeader } from "../../components";
import { MainContainer } from "./SearchResultPage.styles";

const SearchResultPage = () => {
  return (
    <>
      <SearchHeader></SearchHeader>
      <MainContainer>
        <ProfileInfoCard></ProfileInfoCard>
      </MainContainer>
      {/* <Footer></Footer> */}
    </>
  );
};

export default SearchResultPage;
