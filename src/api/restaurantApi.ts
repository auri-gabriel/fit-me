import axios from 'axios';

const fetchRestaurants = async () => {
  try {
    const username = 'user';
    const password = 'password';

    const response = await axios.post(
      'http://localhost:8080/graphql',
      {
        query: `
          query {
            getAllRestaurants {
              id
              name
              rating
              location
              deliveryTime
          }
        }
        `,
      },
      {
        auth: {
          username,
          password,
        },
      }
    );
    console.log(response.data);

    return response.data.data.getAllRestaurants;
  } catch (error) {
    console.error('Error fetching restaurant data:', error);
    throw error;
  }
};

export default fetchRestaurants;
