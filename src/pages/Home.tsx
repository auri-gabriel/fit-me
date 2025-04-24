import React, { useState, useEffect } from 'react';
import FoodCard from '../components/Cards/FoodCard';
import fetchRestaurants from '../api/restaurantApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import '../styles/components/home/carousel.scss';

interface Restaurant {
  node: any;
  name: string;
  image: string;
  location: string;
  rating: number;
}

const Home: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const images = ['Image-1.png', 'Image-2.png', 'Image-3.png'];

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
      <div className='bg-primary-100 mb-4'>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-6 d-flex flex-column justify-content-center'>
              <p className='fs-3xl'>
                {' '}
                Premium <span className='text-primary'>quality</span> Food for
                your <span className='text-primary'>healthy & Daily Life</span>
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
                spaceBetween={50}
                slidesPerView={1.5}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className='custom-swiper'
              >
                {images.map((img, index) => {
                  const diff = Math.abs(activeIndex - index);
                  let scaleClass = 'scale-small';

                  if (diff === 0) scaleClass = 'scale-large';
                  else if (diff === 1 || diff === images.length - 1)
                    scaleClass = 'scale-medium';

                  return (
                    <SwiperSlide key={index} className={scaleClass}>
                      <img
                        src={`src/assets/home/${img}`}
                        alt=''
                        style={{
                          height: '600px',
                          transition: 'transform linear 0.4s',
                        }}
                      />
                    </SwiperSlide>
                  );
                })}
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
