import React from "react";
import { useLocation } from "react-router-dom";
import { btnCancel, btnSubmit } from "../../assets";
import {
  AddNewProblemForm,
  CTABtn,
  Footer,
  ProfileHeader,
} from "../../components";
import {
  DivWrapper,
  HeaderContainer,
  HeaderTitle,
  MainContainer,
} from "./AddNewProblemPage.styles";

const AddNewProblemPage = () => {
  const location = useLocation();
  const { fromViewSolutionPage } = location.state || {
    fromViewSolutionPage: false,
  };

  return (
    <>
      <ProfileHeader />
      <MainContainer>
        <HeaderContainer>
          <HeaderTitle>
            {fromViewSolutionPage ? "Edit Problem" : "Add New"}
          </HeaderTitle>

          <DivWrapper>
            <CTABtn
              type={"submit"}
              alt={"submit"}
              imgIcon={btnSubmit}
              className={"btn"}
              width={"13.17"}
              height={"9.52"}
            >
              Submit
            </CTABtn>
            <CTABtn
              type={"button"}
              alt={"cancel"}
              imgIcon={btnCancel}
              className={"red-btn"}
              width={"14"}
              height={"14"}
            >
              Cancel
            </CTABtn>
          </DivWrapper>
        </HeaderContainer>

        <AddNewProblemForm />
      </MainContainer>
      <Footer />
    </>
  );
};

export default AddNewProblemPage;
