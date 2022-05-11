import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { btnSubmit } from "../../assets";
import { addNewSolutionForAuthActions } from "../../redux";
import CTABtn from "../CTABtn/CTABtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import YourPerfectSolutionForm from "../YourAndPerfectSolutionForm/YourAndPerfectSolutionForm";
import { DivWrapper, FormContainer } from "./AddNewProblrm.styles";

const AddNewProblemForm = ({ data }) => {
  const navigate = useNavigate();
  const [problemTitle, setProblemTitle] = useState("");
  const [problemLink, setProblemLink] = useState("");
  const [tags, setTags] = useState([]);
  const [yourSolution, setYourSolution] = useState("");
  const [perfectSolution, setPerfectSolution] = useState("");

  const {
    loading,
    error,
    success,
    data: addSolutionData,
  } = useSelector((state) => state.addNewSolutionForAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      setProblemTitle(data && data.title);
      setProblemLink(data && data.link);
      setTags(data && data.tags);
    }
  }, [data]);

  const childToParent = ({ yourSolution, perfectSolution }) => {
    setYourSolution(yourSolution);
    setPerfectSolution(perfectSolution);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
  };
  return (
    <>
      {error && (
        <ErrorMessage
          position="unset"
          marginBlockStart={"15px"}
          width={"100%"}
          marginBlockEnd={"15px"}
        >
          {error}
        </ErrorMessage>
      )}
      <FormContainer onSubmit={handleSubmit}>
        <DivWrapper>
          <label htmlFor="problemTitle">Problem Title</label>
          <input
            type="text"
            name="problemTitle"
            id="problemTitle"
            placeholder="Problem title"
            required
            value={problemTitle}
            onChange={(e) => setProblemTitle(e.target.value)}
          />
        </DivWrapper>

        <DivWrapper>
          <label htmlFor="problemLink">Problem Link</label>
          <input
            type="url"
            name="problemLink"
            id="problemLink"
            placeholder="https://example.com"
            required
            value={problemLink}
            onChange={(e) => setProblemLink(e.target.value)}
          />
        </DivWrapper>

        <DivWrapper>
          <label htmlFor="tags">
            Tags <span>(optional)</span>
          </label>
          <input
            type="text"
            name="tags"
            id="tags"
            placeholder="Enter tags seperated by comma `( , )`"
            value={tags}
            onChange={(e) =>
              setTags(e.target.value.split(",").map((tag) => tag.trim()))
            }
          />
        </DivWrapper>
        <YourPerfectSolutionForm
          data={data}
          childToParent={childToParent}
        ></YourPerfectSolutionForm>

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
      </FormContainer>
    </>
  );
};

export default AddNewProblemForm;
