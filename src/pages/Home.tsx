import React, { useState, useEffect } from 'react';
import FoodCard from '../components/Cards/FoodCard';
import fetchRestaurants from '../api/restaurantApi';

interface Restaurant {
  node: any;
  name: string;
  image: string;
  location: string;
  rating: number;
}

const Home: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRestaurants();
        setRestaurants(data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container my-4'>
      <h2 className='mb-4'>Restaurants</h2>
      <div className='d-flex flex-wrap gap-3 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5'>
        {restaurants.map((restaurant, index) => (
          <FoodCard
            key={index}
            title={restaurant.name}
            imageUrl="src/assets/placeholder.png"
            region={restaurant.location}
            rating={restaurant.rating}
            arrivalTime="30 min"
            url={`/restaurant/${restaurant.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

