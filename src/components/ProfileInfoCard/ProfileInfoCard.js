import React from "react";
import { Link } from "react-router-dom";
import { blackPen, profilePic } from "../../assets";
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
  const { name, picture, email, about, contacts, problem_count } = data;
  return (
    <AsideContainer>
      <MainWrapper>
        <ProfilePicture
          src={picture}
          alt="profile-picture"
          width={70}
          height={70}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = profilePic;
          }}
        ></ProfilePicture>
        <ProfileName>{name}</ProfileName>
        <UserEmail>{email}</UserEmail>
      </MainWrapper>

      <DescriptionWrapper>
        <TitleDescription>About:</TitleDescription>
        <BodyDescription>{about}</BodyDescription>

        <TitleDescription>Contacts:</TitleDescription>
        <ContactsLink
          href="https://wa.me/+201115790092"
          target="_blank"
          rel="noopenner noreferrer"
        >
          {contacts}
        </ContactsLink>

        <SolvedWrapper>
          <TitleDescription>Solved:</TitleDescription>
          <BodyDescription>{problem_count} problems</BodyDescription>
        </SolvedWrapper>
        {buttonDisplay === "true" ? (
          <Link
            to={"/edit-info"}
            className="edit_info btn"
            rel="noreferrer noopener"
          >
            Edit info
            <img src={blackPen} alt="pen-icon" width={12} height={12} />
          </Link>
        ) : null}
      </DescriptionWrapper>
    </AsideContainer>
  );
};

export default ProfileInfoCard;
