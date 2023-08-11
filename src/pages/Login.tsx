import React from 'react';
import styled from 'styled-components';
import TextField from '../components/Forms/Textfield';

const LoginContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const Login: React.FC = () => {
  return (
    <LoginContainer>
      <h2>Login</h2>
      <hr/>
      <form>
        <TextField label="Username" />
        <TextField label="Password" type="password" />
        <button type="submit">Login</button>
      </form>
    </LoginContainer>
  );
};

export default Login;

