import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  padding-block: 16px;
  border-radius: 11px;
  margin-block-end: 100px;
  > div > textarea {
    background-color: var(--color-gray);
  }
  > div > textarea.yourSolution {
    max-height: 378px;
  }
  > div > textarea.perfectSolution {
    max-height: 227px;
  }
`;
