import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BlackPen, externalLink, trash } from "../../assets";
import { deleteOneSolutionForAuthActions } from "../../redux";
import { checkAuth, diffDays } from "../../utils";
import CTABtn from "../CTABtn/CTABtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {
  ProblemSource,
  SolvedDate,
  Tags,
} from "../SolutionCard/SolutionCard.styles";
import {
  CardHeader,
  CardTitle,
  DivWrapper,
  SectionContainer,
} from "./ProblemDetails.styles";

const ProblemDetails = ({ data, solutionId }) => {
  const Auth = checkAuth("isLoggedIn");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error } = useSelector(
    (state) => state.deleteOneSolutionForAuth
  );

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteOneSolutionForAuthActions({ solutionId, navigate }));
  };

  return (
    <>
      <SectionContainer>
        <DivWrapper>
          <CardHeader>
            <CardTitle>{data && data.title}</CardTitle>
            <ProblemSource>source {data && data.source}</ProblemSource>
          </CardHeader>
          <Tags>
            {data && data.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </Tags>

          <SolvedDate size={"14px"}>
            solved {diffDays(new Date(data && data.created_on), new Date())}{" "}
            days ago
          </SolvedDate>

          <a
            href={data && data.link}
            className="external-link"
            rel="noreferrer noopener"
            target="_blank"
          >
            Open The problem <img src={externalLink} alt="external-link-icon" />
          </a>
        </DivWrapper>

        {Auth ? (
          <DivWrapper
            flexDirection={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={"12px"}
          >
            <Link
              to={"/edit-problem"}
              state={{ fromViewSolutionPage: true, solutionId: solutionId }}
              className="edit-link btn"
              rel="noreferrer noopener"
            >
              Edit
              <BlackPen width={10} height={11.6} />
            </Link>

            <CTABtn
              imgIcon={trash}
              type={"button"}
              alt={"delete-icon"}
              className={"red-btn"}
              width={"10.25"}
              height={"11.27"}
              click={(e) => handleDelete(e)}
            >
              {loading ? "Deleting..." : "Delete"}
            </CTABtn>
          </DivWrapper>
        ) : null}
      </SectionContainer>
      {error && (
        <ErrorMessage position="unset" marginBlockStart={"15px"} width={"100%"}>
          {error.message}
        </ErrorMessage>
      )}
    </>
  );
};
export default ProblemDetails;
