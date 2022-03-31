import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: inline-flex;
  padding-inline: 16px;
  padding-block: 4px;
  font-size: 12px;
  border-radius: 6px;
  > img {
    margin-inline-start: 5px;
  }
`;
