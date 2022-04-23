import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cross, home, logOut, menu, profilePictureSmall } from "../../assets";
import { useToggle } from "../../hooks";
import { getBasicInfoActions } from "../../redux";
import Logo from "../Logo/Logo";
import {
  DivWrapper,
  HeaderContainer,
} from "../SearchHeader/SearchHeader.styles";
import {
  HomeIcon,
  MenuHamburger,
  MyProfileContainer,
  Navbar,
  NavbarToggled,
} from "./ProfileHeader.styles";

const ProfileHeader = () => {
  const [display, toggle] = useToggle(false);

  const { data: basicInfo } = useSelector((state) => state.getBasicInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBasicInfoActions());
  }, [dispatch]);

  return (
    <HeaderContainer>
      <DivWrapper>
        <Logo size={"25px"} weight={"bold"} margin={"unset"}></Logo>

        <Navbar>
          <Link to={"/home"} rel="noreferrer noopener">
            <HomeIcon src={home} alt="home" width={31} height={31} />
          </Link>
          <MyProfileContainer>
            <Link to={"/profile"} rel="noreferrer noopener">
              <img
                src={basicInfo && basicInfo.picture}
                alt="profile"
                width={28}
                height={28}
                className="profile_picture-small"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = profilePictureSmall;
                }}
              />
              <p>
                {basicInfo && basicInfo.name
                  ? `${basicInfo.name.split(" ")[0]}'s Profile`
                  : "error"}
              </p>
            </Link>
          </MyProfileContainer>
          <Link to={"/"} rel="noreferrer noopener">
            <img src={logOut} alt="logout" width={31} height={31} />
          </Link>
        </Navbar>

        <MenuHamburger onClick={display}>
          {toggle ? (
            <img src={cross} alt="menu" width={25} height={25} />
          ) : (
            <img src={menu} alt="menu" width={25} height={25} />
          )}
        </MenuHamburger>

        {toggle && (
          <NavbarToggled>
            <Link to={"/"} rel="noreferrer noopener">
              <HomeIcon src={home} alt="home" width={31} height={31} />
            </Link>
            <MyProfileContainer>
              <Link to={"/"} rel="noreferrer noopener">
                <img
                  src={basicInfo && basicInfo.picture}
                  alt="profile"
                  width={28}
                  height={28}
                  className="profile_picture-small"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = profilePictureSmall;
                  }}
                />
                <p>
                  {basicInfo && basicInfo.name
                    ? `${basicInfo.name.split(" ")[0]}'s Profile`
                    : "error"}
                </p>
              </Link>
            </MyProfileContainer>
            <Link to={"/"} rel="noreferrer noopener">
              <img src={logOut} alt="logout" width={31} height={31} />
            </Link>
          </NavbarToggled>
        )}
      </DivWrapper>
    </HeaderContainer>
  );
};

export default ProfileHeader;
