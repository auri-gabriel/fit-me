import axios from 'axios';

const fetchItemDetails = async (id: string) => {
  try {
    const username = 'user';
    const password = 'password';

    const response = await axios.post(
      'http://localhost:8080/graphql',
      {
        query: `
          query getRestaurant($id: ID!) {
              getRestaurant(id: $id){
                id
                name
                rating
                location
                topDishes {
                  id
                  name
                  price
                  image
                  description
                }
              }
          }
        `,
        variables: {
          id: id,
        },
      },
      {
        auth: {
          username,
          password,
        },
      }
    );
    console.log(response.data);
    return response.data.data.getRestaurant;
  } catch (error) {
    console.error('Error fetching item details:', error);
    throw error;
  }
};

export default fetchItemDetails;
