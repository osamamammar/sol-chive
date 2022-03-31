import React from "react";
import { Link } from "react-router-dom";
import { externalLink } from "../../assets";
import {
  Card,
  CardContainer,
  CardExternalLink,
  CardHeader,
  CardTitle,
  ProblemSource,
  SolvedDate,
  Tags,
  ViewLinkWrapper,
} from "./SolutionCard.styles";

const SolutionCard = ({ solutions }) => {
  return (
    <>
      <CardContainer>
        {solutions.length > 0
          ? solutions.map((solution) => (
              <Card key={solution.id}>
                <CardHeader>
                  <CardTitle>{solution.title}</CardTitle>
                  <CardExternalLink
                    src={externalLink}
                    alt="external-link"
                    width={21}
                    height={21}
                  />
                </CardHeader>

                <ProblemSource>source {solution.source}</ProblemSource>

                <Tags>
                  {solution.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </Tags>

                <SolvedDate>solved {solution.date}</SolvedDate>

                <ViewLinkWrapper>
                  <Link
                    className="btn"
                    to={`/solution/${solution.title}/${solution.id}`}
                  >
                    View
                  </Link>
                </ViewLinkWrapper>
              </Card>
            ))
          : null}
      </CardContainer>
    </>
  );
};

export default SolutionCard;
