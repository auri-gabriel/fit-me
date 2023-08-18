import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const ItemHeaderContainer = styled.div`
  background-color: #202020;
  color: white;
  display: flex;
  align-items: center;
  gap: 2rem;

  padding: 2rem 20rem;

  @media (max-width: 1440px){
    padding: 5rem 10rem;
  }

  @media (max-width: 1024px){
    padding: 5rem 5rem;
    flex-direction: column;
  }
`;

const ItemImage = styled.img`
  max-width: 400px;
  height: auto;
`;

const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h2 {
    font-size: 2rem;
    font-weight: 600;
  }
  &>p{
    font-size: 1rem;
    text-transform: lowercase;
  }
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-top: 10px;
`;

const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const VerticalRuler = styled.div`
  width: 1px;
  background-color: #FFF;
`;

const ItemOffers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  border-radius: 20px;
  border: 2px dashed #FC8019;
`;

interface RestaurantData {
  name: string;
  location: string;
  rating: number;
  deliveryTime: string;
  cost: string;
  offers: string[];
  image: string;
}

interface ItemHeaderProps {
  restaurantData: RestaurantData;
}

const ItemHeader: React.FC<ItemHeaderProps> = ({restaurantData}) => {
  return (
    <ItemHeaderContainer>
      <ItemImage src="/src/assets/placeholder2.png" alt="Item" />
      <ItemDescription>
        <h2>{restaurantData.name}</h2>
        <p>{restaurantData.location}</p>
        <ItemDetails>
          <ItemDetail>
            <p>⭐{restaurantData.rating}</p>
            <p>100+ ratings</p>
          </ItemDetail>
          <VerticalRuler />
          <ItemDetail>
            <p>{restaurantData.deliveryTime}</p>
            <p>Delivery Time</p>
          </ItemDetail>
          <VerticalRuler />
          <ItemDetail>
            <p>{restaurantData.cost}</p>
            <p>Cost for two</p>
          </ItemDetail>
        </ItemDetails>
      </ItemDescription>
      <ItemOffers>
        <h3>Offers</h3>
        <p>50% off up to ₹100 | Use code TRYNEW</p>
        <p>20% off | Use code PARTY</p>
      </ItemOffers>
    </ItemHeaderContainer>
  );
}
export default ItemHeader;
