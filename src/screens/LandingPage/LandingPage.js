import React from "react";
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34.875"
                  height="34.664"
                  viewBox="0 0 34.875 34.664"
                >
                  <path
                    id="facebook"
                    data-name="facebook"
                    d="M35.438,18A17.438,17.438,0,1,0,15.275,35.227V23.041h-4.43V18h4.43V14.158c0-4.37,2.6-6.784,6.586-6.784a26.836,26.836,0,0,1,3.9.34V12h-2.2a2.52,2.52,0,0,0-2.841,2.723V18h4.836l-.773,5.041H20.725V35.227A17.444,17.444,0,0,0,35.438,18Z"
                    transform="translate(-0.563 -0.563)"
                    fill="#fff"
                  />
                </svg>
              </SocialBtns>
            </li>
            <li>
              <SocialBtns>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34.875"
                  height="34.664"
                  viewBox="0 0 12.799 12.799"
                >
                  <path
                    id="github"
                    data-name="github"
                    d="M11.428,2.25H1.371A1.372,1.372,0,0,0,0,3.621V13.678a1.372,1.372,0,0,0,1.371,1.371H11.428A1.372,1.372,0,0,0,12.8,13.678V3.621A1.372,1.372,0,0,0,11.428,2.25ZM7.922,13.212c-.24.043-.329-.106-.329-.229,0-.154.006-.943.006-1.58a1.113,1.113,0,0,0-.323-.877c1.057-.117,2.171-.263,2.171-2.088A1.467,1.467,0,0,0,8.96,7.324a1.787,1.787,0,0,0-.049-1.286c-.4-.123-1.306.511-1.306.511a4.494,4.494,0,0,0-2.377,0s-.909-.634-1.306-.511a1.773,1.773,0,0,0-.049,1.286,1.435,1.435,0,0,0-.446,1.114c0,1.817,1.066,1.971,2.123,2.088a1.036,1.036,0,0,0-.3.637,1,1,0,0,1-1.38-.4,1,1,0,0,0-.729-.489c-.463-.006-.031.291-.031.291.309.143.526.691.526.691.277.849,1.6.563,1.6.563,0,.4.006,1.043.006,1.16s-.086.271-.329.229A4.74,4.74,0,0,1,1.708,8.69,4.534,4.534,0,0,1,6.337,4.076,4.635,4.635,0,0,1,11.085,8.69,4.7,4.7,0,0,1,7.922,13.212Zm-2.8-1.746c-.054.011-.106-.011-.111-.049s.031-.08.086-.091.106.017.111.054S5.177,11.455,5.12,11.467Zm-.271-.026c0,.037-.043.069-.1.069s-.106-.026-.106-.069.043-.069.1-.069S4.848,11.4,4.848,11.441Zm-.391-.031c-.011.037-.069.054-.117.037s-.091-.054-.08-.091.069-.054.117-.043S4.471,11.372,4.457,11.41Zm-.351-.154c-.026.031-.08.026-.123-.017s-.054-.091-.026-.117.08-.026.123.017S4.131,11.232,4.106,11.255ZM3.846,11c-.026.017-.074,0-.106-.043s-.031-.091,0-.111.08-.006.106.037A.084.084,0,0,1,3.846,11Zm-.186-.277c-.026.026-.069.011-.1-.017s-.037-.08-.011-.1.069-.011.1.017S3.686,10.7,3.66,10.718Zm-.191-.211a.054.054,0,0,1-.08.011c-.037-.017-.054-.049-.043-.074a.067.067,0,0,1,.08-.011C3.463,10.452,3.48,10.484,3.468,10.507Z"
                    transform="translate(0 -2.25)"
                    fill="#fff"
                  />
                </svg>
              </SocialBtns>
            </li>
            <li>
              <SocialBtns>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34.313"
                  height="34.875"
                  viewBox="0 0 34.313 34.875"
                >
                  <path
                    id="google"
                    data-name="google"
                    d="M34.313,18.408c0,9.949-6.813,17.03-16.875,17.03a17.438,17.438,0,0,1,0-34.875A16.769,16.769,0,0,1,29.13,5.126L24.384,9.689C18.176,3.7,6.63,8.2,6.63,18A10.923,10.923,0,0,0,17.438,29.011c6.9,0,9.492-4.95,9.9-7.516h-9.9v-6h16.6A15.287,15.287,0,0,1,34.313,18.408Z"
                    transform="translate(0 -0.563)"
                    fill="#fff"
                  />
                </svg>
              </SocialBtns>
            </li>
            <li>
              <SocialBtns>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="29.239"
                  viewBox="0 0 36 29.239"
                >
                  <path
                    id="twitter"
                    data-name="twitter"
                    d="M32.3,10.668c.023.32.023.64.023.959,0,9.754-7.424,20.992-20.992,20.992A20.85,20.85,0,0,1,0,29.307a15.263,15.263,0,0,0,1.782.091,14.776,14.776,0,0,0,9.16-3.152,7.391,7.391,0,0,1-6.9-5.117,9.3,9.3,0,0,0,1.393.114,7.8,7.8,0,0,0,1.942-.251,7.379,7.379,0,0,1-5.916-7.241V13.66A7.431,7.431,0,0,0,4.8,14.6,7.389,7.389,0,0,1,2.513,4.728a20.972,20.972,0,0,0,15.213,7.721,8.329,8.329,0,0,1-.183-1.69A7.385,7.385,0,0,1,30.312,5.711a14.526,14.526,0,0,0,4.683-1.782,7.358,7.358,0,0,1-3.244,4.066A14.791,14.791,0,0,0,36,6.853a15.86,15.86,0,0,1-3.7,3.815Z"
                    transform="translate(0 -3.381)"
                    fill="#fff"
                  />
                </svg>
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
            <div style={{ position: "absolute", top: "30px", right: "25px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15.325"
                height="15.328"
                viewBox="0 0 15.325 15.328"
              >
                <path
                  id="Icon_ionic-ios-search"
                  data-name="Icon ionic-ios-search"
                  d="M19.645,18.712l-4.262-4.3a6.074,6.074,0,1,0-.922.934l4.234,4.274a.656.656,0,0,0,.926.024A.66.66,0,0,0,19.645,18.712ZM10.61,15.4A4.8,4.8,0,1,1,14,13.991,4.766,4.766,0,0,1,10.61,15.4Z"
                  transform="translate(-4.5 -4.493)"
                  fill="rgba(255,255,255,0.39)"
                />
              </svg>
            </div>
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
    </>
  );
};

export default LandingPage;
