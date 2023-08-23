import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ItemHeader from '../components/pages/Item/ItemHeader';
import ItemBody from '../components/pages/Item/ItemBody';
import {useParams} from 'react-router-dom';
import headers from '../graphql/headers';
import styled from 'styled-components';
import Spinner from '../components/Spinner/Spinner';


const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

interface Restaurant {
  name: string;
  image: string;
  location: string;
  rating: number;
}

interface TopDishes {
  name: string;
  image: string;
  location: string;
  rating: number;
}

interface Item {
  name: string;

}


const Item: React.FC = () => {
  const {id} = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant[]>([]);
  const [topDishes, setTopDishes] = useState<TopDishes[]>([]);
  const [loading, setLoading] = useState<string>('idle');

  useEffect(() => {
    setLoading('true');
    axios
      .post(
        'https://parseapi.back4app.com/graphql',
        {
          query: `
        query GetFitMe($id: ID!) {
          fitMe(id: $id) {
            id
            name
            createdAt
            updatedAt
            rating
            deliveryTime
            image
            location
            topDishes {
              ... on Dish {
                  id
                  name
                  price
                  image
                  description
              }
            }
          }
        }
        `,
          variables: {
            id: id,
          },
        },
        {
          headers: headers,
        },
      )
      .then((response) => {
        setLoading('false');
        setRestaurant(response.data.data.fitMe);
        setTopDishes(response.data.data.fitMe.topDishes);
        console.log(response.data.data.fitMe);
      })
      .catch((error) => {
        setLoading('false');
        console.error(error);
      });
  }, []);
  return (
    <>
      {loading === 'true' && (<LoadingContainer><Spinner size="36px" borderWidth="4px" /></LoadingContainer>)}
      {loading === 'false' && (
        <>
          <ItemHeader restaurantData={restaurant} />
          <ItemBody dishes={topDishes} />
        </>
      )}
    </>
  );
};

export default Item;

