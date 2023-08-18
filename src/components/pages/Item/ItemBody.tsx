import React from 'react';
import styled from 'styled-components';
import ItemCard from './ItemCard';

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
`;

const FiltersColumn = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f1f1f1;
`;

const ItemsColumn = styled.div`
  flex: 2;
  padding: 20px;
  background-color: #ffffff;
`;

const CartColumn = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f1f1f1;
`;

const ItemBody: React.FC<ItemBodyProps> = ({ dishes }) => {
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
        Cart
      </CartColumn>
    </Container>
  );
};

export default ItemBody;

