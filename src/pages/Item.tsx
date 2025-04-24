import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemHeader from '../components/pages/Item/ItemHeader';
import ItemBody from '../components/pages/Item/ItemBody';
import fetchItemDetails from '../api/itemApi';

interface RestaurantData {
  name: string;
  location: string;
  rating: number;
  deliveryTime: string;
  cost: string;
  offers: string[];
  image: string;
}

interface TopDishes {
  name: string;
  image: string;
  location: string;
  rating: number;
}

const Item: React.FC = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState<RestaurantData | null>(null);
  const [topDishes, setTopDishes] = useState<TopDishes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchItemDetails(id!);
        setRestaurant(data);
        setTopDishes(data.topDishes);
      } catch (error) {
        console.error('Error fetching item details:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {restaurant && <ItemHeader restaurantData={restaurant} />}
      <ItemBody dishes={topDishes} />
    </>
  );
};

export default Item;
