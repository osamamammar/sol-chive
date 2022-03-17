import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LogoTitle = styled.h1`
  font-size: 30px;
  font-weight: 500;
  margin: 20px 0;
`;

export const MarkYellow = styled.span`
  color: var(--color-yellow);
`;

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
