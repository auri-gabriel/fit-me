import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const FooterContainer = styled.footer`
  background-color: #FC8019;
  color: white;
  padding: 10rem 20rem;

  @media (max-width: 1440px){
    padding: 5rem 10rem;
  }

  @media (max-width: 1024px){
    padding: 5rem 5rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const Links = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;

  @media (max-width: 1024px) {
    gap: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 1rem;
    gap: 1rem;
  }
`;

const LinkItem = styled.li`
  font-size: 16px;

  a {
    color: white;
    text-decoration: none;
  }
`;

const ContactInfo = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  
  .number{
    font-size: 16px;
    font-weight: bold;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 2rem;
`;

const SocialIcon = styled.img`
  height: 24px;
  width: 24px;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <TopRow>
          <Logo src="src/assets/logo.svg" alt="Logo" />
          <Links>
            <LinkItem><Link to="/about">About us</Link></LinkItem>
            <LinkItem><Link to="/delivery">Delivery</Link></LinkItem>
            <LinkItem><Link to="/help">Help & Support</Link></LinkItem>
            <LinkItem><Link to="/terms">T&C</Link></LinkItem>
          </Links>
          <ContactInfo>
            Contact:
            <span className="number">+91&nbsp;1234567899</span>
          </ContactInfo>
        </TopRow>
        <SocialIcons>
          <SocialIcon src="/src/assets/facebook-icon.svg" alt="Facebook" />
          <SocialIcon src="/src/assets/instagram-icon.svg" alt="Instagram" />
          <SocialIcon src="/src/assets/twitter-icon.svg" alt="Twitter" />
        </SocialIcons>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
