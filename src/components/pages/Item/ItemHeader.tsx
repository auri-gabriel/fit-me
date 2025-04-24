import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ItemHeaderContainer = styled.div`
  background-color: #202020;
  color: white;
  display: flex;
  align-items: center;
  gap: 2rem;

  padding: 2rem 20rem;

  @media (max-width: 1440px) {
    padding: 5rem 10rem;
  }

  @media (max-width: 1024px) {
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
  & > p {
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
  background-color: #fff;
`;

const ItemOffers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  border-radius: 20px;
  border: 2px dashed #fc8019;
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

const ItemHeader: React.FC<ItemHeaderProps> = ({ restaurantData }) => {
  return (
    <div className='bg-secondary text-white'>
      <div className='container'>
        <div className='row py-4'>
          <div className='col-12 col-lg-3 rounded-3 overflow-hidden'>
            <img
              className='object-fit-cover'
              src='/src/assets/placeholder2.png'
              alt='Item'
            />
          </div>
          <div className='col-6'>
            <h2 className=''>{restaurantData.name}</h2>
            <p>{restaurantData.location}</p>
            <div className='d-flex flex-row justify-content-between'>
              <div>
                <p>⭐{restaurantData.rating}</p>
                <p>100+ ratings</p>
              </div>
              <div className='vertical-separator' />
              <div>
                <p>{restaurantData.deliveryTime} Mins</p>
                <p>Delivery Time</p>
              </div>
              <div className='vertical-separator' />
              <div>
                <p>{restaurantData.cost}</p>
                <p>Cost for two</p>
              </div>
            </div>
          </div>
          <div className='col-12 col-xl-3  p-5'>
            <h3 className='text-primary'>Offers</h3>
            <p>50% off up to ₹100 | Use code TRYNEW</p>
            <p>20% off | Use code PARTY</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemHeader;
