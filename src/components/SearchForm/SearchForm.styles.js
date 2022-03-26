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
  padding: 5px 10px;
  font-size: 16px;
  width: 90%;
  margin-bottom: 10px;
  caret-color: var(--color-text-light);

  ::placeholder {
    color: var(--color-placeholder);
    opacity: 0.44;
  }
`;
export const IconForInput = styled.div`
  position: absolute;
  top: 30px;
  right: 25px;
`;
