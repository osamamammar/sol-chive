import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchIcon, searchIconV2 } from "../../assets";
import { useToggle } from "../../hooks";
import Logo from "../Logo/Logo";
import {
  DivWrapper,
  FindBtn,
  HeaderContainer,
  IconForInput,
  LabelForInput,
  SearchFormContainer,
  SearchInput,
  ToggleEmailInput,
  ToggleSearch,
  ToggleSearchFormContainer,
} from "./SearchHeader.styles";

const SearchHeader = () => {
  const [display, toggle] = useToggle(false);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate({
      pathname: `/search/${email}`,
    });
  };

  return (
    <HeaderContainer>
      <DivWrapper>
        <Logo size={"25px"} weight={"bold"} margin={"unset"}></Logo>
        <SearchFormContainer onSubmit={submitHandler}>
          <LabelForInput htmlFor="email">find:</LabelForInput>

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

          <FindBtn type="submit">search</FindBtn>
        </SearchFormContainer>

        <ToggleSearch onClick={display}>
          <img src={searchIconV2} alt="search-icon" width={15} height={15} />
        </ToggleSearch>

        <Link to={"/"} className="btn" rel="noreferrer noopener">
          Join or login
        </Link>

        {toggle && (
          <ToggleSearchFormContainer onSubmit={submitHandler}>
            <LabelForInput htmlFor="email" className="visually-hidden">
              find:
            </LabelForInput>

            <ToggleEmailInput
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <FindBtn type="submit">search</FindBtn>
          </ToggleSearchFormContainer>
        )}
      </DivWrapper>
    </HeaderContainer>
  );
};

export default SearchHeader;
