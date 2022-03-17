import React from "react";
import Footer from "../../components/Footer";
import { searchIcon } from "../../assets";
import {
  HeaderContainer,
  LogoTitle,
  MarkYellow,
  MainContainer,
  MainSection,
  WelcomeTitle,
  WelcomeDescription,
  OrSeperator,
  Line,
  SearchForm,
  LabelForInput,
  SearchInput,
  IconForInput,
} from "./LandingPage.styles";
import LoginMethodsBtns from "../../components/LoginMethodsBtns";

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
          <OrSeperator>
            <Line>or</Line>
          </OrSeperator>

          <SearchForm>
            <LabelForInput htmlFor="email">
              find someone problem solver
            </LabelForInput>
            <IconForInput>
              <img src={searchIcon} alt="search-login" width={15} height={15} />
            </IconForInput>
            <SearchInput
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
            />

            <button className="btn" type="submit">
              Find now
            </button>
          </SearchForm>
        </MainSection>
      </MainContainer>
      <Footer></Footer>
    </>
  );
};

export default LandingPage;
