import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import FoodCard from '../components/Cards/FoodCard';
import headers from '../graphql/headers';

interface Restaurant {
  name: string;
  image: string;
  location: string;
  rating: number;
}

const RestaurantsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  margin: 1rem 0;

  @media (max-width: 1024px){
    justify-content: center;
  }
`;
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 18rem;
  
  h2 {
    font-size: 24px;
  }

  @media (max-width: 1440px){
    padding: 0 10rem;
  }

  @media (max-width: 1024px){
    padding: 0;
    h2 {
      text-align: center;
    }
  }
`;

const Home: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    axios
      .post(
        'https://parseapi.back4app.com/graphql',
        {
          query: `
            query FindFitMe {
              fitMes{
                count,
                edges{
                  node{
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
          headers: headers,
        },
      )
      .then(response => {
        console.log('Data:', response.data);
        setRestaurants(response.data.data.fitMes.edges);
      })
      .catch(error => {
        console.error('Error fetching restaurant data:', error);
      });
  }, []);

  return (
    <HomeContainer>
      <h2>Restaurants</h2>
      <RestaurantsContainer>
        {restaurants.map((restaurant, index) => (
          <FoodCard
            key={index}
            title={restaurant.node.name}
            imageUrl="src/assets/placeholder.png"
            region={restaurant.node.location}
            rating={restaurant.node.rating}
            arrivalTime='30 min'
            url={`/restaurant/${restaurant.node.id}`}
          />
        ))}
      </RestaurantsContainer>
    </HomeContainer>
  );
};

export default Home;

