import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: var(--color-gray);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 53px;
  gap: 4px;
`;
export const FooterHeader = styled.p`
  font-size: 14px;
`;
export const FooterLink = styled.a`
  color: var(--color-text-light);
`;
export const FooterIcon = styled.img`
  display: inline-block;
  margin-inline-start: 5px;
`;
