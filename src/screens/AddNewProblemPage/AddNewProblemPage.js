import React from "react";
import { btnCancel, btnSubmit } from "../../assets";
import { AddNewProblemForm, Footer, ProfileHeader } from "../../components";
import {
  DivWrapper,
  HeaderContainer,
  HeaderTitle,
  MainContainer,
} from "./AddNewProblemPage.styles";

const AddNewProblemPage = () => {
  return (
    <>
      <ProfileHeader />
      <MainContainer>
        <HeaderContainer>
          <HeaderTitle>Add New</HeaderTitle>

          <DivWrapper>
            <button type="submit" className="btn">
              submit <img src={btnSubmit} alt="submit-icon" />
            </button>
            <button className="red-btn">
              Cancel <img src={btnCancel} alt="cancel-icon" />
            </button>
          </DivWrapper>
        </HeaderContainer>

        <AddNewProblemForm />
      </MainContainer>
      <Footer />
    </>
  );
};

export default AddNewProblemPage;
