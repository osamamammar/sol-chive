import React from "react";
import { SectionContainer } from "./SolutionCardsContainer.styles";

const SolutionCardsContainer = ({ children, marginBlockStart }) => {
  return (
    <SectionContainer marginBlockStart={marginBlockStart}>
      {children}
    </SectionContainer>
  );
};

export default SolutionCardsContainer;
