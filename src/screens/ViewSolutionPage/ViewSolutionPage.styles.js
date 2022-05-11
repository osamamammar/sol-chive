import styled from "styled-components";

export const MainContainer = styled.main`
  position: relative;
  width: 75%;
  max-width: 1344px;
  margin-block: 0;
  margin-inline: auto;
  min-height: calc(
    100vh - ${(props) => (props.height ? props.height : "103px")}
  );
  @media (max-width: 472px) {
    width: 88%;
  } ;
`;
