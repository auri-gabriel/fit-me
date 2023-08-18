import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ItemHeader from '../components/pages/Item/ItemHeader';
import ItemBody from '../components/pages/Item/ItemBody';

const Item: React.FC = () => {
  const itemData = {
    name: 'LunchBox - Meals and Thalis',
    location: 'North Indian, Punjabi',
    rating: 4.5,
    deliveryTime: '30-45 mins',
    cost: '$20',
    offers: ['10% off', 'Free Delivery'],
    imgUrl: 'src/assets/placeholder2.png',
  };

  return (
      <>
          <ItemHeader itemData={itemData} />
          <ItemBody />
      </>
  );
};

export default Item;

