import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 130px);
  gap: 6px;
  position: relative;
`;

export const WelcomeTitle = styled.h2`
  font-size: 40px;
`;

export const WelcomeDescription = styled.p`
  font-size: 20px;
`;
