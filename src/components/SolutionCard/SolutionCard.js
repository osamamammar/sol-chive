import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  BlackPen,
  exist,
  externalLink,
  notExist,
  redTrash,
} from "../../assets";
import { deleteOneSolutionForAuthActions } from "../../redux";
import { checkAuth, diffDays } from "../../utils";
import {
  Card,
  CardContainer,
  CardExternalLink,
  CardHeader,
  CardTitle,
  DivWrapper,
  ProblemSource,
  SolvedDate,
  Tags,
  ViewLinkWrapper,
  PerfectSolution,
} from "./SolutionCard.styles";

const SolutionCard = ({ data, pathName }) => {
  const Auth = checkAuth("isLoggedIn");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <CardContainer>
        {data && data.solutions.length > 0
          ? data &&
            data.solutions.map(
              ({
                solution_id,
                created_on,
                title,
                link,
                source,
                tags,
                perfect_solution,
              }) => (
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
                        title="go to source problem"
                      />
                    </a>
                  </CardHeader>
                  <DivWrapper>
                    <ProblemSource>source {source}</ProblemSource>
                    {Auth && (
                      <Link
                        to={`/edit-problem`}
                        state={{
                          solutionId: solution_id,
                          fromHome: true,
                        }}
                        title="edit problem"
                      >
                        <BlackPen width={12} height={11.6} />
                      </Link>
                    )}
                  </DivWrapper>
                  <Tags>
                    {tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </Tags>

                  <SolvedDate>
                    solved {diffDays(new Date(created_on), new Date())} days ago
                  </SolvedDate>
                  <DivWrapper>
                    <PerfectSolution style={{ flexWrap: "wrap" }}>
                      Contains:
                      {perfect_solution ? (
                        <>
                          <span
                            style={{
                              display: "flex",
                              gap: "5px",
                              flexWrap: "wrap",
                            }}
                          >
                            <img
                              src={exist}
                              alt="exist"
                              title="your solution exist"
                            />
                            <span>my solution</span>
                            <span
                              style={{
                                display: "flex",
                                gap: "5px",
                                flexWrap: "wrap",
                              }}
                            >
                              <img
                                src={exist}
                                alt="exist"
                                title="your perfect solution exist"
                              />
                              <span>perfect solution</span>
                            </span>
                          </span>
                        </>
                      ) : (
                        <>
                          <span
                            style={{
                              display: "flex",
                              gap: "5px",
                              flexWrap: "wrap",
                            }}
                          >
                            <img
                              src={exist}
                              alt="exist"
                              title="your solution exist"
                            />
                            <span>my solution</span>
                            <span
                              style={{
                                display: "flex",
                                gap: "5px",
                                flexWrap: "wrap",
                              }}
                            >
                              <img
                                src={notExist}
                                alt="no-exist"
                                title="your perfect solution not exist"
                              />
                              <span>perfect solution</span>
                            </span>
                          </span>
                        </>
                      )}
                    </PerfectSolution>
                  </DivWrapper>

                  <ViewLinkWrapper>
                    <Link
                      className="btn"
                      to={`/solution/${title}/${solution_id}`}
                      rel="noreferrer noopener"
                    >
                      View
                    </Link>
                    {Auth && (
                      <button title="delete problem">
                        <img
                          src={redTrash}
                          alt="delete-icon"
                          width={11.2}
                          height={12.31}
                          onClick={async (e) => {
                            e.preventDefault();
                            await dispatch(
                              deleteOneSolutionForAuthActions({
                                solutionId: solution_id,
                                navigate,
                              })
                            );
                            pathName === "/home" && window.location.reload();
                          }}
                        />
                      </button>
                    )}
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
