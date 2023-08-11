import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  background-color: white;
  padding: 4rem 18rem;
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

const SearchBar = styled.input`
  /* Styles for the search bar */
`;

const BagIcon = styled.img`
  /* Styles for the bag icon */
`;

const SignInButton = styled.button`
  /* Styles for the sign-in button */
`;

const HomeNavbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo src="src/assets/logo-color.svg" alt="Logo" />
        <SearchBar placeholder="Search..." />
        <BagIcon src="src/assets/bag-icon.svg" alt="Bag" />
        <SignInButton><Link to="/signin">Sign In</Link></SignInButton>
      </NavbarContent>
    </NavbarContainer>
  );
};

const DefaultNavbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo src="src/assets/logo-color.svg" alt="Logo" />
      </NavbarContent>
    </NavbarContainer>
  );
};

export { HomeNavbar, DefaultNavbar };

