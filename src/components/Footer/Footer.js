import React from "react";
import { githubIcon } from "../../assets";
import {
  FooterHeader,
  FooterIcon,
  FooterLink,
  FooterWrapper,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterHeader>Developed by Unknown Squad Team</FooterHeader>

      <FooterHeader>
        <FooterLink
          href="https://github.com/osamamammar"
          rel="noreferrer noopener"
          target={`_blank`}
        >
          Github
          <FooterIcon src={githubIcon} alt="github-icon"></FooterIcon>
        </FooterLink>
      </FooterHeader>
    </FooterWrapper>
  );
};

export default Footer;
