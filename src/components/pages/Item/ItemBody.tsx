import React from 'react';
import styled from 'styled-components';

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

const ItemBody = () => {
  return (
    <Container>
      <FiltersColumn>
        Filters
      </FiltersColumn>
      <ItemsColumn>
        Items
      </ItemsColumn>
      <CartColumn>
        Cart
      </CartColumn>
    </Container>
  );
};

export default ItemBody;

