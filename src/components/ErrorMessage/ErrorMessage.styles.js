import styled from "styled-components";

export const DivWrapper = styled.div`
  width: 78%;
  max-width: 1344px;

  background-color: var(--color-bg-error);
  position: absolute;
  inset-inline-start: 0;
  inset-inline-end: 0;
  inset-block-start: 30px;
  margin-inline: auto;
  padding-inline: 5px;
  padding-block: 15px 15px;
  border-radius: 10px;
`;

export const TextError = styled.p`
  color: var(--color-danger);
  text-align: center;
`;
