import React from "react";
import {
  facebookIcon,
  githubIcon,
  googleIcon,
  twitterIcon,
} from "../../assets";
import { SocialBtns, SocialList } from "./LoginMethodsBtns.styles";

const LoginMethodsBtns = () => {
  return (
    <SocialList>
      <li>
        <SocialBtns>
          <img src={facebookIcon} alt="facebook-login" width={35} height={35} />
        </SocialBtns>
      </li>
      <li>
        <SocialBtns>
          <img src={githubIcon} alt="github-login" width={35} height={35} />
        </SocialBtns>
      </li>
      <li>
        <SocialBtns>
          <img src={googleIcon} alt="google-login" width={35} height={35} />
        </SocialBtns>
      </li>
      <li>
        <SocialBtns>
          <img src={twitterIcon} alt="twitter-login" width={35} height={35} />
        </SocialBtns>
      </li>
    </SocialList>
  );
};

export default LoginMethodsBtns;
