import React from "react";
import { Link } from "react-router-dom";
import { externalLink } from "../../assets";
import { diffDays } from "../../utils";
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

const SolutionCard = ({ data }) => {
  return (
    <>
      <CardContainer>
        {data && data.solutions.length > 0
          ? data &&
            data.solutions.map(
              ({ solution_id, created_on, title, link, source, tags }) => (
                <Card key={solution_id}>
                  <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <a
                      href={link}
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

                  <ProblemSource>source {source}</ProblemSource>

                  <Tags>
                    {tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </Tags>

                  <SolvedDate>
                    solved {diffDays(new Date(created_on), new Date())} days ago
                  </SolvedDate>

                  <ViewLinkWrapper>
                    <Link
                      className="btn"
                      to={`/solution/${title}/${solution_id}`}
                      rel="noreferrer noopener"
                    >
                      View
                    </Link>
                  </ViewLinkWrapper>
                </Card>
              )
            )
          : null}
      </CardContainer>
    </>
  );
};

export default SolutionCard;
