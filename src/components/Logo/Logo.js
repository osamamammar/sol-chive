import React from "react";
import { Link } from "react-router-dom";
import { LogoTitle, MarkYellow } from "./Logo.styles";

const Logo = ({ size, weight, margin }) => {
  return (
    <Link to={"/"} style={{ display: "contents" }}>
      <LogoTitle size={size} weight={weight} margin={margin}>
        <MarkYellow>Sol</MarkYellow>-chive
      </LogoTitle>
    </Link>
  );
};

export default Logo;
