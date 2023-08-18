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
  margin-bottom: 20px;
  h3{
    color: #202020;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media (max-width: 1024px){
      flex-direction: column-reverse;
  }
`;

const DishInfo = styled.div`
  flex: 1;
`;

const DishImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 1024px){
      margin-bottom: calc(24px + 8px);
  }
`;

const DishImage = styled.img`
  max-width: 160px;
  max-height: 160px;
  border-radius: 10px;
`;

const AddButton = styled.button`
  position: absolute;
  bottom: -24px;
  color: #1AC84B;
  border: none;
  display: inline-flex;
  padding: 15px 25px;
  justify-content: center;
  align-items: center;
  gap: 10px; 
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.10);
`;
const Price = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal; 
`;
const Description = styled.p`
  color: #808080;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

const ItemCard: React.FC<ItemCardProps> = ({dish}) => {
  return (
    <CardContainer>
      <DishInfo>
        <h3>{dish.name}</h3>
        <Price>
          ${dish.price}
        </Price>
        <Description>
          {dish.description}
        </Description>
      </DishInfo>
      <DishImageContainer>
        <DishImage src="/src/assets/placeholder.png" alt={dish.name} />
        <AddButton>Add +</AddButton>
      </DishImageContainer>
    </CardContainer>
  );
};

export default ItemCard;

