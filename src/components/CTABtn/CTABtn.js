import React from "react";

const CTABtn = ({ children, imgIcon, type, alt, className, width, height }) => {
  return (
    <button type={type} className={className}>
      {children}{" "}
      <img src={imgIcon} alt={`${alt}-icon}`} width={width} height={height} />
    </button>
  );
};

export default CTABtn;
