import React from "react";
import { Link } from "react-router-dom";
import { blackPen, externalLink, trash } from "../../assets";
import { diffDays } from "../../utils";
import CTABtn from "../CTABtn/CTABtn";
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

const ProblemDetails = ({ data }) => {
  return (
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
          solved {diffDays(new Date(data && data.created_on), new Date())} days
          ago
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
      {data ? null : (
        <DivWrapper
          flexDirection={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={"12px"}
        >
          <Link
            to={"/add-new-problem"}
            state={{ fromViewSolutionPage: true }}
            className="edit-link btn"
            rel="noreferrer noopener"
          >
            Edit
            <img src={blackPen} alt="edit-icon" />
          </Link>

          <CTABtn
            imgIcon={trash}
            type={"button"}
            alt={"delete-icon"}
            className={"red-btn"}
            width={"10.25"}
            height={"11.27"}
          >
            Delete
          </CTABtn>
        </DivWrapper>
      )}
    </SectionContainer>
  );
};

export default ProblemDetails;
