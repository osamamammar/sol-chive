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

export const NoResultsContainer = styled.main`
  min-height: calc(100vh - 133px);
`;
export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-inline: 10px;
  max-width: 400px;
  margin-inline: auto;
  margin-block-start: 30px;
  gap: 20px;
`;
