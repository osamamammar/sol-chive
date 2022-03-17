import React from "react";
import { HeaderContainer, LogoTitle, MarkYellow } from "./LogoHeader.styles";

const LogoHeader = () => {
  return (
    <HeaderContainer>
      <LogoTitle>
        <MarkYellow>Sol</MarkYellow>-chive
      </LogoTitle>
    </HeaderContainer>
  );
};

export default LogoHeader;
