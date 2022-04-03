import React from "react";
import { Footer, LogoHeader } from "../../components";
import { Link } from "react-router-dom";
import {
  DivContainer,
  ErrorMessage,
  MainContainer,
} from "./NotFoundPage.styles";

const NotFoundPage = () => {
  return (
    <>
      <LogoHeader></LogoHeader>
      <MainContainer>
        <DivContainer className="upper_message-container">
          <ErrorMessage className="upper_message">
            Something's <span>Missing.</span>
          </ErrorMessage>
          <Link className="btn" to={"/"} rel="noreferrer noopener">
            Go Back
          </Link>
        </DivContainer>

        <DivContainer>
          <ErrorMessage
            preferSize={"40vw"}
            size={"131px"}
            className="number_error-yellow"
          >
            404{" "}
            <span className="message_notfound" size={"30px"} weight={"500"}>
              {" "}
              Page Not Found
            </span>
          </ErrorMessage>
        </DivContainer>
      </MainContainer>

      <Footer></Footer>
    </>
  );
};

export default NotFoundPage;
