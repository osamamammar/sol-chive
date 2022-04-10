import styled from "styled-components";

export const SearchFormContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
`;
export const LabelForInput = styled.label`
  font-weight: 300;
`;
export const SearchInput = styled.input`
  background-color: var(--color-gray);
  border: none;
  border-radius: 9px;
  padding-block: 5px;
  padding-inline: 10px;
  font-size: 16px;
  width: 90%;
  margin-block-end: 10px;
  caret-color: var(--color-text-light);
  color: var(--color-text-light);

  ::placeholder {
    color: var(--color-placeholder);
    opacity: 0.44;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px var(--color-gray) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
export const IconForInput = styled.div`
  position: absolute;
  inset-block-start: 30px;
  inset-inline-end: 25px;
`;
