import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { getAnonymousUserSolutionsActions } from "../../apis";
import { searchIcon } from "../../assets";
import {
  IconForInput,
  LabelForInput,
  SearchFormContainer,
  SearchInput,
} from "./SearchForm.styles";

const SearchForm = ({ dispatch }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(getAnonymousUserSolutionsActions({ email }));
    navigate({
      pathname: `/search`,
      search: createSearchParams({
        email: email,
      }).toString(),
    });
  };
  return (
    <SearchFormContainer onSubmit={submitHandler}>
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
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="main-btn" type="submit">
        Find now
      </button>
    </SearchFormContainer>
  );
};

export default SearchForm;
