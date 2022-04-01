import React from "react";
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
  return (
    <>
      <ProfileHeader />
      <MainContainer>
        <HeaderContainer>
          <HeaderTitle>Add New</HeaderTitle>

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
