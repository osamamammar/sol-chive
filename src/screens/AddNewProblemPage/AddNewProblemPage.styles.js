import styled from "styled-components";

export const MainContainer = styled.main`
  width: 75%;
  max-width: 1344px;
  margin-block: 0;
  margin-inline: auto;
  min-height: calc(100vh - 128px);
  @media (max-width: 450px) {
    width: 88%;
  } ;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block-start: 24px;
  margin-block-end: 20px;
  flex-wrap: wrap;
  gap: 8px;
`;
export const HeaderTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;
export const DivWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  > a.red-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding-inline: 16px;
    padding-block: 4px;
    border-radius: 6px;
    font-size: 12px;
  }
`;
