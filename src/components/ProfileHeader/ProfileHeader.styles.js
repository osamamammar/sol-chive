import styled from "styled-components";
import { fadeIn } from "../../animations";

export const Navbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  > a {
    display: contents;
  }
  @media (max-width: 395px) {
    gap: 10px;
  }
  @media (max-width: 370px) {
    display: none;
  }
`;
export const HomeIcon = styled.img`
  padding-inline: 7.4px 6.5px;
  padding-block: 4px 8px;
  border-radius: 9px;
  background-color: var(--color-primary);
`;
export const MyProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  > a {
    display: contents;
    > img.profile_picture-small {
      width: 28px;
      height: 28px;
      background-color: var(--color-text-light);
      border-radius: 50%;
    }
  }
`;

export const MenuHamburger = styled.button`
  display: none;
  @media (max-width: 370px) {
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
  margin-block: 0;
  margin-inline: auto;
  gap: 20px;
  animation: ${fadeIn} 1s;
  > a {
    display: contents;
  }
  @media (min-width: 371px) {
    display: none;
  }
`;
