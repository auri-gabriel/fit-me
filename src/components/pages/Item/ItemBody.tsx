import React from 'react';
import ItemCard from './ItemCard';

interface Dish {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
}

interface TopDishes {
  name: string;
  image: string;
  location: string;
  rating: number;
}

interface ItemBodyProps {
  dishes: Dish[] | TopDishes[];
}

const ItemBody: React.FC<ItemBodyProps> = ({ dishes }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-lg-2'>Top Dishes</div>
        <div className='col-12 col-lg-7'>
          {dishes.map((dish) => (
            <ItemCard dish={dish} />
          ))}
        </div>
        <div className='d-none d-lg-flex col-lg-3'>Cart</div>
      </div>
    </div>
  );
};

export default ItemBody;
