import React from "react";
import { copyIcon } from "../../assets";
import { useCopyURL } from "../../hooks";
import {
  DivContainer,
  DivWrapper,
  HeaderTitle,
  LabelTitle,
  SelectStyled,
  SelectWrapper,
} from "./FilterCards.styles";

const FilterCards = ({ title }) => {
  const [handelCopyURL, copied] = useCopyURL();

  return (
    <DivWrapper>
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
          <LabelTitle htmlFor="filterBy">filter by:</LabelTitle>

          <SelectStyled name="filterBy" id="filterBy" defaultValue={"-select-"}>
            <option value="-select-" disabled>
              -select-
            </option>
            <option value="sourse">Sourse</option>
            <option value="tag">Tag</option>
            <option value="perfect solution">Perfect Solution</option>
          </SelectStyled>
        </SelectWrapper>
      </SelectWrapper>
    </DivWrapper>
  );
};

export default FilterCards;
