import styled from "styled-components";

export const LogoTitle = styled.h1`
  font-size: ${({ size }) => (size ? size : "30px")};
  font-weight: ${({ weight }) => (weight ? weight : "bold")};
  margin: ${({ margin }) => (margin ? margin : "15px 0")};
`;

export const MarkYellow = styled.span`
  color: var(--color-yellow);
`;
