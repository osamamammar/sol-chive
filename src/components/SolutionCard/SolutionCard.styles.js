import styled from "styled-components";

export const CardContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  gap: 12px;
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.li`
  background-color: var(--color-gray);
  border-radius: 10px;
`;
