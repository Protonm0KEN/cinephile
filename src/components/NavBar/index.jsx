import React from 'react';
import styled from "styled-components";
import {Container} from "../Container";
import {NavLink} from "react-router-dom";
import LogoImg from "../../assets/images/Logo.svg"
import {navLinks} from "../../routes";
import searchIcon from "../../assets/images/search.svg"
const Nav = styled.nav`
  background: rgba(20, 20, 20, 0.5);
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  z-index: 100000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`

const NavWrapper = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
  
`

const NavList = styled.ul`
    display: flex;
  column-gap: 30px;
`
const NavLinks = styled(NavLink)`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: rgba(255, 255, 255, 0.6);
  font-family: "RalewayBold";
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 0;
  position: relative;
  &.active{
    color: white;
    &::after{
      content: "";
      display: block;
      background: #149A03;
      border-radius: 15px;
      width: 15px;
      height: 15px;

      position: absolute;
      bottom: 10px;
    }
  }
  &:hover{
    color: #FFFFFF;
  }
`
const NavBar = () => {
    return (
        <Nav>
            <Container>
                <NavWrapper>
                    <NavLink to={"/"}>
                        <img src = {LogoImg} alt = ""/>
                    </NavLink>
                    <NavList>
                        {navLinks.map((navlink) => {
                            return(
                                <li key={navlink.url}>
                                    <NavLinks
                                        to={navlink.path}
                                    >
                                        {navlink.title}
                                    </NavLinks>
                                </li>
                            )
                        })}
                        <NavLinks to = {"/search"}><img src={searchIcon} alt=""/></NavLinks>
                    </NavList>
                </NavWrapper>
            </Container>
        </Nav>
    );
};

export default NavBar;