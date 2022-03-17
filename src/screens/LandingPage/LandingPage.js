import React from "react";
import {
  MainContainer,
  MainSection,
  WelcomeDescription,
  WelcomeTitle,
} from "./LandingPage.styles";
import {
  LogoHeader,
  LoginMethodsBtns,
  OrSeperator,
  SearchForm,
  Footer,
} from "../../components";

const LandingPage = () => {
  return (
    <>
      <LogoHeader></LogoHeader>

      <MainContainer>
        <MainSection>
          <WelcomeTitle>Welcome</WelcomeTitle>
          <WelcomeDescription>Login or join us via</WelcomeDescription>

          <LoginMethodsBtns></LoginMethodsBtns>

          <OrSeperator></OrSeperator>

          <SearchForm></SearchForm>
        </MainSection>
      </MainContainer>

      <Footer></Footer>
    </>
  );
};

export default LandingPage;
