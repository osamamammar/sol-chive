import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { btnCancel, btnSubmit } from "../../assets";
import {
  AddNewProblemForm,
  CTABtn,
  ErrorMessage,
  Footer,
  Loader,
  ProfileHeader,
} from "../../components";
import { getOneSolutionDetailsForAuthActions } from "../../redux";
import {
  DivWrapper,
  HeaderContainer,
  HeaderTitle,
  MainContainer,
} from "./AddNewProblemPage.styles";

const AddNewProblemPage = () => {
  const location = useLocation();
  const { fromViewSolutionPage, solutionId, fromHome } = location.state || {
    fromViewSolutionPage: false,
    fromHome: false,
  };

  const { loading, data, error } = useSelector(
    (state) => state.getOneSolutionDetailsForAuth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data && (fromViewSolutionPage || fromHome)) {
      dispatch(getOneSolutionDetailsForAuthActions({ solutionId }));
    }
  }, [data, dispatch, solutionId, fromViewSolutionPage, fromHome]);

  return (
    <>
      <ProfileHeader />
      <MainContainer>
        {loading ? (
          <Loader height={"108px"} />
        ) : error ? (
          <ErrorMessage insetBlockStart={"100px"}>{error}</ErrorMessage>
        ) : (
          <>
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

                <Link to={-1} className="red-btn" rel="noreferrer noopener">
                  Cancel
                  <img
                    src={btnCancel}
                    alt="cancel-icon"
                    width={14}
                    height={14}
                  />
                </Link>
              </DivWrapper>
            </HeaderContainer>

            <AddNewProblemForm data={data} solutionId={solutionId} />
          </>
        )}
      </MainContainer>
      <Footer />
    </>
  );
};

export default AddNewProblemPage;
