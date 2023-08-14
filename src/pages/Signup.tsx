import React from 'react';
import styled from 'styled-components';
import TextField from '../components/Forms/Textfield';
import PrimaryButton from '../components/Buttons/PrimaryButton';

const SignupFormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;
  }
`;

const HeaderContainer = styled.div`
  padding: 0 18rem;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 3rem;

  hr {
    background-color: #808080;
    border: none;
    height: 1px;
  }

  @media (max-width: 1440px) {
    padding: 0 10rem;
  }

  @media (max-width: 1024px) {
    padding: 0 2rem;
  }
`;

const SignupLink = styled.p`
  margin-top: 15px;
  text-align: center;

  a {
    font-weight: bold;
    color: black;
    text-decoration: none;
  }
`;

const Signup: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <h2>Sign Up</h2>
        <hr />
      </HeaderContainer>
      <SignupFormContainer>
        <form>
          <TextField label="Full Name" />
          <TextField label="Username" />
          <TextField label="Email" type="email" />
          <TextField label="Password" type="password" />
          <TextField label="Confirm Password" type="password" />
          <SignupLink>
            Already have an account? <a href="#">Login</a>
          </SignupLink>
          <PrimaryButton type="submit">Sign Up</PrimaryButton>
        </form>
      </SignupFormContainer>
    </>
  );
};

export default Signup;

