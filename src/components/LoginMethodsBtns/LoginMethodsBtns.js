import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  facebookIcon,
  githubIcon,
  googleIcon,
  twitterIcon,
} from "../../assets";
import { userLoginWithGoogleActions } from "../../redux";
import { SocialBtn, SocialList } from "./LoginMethodsBtns.styles";

const LoginMethodsBtns = () => {
  const { loading, data, error } = useSelector(
    (state) => state.userLoginWithGoogle
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLoginWithGoogleActions());
  }, [dispatch]);

  return (
    <>
      <SocialList>
        <li>
          <SocialBtn href="" rel="noopener noreferrer">
            <img
              src={facebookIcon}
              alt="facebook-login"
              width={35}
              height={35}
            />
          </SocialBtn>
        </li>
        <li>
          <SocialBtn href="" rel="noopener noreferrer">
            <img src={githubIcon} alt="github-login" width={35} height={35} />
          </SocialBtn>
        </li>
        <li>
          <SocialBtn
            href={`${data ? data.redirectUrl : ""}`}
            rel="noopener noreferrer"
          >
            <img src={googleIcon} alt="google-login" width={35} height={35} />
          </SocialBtn>
        </li>
        <li>
          <SocialBtn href="" rel="noopener noreferrer">
            <img src={twitterIcon} alt="twitter-login" width={35} height={35} />
          </SocialBtn>
        </li>
      </SocialList>
    </>
  );
};

export default LoginMethodsBtns;
