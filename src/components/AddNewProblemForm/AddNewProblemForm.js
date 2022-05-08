import React, { useEffect, useState } from "react";
import { btnSubmit } from "../../assets";
import CTABtn from "../CTABtn/CTABtn";
import YourPerfectSolutionForm from "../YourAndPerfectSolutionForm/YourAndPerfectSolutionForm";
import { DivWrapper, FormContainer } from "./AddNewProblrm.styles";

const AddNewProblemForm = ({ data }) => {
  const [problemTitle, setProblemTitle] = useState("");
  const [problemLink, setProblemLink] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (data) {
      setProblemTitle(data && data.title);
      setProblemLink(data && data.link);
      setTags(data && data.tags);
    }
  }, [data]);

  return (
    <FormContainer>
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
          placeholder="Enter tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </DivWrapper>
      <YourPerfectSolutionForm data={data}></YourPerfectSolutionForm>

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
  );
};

export default AddNewProblemForm;
