import React, { useState } from "react";
import { copyIcon } from "../../assets";
import { useCopyURL } from "../../hooks";
import AddNewBtn from "../AddNewBtn/AddNewBtn";
import {
  DivContainer,
  HeaderContainer,
  HeaderTitle,
  LabelTitle,
  SelectStyled,
  SelectWrapper,
} from "./FilterCards.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { checkAuth } from "../../utils";

const FilterCards = ({ title, addNewBtn, homePage, data, email }) => {
  const [handelCopyURL, copied] = useCopyURL({ email });
  const location = useLocation();
  const navigate = useNavigate();
  const Auth = checkAuth("isLoggedIn");

  const [sortbydate, setSortbydate] = useState(
    new URLSearchParams(location.search).get("sortbydate") || ""
  );
  const [perfectSolution, setPerfectSolution] = useState(
    new URLSearchParams(location.search).get("perfectsolution") || ""
  );

  return (
    <HeaderContainer>
      {(title === "Library" && homePage) || title === "Solutions" ? (
        <HeaderTitle>{title}</HeaderTitle>
      ) : (
        <DivContainer>
          <HeaderTitle>{title}</HeaderTitle>
          <button className="btn" type="button" onClick={handelCopyURL}>
            {copied ? "Copied ! " : "Copy profile URL "}
            <img src={copyIcon} alt="copy-Icon" width={12} height={12} />
          </button>
        </DivContainer>
      )}
      <DivContainer gap="15px">
        {data && data.solutions.length > 0 ? (
          <SelectWrapper>
            <SelectWrapper>
              <LabelTitle htmlFor="sortbydate">sort by date:</LabelTitle>

              <SelectStyled
                name="sortbydate"
                id="sortbydate"
                value={sortbydate}
                onChange={(e) => {
                  setSortbydate(e.target.value);
                  navigate({
                    search: `?page=1${
                      e.target.value ? `&sortbydate=${e.target.value}` : ""
                    }${
                      perfectSolution
                        ? `&perfectsolution=${perfectSolution}`
                        : ""
                    }`,
                  });
                }}
              >
                <option value="" defaultValue={""}>
                  Default
                </option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </SelectStyled>
            </SelectWrapper>
            {Auth && (
              <SelectWrapper>
                <LabelTitle width={"unset"} htmlFor="perfectsolution">
                  perfect solution:
                </LabelTitle>

                <SelectStyled
                  name="perfectsolution"
                  id="perfectsolution"
                  value={perfectSolution}
                  onChange={(e) => {
                    setPerfectSolution(e.target.value);
                    navigate({
                      search: `?page=1${
                        sortbydate ? `&sortbydate=${sortbydate}` : ""
                      }${
                        e.target.value
                          ? `&perfectsolution=${e.target.value}`
                          : ""
                      }`,
                    });
                  }}
                >
                  <option value="" defaultValue={""}>
                    Default
                  </option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </SelectStyled>
              </SelectWrapper>
            )}
          </SelectWrapper>
        ) : null}
        {title === "Library" && addNewBtn && <AddNewBtn />}
      </DivContainer>
    </HeaderContainer>
  );
};

export default FilterCards;
