import axios from 'axios';

const fetchItemDetails = async (id: string) => {
  try {
    const response = await axios.post(
      'https://parseapi.back4app.com/graphql',
      {
        query: `
          query GetFitMe($id: ID!) {
            fitMe(id: $id) {
              id
              name
              createdAt
              updatedAt
              rating
              deliveryTime
              image
              location
              topDishes {
                ... on Dish {
                  id
                  name
                  price
                  image
                  description
                }
              }
            }
          }
        `,
        variables: {
          id: id,
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
    return response.data.data.fitMe;
  } catch (error) {
    console.error('Error fetching item details:', error);
    throw error;
  }
};

export default fetchItemDetails;
