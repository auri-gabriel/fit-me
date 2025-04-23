import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FoodCard from '../components/Cards/FoodCard';
import fetchRestaurants from '../api/restaurantApi';

interface Restaurant {
  node: any;
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

  @media (max-width: 1024px) {
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

  @media (max-width: 1440px) {
    padding: 0 10rem;
  }

  @media (max-width: 1024px) {
    padding: 0;
    h2 {
      text-align: center;
    }
  }
`;

const Home: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRestaurants();
        setRestaurants(data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <HomeContainer>
      <h2>Restaurants</h2>
      <RestaurantsContainer>
        {restaurants.map((restaurant, index) => (
          <FoodCard
            key={index}
            title={restaurant.name}
            imageUrl="src/assets/placeholder.png"
            region={restaurant.location}
            rating={restaurant.rating}
            arrivalTime="30 min"
            url={`/restaurant/${restaurant.id}`}
          />
        ))}
      </RestaurantsContainer>
    </HomeContainer>
  );
};

export default Home;

