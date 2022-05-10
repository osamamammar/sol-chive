import styled from "styled-components";
import { fadeIn } from "../../animations";

export const Navbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  > .cta-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    background-color: transparent;
    transition: all 0.2s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  }
  @media (max-width: 395px) {
    gap: 10px;
  }
  @media (max-width: 449px) {
    display: none;
  }
`;
export const HomeIcon = styled.img`
  padding-inline: 7.4px 6.5px;
  padding-block: 4px 8px;
  border-radius: 9px;
  background-color: var(--color-primary);
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;
export const MyProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  > img.profile_picture-small {
    width: 28px;
    height: 28px;
    background-color: var(--color-text-light);
    border-radius: 50%;
  }
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

export const MenuHamburger = styled.button`
  display: none;
  @media (max-width: 449px) {
    display: block;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    background-color: transparent;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: var(--color-primary);
    }
    &:focus {
      background-color: var(--color-primary);
    }
  }
`;
export const NavbarToggled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-block: 0;
  margin-inline: auto;
  gap: 16px;
  animation: ${fadeIn} 1s;
  > .cta-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    background-color: transparent;
    transition: all 0.2s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  }

  @media (min-width: 450px) {
    display: none;
  }
`;
