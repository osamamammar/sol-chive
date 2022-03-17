import React from "react";
import { searchIcon } from "../../assets";
import { IconForInput, LabelForInput, SearchInput } from "./SearchForm.styles";

const SearchForm = () => {
  return (
    <SearchForm>
      <LabelForInput htmlFor="email">find someone problem solver</LabelForInput>
      <IconForInput>
        <img src={searchIcon} alt="search-login" width={15} height={15} />
      </IconForInput>
      <SearchInput
        type="email"
        name="email"
        id="email"
        placeholder="Enter email"
      />

      <button className="btn" type="submit">
        Find now
      </button>
    </SearchForm>
  );
};

export default SearchForm;
