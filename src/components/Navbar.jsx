import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import LogoMain from '../assets/kpmg-logo.png';
import { IoPersonOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { BsGlobeAsiaAustralia } from "react-icons/bs";




// Styled Components
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #00338d;
  display: flex;
  align-items: center;
`;

const MenuIcon = styled.div`
  font-size: 24px;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  color: #00338d;
  margin: 0 15px;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #0070c0;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    text-align: center;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

const Icon = styled.div`
  margin: 0 10px;
  font-size: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

// Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavbarContainer>
        <MenuIcon onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuIcon>
        <Logo>
          <img src={LogoMain} alt="KPMG" style={{ height: '40px' }} />
        </Logo>
        <NavLinksContainer isOpen={isOpen}>
        <NavLinks>
          <NavLink to="/insights">Insights</NavLink>
          <NavLink to="/industries">Industries</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/client-stories">Client Stories</NavLink>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/about-us">About us</NavLink>
        </NavLinks>
      </NavLinksContainer>
        <Icons>
        {/* <IoPersonOutline size={20}/>

        <IoSearch size={20}/>

        <BsGlobeAsiaAustralia size={20}/> */}

        </Icons>
      </NavbarContainer>
      
    </>
  );
};

export default Navbar;
