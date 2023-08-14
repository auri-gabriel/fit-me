import React, {useState} from 'react';
import styled from 'styled-components';
import TextField from '../components/Forms/Textfield';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import axios from 'axios';

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
  const [signupData, setSignupData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setSignupData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSignup = (event: React.FormEvent) => {
    event.preventDefault();

    axios.post('https://parseapi.back4app.com/users', {
      username: signupData.username,
      password: signupData.password,
      email: signupData.email,
    }, {
      headers: {
        'X-Parse-Application-Id': 'lrAPveloMl57TTby5U0S4rFPBrANkAhLUll8jFOh',
        'X-Parse-REST-API-Key': '8aqUBWOjOplfA6lstntyYsYVkt3RzpVtb8qU5x08',
        'X-Parse-Revocable-Session': '1',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('Signup successful:', response);
      })
      .catch(error => {
        console.error('Error signing up:', error);
      });
  };

  return (
    <>
      <HeaderContainer>
        <h2>Sign Up</h2>
        <hr />
      </HeaderContainer>
      <SignupFormContainer>
        <form onSubmit={handleSignup}>
          <TextField label="Full Name" name="fullName" value={signupData.fullName} onChange={handleInputChange} />
          <TextField label="Username" name="username" value={signupData.username} onChange={handleInputChange} />
          <TextField label="Email" type="email" name="email" value={signupData.email} onChange={handleInputChange} />
          <TextField label="Password" type="password" name="password" value={signupData.password} onChange={handleInputChange} />
          <TextField label="Confirm Password" type="password" name="confirmPassword" value={signupData.confirmPassword} onChange={handleInputChange} />
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
