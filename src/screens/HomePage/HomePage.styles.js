import styled from "styled-components";

export const MainContainer = styled.main`
  width: 75%;
  max-width: 1344px;
  margin-block: 0;
  margin-inline: auto;
  min-height: calc(100vh - 104px);
  position: relative;
  inset-block-start: 24px;
  @media (max-width: 600px) {
    width: 85%;
  }
`;
