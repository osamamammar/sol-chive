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

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
`;
export const LabelForInput = styled.label`
  font-weight: 300;
`;
export const SearchInput = styled.input`
  background-color: var(--color-gray);
  border: none;
  border-radius: 9px;
  padding: 5px 10px;
  font-size: 16px;
  width: 90%;
  margin-bottom: 10px;

  ::placeholder {
    color: var(--color-placeholder);
    opacity: 0.44;
  }
`;
export const IconForInput = styled.div`
  position: absolute;
  top: 30px;
  right: 25px;
`;
