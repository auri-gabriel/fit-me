import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '../components/Forms/Textfield';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import axios from 'axios';

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
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    axios.get('https://parseapi.back4app.com/login', {
      params: {
        username: loginData.username,
        password: loginData.password
      },
      headers: {
        'X-Parse-Application-Id': 'lrAPveloMl57TTby5U0S4rFPBrANkAhLUll8jFOh',
        'X-Parse-REST-API-Key': '8aqUBWOjOplfA6lstntyYsYVkt3RzpVtb8qU5x08',
        'X-Parse-Revocable-Session': '1'
      }
    })
    .then(response => {
      console.log('Login successful:', response);
    })
    .catch(error => {
      console.error('Error logging in:', error);
    });
  };

  return (
    <>
      <HeaderContainer>
        <h2>Login</h2>
        <hr />
      </HeaderContainer>
      <LoginFormContainer>
        <form onSubmit={handleLogin}>
          <TextField label="Username" name="username" value={loginData.username} onChange={handleInputChange} />
          <TextField label="Password" type="password" name="password" value={loginData.password} onChange={handleInputChange} />
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
