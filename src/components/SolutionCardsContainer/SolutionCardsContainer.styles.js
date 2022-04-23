import styled, { css } from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-block-end: 100px;

  ${(props) =>
    props.marginBlockStart &&
    css`
      margin-block-start: 24px;
    `}
`;
