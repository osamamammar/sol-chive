import styled from "styled-components";

export const CardContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  gap: 12px;
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.li`
  background-color: var(--color-gray);
  border-radius: 10px;
  padding-inline: 14px;
  padding-block: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a.external-link {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CardTitle = styled.h5`
  font-size: 16px;
`;

export const CardExternalLink = styled.img`
  width: 21px;
  height: 21px;
  padding-inline: 6.1px 5.7px;
  padding-block: 5.9px;
  border-radius: 7px;
  background-color: var(--color-primary);
`;
export const ProblemSource = styled.p`
  font-size: ${(props) => (props.size ? props.size : "12px")};
  font-weight: 300;
  color: var(--color-placeholder);
`;

export const Tags = styled.p`
  font-size: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  color: var(--color-placeholder);
  > span {
    border: 1px solid;
    padding-inline: 8px;
    padding-block: 2px;
    border-radius: 8px;
    background-color: rgba(232, 237, 223, 0.11);
  }
`;
export const SolvedDate = styled(ProblemSource)``;

export const ViewLinkWrapper = styled.div`
  > a {
    border-radius: 6px;
    padding-inline: 22px;
    padding-block: 3px;
    font-size: 15px;
  }
`;
