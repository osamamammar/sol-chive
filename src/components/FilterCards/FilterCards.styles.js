import styled from "styled-components";

export const HeaderTitle = styled.h4`
  font-size: 20px;
  font-weight: 300;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  @media (max-width: 805px) {
    justify-content: flex-start;
  }
`;

export const LabelTitle = styled.label`
  font-weight: 300;
`;

export const SelectStyled = styled.select`
  position: relative;
  background-color: var(--color-gray);
  color: white;
  border: 2px solid var(--color-yellow);
  border-radius: 6px;
  width: 97px;
  font-size: 14px;
  cursor: pointer;
`;

export const DivWrapper = styled.div`
  display: contents;
`;
