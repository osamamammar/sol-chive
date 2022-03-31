import styled from "styled-components";

export const MainContainer = styled.main`
  width: 75%;
  max-width: 1344px;
  margin-block: 0;
  margin-inline: auto;
  min-height: calc(100vh - 128px);
  position: relative;
  @media (max-width: 600px) {
    width: 85%;
  }
`;
