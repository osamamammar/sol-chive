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
export const DivContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 22px;
  > button {
    padding-inline: 16px;
    padding-block: 4px;
    border-radius: 6px;
    font-size: 14px;
    color: #212121;
  }
`;

export const Alert = styled.div`
  position: absolute;
  bottom: 30px;
  right: 50px;
  background-color: var(--color-gray);
  padding: 4px;
  border: 1px solid var(--color-yellow);
  border-radius: 10px;
  font-size: 12px;
  @media (min-width: 1080px) {
    bottom: 0px;
    right: -88px;
  }
`;
