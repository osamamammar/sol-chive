import styled from "styled-components";
import { fadeIn } from "../../animations";

export const HeaderContainer = styled.header`
  background-color: var(--color-gray);
`;

export const DivWrapper = styled.div`
  width: ${({ width }) => (width ? width : "85%")};
  max-width: 1344px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding-block: 10px;
  @media (max-width: 330px) {
    width: 95%;
  }
  > a {
    border-radius: 8px;
    padding-block: 5px;
    padding-inline: 15px;
    font-size: 12px;
    @media (max-width: 286px) {
      margin-block: 0;
      margin-inline: auto;
    }
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
  padding-block: 5px;
  padding-inline: 10px;

  font-size: 15px;
  caret-color: var(--color-text-light);
  color: var(--color-text-light);

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
  inset-inline-end: 80px;
  inset-block-end: 2px;
  @media (max-width: 615px) {
    inset-inline-end: 78px;
    inset-block-end: 2px;
  }
`;

export const FindBtn = styled.button`
  background-color: var(--color-yellow);
  color: var(--color-primary);
  border: none;
  border-radius: 8px;
  padding-block: 5px;
  padding-inline: 15px;
  font-size: 12px;
  cursor: pointer;
  transition: ease-in-out 0.2s all;
  :hover {
    background-color: var(--color-yellow-dark);
  }
  @media (max-width: 330px) {
    padding-block: 5px;
    padding-inline: 10px;
  }
`;

export const ToggleSearch = styled(FindBtn)`
  display: none;
  @media (max-width: 540px) {
    display: block;
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
  animation: ${fadeIn} 1s;
  @media (min-width: 541px) {
    display: none;
  }
`;

export const ToggleEmailInput = styled.input`
  width: 100%;
  max-width: 212px;
  background-color: var(--color-gray-dark);
  border: none;
  border-radius: 9px;
  padding-block: 5px;
  padding-inline: 10px;
  font-size: 15px;
  caret-color: var(--color-text-light);
  color: var(--color-text-light);

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
  padding-block: 5px;
  padding-inline: 15px;
  font-size: 12px;
  cursor: pointer;
  transition: ease-in-out 0.2s all;

  :hover {
    background-color: var(--color-yellow-dark);
  }

  @media (max-width: 330px) {
    padding-block: 5px;
    padding-inline: 10px;
  }
`;
