import React from "react";
import {
  DivWrapper,
  HeaderTitle,
  LabelTitle,
  SelectStyled,
  SelectWrapper,
} from "./FilterCards.styles";

const FilterCards = () => {
  return (
    <DivWrapper>
      <HeaderTitle>Solutions</HeaderTitle>

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
