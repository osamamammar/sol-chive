import React from "react";
import {
  HeaderTitle,
  LabelTitle,
  SelectStyled,
  SelectWrapper,
} from "./FilterCards.styles";

const FilterCards = () => {
  return (
    <>
      <HeaderTitle>Solutions</HeaderTitle>

      <SelectWrapper>
        <SelectWrapper>
          <LabelTitle htmlFor="sortBy">sort by:</LabelTitle>

          <SelectStyled name="sortBy" id="sortBy">
            <option value="-select-" selected disabled>
              -select-
            </option>
            <option value="date">Date</option>
            <option value="latest">Latest</option>
          </SelectStyled>
        </SelectWrapper>

        <SelectWrapper>
          <LabelTitle htmlFor="filterBy">filter by:</LabelTitle>

          <SelectStyled name="filterBy" id="filterBy">
            <option value="-select-" selected disabled>
              -select-
            </option>
            <option value="sourse">Sourse</option>
            <option value="tag">Tag</option>
            <option value="perfect solution">Perfect Solution</option>
          </SelectStyled>
        </SelectWrapper>
      </SelectWrapper>
    </>
  );
};

export default FilterCards;
