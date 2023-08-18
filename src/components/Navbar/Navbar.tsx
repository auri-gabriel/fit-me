import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavbarContainer = styled.nav`
  background-color: white;
  padding: 4rem 18rem;

  @media (max-width: 1440px){
    padding: 4rem 10rem;
  }

  @media (max-width: 1024px){
    padding: 4rem 5rem;
  }
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const NavbarToolbar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;

  @media (max-width: 1024px){
    display: none;
  }
`;

const SearchBar = styled.input`
  border-radius: 10px;
  border: 1px solid #808080;
  opacity: 0.75;
  background: #FFF;
  color: #808080;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 450px;
  padding: 15px 25px;
`;

const BagIcon = styled.img`
`;

const BurgerIcon = styled.img`
  display: none;

  @media (max-width: 1024px){
    display: flex;
  }
`;

const SignInButton = styled.button`
  display: flex;
  padding: 16px 25px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #202020;
  border: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  a {
    color: white;
    text-decoration: none;
  }
`;

const HomeNavbar: React.FC = () => {
    return (
        <NavbarContainer>
            <NavbarContent>
                <Link to="/">
                    <Logo src="/src/assets/logo-color.svg" alt="Logo" />
                </Link>
                <NavbarToolbar>
                    <SearchBar placeholder="Enter item or restaurant you are looking for" />
                    <BagIcon src="/src/assets/Bag.svg" alt="Bag" />
                    <SignInButton><Link to="/login">Sign In</Link></SignInButton>
                </NavbarToolbar>
                <BurgerIcon src="/src/assets/Burger.svg" />
            </NavbarContent>
        </NavbarContainer>
    );
};

const DefaultNavbar: React.FC = () => {
    return (
        <NavbarContainer>
            <NavbarContent>
                <Logo src="/src/assets/logo-color.svg" alt="Logo" />
            </NavbarContent>
        </NavbarContainer>
    );
};

export {HomeNavbar, DefaultNavbar};

