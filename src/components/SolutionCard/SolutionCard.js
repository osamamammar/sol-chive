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

const SolutionCard = () => {
  const solutions = [
    {
      id: 1,
      title: "Median of Two Sorted Arrays",
      source: "leetcode",
      tags: ["Algorithms", "DataBase", "Hash"],
      date: "2 days ago",
    },
    {
      id: 2,
      title: "Median of Two Sorted Arrays",
      source: "leetcode",
      tags: ["Algorithms", "DataBase", "Hash"],
      date: "2 days ago",
    },
    {
      id: 3,
      title: "Median of Two Sorted Arrays",
      source: "leetcode",
      tags: ["Algorithms", "DataBase", "Hash"],
      date: "2 days ago",
    },
    {
      id: 4,
      title: "Median of Two Sorted Arrays",
      source: "leetcode",
      tags: ["Algorithms", "DataBase", "Hash"],
      date: "2 days ago",
    },
    {
      id: 5,
      title: "Median of Two Sorted Arrays",
      source: "leetcode",
      tags: ["Algorithms", "DataBase", "Hash"],
      date: "2 days ago",
    },
    {
      id: 6,
      title: "Median of Two Sorted Arrays",
      source: "leetcode",
      tags: ["Algorithms", "DataBase", "Hash"],
      date: "2 days ago",
    },
    {
      id: 7,
      title: "Median of Two Sorted Arrays",
      source: "leetcode",
      tags: ["Algorithms", "DataBase", "Hash"],
      date: "2 days ago",
    },
    {
      id: 8,
      title: "Median of Two Sorted Arrays",
      source: "leetcode",
      tags: ["Algorithms", "DataBase", "Hash"],
      date: "2 days ago",
    },
    {
      id: 9,
      title: "Median of Two Sorted Arrays",
      source: "leetcode",
      tags: ["Algorithms", "DataBase", "Hash"],
      date: "2 days ago",
    },
    {
      id: 10,
      title: "Median of Two Sorted Arrays",
      source: "leetcode",
      tags: ["Algorithms", "DataBase", "Hash"],
      date: "2 days ago",
    },
    {
      id: 11,
      title: "Median of Two Sorted Arrays",
      source: "leetcode",
      tags: ["Algorithms", "DataBase", "Hash"],
      date: "2 days ago",
    },
    {
      id: 12,
      title: "Median of Two Sorted Arrays",
      source: "leetcode",
      tags: ["Algorithms", "DataBase", "Hash"],
      date: "2 days ago",
    },
    {
      id: 13,
      title: "Median of Two Sorted Arrays",
      source: "leetcode",
      tags: ["Algorithms", "DataBase", "Hash"],
      date: "2 days ago",
    },
  ];

  return (
    <>
      <CardContainer>
        {solutions.map((solution) => (
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
        ))}
      </CardContainer>
    </>
  );
};

export default SolutionCard;
