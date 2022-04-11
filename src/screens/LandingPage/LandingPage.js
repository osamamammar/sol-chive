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
import { useDispatch } from "react-redux";

const LandingPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <LogoHeader></LogoHeader>

      <MainContainer>
        <MainSection>
          <WelcomeTitle>Welcome</WelcomeTitle>
          <WelcomeDescription>Login or join us via</WelcomeDescription>

          <LoginMethodsBtns></LoginMethodsBtns>

          <OrSeperator></OrSeperator>

          <SearchForm dispatch={dispatch}></SearchForm>
        </MainSection>
      </MainContainer>

      <Footer></Footer>
    </>
  );
};

export default LandingPage;
