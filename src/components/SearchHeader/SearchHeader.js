import React from "react";
import { searchIcon, searchIconV2 } from "../../assets";
import { useToggle } from "../../hooks";
import Logo from "../Logo/Logo";
import {
  DivWrapper,
  FindBtn,
  HeaderContainer,
  IconForInput,
  JoinBtn,
  LabelForInput,
  SearchFormContainer,
  SearchInput,
  ToggleEmailInput,
  ToggleSearch,
  ToggleSearchFormContainer,
} from "./SearchHeader.styles";

const SearchHeader = () => {
  const [display, toggle] = useToggle(false);

  return (
    <HeaderContainer>
      <DivWrapper>
        <Logo size={"25px"} weight={"bold"} margin={"unset"}></Logo>

        <SearchFormContainer>
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
          />

          <FindBtn type="submit">search</FindBtn>
        </SearchFormContainer>

        <ToggleSearch onClick={display}>
          <img src={searchIconV2} alt="search-icon" width={15} height={15} />
        </ToggleSearch>

        <JoinBtn>Join or login</JoinBtn>

        {toggle && (
          <ToggleSearchFormContainer>
            <LabelForInput htmlFor="email" className="visually-hidden">
              find:
            </LabelForInput>

            <ToggleEmailInput
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              required
            />

            <FindBtn type="submit">search</FindBtn>
          </ToggleSearchFormContainer>
        )}
      </DivWrapper>
    </HeaderContainer>
  );
};

export default SearchHeader;
