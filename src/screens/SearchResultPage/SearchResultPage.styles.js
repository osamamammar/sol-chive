import styled from "styled-components";

export const MainContainer = styled.main`
  width: 85%;
  max-width: 1344px;
  display: grid;
  grid-template-columns: minmax(200px, 239px) minmax(750px, 1fr);
  grid-gap: 20px;
  align-items: start;
  justify-items: center;
  margin-inline: auto;
  min-height: calc(100vh - 104px);

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;
