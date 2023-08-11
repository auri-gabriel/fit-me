import React from 'react';
import styled from 'styled-components';

interface FoodCardProps {
  title: string;
  imageUrl: string;
  region: string;
  rating: number;
  arrivalTime: string;
}

const Card = styled.div`
  background-color: #F8F8F8;
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 20px
`;

const Image = styled.img`
  width: 256px;
  height: 256px;
  max-height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const Title = styled.h3`
  margin-top: 10px;
  font-size: 20px;
  word-wrap: break-word;
  width: 256px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 256px;
`;

const Region = styled.span`
  color: #808080;
`;
const Rating = styled.span``;

const ArrivalTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 256px;
`;

const ArrivalIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;

const FoodCard: React.FC<FoodCardProps> = ({title, imageUrl, region, rating, arrivalTime}) => {
  return (
    <Card>
      <Image src={imageUrl} alt={title} />
      <Title>{title}</Title>
      <Details>
        <Region>
          {region}
        </Region>
        <Rating>
          ⭐{rating}
        </Rating>
      </Details>
      <ArrivalTime>
        <ArrivalIcon src='src/assets/arrival.svg' alt="Icon" />
        {arrivalTime}
      </ArrivalTime>
    </Card>
  );
};

export default FoodCard;

