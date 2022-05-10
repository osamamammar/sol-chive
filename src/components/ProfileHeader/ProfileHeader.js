import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cross, home, logOut, menu, profilePictureSmall } from "../../assets";
import { useToggle } from "../../hooks";
import { getBasicInfoActions, userLogoutActions } from "../../redux";
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
  const handleLogout = () => {
    dispatch(userLogoutActions());
  };
  useEffect(() => {
    if (!basicInfo) {
      dispatch(getBasicInfoActions());
    }
  }, [dispatch, basicInfo]);

  return (
    <HeaderContainer>
      <DivWrapper>
        <Logo size={"25px"} weight={"bold"} margin={"unset"}></Logo>

        <Navbar>
          <Link to={"/home"} rel="noreferrer noopener">
            <HomeIcon
              src={home}
              alt="home"
              width={31}
              height={31}
              title="go to home"
            />
          </Link>
          <Link to={"/profile"} rel="noreferrer noopener">
            <MyProfileContainer>
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
                {basicInfo &&
                  basicInfo.name &&
                  `${basicInfo.name.split(" ")[0]}'s Profile`}
              </p>
            </MyProfileContainer>
          </Link>

          <Link to={"/"} rel="noreferrer noopener" onClick={handleLogout}>
            <img
              src={logOut}
              alt="logout"
              width={31}
              height={31}
              title="logout"
            />
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
              <HomeIcon
                src={home}
                alt="home"
                width={31}
                height={31}
                title="go to home"
              />
            </Link>
            <Link to={"/"} rel="noreferrer noopener">
              <MyProfileContainer>
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
              </MyProfileContainer>
            </Link>

            <Link to={"/"} rel="noreferrer noopener" onClick={handleLogout}>
              <img
                src={logOut}
                alt="logout"
                width={31}
                height={31}
                title="logout"
              />
            </Link>
          </NavbarToggled>
        )}
      </DivWrapper>
    </HeaderContainer>
  );
};

export default ProfileHeader;
