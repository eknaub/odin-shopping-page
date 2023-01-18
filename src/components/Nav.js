import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import '../App.css'

const Nav = () => {
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector('.header');
    const scrollTop = window.scrollY;
    scrollTop >= 250 ? header.classList.add('scrolled') : header.classList.remove('scrolled');
  };

  return ( 
    <NavBar className='header'>
      <Logo href="/">
        <h1>FortniteShop</h1>
      </Logo>
      <NavBarLinks>
        <NavBarLink to="/">Home</NavBarLink>
        <NavBarLink to="/shop">Shop</NavBarLink>
        <NavBarLink to="/cart">Cart</NavBarLink>
      </NavBarLinks>
    </NavBar>
  )
}

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 10vh;
  background-color: #18181B;
  color: white;
  position: sticky;
  top: 0;
  transition: all 0.25s ease-out;
`;

const NavBarLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.25rem;
  transition: all 0.2s ease-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const NavBarLinks = styled.ul`
  width: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;

const Logo = styled.a`
  font-size: 1.4rem;
  text-decoration: none;
  color: #A970FF;
`;

export default Nav;