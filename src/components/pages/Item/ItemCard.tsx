import React from 'react';
import styled from 'styled-components';

interface Dish {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
}

interface ItemCardProps {
  dish: Dish;
}

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  margin-bottom: 20px;
`;

const DishInfo = styled.div`
  flex: 1;
`;

const DishImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const DishImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
`;

const AddButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const ItemCard: React.FC<ItemCardProps> = ({ dish }) => {
  return (
    <CardContainer>
      <DishInfo>
        <h3>{dish.name}</h3>
        <p>{dish.description}</p>
        <p>Price: ${dish.price}</p>
      </DishInfo>
      <DishImageContainer>
        <DishImage src={dish.image} alt={dish.name} />
        <AddButton>Add +</AddButton>
      </DishImageContainer>
    </CardContainer>
  );
};

export default ItemCard;

