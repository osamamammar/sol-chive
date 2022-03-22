import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 369px));
  gap: 12px;
  margin-block-start: 24px;
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
