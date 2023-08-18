import React from 'react';
import styled from 'styled-components';
import ItemCard from './ItemCard';
import Cart from './Cart.tsx';

interface Dish {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
}

interface ItemBodyProps {
  dishes: Dish[];
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 20rem;

  @media (max-width: 1440px){
    padding: 5rem 10rem;
  }

  @media (max-width: 1024px){
    padding: 5rem 5rem;
    flex-direction: column;
  }
`;

const FiltersColumn = styled.div`
  flex: 1;
  padding: 20px;
`;

const ItemsColumn = styled.div`
  flex: 2;
  padding: 20px;
`;

const CartColumn = styled.div`
  flex: 1;
  padding: 20px;
`;

const ItemBody: React.FC<ItemBodyProps> = ({dishes}) => {
  const cartItems: CartItem[] = [
    {id: '1', name: 'Item 1', quantity: 2, price: 10},
    {id: '2', name: 'Item 2', quantity: 1, price: 15},
  ];

  return (
    <Container>
      <FiltersColumn>
        Top Dishes
      </FiltersColumn>
      <ItemsColumn>
        {dishes.map((dish) => (
          <ItemCard dish={dish} />
        ))}
      </ItemsColumn>
      <CartColumn>
        <Cart cartItems={cartItems} />
      </CartColumn>
    </Container>
  );
};

export default ItemBody;

