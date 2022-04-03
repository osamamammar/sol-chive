import React from "react";
import { Link, useLocation } from "react-router-dom";
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

            <Link to={-1} className="red-btn">
              Cancel
              <img src={btnCancel} alt="cancel-icon" width={14} height={14} />
            </Link>
          </DivWrapper>
        </HeaderContainer>

        <AddNewProblemForm />
      </MainContainer>
      <Footer />
    </>
  );
};

export default AddNewProblemPage;
