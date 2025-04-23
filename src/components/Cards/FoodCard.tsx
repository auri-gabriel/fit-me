import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface FoodCardProps {
  title: string;
  imageUrl: string;
  region: string;
  rating: number;
  arrivalTime: string;
  url: string;
}

const FoodCard: React.FC<FoodCardProps> = ({
  title,
  imageUrl,
  region: location,
  rating,
  arrivalTime,
  url,
}) => {
  return (
    <Link to={url} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className='card bg-grey-100 p-3 border-1 border-grey-200 rounded-4'>
        <img
          className='object-fit-cover rounded-2'
          style={{ aspectRatio: 1 / 1 }}
          src={imageUrl}
          alt={title}
        />
        <h3 className='mt-3 fs-lg fw-bold'>{title}</h3>
        <div className='d-flex flex-row justify-content-between mt-2'>
          <span className='text-grey-600 fs-base'>{location}</span>
          <span>⭐ {rating}</span>
        </div>
        <div className='d-flex align-items-center justify-content-center mt-2 w-100'>
          <img
            style={{ width: '16px', height: '16px' }}
            className='mx-2'
            src='src/assets/arrival.svg'
            alt='Icon'
          />
          {arrivalTime}
        </div>
      </div>
    </Link>
  );
};

export default FoodCard;
