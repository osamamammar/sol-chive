import styled from "styled-components";

export const PaginationContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex: 1;
  margin-block-start: 20px;
  flex-wrap: wrap;

  > li {
    > a {
      font-size: 20px;
      font-weight: bold;
      color: var(--color-gray-dark);
      display: inline-block;
      padding-inline: 15px;
      padding-block: 10px;
      border-radius: 5px;
      background-color: var(--color-yellow);
      opacity: 0.5;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        opacity: 1;
      }
      &.active {
        opacity: 1;
      }
    }
  }
`;
