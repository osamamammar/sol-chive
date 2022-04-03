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
                  <a
                    href="https://www.example.com"
                    target={"_blank"}
                    rel="noreferrer noopener"
                    className="external-link"
                  >
                    <CardExternalLink
                      src={externalLink}
                      alt="external-link"
                      width={21}
                      height={21}
                    />
                  </a>
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
                    rel="noreferrer noopener"
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
