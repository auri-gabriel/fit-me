import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';

interface Dish {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  category?: string;
}

interface ItemBodyProps {
  dishes: Dish[];
}

const ItemBody: React.FC<ItemBodyProps> = ({ dishes }) => {
  // Mocked categories
  const categories = [
    'Recommended',
    'Breakfast Box',
    'Lunch Box',
    'Combo Box',
    'Biriyani Box',
  ];

  const [selectedCategory, setSelectedCategory] =
    useState<string>('Recommended');
  const [dishesWithCategories, setDishesWithCategories] = useState<Dish[]>([]);

  // Assign random categories to dishes
  useEffect(() => {
    const dishesWithRandomCategories = dishes.map((dish) => ({
      ...dish,
      category: categories[Math.floor(Math.random() * categories.length)],
    }));
    setDishesWithCategories(dishesWithRandomCategories);
  }, [dishes]);

  const filteredDishes = dishesWithCategories.filter(
    (dish) => dish.category === selectedCategory
  );

  return (
    <div className='container'>
      <div className='row my-5'>
        <div className='col-12 col-lg-2 border-end'>
          <ul className='nav flex-column'>
            {categories.map((category) => (
              <li className='nav-item' key={category}>
                <button
                  className={`nav-link fw-bold ${
                    selectedCategory === category
                      ? 'text-primary'
                      : 'text-secondary'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
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
