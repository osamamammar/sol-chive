import styled from "styled-components";

export const FormContainer = styled.form`
  background-color: var(--color-gray);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  padding-inline: 31px;
  padding-block: 16px;
  border-radius: 11px;
  margin-block-end: 100px;
  > button.btn {
    padding-inline: 20px;
    padding-block: 6px;
    border-radius: 6px;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }
  @media (max-width: 450px) {
    padding-inline: 11px;
  }

`;
export const DivWrapper = styled.div`
  width: 100%;
  > label,
  input,
  textarea {
    width: 100%;
    border-radius: 8px;
  }
  > input,
  textarea {
    margin-block-start: 6px;
    padding-inline: 13px;
    padding-block: 7px;
    background-color: var(--color-primary);
    border: none;
    caret-color: var(--color-text-light);
    color: var(--color-text-light);
    ::placeholder {
      font-size: 14px;
    }
  }
  > textarea {
    resize: none;
  }
  > label > span {
    font-size: 14px;
  }
`;
