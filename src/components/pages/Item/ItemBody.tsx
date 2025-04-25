import React, { useState } from 'react';
import ItemCard from './ItemCard';

interface Category {
  id: string;
  name: string;
}
interface Dish {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  category: Category;
}

interface ItemBodyProps {
  dishes: Dish[];
  categories: Category[];
}

const ItemBody: React.FC<ItemBodyProps> = ({ dishes, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0].id
  );

  const filteredDishes = dishes.filter(
    (dish) => dish.category.id === selectedCategory
  );

  return (
    <div className='container'>
      <div className='row my-5'>
        <div className='col-12 col-lg-2 border-end'>
          <ul className='nav flex-column'>
            {categories.map((category) => (
              <li
                className='nav-item d-flex justify-content-lg-end'
                key={category.id}
              >
                <button
                  className={`nav-link fw-bold ${
                    selectedCategory === category.id
                      ? 'text-primary'
                      : 'text-secondary'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
          <hr className='d-sm-none' />
        </div>
        <div className='col-12 col-lg-7'>
          {filteredDishes.map((dish) => (
            <ItemCard key={dish.id} dish={dish} />
          ))}
        </div>

        <div className='d-none d-lg-flex col-lg-3'>Cart</div>
      </div>
    </div>
  );
};

export default ItemBody;
