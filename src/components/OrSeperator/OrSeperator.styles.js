import styled from "styled-components";

export const OrSeperator = styled.div`
  width: 100%;
`;

export const Line = styled.span`
  display: flex;
  font-size: 20px;
  align-items: center;
  gap: 10px;
  ::before,
  ::after {
    content: "";
    flex-grow: 1;
    border: 1px solid #e8eddf;
  }
`;
