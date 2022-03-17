import React from "react";
import Footer from "../../components/Footer";
import {
  facebookIcon,
  githubIcon,
  googleIcon,
  searchIcon,
  twitterIcon,
} from "../../assets";
import {
  HeaderContainer,
  LogoTitle,
  MarkYellow,
  MainContainer,
  MainSection,
  WelcomeTitle,
  WelcomeDescription,
  SocialList,
  SocialBtns,
  OrSeperator,
  Line,
  SearchForm,
  LabelForInput,
  SearchInput,
  IconForInput,
} from "./LandingPage.styles";

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

          <SocialList>
            <li>
              <SocialBtns>
                <img
                  src={facebookIcon}
                  alt="facebook-login"
                  width={35}
                  height={35}
                />
              </SocialBtns>
            </li>
            <li>
              <SocialBtns>
                <img
                  src={githubIcon}
                  alt="github-login"
                  width={35}
                  height={35}
                />
              </SocialBtns>
            </li>
            <li>
              <SocialBtns>
                <img
                  src={googleIcon}
                  alt="google-login"
                  width={35}
                  height={35}
                />
              </SocialBtns>
            </li>
            <li>
              <SocialBtns>
                <img
                  src={twitterIcon}
                  alt="twitter-login"
                  width={35}
                  height={35}
                />
              </SocialBtns>
            </li>
          </SocialList>

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
