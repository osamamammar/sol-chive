import React from "react";
import { Link } from "react-router-dom";
import { addNew, copyIcon } from "../../assets";
import { useCopyURL } from "../../hooks";
import {
  DivContainer,
  HeaderContainer,
  HeaderTitle,
  LabelTitle,
  SelectStyled,
  SelectWrapper,
} from "./FilterCards.styles";

const FilterCards = ({ title, addNewBtn }) => {
  const [handelCopyURL, copied] = useCopyURL();

  return (
    <HeaderContainer>
      {title === "Library" ? (
        <DivContainer>
          <HeaderTitle>{title}</HeaderTitle>
          <button className="btn" type="button" onClick={handelCopyURL}>
            {copied ? "Copied ! " : "Copy profile URL "}
            <img src={copyIcon} alt="copy-Icon" width={12} height={12} />
          </button>
        </DivContainer>
      ) : (
        <HeaderTitle>{title}</HeaderTitle>
      )}
      <DivContainer gap="15px">
        <SelectWrapper>
          <SelectWrapper>
            <LabelTitle htmlFor="sortBy">sort by:</LabelTitle>

            <SelectStyled name="sortBy" id="sortBy" defaultValue={"-select-"}>
              <option value="-select-" disabled>
                -select-
              </option>
              <option value="date">Date</option>
              <option value="latest">Latest</option>
            </SelectStyled>
          </SelectWrapper>

          <SelectWrapper>
            <LabelTitle width={"unset"} htmlFor="filterBy">
              filter by:
            </LabelTitle>

            <SelectStyled
              name="filterBy"
              id="filterBy"
              defaultValue={"-select-"}
            >
              <option value="-select-" disabled>
                -select-
              </option>
              <option value="sourse">Sourse</option>
              <option value="tag">Tag</option>
              <option value="perfect solution">Perfect Solution</option>
            </SelectStyled>
          </SelectWrapper>
        </SelectWrapper>

        {title === "Library" && addNewBtn && (
          <Link to={"/add-new"} className="btn">
            Add new
            <img src={addNew} alt="add-new" />
          </Link>
        )}
      </DivContainer>
    </HeaderContainer>
  );
};

export default FilterCards;
