import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { btnCancel, btnSubmit } from "../../assets";
import {
  AddNewProblemForm,
  CTABtn,
  ErrorMessage,
  Footer,
  Loader,
  ProfileHeader,
} from "../../components";
import {
  addNewSolutionForAuthActions,
  getOneSolutionDetailsForAuthActions,
  updateSolutionActions,
} from "../../redux";
import {
  DivWrapper,
  HeaderContainer,
  HeaderTitle,
  MainContainer,
} from "./AddNewProblemPage.styles";

const AddNewProblemPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [problemTitle, setProblemTitle] = useState("");
  const [problemLink, setProblemLink] = useState("");
  const [tags, setTags] = useState([]);
  const [yourSolution, setYourSolution] = useState("");
  const [perfectSolution, setPerfectSolution] = useState("");
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

  const submitForm = ({
    problemTitle,
    problemLink,
    tags,
    yourSolution,
    perfectSolution,
  }) => {
    setProblemLink(problemLink);
    setProblemTitle(problemTitle);
    setTags(tags);
    setYourSolution(yourSolution);
    setPerfectSolution(perfectSolution);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.pathname === "/edit-problem") {
      dispatch(
        updateSolutionActions({
          solutionId,
          navigate,
          problemTitle,
          problemLink,
          tags,
          yourSolution,
          perfectSolution,
        })
      );
    } else {
      dispatch(
        addNewSolutionForAuthActions({
          problemTitle,
          problemLink,
          tags,
          yourSolution,
          perfectSolution,
          navigate,
        })
      );
    }
  };

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
                  click={(e) => handleSubmit(e)}
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

            <AddNewProblemForm
              data={data}
              solutionId={solutionId}
              submitForm={submitForm}
            />
          </>
        )}
      </MainContainer>
      <Footer />
    </>
  );
};

export default AddNewProblemPage;
