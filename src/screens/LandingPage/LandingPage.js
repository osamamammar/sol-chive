import React from "react";
import {
  HeaderContainer,
  LogoTitle,
  MainContainer,
  MainSection,
  MarkYellow,
  WelcomeDescription,
  WelcomeTitle,
} from "./LandingPage.styles";
import {
  Footer,
  LoginMethodsBtns,
  OrSeperator,
  SearchForm,
} from "../../components";

const LandingPage = () => {
  return (
    <>
      <HeaderContainer>
        <LogoTitle>
          <MarkYellow>Sol</MarkYellow>-chive
        </LogoTitle>
      </HeaderContainer>

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
