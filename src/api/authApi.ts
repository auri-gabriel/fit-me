import axios from 'axios';

export const signupUser = async (username: string, password: string) => {
  try {
    const response = await axios.post(
      'https://parseapi.back4app.com/graphql',
      {
        query: `
          mutation SignUp($username: String!, $password: String!) {
            signUp(input: {
              fields: {
                username: $username,
                password: $password
              }
            }) {
              viewer {
                user {
                  id
                  createdAt
                }
                sessionToken
              }
            }
          }
        `,
        variables: {
          username,
          password,
        },
      },
      {
        headers: {
          'X-Parse-Application-Id': 'DSiIkHz2MVbCZutKS7abtgrRVsiLNNGcs0L7VsNL',
          'X-Parse-Master-Key': '0cpnqkSUKVkIDlQrNxameA6OmjxmrA72tsUMqVG9',
          'X-Parse-Client-Key': 'zXOqJ2k44R6xQqqlpPuizAr3rs58RhHXfU7Aj20V',
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.data.signUp;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await axios.post(
      'https://parseapi.back4app.com/graphql',
      {
        query: `
          mutation LogIn($username: String!, $password: String!) {
            logIn(input: {
              username: $username,
              password: $password
            }) {
              viewer {
                user {
                  id
                  createdAt
                  updatedAt
                  username
                }
                sessionToken
              }
            }
          }
        `,
        variables: {
          username,
          password,
        },
      },
      {
        headers: {
          'X-Parse-Application-Id': 'DSiIkHz2MVbCZutKS7abtgrRVsiLNNGcs0L7VsNL',
          'X-Parse-Master-Key': '0cpnqkSUKVkIDlQrNxameA6OmjxmrA72tsUMqVG9',
          'X-Parse-Client-Key': 'zXOqJ2k44R6xQqqlpPuizAr3rs58RhHXfU7Aj20V',
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.data.logIn;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};
