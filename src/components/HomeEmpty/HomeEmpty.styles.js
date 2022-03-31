import styled from "styled-components";

export const DivWrapper = styled.div`
  background-color: var(--color-gray);
  border-radius: 10px;
  margin-block: 0;
  margin-inline: auto;
  position: absolute;
  width: 100%;
  top: 50px;
  > p {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    padding-block: 28px;
    padding-inline: 20px;
    font-size: 20px;
    text-align: center;
  }
`;
