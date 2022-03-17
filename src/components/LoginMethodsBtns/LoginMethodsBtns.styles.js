import styled from "styled-components";

export const SocialList = styled.ul`
  display: flex;
  margin: 8px 0;
  gap: 20px;
`;
export const SocialBtns = styled.button`
  width: 71px;
  height: 71px;
  border: none;
  padding: 15px;
  border-radius: 9px;
  cursor: pointer;
  background-color: var(--color-gray);
  transition: ease-in-out 0.2s all;
  :hover {
    background-color: var(--color-gray-dark);
  }

  @media (max-width: 355px) {
    width: 64px;
  }
`;
