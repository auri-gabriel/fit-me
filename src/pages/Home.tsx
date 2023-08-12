import React from 'react';
import styled from 'styled-components';
import FoodCard from '../components/Cards/FoodCard';

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
  const foodItems = [
    {
      title: 'Ramachandra Parlour',
      description: 'A delicious and juicy burger.',
      imageUrl: 'src/assets/placeholder.png',
      region: 'United States',
      rating: 4.5
    },
    {
      title: 'asdfk;jlasd;ljkl;kjs ad;ljkfl;jkdasf;ljksdf',
      description: 'Cheesy and mouthwatering pizza.',
      imageUrl: 'src/assets/placeholder.png',
      region: 'Italy',
      rating: 4.5
    },
    {
      title: 'asdfk;jlasd;ljkl;kjs ad;ljkfl;jkdasf;ljksdf',
      description: 'Cheesy and mouthwatering pizza.',
      imageUrl: 'src/assets/placeholder.png',
      region: 'Italy',
      rating: 4.5
    },
    {
      title: 'asdfk;jlasd;ljkl;kjs ad;ljkfl;jkdasf;ljksdf',
      description: 'Cheesy and mouthwatering pizza.',
      imageUrl: 'src/assets/placeholder.png',
      region: 'Italy',
      rating: 4.5
    },
    {
      title: 'asdfk;jlasd;ljkl;kjs ad;ljkfl;jkdasf;ljksdf',
      description: 'Cheesy and mouthwatering pizza.',
      imageUrl: 'src/assets/placeholder.png',
      region: 'Italy',
      rating: 4.5
    },
    {
      title: 'asdfk;jlasd;ljkl;kjs ad;ljkfl;jkdasf;ljksdf',
      description: 'Cheesy and mouthwatering pizza.',
      imageUrl: 'src/assets/placeholder.png',
      region: 'Italy',
      rating: 4.5
    },
    {
      title: 'asdfk;jlasd;ljkl;kjs ad;ljkfl;jkdasf;ljksdf',
      description: 'Cheesy and mouthwatering pizza.',
      imageUrl: 'src/assets/placeholder.png',
      region: 'Italy',
      rating: 4.5
    },
    {
      title: 'asdfk;jlasd;ljkl;kjs ad;ljkfl;jkdasf;ljksdf',
      description: 'Cheesy and mouthwatering pizza.',
      imageUrl: 'src/assets/placeholder.png',
      region: 'Italy',
      rating: 4.5
    },
  ];

  return (
    <HomeContainer>
      <h2>Restaurants</h2>
      <RestaurantsContainer>
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
      </RestaurantsContainer>
    </HomeContainer>
  );
};

export default Home;

