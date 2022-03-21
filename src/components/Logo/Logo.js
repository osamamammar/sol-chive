import React from "react";
import { LogoTitle, MarkYellow } from "./Logo.styles";

const Logo = ({ size, weight, margin }) => {
  return (
    <LogoTitle size={size} weight={weight} margin={margin}>
      <MarkYellow>Sol</MarkYellow>-chive
    </LogoTitle>
  );
};

export default Logo;
