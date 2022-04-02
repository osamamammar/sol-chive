import React from "react";
import { Link } from "react-router-dom";
import { blackPen, externalLink, trash } from "../../assets";
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

const ProblemDetails = () => {
  return (
    <SectionContainer>
      <DivWrapper>
        <CardHeader>
          <CardTitle>Median of Two Sorted Arrays</CardTitle>
          <ProblemSource>source LeetCode</ProblemSource>
        </CardHeader>
        <Tags>
          <span>algorithm</span>
          <span>algorithm</span>
          <span>algorithm</span>
        </Tags>

        <SolvedDate size={"14px"}>solved 2 days ago</SolvedDate>
        <Link to={"/"} className="link">
          Open The problem <img src={externalLink} alt="external-link-icon" />
        </Link>
      </DivWrapper>

      <DivWrapper
        flexDirection={"row"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={"12px"}
      >
        <CTABtn
          imgIcon={blackPen}
          type={"button"}
          alt={"edit"}
          className={"btn"}
          width={"12.03"}
          height={"11.59"}
        >
          Edit
        </CTABtn>
        <CTABtn
          imgIcon={trash}
          type={"button"}
          alt={"delete"}
          className={"red-btn"}
          width={"10.25"}
          height={"11.27"}
        >
          Delete
        </CTABtn>
      </DivWrapper>
    </SectionContainer>
  );
};

export default ProblemDetails;
