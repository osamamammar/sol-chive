import React from "react";
import { searchIcon } from "../../assets";
import {
  IconForInput,
  LabelForInput,
  SearchFormContainer,
  SearchInput,
} from "./SearchForm.styles";

const SearchForm = () => {
  return (
    <SearchFormContainer>
      <LabelForInput htmlFor="email">find someone problem solver</LabelForInput>
      <IconForInput>
        <img src={searchIcon} alt="search-icon" width={15} height={15} />
      </IconForInput>
      <SearchInput
        type="email"
        name="email"
        id="email"
        placeholder="Enter email"
        required
      />

      <button className="main-btn" type="submit">
        Find now
      </button>
    </SearchFormContainer>
  );
};

export default SearchForm;
