import axios from 'axios';

const fetchRestaurants = async () => {
  try {
    const response = await axios.post(
      'https://parseapi.back4app.com/graphql',
      {
        query: `
          query FindFitMe {
            fitMes {
              count,
              edges {
                node {
                  id
                  name
                  rating
                  location
                }
              }
            }
          }
        `,
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
    return response.data.data.fitMes.edges;
  } catch (error) {
    console.error('Error fetching restaurant data:', error);
    throw error;
  }
};

export default fetchRestaurants;
