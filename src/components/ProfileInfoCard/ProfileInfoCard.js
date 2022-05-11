import React from "react";
import { Link } from "react-router-dom";
import { BlackPen, profilePic } from "../../assets";
import {
  AsideContainer,
  BodyDescription,
  ContactsLink,
  DescriptionWrapper,
  MainWrapper,
  ProfileName,
  ProfilePicture,
  SolvedWrapper,
  TitleDescription,
  UserEmail,
} from "./ProfileInfoCard.styles";

const ProfileInfoCard = ({ data, buttonDisplay }) => {
  return (
    <AsideContainer>
      <MainWrapper>
        <ProfilePicture
          src={data && data.picture}
          alt="profile-picture"
          width={70}
          height={70}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = profilePic;
          }}
        ></ProfilePicture>
        <ProfileName>{data && data.name}</ProfileName>
        <UserEmail>{data && data.email}</UserEmail>
      </MainWrapper>

      <DescriptionWrapper>
        <TitleDescription>About:</TitleDescription>
        <BodyDescription>{data && data.about}</BodyDescription>

        <TitleDescription>Contacts:</TitleDescription>
        <ContactsLink
          href="https://wa.me/+201115790092"
          target="_blank"
          rel="noopenner noreferrer"
        >
          {data && data.contacts}
        </ContactsLink>

        <SolvedWrapper>
          <TitleDescription>Solved:</TitleDescription>
          <BodyDescription>
            {data && data.problem_count} problems
          </BodyDescription>
        </SolvedWrapper>
        {buttonDisplay === "true" ? (
          <Link to={"/edit-info"} className="edit_info btn">
            Edit info
            <BlackPen width={12} height={12} />
          </Link>
        ) : null}
      </DescriptionWrapper>
    </AsideContainer>
  );
};

export default ProfileInfoCard;
