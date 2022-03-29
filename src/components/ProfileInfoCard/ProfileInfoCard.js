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

const ProfileInfoCard = ({ buttonDisplay }) => {
  return (
    <AsideContainer>
      <MainWrapper>
        <ProfilePicture
          src={profilePic}
          alt="profile-picture"
          width={70}
          height={70}
        ></ProfilePicture>
        <ProfileName>John Doe</ProfileName>
        <UserEmail>johndoe@solchive.com</UserEmail>
      </MainWrapper>

      <DescriptionWrapper>
        <TitleDescription>About:</TitleDescription>
        <BodyDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          accusantium incidunt facilis assumenda debitis consequuntur ipsam est
          illum, eius modi ipsa porro et unde velit perspiciatis iste laborum
          quisquam a.
        </BodyDescription>

        <TitleDescription>Contacts:</TitleDescription>
        <ContactsLink
          href="https://wa.me/+201115790092"
          target="_blank"
          rel="noopenner noreferrer"
        >
          +201115790092
        </ContactsLink>

        <ContactsLink
          href="https://www.linkedin.com/johndoe"
          target="_blank"
          rel="noopenner noreferrer"
        >
          linkedin.com/johndoe
        </ContactsLink>

        <ContactsLink
          href="https://www.github.com/johndoe"
          target="_blank"
          rel="noopenner noreferrer"
        >
          github.com/johndoe
        </ContactsLink>

        <SolvedWrapper>
          <TitleDescription>Solved:</TitleDescription>
          <BodyDescription>7 problems</BodyDescription>
        </SolvedWrapper>
        {buttonDisplay === "true" ? (
          <Link to={"/edit-info"} className="edit_info btn">
            Edit info
            <img src={blackPen} alt="pen-icon" width={12} height={12} />
          </Link>
        ) : null}
      </DescriptionWrapper>
    </AsideContainer>
  );
};

export default ProfileInfoCard;
