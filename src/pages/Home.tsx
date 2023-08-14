import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import FoodCard from '../components/Cards/FoodCard';

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
    axios.get('https://parseapi.back4app.com/classes/FitMe', {
      headers: {
        'X-Parse-Application-Id': 'lrAPveloMl57TTby5U0S4rFPBrANkAhLUll8jFOh',
        'X-Parse-REST-API-Key': '8aqUBWOjOplfA6lstntyYsYVkt3RzpVtb8qU5x08'
      }
    })
      .then(response => {
        setRestaurants(response.data.results);
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
            title={restaurant.name}
            imageUrl={restaurant.image}
            region={restaurant.location}
            rating={restaurant.rating}
            arrivalTime='30 min'
          />
        ))}
      </RestaurantsContainer>
    </HomeContainer>
  );
};

export default Home;

