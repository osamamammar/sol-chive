import styled from "styled-components";

export const MainContainer = styled.main`
  width: 85%;
  max-width: 1344px;
  margin-block: 0;
  margin-inline: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
`;

export const DivContainer = styled.div`
  &.upper_message-container {
    align-self: flex-start;
    position: absolute;
    inset-block-start: 20px;
  }
  > a {
    padding-inline: 18px;
    padding-block: 2px;
    font-size: clamp(18px, 1.5vw, 20px);
  }
`;

export const ErrorMessage = styled.p`
  font-size: clamp(
    20px,
    ${({ preferSize }) => (preferSize ? preferSize : "12vw")},
    ${({ size }) => (size ? size : "49px")}
  );
  font-weight: ${({ weight }) => (weight ? weight : "bold")};
  color: var(--color-text-light);
  &.upper_message {
    margin-block-end: 15px;
  }
  &.number_error-yellow {
    color: var(--color-yellow);
    text-align: center;
  }
  > span {
    display: block;
  }
  > span.message_notfound {
    font-size: clamp(18px, 10vw, 30px);
    font-weight: 500;
    text-align: center;
    color: var(--color-text-light);
  }
`;

export const NavigateAnchor = styled.a`
  max-width: 107px;
  font-size: 20px;
`;
