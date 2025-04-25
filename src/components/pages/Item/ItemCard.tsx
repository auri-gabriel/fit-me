import React from 'react';

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

const ItemCard: React.FC<ItemCardProps> = ({ dish }) => {
  return (
    <div className='card border-0 mb-4 p-3 d-flex flex-md-row flex-column-reverse align-items-center'>
      <div className='flex-grow-1'>
        <h3 className='text-black fs-lg fw-bold'>{dish.name}</h3>
        <p className='text-black fs-base fw-bold'>${dish.price}</p>
        <p className='text-grey-600 fs-base fw-normal'>{dish.description}</p>
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center position-relative flex-grow-1 mb-md-0 mb-3'>
        <img
          src='/src/assets/placeholder.png'
          alt={dish.name}
          className='rounded-3 object-fit-cover'
          style={{ aspectRatio: 1 / 1, maxHeight: '160px' }}
        />
        <button
          className='btn btn-light position-absolute'
          style={{
            bottom: '-24px',
            color: '#1AC84B',
            borderRadius: '10px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.10)',
          }}
        >
          Add +
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
