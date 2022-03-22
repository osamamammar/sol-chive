import styled from "styled-components";

export const MainContainer = styled.main`
  width: 85%;
  max-width: 1344px;
  margin: 0 auto;
  display: grid;
  gap: 15px;
  grid-template-columns: minmax(200px, 239px) minmax(300px, 1fr);
  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;
