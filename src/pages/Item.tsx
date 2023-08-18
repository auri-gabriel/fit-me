import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ItemHeader from '../components/pages/Item/ItemHeader';
import ItemBody from '../components/pages/Item/ItemBody';
import {useParams} from 'react-router-dom';

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

  useEffect(() => {
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
          headers: {
            'X-Parse-Application-Id': 'DSiIkHz2MVbCZutKS7abtgrRVsiLNNGcs0L7VsNL',
            'X-Parse-Master-Key': '0cpnqkSUKVkIDlQrNxameA6OmjxmrA72tsUMqVG9',
            'X-Parse-Client-Key': 'zXOqJ2k44R6xQqqlpPuizAr3rs58RhHXfU7Aj20V',
            'Content-Type': 'application/json',
          },
        },
      )
      .then((response) => {
        setRestaurant(response.data.data.fitMe);
        setTopDishes(response.data.data.fitMe.topDishes);
        console.log(response.data.data.fitMe);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <ItemHeader restaurantData={restaurant} />
      <ItemBody dishes={topDishes} />
    </>
  );
};

export default Item;

