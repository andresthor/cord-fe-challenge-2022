import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

import * as colors from '../../colors';
import Arrow from '../../images/arrow-icon.png';
import SearchWhite from '../../images/search-icon-white.png';
import Hamburger from '../../images/hamburger-icon.png';

export default function SideNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  const navBar = useRef();

  useEffect(() => {
    // Detect clicks outside the navBar and close it
    const handleClick = (e) => {
      if (isOpen && navBar?.current) {
        const ref = navBar.current;
        if (!ref.contains(e.target)) {
          close();
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isOpen]);

  return (
    <>
      <HamburgerMenu>
        <img src={Hamburger} alt={'Menu'} width="50" onClick={toggleOpen} />
      </HamburgerMenu>
      <SideNavBarCont isOpen={isOpen} ref={navBar}>
        <SideNavHeader>
          Wesley
          <Close onClick={close}>
            <img src={Arrow} alt="Arrow pointing down" />
          </Close>
        </SideNavHeader>
        <SideNavMainLink to="/discover" exact>
          Discover
          <img src={SearchWhite} alt="Magnifying glass" />
        </SideNavMainLink>
        <SideNavSectionTitle>
          <HeaderText>Watched</HeaderText>
        </SideNavSectionTitle>
        <NavLink to="/watched/movies">Movies</NavLink>
        <NavLink to="/watched/tv-shows">Tv Shows</NavLink>
        <SideNavSectionTitle>
          <HeaderText>Saved</HeaderText>
        </SideNavSectionTitle>
        <NavLink to="/saved/movies">Movies</NavLink>
        <NavLink to="/saved/tv-shows">Tv Shows</NavLink>
      </SideNavBarCont>
    </>
  );
}

const HamburgerMenu = styled.div`
  position: absolute;
  padding: 35px;
  cursor: pointer;
  width: fit-content;

  @media all and (min-width: 1024px) {
    display: none;
  }
`;

const Close = styled.div`
  cursor: pointer;
`;

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 280px;
  height: 100%;
  background-color: ${colors.sideNavBar};
  color: white;
  transition: 0.5s;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? 0 : '-280px')};

  @media all and (min-width: 1024px) {
    left: 0;
  }
`;

const SectionsStyles = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

const SideNavMainLink = styled(Link)`
  ${SectionsStyles}

  &:hover, &:focus-visible {
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
  }
`;

const SideNavHeader = styled.div`
  ${SectionsStyles}
`;

const SideNavSectionTitle = styled.div`
  font-size: 1.6em;
  font-weight: 700;
  padding: 25px 0 15px 35px;
`;

const HeaderText = styled.div`
  padding: 0 35px 10px 0;
  border-bottom: 1px solid ${colors.lightBackground};
`;

const NavLink = styled(Link)`
  display: block;
  color: white;
  opacity: 0.8;
  font-size: 1.2em;
  padding: 10px 35px;

  &:hover,
  &:focus-visible {
    opacity: 1;
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
    opacity: 1;
  }
`;
