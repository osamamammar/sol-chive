import { keyframes } from "styled-components";

export const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;
export const fadeInAndTranslate = keyframes`
    from {
      opacity: 0;
      transform: translateY(100px);

    }
    to {
      opacity: 1;
      transform: translateY(0)

    }
`;
