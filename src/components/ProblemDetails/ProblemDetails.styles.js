import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-block-start: 24px;
  flex-wrap: wrap;
  gap: 12px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
`;
export const CardTitle = styled.h2`
  font-size: 20px;
`;
export const DivWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : "flex-start"};

  flex-wrap: wrap;
  gap: ${(props) => (props.gap ? props.gap : "8px")};

  > a.external-link {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background-color: var(--color-gray);
    font-size: 14px;
    border-radius: 7px;
    padding-inline: 14px;
    padding-block: 3px;
    color: var(--color-yellow);
    :hover {
      text-decoration: underline;
    }
  }
  > a.edit-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding-inline: 16px;
    padding-block: 4px;
    border-radius: 6px;
    font-size: 12px;
    min-width: 81.94px;
  }
`;
