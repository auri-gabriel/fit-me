import React, { useState, useEffect } from 'react';
import FoodCard from '../components/Cards/FoodCard';
import fetchRestaurants from '../api/restaurantApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

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
    <>
      <div className='bg-primary-200 mb-4'>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-6 d-flex flex-column justify-content-center'>
              <p className='fs-3xl'>
                {' '}
                Premium quality Food for your healthy & Daily Life
              </p>
              <p className='text-grey-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                deserunt sunt doloribus quos recusandae deleniti obcaecati,
                tenetur enim inventore ad! Mollitia sapiente a dignissimos,
                dolorum ullam quod velit illo eaque!
              </p>
            </div>
            <div className='col-6'>
              <Swiper
                modules={[Autoplay]}
                spaceBetween={75}
                slidesPerView={1.5}
                centeredSlides={false}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide>
                  <img
                    style={{
                      height: '600px',
                    }}
                    src='src/assets/home/Image-1.png'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    style={{
                      height: '600px',
                    }}
                    src='src/assets/home/Image-2.png'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    style={{
                      height: '600px',
                    }}
                    src='src/assets/home/Image-3.png'
                    alt=''
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className='container my-4'>
        <h2 className='mb-4'>Restaurants</h2>
        <div className='d-flex flex-wrap gap-3 row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5'>
          {restaurants.map((restaurant, index) => (
            <FoodCard
              key={index}
              title={restaurant.name}
              imageUrl='src/assets/placeholder.png'
              region={restaurant.location}
              rating={restaurant.rating}
              arrivalTime='30 min'
              url={`/restaurant/${restaurant.id}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
