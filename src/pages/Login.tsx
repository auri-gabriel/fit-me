import React from 'react';
import styled from 'styled-components';
import TextField from '../components/Forms/Textfield';
import PrimaryButton from '../components/Buttons/PrimaryButton';

const LoginFormContainer = styled.div`
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

  @media (max-width: 1440px){
    padding: 0 10rem;
  }

  @media (max-width: 1024px){
    padding: 0 2rem;
  }
`;

const RegisterLink = styled.p`
  margin-top: 15px;
  text-align: center;

  a {
    font-weight: bold;
    color: black;
    text-decoration: none;
  }
`;

const Login: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <h2>Login</h2>
        <hr />
      </HeaderContainer>
      <LoginFormContainer>
        <form>
          <TextField label="Username" />
          <TextField label="Password" type="password" />
          <RegisterLink>
            Don't have an account? <a href="#">Register</a>
          </RegisterLink>
          <PrimaryButton type="submit">
            Login
          </PrimaryButton>
        </form>
      </LoginFormContainer>
    </>
  );
};

export default Login;

