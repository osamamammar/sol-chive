import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--color-gray);
`;

export const DivWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 10px 0;
  @media (max-width: 330px) {
    width: 95%;
    justify-content: center;
  }
`;

export const SearchFormContainer = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  @media (max-width: 540px) {
    display: none;
  }
`;

export const LabelForInput = styled.label`
  font-weight: 300;
  @media (max-width: 660px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  background-color: var(--color-gray-dark);
  border: none;
  border-radius: 9px;
  padding: 5px 10px;
  font-size: 15px;

  ::placeholder {
    color: var(--color-placeholder);
    opacity: 0.44;
  }
  @media (max-width: 615px) {
    width: 150px;
  }
`;

export const IconForInput = styled.div`
  position: absolute;
  right: 80px;
  bottom: 2px;
  @media (max-width: 615px) {
    right: 78px;
    bottom: 2px;
  }
`;

export const FindBtn = styled.button`
  background-color: var(--color-yellow);
  color: var(--color-primary);
  border: none;
  border-radius: 8px;
  padding: 5px 15px;
  font-size: 12px;
  cursor: pointer;
  transition: ease-in-out 0.2s all;
  :hover {
    background-color: var(--color-yellow-dark);
  }
  @media (max-width: 330px) {
    padding: 5px 10px;
  }
`;

export const ToggleSearch = styled(FindBtn)`
  display: none;
  @media (max-width: 540px) {
    display: block;
  }
  @media (max-width: 275px) {
    order: 1;
  }
`;

export const ToggleSearchFormContainer = styled.form`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
  @media (min-width: 541px) {
    display: none;
  }
  @media (max-width: 275px) {
    order: 2;
  }
`;

export const ToggleEmailInput = styled.input`
  width: 100%;
  max-width: 212px;
  background-color: var(--color-gray-dark);
  border: none;
  border-radius: 9px;
  padding: 5px 10px;
  font-size: 15px;

  ::placeholder {
    color: var(--color-placeholder);
    opacity: 0.44;
  }
`;

export const JoinBtn = styled.button`
  background-color: var(--color-yellow);
  color: var(--color-primary);
  border: none;
  border-radius: 8px;
  padding: 5px 15px;
  font-size: 12px;
  cursor: pointer;
  transition: ease-in-out 0.2s all;
  :hover {
    background-color: var(--color-yellow-dark);
  }
  @media (max-width: 275px) {
    order: 3;
  }
  @media (max-width: 330px) {
    padding: 5px 10px;
  }
`;
