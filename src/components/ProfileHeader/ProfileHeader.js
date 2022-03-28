import React from "react";
import Logo from "../Logo/Logo";
import {
  DivWrapper,
  HeaderContainer,
} from "../SearchHeader/SearchHeader.styles";

const ProfileHeader = () => {
  return (
    <HeaderContainer>
      <DivWrapper>
        <Logo size={"25px"} weight={"bold"} margin={"unset"}></Logo>
      </DivWrapper>
    </HeaderContainer>
  );
};

export default ProfileHeader;
