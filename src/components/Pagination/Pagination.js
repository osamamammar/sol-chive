import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { PaginationContainer } from "./Pagination.styles";

const Pagination = ({ totalPages, currentPage, auth }) => {
  const location = useLocation();

  const sortByDate =
    new URLSearchParams(location.search).get("sortbydate") || "";
  const source = new URLSearchParams(location.search).get("source") || "";
  const tag = new URLSearchParams(location.search).get("tag") || "";
  const perfectSolution =
    new URLSearchParams(location.search).get("perfectsolution") || "";

  return (
    totalPages > 1 && (
      <PaginationContainer className="list-card">
        {[...Array(totalPages).keys()].map((x) => (
          <Link
            key={x + 1}
            to={`?page=${x + 1}${
              sortByDate ? `&sortbydate=${sortByDate}` : ""
            }${source ? `&source=${source}` : ""}${tag ? `&tag=${tag}` : ""}${
              perfectSolution ? `&perfectsolution=${perfectSolution}` : ""
            }`}
            className={`${x + 1 === currentPage ? "active" : ""}`}
          >
            <li>{x + 1}</li>
          </Link>
        ))}
      </PaginationContainer>
    )
  );
};

export default Pagination;
