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
          <div className='d-flex flex-column justify-content-center col-12 pt-4 pt-xl-0 col-lg-8 px-xl-4 col-xl-4 p-2'>
            <h2 className=''>{restaurantData.name}</h2>
            <p className='mb-5'>{restaurantData.location}</p>
            <div className='d-flex flex-column flex-sm-row justify-content-between'>
              <hr className='d-sm-none' />
              <div>
                <p className='m-0'>⭐{restaurantData.rating}</p>
                <p className='m-0'>100+ ratings</p>
              </div>
              <div className='d-none d-sm-block vertical-divider bg-white' />
              <hr className='d-sm-none' />
              <div>
                <p className='m-0'>{restaurantData.deliveryTime} Mins</p>
                <p className='m-0'>Delivery Time</p>
              </div>
              <div className='d-none d-sm-block vertical-divider bg-white' />
              <hr className='d-sm-none' />
              <div>
                <p>{restaurantData.cost}</p>
                <p>Cost for two</p>
              </div>
              <hr className='d-sm-none' />
            </div>
          </div>
          <div className='item-header__offers rounded-5 mt-4 mt-xl-0 offset-xl-1 border-primary col-12 col-xl-3 p-5'>
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
