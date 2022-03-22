import styled from "styled-components";

export const AsideContainer = styled.aside`
  background-color: var(--color-gray);
  margin-block-start: 60px;
  border-radius: 9px;
  padding-block: 40px 16px;
  padding-inline: 15px;
  min-height: 275px;
  align-self: flex-start;
  position: sticky;
  inset-block-start: 60px;
  @media (max-width: 1080px) {
    position: relative;
    inset-block-start: 0;
  }
`;
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

export const ProfilePicture = styled.img`
  position: absolute;
  background-color: white;
  inset-block-start: -38px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

export const ProfileName = styled.h2`
  font-size: 20px;
`;

export const UserEmail = styled.p`
  font-size: 14px;
  font-weight: 300;
`;

export const DescriptionWrapper = styled.div`
  margin-block-start: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

export const TitleDescription = styled.h3`
  font-size: 16px;
  gap: 2px;
`;
export const BodyDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: clip;
  font-size: 12px;
  font-weight: 300;
  opacity: 80%;
`;

export const ContactsLink = styled.a`
  color: white;
  font-size: 12px;
  font-weight: 300;
  opacity: 80%;
  &:hover {
    text-decoration: underline;
  }
`;

export const SolvedWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
`;
