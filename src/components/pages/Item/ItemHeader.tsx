import React from 'react';
interface RestaurantData {
  name: string;
  location: string;
  rating: number;
  deliveryTime: string;
  cost: string;
  offers: string[];
  image: string;
}

interface ItemHeaderProps {
  restaurantData: RestaurantData;
}

const ItemHeader: React.FC<ItemHeaderProps> = ({ restaurantData }) => {
  return (
    <div className='bg-secondary text-white'>
      <div className='container'>
        <div className='row py-4'>
          <div className='col-12 col-lg-4 col-xl-3 rounded-3 overflow-hidden'>
            <img
              className='object-fit-cover'
              src='/src/assets/placeholder2.png'
              alt='Item'
            />
          </div>
          <div className='d-flex flex-column justify-content-center col-12 pt-4 pt-xl-0 col-lg-8 px-lg-5 col-xl-5'>
            <div>
              <h2 className='m-0'>{restaurantData.name}</h2>
              <p className='mb-sm-5 text-grey-500'>{restaurantData.location}</p>
            </div>
            <div className='d-flex flex-column flex-sm-row justify-content-between'>
              <hr className='d-sm-none' />
              <div>
                <p className='m-0'>⭐{restaurantData.rating}</p>
                <p className='m-0'>100+ ratings</p>
              </div>
              <div className='d-none d-sm-block vertical-divider bg-white' />
              <hr className='d-sm-none' />
              <div>
                <p className='m-0'>{restaurantData.deliveryTime} Mins</p>
                <p className='m-0'>Delivery Time</p>
              </div>
              <div className='d-none d-sm-block vertical-divider bg-white' />
              <hr className='d-sm-none' />
              <div>
                <p>{restaurantData.cost}</p>
                <p>Cost for two</p>
              </div>
              <hr className='d-sm-none' />
            </div>
          </div>
          <div className='item-header__offers rounded-5 mt-4 mt-xl-0 offset-xl-1 border-primary col-12 col-xl-3 p-5'>
            <h3 className='text-primary'>Offers</h3>
            <p>50% off up to ₹100 | Use code TRYNEW</p>
            <p>20% off | Use code PARTY</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemHeader;
