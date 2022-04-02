import React from "react";
import { Button } from "./CTAbtn.styles";

const CTABtn = ({ children, imgIcon, type, alt, className, width, height }) => {
  return (
    <Button type={type} className={className}>
      {children}{" "}
      <img src={imgIcon} alt={`${alt}-icon}`} width={width} height={height} />
    </Button>
  );
};

export default CTABtn;
