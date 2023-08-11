import React from 'react';
import styled from 'styled-components';
import FoodCard from '../components/Cards/FoodCard';

const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
  gap: 1.5rem;
`;

const Home: React.FC = () => {
  const foodItems = [
    {
      title: 'Burger',
      description: 'A delicious and juicy burger.',
      imageUrl: 'src/assets/placeholder.png',
      region: 'United States',
      rating: 4.5
    },
    {
      title: 'Pizza',
      description: 'Cheesy and mouthwatering pizza.',
      imageUrl: 'src/assets/placeholder.png',
      region: 'Italy',
      rating: 4.5
    },
  ];

  return (
    <HomeContainer>
      {foodItems.map((item, index) => (
        <FoodCard
          key={index}
          title={item.title}
          imageUrl={item.imageUrl}
          region={item.region}
          rating={item.rating}
          arrivalTime='30 min'
        />
      ))}
    </HomeContainer>
  );
};

export default Home;

