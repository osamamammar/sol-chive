import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchIcon } from "../../assets";
import {
  IconForInput,
  LabelForInput,
  SearchFormContainer,
  SearchInput,
} from "./SearchForm.styles";

const SearchForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    navigate({
      pathname: `/search/${email}`,
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
