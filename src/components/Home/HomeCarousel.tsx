import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { useState } from 'react';

const HomeCarousel: React.FC = ({}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = ['Image-1.png', 'Image-2.png', 'Image-3.png'];

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1.5}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 1.2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 1.1,
          spaceBetween: 0,
        },
        992: {
          slidesPerView: 1.5,
          spaceBetween: 0,
        },
        1200: {
          slidesPerView: 1.5,
          spaceBetween: 30,
        },
      }}
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
              className='w-100 h-auto'
              style={{
                height: '600px',
                transition: 'transform linear 0.4s',
              }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeCarousel;
